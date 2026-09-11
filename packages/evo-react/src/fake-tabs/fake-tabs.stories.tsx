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
            Overview
          </EvoFakeTab>
          <EvoFakeTab id="shipping" href="/shipping">
            Shipping
          </EvoFakeTab>
          <EvoFakeTab id="returns" href="/returns">
            Returns
          </EvoFakeTab>
          <EvoFakeTab id="contact">Contact (disabled)</EvoFakeTab>
        </EvoFakeTabList>
        <EvoFakeTabPanel>
          <h3>Page content</h3>
          <p>
            In a server-rendered app this area contains the page content for the
            selected tab URL.
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

<EvoFakeTab id="overview" href="/overview" as={RouterTab}>Overview</EvoFakeTab>
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
            Overview
          </EvoFakeTab>
          <EvoFakeTab id="shipping" href="/shipping" as={CustomLink}>
            Shipping
          </EvoFakeTab>
        </EvoFakeTabList>
        <EvoFakeTabPanel>
          <p>Content rendered by the router.</p>
        </EvoFakeTabPanel>
      </EvoFakeTabs>
    );
  },
};
