import { renderToString } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { EvoProgressBar } from "../progress-bar";

describe("EvoProgressBar SSR", () => {
  it("renders the provided label and an indeterminate progress bar", () => {
    expect(
      renderToString(<EvoProgressBar a11yText="Task progress" />),
    ).toMatchSnapshot();
  });

  it("renders with a custom max and value", () => {
    expect(
      renderToString(
        <EvoProgressBar a11yText="Task progress" value={50} max={200} />,
      ),
    ).toMatchSnapshot();
  });

  it("renders without aria-label when an alternative label is supplied", () => {
    expect(
      renderToString(
        <>
          <span id="upload-progress-label">Upload progress</span>
          <EvoProgressBar
            a11yText={null}
            aria-labelledby="upload-progress-label"
            value={50}
          />
        </>,
      ),
    ).toMatchSnapshot();
  });

  it("renders with the fluid modifier", () => {
    expect(
      renderToString(<EvoProgressBar a11yText="Task progress" fluid />),
    ).toMatchSnapshot();
  });

  it("passes through native attributes and a custom class", () => {
    expect(
      renderToString(
        <EvoProgressBar
          a11yText="Upload progress"
          className="custom-class"
          id="upload-progress"
          title="Upload status"
        />,
      ),
    ).toMatchSnapshot();
  });
});
