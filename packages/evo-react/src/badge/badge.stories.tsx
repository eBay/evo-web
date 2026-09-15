import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoBadge } from "./badge";

const meta: Meta<typeof EvoBadge> = {
  title: "Graphics & Icons/EvoBadge",
  component: EvoBadge,
  argTypes: {
    number: {
      control: "number",
    },
    type: {
      control: "inline-radio",
      options: ["menu", "icon"],
    },
    a11yText: {
      type: { name: "string", required: true },
      control: "text",
    },
  },
  args: {
    number: 5,
    a11yText: "5 unread messages",
  },
};

export default meta;

type Story = StoryObj<typeof EvoBadge>;

/** A numeric badge indicates how many items need attention. */
export const Default: Story = {};

/** An empty badge signals new activity without displaying a count. */
export const Empty: Story = {
  args: {
    number: undefined,
    a11yText: "New offer received",
  },
};
