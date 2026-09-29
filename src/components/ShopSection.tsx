import React, { useState, useMemo } from 'react';
import { Shop, ShopCategory, PriceLevel } from '../types';
import { SHOPS_DATA } from '../data/shops';
import { SEOUL_IMAGES, getImageForCategory } from '../data/images';
import { ShoppingBag, MapPin, Clock, Tag, ExternalLink, Filter, X, Sparkles, ChevronRight, CheckCircle2 } from 'lucide-react';

interface ShopSectionProps {
  onSelectShop: (shop: Shop) => void;
  initialCategoryFilter?: string;
}

export const ShopSection: React.FC<ShopSectionProps> = ({
  onSelectShop,
  initialCategoryFilter,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    initialCategoryFilter || 'All'
  );
  const [selectedNeighbourhood, setSelectedNeighbourhood] = useState<string>('All');
  const [selectedPrice, setSelectedPrice] = useState<string>('All');
  const [searchKeyword, setSearchKeyword] = useState<string>('');

  const visualCategories = [
    { label: 'All', icon: '✨', image: SEOUL_IMAGES.seongsuStreet },
    { label: 'Olive Young Flagship', icon: '💄', image: SEOUL_IMAGES.skincareShop },
    { label: 'Korean Skincare & Beauty', icon: '🧴', image: SEOUL_IMAGES.skincareShop },
    { label: 'K-Fashion & Streetwear', icon: '🧢', image: SEOUL_IMAGES.fashionStore },
    { label: 'Designer Brands', icon: '🕶️', image: SEOUL_IMAGES.fashionStore },
    { label: 'Shopping Malls & Underground', icon: '🛍️', image: SEOUL_IMAGES.myeongdongStreet },
    { label: 'Department Stores', icon: '🏬', image: SEOUL_IMAGES.gangnam },
    { label: 'Souvenirs & Traditional Crafts', icon: '🏮', image: SEOUL_IMAGES.bukchonHanok },
    { label: 'Vintage & Thrift', icon: '🧥', image: SEOUL_IMAGES.hongdaeYouth },
    { label: 'K-Pop Goods & Albums', icon: '💿', image: SEOUL_IMAGES.kpop },
  ];

  const neighbourhoods = useMemo(() => {
    const set = new Set<string>();
    SHOPS_DATA.forEach((s) => set.add(s.neighbourhood.split('/')[0].trim()));
    return ['All', ...Array.from(set).sort()];
  }, []);

  const filteredShops = useMemo(() => {
    return SHOPS_DATA.filter((shop) => {
      if (selectedCategory !== 'All' && shop.category !== selectedCategory) {
        return false;
      }
      if (selectedNeighbourhood !== 'All') {
        if (!shop.neighbourhood.toLowerCase().includes(selectedNeighbourhood.toLowerCase())) {
          return false;
        }
      }
      if (selectedPrice !== 'All' && shop.priceLevel !== selectedPrice) {
        return false;
      }
      if (searchKeyword.trim()) {
        const kw = searchKeyword.toLowerCase();
        const text = `${shop.name} ${shop.koreanName} ${shop.whyVisit} ${shop.koreanBrands.join(' ')} ${shop.whatToBuy.join(' ')}`.toLowerCase();
        if (!text.includes(kw)) return false;
      }
      return true;
    });
  }, [selectedCategory, selectedNeighbourhood, selectedPrice, searchKeyword]);

  const resetFilters = () => {
    setSelectedCategory('All');
    setSelectedNeighbourhood('All');
    setSelectedPrice('All');
    setSearchKeyword('');
  };

  const hasActiveFilters =
    selectedCategory !== 'All' ||
    selectedNeighbourhood !== 'All' ||
    selectedPrice !== 'All' ||
    searchKeyword !== '';

  return (
    <section className="py-6 sm:py-10 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-pink-100 text-pink-800 text-[11px] font-semibold mb-1">
              <span>🛍️</span>
              <span>Seoul Shopping Directory</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
              Where to Shop in Seoul
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm mt-0.5">
              Olive Young flagships, K-beauty hotspots, designer pop-ups, and underground bargain alleys.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-900 px-3 py-1.5 rounded-xl text-xs font-semibold">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Passport = Instant Tax Refund at Register 💳</span>
          </div>
        </div>

        {/* Visual Category Photo Carousel */}
        <div>
          <div className="text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2 px-1 flex items-center justify-between">
            <span>Shopping Categories</span>
            <span className="text-[11px] font-normal text-stone-400">Scroll to view</span>
          </div>

          <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none">
            {visualCategories.map((cat) => {
              const isSelected = selectedCategory === cat.label;
              return (
                <button
                  key={cat.label}
                  onClick={() => setSelectedCategory(cat.label)}
                  className={`group relative shrink-0 w-28 sm:w-32 rounded-2xl overflow-hidden border transition-all cursor-pointer text-left ${
                    isSelected
                      ? 'border-pink-600 ring-2 ring-pink-500/50 shadow-sm scale-102'
                      : 'border-stone-200 hover:border-stone-400 bg-white'
                  }`}
                >
                  <div className="h-16 w-full relative overflow-hidden bg-stone-900">
                    <img
                      src={cat.image}
                      alt={cat.label}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <span className="absolute bottom-1 right-1.5 text-base">{cat.icon}</span>
                  </div>
                  <div className="p-2 bg-white">
                    <div className={`text-xs font-bold truncate ${isSelected ? 'text-pink-600' : 'text-stone-800'}`}>
                      {cat.label}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Filters Toolbar */}
        <div className="bg-white border border-stone-200/90 rounded-2xl p-4 shadow-2xs space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-stone-500" />
              <span className="text-xs font-bold text-stone-900 uppercase tracking-wider">
                Filter Shops ({filteredShops.length} spots)
              </span>
            </div>

            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                className="text-xs text-rose-600 hover:text-rose-800 font-semibold flex items-center gap-1 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
                <span>Reset Filters</span>
              </button>
            )}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 text-xs">
            <input
              type="text"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              placeholder="Search brand, item or shop..."
              className="col-span-2 sm:col-span-1 px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl text-xs focus:outline-none focus:border-stone-900"
            />

            <select
              value={selectedNeighbourhood}
              onChange={(e) => setSelectedNeighbourhood(e.target.value)}
              className="px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl text-xs font-medium focus:outline-none focus:border-stone-900 cursor-pointer"
            >
              {neighbourhoods.map((n) => (
                <option key={n} value={n}>
                  Area: {n}
                </option>
              ))}
            </select>

            <select
              value={selectedPrice}
              onChange={(e) => setSelectedPrice(e.target.value)}
              className="px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl text-xs font-medium focus:outline-none focus:border-stone-900 cursor-pointer"
            >
              <option value="All">Price Level: All</option>
              <option value="$">$ (Bargain & Budget)</option>
              <option value="$$">$$ (Affordable & High Street)</option>
              <option value="$$$">$$$ (Mid-range & Designer)</option>
              <option value="$$$$">$$$$ (Luxury)</option>
            </select>
          </div>
        </div>

        {/* Shops Grid */}
        {filteredShops.length === 0 ? (
          <div className="bg-white rounded-2xl border border-stone-200 p-10 text-center space-y-3">
            <ShoppingBag className="w-10 h-10 text-stone-300 mx-auto" />
            <div className="text-base font-bold text-stone-900">No shopping spots match those filters</div>
            <p className="text-xs text-stone-500 max-w-sm mx-auto">
              Try adjusting your category or neighborhood to browse Seoul's retail spots.
            </p>
            <button
              onClick={resetFilters}
              className="px-4 py-2 text-xs font-bold text-white bg-stone-900 rounded-xl hover:bg-stone-800 cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredShops.map((shop) => {
              const imageSrc = shop.imageUrl || getImageForCategory(shop.category);

              return (
                <div
                  key={shop.id}
                  onClick={() => onSelectShop(shop)}
                  className="bg-white border border-stone-200/90 rounded-2xl overflow-hidden hover:border-stone-400 transition-all shadow-xs hover:shadow-md flex flex-col justify-between group cursor-pointer"
                >
                  <div>
                    {/* Visual Card Image Banner */}
                    <div className="relative aspect-16/10 w-full overflow-hidden bg-stone-900">
                      <img
                        src={imageSrc}
                        alt={shop.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-black/20" />

                      {/* Category Tag */}
                      <div className="absolute top-2.5 left-2.5">
                        <span className="bg-black/60 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded-full border border-white/20">
                          {shop.category}
                        </span>
                      </div>

                      {/* Tax Refund Badge */}
                      <div className="absolute top-2.5 right-2.5">
                        <span className="bg-emerald-600/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs">
                          {shop.taxRefundInfo.includes('Instant') ? '✓ Instant Tax Refund' : 'Tax Refund'}
                        </span>
                      </div>

                      {/* Bottom-Right Price Badge */}
                      <div className="absolute bottom-2.5 right-2.5 bg-white/90 backdrop-blur-xs text-stone-900 text-[11px] font-mono font-bold px-2 py-0.5 rounded-lg shadow-xs">
                        {shop.priceLevel}
                      </div>

                      {/* Bottom-Left Area Badge */}
                      <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1 text-white text-xs font-medium drop-shadow-sm">
                        <MapPin className="w-3.5 h-3.5 text-pink-400" />
                        <span>{shop.neighbourhood}</span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-4 space-y-2.5">
                      <div>
                        <h3 className="text-base font-serif font-bold text-stone-900 group-hover:text-pink-600 transition-colors">
                          {shop.name}
                        </h3>
                        <div className="text-[11px] font-sans text-stone-500">{shop.koreanName}</div>
                      </div>

                      {/* Top Brands Pill Bar */}
                      {shop.koreanBrands.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                          {shop.koreanBrands.slice(0, 3).map((brand, i) => (
                            <span
                              key={i}
                              className="text-[10px] font-medium bg-stone-100 text-stone-700 px-2 py-0.5 rounded-md"
                            >
                              {brand}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Why Visit */}
                      <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                        {shop.whyVisit}
                      </p>

                      {/* What to Buy */}
                      <div className="text-[11px] text-stone-500 bg-stone-50 p-2 rounded-lg border border-stone-100">
                        <span className="font-bold text-stone-700">What to Buy: </span>
                        <span className="line-clamp-1">{shop.whatToBuy.join(', ')}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="px-4 py-2.5 bg-stone-50/80 border-t border-stone-100 flex items-center justify-between text-xs">
                    <span className="text-[11px] text-stone-400 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-stone-400" />
                      <span className="truncate max-w-[140px]">{shop.openingHours}</span>
                    </span>

                    <span className="text-xs font-bold text-stone-900 group-hover:text-pink-600 flex items-center gap-1 transition-colors">
                      <span>Store Info</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
