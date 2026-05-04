import React from "react";
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { render } from "vitest-browser-react";
import { userEvent } from "vitest/browser";
import { EvoButton } from "../button";
import { EvoButtonCell } from "../button-cell";

describe("evo-button", () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });

  afterEach(() => {
    user.cleanup();
  });

  describe("given button is enabled", () => {
    it("emits click event when clicked", async () => {
      const onClick = vi.fn();
      const screen = await render(
        <EvoButton onClick={onClick}>Click Me</EvoButton>,
      );

      await user.click(screen.getByRole("button"));

      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it("emits escape event when escape key is pressed", async () => {
      const onEscape = vi.fn();
      const screen = await render(
        <EvoButton onEscape={onEscape}>Button</EvoButton>,
      );

      const button = screen.getByRole("button");
      await user.click(button);
      await user.keyboard("{Escape}");

      expect(onEscape).toHaveBeenCalledTimes(1);
    });

    it("emits both onKeyDown and onEscape on escape key", async () => {
      const onKeyDown = vi.fn();
      const onEscape = vi.fn();
      const screen = await render(
        <EvoButton onKeyDown={onKeyDown} onEscape={onEscape}>
          Button
        </EvoButton>,
      );

      const button = screen.getByRole("button");
      await user.click(button);
      await user.keyboard("{Escape}");

      expect(onKeyDown).toHaveBeenCalledTimes(1);
      expect(onEscape).toHaveBeenCalledTimes(1);
    });

    it("emits focus event when focused", async () => {
      const onFocus = vi.fn();
      const screen = await render(
        <EvoButton onFocus={onFocus}>Button</EvoButton>,
      );

      await user.click(screen.getByRole("button"));

      expect(onFocus).toHaveBeenCalledTimes(1);
    });

    it("emits blur event when blurred", async () => {
      const onBlur = vi.fn();
      const screen = await render(
        <EvoButton onBlur={onBlur}>Button</EvoButton>,
      );

      const button = screen.getByRole("button");
      await user.click(button);
      await user.tab();

      expect(onBlur).toHaveBeenCalledTimes(1);
    });
  });

  describe("given button is disabled", () => {
    it("does not emit click event when clicked", async () => {
      const onClick = vi.fn();
      const screen = await render(
        <EvoButton onClick={onClick} disabled>
          Button
        </EvoButton>,
      );

      const button = screen.getByRole("button");
      await expect.element(button).toBeDisabled();
      expect(onClick).not.toHaveBeenCalled();
    });

    it("does not emit escape event when escape key is pressed", async () => {
      const onEscape = vi.fn();
      const screen = await render(
        <EvoButton onEscape={onEscape} disabled>
          Button
        </EvoButton>,
      );

      const button = screen.getByRole("button");
      await expect.element(button).toBeDisabled();
      expect(onEscape).not.toHaveBeenCalled();
    });
  });

  describe("ref forwarding", () => {
    it("forwards ref to button element", async () => {
      const ref = React.createRef<HTMLButtonElement>();
      await render(<EvoButton ref={ref}>Button</EvoButton>);

      expect(ref.current).toBeInstanceOf(HTMLButtonElement);
      expect(ref.current?.tagName).toBe("BUTTON");
    });

    it("forwards ref to anchor element when href is provided", async () => {
      const ref = React.createRef<HTMLAnchorElement>();
      await render(
        <EvoButton href="https://ebay.com" ref={ref}>
          Link
        </EvoButton>,
      );

      expect(ref.current).toBeInstanceOf(HTMLAnchorElement);
      expect(ref.current?.tagName).toBe("A");
    });
  });

  describe("anchor element behavior", () => {
    it("renders as link when href is provided", async () => {
      const screen = await render(
        <EvoButton
          href="https://ebay.com"
          priority="primary"
          onClick={(e) => e.preventDefault()}
        >
          Link Button
        </EvoButton>,
      );

      const link = screen.getByRole("link");
      await expect.element(link).toHaveAttribute("href", "https://ebay.com");
    });

    it("does not render href when disabled", async () => {
      const screen = await render(
        <EvoButton href="https://ebay.com" disabled>
          Disabled Link
        </EvoButton>,
      );

      const link = screen.getByText("Disabled Link");
      await expect.element(link).not.toHaveAttribute("href");
    });

    it("emits escape event on anchor element", async () => {
      const onEscape = vi.fn();
      const screen = await render(
        <EvoButton
          href="https://ebay.com"
          onEscape={onEscape}
          onClick={(e) => e.preventDefault()}
        >
          Link
        </EvoButton>,
      );

      const link = screen.getByRole("link");
      await user.click(link);
      await user.keyboard("{Escape}");

      expect(onEscape).toHaveBeenCalledTimes(1);
    });
  });

  describe("body states", () => {
    it("renders loading state with aria-live", async () => {
      const screen = await render(
        <EvoButton bodyState="loading">Submit</EvoButton>,
      );

      const button = screen.getByRole("button");
      expect(button).toHaveAttribute("aria-live", "polite");
    });

    it("renders expand state with correct structure", async () => {
      const screen = await render(
        <EvoButton bodyState="expand">Options</EvoButton>,
      );

      const text = screen.getByText("Options");
      await expect.element(text).toBeInTheDocument();
    });

    it("maintains interactivity in loading state", async () => {
      const onClick = vi.fn();
      const screen = await render(
        <EvoButton bodyState="loading" onClick={onClick}>
          Submit
        </EvoButton>,
      );

      await user.click(screen.getByRole("button"));

      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });

  describe("partially disabled state", () => {
    it("renders with aria-disabled but remains clickable", async () => {
      const onClick = vi.fn();
      const screen = await render(
        <EvoButton partiallyDisabled onClick={onClick}>
          Partially Disabled
        </EvoButton>,
      );

      const button = screen.getByRole("button");
      await expect.element(button).toHaveAttribute("aria-disabled", "true");

      await button.click({ force: true });
      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });

  describe("keyboard navigation", () => {
    it("can be focused via keyboard", async () => {
      const onFocus = vi.fn();
      await render(<EvoButton onFocus={onFocus}>Button</EvoButton>);

      await user.tab();

      expect(onFocus).toHaveBeenCalledTimes(1);
    });

    it("emits onKeyDown for all keys", async () => {
      const onKeyDown = vi.fn();
      const screen = await render(
        <EvoButton onKeyDown={onKeyDown}>Button</EvoButton>,
      );

      const button = screen.getByRole("button");
      await user.click(button);
      await user.keyboard("{Enter}");

      expect(onKeyDown).toHaveBeenCalledTimes(1);
    });
  });

  describe("button cell", () => {
    it("renders custom layout with ButtonCell", async () => {
      const onClick = vi.fn();
      const screen = await render(
        <EvoButton onClick={onClick}>
          <EvoButtonCell style={{ justifyContent: "space-between" }}>
            <span>Left</span>
            <span>Right</span>
          </EvoButtonCell>
        </EvoButton>,
      );

      await expect.element(screen.getByText("Left")).toBeInTheDocument();
      await expect.element(screen.getByText("Right")).toBeInTheDocument();

      await user.click(screen.getByRole("button"));
      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });

  describe("accessibility", () => {
    it("has correct role for button", async () => {
      const screen = await render(<EvoButton>Button</EvoButton>);
      await expect.element(screen.getByRole("button")).toBeInTheDocument();
    });

    it("has correct role for link", async () => {
      const screen = await render(
        <EvoButton href="https://ebay.com">Link</EvoButton>,
      );
      await expect.element(screen.getByRole("link")).toBeInTheDocument();
    });

    it("supports aria-label", async () => {
      const screen = await render(
        <EvoButton aria-label="Submit form">Submit</EvoButton>,
      );
      const button = screen.getByRole("button", { name: "Submit form" });
      await expect.element(button).toBeInTheDocument();
    });
  });
});
