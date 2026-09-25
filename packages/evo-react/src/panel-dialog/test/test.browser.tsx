import { createRef } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { userEvent } from "vitest/browser";
import { render } from "vitest-browser-react";
import {
  EvoPanelDialog,
  EvoPanelDialogClose,
  EvoPanelDialogFooter,
  EvoPanelDialogHeader,
  EvoPanelDialogMain,
  EvoPanelDialogPrevious,
  EvoPanelDialogTitle,
} from "../index";

function panel(open: boolean, onOpenChange = vi.fn()) {
  return (
    <EvoPanelDialog open={open} onOpenChange={onOpenChange}>
      <EvoPanelDialogHeader>
        <EvoPanelDialogPrevious a11yText="Previous step" />
        <EvoPanelDialogTitle>Shipping details</EvoPanelDialogTitle>
        <EvoPanelDialogClose a11yText="Close shipping details" />
      </EvoPanelDialogHeader>
      <EvoPanelDialogMain>Check the delivery address.</EvoPanelDialogMain>
      <EvoPanelDialogFooter>More information</EvoPanelDialogFooter>
    </EvoPanelDialog>
  );
}

describe("EvoPanelDialog", () => {
  let user: ReturnType<typeof userEvent.setup>;
  beforeEach(() => {
    user = userEvent.setup();
  });
  afterEach(() => {
    user.cleanup();
  });

  it("renders a closed native dialog by default", async () => {
    const screen = await render(panel(false));
    // A closed native dialog is hidden from the accessibility tree.
    const dialog = screen.container.querySelector("dialog");
    expect(dialog).not.toBeNull();
    await expect.element(dialog!).not.toHaveAttribute("open");
  });

  it("opens a modal with the panel window and named regions", async () => {
    const screen = await render(panel(true));
    const dialog = screen.getByRole("dialog");
    const title = screen.getByRole("heading", { name: "Shipping details" });
    await expect.element(dialog).toHaveAttribute("open");
    await expect
      .element(dialog)
      .toHaveAttribute("aria-labelledby", title.element().id);
    expect(title.element().closest(".panel-dialog__window")).not.toBeNull();
    expect(
      screen
        .getByText("Check the delivery address.")
        .element()
        .closest(".panel-dialog__main"),
    ).not.toBeNull();
    expect(
      screen
        .getByText("More information")
        .element()
        .closest(".panel-dialog__footer"),
    ).not.toBeNull();
  });

  it("requests close from the named close button", async () => {
    const onOpenChange = vi.fn();
    const screen = await render(panel(true, onOpenChange));
    await user.click(
      screen.getByRole("button", { name: "Close shipping details" }),
    );
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });

  it("uses the end position and passes through a native dialog ref", async () => {
    const ref = createRef<HTMLDialogElement>();
    const screen = await render(
      <EvoPanelDialog
        defaultOpen
        position="end"
        ref={ref}
        aria-label="Order information"
        animated={false}
      >
        <EvoPanelDialogMain>Order information</EvoPanelDialogMain>
      </EvoPanelDialog>,
    );
    expect(ref.current).toBe(screen.getByRole("dialog").element());
    expect(
      screen.container.querySelector(".panel-dialog__window--end"),
    ).not.toBeNull();
  });
});
