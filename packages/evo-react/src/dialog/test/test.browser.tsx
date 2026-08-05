import { createRef } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { userEvent } from "vitest/browser";
import { render } from "vitest-browser-react";
import { EvoButton } from "../../button";
import { EvoDialogBanner } from "../dialog-banner";
import { EvoDialogClose } from "../dialog-close";
import { EvoDialogFooter } from "../dialog-footer";
import { EvoDialogHeader } from "../dialog-header";
import { EvoDialogMain } from "../dialog-main";
import { EvoDialogPrevious } from "../dialog-previous";
import { EvoDialogTitle } from "../dialog-title";
import { EvoDialog } from "../dialog";
import type { EvoDialogProps } from "../types";

function renderDialog(props: EvoDialogProps = {}) {
  return render(
    <EvoDialog {...props}>
      <EvoDialogHeader>
        <EvoDialogTitle>Dialog Title</EvoDialogTitle>
        <EvoDialogClose a11yText="Close Dialog" />
      </EvoDialogHeader>
      <EvoDialogMain>
        <p>Dialog content</p>
      </EvoDialogMain>
      <EvoDialogFooter>
        <EvoButton>Done</EvoButton>
      </EvoDialogFooter>
    </EvoDialog>,
  );
}

describe("evo-dialog", () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });

  afterEach(() => {
    user.cleanup();
  });

  it("renders a closed native dialog by default", async () => {
    const { container } = await renderDialog();
    // The closed dialog is hidden from the a11y tree; querySelector is intentional here.
    const dialog = container.querySelector("dialog");
    await expect.element(dialog!).toHaveClass("dialog", "dialog--close");
    await expect.element(dialog!).not.toHaveAttribute("open");
  });

  it("opens as a modal when defaultOpen is true", async () => {
    const screen = await renderDialog({ defaultOpen: true });
    const dialog = screen.getByRole("dialog");
    await expect.element(dialog).toHaveAttribute("open");
    await expect.element(dialog).not.toHaveClass("dialog--close");
  });

  it("links the dialog to its heading", async () => {
    const screen = await renderDialog({ defaultOpen: true });
    const dialog = screen.getByRole("dialog");
    const heading = screen.getByRole("heading", { name: "Dialog Title" });
    expect(heading.element().id).toBeTruthy();
    await expect
      .element(dialog)
      .toHaveAttribute("aria-labelledby", heading.element().id);
  });

  it("combines a supplied aria-labelledby value with the heading id", async () => {
    const screen = await renderDialog({
      defaultOpen: true,
      "aria-labelledby": "external-label",
    });
    const dialog = screen.getByRole("dialog");
    const heading = screen.getByRole("heading", { name: "Dialog Title" });
    await expect
      .element(dialog)
      .toHaveAttribute(
        "aria-labelledby",
        `external-label ${heading.element().id}`,
      );
  });

  it("uses a custom heading id and element", async () => {
    const screen = await render(
      <EvoDialog defaultOpen>
        <EvoDialogHeader>
          <EvoDialogTitle as="h1" id="custom-title">
            Custom Title
          </EvoDialogTitle>
          <EvoDialogClose a11yText="Close Dialog" />
        </EvoDialogHeader>
        <EvoDialogMain>Content</EvoDialogMain>
      </EvoDialog>,
    );
    const dialog = screen.getByRole("dialog");
    const heading = screen.getByRole("heading", { name: "Custom Title" });
    expect(heading.element().tagName).toBe("H1");
    await expect
      .element(dialog)
      .toHaveAttribute("aria-labelledby", "custom-title");
  });

  it.each(["wide", "narrow", "large"] as const)(
    "applies the %s size class",
    async (size) => {
      const screen = await renderDialog({ defaultOpen: true, size });
      await expect
        .element(screen.getByRole("dialog"))
        .toHaveClass(`dialog--${size}`);
    },
  );

  it("renders an expressive banner with image styles", async () => {
    const screen = await render(
      <EvoDialog
        defaultOpen
        banner={
          <EvoDialogBanner src="https://example.com/banner.jpg" position="top">
            Banner content
          </EvoDialogBanner>
        }
      >
        <EvoDialogHeader>
          <EvoDialogTitle>Dialog Title</EvoDialogTitle>
          <EvoDialogClose a11yText="Close Dialog" />
        </EvoDialogHeader>
        <EvoDialogMain>Dialog content</EvoDialogMain>
      </EvoDialog>,
    );
    await expect
      .element(screen.getByRole("dialog"))
      .toHaveClass("dialog--expressive");
    const banner = screen.getByText("Banner content");
    await expect.element(banner).toHaveClass("dialog__image");
    await expect
      .element(banner)
      .toHaveStyle("background-image: url(https://example.com/banner.jpg)");
    await expect.element(banner).toHaveStyle("background-position: top");
  });

  it("renders previous and close actions in the header", async () => {
    const screen = await render(
      <EvoDialog defaultOpen>
        <EvoDialogHeader>
          <EvoDialogPrevious a11yText="Back" />
          <EvoDialogTitle>Dialog Title</EvoDialogTitle>
          <EvoDialogClose a11yText="Close Dialog" />
        </EvoDialogHeader>
        <EvoDialogMain>Dialog content</EvoDialogMain>
      </EvoDialog>,
    );
    await expect
      .element(screen.getByRole("button", { name: "Back" }))
      .toHaveClass("dialog__prev");
    await expect
      .element(screen.getByRole("button", { name: "Close Dialog" }))
      .toHaveClass("dialog__close");
  });

  it("composes root onClick and onKeyDown handlers", async () => {
    const onClick = vi.fn();
    const onKeyDown = vi.fn();
    const screen = await renderDialog({
      defaultOpen: true,
      onClick,
      onKeyDown,
    });

    await user.click(screen.getByText("Dialog content"));
    screen.getByRole("button", { name: "Close Dialog" }).element().focus();
    await user.keyboard("a");

    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onKeyDown).toHaveBeenCalledTimes(1);
  });

  it("closes an uncontrolled dialog from the close action", async () => {
    const screen = await renderDialog({ defaultOpen: true });
    const dialog = screen.getByRole("dialog");
    await user.click(screen.getByRole("button", { name: "Close Dialog" }));
    await expect.element(dialog).toHaveClass("dialog--close");
  });

  it("calls onOpenChange and the close action onClick", async () => {
    const onOpenChange = vi.fn();
    const onClick = vi.fn();
    const screen = await render(
      <EvoDialog open closedby="none" onOpenChange={onOpenChange}>
        <EvoDialogHeader>
          <EvoDialogTitle>Dialog Title</EvoDialogTitle>
          <EvoDialogClose a11yText="Close Dialog" onClick={onClick} />
        </EvoDialogHeader>
        <EvoDialogMain>Dialog content</EvoDialogMain>
      </EvoDialog>,
    );
    await user.click(screen.getByRole("button", { name: "Close Dialog" }));
    expect(onOpenChange).toHaveBeenCalledWith(false);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("blocks Escape when closedby is none", async () => {
    const onOpenChange = vi.fn();
    const screen = await renderDialog({
      defaultOpen: true,
      closedby: "none",
      onOpenChange,
    });
    screen.getByRole("button", { name: "Close Dialog" }).element().focus();
    await user.keyboard("{Escape}");
    expect(onOpenChange).not.toHaveBeenCalled();
    await expect
      .element(screen.getByRole("dialog"))
      .not.toHaveClass("dialog--close");
  });

  it("allows Escape when closedby is closerequest", async () => {
    const onOpenChange = vi.fn();
    const screen = await renderDialog({
      defaultOpen: true,
      closedby: "closerequest",
      onOpenChange,
    });
    screen.getByRole("button", { name: "Close Dialog" }).element().focus();
    await user.keyboard("{Escape}");
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });

  it("closes after the root animation ends", async () => {
    const screen = await renderDialog({ defaultOpen: true });
    const dialog = screen.getByRole("dialog");
    const dialogElement = dialog.element();
    await user.click(screen.getByRole("button", { name: "Close Dialog" }));
    dialogElement.dispatchEvent(
      new AnimationEvent("animationend", { bubbles: true }),
    );
    // The closed dialog leaves the a11y tree, so assert against the retained element.
    expect(dialogElement.hasAttribute("open")).toBe(false);
  });

  it("handles native cancel requests and calls onCancel", async () => {
    const onCancel = vi.fn();
    const onOpenChange = vi.fn();
    const screen = await renderDialog({
      open: true,
      onCancel,
      onOpenChange,
    });
    const event = new Event("cancel", { cancelable: true });
    screen.getByRole("dialog").element().dispatchEvent(event);
    expect(event.defaultPrevented).toBe(true);
    expect(onOpenChange).toHaveBeenCalledWith(false);
    expect(onCancel).toHaveBeenCalledTimes(1);
  });

  it("forwards dialog attributes, className, and ref", async () => {
    const ref = createRef<HTMLDialogElement>();
    const screen = await renderDialog({
      defaultOpen: true,
      className: "custom-dialog",
      id: "dialog-id",
      ref,
    });
    const dialog = screen.getByRole("dialog");
    await expect.element(dialog).toHaveClass("custom-dialog");
    await expect.element(dialog).toHaveAttribute("id", "dialog-id");
    expect(ref.current).toBe(dialog.element());
  });

  it.each(["any", "closerequest", "none"] as const)(
    "passes through closedby=%s",
    async (closedby) => {
      const screen = await renderDialog({ defaultOpen: true, closedby });
      await expect
        .element(screen.getByRole("dialog"))
        .toHaveAttribute("closedby", closedby);
    },
  );

  it("renders main and footer classes with custom classes", async () => {
    const screen = await render(
      <EvoDialog defaultOpen>
        <EvoDialogHeader>
          <EvoDialogTitle>Dialog Title</EvoDialogTitle>
          <EvoDialogClose a11yText="Close Dialog" />
        </EvoDialogHeader>
        <EvoDialogMain className="custom-main">Main content</EvoDialogMain>
        <EvoDialogFooter className="custom-footer">
          <EvoButton>Done</EvoButton>
        </EvoDialogFooter>
      </EvoDialog>,
    );
    const main = screen.getByText("Main content");
    const footer = screen
      .getByRole("button", { name: "Done" })
      .element().parentElement;
    await expect.element(main).toHaveClass("dialog__main", "custom-main");
    expect(footer?.classList.contains("dialog__footer")).toBe(true);
    expect(footer?.classList.contains("custom-footer")).toBe(true);
  });
});
