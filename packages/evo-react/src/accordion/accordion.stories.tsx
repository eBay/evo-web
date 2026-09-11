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
import { EvoIconTruck24 } from "../icon/icons/truck-24";
import { EvoIconPencil24 } from "../icon/icons/pencil-24";

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
    a11yText: "Product details",
  },
  render(args) {
    return (
      <EvoAccordion {...args}>
        <EvoAccordionItem id="shipping">
          <EvoAccordionSummary>
            <EvoAccordionLabel>Shipping and returns</EvoAccordionLabel>
          </EvoAccordionSummary>
          <EvoAccordionContent>
            <p>
              Free delivery in 3–5 business days. Returns are accepted within 30
              days.
            </p>
          </EvoAccordionContent>
        </EvoAccordionItem>
        <EvoAccordionItem id="description">
          <EvoAccordionSummary>
            <EvoAccordionLabel>Description</EvoAccordionLabel>
          </EvoAccordionSummary>
          <EvoAccordionContent>
            <p>
              Refurbished noise-canceling headphones with a charging case and
              USB-C cable.
            </p>
          </EvoAccordionContent>
        </EvoAccordionItem>
        <EvoAccordionItem id="specifications">
          <EvoAccordionSummary>
            <EvoAccordionLabel>Specifications</EvoAccordionLabel>
          </EvoAccordionSummary>
          <EvoAccordionContent>
            <p>Bluetooth 5.3 · Up to 30 hours of battery life · Black</p>
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
        <EvoAccordionItem id="shipping">
          <EvoAccordionSummary>
            <EvoAccordionLabel>Shipping and returns</EvoAccordionLabel>
          </EvoAccordionSummary>
          <EvoAccordionContent>
            <p>
              Free delivery in 3–5 business days. Returns are accepted within 30
              days.
            </p>
          </EvoAccordionContent>
        </EvoAccordionItem>
        <EvoAccordionItem id="description">
          <EvoAccordionSummary>
            <EvoAccordionLabel>Description</EvoAccordionLabel>
          </EvoAccordionSummary>
          <EvoAccordionContent>
            <p>
              Refurbished noise-canceling headphones with a charging case and
              USB-C cable.
            </p>
          </EvoAccordionContent>
        </EvoAccordionItem>
        <EvoAccordionItem id="specifications">
          <EvoAccordionSummary>
            <EvoAccordionLabel>Specifications</EvoAccordionLabel>
          </EvoAccordionSummary>
          <EvoAccordionContent>
            <p>Bluetooth 5.3 · Up to 30 hours of battery life · Black</p>
          </EvoAccordionContent>
        </EvoAccordionItem>
      </EvoAccordion>
    );
  },
};

/** Controlled state synchronizes the open item with the parent. */
export const Controlled: Story = {
  args: {
    open: "shipping",
  },
  render(args: Story["args"]) {
    const [open, setOpen] = useState<string | undefined>(args?.open || "");
    const handleOpenChange = (nextOpen: string | undefined) => {
      setOpen(nextOpen);
    };

    return (
      <>
        <div>
          {[
            ["shipping", "Shipping and returns"],
            ["description", "Description"],
            ["specifications", "Specifications"],
          ].map(([id, label]) => (
            <label key={id}>
              <input
                type="radio"
                name="accordion-control"
                value={id}
                checked={open === id}
                onChange={() => handleOpenChange(id)}
              />{" "}
              {label}
            </label>
          ))}
        </div>

        <EvoAccordion
          {...args}
          open={open}
          onOpenChange={handleOpenChange}
          a11yText="Product details"
        >
          <EvoAccordionItem id="shipping">
            <EvoAccordionSummary>
              <EvoAccordionLabel>Shipping and returns</EvoAccordionLabel>
            </EvoAccordionSummary>
            <EvoAccordionContent>
              <p>
                Free delivery in 3–5 business days. Returns are accepted within
                30 days.
              </p>
            </EvoAccordionContent>
          </EvoAccordionItem>
          <EvoAccordionItem id="description">
            <EvoAccordionSummary>
              <EvoAccordionLabel>Description</EvoAccordionLabel>
            </EvoAccordionSummary>
            <EvoAccordionContent>
              <p>
                Refurbished noise-canceling headphones with a charging case and
                USB-C cable.
              </p>
            </EvoAccordionContent>
          </EvoAccordionItem>
          <EvoAccordionItem id="specifications">
            <EvoAccordionSummary>
              <EvoAccordionLabel>Specifications</EvoAccordionLabel>
            </EvoAccordionSummary>
            <EvoAccordionContent>
              <p>Bluetooth 5.3 · Up to 30 hours of battery life · Black</p>
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
        <EvoAccordionItem id="shipping">
          <EvoAccordionSummary>
            <EvoAccordionLeading>
              <EvoIconTruck24 />
            </EvoAccordionLeading>
            <EvoAccordionLabel>Shipping and returns</EvoAccordionLabel>
          </EvoAccordionSummary>
          <EvoAccordionContent>
            <p>
              Free delivery in 3–5 business days. Returns are accepted within 30
              days.
            </p>
          </EvoAccordionContent>
        </EvoAccordionItem>
        <EvoAccordionItem id="description">
          <EvoAccordionSummary>
            <EvoAccordionLeading>
              <EvoIconPencil24 />
            </EvoAccordionLeading>
            <EvoAccordionLabel>Description</EvoAccordionLabel>
          </EvoAccordionSummary>
          <EvoAccordionContent>
            <p>
              Refurbished noise-canceling headphones with a charging case and
              USB-C cable.
            </p>
          </EvoAccordionContent>
        </EvoAccordionItem>
        <EvoAccordionItem id="specifications">
          <EvoAccordionSummary>
            <EvoAccordionLeading>
              <EvoIconGraph24 />
            </EvoAccordionLeading>
            <EvoAccordionLabel>Specifications</EvoAccordionLabel>
          </EvoAccordionSummary>
          <EvoAccordionContent>
            <p>Bluetooth 5.3 · Up to 30 hours of battery life · Black</p>
          </EvoAccordionContent>
        </EvoAccordionItem>
      </EvoAccordion>
    );
  },
};
