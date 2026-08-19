import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import { EvoInfotip } from "../infotip";
import { EvoInfotipHeading } from "../infotip-heading";
import type { InfotipPlacement } from "../types";

function DefaultInfotip({
  open,
  defaultOpen,
}: {
  open?: boolean;
  defaultOpen?: boolean;
}) {
  return (
    <EvoInfotip
      open={open}
      defaultOpen={defaultOpen}
      a11yIconText="Important information"
      a11yCloseText="Dismiss infotip"
    >
      <EvoInfotipHeading>Important</EvoInfotipHeading>
      <p>Additional information</p>
    </EvoInfotip>
  );
}

describe("EvoInfotip SSR", () => {
  it("renders the default closed state", () => {
    expect(renderToString(<DefaultInfotip />)).toMatchSnapshot();
  });

  it("renders a controlled open state", () => {
    expect(renderToString(<DefaultInfotip open />)).toMatchSnapshot();
  });

  it("renders an uncontrolled initially open state", () => {
    expect(renderToString(<DefaultInfotip defaultOpen />)).toMatchSnapshot();
  });

  it.each<InfotipPlacement>([
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
        <EvoInfotip
          placement={placement}
          a11yIconText="Help"
          a11yCloseText="Dismiss"
        >
          <EvoInfotipHeading>Heading</EvoInfotipHeading>
          Content
        </EvoInfotip>,
      ),
    ).toMatchSnapshot();
  });

  it("renders a custom heading element and id", () => {
    const html = renderToString(
      <EvoInfotip open a11yIconText="Help" a11yCloseText="Dismiss">
        <EvoInfotipHeading as="h2" id="custom-heading">
          Heading
        </EvoInfotipHeading>
        Content
      </EvoInfotip>,
    );

    expect(html).toContain('<h2 id="custom-heading"');
  });

  it("passes native attributes and merges the root class", () => {
    const html = renderToString(
      <EvoInfotip
        className="custom-infotip"
        data-testid="infotip"
        a11yIconText="Help"
        a11yCloseText="Dismiss"
      >
        <EvoInfotipHeading>Heading</EvoInfotipHeading>
        Content
      </EvoInfotip>,
    );

    expect(html).toContain('class="infotip custom-infotip"');
    expect(html).toContain('data-testid="infotip"');
  });
});
