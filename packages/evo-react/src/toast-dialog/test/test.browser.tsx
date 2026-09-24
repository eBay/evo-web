import { createRef } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { userEvent } from "vitest/browser";
import { render } from "vitest-browser-react";
import { EvoButton } from "../../button/button";
import {
  EvoToastDialog,
  EvoToastDialogClose,
  EvoToastDialogFooter,
  EvoToastDialogHeader,
  EvoToastDialogMain,
  EvoToastDialogTitle,
} from "../index";
import type { EvoToastDialogProps } from "../types";

function renderToast(props: EvoToastDialogProps = {}) {
  return render(
    <EvoToastDialog {...props}>
      <EvoToastDialogHeader>
        <EvoToastDialogTitle>Draft saved</EvoToastDialogTitle>
        <EvoToastDialogClose a11yText="Close draft saved message" />
      </EvoToastDialogHeader>
      <EvoToastDialogMain>
        <p>Continue editing when ready.</p>
      </EvoToastDialogMain>
      <EvoToastDialogFooter>
        <EvoButton>View draft</EvoButton>
      </EvoToastDialogFooter>
    </EvoToastDialog>,
  );
}

describe("evo-toast-dialog", () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });

  afterEach(() => {
    user.cleanup();
  });

  it("renders a closed native dialog by default", async () => {
    const { container } = await renderToast();
    // The closed dialog is hidden from the a11y tree; querySelector is intentional here.
    const dialog = container.querySelector("dialog");
    await expect
      .element(dialog!)
      .toHaveClass("toast-dialog", "toast-dialog--close");
    await expect.element(dialog!).not.toHaveAttribute("open");
  });

  it("opens nonmodally and exposes its title and live announcement", async () => {
    const screen = await renderToast({ defaultOpen: true });
    const dialog = screen.getByRole("dialog", { name: "Draft saved" });
    await expect.element(dialog).toHaveAttribute("open");
    await expect.element(dialog).toHaveAttribute("aria-modal", "false");
    await expect.element(dialog).toHaveAttribute("aria-live", "polite");
    await expect.element(dialog).toHaveAttribute("closedby", "closerequest");
  });

  it("preserves focus when opening nonmodally", async () => {
    const screen = await render(
      <>
        <EvoButton autoFocus>Continue browsing</EvoButton>
        <EvoToastDialog defaultOpen>
          <EvoToastDialogHeader>
            <EvoToastDialogTitle>Draft saved</EvoToastDialogTitle>
            <EvoToastDialogClose a11yText="Close draft saved message" />
          </EvoToastDialogHeader>
          <EvoToastDialogMain>Saved</EvoToastDialogMain>
        </EvoToastDialog>
      </>,
    );
    await expect
      .element(screen.getByRole("button", { name: "Continue browsing" }))
      .toHaveFocus();
  });

  it("uses a custom title element and id for its accessible name", async () => {
    const screen = await render(
      <EvoToastDialog defaultOpen aria-labelledby="extra-label">
        <EvoToastDialogHeader>
          <EvoToastDialogTitle as="h3" id="custom-title">
            Draft saved
          </EvoToastDialogTitle>
          <EvoToastDialogClose a11yText="Close draft saved message" />
        </EvoToastDialogHeader>
        <EvoToastDialogMain>Saved</EvoToastDialogMain>
      </EvoToastDialog>,
    );
    const heading = screen.getByRole("heading", { name: "Draft saved" });
    const dialog = screen.getByRole("dialog");
    expect(heading.element().tagName).toBe("H3");
    await expect
      .element(dialog)
      .toHaveAttribute("aria-labelledby", "extra-label custom-title");
  });

  it("requests close from the required close action", async () => {
    const onOpenChange = vi.fn();
    const onClick = vi.fn();
    const screen = await render(
      <EvoToastDialog open onOpenChange={onOpenChange}>
        <EvoToastDialogHeader>
          <EvoToastDialogTitle>Draft saved</EvoToastDialogTitle>
          <EvoToastDialogClose
            a11yText="Close draft saved message"
            onClick={onClick}
          />
        </EvoToastDialogHeader>
        <EvoToastDialogMain>Saved</EvoToastDialogMain>
      </EvoToastDialog>,
    );
    await user.click(
      screen.getByRole("button", { name: "Close draft saved message" }),
    );
    expect(onOpenChange).toHaveBeenCalledWith(false);
    expect(onClick).toHaveBeenCalledTimes(1);
    await expect
      .element(screen.getByRole("dialog"))
      .not.toHaveClass("toast-dialog--close");
  });

  it("updates uncontrolled close state", async () => {
    const screen = await renderToast({ defaultOpen: true });
    const dialog = screen.getByRole("dialog");
    await user.click(
      screen.getByRole("button", { name: "Close draft saved message" }),
    );
    await expect.element(dialog).toHaveClass("toast-dialog--close");
  });

  it("closes from Escape when the close control has focus", async () => {
    const onOpenChange = vi.fn();
    const screen = await renderToast({ defaultOpen: true, onOpenChange });
    screen
      .getByRole("button", { name: "Close draft saved message" })
      .element()
      .focus();
    await user.keyboard("{Escape}");
    await expect
      .element(screen.getByRole("dialog"))
      .toHaveClass("toast-dialog--close");
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });

  it("handles native cancel and the consumer callback", async () => {
    const onOpenChange = vi.fn();
    const onCancel = vi.fn();
    const screen = await renderToast({ open: true, onOpenChange, onCancel });
    const event = new Event("cancel", { cancelable: true });
    screen.getByRole("dialog").element().dispatchEvent(event);
    expect(event.defaultPrevented).toBe(true);
    expect(onOpenChange).toHaveBeenCalledWith(false);
    expect(onCancel).toHaveBeenCalledTimes(1);
  });

  it("closes the native element after its exit animation", async () => {
    const screen = await renderToast({ defaultOpen: true });
    const dialog = screen.getByRole("dialog");
    const element = dialog.element();
    await user.click(
      screen.getByRole("button", { name: "Close draft saved message" }),
    );
    element.dispatchEvent(
      new AnimationEvent("animationend", { bubbles: true }),
    );
    expect(element.hasAttribute("open")).toBe(false);
  });

  it("forwards attributes and a native ref", async () => {
    const ref = createRef<HTMLDialogElement>();
    const screen = await renderToast({
      defaultOpen: true,
      id: "saved-toast",
      className: "custom-toast",
      ref,
    });
    const dialog = screen.getByRole("dialog");
    await expect.element(dialog).toHaveAttribute("id", "saved-toast");
    await expect.element(dialog).toHaveClass("custom-toast");
    expect(ref.current).toBe(dialog.element());
  });

  it("renders the named main and footer regions", async () => {
    const screen = await renderToast({ defaultOpen: true });
    const main = screen
      .getByText("Continue editing when ready.")
      .element().parentElement;
    const footer = screen
      .getByRole("button", { name: "View draft" })
      .element().parentElement;
    expect(main).toHaveClass("toast-dialog__main");
    expect(footer).toHaveClass("toast-dialog__footer");
  });
});
