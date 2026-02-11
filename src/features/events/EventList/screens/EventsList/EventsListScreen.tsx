import * as React from "react";
import { useState } from "react";
import type { Event } from "@features/events/types";
import { useVisibleEvents } from "@hooks/useVisibleEvents";
import { EventList } from "@features/events/EventList/EventList";
import { MOCKEVENTS } from "@mocks/Events";

export interface IEventsListScreenProps {
  events?: Event[];
  initialQuery?: string;
}

export const EventsListScreen: React.FunctionComponent<
  IEventsListScreenProps
> = ({ events = MOCKEVENTS, initialQuery = "" }) => {
  const [query, setQuery] = useState(initialQuery);

  const { visible } = useVisibleEvents(events, query);

  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Find Your Event</h1>

      <label className="block mb-4">
        <span className="text-sm font-medium">Search</span>
        <input
          aria-label="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by name or location…"
          className="mt-2 w-full border rounded px-3 py-2"
        />
      </label>

      <EventList events={visible} />
    </main>
  );
};
