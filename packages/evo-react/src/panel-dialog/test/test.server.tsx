import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import {
  EvoPanelDialog,
  EvoPanelDialogClose,
  EvoPanelDialogHeader,
  EvoPanelDialogMain,
  EvoPanelDialogTitle,
} from "../index";

describe("EvoPanelDialog SSR", () => {
  it("renders the native dialog and panel regions", () => {
    expect(
      renderToString(
        <EvoPanelDialog open position="end">
          <EvoPanelDialogHeader>
            <EvoPanelDialogTitle>Shipping details</EvoPanelDialogTitle>
            <EvoPanelDialogClose a11yText="Close shipping details" />
          </EvoPanelDialogHeader>
          <EvoPanelDialogMain>Check the delivery address.</EvoPanelDialogMain>
        </EvoPanelDialog>,
      ),
    ).toMatchSnapshot();
  });
});
