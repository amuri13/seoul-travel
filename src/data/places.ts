import { Place } from '../types';

export const PLACES_DATA: Place[] = [
  {
    "id": "place-jeju-sinjungsangan-black-pork-3912",
    "name": "Jeju Sinjungsangan Black Pork",
    "koreanName": "신중산간 제주 흑돼지",
    "category": "Korean BBQ",
    "cuisine": "Jeju Black Pork Charcoal BBQ",
    "neighbourhood": "Jeju Island",
    "address": "142 Sallongnam-ro, Seogwipo-si, Jeju-do",
    "koreanAddress": "제주특별자치도 서귀포시 산록남로 142",
    "priceRange": "₩22,000 – ₩34,000 per person",
    "priceLevel": "$",
    "signatureDishes": [
      "Thick-cut Aged Black Pork Neck (Moksal)",
      "Jeju Pork Belly (Samgyeopsal)",
      "Meljot Dipping Sauce"
    ],
    "knownFor": "Forest-facing contemporary black pork barbecue restaurant known for aged cuts and authentic fermented anchovy dipping sauce.",
    "openingHours": "12:00 – 21:30 daily (Break 15:00–16:30)",
    "usefulTips": "Pair the pork with cold hallabong citrus highball. Reservations recommended via CatchTable or arrive before 17:30.",
    "dietary": {
      "porkFree": false,
      "vegetarianFriendly": false
    },
    "mealType": [
      "Lunch",
      "Dinner"
    ],
    "restaurantType": "Trendy Bistro",
    "locationInfo": {
      "nearestStation": "Jeju Rental Car / Seogwipo",
      "exitNumber": "Free on-site parking",
      "naverMapQuery": "신중산간 흑돼지",
      "googleMapQuery": "Sinjungsangan Jeju Black Pork"
    },
    "source": "Curated Jeju Food Guide 2026",
    "lastVerified": "2026-10",
    "imageUrl": "/src/assets/images/seoul_korean_bbq_1790586940026.jpg"
  },
  {
    id: 'place-tosokchon',
    name: 'Tosokchon Samgyetang',
    koreanName: '토속촌 삼계탕',
    category: 'Ginseng Chicken',
    cuisine: 'Traditional Korean / Ginseng Chicken Soup',
    neighbourhood: 'Bukchon / Gyeongbokgung',
    address: '5 Jahamun-ro 5-gil, Jongno-gu, Seoul',
    koreanAddress: '서울특별시 종로구 자하문로5길 5',
    priceRange: '₩20,000 – ₩32,000 per person',
    priceLevel: '$$',
    signatureDishes: ['Tosokchon Samgyetang (Ginseng Chicken)', 'Black Chicken Samgyetang (Ogogye)', 'Haemul Pajeon (Seafood Pancake)'],
    knownFor: 'Historic Hanok courtyard famous for nourishing ginseng chicken soup, visited by former Korean presidents.',
    openingHours: '10:00 – 21:30 daily (Last order 21:00)',
    usefulTips: 'Expect a line during lunch hours (11:30–13:00). A small cup of insam-ju (ginseng liquor) is served complimentary—drink it directly or pour it into your boiling broth.',
    dietary: {
      porkFree: true,
      halalFriendly: false,
      vegetarianFriendly: false
    },
    mealType: ['Lunch', 'Dinner'],
    restaurantType: 'Traditional Hanok',
    locationInfo: {
      nearestStation: 'Gyeongbokgung Station (Line 3)',
      exitNumber: 'Exit 2 (approx. 180m walk)',
      naverMapQuery: '토속촌 삼계탕',
      googleMapQuery: 'Tosokchon Samgyetang Seoul'
    },
    source: 'Korea Tourism Organization / Michelin Guide Bib Gourmand',
    lastVerified: '2026-06',
    imageUrl: '/src/assets/images/seoul_food_spread_1790586801979.jpg'
  },
  {
    id: 'place-myeongdong-kyoja',
    name: 'Myeongdong Kyoja (Main Branch)',
    koreanName: '명동교자 본점',
    category: 'Kalguksu',
    cuisine: 'Korean Handmade Noodles & Mandu',
    neighbourhood: 'Myeongdong',
    address: '29 Myeongdong 10-gil, Jung-gu, Seoul',
    koreanAddress: '서울특별시 중구 명동10길 29',
    priceRange: '₩11,000 – ₩13,000 per bowl',
    priceLevel: '$',
    signatureDishes: ['Kalguksu (Knife-cut noodle soup with minced meat)', 'Mandu (Steamed pork dumplings)', 'Bibimguksu (Spicy cold noodles)'],
    knownFor: 'Deep, rich chicken and pork broth knife-cut noodles and potent garlic kimchi that has earned Michelin Bib Gourmand honors every year since 2017.',
    openingHours: '10:30 – 21:00 daily (Last order 20:30)',
    usefulTips: 'Payment is required upon ordering at the table. If you finish your noodles, you can ask the staff for free additional noodle refills ("sarie") and rice ("bap"). The kimchi has a very strong fresh garlic kick.',
    dietary: {
      porkFree: false,
      vegetarianFriendly: false
    },
    mealType: ['Lunch', 'Dinner'],
    restaurantType: 'Casual Eatery',
    locationInfo: {
      nearestStation: 'Myeongdong Station (Line 4)',
      exitNumber: 'Exit 8 (approx. 200m walk)',
      naverMapQuery: '명동교자 본점',
      googleMapQuery: 'Myeongdong Kyoja Main'
    },
    source: 'Michelin Guide Seoul Bib Gourmand 2017–2026',
    lastVerified: '2026-07',
    imageUrl: '/src/assets/images/seoul_myeongdong_street_1790587642614.jpg'
  },
  {
    id: 'place-geumdwaeji',
    name: 'Geumdwaeji Sikdang (Gold Pig BBQ)',
    koreanName: '금돼지식당',
    category: 'Korean BBQ',
    cuisine: 'Premium Charcoal-Grilled Pork',
    neighbourhood: 'Euljiro / Sindang',
    address: '149 Dasan-ro, Jung-gu, Seoul',
    koreanAddress: '서울특별시 중구 다산로 149',
    priceRange: '₩19,000 – ₩23,000 per meat portion (150g)',
    priceLevel: '$$',
    signatureDishes: ['BonSamgyeop (Bone-in Pork Belly)', 'DeungMoksal (Pork Neck)', 'Kimchi Jjigae with whole pork'],
    knownFor: 'Cast iron charcoal-grilled YBD hybrid pork, patronized by BTS members and renowned chefs; 5-time Michelin Bib Gourmand pick.',
    openingHours: '11:30 – 23:00 daily (Last order 22:15)',
    usefulTips: 'Uses CatchTable in-person tablet queuing. Register your name by 11:00 for lunch or 16:00 for evening dinner to avoid 2-hour waits. Servers grill and slice the meat entirely at your table.',
    dietary: {
      porkFree: false,
      vegetarianFriendly: false
    },
    mealType: ['Lunch', 'Dinner', 'Late Night'],
    restaurantType: 'Specialty Counter',
    locationInfo: {
      nearestStation: 'Yaksu Station (Line 3 & Line 6)',
      exitNumber: 'Exit 2 (approx. 70m walk)',
      naverMapQuery: '금돼지식당',
      googleMapQuery: 'Geumdwaeji Sikdang Seoul'
    },
    source: 'Michelin Guide Seoul Bib Gourmand',
    lastVerified: '2026-08',
    imageUrl: '/src/assets/images/seoul_food_spread_1790586801979.jpg'
  },
  {
    id: 'place-gwangjang-bindaetteok',
    name: 'Sunhee’s Bindaetteok (Gwangjang Market)',
    koreanName: '순희네 빈대떡 (광장시장)',
    category: 'Street Food',
    cuisine: 'Mung Bean Pancakes & Market Delicacies',
    neighbourhood: 'Dongdaemun / Jongno',
    address: '88 Changgyeonggung-ro, Jongno-gu, Seoul (Inside Gwangjang Market)',
    koreanAddress: '서울특별시 종로구 창경궁로 88 광장시장 내',
    priceRange: '₩5,000 – ₩10,000 per person',
    priceLevel: '$',
    signatureDishes: ['Mung Bean Bindaetteok (Crispy pancake)', 'Wanja (Pork meatballs)', 'Makgeolli (Korean rice wine)'],
    knownFor: 'Freshly ground mung beans fried golden and crispy in corn oil right before your eyes inside Seoul’s oldest continuous street market.',
    openingHours: '09:00 – 21:00 daily',
    usefulTips: 'Dip each bite into the sliced onion soy vinegar sauce. Cash or Korean T-money/debit is preferred at small stalls, though larger kiosks accept credit cards. Combine with Mayak Gimbap from nearby stalls.',
    dietary: {
      vegetarianFriendly: true,
      porkFree: false // Wanja has pork, bindaetteok is vegetable/mung bean
    },
    mealType: ['Lunch', 'Dinner', 'Late Night', 'Cafe/Snack'],
    restaurantType: 'Market Stall',
    locationInfo: {
      nearestStation: 'Jongno 5-ga Station (Line 1)',
      exitNumber: 'Exit 8 (approx. 100m walk into market gate)',
      naverMapQuery: '순희네빈대떡 광장시장',
      googleMapQuery: 'Sunhee Bindaetteok Gwangjang Market'
    },
    source: 'Seoul Tourism Organization / Visit Seoul Guide',
    lastVerified: '2026-05',
    imageUrl: '/src/assets/images/seoul_street_food_1790587688857.jpg'
  },
  {
    id: 'place-woolaeok',
    name: 'Woo Lae Oak',
    koreanName: '우래옥 (又來屋)',
    category: 'Naengmyeon',
    cuisine: 'Pyeongyang Cold Buckwheat Noodles & Bulgogi',
    neighbourhood: 'Euljiro',
    address: '62-29 Changgyeonggung-ro, Jung-gu, Seoul',
    koreanAddress: '서울특별시 중구 창경궁로 62-29',
    priceRange: '₩16,000 for noodles, ₩38,000+ for beef BBQ',
    priceLevel: '$$$',
    signatureDishes: ['Pyeongyang Mul-Naengmyeon (Cold beef broth noodles)', 'Tradition Bulgogi', 'Yukhoe (Korean beef tartare)'],
    knownFor: 'Operating since 1946, celebrated for serving the deepest, 100% pure beef broth Pyeongyang naengmyeon in Seoul with zero fish or dongchimi blend.',
    openingHours: '11:30 – 21:00 (Closed Mondays; Last order 20:30)',
    usefulTips: 'Unlike commercial naengmyeon, authentic Pyeongyang broth is subtly beefy and delicate. Avoid adding mustard or vinegar immediately—taste the clear broth first. Closes strictly on Mondays.',
    dietary: {
      porkFree: true,
      halalFriendly: false,
      vegetarianFriendly: false
    },
    mealType: ['Lunch', 'Dinner'],
    restaurantType: 'Casual Eatery',
    locationInfo: {
      nearestStation: 'Euljiro 4-ga Station (Line 2 & Line 5)',
      exitNumber: 'Exit 4 (approx. 120m walk)',
      naverMapQuery: '우래옥',
      googleMapQuery: 'Woo Lae Oak Seoul'
    },
    source: 'Michelin Guide Seoul Selected 2026 / Historic Seoul Heritage Eatery',
    lastVerified: '2026-07'
  },
  {
    id: 'place-mabongnim',
    name: 'Mabongnim Halmeoni Tteokbokki',
    koreanName: '마복림 할머니 떡볶이',
    category: 'Tteokbokki',
    cuisine: 'Sindang-dong Cook-At-Table Tteokbokki',
    neighbourhood: 'Dongdaemun / Sindang',
    address: '5 Dasan-ro 35-gil, Jung-gu, Seoul (Sindang Tteokbokki Town)',
    koreanAddress: '서울특별시 중구 다산로35길 5',
    priceRange: '₩17,000 (2-person set) – ₩25,000',
    priceLevel: '$',
    signatureDishes: ['2-Person Tteokbokki Set (Rice cakes, fish cakes, ramyeon, jjolmyeon, mandu, hard boiled eggs)', 'Fried Rice finisher'],
    knownFor: 'The historic pioneer of Sindang-dong Tteokbokki Town, serving bubbling cook-at-table pot tteokbokki since 1953 with black soybean paste (chunjang) blended into the gochujang.',
    openingHours: '09:00 – 22:50 (Closed 2nd & 4th Monday of each month)',
    usefulTips: 'Let the broth boil down until noodles soften. When you have finished the solids, order "bokkeumbap" (fried rice) so the server can toast rice with seaweed in the remaining savoury sauce.',
    dietary: {
      vegetarianFriendly: false,
      porkFree: true
    },
    mealType: ['Lunch', 'Dinner', 'Late Night'],
    restaurantType: 'Casual Eatery',
    locationInfo: {
      nearestStation: 'Sindang Station (Line 2 & Line 6)',
      exitNumber: 'Exit 8 (approx. 200m into Tteokbokki Town)',
      naverMapQuery: '마복림할머니떡볶이',
      googleMapQuery: 'Mabongnim Tteokbokki Sindang'
    },
    source: 'Seoul City Heritage Culinary Guide',
    lastVerified: '2026-06'
  },
  {
    id: 'place-balwoo-gongyang',
    name: 'Balwoo Gongyang',
    koreanName: '발우공양',
    category: 'Temple & Vegetarian',
    cuisine: 'Authentic Buddhist Temple Food',
    neighbourhood: 'Insadong',
    address: '56 Ujeongguk-ro, Jongno-gu, Seoul (5F Temple Stay Information Building, opposite Jogyesa Temple)',
    koreanAddress: '서울특별시 종로구 우정국로 56 템플스테이 통합정보센터 5층',
    priceRange: '₩35,000 – ₩95,000 course menus',
    priceLevel: '$$$',
    signatureDishes: ['Seon Course (Seasonal temple multi-course)', 'Yeonip-bap (Steamed lotus leaf sticky rice)', 'Deodeok Root Salad'],
    knownFor: 'Official restaurant operated by the Jogye Order of Korean Buddhism; 100% vegetarian, completely free of the 5 pungent alliums (garlic, onion, scallion, chives, leek) and MSG.',
    openingHours: 'Lunch 11:30 – 15:00, Dinner 18:00 – 21:30 (Closed Sundays)',
    usefulTips: 'Reservations are strongly recommended 1–2 weeks in advance. Private dining rooms provide a peaceful meditative retreat from busy downtown Insadong.',
    dietary: {
      vegetarianFriendly: true,
      veganOptions: true,
      porkFree: true,
      halalFriendly: true
    },
    mealType: ['Lunch', 'Dinner'],
    restaurantType: 'Traditional Hanok',
    locationInfo: {
      nearestStation: 'Anguk Station (Line 3)',
      exitNumber: 'Exit 6 (approx. 350m walk towards Jogyesa)',
      naverMapQuery: '발우공양',
      googleMapQuery: 'Balwoo Gongyang Temple Food Seoul'
    },
    source: 'Michelin Guide 1 Star / Jogye Order of Korean Buddhism',
    lastVerified: '2026-06'
  },
  {
    id: 'place-onion-seongsu',
    name: 'Cafe Onion Seongsu',
    koreanName: '카페 어니언 성수',
    category: 'Cafes & Bakeries',
    cuisine: 'Specialty Coffee & Artisanal Pastries',
    neighbourhood: 'Seongsu',
    address: '8 Achasan-ro 9-gil, Seongdong-gu, Seoul',
    koreanAddress: '서울특별시 성동구 아차산로9길 8',
    priceRange: '₩5,500 – ₩10,000 per drink/pastry',
    priceLevel: '$',
    signatureDishes: ['Pandoro (Mountain of powdered sugar bread)', 'Salt Bread (Sogeum-ppang)', 'Single Origin Pour Over Coffee'],
    knownFor: 'Iconic industrial-chic renovation of a 1970s metal factory with an exposed concrete rooftop, rustic courtyard, and house-baked French/Korean pastries.',
    openingHours: 'Mon–Fri 08:00 – 22:00, Sat–Sun 10:00 – 22:00 (Last order 21:30)',
    usefulTips: 'Head straight to the bakery counter first, pick up your pastries on a tray, and take them to the register with your drink order. Rooftop seating is ideal during sunny afternoons.',
    dietary: {
      vegetarianFriendly: true,
      porkFree: true
    },
    mealType: ['Breakfast', 'Cafe/Snack'],
    restaurantType: 'Trendy Bistro',
    locationInfo: {
      nearestStation: 'Seongsu Station (Line 2)',
      exitNumber: 'Exit 2 (approx. 100m walk)',
      naverMapQuery: '어니언 성수',
      googleMapQuery: 'Cafe Onion Seongsu Seoul'
    },
    source: 'Seoul Architecture & Cafe Review / TimeOut Seoul',
    lastVerified: '2026-08'
  },
  {
    id: 'place-hanchoo',
    name: 'Hanchoo (Hanchu Fried Chicken)',
    koreanName: '한추 (한잔의 추억)',
    category: 'Korean Fried Chicken',
    cuisine: 'Crispy Fried Chicken & Chili Peppers (Chimaek)',
    neighbourhood: 'Garosu-gil / Sinsa',
    address: '68 Nonhyeon-ro 175-gil, Gangnam-gu, Seoul',
    koreanAddress: '서울특별시 강남구 논현로175길 68',
    priceRange: '₩20,000 – ₩25,000 per dish',
    priceLevel: '$$',
    signatureDishes: ['Fried Chicken with spicy peppers in batter (Gochu Hu-raid)', 'Stuffed Fried Green Chili Peppers (Gochu-twigim)', 'Golbaengi Muchim (Spicy sea snails with noodles)'],
    knownFor: 'Unpretentious retro hof bar that minces fresh green chilies directly into the chicken batter, producing an addictive crispy crust that cuts through oiliness.',
    openingHours: '16:00 – 01:00 (Next day) daily (Fri/Sat until 02:00)',
    usefulTips: 'Must order the stuffed chili peppers alongside the chicken. Pairing with draft beer (Cass/Terra) is classic Korean "Chimaek" culture. Arrive around 17:30 to beat the evening crowd.',
    dietary: {
      porkFree: false,
      vegetarianFriendly: false
    },
    mealType: ['Dinner', 'Late Night'],
    restaurantType: 'Casual Eatery',
    locationInfo: {
      nearestStation: 'Apgujeong Station (Line 3)',
      exitNumber: 'Exit 5 (approx. 400m walk) or Sinsa Station Exit 8',
      naverMapQuery: '한추 한잔의추억',
      googleMapQuery: 'Hanchoo Fried Chicken Seoul'
    },
    source: 'Local Food Critics & Seoul Hof Guide',
    lastVerified: '2026-07'
  },
  {
    id: 'place-jinmi-sikdang',
    name: 'Jinmi Sikdang (Ganjang Gejang)',
    koreanName: '진미식당',
    category: 'Seafood',
    cuisine: 'Soy Sauce Marinated Raw Crab (Ganjang Gejang)',
    neighbourhood: 'Mapo / Gongdeok',
    address: '186-6 Mapo-daero, Mapo-gu, Seoul',
    koreanAddress: '서울특별시 마포구 마포대로 186-6',
    priceRange: '₩45,000 per person set',
    priceLevel: '$$$',
    signatureDishes: ['Ganjang Gejang Set (Includes seasonal raw blue crab, gamtae seaweed, steamed egg, banchan, nurungji)'],
    knownFor: 'Widely acknowledged as Seoul’s premier spot for raw blue crabs brimming with orange roe marinated in aged soy sauce, nicknamed the ultimate "Rice Thief" (Bap-docheuk).',
    openingHours: '12:00 – 20:00 (Break 15:30–17:00; Closed Sundays)',
    usefulTips: 'Advance phone reservation or hotel concierge booking is strictly necessary; walk-ins are almost always turned away. Mix hot steamed rice directly into the crab shell with the roe and wrap in gamtae seaweed.',
    dietary: {
      porkFree: true,
      vegetarianFriendly: false,
      halalFriendly: false
    },
    mealType: ['Lunch', 'Dinner'],
    restaurantType: 'Casual Eatery',
    locationInfo: {
      nearestStation: 'Aeogae Station (Line 5)',
      exitNumber: 'Exit 4 (approx. 200m walk) or Gongdeok Station',
      naverMapQuery: '진미식당 마포',
      googleMapQuery: 'Jinmi Sikdang Soy Crab Seoul'
    },
    source: 'Michelin Guide Seoul Bib Gourmand / Blue Ribbon Survey',
    lastVerified: '2026-08'
  },
  {
    id: 'place-mokmeoksanbang',
    name: 'Mokmeoksanbang',
    koreanName: '목멱산방',
    category: 'Bibimbap',
    cuisine: 'Artisanal Korean Bibimbap & Pajeon',
    neighbourhood: 'Myeongdong / Namsan',
    address: '71 Toegye-ro 20-gil, Jung-gu, Seoul (Base of Namsan)',
    koreanAddress: '서울특별시 중구 퇴계로20길 71',
    priceRange: '₩10,000 – ₩15,000 per person',
    priceLevel: '$',
    signatureDishes: ['Wild Herb Bibimbap (Sanchae Bibimbap)', 'Bulgogi Bibimbap', 'Cheese Kimchi Pancake', 'Traditional Omija Tea'],
    knownFor: 'Clean, refined traditional bibimbap using fresh namul (mountain herbs) and chemical-free sesame oil, situated in a tranquil spot near Namsan cable car.',
    openingHours: '11:00 – 20:30 daily (Break 15:00–16:30; Last order 20:00)',
    usefulTips: 'Uses self-service kiosk ordering at the entrance. Each vegetable topping arrives in separate small ceramic dishes so you can adjust your mix. Great meal before or after hiking N Seoul Tower.',
    dietary: {
      vegetarianFriendly: true,
      veganOptions: true,
      porkFree: false
    },
    mealType: ['Lunch', 'Dinner'],
    restaurantType: 'Casual Eatery',
    locationInfo: {
      nearestStation: 'Myeongdong Station (Line 4)',
      exitNumber: 'Exit 3 (approx. 400m walk uphill towards Namsan)',
      naverMapQuery: '목멱산방',
      googleMapQuery: 'Mokmeoksanbang Seoul'
    },
    source: 'Michelin Bib Gourmand Alum / Visit Seoul',
    lastVerified: '2026-06'
  },
  {
    id: 'place-eid-halal',
    name: 'Eid Halal Korean Food',
    koreanName: '이디 (EID) 할랄 한식당',
    category: 'Halal Friendly',
    cuisine: 'Certified Halal Korean Home Cooking',
    neighbourhood: 'Itaewon',
    address: '67 Usadan-ro 10-gil, Yongsan-gu, Seoul',
    koreanAddress: '서울특별시 용산구 우사단로10길 67',
    priceRange: '₩12,000 – ₩18,000 per dish',
    priceLevel: '$',
    signatureDishes: ['Halal Bulgogi Set', 'Samgyetang (Ginseng chicken with Halal poultry)', 'Halal Bibimbap', 'Tteokgalbi'],
    knownFor: 'Officially certified by the Korea Muslim Federation (KMF); family-owned spot serving traditional Korean comfort dishes with authentic flavors using strictly halal ingredients.',
    openingHours: '11:30 – 20:00 (Closed Mondays)',
    usefulTips: 'Located on the hill leading up to the Seoul Central Mosque in Itaewon. Refills of banchan side dishes and soup are provided warmly by the owners.',
    dietary: {
      halalFriendly: true,
      porkFree: true,
      vegetarianFriendly: true
    },
    mealType: ['Lunch', 'Dinner'],
    restaurantType: 'Casual Eatery',
    locationInfo: {
      nearestStation: 'Itaewon Station (Line 6)',
      exitNumber: 'Exit 3 (approx. 450m walk up Usadan-ro)',
      naverMapQuery: 'EID 할랄한식당',
      googleMapQuery: 'EID Halal Korean Food Itaewon'
    },
    source: 'Korea Muslim Federation Halal Certified / Visit Korea Muslim Guide',
    lastVerified: '2026-05'
  },
  {
    id: 'place-cheongsudang',
    name: 'Cheongsudang (Cheong Su Dang Gallery)',
    koreanName: '청수당 (淸水堂)',
    category: 'Desserts',
    cuisine: 'Hanok Souffle Castella & Drip Coffee',
    neighbourhood: 'Ikseon-dong',
    address: '31-9 Donhwamun-ro 11na-gil, Jongno-gu, Seoul',
    koreanAddress: '서울특별시 종로구 돈화문로11나길 31-9',
    priceRange: '₩7,500 – ₩18,000',
    priceLevel: '$$',
    signatureDishes: ['Matcha Fromage Cake', 'Original Castella Souffle (Baked fresh in hot stone pottery)', 'Stone Drip Coffee'],
    knownFor: 'Spellbinding entrance featuring stepping stones across a bamboo forest pond lit with orange hanging lanterns inside a reconstructed traditional Hanok village.',
    openingHours: '10:30 – 22:00 daily (Last order 21:30)',
    usefulTips: 'The castella souffle takes about 20 minutes to bake fresh to order—order it as soon as you find a seat. Take photos on the bamboo stone bridge on your way in.',
    dietary: {
      vegetarianFriendly: true,
      porkFree: true
    },
    mealType: ['Cafe/Snack'],
    restaurantType: 'Traditional Hanok',
    locationInfo: {
      nearestStation: 'Jongno 3-ga Station (Lines 1, 3, 5)',
      exitNumber: 'Exit 4 (approx. 150m walk into Ikseon-dong alleys)',
      naverMapQuery: '청수당 익선동',
      googleMapQuery: 'Cheongsudang Cafe Ikseon-dong Seoul'
    },
    source: 'Seoul Design & Heritage Cafe Feature',
    lastVerified: '2026-07'
  },
  {
    id: 'place-mingles',
    name: 'Mingles',
    koreanName: '밍글스',
    category: 'Fine Dining',
    cuisine: 'Contemporary Korean Hansik Innovation',
    neighbourhood: 'Cheongdam / Gangnam',
    address: '19 Dosan-daero 67-gil, Gangnam-gu, Seoul (2F)',
    koreanAddress: '서울특별시 강남구 도산대로67길 19 2층',
    priceRange: '₩180,000 (Lunch) – ₩320,000 (Dinner) tasting menu',
    priceLevel: '$$$$',
    signatureDishes: ['Jang Trio Dessert (Fermented soybean paste, red chili paste, soy sauce ice cream trio)', 'Seasonal Fish Dumpling in Anchovy Broth', 'Korean Beef (Hanwoo) Tenderloin'],
    knownFor: 'Chef Kang Min-goo’s groundbreaking 2-Michelin-starred restaurant harmoniously uniting Korean ancestral fermented pastes (jangs) with classical European culinary technique.',
    openingHours: 'Lunch 12:00 – 15:00, Dinner 18:00 – 22:00 (Closed Sundays & Mondays)',
    usefulTips: 'Reservations open on the 1st day of each month for the following month via CatchTable Global. Smart casual dress code required.',
    dietary: {
      vegetarianFriendly: false,
      porkFree: false
    },
    mealType: ['Lunch', 'Dinner'],
    restaurantType: 'Fine Dining',
    locationInfo: {
      nearestStation: 'Apgujeong Rodeo Station (Suin-Bundang Line)',
      exitNumber: 'Exit 4 (approx. 400m walk)',
      naverMapQuery: '밍글스 청담',
      googleMapQuery: 'Mingles Restaurant Seoul'
    },
    source: 'Michelin Guide Seoul 2 Stars / Asia’s 50 Best Restaurants',
    lastVerified: '2026-08'
  },
  {
    id: 'place-hadongkwan',
    name: 'Hadongkwan (Myeongdong Main)',
    koreanName: '하동관 명동본점',
    category: 'Korean Noodles',
    cuisine: 'Traditional Gomtang (Clear Beef Bone Soup)',
    neighbourhood: 'Myeongdong',
    address: '12 Myeongdong 9-gil, Jung-gu, Seoul',
    koreanAddress: '서울특별시 중구 명동9길 12',
    priceRange: '₩15,000 – ₩30,000 per bowl',
    priceLevel: '$$',
    signatureDishes: ['Gomtang Normal (Clear beef broth with rice and sliced brisket)', 'Special Gomtang (With tripe and extra cuts)', 'Suyuk (Boiled beef platter)'],
    knownFor: 'Serving pristine, golden-clear Hanwoo beef soup since 1939. One of Seoul’s oldest continuously operating heritage restaurants.',
    openingHours: '07:00 – 16:00 (Closed Sundays; Closes early if broth runs out)',
    usefulTips: 'Early morning breakfast favorite. Order at the cashier upon entering, receive a brass coin ticket, and present it to the table auntie. Top your bowl generously with chopped scallions and kimchi juice ("kkak-guk").',
    dietary: {
      porkFree: true,
      vegetarianFriendly: false
    },
    mealType: ['Breakfast', 'Lunch'],
    restaurantType: 'Casual Eatery',
    locationInfo: {
      nearestStation: 'Euljiro 1-ga Station (Line 2)',
      exitNumber: 'Exit 5 or 6 (approx. 200m walk)',
      naverMapQuery: '하동관 명동본점',
      googleMapQuery: 'Hadongkwan Myeongdong'
    },
    source: 'Seoul City Registered Heritage Restaurant / Michelin Guide Bib Gourmand',
    lastVerified: '2026-07'
  },
  {
    id: 'place-neulbom-jeju',
    name: 'Neulbom Heukdwaeji BBQ',
    koreanName: '늘봄흑돼지 본점',
    category: 'Korean BBQ',
    cuisine: 'Jeju Black Pork BBQ (Heukdwaeji)',
    neighbourhood: 'Jeju Island / Jeju City',
    address: '2343-3 Nohyeong-dong, Jeju-si, Jeju-do',
    koreanAddress: '제주특별자치도 제주시 노형동 2343-3',
    priceRange: '₩22,000 – ₩45,000 per person',
    priceLevel: '$$$',
    signatureDishes: ['Jeju Black Pork Samgyeopsal (Pork Belly)', 'Black Pork Moksal (Pork Neck)', 'Meljeot (Anchovy Dipping Sauce)', 'Doenjang Jjigae'],
    knownFor: 'Premier multi-story Jeju black pork charcoal BBQ landmark. Famous for thick, juicy cutlets with crispy skin and fragrant anchovy dip.',
    openingHours: '11:00 – 23:00 daily',
    usefulTips: 'Family vacation Day 1 dinner! Dip the grilled pork into the bubbling stone bowl of spiced meljeot sauce on the charcoal grill.',
    dietary: {
      vegetarianFriendly: false,
    },
    mealType: ['Lunch', 'Dinner'],
    restaurantType: 'Specialty Counter',
    locationInfo: {
      nearestStation: 'Jeju International Airport (approx. 10 mins by rental car)',
      exitNumber: 'Car parking available',
      naverMapQuery: '늘봄흑돼지 본점',
      googleMapQuery: 'Neulbom Heukdwaeji Jeju'
    },
    source: 'Family Vacation Itinerary / Jeju Tourism Organization',
    lastVerified: '2026-09',
    imageUrl: '/src/assets/images/seoul_korean_bbq_1790587773105.jpg'
  },
  {
    id: 'place-odolang-bakery',
    name: 'Odolang Bakery Hamdeok (Audrant)',
    koreanName: '오드랑베이커리 함덕점',
    category: 'Cafes & Bakeries',
    cuisine: 'Jeju Artisanal Bakery & Pastry',
    neighbourhood: 'Jeju Island / Hamdeok',
    address: '270-1 Hamdeok-ri, Jocheon-eup, Jeju-si, Jeju-do',
    koreanAddress: '제주특별자치도 제주시 조천읍 함덕리 270-1',
    priceRange: '₩4,500 – ₩15,000',
    priceLevel: '$',
    signatureDishes: ['Manon Baguette (Garlic Butter Baguette)', 'Injeolmi Bread', 'Carrot Cake'],
    knownFor: 'Ranked among Jeju’s top bakeries, legendary for its warm Manon Baguette overflowing with rich sweet-savory garlic sauce.',
    openingHours: '07:00 – 22:00 daily',
    usefulTips: 'Family vacation Day 2 tea break! The Manon Baguettes sell out quickly; ask the staff when the next warm oven tray emerges.',
    dietary: {
      vegetarianFriendly: true,
      porkFree: true
    },
    mealType: ['Breakfast', 'Cafe/Snack'],
    restaurantType: 'Casual Eatery',
    locationInfo: {
      nearestStation: 'Hamdeok Beach (approx 3 mins walk)',
      exitNumber: 'Street parking available',
      naverMapQuery: '오드랑베이커리',
      googleMapQuery: 'Audrant Bakery Jeju Hamdeok'
    },
    source: 'Family Vacation Itinerary / Blue Ribbon Survey',
    lastVerified: '2026-09',
    imageUrl: '/src/assets/images/seoul_cafe_interior_1790587674267.jpg'
  },
  {
    id: 'place-jejugot-ramyeon',
    name: 'Jejugot Seogwipo Seafood Ramyeon',
    koreanName: '제주곶 서귀포점',
    category: 'Seafood',
    cuisine: 'Jeju Island Seafood Ramyeon',
    neighbourhood: 'Jeju Island / Seogwipo',
    address: 'Seogwipo Coastal Road, Seogwipo-si, Jeju-do',
    koreanAddress: '제주특별자치도 서귀포시 서귀포 해안로',
    priceRange: '₩12,000 – ₩18,000 per bowl',
    priceLevel: '$$',
    signatureDishes: ['Seogwipo Seafood Ramyeon (Octopus & Crab)', 'Abalone Rice Bowl', 'Prawn Ramyeon'],
    knownFor: 'Vibrant seafood noodle bowls piled high with whole local crab, baby octopus, and abalones in rich, steaming seafood broth.',
    openingHours: '10:00 – 19:30 daily',
    usefulTips: 'Family vacation Day 3 lunch stop before visiting Daepo Jusangjeolli Cliff! Use the provided scissors and tongs to cut the octopus legs into the soup.',
    dietary: {
      vegetarianFriendly: false,
    },
    mealType: ['Lunch'],
    restaurantType: 'Casual Eatery',
    locationInfo: {
      nearestStation: 'Seogwipo Coast (15 mins by car to Jusangjeolli)',
      exitNumber: 'Parking on site',
      naverMapQuery: '제주곶 서귀포점',
      googleMapQuery: 'Jejugot Seogwipo Seafood Ramyeon'
    },
    source: 'Family Vacation Itinerary / Local Food Guide',
    lastVerified: '2026-09',
    imageUrl: '/src/assets/images/seoul_food_spread_1790586801979.jpg'
  },
  {
    id: 'place-jayeondo-seongsu',
    name: 'Jayeondo Sogeumppang (Salt Bread)',
    koreanName: '자연도소금빵 성수',
    category: 'Cafes & Bakeries',
    cuisine: 'Artisanal Butter Salt Bread (Shiopan)',
    neighbourhood: 'Seongsu',
    address: '56 Yeonmujang-gil, Seongdong-gu, Seoul',
    koreanAddress: '서울특별시 성동구 연무장길 56',
    priceRange: '₩12,000 for set of 4 warm breads',
    priceLevel: '$',
    signatureDishes: ['Signature Sea Salt Butter Bread (Fresh Baked 6 times daily)'],
    knownFor: 'The most viral salt bread bakery in Seoul. Golden crispy base fried in French gourmet butter with tender, pillowy salt-sprinkled top.',
    openingHours: '09:00 – 22:00 daily (Sold out batches re-baked at set intervals)',
    usefulTips: 'Family vacation Day 6 afternoon stop! You order at the outdoor kiosk and pick up your bag tied with rustic twine string.',
    dietary: {
      vegetarianFriendly: true,
      porkFree: true
    },
    mealType: ['Cafe/Snack'],
    restaurantType: 'Specialty Counter',
    locationInfo: {
      nearestStation: 'Seongsu Station (Line 2)',
      exitNumber: 'Exit 3 (approx. 350m walk down Yeonmujang-gil)',
      naverMapQuery: '자연도소금빵 성수',
      googleMapQuery: 'Jayeondo Salt Bread Seongsu'
    },
    source: 'Family Vacation Itinerary / Seongsu Food Guide',
    lastVerified: '2026-09',
    imageUrl: '/src/assets/images/seoul_cafe_interior_1790587674267.jpg'
  },
  {
    id: 'place-hanjeongseon-seongsu',
    name: 'Hanjeongseon Fruit Daifuku Mochi',
    koreanName: '한정선 성수',
    category: 'Desserts',
    cuisine: 'Artisanal Fruit Daifuku Mochi',
    neighbourhood: 'Seongsu',
    address: '54-1 Yeonmujang-gil, Seongdong-gu, Seoul',
    koreanAddress: '서울특별시 성동구 연무장길 54-1',
    priceRange: '₩3,500 – ₩6,000 per piece',
    priceLevel: '$',
    signatureDishes: ['Whole Strawberry Mochi (Ddalgi)', 'Shine Muscat Grape Mochi', 'Hongsi Persimmon Mochi'],
    knownFor: 'Exquisite traditional Korean hanji-paper wrapped rice cakes encasing luscious fresh whole fruits and delicate sweet bean paste.',
    openingHours: '11:00 – 21:00 daily',
    usefulTips: 'Family vacation Day 6 dessert! Located right next to Jayeondo salt bread. Eat fresh within a few hours for the juiciest bite.',
    dietary: {
      vegetarianFriendly: true,
      veganOptions: true,
      porkFree: true
    },
    mealType: ['Cafe/Snack'],
    restaurantType: 'Specialty Counter',
    locationInfo: {
      nearestStation: 'Seongsu Station (Line 2)',
      exitNumber: 'Exit 3 (300m walk)',
      naverMapQuery: '한정선 성수',
      googleMapQuery: 'Hanjeongseon Seongsu'
    },
    source: 'Family Vacation Itinerary / Seoul Dessert Guide',
    lastVerified: '2026-09',
    imageUrl: '/src/assets/images/seoul_cafe_interior_1790587674267.jpg'
  },
  {
    id: 'place-myeongdong-joomak',
    name: 'Myeongdong Joomak',
    koreanName: '명동주막',
    category: 'Local Hidden Gems',
    cuisine: 'Traditional Korean Tavern Dishes & Scallion Pancakes',
    neighbourhood: 'Myeongdong',
    address: 'Myeongdong 7-gil, Jung-gu, Seoul',
    koreanAddress: '서울특별시 중구 명동7길',
    priceRange: '₩15,000 – ₩35,000',
    priceLevel: '$$',
    signatureDishes: ['Haemul Pajeon (Seafood Green Onion Pancake)', 'Spicy Stir-Fried Pork (Jeyuk Bokkeum)', 'Kimchi Jjigae'],
    knownFor: 'Rustic tavern setting beloved for crispy giant seafood pancakes and hearty family comfort food after walking Myeongdong.',
    openingHours: '16:00 – 01:00 daily',
    usefulTips: 'Family vacation Day 4 dinner after checking in to Stanford Hotel Myeongdong! Perfect casual meal just steps from hotel.',
    dietary: {
      vegetarianFriendly: false,
    },
    mealType: ['Dinner', 'Late Night'],
    restaurantType: 'Casual Eatery',
    locationInfo: {
      nearestStation: 'Euljiro 1-ga Station (Line 2) / Myeongdong Station (Line 4)',
      exitNumber: 'Euljiro 1-ga Exit 5 (3 mins walk)',
      naverMapQuery: '명동주막',
      googleMapQuery: 'Myeongdong Joomak'
    },
    source: 'Family Vacation Itinerary',
    lastVerified: '2026-09',
    imageUrl: '/src/assets/images/seoul_street_food_1790587688857.jpg'
  },
  {
    id: 'place-seouljip-euljiro',
    name: 'Seouljip (Euljiro)',
    koreanName: '서울집 을지로',
    category: 'Korean BBQ',
    cuisine: 'Korean BBQ & Homestyle Stews',
    neighbourhood: 'Dongdaemun / Euljiro',
    address: 'Eulji-ro 44-gil, 6 2F, Jung District, Seoul',
    koreanAddress: '서울특별시 중구 을지로44길 6 2층',
    priceRange: '₩16,000 – ₩35,000 per person',
    priceLevel: '$$',
    signatureDishes: ['Fresh Samgyeopsal (Pork Belly)', 'Chadolbaki (Thin Beef Brisket)', 'Kimchi Stew'],
    knownFor: 'Generous authentic Korean barbecue and warm hospitality popular with locals near Dongdaemun and Euljiro.',
    openingHours: '11:30 – 22:30 daily',
    usefulTips: 'Family vacation Day 5 dinner after shopping at Lotte Shopping Centre & Hyundai Outlet Dongdaemun!',
    dietary: {
      vegetarianFriendly: false,
    },
    mealType: ['Lunch', 'Dinner'],
    restaurantType: 'Casual Eatery',
    locationInfo: {
      nearestStation: 'Dongdaemun History & Culture Park Station (Lines 2, 4, 5)',
      exitNumber: 'Exit 12 (approx. 200m walk)',
      naverMapQuery: '서울 중구 을지로44길 6',
      googleMapQuery: 'Seouljip Euljiro'
    },
    source: 'Family Vacation Itinerary',
    lastVerified: '2026-09',
    imageUrl: '/src/assets/images/seoul_korean_bbq_1790587773105.jpg'
  },
  {
    id: 'place-yoogane-seoul',
    name: 'Yoogane Chicken Galbi',
    koreanName: '유가네닭갈비',
    category: 'Korean Fried Chicken',
    cuisine: 'Dakgalbi (Spicy Tabletop Stir-Fried Chicken)',
    neighbourhood: 'Myeongdong / Seongsu',
    address: 'Central Seoul Branches',
    koreanAddress: '서울특별시 중구 명동2가',
    priceRange: '₩12,000 – ₩20,000 per person',
    priceLevel: '$$',
    signatureDishes: ['Cheese Dakgalbi (Spicy chicken with melted mozzarella ring)', 'Dakgalbi Fried Rice with Seaweed'],
    knownFor: 'Fun interactive tabletop cast-iron cooking where marinated chicken, cabbage, and rice cakes are stir-fried in front of you.',
    openingHours: '10:30 – 22:30 daily',
    usefulTips: 'Family vacation Day 6 lunch! Make sure to leave some sauce at the end to order the fried rice ("bokkeumbap") mixed on the hot pan.',
    dietary: {
      vegetarianFriendly: false,
      porkFree: true
    },
    mealType: ['Lunch', 'Dinner'],
    restaurantType: 'Casual Eatery',
    locationInfo: {
      nearestStation: 'Multiple convenient Seoul metro exits',
      exitNumber: 'Central locations',
      naverMapQuery: '유가네닭갈비',
      googleMapQuery: 'Yoogane Dakgalbi Seoul'
    },
    source: 'Family Vacation Itinerary',
    lastVerified: '2026-09',
    imageUrl: '/src/assets/images/seoul_korean_chimaek_1790587787244.jpg'
  },
  {
    id: 'place-cafe-onion-anguk',
    name: 'Cafe Onion Anguk',
    koreanName: '어니언 안국점',
    category: 'Cafes & Bakeries',
    cuisine: 'Hanok Specialty Coffee & Artisanal Bakery',
    neighbourhood: 'Bukchon / Insadong',
    address: '5 Gyedong-gil, Jongno-gu, Seoul',
    koreanAddress: '서울특별시 종로구 계동길 5',
    priceRange: '₩5,500 – ₩15,000',
    priceLevel: '$$',
    signatureDishes: ['Pandoro (Mountain of powdered sugar on brioche)', 'Avocado Pollack Roe Baguette', 'Cold Brew Injeolmi Latte'],
    knownFor: 'Majestic Joseon Hanok estate converted into a celebrated bakery cafe. Heated wooden ondol floors and peaceful open courtyards.',
    openingHours: '07:00 – 22:00 (Weekdays) / 09:00 – 22:00 (Weekends)',
    usefulTips: 'Family vacation Day 7 afternoon stop after Gyeongbokgung and Bukchon Hanok! Remove shoes to sit on heated cushions on the wooden Hanok veranda.',
    dietary: {
      vegetarianFriendly: true,
      porkFree: true
    },
    mealType: ['Breakfast', 'Cafe/Snack'],
    restaurantType: 'Traditional Hanok',
    locationInfo: {
      nearestStation: 'Anguk Station (Line 3)',
      exitNumber: 'Exit 3 (approx. 50m walk)',
      naverMapQuery: '어니언 안국',
      googleMapQuery: 'Cafe Onion Anguk Seoul'
    },
    source: 'Family Vacation Itinerary / Seoul Cafe Guide',
    lastVerified: '2026-09',
    imageUrl: '/src/assets/images/seoul_cafe_interior_1790587674267.jpg'
  }
];
