import type { RecommendationSet } from "@/types/trip";
import { ExperienceCard } from "@/components/cards/ExperienceCard";
import { FoodCard } from "@/components/cards/FoodCard";
import { StayCard } from "@/components/cards/StayCard";

type RecommendationCardsProps = {
  recommendations: RecommendationSet;
};

export function RecommendationCards({ recommendations }: RecommendationCardsProps) {
  return (
    <div className="recommendation-grid" aria-label="Kyoto recommendations">
      <StayCard stay={recommendations.stay} />
      <ExperienceCard experience={recommendations.experience} />
      <FoodCard food={recommendations.food} />
    </div>
  );
}
