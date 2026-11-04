import Image from 'next/image';
import { useState } from 'react';
import {
  CalendarDays,
  Clock3,
  Heart,
  MapPin,
  Sparkles,
  UtensilsCrossed,
} from 'lucide-react';

type DetailIcon = 'calendar' | 'clock' | 'sparkles' | 'food';

export type RecommendationCardData = {
  category: 'STAY' | 'EXPERIENCE' | 'FOOD';
  title: string;
  price: string;
  priceSuffix?: string;
  location: string;
  image: string;
  imageAlt: string;
  details: { icon: DetailIcon; text: string; highlight?: boolean }[];
};

const detailIcons = {
  calendar: CalendarDays,
  clock: Clock3,
  sparkles: Sparkles,
  food: UtensilsCrossed,
};

export function RecommendationCard({ item }: { item: RecommendationCardData }) {
  const [saved, setSaved] = useState(false);

  return (
    <article className="recommendation-card">
      <div className="card-image-wrap">
        <Image
          className="card-image"
          src={item.image}
          alt={item.imageAlt}
          fill
          loading={item.category === 'STAY' ? 'eager' : 'lazy'}
          sizes="(max-width: 620px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <button
          className={`save-button${saved ? ' is-saved' : ''}`}
          type="button"
          aria-label={saved ? `Remove ${item.title} from saved items` : `Save ${item.title}`}
          aria-pressed={saved}
          onClick={() => setSaved((isSaved) => !isSaved)}
        >
          <Heart size={18} strokeWidth={2} fill={saved ? 'currentColor' : 'white'} />
        </button>
      </div>

      <div className="card-content">
        <div className="card-meta-row">
          <span className={`card-type ${item.category.toLowerCase()}`}>{item.category}</span>
          <div className="card-price">
            <strong>{item.price}</strong>
            {item.priceSuffix && <span>{item.priceSuffix}</span>}
          </div>
        </div>

        <h3>{item.title}</h3>
        <div className="card-location">
          <MapPin size={15} strokeWidth={1.8} aria-hidden="true" />
          <span>{item.location}</span>
        </div>

        <div className="card-divider" />
        <ul className="card-details">
          {item.details.map(({ icon, text, highlight }) => {
            const Icon = detailIcons[icon];
            return (
              <li className={highlight ? 'highlight-detail' : ''} key={text}>
                <Icon size={15} strokeWidth={1.8} aria-hidden="true" />
                <span>{text}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </article>
  );
}
