import { useState } from "react";
import type { ComponentProps } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { userEvent } from "vitest/browser";
import { render } from "vitest-browser-react";
import { EvoButton } from "../../button/button";
import type { AnchorButtonProps } from "../../button/types";
import { EvoInput } from "../../input";
import { EvoTooltip } from "../tooltip";
import { EvoTooltipContent } from "../tooltip-content";
import { EvoTooltipHeading } from "../tooltip-heading";
import { EvoTooltipHost } from "../tooltip-host";

function DefaultTooltip() {
  return (
    <EvoTooltip>
      <EvoTooltipHost>Information</EvoTooltipHost>
      <EvoTooltipContent>Additional information</EvoTooltipContent>
    </EvoTooltip>
  );
}

describe("evo-tooltip", () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });

  afterEach(() => {
    user.cleanup();
  });

  it("renders an accessible host and tooltip relationship", async () => {
    const screen = await render(<DefaultTooltip />);
    const host = screen.getByRole("button", { name: "Information" });

    await expect.element(host).toHaveClass("tooltip__host");
    await expect.element(host).toHaveAttribute("type", "button");

    await user.tab();
    await expect.element(host).toHaveAttribute("aria-expanded", "true");

    const tooltip = screen.getByRole("tooltip");
    await expect.element(tooltip).toHaveTextContent("Additional information");
    await expect
      .element(host)
      .toHaveAttribute("aria-describedby", tooltip.element().id);
    expect(host.element().closest(".tooltip")).not.toBeNull();
  });

  it("opens on hover and closes after the hover delay", async () => {
    const screen = await render(<DefaultTooltip />);
    const host = screen.getByRole("button", { name: "Information" });

    await user.hover(host);
    await expect.element(host).toHaveAttribute("aria-expanded", "true");

    await user.unhover(host);
    await vi.waitFor(async () => {
      await expect.element(host).toHaveAttribute("aria-expanded", "false");
    });
  });

  it("opens on focus and closes when focus leaves", async () => {
    const screen = await render(<DefaultTooltip />);
    const host = screen.getByRole("button", { name: "Information" });

    await user.tab();
    await expect.element(host).toHaveFocus();
    await expect.element(host).toHaveAttribute("aria-expanded", "true");

    await user.tab();
    await expect.element(host).not.toHaveFocus();
    await expect.element(host).toHaveAttribute("aria-expanded", "false");
  });

  it("opens when a nested input host receives focus", async () => {
    const screen = await render(
      <EvoTooltip>
        <EvoTooltipHost
          as={EvoInput}
          aria-label="Email address"
          placeholder="Email address"
        />
        <EvoTooltipContent>
          Please choose the email address you use the most.
        </EvoTooltipContent>
      </EvoTooltip>,
    );
    const input = screen.getByPlaceholder("Email address");
    const tooltip =
      screen.container.querySelector<HTMLElement>('[role="tooltip"]')!;

    input.element().focus();

    await expect.element(input).toHaveFocus();
    await expect.element(input).toHaveAttribute("aria-expanded", "true");
    expect(getComputedStyle(tooltip).display).not.toBe("none");
  });

  it("closes a hover-opened tooltip when Escape is pressed", async () => {
    const screen = await render(<DefaultTooltip />);
    const host = screen.getByRole("button", { name: "Information" });

    await user.hover(host);
    await expect.element(host).toHaveAttribute("aria-expanded", "true");

    await user.keyboard("{Escape}");
    await expect.element(host).toHaveAttribute("aria-expanded", "false");
  });

  it("closes a focus-opened tooltip when Escape is pressed", async () => {
    const screen = await render(<DefaultTooltip />);
    const host = screen.getByRole("button", { name: "Information" });

    await user.tab();
    await expect.element(host).toHaveAttribute("aria-expanded", "true");

    await user.keyboard("{Escape}");
    await expect.element(host).toHaveAttribute("aria-expanded", "false");
  });

  it("supports a controlled open state", async () => {
    const onOpenChange = vi.fn();

    function ControlledTooltip() {
      const [open, setOpen] = useState(false);
      return (
        <EvoTooltip
          open={open}
          onOpenChange={(nextOpen) => {
            onOpenChange(nextOpen);
            setOpen(nextOpen);
          }}
        >
          <EvoTooltipHost>Information</EvoTooltipHost>
          <EvoTooltipContent>Additional information</EvoTooltipContent>
        </EvoTooltip>
      );
    }

    const screen = await render(<ControlledTooltip />);
    const host = screen.getByRole("button", { name: "Information" });

    await user.tab();
    await expect.element(host).toHaveAttribute("aria-expanded", "true");
    expect(onOpenChange).toHaveBeenLastCalledWith(true);

    await user.tab();
    await expect.element(host).toHaveAttribute("aria-expanded", "false");
    expect(onOpenChange).toHaveBeenLastCalledWith(false);
  });

  it("supports a custom host that configures its own as prop", async () => {
    type CustomLinkProps = ComponentProps<"a"> & { to: string };

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

    const screen = await render(
      <EvoTooltip>
        <EvoTooltipHost
          as={CustomEvoButton}
          href="https://www.ebay.com"
          priority="secondary"
        >
          View options
        </EvoTooltipHost>
        <EvoTooltipContent>Available options</EvoTooltipContent>
      </EvoTooltip>,
    );
    const host = screen.getByRole("link", { name: "View options" });

    await expect.element(host).toHaveAttribute("data-custom-link", "true");
    await expect.element(host).toHaveClass("fake-btn");
    await expect.element(host).toHaveClass("tooltip__host");
  });

  it("renders a custom heading element", async () => {
    const screen = await render(
      <EvoTooltip defaultOpen>
        <EvoTooltipHost>Information</EvoTooltipHost>
        <EvoTooltipContent>
          <EvoTooltipHeading as="h2">Shipping information</EvoTooltipHeading>
          Ships tomorrow
        </EvoTooltipContent>
      </EvoTooltip>,
    );

    await expect
      .element(screen.getByRole("heading", { level: 2 }))
      .toHaveClass("tooltip__heading");
  });
});
