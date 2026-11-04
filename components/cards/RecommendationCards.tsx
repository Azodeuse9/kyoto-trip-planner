import type { RecommendationSet } from '@/types/trip';
import {
  RecommendationCard,
  type RecommendationCardData,
} from '@/components/cards/RecommendationCard';

type RecommendationCardsProps = {
  recommendations: RecommendationSet;
};

export function RecommendationCards({ recommendations }: RecommendationCardsProps) {
  const cards: RecommendationCardData[] = [
    {
      category: 'STAY',
      title: recommendations.stay.title,
      price: recommendations.stay.price,
      priceSuffix: recommendations.stay.priceSuffix,
      location: recommendations.stay.location,
      image: recommendations.stay.image,
      imageAlt: 'Traditional Kyoto machiya with a wooden lattice facade',
      details: [
        {
          icon: 'calendar',
          text: `${recommendations.stay.checkIn} – ${recommendations.stay.checkOut}`,
        },
        { icon: 'sparkles', text: recommendations.stay.highlight, highlight: true },
      ],
    },
    {
      category: 'EXPERIENCE',
      title: recommendations.experience.title,
      price: recommendations.experience.price,
      priceSuffix: recommendations.experience.priceSuffix,
      location: recommendations.experience.location,
      image: recommendations.experience.image,
      imageAlt: 'Matcha tea in a ceramic bowl beside a bamboo whisk',
      details: [
        { icon: 'calendar', text: recommendations.experience.date },
        {
          icon: 'clock',
          text: `${recommendations.experience.time} · ${recommendations.experience.duration}`,
        },
      ],
    },
    {
      category: 'FOOD',
      title: recommendations.food.title,
      price: recommendations.food.priceRange,
      location: recommendations.food.location,
      image: recommendations.food.image,
      imageAlt: 'Fresh takoyaki at a Kyoto street food stall',
      details: [
        { icon: 'food', text: recommendations.food.cuisine },
        { icon: 'clock', text: recommendations.food.openingHours },
        {
          icon: 'sparkles',
          text: `Must-order: ${recommendations.food.mustOrder}`,
          highlight: true,
        },
      ],
    },
  ];

  return (
    <div className="recommendation-grid" aria-label="Kyoto recommendations">
      {cards.map((item) => (
        <RecommendationCard key={item.category} item={item} />
      ))}
    </div>
  );
}
