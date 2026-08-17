import type { ComponentProps } from "react";
import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import {
  EvoFakeMenu,
  EvoFakeMenuItem,
  EvoFakeMenuItemBadge,
  EvoFakeMenuItems,
  EvoFakeMenuSeparator,
} from "../index";

function CustomLink({ children, ...rest }: ComponentProps<"a">) {
  return (
    <a data-custom-link="true" {...rest}>
      {children}
    </a>
  );
}

describe("EvoFakeMenu SSR", () => {
  it("renders links, current state, a badge, and a separator", () => {
    expect(
      renderToString(
        <EvoFakeMenu>
          <EvoFakeMenuItems>
            <EvoFakeMenuItem href="/messages">
              Messages
              <EvoFakeMenuItemBadge number={5} a11yText="5 unread messages" />
            </EvoFakeMenuItem>
            <EvoFakeMenuItem href="/account" current>
              Account
            </EvoFakeMenuItem>
            <EvoFakeMenuSeparator />
          </EvoFakeMenuItems>
        </EvoFakeMenu>,
      ),
    ).toMatchSnapshot();
  });

  it("renders an anchor item with a custom link component", () => {
    expect(
      renderToString(
        <EvoFakeMenu>
          <EvoFakeMenuItems>
            <EvoFakeMenuItem href="/account" as={CustomLink}>
              Account
            </EvoFakeMenuItem>
          </EvoFakeMenuItems>
        </EvoFakeMenu>,
      ),
    ).toMatchSnapshot();
  });

  it("renders button items and disabled states", () => {
    expect(
      renderToString(
        <EvoFakeMenu>
          <EvoFakeMenuItems>
            <EvoFakeMenuItem type="submit">Submit</EvoFakeMenuItem>
            <EvoFakeMenuItem type="button" disabled>
              Disabled button
            </EvoFakeMenuItem>
            <EvoFakeMenuItem href="/disabled" disabled>
              Disabled link
            </EvoFakeMenuItem>
          </EvoFakeMenuItems>
        </EvoFakeMenu>,
      ),
    ).toMatchSnapshot();
  });

  it("applies positioning and prefixed classes", () => {
    expect(
      renderToString(
        <EvoFakeMenu
          classPrefix="fake-menu-button"
          reverse
          fixed
          fixWidth
          className="custom-menu"
        >
          <EvoFakeMenuItems className="custom-items">
            <EvoFakeMenuItem className="custom-item" href="/account">
              Account
            </EvoFakeMenuItem>
            <EvoFakeMenuSeparator className="custom-separator" />
          </EvoFakeMenuItems>
        </EvoFakeMenu>,
      ),
    ).toMatchSnapshot();
  });
});
