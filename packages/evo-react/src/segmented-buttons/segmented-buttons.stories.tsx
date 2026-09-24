import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoIconFullView24 } from "../icon/icons/full-view-24";
import { EvoIconMobile24 } from "../icon/icons/mobile-24";
import { EvoSegmentedButton } from "./segmented-button";
import { EvoSegmentedButtons } from "./segmented-buttons";

const meta: Meta<typeof EvoSegmentedButtons> = {
  title: "Buttons/EvoSegmentedButtons",
  component: EvoSegmentedButtons,
  subcomponents: { EvoSegmentedButton },
  argTypes: {
    size: { control: "select", options: ["large"] },
    defaultSelected: {
      control: "select",
      options: ["active", "sold", "ended"],
    },
    onSelectedChange: {
      action: "selected change",
      table: { category: "Events" },
    },
  },
  args: {
    a11yText: "Listing status",
    defaultSelected: "active",
  },
};

export default meta;
type Story = StoryObj<typeof EvoSegmentedButtons>;

/** Select one listing status to change the current view. */
export const Default: Story = {
  render: (args) => (
    <EvoSegmentedButtons {...args}>
      <EvoSegmentedButton value="active">Active</EvoSegmentedButton>
      <EvoSegmentedButton value="sold">Sold</EvoSegmentedButton>
      <EvoSegmentedButton value="ended">Ended</EvoSegmentedButton>
    </EvoSegmentedButtons>
  ),
};

/** Leading icons distinguish the desktop and mobile preview choices. */
export const WithIcons: Story = {
  argTypes: {
    defaultSelected: {
      control: "select",
      options: ["desktop", "mobile"],
    },
  },
  args: {
    a11yText: "Listing preview",
    defaultSelected: "desktop",
  },
  render: (args) => (
    <EvoSegmentedButtons {...args}>
      <EvoSegmentedButton value="desktop" icon={<EvoIconFullView24 />}>
        Desktop
      </EvoSegmentedButton>
      <EvoSegmentedButton value="mobile" icon={<EvoIconMobile24 />}>
        Mobile
      </EvoSegmentedButton>
    </EvoSegmentedButtons>
  ),
};
