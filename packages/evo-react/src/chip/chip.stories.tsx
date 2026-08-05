import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoChip } from "./chip";
import { EvoChipDeleteButton } from "./chip-delete-button";
import { EvoChipText } from "./chip-text";

const meta: Meta<typeof EvoChip> = {
  title: "building blocks/evo-chip",
  component: EvoChip,
  subcomponents: { EvoChipText, EvoChipDeleteButton },
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
A chip that composes text and an optional delete button through named sub-components.

## Usage

\`\`\`tsx
import {
  EvoChip,
  EvoChipDeleteButton,
  EvoChipText,
} from "@evo-web/react/chip";

<EvoChip>
  <EvoChipText>Football</EvoChipText>
  <EvoChipDeleteButton a11yText="Delete Football" />
</EvoChip>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    children: {
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof EvoChip>;

export const Default: Story = {
  render: (args) => (
    <EvoChip {...args}>
      <EvoChipText>Football</EvoChipText>
    </EvoChip>
  ),
};

export const WithDeleteButton: Story = {
  render: (args) => (
    <EvoChip {...args}>
      <EvoChipText>Football</EvoChipText>
      <EvoChipDeleteButton a11yText="Delete Football" />
    </EvoChip>
  ),
};
