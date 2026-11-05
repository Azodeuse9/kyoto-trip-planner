import type {
  ExperienceData,
  FoodData,
  RecommendationSet,
  StayData,
  WorkbookSource,
} from "@/types/trip";

type RecordValue = Record<string, unknown>;

function isRecord(value: unknown): value is RecordValue {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function hasRequiredStrings(value: RecordValue, fields: string[]) {
  return fields.every((field) => isNonEmptyString(value[field]));
}

function hasOptionalStrings(value: RecordValue, fields: string[]) {
  return fields.every((field) => value[field] === undefined || isNonEmptyString(value[field]));
}

function isWorkbookSource(value: unknown): value is WorkbookSource {
  if (!isRecord(value)) return false;

  return (
    (value.worksheet === "Stays" ||
      value.worksheet === "Experiences" ||
      value.worksheet === "Food") &&
    typeof value.row === "number" &&
    Number.isInteger(value.row) &&
    value.row > 0
  );
}

function isStayData(value: unknown): value is StayData {
  if (!isRecord(value) || !isRecord(value.accessibility)) return false;

  return (
    hasRequiredStrings(value, ["title", "location", "price", "image"]) &&
    hasOptionalStrings(value, ["priceSuffix", "checkIn", "checkOut", "highlight"]) &&
    isWorkbookSource(value.source) &&
    isNonEmptyString(value.accessibility.imageAltText)
  );
}

function isExperienceData(value: unknown): value is ExperienceData {
  if (!isRecord(value)) return false;

  return (
    hasRequiredStrings(value, ["title", "location", "price", "image"]) &&
    hasOptionalStrings(value, ["date", "time", "priceSuffix", "duration"]) &&
    isWorkbookSource(value.source)
  );
}

function isFoodData(value: unknown): value is FoodData {
  if (!isRecord(value)) return false;

  return (
    hasRequiredStrings(value, ["title", "location", "image"]) &&
    hasOptionalStrings(value, ["cuisine", "priceRange", "openingHours", "mustOrder"]) &&
    isWorkbookSource(value.source)
  );
}

export function isRecommendationSet(value: unknown): value is RecommendationSet {
  if (!isRecord(value)) return false;

  return (
    isStayData(value.stay) &&
    isExperienceData(value.experience) &&
    isFoodData(value.food)
  );
}
