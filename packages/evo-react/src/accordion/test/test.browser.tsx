import { useState } from "react";
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { render } from "vitest-browser-react";
import { userEvent } from "vitest/browser";
import { EvoAccordion } from "../accordion";
import { EvoAccordionItem } from "../accordion-item";
import {
  EvoAccordionContent,
  EvoAccordionLabel,
  EvoAccordionSummary,
} from "../index";
import type { AccordionId, MultipleOpenValue, SingleOpenValue } from "../types";

function AccordionItems() {
  return (
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
}

function TestAccordion({
  open,
  defaultOpen,
  onOpenChange,
}: {
  open?: SingleOpenValue;
  defaultOpen?: SingleOpenValue;
  onOpenChange?: (open: SingleOpenValue) => void;
}) {
  if (open !== undefined) {
    return (
      <EvoAccordion open={open} onOpenChange={onOpenChange}>
        <AccordionItems />
      </EvoAccordion>
    );
  }

  return (
    <EvoAccordion defaultOpen={defaultOpen} onOpenChange={onOpenChange}>
      <AccordionItems />
    </EvoAccordion>
  );
}

function ControlledAccordion() {
  const [open, setOpen] = useState<AccordionId | undefined>("one");

  return (
    <EvoAccordion open={open} onOpenChange={setOpen}>
      <AccordionItems />
    </EvoAccordion>
  );
}

function isContentOpen(
  screen: Awaited<ReturnType<typeof render>>,
  text: string,
) {
  return screen.getByText(text).element().closest("details")?.open;
}

describe("evo-accordion", () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });

  afterEach(() => {
    user.cleanup();
  });

  it("renders with accordion role description", async () => {
    const screen = await render(<TestAccordion />);

    await expect
      .element(screen.getByRole("list"))
      .toHaveAttribute("aria-roledescription", "accordion");
  });

  it("supports localized a11yText", async () => {
    const screen = await render(
      <EvoAccordion a11yText="Akkordeon">
        <EvoAccordionItem id="one">
          <EvoAccordionSummary>
            <EvoAccordionLabel>Item 1</EvoAccordionLabel>
          </EvoAccordionSummary>
          <EvoAccordionContent>Content 1</EvoAccordionContent>
        </EvoAccordionItem>
      </EvoAccordion>,
    );

    await expect
      .element(screen.getByRole("list"))
      .toHaveAttribute("aria-roledescription", "Akkordeon");
  });

  it("opens one uncontrolled item by id", async () => {
    const onOpenChange = vi.fn();
    const screen = await render(<TestAccordion onOpenChange={onOpenChange} />);

    await user.click(screen.getByText("Item 1"));

    expect(isContentOpen(screen, "Content 1")).toBe(true);
    expect(isContentOpen(screen, "Content 2")).toBe(false);
    await expect
      .element(screen.getByRole("list"))
      .toHaveClass("accordion--animated");
    expect(onOpenChange).toHaveBeenCalledWith("one");
  });

  it("closes the previously opened uncontrolled item in single-open mode", async () => {
    const onOpenChange = vi.fn();
    const screen = await render(
      <TestAccordion defaultOpen="one" onOpenChange={onOpenChange} />,
    );

    await user.click(screen.getByText("Item 2"));

    expect(isContentOpen(screen, "Content 1")).toBe(false);
    expect(isContentOpen(screen, "Content 2")).toBe(true);
    expect(onOpenChange).toHaveBeenCalledWith("two");
  });

  it("supports uncontrolled multi-open mode when defaultOpen is an array", async () => {
    const onOpenChange = vi.fn();
    const screen = await render(
      <EvoAccordion
        defaultOpen={["one"]}
        onOpenChange={onOpenChange as (open: MultipleOpenValue) => void}
      >
        <AccordionItems />
      </EvoAccordion>,
    );

    await user.click(screen.getByText("Item 2"));

    expect(isContentOpen(screen, "Content 1")).toBe(true);
    expect(isContentOpen(screen, "Content 2")).toBe(true);
    expect(onOpenChange).toHaveBeenCalledWith(["one", "two"]);
  });

  it("supports controlled open state", async () => {
    const screen = await render(<ControlledAccordion />);

    expect(isContentOpen(screen, "Content 1")).toBe(true);
    expect(isContentOpen(screen, "Content 2")).toBe(false);

    await user.click(screen.getByText("Item 2"));

    await vi.waitFor(() => {
      expect(isContentOpen(screen, "Content 1")).toBe(false);
      expect(isContentOpen(screen, "Content 2")).toBe(true);
    });
  });

  it("does not visually change controlled open state without a prop update", async () => {
    const onOpenChange = vi.fn();
    const screen = await render(
      <TestAccordion open="one" onOpenChange={onOpenChange} />,
    );

    await user.click(screen.getByText("Item 2"));

    expect(isContentOpen(screen, "Content 1")).toBe(true);
    expect(isContentOpen(screen, "Content 2")).toBe(false);
    expect(onOpenChange).toHaveBeenCalledWith("two");
  });

  it("supports className on the root list", async () => {
    const screen = await render(
      <EvoAccordion className="custom-class">
        <EvoAccordionItem id="1">
          <EvoAccordionSummary>
            <EvoAccordionLabel>Item 1</EvoAccordionLabel>
          </EvoAccordionSummary>
          <EvoAccordionContent>Content 1</EvoAccordionContent>
        </EvoAccordionItem>
      </EvoAccordion>,
    );

    await expect.element(screen.getByRole("list")).toHaveClass("custom-class");
  });
});
