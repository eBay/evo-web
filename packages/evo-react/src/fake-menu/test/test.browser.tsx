import { createRef } from "react";
import type { ComponentProps, MouseEvent } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { userEvent } from "vitest/browser";
import { render } from "vitest-browser-react";
import {
  EvoFakeMenu,
  EvoFakeMenuItem,
  EvoFakeMenuItemBadge,
  EvoFakeMenuItems,
  EvoFakeMenuSeparator,
} from "../index";

describe("evo-fake-menu", () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });

  afterEach(() => {
    user.cleanup();
  });

  it("renders links, buttons, badges, and separators in a list", async () => {
    const screen = await render(
      <EvoFakeMenu>
        <EvoFakeMenuItems>
          <EvoFakeMenuItem href="/messages">
            Messages
            <EvoFakeMenuItemBadge number={5} a11yText="5 unread messages" />
          </EvoFakeMenuItem>
          <EvoFakeMenuSeparator />
          <EvoFakeMenuItem type="button">Action</EvoFakeMenuItem>
        </EvoFakeMenuItems>
      </EvoFakeMenu>,
    );

    await expect.element(screen.getByRole("list")).toBeInTheDocument();
    await expect
      .element(screen.getByRole("link", { name: "Messages 5 unread messages" }))
      .toHaveAttribute("href", "/messages");
    await expect
      .element(screen.getByRole("button", { name: "Action" }))
      .toHaveAttribute("type", "button");
    await expect.element(screen.getByRole("separator")).toBeInTheDocument();
    await expect
      .element(screen.getByLabelText("5 unread messages"))
      .toBeInTheDocument();
  });

  it("renders anchor items with a custom link component", async () => {
    function CustomLink({ children, ...rest }: ComponentProps<"a">) {
      return (
        <a data-custom-link="true" {...rest}>
          {children}
        </a>
      );
    }

    const screen = await render(
      <EvoFakeMenu>
        <EvoFakeMenuItems>
          <EvoFakeMenuItem href="/account" as={CustomLink}>
            Account
          </EvoFakeMenuItem>
        </EvoFakeMenuItems>
      </EvoFakeMenu>,
    );

    const link = screen.getByRole("link", { name: "Account" });
    await expect.element(link).toHaveAttribute("data-custom-link", "true");
    await expect.element(link).toHaveAttribute("href", "/account");
    await expect.element(link).toHaveClass("fake-menu__item");
  });

  it("sets aria-current according to itemMatchesUrl", async () => {
    const screen = await render(
      <EvoFakeMenu>
        <EvoFakeMenuItems>
          <EvoFakeMenuItem href="/current" current>
            Current page
          </EvoFakeMenuItem>
          <EvoFakeMenuItem href="/selection" current itemMatchesUrl={false}>
            Current selection
          </EvoFakeMenuItem>
        </EvoFakeMenuItems>
      </EvoFakeMenu>,
    );

    await expect
      .element(screen.getByRole("link", { name: "Current page" }))
      .toHaveAttribute("aria-current", "page");
    await expect
      .element(screen.getByRole("link", { name: "Current selection" }))
      .toHaveAttribute("aria-current", "true");
  });

  it("uses native disabled behavior for links and buttons", async () => {
    const onLinkClick = vi.fn();
    const onButtonClick = vi.fn();
    const screen = await render(
      <EvoFakeMenu>
        <EvoFakeMenuItems>
          <EvoFakeMenuItem href="/disabled" disabled onClick={onLinkClick}>
            Disabled link
          </EvoFakeMenuItem>
          <EvoFakeMenuItem type="button" disabled onClick={onButtonClick}>
            Disabled button
          </EvoFakeMenuItem>
        </EvoFakeMenuItems>
      </EvoFakeMenu>,
    );

    const disabledLink = screen
      .getByText("Disabled link")
      .element()
      .closest("a");
    expect(disabledLink).not.toBeNull();
    await expect.element(disabledLink!).not.toHaveAttribute("href");
    await expect
      .element(disabledLink!)
      .toHaveAttribute("aria-disabled", "true");

    const disabledButton = screen.getByRole("button", {
      name: "Disabled button",
    });
    await expect.element(disabledButton).toBeDisabled();
    await disabledButton.click({ force: true });
    expect(onButtonClick).not.toHaveBeenCalled();
  });

  it("passes native click and keyboard events to the item", async () => {
    const onClick = vi.fn((event: MouseEvent) => event.preventDefault());
    const onKeyDown = vi.fn();
    const screen = await render(
      <EvoFakeMenu>
        <EvoFakeMenuItems>
          <EvoFakeMenuItem href="#" onClick={onClick} onKeyDown={onKeyDown}>
            Account
          </EvoFakeMenuItem>
        </EvoFakeMenuItems>
      </EvoFakeMenu>,
    );

    const link = screen.getByRole("link", { name: "Account" });
    await user.click(link);
    await user.keyboard("{ArrowDown}");

    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onClick.mock.calls[0][0]).toEqual(
      expect.objectContaining({ type: "click" }),
    );
    expect(onKeyDown).toHaveBeenCalledWith(
      expect.objectContaining({ key: "ArrowDown", type: "keydown" }),
    );
  });

  it("forwards refs and applies prefixed classes", async () => {
    const rootRef = createRef<HTMLSpanElement>();
    const itemsRef = createRef<HTMLUListElement>();
    const itemRef = createRef<HTMLAnchorElement>();

    const screen = await render(
      <EvoFakeMenu
        ref={rootRef}
        classPrefix="fake-menu-button"
        reverse
        fixed
        fixWidth
      >
        <EvoFakeMenuItems ref={itemsRef}>
          <EvoFakeMenuItem ref={itemRef} href="/account">
            Account
          </EvoFakeMenuItem>
          <EvoFakeMenuSeparator />
        </EvoFakeMenuItems>
      </EvoFakeMenu>,
    );

    expect(rootRef.current).toBeInstanceOf(HTMLSpanElement);
    expect(itemsRef.current).toBeInstanceOf(HTMLUListElement);
    expect(itemRef.current).toBeInstanceOf(HTMLAnchorElement);
    await expect
      .element(screen.getByRole("list"))
      .toHaveClass("fake-menu__items");
    await expect
      .element(screen.getByRole("link", { name: "Account" }))
      .toHaveClass("fake-menu-button__item");
    await expect
      .element(screen.getByRole("separator"))
      .toHaveClass("fake-menu-button__separator");
    expect(rootRef.current).toHaveClass(
      "fake-menu-button__menu",
      "fake-menu-button__menu--reverse",
      "fake-menu-button__menu--fixed",
      "fake-menu-button__menu--fix-width",
    );
  });
});
