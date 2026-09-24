import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoSelect, EvoSelectOption, EvoSelectOptionGroup } from "./index";

const meta: Meta<typeof EvoSelect> = {
  title: "Form Input/EvoSelect",
  component: EvoSelect,
  subcomponents: { EvoSelectOption, EvoSelectOptionGroup },
  argTypes: {
    size: { control: "select", options: ["regular", "large"] },
    borderless: { control: "boolean" },
    fluid: { control: "boolean" },
  },
  args: {
    "aria-label": "Shipping method",
    name: "shipping-method",
    size: "regular",
  },
};

export default meta;
type Story = StoryObj<typeof EvoSelect>;

/** A native select exposes its options to keyboard and assistive technology. */
export const Default: Story = {
  render: (args) => (
    <EvoSelect {...args}>
      <EvoSelectOption value="">Choose a shipping method</EvoSelectOption>
      <EvoSelectOption value="standard">Standard shipping</EvoSelectOption>
      <EvoSelectOption value="express">Express shipping</EvoSelectOption>
    </EvoSelect>
  ),
};

/** Explicit option groups preserve native optgroup markup. */
export const WithGroups: Story = {
  render: (args) => (
    <EvoSelect {...args} floatingLabel="Shipping method">
      <EvoSelectOption value="">Choose a shipping method</EvoSelectOption>
      <EvoSelectOptionGroup label="Domestic">
        <EvoSelectOption value="standard">Standard shipping</EvoSelectOption>
        <EvoSelectOption value="express">Express shipping</EvoSelectOption>
      </EvoSelectOptionGroup>
      <EvoSelectOptionGroup label="International">
        <EvoSelectOption value="global">Global shipping</EvoSelectOption>
      </EvoSelectOptionGroup>
    </EvoSelect>
  ),
};
