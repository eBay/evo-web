/* eslint-disable jsx-a11y/no-access-key -- Optional access keys are supported by the legacy snackbar action. */
import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import {
  EvoSnackbarDialog,
  EvoSnackbarDialogAction,
  EvoSnackbarDialogActions,
  EvoSnackbarDialogMain,
} from "../index";

describe("EvoSnackbarDialog SSR", () => {
  it("renders the closed structure", () => {
    expect(
      renderToString(
        <EvoSnackbarDialog>
          <EvoSnackbarDialogMain>Item removed.</EvoSnackbarDialogMain>
        </EvoSnackbarDialog>,
      ),
    ).toMatchSnapshot();
  });

  it("renders an open column layout with action", () => {
    expect(
      renderToString(
        <EvoSnackbarDialog open layout="column" a11yText="Watchlist update">
          <EvoSnackbarDialogMain>
            <p>Item removed from your watchlist.</p>
          </EvoSnackbarDialogMain>
          <EvoSnackbarDialogActions>
            <EvoSnackbarDialogAction accessKey="u">
              Undo
            </EvoSnackbarDialogAction>
          </EvoSnackbarDialogActions>
        </EvoSnackbarDialog>,
      ),
    ).toMatchSnapshot();
  });
});
