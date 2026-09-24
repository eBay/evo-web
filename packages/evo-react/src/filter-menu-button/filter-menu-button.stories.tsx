import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoFilterMenuButton } from "./filter-menu-button";
import {
  EvoFilterMenuFooterButton,
  EvoFilterMenuItem,
  EvoFilterMenuItems,
} from "../filter-menu";

const meta: Meta<typeof EvoFilterMenuButton> = {
  title: "Buttons/EvoFilterMenuButton",
  component: EvoFilterMenuButton,
  subcomponents: {
    EvoFilterMenuItems,
    EvoFilterMenuItem,
    EvoFilterMenuFooterButton,
  },
  argTypes: {
    type: { control: "select", options: ["checkbox", "radio"] },
    variant: { control: "select", options: ["form"] },
    hasSelection: { control: "boolean" },
    open: { control: "boolean" },
    defaultOpen: { control: "boolean" },
    disabled: { control: "boolean" },
    onOpenChange: {
      action: "onOpenChange",
      table: { category: "Events" },
    },
    children: { control: false },
  },
  args: {
    text: "Delivery",
    type: "checkbox",
  },
  render(args) {
    return (
      <EvoFilterMenuButton {...args}>
        <EvoFilterMenuItems>
          <EvoFilterMenuItem value="free">Free shipping</EvoFilterMenuItem>
          <EvoFilterMenuItem value="local">Local pickup</EvoFilterMenuItem>
          <EvoFilterMenuItem value="express" disabled>
            Express delivery
          </EvoFilterMenuItem>
        </EvoFilterMenuItems>
      </EvoFilterMenuButton>
    );
  },
};

export default meta;
type Story = StoryObj<typeof EvoFilterMenuButton>;

/** The trigger reflects the current selection and opens a keyboard navigable filter menu. */
export const Default: Story = {};

/** A footer action applies the current selection and dismisses the menu. */
export const WithFooter: Story = {
  render(args) {
    return (
      <EvoFilterMenuButton {...args}>
        <EvoFilterMenuItems>
          <EvoFilterMenuItem value="free">Free shipping</EvoFilterMenuItem>
          <EvoFilterMenuItem value="local">Local pickup</EvoFilterMenuItem>
        </EvoFilterMenuItems>
        <EvoFilterMenuFooterButton>Apply filters</EvoFilterMenuFooterButton>
      </EvoFilterMenuButton>
    );
  },
};

/** Search results stay in sync with the controlled selected values. */
export const WithSearch: Story = {
  render(args) {
    const [searchValue, setSearchValue] = useState("");
    const [selected, setSelected] = useState<string[]>([]);
    const options = [
      { value: "free", label: "Free shipping" },
      { value: "local", label: "Local pickup" },
      { value: "express", label: "Express delivery" },
    ];
    const visibleOptions = options.filter(({ label }) =>
      label.toLowerCase().includes(searchValue.toLowerCase()),
    );
    return (
      <EvoFilterMenuButton
        {...args}
        type="checkbox"
        defaultSelected={undefined}
        searchHeaderPlaceholderText="Search delivery options"
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        selected={selected}
        onSelectedChange={setSelected}
        countText={selected.length > 0 ? `(+${selected.length})` : undefined}
      >
        <EvoFilterMenuItems>
          {visibleOptions.map(({ value, label }) => (
            <EvoFilterMenuItem key={value} value={value}>
              {label}
            </EvoFilterMenuItem>
          ))}
        </EvoFilterMenuItems>
      </EvoFilterMenuButton>
    );
  },
};
