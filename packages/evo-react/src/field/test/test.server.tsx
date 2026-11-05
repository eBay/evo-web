import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import { EvoField, EvoFieldDescription, EvoLabel } from "../index";

describe("EvoField SSR", () => {
  it("renders inline layout and end label", () => {
    expect(
      renderToString(
        <EvoField>
          <input id="save-search" type="checkbox" />
          <EvoLabel htmlFor="save-search" position="end">
            Save this search
          </EvoLabel>
          <EvoFieldDescription position="inline">
            Search preferences
          </EvoFieldDescription>
        </EvoField>,
      ),
    ).toMatchSnapshot();
  });

  it("renders block layout with a required label and description", () => {
    expect(
      renderToString(
        <EvoField layout="block">
          <EvoLabel htmlFor="listing-title" stacked required>
            Listing title
          </EvoLabel>
          <input id="listing-title" required aria-describedby="title-help" />
          <EvoFieldDescription id="title-help" type="information">
            Include the brand and model.
          </EvoFieldDescription>
        </EvoField>,
      ),
    ).toMatchSnapshot();
  });
});
