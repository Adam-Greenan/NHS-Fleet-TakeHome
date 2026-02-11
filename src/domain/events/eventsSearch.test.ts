import { describe, it, expect } from "vitest";
import { filterEventsByQuery, sortEventsByDate } from "./eventsSearch";


const events = [
  { id: 1, name: "B Event", date: "2026-03-02", location: "London" },
  { id: 2, name: "A Event", date: "2026-02-18", location: "Manchester" },
  { id: 3, name: "Online Briefing", date: "2026-02-28", location: "Online (MS Teams)" },
];

describe("eventsSearch", () => {
  it("sorts by closest date", () => {
    const sorted = sortEventsByDate(events);
    expect(sorted.map((e) => e.id)).toEqual([2, 3, 1]);
  });

  it("filters events by name and location", () => {
    expect(filterEventsByQuery(events, "online").map((e) => e.id)).toEqual([3]);
    expect(filterEventsByQuery(events, "manch").map((e) => e.id)).toEqual([2]);
  });

  it("returns all events sorted if no event is found via filters", () => {
    expect(filterEventsByQuery(events, "Failure").map(e => e.id)).toEqual([1,2,3])
  })
});
