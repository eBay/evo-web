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
  title: "building blocks/evo-fake-menu",
  component: EvoFakeMenu,
  subcomponents: {
    EvoFakeMenuItems,
    EvoFakeMenuItem,
    EvoFakeMenuItemBadge,
    EvoFakeMenuSeparator,
  },
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
A compound navigation menu containing links, buttons, badges, and separators.

## Usage

\`\`\`tsx
import {
  EvoFakeMenu,
  EvoFakeMenuItem,
  EvoFakeMenuItems,
} from "@evo-web/react/fake-menu";
\`\`\`
        `,
      },
    },
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
          <EvoFakeMenuItem href="#" onClick={(event) => event.preventDefault()}>
            Messages
            <EvoFakeMenuItemBadge number={5} a11yText="5 unread messages" />
          </EvoFakeMenuItem>
          <EvoFakeMenuItem
            href="#"
            current
            onClick={(event) => event.preventDefault()}
          >
            Current page
          </EvoFakeMenuItem>
          <EvoFakeMenuSeparator />
          <EvoFakeMenuItem type="button">Button item</EvoFakeMenuItem>
          <EvoFakeMenuItem href="#" disabled>
            Disabled link
          </EvoFakeMenuItem>
        </EvoFakeMenuItems>
      </EvoFakeMenu>
    );
  },
};

export default meta;
type Story = StoryObj<typeof EvoFakeMenu>;

export const Default: Story = {};

export const WithCustomLinkComponent: Story = {
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
Pass a custom component through the \`as\` prop to replace the native anchor. This example adapts React Router's \`Link\`, which uses \`to\` instead of \`href\`.

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
