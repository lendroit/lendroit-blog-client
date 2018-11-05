import { DateTime } from "luxon";

export function getDisplayDate(createdAt: string) {
  console.log(createdAt);
  const displayDate = DateTime.fromMillis(parseInt(createdAt, 0)).toFormat(
    "dd MMMM, yyyy"
  );
  return displayDate;
}
