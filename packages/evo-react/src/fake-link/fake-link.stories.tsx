import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoFakeLink } from "./fake-link";

const meta: Meta<typeof EvoFakeLink> = {
  title: "Buttons/EvoFakeLink",
  component: EvoFakeLink,
  argTypes: {
    variant: {
      control: "select",
      options: ["inline", "standalone"],
    },
    disabled: {
      control: "boolean",
    },
    children: {
      control: "text",
    },
  },
  args: {
    children: "View seller details",
    variant: "inline",
  },
};

export default meta;

type Story = StoryObj<typeof EvoFakeLink>;

/** A button uses link styling for an action that stays on the current page. */
export const Default: Story = {};
