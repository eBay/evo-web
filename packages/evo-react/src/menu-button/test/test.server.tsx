import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import {
  EvoMenuButton,
  EvoMenuButtonTrigger,
  EvoMenu,
  EvoMenuFooter,
  EvoMenuItem,
  EvoMenuItems,
} from "../index";

describe("EvoMenuButton SSR", () => {
  it("renders the closed trigger structure", () => {
    expect(
      renderToString(
        <EvoMenuButton>
          <EvoMenuButtonTrigger>Actions</EvoMenuButtonTrigger>
          <EvoMenu>
            <EvoMenuItems>
              <EvoMenuItem>Edit</EvoMenuItem>
            </EvoMenuItems>
          </EvoMenu>
        </EvoMenuButton>,
      ),
    ).toMatchSnapshot();
  });

  it("renders the filter presentation from the root variant", () => {
    expect(
      renderToString(
        <EvoMenuButton variant="filter" open reverse strategy="fixed" fixWidth>
          <EvoMenuButtonTrigger hasSelection a11ySelectedText="Filters applied">
            Delivery
          </EvoMenuButtonTrigger>
          <EvoMenu>
            <EvoMenuItems>
              <EvoMenuItem>Free shipping</EvoMenuItem>
            </EvoMenuItems>
            <EvoMenuFooter>Apply filters</EvoMenuFooter>
          </EvoMenu>
        </EvoMenuButton>,
      ),
    ).toMatchSnapshot();
  });
});
