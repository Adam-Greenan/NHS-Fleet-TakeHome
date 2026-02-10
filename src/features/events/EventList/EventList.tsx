import * as React from "react";
import "./EventList.css";
import type { Event } from "../../../types/types";

export interface IEventListProps {
  events: Event[];
}
export const EventList: React.FunctionComponent<IEventListProps> = ({
  events,
}) => {
  return (
    <ul>
      {events.map((e) => (
        <li key={e.id}>
          <strong>{e.name}</strong> — {e.location} ({e.date})
        </li>
      ))}
    </ul>
  );
};
