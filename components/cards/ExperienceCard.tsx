import {
  RecommendationCard,
  type RecommendationCardData,
} from "@/components/cards/RecommendationCard";
import type { ExperienceData } from "@/types/trip";
import {
  formatWorkbookDate,
  formatWorkbookTime,
  hasWorkbookValue,
} from "@/utils/formatWorkbookValue";

export function ExperienceCard({ experience }: { experience: ExperienceData }) {
  const date = formatWorkbookDate(experience.date);
  const schedule = [formatWorkbookTime(experience.time), experience.duration]
    .filter(hasWorkbookValue)
    .join(" · ");

  const item: RecommendationCardData = {
    category: "EXPERIENCE",
    title: experience.title,
    price: experience.price,
    priceSuffix: experience.priceSuffix,
    location: experience.location,
    image: experience.image,
    imageAlt: "Matcha tea in a ceramic bowl beside a bamboo whisk",
    source: experience.source,
    details: [
      ...(hasWorkbookValue(date) ? [{ icon: "calendar" as const, text: date }] : []),
      ...(hasWorkbookValue(schedule) ? [{ icon: "clock" as const, text: schedule }] : []),
    ],
  };

  return <RecommendationCard item={item} />;
}
