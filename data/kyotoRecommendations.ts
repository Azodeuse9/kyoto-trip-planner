import type { RecommendationSet } from "@/types/trip";

export const kyotoRecommendations: RecommendationSet = {
  stay: {
    title: "Gion Machiya House",
    location: "Gion, Kyoto",
    price: "$185",
    priceSuffix: "/ night",
    checkIn: "2025-04-12",
    checkOut: "2025-04-14",
    highlight: "Private tatami garden",
    image: "/images/stay-kyoto.jpg",
    source: { worksheet: "Stays", row: 2 },
    accessibility: {
      imageAltText: "Traditional Kyoto machiya with a wooden lattice facade",
    },
  },
  experience: {
    title: "Matcha tea ceremony",
    location: "Uji, Kyoto",
    date: "2025-04-12",
    time: "10:00",
    price: "$48",
    priceSuffix: "USD",
    duration: "90 min",
    highlight: "Experience Uji’s matcha tradition",
    image: "/images/matcha-experience.jpg",
    source: { worksheet: "Experiences", row: 2 },
  },
  food: {
    title: "Nishiki Market stalls",
    location: "Nakagyo, Kyoto",
    cuisine: "Street food",
    priceRange: "$",
    openingHours: "09:00 – 18:00",
    mustOrder: "Tako tamago",
    image: "/images/kyoto-food.jpg",
    source: { worksheet: "Food", row: 2 },
  },
};
