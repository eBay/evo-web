import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import { EvoFakeLink } from "../fake-link";

describe("EvoFakeLink SSR", () => {
  it("renders an inline button by default", () => {
    expect(
      renderToString(<EvoFakeLink>View seller details</EvoFakeLink>),
    ).toMatchSnapshot();
  });

  it("renders a standalone disabled button", () => {
    expect(
      renderToString(
        <EvoFakeLink variant="standalone" disabled className="custom-link">
          View seller details
        </EvoFakeLink>,
      ),
    ).toMatchSnapshot();
  });
});
