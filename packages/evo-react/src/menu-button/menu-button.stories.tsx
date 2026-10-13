import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoButton } from "../button/button";
import {
  EvoMenu,
  EvoMenuButton,
  EvoMenuButtonTrigger,
  EvoMenuCheckboxGroup,
  EvoMenuCheckboxItem,
  EvoMenuFooter,
  EvoMenuItem,
  EvoMenuItemBadge,
  EvoMenuItems,
  EvoMenuRadioGroup,
  EvoMenuRadioItem,
  EvoMenuSeparator,
} from "./index";
import { EvoIconOverflowVertical16 } from "../icon/icons/overflow-vertical-16";

const meta: Meta<typeof EvoMenuButton> = {
  title: "Buttons/EvoMenuButton",
  component: EvoMenuButton,
  subcomponents: {
    EvoMenuButtonTrigger,
    EvoMenu,
    EvoMenuItems,
    EvoMenuItem,
    EvoMenuRadioGroup,
    EvoMenuRadioItem,
    EvoMenuCheckboxGroup,
    EvoMenuCheckboxItem,
    EvoMenuSeparator,
    EvoMenuItemBadge,
    EvoMenuFooter,
  },
  argTypes: {
    strategy: { control: "select", options: ["absolute", "fixed"] },
  },
};

export default meta;
type Story = StoryObj<typeof EvoMenuButton>;

/** Commands remain open until dismissed or selected with collapse enabled. */
export const Default: Story = {
  render: (args) => (
    <EvoMenuButton {...args}>
      <EvoMenuButtonTrigger>Listing actions</EvoMenuButtonTrigger>
      <EvoMenu>
        <EvoMenuItems>
          <EvoMenuItem>Edit listing</EvoMenuItem>
          <EvoMenuSeparator />
          <EvoMenuItem>End listing</EvoMenuItem>
        </EvoMenuItems>
        <EvoMenuFooter>
          <EvoButton priority="tertiary">Done</EvoButton>
        </EvoMenuFooter>
      </EvoMenu>
    </EvoMenuButton>
  ),
};

/** Radio and checkbox items share the same value-based selection API as EvoMenu. */
export const Choices: Story = {
  render: (args) => (
    <EvoMenuButton {...args} collapseOnSelect>
      <EvoMenuButtonTrigger>Preferences</EvoMenuButtonTrigger>
      <EvoMenu>
        <EvoMenuItems>
          <EvoMenuRadioGroup defaultSelected="recent">
            <EvoMenuRadioItem value="recent">Most recent</EvoMenuRadioItem>
            <EvoMenuRadioItem value="price">Lowest price</EvoMenuRadioItem>
          </EvoMenuRadioGroup>
          <EvoMenuSeparator />
          <EvoMenuCheckboxGroup defaultSelected={["free"]}>
            <EvoMenuCheckboxItem value="free">
              Free shipping
            </EvoMenuCheckboxItem>
            <EvoMenuCheckboxItem value="returns">
              Returns accepted
            </EvoMenuCheckboxItem>
          </EvoMenuCheckboxGroup>
        </EvoMenuItems>
      </EvoMenu>
    </EvoMenuButton>
  ),
};

/** Form triggers keep their native button behavior and form presentation. */
export const Form: Story = {
  render: (args) => (
    <EvoMenuButton {...args} variant="form">
      <EvoMenuButtonTrigger>Sort by</EvoMenuButtonTrigger>
      <EvoMenu>
        <EvoMenuItems>
          <EvoMenuItem>Best match</EvoMenuItem>
          <EvoMenuItem>Newest first</EvoMenuItem>
        </EvoMenuItems>
      </EvoMenu>
    </EvoMenuButton>
  ),
};

/** Icon variant uses a localized accessible trigger name. */
export const Icon: Story = {
  render: (args) => (
    <EvoMenuButton {...args} variant="icon">
      <EvoMenuButtonTrigger a11yText="More listing actions">
        <EvoIconOverflowVertical16 />
      </EvoMenuButtonTrigger>
      <EvoMenu>
        <EvoMenuItems>
          <EvoMenuItem>Share</EvoMenuItem>
        </EvoMenuItems>
      </EvoMenu>
    </EvoMenuButton>
  ),
};

/** Prefix text adds context while preserving the trigger's visible content. */
export const PrefixLabel: Story = {
  render: (args) => (
    <EvoMenuButton {...args}>
      <EvoMenuButtonTrigger>Sort by: Best match</EvoMenuButtonTrigger>
      <EvoMenu>
        <EvoMenuItems>
          <EvoMenuItem>Newest first</EvoMenuItem>
        </EvoMenuItems>
      </EvoMenu>
    </EvoMenuButton>
  ),
};

/** Filter triggers expose their selected state through trigger props. */
export const Filter: Story = {
  render: (args) => (
    <EvoMenuButton {...args} variant="filter">
      <EvoMenuButtonTrigger hasSelection>Delivery</EvoMenuButtonTrigger>
      <EvoMenu>
        <EvoMenuItems>
          <EvoMenuItem>Free shipping</EvoMenuItem>
        </EvoMenuItems>
      </EvoMenu>
    </EvoMenuButton>
  ),
};
