export function hasWorkbookValue(value?: string): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export function formatWorkbookDate(value?: string): string | undefined {
  if (!hasWorkbookValue(value)) return undefined;

  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (!match) return value;

  const [, year, month, day] = match;
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(Number(year), Number(month) - 1, Number(day))));
}

export function formatWorkbookTime(value?: string): string | undefined {
  if (!hasWorkbookValue(value)) return undefined;

  const match = /^(\d{1,2}):(\d{2})$/.exec(value);
  if (!match) return value;

  const hours = Number(match[1]);
  const minutes = match[2];
  const period = hours >= 12 ? "PM" : "AM";
  const displayHours = hours % 12 || 12;

  return `${displayHours}:${minutes} ${period}`;
}
