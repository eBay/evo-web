import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import { EvoButton } from "../../button/button";
import {
  EvoMenu,
  EvoMenuCheckboxGroup,
  EvoMenuCheckboxItem,
  EvoMenuFooter,
  EvoMenuItem,
  EvoMenuItemBadge,
  EvoMenuItems,
  EvoMenuRadioGroup,
  EvoMenuRadioItem,
  EvoMenuSeparator,
} from "../index";

describe("EvoMenu SSR", () => {
  it("renders command items, a badge, a separator, and a footer", () => {
    expect(
      renderToString(
        <EvoMenu>
          <EvoMenuItems a11yText="Actions">
            <EvoMenuItem>
              Messages
              <EvoMenuItemBadge number={5} a11yText="5 unread messages" />
            </EvoMenuItem>
            <EvoMenuSeparator />
            <EvoMenuItem disabled>Disabled</EvoMenuItem>
          </EvoMenuItems>
          <EvoMenuFooter>
            <EvoButton>Apply</EvoButton>
          </EvoMenuFooter>
        </EvoMenu>,
      ),
    ).toMatchSnapshot();
  });

  it("renders selected radio and checkbox items", () => {
    expect(
      renderToString(
        <EvoMenu>
          <EvoMenuItems a11yText="Preferences">
            <EvoMenuRadioGroup selected="price">
              <EvoMenuRadioItem value="price">Price</EvoMenuRadioItem>
              <EvoMenuRadioItem value="distance">Distance</EvoMenuRadioItem>
            </EvoMenuRadioGroup>
            <EvoMenuCheckboxGroup selected={["shipping"]}>
              <EvoMenuCheckboxItem value="shipping">
                Shipping
              </EvoMenuCheckboxItem>
              <EvoMenuCheckboxItem value="returns">Returns</EvoMenuCheckboxItem>
            </EvoMenuCheckboxGroup>
          </EvoMenuItems>
        </EvoMenu>,
      ),
    ).toMatchSnapshot();
  });

  it("renders the filter variant and custom classes", () => {
    expect(
      renderToString(
        <EvoMenu
          variant="filter"
          reverse
          fixed
          fixWidth
          className="custom-menu"
        >
          <EvoMenuItems className="custom-items" a11yText="Filters">
            <EvoMenuCheckboxGroup defaultSelected={[1]}>
              <EvoMenuCheckboxItem value={1}>One</EvoMenuCheckboxItem>
              <EvoMenuCheckboxItem value={2}>Two</EvoMenuCheckboxItem>
            </EvoMenuCheckboxGroup>
          </EvoMenuItems>
        </EvoMenu>,
      ),
    ).toMatchSnapshot();
  });

  it("applies prefixed menu classes", () => {
    expect(
      renderToString(
        <EvoMenu classPrefix="menu-button" reverse fixed fixWidth>
          <EvoMenuItems a11yText="Actions">
            <EvoMenuItem>Open</EvoMenuItem>
          </EvoMenuItems>
        </EvoMenu>,
      ),
    ).toMatchSnapshot();
  });
});
