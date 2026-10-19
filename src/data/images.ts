// Central image registry for Seoul & Jeju Travel Guide
import heroSkyline from '@/src/assets/images/seoul_hero_skyline_1790586781629.jpg';
import foodSpread from '@/src/assets/images/seoul_food_spread_1790586801979.jpg';
import koreanBbq from '@/src/assets/images/seoul_korean_bbq_1790587773105.jpg';
import koreanChimaek from '@/src/assets/images/seoul_korean_chimaek_1790587787244.jpg';
import streetFood from '@/src/assets/images/seoul_street_food_1790587688857.jpg';
import cafeInterior from '@/src/assets/images/seoul_cafe_interior_1790587674267.jpg';
import skincareShop from '@/src/assets/images/seoul_skincare_shop_1790587703041.jpg';
import fashionStore from '@/src/assets/images/seoul_fashion_store_1790587801296.jpg';
import myeongdongStreet from '@/src/assets/images/seoul_myeongdong_street_1790587642614.jpg';
import hongdaeYouth from '@/src/assets/images/seoul_hongdae_youth_1790587658772.jpg';
import seongsuStreet from '@/src/assets/images/seoul_seongsu_street_1790586827064.jpg';
import bukchonHanok from '@/src/assets/images/seoul_bukchon_hanok_1790586842602.jpg';
import metroTransit from '@/src/assets/images/seoul_metro_transit_1790587717561.jpg';
import jejuRainbowRoad from '@/src/assets/images/jeju_rainbow_road_1790666152200.jpg';
import jejuTangerineFarm from '@/src/assets/images/jeju_tangerine_farm_1790666171286.jpg';
import jejuCliff from '@/src/assets/images/jeju_cliff_ocean_1790666187097.jpg';

export const SEOUL_IMAGES = {
  heroSkyline,
  foodSpread,
  koreanBbq,
  koreanChimaek,
  streetFood,
  cafeInterior,
  skincareShop,
  fashionStore,
  myeongdongStreet,
  hongdaeYouth,
  seongsuStreet,
  bukchonHanok,
  metroTransit,
  jejuRainbowRoad,
  jejuTangerineFarm,
  jejuCliff,

  // Curated category & area visuals (Verified live & high-resolution)
  bibimbap: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=800&q=80',
  ginsengChicken: 'https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=800&q=80',
  noodles: 'https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&w=800&q=80',
  tteokbokki: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80',
  gangnam: 'https://images.unsplash.com/photo-1538485399081-7191377e8241?auto=format&fit=crop&w=800&q=80',
  itaewon: 'https://images.unsplash.com/photo-1546874177-9e664107314e?auto=format&fit=crop&w=800&q=80',
  insadong: 'https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?auto=format&fit=crop&w=800&q=80',
  hanRiver: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?auto=format&fit=crop&w=800&q=80',
  nightView: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
  kpop: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80',
  tmoneyCard: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
  simCard: 'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=800&q=80',
  convenienceStore: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=800&q=80',
  jejuCoast: 'https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=800&q=80',
  bakeryPastry: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
  manduDumplings: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=800&q=80',
  koreanTemple: 'https://images.unsplash.com/photo-1548115184-bc6544d06a58?auto=format&fit=crop&w=800&q=80',
};

// Safe fallback image constant (bundled asset)
export const FALLBACK_IMAGE = foodSpread;

// Helper to get image by category or tags with guaranteed fallbacks
export function getImageForCategory(cat: string, fallback = foodSpread): string {
  if (!cat) return fallback;
  const c = cat.toLowerCase();
  if (c.includes('jeju') || c.includes('rainbow') || c.includes('seogwipo')) return jejuRainbowRoad;
  if (c.includes('tangerine') || c.includes('orange')) return jejuTangerineFarm;
  if (c.includes('cliff') || c.includes('jusangjeolli') || c.includes('coast') || c.includes('ocean')) return jejuCliff;
  if (c.includes('bbq') || c.includes('pork') || c.includes('beef') || c.includes('samgyeopsal')) return koreanBbq;
  if (c.includes('chicken') || c.includes('chimaek') || c.includes('fried chicken')) return koreanChimaek;
  if (c.includes('street') || c.includes('snack') || c.includes('market') || c.includes('bindaetteok')) return streetFood;
  if (c.includes('tteokbokki')) return SEOUL_IMAGES.tteokbokki;
  if (c.includes('ginseng') || c.includes('samgyetang')) return SEOUL_IMAGES.ginsengChicken;
  if (c.includes('noodle') || c.includes('kalguksu') || c.includes('naengmyeon')) return SEOUL_IMAGES.noodles;
  if (c.includes('bibimbap')) return SEOUL_IMAGES.bibimbap;
  if (c.includes('cafe') || c.includes('coffee') || c.includes('bakery') || c.includes('dessert') || c.includes('bread')) return cafeInterior;
  if (c.includes('beauty') || c.includes('skin') || c.includes('cosmetic') || c.includes('olive young')) return skincareShop;
  if (c.includes('fashion') || c.includes('streetwear') || c.includes('brand') || c.includes('luxury') || c.includes('designer')) return fashionStore;
  if (c.includes('subway') || c.includes('bus') || c.includes('train') || c.includes('airport') || c.includes('transit')) return metroTransit;
  if (c.includes('myeongdong')) return myeongdongStreet;
  if (c.includes('hongdae') || c.includes('youth') || c.includes('nightlife')) return hongdaeYouth;
  if (c.includes('seongsu')) return seongsuStreet;
  if (c.includes('bukchon') || c.includes('hanok') || c.includes('insadong') || c.includes('palace') || c.includes('temple')) return bukchonHanok;
  if (c.includes('gangnam') || c.includes('apgujeong')) return SEOUL_IMAGES.gangnam;
  if (c.includes('itaewon') || c.includes('hannam')) return SEOUL_IMAGES.itaewon;
  if (c.includes('kpop') || c.includes('album')) return SEOUL_IMAGES.kpop;
  return fallback;
}

// Global image error handler for <img> elements: replaces broken src with contextual fallback
export function handleImageError(e: React.SyntheticEvent<HTMLImageElement, Event>, category?: string) {
  const target = e.currentTarget;
  const fallback = category ? getImageForCategory(category) : FALLBACK_IMAGE;
  if (target.src !== fallback) {
    target.src = fallback;
  }
}
