import * as React from "react";
import type { Event } from "@features/events/types";

export interface IEventListProps {
  events: Event[];
}
export const EventList: React.FunctionComponent<IEventListProps> = ({
  events,
}) => {
  if (!events.length) {
    return <p role="status">There are no events found!</p>;
  }
  return (
    <ul aria-label="event list" className="space-y-2">
      {events.map((e) => (
        <li key={e.id} className="border rounded p-3">
          <div className="font-medium">{e.name}</div>
          <div className="text-sm text-gray-600">
            {e.location} · {e.date}
          </div>
        </li>
      ))}
    </ul>
  );
};
