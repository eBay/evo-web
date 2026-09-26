import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import { EvoButton } from "../../button/button";
import {
  EvoToastDialog,
  EvoToastDialogClose,
  EvoToastDialogFooter,
  EvoToastDialogHeader,
  EvoToastDialogMain,
  EvoToastDialogTitle,
} from "../index";

function Toast({ open }: { open: boolean }) {
  return (
    <EvoToastDialog open={open}>
      <EvoToastDialogHeader>
        <EvoToastDialogTitle>Draft saved</EvoToastDialogTitle>
        <EvoToastDialogClose a11yText="Close draft saved message" />
      </EvoToastDialogHeader>
      <EvoToastDialogMain>Continue editing when ready.</EvoToastDialogMain>
      <EvoToastDialogFooter>
        <EvoButton>View draft</EvoButton>
      </EvoToastDialogFooter>
    </EvoToastDialog>
  );
}

describe("EvoToastDialog SSR", () => {
  it("renders closed state and named structure", () => {
    expect(renderToString(<Toast open={false} />)).toMatchSnapshot();
  });

  it("renders open state without serializing the native open attribute", () => {
    const html = renderToString(<Toast open />);
    expect(html).toMatchSnapshot();
    expect(html).not.toContain(" open=");
    expect(html).toContain('aria-live="polite"');
    expect(html).toContain('aria-modal="false"');
    expect(html).toContain('closedby="closerequest"');
  });

  it("wires the dialog label to the title", () => {
    const html = renderToString(<Toast open />);
    const labelledBy = html.match(/aria-labelledby="([^"]+)"/)?.[1];
    expect(labelledBy).toBeTruthy();
    expect(html).toContain(`id="${labelledBy}"`);
  });
});
