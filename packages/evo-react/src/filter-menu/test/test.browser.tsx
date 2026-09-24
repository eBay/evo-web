import { createRef } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { userEvent } from "vitest/browser";
import { render } from "vitest-browser-react";
import {
  EvoFilterMenu,
  EvoFilterMenuFooterButton,
  EvoFilterMenuItem,
  EvoFilterMenuItems,
} from "../index";

describe("evo-filter-menu", () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });

  afterEach(() => {
    user.cleanup();
  });

  it("renders a named checkbox menu and forwards the root ref", async () => {
    const ref = createRef<HTMLSpanElement>();
    const screen = await render(
      <EvoFilterMenu ref={ref} a11yText="Delivery filters" className="custom">
        <EvoFilterMenuItems>
          <EvoFilterMenuItem value="free">Free shipping</EvoFilterMenuItem>
        </EvoFilterMenuItems>
      </EvoFilterMenu>,
    );

    const menu = screen.getByRole("menu", { name: "Delivery filters" });
    const item = screen.getByRole("menuitemcheckbox", {
      name: "Free shipping",
    });
    await expect.element(menu).toBeInTheDocument();
    await expect.element(item).toHaveAttribute("aria-checked", "false");
    expect(ref.current).toHaveClass("filter-menu", "custom");
  });

  it("toggles uncontrolled checkbox choices and reports next selection", async () => {
    const onSelectedChange = vi.fn();
    const onSelect = vi.fn();
    const screen = await render(
      <EvoFilterMenu a11yText="Delivery" onSelectedChange={onSelectedChange}>
        <EvoFilterMenuItems>
          <EvoFilterMenuItem value="free" onSelect={onSelect}>
            Free shipping
          </EvoFilterMenuItem>
          <EvoFilterMenuItem value="local">Local pickup</EvoFilterMenuItem>
        </EvoFilterMenuItems>
      </EvoFilterMenu>,
    );
    const free = screen.getByRole("menuitemcheckbox", {
      name: "Free shipping",
    });

    await user.click(free);
    await expect.element(free).toHaveAttribute("aria-checked", "true");
    expect(onSelectedChange).toHaveBeenLastCalledWith(["free"]);
    expect(onSelect).toHaveBeenLastCalledWith(expect.any(Object), {
      selected: ["free"],
      value: "free",
      checked: true,
    });

    await user.click(free);
    await expect.element(free).toHaveAttribute("aria-checked", "false");
    expect(onSelectedChange).toHaveBeenLastCalledWith([]);
  });

  it("preserves controlled selection until the consumer updates it", async () => {
    const onSelectedChange = vi.fn();
    const screen = await render(
      <EvoFilterMenu
        a11yText="Delivery"
        selected={["free"]}
        onSelectedChange={onSelectedChange}
      >
        <EvoFilterMenuItems>
          <EvoFilterMenuItem value="free">Free shipping</EvoFilterMenuItem>
        </EvoFilterMenuItems>
      </EvoFilterMenu>,
    );
    const free = screen.getByRole("menuitemcheckbox", {
      name: "Free shipping",
    });
    await user.click(free);
    await expect.element(free).toHaveAttribute("aria-checked", "true");
    expect(onSelectedChange).toHaveBeenCalledWith([]);
  });

  it("selects only one radio choice by keyboard", async () => {
    const onSelectedChange = vi.fn();
    const screen = await render(
      <EvoFilterMenu
        type="radio"
        a11yText="Sort"
        onSelectedChange={onSelectedChange}
      >
        <EvoFilterMenuItems>
          <EvoFilterMenuItem value="recent">Recently listed</EvoFilterMenuItem>
          <EvoFilterMenuItem value="price">Lowest price</EvoFilterMenuItem>
        </EvoFilterMenuItems>
      </EvoFilterMenu>,
    );
    const recent = screen.getByRole("menuitemradio", {
      name: "Recently listed",
    });
    const price = screen.getByRole("menuitemradio", { name: "Lowest price" });

    await user.click(recent);
    await user.keyboard("{ArrowDown}{Enter}");
    await expect.element(price).toHaveFocus();
    await expect.element(price).toHaveAttribute("aria-checked", "true");
    await expect.element(recent).toHaveAttribute("aria-checked", "false");
    expect(onSelectedChange).toHaveBeenLastCalledWith("price");
  });

  it("skips disabled items in arrow navigation and ignores their clicks", async () => {
    const onSelectedChange = vi.fn();
    const screen = await render(
      <EvoFilterMenu a11yText="Delivery" onSelectedChange={onSelectedChange}>
        <EvoFilterMenuItems>
          <EvoFilterMenuItem value="free">Free shipping</EvoFilterMenuItem>
          <EvoFilterMenuItem value="local" disabled>
            Local pickup
          </EvoFilterMenuItem>
          <EvoFilterMenuItem value="express">
            Express delivery
          </EvoFilterMenuItem>
        </EvoFilterMenuItems>
      </EvoFilterMenu>,
    );
    const free = screen.getByRole("menuitemcheckbox", {
      name: "Free shipping",
    });
    const local = screen.getByRole("menuitemcheckbox", {
      name: "Local pickup",
    });
    const express = screen.getByRole("menuitemcheckbox", {
      name: "Express delivery",
    });
    await user.click(free);
    await user.keyboard("{ArrowDown}");
    await expect.element(express).toHaveFocus();
    await expect.element(local).toHaveAttribute("aria-disabled", "true");
    await expect.element(local).toHaveAttribute("aria-checked", "false");
    expect(onSelectedChange).toHaveBeenCalledTimes(1);
  });

  it("reports search changes and clears the search field", async () => {
    const onSearchChange = vi.fn();
    const screen = await render(
      <EvoFilterMenu
        a11yText="Delivery"
        searchHeaderPlaceholderText="Search delivery options"
        onSearchChange={onSearchChange}
      >
        <EvoFilterMenuItems>
          <EvoFilterMenuItem value="free">Free shipping</EvoFilterMenuItem>
        </EvoFilterMenuItems>
      </EvoFilterMenu>,
    );
    const search = screen.getByRole("textbox");
    await user.type(search, "free");
    await expect.element(search).toHaveValue("free");
    expect(onSearchChange).toHaveBeenLastCalledWith("free");
    await user.click(screen.getByRole("button", { name: "Clear search" }));
    await expect.element(search).toHaveValue("");
    expect(onSearchChange).toHaveBeenLastCalledWith("");
  });

  it("reports selection from the footer outside form mode", async () => {
    const onFooterClick = vi.fn();
    const screen = await render(
      <EvoFilterMenu a11yText="Delivery" onFooterClick={onFooterClick}>
        <EvoFilterMenuItems>
          <EvoFilterMenuItem value="free">Free shipping</EvoFilterMenuItem>
        </EvoFilterMenuItems>
        <EvoFilterMenuFooterButton>Apply filters</EvoFilterMenuFooterButton>
      </EvoFilterMenu>,
    );
    await user.click(
      screen.getByRole("menuitemcheckbox", { name: "Free shipping" }),
    );
    await user.click(screen.getByRole("button", { name: "Apply filters" }));
    expect(onFooterClick).toHaveBeenLastCalledWith(expect.any(Object), {
      selected: ["free"],
    });
  });

  it("uses native inputs and submits the current selection in form mode", async () => {
    const onFormSubmit = vi.fn((event) => event.preventDefault());
    const screen = await render(
      <EvoFilterMenu
        variant="form"
        a11yText="Delivery"
        onFormSubmit={onFormSubmit}
      >
        <EvoFilterMenuItems>
          <EvoFilterMenuItem value="free">Free shipping</EvoFilterMenuItem>
          <EvoFilterMenuItem value="local">Local pickup</EvoFilterMenuItem>
        </EvoFilterMenuItems>
        <EvoFilterMenuFooterButton>Apply filters</EvoFilterMenuFooterButton>
      </EvoFilterMenu>,
    );
    const free = screen.getByRole("checkbox", { name: "Free shipping" });
    await user.click(free);
    await expect.element(free).toBeChecked();
    await user.click(screen.getByRole("button", { name: "Apply filters" }));
    expect(onFormSubmit).toHaveBeenLastCalledWith(expect.any(Object), {
      selected: ["free"],
    });
  });
});
