import React, { useState } from 'react';
import { ESSENTIALS_DATA } from '../data/essentials';
import { SEOUL_IMAGES } from '../data/images';
import { ShieldCheck, Wifi, CreditCard, Receipt, Zap, Coffee, PhoneCall, CheckCircle, Info, ChevronRight, Sparkles } from 'lucide-react';

export const EssentialsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Connectivity',
    'Money & Payments',
    'Shopping & Taxes',
    'Power & Utilities',
    'Daily Life',
    'Emergency',
  ];

  const quickHacks = [
    {
      icon: '📶',
      title: 'Get an eSIM with 010 #',
      tip: 'Needed if you want to join CatchTable / restaurant waitlists without a Korean ID.'
    },
    {
      icon: '🔌',
      title: '220V Round Plug (Type C/F)',
      tip: 'Standard Europlug fits. Convenience stores sell adapters if you forget yours.'
    },
    {
      icon: '🚻',
      title: 'Free Subway Bathrooms',
      tip: 'Every single Seoul metro station has free, clean, heated-seat public restrooms.'
    },
    {
      icon: '🏪',
      title: 'CU & GS25 Are Super-Hubs',
      tip: 'Reload T-money cards (cash only), buy umbrellas, hot packs, or cheap late-night ramen.'
    }
  ];

  const filteredItems =
    activeCategory === 'All'
      ? ESSENTIALS_DATA
      : ESSENTIALS_DATA.filter((item) => item.category === activeCategory);

  return (
    <section className="py-6 sm:py-10 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 text-[11px] font-semibold mb-1">
              <span>🎒</span>
              <span>Travel Logistics</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
              Seoul Travel Essentials
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm mt-0.5">
              The practical essentials: SIM cards, payments, power sockets, and tax refunds.
            </p>
          </div>
        </div>

        {/* 4 Quick Hacks Visual Tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {quickHacks.map((hack, idx) => (
            <div key={idx} className="bg-white border border-stone-200/90 rounded-2xl p-4 shadow-2xs space-y-1.5">
              <div className="text-2xl">{hack.icon}</div>
              <div className="font-bold text-xs text-stone-900">{hack.title}</div>
              <p className="text-xs text-stone-600 leading-snug">{hack.tip}</p>
            </div>
          ))}
        </div>

        {/* 1330 Emergency Hotline Banner */}
        <div className="bg-emerald-600 text-white rounded-3xl p-5 sm:p-6 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-emerald-700/80 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider">
              <PhoneCall className="w-3.5 h-3.5" />
              <span>24/7 English Tourist Lifeline</span>
            </div>
            <h3 className="text-lg font-serif font-bold">
              Korea Travel Hotline: Dial 1330
            </h3>
            <p className="text-xs text-emerald-100 leading-relaxed">
              Lost? Need instant translation with a taxi driver? In an emergency? Dial <strong>1330</strong> from any phone in Korea for free, polite English telephone assistance from the Korea Tourism Organization.
            </p>
          </div>
          <div className="shrink-0 bg-white text-emerald-950 font-bold px-4 py-2.5 rounded-2xl text-sm shadow-xs font-mono">
            📞 1330
          </div>
        </div>

        {/* Categories Bar */}
        <div>
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-2 rounded-xl whitespace-nowrap font-medium transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-stone-900 text-white font-semibold shadow-xs'
                    : 'bg-white border border-stone-200 text-stone-700 hover:border-stone-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Essentials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-stone-200/90 rounded-2xl p-5 shadow-2xs hover:shadow-xs hover:border-stone-400 transition-all flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-2 py-0.5 rounded-md">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-base font-serif font-bold text-stone-900">
                  {item.title}
                </h3>

                <p className="text-xs text-stone-600 leading-relaxed">
                  {item.summary}
                </p>

                {/* Key Points */}
                <div className="bg-stone-50 p-3 rounded-xl border border-stone-100 space-y-1.5">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-stone-500">
                    Key Facts:
                  </div>
                  <ul className="text-xs text-stone-700 space-y-1">
                    {item.keyPoints.slice(0, 3).map((pt, i) => (
                      <li key={i} className="flex items-baseline gap-1.5 leading-snug">
                        <CheckCircle className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Actionable Tip */}
              <div className="text-[11px] text-stone-500 pt-2 border-t border-stone-100 flex items-start gap-1.5">
                <span className="font-bold text-stone-800 shrink-0">Pro-Tip:</span>
                <span className="line-clamp-2">{item.practicalTips[0]}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
