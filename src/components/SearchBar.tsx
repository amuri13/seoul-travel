import React, { useState, useEffect, useRef } from 'react';
import { Search, X, MapPin, Utensils, ShoppingBag, ArrowRight } from 'lucide-react';
import { performClientSearch, SearchResults } from '../services/searchService';
import { Place, Shop, Neighbourhood } from '../types';
import { SEOUL_IMAGES, getImageForCategory } from '../data/images';

interface SearchBarProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPlace: (place: Place) => void;
  onSelectShop: (shop: Shop) => void;
  onSelectNeighbourhood: (neighbourhood: Neighbourhood) => void;
  onAskAi?: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  isOpen,
  onClose,
  onSelectPlace,
  onSelectShop,
  onSelectNeighbourhood,
}) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResults | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
      setResults(null);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!query.trim()) {
      setResults(null);
      return;
    }
    const res = performClientSearch(query);
    setResults(res);
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-start justify-center pt-12 sm:pt-20 px-3 sm:px-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[82vh] animate-in zoom-in-95 duration-150">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-stone-200 gap-3">
          <Search className="w-5 h-5 text-stone-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search food, skincare, areas, subway..."
            className="w-full text-base text-stone-900 placeholder-stone-400 bg-transparent focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-stone-400 hover:text-stone-700 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs font-semibold text-stone-500 hover:text-stone-900 px-2.5 py-1 bg-stone-100 hover:bg-stone-200 rounded-lg cursor-pointer"
          >
            Esc
          </button>
        </div>

        {/* Results Body */}
        <div className="overflow-y-auto p-4 space-y-5">
          {!results || query.trim() === '' ? (
            <div className="space-y-4">
              <div className="text-xs uppercase tracking-wider text-stone-400 font-bold px-1">
                Quick Search Ideas:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  'Black pork BBQ',
                  'Tangerine farm',
                  'Salt bread & bakeries',
                  'Myeongdong shopping',
                  'Gyeongbokgung palace',
                  'Seongsu street fashion',
                  'Tosokchon samgyetang',
                  'Olive Young skincare'
                ].map((tag, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setQuery(tag);
                    }}
                    className="p-3 text-left bg-stone-50 hover:bg-rose-50 border border-stone-200/80 hover:border-rose-200 rounded-2xl text-xs text-stone-800 transition-colors flex items-center justify-between group cursor-pointer"
                  >
                    <span className="font-medium group-hover:text-rose-900">{tag}</span>
                    <Search className="w-3.5 h-3.5 text-stone-400 group-hover:text-rose-500 shrink-0 ml-2" />
                  </button>
                ))}
              </div>
            </div>
          ) : results.totalMatches === 0 ? (
            <div className="text-center py-10 space-y-3">
              <p className="text-sm text-stone-600">No exact matches found for "{query}".</p>
              <p className="text-xs text-stone-400">Try searching for "Jeju", "Myeongdong", "BBQ", "Seongsu", or "Bread".</p>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Places with Photos */}
              {results.places.length > 0 && (
                <div>
                  <div className="text-xs uppercase tracking-wider text-stone-500 font-bold mb-2 flex items-center gap-1.5">
                    <Utensils className="w-3.5 h-3.5 text-rose-500" />
                    <span>Food & Dining ({results.places.length})</span>
                  </div>
                  <div className="divide-y divide-stone-100 border border-stone-200 rounded-2xl overflow-hidden bg-white shadow-2xs">
                    {results.places.map((place) => {
                      const photo = place.imageUrl || getImageForCategory(place.category);

                      return (
                        <button
                          key={place.id}
                          onClick={() => {
                            onSelectPlace(place);
                            onClose();
                          }}
                          className="w-full p-3 text-left hover:bg-stone-50 transition-colors flex items-center gap-3.5 cursor-pointer group"
                        >
                          <img
                            src={photo}
                            alt={place.name}
                            className="w-14 h-14 rounded-xl object-cover shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-bold text-stone-900 flex items-center gap-2 group-hover:text-rose-600 transition-colors">
                              <span className="truncate">{place.name}</span>
                              <span className="text-xs text-stone-500 font-normal shrink-0">({place.koreanName})</span>
                            </div>
                            <div className="text-[11px] text-stone-500 mt-0.5 truncate">
                              {place.neighbourhood} · {place.category} · {place.priceLevel}
                            </div>
                            <div className="text-xs text-stone-600 truncate mt-0.5">
                              {place.signatureDishes[0]} · {place.knownFor}
                            </div>
                          </div>
                          <span className="text-xs font-bold text-stone-400 group-hover:text-rose-600 shrink-0 ml-1">
                            →
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Shops with Photos */}
              {results.shops.length > 0 && (
                <div>
                  <div className="text-xs uppercase tracking-wider text-stone-500 font-bold mb-2 flex items-center gap-1.5">
                    <ShoppingBag className="w-3.5 h-3.5 text-pink-500" />
                    <span>Shopping Destinations ({results.shops.length})</span>
                  </div>
                  <div className="divide-y divide-stone-100 border border-stone-200 rounded-2xl overflow-hidden bg-white shadow-2xs">
                    {results.shops.map((shop) => {
                      const photo = shop.imageUrl || getImageForCategory(shop.category);

                      return (
                        <button
                          key={shop.id}
                          onClick={() => {
                            onSelectShop(shop);
                            onClose();
                          }}
                          className="w-full p-3 text-left hover:bg-stone-50 transition-colors flex items-center gap-3.5 cursor-pointer group"
                        >
                          <img
                            src={photo}
                            alt={shop.name}
                            className="w-14 h-14 rounded-xl object-cover shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-bold text-stone-900 flex items-center gap-2 group-hover:text-pink-600 transition-colors">
                              <span className="truncate">{shop.name}</span>
                              <span className="text-xs text-stone-500 font-normal shrink-0">({shop.koreanName})</span>
                            </div>
                            <div className="text-[11px] text-stone-500 mt-0.5 truncate">
                              {shop.neighbourhood} · {shop.category} · {shop.priceLevel}
                            </div>
                            <div className="text-xs text-stone-600 truncate mt-0.5">
                              {shop.whyVisit}
                            </div>
                          </div>
                          <span className="text-xs font-bold text-stone-400 group-hover:text-pink-600 shrink-0 ml-1">
                            →
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Neighbourhoods */}
              {results.neighbourhoods.length > 0 && (
                <div>
                  <div className="text-xs uppercase tracking-wider text-stone-500 font-bold mb-2 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-blue-500" />
                    <span>Neighbourhoods ({results.neighbourhoods.length})</span>
                  </div>
                  <div className="divide-y divide-stone-100 border border-stone-200 rounded-2xl overflow-hidden bg-white shadow-2xs">
                    {results.neighbourhoods.map((n) => (
                      <button
                        key={n.id}
                        onClick={() => {
                          onSelectNeighbourhood(n);
                          onClose();
                        }}
                        className="w-full p-3 text-left hover:bg-stone-50 transition-colors flex items-center justify-between cursor-pointer group"
                      >
                        <div>
                          <div className="text-sm font-bold text-stone-900 group-hover:text-blue-600 flex items-center gap-2">
                            <span>{n.name}</span>
                            <span className="text-xs text-stone-500 font-normal">({n.koreanName})</span>
                          </div>
                          <div className="text-xs text-stone-600 line-clamp-1 mt-0.5">
                            "{n.character}"
                          </div>
                        </div>
                        <span className="text-xs font-bold text-stone-400 group-hover:text-blue-600 shrink-0 ml-2">
                          Explore →
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
