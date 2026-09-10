import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoChip } from "./chip";
import { EvoChipDeleteButton } from "./chip-delete-button";
import { EvoChipText } from "./chip-text";

const meta: Meta<typeof EvoChip> = {
  title: "Building Blocks/EvoChip",
  component: EvoChip,
  subcomponents: { EvoChipText, EvoChipDeleteButton },

  argTypes: {
    children: {
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof EvoChip>;

/** A chip displays a compact value without its own action. */
export const Default: Story = {
  render: (args) => (
    <EvoChip {...args}>
      <EvoChipText>Football</EvoChipText>
    </EvoChip>
  ),
};

/** A delete button removes the chip value through the application. */
export const WithDeleteButton: Story = {
  render: (args) => (
    <EvoChip {...args}>
      <EvoChipText>Football</EvoChipText>
      <EvoChipDeleteButton a11yText="Delete Football" />
    </EvoChip>
  ),
};
