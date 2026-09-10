import type { ComponentProps } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoButton } from "../button/button";
import type { AnchorButtonProps } from "../button/types";
import { EvoIconButton } from "../icon-button";
import { EvoIconSettings24 } from "../icon/icons/settings-24";
import { EvoTooltip } from "./tooltip";
import { EvoTooltipContent } from "./tooltip-content";
import { EvoTooltipHeading } from "./tooltip-heading";
import { EvoTooltipHost } from "./tooltip-host";
import type { TooltipPlacement } from "./types";

const meta: Meta<typeof EvoTooltip> = {
  title: "notices & tips/evo-tooltip",
  component: EvoTooltip,
  subcomponents: {
    EvoTooltipHost,
    EvoTooltipContent,
    EvoTooltipHeading,
  },
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
A tooltip provides brief, supplementary information when its host is hovered or focused.

## Usage

\`\`\`tsx
import {
  EvoTooltip,
  EvoTooltipContent,
  EvoTooltipHost,
} from "@evo-web/react/tooltip";
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    open: {
      control: "boolean",
    },
    defaultOpen: {
      control: "boolean",
      table: { defaultValue: { summary: "false" } },
    },
    onOpenChange: {
      action: "onOpenChange",
      table: { category: "Events" },
    },
    placement: {
      control: "select",
      options: [
        "top",
        "top-start",
        "top-end",
        "right",
        "right-start",
        "right-end",
        "bottom",
        "bottom-start",
        "bottom-end",
        "left",
        "left-start",
        "left-end",
      ],
      table: { defaultValue: { summary: "bottom" } },
    },
    offset: {
      control: "number",
      table: { defaultValue: { summary: "8" } },
    },
    flip: {
      control: "boolean",
      table: { defaultValue: { summary: "true" } },
    },
    shift: {
      control: "boolean",
      table: { defaultValue: { summary: "true" } },
    },
    inline: {
      control: "boolean",
      table: { defaultValue: { summary: "true" } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof EvoTooltip>;

export const Default: Story = {
  render: (args) => (
    <EvoTooltip {...args}>
      <EvoTooltipHost>View options</EvoTooltipHost>
      <EvoTooltipContent>
        Use Access Key &apos;S&apos; to display settings.
      </EvoTooltipContent>
    </EvoTooltip>
  ),
};

export const IconButtonHost: Story = {
  render: (args) => (
    <EvoTooltip {...args} placement="right">
      <EvoTooltipHost as={EvoIconButton} a11yText="Settings">
        <EvoIconSettings24 />
      </EvoTooltipHost>
      <EvoTooltipContent>Configure your settings</EvoTooltipContent>
    </EvoTooltip>
  ),
};

const placements: TooltipPlacement[] = [
  "top-start",
  "top",
  "top-end",
  "right-start",
  "right",
  "right-end",
  "bottom-start",
  "bottom",
  "bottom-end",
  "left-start",
  "left",
  "left-end",
];

export const Placements: Story = {
  render: (args) => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "4rem",
        justifyItems: "center",
      }}
    >
      {placements.map((placement) => (
        <EvoTooltip
          {...args}
          key={placement}
          placement={placement}
          flip={false}
        >
          <EvoTooltipHost>{placement}</EvoTooltipHost>
          <EvoTooltipContent>
            <span style={{ display: "block" }}>
              Tooltip content for <code>{placement}</code>
            </span>
            <span style={{ display: "block" }}>
              Here we explicitly set <code>flip=false</code> for demonstration.
              By default, the tooltip will not extend outside the window.
            </span>
          </EvoTooltipContent>
        </EvoTooltip>
      ))}
    </div>
  ),
};

type CustomLinkProps = ComponentProps<"a"> & {
  to: string;
};

function CustomLink({ to, ref, children, ...rest }: CustomLinkProps) {
  return (
    <a {...rest} ref={ref} href={to} data-custom-link="true">
      {children}
    </a>
  );
}

type CustomEvoButtonProps = Omit<AnchorButtonProps, "as">;

function CustomEvoButton({ ref, href, ...rest }: CustomEvoButtonProps) {
  return (
    <EvoButton
      {...rest}
      ref={ref}
      href={href}
      as={({ href: destination, ...linkProps }) => (
        <CustomLink {...linkProps} to={destination ?? ""} />
      )}
    />
  );
}

export const CustomHost: Story = {
  render: (args) => (
    <EvoTooltip {...args}>
      <EvoTooltipHost
        as={CustomEvoButton}
        href="https://www.ebay.com"
        priority="secondary"
      >
        View options
      </EvoTooltipHost>
      <EvoTooltipContent>
        <EvoTooltipHeading>Available options</EvoTooltipHeading>
        Use this link to view available options.
      </EvoTooltipContent>
    </EvoTooltip>
  ),
};
