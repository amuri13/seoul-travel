import React, { useState } from 'react';
import { CULTURE_DATA } from '../data/culture';
import { SEOUL_IMAGES } from '../data/images';
import { BookOpen, CheckCircle, XCircle, Volume2, Sparkles, MessageSquare } from 'lucide-react';

export const CultureSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(CULTURE_DATA[0].category);
  const [speakingPhrase, setSpeakingPhrase] = useState<string | null>(null);

  const activeTopic =
    CULTURE_DATA.find((c) => c.category === activeCategory) || CULTURE_DATA[0];

  const playPronunciation = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ko-KR';
      utterance.rate = 0.85;
      setSpeakingPhrase(text);
      utterance.onend = () => setSpeakingPhrase(null);
      utterance.onerror = () => setSpeakingPhrase(null);
      window.speechSynthesis.speak(utterance);
    }
  };

  const goldenRules = [
    {
      do: 'Use the Table Call Bell (딩동)',
      dont: 'Wave arms or shout across the room',
      desc: 'Most Korean casual eateries have a bell on the tabletop edge. Press it once and staff will arrive.'
    },
    {
      do: 'Pull open the Side Drawer',
      dont: 'Wait for staff to bring utensils',
      desc: 'Chopsticks, metal spoons, and napkins are stored in a pull-out drawer built into the side of the table.'
    },
    {
      do: 'Enjoy Free Banchan Refills',
      dont: 'Tip servers at the end of meals',
      desc: 'Side dishes (kimchi, pickled radish) can be refilled for free. Tipping is strictly NOT part of Korean culture.'
    },
    {
      do: 'Use Two Hands to Receive',
      dont: 'Hand cards or drinks with one hand',
      desc: 'Offer and receive payment cards, cups, or gifts using both hands (or touch right forearm with left hand).'
    }
  ];

  return (
    <section className="py-6 sm:py-10 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-100 text-cyan-800 text-[11px] font-semibold mb-1">
              <span>🎎</span>
              <span>Korean Etiquette & Phrases</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
              Culture, Table Manners & Key Phrases
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm mt-0.5">
              Simple local habits that make ordering, dining, and transit comfortable and polite.
            </p>
          </div>
        </div>

        {/* Visual Photo Banner */}
        <div className="relative rounded-3xl overflow-hidden shadow-xs border border-stone-200 aspect-16/7 bg-stone-900">
          <img
            src={SEOUL_IMAGES.bukchonHanok}
            alt="Traditional Korean Hanok architecture and culture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/40 to-transparent p-6 flex flex-col justify-end text-white">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-bold mb-1">
              Communal Harmony & Warmth (Jeong · 정)
            </span>
            <p className="text-xs sm:text-sm text-stone-200 max-w-2xl font-serif">
              Korean hospitality is generous and fast-paced. Mastering these quick gestures ensures respect and friendly smiles wherever you travel.
            </p>
          </div>
        </div>

        {/* 4 Golden Dining Rules Visual Cards */}
        <div>
          <div className="text-xs font-bold text-stone-700 uppercase tracking-wider mb-2 px-1">
            4 Golden Rules Every Traveler Should Know
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {goldenRules.map((rule, idx) => (
              <div key={idx} className="bg-white border border-stone-200/90 rounded-2xl p-4 shadow-2xs space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-lg">
                  <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">DO: {rule.do}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-rose-700 bg-rose-50 px-2 py-1 rounded-lg">
                  <XCircle className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">DON'T: {rule.dont}</span>
                </div>
                <p className="text-xs text-stone-600 leading-snug pt-1">
                  {rule.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Category Selector */}
        <div>
          <div className="text-xs font-bold text-stone-700 uppercase tracking-wider mb-2 px-1">
            Explore Etiquette by Situation
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs">
            {CULTURE_DATA.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.category)}
                className={`px-3.5 py-2 rounded-xl font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  activeTopic.category === c.category
                    ? 'bg-stone-900 text-white font-semibold shadow-xs'
                    : 'bg-white border border-stone-200 text-stone-700 hover:border-stone-400'
                }`}
              >
                {c.title}
              </button>
            ))}
          </div>
        </div>

        {/* Active Etiquette Card */}
        <div className="bg-white border border-stone-200/90 rounded-2xl p-6 shadow-xs space-y-6">
          <div className="pb-3 border-b border-stone-100">
            <h3 className="text-xl font-serif font-bold text-stone-900">
              {activeTopic.title}
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              {activeTopic.summary}
            </p>
          </div>

          {/* Do's and Don'ts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-emerald-50/60 border border-emerald-100 rounded-xl p-4 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-900 uppercase tracking-wider">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Polite Practices (Do's)</span>
              </div>
              <ul className="text-xs text-emerald-950 space-y-2">
                {activeTopic.guidelines.do.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold shrink-0">✓</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-rose-50/60 border border-rose-100 rounded-xl p-4 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-rose-900 uppercase tracking-wider">
                <XCircle className="w-4 h-4 text-rose-600" />
                <span>What to Avoid (Don'ts)</span>
              </div>
              <ul className="text-xs text-rose-950 space-y-2">
                {activeTopic.guidelines.dont.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-rose-600 font-bold shrink-0">✕</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Useful Korean Phrases with Interactive Audio */}
          {activeTopic.keyPhrases && activeTopic.keyPhrases.length > 0 && (
            <div className="space-y-3 pt-2 border-t border-stone-100">
              <div className="flex items-center gap-1.5 text-xs font-bold text-stone-900 uppercase tracking-wider">
                <MessageSquare className="w-4 h-4 text-rose-600" />
                <span>Tap Speaker to Hear Pronunciation 🔊</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {activeTopic.keyPhrases.map((phrase, idx) => (
                  <div
                    key={idx}
                    className="bg-stone-50 border border-stone-200/80 rounded-xl p-3 flex items-start justify-between gap-3 group hover:border-stone-400 transition-colors"
                  >
                    <div>
                      <div className="text-base font-bold text-stone-900 font-sans">
                        {phrase.korean}
                      </div>
                      <div className="text-[11px] font-medium text-rose-700 italic">
                        {phrase.pronunciation}
                      </div>
                      <div className="text-xs text-stone-600 mt-1">
                        {phrase.english}
                      </div>
                      {phrase.whenToUse && (
                        <div className="text-[10px] text-stone-400 mt-0.5">
                          {phrase.whenToUse}
                        </div>
                      )}
                    </div>

                    <button
                      onClick={() => playPronunciation(phrase.korean)}
                      className={`p-2 rounded-lg transition-colors cursor-pointer shrink-0 ${
                        speakingPhrase === phrase.korean
                          ? 'bg-rose-600 text-white animate-pulse'
                          : 'bg-white text-stone-700 hover:bg-stone-200 border border-stone-200'
                      }`}
                      title="Listen"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
