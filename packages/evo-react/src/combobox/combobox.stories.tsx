import type { Meta, StoryObj } from "@storybook/react-vite";
import { action } from "storybook/actions";
import { EvoIconClose12 } from "../icon/icons/close-12";
import { EvoCombobox } from "./combobox";
import { EvoComboboxOption } from "./combobox-option";

const meta: Meta<typeof EvoCombobox> = {
  title: "form input/evo-combobox",
  component: EvoCombobox,
  subcomponents: { EvoComboboxOption },
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
A text input with a filtered listbox of selectable options.

## Usage

\`\`\`tsx
import {
  EvoCombobox,
  EvoComboboxOption,
} from "@evo-web/react/combobox";
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    autocomplete: {
      control: "select",
      options: ["none", "list"],
    },
    listSelection: {
      control: "select",
      options: ["automatic", "manual"],
    },
    strategy: {
      control: "select",
      options: ["absolute", "fixed"],
    },
    borderless: {
      control: "boolean",
    },
    defaultOpen: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    floatingLabel: {
      control: "text",
    },
    fluid: {
      control: "boolean",
    },
    open: {
      control: "boolean",
    },
    postfix: {
      control: false,
    },
    onValueChange: {
      action: "valueChange",
      table: { category: "Events" },
    },
    onOpenChange: {
      action: "openChange",
      table: { category: "Events" },
    },
  },
  args: {
    floatingLabel: "Campaign",
    autocomplete: "none",
    listSelection: "automatic",
    placeholder: "Choose a campaign",
    postfix: {
      icon: <EvoIconClose12 />,
      buttonProps: {
        a11yText: "Clear",
        onClick: action("clear"),
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof EvoCombobox>;

export const Default: Story = {
  render: (args) => (
    <EvoCombobox {...args}>
      <EvoComboboxOption text="August Campaign" />
      <EvoComboboxOption text="4th of July Sale (paused)" />
      <EvoComboboxOption text="Basic Offer" />
      <EvoComboboxOption text="Create campaign" sticky />
    </EvoCombobox>
  ),
};
