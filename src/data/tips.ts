import { TravelTipItem } from '../types';

export const TIPS_DATA: TravelTipItem[] = [
  {
    id: 'tip-apps',
    title: 'Essential Mobile Apps to Download Before Boarding',
    category: 'Apps to Download',
    description: 'Ensure these 6 applications are installed and configured on your smartphone before your flight lands in Seoul.',
    highlights: [
      'Naver Map (네이버 지도): MANDATORY. Google Maps cannot calculate walking or driving routes in South Korea due to national security map laws. Naver Map supports English, Japanese, and Chinese with turn-by-turn pedestrian routing, exact subway exit numbers, and live bus times.',
      'Papago (파파고): The gold-standard Korean translation app by Naver. Its instant camera translation feature effortlessly reads complex vertical Korean restaurant menus, packaging ingredients, and street signs with contextual accuracy superior to Google Translate.',
      'Kakao T (카카오 T): Korea’s nationwide taxi hailing app. Allows foreign credit cards or "Pay to driver" directly at the end of the trip, avoiding street-hail struggles late at night.',
      'CatchTable Global (캐치테이블): The premier dining reservation and in-person queue app in Korea. Used by viral bakeries (London Bagel Museum), BBQ spots, and Michelin restaurants. Supports international phone numbers.',
      'Subway Korea: Clean, offline-capable Seoul subway route calculator. Calculates the exact car number to board for the fastest transfer between lines.',
      'WOWPASS App: If using a WOWPASS card, tracks your Korean Won balance, T-money transit card balance, and currency exchange rates in real-time.'
    ]
  },
  {
    id: 'tip-first-timers',
    title: 'First-Time Seoul Visitor Master Rules',
    category: 'First-Timers',
    description: 'Key practical habits that turn a confusing trip into an effortless local adventure.',
    highlights: [
      'Subway exit numbers are your coordinates: When asking for directions or meeting someone, look for station exit numbers (e.g., "Meet at Hongdae Exit 9"). Seoul intersections are vast, and street names are secondary to subway exits.',
      'Always carry small Korean Won cash: Although South Korea is 95% cashless, physical cash notes (₩1,000, ₩5,000, ₩10,000) are strictly required to recharge T-money and Climate Cards at station machines and to buy snacks at street carts.',
      'Save locations in Korean script (Hangeul): Copy-paste both English and Korean names (e.g., "Tosokchon / 토속촌") into your notes. Older taxi drivers and small vendors often cannot read Romanized English street spellings.',
      'Subway ends around midnight: The Seoul Metropolitan Subway ceases operations between 23:30 and 00:30 depending on the line. Plan your journey back before midnight or prepare to use Kakao T / Night Owl (N-Bus) buses.',
      'Comfortable broken-in walking shoes: You will routinely walk 15,000 to 22,000 steps per day. Seoul features extensive underground subway staircases and hilly terrains.'
    ]
  },
  {
    id: 'tip-winter',
    title: 'Surviving Winter in Seoul (December – February)',
    category: 'Seasons',
    description: 'Seoul winters are bone-chillingly dry and cold, frequently dropping between -5°C and -15°C with Siberian winds.',
    highlights: [
      'Buy disposable heat packs ("Hot-paek" 핫팩): Sold at every CU, GS25, and 7-Eleven counter for ~₩1,000. Shake the packet to activate; slip one into each coat pocket to keep your hands warm for up to 12 hours.',
      'Embrace Korean "Ondol" heating: Traditional Korean underfloor radiant heating warms hotel and hanok floors directly. It dries out room air quickly, so place a damp hand towel in your room before sleeping.',
      'Dress in the Korean "Long Padded Coat" style: A knee-length down parka with thermal thermal base layers (Uniqlo Heattech) and wool socks is the standard uniform for navigating outdoor streets comfortably.',
      'Savor winter street foods: Cold weather makes hot street foods taste divine—warm up with steaming fish cake broth ("Eomuk gukmul" which is free to ladle from street carts), sweet cinnamon-filled hotteok, and roasted sweet potatoes.'
    ]
  },
  {
    id: 'tip-summer-monsoon',
    title: 'Summer & Monsoon Season (July – August)',
    category: 'Seasons',
    description: 'Seoul summers are hot and humid (30°C–35°C), punctuated by the East Asian monsoon ("Jangma") in late June and July.',
    highlights: [
      'Monsoon torrential downpours: Monsoon season brings sudden, heavy rainstorms. Pack waterproof footwear and buy a sturdy umbrella at convenience stores rather than flimsy transparent vinyl ones.',
      'Head to mega indoor underground shopping cities on rainy days: Escape wet weather inside The Hyundai Seoul (Yeouido), Starfield COEX Mall (Samseong), Lotte World Mall (Jamsil), or Goto Mall (Express Bus Terminal).',
      'Portable electric neck/hand fans: A ubiquitous Korean summer staple. Purchase a rechargeable USB fan at any Olive Young or Daiso for relief when waiting outdoors.',
      'Bingsu (Shaved Ice): Cool off at dessert cafes with traditional Injeolmi bingsu (milk shaved ice topped with sweet red bean and roasted soybean powder) or mango bingsu.'
    ]
  },
  {
    id: 'tip-holidays',
    title: 'Navigating Public Holidays (Seollal & Chuseok)',
    category: 'Holidays',
    description: 'South Korea’s two major traditional family holidays significantly impact city life and store operations.',
    highlights: [
      'Seollal (Lunar New Year - Jan/Feb) & Chuseok (Korean Harvest Thanksgiving - Sep/Oct): Both holidays feature 3- to 4-day nationwide holiday breaks where millions of Koreans travel to their ancestral hometowns ("Minjok Daedongwon").',
      'What stays OPEN: Royal palaces (Gyeongbokgung, Changdeokgung, Deoksugung) and museums are not only OPEN but usually offer FREE admission during both holidays, hosting traditional folk games, tightrope walking, and samulnori percussion performances. Major theme parks (Lotte World) and big chain department stores (except the main holiday day itself) remain bustling.',
      'What CLOSES: Small independent family-owned restaurants, local neighborhood markets (Gwangjang, Mangwon), and vintage shops frequently shut down for 2 to 3 days over the official holiday days.',
      'Transportation crunch: Intercity KTX train tickets and express highways leaving Seoul southbound sell out weeks in advance before the holiday, while inbound trains toward Seoul sell out right after.'
    ]
  },
  {
    id: 'tip-mistakes',
    title: 'Top 7 Tourist Mistakes to Avoid in Seoul',
    category: 'Mistakes to Avoid',
    description: 'Common misconceptions and traps that international visitors encounter.',
    highlights: [
      '1. Exchanging large sums of money at the airport: Airport bank booths offer significantly worse exchange rates. Exchange just ₩30,000 for your initial transit card, and exchange the rest at independent money changers in Myeongdong.',
      '2. Trying to leave a tip at restaurants: Tipping is not customary and will cause confusion. Excellent service is considered standard.',
      '3. Boarding city buses with open drink cups: Seoul bus drivers are legally mandated to refuse passengers carrying open takeaway coffee cups, bubble tea, or hot soup cups to protect other passengers from hot spills.',
      '4. Expecting taxi drivers to know English hotel names: Always have the hotel name and address clearly saved in Korean Hangeul script on your phone.',
      '5. Sitting on the pink pregnant priority seats on the subway: These seats are preserved exclusively for expectant mothers even when the subway is completely crowded.',
      '6. Buying single-journey subway tickets every time: Purchasing single-ride tickets requires buying a card and returning it to a deposit machine for ₩500 refund after EVERY journey. Buy a rechargeable T-money card or Climate Card on day one.',
      '7. Forgetting your physical passport when shopping: You miss out on 8%–10% immediate tax deductions at checkout registers across major stores.'
    ]
  }
];
