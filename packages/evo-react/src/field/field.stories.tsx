import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoCheckbox } from "../checkbox/checkbox";
import { EvoInput } from "../input/input";
import { EvoFieldDescription } from "./description";
import { EvoField } from "./field";
import { EvoLabel } from "./label";

const meta: Meta<typeof EvoField> = {
  title: "Form Input/EvoField",
  component: EvoField,
  subcomponents: { EvoLabel, EvoFieldDescription },
  argTypes: {
    layout: { control: "select", options: ["inline", "block"] },
  },
  args: { layout: "inline" },
};

export default meta;
type Story = StoryObj<typeof EvoField>;

/** An inline label names its control through matching `htmlFor` and `id`. */
export const Default: Story = {
  render: (args) => (
    <EvoField {...args}>
      <EvoLabel htmlFor="buyer-email">Email address</EvoLabel>
      <EvoInput id="buyer-email" type="email" autoComplete="email" />
    </EvoField>
  ),
};

/** A block layout stacks the label and connects supporting text to the input. */
export const WithDescription: Story = {
  args: { layout: "block" },
  render: (args) => (
    <EvoField {...args}>
      <EvoLabel htmlFor="listing-title" stacked required>
        Listing title
      </EvoLabel>
      <EvoInput
        id="listing-title"
        required
        aria-describedby="listing-title-help"
        placeholder="Brand, model, and item type"
      />
      <EvoFieldDescription id="listing-title-help">
        Include the brand and model so buyers can find your listing.
      </EvoFieldDescription>
    </EvoField>
  ),
};

/** The label may follow a checkbox while remaining connected to its native input. */
export const LabelAtEnd: Story = {
  render: (args) => (
    <EvoField {...args}>
      <EvoCheckbox id="watch-search" name="watch-search" />
      <EvoLabel htmlFor="watch-search" position="end">
        Save this search
      </EvoLabel>
    </EvoField>
  ),
};
