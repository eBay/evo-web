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
  parameters: {
    docs: {
      description: {
        component:
          "Place placeholder parts inside EvoSkeleton, size the group and image to the content they replace, and provide a loading description with a11yText. Multiline text draws its second line outside the element's height, so leave space below it before the next block. Replace the whole group when the content loads.",
      },
    },
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
      <EvoSkeletonText
        multiline
        style={{ marginBlockEnd: "var(--spacing-600)" }}
      />
      <EvoSkeletonButton size="small" />
    </EvoSkeleton>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "The group and image reserve the listing card's width. The multiline text leaves room for its second line before the button placeholder.",
      },
    },
  },
};

/** The placeholder parts also cover an avatar, button, and textbox layout. */
export const WithProfileLayout: Story = {
  render: (args) => (
    <EvoSkeleton {...args} style={{ width: 300 }}>
      <EvoSkeletonAvatar />
      <EvoSkeletonText
        multiline
        style={{ marginBlockEnd: "var(--spacing-600)" }}
      />
      <EvoSkeletonTextbox />
      <EvoSkeletonButton />
    </EvoSkeleton>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Compose avatar, text, textbox, and button placeholders in content order. Leave space after multiline text so its second line clears the textbox.",
      },
    },
  },
};
