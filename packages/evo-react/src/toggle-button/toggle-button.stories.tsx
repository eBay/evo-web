import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoIconSettings24 } from "../icon/icons/settings-24";
import { EvoToggleButton } from "./toggle-button";

const meta: Meta<typeof EvoToggleButton> = {
  title: "Buttons/EvoToggleButton",
  component: EvoToggleButton,
  argTypes: {
    layoutType: {
      control: "select",
      options: ["minimal", "list", "gallery"],
      table: { defaultValue: { summary: "minimal" } },
    },
    onToggle: { action: "onToggle", table: { category: "Events" } },
  },
  args: {
    defaultPressed: false,
    disabled: false,
    layoutType: "minimal",
  },
};

export default meta;
type Story = StoryObj<typeof EvoToggleButton>;

/** The pressed state changes without changing the button's visible label. */
export const Default: Story = {
  args: {
    title: "Show sold items",
    subtitle: "Include completed listings in search results",
  },
};

/** Icon media fits the list layout and remains decorative beside visible text. */
export const WithIcon: Story = {
  args: {
    title: "Buying preferences",
    subtitle: "Use my saved preferences",
    icon: <EvoIconSettings24 />,
    layoutType: "list",
  },
};

/** Image media can fill its frame while title text names the button. */
export const WithImage: Story = {
  args: {
    title: "Landscape prints",
    img: {
      src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-pic.jpg",
      alt: "",
      fillPlacement: "center",
    },
    layoutType: "gallery",
  },
};

/** Custom child content replaces the title and subtitle paragraphs. */
export const WithChildren: Story = {
  args: {
    children: <span>Show local pickup listings</span>,
  },
};
