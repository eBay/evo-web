import { createRef, useState } from "react";
import { describe, expect, it, vi } from "vitest";
import { userEvent } from "vitest/browser";
import { render } from "vitest-browser-react";
import { EvoFakeMenuItem } from "../../fake-menu/fake-menu-item";
import { EvoFakeMenuItems } from "../../fake-menu/fake-menu-items";
import { EvoIconOverflowVertical16 } from "../../icon/icons/overflow-vertical-16";
import {
  EvoFakeMenuButton,
  EvoFakeMenuButtonMenu,
  EvoFakeMenuButtonTrigger,
} from "../index";

describe("evo-fake-menu-button", () => {
  it("opens a fake menu and returns focus on Escape", async () => {
    const ref = createRef<HTMLSpanElement>();
    const onOpenChange = vi.fn();
    const screen = await render(
      <EvoFakeMenuButton ref={ref} onOpenChange={onOpenChange}>
        <EvoFakeMenuButtonTrigger>Account options</EvoFakeMenuButtonTrigger>
        <EvoFakeMenuButtonMenu>
          <EvoFakeMenuItems>
            <EvoFakeMenuItem href="/orders">Orders</EvoFakeMenuItem>
            <EvoFakeMenuItem href="/messages">Messages</EvoFakeMenuItem>
          </EvoFakeMenuItems>
        </EvoFakeMenuButtonMenu>
      </EvoFakeMenuButton>,
    );
    const trigger = screen.getByRole("button", { name: "Account options" });
    expect(ref.current).toHaveClass("fake-menu-button");
    await expect.element(trigger).toHaveAttribute("aria-expanded", "false");
    await userEvent.click(trigger);
    await expect.element(trigger).toHaveAttribute("aria-expanded", "true");
    await expect
      .element(screen.getByRole("link", { name: "Orders" }))
      .toBeInTheDocument();
    const menu = screen.getByRole("list").element().parentElement;
    expect(menu?.tagName).toBe("SPAN");
    expect(menu).toHaveClass("fake-menu-button__menu");
    expect(trigger.element().getAttribute("aria-controls")).toBe(menu?.id);
    expect(screen.getByRole("link", { name: "Orders" }).element()).toHaveClass(
      "fake-menu-button__item",
    );
    expect(onOpenChange).toHaveBeenCalledWith(true);
    await userEvent.keyboard("{Escape}");
    await expect.element(trigger).toHaveAttribute("aria-expanded", "false");
    expect(screen.getByRole("link", { name: "Orders" }).query()).toBeNull();
    expect(document.activeElement).toBe(trigger.element());
  });

  it("closes after an outside pointer press", async () => {
    const onOpenChange = vi.fn();
    const screen = await render(
      <>
        <EvoFakeMenuButton onOpenChange={onOpenChange}>
          <EvoFakeMenuButtonTrigger>Account options</EvoFakeMenuButtonTrigger>
          <EvoFakeMenuButtonMenu>
            <EvoFakeMenuItems>
              <EvoFakeMenuItem href="/orders">Orders</EvoFakeMenuItem>
            </EvoFakeMenuItems>
          </EvoFakeMenuButtonMenu>
        </EvoFakeMenuButton>
        <button type="button">Outside</button>
      </>,
    );
    await userEvent.click(
      screen.getByRole("button", { name: "Account options" }),
    );
    await userEvent.click(screen.getByRole("button", { name: "Outside" }));
    await expect
      .element(screen.getByRole("button", { name: "Account options" }))
      .toHaveAttribute("aria-expanded", "false");
    expect(onOpenChange).toHaveBeenCalledTimes(2);
    expect(onOpenChange).toHaveBeenLastCalledWith(false);
  });

  it("supports controlled state and collapse on item activation", async () => {
    function ControlledMenu() {
      const [open, setOpen] = useState(false);
      return (
        <EvoFakeMenuButton open={open} onOpenChange={setOpen} collapseOnSelect>
          <EvoFakeMenuButtonTrigger>Actions</EvoFakeMenuButtonTrigger>
          <EvoFakeMenuButtonMenu>
            <EvoFakeMenuItems>
              <EvoFakeMenuItem type="button">Archive item</EvoFakeMenuItem>
            </EvoFakeMenuItems>
          </EvoFakeMenuButtonMenu>
        </EvoFakeMenuButton>
      );
    }
    const screen = await render(<ControlledMenu />);
    await userEvent.click(screen.getByRole("button", { name: "Actions" }));
    await userEvent.click(screen.getByRole("button", { name: "Archive item" }));
    await expect
      .element(screen.getByRole("button", { name: "Actions" }))
      .toHaveAttribute("aria-expanded", "false");
  });

  it("closes when keyboard focus leaves the menu", async () => {
    const screen = await render(
      <>
        <EvoFakeMenuButton>
          <EvoFakeMenuButtonTrigger>Account options</EvoFakeMenuButtonTrigger>
          <EvoFakeMenuButtonMenu>
            <EvoFakeMenuItems>
              <EvoFakeMenuItem href="/orders">Orders</EvoFakeMenuItem>
            </EvoFakeMenuItems>
          </EvoFakeMenuButtonMenu>
        </EvoFakeMenuButton>
        <button type="button">Outside</button>
      </>,
    );
    await userEvent.click(
      screen.getByRole("button", { name: "Account options" }),
    );
    await expect
      .element(screen.getByRole("link", { name: "Orders" }))
      .toHaveFocus();
    await userEvent.tab();
    await expect
      .element(screen.getByRole("button", { name: "Account options" }))
      .toHaveAttribute("aria-expanded", "false");
    await expect
      .element(screen.getByRole("button", { name: "Outside" }))
      .toHaveFocus();
  });

  it("renders an accessible icon trigger", async () => {
    const screen = await render(
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
    );
    const trigger = screen.getByRole("button", { name: "More actions" });
    await expect.element(trigger).toHaveClass("icon-btn");
    await userEvent.click(trigger);
    await expect
      .element(screen.getByRole("link", { name: "Orders" }))
      .toBeInTheDocument();
  });
});
