import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import { EvoChip } from "../chip";
import { EvoChipDeleteButton } from "../chip-delete-button";
import { EvoChipText } from "../chip-text";

describe("EvoChip SSR", () => {
  it("renders text without a delete button", () => {
    expect(
      renderToString(
        <EvoChip>
          <EvoChipText>Football</EvoChipText>
        </EvoChip>,
      ),
    ).toMatchSnapshot();
  });

  it("renders text with a delete button", () => {
    expect(
      renderToString(
        <EvoChip className="custom-chip">
          <EvoChipText>Football</EvoChipText>
          <EvoChipDeleteButton
            a11yText="Delete Football"
            className="custom-button"
            disabled
          />
        </EvoChip>,
      ),
    ).toMatchSnapshot();
  });
});
