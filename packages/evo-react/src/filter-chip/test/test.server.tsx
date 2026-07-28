import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import { EvoIconSneaker16 } from "../../icon/icons/sneaker-16";
import { EvoFilterChip } from "../filter-chip";

describe("EvoFilterChip SSR", () => {
  it("renders the default variant", () => {
    expect(
      renderToString(<EvoFilterChip>Filter</EvoFilterChip>),
    ).toMatchSnapshot();
  });

  it("renders the default variant selected", () => {
    expect(
      renderToString(<EvoFilterChip selected>Filter</EvoFilterChip>),
    ).toMatchSnapshot();
  });

  it("renders the default variant with an icon", () => {
    expect(
      renderToString(
        <EvoFilterChip icon={<EvoIconSneaker16 />}>Filter</EvoFilterChip>,
      ),
    ).toMatchSnapshot();
  });

  it("renders the expressive variant", () => {
    expect(
      renderToString(
        <EvoFilterChip
          variant="expressive"
          image={<img src="/category.jpg" alt="Category" />}
        >
          Category
        </EvoFilterChip>,
      ),
    ).toMatchSnapshot();
  });

  it("renders the menu variant selected and open", () => {
    expect(
      renderToString(
        <EvoFilterChip
          variant="menu"
          selected
          open
          a11ySelectedText="Filter Applied"
        >
          Price
        </EvoFilterChip>,
      ),
    ).toMatchSnapshot();
  });

  it("renders the anchor variant selected", () => {
    expect(
      renderToString(
        <EvoFilterChip
          href="/filter"
          a11ySelectedText="Filter Applied"
          selected
        >
          Filter
        </EvoFilterChip>,
      ),
    ).toMatchSnapshot();
  });

  it("renders a disabled anchor without href", () => {
    expect(
      renderToString(
        <EvoFilterChip
          href="/filter"
          a11ySelectedText="Filter Applied"
          disabled
        >
          Filter
        </EvoFilterChip>,
      ),
    ).toMatchSnapshot();
  });

  it("passes HTML attributes to the root", () => {
    expect(
      renderToString(
        <EvoFilterChip className="custom-class" data-testid="filter-chip">
          Filter
        </EvoFilterChip>,
      ),
    ).toMatchSnapshot();
  });
});
