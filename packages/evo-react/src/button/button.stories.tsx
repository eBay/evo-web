import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoButton } from "./button";
import { EvoButtonCell } from "./button-cell";
import type { AnchorButtonProps } from "./types";
import { ComponentProps } from "react";

// Use AnchorButtonProps so `as` (anchor-only prop) is a valid argType key.
const meta: Meta<AnchorButtonProps> = {
  title: "Buttons/EvoButton",
  component: EvoButton,
  subcomponents: { EvoButtonCell },
  argTypes: {
    priority: {
      control: "select",
    },
    variant: {
      control: "select",
    },
    size: {
      control: "select",
    },
    bodyState: {
      control: "select",
    },
    split: {
      control: "select",
    },
    fluid: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    partiallyDisabled: {
      control: "boolean",
    },
    transparent: {
      control: "boolean",
    },
    borderless: {
      control: "boolean",
    },
    fixedHeight: {
      control: "boolean",
    },
    truncate: {
      control: "boolean",
    },
    href: {
      control: "text",
    },
    as: {
      control: false,
    },
    children: {
      control: "text",
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

/** Start with a standard button for common actions such as saving or continuing. */
export const Default: Story = {
  args: {
    children: "Button",
  },
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

/**
 * When a client-side router handles navigation, use `as` to connect its link
 * component while keeping the button's appearance.
 *
 * ```tsx
 * <EvoButton
 *   href="/home"
 *   as={({ href, ...rest }) => <Link {...rest} to={href} />}
 * >
 *   Home
 * </EvoButton>
 * ```
 */
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
};

/** Use a button cell to align a label with an icon or secondary value. */
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
