import { createRef } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { userEvent } from "vitest/browser";
import { render } from "vitest-browser-react";
import {
  EvoFilterMenuButton,
  EvoFilterMenuFooterButton,
  EvoFilterMenuItem,
  EvoFilterMenuItems,
} from "../index";

describe("evo-filter-menu-button", () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });

  afterEach(() => {
    user.cleanup();
  });

  it("opens the menu, focuses the first choice, and reports open changes", async () => {
    const onOpenChange = vi.fn();
    const screen = await render(
      <EvoFilterMenuButton text="Delivery" onOpenChange={onOpenChange}>
        <EvoFilterMenuItems>
          <EvoFilterMenuItem value="free">Free shipping</EvoFilterMenuItem>
          <EvoFilterMenuItem value="local">Local pickup</EvoFilterMenuItem>
        </EvoFilterMenuItems>
      </EvoFilterMenuButton>,
    );
    const trigger = screen.getByRole("button", { name: /Delivery/ });
    await expect.element(trigger).toHaveAttribute("aria-expanded", "false");
    await user.click(trigger);
    await expect.element(trigger).toHaveAttribute("aria-expanded", "true");
    await expect
      .element(screen.getByRole("menuitemcheckbox", { name: "Free shipping" }))
      .toHaveFocus();
    expect(onOpenChange).toHaveBeenCalledWith(true);
  });

  it("closes on Escape and restores trigger focus", async () => {
    const onOpenChange = vi.fn();
    const screen = await render(
      <EvoFilterMenuButton text="Delivery" onOpenChange={onOpenChange}>
        <EvoFilterMenuItems>
          <EvoFilterMenuItem value="free">Free shipping</EvoFilterMenuItem>
        </EvoFilterMenuItems>
      </EvoFilterMenuButton>,
    );
    const trigger = screen.getByRole("button", { name: /Delivery/ });
    await user.click(trigger);
    await user.keyboard("{Escape}");
    await expect.element(trigger).toHaveAttribute("aria-expanded", "false");
    await expect.element(trigger).toHaveFocus();
    expect(onOpenChange).toHaveBeenLastCalledWith(false);
  });

  it("updates selected styling and hidden announcement with item selection", async () => {
    const onSelectedChange = vi.fn();
    const screen = await render(
      <EvoFilterMenuButton text="Delivery" onSelectedChange={onSelectedChange}>
        <EvoFilterMenuItems>
          <EvoFilterMenuItem value="free">Free shipping</EvoFilterMenuItem>
        </EvoFilterMenuItems>
      </EvoFilterMenuButton>,
    );
    const trigger = screen.getByRole("button", { name: /Delivery/ });
    await user.click(trigger);
    await user.click(
      screen.getByRole("menuitemcheckbox", { name: "Free shipping" }),
    );
    await expect
      .element(trigger)
      .toHaveClass("filter-menu-button__button--selected");
    await expect
      .element(screen.getByText("Filter Applied"))
      .toBeInTheDocument();
    expect(onSelectedChange).toHaveBeenCalledWith(["free"]);
  });

  it("uses hasSelection to override visual styling", async () => {
    const screen = await render(
      <EvoFilterMenuButton
        text="Delivery"
        selected={["free"]}
        hasSelection={false}
      >
        <EvoFilterMenuItems>
          <EvoFilterMenuItem value="free">Free shipping</EvoFilterMenuItem>
        </EvoFilterMenuItems>
      </EvoFilterMenuButton>,
    );
    const trigger = screen.getByRole("button", { name: /Delivery/ });
    await expect
      .element(trigger)
      .not.toHaveClass("filter-menu-button__button--selected");
    await user.click(trigger);
    await expect
      .element(screen.getByRole("menuitemcheckbox", { name: "Free shipping" }))
      .toHaveAttribute("aria-checked", "true");
  });

  it("prevents opening when disabled", async () => {
    const screen = await render(
      <EvoFilterMenuButton text="Delivery" disabled>
        <EvoFilterMenuItems>
          <EvoFilterMenuItem value="free">Free shipping</EvoFilterMenuItem>
        </EvoFilterMenuItems>
      </EvoFilterMenuButton>,
    );
    const trigger = screen.getByRole("button", { name: /Delivery/ });
    await expect.element(trigger).toBeDisabled();
    await expect.element(trigger).toHaveAttribute("aria-expanded", "false");
  });

  it("closes after the named footer action", async () => {
    const onFooterClick = vi.fn();
    const screen = await render(
      <EvoFilterMenuButton text="Delivery" onFooterClick={onFooterClick}>
        <EvoFilterMenuItems>
          <EvoFilterMenuItem value="free">Free shipping</EvoFilterMenuItem>
        </EvoFilterMenuItems>
        <EvoFilterMenuFooterButton>Apply filters</EvoFilterMenuFooterButton>
      </EvoFilterMenuButton>,
    );
    const trigger = screen.getByRole("button", { name: /Delivery/ });
    await user.click(trigger);
    await user.click(
      screen.getByRole("menuitemcheckbox", { name: "Free shipping" }),
    );
    await user.click(screen.getByRole("button", { name: "Apply filters" }));
    await expect.element(trigger).toHaveAttribute("aria-expanded", "false");
    await expect.element(trigger).toHaveFocus();
    expect(onFooterClick).toHaveBeenLastCalledWith(expect.any(Object), {
      selected: ["free"],
    });
  });

  it("submits the native form and closes", async () => {
    const onFormSubmit = vi.fn((event) => event.preventDefault());
    const screen = await render(
      <EvoFilterMenuButton
        text="Sort"
        type="radio"
        variant="form"
        onFormSubmit={onFormSubmit}
        footerText="Apply sort"
      >
        <EvoFilterMenuItems>
          <EvoFilterMenuItem value="recent">Recently listed</EvoFilterMenuItem>
          <EvoFilterMenuItem value="price">Lowest price</EvoFilterMenuItem>
        </EvoFilterMenuItems>
      </EvoFilterMenuButton>,
    );
    const trigger = screen.getByRole("button", { name: /Sort/ });
    await user.click(trigger);
    await user.click(screen.getByRole("radio", { name: "Lowest price" }));
    await user.click(screen.getByRole("button", { name: "Apply sort" }));
    await expect.element(trigger).toHaveAttribute("aria-expanded", "false");
    expect(onFormSubmit).toHaveBeenLastCalledWith(expect.any(Object), {
      selected: ["price"],
    });
  });

  it("forwards root attributes and ref", async () => {
    const ref = createRef<HTMLSpanElement>();
    const screen = await render(
      <EvoFilterMenuButton
        text="Delivery"
        ref={ref}
        id="delivery-filters"
        className="custom"
      >
        <EvoFilterMenuItems>
          <EvoFilterMenuItem value="free">Free shipping</EvoFilterMenuItem>
        </EvoFilterMenuItems>
      </EvoFilterMenuButton>,
    );
    expect(ref.current).toBe(
      screen.getByRole("button", { name: "Delivery" }).element().parentElement,
    );
    expect(ref.current).toHaveClass("filter-menu-button", "custom");
    expect(ref.current).toHaveAttribute("id", "delivery-filters");
  });
});
