import type { ComponentType } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoIconSneaker16 } from "../icon/icons/sneaker-16";
import { EvoFilterChip } from "./filter-chip";
import type { EvoFilterChipProps } from "./types";

const meta: Meta<EvoFilterChipProps> = {
  title: "form input/evo-filter-chip",
  component: EvoFilterChip as ComponentType<EvoFilterChipProps>,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
A filter control that supports toggle-button, menu-button, expressive, and anchor variants.

## Usage

\`\`\`tsx
import { EvoFilterChip } from "@evo-web/react/filter-chip";
\`\`\`
        `,
      },
    },
  },
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
      description: "Controlled open state for the menu variant.",
    },
    defaultOpen: {
      control: "boolean",
      description: "Initial open state for an uncontrolled menu variant.",
    },
    disabled: {
      control: "boolean",
    },
    href: {
      control: "text",
      description:
        "Link destination. Requires a11ySelectedText and is unavailable for the menu variant.",
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
      description: "Filter label.",
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

export const Default: Story = {};
