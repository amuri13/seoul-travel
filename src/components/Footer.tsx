import React from 'react';
import { Compass, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (section: string) => void;
  onOpenAiGuide?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800 pt-12 pb-16 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Col */}
          <div className="space-y-3">
            <span className="text-lg font-serif font-bold text-white tracking-tight">
              Seoul & Jeju Family Guide
            </span>
            <p className="text-stone-400 leading-relaxed text-xs">
              Our curated family vacation handbook for December 8–16. Covering Singapore flight transfers,
              Jeju Island coastal road & black pork, Myeongdong shopping, Seongsu bakeries, and Joseon palaces.
            </p>
          </div>

          {/* Directory Links */}
          <div className="space-y-2">
            <div className="font-semibold uppercase tracking-wider text-stone-200 text-[11px]">
              Trip Schedule & Directory
            </div>
            <ul className="space-y-1.5 text-stone-400">
              <li>
                <button onClick={() => onNavigate('itinerary')} className="text-rose-400 hover:text-rose-300 font-semibold transition-colors cursor-pointer">
                  🗓️ 9-Day Family Itinerary (8–16 Dec)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('eat')} className="hover:text-white transition-colors cursor-pointer">
                  Where to Eat (Food & Bakeries)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('shop')} className="hover:text-white transition-colors cursor-pointer">
                  Where to Shop (K-Beauty & Fashion)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('neighbourhoods')} className="hover:text-white transition-colors cursor-pointer">
                  17 Iconic Seoul Neighbourhoods
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('explore')} className="hover:text-white transition-colors cursor-pointer">
                  Explore by Travel Interests
                </button>
              </li>
            </ul>
          </div>

          {/* Sources & Official Guidance */}
          <div className="space-y-3">
            <div className="font-semibold uppercase tracking-wider text-stone-200 text-[11px]">
              Official Sources & Guidance
            </div>
            <p className="text-stone-400 leading-relaxed text-[11px]">
              Factual data curated from Korea Tourism Organization (KTO), Seoul Metropolitan Government,
              Seoul Metro, Michelin Guide Seoul, and direct family field verification.
            </p>
          </div>
        </div>

        {/* Disclaimer & Notice */}
        <div className="pt-8 border-t border-stone-800 text-[11px] text-stone-400 space-y-2">
          <p>
            <strong>Travel Notice:</strong> Opening hours, prices, menu items, transport fares, and government policies can change without prior notice. Always verify hours and locations using Naver Map or local contact numbers before travelling. This guide does not operate booking services or accept promotional endorsements.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-2 text-stone-400">
            <span>© 2026 Seoul Travel Information Guide. All rights reserved.</span>
            <span>Emergency: Police 112 · Fire & Ambulance 119 · Travel Hotline 1330</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
