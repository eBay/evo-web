import { createRef } from "react";
import type { ComponentProps } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { render } from "vitest-browser-react";
import { userEvent } from "vitest/browser";
import { EvoCtaButton } from "../cta-button";

describe("evo-cta-button", () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });

  afterEach(() => {
    user.cleanup();
  });

  it("renders an anchor with CTA content and passes through attributes", async () => {
    const screen = await render(
      <EvoCtaButton
        href="https://www.ebay.com"
        className="custom-class"
        data-testid="cta"
      >
        Take Action Now!
      </EvoCtaButton>,
    );

    const link = screen.getByRole("link", { name: "Take Action Now!" });
    await expect.element(link).toHaveAttribute("href", "https://www.ebay.com");
    await expect.element(link).toHaveAttribute("data-testid", "cta");
    await expect.element(link).toHaveClass("cta-btn");
    await expect.element(link).toHaveClass("custom-class");
  });

  it("applies large, fluid, and truncated modifiers", async () => {
    const screen = await render(
      <EvoCtaButton href="/action" size="large" fluid truncated>
        Take Action Now!
      </EvoCtaButton>,
    );

    const link = screen.getByRole("link");
    await expect.element(link).toHaveClass("cta-btn--large");
    await expect.element(link).toHaveClass("cta-btn--fluid");
    await expect.element(link).toHaveClass("cta-btn--truncated");
  });

  it("emits click events", async () => {
    const onClick = vi.fn((event) => event.preventDefault());
    const screen = await render(
      <EvoCtaButton href="/action" onClick={onClick}>
        Take Action Now!
      </EvoCtaButton>,
    );

    await user.click(screen.getByRole("link"));

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("forwards refs to the anchor", async () => {
    const ref = createRef<HTMLAnchorElement>();

    await render(
      <EvoCtaButton href="/action" ref={ref}>
        Take Action Now!
      </EvoCtaButton>,
    );

    expect(ref.current).toBeInstanceOf(HTMLAnchorElement);
  });

  it("renders with a custom component when as is provided", async () => {
    function CustomLink({ href, children, ...rest }: ComponentProps<"a">) {
      return (
        <a data-custom-link="true" href={href} {...rest}>
          {children}
        </a>
      );
    }

    const screen = await render(
      <EvoCtaButton href="/action" as={CustomLink} fluid>
        Take Action Now!
      </EvoCtaButton>,
    );

    const link = screen.getByRole("link");
    await expect.element(link).toHaveAttribute("data-custom-link", "true");
    await expect.element(link).toHaveAttribute("href", "/action");
    await expect.element(link).toHaveClass("cta-btn--fluid");
  });
});
