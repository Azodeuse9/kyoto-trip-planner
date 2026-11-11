import Image from "next/image";
import { ArrowRight, Clock3, MapPin, ShoppingBasket, UtensilsCrossed } from "lucide-react";
import { CardSaveButton } from "@/components/cards/CardSaveButton";
import type { FoodData } from "@/types/trip";
import { hasWorkbookValue } from "@/utils/formatWorkbookValue";

function cleanHighlight(text?: string) {
  if (!text) return "Tako tamago";
  return text.replace(/^Don'?t\s+miss:?\s*/i, "");
}

export function FoodCard({ food }: { food: FoodData }) {
  return (
    <article
      className="recommendation-card food-card"
      data-source-worksheet={food.source.worksheet}
      data-source-row={food.source.row}
    >
      <div className="food-photo">
        <Image
          src={food.image}
          alt="Fresh takoyaki at a Kyoto street food stall"
          fill
          sizes="(max-width: 620px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <span className="food-photo-label">A taste of Kyoto</span>
        <CardSaveButton title={food.title} />
      </div>
      <div className="food-content">
        <div className="food-heading">
          <span className="card-type food">FOOD DISCOVERY</span>
          {hasWorkbookValue(food.priceRange) && (
            <div className="card-price">
              <strong>{food.priceRange}</strong>
            </div>
          )}
        </div>

        <div className="card-title-block">
          <h3>{food.title}</h3>
          <div className="card-location">
            <MapPin size={15} strokeWidth={1.8} aria-hidden="true" />
            <span>{food.location}</span>
          </div>
        </div>

        <div className="food-details-row">
          {hasWorkbookValue(food.cuisine) && (
            <div className="detail-item">
              <UtensilsCrossed size={15} strokeWidth={1.8} aria-hidden="true" />
              <span>{food.cuisine}</span>
            </div>
          )}
          {hasWorkbookValue(food.openingHours) && (
            <div className="detail-item">
              <Clock3 size={15} strokeWidth={1.8} aria-hidden="true" />
              <span>{food.openingHours}</span>
            </div>
          )}
        </div>

        <p className="card-highlight food">
          <ShoppingBasket size={15} strokeWidth={1.8} aria-hidden="true" />
          <span>
            <strong>Don&apos;t miss:</strong> {cleanHighlight(food.mustOrder)}
          </span>
        </p>

        <button className="card-action-btn" type="button">
          <span>Explore food spot</span>
          <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}
