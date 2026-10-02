import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoFilter } from "./filter";

const meta: Meta<typeof EvoFilter> = {
  title: "Building Blocks/EvoFilter",
  component: EvoFilter,
  argTypes: {
    // Docgen resolves the button overload, so the anchor-only prop needs a fallback.
    href: {
      control: "text",
      description: "Destination URL that renders the filter as a link.",
    },
    selected: { control: "boolean" },
    defaultSelected: { control: "boolean" },
    disabled: { control: "boolean" },
    useAriaPressed: { control: "boolean" },
  },
  args: {
    children: "Free shipping",
  },
};

export default meta;
type Story = StoryObj<typeof EvoFilter>;

/** A filter button selects a value to narrow search results. */
export const Default: Story = {};

/** A link filter navigates to a filtered result set and announces selection. */
export const AsLink: Story = {
  render: () => (
    <EvoFilter
      href="/search?freeShipping=true"
      selected
      a11ySelectedText="Selected"
    >
      Free shipping
    </EvoFilter>
  ),
};
