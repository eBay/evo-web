import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoProgressSpinner } from "./progress-spinner";

const meta: Meta<typeof EvoProgressSpinner> = {
  title: "Progress/EvoProgressSpinner",
  component: EvoProgressSpinner,

  argTypes: {
    size: {
      control: "select",
      options: ["small", "large"],
    },
    a11yText: {
      type: { name: "string", required: true },
      control: "text",
    },
  },
  args: {
    a11yText: "Loading",
  },
};

export default meta;

type Story = StoryObj<typeof EvoProgressSpinner>;

/** An indeterminate spinner marks content or an action that is pending. */
export const Default: Story = {};
