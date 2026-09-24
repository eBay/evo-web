import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import { EvoFakeMenuItem } from "../../fake-menu/fake-menu-item";
import { EvoFakeMenuItems } from "../../fake-menu/fake-menu-items";
import { EvoIconOverflowVertical16 } from "../../icon/icons/overflow-vertical-16";
import {
  EvoFakeMenuButton,
  EvoFakeMenuButtonLabel,
  EvoFakeMenuButtonMenu,
  EvoFakeMenuButtonTrigger,
} from "../index";

describe("EvoFakeMenuButton SSR", () => {
  it("renders a closed text trigger", () => {
    expect(
      renderToString(
        <EvoFakeMenuButton>
          <EvoFakeMenuButtonTrigger>Account options</EvoFakeMenuButtonTrigger>
          <EvoFakeMenuButtonMenu>
            <EvoFakeMenuItems>
              <EvoFakeMenuItem href="/orders">Orders</EvoFakeMenuItem>
            </EvoFakeMenuItems>
          </EvoFakeMenuButtonMenu>
        </EvoFakeMenuButton>,
      ),
    ).toMatchSnapshot();
  });

  it("renders an initially open menu with named regions", () => {
    expect(
      renderToString(
        <EvoFakeMenuButton defaultOpen reverse fixWidth>
          <EvoFakeMenuButtonTrigger>
            <EvoFakeMenuButtonLabel>Account:</EvoFakeMenuButtonLabel>
            Options
          </EvoFakeMenuButtonTrigger>
          <EvoFakeMenuButtonMenu>
            <EvoFakeMenuItems>
              <EvoFakeMenuItem href="/orders">Orders</EvoFakeMenuItem>
              <EvoFakeMenuItem type="button">Sign out</EvoFakeMenuItem>
            </EvoFakeMenuItems>
          </EvoFakeMenuButtonMenu>
        </EvoFakeMenuButton>,
      ),
    ).toMatchSnapshot();
  });

  it("renders an icon trigger", () => {
    expect(
      renderToString(
        <EvoFakeMenuButton variant="icon" a11yText="More actions">
          <EvoFakeMenuButtonTrigger>
            <EvoIconOverflowVertical16 />
          </EvoFakeMenuButtonTrigger>
          <EvoFakeMenuButtonMenu>
            <EvoFakeMenuItems>
              <EvoFakeMenuItem href="/orders">Orders</EvoFakeMenuItem>
            </EvoFakeMenuItems>
          </EvoFakeMenuButtonMenu>
        </EvoFakeMenuButton>,
      ),
    ).toMatchSnapshot();
  });
});
