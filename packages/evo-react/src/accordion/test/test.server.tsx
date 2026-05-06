import { it, expect, describe } from "vitest";
import { renderToString } from "react-dom/server";
import { EvoAccordion } from "../accordion";
import { EvoAccordionItem } from "../accordion-item";
import {
  EvoAccordionContent,
  EvoAccordionLabel,
  EvoAccordionLeading,
  EvoAccordionSummary,
} from "../index";
import { EvoIconLightbulb16 } from "../../icon/icons/lightbulb-16";
import type { Size, SingleOpenValue } from "../types";

function TestAccordion({
  size,
  open,
  defaultOpen,
  a11yText,
  className,
}: {
  size?: Size;
  open?: SingleOpenValue;
  defaultOpen?: SingleOpenValue;
  a11yText?: string;
  className?: string;
}) {
  const items = (
    <>
      <EvoAccordionItem id="one">
        <EvoAccordionSummary>
          <EvoAccordionLabel>Item 1</EvoAccordionLabel>
        </EvoAccordionSummary>
        <EvoAccordionContent>Content 1</EvoAccordionContent>
      </EvoAccordionItem>
      <EvoAccordionItem id="two">
        <EvoAccordionSummary>
          <EvoAccordionLabel>Item 2</EvoAccordionLabel>
        </EvoAccordionSummary>
        <EvoAccordionContent>Content 2</EvoAccordionContent>
      </EvoAccordionItem>
    </>
  );

  if (open !== undefined) {
    return (
      <EvoAccordion
        size={size}
        open={open}
        a11yText={a11yText}
        className={className}
      >
        {items}
      </EvoAccordion>
    );
  }

  return (
    <EvoAccordion
      size={size}
      defaultOpen={defaultOpen}
      a11yText={a11yText}
      className={className}
    >
      {items}
    </EvoAccordion>
  );
}

describe("EvoAccordion SSR", () => {
  it("should render defaults", () => {
    expect(renderToString(<TestAccordion />)).toMatchSnapshot();
  });

  it.each<Size>(["regular", "large"])("should render with size=%s", (size) => {
    expect(renderToString(<TestAccordion size={size} />)).toMatchSnapshot();
  });

  it("should render with controlled single open item", () => {
    expect(renderToString(<TestAccordion open="one" />)).toMatchSnapshot();
  });

  it("should render with controlled multiple open items", () => {
    expect(
      renderToString(
        <EvoAccordion open={["one", "two"]}>
          <EvoAccordionItem id="one">
            <EvoAccordionSummary>
              <EvoAccordionLabel>Item 1</EvoAccordionLabel>
            </EvoAccordionSummary>
            <EvoAccordionContent>Content 1</EvoAccordionContent>
          </EvoAccordionItem>
          <EvoAccordionItem id="two">
            <EvoAccordionSummary>
              <EvoAccordionLabel>Item 2</EvoAccordionLabel>
            </EvoAccordionSummary>
            <EvoAccordionContent>Content 2</EvoAccordionContent>
          </EvoAccordionItem>
        </EvoAccordion>,
      ),
    ).toMatchSnapshot();
  });

  it("should render with defaultOpen", () => {
    expect(
      renderToString(<TestAccordion defaultOpen="two" />),
    ).toMatchSnapshot();
  });

  it("should render with localized a11yText", () => {
    expect(
      renderToString(<TestAccordion a11yText="Akkordeon" />),
    ).toMatchSnapshot();
  });

  it("should render with custom className", () => {
    expect(
      renderToString(<TestAccordion className="custom-class" />),
    ).toMatchSnapshot();
  });

  it("should render with leading content", () => {
    expect(
      renderToString(
        <EvoAccordion>
          <EvoAccordionItem id="1">
            <EvoAccordionSummary>
              <EvoAccordionLeading>
                <EvoIconLightbulb16 />
              </EvoAccordionLeading>
              <EvoAccordionLabel>Item 1</EvoAccordionLabel>
            </EvoAccordionSummary>
            <EvoAccordionContent>Content 1</EvoAccordionContent>
          </EvoAccordionItem>
        </EvoAccordion>,
      ),
    ).toMatchSnapshot();
  });
});
