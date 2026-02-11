import type { Meta, StoryObj } from "@storybook/react";
import { EventsListScreen } from "./EventsListScreen";
import type { Event } from "@features/events/types";


const meta: Meta<typeof EventsListScreen> = {
  title: "Screens/Events/EventsListScreen",
  component: EventsListScreen,
  parameters: {
    layout: "fullscreen",
  },
};
export default meta;

type Story = StoryObj<typeof EventsListScreen>;

const NHS_EVENTS: Event[] = [
  {
    id: 1,
    name: "Fleet Safety Compliance Review",
    date: "2026-02-18",
    location: "NHS Trust HQ - Manchester",
  },
  {
    id: 2,
    name: "Vehicle Maintenance Planning Session",
    date: "2026-02-20",
    location: "Birmingham Community Health Centre",
  },
  {
    id: 3,
    name: "Emergency Response Fleet Briefing",
    date: "2026-02-22",
    location: "Online (MS Teams)",
  },
  {
    id: 4,
    name: "Driver Risk Assessment Workshop",
    date: "2026-02-25",
    location: "Leeds General Infirmary",
  },
];

export const Default: Story = {
  args: {
    events: NHS_EVENTS,
    initialQuery: "",
  },
};

export const Filtered: Story = {
  args: {
    events: NHS_EVENTS,
    initialQuery: "online",
  },
};

export const NoResults: Story = {
  args: {
    events: NHS_EVENTS,
    initialQuery: "test123",
  },
};
