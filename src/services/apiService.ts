import { performClientSearch } from './searchService';
import { Place, Shop, Neighbourhood } from '../types';

export interface GuideAnswerPayload {
  answer: string;
  matchedPlaces: Place[];
  matchedNeighbourhoods: Neighbourhood[];
  matchedShops: Shop[];
  suggestedFollowUps: string[];
  sourceNote: string;
}

export async function askSeoulGuide(question: string): Promise<GuideAnswerPayload> {
  const searchResults = performClientSearch(question);

  // Prepare concise context summary from matched data for the model
  const matchedPlaces = searchResults.places.slice(0, 3);
  const matchedShops = searchResults.shops.slice(0, 3);
  const matchedNeighbourhoods = searchResults.neighbourhoods.slice(0, 2);

  const contextLines: string[] = [];

  if (matchedNeighbourhoods.length > 0) {
    contextLines.push('Matched Neighbourhoods:');
    matchedNeighbourhoods.forEach(n => {
      contextLines.push(`- ${n.name} (${n.koreanName}): ${n.overview}. Known for: ${n.whatKnownFor.join(', ')}`);
    });
  }

  if (matchedShops.length > 0) {
    contextLines.push('Matched Shopping Spots:');
    matchedShops.forEach(s => {
      contextLines.push(`- ${s.name} (${s.neighbourhood}): ${s.whyVisit}. Brands: ${s.koreanBrands.join(', ')}. Tax refund: ${s.taxRefundInfo}`);
    });
  }

  if (matchedPlaces.length > 0) {
    contextLines.push('Matched Food & Dining Spots:');
    matchedPlaces.forEach(p => {
      contextLines.push(`- ${p.name} (${p.neighbourhood}, ${p.category}): ${p.knownFor}. Signature: ${p.signatureDishes.join(', ')}. Tips: ${p.usefulTips}`);
    });
  }

  const contextSummary = contextLines.join('\n');

  try {
    const res = await fetch('/api/guide/ask', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        question,
        contextSummary,
      }),
    });

    if (res.ok) {
      const data = await res.json();
      if (data.answer && !data.fallback) {
        return {
          answer: data.answer,
          matchedPlaces,
          matchedNeighbourhoods,
          matchedShops,
          suggestedFollowUps: getFollowUps(question),
          sourceNote: 'Curated Seoul Knowledge Base & Gemini AI Travel Guide',
        };
      }
    }
  } catch (err) {
    console.warn('API call to /api/guide/ask encountered an issue, using local synthesized guide engine:', err);
  }

  // Graceful local synthesis when offline or key not provided
  return synthesizeLocalAnswer(question, searchResults, matchedPlaces, matchedNeighbourhoods, matchedShops);
}

function synthesizeLocalAnswer(
  question: string,
  searchResults: any,
  matchedPlaces: Place[],
  matchedNeighbourhoods: Neighbourhood[],
  matchedShops: Shop[]
): GuideAnswerPayload {
  const q = question.toLowerCase();

  let answerText = '';

  if (q.includes('skincare') || q.includes('beauty') || q.includes('cosmetics') || q.includes('olive young')) {
    answerText = `For Korean skincare and beauty in Seoul, you have three primary destinations depending on what you are looking for:

1. **Olive Young Myeongdong Town Flagship**: Spanning two floors with designated Global Top-10 beauty islands and multilingual staff. Ideal for viral sunscreens (Round Lab, Skin1004, Beauty of Joseon) and sheet masks (Torriden, Mediheal) with **immediate tax-free deduction** at checkout when spending over ₩15,000 with your passport.
2. **Seongsu-dong**: The epicenter of experimental beauty flagships. Visit **Amore Seongsu** to test hundreds of formulations and book custom foundation mixing sessions, alongside **Tamburins** sensory fragrance showrooms.
3. **Apgujeong & Dosan Park**: Head to **HAUS DOSAN** for high-concept perfumes and egg lip balms by Tamburins fronted by BLACKPINK's Jennie.

*Local tip:* Always bring your physical passport for instant VAT tax deduction at checkout. Check for "1+1" (buy-one-get-one-free) shelf tags at Olive Young!`;
  } else if (q.includes('seongsu')) {
    answerText = `**Seongsu-dong (성수동)** is known as the "Brooklyn of Seoul"—an industrial leather shoe factory district dynamically transformed into Korea’s creative capital of experiential retail.

- **What it is known for**: Viral brand pop-up stores with immersive art installations, converted red-brick warehouse roasteries, and independent K-fashion flagships.
- **Key streets**: **Yeonmujang-gil** is the main shopping artery lined with brands like *Empty Seongsu*, *Stand Oil*, and *Ader Error*.
- **Food & Cafes**: Visit **Cafe Onion Seongsu** (industrial bakery with rooftop) or **Daelim Changgo**, and queue for **Sommunnan Seongsu Gamjatang** (pork backbone stew).
- **How to get there**: Take Subway Line 2 to **Seongsu Station Exit 3**.

*Local tip:* Pop-ups require digital waitlist check-in via iPads at the door. Arrive early in the afternoon (13:00) as weekend queues fill up quickly.`;
  } else if (q.includes('eat') || q.includes('food') || q.includes('bbq') || q.includes('restaurant')) {
    answerText = `Seoul's food scene is defined by deep culinary heritage and lively communal dining. Here are essential dishes and where to experience them:

1. **Korean BBQ (Charcoal Pork & Beef)**: Try **Geumdwaeji Sikdang (Gold Pig)** in Yaksu/Euljiro for Michelin Bib Gourmand bone-in pork belly, or explore the Mapo BBQ alleys. Remember BBQ spots require a 2-portion meat minimum order.
2. **Traditional Knife-Cut Noodles (Kalguksu)**: Head to **Myeongdong Kyoja** for legendary hand-cut noodles in rich chicken broth with potent garlic kimchi.
3. **Ginseng Chicken Soup (Samgyetang)**: Visit **Tosokchon** near Gyeongbokgung Palace for restorative chicken stuffed with glutinous rice and ginseng inside a traditional Hanok.
4. **Authentic Street Food**: Head to **Gwangjang Market** for freshly fried mung bean pancakes (bindaetteok) and Mayak Gimbap, or **Sindang-dong** for cook-at-table spicy tteokbokki.

*Local tip:* Look for the table call button ("벨" bel) to summon your server, and check the slide drawer under your table for utensils!`;
  } else if (q.includes('subway') || q.includes('metro') || q.includes('train')) {
    answerText = `The Seoul Metropolitan Subway is one of the cleanest, most punctual transit systems in the world. Essential rules to know:

- **Payment**: Buy a rechargeable **T-money card** (₩3,000) at any convenience store and top it up with **cash KRW** at station ticket machines. Alternatively, the **Climate Card** offers unlimited 1-day (₩5,000) to 7-day tourist passes for travel strictly within Seoul.
- **Tapping Rule**: Always tap your card when entering AND exiting. Free transfers apply between subway and buses within 30 minutes if you tap out properly.
- **Priority Seats**: Every carriage has designated seating at both ends for the elderly and disabled, plus pink seats for pregnant women. Keep these completely vacant even on crowded trains.
- **Navigation**: Station exit numbers are crucial (e.g. "Exit 6"). Download **Naver Map** because Google Maps does not support walking navigation in Korea!`;
  } else if (q.includes('incheon') || q.includes('airport') || q.includes('arex')) {
    answerText = `Traveling from Incheon International Airport to downtown Seoul:

1. **AREX Express Train (Orange)**: The fastest option. Non-stop from Incheon T1 (43 mins) or T2 (51 mins) directly to **Seoul Station** for ₩11,000. Reserved seating, luggage racks, and free Wi-Fi.
2. **AREX All-Stop Train (Blue)**: Commuter train taking ~54 mins to **Hongik University (Hongdae)** or 59 mins to Seoul Station for ~₩4,500 using your T-money card. *Take this if staying in Hongdae!*
3. **Airport Limousine Buses (e.g., 6001, 6015)**: Cost ₩16,000–₩18,000. Best if carrying multiple heavy suitcases directly to hotels in Myeongdong, Dongdaemun, or Gangnam without carrying luggage down subway stairs.

*Warning:* The Seoul Climate Card is NOT valid on the AREX Express train or Airport Limousine buses.`;
  } else if (q.includes('shopping') || q.includes('fashion') || q.includes('shop')) {
    answerText = `Seoul’s shopping districts cater to distinctly different styles and budgets:

- **Seongsu-dong**: Trending independent K-fashion (Matin Kim, Stand Oil, Empty showroom) and architectural pop-ups.
- **Myeongdong**: The undisputed skincare capital with multi-level Olive Young flagships and cosmetics boutiques.
- **Hongdae**: Youth streetwear, affordable fast-fashion, K-pop merchandise (Withmuu), and Musinsa Standard.
- **Hannam-dong**: Quiet luxury and cult niche labels (Mardi Mercredi, Marithé + François Girbaud, Nonfiction fragrance).
- **Apgujeong & Cheongdam**: Ultra-luxury flagship boutiques, HAUS DOSAN, and Galleria Department Store.
- **Goto Mall (Express Bus Terminal)**: 880-meter subterranean bargain alley for ₩10,000–₩20,000 trendy clothes (bring cash).

*Tax tip:* Bring your physical passport for instant tax refund at checkout on purchases over ₩15,000!`;
  } else {
    answerText = `Here is curated guidance for "${question}" based on our verified Seoul travel handbook:

Seoul is best discovered neighborhood by neighborhood:
- For **historic culture and tea**: Bukchon Hanok Village, Insadong, and royal palaces.
- For **food and night markets**: Gwangjang Market, Euljiro "Hipjiro" Nogari alley, and Myeongdong street stalls.
- For **trending fashion and cafes**: Seongsu-dong, Hongdae, and Hannam-dong.
- For **transportation**: Use a T-money card and navigate with Naver Map (Google Maps has limited walking directions in Korea).

Explore the matched recommendations below for detailed addresses, transit directions, and verified local tips!`;
  }

  return {
    answer: answerText,
    matchedPlaces,
    matchedNeighbourhoods,
    matchedShops,
    suggestedFollowUps: getFollowUps(question),
    sourceNote: 'Seoul Travel Guide Knowledge Base & Verified Local Directory',
  };
}

function getFollowUps(q: string): string[] {
  const lower = q.toLowerCase();
  if (lower.includes('skincare') || lower.includes('beauty')) {
    return [
      'How does immediate tax refund work at Olive Young?',
      'What are the best skincare brands in Korea right now?',
      'Where can I find bespoke perfumes in Seoul?'
    ];
  }
  if (lower.includes('eat') || lower.includes('food')) {
    return [
      'What are the table rules for Korean BBQ?',
      'Where can I find the best street food in Seoul?',
      'Are there vegetarian-friendly restaurants in Seoul?'
    ];
  }
  if (lower.includes('seongsu')) {
    return [
      'Where are the best cafes in Seongsu?',
      'What is the difference between Seongsu and Hongdae?',
      'How do I get to Seoul Forest from Seongsu?'
    ];
  }
  return [
    'How do I use the Seoul subway system?',
    'What should I download before traveling to Seoul?',
    'What is restaurant etiquette in South Korea?'
  ];
}
