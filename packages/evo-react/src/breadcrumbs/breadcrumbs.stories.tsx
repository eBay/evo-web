import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoBreadcrumbs } from "./breadcrumbs";

const meta: Meta<typeof EvoBreadcrumbs> = {
  title: "Navigation & Disclosure/EvoBreadcrumbs",
  component: EvoBreadcrumbs,

  argTypes: {
    a11yHeadingText: {
      control: "text",
    },
    a11yHeadingTag: {
      control: "text",
    },
    items: {
      control: "object",
    },
  },
  args: {
    a11yHeadingText: "Page navigation",
    items: [
      { href: "https://www.ebay.com/", content: "eBay" },
      {
        href: "https://www.ebay.com/rpp/cell-phone-pda",
        content: "Cell Phones, Smart Watches & Accessories",
      },
      {
        href: "https://www.ebay.com/b/Smart-Watch-Accessories/182064/bn_16565905",
        content: "Smart Watch Accessories",
      },
      { content: "Smart Watch Bands" },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof EvoBreadcrumbs>;

/** A mixed path contains ancestor links and the current location. */
export const Default: Story = {};

/** Links throughout the path lead to other locations. */
export const AllLinks: Story = {
  args: {
    a11yHeadingText: "Custom page navigation",
    a11yHeadingTag: "h3",
    items: [
      { href: "https://www.ebay.com/", content: "eBay" },
      {
        href: "https://www.ebay.com/rpp/cell-phone-pda",
        content: "Cell Phones, Smart Watches & Accessories",
      },
      {
        href: "https://www.ebay.com/b/Smart-Watch-Accessories/182064/bn_16565905",
        content: "Smart Watch Accessories",
      },
      {
        href: "https://www.ebay.com/b/Smart-Watch-Bands/182068/bn_16565906",
        content: "Smart Watch Bands",
      },
    ],
  },
};

/** Button items keep breadcrumb selection in the current view. */
export const AllButtons: Story = {
  args: {
    a11yHeadingText: "Custom page navigation",
    a11yHeadingTag: "h3",
    items: [
      { content: "eBay" },
      { content: "Cell Phones, Smart Watches & Accessories" },
      { content: "Smart Watch Accessories" },
      { content: "Smart Watch Bands" },
    ],
  },
};

/** A shallow hierarchy contains only the current location. */
export const SingleItem: Story = {
  args: {
    items: [{ content: "Smart Watch Bands" }],
  },
};
