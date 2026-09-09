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
    a11yText: "5 unread items",
  },
};

export default meta;

type Story = StoryObj<typeof EvoBadge>;

/** Use a count when it helps people understand how many items need attention. */
export const Default: Story = {};

/** Use an empty badge to signal new activity when a count is not useful. */
export const Empty: Story = {
  args: {
    number: undefined,
    a11yText: "new",
  },
};
