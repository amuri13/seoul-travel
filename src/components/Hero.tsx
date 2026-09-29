import React from 'react';
import { Search, Calendar, Heart, Flame, ArrowRight } from 'lucide-react';
import { SEOUL_IMAGES } from '../data/images';

interface HeroProps {
  onSearchClick: () => void;
  onAskQuery?: (query: string) => void;
  onNavigate: (section: string) => void;
  onSelectNeighbourhood?: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSearchClick, onNavigate }) => {
  const quickCategories = [
    { id: 'itinerary', label: 'Itinerary', icon: '🗓️', desc: '8–16 Dec (9 Days)', highlight: true },
    { id: 'eat', label: 'Eat', icon: '🍜', desc: 'Black pork & BBQ' },
    { id: 'shop', label: 'Shop', icon: '🛍️', desc: 'Olive Young & Lotte' },
    { id: 'neighbourhoods', label: 'Districts', icon: '🏙️', desc: 'Myeongdong & Seongsu' },
    { id: 'explore', label: 'Explore', icon: '✨', desc: 'Jeju & Seoul sites' },
  ];

  // Visual quick vibe cards tailored to family trip
  const vibePicks = [
    {
      title: 'Jeju Island Adventure (9–12 Dec)',
      tag: 'Family Itinerary 🍊',
      image: SEOUL_IMAGES.jejuRainbowRoad,
      target: 'itinerary',
      desc: 'Rainbow coastal road, tangerine farm & black pork BBQ'
    },
    {
      title: 'Myeongdong & Stanford Hotel',
      tag: 'Seoul Base 🛍️',
      image: SEOUL_IMAGES.myeongdongStreet,
      target: 'itinerary',
      desc: 'Night market food carts, emart24 supper & K-beauty'
    },
    {
      title: 'Seongsu Bakeries & NYU NYU',
      tag: 'Day 6 Highlights ☕',
      image: SEOUL_IMAGES.seongsuStreet,
      target: 'itinerary',
      desc: 'Salt bread, fruit daifuku mochi & Musinsa gifts'
    },
    {
      title: 'Palaces & Tosokchon Samgyetang',
      tag: 'Day 7 Tradition 🎎',
      image: SEOUL_IMAGES.bukchonHanok,
      target: 'itinerary',
      desc: 'Gyeongbokgung, Bukchon Hanok & ginseng chicken soup'
    },
  ];

  return (
    <div className="relative border-b border-stone-200 bg-stone-50 overflow-hidden">
      {/* Editorial Hero Banner Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-10 sm:pt-8 sm:pb-12 space-y-8">
        {/* Visual Hero Banner */}
        <div className="relative rounded-3xl overflow-hidden shadow-md border border-stone-200/80 bg-stone-900 text-white min-h-[360px] sm:min-h-[420px] flex flex-col justify-end p-6 sm:p-10">
          <img
            src={SEOUL_IMAGES.heroSkyline}
            alt="Seoul cityscape skyline blending royal palaces and modern city towers"
            className="absolute inset-0 w-full h-full object-cover object-center scale-105 transition-transform duration-1000 hover:scale-100"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/95 via-stone-950/65 to-stone-900/35" />

          {/* Hero Content */}
          <div className="relative z-10 max-w-3xl space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/80 backdrop-blur-md border border-rose-300/30 text-white text-xs font-bold">
              <Heart className="w-3.5 h-3.5 fill-white" />
              <span>Our Family Vacation · Seoul & Jeju in December (8–16 Dec)</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-white leading-tight">
              Winter in Korea: Family Holiday Guide.
            </h1>

            <p className="text-sm sm:text-base text-stone-200 font-normal leading-relaxed max-w-2xl">
              From Jeju Island tangerine farms and black pork barbecue to Myeongdong night markets,
              Seongsu salt bread, and Joseon royal palaces. Everything planned for our family in one place.
            </p>

            {/* Quick Action Button Bar */}
            <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
              <button
                onClick={() => onNavigate('itinerary')}
                className="bg-rose-600 hover:bg-rose-700 text-white px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-102"
              >
                <Calendar className="w-4 h-4" />
                <span>Open 9-Day Family Itinerary (8–16 Dec) 🗓️</span>
              </button>

              <button
                onClick={onSearchClick}
                className="bg-white/95 text-stone-800 hover:bg-white rounded-2xl shadow-md px-4 py-3 flex items-center gap-2.5 cursor-pointer transition-all border border-stone-200/50 text-xs sm:text-sm font-medium hover:scale-102"
              >
                <Search className="w-4 h-4 text-stone-500 shrink-0" />
                <span className="text-stone-700">
                  Search places, food, districts & shopping directory
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Quick Category Buttons */}
        <div>
          <div className="flex items-center justify-between mb-3 px-1">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-700 flex items-center gap-1.5">
              <span>⚡</span> Trip Sections & Handbook
            </span>
            <span className="text-[11px] text-stone-400">One tap to open</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {quickCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => onNavigate(cat.id)}
                className={`border rounded-2xl p-3 text-left transition-all group cursor-pointer shadow-2xs hover:shadow-xs hover:-translate-y-0.5 ${
                  cat.highlight
                    ? 'bg-rose-50 border-rose-300 hover:border-rose-400 ring-1 ring-rose-200'
                    : 'bg-white hover:bg-stone-100 border-stone-200/90 hover:border-stone-400'
                }`}
              >
                <div className="text-2xl mb-1 group-hover:scale-110 transition-transform">
                  {cat.icon}
                </div>
                <div className={`font-bold text-xs group-hover:text-rose-600 transition-colors ${
                  cat.highlight ? 'text-rose-900 font-extrabold' : 'text-stone-900'
                }`}>
                  {cat.label}
                </div>
                <div className="text-[10px] text-stone-500 truncate mt-0.5">
                  {cat.desc}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Photo-Driven "Our Holiday Highlights" Visual Cards */}
        <div className="pt-2">
          <div className="flex items-center justify-between mb-3 px-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-900 flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-rose-500" />
                Key Highlights of Our Trip
              </span>
            </div>
            <span className="text-[11px] text-stone-500">Tap to view itinerary details</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {vibePicks.map((pick, idx) => (
              <div
                key={idx}
                onClick={() => onNavigate(pick.target)}
                className="group relative rounded-2xl overflow-hidden border border-stone-200 bg-stone-900 aspect-4/3 cursor-pointer shadow-xs hover:shadow-md transition-all hover:-translate-y-1"
              >
                <img
                  src={pick.image}
                  alt={pick.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/40 to-transparent p-4 flex flex-col justify-end text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded-full w-fit mb-1 border border-white/10">
                    {pick.tag}
                  </span>
                  <h3 className="font-serif font-bold text-base text-white group-hover:text-rose-200 transition-colors leading-snug">
                    {pick.title}
                  </h3>
                  <p className="text-xs text-stone-300 line-clamp-1 mt-0.5">
                    {pick.desc}
                  </p>
                  <div className="flex items-center gap-1 text-[11px] text-stone-300 mt-2 font-medium group-hover:text-white">
                    <span>View Day Plan</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
