import type { Event } from "@features/events/types";
import { normalize } from "@helpers/helpers";

export function sortEventsByDate(events: Event[]): Event[] {
  return [...events].sort((a, b) => +new Date(a.date) - +new Date(b.date));
}

export function filterEventsByQuery(
  events: Event[],
  queryString: string,
): Event[] {
  const query = normalize(queryString);
  if (!query) return events;

  const filteredEvents = events.filter(
    (eventItem) =>
      normalize(eventItem.name).includes(query) ||
      normalize(eventItem.location).includes(query),
  );

  if (!filteredEvents.length) return events;

  return filteredEvents;
}
