import {
  RecommendationCard,
  type RecommendationCardData,
} from "@/components/cards/RecommendationCard";
import type { FoodData } from "@/types/trip";
import { hasWorkbookValue } from "@/utils/formatWorkbookValue";

export function FoodCard({ food }: { food: FoodData }) {
  const mustOrder = hasWorkbookValue(food.mustOrder) ? `Must-order: ${food.mustOrder}` : undefined;

  const item: RecommendationCardData = {
    category: "FOOD",
    title: food.title,
    price: food.priceRange,
    location: food.location,
    image: food.image,
    imageAlt: "Fresh takoyaki at a Kyoto street food stall",
    source: food.source,
    details: [
      ...(hasWorkbookValue(food.cuisine) ? [{ icon: "food" as const, text: food.cuisine }] : []),
      ...(hasWorkbookValue(food.openingHours)
        ? [{ icon: "clock" as const, text: food.openingHours }]
        : []),
      ...(hasWorkbookValue(mustOrder)
        ? [{ icon: "sparkles" as const, text: mustOrder, highlight: true }]
        : []),
    ],
  };

  return <RecommendationCard item={item} />;
}
