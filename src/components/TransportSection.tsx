import React, { useState } from 'react';
import { TRANSPORT_DATA } from '../data/transport';
import { SEOUL_IMAGES } from '../data/images';
import { Train, Bus, CreditCard, AlertTriangle, CheckCircle, Navigation, Clock, ShieldCheck, ChevronRight, MapPin } from 'lucide-react';

export const TransportSection: React.FC = () => {
  const [activeArticleId, setActiveArticleId] = useState<string>(TRANSPORT_DATA[0].id);

  const activeArticle =
    TRANSPORT_DATA.find((t) => t.id === activeArticleId) || TRANSPORT_DATA[0];

  return (
    <section className="py-6 sm:py-10 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-semibold mb-1">
              <span>🚇</span>
              <span>Seoul Transit Cheat Sheet</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
              Getting Around Seoul Made Easy
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm mt-0.5">
              Clean, punctual subways, airport express trains, and essential transport card rules.
            </p>
          </div>
        </div>

        {/* Visual Map Rule & Photo Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-7 bg-amber-50 border border-amber-200 rounded-3xl p-5 sm:p-6 space-y-3">
            <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
              <span>Crucial #1 Rule: Download Naver Map (Not Google Maps)</span>
            </div>
            <p className="text-xs text-amber-900/90 leading-relaxed">
              Google Maps does <strong>NOT</strong> provide walking or driving turn-by-turn routes in South Korea due to national security spatial data regulations. Install <strong>Naver Map</strong> (English supported) or <strong>KakaoMap</strong> before you fly. It gives exact subway exit numbers, live bus arrival times, and walking paths.
            </p>
            <div className="flex flex-wrap gap-2 pt-1 text-[11px]">
              <span className="bg-amber-100 text-amber-900 font-bold px-2.5 py-1 rounded-lg">
                ✓ Naver Map (Recommended)
              </span>
              <span className="bg-amber-100 text-amber-900 font-bold px-2.5 py-1 rounded-lg">
                ✓ Kakao T (For Taxis)
              </span>
              <span className="bg-amber-100 text-amber-900 font-bold px-2.5 py-1 rounded-lg">
                ✓ Subway Korea (Line maps)
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-xs border border-stone-200 aspect-16/9 bg-stone-900">
            <img
              src={SEOUL_IMAGES.metroTransit}
              alt="Seoul clean modern subway platform and trains"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
              <span className="text-white text-xs font-semibold">
                Seoul Metro: World-class heated seats, 4G Wi-Fi & multi-lingual signage
              </span>
            </div>
          </div>
        </div>

        {/* Airport Express vs All-Stop Visual Comparison */}
        <div>
          <div className="text-xs font-bold text-stone-700 uppercase tracking-wider mb-2 px-1">
            Airport Connection Comparison (Incheon ✈️ Seoul)
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white border-2 border-emerald-500 rounded-2xl p-4 shadow-xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">AREX Express Train</span>
                <span className="text-[11px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">Fastest ⚡</span>
              </div>
              <div className="text-2xl font-bold font-serif text-stone-900">43 mins</div>
              <p className="text-xs text-stone-600">Non-stop from Incheon T1 to Seoul Station. Reserved seat, luggage racks, free water & Wi-Fi.</p>
              <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs font-medium text-stone-700">
                <span>Cost: ~11,000 KRW</span>
                <span className="text-emerald-600 font-bold">Needs Seat Ticket</span>
              </div>
            </div>

            <div className="bg-white border border-stone-200 rounded-2xl p-4 shadow-xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-stone-700 uppercase tracking-wider">AREX All-Stop Train</span>
                <span className="text-[11px] font-bold bg-stone-100 text-stone-700 px-2 py-0.5 rounded-full">Budget 🪙</span>
              </div>
              <div className="text-2xl font-bold font-serif text-stone-900">59 mins</div>
              <p className="text-xs text-stone-600">Stops at Hongdae, Gimpo Airport, and Seoul Station. Standard commuter bench seating.</p>
              <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs font-medium text-stone-700">
                <span>Cost: ~4,750 KRW</span>
                <span className="text-stone-600 font-bold">Tap with T-money</span>
              </div>
            </div>

            <div className="bg-white border border-stone-200 rounded-2xl p-4 shadow-xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-stone-700 uppercase tracking-wider">Airport Limousine Bus</span>
                <span className="text-[11px] font-bold bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">Door-to-Door 🧳</span>
              </div>
              <div className="text-2xl font-bold font-serif text-stone-900">70–90 mins</div>
              <p className="text-xs text-stone-600">Route 6015 (Myeongdong), 6002 (Hongdae/Dongdaemun). Drops directly in front of hotels.</p>
              <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs font-medium text-stone-700">
                <span>Cost: ~17,000 KRW</span>
                <span className="text-blue-600 font-bold">No Heavy Stairs</span>
              </div>
            </div>
          </div>
        </div>

        {/* T-Money vs Climate Card Quick Cheat Sheet */}
        <div className="bg-white border border-stone-200/90 rounded-2xl p-5 shadow-2xs space-y-3">
          <div className="flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-indigo-600" />
            <h3 className="text-sm font-bold text-stone-900 uppercase tracking-wider">
              Which Card Should You Buy?
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-100 space-y-1.5">
              <div className="font-bold text-stone-900 text-sm flex items-center gap-1.5">
                <span>💳 T-Money Card</span>
                <span className="text-[10px] bg-stone-200 text-stone-700 px-2 py-0.5 rounded-full font-sans">Everywhere</span>
              </div>
              <p className="text-stone-600 leading-relaxed">
                Pay-as-you-go card for <strong>all of South Korea</strong> (Seoul, Busan, Jeju). Works on subways, buses, taxis, and convenience stores. Must reload with <strong>physical cash (KRW)</strong> at subway stations or CU/GS25.
              </p>
            </div>

            <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-100 space-y-1.5">
              <div className="font-bold text-stone-900 text-sm flex items-center gap-1.5">
                <span>🌱 Climate Card (Gihudonghaeng)</span>
                <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-sans">Unlimited</span>
              </div>
              <p className="text-stone-600 leading-relaxed">
                Unlimited rides inside Seoul city borders for 1, 2, 3, or 5 days (e.g. 3-day pass is 10,000 KRW). <strong>Warning:</strong> Does not cover AREX Express or stations outside Seoul (e.g. Incheon Airport exit requires fare adjustment).
              </p>
            </div>
          </div>
        </div>

        {/* Scannable Article Tabs */}
        <div>
          <div className="text-xs font-bold text-stone-700 uppercase tracking-wider mb-2 px-1">
            Browse All Transit Guides
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {TRANSPORT_DATA.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveArticleId(item.id)}
                className={`p-3 rounded-xl border text-left text-xs transition-all cursor-pointer ${
                  activeArticle.id === item.id
                    ? 'bg-stone-900 text-white border-stone-900 shadow-sm font-semibold'
                    : 'bg-white text-stone-700 border-stone-200 hover:border-stone-400'
                }`}
              >
                <div className="text-[10px] uppercase tracking-wider text-stone-400 mb-1">
                  {item.category}
                </div>
                <div className="line-clamp-2 leading-tight">{item.title}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Active Article Details */}
        <div className="bg-white border border-stone-200/90 rounded-2xl p-6 shadow-xs space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-3 border-b border-stone-100">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-stone-400">
                {activeArticle.category} Guide
              </div>
              <h3 className="text-xl font-serif font-bold text-stone-900">
                {activeArticle.title}
              </h3>
            </div>
            <div className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100 w-fit">
              Cost: {activeArticle.approximateCost}
            </div>
          </div>

          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
            {activeArticle.summary}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="bg-stone-50 p-4 rounded-xl space-y-2 border border-stone-100">
              <div className="text-xs font-bold uppercase tracking-wider text-stone-800">
                How It Works:
              </div>
              <ul className="text-xs text-stone-700 space-y-1.5">
                {activeArticle.howItWorks.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-rose-50/60 p-4 rounded-xl space-y-2 border border-rose-100">
              <div className="text-xs font-bold uppercase tracking-wider text-rose-900">
                Avoid Tourist Pitfalls:
              </div>
              <ul className="text-xs text-rose-900/90 space-y-1.5">
                {activeArticle.commonMistakes.map((mistake, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-rose-600 font-bold shrink-0">✕</span>
                    <span>{mistake}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
