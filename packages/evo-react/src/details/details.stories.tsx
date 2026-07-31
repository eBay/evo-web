import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoDetails } from "./details";
import { EvoDetailsSummary } from "./details-summary";
import { EvoDetailsLeading } from "./details-leading";
import { EvoDetailsLabel } from "./details-label";
import { EvoDetailsContent } from "./details-content";
import { EvoIconLightbulb16 } from "../icon/icons/lightbulb-16";

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const meta: Meta<typeof EvoDetails> = {
  title: "navigation & disclosure/evo-details",
  component: EvoDetails,
  subcomponents: {
    EvoDetailsSummary,
    EvoDetailsLeading,
    EvoDetailsLabel,
    EvoDetailsContent,
  },
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
A disclosure component that shows/hides content using the native \`<details>\` element. Composed using sub-components: \`EvoDetailsSummary\`, \`EvoDetailsLabel\`, \`EvoDetailsLeading\`, and \`EvoDetailsContent\`.

## Usage

\`\`\`tsx
import {
  EvoDetails,
  EvoDetailsSummary,
  EvoDetailsLabel,
  EvoDetailsLeading,
  EvoDetailsContent,
} from "@evo-web/react/details";
\`\`\`
        `,
      },
    },
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
      description: "Whether the details is open",
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

export const Default: Story = {
  render: (args) => (
    <EvoDetails {...args}>
      <EvoDetailsSummary>
        <EvoDetailsLabel>Show me the details!</EvoDetailsLabel>
      </EvoDetailsSummary>
      <EvoDetailsContent>{LOREM}</EvoDetailsContent>
    </EvoDetails>
  ),
};

export const WithLeading: Story = {
  render: (args) => (
    <EvoDetails {...args}>
      <EvoDetailsSummary>
        <EvoDetailsLeading>
          <EvoIconLightbulb16 />
        </EvoDetailsLeading>
        <EvoDetailsLabel>Show me the details!</EvoDetailsLabel>
      </EvoDetailsSummary>
      <EvoDetailsContent>{LOREM}</EvoDetailsContent>
    </EvoDetails>
  ),
};
