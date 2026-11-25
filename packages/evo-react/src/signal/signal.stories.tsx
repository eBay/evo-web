import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoSignal } from "./signal";
import { EvoIconPromotion12 } from "../icon/icons/promotion-12";

const meta: Meta<typeof EvoSignal> = {
  title: "Graphics & Icons/EvoSignal",
  component: EvoSignal,
  argTypes: {
    tone: {
      control: "select",
      options: ["neutral", "information", "positive", "warning", "attention"],
      description: "Color tone.",
      table: { defaultValue: { summary: "neutral" } },
    },
    emphasis: {
      control: "radio",
      options: ["default", "strong", "subtle"],
      table: { defaultValue: { summary: "default" } },
    },
    icon: {
      control: false,
      description:
        "Optional leading 12px icon, rendered before the label. See the WithIcon story.",
    },
    children: {
      control: "text",
    },
  },
  args: {
    children: "Price trend is stable",
    tone: "neutral",
    emphasis: "default",
  },
};

export default meta;

type Story = StoryObj<typeof EvoSignal>;

/** The visible text communicates the recommendation when color is unavailable. */
export const Default: Story = {};

export const WithIcon: Story = {
  args: {
    tone: "positive",
    emphasis: "strong",
    icon: <EvoIconPromotion12 />,
  },
};
