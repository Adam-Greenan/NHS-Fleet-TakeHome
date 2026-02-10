import { useState } from "react";
import { EventList } from "./features/events/EventList";

function App() {
  return (
    <>
      <EventList
        events={[
          {
            id: 2,
            name: "Frontend Futures",
            date: "2026-02-18",
            location: "Manchester, UK",
          },
          {
            id: 3,
            name: "TypeScript Live",
            date: "2026-02-28",
            location: "Online",
          },
        ]}
      />
    </>
  );
}

export default App;
