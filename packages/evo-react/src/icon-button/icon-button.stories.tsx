import type { Meta, StoryObj } from "@storybook/react-vite";
import { action } from "storybook/actions";
import type { ComponentProps } from "react";
import { EvoIconButton } from "./icon-button";
import { EvoIconButtonBadge } from "./icon-button-badge";
import type { AnchorIconButtonProps } from "./types";
import { EvoIconMenu20 } from "../icon/icons/menu-20";
import { EvoIconSettings16 } from "../icon/icons/settings-16";
import { EvoIconCart16 } from "../icon/icons/cart-16";
import { EvoIconChat16 } from "../icon/icons/chat-16";

// Use AnchorIconButtonProps so `href` is a valid argType key without overload conflicts.
const meta: Meta<AnchorIconButtonProps> = {
  title: "buttons/evo-icon-button",
  component: EvoIconButton,
  subcomponents: { EvoIconButtonBadge },
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
A circular button that contains an icon only. Renders as \`<button>\` or \`<a>\` based on the \`href\` prop.

## Usage

\`\`\`tsx
import { EvoIconButton } from "@evo-web/react/icon-button";
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    a11yText: {
      type: { name: "string", required: true },
      control: "text",
    },
    href: {
      description: "Renders as an anchor element when provided",
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
      description: "Triggered on click",
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
      description: "Triggered on keyboard focus",
      action: "onFocus",
      table: {
        category: "Events",
        defaultValue: { summary: "`(FocusEvent)`" },
      },
    },
    onBlur: {
      description: "Triggered on focus lost",
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

export const WithBadge: Story = {
  render: (args) => (
    <EvoIconButton {...args} a11yText="Cart">
      <EvoIconCart16 />
      <EvoIconButtonBadge number={3} />
    </EvoIconButton>
  ),
};

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

function Link({ to, ...rest }: ComponentProps<"a"> & { to?: string }) {
  return (
    <a
      data-custom-link="true"
      {...rest}
      href={to}
      onClick={(event) => {
        event.preventDefault();
        alert("client side navigation");
      }}
    />
  );
}

export const WithCustomLinkComponent: Story = {
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

export const WithChat: Story = {
  render: (args) => (
    <EvoIconButton
      {...(args as unknown as AnchorIconButtonProps)}
      href="https://ebay.com"
      a11yText="Chat"
      onClick={(e) => e.preventDefault()}
    >
      <EvoIconChat16 />
      <EvoIconButtonBadge number={99} />
    </EvoIconButton>
  ),
};
