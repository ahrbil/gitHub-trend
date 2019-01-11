import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

// formating time of creating repository
// ex => 23 days ago
export const getTimeInterval = timeCreated => dayjs().to(dayjs(timeCreated));

// getting the date before provided days
export const getDateBefore = days => {
  const DateToday = Date.now();
  const dateBeforeDays = dayjs(DateToday)
    .subtract(days, "day")
    .format("YYYY-MM-DD");
  return dateBeforeDays;
};
