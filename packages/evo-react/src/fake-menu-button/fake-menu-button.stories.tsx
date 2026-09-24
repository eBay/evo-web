import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoFakeMenuItem } from "../fake-menu/fake-menu-item";
import { EvoFakeMenuItems } from "../fake-menu/fake-menu-items";
import { EvoFakeMenuSeparator } from "../fake-menu/fake-menu-separator";
import { EvoIconOverflowVertical16 } from "../icon/icons/overflow-vertical-16";
import {
  EvoFakeMenuButton,
  EvoFakeMenuButtonLabel,
  EvoFakeMenuButtonMenu,
  EvoFakeMenuButtonTrigger,
} from "./index";

const meta: Meta<typeof EvoFakeMenuButton> = {
  title: "Buttons/EvoFakeMenuButton",
  component: EvoFakeMenuButton,
  subcomponents: {
    EvoFakeMenuButtonTrigger,
    EvoFakeMenuButtonMenu,
    EvoFakeMenuButtonLabel,
  },
  argTypes: {
    variant: { control: "select", options: ["button", "form", "icon"] },
    priority: {
      control: "select",
      options: ["primary", "secondary", "tertiary", "none"],
    },
    size: { control: "select", options: ["small", "large"] },
    strategy: { control: "select", options: ["absolute", "fixed"] },
  },
  args: { defaultOpen: false },
};

export default meta;
type Story = StoryObj<typeof EvoFakeMenuButton>;

/** Account destinations expand from a regular button and remain ordinary links. */
export const Default: Story = {
  render: (args) => (
    <EvoFakeMenuButton {...args}>
      <EvoFakeMenuButtonTrigger>Account options</EvoFakeMenuButtonTrigger>
      <EvoFakeMenuButtonMenu>
        <EvoFakeMenuItems>
          <EvoFakeMenuItem href="/purchase-history">
            Purchase history
          </EvoFakeMenuItem>
          <EvoFakeMenuItem href="/messages">Messages</EvoFakeMenuItem>
          <EvoFakeMenuSeparator />
          <EvoFakeMenuItem type="button">Sign out</EvoFakeMenuItem>
        </EvoFakeMenuItems>
      </EvoFakeMenuButtonMenu>
    </EvoFakeMenuButton>
  ),
};

/** Icon triggers require a label that explains the available actions. */
export const AsIcon: Story = {
  args: { variant: "icon", a11yText: "More account options" },
  render: (args) => (
    <EvoFakeMenuButton {...args}>
      <EvoFakeMenuButtonTrigger>
        <EvoIconOverflowVertical16 />
      </EvoFakeMenuButtonTrigger>
      <EvoFakeMenuButtonMenu>
        <EvoFakeMenuItems>
          <EvoFakeMenuItem href="/purchase-history">
            Purchase history
          </EvoFakeMenuItem>
        </EvoFakeMenuItems>
      </EvoFakeMenuButtonMenu>
    </EvoFakeMenuButton>
  ),
};

/** A prefix can add context before the visible trigger text. */
export const WithPrefixLabel: Story = {
  render: (args) => (
    <EvoFakeMenuButton {...args}>
      <EvoFakeMenuButtonTrigger>
        <EvoFakeMenuButtonLabel>Account:</EvoFakeMenuButtonLabel>
        Options
      </EvoFakeMenuButtonTrigger>
      <EvoFakeMenuButtonMenu>
        <EvoFakeMenuItems>
          <EvoFakeMenuItem href="/settings">Settings</EvoFakeMenuItem>
        </EvoFakeMenuItems>
      </EvoFakeMenuButtonMenu>
    </EvoFakeMenuButton>
  ),
};
