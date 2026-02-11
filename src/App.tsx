import { Navigate, Route, Routes } from "react-router-dom";
import { EventsRoute } from "./app/routes/EventsRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/events" replace />} />
      <Route path="/events" index element={<EventsRoute />} />
    </Routes>
  );
}

export default App;
