import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import { EvoButton } from "../../button";
import { EvoDialogBanner } from "../dialog-banner";
import { EvoDialogClose } from "../dialog-close";
import { EvoDialogFooter } from "../dialog-footer";
import { EvoDialogHeader } from "../dialog-header";
import { EvoDialogMain } from "../dialog-main";
import { EvoDialogPrevious } from "../dialog-previous";
import { EvoDialogTitle } from "../dialog-title";
import { EvoDialog } from "../dialog";
import type { DialogSize, EvoDialogProps } from "../types";

function DefaultTree(props: EvoDialogProps) {
  return (
    <EvoDialog {...props}>
      <EvoDialogHeader>
        <EvoDialogTitle>Dialog Title</EvoDialogTitle>
        <EvoDialogClose a11yText="Close Dialog" />
      </EvoDialogHeader>
      <EvoDialogMain>
        <p>Dialog content</p>
      </EvoDialogMain>
    </EvoDialog>
  );
}

describe("EvoDialog SSR", () => {
  it("renders the default controlled state", () => {
    expect(renderToString(<DefaultTree open={false} />)).toMatchSnapshot();
  });

  it("renders the open controlled state", () => {
    expect(renderToString(<DefaultTree open />)).toMatchSnapshot();
  });

  it.each<DialogSize>(["wide", "narrow", "large"])(
    "renders size=%s",
    (size) => {
      expect(
        renderToString(<DefaultTree open={false} size={size} />),
      ).toMatchSnapshot();
    },
  );

  it("renders the expressive composition", () => {
    expect(
      renderToString(
        <EvoDialog
          open
          banner={
            <EvoDialogBanner
              src="https://example.com/banner.jpg"
              position="top"
            />
          }
        >
          <EvoDialogHeader>
            <EvoDialogPrevious a11yText="Back" />
            <EvoDialogTitle>Dialog Title</EvoDialogTitle>
            <EvoDialogClose a11yText="Close Dialog" />
          </EvoDialogHeader>
          <EvoDialogMain>Dialog content</EvoDialogMain>
          <EvoDialogFooter>
            <EvoButton>Done</EvoButton>
          </EvoDialogFooter>
        </EvoDialog>,
      ),
    ).toMatchSnapshot();
  });

  it("does not serialize the native open attribute", () => {
    expect(renderToString(<DefaultTree open />)).not.toContain(" open=");
  });

  it("uses default closedby=any", () => {
    expect(renderToString(<DefaultTree open />)).toContain('closedby="any"');
  });

  it("renders dialog--close only for a closed state", () => {
    expect(renderToString(<DefaultTree open={false} />)).toContain(
      "dialog--close",
    );
    expect(renderToString(<DefaultTree open />)).not.toContain("dialog--close");
  });

  it("wires aria-labelledby to the title", () => {
    const html = renderToString(<DefaultTree open />);
    const labelledBy = html.match(/aria-labelledby="([^"]+)"/)?.[1];
    expect(labelledBy).toBeTruthy();
    expect(html).toContain(`id="${labelledBy}"`);
  });

  it("merges custom classes and attributes", () => {
    const html = renderToString(
      <DefaultTree open className="custom-dialog" id="dialog-id" />,
    );
    expect(html).toContain("dialog custom-dialog");
    expect(html).toContain('id="dialog-id"');
  });
});
