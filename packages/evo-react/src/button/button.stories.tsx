import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoButton } from "./button";
import { EvoButtonCell } from "./button-cell";
import { EvoIconDownload16 } from "../icon/icons/download-16";
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
    children: "Save changes",
  },
};

export default meta;

type Story = StoryObj<typeof EvoButton>;

/** A standard button handles an in-page action such as saving or continuing. */
export const Default: Story = {
  args: {
    children: "Save changes",
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
 * A client-side router can supply the link component through `as` while the
 * button appearance is preserved.
 *
 * ```tsx
 * <EvoButton
 *   href="/orders"
 *   as={({ href, ...rest }) => <Link {...rest} to={href} />}
 * >
 *   View orders
 * </EvoButton>
 * ```
 */
export const CustomLink: Story = {
  render: (args) => {
    return (
      <EvoButton
        {...(args as unknown as AnchorButtonProps)}
        href="/orders"
        as={({ href, ...rest }) => <Link {...rest} to={href} />}
        priority="primary"
      >
        View orders
      </EvoButton>
    );
  },
};

/** A button cell aligns a decorative icon with the button's action label. */
export const WithButtonCell: Story = {
  render: (args) => (
    <EvoButton {...args}>
      <EvoButtonCell>
        <EvoIconDownload16 />
        <span>Download invoice</span>
      </EvoButtonCell>
    </EvoButton>
  ),
};
