import React, { useState, useMemo } from 'react';
import { Place, CuisineCategory, PriceLevel } from '../types';
import { PLACES_DATA } from '../data/places';
import { SEOUL_IMAGES, getImageForCategory } from '../data/images';
import { Utensils, MapPin, Clock, ExternalLink, Filter, X, Sparkles, Flame, Dices, ChevronRight } from 'lucide-react';

interface EatSectionProps {
  onSelectPlace: (place: Place) => void;
  initialNeighbourhoodFilter?: string;
}

export const EatSection: React.FC<EatSectionProps> = ({
  onSelectPlace,
  initialNeighbourhoodFilter,
}) => {
  const [selectedNeighbourhood, setSelectedNeighbourhood] = useState<string>(
    initialNeighbourhoodFilter || 'All'
  );
  const [selectedCuisine, setSelectedCuisine] = useState<string>('All');
  const [selectedPrice, setSelectedPrice] = useState<string>('All');
  const [selectedMealType, setSelectedMealType] = useState<string>('All');
  const [selectedDietary, setSelectedDietary] = useState<string>('All');
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [highlightedPlaceId, setHighlightedPlaceId] = useState<string | null>(null);

  // Extract unique neighbourhoods from PLACES_DATA
  const neighbourhoods = useMemo(() => {
    const set = new Set<string>();
    PLACES_DATA.forEach((p) => set.add(p.neighbourhood.split('/')[0].trim()));
    return ['All', ...Array.from(set).sort()];
  }, []);

  const visualCategories = [
    { label: 'All', icon: '✨', image: SEOUL_IMAGES.foodSpread },
    { label: 'Korean BBQ', icon: '🥩', image: SEOUL_IMAGES.koreanBbq },
    { label: 'Korean Fried Chicken', icon: '🍗', image: SEOUL_IMAGES.koreanChimaek },
    { label: 'Street Food', icon: '🍢', image: SEOUL_IMAGES.streetFood },
    { label: 'Cafes & Bakeries', icon: '☕', image: SEOUL_IMAGES.cafeInterior },
    { label: 'Tteokbokki', icon: '🌶️', image: SEOUL_IMAGES.tteokbokki },
    { label: 'Ginseng Chicken', icon: '🍲', image: SEOUL_IMAGES.ginsengChicken },
    { label: 'Kalguksu', icon: '🍜', image: SEOUL_IMAGES.noodles },
    { label: 'Bibimbap', icon: '🍚', image: SEOUL_IMAGES.bibimbap },
    { label: 'Temple & Vegetarian', icon: '🥗', image: SEOUL_IMAGES.foodSpread },
    { label: 'Halal Friendly', icon: '🕌', image: SEOUL_IMAGES.foodSpread },
  ];

  const filteredPlaces = useMemo(() => {
    return PLACES_DATA.filter((place) => {
      // Neighbourhood filter
      if (selectedNeighbourhood !== 'All') {
        if (!place.neighbourhood.toLowerCase().includes(selectedNeighbourhood.toLowerCase())) {
          return false;
        }
      }

      // Cuisine filter
      if (selectedCuisine !== 'All' && place.category !== selectedCuisine) {
        return false;
      }

      // Price filter
      if (selectedPrice !== 'All' && place.priceLevel !== selectedPrice) {
        return false;
      }

      // Meal type filter
      if (selectedMealType !== 'All') {
        if (!place.mealType.includes(selectedMealType as any)) {
          return false;
        }
      }

      // Dietary filter
      if (selectedDietary !== 'All') {
        if (selectedDietary === 'Vegetarian' && !place.dietary.vegetarianFriendly) return false;
        if (selectedDietary === 'Vegan' && !place.dietary.veganOptions) return false;
        if (selectedDietary === 'Halal Friendly' && !place.dietary.halalFriendly) return false;
        if (selectedDietary === 'Pork-Free' && !place.dietary.porkFree) return false;
      }

      // Search keyword filter
      if (searchKeyword.trim()) {
        const kw = searchKeyword.toLowerCase();
        const text = `${place.name} ${place.koreanName} ${place.cuisine} ${place.knownFor} ${place.signatureDishes.join(' ')}`.toLowerCase();
        if (!text.includes(kw)) return false;
      }

      return true;
    });
  }, [
    selectedNeighbourhood,
    selectedCuisine,
    selectedPrice,
    selectedMealType,
    selectedDietary,
    searchKeyword,
  ]);

  const resetFilters = () => {
    setSelectedNeighbourhood('All');
    setSelectedCuisine('All');
    setSelectedPrice('All');
    setSelectedMealType('All');
    setSelectedDietary('All');
    setSearchKeyword('');
  };

  const handleRandomCraving = () => {
    const list = filteredPlaces.length > 0 ? filteredPlaces : PLACES_DATA;
    const random = list[Math.floor(Math.random() * list.length)];
    setHighlightedPlaceId(random.id);
    onSelectPlace(random);
  };

  const hasActiveFilters =
    selectedNeighbourhood !== 'All' ||
    selectedCuisine !== 'All' ||
    selectedPrice !== 'All' ||
    selectedMealType !== 'All' ||
    selectedDietary !== 'All' ||
    searchKeyword !== '';

  return (
    <section className="py-6 sm:py-10 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Header & Quick Action */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 text-[11px] font-semibold mb-1">
              <span>🍜</span>
              <span>Seoul Food Discovery</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
              Where to Eat in Seoul
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm mt-0.5">
              Authentic Korean BBQ, sizzling street carts, hanok noodle spots, and specialty roasteries.
            </p>
          </div>

          <button
            onClick={handleRandomCraving}
            className="self-start sm:self-auto px-4 py-2 bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 text-white rounded-xl text-xs font-bold shadow-xs flex items-center gap-2 cursor-pointer transition-all hover:scale-105"
          >
            <Dices className="w-4 h-4 animate-spin-slow" />
            <span>Surprise Craving! 🎲</span>
          </button>
        </div>

        {/* Visual Category Photo Carousel */}
        <div>
          <div className="text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2 px-1 flex items-center justify-between">
            <span>Popular Food Cravings</span>
            <span className="text-[11px] font-normal text-stone-400">Scroll to see all</span>
          </div>

          <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none">
            {visualCategories.map((cat) => {
              const isSelected = selectedCuisine === cat.label;
              return (
                <button
                  key={cat.label}
                  onClick={() => setSelectedCuisine(cat.label)}
                  className={`group relative shrink-0 w-28 sm:w-32 rounded-2xl overflow-hidden border transition-all cursor-pointer text-left ${
                    isSelected
                      ? 'border-rose-600 ring-2 ring-rose-500/50 shadow-sm scale-102'
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
                    <div className={`text-xs font-bold truncate ${isSelected ? 'text-rose-600' : 'text-stone-800'}`}>
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
                Filter Places ({filteredPlaces.length} spots)
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

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-2 text-xs">
            {/* Search Input */}
            <div className="col-span-2 sm:col-span-1">
              <input
                type="text"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                placeholder="Search dish or spot..."
                className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl text-xs focus:outline-none focus:border-stone-900"
              />
            </div>

            {/* Neighbourhood */}
            <div>
              <select
                value={selectedNeighbourhood}
                onChange={(e) => setSelectedNeighbourhood(e.target.value)}
                className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl text-xs font-medium focus:outline-none focus:border-stone-900 cursor-pointer"
              >
                {neighbourhoods.map((n) => (
                  <option key={n} value={n}>
                    Area: {n}
                  </option>
                ))}
              </select>
            </div>

            {/* Price */}
            <div>
              <select
                value={selectedPrice}
                onChange={(e) => setSelectedPrice(e.target.value)}
                className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl text-xs font-medium focus:outline-none focus:border-stone-900 cursor-pointer"
              >
                <option value="All">Price: All</option>
                <option value="$">$ (Under 15,000 KRW)</option>
                <option value="$$">$$ (15k - 40k KRW)</option>
                <option value="$$$">$$$ (40k - 100k KRW)</option>
                <option value="$$$$">$$$$ (Fine dining)</option>
              </select>
            </div>

            {/* Dietary */}
            <div>
              <select
                value={selectedDietary}
                onChange={(e) => setSelectedDietary(e.target.value)}
                className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl text-xs font-medium focus:outline-none focus:border-stone-900 cursor-pointer"
              >
                <option value="All">Diet: Any</option>
                <option value="Vegetarian">Vegetarian Friendly</option>
                <option value="Vegan">Vegan Options</option>
                <option value="Halal Friendly">Halal Friendly</option>
                <option value="Pork-Free">Pork-Free</option>
              </select>
            </div>

            {/* Meal Type */}
            <div className="col-span-2 sm:col-span-1">
              <select
                value={selectedMealType}
                onChange={(e) => setSelectedMealType(e.target.value)}
                className="w-full px-3 py-2 bg-stone-50 border border-stone-200 rounded-xl text-xs font-medium focus:outline-none focus:border-stone-900 cursor-pointer"
              >
                <option value="All">Meal: All Hours</option>
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
                <option value="Late Night">Late Night</option>
                <option value="Cafe/Snack">Cafe/Snack</option>
              </select>
            </div>
          </div>
        </div>

        {/* Places Grid - Rich with Visuals */}
        {filteredPlaces.length === 0 ? (
          <div className="bg-white rounded-2xl border border-stone-200 p-10 text-center space-y-3">
            <Utensils className="w-10 h-10 text-stone-300 mx-auto" />
            <div className="text-base font-bold text-stone-900">No food spots match those exact filters</div>
            <p className="text-xs text-stone-500 max-w-sm mx-auto">
              Try adjusting your dietary or price filters to discover more authentic Seoul eateries.
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
            {filteredPlaces.map((place) => {
              const imageSrc = place.imageUrl || getImageForCategory(place.category);
              const isSelected = highlightedPlaceId === place.id;

              return (
                <div
                  key={place.id}
                  onClick={() => onSelectPlace(place)}
                  className={`bg-white border rounded-2xl overflow-hidden hover:border-stone-400 transition-all shadow-xs hover:shadow-md flex flex-col justify-between group cursor-pointer ${
                    isSelected ? 'ring-2 ring-rose-500 border-rose-500' : 'border-stone-200/90'
                  }`}
                >
                  <div>
                    {/* Visual Card Image Banner */}
                    <div className="relative aspect-16/10 w-full overflow-hidden bg-stone-900">
                      <img
                        src={imageSrc}
                        alt={place.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-black/20" />

                      {/* Top Badges */}
                      <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                        <span className="bg-black/60 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded-full border border-white/20">
                          {place.category}
                        </span>
                        {place.dietary.vegetarianFriendly && (
                          <span className="bg-emerald-600/90 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                            🌱 Veg
                          </span>
                        )}
                        {place.dietary.halalFriendly && (
                          <span className="bg-amber-600/90 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                            🕌 Halal
                          </span>
                        )}
                      </div>

                      {/* Bottom-Right Price Badge */}
                      <div className="absolute bottom-2.5 right-2.5 bg-white/90 backdrop-blur-xs text-stone-900 text-[11px] font-mono font-bold px-2 py-0.5 rounded-lg shadow-xs">
                        {place.priceLevel}
                      </div>

                      {/* Bottom-Left Area Badge */}
                      <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1 text-white text-xs font-medium drop-shadow-sm">
                        <MapPin className="w-3.5 h-3.5 text-rose-400" />
                        <span>{place.neighbourhood}</span>
                      </div>
                    </div>

                    {/* Card Content - Clean & Bite-Sized */}
                    <div className="p-4 space-y-2.5">
                      <div>
                        <div className="flex items-baseline justify-between gap-2">
                          <h3 className="text-base font-serif font-bold text-stone-900 group-hover:text-rose-600 transition-colors">
                            {place.name}
                          </h3>
                        </div>
                        <div className="text-[11px] font-sans text-stone-500">{place.koreanName}</div>
                      </div>

                      {/* Signature Dish Pill */}
                      <div className="bg-rose-50 border border-rose-100 rounded-xl px-2.5 py-1.5 flex items-center gap-1.5 text-xs text-rose-950 font-medium">
                        <Flame className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                        <span className="truncate">Must-Try: <strong>{place.signatureDishes[0]}</strong></span>
                      </div>

                      {/* Bite-sized known for */}
                      <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                        {place.knownFor}
                      </p>

                      {/* Quick Tip */}
                      <div className="text-[11px] text-stone-500 bg-stone-50 p-2 rounded-lg border border-stone-100">
                        <span className="font-bold text-stone-700">Tip: </span>
                        <span className="line-clamp-1">{place.usefulTips}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="px-4 py-2.5 bg-stone-50/80 border-t border-stone-100 flex items-center justify-between text-xs">
                    <span className="text-[11px] text-stone-400 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-stone-400" />
                      <span className="truncate max-w-[140px]">{place.openingHours}</span>
                    </span>

                    <span className="text-xs font-bold text-stone-900 group-hover:text-rose-600 flex items-center gap-1 transition-colors">
                      <span>Details & Map</span>
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
