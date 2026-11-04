import type { RecommendationSet } from "@/types/trip";

export const kyotoRecommendations: RecommendationSet = {
  stay: {
    title: "Gion Machiya House",
    location: "Gion, Kyoto",
    price: "$185",
    priceSuffix: "/ night",
    checkIn: "Apr 12, 2025",
    checkOut: "Apr 14, 2025",
    highlight: "Private tatami garden",
    image: "/images/stay-kyoto.jpg",
  },
  experience: {
    title: "Matcha tea ceremony",
    location: "Uji, Kyoto",
    date: "Apr 12, 2025",
    time: "10:00 AM",
    price: "$48",
    priceSuffix: "USD",
    duration: "90 min",
    image: "/images/matcha-experience.jpg",
  },
  food: {
    title: "Nishiki Market stalls",
    location: "Nakagyo, Kyoto",
    cuisine: "Street food",
    priceRange: "Price varies",
    openingHours: "09:00 – 18:00",
    mustOrder: "Tako tamago",
    image: "/images/kyoto-food.jpg",
  },
};
