import React, { useState } from 'react';
import { Search, Sparkles, Menu, X, Calendar, Heart } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  onOpenSearch: () => void;
  onOpenAiGuide: (initialQuery?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onTabChange,
  onOpenSearch,
  onOpenAiGuide,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'itinerary', label: 'Our Itinerary', icon: '🗓️', highlight: true },
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'eat', label: 'Eat', icon: '🍜' },
    { id: 'shop', label: 'Shop', icon: '🛍️' },
    { id: 'neighbourhoods', label: 'Districts', icon: '🏙️' },
    { id: 'explore', label: 'Explore', icon: '✨' },
    { id: 'transport', label: 'Transit', icon: '🚇' },
    { id: 'essentials', label: 'Essentials', icon: '🎒' },
    { id: 'culture', label: 'Etiquette', icon: '🎎' },
    { id: 'tips', label: 'Tips', icon: '💡' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200/90 shadow-2xs transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Wordmark: Family Vacation Guide */}
          <button
            onClick={() => onTabChange('home')}
            className="text-left group cursor-pointer focus:outline-none flex items-center gap-2.5"
          >
            <span className="w-8 h-8 rounded-xl bg-gradient-to-tr from-rose-600 to-amber-500 text-white flex items-center justify-center font-bold text-sm shadow-xs group-hover:scale-105 transition-transform">
              🇰🇷
            </span>
            <div>
              <div className="text-base sm:text-lg font-bold tracking-tight text-stone-900 group-hover:text-rose-600 transition-colors font-serif leading-tight flex items-center gap-1.5">
                <span>Seoul & Jeju Holiday</span>
                <span className="hidden sm:inline-block text-[10px] bg-rose-100 text-rose-800 font-sans font-bold px-2 py-0.2 rounded-full">
                  Dec 8–16
                </span>
              </div>
              <div className="text-[10px] font-sans font-medium text-stone-400 tracking-wider uppercase -mt-0.5">
                Family Vacation Handbook
              </div>
            </div>
          </button>

          {/* Nav Links with playful icons */}
          <nav className="hidden xl:flex items-center gap-1 text-xs font-medium text-stone-600">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => onTabChange(link.id)}
                  className={`px-3 py-1.5 rounded-full transition-all cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? link.highlight
                        ? 'bg-rose-600 text-white font-bold shadow-xs'
                        : 'bg-stone-900 text-white font-semibold shadow-xs'
                      : link.highlight
                      ? 'bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-200 font-semibold'
                      : 'hover:bg-stone-100 text-stone-700 hover:text-stone-900'
                  }`}
                >
                  <span className="text-xs">{link.icon}</span>
                  <span>{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Tablet Nav Links (condensed) */}
          <div className="hidden lg:flex xl:hidden items-center gap-1 text-xs font-medium text-stone-600">
            {navLinks.slice(0, 5).map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => onTabChange(link.id)}
                  className={`px-2.5 py-1.5 rounded-full transition-all cursor-pointer flex items-center gap-1 ${
                    isActive
                      ? 'bg-stone-900 text-white font-semibold'
                      : 'hover:bg-stone-100 text-stone-700'
                  }`}
                >
                  <span>{link.icon}</span>
                  <span>{link.label}</span>
                </button>
              );
            })}
          </div>

          {/* Primary Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            <button
              onClick={() => onTabChange('itinerary')}
              className={`lg:hidden px-2.5 py-1.5 rounded-full text-xs font-bold flex items-center gap-1 cursor-pointer transition-colors ${
                activeTab === 'itinerary'
                  ? 'bg-rose-600 text-white'
                  : 'bg-rose-50 text-rose-700 border border-rose-200'
              }`}
            >
              <span>🗓️</span>
              <span>Itinerary</span>
            </button>

            <button
              onClick={onOpenSearch}
              className="px-2.5 sm:px-3 py-1.5 text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-full transition-colors cursor-pointer text-xs font-medium flex items-center gap-1.5"
              title="Search Guide"
            >
              <Search className="w-3.5 h-3.5 text-stone-500" />
              <span className="hidden sm:inline">Search</span>
              <kbd className="hidden md:inline text-[9px] bg-white text-stone-400 border border-stone-200 px-1 py-0.2 rounded font-mono">
                ⌘K
              </kbd>
            </button>

            <button
              onClick={() => onOpenAiGuide()}
              className="px-3 py-1.5 bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white rounded-full text-xs font-semibold shadow-xs flex items-center gap-1.5 cursor-pointer transition-all hover:shadow-sm hover:scale-[1.02]"
            >
              <Sparkles className="w-3.5 h-3.5 text-white animate-pulse" />
              <span>Ask AI</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-lg cursor-pointer ml-1"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Flyout Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-stone-100 py-3 pb-4 space-y-1 bg-white animate-in fade-in duration-150">
            <div className="grid grid-cols-2 gap-1.5 p-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    onTabChange(link.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-medium transition-colors cursor-pointer flex items-center gap-2 ${
                    activeTab === link.id
                      ? 'bg-stone-900 text-white font-semibold'
                      : link.highlight
                      ? 'bg-rose-50 text-rose-800 font-semibold'
                      : 'text-stone-700 hover:bg-stone-100'
                  }`}
                >
                  <span className="text-base">{link.icon}</span>
                  <span>{link.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
