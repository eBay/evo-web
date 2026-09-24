import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoIconHeart16 } from "../icon/icons/heart-16";
import {
  EvoItemTile,
  EvoItemTileAction,
  EvoItemTileDescription,
  EvoItemTileSubtitle,
  EvoItemTileSupertitle,
  EvoItemTileTitle,
} from "./index";

const file = {
  name: "phone.jpg",
  type: "image/jpeg",
  src: "https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg",
};

const meta: Meta<typeof EvoItemTile> = {
  title: "Layout/EvoItemTile",
  component: EvoItemTile,
  subcomponents: {
    EvoItemTileAction,
    EvoItemTileSupertitle,
    EvoItemTileTitle,
    EvoItemTileSubtitle,
    EvoItemTileDescription,
  },
  argTypes: { layout: { control: "select", options: ["gallery", "list"] } },
  args: { layout: "gallery" },
};
export default meta;
type Story = StoryObj<typeof EvoItemTile>;

/** Listing media, status, titles, descriptions, and a named media action. */
export const Default: Story = {
  render: (args) => (
    <EvoItemTile
      {...args}
      file={file}
      href="/listing"
      action={
        <EvoItemTileAction a11yText="Save listing">
          <EvoIconHeart16 />
        </EvoItemTileAction>
      }
      supertitle={<EvoItemTileSupertitle>Time sensitive</EvoItemTileSupertitle>}
      title={<EvoItemTileTitle>Apple iPhone 11 Pro Max</EvoItemTileTitle>}
      subtitle={<EvoItemTileSubtitle>256GB Space Gray</EvoItemTileSubtitle>}
      description={
        <>
          <EvoItemTileDescription>$29.99</EvoItemTileDescription>
          <EvoItemTileDescription>Free shipping</EvoItemTileDescription>
        </>
      }
    />
  ),
};

/** List layout keeps the same DOM sections in a horizontal arrangement. */
export const List: Story = { ...Default, args: { layout: "list" } };

/** Tiles can show text without media. */
export const WithoutMedia: Story = {
  render: (args) => (
    <EvoItemTile
      {...args}
      href="/listing"
      title={<EvoItemTileTitle>Text-only listing</EvoItemTileTitle>}
      description={
        <EvoItemTileDescription>New condition</EvoItemTileDescription>
      }
    />
  ),
};

/** The preview announces a link that opens a new tab. */
export const ExternalLink: Story = {
  render: (args) => (
    <EvoItemTile
      {...args}
      file={file}
      href="https://www.ebay.com/"
      a11yExternalLinkText="opens in a new tab"
      title={<EvoItemTileTitle>View listing</EvoItemTileTitle>}
    />
  ),
};
