import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import { EvoCharacterCount } from "../character-count";

describe("EvoCharacterCount SSR", () => {
  it("renders the calculated count", () => {
    expect(
      renderToString(<EvoCharacterCount text="Hello world" max={120} />),
    ).toMatchSnapshot();
  });

  it("renders a manual count", () => {
    expect(
      renderToString(<EvoCharacterCount count={5} max={120} />),
    ).toMatchSnapshot();
  });

  it("renders custom content", () => {
    expect(
      renderToString(
        <EvoCharacterCount count={6} max={120}>
          6 of 120 (114 remaining)
        </EvoCharacterCount>,
      ),
    ).toMatchSnapshot();
  });

  it("omits accessibility text when explicitly null", () => {
    expect(
      renderToString(
        <EvoCharacterCount text="Hello" max={10} a11yText={null} />,
      ),
    ).toMatchSnapshot();
  });

  it("passes HTML attributes to the root span", () => {
    expect(
      renderToString(
        <EvoCharacterCount
          text="Hello"
          max={10}
          className="custom-class"
          data-testid="character-count"
        />,
      ),
    ).toMatchSnapshot();
  });
});
