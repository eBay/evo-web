import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  EvoFilePreviewCardGroup,
  EvoFilePreviewCardGroupSeeMoreAction,
} from "./index";

const cards = Array.from({ length: 20 }, (_, index) => ({
  file: {
    name: `photo-${index + 1}.jpg`,
    type: "image/jpeg",
    src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg",
  },
  footerTitle: `Photo ${index + 1}`,
}));

const meta: Meta<typeof EvoFilePreviewCardGroup> = {
  title: "Media/EvoFilePreviewCardGroup",
  component: EvoFilePreviewCardGroup,
  subcomponents: { EvoFilePreviewCardGroupSeeMoreAction },
  args: { cards, a11ySeeMoreText: "See more photos" },
};
export default meta;
type Story = StoryObj<typeof EvoFilePreviewCardGroup>;

/** Fifteen cards appear initially, followed by a preview for five remaining files. */
export const Default: Story = {};

/** A smaller collection has no disclosure control. */
export const FewCards: Story = {
  args: { cards: cards.slice(0, 3) },
};

/** The visible count can start at a different size. */
export const InitiallyExpanded: Story = {
  args: { defaultVisibleCardCount: 18 },
};

/** A named action slot can customize the overlay's accessible name. */
export const CustomSeeMore: Story = {
  args: {
    seeMoreAction: (
      <EvoFilePreviewCardGroupSeeMoreAction a11yText="Show the remaining photos" />
    ),
  },
};
