import Image from "next/image";
import { Clock3, MapPin, UtensilsCrossed } from "lucide-react";
import { CardSaveButton } from "@/components/cards/CardSaveButton";
import type { FoodData } from "@/types/trip";
import { hasWorkbookValue } from "@/utils/formatWorkbookValue";

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
          sizes="(max-width: 620px) 34vw, (max-width: 1024px) 50vw, 33vw"
        />
        <span className="food-photo-label">A taste of Kyoto</span>
        <CardSaveButton title={food.title} />
      </div>
      <div className="food-content">
        <div className="food-heading">
          <div>
            <span className="card-type food">FOOD DISCOVERY</span>
            <h3>{food.title}</h3>
          </div>
          {hasWorkbookValue(food.priceRange) && (
            <div className="card-price">
              <strong>{food.priceRange}</strong>
            </div>
          )}
        </div>
        <div className="food-neighborhood">
          <MapPin size={15} strokeWidth={1.8} aria-hidden="true" />
          <span>{food.location}</span>
        </div>
        <div className="food-discovery-details">
          {hasWorkbookValue(food.cuisine) && (
            <span>
              <UtensilsCrossed size={14} aria-hidden="true" />
              {food.cuisine}
            </span>
          )}
          {hasWorkbookValue(food.openingHours) && (
            <span>
              <Clock3 size={14} aria-hidden="true" />
              {food.openingHours}
            </span>
          )}
        </div>
        <div className="food-must-order">
          <span>DON&apos;T MISS</span>
          <strong>{hasWorkbookValue(food.mustOrder) ? food.mustOrder : "Local pick coming soon"}</strong>
        </div>
        <button className="card-show-link" type="button">
          Show <span aria-hidden="true">→</span>
        </button>
      </div>
    </article>
  );
}
