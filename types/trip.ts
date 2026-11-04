export type StayData = {
  title: string;
  location: string;
  price: string;
  priceSuffix?: string;
  checkIn: string;
  checkOut: string;
  highlight: string;
  image: string;
};

export type ExperienceData = {
  title: string;
  location: string;
  date: string;
  time: string;
  price: string;
  priceSuffix?: string;
  duration: string;
  image: string;
};

export type FoodData = {
  title: string;
  location: string;
  cuisine: string;
  priceRange: string;
  openingHours: string;
  mustOrder: string;
  image: string;
};

export type RecommendationSet = {
  stay: StayData;
  experience: ExperienceData;
  food: FoodData;
};

export type ChatMessageModel = {
  id: string;
  sender: "user" | "assistant";
  text?: string;
  isThinking?: boolean;
  recommendations?: RecommendationSet;
};
