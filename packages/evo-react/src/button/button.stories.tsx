import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoButton } from "./button";
import { EvoButtonCell } from "./button-cell";
import type { AnchorButtonProps } from "./types";
import { ComponentProps } from "react";

// Use AnchorButtonProps so `as` (anchor-only prop) is a valid argType key.
const meta: Meta<AnchorButtonProps> = {
  title: "buttons/evo-button",
  component: EvoButton,
  subcomponents: { EvoButtonCell },
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
A flexible button component that can render as either a \`<button>\` or \`<a>\` element based on the \`href\` prop.

## Usage

\`\`\`tsx
import { EvoButton } from "@evo-web/react/button";
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    priority: {
      control: "select",
      options: ["primary", "secondary", "tertiary", "none"],
      description: "Button priority level",
    },
    variant: {
      control: "select",
      options: ["standard", "destructive", "form"],
      description: "Button variant style",
    },
    size: {
      control: "select",
      options: ["small", "large"],
      description: "Button size",
    },
    bodyState: {
      control: "select",
      options: ["loading", "expand", "reset", "none"],
      description: "Button body state",
    },
    split: {
      control: "select",
      options: ["start", "end"],
      description: "Split button position",
    },
    fluid: {
      control: "boolean",
      description: "Full width button",
    },
    disabled: {
      control: "boolean",
      description: "Disabled state",
    },
    partiallyDisabled: {
      control: "boolean",
      description: "Partially disabled (aria-disabled)",
    },
    transparent: {
      control: "boolean",
      description: "Transparent background",
    },
    borderless: {
      control: "boolean",
      description: "No border",
    },
    fixedHeight: {
      control: "boolean",
      description: "Fixed height",
    },
    truncate: {
      control: "boolean",
      description: "Truncate text with ellipsis",
    },
    href: {
      control: "text",
      description: "Link URL (renders as anchor)",
    },
    as: {
      control: false,
      description:
        "Override the anchor element with a custom component (e.g. React Router's `Link`). Only applies when `href` is provided.",
    },
    children: {
      control: "text",
      description: "Button text content",
    },
  },
  args: {
    priority: "primary",
    variant: "standard",
    children: "Button",
  },
};

export default meta;

type Story = StoryObj<typeof EvoButton>;

export const Default: Story = {
  args: {
    children: "Button",
  },
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
  render: (args) => {
    return (
      <EvoButton
        {...(args as unknown as AnchorButtonProps)}
        href="/home"
        as={({ href, ...rest }) => <Link {...rest} to={href} />}
        priority="primary"
      >
        Click me
      </EvoButton>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `
Pass a custom component via the \`as\` prop to replace the native \`<a>\`. Only applies when \`href\` is set. Here we simulate React Router\'s \`<Link to="/home">\`

\`\`\`tsx
import { Link, href } from "react-router";

<EvoButton
  href={href("/home")}
  as=(({ href, ...rest }) => <Link {...rest} to={href} />)
\`\`\`
`,
      },
    },
  },
};

export const WithButtonCell: Story = {
  render: (args) => (
    <EvoButton {...args}>
      <EvoButtonCell style={{ justifyContent: "space-between" }}>
        <span>Select</span>
        <span>Any</span>
      </EvoButtonCell>
    </EvoButton>
  ),
};
