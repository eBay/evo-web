import type { Meta, StoryObj } from "@storybook/react-vite";
import { action } from "storybook/actions";
import type { ComponentProps } from "react";
import { EvoIconButton } from "./icon-button";
import { EvoIconButtonBadge } from "./icon-button-badge";
import type { AnchorIconButtonProps } from "./types";
import { EvoIconMenu20 } from "../icon/icons/menu-20";
import { EvoIconSettings16 } from "../icon/icons/settings-16";
import { EvoIconCart16 } from "../icon/icons/cart-16";

// Use AnchorIconButtonProps so `href` is a valid argType key without overload conflicts.
const meta: Meta<AnchorIconButtonProps> = {
  title: "Buttons/EvoIconButton",
  component: EvoIconButton,
  subcomponents: { EvoIconButtonBadge },

  argTypes: {
    a11yText: {
      type: { name: "string", required: true },
      control: "text",
    },
    href: {
      control: "text",
    },
    as: {
      control: false,
    },
    priority: {
      options: ["primary", "secondary", "tertiary", "none"],
      control: { type: "select" },
    },
    size: {
      options: ["large", "small"],
      control: { type: "select" },
    },
    transparent: {
      control: "boolean",
    },
    partiallyDisabled: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    onClick: {
      action: "onClick",
      table: {
        category: "Events",
        defaultValue: { summary: "`(MouseEvent)`" },
      },
    },
    onEscape: {
      action: "onEscape",
      table: {
        category: "Events",
        defaultValue: { summary: "`(KeyboardEvent)`" },
      },
    },
    onFocus: {
      action: "onFocus",
      table: {
        category: "Events",
        defaultValue: { summary: "`(FocusEvent)`" },
      },
    },
    onBlur: {
      action: "onBlur",
      table: {
        category: "Events",
        defaultValue: { summary: "`(FocusEvent)`" },
      },
    },
  },
  args: {
    a11yText: "Menu",
    priority: "none",
  },
};

export default meta;
type Story = StoryObj<typeof EvoIconButton>; // keep component-level Story type for render inference

/** An icon-only action uses a clear, familiar icon meaning. */
export const Default: Story = {
  render: (args) => (
    <EvoIconButton
      {...args}
      onClick={action("onClick")}
      onFocus={action("onFocus")}
      onBlur={action("onBlur")}
      onEscape={action("onEscape")}
    >
      <EvoIconMenu20 />
    </EvoIconButton>
  ),
};

/** A count badge identifies pending items or notifications. */
export const WithBadge: Story = {
  render: (args) => (
    <EvoIconButton {...args} a11yText="Cart">
      <EvoIconCart16 />
      <EvoIconButtonBadge number={3} />
    </EvoIconButton>
  ),
};

/** An anchor icon button navigates to another location. */
export const AsLink: Story = {
  render: (args) => (
    <EvoIconButton
      {...(args as unknown as AnchorIconButtonProps)}
      href="https://ebay.com"
      a11yText="Settings"
      onClick={(e) => e.preventDefault()}
    >
      <EvoIconSettings16 />
    </EvoIconButton>
  ),
};

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
      onClick={(event) => {
        event.preventDefault();
        alert("client side navigation");
      }}
    >
      {children}
    </a>
  );
}

/** The `as` prop connects navigation to a client-side link component. */
export const CustomLink: Story = {
  render: (args) => (
    <EvoIconButton
      {...(args as unknown as AnchorIconButtonProps)}
      href="/home"
      a11yText="Settings"
      as={({ href, ...rest }) => <Link {...rest} to={href} />}
    >
      <EvoIconSettings16 />
    </EvoIconButton>
  ),
  parameters: {
    docs: {
      description: {
        story: `
Pass a custom component via the \`as\` prop to replace the native \`<a>\`. Only applies when \`href\` is set.

\`\`\`tsx
import { Link, href } from "react-router";

<EvoIconButton
  href={href("/home")}
  a11yText="Settings"
  as={({ href, ...rest }) => <Link {...rest} to={href} />}
>
  <EvoIconSettings16 />
</EvoIconButton>
\`\`\`
`,
      },
    },
  },
};
