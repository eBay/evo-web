import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import {
  EvoFilterMenuButton,
  EvoFilterMenuFooterButton,
  EvoFilterMenuItem,
  EvoFilterMenuItems,
} from "../index";

function FilterButton({ selected = [] }: { selected?: string[] }) {
  return (
    <EvoFilterMenuButton
      text="Delivery"
      countText="(+1)"
      selected={selected}
      footerText="Apply filters"
    >
      <EvoFilterMenuItems>
        <EvoFilterMenuItem value="free">Free shipping</EvoFilterMenuItem>
        <EvoFilterMenuItem value="local">Local pickup</EvoFilterMenuItem>
      </EvoFilterMenuItems>
    </EvoFilterMenuButton>
  );
}

describe("EvoFilterMenuButton SSR", () => {
  it("renders closed trigger and prefixed menu structure", () => {
    expect(renderToString(<FilterButton />)).toMatchSnapshot();
  });

  it("renders selected styling and count", () => {
    expect(
      renderToString(<FilterButton selected={["free"]} />),
    ).toMatchSnapshot();
  });

  it("renders form and named footer composition", () => {
    expect(
      renderToString(
        <EvoFilterMenuButton
          text="Sort"
          type="radio"
          variant="form"
          defaultSelected="recent"
        >
          <EvoFilterMenuItems>
            <EvoFilterMenuItem value="recent">
              Recently listed
            </EvoFilterMenuItem>
          </EvoFilterMenuItems>
          <EvoFilterMenuFooterButton>Apply sort</EvoFilterMenuFooterButton>
        </EvoFilterMenuButton>,
      ),
    ).toMatchSnapshot();
  });
});
