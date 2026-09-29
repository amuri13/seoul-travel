import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SearchBar } from './components/SearchBar';
import { ItinerarySection } from './components/ItinerarySection';
import { EatSection } from './components/EatSection';
import { ShopSection } from './components/ShopSection';
import { NeighbourhoodSection } from './components/NeighbourhoodSection';
import { ExploreSection } from './components/ExploreSection';
import { PlaceDetailModal } from './components/PlaceDetailModal';
import { Footer } from './components/Footer';

import { PLACES_DATA } from './data/places';
import { SHOPS_DATA } from './data/shops';
import { NEIGHBOURHOODS_DATA } from './data/neighborhoods';
import { FAMILY_ITINERARY } from './data/itinerary';
import { Place, Shop, Neighbourhood } from './types';
import { SEOUL_IMAGES, getImageForCategory } from './data/images';
import { ArrowRight, Sparkles, MapPin, Utensils, ShoppingBag, Train, BookOpen, ExternalLink, ShieldCheck, Flame, ChevronRight, Calendar, Heart, Hotel, Plane } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  const [selectedDetailItem, setSelectedDetailItem] = useState<Place | Shop | null>(null);
  const [detailType, setDetailType] = useState<'place' | 'shop'>('place');

  const [neighbourhoodFilterForEat, setNeighbourhoodFilterForEat] = useState<string>('All');
  const [neighbourhoodFilterForShop, setNeighbourhoodFilterForShop] = useState<string>('All');
  const [selectedNeighbourhoodId, setSelectedNeighbourhoodId] = useState<string>(
    NEIGHBOURHOODS_DATA[0].id
  );

  // Keyboard shortcut for search (/ or Command+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavigate = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openPlaceDetail = (place: Place) => {
    setSelectedDetailItem(place);
    setDetailType('place');
  };

  const openShopDetail = (shop: Shop) => {
    setSelectedDetailItem(shop);
    setDetailType('shop');
  };

  const handleSelectNeighbourhood = (n: Neighbourhood) => {
    setSelectedNeighbourhoodId(n.id);
  };

  const handleExploreFoodInArea = (areaName: string) => {
    setNeighbourhoodFilterForEat(areaName);
    setActiveTab('eat');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExploreShopInArea = (areaName: string) => {
    setNeighbourhoodFilterForShop(areaName);
    setActiveTab('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectNeighbourhoodFromExplore = (id: string) => {
    setSelectedNeighbourhoodId(id);
    setActiveTab('neighbourhoods');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 selection:bg-rose-100 selection:text-rose-900 font-sans">
      {/* Navigation Header */}
      <Header
        activeTab={activeTab}
        onTabChange={handleNavigate}
      />

      {/* Main Body */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <div>
            {/* Visual Hero */}
            <Hero
              onNavigate={handleNavigate}
              onSelectNeighbourhood={(id) => {
                setSelectedNeighbourhoodId(id);
                handleNavigate('neighbourhoods');
              }}
            />

            {/* Photo-Forward Highlights Showcase on Homepage */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14">
              {/* 0. Dedicated Family Itinerary Spotlight */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-stone-200 pb-3">
                  <div>
                    <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-rose-600 font-bold">
                      <Heart className="w-3.5 h-3.5 fill-rose-600" />
                      <span>Family Vacation Itinerary</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
                      Our 9-Day Winter Trip (8–16 Dec)
                    </h2>
                  </div>
                  <button
                    onClick={() => handleNavigate('itinerary')}
                    className="text-xs font-bold text-white bg-rose-600 hover:bg-rose-700 px-4 py-2 rounded-xl flex items-center gap-1.5 cursor-pointer shadow-xs transition-all hover:scale-102"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Open Full Day-by-Day Schedule</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {/* Phase 1: Incheon */}
                  <div
                    onClick={() => handleNavigate('itinerary')}
                    className="bg-white border border-stone-200/90 rounded-2xl overflow-hidden shadow-2xs hover:shadow-md hover:border-stone-400 transition-all flex flex-col justify-between group cursor-pointer"
                  >
                    <div>
                      <div className="relative aspect-16/10 w-full overflow-hidden bg-stone-900">
                        <img
                          src={SEOUL_IMAGES.heroSkyline}
                          alt="Incheon Airport arrival"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-black/20" />
                        <div className="absolute top-2.5 left-2.5">
                          <span className="bg-black/60 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded-full border border-white/20">
                            Day 0 · 8 Dec (Tue)
                          </span>
                        </div>
                        <div className="absolute bottom-2.5 left-2.5 text-white text-xs font-bold">
                          ✈️ Singapore ➔ Incheon
                        </div>
                      </div>
                      <div className="p-4 space-y-2">
                        <h3 className="text-base font-serif font-bold text-stone-900 group-hover:text-rose-600 transition-colors">
                          Arrival & Airport Transit Stay
                        </h3>
                        <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                          Depart SG 2:35 PM, arrive Incheon 10:00 PM. Check-in Best Western Incheon Airport (T1). Early morning AREX to Gimpo!
                        </p>
                        <div className="text-[11px] text-stone-500 bg-stone-50 p-2 rounded-lg border border-stone-100">
                          🏨 Best Western Incheon Airport (T1)
                        </div>
                      </div>
                    </div>
                    <div className="px-4 py-2.5 bg-stone-50/80 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-stone-900 group-hover:text-rose-600">
                      <span>View Day 0 Plan</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>

                  {/* Phase 2: Jeju Island */}
                  <div
                    onClick={() => handleNavigate('itinerary')}
                    className="bg-white border border-stone-200/90 rounded-2xl overflow-hidden shadow-2xs hover:shadow-md hover:border-stone-400 transition-all flex flex-col justify-between group cursor-pointer"
                  >
                    <div>
                      <div className="relative aspect-16/10 w-full overflow-hidden bg-stone-900">
                        <img
                          src={SEOUL_IMAGES.jejuRainbowRoad}
                          alt="Jeju Rainbow Road"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-black/20" />
                        <div className="absolute top-2.5 left-2.5">
                          <span className="bg-amber-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                            Days 1–3 · 9–12 Dec
                          </span>
                        </div>
                        <div className="absolute bottom-2.5 left-2.5 text-white text-xs font-bold">
                          🍊 Scenic Jeju Island
                        </div>
                      </div>
                      <div className="p-4 space-y-2">
                        <h3 className="text-base font-serif font-bold text-stone-900 group-hover:text-rose-600 transition-colors">
                          Tangerines, Black Pork & Cliffs
                        </h3>
                        <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                          Flight KE1097, rental car, Rainbow road, Gyulhyangi tangerine farm, Odolang garlic baguette, and Daepo Jusangjeolli Cliff!
                        </p>
                        <div className="text-[11px] text-stone-500 bg-stone-50 p-2 rounded-lg border border-stone-100">
                          🏨 Shilla Stay Plus Iho Tewoo (3 Nights)
                        </div>
                      </div>
                    </div>
                    <div className="px-4 py-2.5 bg-stone-50/80 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-stone-900 group-hover:text-rose-600">
                      <span>View Jeju Days</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>

                  {/* Phase 3: Seoul */}
                  <div
                    onClick={() => handleNavigate('itinerary')}
                    className="bg-white border border-stone-200/90 rounded-2xl overflow-hidden shadow-2xs hover:shadow-md hover:border-stone-400 transition-all flex flex-col justify-between group cursor-pointer"
                  >
                    <div>
                      <div className="relative aspect-16/10 w-full overflow-hidden bg-stone-900">
                        <img
                          src={SEOUL_IMAGES.myeongdongStreet}
                          alt="Seoul Myeongdong"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-black/20" />
                        <div className="absolute top-2.5 left-2.5">
                          <span className="bg-rose-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                            Days 4–8 · 12–16 Dec
                          </span>
                        </div>
                        <div className="absolute bottom-2.5 left-2.5 text-white text-xs font-bold">
                          🏙️ Downtown Seoul
                        </div>
                      </div>
                      <div className="p-4 space-y-2">
                        <h3 className="text-base font-serif font-bold text-stone-900 group-hover:text-rose-600 transition-colors">
                          Myeongdong, Seongsu & Palaces
                        </h3>
                        <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                          Flight KE1180 to Gimpo, Dongdaemun shopping, Seongsu salt bread & NYU NYU, Tosokchon samgyetang, and Gyeongbokgung!
                        </p>
                        <div className="text-[11px] text-stone-500 bg-stone-50 p-2 rounded-lg border border-stone-100">
                          🏨 Stanford Hotel Myeongdong (4 Nights)
                        </div>
                      </div>
                    </div>
                    <div className="px-4 py-2.5 bg-stone-50/80 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-stone-900 group-hover:text-rose-600">
                      <span>View Seoul Days</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>

              {/* 1. Food Scene Preview */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-stone-200 pb-3">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-rose-600 font-bold">
                      🍜 Taste of Korea
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
                      Iconic Dining & Bakery Highlights
                    </h2>
                  </div>
                  <button
                    onClick={() => handleNavigate('eat')}
                    className="text-xs font-bold text-stone-900 hover:text-rose-600 flex items-center gap-1 group cursor-pointer transition-colors"
                  >
                    <span>View all food & filters</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {PLACES_DATA.slice(0, 3).map((place) => {
                    const photo = place.imageUrl || getImageForCategory(place.category);

                    return (
                      <div
                        key={place.id}
                        onClick={() => openPlaceDetail(place)}
                        className="bg-white border border-stone-200/90 rounded-2xl overflow-hidden shadow-2xs hover:shadow-md hover:border-stone-400 transition-all flex flex-col justify-between group cursor-pointer"
                      >
                        <div>
                          <div className="relative aspect-16/10 w-full overflow-hidden bg-stone-900">
                            <img
                              src={photo}
                              alt={place.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-black/20" />
                            <div className="absolute top-2.5 left-2.5">
                              <span className="bg-black/60 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded-full border border-white/20">
                                {place.category}
                              </span>
                            </div>
                            <div className="absolute bottom-2.5 right-2.5 bg-white/90 text-stone-900 text-[11px] font-mono font-bold px-2 py-0.5 rounded-md">
                              {place.priceLevel}
                            </div>
                            <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1 text-white text-xs font-medium">
                              <MapPin className="w-3.5 h-3.5 text-rose-400" />
                              <span>{place.neighbourhood}</span>
                            </div>
                          </div>

                          <div className="p-4 space-y-2">
                            <div>
                              <h3 className="text-base font-serif font-bold text-stone-900 group-hover:text-rose-600 transition-colors">
                                {place.name}
                              </h3>
                              <div className="text-[11px] text-stone-500">{place.koreanName}</div>
                            </div>

                            <div className="bg-rose-50 text-rose-900 text-xs px-2.5 py-1 rounded-lg font-medium flex items-center gap-1.5">
                              <Flame className="w-3 h-3 text-rose-500 shrink-0" />
                              <span className="truncate">{place.signatureDishes[0]}</span>
                            </div>

                            <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                              {place.knownFor}
                            </p>
                          </div>
                        </div>

                        <div className="px-4 py-2.5 bg-stone-50/80 border-t border-stone-100 flex items-center justify-between text-xs">
                          <span className="text-[11px] text-stone-400">{place.openingHours}</span>
                          <span className="text-xs font-bold text-stone-900 group-hover:text-rose-600 flex items-center gap-1">
                            <span>Details</span>
                            <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 2. Shopping Destinations Preview */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-stone-200 pb-3">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-pink-600 font-bold">
                      🛍️ Retail & K-Beauty
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
                      Curated Shopping Hotspots
                    </h2>
                  </div>
                  <button
                    onClick={() => handleNavigate('shop')}
                    className="text-xs font-bold text-stone-900 hover:text-pink-600 flex items-center gap-1 group cursor-pointer transition-colors"
                  >
                    <span>View all shopping districts</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {SHOPS_DATA.slice(0, 3).map((shop) => {
                    const photo = shop.imageUrl || getImageForCategory(shop.category);

                    return (
                      <div
                        key={shop.id}
                        onClick={() => openShopDetail(shop)}
                        className="bg-white border border-stone-200/90 rounded-2xl overflow-hidden shadow-2xs hover:shadow-md hover:border-stone-400 transition-all flex flex-col justify-between group cursor-pointer"
                      >
                        <div>
                          <div className="relative aspect-16/10 w-full overflow-hidden bg-stone-900">
                            <img
                              src={photo}
                              alt={shop.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-black/20" />
                            <div className="absolute top-2.5 left-2.5">
                              <span className="bg-black/60 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded-full border border-white/20">
                                {shop.category}
                              </span>
                            </div>
                            <div className="absolute top-2.5 right-2.5">
                              <span className="bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                                {shop.taxRefundInfo.includes('Instant') ? '✓ Instant Refund' : 'Tax Refund'}
                              </span>
                            </div>
                            <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1 text-white text-xs font-medium">
                              <MapPin className="w-3.5 h-3.5 text-pink-400" />
                              <span>{shop.neighbourhood}</span>
                            </div>
                          </div>

                          <div className="p-4 space-y-2">
                            <div>
                              <h3 className="text-base font-serif font-bold text-stone-900 group-hover:text-pink-600 transition-colors">
                                {shop.name}
                              </h3>
                              <div className="text-[11px] text-stone-500">{shop.koreanName}</div>
                            </div>

                            <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                              {shop.whyVisit}
                            </p>

                            <div className="text-[11px] text-stone-500 bg-stone-50 p-2 rounded-lg border border-stone-100 truncate">
                              <span className="font-bold text-stone-700">Brands: </span>
                              {shop.koreanBrands.slice(0, 3).join(', ')}
                            </div>
                          </div>
                        </div>

                        <div className="px-4 py-2.5 bg-stone-50/80 border-t border-stone-100 flex items-center justify-between text-xs">
                          <span className="text-[11px] text-stone-400">{shop.openingHours}</span>
                          <span className="text-xs font-bold text-stone-900 group-hover:text-pink-600 flex items-center gap-1">
                            <span>Store Info</span>
                            <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 3. Featured Neighbourhoods Preview */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-stone-200 pb-3">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-blue-600 font-bold">
                      🏙️ Key Areas on Our Itinerary
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
                      Explore Districts We Are Visiting
                    </h2>
                  </div>
                  <button
                    onClick={() => handleNavigate('neighbourhoods')}
                    className="text-xs font-bold text-stone-900 hover:text-blue-600 flex items-center gap-1 group cursor-pointer transition-colors"
                  >
                    <span>Browse all neighbourhood guides</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {[
                    { n: NEIGHBOURHOODS_DATA[0], photo: SEOUL_IMAGES.seongsuStreet },
                    { n: NEIGHBOURHOODS_DATA[1], photo: SEOUL_IMAGES.myeongdongStreet },
                    { n: NEIGHBOURHOODS_DATA[2], photo: SEOUL_IMAGES.hongdaeYouth },
                  ].map(({ n, photo }) => (
                    <div
                      key={n.id}
                      onClick={() => {
                        setSelectedNeighbourhoodId(n.id);
                        handleNavigate('neighbourhoods');
                      }}
                      className="bg-white border border-stone-200/90 rounded-2xl overflow-hidden shadow-2xs hover:shadow-md hover:border-stone-400 transition-all flex flex-col justify-between group cursor-pointer"
                    >
                      <div>
                        <div className="relative aspect-16/10 w-full overflow-hidden bg-stone-900">
                          <img
                            src={photo}
                            alt={n.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-transparent to-black/20" />
                          <div className="absolute bottom-2.5 left-3 right-3 text-white">
                            <span className="text-[10px] text-stone-300 font-medium block">{n.koreanName}</span>
                            <h3 className="text-lg font-serif font-bold text-white group-hover:text-blue-200 transition-colors">
                              {n.name}
                            </h3>
                          </div>
                        </div>

                        <div className="p-4 space-y-2">
                          <p className="text-xs text-stone-500 font-serif italic line-clamp-1">"{n.character}"</p>
                          <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                            {n.overview}
                          </p>
                        </div>
                      </div>

                      <div className="px-4 py-2.5 bg-stone-50/80 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                        <span className="text-[11px] truncate max-w-[180px]">Best: {n.recommendedTime}</span>
                        <span className="font-bold text-stone-900 group-hover:text-blue-600 flex items-center gap-1">
                          <span>Explore Area</span>
                          <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab Sections */}
        {activeTab === 'itinerary' && <ItinerarySection />}

        {activeTab === 'eat' && (
          <EatSection
            onSelectPlace={openPlaceDetail}
            initialNeighbourhoodFilter={neighbourhoodFilterForEat}
          />
        )}

        {activeTab === 'shop' && (
          <ShopSection
            onSelectShop={openShopDetail}
            initialCategoryFilter={neighbourhoodFilterForShop}
          />
        )}

        {activeTab === 'neighbourhoods' && (
          <NeighbourhoodSection
            onSelectNeighbourhood={handleSelectNeighbourhood}
            onExploreFoodInArea={handleExploreFoodInArea}
            onExploreShopInArea={handleExploreShopInArea}
            selectedNeighbourhoodId={selectedNeighbourhoodId}
          />
        )}

        {activeTab === 'explore' && (
          <ExploreSection
            onSelectNeighbourhoodId={handleSelectNeighbourhoodFromExplore}
            onFilterFoodCategory={(cat) => {
              setActiveTab('eat');
            }}
            onFilterShopCategory={(cat) => {
              setActiveTab('shop');
            }}
          />
        )}
      </main>

      {/* Global Interactive Search Overlay */}
      <SearchBar
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectPlace={openPlaceDetail}
        onSelectShop={openShopDetail}
        onSelectNeighbourhood={(n) => {
          setSelectedNeighbourhoodId(n.id);
          setActiveTab('neighbourhoods');
        }}
      />

      {/* Place / Shop Comprehensive Detail Modal */}
      <PlaceDetailModal
        item={selectedDetailItem}
        type={detailType}
        isOpen={!!selectedDetailItem}
        onClose={() => setSelectedDetailItem(null)}
      />

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
      />
    </div>
  );
}
