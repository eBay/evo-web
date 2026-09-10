import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoButton } from "../button/button";
import { EvoMenu } from "./menu";
import { EvoMenuItems } from "./menu-items";
import {
  EvoMenuCheckboxItem,
  EvoMenuItem,
  EvoMenuRadioItem,
} from "./menu-item";
import { EvoMenuRadioGroup } from "./menu-radio-group";
import { EvoMenuCheckboxGroup } from "./menu-checkbox-group";
import { EvoMenuItemBadge } from "./menu-item-badge";
import { EvoMenuSeparator } from "./menu-separator";
import { EvoMenuFooter } from "./menu-footer";

const meta: Meta<typeof EvoMenu> = {
  title: "Building Blocks/EvoMenu",
  component: EvoMenu,
  subcomponents: {
    EvoMenuItems,
    EvoMenuItem,
    EvoMenuRadioGroup,
    EvoMenuRadioItem,
    EvoMenuCheckboxGroup,
    EvoMenuCheckboxItem,
    EvoMenuItemBadge,
    EvoMenuSeparator,
    EvoMenuFooter,
  },

  argTypes: {
    variant: {
      control: "select",
      options: ["filter", "none"],
    },
    classPrefix: {
      control: "text",
    },
    reverse: {
      control: "boolean",
    },
    fixed: {
      control: "boolean",
    },
    fixWidth: {
      control: "boolean",
    },
    typeaheadTimeoutLength: {
      control: "number",
      table: { defaultValue: { summary: "2000" } },
    },
  },
  args: {
    variant: "none",
    reverse: false,
    fixed: false,
    fixWidth: false,
    typeaheadTimeoutLength: 2000,
  },
  render(args) {
    return (
      <EvoMenu {...args}>
        <EvoMenuItems a11yText="Example menu">
          <EvoMenuItem>
            Messages
            <EvoMenuItemBadge number={5} a11yText="5 unread messages" />
          </EvoMenuItem>
          <EvoMenuItem disabled>Disabled command</EvoMenuItem>
          <EvoMenuSeparator />
          <EvoMenuRadioGroup defaultSelected="price">
            <EvoMenuRadioItem value="price">Price</EvoMenuRadioItem>
            <EvoMenuRadioItem value="distance">Distance</EvoMenuRadioItem>
          </EvoMenuRadioGroup>
          <EvoMenuSeparator />
          <EvoMenuCheckboxGroup defaultSelected={["shipping"]}>
            <EvoMenuCheckboxItem value="shipping">
              Free shipping
            </EvoMenuCheckboxItem>
            <EvoMenuCheckboxItem value="returns">
              Free returns
            </EvoMenuCheckboxItem>
          </EvoMenuCheckboxGroup>
        </EvoMenuItems>
        <EvoMenuFooter>
          <EvoButton priority="tertiary">Apply</EvoButton>
        </EvoMenuFooter>
      </EvoMenu>
    );
  },
};

export default meta;
type Story = StoryObj<typeof EvoMenu>;

/** Commands appear alongside single- and multi-selection choices. */
export const Default: Story = {};
