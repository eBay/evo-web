import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ListboxValue } from "../listbox/types";
import { EvoListboxButton } from "./listbox-button";

const options = [
  { value: "US", text: "United States", description: "Domestic shipping" },
  { value: "CA", text: "Canada", description: "International shipping" },
  { value: "MX", text: "Mexico", disabled: true },
];

const meta: Meta<typeof EvoListboxButton> = {
  title: "Buttons/EvoListboxButton",
  component: EvoListboxButton,
  argTypes: {
    listSelection: { control: "select", options: ["manual", "auto"] },
    variant: { control: "select", options: ["standard", "form"] },
    strategy: { control: "select", options: ["absolute", "fixed"] },
    split: { control: "select", options: ["start", "end"] },
  },
  args: {
    a11ySelectedText: "selected",
    prefixLabel: "Shipping region",
    name: "region",
    options,
    defaultSelected: "US",
  },
};

export default meta;
type Story = StoryObj<typeof EvoListboxButton>;

/** Select a shipping region from an accessible popup list. */
export const Default: Story = {};

/** The selected value and popup visibility can both be managed by the caller. */
export const Controlled: Story = {
  render: (args) => {
    const [selected, setSelected] = useState<ListboxValue | null>("CA");
    const [open, setOpen] = useState(false);
    return (
      <EvoListboxButton
        {...args}
        defaultSelected={undefined}
        selected={selected}
        onSelectedChange={setSelected}
        open={open}
        onOpenChange={setOpen}
      />
    );
  },
};
