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
  const time = formatWorkbookTime(experience.time);
  const duration = hasWorkbookValue(experience.duration) ? experience.duration : undefined;
  const schedule = [time, duration]
    .filter(hasWorkbookValue)
    .join(" · ");
  const hasIncompleteSchedule =
    !hasWorkbookValue(date) || !hasWorkbookValue(time) || !hasWorkbookValue(duration);

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
      ...(hasIncompleteSchedule
        ? [{ icon: "sparkles" as const, text: "Experience details coming soon." }]
        : []),
    ],
  };

  return <RecommendationCard item={item} />;
}
