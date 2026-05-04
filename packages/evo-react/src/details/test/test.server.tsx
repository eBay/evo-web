import type { ComponentProps } from "react";
import { it, expect, describe } from "vitest";
import { renderToString } from "react-dom/server";
import { EvoDetails } from "../details";
import { EvoDetailsSummary } from "../details-summary";
import { EvoDetailsLabel } from "../details-label";
import { EvoDetailsLeading } from "../details-leading";
import { EvoDetailsContent } from "../details-content";
import { EvoIconLightbulb16 } from "../../icon/icons/lightbulb-16";
import type { Size, Alignment } from "../types";

function Details(props: Partial<ComponentProps<typeof EvoDetails>> = {}) {
  return (
    <EvoDetails {...props}>
      <EvoDetailsSummary>
        <EvoDetailsLabel>Show me the details!</EvoDetailsLabel>
      </EvoDetailsSummary>
      <EvoDetailsContent>Content</EvoDetailsContent>
    </EvoDetails>
  );
}

describe("EvoDetails SSR", () => {
  it("renders default state", () => {
    expect(renderToString(<Details />)).toMatchSnapshot();
  });

  it("renders with open=true", () => {
    expect(renderToString(<Details open />)).toMatchSnapshot();
  });

  it.each<Size>(["regular", "small"])(
    "renders with size=%s",
    (size) => {
      expect(renderToString(<Details size={size} />)).toMatchSnapshot();
    },
  );

  it.each<Alignment>(["regular", "center"])(
    "renders with alignment=%s",
    (alignment) => {
      expect(renderToString(<Details alignment={alignment} />)).toMatchSnapshot();
    },
  );

  it("renders with leading element", () => {
    expect(
      renderToString(
        <EvoDetails>
          <EvoDetailsSummary>
            <EvoDetailsLeading>
              <EvoIconLightbulb16 />
            </EvoDetailsLeading>
            <EvoDetailsLabel>Show me the details!</EvoDetailsLabel>
          </EvoDetailsSummary>
          <EvoDetailsContent>Content</EvoDetailsContent>
        </EvoDetails>,
      ),
    ).toMatchSnapshot();
  });

  it("renders with custom content element via `as`", () => {
    expect(
      renderToString(
        <EvoDetails>
          <EvoDetailsSummary>
            <EvoDetailsLabel>Details</EvoDetailsLabel>
          </EvoDetailsSummary>
          <EvoDetailsContent as="p">Paragraph content</EvoDetailsContent>
        </EvoDetails>,
      ),
    ).toMatchSnapshot();
  });
});
