import { TransportArticle } from '../types';

export const TRANSPORT_DATA: TransportArticle[] = [
  {
    id: 'transit-arex',
    title: 'Incheon Airport to Seoul via AREX (Airport Railroad)',
    category: 'Airport',
    summary: 'The fastest, most reliable railway link connecting Incheon International Airport (Terminal 1 and Terminal 2) directly into downtown Seoul Station.',
    howItWorks: [
      'Express Train (Orange): Non-stop direct journey between Incheon Airport and Seoul Station in 43 minutes (Terminal 1) or 51 minutes (Terminal 2). Assigned comfortable individual reclining seats, free Wi-Fi, and luggage racks.',
      'All-Stop Train (Blue): Commuter subway stopping at 14 stations along the way, including Gimpo Airport and Hongik University (Hongdae) in 53 to 66 minutes. Standard subway bench seating.'
    ],
    howToPay: 'Express Train requires a dedicated timed ticket (purchased online, via ticket machines, or at counters; credit cards accepted). All-Stop Train is paid via standard T-money card or subway single-journey ticket.',
    approximateCost: 'Express Train: ₩11,000 (adult). All-Stop Train: ₩4,150–₩4,750 (with T-money).',
    whenUseful: 'When your destination is near Seoul Station (transfer to Lines 1 or 4 / KTX) or Hongdae (All-Stop train delivers you straight to Hongik Univ Station without transfer). Completely immune to Seoul traffic congestion.',
    importantTips: [
      'If your hotel is in Hongdae (Hongik Univ Station), take the All-Stop Train! The Express Train does NOT stop at Hongdae.',
      'At Seoul Station, the AREX platforms are situated deep underground at Basement Level 7 (B7). Allow at least 15–20 minutes to transfer between AREX and subway Lines 1 or 4 with luggage.',
      'Express Train tickets can be purchased at a discount on booking platforms or online in advance.'
    ],
    commonMistakes: [
      'Boarding the Express Train with only a T-money card without an Express barcode ticket (results in gate alarm and fines).',
      'Taking the Express Train thinking it will stop at Hongdae or Digital Media City.'
    ]
  },
  {
    id: 'transit-airport-bus',
    title: 'Airport Limousine Buses (Incheon & Gimpo)',
    category: 'Airport',
    summary: 'Comfortable, spacious coach buses providing direct, door-to-door transit from airport terminal curbsides straight to hotel districts across Seoul.',
    howItWorks: [
      'Routes serve specific neighborhoods (e.g., Bus 6001 for Dongdaemun/Myeongdong, 6002 for Jongno/Dongdaemun, 6015 for Myeongdong, 6701/6702 for luxury hotels).',
      'Drivers load heavy luggage into under-bus cargo compartments and give you a luggage claim tag.',
      'Buses feature 2+1 wide leather recliner seating.'
    ],
    howToPay: 'T-money card (tap upon boarding) or ticket purchased from automated ticketing booths outside airport arrival halls (Terminal 1 ground floor curbside, Terminal 2 transport center). Credit cards accepted at ticket kiosks.',
    approximateCost: '₩16,000 – ₩18,000 per adult one-way.',
    whenUseful: 'The best option if you are traveling with large heavy suitcases, young children, or elderly family, avoiding cumbersome subway stairs and station transfers.',
    importantTips: [
      'Peak rush hour traffic (07:30–09:30 and 17:00–19:30) can add 30–50 minutes to road journey times compared to the train.',
      'Keep your luggage claim tag safe—the driver requires it when unloading your suitcase at your stop.',
      'Check which terminal your return flight leaves from; Terminal 2 is reached ~15 minutes after Terminal 1 on return journeys.'
    ],
    commonMistakes: [
      'Assuming the Climate Card pays for Airport Limousine buses (Climate Card is NOT accepted on airport limousine buses!).',
      'Taking the bus during Friday evening peak rush hour when catching an international flight.'
    ]
  },
  {
    id: 'transit-subway',
    title: 'Seoul Metropolitan Subway System',
    category: 'Subway',
    summary: 'One of the most extensive, punctual, and technologically advanced subway systems in the world, with over 23 numbered and color-coded lines spanning the entire capital region.',
    howItWorks: [
      'Stations have clear English, Korean, and Chinese signage with unique 3-digit station codes (e.g., Myeongdong is 424: Line 4, station 24).',
      'Line 2 (Green) is a continuous circle line connecting Hongdae, City Hall, Dongdaemun, Seongsu, and Gangnam.',
      'Line 9 features both "Local" trains (stops at every station) and "Express" trains (skips minor stops, cutting travel time across southern Seoul in half).',
      'Free transfer discount applied within 30 minutes when switching between subway and city buses (up to 4 transfers), provided you tap out and tap in with the same card.'
    ],
    howToPay: 'Rechargeable transit card (T-money, WOWPASS, Namane, or Climate Card) tapped on electronic turnstiles upon entry and exit. Single-journey RFID card available at ticket machines with a ₩500 refundable deposit.',
    approximateCost: 'Base fare ₩1,400 (with transit card for first 10km); small incremental distance surcharge (approx. ₩100 per 5km thereafter).',
    whenUseful: 'The fastest, cheapest, and most ubiquitous method to travel anywhere in Seoul.',
    importantTips: [
      'ALWAYS tap your card upon exiting! Failing to tap out results in the maximum fare penalty on your next journey and forfeits the free transfer discount.',
      'Look for the numbered exits outside (e.g. "Exit 6"); Seoul navigation relies heavily on exit numbers rather than street addresses.',
      'If you accidentally enter a turnstile going in the wrong direction, tapping out and re-entering the correct platform side within 15 minutes is free at the same station.',
      'Elderly, disabled, and pregnant priority seating (at the far ends of each carriage and pink marked seats) should remain completely VACANT even if the train is packed.'
    ],
    commonMistakes: [
      'Accidentally boarding a Line 9 Express train when your destination is only a local station (it will speed past your stop!). Check the electronic display: Red = Express, Green = Local.',
      'Sitting in the pink priority seats designated for pregnant passengers.'
    ]
  },
  {
    id: 'transit-tmoney-vs-climate',
    title: 'T-money Card vs. Seoul Climate Card',
    category: 'Payment Cards',
    summary: 'Understanding the crucial differences between the traditional nationwide T-money transit card and the Seoul-specific unlimited Climate Card.',
    howItWorks: [
      'T-money Card: Universal prepaid transit card. Works on all subways, city buses, airport buses, taxis, and convenience stores nationwide across South Korea. You top it up with cash KRW as you go.',
      'Climate Card (Gihu-Donghaeng Card): Unlimited transit pass launched by Seoul Metropolitan Government. Available in short-term tourist passes (1-day ₩5,000, 2-day ₩8,000, 3-day ₩10,000, 5-day ₩15,000, 7-day ₩20,000, or 30-day ₩62,000). Gives unlimited rides on Seoul subways and city buses during its validity period.'
    ],
    howToPay: 'Physical cards purchased at subway customer service centers or convenience stores (₩3,000 for card blank). Physical cards MUST be recharged using CASH (KRW notes) at automated station recharge kiosks!',
    approximateCost: 'T-money: ₩3,000 card + whatever amount you choose to load. Climate Card: ₩3,000 card + fixed duration pass cost.',
    whenUseful: 'Climate Card is financially beneficial if you take 4 or more subway/bus rides per day. T-money is more versatile if traveling outside Seoul or using airport buses/taxis.',
    importantTips: [
      'CRITICAL CLIMATE CARD LIMITATION: The Climate Card is valid ONLY within Seoul metropolitan subway boundaries! You CANNOT use it on: the AREX Express train, Airport Limousine buses, Shinbundang Line, or subways terminating in Gyeonggi-do or Incheon (e.g. Suwon, Everland, or Incheon Airport Station exits will be blocked).',
      'If you exit outside Seoul using a Climate Card, you must pay an additional fare penalty at the station gate window.',
      'Both cards require CASH to recharge at machines! Carry ₩10,000 and ₩5,000 banknotes.'
    ],
    commonMistakes: [
      'Trying to use a Climate Card to take the train back to Incheon Airport (it will not let you tap out at the airport turnstiles!).',
      'Attempting to top up transit cards at subway machine kiosks using a foreign credit card (machines accept ONLY cash Korean Won banknotes).'
    ]
  },
  {
    id: 'transit-taxis',
    title: 'Seoul Taxis & Kakao T App',
    category: 'Taxi',
    summary: 'Affordable, safe, and heavily regulated door-to-door transit, especially convenient late at night after the subway closes.',
    howItWorks: [
      'Standard Taxi (Orange, silver, or white sedans): Base fare ₩4,800 for the first 1.6km. Readily available for street hailing when top roof light is lit red/blue (indicates "Vacant" 빈차 빈차).',
      'Deluxe Taxi ("Mobeom" - Black sedans with gold stripe): Higher base fare (~₩7,000), roomier luxury sedans, experienced drivers with clean driving records.',
      'Kakao T (App): Korea’s ubiquitous taxi hailing app (equivalent to Uber/Grab). Foreign travelers can use it without a Korean phone number by selecting "Pay to driver" or linking international credit cards.'
    ],
    howToPay: 'All Seoul taxis accept credit cards (Visa, Mastercard, Amex), T-money cards, and cash. Simply tap your credit or T-money card on the passenger terminal between the front seats.',
    approximateCost: 'Base fare ₩4,800. Cross-city trip (e.g., Myeongdong to Gangnam) typically costs ₩15,000–₩22,000 depending on traffic.',
    whenUseful: 'Late at night after 23:30 (when subways stop running), when traveling with heavy baggage, or for short group trips where splitting a cab is comparable to 3–4 subway tickets.',
    importantTips: [
      'Late-night surcharge (20%–40%) applies automatically between 22:00 and 04:00 (peak surcharge is between 23:00 and 02:00).',
      'Have your destination written in Hangeul (Korean script) or pinned on Naver Map/KakaoMap to show the driver; most older taxi drivers do not read English alphabet addresses.',
      'Seatbelts are mandatory for all passengers in both front and rear seats.'
    ],
    commonMistakes: [
      'Trying to hail a taxi whose dashboard sign says "예약" (Reserved) in green/blue or "휴무" (Off Duty). Look for "빈차" in RED (counter-intuitively, red means vacant/available!).',
      'Getting into unlicensed private vans soliciting arrivals inside the airport terminal.'
    ]
  },
  {
    id: 'transit-navigation-apps',
    title: 'Essential Navigation Rule: Naver Map & KakaoMap',
    category: 'Intercity',
    summary: 'Why Google Maps does not function properly for walking or driving navigation in South Korea, and which local apps you must install.',
    howItWorks: [
      'Due to South Korean national security spatial data regulations, high-precision government vector map data cannot be exported to foreign servers. As a result, Google Maps can only show transit schedules; it CANNOT provide turn-by-turn walking or driving navigation in Korea.',
      'Naver Map (네이버 지도): The definitive navigation app in Korea. Available in full English, Chinese, and Japanese. Provides flawless turn-by-turn pedestrian routing, exact subway exit numbers, live bus arrival times, and indoor shopping mall layouts.',
      'KakaoMap (카카오맵): Alternative excellent local map with 3D vector views and cycling/walking routes.'
    ],
    howToPay: 'Free apps downloadable from Apple App Store and Google Play Store.',
    approximateCost: 'Free.',
    whenUseful: 'Mandatory from the moment you step foot in South Korea for every single walking and transit movement.',
    importantTips: [
      'Download and set up Naver Map BEFORE your flight departs.',
      'In Naver Map, you can bookmark favorite restaurants, copy-paste Korean names, and search using English phone numbers or station names.',
      'Combine Naver Map with Papago (Naver’s translation app) to seamlessly translate restaurant menus via camera photo.'
    ],
    commonMistakes: [
      'Relying solely on Google Maps and discovering your walking blue dot has no route guidance or directional compass arrow.'
    ]
  }
];
