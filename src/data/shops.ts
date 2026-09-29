import { Shop } from '../types';

export const SHOPS_DATA: Shop[] = [
  {
    id: 'shop-olive-young-myeongdong-town',
    name: 'Olive Young Myeongdong Town Flagship',
    koreanName: '올리브영 명동타운점',
    category: 'Olive Young Flagship',
    neighbourhood: 'Myeongdong',
    address: '53 Myeongdong-gil, Jung-gu, Seoul',
    priceLevel: '$$',
    whatToBuy: [
      'Trending Sunscreens (Round Lab Birch Juice, Skin1004 Hyalu-Cica, Beauty of Joseon)',
      'Sheet Masks (Torriden Dive-In, Mediheal Tea Tree, Abib Gummy Sheet)',
      'Soothing Serums & Toners (Anua Heartleaf 77%, Mixsoon Bean Essence, numbuzin No. 3)',
      'Cushion Foundations & Lip Tints (Rom&nd, Clio Kill Cover, TirTir Mask Fit, fwee)'
    ],
    koreanBrands: ['Round Lab', 'Torriden', 'Beauty of Joseon', 'Skin1004', 'Anua', 'Rom&nd', 'Clio', 'Medicube', 'd’Alba', 'fwee'],
    openingHours: '10:00 – 22:30 daily',
    whyVisit: 'The largest Olive Young store in South Korea, spanning two expansive floors with English/Chinese/Japanese speaking beauty advisors and designated "Global Traveler Top 10" beauty islands.',
    usefulTips: 'Bring your physical passport! Immediate tax deduction is applied directly at checkout when purchases exceed ₩15,000. Look out for the "1+1" (buy one get one free) promotional shelf tags.',
    taxRefundInfo: 'Instant Tax Refund available at registers for foreign passport holders with single transactions between ₩15,000 and ₩1,000,000.',
    locationInfo: {
      nearestStation: 'Euljiro 1-ga Station (Line 2)',
      exitNumber: 'Exit 6 (approx. 250m walk) or Myeongdong Station Exit 6',
      naverMapQuery: '올리브영 명동타운'
    },
    source: 'CJ Olive Young Official Global Flagship Portal',
    lastVerified: '2026-08'
  },
  {
    id: 'shop-tamburins-haus-dosan',
    name: 'Tamburins & Gentle Monster (HAUS DOSAN)',
    koreanName: '하우스 도산 (탬버린즈 & 젠틀몬스터)',
    category: 'Korean Skincare & Beauty',
    neighbourhood: 'Apgujeong / Sinsa',
    address: '50 Apgujeong-ro 46-gil, Gangnam-gu, Seoul',
    priceLevel: '$$$',
    whatToBuy: [
      'Tamburins Solid Perfumes & Perfume Shell X (Chamo, Pumkini, Holy Metal)',
      'Egg Lip Balm in aesthetic leather cases',
      'Gentle Monster Avant-Garde Sunglasses & Eyewear collaborations',
      'NUDAKE Artisanal Architectural Pastries (Peak Cake with matcha lava)'
    ],
    koreanBrands: ['Tamburins', 'Gentle Monster', 'NUDAKE'],
    openingHours: '11:00 – 21:00 daily',
    whyVisit: 'Avant-garde sensory concept department store uniting Gentle Monster eyewear, Tamburins fragrances fronted by BLACKPINK’s Jennie, and giant moving kinetic art installations.',
    usefulTips: 'The best-selling Tamburins "Chamo" hand cream and solid perfumes frequently sell out by late afternoon; arrive before 14:00. The NUDAKE cafe in the basement has limited pastry quantities daily.',
    taxRefundInfo: 'Tax refund slips provided at checkout; scan at airport customs or use city refund kiosks.',
    locationInfo: {
      nearestStation: 'Apgujeong Rodeo Station (Suin-Bundang Line)',
      exitNumber: 'Exit 5 (approx. 600m walk towards Dosan Park)',
      naverMapQuery: '하우스도산'
    },
    source: 'IICOMBINED Flagship Retail Guide',
    lastVerified: '2026-08'
  },
  {
    id: 'shop-musinsa-hongdae',
    name: 'Musinsa Standard Hongdae',
    koreanName: '무신사 스탠다드 홍대',
    category: 'K-Fashion & Streetwear',
    neighbourhood: 'Hongdae',
    address: '144 Yanghwa-ro, Mapo-gu, Seoul',
    priceLevel: '$$',
    whatToBuy: [
      'Tailored Wide-Leg Trousers & Slacks',
      'Minimalist Heavyweight Oversized Tees & Hoodies',
      'Contemporary Korean Trench Coats & Puffer Jackets',
      'Affordable everyday wardrobe essentials with modern Seoul silhouettes'
    ],
    koreanBrands: ['Musinsa Standard', 'Musinsa Curated Designer Labels'],
    openingHours: '11:00 – 21:00 daily',
    whyVisit: 'The physical flagship of Korea’s number one fashion platform, offering high-grade fabric essentials and trending K-streetwear cuts at very reasonable prices.',
    usefulTips: 'Features high-tech smart fitting rooms where you can adjust lighting color and shoot styling photos. Download the Musinsa global app for special member discounts.',
    taxRefundInfo: 'Instant Tax Refund processed on-site at checkout for foreign passports (purchases ₩15,000+).',
    locationInfo: {
      nearestStation: 'Hongik University Station (Line 2, AREX, Gyeongui-Jungang)',
      exitNumber: 'Exit 9 (approx. 90m walk along Yanghwa-ro)',
      naverMapQuery: '무신사 스탠다드 홍대'
    },
    source: 'Musinsa Fashion Platform Retail Korea',
    lastVerified: '2026-07'
  },
  {
    id: 'shop-empty-seongsu',
    name: 'Empty Seongsu (E?pty)',
    koreanName: '엠프티 성수',
    category: 'Designer Brands',
    neighbourhood: 'Seongsu',
    address: '97 Seongsui-ro, Seongdong-gu, Seoul',
    priceLevel: '$$$',
    whatToBuy: [
      'Cutting-edge independent Korean designer apparel',
      'Sculptural leather bags and shoes (Matin Kim, Andersson Bell, Kijun)',
      'Subversive unisex streetwear and rare runway capsules',
      'Conceptual jewelry and statement accessories'
    ],
    koreanBrands: ['Matin Kim', 'Andersson Bell', 'Kijun', 'Open YY', 'Low Classic', 'Yueqi Qi', 'Courrèges'],
    openingHours: '11:00 – 20:00 daily',
    whyVisit: 'A multi-story brutalist glass-and-steel concept showroom showcasing the vanguard of independent Korean fashion designers curated by Musinsa’s experimental division.',
    usefulTips: 'Each floor represents a distinct aesthetic tier—from hyper-graphic underground apparel to high-end avant-garde tailoring. Check out the LED media art walls across the staircase.',
    taxRefundInfo: 'Immediate tax refund available at main cashier with valid passport.',
    locationInfo: {
      nearestStation: 'Seongsu Station (Line 2)',
      exitNumber: 'Exit 3 (approx. 80m walk)',
      naverMapQuery: '엠프티 성수'
    },
    source: 'Seoul Fashion Week / Musinsa Experimental Concept Spaces',
    lastVerified: '2026-08'
  },
  {
    id: 'shop-the-hyundai-seoul',
    name: 'The Hyundai Seoul',
    koreanName: '더현대 서울',
    category: 'Department Stores',
    neighbourhood: 'Yeouido',
    address: '108 Yeoui-daero, Yeongdeungpo-gu, Seoul',
    priceLevel: '$$$',
    whatToBuy: [
      'B2 "Creative Ground": K-Fashion pop-ups (Mardi Mercredi, Marithé François Girbaud, Matin Kim, Depound, emiss)',
      'B1 "Tasty Seoul": The largest luxury food hall in Korea with 90+ cult eateries',
      '5F "Sounds Forest": Indoor botanical garden with natural skylight and artisan cafes',
      'Luxury designer fashion, modern tech, and Korean lifestyle gifts'
    ],
    koreanBrands: ['Mardi Mercredi', 'Marithé + François Girbaud Korea', 'Matin Kim', 'Stand Oil', 'Ader Error', 'Sulwhasoo', 'Tamburins'],
    openingHours: 'Mon–Thu 10:30 – 20:00, Fri–Sun 10:30 – 20:30 (Dining floor open until 22:00)',
    whyVisit: 'Seoul’s most acclaimed modern retail landmark—designed like an indoor natural park rather than a mall, featuring all viral K-fashion brands concentrated on the B2 floor.',
    usefulTips: 'Head straight down to B2 for K-fashion or B1 for dining. Weekend lines for viral brand pop-ups require queuing via in-store tablets. Connects directly to Yeouido Station via underground moving walkway.',
    taxRefundInfo: 'Dedicated Foreign Customer Center & Tax Refund lounge on the 6th floor; immediate tax refund also offered at participating cashiers.',
    locationInfo: {
      nearestStation: 'Yeouido Station (Line 5 & Line 9)',
      exitNumber: 'Connected via underground walkway from Exit 3/4',
      naverMapQuery: '더현대 서울'
    },
    source: 'Hyundai Department Store Group / Seoul Architectural Landmark',
    lastVerified: '2026-08'
  },
  {
    id: 'shop-goto-mall',
    name: 'Goto Mall (Express Bus Terminal Underground Mall)',
    koreanName: '고투몰 (강남터미널 지하쇼핑몰)',
    category: 'Shopping Malls & Underground',
    neighbourhood: 'Gangnam / Express Bus Terminal',
    address: 'B1, 200 Sinbanpo-ro, Seocho-gu, Seoul',
    priceLevel: '$',
    whatToBuy: [
      'Trendy affordable Korean fast-fashion (dresses, cardigans, slacks for ₩10,000–₩25,000)',
      'Fashion socks, hair claws, scarves and phone cases (₩1,000–₩5,000)',
      'Bedding, Korean ceramic tablewares, and home interior decor'
    ],
    koreanBrands: ['Independent wholesale boutiques', 'Dongdaemun apparel resellers'],
    openingHours: '10:00 – 22:00 daily (Individual stalls vary)',
    whyVisit: 'Spanning nearly 880 meters underground with over 600 shops, Goto Mall is Seoul’s premier destination for budget-friendly clothing bargains away from rain or cold weather.',
    usefulTips: 'Bring cash (KRW banknotes)! Many vendor stalls offer an extra 10%–15% discount or omit the card surcharge if you pay in cash. Wear comfortable walking shoes—the straight corridor is massive.',
    taxRefundInfo: 'Most small budget stalls do not process tax refunds due to wholesale discount cash pricing.',
    locationInfo: {
      nearestStation: 'Express Bus Terminal Station (Lines 3, 7, 9)',
      exitNumber: 'Exits 8-1 and 8-2 connect directly into the mall entrance',
      naverMapQuery: '고투몰 강남터미널지하쇼핑몰'
    },
    source: 'Seoul Metropolitan Underground Commerce Association',
    lastVerified: '2026-06'
  },
  {
    id: 'shop-ssamziegil-insadong',
    name: 'Ssamziegil & Anyoung Insadong',
    koreanName: '쌈지길 & 안녕인사동',
    category: 'Souvenirs & Traditional Crafts',
    neighbourhood: 'Insadong',
    address: '44 Insadong-gil, Jongno-gu, Seoul',
    priceLevel: '$$',
    whatToBuy: [
      'Handcrafted Mother-of-Pearl (Najeonchilgi) jewelry boxes & pocket mirrors',
      'Artisanal Hanji paper notebooks and handmade calligraphy bookmarks',
      'Modernized Hanbok jackets and daily Korean norigae tassels',
      'Ceramic tea sets and Korean heritage pottery'
    ],
    koreanBrands: ['Local Korean craft artisans', 'National Museum Heritage Goods', 'Monami Concept Store'],
    openingHours: '10:30 – 20:30 daily (Closed on Lunar New Year and Chuseok Day)',
    whyVisit: 'A unique spiral spiraling open-air craft market where you walk upward without stairs, browsing over 70 independent Korean craft studios and heritage souvenir artisans.',
    usefulTips: 'Visit the DIY workshops in the basement (Dooreu DIY workshop) to make your own mother-of-pearl crafts or traditional Korean seal (dojang) engraved with your name in Hangeul.',
    taxRefundInfo: 'Tax refund kiosks available at the complex information desk.',
    locationInfo: {
      nearestStation: 'Anguk Station (Line 3)',
      exitNumber: 'Exit 6 (approx. 200m walk along Insadong-gil)',
      naverMapQuery: '쌈지길 인사동'
    },
    source: 'Insadong Cultural Traditional Preservation Zone',
    lastVerified: '2026-07'
  },
  {
    id: 'shop-dongmyo-flea',
    name: 'Dongmyo Vintage Flea Market',
    koreanName: '동묘 구제시장',
    category: 'Vintage & Thrift',
    neighbourhood: 'Dongdaemun / Dongmyo',
    address: '102-8 Sungin-dong, Jongno-gu, Seoul',
    priceLevel: '$',
    whatToBuy: [
      'Vintage leather bomber jackets & 90s retro windbreakers (₩5,000–₩30,000)',
      'Retro Japanese & Korean film cameras and cassette players',
      'Second-hand vinyl records and quirky antique collectibles',
      'Unique workwear, military jackets, and Y2K denim'
    ],
    koreanBrands: ['Vintage archival pieces', 'Upcycled Korean workwear'],
    openingHours: '10:00 – 18:00 (Weekends offer maximum stalls; weather permitting)',
    whyVisit: 'Seoul’s legendary vintage flea market beloved by Korean streetwear youth and stylists; famous for huge piles of clothes sorted directly on street tarps.',
    usefulTips: 'CASH ONLY! Bring small Korean won bills (₩1,000 and ₩5,000 notes). Bring wet wipes and hand sanitizer, as digging through the clothing piles gets dusty. Bargaining is acceptable for multi-item buys.',
    taxRefundInfo: 'Not available (informal outdoor cash market).',
    locationInfo: {
      nearestStation: 'Dongmyo Station (Line 1 & Line 6)',
      exitNumber: 'Exit 3 (emerges immediately into the flea market stalls)',
      naverMapQuery: '동묘 벼룩시장'
    },
    source: 'Seoul Vintage Culture Archive / Jongno-gu Cultural Tourism',
    lastVerified: '2026-06'
  },
  {
    id: 'shop-withmuu-hongdae',
    name: 'Withmuu Hongdae (AK PLAZA)',
    koreanName: '위드뮤 홍대점 (AK플라자)',
    category: 'K-Pop Goods & Albums',
    neighbourhood: 'Hongdae',
    address: '188 Yanghwa-ro, Mapo-gu, Seoul (AK PLAZA 2F)',
    priceLevel: '$$',
    whatToBuy: [
      'Official K-Pop Lightsticks (BTS ARMY Bomb, Stray Kids Nachimbong, NewJeans Binky Bong, SEVENTEEN Carat Bong)',
      'Latest Korean albums with in-store exclusive photo cards (P事C)',
      'Official artist merch, concert binders, and acrylic standees',
      'Lucky draw photo card vending machines'
    ],
    koreanBrands: ['HYBE', 'SM Entertainment', 'JYP Entertainment', 'YG Entertainment', 'Cube'],
    openingHours: '11:00 – 22:00 daily',
    whyVisit: 'The go-to destination for authentic K-Pop albums and certified official lightsticks with dedicated testing stations where staff check Bluetooth functionality before you buy.',
    usefulTips: 'Staff will test your lightstick with batteries at the counter to ensure the LED circuits work. Album purchases count towards official Hanteo and Circle (Gaon) charts.',
    taxRefundInfo: 'Immediate Tax Refund processed at the register with foreign passport.',
    locationInfo: {
      nearestStation: 'Hongik University Station (Line 2, AREX, Gyeongui-Jungang)',
      exitNumber: 'Exit 4 or 5 (Directly connected to AK PLAZA)',
      naverMapQuery: '위드뮤 홍대점'
    },
    source: 'Withmuu Official Retail Store / Hanteo Chart Certified Store',
    lastVerified: '2026-07'
  },
  {
    id: 'shop-stand-oil-seongsu',
    name: 'Stand Oil Flagship Store Seongsu',
    koreanName: '스탠드오일 성수 플래그십스토어',
    category: 'Accessories & Jewelry',
    neighbourhood: 'Seongsu',
    address: '19 Yeonmujang 11-gil, Seongdong-gu, Seoul',
    priceLevel: '$$',
    whatToBuy: [
      'Chubby Bag & Post Bag (Vegan leather daily shoulder bags in viral pastel colorways)',
      'Butter Bag & Plump Bag with quilted minimalist hardware',
      'Micro mini bag charms and customizable keyring straps',
      'Seasonal travel totes and laptop sleeves'
    ],
    koreanBrands: ['Stand Oil'],
    openingHours: '11:00 – 20:00 daily',
    whyVisit: 'One of Korea’s most viral homegrown contemporary bag brands; the flagship features playful immersive art installations mimicking whimsical beauty salons or subway wagons.',
    usefulTips: 'You browse display sample bags on the 1st floor, take an order voucher card to the register, and receive brand new packaged stock upstairs.',
    taxRefundInfo: 'Immediate tax refund available at the register.',
    locationInfo: {
      nearestStation: 'Seongsu Station (Line 2)',
      exitNumber: 'Exit 3 (approx. 350m walk down Yeonmujang-gil)',
      naverMapQuery: '스탠드오일 성수 플래그십스토어'
    },
    source: 'Stand Oil Korea Brand Flagship',
    lastVerified: '2026-08'
  }
];
