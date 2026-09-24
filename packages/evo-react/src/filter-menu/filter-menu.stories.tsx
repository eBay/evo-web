import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoFilterMenu } from "./filter-menu";
import { EvoFilterMenuItems } from "./filter-menu-items";
import { EvoFilterMenuItem } from "./filter-menu-item";
import { EvoFilterMenuFooterButton } from "./filter-menu-footer-button";

const meta: Meta<typeof EvoFilterMenu> = {
  title: "Building Blocks/EvoFilterMenu",
  component: EvoFilterMenu,
  subcomponents: {
    EvoFilterMenuItems,
    EvoFilterMenuItem,
    EvoFilterMenuFooterButton,
  },
  argTypes: {
    type: { control: "select", options: ["checkbox", "radio"] },
    variant: { control: "select", options: ["form"] },
  },
  args: {
    type: "checkbox",
    a11yText: "Delivery filters",
  },
  render(args) {
    return (
      <EvoFilterMenu {...args}>
        <EvoFilterMenuItems>
          <EvoFilterMenuItem value="free-shipping">
            Free shipping
          </EvoFilterMenuItem>
          <EvoFilterMenuItem value="local-pickup">
            Local pickup
          </EvoFilterMenuItem>
          <EvoFilterMenuItem value="returns-accepted" disabled>
            Returns accepted
          </EvoFilterMenuItem>
        </EvoFilterMenuItems>
        <EvoFilterMenuFooterButton>Apply filters</EvoFilterMenuFooterButton>
      </EvoFilterMenu>
    );
  },
};

export default meta;
type Story = StoryObj<typeof EvoFilterMenu>;

/** Select delivery filters with arrow keys, typeahead, or pointer input. */
export const Default: Story = {};

/** Native inputs keep their selection available to a form submit action. */
export const Form: Story = {
  args: { variant: "form" },
};

/** The search field reports text changes so the consumer can narrow the items. */
export const WithSearch: Story = {
  args: { searchHeaderPlaceholderText: "Search delivery options" },
};
