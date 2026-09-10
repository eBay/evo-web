import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoAccordion } from "./accordion";
import { EvoAccordionItem } from "./accordion-item";
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
  title: "Navigation & Disclosure/EvoAccordion",
  component: EvoAccordion,
  subcomponents: {
    EvoAccordionItem,
    EvoAccordionSummary,
    EvoAccordionLeading,
    EvoAccordionLabel,
    EvoAccordionContent,
  },

  argTypes: {
    size: {
      control: "select",
      options: ["regular", "large"],
      table: { defaultValue: { summary: "regular" } },
    },
    a11yText: {
      type: { name: "string", required: true },
      control: "text",
      table: { defaultValue: { summary: "accordion" } },
    },
    open: {
      control: "object",
      table: { type: { summary: "string | string[]" } },
    },
    defaultOpen: {
      control: "object",
      table: { type: { summary: "string | string[]" } },
    },
    onOpenChange: {
      action: "onOpenChange",
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
        <EvoAccordionItem id="one">
          <EvoAccordionSummary>
            <EvoAccordionLabel>Shipping and returns</EvoAccordionLabel>
          </EvoAccordionSummary>
          <EvoAccordionContent>
            <p>{LOREM}</p>
          </EvoAccordionContent>
        </EvoAccordionItem>
        <EvoAccordionItem id="two">
          <EvoAccordionSummary>
            <EvoAccordionLabel>Description</EvoAccordionLabel>
          </EvoAccordionSummary>
          <EvoAccordionContent>
            <p>{LOREM}</p>
          </EvoAccordionContent>
        </EvoAccordionItem>
        <EvoAccordionItem id="three">
          <EvoAccordionSummary>
            <EvoAccordionLabel>Specifications</EvoAccordionLabel>
          </EvoAccordionSummary>
          <EvoAccordionContent>
            <p>{LOREM}</p>
          </EvoAccordionContent>
        </EvoAccordionItem>
      </EvoAccordion>
    );
  },
};

export default meta;
type Story = StoryObj<typeof EvoAccordion>;

/** The default accordion keeps one section open at a time. */
export const Default: Story = {};

/** Multiple selection allows several sections to remain open. */
export const MultipleSelection: Story = {
  render(args) {
    return (
      <EvoAccordion size={args.size} a11yText={args.a11yText} defaultOpen={[]}>
        <EvoAccordionItem id="one">
          <EvoAccordionSummary>
            <EvoAccordionLabel>Shipping and returns</EvoAccordionLabel>
          </EvoAccordionSummary>
          <EvoAccordionContent>
            <p>{LOREM}</p>
          </EvoAccordionContent>
        </EvoAccordionItem>
        <EvoAccordionItem id="two">
          <EvoAccordionSummary>
            <EvoAccordionLabel>Description</EvoAccordionLabel>
          </EvoAccordionSummary>
          <EvoAccordionContent>
            <p>{LOREM}</p>
          </EvoAccordionContent>
        </EvoAccordionItem>
        <EvoAccordionItem id="three">
          <EvoAccordionSummary>
            <EvoAccordionLabel>Specifications</EvoAccordionLabel>
          </EvoAccordionSummary>
          <EvoAccordionContent>
            <p>{LOREM}</p>
          </EvoAccordionContent>
        </EvoAccordionItem>
      </EvoAccordion>
    );
  },
};

/** Controlled state synchronizes the open item with the parent. */
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
          <EvoAccordionItem id="0">
            <EvoAccordionSummary>
              <EvoAccordionLabel>Shipping and returns</EvoAccordionLabel>
            </EvoAccordionSummary>
            <EvoAccordionContent>
              <p>{LOREM}</p>
            </EvoAccordionContent>
          </EvoAccordionItem>
          <EvoAccordionItem id="1">
            <EvoAccordionSummary>
              <EvoAccordionLabel>Description</EvoAccordionLabel>
            </EvoAccordionSummary>
            <EvoAccordionContent>
              <p>{LOREM}</p>
            </EvoAccordionContent>
          </EvoAccordionItem>
          <EvoAccordionItem id="2">
            <EvoAccordionSummary>
              <EvoAccordionLabel>Specifications</EvoAccordionLabel>
            </EvoAccordionSummary>
            <EvoAccordionContent>
              <p>{LOREM}</p>
            </EvoAccordionContent>
          </EvoAccordionItem>
        </EvoAccordion>
      </>
    );
  },
};

/** Leading icons provide a decorative cue for each section. */
export const WithLeadingIcon: Story = {
  render(args) {
    return (
      <EvoAccordion {...args}>
        <EvoAccordionItem id="lightbulb">
          <EvoAccordionSummary>
            <EvoAccordionLeading>
              <EvoIconLightbulb24 />
            </EvoAccordionLeading>
            <EvoAccordionLabel>Shipping and returns</EvoAccordionLabel>
          </EvoAccordionSummary>
          <EvoAccordionContent>
            <p>{LOREM}</p>
          </EvoAccordionContent>
        </EvoAccordionItem>
        <EvoAccordionItem id="pencil">
          <EvoAccordionSummary>
            <EvoAccordionLeading>
              <EvoIconPencil24 />
            </EvoAccordionLeading>
            <EvoAccordionLabel>Description</EvoAccordionLabel>
          </EvoAccordionSummary>
          <EvoAccordionContent>
            <p>{LOREM}</p>
          </EvoAccordionContent>
        </EvoAccordionItem>
        <EvoAccordionItem id="graph">
          <EvoAccordionSummary>
            <EvoAccordionLeading>
              <EvoIconGraph24 />
            </EvoAccordionLeading>
            <EvoAccordionLabel>Specifications</EvoAccordionLabel>
          </EvoAccordionSummary>
          <EvoAccordionContent>
            <p>{LOREM}</p>
          </EvoAccordionContent>
        </EvoAccordionItem>
      </EvoAccordion>
    );
  },
};
