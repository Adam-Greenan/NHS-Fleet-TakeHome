import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { EventList } from "./EventList";
import type { Event } from "../../../types/types";

describe("EventList", () => {
  it("renders all events with name, location and date", () => {
    const events: Event[] = [
      { id: 1, name: "React London Meetup", date: "2026-03-02", location: "London, UK" },
      { id: 2, name: "Frontend Futures", date: "2026-02-18", location: "Manchester, UK" },
    ];

    const { container } = render(<EventList events={events} />);

    const items = container.querySelectorAll("li");
    expect(items.length).toBe(2);

    expect(screen.getByText("React London Meetup")).toBeInTheDocument();
    expect(screen.getByText(/London, UK/)).toBeInTheDocument();
    expect(screen.getByText(/2026-03-02/)).toBeInTheDocument();

    expect(screen.getByText("Frontend Futures")).toBeInTheDocument();
    expect(screen.getByText(/Manchester, UK/)).toBeInTheDocument();
    expect(screen.getByText(/2026-02-18/)).toBeInTheDocument();
  });

  it("renders an empty list when no events are provided", () => {
    const { container } = render(<EventList events={[]} />);
    const items = container.querySelectorAll("li");
    expect(items.length).toBe(0);

    expect(container.querySelector("ul")).toBeTruthy();
  });
});
