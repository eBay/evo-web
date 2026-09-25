import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoIconSettings24 } from "../icon/icons/settings-24";
import { EvoToggleButton } from "./toggle-button";
import { EvoToggleButtonContent } from "./toggle-button-content";
import { EvoToggleButtonIcon } from "./toggle-button-icon";
import { EvoToggleButtonImage } from "./toggle-button-image";
import { EvoToggleButtonSubtitle } from "./toggle-button-subtitle";
import { EvoToggleButtonTitle } from "./toggle-button-title";

const meta: Meta<typeof EvoToggleButton> = {
  title: "Buttons/EvoToggleButton",
  component: EvoToggleButton,
  subcomponents: {
    EvoToggleButtonIcon,
    EvoToggleButtonImage,
    EvoToggleButtonContent,
    EvoToggleButtonTitle,
    EvoToggleButtonSubtitle,
  },
  argTypes: {
    layoutType: {
      control: "select",
      options: ["minimal", "list", "gallery"],
      table: { defaultValue: { summary: "minimal" } },
    },
    onPressedChange: {
      action: "onPressedChange",
      table: { category: "Events" },
    },
  },
  args: {
    defaultPressed: false,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof EvoToggleButton>;

/** The pressed state changes without changing the button's visible label. */
export const Default: Story = {
  render: (args) => (
    <EvoToggleButton {...args}>
      <EvoToggleButtonContent>
        <EvoToggleButtonTitle>Show sold items</EvoToggleButtonTitle>
        <EvoToggleButtonSubtitle>
          Include completed listings in search results
        </EvoToggleButtonSubtitle>
      </EvoToggleButtonContent>
    </EvoToggleButton>
  ),
};

/** Icon media fits the list layout and remains decorative beside visible text. */
export const WithIcon: Story = {
  args: { layoutType: "list" },
  render: (args) => (
    <EvoToggleButton {...args}>
      <EvoToggleButtonIcon>
        <EvoIconSettings24 />
      </EvoToggleButtonIcon>
      <EvoToggleButtonContent>
        <EvoToggleButtonTitle>Buying preferences</EvoToggleButtonTitle>
        <EvoToggleButtonSubtitle>
          Use my saved preferences
        </EvoToggleButtonSubtitle>
      </EvoToggleButtonContent>
    </EvoToggleButton>
  ),
};

/** Image media can fill its frame while title text names the button. */
export const WithImage: Story = {
  args: { layoutType: "gallery" },
  render: (args) => (
    <EvoToggleButton {...args}>
      <EvoToggleButtonImage
        src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-pic.jpg"
        alt=""
        fillPlacement="center"
      />
      <EvoToggleButtonContent>
        <EvoToggleButtonTitle>Landscape prints</EvoToggleButtonTitle>
      </EvoToggleButtonContent>
    </EvoToggleButton>
  ),
};
