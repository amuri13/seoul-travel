import React, { useState } from 'react';
import { FAMILY_ITINERARY, DayItinerary, ItineraryItem } from '../data/itinerary';
import { SEOUL_IMAGES } from '../data/images';
import { 
  Calendar, Clock, MapPin, Plane, Hotel, Utensils, Camera, ShoppingBag, 
  Car, ExternalLink, Snowflake, CheckCircle2, ChevronRight, AlertCircle, 
  Sparkles, Heart, Compass, PhoneCall, Copy, Check
} from 'lucide-react';

export const ItinerarySection: React.FC = () => {
  const [selectedDayIndex, setSelectedDayIndex] = useState<number>(1); // Default to Day 1 or Day 0
  const [viewMode, setViewMode] = useState<'day' | 'full'>('day');
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const activeDay: DayItinerary = FAMILY_ITINERARY[selectedDayIndex] || FAMILY_ITINERARY[0];

  const getDayPhoto = (photoKey?: string): string => {
    if (!photoKey) return SEOUL_IMAGES.heroSkyline;
    return (SEOUL_IMAGES as any)[photoKey] || SEOUL_IMAGES.heroSkyline;
  };

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'flight':
        return { label: 'Flight', icon: Plane, bg: 'bg-sky-50 text-sky-700 border-sky-200' };
      case 'hotel':
        return { label: 'Hotel', icon: Hotel, bg: 'bg-indigo-50 text-indigo-700 border-indigo-200' };
      case 'food':
        return { label: 'Food & Drink', icon: Utensils, bg: 'bg-rose-50 text-rose-700 border-rose-200' };
      case 'sightseeing':
        return { label: 'Explore', icon: Camera, bg: 'bg-emerald-50 text-emerald-700 border-emerald-200' };
      case 'shopping':
        return { label: 'Shopping', icon: ShoppingBag, bg: 'bg-pink-50 text-pink-700 border-pink-200' };
      default:
        return { label: 'Transport', icon: Car, bg: 'bg-amber-50 text-amber-700 border-amber-200' };
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <section className="py-6 sm:py-10 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Family Vacation Guide Header */}
        <div className="bg-gradient-to-r from-rose-600 via-amber-600 to-rose-700 rounded-3xl p-6 sm:p-8 text-white shadow-md relative overflow-hidden">
          <div className="relative z-10 space-y-2.5 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold">
              <Heart className="w-3.5 h-3.5 text-rose-200 fill-rose-200" />
              <span>Our Family Holiday · 8 Dec – 16 Dec</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-serif font-bold tracking-tight">
              Seoul & Jeju Winter Vacation Guide
            </h1>

            <p className="text-xs sm:text-sm text-stone-100 font-normal leading-relaxed">
              Complete 9-day family holiday schedule: Singapore ✈️ Incheon Airport ➔ 3 Nights in Scenic Jeju Island ➔ 4 Nights in Downtown Seoul Myeongdong.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <span className="bg-black/30 backdrop-blur-xs px-3 py-1 rounded-full border border-white/20">
                🍊 3 Days in Jeju (Black Pork, Mandarins & Cliffs)
              </span>
              <span className="bg-black/30 backdrop-blur-xs px-3 py-1 rounded-full border border-white/20">
                🏙️ 5 Days in Seoul (Myeongdong, Seongsu & Palaces)
              </span>
              <span className="bg-black/30 backdrop-blur-xs px-3 py-1 rounded-full border border-white/20">
                🏨 3 Confirmed Hotels
              </span>
            </div>
          </div>
        </div>

        {/* View Mode Toggle & Day Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="text-xs font-bold uppercase tracking-wider text-stone-700 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-rose-600" />
            <span>Select Day (8 Dec - 16 Dec)</span>
          </div>

          <div className="flex items-center gap-1 bg-stone-200/80 p-1 rounded-xl text-xs font-bold self-start sm:self-auto">
            <button
              onClick={() => setViewMode('day')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                viewMode === 'day' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Day View
            </button>
            <button
              onClick={() => setViewMode('full')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                viewMode === 'full' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Full 9-Day Overview
            </button>
          </div>
        </div>

        {/* Day Selector Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {FAMILY_ITINERARY.map((day, idx) => {
            const isSelected = selectedDayIndex === idx && viewMode === 'day';
            const isJeju = day.region === 'Jeju Island';

            return (
              <button
                key={day.dayNumber}
                onClick={() => {
                  setSelectedDayIndex(idx);
                  setViewMode('day');
                }}
                className={`shrink-0 px-3.5 py-2.5 rounded-2xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-stone-900 text-white border-stone-900 shadow-md scale-102 font-bold'
                    : 'bg-white text-stone-700 border-stone-200 hover:border-stone-400'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${isSelected ? 'text-amber-300' : 'text-stone-400'}`}>
                    Day {day.dayNumber} ({day.dayOfWeek})
                  </span>
                  <span className="text-[10px]">
                    {isJeju ? '🍊' : day.region === 'Incheon' ? '✈️' : '🏙️'}
                  </span>
                </div>
                <div className={`text-xs font-serif font-bold truncate max-w-[130px] ${isSelected ? 'text-white' : 'text-stone-900'}`}>
                  {day.date} · {day.region}
                </div>
              </button>
            );
          })}
        </div>

        {/* View Mode: Single Day View */}
        {viewMode === 'day' && (
          <div className="space-y-6">
            {/* Visual Header Banner for the Day */}
            <div className="relative rounded-3xl overflow-hidden shadow-sm border border-stone-200 aspect-16/7 sm:aspect-16/6 bg-stone-900 text-white min-h-[200px]">
              <img
                src={getDayPhoto(activeDay.highlightPhotoKey)}
                alt={activeDay.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/95 via-stone-950/50 to-transparent p-5 sm:p-7 flex flex-col justify-end">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="px-2.5 py-0.5 rounded-full bg-rose-600 text-white text-[11px] font-bold">
                    DAY {activeDay.dayNumber} · {activeDay.date} ({activeDay.dayOfWeek})
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-xs text-white text-[11px] font-semibold">
                    {activeDay.region}
                  </span>
                </div>

                <h2 className="text-xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                  {activeDay.title}
                </h2>

                <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-stone-200">
                  <span className="flex items-center gap-1 font-medium bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-lg border border-white/10">
                    <Hotel className="w-3.5 h-3.5 text-amber-300" />
                    <span>Lodging: <strong>{activeDay.hotel}</strong></span>
                  </span>

                  <span className="flex items-center gap-1 font-medium bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-lg border border-white/10">
                    <Snowflake className="w-3.5 h-3.5 text-sky-300" />
                    <span>{activeDay.weatherTip}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Timeline Items for the Active Day */}
            <div className="bg-white border border-stone-200/90 rounded-3xl p-5 sm:p-7 shadow-xs space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
                Daily Schedule & Stops ({activeDay.items.length} items)
              </div>

              <div className="space-y-4 relative before:absolute before:inset-0 before:left-5 before:w-0.5 before:bg-stone-200">
                {activeDay.items.map((item, idx) => {
                  const badge = getCategoryBadge(item.category);
                  const Icon = badge.icon;
                  const naverUrl = item.mapQuery
                    ? `https://map.naver.com/v5/search/${encodeURIComponent(item.mapQuery)}`
                    : null;

                  return (
                    <div key={idx} className="relative flex items-start gap-4 group">
                      {/* Timeline icon dot */}
                      <div className="w-10 h-10 rounded-2xl bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-700 shrink-0 z-10 group-hover:scale-110 group-hover:bg-rose-50 group-hover:text-rose-600 transition-all shadow-2xs">
                        <Icon className="w-4 h-4" />
                      </div>

                      {/* Item Content Card */}
                      <div className="flex-1 bg-stone-50/70 hover:bg-stone-50 border border-stone-200/80 rounded-2xl p-4 transition-all space-y-1.5">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                          <div className="flex items-center gap-2">
                            {item.time && (
                              <span className="px-2 py-0.5 rounded-md bg-stone-900 text-white font-mono text-[11px] font-bold">
                                {item.time}
                              </span>
                            )}
                            <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${badge.bg}`}>
                              {badge.label}
                            </span>
                          </div>

                          {/* Quick Naver Map link */}
                          {naverUrl && (
                            <a
                              href={naverUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[11px] font-semibold text-emerald-700 hover:text-emerald-900 flex items-center gap-1 bg-emerald-50 px-2.5 py-0.5 rounded-lg border border-emerald-100 self-start sm:self-auto cursor-pointer"
                            >
                              <span>Naver Map</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                        </div>

                        {/* Title & Korean Name */}
                        <div>
                          <h4 className="text-base font-serif font-bold text-stone-900">
                            {item.activity}
                          </h4>
                          {item.koreanName && (
                            <div className="flex items-center gap-1.5 text-xs text-stone-500 font-sans mt-0.5">
                              <span>{item.koreanName}</span>
                              <button
                                onClick={() => copyToClipboard(item.koreanName!)}
                                className="text-[10px] text-stone-400 hover:text-stone-700 cursor-pointer p-0.5"
                                title="Copy Korean name"
                              >
                                {copiedText === item.koreanName ? (
                                  <span className="text-emerald-600 font-bold">Copied!</span>
                                ) : (
                                  <Copy className="w-3 h-3" />
                                )}
                              </button>
                            </div>
                          )}
                        </div>

                        {/* Notes / Practical Advice */}
                        {item.notes && (
                          <p className="text-xs text-stone-600 leading-relaxed pt-1">
                            {item.notes}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* View Mode: Full 9-Day Overview */}
        {viewMode === 'full' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {FAMILY_ITINERARY.map((day) => {
                const photo = getDayPhoto(day.highlightPhotoKey);
                const isJeju = day.region === 'Jeju Island';

                return (
                  <div
                    key={day.dayNumber}
                    onClick={() => {
                      setSelectedDayIndex(day.dayNumber);
                      setViewMode('day');
                    }}
                    className="bg-white border border-stone-200/90 rounded-3xl overflow-hidden shadow-2xs hover:shadow-md hover:border-stone-400 transition-all cursor-pointer group flex flex-col justify-between"
                  >
                    <div>
                      {/* Photo banner */}
                      <div className="relative aspect-16/9 w-full overflow-hidden bg-stone-900">
                        <img
                          src={photo}
                          alt={day.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-transparent to-black/20" />
                        <div className="absolute top-2.5 left-2.5">
                          <span className="bg-black/60 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-white/20">
                            Day {day.dayNumber} · {day.date} ({day.dayOfWeek})
                          </span>
                        </div>
                        <div className="absolute bottom-2.5 left-2.5">
                          <span className="text-xs font-bold text-amber-300">
                            {isJeju ? '🍊 Jeju Island' : day.region === 'Incheon' ? '✈️ Incheon' : '🏙️ Seoul'}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-4 space-y-2.5">
                        <h3 className="text-base font-serif font-bold text-stone-900 group-hover:text-rose-600 transition-colors">
                          {day.title}
                        </h3>

                        <div className="space-y-1.5 pt-1">
                          {day.items.slice(0, 4).map((item, idx) => (
                            <div key={idx} className="flex items-baseline gap-1.5 text-xs text-stone-600 truncate">
                              <span className="text-[10px] font-mono font-bold text-stone-400 shrink-0">
                                {item.time || '•'}
                              </span>
                              <span className="truncate">{item.activity}</span>
                            </div>
                          ))}
                          {day.items.length > 4 && (
                            <div className="text-[11px] text-stone-400 font-medium">
                              + {day.items.length - 4} more stops...
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="px-4 py-2.5 bg-stone-50 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                      <span className="truncate max-w-[170px] text-[11px]">🏨 {day.hotel}</span>
                      <span className="font-bold text-stone-900 group-hover:text-rose-600 flex items-center gap-1">
                        <span>Details</span>
                        <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Family Trip Logistics & Hotel Cheat Sheet */}
        <div className="bg-white border border-stone-200/90 rounded-3xl p-6 shadow-2xs space-y-4">
          <div className="flex items-center gap-2">
            <Hotel className="w-5 h-5 text-indigo-600" />
            <h3 className="text-sm font-bold text-stone-900 uppercase tracking-wider">
              Family Trip Reference & Confirmed Bookings
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="bg-stone-50 p-4 rounded-2xl border border-stone-100 space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Night 0 (8 Dec)</span>
              <div className="font-bold text-sm text-stone-900">Best Western Incheon Airport</div>
              <div className="text-stone-500">Terminal 1 Airport transit hotel</div>
              <div className="text-[11px] text-emerald-700 font-semibold pt-1">✓ Flight: Arrive ICN 10:00 PM</div>
            </div>

            <div className="bg-stone-50 p-4 rounded-2xl border border-stone-100 space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Nights 1–3 (9–12 Dec)</span>
              <div className="font-bold text-sm text-stone-900">Shilla Stay Plus Iho Tewoo</div>
              <div className="text-stone-500">Jeju Island oceanfront hotel (near rental car & beaches)</div>
              <div className="text-[11px] text-emerald-700 font-semibold pt-1">✓ Flight: KE1097 (12:10 PM - 1:25 PM)</div>
            </div>

            <div className="bg-stone-50 p-4 rounded-2xl border border-stone-100 space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Nights 4–7 (12–16 Dec)</span>
              <div className="font-bold text-sm text-stone-900">Stanford Hotel Myeongdong</div>
              <div className="text-stone-500">Downtown Seoul (steps from Line 2 & Lotte Dept Store)</div>
              <div className="text-[11px] text-emerald-700 font-semibold pt-1">✓ Flight: KE1180 (12:00 PM - 1:15 PM)</div>
            </div>
          </div>
        </div>

        {/* December Winter Travel Checklist for the Family */}
        <div className="bg-sky-50/70 border border-sky-200 rounded-3xl p-6 shadow-2xs space-y-3">
          <div className="flex items-center gap-2">
            <Snowflake className="w-5 h-5 text-sky-600" />
            <h3 className="text-sm font-bold text-sky-950 uppercase tracking-wider">
              December Weather & Packing Checklist for Korea
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-sky-950">
            <div className="space-y-1.5">
              <div className="font-bold text-sky-900">Jeju Island (9–12 Dec): ~8°C to 13°C</div>
              <p className="leading-relaxed text-sky-900/80">
                Mild winter maritime climate, but coastal winds can feel brisk around Daepo Jusangjeolli and Dodu rainbow road. Light down jacket, cardigan layers, and windproof outer layer are perfect.
              </p>
            </div>

            <div className="space-y-1.5">
              <div className="font-bold text-sky-900">Seoul (12–16 Dec): ~-4°C to 4°C</div>
              <p className="leading-relaxed text-sky-900/80">
                Freezing continental winter weather. Wear thermal innerwear (Heattech), fleece-lined gloves, and scarves for walking in Myeongdong, Seongsu, and palace courtyards. Buy disposable heat packs ("hot-paek") at CU or GS25 for coat pockets!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
