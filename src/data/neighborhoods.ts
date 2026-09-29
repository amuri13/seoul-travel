import { Neighbourhood } from '../types';

export const NEIGHBOURHOODS_DATA: Neighbourhood[] = [
  {
    id: 'seongsu',
    name: 'Seongsu-dong',
    koreanName: '성수동',
    overview: 'Dubbed the "Brooklyn of Seoul", Seongsu is an old industrial shoe and leather manufacturing district dynamically reborn as Korea’s creative capital of experiential pop-up stores, converted brick warehouse cafes, and avant-garde fashion showrooms.',
    character: 'Industrial heritage meets high-concept fashion; red-brick factories, expansive skylit coffee roasteries, and experimental retail spaces.',
    whatKnownFor: [
      'Viral Brand Pop-up Stores with immersive art installations',
      'Converted factory specialty coffee roasteries and bakeries',
      'Independent K-fashion flagship stores (Empty, Stand Oil, Matin Kim, Ader Error)',
      'Seoul Forest urban park adjacent to trendy craft alleys'
    ],
    foodHighlights: [
      'Sommunnan Seongsu Gamjatang (famous 24hr pork backbone stew)',
      'Artisanal wood-fired sourdough pizzerias and craft noodle bars',
      'Contemporary bistros blending Korean fermentation with natural wines'
    ],
    shoppingHighlights: [
      'Yeonmujang-gil boutique strip',
      'Empty Seongsu concept showroom',
      'Stand Oil flagship and Ader Error Space',
      'Tamburins and Dior Seongsu architectural concept store'
    ],
    cafeHighlights: [
      'Cafe Onion Seongsu (rustic concrete bakery)',
      'Daelim Changgo (cavernous wood & steel art warehouse)',
      'Center Coffee near Seoul Forest'
    ],
    thingsToSee: [
      'Dior Seongsu glass pavilion',
      'Street mural walls along Yeonmujang-gil',
      'Seoul Forest park with deer corral and gingko tree avenues'
    ],
    thingsToDo: [
      'Boutique hopping down Yeonmujang-gil',
      'Check in to weekend pop-up brand experiences for free limited merchandise',
      'Picnic at Seoul Forest with takeout bakery items'
    ],
    typicalVisitors: 'Fashion-forward youth, creative designers, cafe explorers, photography enthusiasts',
    recommendedTime: 'Afternoon to Early Evening (13:00 – 19:30). Many concept stores do not open before 11:30.',
    nearbyNeighbourhoods: ['Konkuk University (Kon-dae)', 'Ttukseom', 'Seoul Forest', 'Wangsimni'],
    howToGetThere: {
      subwayLines: ['Line 2 (Green Line)', 'Suin-Bundang Line (Seoul Forest Station)'],
      mainStations: ['Seongsu Station (Exits 3 & 4)', 'Ttukseom Station', 'Seoul Forest Station'],
      transitTip: 'Take Line 2 to Seongsu Station Exit 3 to start immediately at Yeonmujang-gil, or take Suin-Bundang line to Seoul Forest Station for quieter cafes.'
    },
    practicalTips: [
      'Most viral pop-ups require in-person digital waitlisting on iPads outside the entrance; sign up early in the afternoon.',
      'Wear comfortable shoes; exploring the full perimeter between Seongsu Station and Seoul Forest covers 2–3 kilometers on foot.',
      'Weekends can be very crowded with 30+ minute lines for top cafes.'
    ]
  },
  {
    id: 'myeongdong',
    name: 'Myeongdong',
    koreanName: '명동',
    overview: 'Seoul’s undisputed international shopping epicenter and pedestrian beauty corridor, featuring multi-story cosmetics flagships, currency exchange booths, bustling evening street food carts, and historic cathedrals.',
    character: 'Vibrant, multilingual, neon-lit commercial pedestrian avenues buzzing with global shoppers and street snack aromas.',
    whatKnownFor: [
      'Dense cluster of Korean skincare & beauty mega-stores (Olive Young, Laneige, Innisfree)',
      'Evening street food night market spanning the central grid',
      'Best money changer rates in Seoul (around the Chinese Embassy)',
      'Historic Myeongdong Cathedral (first Catholic parish in Korea)'
    ],
    foodHighlights: [
      'Myeongdong Kyoja (legendary Michelin Bib Gourmand kalguksu & mandu)',
      'Hadongkwan (classic clear beef bone gomtang since 1939)',
      'Night market street food (grilled lobster with cheese, hotteok, egg bread, strawberry mochi)'
    ],
    shoppingHighlights: [
      'Olive Young Myeongdong Town (massive 2-floor flagship)',
      'Lotte Department Store Main & Lotte Young Plaza',
      'Shinsegae Department Store Main Branch',
      'ALAND multi-brand Korean streetwear building'
    ],
    cafeHighlights: [
      'Coin Cafe (nostalgic vintage cafe operating since 1993)',
      'The Spot Fabulous (retro European brick salon opposite the Chinese Embassy)',
      'Molto Italian Espresso Bar (rooftop view of Myeongdong Cathedral)'
    ],
    thingsToSee: [
      'Myeongdong Cathedral (Gothic Revival brick cathedral built in 1898)',
      'Shinsegae Main Media Facade (spectacular winter light show)',
      'Namsan Mountain backdrop looming just south'
    ],
    thingsToDo: [
      'Stock up on tax-free Korean skincare and request complimentary product samples',
      'Graze through the central night food stalls starting around 16:30',
      'Walk up towards Namsan Cable Car to visit N Seoul Tower'
    ],
    typicalVisitors: 'First-time Seoul visitors, beauty shoppers, international tourists, family groups',
    recommendedTime: 'Late Afternoon to Night (16:00 – 21:30) when the street food stalls light up.',
    nearbyNeighbourhoods: ['Euljiro', 'Namdaemun Market', 'Namsan / Hoehyeon', 'Jongno'],
    howToGetThere: {
      subwayLines: ['Line 4 (Light Blue)', 'Line 2 (Green)'],
      mainStations: ['Myeongdong Station (Exits 6, 7, 8)', 'Euljiro 1-ga Station (Exits 5, 6)'],
      transitTip: 'Exiting Myeongdong Station Exit 6 puts you directly into the main pedestrian shopping artery; Euljiro 1-ga Exit 7 links directly to Lotte Department Store.'
    },
    practicalTips: [
      'Always carry your physical passport for instant tax refunds at registers.',
      'For currency exchange, avoid airport counters and head to the independent booths opposite the Chinese Embassy near Myeongdong Kyoja for the city’s tightest spreads.',
      'Street food stalls accept cash and often T-money or mobile transfer, but credit cards may have minimum spend or not be supported on every single cart.'
    ]
  },
  {
    id: 'hongdae',
    name: 'Hongdae',
    koreanName: '홍대',
    overview: 'The pulsing heart of youth culture and indie creativity centered around Hongik University (Korea’s top fine arts school), renowned for outdoor street busking, indie music live clubs, affordable fashion, and vibrant 24-hour nightlife.',
    character: 'Youthful, energetic, bohemian, artistic; constant street dance and vocal performances, late-night BBQ joints, and photo booth studios.',
    whatKnownFor: [
      'Nightly outdoor street busking on Eoulmadang-ro (K-Pop dance covers, acoustic indie acts)',
      'Affordable fashion boutiques, accessories, and thrift shops',
      'Indie live music venues, hip-hop clubs, and student bars',
      'Self-photo studios (Photoism, Haru Film, Life Four Cuts)'
    ],
    foodHighlights: [
      'Hongdae BBQ alleys (Chupungnyeong Samgyeopsal, Dokrip Myeongcheo)',
      'Hongik tteokbokki joints and late-night pork soup (Dwaeji Gukbap)',
      'Trendy fusion brunch cafes and Japanese ramen stalls (Oreno Ramen)'
    ],
    shoppingHighlights: [
      'Musinsa Standard Hongdae (multi-level fashion flagship)',
      'Withmuu Hongdae (official K-pop lightsticks and albums)',
      'Object Hongdae (cult stationery and indie lifestyle crafts)',
      'Gentle Monster Hongdae concept store'
    ],
    cafeHighlights: [
      'Kolor & Tailor specialty coffee',
      'Sinleedoga (modern Hanok courtyard cafe with fire pit)',
      'Character and dessert concept cafes'
    ],
    thingsToSee: [
      'Hongdae Busking Zone (live youth dance and vocal performances)',
      'Hongdae Free Market (Saturday artisan craft market at Children’s Park)',
      'Hongik University campus and art murals'
    ],
    thingsToDo: [
      'Watch street buskers along the pedestrian street after 18:00',
      'Take Korean 4-cut aesthetic souvenir photo strips with funny hats and props',
      'Browse multi-story stationery and character gift shops'
    ],
    typicalVisitors: 'University students, young travelers, music fans, K-Pop dance enthusiasts, night owls',
    recommendedTime: 'Late Afternoon through Midnight (16:00 – 02:00); busking begins around 17:30.',
    nearbyNeighbourhoods: ['Yeonnam-dong', 'Hapjeong', 'Sangsu', 'Mangwon'],
    howToGetThere: {
      subwayLines: ['Line 2 (Green)', 'AREX (Airport Railroad)', 'Gyeongui-Jungang Line'],
      mainStations: ['Hongik University Station (Hongdae-ipgu)'],
      transitTip: 'Hongik University Station is directly accessible via AREX from Incheon Airport in 54 minutes without any transfers! Use Exit 9 for main shopping/busking streets.'
    },
    practicalTips: [
      'Exit 9 is famously the most congested meeting spot in Seoul; on Friday evenings, agree to meet friends at Exit 8 or 3 instead.',
      'Cross over directly into Yeonnam-dong via Exit 3 to escape the crowds into quiet tree-lined park alleys.',
      'Nightclubs generally enforce age restrictions (typically born after 1993/1994 depending on venue) and require physical passport inspection.'
    ]
  },
  {
    id: 'yeonnam',
    name: 'Yeonnam-dong',
    koreanName: '연남동',
    overview: 'Located just across the street from bustling Hongdae, Yeonnam-dong is a relaxed, leafy haven developed alongside the Gyeongui Line Forest Park (nicknamed "Yeontral Park"), filled with European bakeries, small design ateliers, and hidden cocktail nooks.',
    character: 'Laid-back, aesthetic, green, residential-chic; grassy park lawns with craft beer drinkers and charming low-rise residential alleys.',
    whatKnownFor: [
      'Gyeongui Line Forest Park ("Yeontral Park") lawn picnics',
      'Chic artisanal bakeries and bespoke dessert ateliers',
      'Authentic Chinese dumpling and Shandong cuisine heritage eateries (Little Chinatown)',
      'Intimate boutique wine bars and vintage ceramic shops'
    ],
    foodHighlights: [
      'Hwahaedang & Yeonhuidong dumpling eateries (Shandong style gyoza & jjajangmyeon)',
      'Gyeongui Forest Japanese tendon and maze-soba counters',
      'Casual European brunch spots with fresh sourdough'
    ],
    shoppingHighlights: [
      'Independent fragrance and custom perfume studios',
      'Cute stationery, illustrated sticker, and postcard stores',
      'Vintage clothing boutiques and curated Japanese homeware'
    ],
    cafeHighlights: [
      'Cafe Layered Yeonnam (British bakery cafe with ornate scones)',
      'Cafe Skön (pastel aesthetic rooftop cafe)',
      'Anthracite Coffee Yeonnam'
    ],
    thingsToSee: [
      'Gyeongui Line Forest Park walking promenade',
      'Dongjin Flea Market alleyways',
      'Charming residential red-brick villa architecture converted into shops'
    ],
    thingsToDo: [
      'Grab takeaway craft beer or iced latte and sit on the park grass for people-watching',
      'Wander the maze of residential side streets ("Yeonnam-dong maze alley")',
      'Sample warm garlic scones and salt bread from boutique bakeries'
    ],
    typicalVisitors: 'Couples on dates, cafe hoppers, dog owners, quiet explorers',
    recommendedTime: 'Sunny Afternoons (12:00 – 18:00) for park strolls and cafe patio seating.',
    nearbyNeighbourhoods: ['Hongdae', 'Yeonhui-dong', 'Mangwon-dong'],
    howToGetThere: {
      subwayLines: ['Line 2', 'AREX', 'Gyeongui-Jungang Line'],
      mainStations: ['Hongik University Station (Exit 3)'],
      transitTip: 'Take Exit 3 of Hongik University Station; the exit escalator brings you directly onto the grassy park lawn of Gyeongui Line Forest Park.'
    },
    practicalTips: [
      'Many smaller cafes have strict "1 person 1 drink minimum" policies and seat time caps (typically 2 hours) on weekends.',
      'Public restrooms are located along the park trail; cafe restrooms frequently require door code passwords printed at the bottom of your order receipt.'
    ]
  },
  {
    id: 'hannam',
    name: 'Hannam-dong',
    koreanName: '한남동',
    overview: 'Seoul’s chic, international diplomatic and luxury lifestyle neighborhood perched on the slopes of Mount Namsan overlooking the Han River, renowned for world-class contemporary art galleries, indie fashion houses, and sophisticated wine bars.',
    character: 'Refined, quiet luxury, cosmopolitan, artistic; tree-shaded hillsides housing embassies, private galleries, and minimalist designer boutiques.',
    whatKnownFor: [
      'Leeum Museum of Art (Korea’s foremost private museum housing traditional national treasures and contemporary masterpieces)',
      'Viral niche fashion flagship boutiques (Mardi Mercredi, Marithé + François Girbaud, Depound, emiss)',
      'Cosmetics & lifestyle flagships (Nonfiction, Tamburins Hannam)',
      'Diplomatic residential architecture and elite residential communities (Nine One Hannam)'
    ],
    foodHighlights: [
      'Hannam-dong Hanbang Tongdak (wood-fired herbal rotisserie chicken stuffed with glutinous rice)',
      'Gourmet 494 Hannam luxury subterranean food hall',
      'Contemporary Italian and French natural wine bistros'
    ],
    shoppingHighlights: [
      'Mardi Mercredi multi-building campus on Itaewon-ro 54-gil',
      'Nonfiction Hannam fragrance showroom',
      'Beaker Hannam concept store',
      'Vinyl & Plastic by Hyundai Card (record store and listening lounge)'
    ],
    cafeHighlights: [
      'Anthracite Hannam (industrial garden cafe)',
      'Passion 5 (extravagant 4-story luxury dessert gallery)',
      'Low Coffee Hannam'
    ],
    thingsToSee: [
      'Leeum Museum of Art (designed by Mario Botta, Jean Nouvel, and Rem Koolhaas)',
      'Hyundai Card Music Library and Understage',
      'Art galleries on Dokseodang-ro (Gallery Hyundai, Pace Gallery, Thaddaeus Ropac)'
    ],
    thingsToDo: [
      'Explore the Leeum Museum’s iconic rotunda staircase and sculpture gardens',
      'Shop Korean floral sweatshirt brand Mardi Mercredi across its dedicated boutique buildings',
      'Listen to rare vinyl records at Hyundai Card Vinyl & Plastic'
    ],
    typicalVisitors: 'Art collectors, fashion stylists, affluent locals, discerning foodies, architecture lovers',
    recommendedTime: 'Early Afternoon (12:00 – 17:00) for gallery visits and shopping; evenings for dining.',
    nearbyNeighbourhoods: ['Itaewon', 'Oksu', 'Yongsan', 'Namsan'],
    howToGetThere: {
      subwayLines: ['Line 6 (Brown Line)', 'Gyeongui-Jungang Line'],
      mainStations: ['Hangangjin Station (Exits 1, 2, 3)', 'Hannam Station'],
      transitTip: 'Hangangjin Station on Line 6 is much closer to Leeum Museum, Mardi Mercredi, and the main cafe street than Hannam Station.'
    },
    practicalTips: [
      'Hannam-dong is built on steep hillsides; wearing flats or sneakers is essential.',
      'Leeum Museum permanent collections are free but require advance reservation on their official website (released 14 days in advance); special exhibitions are ticketed.',
      'Stores in this area tend to close earlier (around 19:00–20:00) than in Hongdae or Myeongdong.'
    ]
  },
  {
    id: 'itaewon',
    name: 'Itaewon',
    koreanName: '이태원',
    overview: 'Historically Seoul’s foreign hub situated adjacent to the former US military base, Itaewon is home to the Seoul Central Mosque, authentic international cuisines spanning the globe, craft beer pubs, and an open, diverse nightlife scene.',
    character: 'Multicultural, eclectic, gritty, bohemian; English widely spoken, international grocery markets, shisha lounges, and global culinary aromas.',
    whatKnownFor: [
      'Seoul Central Mosque and the Usadan-ro halal dining quarter',
      'Authentic international dining (Middle Eastern, Turkish, Mexican, Indian, African, American BBQ)',
      'Antique Furniture Street with European vintage collectibles',
      'Vibrant LGBTQ+ nightlife and international lounge bars'
    ],
    foodHighlights: [
      'Linus BBQ (Texas-style low and slow pulled pork & brisket)',
      'EID Halal Korean Food (certified halal home-style Korean cooking)',
      'Turkish kebab and baklava bakeries along the main avenue',
      'Braai Republic (authentic South African BBQ meats)'
    ],
    shoppingHighlights: [
      'Itaewon Antique Furniture Street (vintage European chandeliers, clocks, dressers)',
      'Tailor shops specializing in custom suits and large-size footwear',
      'Middle Eastern and Southeast Asian spice grocery stores'
    ],
    cafeHighlights: [
      'Rain Report (dramatic cafe simulating artificial rain showers year-round)',
      'Chamoix cafe with Namsan hillside panoramic views',
      'Anthracite Itaewon'
    ],
    thingsToSee: [
      'Seoul Central Mosque (first and largest mosque in South Korea, opened 1976)',
      'Namsan scenic overlook stairs in Haebangchon (HBC)',
      'War Memorial of Korea (located just west near Samgakji)'
    ],
    thingsToDo: [
      'Sample authentic cuisines not easily found elsewhere in Korea',
      'Walk up towards Haebangchon (HBC) for rooftop drinks overlooking Seoul city lights',
      'Explore the Antique Furniture Street’s hidden basement troves'
    ],
    typicalVisitors: 'Expatriates, international food enthusiasts, halal travelers, nightlife seekers',
    recommendedTime: 'Late Afternoon to Night (17:00 – Late). Weekend nights are very active.',
    nearbyNeighbourhoods: ['Hannam-dong', 'Haebangchon (HBC)', 'Gyeongnidan-gil', 'Yongsan'],
    howToGetThere: {
      subwayLines: ['Line 6 (Brown Line)'],
      mainStations: ['Itaewon Station (Exits 1, 2, 3, 4)', 'Noksapyeong Station'],
      transitTip: 'Arriving via Noksapyeong Station Exit 2 gives you immediate access to Haebangchon and Gyeongnidan; Itaewon Station Exit 3 leads toward the Central Mosque.'
    },
    practicalTips: [
      'The hill leading up to the Seoul Central Mosque (Usadan-ro) is very steep; take small steps.',
      'This is the most Muslim-friendly neighbourhood in Seoul with numerous certified Halal eateries, butcher shops, and prayer spaces.'
    ]
  },
  {
    id: 'insadong',
    name: 'Insadong',
    koreanName: '인사동',
    overview: 'Seoul’s historic cultural and traditional arts quarter, where centuries of Joseon-era scholar culture live on through traditional tearooms, antique calligraphy galleries, Hanji paper shops, and handcrafted artisan souvenirs.',
    character: 'Tranquil, nostalgic, cultural; wooden sliding doors, stone-paved pedestrian alleys, soothing scent of burning incense and herbal teas.',
    whatKnownFor: [
      'Traditional Korean tearooms serving herbal infusions with hangwa sweets',
      'Ssamziegil spiral artisan craft marketplace and Anyoung Insadong',
      'Antique calligraphy brushes, inkstones, and handmade Hanji paper stores',
      'Jogyesa Temple (head temple of Korean Seon Buddhism) located right next door'
    ],
    foodHighlights: [
      'Balwoo Gongyang (Michelin-starred authentic Buddhist temple food)',
      'Osegyehyang (renowned plant-based vegan Korean cuisine)',
      'Traditional Insa-dong Sujebi (hand-torn noodle soup served in clay crocks)'
    ],
    shoppingHighlights: [
      'Ssamziegil (4 floors of independent Korean craft makers)',
      'Gyeonji-dong antique calligraphy supplies and stone stamp engravers',
      'Insadong traditional craft shops for mother-of-pearl jewelry boxes and ceramics'
    ],
    cafeHighlights: [
      'Shin Old Tea House (Shin Yetchatjip - sitting on ondol floor cushions in an ancient Hanok)',
      'Moon Bird Does Only Think of the Moon (atmospheric herbal tea sanctuary)',
      'Osulloc Tea House Insadong (premium Jeju green tea desserts)'
    ],
    thingsToSee: [
      'Jogyesa Temple (golden Buddhas and seasonal lotus lantern displays)',
      'Unhyeongung Royal Residence (historic residence of Emperor Gojong)',
      'Street artisans demonstrating "Kkultarae" (dragon’s beard candy spun from 16,384 strands of honey)'
    ],
    thingsToDo: [
      'Carve your own personal stone seal stamp (Dojang) with your Korean name',
      'Sip warm Ssanghwa-cha (nourishing medicinal herbal tea with egg yolk or pine nuts)',
      'Browse original calligraphy scrolls and ink paintings in side alley galleries'
    ],
    typicalVisitors: 'Culture seekers, souvenir shoppers, elderly tea lovers, families, history enthusiasts',
    recommendedTime: 'Daytime to Late Afternoon (10:30 – 17:30). Most traditional shops close by 19:30.',
    nearbyNeighbourhoods: ['Ikseon-dong', 'Bukchon Hanok Village', 'Gyeongbokgung', 'Gwanghwamun'],
    howToGetThere: {
      subwayLines: ['Line 3 (Orange Line)', 'Line 1 (Dark Blue)', 'Line 5 (Purple)'],
      mainStations: ['Anguk Station (Exit 6)', 'Jongno 3-ga Station (Exit 4 or 5)'],
      transitTip: 'Anguk Station Exit 6 leads directly onto the northern entrance of Insadong-gil pedestrian promenade.'
    },
    practicalTips: [
      'Insadong-gil is closed to motorized vehicles on weekends, making it very safe and enjoyable for leisurely walking.',
      'Check the English menu for tea properties; traditional teas (like Omija or Daechu-cha jujube tea) are therapeutic and caffeine-free.'
    ]
  },
  {
    id: 'ikseondong',
    name: 'Ikseon-dong',
    koreanName: '익선동',
    overview: 'Seoul’s oldest surviving residential Hanok cluster built in the 1920s, featuring narrow labyrinthine stone alleys filled with dazzling Instagrammable dessert cafes, retro photo studios, and intimate fusion bistros inside traditional timber frames.',
    character: 'Intimate, romantic, vintage-chic; narrow 1-meter-wide stone alleys, tiled eaves, soft lantern glow, and lush indoor courtyards.',
    whatKnownFor: [
      'Densely packed 1920s traditional Hanok houses converted into cafes and boutiques',
      'Sensory concept dessert cafes with indoor bamboo ponds, steam trains, and bakeries',
      'Retro 1900s modern Korean fashion rental (Gaewha-gi costume dress-up)',
      'Shooting ranges, retro arcade parlors, and photo booth nooks'
    ],
    foodHighlights: [
      'Ikseon-dong Hanok pizza and truffle pasta bistros',
      'Oncheonjip (dramatic hot spring onsen shabu-shabu set in an open Hanok)',
      'Solsot Ikseon (Japanese-Korean cast-iron pot rice topped with steak or sea bream)'
    ],
    shoppingHighlights: [
      'Boutique vintage jewelry, hair pins, and floral accessories',
      'Artisanal scented candle and diffuser shops (Mijidong)',
      'Indie apparel and linen fashion stores'
    ],
    cafeHighlights: [
      'Cheongsudang (magical lantern pond and souffle castella)',
      'Miloak & Donut cafes with revolving indoor waterwheels',
      'Nakwon Station Cafe (with an actual miniature railway running through the seating area)'
    ],
    thingsToSee: [
      'Intricate timber eave details of early 20th-century urban Hanok',
      'Nakwon Station miniature train track courtyard',
      'Oncheonjip’s outdoor steaming hot spring stone garden'
    ],
    thingsToDo: [
      'Get pleasantly lost in the maze of narrow car-free alleys',
      'Rent an early 1900s "Gyeongseong" period dress or suit for vintage photos',
      'Try fresh castella souffle baked in stone pots at Cheongsudang'
    ],
    typicalVisitors: 'Couples, young travelers, photography and cafe enthusiasts, aesthetic content creators',
    recommendedTime: 'Weekday mornings (11:00 – 14:00) to avoid suffocating weekend foot traffic.',
    nearbyNeighbourhoods: ['Insadong', 'Jongno 3-ga Pojangmacha street', 'Euljiro', 'Bukchon'],
    howToGetThere: {
      subwayLines: ['Line 1', 'Line 3', 'Line 5'],
      mainStations: ['Jongno 3-ga Station (Exit 4)'],
      transitTip: 'Take Exit 4 of Jongno 3-ga Station, cross the narrow street directly opposite, and you enter Ikseon-dong’s alleys within 30 seconds.'
    },
    practicalTips: [
      'Alleys are extremely narrow; navigating with large luggage or baby strollers is very difficult.',
      'Top spots like Oncheonjip and Cheongsudang have long waiting lists on weekends; put your name on the tablet waitlist as soon as you arrive.'
    ]
  },
  {
    id: 'bukchon',
    name: 'Bukchon Hanok Village',
    koreanName: '북촌한옥마을',
    overview: 'A picturesque hilltop village of hundreds of preserved traditional Korean Hanok residences dating back to the Joseon Dynasty, situated between Gyeongbokgung and Changdeokgung palaces with breathtaking vistas of modern downtown Seoul.',
    character: 'Historic, residential, dignified, scenic; steep stone staircases, wooden doorways, black curved tile roofs, and tranquil courtyards.',
    whatKnownFor: [
      'Gahoe-dong 31 scenic alleyway looking down over Hanok rooftops towards N Seoul Tower',
      'Baek In-je House (magnificent early 20th-century aristocratic Hanok mansion)',
      'Traditional Korean craft workshops (knot tying, lacquerware, hanbok tailoring)',
      'Samcheong-dong boutique street running along the western slope'
    ],
    foodHighlights: [
      'Tosokchon Samgyetang (at nearby Gyeongbokgung/Seochon)',
      'Hwangsaengga Kalguksu (Michelin Bib Gourmand ox bone knife-cut noodle soup)',
      'Bukchon Son Mandu (original handmade pork and kimchi dumplings)'
    ],
    shoppingHighlights: [
      'Samcheong-dong design boutiques and shoe ateliers',
      'Granhand Bukchon (celebrated Korean signature perfumery in a quiet Hanok)',
      'Tamburins Samcheong flagship'
    ],
    cafeHighlights: [
      'Blue Bottle Coffee Samcheong (minimalist red brick cafe with palace wall views)',
      'Cafe Yeon (traditional floor seating with jujube tea)',
      'London Bagel Museum Anguk (viral artisanal bakery nearby)'
    ],
    thingsToSee: [
      'The "Eight Views of Bukchon" (Bukchon 8-gyeong)',
      'Baek In-je House museum and grounds',
      'Gyeongbokgung and Changdeokgung palace gates flanking the village'
    ],
    thingsToDo: [
      'Rent a Hanbok from local rental shops for free admission to Seoul palaces',
      'Walk up Gahoe-dong alley for the classic Seoul postcard panoramic shot',
      'Experience a traditional Korean tea ceremony in a certified cultural workshop'
    ],
    typicalVisitors: 'Sightseers, photography lovers, Hanbok-clad visitors, history buffs',
    recommendedTime: 'Morning (09:30 – 12:00) for soft lighting and peaceful quiet residential streets.',
    nearbyNeighbourhoods: ['Samcheong-dong', 'Insadong', 'Gyeongbokgung', 'Seochon'],
    howToGetThere: {
      subwayLines: ['Line 3 (Orange Line)'],
      mainStations: ['Anguk Station (Exits 1, 2, 3)'],
      transitTip: 'Exit 2 of Anguk Station leads straight north up Bukchon-ro toward the village center.'
    },
    practicalTips: [
      'CRITICAL: Bukchon is an active residential neighborhood where real residents live. Observe strict silence, do not peer into private windows, and respect the mandatory visiting curfew (curfew enforced: tourists must exit the designated residential zone by 17:00).',
      'Comfortable walking shoes with good traction are mandatory for the steep slopes and stone steps.'
    ]
  },
  {
    id: 'gangnam',
    name: 'Gangnam & Sinnonhyeon',
    koreanName: '강남 & 신논현',
    overview: 'Seoul’s glittering commercial, tech, and entertainment powerhouse south of the Han River, packed with skyscraper corporate headquarters, massive underground shopping concourses, plastic surgery clinics, and neon-drenched nightlife.',
    character: 'Fast-paced, hyper-modern, bustling, slick; wide multi-lane boulevards, glass high-rises, electronic billboard screens, and endless underground corridors.',
    whatKnownFor: [
      'Gangnam Station underground shopping mall and busy transfer nexus',
      'World capital of dermatology, dental, and cosmetic aesthetics clinics',
      'Kakao Friends Flagship Store (massive multi-story character emporium)',
      'Bustling nightlife alleys behind Gangnam Boulevard packed with BBQ and izakayas'
    ],
    foodHighlights: [
      'Gangnam Korean BBQ joints specializing in aged Hanwoo beef and pork belly',
      'Shinnonghyeon Pojangmacha bar streets and 24-hour hangover soup (Haejang-guk)',
      'Global trend dining outposts (Shake Shack flagship, Gordon Ramsay Street Burger)'
    ],
    shoppingHighlights: [
      'Gangnam Underground Shopping Center (affordable clothes, accessories, phone cases)',
      'Kakao Friends Gangnam Flagship & Ryan Cafe',
      'Olive Young Gangnam Town',
      'Nike & Jordan Gangnam flagship experience stores'
    ],
    cafeHighlights: [
      'Alver Cafe (massive multi-story forest cafe in the middle of concrete Gangnam)',
      'Standard System specialty coffee roastery',
      'Upper and Under bakery cafe'
    ],
    thingsToSee: [
      'Gangnam Style "Horse Dance" bronze stage at Gangnam Station Exit 11',
      'Media Pole digital interactive installations along Gangnam-daero',
      'Bongeunsa Buddhist Temple (historic temple with giant 23m stone Buddha, nearby in Samseong)'
    ],
    thingsToDo: [
      'Browse the endless budget racks in the underground concourse',
      'Snap photos with life-sized Ryan and Choonsik statues at Kakao Friends',
      'Experience authentic after-work corporate Korean drinking culture ("hoesik") in the back alleys'
    ],
    typicalVisitors: 'Tech professionals, business travelers, medical tourists, shoppers, nightlife enthusiasts',
    recommendedTime: 'Evening (18:00 – 23:00) when office towers let out and neon lights illuminate the street.',
    nearbyNeighbourhoods: ['Apgujeong', 'Sinsa / Garosu-gil', 'Yeoksam', 'Express Bus Terminal'],
    howToGetThere: {
      subwayLines: ['Line 2 (Green)', 'Shinbundang Line (Red)'],
      mainStations: ['Gangnam Station', 'Sinnonhyeon Station (Line 9 & Shinbundang Line)'],
      transitTip: 'Gangnam Station connects Line 2 and Shinbundang Line; Sinnonhyeon Station on Line 9 provides express subway transit directly to Gimpo Airport in 30 minutes.'
    },
    practicalTips: [
      'Gangnam Station is the busiest transit station in South Korea; keep right when walking on stairs and corridors.',
      'Medical tourism consultations often provide English/Chinese/Japanese translators if booked through certified clinics.'
    ]
  },
  {
    id: 'apgujeong',
    name: 'Apgujeong & Dosan Park',
    koreanName: '압구정 & 도산공원',
    overview: 'Seoul’s historically affluent luxury trendsetting hub around tranquil Dosan Park, leading the city in cutting-edge dessert bakeries, celebrity dermatologist clinics, and flagship concept architecture.',
    character: 'Affluent, polished, stylish, cosmopolitan; sleek black Mercedes and Porsches, leafy park perimeter, and high-fashion concept flagships.',
    whatKnownFor: [
      'HAUS DOSAN (Tamburins, Gentle Monster, NUDAKE multi-story concept emporium)',
      'Dosan Park tranquil wooded walking loop',
      'Viral bakery cafes (London Bagel Museum Dosan, Cafe Knotted, Minute Papillon churros)',
      'Michelin-starred fine dining and upscale omakase counters'
    ],
    foodHighlights: [
      'Dosan Bunsik (retro hip take on Korean school snack foods)',
      'Apgujeong Hanwoo beef BBQ boutiques and premium Yakitori bars',
      'Upscale contemporary Hansik and Italian bistros'
    ],
    shoppingHighlights: [
      'Galleria Department Store Luxury Hall East & West',
      'HAUS DOSAN (Gentle Monster & Tamburins)',
      'Wiggle Wiggle Zip Dosan (whimsical 4-story rainbow lifestyle store)',
      'Apgujeong Rodeo fashion street'
    ],
    cafeHighlights: [
      'NUDAKE Haus Dosan (art-piece black matcha lava cakes)',
      'London Bagel Museum Dosan branch',
      'Minute Papillon (vintage French-style chocolate dip churrería)',
      'Cafe Knotted Dosan (fluffy whipped cream doughnuts)'
    ],
    thingsToSee: [
      'Dosan Ahn Chang-ho Memorial Hall inside Dosan Park',
      'K-Star ROAD with giant bear statues (GangnamDol) representing K-Pop groups',
      'Futuristic architecture of flagship luxury fashion houses'
    ],
    thingsToDo: [
      'Join the digital morning queue for fresh sourdough bagels or cream donuts',
      'Test niche fragrances and hand creams at Tamburins',
      'Stroll through Dosan Park under lush pine trees'
    ],
    typicalVisitors: 'Fashion influencers, luxury connoisseurs, K-celebrity spotters, foodie dessert hunters',
    recommendedTime: 'Early Afternoon (12:00 – 17:00) for cafe hopping and shopping.',
    nearbyNeighbourhoods: ['Cheongdam-dong', 'Garosu-gil / Sinsa', 'Gangnam'],
    howToGetThere: {
      subwayLines: ['Suin-Bundang Line', 'Line 3 (Orange)'],
      mainStations: ['Apgujeong Rodeo Station (Exits 5 & 6)', 'Apgujeong Station'],
      transitTip: 'Apgujeong Rodeo Station on the Suin-Bundang line is much closer to Dosan Park and HAUS DOSAN than Apgujeong Station on Line 3.'
    },
    practicalTips: [
      'Bakeries like London Bagel Museum and Minute Papillon use CatchTable tablet queues; register your number immediately upon arrival.',
      'Valet parking ("ballet-pa-king") is standard at almost every cafe and boutique in this district.'
    ]
  },
  {
    id: 'cheongdam',
    name: 'Cheongdam-dong',
    koreanName: '청담동',
    overview: 'The "Beverly Hills of Seoul", home to the Cheongdam Luxury Fashion Street lined with iconic architectural flagship pavilions of global luxury maisons, K-Pop entertainment agency headquarters, and top-tier fine dining.',
    character: 'Prestigious, ultra-exclusive, hushed, immaculate; striking architect-designed luxury facades, private VIP salons, and Michelin multi-star dining.',
    whatKnownFor: [
      'Cheongdam Fashion Street (monumental flagships: Dior, Chanel, Louis Vuitton, Hermès)',
      'K-Pop entertainment agencies (SM Entertainment, JYP alumni offices, celebrity hair/makeup salons)',
      'Top Michelin-starred restaurants (Mingles, Jungsik, Mosu, KwonSookSoo)',
      'Celebrity styling salons (where K-Pop idols get their hair and makeup styled for music shows)'
    ],
    foodHighlights: [
      'Mingles (2 Michelin Stars: Kang Min-goo’s ancestral fermentation meets modern gastronomy)',
      'Cheongdam Yeongyang Center (traditional samgyetang & roast chicken)',
      'Ultra-exclusive private Hanwoo beef omakase counters'
    ],
    shoppingHighlights: [
      'House of Dior Cheongdam (designed by Christian de Portzamparc with rooftop Cafe Dior by Pierre Hermé)',
      'Louis Vuitton Maison Seoul (designed by Frank Gehry)',
      'Boon The Shop Cheongdam (luxury multi-brand fashion boutique)'
    ],
    cafeHighlights: [
      'Cafe Dior by Pierre Hermé (rooftop luxury tea salon)',
      'Gucci Osteria da Massimo Bottura (rooftop fine dining)',
      '10 Corso Como Cafe Cheongdam'
    ],
    thingsToSee: [
      'Frank Gehry’s curved glass facade at Louis Vuitton Maison',
      'Christian de Portzamparc’s sculptural white petals at House of Dior',
      'Luxury hypercar showrooms along Dosan-daero'
    ],
    thingsToDo: [
      'Admire some of the world’s most dramatic retail architecture on one single street',
      'Book a celebrity hair and makeup makeover experience at salons like Jenny House',
      'Indulge in a world-class Michelin fine dining tasting menu'
    ],
    typicalVisitors: 'Luxury shoppers, haute gastronomy lovers, K-Pop industry professionals, architecture enthusiasts',
    recommendedTime: 'Afternoon to Dinner (14:00 – 21:30). By appointment for fine dining.',
    nearbyNeighbourhoods: ['Apgujeong', 'Samseong / COEX', 'Sinsa'],
    howToGetThere: {
      subwayLines: ['Line 7 (Olive)', 'Suin-Bundang Line'],
      mainStations: ['Cheongdam Station (Exits 8, 9)', 'Apgujeong Rodeo Station (Exit 3)'],
      transitTip: 'Apgujeong Rodeo Station Exit 3 emerges directly onto the start of the Cheongdam Luxury Fashion Street.'
    },
    practicalTips: [
      'Fine dining restaurants in Cheongdam strictly require reservations weeks or months in advance (CatchTable Global is standard).',
      'Dress code for fine dining and luxury boutiques is smart casual to formal; avoid beachwear or gym clothing.'
    ]
  },
  {
    id: 'garosugil',
    name: 'Garosu-gil (Sinsa-dong)',
    koreanName: '신사동 가로수길',
    overview: 'A picturesque tree-lined boulevard ("Garosu-gil" literally translates to "tree-lined street") planted with over 160 ginkgo trees, historically Seoul’s original designer boutique street, now featuring major global flagship stores and tranquil side alleys (Sero-su-gil).',
    character: 'European-influenced, leafy, fashionable; golden ginkgo foliage in autumn, sidewalk cafe patios, and sleek multi-story lifestyle flagships.',
    whatKnownFor: [
      'Ginkgo tree-lined central promenade turning bright golden yellow in autumn (late Oct–early Nov)',
      'South Korea’s very first official Apple Store (Apple Garosugil)',
      'Sero-su-gil ("vertical alleyways") harboring quiet indie cafes and wine nooks',
      'Homegrown fashion & beauty flagships (Tamburins, Gentle Monster, Jung Saem Mool)'
    ],
    foodHighlights: [
      'Hanchoo (legendary fried chicken with green chilies in batter & fried peppers)',
      'Pro Ganjang Gejang (famous soy sauce raw marinated crab in Sinsa food alley)',
      'Artisanal burger joints and Japanese yakitori taverns'
    ],
    shoppingHighlights: [
      'Apple Garosugil flagship store',
      'Maison Kitsuné Seoul & Cafe Kitsuné (charming bamboo entrance and French-Japanese cafe)',
      'Tamburins Sinsa flagship',
      'Jung Saem Mool Plops beauty flagship'
    ],
    cafeHighlights: [
      'Cafe Kitsuné Seoul (secluded bamboo garden courtyard)',
      'C27 Cheesecake (27 varieties of premium artisanal cheesecake)',
      'Bistopping (customizable gourmet waffle cones with quirky handmade toppings)'
    ],
    thingsToSee: [
      'Autumn golden canopy of ginkgo trees lining the main avenue',
      'Maison Kitsuné’s enchanting Japanese bamboo forest entrance garden',
      'Architectural fashion flagship store facades'
    ],
    thingsToDo: [
      'Take a stroll under the ginkgo trees with an iced coffee in hand',
      'Explore Sero-su-gil side streets for hidden jewelry and designer eyewear shops',
      'Enjoy spicy fried chicken and draft beer at Hanchoo in the evening'
    ],
    typicalVisitors: 'Fashion-conscious shoppers, cafe lovers, tech enthusiasts, date-night couples',
    recommendedTime: 'Afternoon into Evening (13:00 – 20:00). Autumn months (October/November) are particularly magical.',
    nearbyNeighbourhoods: ['Apgujeong', 'Gangnam', 'Jamwon Han River Park'],
    howToGetThere: {
      subwayLines: ['Line 3 (Orange)', 'Shinbundang Line (Red)'],
      mainStations: ['Sinsa Station (Exit 8)'],
      transitTip: 'Walk 250 meters straight out of Sinsa Station Exit 8; turn left at the J-Tower into the tree-lined Garosu-gil avenue.'
    },
    practicalTips: [
      'While the main avenue houses large commercial corporate brands, the best independent boutiques and quaint cafes are hidden one block over in the perpendicular alleys ("Sero-su-gil").',
      'Jamwon Han River Park is within a 15-minute walk north—great for sunset Han River views.'
    ]
  },
  {
    id: 'euljiro',
    name: 'Euljiro ("Hipjiro")',
    koreanName: '을지로 (힙지로)',
    overview: 'Historically Seoul’s blue-collar printing, metal, and hardware workshop quarter, Euljiro earned the moniker "Hipjiro" as young creatives repurposed dilapidated alleyway workshops and hidden upper floors into covert speakeasy cocktail bars, LP cafes, and retro cider pubs.',
    character: 'Gritty, retro, industrial-retro, cyberpunk; metal grinding sounds by day, glowing neon signboards hidden behind rusty iron staircases by night.',
    whatKnownFor: [
      'Euljiro Nogari Alley (outdoor plastic table plaza for grilled dried pollack and cheap draft beers)',
      'Covert speakeasy cocktail bars with no street signboards (hidden behind vending machines or inside print shops)',
      'Sewoon Plaza (historic 1968 mega-concrete electronics structure with rooftop views)',
      'Pyeongyang cold noodle heritage eateries operating for over half a century'
    ],
    foodHighlights: [
      'Woo Lae Oak (pure beef broth Pyeongyang cold noodles operating since 1946)',
      'Eulji Myeonok and Pildong Myeonok (historic cold noodle institutions)',
      'Euljiro Golbaengi (spicy sea snail salad served with complimentary rolled omelets)',
      'Manseon Hof (epicenter of outdoor draft beer and ₩2,000 grilled Nogari fish)'
    ],
    shoppingHighlights: [
      'Vintage vinyl record shops and cassette tape vendors around Sewoon Plaza',
      'Bespoke lighting, tile, and vintage industrial hardware fixtures',
      'Zine, print, and independent risograph art bookshops'
    ],
    cafeHighlights: [
      'Coffee Hanyakbang (hidden down a shoulder-width alley, roasting coffee over wood fire alongside Hyemin-dang bakery)',
      'Horangi Coffee (famous for rich sweet tiger latte in Sewoon Plaza 3F deck)',
      'Baekhwayukja LP listening cafe'
    ],
    thingsToSee: [
      'Sewoon Plaza elevated public deck overlooking Jongmyo Shrine and Namsan',
      'Historic printing presses operating in daytime labyrinthine alleys',
      'Nogari Alley transforming into thousands of outdoor plastic tables at dusk'
    ],
    thingsToDo: [
      'Search for unmarked doorway speakeasies on the 3rd and 4th floors of nondescript industrial buildings',
      'Order draft beer and spicy Nogari fish at Manseon Hof with local office workers',
      'Sip hand-drip filter coffee at Coffee Hanyakbang where royal Joseon physicians once treated patients'
    ],
    typicalVisitors: 'Hipster youth, retro enthusiasts, cocktail lovers, photographers, local office workers',
    recommendedTime: 'Nighttime (18:30 – Midnight) when printing shops shut down and hidden bars open.',
    nearbyNeighbourhoods: ['Myeongdong', 'Dongdaemun', 'Jongno', 'Cheonggyecheon Stream'],
    howToGetThere: {
      subwayLines: ['Line 2 (Green)', 'Line 3 (Orange)', 'Line 5 (Purple)'],
      mainStations: ['Euljiro 3-ga Station (Exits 1, 10, 11)', 'Euljiro 4-ga Station'],
      transitTip: 'Euljiro 3-ga Station Exit 10 or 11 puts you immediately at the gateway to Nogari Alley and the hidden bar district.'
    },
    practicalTips: [
      'Many of the best cocktail bars have NO signs at street level; look for small taped paper notes, red lightbulbs, or rely on Naver Map GPS pins to locate the right staircase.',
      'Cheonggyecheon Stream runs parallel two blocks north—ideal for a cool night stroll after drinking.'
    ]
  },
  {
    id: 'dongdaemun',
    name: 'Dongdaemun (DDP)',
    koreanName: '동대문',
    overview: 'South Korea’s wholesale fashion capital and 24-hour retail powerhouse, centered around Zaha Hadid’s futuristic Dongdaemun Design Plaza (DDP), traditional fabric markets, and high-rise fashion malls that trade until 5:00 AM.',
    character: 'Futuristic, nocturnal, fast-fashion wholesale, architectural; curving metallic curved panels, neon high-rises, and luggage-toting fashion buyers.',
    whatKnownFor: [
      'Dongdaemun Design Plaza (DDP) futuristic neo-futuristic spaceship landmark designed by Zaha Hadid',
      'All-night wholesale fashion markets (apM Luxe, Doota Mall, Migliore, Hello apM)',
      'Heunginjimun Gate (Dongdaemun - historic Great East Gate of Seoul built in 1398)',
      'Dongdaemun Crepe cart & street night snacks'
    ],
    foodHighlights: [
      'Dongdaemun Dakhanmari Alley (whole chicken hot pot boiled with potatoes, rice cakes, and spicy chili sauce dip)',
      'Sindang-dong Tteokbokki Town (adjacent cook-at-table spicy rice cake street)',
      'Gwangjang Market (just 1 subway stop away for mung bean pancakes and yukhoe beef tartare)'
    ],
    shoppingHighlights: [
      'Doota Mall (curated retail fashion and tax-free shopping open until midnight)',
      'apM Place & apM Luxe (wholesale K-fashion centers active through late night)',
      'Dongdaemun Comprehensive Market (textiles, fabrics, lace, ribbons, and jewelry DIY components)',
      'Hyundai City Outlets Dongdaemun'
    ],
    cafeHighlights: [
      'DDP Design Lounge and design cafes',
      'The Pimat-gol tearooms near Heunginjimun park',
      'Jean Frigo (quirky cocktail cafe entered through an actual refrigerator door)'
    ],
    thingsToSee: [
      'DDP’s fluid aluminum architecture illuminated at night',
      'Seoul City Wall trail ascending Mount Naksan from Dongdaemun Gate',
      'Seoul Light DDP media facade projection festivals (seasonal)'
    ],
    thingsToDo: [
      'Photograph DDP’s curving stairwells and outdoor plazas after dark',
      'Dip boiled tender chicken into vinegar mustard chili sauce at Jin-ok Hwa Original Dakhanmari',
      'Experience 2:00 AM shopping among international wholesale clothing traders'
    ],
    typicalVisitors: 'Architecture fans, night shoppers, fashion designers, wholesale buyers, photographers',
    recommendedTime: 'Night to Midnight (20:00 – 02:00). DDP architecture is best photographed after dark.',
    nearbyNeighbourhoods: ['Euljiro', 'Gwangjang Market', 'Sindang-dong', 'Dapsimni'],
    howToGetThere: {
      subwayLines: ['Line 2 (Green)', 'Line 4 (Light Blue)', 'Line 5 (Purple)'],
      mainStations: ['Dongdaemun History & Culture Park (DDP) Station', 'Dongdaemun Station'],
      transitTip: 'Dongdaemun History & Culture Park Station Exit 1 connects directly into the basement floor of DDP without stepping outside.'
    },
    practicalTips: [
      'Distinguish between retail malls (like Doota and Hyundai Outlets, which welcome individual tourists) and wholesale buildings (like apM Place, where some stalls only sell in minimum quantities of 2–3 pieces per color).',
      'Late-night taxis around Dongdaemun can be difficult to hail; use Kakao T app or take the late-night "Owl Bus" (N-Bus lines).'
    ]
  },
  {
    id: 'jamsil',
    name: 'Jamsil & Songridan-gil',
    koreanName: '잠실 & 송리단길',
    overview: 'Situated in southeast Seoul, Jamsil is a premier entertainment district dominated by the 123-story Lotte World Tower (6th tallest building in the world), Lotte World theme park, Seokchon Lake cherry blossom paths, and the chic indie cafe strip of Songridan-gil.',
    character: 'Grand, family-friendly, recreational, scenic; towering glass spire, calm lake breezes, amusement park roller-coaster shrieks, and cozy brunch alleys.',
    whatKnownFor: [
      'Lotte World Tower & Seoul Sky glass-bottom observatory (555 meters high)',
      'Seokchon Lake walking ring (Seoul’s premier cherry blossom spot in spring)',
      'Lotte World indoor/outdoor theme park and aquarium',
      'Songridan-gil trendy cafe, dessert, and boutique restaurant corridor'
    ],
    foodHighlights: [
      'Songridan-gil Japanese katsu, gyukatsu, and tendon bowl eateries',
      'Lotte World Mall upscale dining concourses and gourmet food courts',
      'Bangi-dong Food Alley (massive concentration of Korean BBQ, seafood, and pocha taverns)'
    ],
    shoppingHighlights: [
      'Lotte World Mall & Avenuel Luxury Department Store',
      'Lotte Mart World Tower branch (enormous hypermarket for food souvenirs and ramen)',
      'Songridan-gil independent lifestyle and stationery nooks'
    ],
    cafeHighlights: [
      'Cafe Knotted Jamsil (donuts & cheerful lifestyle merch)',
      'Ginger Bear Pie Shop (viral meat pies and fruit galettes with celebrity followings)',
      'Pres Coffee (rooftop espresso bar with direct view of Lotte World Tower spire)'
    ],
    thingsToSee: [
      'Seoul Sky Observatory (panoramic 360-degree views across all of Seoul and the Han River)',
      'Seokchon Lake walking loop with Magic Island castle in the center',
      'Lotte World Tower kinetic facade and lake light projections'
    ],
    thingsToDo: [
      'Ride the high-speed double-deck elevator up 500 meters to Seoul Sky',
      'Walk the 2.5-kilometer leafy trail around Seokchon Lake',
      'Hunt for freshly baked savory meat pies and lattes on Songridan-gil'
    ],
    typicalVisitors: 'Families with kids, couples on dates, sightseers wanting high-altitude views, thrill-seekers',
    recommendedTime: 'Afternoon to Sunset (14:00 – 19:30); ascend Seoul Sky observatory 45 minutes before sunset.',
    nearbyNeighbourhoods: ['Gangnam', 'Samseong (COEX)', 'Olympic Park'],
    howToGetThere: {
      subwayLines: ['Line 2 (Green)', 'Line 8 (Pink)'],
      mainStations: ['Jamsil Station (Exits 1, 2, 10, 11)', 'Songpanaru Station (Line 9 for Songridan-gil)'],
      transitTip: 'Jamsil Station connects directly underground into Lotte World Tower, Lotte World Mall, and Lotte World Adventure without going outdoors.'
    },
    practicalTips: [
      'Purchase Seoul Sky observatory tickets online in advance to skip the ground-floor ticket booth line.',
      'Songridan-gil is just across the eastern lake bank from Lotte World Tower (approx. 7-minute walk).'
    ]
  },
  {
    id: 'yongsan',
    name: 'Yongsan & Samgakji',
    koreanName: '용산 & 삼각지',
    overview: 'Historically known for electronics and military bases, Yongsan is experiencing a massive modern renaissance—anchored by the colossal National Museum of Korea, the sprawling War Memorial, the new Presidential Office, HYBE entertainment headquarters, and the bustling hipster dining alley of "Yongridan-gil".',
    character: 'Historic memory meets modern transformation; monumental civic museums, high-tech entertainment monoliths, and nostalgic low-rise culinary alleys.',
    whatKnownFor: [
      'National Museum of Korea (world-class monumental museum showcasing Korean history and treasures; free admission)',
      'War Memorial of Korea with outdoor display of military aircraft, tanks, and naval ships',
      'Yongridan-gil (trending dining street packed with Vietnamese, Japanese, and retro Korean diners)',
      'HYBE Headquarters (entertainment home of BTS, SEVENTEEN, NewJeans, LE SSERAFIM)'
    ],
    foodHighlights: [
      'Mongtan (legendary charcoal straw-smoked beef short ribs in Samgakji)',
      'Hyo-tte (viral outdoor-style Vietnamese street eatery on Yongridan-gil)',
      'Samgakji Daegu-tang Alley (spicy codfish soup with water parsley)'
    ],
    shoppingHighlights: [
      'National Museum of Korea Cultural Foundation Souvenir Shop (acclaimed traditional goods)',
      'I’Park Mall Yongsan (massive retail complex with anime studios, cinema, and electronics)',
      'Yongsan Electronics Market (vintage electronics, camera parts, computer hardware)'
    ],
    cafeHighlights: [
      'Teddy’s Oven (charming French-inspired teddy bear bakery on Yongridan-gil)',
      'Samhwang Coffee roastery',
      'Doré Doré cake cafe'
    ],
    thingsToSee: [
      'Ten-Story Stone Pagoda of Gyeongcheonsa Temple inside the National Museum',
      'War Memorial of Korea peace plaza and monumental outdoor machinery',
      'Yongsan Park (former US military base officer quarters opened to the public)'
    ],
    thingsToDo: [
      'Marvel at national treasures inside the National Museum of Korea (free entrance)',
      'Queue for straw-grilled short ribs at Mongtan or explore Yongridan-gil fusion diners',
      'Take photos outside the towering black glass HYBE entertainment building'
    ],
    typicalVisitors: 'Museum lovers, history buffs, K-Pop fans, architecture fans, trendy foodies',
    recommendedTime: 'Daytime for museums (10:00 – 16:00); evening for Yongridan-gil dining (17:30 – 21:30).',
    nearbyNeighbourhoods: ['Itaewon', 'Hannam-dong', 'Seoul Station', 'Mapo'],
    howToGetThere: {
      subwayLines: ['Line 4 (Light Blue)', 'Line 6 (Brown)', 'Line 1', 'Gyeongui-Jungang'],
      mainStations: ['Ichon Station (Line 4/Gyeongui - for National Museum)', 'Samgakji Station (Lines 4 & 6)', 'Yongsan Station (Line 1/KTX)'],
      transitTip: 'Ichon Station Exit 2 features a moving underground walkway called "Path to the Museum" that takes you directly into the National Museum grounds.'
    },
    practicalTips: [
      'Admission to the National Museum of Korea permanent exhibition galleries is completely FREE.',
      'Mongtan short ribs uses in-person tablet waitlisting starting at 11:00 AM; queue spots for the entire evening can fill up before 13:00.'
    ]
  }
];
