import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useArgs } from "storybook/preview-api";
import { EvoButton } from "../button";
import { EvoIconClear16 } from "../icon/icons/clear-16";
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
    filterMethod: {
      control: "select",
      options: ["auto", "manual", "none"],
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
    filterMethod: "auto",
    listSelection: "automatic",
    placeholder: "Choose a campaign",
  },
};

export default meta;
type Story = StoryObj<typeof EvoCombobox>;
type StoryArgs = NonNullable<Story["args"]>;

export const Default: Story = {
  render: (args) => (
    <EvoCombobox {...args}>
      <EvoComboboxOption text="August Campaign" />
      <EvoComboboxOption text="4th of July Sale (paused)" />
      <EvoComboboxOption text="Basic Offer" />
    </EvoCombobox>
  ),
};

export const Controlled: Story = {
  args: {
    value: "August Campaign",
  },
  render: () => {
    const [args, updateArgs] = useArgs<StoryArgs>();
    const setValue = (value: string) => updateArgs({ value });
    const handleValueChange = (nextValue: string) => {
      args.onValueChange?.(nextValue);
      setValue(nextValue);
    };

    return (
      <div
        style={{
          alignItems: "flex-start",
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        <EvoCombobox {...args} onValueChange={handleValueChange}>
          <EvoComboboxOption text="August Campaign" />
          <EvoComboboxOption text="4th of July Sale (paused)" />
          <EvoComboboxOption text="Basic Offer" />
        </EvoCombobox>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          <EvoButton type="button" onClick={() => setValue("August Campaign")}>
            Set August Campaign
          </EvoButton>
          <EvoButton type="button" onClick={() => setValue("Basic Offer")}>
            Set Basic Offer
          </EvoButton>
          <EvoButton type="button" onClick={() => setValue("")}>
            Clear
          </EvoButton>
        </div>
      </div>
    );
  },
};

export const ManualFiltering: Story = {
  render: (args) => {
    const [value, setValue] = useState("");
    const options = [
      { text: "New York", aliases: ["nyc"] },
      { text: "London", aliases: ["ldn"] },
      { text: "Tokyo", aliases: ["tyo"] },
    ];
    const query = value.trim().toLowerCase();
    const visibleOptions = options.filter(
      ({ text, aliases }) =>
        !query ||
        [text, ...aliases].some((term) => term.toLowerCase().includes(query)),
    );

    return (
      <EvoCombobox
        {...args}
        filterMethod="manual"
        value={value}
        onValueChange={setValue}
      >
        {visibleOptions.map(({ text }) => (
          <EvoComboboxOption key={text} text={text} />
        ))}
      </EvoCombobox>
    );
  },
};

export const Postfix: Story = {
  render: (args) => {
    const [value, setValue] = useState("August Campaign");

    return (
      <EvoCombobox
        {...args}
        value={value}
        onValueChange={setValue}
        postfix={{
          icon: <EvoIconClear16 />,
          buttonProps: {
            a11yText: "Clear",
            onClick: () => setValue(""),
          },
        }}
      >
        <EvoComboboxOption text="August Campaign" />
        <EvoComboboxOption text="4th of July Sale (paused)" />
        <EvoComboboxOption text="Basic Offer" />
      </EvoCombobox>
    );
  },
};
