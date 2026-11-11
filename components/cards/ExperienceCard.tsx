import Image from "next/image";
import { ArrowRight, Calendar, Clock3, MapPin, Scroll } from "lucide-react";
import { CardSaveButton } from "@/components/cards/CardSaveButton";
import type { ExperienceData } from "@/types/trip";
import {
  formatWorkbookDate,
  formatWorkbookTime,
  hasWorkbookValue,
} from "@/utils/formatWorkbookValue";

function cleanHighlight(text?: string) {
  if (!text) return "Discover Uji's matcha tradition";
  return text.replace(/^Don'?t\s+miss:?\s*/i, "");
}

export function ExperienceCard({ experience }: { experience: ExperienceData }) {
  const date = formatWorkbookDate(experience.date);
  const time = formatWorkbookTime(experience.time);
  const duration = hasWorkbookValue(experience.duration) ? experience.duration : undefined;
  const schedule = [time, duration].filter(hasWorkbookValue).join(" · ");

  return (
    <article
      className="recommendation-card experience-card"
      data-source-worksheet={experience.source.worksheet}
      data-source-row={experience.source.row}
    >
      <div className="experience-photo">
        <Image
          src={experience.image}
          alt="Matcha tea in a ceramic bowl beside a bamboo whisk"
          fill
          sizes="(max-width: 620px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <span className="experience-photo-label">A Kyoto moment</span>
        <CardSaveButton title={experience.title} />
      </div>
      <div className="experience-content">
        <div className="experience-heading">
          <span className="card-type experience">EXPERIENCE</span>
          {hasWorkbookValue(experience.price) && (
            <div className="card-price">
              <strong>{experience.price}</strong>
              {hasWorkbookValue(experience.priceSuffix) && (
                <span>{experience.priceSuffix}</span>
              )}
            </div>
          )}
        </div>

        <div className="card-title-block">
          <h3>{experience.title}</h3>
          <div className="card-location">
            <MapPin size={15} strokeWidth={1.8} aria-hidden="true" />
            <span>{experience.location}</span>
          </div>
        </div>

        <div className="experience-details-row">
          <div className="detail-item">
            <Calendar size={15} strokeWidth={1.8} aria-hidden="true" />
            <span>{hasWorkbookValue(date) ? date : "Date to be confirmed"}</span>
          </div>
          <div className="detail-item">
            <Clock3 size={15} strokeWidth={1.8} aria-hidden="true" />
            <span>{hasWorkbookValue(schedule) ? schedule : "Time to be confirmed"}</span>
          </div>
        </div>

        <p className="card-highlight experience">
          <Scroll size={15} strokeWidth={1.8} aria-hidden="true" />
          <span>
            <strong>Don&apos;t miss:</strong> {cleanHighlight(experience.highlight)}
          </span>
        </p>

        <button className="card-action-btn" type="button">
          <span>Explore experience</span>
          <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}
