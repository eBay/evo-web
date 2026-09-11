import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoTab } from "./tab";
import { EvoTabList } from "./tab-list";
import { EvoTabPanel } from "./tab-panel";
import { EvoTabPanels } from "./tab-panels";
import { EvoTabs } from "./tabs";

const meta: Meta<typeof EvoTabs> = {
  title: "Navigation & Disclosure/EvoTabs",
  component: EvoTabs,
  subcomponents: {
    EvoTabList,
    EvoTab,
    EvoTabPanels,
    EvoTabPanel,
  },

  argTypes: {
    selected: {
      control: "select",
      options: ["overview", "shipping", "returns"],
    },
    defaultSelected: {
      control: "select",
      options: ["overview", "shipping", "returns"],
    },
    activation: {
      control: "select",
      options: ["auto", "manual"],
      table: { defaultValue: { summary: "auto" } },
    },
    size: {
      control: "select",
      options: ["medium", "large"],
      table: { defaultValue: { summary: "medium" } },
    },
    onSelectedChange: {
      action: "onSelectedChange",
      table: { category: "Events" },
    },
  },
  args: {
    defaultSelected: "overview",
    activation: "auto",
    size: "medium",
  },
  render(args) {
    const { selected, defaultSelected, ...rest } = args;
    const children = (
      <>
        <EvoTabList>
          <EvoTab id="overview">About this item</EvoTab>
          <EvoTab id="shipping" disabled>
            Shipping and returns
          </EvoTab>
          <EvoTab id="returns">Seller feedback</EvoTab>
        </EvoTabList>
        <EvoTabPanels>
          <EvoTabPanel id="overview">
            <h3>About this item</h3>
            <p>
              Seller refurbished · Bluetooth connectivity · Charging cable
              included
            </p>
          </EvoTabPanel>
          <EvoTabPanel id="shipping">
            <h3>Shipping and returns</h3>
            <p>
              Free delivery in 3–5 business days. Returns accepted within 30
              days.
            </p>
          </EvoTabPanel>
          <EvoTabPanel id="returns">
            <h3>Seller feedback</h3>
            <p>98.9% positive feedback · More than 2,000 items sold</p>
          </EvoTabPanel>
        </EvoTabPanels>
      </>
    );

    return selected !== undefined ? (
      <EvoTabs {...rest} selected={selected}>
        {children}
      </EvoTabs>
    ) : (
      <EvoTabs {...rest} defaultSelected={defaultSelected ?? "overview"}>
        {children}
      </EvoTabs>
    );
  },
};

export default meta;
type Story = StoryObj<typeof EvoTabs>;

/** The default `activation="auto"` setting switches between peer content sections. */
export const Default: Story = {};
