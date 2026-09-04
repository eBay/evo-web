import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import { EvoProgressBarExpressive } from "../progress-bar-expressive";

const messages = [
  { content: "Hang tight" },
  { content: "We're processing your order", duration: 3000 },
];

describe("EvoProgressBarExpressive SSR", () => {
  it("renders the default progress bar", () => {
    expect(
      renderToString(<EvoProgressBarExpressive a11yText="Loading..." />),
    ).toMatchSnapshot();
  });

  it("renders a custom accessible label", () => {
    expect(
      renderToString(<EvoProgressBarExpressive a11yText="Uploading photos" />),
    ).toMatchSnapshot();
  });

  it("renders medium size", () => {
    expect(
      renderToString(
        <EvoProgressBarExpressive
          a11yText="Loading"
          size="medium"
          messages={[{ content: "Loading item" }]}
        />,
      ),
    ).toMatchSnapshot();
  });

  it("renders multiple messages", () => {
    expect(
      renderToString(
        <EvoProgressBarExpressive a11yText="Loading" messages={messages} />,
      ),
    ).toMatchSnapshot();
  });

  it("renders a single message", () => {
    expect(
      renderToString(
        <EvoProgressBarExpressive
          a11yText="Loading"
          messages={[{ content: "Processing" }]}
        />,
      ),
    ).toMatchSnapshot();
  });

  it("renders custom root classes and data attributes", () => {
    expect(
      renderToString(
        <EvoProgressBarExpressive
          a11yText="Loading"
          className="custom-class"
          data-testid="progress"
        />,
      ),
    ).toMatchSnapshot();
  });
});
