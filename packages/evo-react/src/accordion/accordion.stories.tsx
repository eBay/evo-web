import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoAccordion } from "./accordion";
import { EvoAccordionDetails } from "./accordion-details";
import {
  EvoAccordionContent,
  EvoAccordionLabel,
  EvoAccordionLeading,
  EvoAccordionSummary,
} from "./index";
import { EvoIconGraph24 } from "../icon/icons/graph-24";
import { EvoIconLightbulb24 } from "../icon/icons/lightbulb-24";
import { EvoIconPencil24 } from "../icon/icons/pencil-24";

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const meta: Meta<typeof EvoAccordion> = {
  title: "navigation & disclosure/evo-accordion",
  component: EvoAccordion,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
A grouped disclosure component that coordinates open items by id.

## Usage

\`\`\`tsx
import {
  EvoAccordion,
  EvoAccordionDetails,
  EvoAccordionSummary,
  EvoAccordionLabel,
} from "@evo-web/react/accordion";
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    size: {
      control: "select",
      options: ["regular", "large"],
      description: "Size of the accordion",
      table: { defaultValue: { summary: "regular" } },
    },
    a11yText: {
      type: { name: "string", required: true },
      control: "text",
      description:
        "Localized role description to announce the component role for a11y users.",
      table: { defaultValue: { summary: "accordion" } },
    },
    open: {
      control: "object",
      description:
        "Controlled id or ids of the open items. Use a string for single-open mode or a string array for multi-open mode.",
      table: { type: { summary: "string | string[]" } },
    },
    defaultOpen: {
      control: "object",
      description:
        "Initial uncontrolled id or ids of the open items. Use an empty string array for uncontrolled multi-open mode.",
      table: { type: { summary: "string | string[]" } },
    },
    onOpenChange: {
      action: "onOpenChange",
      description: "Fired when the open item id or ids change",
      table: { category: "Events" },
    },
  },
  args: {
    size: "regular",
    a11yText: "accordion",
  },
  render(args) {
    return (
      <EvoAccordion {...args}>
        <EvoAccordionDetails id="one">
          <EvoAccordionSummary>
            <EvoAccordionLabel>Shipping and returns</EvoAccordionLabel>
          </EvoAccordionSummary>
          <EvoAccordionContent><p>{LOREM}</p></EvoAccordionContent>
        </EvoAccordionDetails>
        <EvoAccordionDetails id="two">
          <EvoAccordionSummary>
            <EvoAccordionLabel>Description</EvoAccordionLabel>
          </EvoAccordionSummary>
          <EvoAccordionContent><p>{LOREM}</p></EvoAccordionContent>
        </EvoAccordionDetails>
        <EvoAccordionDetails id="three">
          <EvoAccordionSummary>
            <EvoAccordionLabel>Specifications</EvoAccordionLabel>
          </EvoAccordionSummary>
          <EvoAccordionContent><p>{LOREM}</p></EvoAccordionContent>
        </EvoAccordionDetails>
      </EvoAccordion>
    );
  },
};

export default meta;
type Story = StoryObj<typeof EvoAccordion>;

export const Default: Story = {};

export const MultipleSelection: Story = {
  render(args) {
    return (
      <EvoAccordion size={args.size} a11yText={args.a11yText} defaultOpen={[]}>
        <EvoAccordionDetails id="one">
          <EvoAccordionSummary>
            <EvoAccordionLabel>Shipping and returns</EvoAccordionLabel>
          </EvoAccordionSummary>
          <EvoAccordionContent><p>{LOREM}</p></EvoAccordionContent>
        </EvoAccordionDetails>
        <EvoAccordionDetails id="two">
          <EvoAccordionSummary>
            <EvoAccordionLabel>Description</EvoAccordionLabel>
          </EvoAccordionSummary>
          <EvoAccordionContent><p>{LOREM}</p></EvoAccordionContent>
        </EvoAccordionDetails>
        <EvoAccordionDetails id="three">
          <EvoAccordionSummary>
            <EvoAccordionLabel>Specifications</EvoAccordionLabel>
          </EvoAccordionSummary>
          <EvoAccordionContent><p>{LOREM}</p></EvoAccordionContent>
        </EvoAccordionDetails>
      </EvoAccordion>
    );
  },
};

export const Controlled: Story = {
  args: {
    open: "0",
  },
  render(args: Story["args"]) {
    const [open, setOpen] = useState<string | undefined>(args?.open || "");
    const handleOpenChange = (nextOpen: string | undefined) => {
      setOpen(nextOpen);
    };

    return (
      <>
        <div>
          {["0", "1", "2"].map((id) => (
            <label key={id}>
              <input
                type="radio"
                name="accordion-control"
                value={id}
                checked={open === id}
                onChange={() => handleOpenChange(id)}
              />{" "}
              {id}
            </label>
          ))}
        </div>

        <EvoAccordion
          {...args}
          open={open}
          onOpenChange={handleOpenChange}
          a11yText="Accordion Menu"
        >
          <EvoAccordionDetails id="0">
            <EvoAccordionSummary>
              <EvoAccordionLabel>Shipping and returns</EvoAccordionLabel>
            </EvoAccordionSummary>
            <EvoAccordionContent><p>{LOREM}</p></EvoAccordionContent>
          </EvoAccordionDetails>
          <EvoAccordionDetails id="1">
            <EvoAccordionSummary>
              <EvoAccordionLabel>Description</EvoAccordionLabel>
            </EvoAccordionSummary>
            <EvoAccordionContent><p>{LOREM}</p></EvoAccordionContent>
          </EvoAccordionDetails>
          <EvoAccordionDetails id="2">
            <EvoAccordionSummary>
              <EvoAccordionLabel>Specifications</EvoAccordionLabel>
            </EvoAccordionSummary>
            <EvoAccordionContent><p>{LOREM}</p></EvoAccordionContent>
          </EvoAccordionDetails>
        </EvoAccordion>
      </>
    );
  },
};

export const WithLeadingIcon: Story = {
  render(args) {
    return (
      <EvoAccordion {...args}>
        <EvoAccordionDetails id="lightbulb">
          <EvoAccordionSummary>
            <EvoAccordionLeading>
              <EvoIconLightbulb24 />
            </EvoAccordionLeading>
            <EvoAccordionLabel>Shipping and returns</EvoAccordionLabel>
          </EvoAccordionSummary>
          <EvoAccordionContent><p>{LOREM}</p></EvoAccordionContent>
        </EvoAccordionDetails>
        <EvoAccordionDetails id="pencil">
          <EvoAccordionSummary>
            <EvoAccordionLeading>
              <EvoIconPencil24 />
            </EvoAccordionLeading>
            <EvoAccordionLabel>Description</EvoAccordionLabel>
          </EvoAccordionSummary>
          <EvoAccordionContent><p>{LOREM}</p></EvoAccordionContent>
        </EvoAccordionDetails>
        <EvoAccordionDetails id="graph">
          <EvoAccordionSummary>
            <EvoAccordionLeading>
              <EvoIconGraph24 />
            </EvoAccordionLeading>
            <EvoAccordionLabel>Specifications</EvoAccordionLabel>
          </EvoAccordionSummary>
          <EvoAccordionContent><p>{LOREM}</p></EvoAccordionContent>
        </EvoAccordionDetails>
      </EvoAccordion>
    );
  },
};
