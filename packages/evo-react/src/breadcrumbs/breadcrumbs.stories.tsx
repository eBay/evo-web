import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoBreadcrumbs } from "./breadcrumbs";

const meta: Meta<typeof EvoBreadcrumbs> = {
  title: "navigation & disclosure/evo-breadcrumbs",
  component: EvoBreadcrumbs,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
A breadcrumb navigation component that renders a list of links or buttons, with the last item automatically marked as the current page via \`aria-current="location"\`.

## Usage

\`\`\`tsx
import { EvoBreadcrumbs } from "@evo-web/react/breadcrumbs";
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    a11yHeadingText: {
      control: "text",
      description:
        'Clipped heading text that labels the breadcrumb navigation region. English default is `"Page navigation"`.',
    },
    a11yHeadingTag: {
      control: "text",
      description:
        "HTML heading tag used for the clipped heading. Defaults to `h2`.",
    },
    items: {
      control: "object",
      description:
        "List of breadcrumb items. Each item renders as `<a>` when `href` is present, or `<button>` otherwise. Use `as` to render via a framework Link component.",
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

export const Default: Story = {};

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

export const SingleItem: Story = {
  args: {
    items: [{ content: "Smart Watch Bands" }],
  },
};
