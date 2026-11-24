import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoSignal } from "./signal";
import { EvoIconPromotion12 } from "../icon/icons/promotion-12";

type StoryArgs = React.ComponentProps<typeof EvoSignal> & {
  showIcon?: boolean;
};

const meta: Meta<StoryArgs> = {
  title: "Graphics & Icons/EvoSignal",
  component: EvoSignal,
  render: ({ showIcon, ...args }) => (
    <EvoSignal {...args} icon={showIcon ? <EvoIconPromotion12 /> : undefined} />
  ),
  argTypes: {
    status: {
      control: "select",
      options: ["neutral", "trustworthy", "recent", "time-sensitive"],
      description:
        "Deprecated: use `tone`. trustworthy → information, recent → positive, time-sensitive → attention, neutral → neutral.",
    },
    tone: {
      control: "select",
      options: [
        undefined,
        "neutral",
        "information",
        "positive",
        "warning",
        "attention",
      ],
      description: "Color tone. Takes precedence over `status`.",
    },
    emphasis: {
      control: "radio",
      options: ["default", "strong", "subtle"],
    },
    showIcon: {
      control: "boolean",
      description: "Shows a sample `EvoIconPromotion12` as the `icon` prop.",
    },
    icon: { table: { disable: true } },
    children: {
      control: "text",
    },
  },
  args: {
    children: "Price trend is stable",
    tone: "neutral",
    emphasis: "default",
    showIcon: false,
  },
};

export default meta;

type Story = StoryObj<StoryArgs>;

/** The visible text communicates the recommendation when color is unavailable. */
export const Default: Story = {};

export const WithIcon: Story = {
  args: { tone: "positive", emphasis: "strong", showIcon: true },
};
