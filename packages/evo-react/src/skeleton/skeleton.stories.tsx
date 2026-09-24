import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoSkeleton } from "./skeleton";
import { EvoSkeletonAvatar } from "./skeleton-avatar";
import { EvoSkeletonButton } from "./skeleton-button";
import { EvoSkeletonImage } from "./skeleton-image";
import { EvoSkeletonText } from "./skeleton-text";
import { EvoSkeletonTextbox } from "./skeleton-textbox";

const meta: Meta<typeof EvoSkeleton> = {
  title: "Building Blocks/EvoSkeleton",
  component: EvoSkeleton,
  subcomponents: {
    EvoSkeletonAvatar,
    EvoSkeletonButton,
    EvoSkeletonImage,
    EvoSkeletonText,
    EvoSkeletonTextbox,
  },
  argTypes: {
    a11yText: { control: "text" },
    color: {
      control: "select",
      options: ["purple", "green", "blue"],
    },
  },
  args: {
    a11yText: "Loading listing details",
  },
};

export default meta;

type Story = StoryObj<typeof EvoSkeleton>;

/** A listing card reserves image and text space while its details load. */
export const Default: Story = {
  render: (args) => (
    <EvoSkeleton {...args} style={{ width: 220 }}>
      <EvoSkeletonImage style={{ width: 220, height: 220 }} />
      <EvoSkeletonText size="large" />
      <EvoSkeletonText multiline />
      <EvoSkeletonButton size="small" />
    </EvoSkeleton>
  ),
};

/** The placeholder parts also cover an avatar, button, and textbox layout. */
export const WithProfileLayout: Story = {
  render: (args) => (
    <EvoSkeleton {...args} style={{ width: 300 }}>
      <EvoSkeletonAvatar />
      <EvoSkeletonText multiline />
      <EvoSkeletonTextbox />
      <EvoSkeletonButton />
    </EvoSkeleton>
  ),
};
