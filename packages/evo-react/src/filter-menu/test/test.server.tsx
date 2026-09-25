import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import {
  EvoFilterMenu,
  EvoFilterMenuFooterButton,
  EvoFilterMenuItem,
  EvoFilterMenuItems,
} from "../index";

describe("EvoFilterMenu SSR", () => {
  it("renders checkbox menu structure and default selection", () => {
    expect(
      renderToString(
        <EvoFilterMenu
          a11yText="Shipping filters"
          defaultSelected={["free"]}
          searchHeaderPlaceholderText="Search filters"
        >
          <EvoFilterMenuItems>
            <EvoFilterMenuItem value="free">Free shipping</EvoFilterMenuItem>
            <EvoFilterMenuItem value="local" disabled>
              Local pickup
            </EvoFilterMenuItem>
          </EvoFilterMenuItems>
          <EvoFilterMenuFooterButton>Apply filters</EvoFilterMenuFooterButton>
        </EvoFilterMenu>,
      ),
    ).toMatchSnapshot();
  });

  it("renders native radio inputs in form mode", () => {
    expect(
      renderToString(
        <EvoFilterMenu
          type="radio"
          variant="form"
          a11yText="Sort order"
          defaultSelected="recent"
        >
          <EvoFilterMenuItems>
            <EvoFilterMenuItem value="recent">
              Recently listed
            </EvoFilterMenuItem>
            <EvoFilterMenuItem value="price">Lowest price</EvoFilterMenuItem>
          </EvoFilterMenuItems>
          <EvoFilterMenuFooterButton>Apply sort</EvoFilterMenuFooterButton>
        </EvoFilterMenu>,
      ),
    ).toMatchSnapshot();
  });
});
