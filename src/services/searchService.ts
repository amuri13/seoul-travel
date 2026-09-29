import { PLACES_DATA } from '../data/places';
import { SHOPS_DATA } from '../data/shops';
import { NEIGHBOURHOODS_DATA } from '../data/neighborhoods';
import { TRANSPORT_DATA } from '../data/transport';
import { ESSENTIALS_DATA } from '../data/essentials';
import { CULTURE_DATA } from '../data/culture';
import { TIPS_DATA } from '../data/tips';
import { EXPLORE_INTERESTS } from '../data/explore';
import { Place, Shop, Neighbourhood, TransportArticle, EssentialItem, EtiquetteTopic, TravelTipItem, ExploreInterest } from '../types';

export interface SearchResults {
  query: string;
  places: Place[];
  shops: Shop[];
  neighbourhoods: Neighbourhood[];
  transport: TransportArticle[];
  essentials: EssentialItem[];
  culture: EtiquetteTopic[];
  tips: TravelTipItem[];
  explore: ExploreInterest[];
  totalMatches: number;
}

export function performClientSearch(query: string): SearchResults {
  const cleanQuery = query.trim().toLowerCase();

  if (!cleanQuery) {
    return {
      query: '',
      places: [],
      shops: [],
      neighbourhoods: [],
      transport: [],
      essentials: [],
      culture: [],
      tips: [],
      explore: [],
      totalMatches: 0
    };
  }

  const terms = cleanQuery.split(/\s+/).filter(t => t.length > 0);

  const matchesAny = (text: string | undefined): boolean => {
    if (!text) return false;
    const lower = text.toLowerCase();
    return terms.some(term => lower.includes(term));
  };

  const matchesAll = (text: string | undefined): boolean => {
    if (!text) return false;
    const lower = text.toLowerCase();
    return terms.every(term => lower.includes(term));
  };

  // Filter Places
  const matchedPlaces = PLACES_DATA.filter(p => {
    const haystack = `${p.name} ${p.koreanName} ${p.category} ${p.cuisine} ${p.neighbourhood} ${p.knownFor} ${p.signatureDishes.join(' ')} ${p.usefulTips}`;
    return matchesAll(haystack) || matchesAny(haystack);
  });

  // Filter Shops
  const matchedShops = SHOPS_DATA.filter(s => {
    const haystack = `${s.name} ${s.koreanName} ${s.category} ${s.neighbourhood} ${s.whyVisit} ${s.whatToBuy.join(' ')} ${s.koreanBrands.join(' ')} ${s.usefulTips}`;
    return matchesAll(haystack) || matchesAny(haystack);
  });

  // Filter Neighbourhoods
  const matchedNeighbourhoods = NEIGHBOURHOODS_DATA.filter(n => {
    const haystack = `${n.name} ${n.koreanName} ${n.overview} ${n.character} ${n.whatKnownFor.join(' ')} ${n.foodHighlights.join(' ')} ${n.shoppingHighlights.join(' ')} ${n.thingsToDo.join(' ')}`;
    return matchesAll(haystack) || matchesAny(haystack);
  });

  // Filter Transport
  const matchedTransport = TRANSPORT_DATA.filter(t => {
    const haystack = `${t.title} ${t.category} ${t.summary} ${t.whenUseful} ${t.importantTips.join(' ')} ${t.commonMistakes.join(' ')}`;
    return matchesAll(haystack) || matchesAny(haystack);
  });

  // Filter Essentials
  const matchedEssentials = ESSENTIALS_DATA.filter(e => {
    const haystack = `${e.title} ${e.category} ${e.summary} ${e.keyPoints.join(' ')} ${e.practicalTips.join(' ')}`;
    return matchesAll(haystack) || matchesAny(haystack);
  });

  // Filter Culture
  const matchedCulture = CULTURE_DATA.filter(c => {
    const phraseTexts = c.keyPhrases ? c.keyPhrases.map(p => `${p.english} ${p.korean} ${p.pronunciation}`).join(' ') : '';
    const haystack = `${c.title} ${c.category} ${c.summary} ${c.guidelines.do.join(' ')} ${c.guidelines.dont.join(' ')} ${phraseTexts}`;
    return matchesAll(haystack) || matchesAny(haystack);
  });

  // Filter Tips
  const matchedTips = TIPS_DATA.filter(t => {
    const haystack = `${t.title} ${t.category} ${t.description} ${t.highlights.join(' ')}`;
    return matchesAll(haystack) || matchesAny(haystack);
  });

  // Filter Explore
  const matchedExplore = EXPLORE_INTERESTS.filter(x => {
    const haystack = `${x.title} ${x.category} ${x.tagline} ${x.description} ${x.highlights.join(' ')}`;
    return matchesAll(haystack) || matchesAny(haystack);
  });

  const totalMatches =
    matchedPlaces.length +
    matchedShops.length +
    matchedNeighbourhoods.length +
    matchedTransport.length +
    matchedEssentials.length +
    matchedCulture.length +
    matchedTips.length +
    matchedExplore.length;

  return {
    query,
    places: matchedPlaces,
    shops: matchedShops,
    neighbourhoods: matchedNeighbourhoods,
    transport: matchedTransport,
    essentials: matchedEssentials,
    culture: matchedCulture,
    tips: matchedTips,
    explore: matchedExplore,
    totalMatches
  };
}

export const SUGGESTED_QUERIES = [
  'Where can I find Korean skincare?',
  'What should I eat in Seoul?',
  'Where are the best areas for shopping?',
  'What is Seongsu known for?',
  'How do I get from Incheon Airport to Seoul?',
  'What should I know before using the Seoul subway?',
  'How does the Climate Card compare to T-money?',
  'What are the table rules for Korean BBQ?'
];
