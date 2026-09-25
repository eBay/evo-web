import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import { EvoSwitch } from "../switch";

describe("EvoSwitch SSR", () => {
  it("renders a labeled switch", () => {
    expect(
      renderToString(
        <div>
          <EvoSwitch id="alerts" name="alerts" defaultChecked />
          <label htmlFor="alerts">Saved search alerts</label>
        </div>,
      ),
    ).toMatchSnapshot();
  });

  it("renders a disabled switch with its native state", () => {
    expect(
      renderToString(<EvoSwitch disabled checked readOnly id="alerts" />),
    ).toMatchSnapshot();
  });
});
