import Image from "next/image";
import { CalendarDays, Clock3, MapPin } from "lucide-react";
import { CardSaveButton } from "@/components/cards/CardSaveButton";
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
          sizes="(max-width: 620px) 34vw, (max-width: 1024px) 50vw, 33vw"
        />
        <span className="experience-photo-label">A Kyoto moment</span>
        <CardSaveButton title={experience.title} />
      </div>
      <div className="experience-content">
        <div className="experience-heading">
          <div className="experience-title">
            <span className="card-type experience">EXPERIENCE</span>
            <h3>{experience.title}</h3>
          </div>
          {hasWorkbookValue(experience.price) && (
            <div className="card-price">
              <strong>{experience.price}</strong>
              {hasWorkbookValue(experience.priceSuffix) && (
                <span>{experience.priceSuffix}</span>
              )}
            </div>
          )}
        </div>
        <div className="experience-location">
          <MapPin size={15} strokeWidth={1.8} aria-hidden="true" />
          <span>{experience.location}</span>
        </div>
        <div className="experience-schedule">
          <div>
            <CalendarDays size={16} aria-hidden="true" />
            <span>{hasWorkbookValue(date) ? date : "Date to be confirmed"}</span>
          </div>
          <div>
            <Clock3 size={16} aria-hidden="true" />
            <span>{hasWorkbookValue(schedule) ? schedule : "Time to be confirmed"}</span>
          </div>
        </div>
        <button className="card-show-link" type="button">
          Show <span aria-hidden="true">→</span>
        </button>
      </div>
    </article>
  );
}
