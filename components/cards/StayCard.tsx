import Image from "next/image";
import { MapPin, Sparkles } from "lucide-react";
import { CardSaveButton } from "@/components/cards/CardSaveButton";
import type { StayData } from "@/types/trip";
import { formatWorkbookDate, hasWorkbookValue } from "@/utils/formatWorkbookValue";

export function StayCard({ stay }: { stay: StayData }) {
  const checkIn = formatWorkbookDate(stay.checkIn);
  const checkOut = formatWorkbookDate(stay.checkOut);

  return (
    <article
      className="recommendation-card stay-card"
      data-source-worksheet={stay.source.worksheet}
      data-source-row={stay.source.row}
    >
      <div className="stay-photo">
        <Image
          src={stay.image}
          alt={stay.accessibility.imageAltText}
          fill
          sizes="(max-width: 620px) 34vw, (max-width: 1024px) 50vw, 33vw"
          priority
        />
        <span className="stay-photo-label">A place to stay</span>
        <CardSaveButton title={stay.title} />
      </div>
      <div className="stay-content">
        <div className="stay-heading">
          <div>
            <span className="card-type stay">STAY</span>
            <h3>{stay.title}</h3>
          </div>
          {hasWorkbookValue(stay.price) && (
            <div className="card-price">
              <strong>{stay.price}</strong>
              {hasWorkbookValue(stay.priceSuffix) && <span>{stay.priceSuffix}</span>}
            </div>
          )}
        </div>
        <div className="card-location">
          <MapPin size={15} strokeWidth={1.8} aria-hidden="true" />
          <span>{stay.location}</span>
        </div>
        <div className="stay-reservation" aria-label="Reservation dates">
          <div>
            <span>CHECK-IN</span>
            <strong>{hasWorkbookValue(checkIn) ? checkIn : "Date to be confirmed"}</strong>
          </div>
          <div>
            <span>CHECK-OUT</span>
            <strong>{hasWorkbookValue(checkOut) ? checkOut : "Date to be confirmed"}</strong>
          </div>
        </div>
        <p className="stay-highlight">
          <Sparkles size={15} aria-hidden="true" />
          <span>
            {hasWorkbookValue(stay.highlight)
              ? stay.highlight
              : "More details about this stay coming soon."}
          </span>
        </p>
      </div>
    </article>
  );
}
