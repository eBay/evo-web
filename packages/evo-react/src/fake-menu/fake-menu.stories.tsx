import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ComponentProps } from "react";
import { EvoFakeMenu } from "./fake-menu";
import { EvoFakeMenuItem } from "./fake-menu-item";
import { EvoFakeMenuItemBadge } from "./fake-menu-item-badge";
import { EvoFakeMenuItems } from "./fake-menu-items";
import { EvoFakeMenuSeparator } from "./fake-menu-separator";

function Link({
  to,
  children,
  ...rest
}: ComponentProps<"a"> & { to?: string }) {
  return (
    <a
      data-custom-link="true"
      {...rest}
      href={to}
      onClick={(event) => event.preventDefault()}
    >
      {children}
    </a>
  );
}

const meta: Meta<typeof EvoFakeMenu> = {
  title: "Building Blocks/EvoFakeMenu",
  component: EvoFakeMenu,
  subcomponents: {
    EvoFakeMenuItems,
    EvoFakeMenuItem,
    EvoFakeMenuItemBadge,
    EvoFakeMenuSeparator,
  },

  argTypes: {
    classPrefix: {
      control: "text",
    },
    reverse: {
      control: "boolean",
    },
    fixed: {
      control: "boolean",
    },
    fixWidth: {
      control: "boolean",
    },
  },
  args: {
    reverse: false,
    fixed: false,
    fixWidth: false,
  },
  render(args) {
    return (
      <EvoFakeMenu {...args}>
        <EvoFakeMenuItems>
          <EvoFakeMenuItem
            href="/messages"
            onClick={(event) => event.preventDefault()}
          >
            Messages
            <EvoFakeMenuItemBadge number={5} a11yText="5 unread messages" />
          </EvoFakeMenuItem>
          <EvoFakeMenuItem
            href="/purchase-history"
            current
            onClick={(event) => event.preventDefault()}
          >
            Purchase history
          </EvoFakeMenuItem>
          <EvoFakeMenuSeparator />
          <EvoFakeMenuItem type="button">Sign out</EvoFakeMenuItem>
          <EvoFakeMenuItem href="/seller-hub" disabled>
            Seller Hub unavailable
          </EvoFakeMenuItem>
        </EvoFakeMenuItems>
      </EvoFakeMenu>
    );
  },
};

export default meta;
type Story = StoryObj<typeof EvoFakeMenu>;

/** Navigation items include current, disabled, and grouped entries. */
export const Default: Story = {};

/** A fake menu link adapts to a client-side router component. */
export const CustomLink: Story = {
  render: (args) => (
    <EvoFakeMenu {...args}>
      <EvoFakeMenuItems>
        <EvoFakeMenuItem
          href="/account"
          as={({ href = "", ...rest }) => <Link {...rest} to={href} />}
        >
          Account
        </EvoFakeMenuItem>
      </EvoFakeMenuItems>
    </EvoFakeMenu>
  ),
  parameters: {
    docs: {
      description: {
        story: `
A custom component through the \`as\` prop can replace the native anchor.
React Router's \`Link\` uses \`to\` instead of \`href\`.

\`\`\`tsx
import { Link } from "react-router";

<EvoFakeMenuItem
  href="/account"
  as={({ href = "", ...rest }) => <Link {...rest} to={href} />}
>
  Account
</EvoFakeMenuItem>
\`\`\`
`,
      },
    },
  },
};
