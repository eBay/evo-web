import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoStarRatingSelect } from "./star-rating-select";

const meta: Meta<typeof EvoStarRatingSelect> = {
  title: "Form Input/EvoStarRatingSelect",
  component: EvoStarRatingSelect,
  argTypes: {
    value: { control: { type: "range", min: 0, max: 5, step: 1 } },
    defaultValue: { control: { type: "range", min: 0, max: 5, step: 1 } },
    onChange: { action: "onChange", table: { category: "Events" } },
    onFocus: { action: "onFocus", table: { category: "Events" } },
    onKeyDown: { action: "onKeyDown", table: { category: "Events" } },
  },
  args: {
    a11yText: "Rate your purchase",
    defaultValue: 0,
    disabled: false,
    name: "purchase-rating",
  },
};

export default meta;
type Story = StoryObj<typeof EvoStarRatingSelect>;

/** The isolated group supplies its own accessible name and each star names its value. */
export const Default: Story = {};

/** A visible legend can name the group through `aria-labelledby`. */
export const InFieldset: Story = {
  render: (args) => (
    <fieldset>
      <legend id="purchase-rating-legend">Rate your purchase</legend>
      <EvoStarRatingSelect
        {...args}
        a11yText={null}
        aria-labelledby="purchase-rating-legend"
      />
    </fieldset>
  ),
};
