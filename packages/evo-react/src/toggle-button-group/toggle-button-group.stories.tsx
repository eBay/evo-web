import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoIconSettings24 } from "../icon/icons/settings-24";
import { EvoToggleButtonGroup } from "./toggle-button-group";
import { EvoToggleButtonGroupItem } from "./toggle-button-group-item";

const meta: Meta<typeof EvoToggleButtonGroup> = {
  title: "Buttons/EvoToggleButtonGroup",
  component: EvoToggleButtonGroup,
  subcomponents: { EvoToggleButtonGroupItem },
  argTypes: {
    variant: {
      control: "select",
      options: ["checkbox", "radio", "radio-toggle"],
      table: { defaultValue: { summary: "checkbox" } },
    },
    layoutType: {
      control: "select",
      options: ["minimal", "list", "gallery"],
      table: { defaultValue: { summary: "minimal" } },
    },
    onSelectedChange: {
      action: "onSelectedChange",
      table: { category: "Events" },
    },
  },
  args: {
    a11yText: "Listing condition",
    variant: "checkbox",
    layoutType: "minimal",
  },
};

export default meta;
type Story = StoryObj<typeof EvoToggleButtonGroup>;

/** Each item has a stable value; the variant controls single or multiple selection. */
export const Default: Story = {
  render: (args) => (
    <EvoToggleButtonGroup {...args}>
      <EvoToggleButtonGroupItem value="new" title="New" />
      <EvoToggleButtonGroupItem value="used" title="Used" />
      <EvoToggleButtonGroupItem value="refurbished" title="Refurbished" />
    </EvoToggleButtonGroup>
  ),
};

/** Individual items can add media and override the group's layout. */
export const WithMedia: Story = {
  args: { a11yText: "Browse preferences", layoutType: "list" },
  render: (args) => (
    <EvoToggleButtonGroup {...args}>
      <EvoToggleButtonGroupItem
        value="preferences"
        title="Saved preferences"
        icon={<EvoIconSettings24 />}
      />
      <EvoToggleButtonGroupItem
        value="prints"
        title="Landscape prints"
        layoutType="gallery"
        img={{
          src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-pic.jpg",
          alt: "",
          fillPlacement: "center",
        }}
      />
    </EvoToggleButtonGroup>
  ),
};
