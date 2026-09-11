import type { ComponentType } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoIconSneaker16 } from "../icon/icons/sneaker-16";
import { EvoFilterChip } from "./filter-chip";
import type { EvoFilterChipProps } from "./types";

const meta: Meta<EvoFilterChipProps> = {
  title: "Form Input/EvoFilterChip",
  component: EvoFilterChip as ComponentType<EvoFilterChipProps>,

  argTypes: {
    variant: {
      control: "select",
      options: ["default", "expressive", "menu"],
    },
    selected: {
      control: "boolean",
    },
    defaultSelected: {
      control: "boolean",
    },
    open: {
      control: "boolean",
    },
    defaultOpen: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    href: {
      control: "text",
    },
    a11ySelectedText: {
      type: "string",
      control: "text",
    },
    icon: {
      control: false,
    },
    image: {
      control: false,
    },
    onClick: {
      action: "onClick",
      table: { category: "Events" },
    },
    children: {
      control: "text",
    },
  },
  args: {
    children: "Filter",
    variant: "default",
    icon: <EvoIconSneaker16 />,
    image: (
      <img
        src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile2.png"
        alt="Category"
      />
    ),
    a11ySelectedText: "Filter Applied",
  },
};

export default meta;
type Story = StoryObj<EvoFilterChipProps>;

/** The default filter button toggles its `selected` state. */
export const Default: Story = {};
