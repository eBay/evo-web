import type { ComponentProps } from "react";
import { renderToString } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { EvoCtaButton } from "../cta-button";

describe("EvoCtaButton SSR", () => {
  it("renders defaults", () => {
    expect(
      renderToString(
        <EvoCtaButton href="https://www.ebay.com">
          Take Action Now!
        </EvoCtaButton>,
      ),
    ).toMatchSnapshot();
  });

  it("renders large, fluid, and truncated modifiers", () => {
    expect(
      renderToString(
        <EvoCtaButton href="/action" size="large" fluid truncated>
          Take Action Now!
        </EvoCtaButton>,
      ),
    ).toMatchSnapshot();
  });

  it("passes through anchor attributes and custom classes", () => {
    expect(
      renderToString(
        <EvoCtaButton
          href="/action"
          className="custom-class"
          data-testid="cta"
          aria-label="Take action"
        >
          Take Action Now!
        </EvoCtaButton>,
      ),
    ).toMatchSnapshot();
  });

  it("renders with a custom component", () => {
    function CustomLink({ href, children, ...rest }: ComponentProps<"a">) {
      return (
        <a data-custom-link="true" href={href} {...rest}>
          {children}
        </a>
      );
    }

    expect(
      renderToString(
        <EvoCtaButton href="/action" as={CustomLink}>
          Take Action Now!
        </EvoCtaButton>,
      ),
    ).toMatchSnapshot();
  });
});
