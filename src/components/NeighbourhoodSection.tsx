import React, { useState } from 'react';
import { Neighbourhood } from '../types';
import { NEIGHBOURHOODS_DATA } from '../data/neighborhoods';
import { SEOUL_IMAGES, getImageForCategory } from '../data/images';
import { MapPin, Utensils, ShoppingBag, Coffee, Camera, Compass, Navigation, Clock, Users, Lightbulb, ChevronRight, Sparkles } from 'lucide-react';

interface NeighbourhoodSectionProps {
  onSelectNeighbourhood: (neighbourhood: Neighbourhood) => void;
  onExploreFoodInArea: (areaName: string) => void;
  onExploreShopInArea: (areaName: string) => void;
  selectedNeighbourhoodId?: string;
}

export const NeighbourhoodSection: React.FC<NeighbourhoodSectionProps> = ({
  onSelectNeighbourhood,
  onExploreFoodInArea,
  onExploreShopInArea,
  selectedNeighbourhoodId,
}) => {
  const [activeAreaId, setActiveAreaId] = useState<string>(
    selectedNeighbourhoodId || NEIGHBOURHOODS_DATA[0].id
  );

  const activeNeighbourhood =
    NEIGHBOURHOODS_DATA.find((n) => n.id === activeAreaId) || NEIGHBOURHOODS_DATA[0];

  const getDistrictImage = (id: string, name: string): string => {
    if (id === 'myeongdong') return SEOUL_IMAGES.myeongdongStreet;
    if (id === 'hongdae' || id === 'yeonnam') return SEOUL_IMAGES.hongdaeYouth;
    if (id === 'seongsu') return SEOUL_IMAGES.seongsuStreet;
    if (id === 'bukchon' || id === 'ikseon' || id === 'insadong') return SEOUL_IMAGES.bukchonHanok;
    if (id === 'gangnam' || id === 'apgujeong' || id === 'cheongdam') return SEOUL_IMAGES.gangnam;
    if (id === 'itaewon' || id === 'hannam' || id === 'yongsan') return SEOUL_IMAGES.itaewon;
    if (id === 'jamsil') return SEOUL_IMAGES.hanRiver;
    if (id === 'euljiro' || id === 'dongdaemun') return SEOUL_IMAGES.nightView;
    return SEOUL_IMAGES.heroSkyline;
  };

  return (
    <section className="py-6 sm:py-10 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-[11px] font-semibold mb-1">
              <span>🏙️</span>
              <span>17 Seoul Districts</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
              Seoul Neighbourhoods Guide
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm mt-0.5">
              Each district has its own distinct personality, fashion aesthetic, and food scene.
            </p>
          </div>
        </div>

        {/* Visual Photo Carousel of Districts */}
        <div>
          <div className="text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2 px-1 flex items-center justify-between">
            <span>Choose a District ({NEIGHBOURHOODS_DATA.length} Areas)</span>
            <span className="text-[11px] font-normal text-stone-400">Scroll to explore</span>
          </div>

          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
            {NEIGHBOURHOODS_DATA.map((n) => {
              const isSelected = activeAreaId === n.id;
              const photo = getDistrictImage(n.id, n.name);

              return (
                <button
                  key={n.id}
                  onClick={() => {
                    setActiveAreaId(n.id);
                    onSelectNeighbourhood(n);
                  }}
                  className={`group relative shrink-0 w-36 sm:w-44 rounded-2xl overflow-hidden border transition-all cursor-pointer text-left aspect-4/3 ${
                    isSelected
                      ? 'border-blue-600 ring-2 ring-blue-500/50 shadow-md scale-102'
                      : 'border-stone-200/90 hover:border-stone-400 bg-stone-900'
                  }`}
                >
                  <img
                    src={photo}
                    alt={n.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-3 flex flex-col justify-end text-white">
                    <span className="text-[10px] text-stone-300 font-sans">{n.koreanName}</span>
                    <span className="text-xs sm:text-sm font-serif font-bold text-white group-hover:text-blue-200 truncate">
                      {n.name}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Neighbourhood Visual Feature Banner */}
        <div className="relative rounded-3xl overflow-hidden shadow-sm border border-stone-200 bg-stone-900 text-white min-h-[220px] sm:min-h-[260px] flex flex-col justify-end p-6 sm:p-8">
          <img
            src={getDistrictImage(activeNeighbourhood.id, activeNeighbourhood.name)}
            alt={activeNeighbourhood.name}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/95 via-stone-950/60 to-stone-950/20" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1.5 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-blue-500/80 backdrop-blur-xs text-white text-[11px] font-bold">
                  {activeNeighbourhood.koreanName}
                </span>
                <span className="text-xs text-stone-300 font-medium">District Profile</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight">
                {activeNeighbourhood.name}
              </h3>
              <p className="text-xs sm:text-sm text-stone-200 italic font-serif leading-snug">
                "{activeNeighbourhood.character}"
              </p>
            </div>

            {/* Quick Action Shortcuts */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => onExploreFoodInArea(activeNeighbourhood.name)}
                className="px-3.5 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 cursor-pointer hover:scale-102"
              >
                <Utensils className="w-3.5 h-3.5" />
                <span>Eat in {activeNeighbourhood.name}</span>
              </button>
              <button
                onClick={() => onExploreShopInArea(activeNeighbourhood.name)}
                className="px-3.5 py-2 bg-white hover:bg-stone-100 text-stone-900 rounded-xl text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 cursor-pointer hover:scale-102"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Shop in {activeNeighbourhood.name}</span>
              </button>
            </div>
          </div>
        </div>

        {/* 3-Second Quick Cheat Sheet Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="bg-white border border-stone-200/90 rounded-2xl p-4 shadow-2xs flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Best Time to Visit</div>
              <div className="text-xs font-semibold text-stone-900 mt-0.5">{activeNeighbourhood.recommendedTime}</div>
            </div>
          </div>

          <div className="bg-white border border-stone-200/90 rounded-2xl p-4 shadow-2xs flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Navigation className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Subway & Access</div>
              <div className="text-xs font-semibold text-stone-900 mt-0.5 truncate">
                {activeNeighbourhood.howToGetThere.mainStations[0]}
              </div>
            </div>
          </div>

          <div className="bg-white border border-stone-200/90 rounded-2xl p-4 shadow-2xs flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
              <Users className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Ideal For</div>
              <div className="text-xs font-semibold text-stone-900 mt-0.5 line-clamp-1">
                {activeNeighbourhood.typicalVisitors}
              </div>
            </div>
          </div>
        </div>

        {/* Scannable Visual Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Food Highlights */}
          <div className="bg-white border border-stone-200/90 rounded-2xl p-4 shadow-2xs space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-bold text-stone-900 uppercase tracking-wider">
              <Utensils className="w-4 h-4 text-rose-500" />
              <span>Must-Eat Food</span>
            </div>
            <ul className="text-xs text-stone-700 space-y-1.5 pt-1">
              {activeNeighbourhood.foodHighlights.slice(0, 3).map((item, idx) => (
                <li key={idx} className="flex items-baseline gap-1.5">
                  <span className="text-rose-500 font-bold">•</span>
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Shopping Highlights */}
          <div className="bg-white border border-stone-200/90 rounded-2xl p-4 shadow-2xs space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-bold text-stone-900 uppercase tracking-wider">
              <ShoppingBag className="w-4 h-4 text-pink-500" />
              <span>Top Shopping</span>
            </div>
            <ul className="text-xs text-stone-700 space-y-1.5 pt-1">
              {activeNeighbourhood.shoppingHighlights.slice(0, 3).map((item, idx) => (
                <li key={idx} className="flex items-baseline gap-1.5">
                  <span className="text-pink-500 font-bold">•</span>
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Aesthetic Cafes */}
          <div className="bg-white border border-stone-200/90 rounded-2xl p-4 shadow-2xs space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-bold text-stone-900 uppercase tracking-wider">
              <Coffee className="w-4 h-4 text-amber-600" />
              <span>Famous Cafes</span>
            </div>
            <ul className="text-xs text-stone-700 space-y-1.5 pt-1">
              {activeNeighbourhood.cafeHighlights.slice(0, 3).map((item, idx) => (
                <li key={idx} className="flex items-baseline gap-1.5">
                  <span className="text-amber-600 font-bold">•</span>
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Photo Spots & See */}
          <div className="bg-white border border-stone-200/90 rounded-2xl p-4 shadow-2xs space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-bold text-stone-900 uppercase tracking-wider">
              <Camera className="w-4 h-4 text-indigo-500" />
              <span>Top Photo Spots</span>
            </div>
            <ul className="text-xs text-stone-700 space-y-1.5 pt-1">
              {activeNeighbourhood.thingsToSee.slice(0, 3).map((item, idx) => (
                <li key={idx} className="flex items-baseline gap-1.5">
                  <span className="text-indigo-500 font-bold">•</span>
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Local Pro-Tip Box */}
        <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-4 text-xs text-amber-950 flex items-start gap-3">
          <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold text-amber-900">Local Pro-Tip for {activeNeighbourhood.name}:</span>
            <p className="leading-relaxed">
              {activeNeighbourhood.practicalTips[0]}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
