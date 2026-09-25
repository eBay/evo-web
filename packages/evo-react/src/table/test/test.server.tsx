import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import {
  EvoTable,
  EvoTableBody,
  EvoTableCell,
  EvoTableHead,
  EvoTableHeader,
  EvoTableRow,
} from "../index";

describe("EvoTable SSR", () => {
  it("renders the native table structure", () => {
    expect(
      renderToString(
        <EvoTable aria-label="Active listings">
          <EvoTableHead>
            <EvoTableHeader>Item</EvoTableHeader>
            <EvoTableHeader>Price</EvoTableHeader>
          </EvoTableHead>
          <EvoTableBody>
            <EvoTableRow>
              <EvoTableCell rowHeader>Camera</EvoTableCell>
              <EvoTableCell columnType="numeric">$120</EvoTableCell>
            </EvoTableRow>
          </EvoTableBody>
        </EvoTable>,
      ),
    ).toMatchSnapshot();
  });
});
