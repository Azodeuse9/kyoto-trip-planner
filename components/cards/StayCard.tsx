import {
  RecommendationCard,
  type RecommendationCardData,
} from "@/components/cards/RecommendationCard";
import type { StayData } from "@/types/trip";
import { formatWorkbookDate, hasWorkbookValue } from "@/utils/formatWorkbookValue";

export function StayCard({ stay }: { stay: StayData }) {
  const stayDates = [formatWorkbookDate(stay.checkIn), formatWorkbookDate(stay.checkOut)]
    .filter(hasWorkbookValue)
    .join(" – ");
  const highlight = hasWorkbookValue(stay.highlight)
    ? stay.highlight
    : "More details about this stay coming soon.";

  const item: RecommendationCardData = {
    category: "STAY",
    title: stay.title,
    price: stay.price,
    priceSuffix: stay.priceSuffix,
    location: stay.location,
    image: stay.image,
    imageAlt: stay.accessibility.imageAltText,
    source: stay.source,
    details: [
      ...(hasWorkbookValue(stayDates) ? [{ icon: "calendar" as const, text: stayDates }] : []),
      {
        icon: "sparkles",
        text: highlight,
        highlight: hasWorkbookValue(stay.highlight),
      },
    ],
  };

  return <RecommendationCard item={item} />;
}
