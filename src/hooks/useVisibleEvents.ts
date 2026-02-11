import { useMemo } from "react";
import type { Event } from "@features/events/types";
import {
  filterEventsByQuery,
  sortEventsByDate,
} from "@domain/events/eventsSearch";

export function useVisibleEvents(events: Event[], query: string) {
  const sortedEvents = useMemo(() => sortEventsByDate(events), [events]);

  const visible = useMemo(() => {
    return filterEventsByQuery(sortedEvents, query);
  }, [sortedEvents, query]);

  return { sortedEvents, visible };
}
