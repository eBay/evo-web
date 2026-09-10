import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoDetails } from "./details";
import { EvoDetailsSummary } from "./details-summary";
import { EvoDetailsLeading } from "./details-leading";
import { EvoDetailsLabel } from "./details-label";
import { EvoDetailsContent } from "./details-content";
import { EvoIconMoneyBackGuarantee16 } from "../icon/icons/money-back-guarantee-16";

const meta: Meta<typeof EvoDetails> = {
  title: "Navigation & Disclosure/EvoDetails",
  component: EvoDetails,
  subcomponents: {
    EvoDetailsSummary,
    EvoDetailsLeading,
    EvoDetailsLabel,
    EvoDetailsContent,
  },

  argTypes: {
    size: {
      control: "select",
      options: ["regular", "small"],
      table: { defaultValue: { summary: "regular" } },
    },
    alignment: {
      control: "select",
      options: ["regular", "center"],
      table: { defaultValue: { summary: "regular" } },
    },
    open: {
      control: "boolean",

      table: { defaultValue: { summary: "false" } },
    },
    onToggle: {
      action: "onToggle",
      table: { category: "Events" },
    },
  },
  args: {
    size: "regular",
    alignment: "regular",
    open: false,
  },
};

export default meta;
type Story = StoryObj<typeof EvoDetails>;

/** Native disclosure keeps secondary information collapsed until opened. */
export const Default: Story = {
  render: (args) => (
    <EvoDetails {...args}>
      <EvoDetailsSummary>
        <EvoDetailsLabel>Shipping, returns, and payments</EvoDetailsLabel>
      </EvoDetailsSummary>
      <EvoDetailsContent>
        Free delivery in 3–5 business days. Returns are accepted within 30 days.
      </EvoDetailsContent>
    </EvoDetails>
  ),
};

/** A decorative icon distinguishes the disclosure section. */
export const WithLeadingIcon: Story = {
  render: (args) => (
    <EvoDetails {...args}>
      <EvoDetailsSummary>
        <EvoDetailsLeading>
          <EvoIconMoneyBackGuarantee16 />
        </EvoDetailsLeading>
        <EvoDetailsLabel>eBay Money Back Guarantee</EvoDetailsLabel>
      </EvoDetailsSummary>
      <EvoDetailsContent>
        Get the item you ordered or your money back.
      </EvoDetailsContent>
    </EvoDetails>
  ),
};
