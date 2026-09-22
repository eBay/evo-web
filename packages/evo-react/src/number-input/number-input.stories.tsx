import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoButton } from "../button";
import { EvoNumberInput } from "./number-input";

const meta: Meta<typeof EvoNumberInput> = {
  title: "Form Input/EvoNumberInput",
  component: EvoNumberInput,
  argTypes: {
    value: { control: "number" },
    defaultValue: { control: "number" },
    min: { control: "number" },
    max: { control: "number" },
    label: { control: "text" },
    a11yText: {
      type: { name: "string", required: true },
      control: "text",
    },
    a11yDeleteText: { control: "text" },
    fluid: { control: "boolean" },
    inputSize: {
      control: "select",
      options: ["regular", "large"],
    },
    invalid: { control: "boolean" },
    onChange: { action: "onChange", table: { category: "Events" } },
    onDelete: { action: "onDelete", table: { category: "Events" } },
  },
  args: {
    a11yText: "Item quantity",
    defaultValue: 2,
    min: 1,
    max: 10,
  },
};

export default meta;
type Story = StoryObj<typeof EvoNumberInput>;

/** A number input for selecting an item quantity. */
export const Default: Story = {};

/** A visible label identifies the quantity field. */
export const WithLabel: Story = {
  args: {
    label: "Item quantity",
    a11yText: null,
  },
};

/** A delete action supports removing an item from a cart. */
export const WithDelete: Story = {
  args: {
    a11yDeleteText: "Remove headphones from cart",
    label: "Headphones quantity",
    a11yText: null,
    defaultValue: 1,
  },
};

/** Parent state controls the quantity and can replace it through external actions. */
export const Controlled: Story = {
  args: {
    a11yText: "Item quantity",
    value: 0,
    min: 0,
    max: 100,
    defaultValue: undefined,
  },
  render: (args) => {
    const [value, setValue] = useState(args.value ?? 0);

    return (
      <>
        <EvoNumberInput
          {...args}
          value={value}
          onChange={(nextValue) => {
            setValue(nextValue);
            args.onChange?.(nextValue);
          }}
        />

        <p>Current quantity: {value}</p>
        <p>Set quantity to:</p>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          <EvoButton onClick={() => setValue(0)}>Set to 0</EvoButton>
          <EvoButton onClick={() => setValue(10)}>Set to 10</EvoButton>
          <EvoButton onClick={() => setValue(25)}>Set to 25</EvoButton>
          <EvoButton onClick={() => setValue(50)}>Set to 50</EvoButton>
        </div>
      </>
    );
  },
};
