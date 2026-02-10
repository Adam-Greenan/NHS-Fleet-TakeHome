import type { Meta, StoryObj } from "@storybook/react";
import { EventList } from "./EventList";

const meta: Meta<typeof EventList> = {
  title: "Events/EventList",
  component: EventList,
};
export default meta;

type Story = StoryObj<typeof EventList>;

export const Default: Story = {
  args: {
    events: [
      { id: 2, name: "Frontend Futures", date: "2026-02-18", location: "Manchester, UK" },
      { id: 3, name: "TypeScript Live", date: "2026-02-28", location: "Online" },
    ],
  },
};

export const Empty: Story = {
  args: { events: [] },
};
