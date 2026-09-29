export type PriceLevel = '$' | '$$' | '$$$' | '$$$$';

export type CuisineCategory = 
  | 'Korean BBQ'
  | 'Korean Fried Chicken'
  | 'Ginseng Chicken'
  | 'Tteokbokki'
  | 'Korean Noodles'
  | 'Kalguksu'
  | 'Naengmyeon'
  | 'Bibimbap'
  | 'Seafood'
  | 'Street Food'
  | 'Cafes & Bakeries'
  | 'Desserts'
  | 'Fine Dining'
  | 'Local Hidden Gems'
  | 'Temple & Vegetarian'
  | 'Halal Friendly';

export type ShopCategory =
  | 'Korean Skincare & Beauty'
  | 'Olive Young Flagship'
  | 'K-Fashion & Streetwear'
  | 'Designer Brands'
  | 'Luxury & High Fashion'
  | 'Vintage & Thrift'
  | 'Accessories & Jewelry'
  | 'Home & Lifestyle'
  | 'K-Pop Goods & Albums'
  | 'Souvenirs & Traditional Crafts'
  | 'Department Stores'
  | 'Shopping Malls & Underground';

export interface Place {
  id: string;
  name: string;
  koreanName: string;
  category: CuisineCategory;
  cuisine: string;
  neighbourhood: string;
  address: string;
  koreanAddress?: string;
  priceRange: string;
  priceLevel: PriceLevel;
  signatureDishes: string[];
  knownFor: string;
  openingHours: string;
  usefulTips: string;
  dietary: {
    vegetarianFriendly?: boolean;
    veganOptions?: boolean;
    halalFriendly?: boolean;
    porkFree?: boolean;
  };
  mealType: ('Breakfast' | 'Lunch' | 'Dinner' | 'Late Night' | 'Cafe/Snack')[];
  restaurantType: 'Casual Eatery' | 'Market Stall' | 'Traditional Hanok' | 'Trendy Bistro' | 'Fine Dining' | 'Specialty Counter';
  locationInfo: {
    nearestStation: string;
    exitNumber: string;
    naverMapQuery: string;
    googleMapQuery: string;
  };
  source: string;
  lastVerified: string;
  imageUrl?: string;
}

export interface Shop {
  id: string;
  name: string;
  koreanName: string;
  category: ShopCategory;
  neighbourhood: string;
  address: string;
  priceLevel: PriceLevel;
  whatToBuy: string[];
  koreanBrands: string[];
  openingHours: string;
  whyVisit: string;
  usefulTips: string;
  taxRefundInfo: string;
  locationInfo: {
    nearestStation: string;
    exitNumber: string;
    naverMapQuery: string;
  };
  source: string;
  lastVerified: string;
  imageUrl?: string;
}

export interface Neighbourhood {
  id: string;
  name: string;
  koreanName: string;
  overview: string;
  character: string;
  whatKnownFor: string[];
  foodHighlights: string[];
  shoppingHighlights: string[];
  cafeHighlights: string[];
  thingsToSee: string[];
  thingsToDo: string[];
  typicalVisitors: string;
  recommendedTime: string;
  nearbyNeighbourhoods: string[];
  howToGetThere: {
    subwayLines: string[];
    mainStations: string[];
    transitTip: string;
  };
  practicalTips: string[];
  imageUrl?: string;
}

export interface TransportArticle {
  id: string;
  title: string;
  category: 'Airport' | 'Subway' | 'Bus' | 'Taxi' | 'Payment Cards' | 'Intercity';
  summary: string;
  howItWorks: string[];
  howToPay: string;
  approximateCost: string;
  whenUseful: string;
  importantTips: string[];
  commonMistakes: string[];
}

export interface EssentialItem {
  id: string;
  title: string;
  category: 'Connectivity' | 'Money & Payments' | 'Shopping & Taxes' | 'Power & Utilities' | 'Daily Life' | 'Emergency';
  summary: string;
  keyPoints: string[];
  practicalTips: string[];
  actionableNotes?: string;
}

export interface EtiquetteTopic {
  id: string;
  title: string;
  category: 'Dining' | 'Public Transit' | 'Shopping' | 'Temples & Culture' | 'General Manners';
  summary: string;
  guidelines: {
    do: string[];
    dont: string[];
  };
  keyPhrases?: {
    korean: string;
    pronunciation: string;
    english: string;
    whenToUse: string;
  }[];
}

export interface TravelTipItem {
  id: string;
  title: string;
  category: 'First-Timers' | 'Seasons' | 'Apps to Download' | 'Mistakes to Avoid' | 'Holidays';
  description: string;
  highlights: string[];
}

export interface ExploreInterest {
  id: string;
  title: string;
  category: 'Food' | 'Shopping' | 'Experiences';
  tagline: string;
  description: string;
  topNeighbourhoodIds: string[];
  relatedCategoryKeys: string[];
  highlights: string[];
}

export interface AiChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  matchedPlaces?: Place[];
  matchedNeighbourhoods?: Neighbourhood[];
  matchedShops?: Shop[];
  suggestedQuestions?: string[];
  sourceNote?: string;
}
