import { ExploreInterest } from '../types';

export const EXPLORE_INTERESTS: ExploreInterest[] = [
  // FOOD INTERESTS
  {
    id: 'exp-korean-bbq-meat',
    title: 'Authentic Korean BBQ & Charcoal Grills',
    category: 'Food',
    tagline: 'Sizzling pork belly, aged Hanwoo beef & convivial soju tables',
    description: 'Experience Korea’s quintessential communal dining ritual. Wrap hot grilled meat in fresh perilla leaves with fermented ssamjang paste, garlic, and scallion salad.',
    topNeighbourhoodIds: ['euljiro', 'hongdae', 'gangnam', 'garosugil'],
    relatedCategoryKeys: ['Korean BBQ', 'Dinner', 'Late Night'],
    highlights: [
      'Geumdwaeji Sikdang (Gold Pig) bone-in pork belly in Euljiro/Yaksu',
      'Mapo charcoal BBQ alleys near Gongdeok',
      'Nonhyeon-dong premium Hanwoo aged beef in Gangnam'
    ]
  },
  {
    id: 'exp-street-food-markets',
    title: 'Street Food & Historic Night Markets',
    category: 'Food',
    tagline: 'Mung bean pancakes, hotteok, spicy tteokbokki & bustling alleys',
    description: 'Immerse your senses in sizzling hot griddles, steam rising from fish cake vats, and vibrant plastic stool seating inside centuries-old traditional markets.',
    topNeighbourhoodIds: ['dongdaemun', 'myeongdong', 'euljiro'],
    relatedCategoryKeys: ['Street Food', 'Tteokbokki', 'Market Stall'],
    highlights: [
      'Gwangjang Market mung bean pancakes (bindaetteok) and Mayak Gimbap',
      'Myeongdong evening pedestrian street food carts (grilled cheese lobster, egg bread)',
      'Sindang-dong Cook-At-Table Tteokbokki Town'
    ]
  },
  {
    id: 'exp-cafe-culture-bakeries',
    title: 'Aesthetic Cafes & Artisanal Bakeries',
    category: 'Food',
    tagline: 'Converted industrial roasteries, Hanok tea courtyards & viral pastries',
    description: 'Seoul boasts one of the most innovative cafe cultures on earth—from cavernous red-brick warehouse roasteries to tranquil Hanok courtyards with bamboo water gardens.',
    topNeighbourhoodIds: ['seongsu', 'ikseondong', 'yeonnam', 'apgujeong', 'hannam'],
    relatedCategoryKeys: ['Cafes & Bakeries', 'Desserts', 'Trendy Bistro'],
    highlights: [
      'Cafe Onion & Daelim Changgo inside converted industrial factories in Seongsu',
      'Cheongsudang’s stepping-stone bamboo pond in Ikseon-dong',
      'London Bagel Museum & Minute Papillon churros in Dosan Park',
      'Yeonnam-dong residential boutique bakeries along Gyeongui Line Forest Park'
    ]
  },
  {
    id: 'exp-comfort-noodles-soups',
    title: 'Soulful Korean Soups, Stews & Noodles',
    category: 'Food',
    tagline: 'Deep bone broths, knife-cut noodles & chilled buckwheat bowls',
    description: 'Discover the restorative power of Korean broths: bubbling chicken samgyetang stuffed with ginseng and sticky rice, rich garlic kalguksu, and chilled Pyeongyang naengmyeon.',
    topNeighbourhoodIds: ['bukchon', 'myeongdong', 'euljiro', 'dongdaemun'],
    relatedCategoryKeys: ['Ginseng Chicken', 'Kalguksu', 'Naengmyeon', 'Korean Noodles'],
    highlights: [
      'Tosokchon Samgyetang in a traditional Hanok near Gyeongbokgung',
      'Myeongdong Kyoja Michelin Bib Gourmand handmade knife-cut noodles and dumplings',
      'Woo Lae Oak pure beef broth Pyeongyang cold noodles operating since 1946',
      'Hadongkwan’s clear Hanwoo beef bone gomtang'
    ]
  },

  // SHOPPING INTERESTS
  {
    id: 'exp-k-beauty-skincare',
    title: 'Korean Skincare & K-Beauty Meccas',
    category: 'Shopping',
    tagline: 'Viral sunscreens, sheet masks, cushion foundations & sensory perfumeries',
    description: 'Everything for your 10-step skincare routine and trending Korean cosmetics with immediate tax-free savings at multi-level flagship stores.',
    topNeighbourhoodIds: ['myeongdong', 'seongsu', 'apgujeong', 'hannam'],
    relatedCategoryKeys: ['Olive Young Flagship', 'Korean Skincare & Beauty'],
    highlights: [
      'Olive Young Myeongdong Town 2-story global flagship emporium',
      'HAUS DOSAN sensory experience with Tamburins fragrances & Gentle Monster eyewear',
      'Amore Seongsu customized foundation & skincare laboratory',
      'Nonfiction & Tamburins aesthetic showrooms in Hannam-dong'
    ]
  },
  {
    id: 'exp-k-fashion-streetwear',
    title: 'K-Fashion & Avant-Garde Streetwear',
    category: 'Shopping',
    tagline: 'Minimalist tailoring, viral graphic silhouettes & independent designer concepts',
    description: 'Explore the epicenter of Asian fashion trends. From accessible heavyweight basics to experimental runways, discover where Seoul’s stylish youth shop.',
    topNeighbourhoodIds: ['seongsu', 'hongdae', 'hannam', 'garosugil'],
    relatedCategoryKeys: ['K-Fashion & Streetwear', 'Designer Brands'],
    highlights: [
      'Musinsa Standard multi-story flagships in Hongdae and Seongsu',
      'Yeonmujang-gil boutique strip and Empty Seongsu concept showroom',
      'Mardi Mercredi, Marithé & emiss boutique clusters in Hannam-dong',
      'Ader Error Space immersive surrealist concept showrooms'
    ]
  },
  {
    id: 'exp-luxury-designer',
    title: 'High Fashion, Luxury Maisons & Mega Malls',
    category: 'Shopping',
    tagline: 'Architectural luxury pavilions, VIP salons & park-like retail cities',
    description: 'Stroll down Seoul’s most prestigious luxury boulevards and experience futuristic retail destinations that combine fine art and indoor nature.',
    topNeighbourhoodIds: ['cheongdam', 'apgujeong', 'gangnam'],
    relatedCategoryKeys: ['Luxury & High Fashion', 'Department Stores'],
    highlights: [
      'Cheongdam Luxury Fashion Street architectural pavilions (Dior, Louis Vuitton, Chanel)',
      'The Hyundai Seoul indoor botanical park and luxury creative floors in Yeouido',
      'Galleria Department Store Luxury Hall East and West in Apgujeong',
      'Lotte World Mall & Avenuel luxury shopping complex in Jamsil'
    ]
  },
  {
    id: 'exp-vintage-crafts-kpop',
    title: 'Vintage Flea Markets, Crafts & K-Pop Goods',
    category: 'Shopping',
    tagline: 'Retro thrift piles, mother-of-pearl crafts, official lightsticks & albums',
    description: 'From 90s vintage leather jackets in open-air flea markets to handcrafted Joseon pottery and official K-Pop idol merchandise.',
    topNeighbourhoodIds: ['insadong', 'dongdaemun', 'hongdae'],
    relatedCategoryKeys: ['Vintage & Thrift', 'Souvenirs & Traditional Crafts', 'K-Pop Goods & Albums'],
    highlights: [
      'Dongmyo Vintage Flea Market for 90s retro jackets and film cameras',
      'Ssamziegil & Insadong-gil for mother-of-pearl jewelry boxes, hanji paper & seal carving',
      'Withmuu Hongdae for certified K-Pop lightsticks with testing booths and official albums',
      'Goto Mall (Express Bus Terminal) 880-meter underground bargain apparel corridors'
    ]
  },

  // EXPERIENCES INTERESTS
  {
    id: 'exp-traditional-heritage',
    title: 'Traditional Korea: Palaces & Hanok Villages',
    category: 'Experiences',
    tagline: 'Royal Joseon architecture, tranquil Hanok alleys & tea ceremonies',
    description: 'Step into Korea’s 600-year dynastic legacy. Wander preserved wooden villages, marvel at royal palace changing-of-the-guard ceremonies, and sip herbal teas in quiet courtyards.',
    topNeighbourhoodIds: ['bukchon', 'insadong', 'ikseondong'],
    relatedCategoryKeys: ['Traditional Hanok', 'Temples & Culture'],
    highlights: [
      'Gyeongbokgung and Changdeokgung Royal Palaces (free entry when wearing Hanbok)',
      'Bukchon Hanok Village hillside alleys looking toward modern downtown',
      'Traditional tea ceremonies and seal-carving workshops in Insadong',
      'Jogyesa Buddhist Temple lotus lantern sanctuaries'
    ]
  },
  {
    id: 'exp-modern-skyline-views',
    title: 'Futuristic Architecture & Panoramic Views',
    category: 'Experiences',
    tagline: 'Neo-futuristic landmarks, observation decks & mountain cityscapes',
    description: 'Marvel at Seoul’s dramatic urban contrasts where jagged mountain ridges embrace supertall glass spires and curving titanium landmarks.',
    topNeighbourhoodIds: ['dongdaemun', 'jamsil', 'yongsan', 'euljiro'],
    relatedCategoryKeys: ['Experiences', 'Things to See'],
    highlights: [
      'Dongdaemun Design Plaza (DDP) fluid aluminum architecture illuminated after dark',
      'Seoul Sky Observatory at Lotte World Tower (500 meters above the Han River)',
      'N Seoul Tower cable car and mountaintop panoramic sunset deck',
      'Sewoon Plaza elevated observation deck overlooking old Seoul roofs'
    ]
  },
  {
    id: 'exp-nightlife-busking',
    title: 'Youth Culture, Live Busking & Nightlife',
    category: 'Experiences',
    tagline: 'Street dance covers, indie live clubs, retro pocha & late-night beer tables',
    description: 'Seoul comes alive after sundown. From open-air youth busking performances to outdoor plastic stool beer alleys and covert speakeasy cocktail bars.',
    topNeighbourhoodIds: ['hongdae', 'euljiro', 'itaewon', 'gangnam'],
    relatedCategoryKeys: ['Late Night', 'Casual Eatery'],
    highlights: [
      'Hongdae pedestrian street busking (live K-Pop dance routines & acoustic performances)',
      'Euljiro Nogari Alley outdoor plastic beer table plazas under neon signs',
      'Hidden 3rd-floor speakeasy cocktail bars without signs in Euljiro ("Hipjiro")',
      'Itaewon and Haebangchon rooftop lounges overlooking night city lights'
    ]
  },
  {
    id: 'exp-scenic-parks-riverside',
    title: 'Parks, Riverside Chills & Scenic Walks',
    category: 'Experiences',
    tagline: 'Han River ramen picnics, forest trails & romantic lake perimeters',
    description: 'Unwind like a local in Seoul’s generous green corridors. Rent a bicycle, order instant delivery chicken by the river, or stroll under cherry blossom avenues.',
    topNeighbourhoodIds: ['yeonnam', 'seongsu', 'jamsil', 'garosugil'],
    relatedCategoryKeys: ['Things to Do', 'Scenic areas'],
    highlights: [
      'Hangang Park picnic culture: cooking instant foil-bowl ramyeon at convenience store machines',
      'Gyeongui Line Forest Park ("Yeontral Park") lawn relaxation in Yeonnam-dong',
      'Seoul Forest urban deer park and gingko tree avenues adjacent to Seongsu cafes',
      'Seokchon Lake 2.5km walking loop around Lotte World Magic Island'
    ]
  }
];
