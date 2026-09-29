import React, { useState } from 'react';
import { EXPLORE_INTERESTS } from '../data/explore';
import { ExploreInterest } from '../types';
import { SEOUL_IMAGES } from '../data/images';
import { Compass, Utensils, ShoppingBag, Sparkles, MapPin, ArrowRight } from 'lucide-react';

interface ExploreSectionProps {
  onSelectNeighbourhoodId: (id: string) => void;
  onFilterFoodCategory: (category: string) => void;
  onFilterShopCategory: (category: string) => void;
}

export const ExploreSection: React.FC<ExploreSectionProps> = ({
  onSelectNeighbourhoodId,
  onFilterFoodCategory,
  onFilterShopCategory,
}) => {
  const [activeTab, setActiveTab] = useState<'All' | 'Food' | 'Shopping' | 'Experiences'>('All');

  const getInterestImage = (title: string, category: string): string => {
    const t = title.toLowerCase();
    if (t.includes('bbq') || t.includes('meat')) return SEOUL_IMAGES.koreanBbq;
    if (t.includes('chicken') || t.includes('chimaek')) return SEOUL_IMAGES.koreanChimaek;
    if (t.includes('street') || t.includes('snack') || t.includes('market')) return SEOUL_IMAGES.streetFood;
    if (t.includes('cafe') || t.includes('bakery') || t.includes('dessert')) return SEOUL_IMAGES.cafeInterior;
    if (t.includes('beauty') || t.includes('skin') || t.includes('cosmetics')) return SEOUL_IMAGES.skincareShop;
    if (t.includes('fashion') || t.includes('streetwear') || t.includes('luxury')) return SEOUL_IMAGES.fashionStore;
    if (t.includes('traditional') || t.includes('hanok') || t.includes('heritage')) return SEOUL_IMAGES.bukchonHanok;
    if (t.includes('nightlife') || t.includes('youth') || t.includes('modern')) return SEOUL_IMAGES.hongdaeYouth;
    if (t.includes('scenic') || t.includes('river') || t.includes('skyline')) return SEOUL_IMAGES.heroSkyline;
    return SEOUL_IMAGES.foodSpread;
  };

  const filteredInterests =
    activeTab === 'All'
      ? EXPLORE_INTERESTS
      : EXPLORE_INTERESTS.filter((item) => item.category === activeTab);

  return (
    <section className="py-6 sm:py-10 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-800 text-[11px] font-semibold mb-1">
              <span>✨</span>
              <span>Interest-Based Discovery</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
              Explore Seoul by Your Mood
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm mt-0.5">
              Pick what excites you most and discover the matching districts and places instantly.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-stone-200/80 rounded-xl text-xs font-semibold">
            {(['All', 'Food', 'Shopping', 'Experiences'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  activeTab === tab
                    ? 'bg-white text-stone-900 shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {tab === 'All' ? 'All Moods' : tab}
              </button>
            ))}
          </div>
        </div>

        {/* Visual Interest Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredInterests.map((interest) => {
            const photo = getInterestImage(interest.title, interest.category);

            return (
              <div
                key={interest.id}
                className="bg-white border border-stone-200/90 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-stone-400 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Photo Header */}
                  <div className="relative aspect-16/10 w-full overflow-hidden bg-stone-900">
                    <img
                      src={photo}
                      alt={interest.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/30 to-transparent" />

                    <div className="absolute top-2.5 left-2.5">
                      <span className="bg-black/60 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded-full border border-white/20 uppercase tracking-wider">
                        {interest.category}
                      </span>
                    </div>

                    <div className="absolute bottom-2.5 left-3 right-3 text-white">
                      <h3 className="text-lg font-serif font-bold text-white group-hover:text-amber-200 transition-colors">
                        {interest.title}
                      </h3>
                      <div className="text-[11px] text-stone-300 italic font-serif">
                        {interest.tagline}
                      </div>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-4 space-y-3">
                    <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                      {interest.description}
                    </p>

                    {/* Quick Highlights */}
                    <div className="bg-stone-50 p-2.5 rounded-xl border border-stone-100 space-y-1">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-stone-400">
                        Top Picks:
                      </div>
                      <div className="text-xs text-stone-800 space-y-0.5">
                        {interest.highlights.slice(0, 3).map((h, i) => (
                          <div key={i} className="flex items-center gap-1.5 truncate">
                            <span className="text-rose-500 font-bold">•</span>
                            <span className="truncate">{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer with Relevant Areas */}
                <div className="p-4 pt-0">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-stone-400 mb-1.5">
                    Best Neighbourhoods:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {interest.topNeighbourhoodIds.map((areaId, idx) => (
                      <button
                        key={idx}
                        onClick={() => onSelectNeighbourhoodId(areaId)}
                        className="text-[11px] font-medium bg-stone-100 hover:bg-stone-900 hover:text-white text-stone-700 px-2 py-1 rounded-lg transition-colors cursor-pointer flex items-center gap-1 uppercase"
                      >
                        <MapPin className="w-3 h-3 text-stone-400" />
                        <span>{areaId}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
