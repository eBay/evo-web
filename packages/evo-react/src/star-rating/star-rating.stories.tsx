import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoStarRating } from "./star-rating";

const meta: Meta<typeof EvoStarRating> = {
  title: "Graphics & Icons/EvoStarRating",
  component: EvoStarRating,
  argTypes: {
    value: { control: { type: "range", min: 0, max: 5, step: 0.5 } },
  },
  args: {
    value: 4.5,
    a11yText: "Seller rating: 4.5 out of 5",
  },
};

export default meta;
type Story = StoryObj<typeof EvoStarRating>;

/** A non-interactive score uses a single image name for all five stars. */
export const Default: Story = {};
