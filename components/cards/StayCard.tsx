import Image from "next/image";
import { ArrowRight, Calendar, Luggage, MapPin } from "lucide-react";
import { CardSaveButton } from "@/components/cards/CardSaveButton";
import type { StayData } from "@/types/trip";
import { formatWorkbookDate, hasWorkbookValue } from "@/utils/formatWorkbookValue";

function cleanHighlight(text?: string) {
  if (!text) return "Private tatami garden";
  return text.replace(/^Don'?t\s+miss:?\s*/i, "");
}

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
          sizes="(max-width: 620px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority
        />
        <span className="stay-photo-label">A place to stay</span>
        <CardSaveButton title={stay.title} />
      </div>
      <div className="stay-content">
        <div className="stay-heading">
          <span className="card-type stay">STAY</span>
          {hasWorkbookValue(stay.price) && (
            <div className="card-price">
              <strong>{stay.price}</strong>
              {hasWorkbookValue(stay.priceSuffix) && <span>{stay.priceSuffix}</span>}
            </div>
          )}
        </div>

        <div className="card-title-block">
          <h3>{stay.title}</h3>
          <div className="card-location">
            <MapPin size={15} strokeWidth={1.8} aria-hidden="true" />
            <span>{stay.location}</span>
          </div>
        </div>

        <div className="stay-dates-row" aria-label="Reservation dates">
          <Calendar size={18} strokeWidth={1.7} className="dates-calendar-icon" aria-hidden="true" />
          <div className="dates-group">
            <div className="date-column">
              <span className="date-label">CHECK-IN</span>
              <strong className="date-value">{hasWorkbookValue(checkIn) ? checkIn : "Date to be confirmed"}</strong>
            </div>
            <div className="date-column">
              <span className="date-label">CHECK-OUT</span>
              <strong className="date-value">{hasWorkbookValue(checkOut) ? checkOut : "Date to be confirmed"}</strong>
            </div>
          </div>
        </div>

        <p className="card-highlight stay">
          <Luggage size={15} strokeWidth={1.8} aria-hidden="true" />
          <span>
            <strong>Don&apos;t miss:</strong> {cleanHighlight(stay.highlight)}
          </span>
        </p>

        <button className="card-action-btn" type="button">
          <span>View stay details</span>
          <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}
