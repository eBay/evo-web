import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import {
  EvoProgressStep,
  EvoProgressStepper,
  EvoProgressStepTitle,
  EvoProgressStepContent,
} from "../index";
import type { ProgressStepperState } from "../types";

describe("EvoProgressStepper SSR", () => {
  it.each<ProgressStepperState>([
    "active",
    "complete",
    "upcoming",
    "attention",
    "current",
  ])("renders %s state with stable indices", (defaultState) => {
    expect(
      renderToString(
        <EvoProgressStepper
          a11yHeadingText="Shipment progress"
          currentStep={1}
          defaultState={defaultState}
        >
          <EvoProgressStep index={0}>
            <EvoProgressStepTitle>Ordered</EvoProgressStepTitle>
            <EvoProgressStepContent>Payment received</EvoProgressStepContent>
          </EvoProgressStep>
          <EvoProgressStep index={1}>
            <EvoProgressStepTitle>Shipped</EvoProgressStepTitle>
            <EvoProgressStepContent>
              Package is on its way
            </EvoProgressStepContent>
          </EvoProgressStep>
          <EvoProgressStep index={2}>
            <EvoProgressStepTitle>Delivered</EvoProgressStepTitle>
            <EvoProgressStepContent>Awaiting delivery</EvoProgressStepContent>
          </EvoProgressStep>
        </EvoProgressStepper>,
      ),
    ).toMatchSnapshot();
  });

  it("renders a vertical list and custom heading element", () => {
    expect(
      renderToString(
        <EvoProgressStepper
          a11yHeadingText="Order progress"
          direction="column"
          headingAs="h3"
        >
          <EvoProgressStep index={0} data-step="first">
            <EvoProgressStepTitle as="h5">Paid</EvoProgressStepTitle>
            <EvoProgressStepContent>Payment received</EvoProgressStepContent>
          </EvoProgressStep>
        </EvoProgressStepper>,
      ),
    ).toMatchSnapshot();
  });

  it("uses the parent-selected body element", () => {
    const markup = renderToString(
      <EvoProgressStepper a11yHeadingText="Order progress" stepContentAs="span">
        <EvoProgressStep index={0}>
          <EvoProgressStepContent>Paid</EvoProgressStepContent>
        </EvoProgressStep>
      </EvoProgressStepper>,
    );
    expect(markup).toContain("<span>Paid</span>");
  });
});
