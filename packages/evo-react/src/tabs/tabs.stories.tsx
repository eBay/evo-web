import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoTab } from "./tab";
import { EvoTabList } from "./tab-list";
import { EvoTabPanel } from "./tab-panel";
import { EvoTabPanelList } from "./tab-panel-list";
import { EvoTabs } from "./tabs";

const meta: Meta<typeof EvoTabs> = {
  title: "navigation & disclosure/evo-tabs",
  component: EvoTabs,
  subcomponents: {
    EvoTabList,
    EvoTab,
    EvoTabPanelList,
    EvoTabPanel,
  },
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
A compound tabs component with id-based selection and automatic or manual keyboard activation.

## Usage

\`\`\`tsx
import {
  EvoTabs,
  EvoTabList,
  EvoTab,
  EvoTabPanelList,
  EvoTabPanel,
} from "@evo-web/react/tabs";
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    selected: {
      control: "select",
      options: ["overview", "shipping", "returns"],
      description:
        "Controlled id shared by the selected tab and tab panel. Required when `defaultSelected` is not provided.",
    },
    defaultSelected: {
      control: "select",
      options: ["overview", "shipping", "returns"],
      description:
        "Initial id shared by the selected tab and tab panel. Required when `selected` is not provided.",
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
          <EvoTab id="overview">Overview</EvoTab>
          <EvoTab id="shipping" disabled>
            Shipping
          </EvoTab>
          <EvoTab id="returns">Returns</EvoTab>
        </EvoTabList>
        <EvoTabPanelList>
          <EvoTabPanel id="overview">
            <h3>Overview</h3>
            <p>Product overview content.</p>
          </EvoTabPanel>
          <EvoTabPanel id="shipping">
            <h3>Shipping</h3>
            <p>Shipping content.</p>
          </EvoTabPanel>
          <EvoTabPanel id="returns">
            <h3>Returns</h3>
            <p>Returns content.</p>
          </EvoTabPanel>
        </EvoTabPanelList>
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

export const Default: Story = {};
