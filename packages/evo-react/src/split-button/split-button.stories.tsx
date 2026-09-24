import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoIconConfirmation16 } from "../icon/icons/confirmation-16";
import {
  EvoMenuButtonCheckboxItem,
  EvoMenuButtonItem,
  EvoMenuButtonSeparator,
  EvoMenuCheckboxGroup,
  EvoSplitButton,
  EvoSplitButtonAction,
  EvoSplitButtonMenu,
} from "./index";

const meta: Meta<typeof EvoSplitButton> = {
  title: "Buttons/EvoSplitButton",
  component: EvoSplitButton,
  subcomponents: { EvoSplitButtonAction, EvoSplitButtonMenu },
  argTypes: {
    priority: {
      control: "select",
      options: ["primary", "secondary", "tertiary", "none"],
    },
    size: { control: "select", options: ["small", "large"] },
  },
  args: { priority: "primary", a11yMenuText: "More save options" },
};

export default meta;
type Story = StoryObj<typeof EvoSplitButton>;

/** The main action and related choices stay separate keyboard stops. */
export const Default: Story = {
  render: (args) => (
    <EvoSplitButton {...args}>
      <EvoSplitButtonAction onClick={() => {}}>
        Save document
      </EvoSplitButtonAction>
      <EvoSplitButtonMenu collapseOnSelect>
        <EvoMenuButtonItem>Save as</EvoMenuButtonItem>
        <EvoMenuButtonSeparator />
        <EvoMenuButtonItem>Export</EvoMenuButtonItem>
      </EvoSplitButtonMenu>
    </EvoSplitButton>
  ),
};

/** The primary action can navigate while the second control remains a menu button. */
export const LinkAction: Story = {
  render: (args) => (
    <EvoSplitButton {...args}>
      <EvoSplitButtonAction href="/drafts">View drafts</EvoSplitButtonAction>
      <EvoSplitButtonMenu>
        <EvoMenuButtonItem>Archive draft</EvoMenuButtonItem>
      </EvoSplitButtonMenu>
    </EvoSplitButton>
  ),
};

/** Checkbox choices use EvoMenu's value-based group API. */
export const Choices: Story = {
  render: (args) => (
    <EvoSplitButton {...args} size="large">
      <EvoSplitButtonAction>Apply filters</EvoSplitButtonAction>
      <EvoSplitButtonMenu>
        <EvoMenuCheckboxGroup defaultSelected={["free"]}>
          <EvoMenuButtonCheckboxItem value="free">
            Free shipping
          </EvoMenuButtonCheckboxItem>
          <EvoMenuButtonCheckboxItem value="returns">
            Returns accepted
          </EvoMenuButtonCheckboxItem>
        </EvoMenuCheckboxGroup>
      </EvoSplitButtonMenu>
    </EvoSplitButton>
  ),
};

/** Loading keeps the primary action named while the menu remains available. */
export const Loading: Story = {
  render: (args) => (
    <EvoSplitButton {...args}>
      <EvoSplitButtonAction
        bodyState="loading"
        a11yLoadingText="Saving document"
      >
        Save document
      </EvoSplitButtonAction>
      <EvoSplitButtonMenu>
        <EvoMenuButtonItem>
          <EvoIconConfirmation16 /> Save a copy
        </EvoMenuButtonItem>
      </EvoSplitButtonMenu>
    </EvoSplitButton>
  ),
};

/** Disabled and transparent treatments apply to both halves. */
export const Disabled: Story = {
  args: { disabled: true, transparent: true },
  render: (args) => (
    <EvoSplitButton {...args}>
      <EvoSplitButtonAction>Save</EvoSplitButtonAction>
      <EvoSplitButtonMenu>
        <EvoMenuButtonItem>Save as</EvoMenuButtonItem>
      </EvoSplitButtonMenu>
    </EvoSplitButton>
  ),
};
