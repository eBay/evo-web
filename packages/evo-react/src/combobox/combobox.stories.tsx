import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useArgs } from "storybook/preview-api";
import { EvoButton } from "../button";
import { EvoIconClear16 } from "../icon/icons/clear-16";
import { EvoCombobox } from "./combobox";
import { EvoComboboxOption } from "./combobox-option";

const meta: Meta<typeof EvoCombobox> = {
  title: "Form Input/EvoCombobox",
  component: EvoCombobox,
  subcomponents: { EvoComboboxOption },
  argTypes: {
    filterMethod: {
      control: "select",
      options: ["auto", "manual", "none"],
      table: { defaultValue: { summary: "auto" } },
    },
    listSelection: {
      control: "select",
      options: ["automatic", "manual"],
      table: { defaultValue: { summary: "automatic" } },
    },
    strategy: {
      control: "select",
      options: ["absolute", "fixed"],
      table: { defaultValue: { summary: "absolute" } },
    },
    borderless: {
      control: "boolean",
      table: { defaultValue: { summary: "false" } },
    },
    defaultOpen: {
      control: "boolean",
      table: { defaultValue: { summary: "false" } },
    },
    disabled: {
      control: "boolean",
    },
    floatingLabel: {
      control: "text",
    },
    fluid: {
      control: "boolean",
      table: { defaultValue: { summary: "false" } },
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
    floatingLabel: "Advertising campaign",
    filterMethod: "auto",
    listSelection: "automatic",
    placeholder: "Choose a campaign",
  },
};

export default meta;
type Story = StoryObj<typeof EvoCombobox>;
type StoryArgs = NonNullable<Story["args"]>;

/** Filters options automatically as the input value changes. */
export const Default: Story = {
  render: (args) => (
    <EvoCombobox {...args}>
      <EvoComboboxOption text="Back-to-school promotion" />
      <EvoComboboxOption text="Fourth of July sale (paused)" />
      <EvoComboboxOption text="Store subscriber coupon" />
    </EvoCombobox>
  ),
};

/** Synchronizes the input value with externally controlled state. */
export const Controlled: Story = {
  args: {
    value: "Back-to-school promotion",
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
          <EvoComboboxOption text="Back-to-school promotion" />
          <EvoComboboxOption text="Fourth of July sale (paused)" />
          <EvoComboboxOption text="Store subscriber coupon" />
        </EvoCombobox>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          <EvoButton
            type="button"
            onClick={() => setValue("Back-to-school promotion")}
          >
            Select back-to-school promotion
          </EvoButton>
          <EvoButton
            type="button"
            onClick={() => setValue("Store subscriber coupon")}
          >
            Select store subscriber coupon
          </EvoButton>
          <EvoButton type="button" onClick={() => setValue("")}>
            Clear campaign
          </EvoButton>
        </div>
      </div>
    );
  },
};

/** Delegates option filtering to the application while retaining listbox interaction. */
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
        floatingLabel="Item location"
        placeholder="Search cities"
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

/** Adds an actionable postfix that clears the current input value. */
export const Postfix: Story = {
  render: (args) => {
    const [value, setValue] = useState("Back-to-school promotion");

    return (
      <EvoCombobox
        {...args}
        value={value}
        onValueChange={setValue}
        postfix={{
          icon: <EvoIconClear16 />,
          buttonProps: {
            a11yText: "Clear campaign",
            onClick: () => setValue(""),
          },
        }}
      >
        <EvoComboboxOption text="Back-to-school promotion" />
        <EvoComboboxOption text="Fourth of July sale (paused)" />
        <EvoComboboxOption text="Store subscriber coupon" />
      </EvoCombobox>
    );
  },
};
