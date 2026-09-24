import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import { EvoIconFullView24 } from "../../icon/icons/full-view-24";
import { EvoSegmentedButton, EvoSegmentedButtons } from "../index";

describe("EvoSegmentedButtons SSR", () => {
  it("renders a selected segment and preserves list markup", () => {
    expect(
      renderToString(
        <EvoSegmentedButtons
          a11yText="Listing status"
          defaultSelected="active"
          id="listing-status"
        >
          <EvoSegmentedButton value="active">Active</EvoSegmentedButton>
          <EvoSegmentedButton value="sold">Sold</EvoSegmentedButton>
        </EvoSegmentedButtons>,
      ),
    ).toMatchSnapshot();
  });

  it("renders a large icon segment", () => {
    expect(
      renderToString(
        <EvoSegmentedButtons size="large" selected={1} a11yText="Preview">
          <EvoSegmentedButton value={1} icon={<EvoIconFullView24 />}>
            Desktop
          </EvoSegmentedButton>
        </EvoSegmentedButtons>,
      ),
    ).toMatchSnapshot();
  });

  it("renders no current button when selected is null", () => {
    expect(
      renderToString(
        <EvoSegmentedButtons selected={null} a11yText="Listing status">
          <EvoSegmentedButton value="active">Active</EvoSegmentedButton>
        </EvoSegmentedButtons>,
      ),
    ).toMatchSnapshot();
  });
});
