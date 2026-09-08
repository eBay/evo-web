import React from "react";
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { render } from "vitest-browser-react";
import { userEvent } from "vitest/browser";
import { EvoIconButton } from "../icon-button";
import { EvoIconButtonBadge } from "../icon-button-badge";
import { EvoIconMenu20 } from "../../icon/icons/menu-20";
import { EvoIconAdd16 } from "../../icon/icons/add-16";

describe("evo-icon-button", () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });

  afterEach(() => {
    user.cleanup();
  });

  describe("given a button (no href)", () => {
    it("renders with role=button", async () => {
      const screen = await render(
        <EvoIconButton a11yText="Menu">
          <EvoIconMenu20 />
        </EvoIconButton>,
      );
      await expect.element(screen.getByRole("button")).toBeInTheDocument();
    });

    it("applies aria-label from a11yText", async () => {
      const screen = await render(
        <EvoIconButton a11yText="Open menu">
          <EvoIconMenu20 />
        </EvoIconButton>,
      );
      await expect
        .element(screen.getByRole("button", { name: "Open menu" }))
        .toBeInTheDocument();
    });

    it("emits click event when clicked", async () => {
      const onClick = vi.fn();
      const screen = await render(
        <EvoIconButton a11yText="Add" onClick={onClick}>
          <EvoIconAdd16 />
        </EvoIconButton>,
      );
      await user.click(screen.getByRole("button"));
      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it("emits focus event when focused", async () => {
      const onFocus = vi.fn();
      const screen = await render(
        <EvoIconButton a11yText="Add" onFocus={onFocus}>
          <EvoIconAdd16 />
        </EvoIconButton>,
      );
      await user.click(screen.getByRole("button"));
      expect(onFocus).toHaveBeenCalledTimes(1);
    });

    it("emits blur event when blurred", async () => {
      const onBlur = vi.fn();
      const screen = await render(
        <EvoIconButton a11yText="Add" onBlur={onBlur}>
          <EvoIconAdd16 />
        </EvoIconButton>,
      );
      const button = screen.getByRole("button");
      await user.click(button);
      await user.tab();
      expect(onBlur).toHaveBeenCalledTimes(1);
    });

    it("emits onEscape when Esc key is pressed", async () => {
      const onEscape = vi.fn();
      const screen = await render(
        <EvoIconButton a11yText="Add" onEscape={onEscape}>
          <EvoIconAdd16 />
        </EvoIconButton>,
      );
      const button = screen.getByRole("button");
      await user.click(button);
      await user.keyboard("{Escape}");
      expect(onEscape).toHaveBeenCalledTimes(1);
    });

    it("emits both onKeyDown and onEscape on Esc", async () => {
      const onKeyDown = vi.fn();
      const onEscape = vi.fn();
      const screen = await render(
        <EvoIconButton a11yText="Add" onKeyDown={onKeyDown} onEscape={onEscape}>
          <EvoIconAdd16 />
        </EvoIconButton>,
      );
      const button = screen.getByRole("button");
      await user.click(button);
      await user.keyboard("{Escape}");
      expect(onKeyDown).toHaveBeenCalledTimes(1);
      expect(onEscape).toHaveBeenCalledTimes(1);
    });

    it("does not emit click when disabled", async () => {
      const onClick = vi.fn();
      const screen = await render(
        <EvoIconButton a11yText="Add" onClick={onClick} disabled>
          <EvoIconAdd16 />
        </EvoIconButton>,
      );
      const button = screen.getByRole("button");
      await expect.element(button).toBeDisabled();
      await button.click({ force: true });
      expect(onClick).not.toHaveBeenCalled();
    });

    it("does not emit onEscape when disabled", async () => {
      const onEscape = vi.fn();
      const screen = await render(
        <EvoIconButton a11yText="Add" onEscape={onEscape} disabled>
          <EvoIconAdd16 />
        </EvoIconButton>,
      );
      const button = screen.getByRole("button");
      await expect.element(button).toBeDisabled();
      await button.click({ force: true });
      await button.element().focus();
      await user.keyboard("{Escape}");
      expect(onEscape).not.toHaveBeenCalled();
    });

    it("renders with aria-disabled when partiallyDisabled", async () => {
      const screen = await render(
        <EvoIconButton a11yText="Add" partiallyDisabled>
          <EvoIconAdd16 />
        </EvoIconButton>,
      );
      await expect
        .element(screen.getByRole("button"))
        .toHaveAttribute("aria-disabled", "true");
    });
  });

  describe("given an anchor (href provided)", () => {
    it("renders with role=link", async () => {
      const screen = await render(
        <EvoIconButton a11yText="Settings" href="https://ebay.com">
          <EvoIconAdd16 />
        </EvoIconButton>,
      );
      await expect.element(screen.getByRole("link")).toBeInTheDocument();
    });

    it("emits onEscape on Esc key press", async () => {
      const onEscape = vi.fn();
      const screen = await render(
        <EvoIconButton
          a11yText="Settings"
          href="https://ebay.com"
          onEscape={onEscape}
          onClick={(e) => e.preventDefault()}
        >
          <EvoIconAdd16 />
        </EvoIconButton>,
      );
      const link = screen.getByRole("link");
      await user.click(link);
      await user.keyboard("{Escape}");
      expect(onEscape).toHaveBeenCalledTimes(1);
    });

    it("does not render href when disabled", async () => {
      const { container } = await render(
        <EvoIconButton a11yText="Settings" href="https://ebay.com" disabled>
          <EvoIconAdd16 />
        </EvoIconButton>,
      );
      // The anchor renders without href when disabled
      const el = container.querySelector("[aria-label='Settings']");
      expect(el).not.toHaveAttribute("href");
    });
  });

  describe("as prop", () => {
    it("renders with a custom component when `as` is provided", async () => {
      type CustomLinkProps = React.ComponentProps<"a">;
      const CustomLink = ({ href, children, ...rest }: CustomLinkProps) => (
        <a data-custom-link="true" href={href} {...rest}>
          {children}
        </a>
      );

      const screen = await render(
        <EvoIconButton a11yText="Settings" href="/home" as={CustomLink}>
          <EvoIconAdd16 />
        </EvoIconButton>,
      );

      const link = screen.getByRole("link", { name: "Settings" });
      await expect.element(link).toHaveAttribute("data-custom-link", "true");
      await expect.element(link).toHaveAttribute("href", "/home");
    });

    it("applies icon-link class when `as` is provided with href", async () => {
      type CustomLinkProps = React.ComponentProps<"a">;
      const CustomLink = ({ children, ...props }: CustomLinkProps) => (
        <a {...props}>{children}</a>
      );

      const screen = await render(
        <EvoIconButton
          a11yText="Settings"
          href="/home"
          as={CustomLink}
          priority="primary"
        >
          <EvoIconAdd16 />
        </EvoIconButton>,
      );

      const link = screen.getByRole("link", { name: "Settings" });
      await expect.element(link).toHaveClass("icon-link");
      await expect.element(link).toHaveClass("icon-link--primary");
    });
  });

  describe("badge", () => {
    it("renders a badge when EvoIconButtonBadge is used", async () => {
      const screen = await render(
        <EvoIconButton a11yText="Cart">
          <EvoIconAdd16 />
          <EvoIconButtonBadge number={3} />
        </EvoIconButton>,
      );
      const badge = screen.getByText("3");
      await expect.element(badge).toBeInTheDocument();
    });
  });

  describe("ref forwarding", () => {
    it("forwards ref to button element", async () => {
      const ref = React.createRef<HTMLButtonElement>();
      await render(
        <EvoIconButton a11yText="Menu" ref={ref}>
          <EvoIconMenu20 />
        </EvoIconButton>,
      );
      expect(ref.current?.tagName).toBe("BUTTON");
    });

    it("forwards ref to anchor element when href is provided", async () => {
      const ref = React.createRef<HTMLAnchorElement>();
      await render(
        <EvoIconButton a11yText="Menu" href="https://ebay.com" ref={ref}>
          <EvoIconMenu20 />
        </EvoIconButton>,
      );
      expect(ref.current?.tagName).toBe("A");
    });
  });
});
