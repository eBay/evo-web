import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoButton } from "../button/button";
import { EvoMenuFooter } from "../menu/menu-footer";
import { EvoIconOverflowVertical16 } from "../icon/icons/overflow-vertical-16";
import {
  EvoMenuButton,
  EvoMenuButtonCheckboxItem,
  EvoMenuButtonItem,
  EvoMenuButtonLabel,
  EvoMenuButtonMenu,
  EvoMenuButtonRadioItem,
  EvoMenuButtonSeparator,
  EvoMenuButtonTrigger,
  EvoMenuCheckboxGroup,
  EvoMenuRadioGroup,
} from "./index";

const meta: Meta<typeof EvoMenuButton> = {
  title: "Buttons/EvoMenuButton",
  component: EvoMenuButton,
  subcomponents: {
    EvoMenuButtonTrigger,
    EvoMenuButtonMenu,
    EvoMenuButtonItem,
    EvoMenuButtonRadioItem,
    EvoMenuButtonCheckboxItem,
    EvoMenuButtonSeparator,
    EvoMenuButtonLabel,
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["button", "form", "icon", "filter"],
    },
    priority: {
      control: "select",
      options: ["primary", "secondary", "tertiary", "none"],
    },
    size: { control: "select", options: ["small", "large"] },
    strategy: { control: "select", options: ["absolute", "fixed"] },
  },
};

export default meta;
type Story = StoryObj<typeof EvoMenuButton>;

/** Command menu with a separator and optional footer. */
export const Default: Story = {
  render: (args) => (
    <EvoMenuButton {...args}>
      <EvoMenuButtonTrigger>Listing actions</EvoMenuButtonTrigger>
      <EvoMenuButtonMenu
        footer={
          <EvoMenuFooter>
            <EvoButton priority="tertiary">Done</EvoButton>
          </EvoMenuFooter>
        }
      >
        <EvoMenuButtonItem>Edit listing</EvoMenuButtonItem>
        <EvoMenuButtonSeparator />
        <EvoMenuButtonItem>End listing</EvoMenuButtonItem>
      </EvoMenuButtonMenu>
    </EvoMenuButton>
  ),
};

/** Radio and checkbox items share the same value-based selection API as EvoMenu. */
export const Choices: Story = {
  render: (args) => (
    <EvoMenuButton {...args} collapseOnSelect>
      <EvoMenuButtonTrigger>Preferences</EvoMenuButtonTrigger>
      <EvoMenuButtonMenu>
        <EvoMenuRadioGroup defaultSelected="recent">
          <EvoMenuButtonRadioItem value="recent">
            Most recent
          </EvoMenuButtonRadioItem>
          <EvoMenuButtonRadioItem value="price">
            Lowest price
          </EvoMenuButtonRadioItem>
        </EvoMenuRadioGroup>
        <EvoMenuButtonSeparator />
        <EvoMenuCheckboxGroup defaultSelected={["free"]}>
          <EvoMenuButtonCheckboxItem value="free">
            Free shipping
          </EvoMenuButtonCheckboxItem>
          <EvoMenuButtonCheckboxItem value="returns">
            Returns accepted
          </EvoMenuButtonCheckboxItem>
        </EvoMenuCheckboxGroup>
      </EvoMenuButtonMenu>
    </EvoMenuButton>
  ),
};

/** Icon variant uses a visible icon and an accessible trigger name. */
export const Icon: Story = {
  args: { variant: "icon", a11yText: "More listing actions" },
  render: (args) => (
    <EvoMenuButton {...args}>
      <EvoMenuButtonTrigger>
        <EvoIconOverflowVertical16 />
      </EvoMenuButtonTrigger>
      <EvoMenuButtonMenu>
        <EvoMenuButtonItem>Share</EvoMenuButtonItem>
      </EvoMenuButtonMenu>
    </EvoMenuButton>
  ),
};

/** Prefix label adds context while preserving the trigger text. */
export const PrefixLabel: Story = {
  render: (args) => (
    <EvoMenuButton {...args}>
      <EvoMenuButtonTrigger>
        <EvoMenuButtonLabel>Sort by:</EvoMenuButtonLabel> Best match
      </EvoMenuButtonTrigger>
      <EvoMenuButtonMenu>
        <EvoMenuButtonItem>Newest first</EvoMenuButtonItem>
      </EvoMenuButtonMenu>
    </EvoMenuButton>
  ),
};

/** Filter trigger shows the selected treatment when requested. */
export const Filter: Story = {
  args: { variant: "filter", hasSelection: true },
  render: (args) => (
    <EvoMenuButton {...args}>
      <EvoMenuButtonTrigger>Delivery</EvoMenuButtonTrigger>
      <EvoMenuButtonMenu>
        <EvoMenuButtonItem>Free shipping</EvoMenuButtonItem>
      </EvoMenuButtonMenu>
    </EvoMenuButton>
  ),
};
