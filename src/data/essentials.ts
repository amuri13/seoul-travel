import { EssentialItem } from '../types';

export const ESSENTIALS_DATA: EssentialItem[] = [
  {
    id: 'essential-esim-sim',
    title: 'SIM Cards, eSIM & Portable Wi-Fi',
    category: 'Connectivity',
    summary: 'Staying connected in South Korea: choosing between an instant digital eSIM, a physical SIM with a local 010 phone number, or a pocket Wi-Fi router.',
    keyPoints: [
      'eSIM (Digital): The fastest and most convenient method for unlocked iPhones (XS and newer) and modern Android phones. Scannable via QR code before departure; activates automatically upon landing at Incheon Airport. Data-only.',
      'Physical SIM with Voice/010 Number: Essential if you plan to join in-person digital restaurant waitlists (CatchTable or Tabling tablets outside viral eateries frequently require an incoming Korean 010 mobile number to SMS your queue ticket). Available for pick up at Incheon Airport arrivals counters (SK Telecom, KT Olleh, LG U+).',
      'Portable Pocket Wi-Fi ("Wi-Fi Egg"): Best for families or small groups sharing one high-speed unlimited connection across multiple devices (laptops, tablets, phones). Requires carrying and daily recharging.'
    ],
    practicalTips: [
      'Ensure your smartphone is carrier-unlocked before leaving your home country.',
      'Major Korean telecom counters (SKT, KT, LG U+) operate 24/7 inside Incheon Terminal 1 and Terminal 2 arrival halls.',
      'If you have a data-only eSIM, you can often ask restaurant hosts to enter your international number or use your email on modern CatchTable kiosks.'
    ],
    actionableNotes: 'Recommendation: Buy an eSIM for primary data; download CatchTable Global app on your phone with international SMS verification.'
  },
  {
    id: 'essential-cards-money',
    title: 'Credit Cards, Cash & WOWPASS',
    category: 'Money & Payments',
    summary: 'South Korea is one of the most cashless societies in the world, yet cash remains mandatory for key transit and street food scenarios.',
    keyPoints: [
      'Credit & Debit Cards: Visa and Mastercard (with chip or contactless) are accepted virtually everywhere—from department stores to tiny corner bakeries and metered taxis. Amex is accepted at larger hotels and upscale stores.',
      'Apple Pay: Has growing acceptance in Korea (convenience stores, major cafes like Ediya/Mega Coffee, department stores), but many small indie shops still only accept physical card insertion.',
      'WOWPASS: An all-in-one prepaid foreign exchange card and T-money card designed specifically for international tourists. You can feed your home currency (USD, EUR, SGD, HKD, JPY, etc.) directly into orange WOWPASS automated kiosks at airports, subway stations, and hotels, and receive a loaded Korean Won card plus cash withdrawal.',
      'Cash (KRW): You MUST carry cash for: recharging physical T-money transit cards at subway station machines, street food carts (Myeongdong, Gwangjang), and flea markets (Dongmyo).'
    ],
    practicalTips: [
      'When your credit card machine asks "Pay in KRW or home currency?", ALWAYS choose KRW (Korean Won) to avoid predatory Dynamic Currency Conversion (DCC) exchange markups.',
      'ATMs: Look for "Global ATM" signage (found at major bank branches like Shinhan, Woori, Hana, and inside subway stations). Regular local ATMs reject foreign cards.'
    ],
    actionableNotes: 'Keep approximately ₩50,000–₩80,000 cash in small notes (₩1,000, ₩5,000, ₩10,000) tucked in your wallet for transit and markets.'
  },
  {
    id: 'essential-tax-refund',
    title: 'Tax Refunds & Immediate Tax-Free Shopping',
    category: 'Shopping & Taxes',
    summary: 'How to claim back the 10% Value-Added Tax (VAT) on eligible retail purchases made during your stay in Korea.',
    keyPoints: [
      'Immediate Tax Refund (Instant Tax-Free): Available at participating stores (Olive Young, Musinsa, major fashion boutiques, department stores). When your single receipt total is between ₩15,000 and ₩1,000,000, the cashier scans your physical passport and subtracts the VAT directly at the cash register. You pay the net discounted price on the spot!',
      'Receipt Refund (Airport / City Kiosks): If the store provides a paper tax-free refund voucher (Global Blue, Global Tax Free, Easy Tax Refund), keep the receipt and original merchandise. Scan your passport and receipts at automated tax-refund kiosks at Incheon Airport Departure Hall before passing security.',
      'Total Purchase Ceiling: Up to ₩5,000,000 total per trip can be claimed with immediate tax relief.'
    ],
    practicalTips: [
      'Always have your physical passport with you when going shopping; digital photos on your phone are not accepted for tax-free register scanning.',
      'At Incheon Airport, do not pack high-value tax-free purchases (over ₩1,000,000 single items like luxury bags or jewelry) into checked baggage before getting customs approval stamps.'
    ],
    actionableNotes: 'Look for "Tax Free" or "Immediate Tax Refund" logos on boutique windows and cash register counters.'
  },
  {
    id: 'essential-plugs-power',
    title: 'Power Plugs, Voltage & Electronics',
    category: 'Power & Utilities',
    summary: 'Understanding South Korea’s electrical plug standards to prevent fried electronics or dead batteries.',
    keyPoints: [
      'Voltage: 220 Volts at 60 Hz.',
      'Plug Types: Type C and Type F (Europlug / Schuko). These feature two round parallel pins with a 4.8mm diameter (standard European plug).',
      'US / UK / Australian / Singaporean plugs require a physical adapter. Dual-voltage devices (laptops, smartphone chargers, camera battery chargers rated 100V–240V) will work safely with a simple plug pin adapter.',
      'High-wattage heating appliances (hair dryers, straighteners, curling irons) designed for 110V (North America/Japan) WILL burn out or short-circuit in 220V Korean sockets unless they have an internal dual-voltage switch.'
    ],
    practicalTips: [
      'Convenience stores (CU, GS25) and Daiso stores throughout Seoul sell inexpensive travel plug adapters for ₩1,000–₩3,000.',
      'Most hotel front desks provide adapter plugs with a small refundable deposit.'
    ],
    actionableNotes: 'Leave your 110V American/Japanese hair styling irons at home; Korean hotels almost universally provide powerful 220V hair dryers.'
  },
  {
    id: 'essential-toilets-lockers',
    title: 'Public Restrooms & Luggage Lockers',
    category: 'Daily Life',
    summary: 'Navigating public amenities like clean restrooms and automated luggage lockers across Seoul.',
    keyPoints: [
      'Public Toilets: Every single Seoul Metropolitan Subway station has free, clean, and well-maintained public restrooms (usually located both inside and outside the fare turnstiles). They are safe, stocked with toilet paper, and include accessible stalls.',
      'Cafe Restrooms: Independent cafes and restaurants often lock their restrooms. The passcode is almost always printed at the very bottom of your printed order receipt (labeled "화장실 비밀번호" or "PW: ####*"), or a physical key attached to a large wooden spoon/tether hangs beside the register counter.',
      'Luggage Storage: T-Luggage lockers are installed in major subway stations (Seoul Station, Hongik Univ, Gangnam, Myeongdong, Jamsil). Controlled by an electronic touch-screen with English instructions; payable via T-money or credit card.',
      'Zimcarry / Delivery: Services at Incheon Airport and Seoul Station that transport your suitcases directly between the airport and your hotel lobby.'
    ],
    practicalTips: [
      'In older buildings, you might see small wastebaskets beside the toilet with signs asking not to flush paper; in modern subway stations and malls, toilet paper should be flushed down.',
      'Naver Map shows all nearby public restrooms if you search "화장실" or "Public Restroom".'
    ],
    actionableNotes: 'Subway station restrooms are your most dependable, hygienic option when exploring on foot.'
  },
  {
    id: 'essential-emergency-hotline',
    title: 'Emergency Numbers & 1330 Korea Travel Hotline',
    category: 'Emergency',
    summary: 'Critical assistance contacts for medical emergencies, police, translation, and tourism queries in South Korea.',
    keyPoints: [
      '1330 Korea Travel Hotline: The ultimate travel lifeline! A free 24/7 service operated by the Korea Tourism Organization in English, Korean, Japanese, and Chinese. Staff assist with directions, transit guidance, lost property, emergency translation with taxi drivers or doctors, and tourist complaints. Accessible via voice phone or free text chat through the Visit Korea app.',
      '112: Police Emergency (English translation service automatically bridged upon request).',
      '119: Fire, Ambulance & Medical Emergency (Fast response; GPS location tracked automatically from mobile network).',
      'Pharmacies ("Yakguk" 약국): Marked by a red cross or a glowing sign with the character "약". Pharmacists can diagnose minor ailments and dispense cold medicine, pain relievers, digestive aids, and motion sickness patches. Basic OTC remedies (Tylenol, digestive drinks, fever reducers) are also stocked 24/7 at CU, GS25, and 7-Eleven convenience stores.'
    ],
    practicalTips: [
      'Save "+82-2-1330" in your phone contacts before landing.',
      'Emergency ambulance dispatch (119) is free of charge in South Korea.',
      'Hospital International Clinics (Severance Hospital Sinchon, Seoul National University Hospital, Asan Medical Center) provide full English-speaking doctor consultations and coordinate international travel insurance claims.'
    ],
    actionableNotes: 'If you ever encounter a translation impasse with a taxi driver or vendor, call 1330 and hand your phone over for instant live interpretation.'
  }
];
