import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoFakeTab } from "./fake-tab";
import { EvoFakeTabList } from "./fake-tab-list";
import { EvoFakeTabPanel } from "./fake-tab-panel";
import { EvoFakeTabs } from "./fake-tabs";
const meta: Meta<typeof EvoFakeTabs> = {
  title: "Navigation & Disclosure/EvoFakeTabs",
  component: EvoFakeTabs,
  subcomponents: {
    EvoFakeTabList,
    EvoFakeTab,
    EvoFakeTabPanel,
  },

  argTypes: {
    selected: {
      control: "select",
      options: ["overview", "shipping", "returns", null],
    },
    size: {
      control: "select",
      options: ["regular", "large"],
      table: { defaultValue: { summary: "regular" } },
    },
    tabMatchesCurrentUrl: {
      control: "boolean",
      table: { defaultValue: { summary: "true" } },
    },
  },
  args: {
    selected: "overview",
    size: "regular",
    tabMatchesCurrentUrl: true,
  },
  render({ selected, ...args }) {
    return (
      <EvoFakeTabs selected={selected} {...args}>
        <EvoFakeTabList>
          <EvoFakeTab id="overview" href="/overview">
            About this item
          </EvoFakeTab>
          <EvoFakeTab id="shipping" href="/shipping">
            Shipping and returns
          </EvoFakeTab>
          <EvoFakeTab id="returns" href="/returns">
            Seller feedback
          </EvoFakeTab>
          <EvoFakeTab id="contact">Warranty unavailable</EvoFakeTab>
        </EvoFakeTabList>
        <EvoFakeTabPanel>
          <h3>About this item</h3>
          <p>
            Seller refurbished · Bluetooth connectivity · Charging cable
            included
          </p>
        </EvoFakeTabPanel>
      </EvoFakeTabs>
    );
  },
};

export default meta;
type Story = StoryObj<typeof EvoFakeTabs>;

/** The selected link reflects the current URL beside an unavailable tab. */
export const Default: Story = {};

/** Fake tab navigation adapts to a router link component through `as`. */
export const CustomLink: Story = {
  parameters: {
    docs: {
      description: {
        story: `
Pass a custom \`as\` component to swap the native \`<a>\` for a framework link.
The component receives \`href\` and all anchor-compatible props:

\`\`\`tsx
import { Link } from "react-router";

function RouterTab({ href, ...props }: React.ComponentProps<"a">) {
  return href === undefined ? null : <Link to={href} {...props} />;
}

<EvoFakeTab id="overview" href="/overview" as={RouterTab}>
  About this item
</EvoFakeTab>
\`\`\`
`,
      },
    },
  },
  render(args) {
    type LinkProps = React.ComponentProps<"a">;
    const CustomLink = ({ href, children, ...rest }: LinkProps) => (
      <a data-router-link="true" href={href} {...rest}>
        {children}
      </a>
    );

    return (
      <EvoFakeTabs {...args}>
        <EvoFakeTabList>
          <EvoFakeTab id="overview" href="/overview" as={CustomLink}>
            About this item
          </EvoFakeTab>
          <EvoFakeTab id="shipping" href="/shipping" as={CustomLink}>
            Shipping and returns
          </EvoFakeTab>
        </EvoFakeTabList>
        <EvoFakeTabPanel>
          <p>Product details loaded for the selected route.</p>
        </EvoFakeTabPanel>
      </EvoFakeTabs>
    );
  },
};
