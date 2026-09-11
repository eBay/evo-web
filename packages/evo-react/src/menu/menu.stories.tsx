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
        <EvoMenuItems a11yText="Search result options">
          <EvoMenuItem>
            Offers
            <EvoMenuItemBadge number={5} a11yText="5 new offers" />
          </EvoMenuItem>
          <EvoMenuItem disabled>Relist item</EvoMenuItem>
          <EvoMenuSeparator />
          <EvoMenuRadioGroup defaultSelected="best-match">
            <EvoMenuRadioItem value="best-match">Best Match</EvoMenuRadioItem>
            <EvoMenuRadioItem value="lowest-price">
              Price + shipping: lowest first
            </EvoMenuRadioItem>
          </EvoMenuRadioGroup>
          <EvoMenuSeparator />
          <EvoMenuCheckboxGroup defaultSelected={["free-shipping"]}>
            <EvoMenuCheckboxItem value="free-shipping">
              Free shipping
            </EvoMenuCheckboxItem>
            <EvoMenuCheckboxItem value="returns-accepted">
              Returns accepted
            </EvoMenuCheckboxItem>
          </EvoMenuCheckboxGroup>
        </EvoMenuItems>
        <EvoMenuFooter>
          <EvoButton priority="tertiary">Apply filters</EvoButton>
        </EvoMenuFooter>
      </EvoMenu>
    );
  },
};

export default meta;
type Story = StoryObj<typeof EvoMenu>;

/** Commands appear alongside single- and multi-selection choices. */
export const Default: Story = {};
