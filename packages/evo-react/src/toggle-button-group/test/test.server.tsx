import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import { EvoToggleButtonGroup, EvoToggleButtonGroupItem } from "../index";

describe("EvoToggleButtonGroup SSR", () => {
  it("renders the wrapper, list, and unpressed items", () => {
    expect(
      renderToString(
        <EvoToggleButtonGroup a11yText="Listing condition" columnsMin={2}>
          <EvoToggleButtonGroupItem value="new" title="New" />
          <EvoToggleButtonGroupItem value="used" title="Used" />
        </EvoToggleButtonGroup>,
      ),
    ).toMatchSnapshot();
  });

  it("renders a selected item with an external label", () => {
    expect(
      renderToString(
        <>
          <h2 id="condition-heading">Listing condition</h2>
          <EvoToggleButtonGroup
            a11yLabelId="condition-heading"
            variant="radio"
            selected="used"
            layoutType="list"
          >
            <EvoToggleButtonGroupItem value="new" title="New" />
            <EvoToggleButtonGroupItem value="used" title="Used" />
          </EvoToggleButtonGroup>
        </>,
      ),
    ).toMatchSnapshot();
  });
});
