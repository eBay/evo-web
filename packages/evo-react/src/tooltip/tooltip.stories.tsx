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
  title: "Notices & Tips/EvoTooltip",
  component: EvoTooltip,
  subcomponents: {
    EvoTooltipHost,
    EvoTooltipContent,
    EvoTooltipHeading,
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

/** The default tooltip opens when its button is hovered or focused. */
export const Default: Story = {
  render: (args) => (
    <EvoTooltip {...args}>
      <EvoTooltipHost>Estimated delivery</EvoTooltipHost>
      <EvoTooltipContent>Get it within 3–5 business days.</EvoTooltipContent>
    </EvoTooltip>
  ),
};

/** An icon button can provide the tooltip host. */
export const IconButtonHost: Story = {
  render: (args) => (
    <EvoTooltip {...args} placement="right">
      <EvoTooltipHost as={EvoIconButton} a11yText="Seller settings">
        <EvoIconSettings24 />
      </EvoTooltipHost>
      <EvoTooltipContent>
        Manage payment, shipping, and return preferences.
      </EvoTooltipContent>
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

/** Placement options position the tooltip around its host. */
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
              Estimated delivery: 3–5 business days.
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

/**
 * A custom router-aware button can provide the tooltip host.
 *
 * The custom host must forward its `ref` and DOM attributes so the tooltip
 * relationship reaches the rendered element.
 *
 * ```tsx
 * import { Link } from "react-router";
 * import {
 *   EvoTooltip,
 *   EvoTooltipContent,
 *   EvoTooltipHost,
 * } from "@evo-web/react/tooltip";
 * import {
 *   EvoButton,
 *   type AnchorButtonProps,
 * } from "@evo-web/react/button";
 *
 * type RouterButtonProps = Omit<AnchorButtonProps, "as">;
 *
 * function RouterButton({
 *   ref,
 *   href,
 *   ...rest
 * }: RouterButtonProps) {
 *   return (
 *     <EvoButton
 *       {...rest}
 *       ref={ref}
 *       href={href}
 *       as={({ href, ...linkProps }) => (
 *         <Link {...linkProps} to={href ?? ""} />
 *       )}
 *     />
 *   );
 * }
 *
 * <EvoTooltip>
 *   <EvoTooltipHost
 *     as={RouterButton}
 *     href="/delivery"
 *     priority="secondary"
 *   >
 *     View delivery details
 *   </EvoTooltipHost>
 *   <EvoTooltipContent>
 *     Delivery details and timing.
 *   </EvoTooltipContent>
 * </EvoTooltip>
 * ```
 */
export const CustomHost: Story = {
  render: (args) => (
    <EvoTooltip {...args}>
      <EvoTooltipHost
        as={CustomEvoButton}
        href="/delivery"
        priority="secondary"
      >
        View delivery details
      </EvoTooltipHost>
      <EvoTooltipContent>
        <EvoTooltipHeading>Delivery options</EvoTooltipHeading>
        Compare standard and expedited shipping.
      </EvoTooltipContent>
    </EvoTooltip>
  ),
};
