import { createRef, useState } from "react";
import { describe, expect, it } from "vitest";
import { userEvent } from "vitest/browser";
import { render } from "vitest-browser-react";
import {
  EvoProgressStep,
  EvoProgressStepper,
  EvoProgressStepTitle,
  EvoProgressStepContent,
} from "../index";

describe("evo-progress-stepper", () => {
  it("shows the current step with legacy list and separator structure", async () => {
    const ref = createRef<HTMLDivElement>();
    const screen = await render(
      <EvoProgressStepper
        a11yHeadingText="Shipment progress"
        currentStep={1}
        ref={ref}
      >
        <EvoProgressStep index={0}>
          <EvoProgressStepTitle>Ordered</EvoProgressStepTitle>
          <EvoProgressStepContent>Payment received</EvoProgressStepContent>
        </EvoProgressStep>
        <EvoProgressStep index={1}>
          <EvoProgressStepTitle>Shipped</EvoProgressStepTitle>
          <EvoProgressStepContent>Package is on its way</EvoProgressStepContent>
        </EvoProgressStep>
        <EvoProgressStep index={2}>
          <EvoProgressStepTitle>Delivered</EvoProgressStepTitle>
          <EvoProgressStepContent>Awaiting delivery</EvoProgressStepContent>
        </EvoProgressStep>
      </EvoProgressStepper>,
    );
    const list = screen.getByRole("list");
    const heading = screen.getByRole("heading", { name: "Shipment progress" });
    const current = screen.getByRole("img", { name: "current" });
    expect(ref.current).toBe(heading.element().parentElement);
    expect(heading.element()).toHaveClass("clipped");
    expect(ref.current).toHaveAttribute(
      "aria-labelledby",
      heading.element().id,
    );
    expect(current.element().closest("[role=listitem]")).toHaveAttribute(
      "aria-current",
      "step",
    );
    expect(list.element().querySelectorAll("[role=listitem]")).toHaveLength(3);
    expect(
      list.element().querySelectorAll("hr[role=presentation]"),
    ).toHaveLength(2);
    expect(
      list.element().querySelectorAll(".progress-stepper__text > p"),
    ).toHaveLength(3);
    await expect
      .element(screen.getByRole("heading", { name: "Ordered" }))
      .toBeInTheDocument();
  });

  it("marks the current step as needing attention", async () => {
    const screen = await render(
      <EvoProgressStepper
        a11yHeadingText="Shipment progress"
        currentStep={1}
        defaultState="attention"
        direction="column"
      >
        <EvoProgressStep index={0}>
          <EvoProgressStepContent>Ordered</EvoProgressStepContent>
        </EvoProgressStep>
        <EvoProgressStep index={1} a11yText="Shipment delayed">
          <EvoProgressStepContent>Shipped</EvoProgressStepContent>
        </EvoProgressStep>
        <EvoProgressStep index={2}>
          <EvoProgressStepContent>Delivered</EvoProgressStepContent>
        </EvoProgressStep>
      </EvoProgressStepper>,
    );
    const blocked = screen.getByRole("img", { name: "Shipment delayed" });
    expect(blocked.element().closest("[role=listitem]")).toHaveClass(
      "progress-stepper__item--attention",
    );
    expect(screen.getByRole("list").element().parentElement).toHaveClass(
      "progress-stepper--vertical",
    );
  });

  it("supports every step complete or upcoming", async () => {
    const complete = await render(
      <EvoProgressStepper
        a11yHeadingText="Completed shipment"
        defaultState="complete"
      >
        <EvoProgressStep index={0}>
          <EvoProgressStepContent>Ordered</EvoProgressStepContent>
        </EvoProgressStep>
        <EvoProgressStep index={1}>
          <EvoProgressStepContent>Delivered</EvoProgressStepContent>
        </EvoProgressStep>
      </EvoProgressStepper>,
    );
    expect(
      complete.getByRole("list").element().querySelector("[aria-current]"),
    ).toBeNull();
    expect(
      Array.from(
        complete.getByRole("list").element().querySelectorAll("svg title"),
        (title) => title.textContent,
      ),
    ).toEqual(["complete", "complete"]);

    const upcoming = await render(
      <EvoProgressStepper
        a11yHeadingText="Shipment not started"
        defaultState="upcoming"
      >
        <EvoProgressStep index={0}>
          <EvoProgressStepContent>Ordered</EvoProgressStepContent>
        </EvoProgressStep>
        <EvoProgressStep index={1}>
          <EvoProgressStepContent>Delivered</EvoProgressStepContent>
        </EvoProgressStep>
      </EvoProgressStepper>,
    );
    const upcomingList = upcoming
      .getByRole("heading", { name: "Shipment not started" })
      .element()
      .parentElement?.querySelector('[role="list"]');
    expect(upcomingList).toHaveClass("progress-stepper__items--upcoming");
    expect(
      Array.from(
        upcomingList!.querySelectorAll("svg title"),
        (title) => title.textContent,
      ),
    ).toEqual(["upcoming", "upcoming"]);
  });

  it("updates the current position when parent state changes", async () => {
    function ControlledStepper() {
      const [currentStep, setCurrentStep] = useState(0);
      return (
        <>
          <EvoProgressStepper
            a11yHeadingText="Shipment progress"
            currentStep={currentStep}
          >
            <EvoProgressStep index={0}>
              <EvoProgressStepContent>Ordered</EvoProgressStepContent>
            </EvoProgressStep>
            <EvoProgressStep index={1}>
              <EvoProgressStepContent>Shipped</EvoProgressStepContent>
            </EvoProgressStep>
          </EvoProgressStepper>
          <button type="button" onClick={() => setCurrentStep(1)}>
            Advance
          </button>
        </>
      );
    }

    const screen = await render(<ControlledStepper />);
    const first = screen
      .getByText("Ordered")
      .element()
      .closest("[role=listitem]");
    const second = screen
      .getByText("Shipped")
      .element()
      .closest("[role=listitem]");
    expect(first).toHaveAttribute("aria-current", "step");
    await userEvent.click(screen.getByRole("button", { name: "Advance" }));
    expect(first).not.toHaveAttribute("aria-current");
    expect(second).toHaveAttribute("aria-current", "step");
  });
});
