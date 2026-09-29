import { EtiquetteTopic } from '../types';

export const CULTURE_DATA: EtiquetteTopic[] = [
  {
    id: 'culture-dining',
    title: 'Restaurant Etiquette & Table Manners',
    category: 'Dining',
    summary: 'Korean dining is vibrant, communal, and efficient. Understanding subtle table conventions ensures a warm, seamless experience.',
    guidelines: {
      do: [
        'Look for the table call button ("벨" bel): Attached to the corner of your table. When you are ready to order or need more water/side dishes, press it! The staff will hear a chime and come to your table. If there is no button, raise your hand and politely say "Jeogiyo" (저기요 - "Excuse me").',
        'Check the table slide drawer: If your table has no chopsticks or napkins on top, look underneath the table edge or on the side. Almost all casual Korean restaurants have a discreet slide-out drawer holding metal chopsticks, spoons, napkins, and bottle openers.',
        'Help yourself to self-service water: If you see a sign saying "물은 셀프" (Mul-eun sel-peu - "Water is self-service"), walk to the metal UV sterilizer cabinet to grab a cup and fill it from the cold water purifier.',
        'Order the 2-portion minimum at BBQ joints: Korean BBQ meats are priced per portion ("inbun", typically 150g–200g). BBQ restaurants almost universally require a minimum order of 2 portions to fire up the charcoal grill, even for solo diners.',
        'Request banchan refills freely: Side dishes (kimchi, pickled radishes, namul vegetables, lettuce wraps) are complimentary. Politely ask "Banchan deo juseyo" (반찬 더 주세요 - "More side dishes please") or visit the self-service banchan bar if available.',
        'Receive and pour drinks with two hands: When someone senior or of equal status pours you a drink, hold your cup with both hands as a mark of respect.'
      ],
      dont: [
        'NEVER leave a tip: Tipping does NOT exist in South Korea! Service charge and VAT are already legally built into menu prices. Leaving coins or bills on the table or attempting to tip taxi drivers will cause confusion or embarrassment; staff will run after you thinking you forgot your change.',
        'Do not stick your chopsticks vertically upright into a bowl of white rice: This resembles incense burned at traditional Korean memorial ancestor rites (jesa) and is considered deeply taboo.',
        'Do not hold your rice bowl up in the air: Unlike Chinese or Japanese dining traditions, in Korea the rice and soup bowls remain resting firmly on the table; use your metal spoon to bring food to your mouth.'
      ]
    },
    keyPhrases: [
      {
        korean: '저기요!',
        pronunciation: 'Jeo-gi-yo!',
        english: 'Excuse me! (To call a server in a restaurant)',
        whenToUse: 'When your table has no call button and you want to place an order or get attention.'
      },
      {
        korean: '이거 주세요.',
        pronunciation: 'I-geo ju-se-yo.',
        english: 'Please give me this one.',
        whenToUse: 'When pointing to a menu item or picture.'
      },
      {
        korean: '반찬 더 주세요.',
        pronunciation: 'Ban-chan deo ju-se-yo.',
        english: 'Could we please have more side dishes?',
        whenToUse: 'When your favorite kimchi or side dish runs low.'
      },
      {
        korean: '덜 맵게 해 주세요.',
        pronunciation: 'Deol maep-ge hae ju-se-yo.',
        english: 'Please make it less spicy.',
        whenToUse: 'When ordering naturally spicy stews, chicken, or noodles.'
      },
      {
        korean: '계산해 주세요.',
        pronunciation: 'Gye-san-hae ju-se-yo.',
        english: 'The bill please / I would like to pay.',
        whenToUse: 'At the front counter near the exit when finished eating (take your table receipt bill with you).'
      }
    ]
  },
  {
    id: 'culture-transit',
    title: 'Public Transportation Manners',
    category: 'Public Transit',
    summary: 'Subways and buses in Seoul are remarkably peaceful, clean, and punctual. Observing transit etiquette preserves this harmony.',
    guidelines: {
      do: [
        'Keep priority seats vacant: Every subway car has designated seats at both ends for the elderly, disabled, and injured, as well as distinct pink seats for pregnant women. Even when the train is packed, Koreans leave these seats completely EMPTY out of cultural respect for who might board next.',
        'Move your backpack to the front: On crowded commuter trains and buses, take your backpack off and hold it low by your feet, or wear it on your chest so you don’t bump passengers behind you.',
        'Stand on the right on escalators: Keep to the right side if standing still; leave the left lane clear for passengers walking or hurrying.',
        'Set smartphones to silent/vibrate: Put your phone on "manner mode" (silent) and always use headphones for music or video playback. Keep spoken phone calls brief and hushed.'
      ],
      dont: [
        'Do not bring open takeaway drinks onto city buses: Since 2018, Seoul city bus drivers legally refuse boarding to passengers carrying open disposable coffee cups, boba cups, or uncovered hot beverages to prevent spills.',
        'Do not shout or speak loudly in train carriages: Speaking in loud voices on public transit attracts stern glances from local commuters.',
        'Do not cross legs in tight seating: Crossing your legs outward in crowded subway seats causes dirty shoes to brush against standing passengers.'
      ]
    },
    keyPhrases: [
      {
        korean: '잠시만요 / 죄송합니다',
        pronunciation: 'Jam-si-man-yo / Jwe-song-ham-ni-da',
        english: 'Just a moment please / Excuse me (sorry)',
        whenToUse: 'When navigating through a crowded subway car to reach the exit doors.'
      }
    ]
  },
  {
    id: 'culture-temple',
    title: 'Temple, Palace & Cultural Site Manners',
    category: 'Temples & Culture',
    summary: 'Historic palaces and Buddhist sanctuaries represent Korea’s living heritage. Respectful conduct honors local spirituality.',
    guidelines: {
      do: [
        'Remove shoes before stepping into temple prayer halls (Daeungjeon) or Hanok ondol rooms: Place your shoes neatly on the designated outdoor shoe racks or in provided canvas bags.',
        'Enter through side doors of temple prayer halls: The large center door is historically reserved for the resident abbots, monks, and ceremonial deities. Visitors enter respectfully through the left or right side doors.',
        'Bow your head slightly when passing Buddhist monks: A gentle bow with palms pressed together at chest height (hapjang) is a courteous greeting.'
      ],
      dont: [
        'Do not take flash photos of worshipers or Buddha statues inside active temple sanctuaries.',
        'Do not step on the raised wooden door sills (muntteok): Traditional Korean architecture believes door thresholds bridge distinct spiritual realms; step OVER them rather than standing on them.'
      ]
    },
    keyPhrases: [
      {
        korean: '감사합니다',
        pronunciation: 'Gam-sa-ham-ni-da',
        english: 'Thank you very much (polite/formal)',
        whenToUse: 'General courteous thank-you for any service or assistance.'
      }
    ]
  },
  {
    id: 'culture-phrases',
    title: 'Essential Korean Phrasebook for Travellers',
    category: 'General Manners',
    summary: 'A curated collection of practical, polite Korean phrases for daily travel scenarios with phonetics and usage tips.',
    guidelines: {
      do: [
        'Bow your head slightly when saying "Annyeonghaseyo" or "Gamsahamnida" to show courteous warmth.',
        'Use polite sentence endings ("-yo" or "-nida") when speaking to locals.'
      ],
      dont: [
        'Avoid casual slang like "Annyeong" (without "haseyo") with strangers or store clerks—casual forms are reserved strictly for close friends of identical age or younger.'
      ]
    },
    keyPhrases: [
      {
        korean: '안녕하세요',
        pronunciation: 'An-nyeong-ha-se-yo',
        english: 'Hello / Good day',
        whenToUse: 'Entering any shop, restaurant, hotel, or greeting anyone.'
      },
      {
        korean: '감사합니다',
        pronunciation: 'Gam-sa-ham-ni-da',
        english: 'Thank you',
        whenToUse: 'Receiving food, directions, or after finishing a purchase.'
      },
      {
        korean: '죄송합니다',
        pronunciation: 'Jwe-song-ham-ni-da',
        english: 'I’m sorry / Excuse me',
        whenToUse: 'Apologizing, bumping into someone, or asking a favor.'
      },
      {
        korean: '화장실 어디예요?',
        pronunciation: 'Hwa-jang-sil eo-di-ye-yo?',
        english: 'Where is the restroom?',
        whenToUse: 'In a cafe, restaurant, or subway station.'
      },
      {
        korean: '영어 메뉴판 있어요?',
        pronunciation: 'Yeong-eo me-nyu-pan iss-eo-yo?',
        english: 'Do you have an English menu?',
        whenToUse: 'At a restaurant if the main menu is in Korean.'
      },
      {
        korean: '와이파이 비밀번호 뭐예요?',
        pronunciation: 'Wa-i-pa-i bi-mil-beon-ho mwo-ye-yo?',
        english: 'What is the Wi-Fi password?',
        whenToUse: 'At a cafe or accommodation.'
      },
      {
        korean: '포장해 주세요.',
        pronunciation: 'Po-jang-hae ju-se-yo.',
        english: 'Please pack this for takeout / to-go.',
        whenToUse: 'At a bakery, cafe, or restaurant when taking food away.'
      },
      {
        korean: '얼마예요?',
        pronunciation: 'Eol-ma-ye-yo?',
        english: 'How much is this?',
        whenToUse: 'At traditional markets or street food stalls without visible price tags.'
      }
    ]
  }
];
