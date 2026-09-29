import React, { useState } from 'react';
import { TIPS_DATA } from '../data/tips';
import { SEOUL_IMAGES } from '../data/images';
import { Lightbulb, Smartphone, Snowflake, Sun, Calendar, AlertOctagon, CheckCircle2, Download } from 'lucide-react';

export const TipsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Apps to Download',
    'First-Timers',
    'Seasons',
    'Holidays',
    'Mistakes to Avoid',
  ];

  const appStack = [
    { name: 'Naver Map', use: 'Essential walking & subway navigation (Google Maps fails)', tag: 'Must-Have #1' },
    { name: 'Papago', use: 'Naver image & camera translator (more accurate than Google Translate)', tag: 'Best Translation' },
    { name: 'Kakao T', use: 'Hailing regular & deluxe taxis with international credit card', tag: 'Taxi & Rides' },
    { name: 'Subway Korea', use: 'Clean color line map, transfer times & train schedules', tag: 'Offline Metro' },
  ];

  const filteredTips =
    activeCategory === 'All'
      ? TIPS_DATA
      : TIPS_DATA.filter((item) => item.category === activeCategory);

  return (
    <section className="py-6 sm:py-10 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-yellow-100 text-yellow-800 text-[11px] font-semibold mb-1">
              <span>💡</span>
              <span>Local Tips & Hacks</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
              Seoul Travel Tips & Seasonal Guide
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm mt-0.5">
              Survive Siberian winter chills, handle monsoon rain, and avoid holiday closures.
            </p>
          </div>
        </div>

        {/* 4 Essential Apps to Download First */}
        <div className="bg-white border border-stone-200/90 rounded-3xl p-5 sm:p-6 shadow-2xs space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Download className="w-5 h-5 text-rose-600" />
              <h3 className="text-sm font-bold text-stone-900 uppercase tracking-wider">
                Download These 4 Apps Before Flying 📲
              </h3>
            </div>
            <span className="text-[11px] text-stone-400">Available on iOS & Android</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {appStack.map((app, idx) => (
              <div key={idx} className="bg-stone-50 border border-stone-200/80 rounded-2xl p-3.5 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs text-stone-900">{app.name}</span>
                  <span className="text-[10px] font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded-md">
                    {app.tag}
                  </span>
                </div>
                <p className="text-xs text-stone-600 leading-snug">{app.use}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Pills */}
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

        {/* Tips Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredTips.map((tip) => (
            <div
              key={tip.id}
              className="bg-white border border-stone-200/90 rounded-2xl p-5 shadow-2xs hover:shadow-xs hover:border-stone-400 transition-all flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md">
                    {tip.category}
                  </span>
                </div>

                <h3 className="text-base font-serif font-bold text-stone-900">{tip.title}</h3>

                <p className="text-xs text-stone-600 leading-relaxed">{tip.description}</p>

                {/* Highlights Checklist */}
                <div className="pt-2 border-t border-stone-100 space-y-1.5">
                  {tip.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-stone-700 leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
