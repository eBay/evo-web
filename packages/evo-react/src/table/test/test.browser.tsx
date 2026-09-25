import { createRef, useState } from "react";
import { describe, expect, it } from "vitest";
import { userEvent } from "vitest/browser";
import { render } from "vitest-browser-react";
import { EvoCheckbox } from "../../checkbox";
import {
  EvoTable,
  EvoTableBody,
  EvoTableCell,
  EvoTableHead,
  EvoTableHeader,
  EvoTableRow,
} from "../index";

describe("EvoTable", () => {
  it("renders native table sections with row headers and numeric cells", async () => {
    const ref = createRef<HTMLDivElement>();
    const screen = await render(
      <EvoTable
        ref={ref}
        aria-label="Active listings"
        density="compact"
        frozenHeader
      >
        <EvoTableHead>
          <EvoTableHeader>Item</EvoTableHeader>
          <EvoTableHeader columnType="numeric">Price</EvoTableHeader>
        </EvoTableHead>
        <EvoTableBody>
          <EvoTableRow>
            <EvoTableCell rowHeader>Camera</EvoTableCell>
            <EvoTableCell columnType="numeric">$120</EvoTableCell>
          </EvoTableRow>
        </EvoTableBody>
      </EvoTable>,
    );
    const table = screen.getByRole("table");
    const wrapper = table.element().closest(".table");
    expect(ref.current).toBe(wrapper);
    expect(wrapper).toHaveClass(
      "table--density-compact",
      "table--frozen-header",
    );
    await expect
      .element(screen.getByRole("columnheader", { name: "Item" }))
      .toHaveAttribute("scope", "col");
    await expect
      .element(screen.getByRole("rowheader", { name: "Camera" }))
      .toHaveAttribute("scope", "row");
    await expect
      .element(screen.getByRole("cell", { name: "$120" }))
      .toHaveClass("table-cell--numeric");
  });

  it("renders a layout cell and selection sizing class", async () => {
    const screen = await render(
      <EvoTable mode="selection" aria-label="Active listings">
        <EvoTableHead>
          <EvoTableHeader>Item</EvoTableHeader>
        </EvoTableHead>
        <EvoTableBody>
          <EvoTableRow>
            <EvoTableCell columnType="layout">Camera details</EvoTableCell>
          </EvoTableRow>
        </EvoTableBody>
      </EvoTable>,
    );
    const cell = screen.getByRole("cell", { name: "Camera details" });
    expect(cell.element().querySelector(".table-cell__layout")).not.toBeNull();
    expect(cell.element().closest(".table--mode-selection")).not.toBeNull();
  });

  it("requests sort changes while the application owns the direction", async () => {
    function SortableTable() {
      const [sort, setSort] = useState<"none" | "asc" | "desc">("none");
      return (
        <EvoTable aria-label="Active listings">
          <EvoTableHead>
            <EvoTableHeader sort={sort} onSortChange={setSort}>
              Price
            </EvoTableHeader>
          </EvoTableHead>
          <EvoTableBody>
            <EvoTableRow>
              <EvoTableCell>$120</EvoTableCell>
            </EvoTableRow>
          </EvoTableBody>
        </EvoTable>
      );
    }
    const screen = await render(<SortableTable />);
    const heading = screen.getByRole("columnheader", { name: "Price" });
    const button = screen.getByRole("button", { name: "Price" });
    await expect.element(heading).toHaveAttribute("aria-sort", "none");
    await userEvent.click(button);
    await expect.element(heading).toHaveAttribute("aria-sort", "ascending");
    await userEvent.click(button);
    await expect.element(heading).toHaveAttribute("aria-sort", "descending");
    await userEvent.click(button);
    await expect.element(heading).toHaveAttribute("aria-sort", "none");
  });

  it("lets the application control header and row checkboxes", async () => {
    function SelectableTable() {
      const [selected, setSelected] = useState([false, false]);
      return (
        <EvoTable mode="selection" aria-label="Active listings">
          <EvoTableHead>
            <EvoTableHeader>
              <EvoCheckbox
                aria-label="Select all rows"
                checked={selected.every(Boolean)}
                onChange={(event) =>
                  setSelected([
                    event.currentTarget.checked,
                    event.currentTarget.checked,
                  ])
                }
              />
            </EvoTableHeader>
            <EvoTableHeader>Item</EvoTableHeader>
          </EvoTableHead>
          <EvoTableBody>
            {["Camera", "Headphones"].map((item, index) => (
              <EvoTableRow key={item}>
                <EvoTableCell rowHeader>
                  <EvoCheckbox
                    aria-label={`Select ${item}`}
                    checked={selected[index]}
                    onChange={(event) =>
                      setSelected(
                        selected.map((value, row) =>
                          row === index ? event.currentTarget.checked : value,
                        ),
                      )
                    }
                  />
                </EvoTableCell>
                <EvoTableCell>{item}</EvoTableCell>
              </EvoTableRow>
            ))}
          </EvoTableBody>
        </EvoTable>
      );
    }
    const screen = await render(<SelectableTable />);
    const all = screen.getByRole("checkbox", { name: "Select all rows" });
    const camera = screen.getByRole("checkbox", { name: "Select Camera" });
    await userEvent.click(camera);
    await expect.element(camera).toBeChecked();
    await expect.element(all).not.toBeChecked();
    await userEvent.click(all);
    await expect.element(all).toBeChecked();
    await expect
      .element(screen.getByRole("checkbox", { name: "Select Headphones" }))
      .toBeChecked();
  });
});
