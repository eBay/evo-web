import { createRef } from "react";
import { beforeEach, afterEach, describe, expect, it, vi } from "vitest";
import { userEvent } from "vitest/browser";
import { render } from "vitest-browser-react";
import {
  EvoMenuButton,
  EvoMenuButtonCheckboxItem,
  EvoMenuButtonItem,
  EvoMenuButtonMenu,
  EvoMenuButtonRadioItem,
  EvoMenuButtonTrigger,
  EvoMenuCheckboxGroup,
  EvoMenuRadioGroup,
} from "../index";

describe("EvoMenuButton", () => {
  let user: ReturnType<typeof userEvent.setup>;
  beforeEach(() => {
    user = userEvent.setup();
  });
  afterEach(() => {
    user.cleanup();
  });

  it("opens, focuses the first item, navigates, and dismisses with Escape", async () => {
    const screen = await render(
      <EvoMenuButton>
        <EvoMenuButtonTrigger>Actions</EvoMenuButtonTrigger>
        <EvoMenuButtonMenu>
          <EvoMenuButtonItem>First</EvoMenuButtonItem>
          <EvoMenuButtonItem>Second</EvoMenuButtonItem>
        </EvoMenuButtonMenu>
      </EvoMenuButton>,
    );
    const trigger = screen.getByRole("button", { name: "Actions" });
    await expect.element(trigger).toHaveAttribute("aria-expanded", "false");
    await user.click(trigger);
    await expect.element(trigger).toHaveAttribute("aria-expanded", "true");
    await expect
      .element(screen.getByRole("menuitem", { name: "First" }))
      .toHaveFocus();
    await user.keyboard("{ArrowDown}");
    await expect
      .element(screen.getByRole("menuitem", { name: "Second" }))
      .toHaveFocus();
    await user.keyboard("{Escape}");
    await expect.element(trigger).toHaveFocus();
    await expect.element(trigger).toHaveAttribute("aria-expanded", "false");
  });

  it("runs item selection and collapses after click", async () => {
    const onSelect = vi.fn();
    const screen = await render(
      <EvoMenuButton collapseOnSelect>
        <EvoMenuButtonTrigger>Actions</EvoMenuButtonTrigger>
        <EvoMenuButtonMenu>
          <EvoMenuButtonItem onSelect={onSelect}>Edit</EvoMenuButtonItem>
        </EvoMenuButtonMenu>
      </EvoMenuButton>,
    );
    const trigger = screen.getByRole("button", { name: "Actions" });
    await user.click(trigger);
    await user.click(screen.getByRole("menuitem", { name: "Edit" }));
    expect(onSelect).toHaveBeenCalledOnce();
    await expect.element(trigger).toHaveAttribute("aria-expanded", "false");
    await expect.element(trigger).toHaveFocus();
  });

  it("keeps the popup open when collapseOnSelect is omitted", async () => {
    const screen = await render(
      <EvoMenuButton>
        <EvoMenuButtonTrigger>Actions</EvoMenuButtonTrigger>
        <EvoMenuButtonMenu>
          <EvoMenuButtonItem>Edit</EvoMenuButtonItem>
        </EvoMenuButtonMenu>
      </EvoMenuButton>,
    );
    await user.click(screen.getByRole("button", { name: "Actions" }));
    await user.click(screen.getByRole("menuitem", { name: "Edit" }));
    await expect.element(screen.getByRole("menu")).toBeInTheDocument();
  });

  it("supports value-based radio and checkbox selection", async () => {
    const onRadioChange = vi.fn();
    const onCheckboxChange = vi.fn();
    const screen = await render(
      <EvoMenuButton>
        <EvoMenuButtonTrigger>Preferences</EvoMenuButtonTrigger>
        <EvoMenuButtonMenu>
          <EvoMenuRadioGroup
            defaultSelected="recent"
            onSelectedChange={onRadioChange}
          >
            <EvoMenuButtonRadioItem value="recent">
              Recent
            </EvoMenuButtonRadioItem>
            <EvoMenuButtonRadioItem value="price">Price</EvoMenuButtonRadioItem>
          </EvoMenuRadioGroup>
          <EvoMenuCheckboxGroup
            defaultSelected={[]}
            onSelectedChange={onCheckboxChange}
          >
            <EvoMenuButtonCheckboxItem value="free">
              Free shipping
            </EvoMenuButtonCheckboxItem>
          </EvoMenuCheckboxGroup>
        </EvoMenuButtonMenu>
      </EvoMenuButton>,
    );
    await user.click(screen.getByRole("button", { name: "Preferences" }));
    await user.click(screen.getByRole("menuitemradio", { name: "Price" }));
    await user.click(
      screen.getByRole("menuitemcheckbox", { name: "Free shipping" }),
    );
    expect(onRadioChange).toHaveBeenCalledWith("price");
    expect(onCheckboxChange).toHaveBeenCalledWith(["free"]);
  });

  it("honors disabled and forwards native refs and attributes", async () => {
    const rootRef = createRef<HTMLSpanElement>();
    const triggerRef = createRef<HTMLButtonElement>();
    const screen = await render(
      <EvoMenuButton ref={rootRef} data-testid="menu-button-root" disabled>
        <EvoMenuButtonTrigger ref={triggerRef}>Actions</EvoMenuButtonTrigger>
        <EvoMenuButtonMenu>
          <EvoMenuButtonItem>Edit</EvoMenuButtonItem>
        </EvoMenuButtonMenu>
      </EvoMenuButton>,
    );
    expect(rootRef.current).toBe(
      screen.getByTestId("menu-button-root").element(),
    );
    expect(triggerRef.current).toBe(
      screen.getByRole("button", { name: "Actions" }).element(),
    );
    await expect
      .element(screen.getByRole("button", { name: "Actions" }))
      .toBeDisabled();
  });
});
