import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoItemTileDescription } from "../item-tile/item-tile-description";
import { EvoItemTileTitle } from "../item-tile/item-tile-title";
import { EvoItemTileGroup } from "./item-tile-group";

const items = Array.from({ length: 5 }, (_, index) => ({
  id: `listing-${index + 1}`,
  href: `/listing/${index + 1}`,
  file: {
    name: `photo-${index + 1}.jpg`,
    type: "image/jpeg",
    src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg",
  },
  title: <EvoItemTileTitle>Listing {index + 1}</EvoItemTileTitle>,
  description: <EvoItemTileDescription>$29.99</EvoItemTileDescription>,
}));

const meta: Meta<typeof EvoItemTileGroup> = {
  title: "Layout/EvoItemTileGroup",
  component: EvoItemTileGroup,
  argTypes: { layout: { control: "select", options: ["gallery", "list"] } },
  args: { items, layout: "gallery" },
};
export default meta;
type Story = StoryObj<typeof EvoItemTileGroup>;

/** Tiles render in a responsive grid of semantic list items. */
export const Default: Story = {};

/** List view shares the layout across every tile. */
export const List: Story = { args: { layout: "list" } };
