import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoButton } from "../button";
import { EvoChipsCombobox, EvoChipsComboboxOption } from "./index";

const meta: Meta<typeof EvoChipsCombobox> = {
  title: "Form Input/EvoChipsCombobox",
  component: EvoChipsCombobox,
  subcomponents: { EvoChipsComboboxOption },
  args: {
    "aria-label": "Item features",
    placeholder: "Add an item feature",
    a11yDeleteButtonText: "Remove",
    children: (
      <>
        <EvoChipsComboboxOption text="Free shipping" />
        <EvoChipsComboboxOption text="Local pickup" />
        <EvoChipsComboboxOption text="Returns accepted" />
      </>
    ),
  },
};
export default meta;
type Story = StoryObj<typeof EvoChipsCombobox>;

/** Choose suggested features or enter a custom one. */
export const Default: Story = {};

/** The application can control selected features. */
export const Controlled: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>(["Free shipping"]);
    return (
      <>
        <EvoChipsCombobox
          aria-label="Item features"
          placeholder="Add an item feature"
          selected={selected}
          onSelectedChange={setSelected}
        >
          <EvoChipsComboboxOption text="Free shipping" />
          <EvoChipsComboboxOption text="Local pickup" />
          <EvoChipsComboboxOption text="Returns accepted" />
        </EvoChipsCombobox>
        <EvoButton onClick={() => setSelected(["Local pickup"])}>
          Use local pickup
        </EvoButton>
      </>
    );
  },
};
