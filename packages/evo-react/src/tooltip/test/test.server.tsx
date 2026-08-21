import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import { EvoTooltip } from "../tooltip";
import { EvoTooltipContent } from "../tooltip-content";
import { EvoTooltipHeading } from "../tooltip-heading";
import { EvoTooltipHost } from "../tooltip-host";
import type { TooltipPlacement } from "../types";

function DefaultTooltip({
  open,
  defaultOpen,
}: {
  open?: boolean;
  defaultOpen?: boolean;
}) {
  return (
    <EvoTooltip open={open} defaultOpen={defaultOpen}>
      <EvoTooltipHost as="button">Information</EvoTooltipHost>
      <EvoTooltipContent>Additional information</EvoTooltipContent>
    </EvoTooltip>
  );
}

describe("EvoTooltip SSR", () => {
  it("renders the default closed state", () => {
    expect(renderToString(<DefaultTooltip />)).toMatchSnapshot();
  });

  it("renders a controlled open state", () => {
    expect(renderToString(<DefaultTooltip open />)).toMatchSnapshot();
  });

  it("renders an uncontrolled initially open state", () => {
    expect(renderToString(<DefaultTooltip defaultOpen />)).toMatchSnapshot();
  });

  it.each<TooltipPlacement>([
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
  ])("renders with placement=%s", (placement) => {
    expect(
      renderToString(
        <EvoTooltip placement={placement}>
          <EvoTooltipHost as="a" href="https://www.ebay.com">
            View options
          </EvoTooltipHost>
          <EvoTooltipContent>Available options</EvoTooltipContent>
        </EvoTooltip>,
      ),
    ).toMatchSnapshot();
  });

  it("renders custom root, host, content, and heading attributes", () => {
    const html = renderToString(
      <EvoTooltip className="custom-tooltip" data-testid="tooltip-root">
        <EvoTooltipHost as="button" className="custom-host" type="button">
          Information
        </EvoTooltipHost>
        <EvoTooltipContent className="custom-content">
          <EvoTooltipHeading as="h2" className="custom-heading">
            Heading
          </EvoTooltipHeading>
          Content
        </EvoTooltipContent>
      </EvoTooltip>,
    );

    expect(html).toContain('class="tooltip custom-tooltip"');
    expect(html).toContain('data-testid="tooltip-root"');
    expect(html).toContain('class="tooltip__host custom-host"');
    expect(html).toContain('class="tooltip__overlay custom-content"');
    expect(html).toContain('class="tooltip__heading custom-heading"');
  });
});
