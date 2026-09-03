import { describe, it, expect } from "vitest";
import { renderToString } from "react-dom/server";
import { EvoConfirmDialog } from "../confirm-dialog";
import { EvoConfirmDialogHeader } from "../confirm-dialog-header";
import { EvoConfirmDialogMain } from "../confirm-dialog-main";
import { EvoConfirmDialogFooter } from "../confirm-dialog-footer";
import { EvoConfirmDialogReject } from "../confirm-dialog-reject";
import { EvoConfirmDialogConfirm } from "../confirm-dialog-confirm";

function DefaultTree({ open }: { open?: boolean }) {
  return (
    <EvoConfirmDialog open={open}>
      <EvoConfirmDialogHeader>Delete Address?</EvoConfirmDialogHeader>
      <EvoConfirmDialogMain>
        <p>You will permanently lose this address.</p>
      </EvoConfirmDialogMain>
      <EvoConfirmDialogFooter>
        <EvoConfirmDialogReject>Cancel</EvoConfirmDialogReject>
        <EvoConfirmDialogConfirm>Delete</EvoConfirmDialogConfirm>
      </EvoConfirmDialogFooter>
    </EvoConfirmDialog>
  );
}

describe("EvoConfirmDialog SSR", () => {
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
      <EvoConfirmDialog defaultOpen>
        <EvoConfirmDialogHeader>Delete Address?</EvoConfirmDialogHeader>
        <EvoConfirmDialogMain>
          <p>You will permanently lose this address.</p>
        </EvoConfirmDialogMain>
        <EvoConfirmDialogFooter>
          <EvoConfirmDialogReject>Cancel</EvoConfirmDialogReject>
          <EvoConfirmDialogConfirm>Delete</EvoConfirmDialogConfirm>
        </EvoConfirmDialogFooter>
      </EvoConfirmDialog>,
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

  it("renders closedby=closerequest", () => {
    const html = renderToString(<DefaultTree open />);
    expect(html).toContain('closedby="closerequest"');
  });

  it("renders dialog__header with h2.dialog__title", () => {
    const html = renderToString(<DefaultTree open />);
    expect(html).toContain('class="dialog__header"');
    expect(html).toContain('class="dialog__title"');
    expect(html).toContain("<h2");
    expect(html).toContain("Delete Address?");
  });

  it("renders dialog__main with content", () => {
    const html = renderToString(<DefaultTree open />);
    expect(html).toContain('class="dialog__main"');
    expect(html).toContain("You will permanently lose this address.");
  });

  it("renders dialog__footer with reject and confirm buttons", () => {
    const html = renderToString(<DefaultTree open />);
    expect(html).toContain('class="dialog__footer"');
    expect(html).toContain("Cancel");
    expect(html).toContain("Delete");
  });

  it("renders confirm button with primary priority", () => {
    const html = renderToString(<DefaultTree open />);
    expect(html).toContain("btn--primary");
  });

  it("renders confirm button with autofocus", () => {
    const html = renderToString(<DefaultTree open />);
    expect(html).toContain("autofocus");
  });

  it("renders aria-labelledby wiring between dialog and header", () => {
    const html = renderToString(<DefaultTree open />);
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

  it("renders custom heading element via `as` on EvoConfirmDialogHeader", () => {
    const html = renderToString(
      <EvoConfirmDialog open>
        <EvoConfirmDialogHeader as="h1">Title</EvoConfirmDialogHeader>
        <EvoConfirmDialogMain>
          <p>Content</p>
        </EvoConfirmDialogMain>
        <EvoConfirmDialogFooter>
          <EvoConfirmDialogReject>Cancel</EvoConfirmDialogReject>
          <EvoConfirmDialogConfirm>Delete</EvoConfirmDialogConfirm>
        </EvoConfirmDialogFooter>
      </EvoConfirmDialog>,
    );
    expect(html).toContain("<h1");
    expect(html).toContain('class="dialog__title"');
  });

  it("renders with custom className on the dialog", () => {
    const html = renderToString(
      <EvoConfirmDialog open className="my-custom-dialog">
        <EvoConfirmDialogHeader>Title</EvoConfirmDialogHeader>
        <EvoConfirmDialogMain>
          <p>Content</p>
        </EvoConfirmDialogMain>
        <EvoConfirmDialogFooter>
          <EvoConfirmDialogReject>Cancel</EvoConfirmDialogReject>
          <EvoConfirmDialogConfirm>Delete</EvoConfirmDialogConfirm>
        </EvoConfirmDialogFooter>
      </EvoConfirmDialog>,
    );
    expect(html).toContain("my-custom-dialog");
  });

  it("renders footer with custom className merged", () => {
    const html = renderToString(
      <EvoConfirmDialog open>
        <EvoConfirmDialogHeader>Title</EvoConfirmDialogHeader>
        <EvoConfirmDialogMain>
          <p>Content</p>
        </EvoConfirmDialogMain>
        <EvoConfirmDialogFooter className="my-footer">
          <EvoConfirmDialogReject>Cancel</EvoConfirmDialogReject>
          <EvoConfirmDialogConfirm>Delete</EvoConfirmDialogConfirm>
        </EvoConfirmDialogFooter>
      </EvoConfirmDialog>,
    );
    expect(html).toContain("dialog__footer");
    expect(html).toContain("my-footer");
  });
});
