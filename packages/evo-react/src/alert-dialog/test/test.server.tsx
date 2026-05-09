import { describe, it, expect } from "vitest";
import { renderToString } from "react-dom/server";
import { EvoAlertDialog } from "../alert-dialog";
import { EvoAlertDialogHeader } from "../alert-dialog-header";
import { EvoAlertDialogMain } from "../alert-dialog-main";
import { EvoAlertDialogConfirm } from "../alert-dialog-confirm";

function DefaultTree({ open }: { open?: boolean }) {
  return (
    <EvoAlertDialog open={open}>
      <EvoAlertDialogHeader>Alert!</EvoAlertDialogHeader>
      <EvoAlertDialogMain>
        <p>You must acknowledge this alert to continue.</p>
      </EvoAlertDialogMain>
      <EvoAlertDialogConfirm>OK</EvoAlertDialogConfirm>
    </EvoAlertDialog>
  );
}

describe("EvoAlertDialog SSR", () => {
  it("renders default (closed) controlled state", () => {
    expect(renderToString(<DefaultTree open={false} />)).toMatchSnapshot();
  });

  it("renders open controlled state", () => {
    expect(renderToString(<DefaultTree open />)).toMatchSnapshot();
  });

  it("renders dialog--close class when controlled open=false", () => {
    const html = renderToString(<DefaultTree open={false} />);
    expect(html).toContain("dialog--close");
  });

  it("renders without dialog--close class when controlled open=true", () => {
    const html = renderToString(<DefaultTree open />);
    expect(html).not.toContain("dialog--close");
  });

  it("renders dialog--close class when uncontrolled with no defaultOpen", () => {
    const html = renderToString(<DefaultTree />);
    expect(html).toContain("dialog--close");
  });

  it("renders without dialog--close class when uncontrolled with defaultOpen", () => {
    const html = renderToString(
      <EvoAlertDialog defaultOpen>
        <EvoAlertDialogHeader>Alert!</EvoAlertDialogHeader>
        <EvoAlertDialogMain>
          <p>Content</p>
        </EvoAlertDialogMain>
        <EvoAlertDialogConfirm>OK</EvoAlertDialogConfirm>
      </EvoAlertDialog>,
    );
    expect(html).not.toContain("dialog--close");
  });

  it("renders role=alertdialog", () => {
    const html = renderToString(<DefaultTree open />);
    expect(html).toContain('role="alertdialog"');
  });

  it("renders aria-modal=true", () => {
    const html = renderToString(<DefaultTree open />);
    expect(html).toContain('aria-modal="true"');
  });

  it("renders closedby=none", () => {
    const html = renderToString(<DefaultTree open />);
    expect(html).toContain('closedby="none"');
  });

  it("renders dialog__header with h2.dialog__title", () => {
    const html = renderToString(<DefaultTree open />);
    expect(html).toContain('class="dialog__header"');
    expect(html).toContain('class="dialog__title"');
    expect(html).toContain("<h2");
    expect(html).toContain("Alert!");
  });

  it("renders dialog__main with content", () => {
    const html = renderToString(<DefaultTree open />);
    expect(html).toContain('class="dialog__main"');
    expect(html).toContain("You must acknowledge this alert to continue.");
  });

  it("renders dialog__footer with primary button", () => {
    const html = renderToString(<DefaultTree open />);
    expect(html).toContain('class="dialog__footer"');
    expect(html).toContain("btn--primary");
    expect(html).toContain("OK");
  });

  it("renders confirm button with autofocus", () => {
    const html = renderToString(<DefaultTree open />);
    expect(html).toContain("autofocus");
  });

  it("renders aria-labelledby wiring between dialog and header", () => {
    const html = renderToString(<DefaultTree open />);
    // The aria-labelledby value must match the id on the heading.
    const labelledByMatch = html.match(/aria-labelledby="([^"]+)"/);
    expect(labelledByMatch).toBeTruthy();
    const headerId = labelledByMatch![1];
    expect(html).toContain(`id="${headerId}"`);
  });

  it("renders aria-describedby wiring between confirm button and main content", () => {
    const html = renderToString(<DefaultTree open />);
    const describedByMatch = html.match(/aria-describedby="([^"]+)"/);
    expect(describedByMatch).toBeTruthy();
    const mainId = describedByMatch![1];
    expect(html).toContain(`id="${mainId}"`);
  });

  it("renders custom heading element via `as` on EvoAlertDialogHeader", () => {
    const html = renderToString(
      <EvoAlertDialog open>
        <EvoAlertDialogHeader as="h1">Title</EvoAlertDialogHeader>
        <EvoAlertDialogMain>
          <p>Content</p>
        </EvoAlertDialogMain>
        <EvoAlertDialogConfirm>OK</EvoAlertDialogConfirm>
      </EvoAlertDialog>,
    );
    expect(html).toContain("<h1");
    expect(html).toContain('class="dialog__title"');
  });

  it("renders with custom className on the dialog", () => {
    const html = renderToString(
      <EvoAlertDialog open className="my-custom-dialog">
        <EvoAlertDialogHeader>Title</EvoAlertDialogHeader>
        <EvoAlertDialogMain>
          <p>Content</p>
        </EvoAlertDialogMain>
        <EvoAlertDialogConfirm>OK</EvoAlertDialogConfirm>
      </EvoAlertDialog>,
    );
    expect(html).toContain("my-custom-dialog");
  });
});
