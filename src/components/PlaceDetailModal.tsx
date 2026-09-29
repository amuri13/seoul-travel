import React from 'react';
import { Place, Shop } from '../types';
import { SEOUL_IMAGES, getImageForCategory } from '../data/images';
import { X, MapPin, Clock, ExternalLink, ShieldCheck, Utensils, ShoppingBag, Sparkles, Navigation, Flame, CheckCircle2 } from 'lucide-react';

interface PlaceDetailModalProps {
  item: Place | Shop | null;
  type: 'place' | 'shop';
  isOpen?: boolean;
  onClose: () => void;
}

export const PlaceDetailModal: React.FC<PlaceDetailModalProps> = ({ item, type, onClose }) => {
  if (!item) return null;

  const isPlace = type === 'place';
  const place = isPlace ? (item as Place) : null;
  const shop = !isPlace ? (item as Shop) : null;

  const imageSrc =
    (item as any).imageUrl ||
    getImageForCategory(isPlace ? place!.category : shop!.category);

  const naverMapUrl = `https://map.naver.com/v5/search/${encodeURIComponent(
    isPlace ? place!.locationInfo.naverMapQuery : shop!.locationInfo.naverMapQuery
  )}`;

  const googleMapUrl = isPlace
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place!.locationInfo.googleMapQuery)}`
    : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${shop!.name} ${shop!.address}`)}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div className="bg-white rounded-3xl max-w-xl w-full shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[92vh] animate-in zoom-in-95 duration-150">
        {/* Photo Banner Header */}
        <div className="relative aspect-16/9 w-full overflow-hidden bg-stone-900 shrink-0">
          <img
            src={imageSrc}
            alt={item.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/40 to-black/30" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 p-1.5 text-white/80 hover:text-white bg-black/40 hover:bg-black/70 backdrop-blur-xs rounded-full cursor-pointer transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Category & Price Badges */}
          <div className="absolute top-3 left-3 flex items-center gap-1.5">
            <span className="bg-black/60 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-white/20">
              {isPlace ? place!.category : shop!.category}
            </span>
            <span className="bg-white/90 text-stone-900 text-[10px] font-mono font-bold px-2 py-0.5 rounded-md">
              {item.priceLevel}
            </span>
          </div>

          {/* Bottom Title Bar on Image */}
          <div className="absolute bottom-3 left-4 right-4 text-white">
            <div className="text-xs text-stone-300 font-sans">{item.koreanName}</div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white leading-tight">
              {item.name}
            </h3>
            <div className="flex items-center gap-1 text-xs text-stone-300 mt-1">
              <MapPin className="w-3.5 h-3.5 text-rose-400" />
              <span>{item.neighbourhood}</span>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto p-5 sm:p-6 space-y-4 text-xs sm:text-sm">
          {/* Overview / Known For */}
          <div>
            <h4 className="text-[10px] uppercase tracking-wider text-stone-400 font-bold mb-1">
              {isPlace ? 'What It Is Known For' : 'Why Travellers Visit'}
            </h4>
            <p className="text-stone-800 text-xs sm:text-sm leading-relaxed">
              {isPlace ? place!.knownFor : shop!.whyVisit}
            </p>
          </div>

          {/* Signatures or What to Buy */}
          {isPlace ? (
            <div className="bg-rose-50 border border-rose-100 rounded-2xl p-3.5 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-rose-900 uppercase tracking-wider">
                <Flame className="w-4 h-4 text-rose-600" />
                <span>Signature Dishes</span>
              </div>
              <ul className="text-xs text-rose-950 space-y-1">
                {place!.signatureDishes.map((dish, i) => (
                  <li key={i} className="flex items-baseline gap-2 font-medium">
                    <span className="text-rose-500">•</span>
                    <span>{dish}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="bg-pink-50 border border-pink-100 rounded-2xl p-3.5 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-pink-900 uppercase tracking-wider">
                <ShoppingBag className="w-4 h-4 text-pink-600" />
                <span>What to Buy</span>
              </div>
              <ul className="text-xs text-pink-950 space-y-1">
                {shop!.whatToBuy.map((itemStr, i) => (
                  <li key={i} className="flex items-baseline gap-2 font-medium">
                    <span className="text-pink-500">•</span>
                    <span>{itemStr}</span>
                  </li>
                ))}
              </ul>
              {shop!.koreanBrands.length > 0 && (
                <div className="pt-1.5 text-xs text-stone-600 border-t border-pink-200/60">
                  <strong>Featured Brands:</strong> {shop!.koreanBrands.join(', ')}
                </div>
              )}
            </div>
          )}

          {/* Logistics Box */}
          <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200/80 space-y-2 text-xs">
            <div className="flex items-start gap-2 text-stone-700">
              <MapPin className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-stone-900 block">Address:</span>
                <span>{item.address}</span>
                {isPlace && place!.koreanAddress && (
                  <div className="text-stone-500 text-[11px] mt-0.5 select-all bg-stone-100 px-2 py-0.5 rounded-md w-fit">
                    {place!.koreanAddress} (Show taxi driver)
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-start gap-2 text-stone-700">
              <Clock className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-stone-900 block">Opening Hours:</span>
                <span>{item.openingHours}</span>
              </div>
            </div>

            <div className="flex items-start gap-2 text-stone-700">
              <Navigation className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-stone-900 block">Subway Exit:</span>
                <span>
                  {item.locationInfo.nearestStation} ({item.locationInfo.exitNumber})
                </span>
              </div>
            </div>

            {shop && (
              <div className="flex items-start gap-2 text-stone-700 pt-1 border-t border-stone-200/60">
                <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-stone-900 block">Tax Refund:</span>
                  <span className="text-emerald-700 font-semibold">{shop.taxRefundInfo}</span>
                </div>
              </div>
            )}
          </div>

          {/* Useful Local Tip */}
          <div className="bg-amber-50/70 border border-amber-200/80 p-3.5 rounded-2xl text-xs text-amber-950">
            <span className="font-bold text-amber-900 block mb-0.5">💡 Local Guide Tip:</span>
            <p className="leading-relaxed">{item.usefulTips}</p>
          </div>
        </div>

        {/* Map Actions Footer */}
        <div className="p-4 bg-stone-50 border-t border-stone-200 flex items-center justify-between gap-3 shrink-0">
          <a
            href={googleMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 border border-stone-300 hover:bg-stone-100 rounded-xl text-xs font-semibold text-stone-700 transition-colors flex items-center gap-1.5"
          >
            <span>Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <a
            href={naverMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5 shadow-xs"
          >
            <span>Open in Naver Map 📍</span>
            <ExternalLink className="w-3.5 h-3.5 text-stone-300" />
          </a>
        </div>
      </div>
    </div>
  );
};
