import { createRef, useState } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { userEvent } from "vitest/browser";
import { render } from "vitest-browser-react";
import {
  EvoMenuButton,
  EvoMenuButtonTrigger,
  EvoMenu,
  EvoMenuCheckboxGroup,
  EvoMenuCheckboxItem,
  EvoMenuItem,
  EvoMenuItems,
  EvoMenuRadioGroup,
  EvoMenuRadioItem,
} from "../index";

describe("EvoMenuButton", () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });

  afterEach(() => {
    user.cleanup();
  });

  it("opens, labels the menu from its trigger, focuses the first enabled item, navigates, and dismisses with Escape", async () => {
    const screen = await render(
      <EvoMenuButton>
        <EvoMenuButtonTrigger>Actions</EvoMenuButtonTrigger>
        <EvoMenu>
          <EvoMenuItems>
            <EvoMenuItem disabled>Unavailable</EvoMenuItem>
            <EvoMenuItem>First</EvoMenuItem>
            <EvoMenuItem>Second</EvoMenuItem>
          </EvoMenuItems>
        </EvoMenu>
      </EvoMenuButton>,
    );
    const trigger = screen.getByRole("button", { name: "Actions" });
    await expect.element(trigger).toHaveAttribute("aria-expanded", "false");
    await user.click(trigger);
    await expect.element(trigger).toHaveAttribute("aria-expanded", "true");
    const menu = screen.getByRole("menu", { name: "Actions" });
    await expect.element(menu).toBeInTheDocument();
    await expect.element(trigger).toHaveClass("btn");
    expect(menu.element().closest(".menu-button__menu")).not.toHaveClass(
      "menu-button--filter",
    );
    await expect
      .element(screen.getByRole("menuitem", { name: "Unavailable" }))
      .not.toHaveFocus();
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

  it("uses the root variant for trigger and popup presentation", async () => {
    const screen = await render(
      <>
        <EvoMenuButton variant="filter">
          <EvoMenuButtonTrigger hasSelection>Delivery</EvoMenuButtonTrigger>
          <EvoMenu>
            <EvoMenuItems a11yText="Delivery actions">
              <EvoMenuItem>Free shipping</EvoMenuItem>
            </EvoMenuItems>
          </EvoMenu>
        </EvoMenuButton>
        <EvoMenuButton variant="button">
          <EvoMenuButtonTrigger>Sort by</EvoMenuButtonTrigger>
          <EvoMenu>
            <EvoMenuItems a11yText="Sort choices">
              <EvoMenuCheckboxGroup defaultSelected={["recent"]}>
                <EvoMenuCheckboxItem value="recent">
                  Most recent
                </EvoMenuCheckboxItem>
                <EvoMenuCheckboxItem value="price">
                  Lowest price
                </EvoMenuCheckboxItem>
              </EvoMenuCheckboxGroup>
            </EvoMenuItems>
          </EvoMenu>
        </EvoMenuButton>
      </>,
    );
    const filterTrigger = screen.getByRole("button", { name: /Delivery/ });
    await expect.element(filterTrigger).toHaveClass("filter-chip--selected");
    await user.click(filterTrigger);
    const filterMenu = screen.getByRole("menu", { name: "Delivery actions" });
    expect(filterMenu.element().closest(".menu-button__menu")).toHaveClass(
      "menu-button--filter",
    );
    await user.keyboard("{Escape}");
    await expect
      .element(filterTrigger)
      .toHaveAttribute("aria-expanded", "false");

    const buttonTrigger = screen.getByRole("button", { name: "Sort by" });
    await expect.element(buttonTrigger).toHaveClass("btn");
    await user.click(buttonTrigger);
    const buttonMenu = screen.getByRole("menu", { name: "Sort choices" });
    expect(buttonMenu.element().closest(".menu-button__menu")).not.toHaveClass(
      "menu-button--filter",
    );
    await expect
      .element(screen.getByRole("menuitemcheckbox", { name: "Most recent" }))
      .toHaveAttribute("aria-checked", "true");
    await user.keyboard("{Escape}");
    await expect
      .element(buttonTrigger)
      .toHaveAttribute("aria-expanded", "false");
    await expect.element(buttonTrigger).toHaveFocus();
  });

  it("supports controlled open state and reports requested transitions", async () => {
    const onOpenChange = vi.fn();

    function ControlledMenuButton() {
      const [open, setOpen] = useState(false);
      return (
        <EvoMenuButton
          open={open}
          onOpenChange={(nextOpen) => {
            onOpenChange(nextOpen);
            setOpen(nextOpen);
          }}
        >
          <EvoMenuButtonTrigger>Actions</EvoMenuButtonTrigger>
          <EvoMenu>
            <EvoMenuItems>
              <EvoMenuItem>Edit</EvoMenuItem>
            </EvoMenuItems>
          </EvoMenu>
        </EvoMenuButton>
      );
    }

    const screen = await render(<ControlledMenuButton />);
    const trigger = screen.getByRole("button", { name: "Actions" });
    await user.click(trigger);
    await expect.element(trigger).toHaveAttribute("aria-expanded", "true");
    await user.keyboard("{Escape}");
    await expect.element(trigger).toHaveAttribute("aria-expanded", "false");
    expect(onOpenChange.mock.calls).toEqual([[true], [false]]);
    await expect.element(trigger).toHaveFocus();
  });

  it("dismisses on outside pointer interaction", async () => {
    const screen = await render(
      <>
        <EvoMenuButton>
          <EvoMenuButtonTrigger>Actions</EvoMenuButtonTrigger>
          <EvoMenu>
            <EvoMenuItems>
              <EvoMenuItem>Edit</EvoMenuItem>
            </EvoMenuItems>
          </EvoMenu>
        </EvoMenuButton>
        <button type="button">Outside</button>
      </>,
    );
    await user.click(screen.getByRole("button", { name: "Actions" }));
    await expect
      .element(screen.getByRole("menu", { name: "Actions" }))
      .toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Outside" }));
    await expect
      .element(screen.getByRole("menu", { name: "Actions" }))
      .not.toBeInTheDocument();
    await expect
      .element(screen.getByRole("button", { name: "Outside" }))
      .toHaveFocus();
  });

  it("dismisses when focus leaves the menu-button root", async () => {
    const screen = await render(
      <>
        <EvoMenuButton>
          <EvoMenuButtonTrigger>Actions</EvoMenuButtonTrigger>
          <EvoMenu>
            <EvoMenuItems>
              <EvoMenuItem>Edit</EvoMenuItem>
            </EvoMenuItems>
          </EvoMenu>
        </EvoMenuButton>
        <button type="button">Outside</button>
      </>,
    );
    await user.click(screen.getByRole("button", { name: "Actions" }));
    screen.getByRole("button", { name: "Outside" }).element().focus();
    await expect
      .element(screen.getByRole("menu", { name: "Actions" }))
      .not.toBeInTheDocument();
  });

  it("runs item selection before collapsing and restores trigger focus", async () => {
    const onSelect = vi.fn();
    const screen = await render(
      <EvoMenuButton collapseOnSelect>
        <EvoMenuButtonTrigger>Actions</EvoMenuButtonTrigger>
        <EvoMenu>
          <EvoMenuItems>
            <EvoMenuItem onSelect={onSelect}>Edit</EvoMenuItem>
          </EvoMenuItems>
        </EvoMenu>
      </EvoMenuButton>,
    );
    const trigger = screen.getByRole("button", { name: "Actions" });
    await user.click(trigger);
    await user.click(screen.getByRole("menuitem", { name: "Edit" }));
    expect(onSelect).toHaveBeenCalledOnce();
    await expect.element(trigger).toHaveAttribute("aria-expanded", "false");
    await expect.element(trigger).toHaveFocus();
  });

  it("collapses and restores focus after keyboard selection", async () => {
    const screen = await render(
      <EvoMenuButton collapseOnSelect>
        <EvoMenuButtonTrigger>Actions</EvoMenuButtonTrigger>
        <EvoMenu>
          <EvoMenuItems>
            <EvoMenuItem>Edit</EvoMenuItem>
          </EvoMenuItems>
        </EvoMenu>
      </EvoMenuButton>,
    );
    const trigger = screen.getByRole("button", { name: "Actions" });
    await user.click(trigger);
    await expect
      .element(screen.getByRole("menuitem", { name: "Edit" }))
      .toHaveFocus();
    await user.keyboard("{Enter}");
    await expect.element(trigger).toHaveAttribute("aria-expanded", "false");
    await expect.element(trigger).toHaveFocus();
  });

  it("keeps the popup open when collapseOnSelect is omitted", async () => {
    const screen = await render(
      <EvoMenuButton>
        <EvoMenuButtonTrigger>Actions</EvoMenuButtonTrigger>
        <EvoMenu>
          <EvoMenuItems>
            <EvoMenuItem>Edit</EvoMenuItem>
          </EvoMenuItems>
        </EvoMenu>
      </EvoMenuButton>,
    );
    await user.click(screen.getByRole("button", { name: "Actions" }));
    await user.click(screen.getByRole("menuitem", { name: "Edit" }));
    await expect
      .element(screen.getByRole("menu", { name: "Actions" }))
      .toBeInTheDocument();
  });

  it("supports radio and checkbox selection with collapseOnSelect", async () => {
    const onRadioChange = vi.fn();
    const onCheckboxChange = vi.fn();
    const screen = await render(
      <EvoMenuButton collapseOnSelect>
        <EvoMenuButtonTrigger>Preferences</EvoMenuButtonTrigger>
        <EvoMenu>
          <EvoMenuItems>
            <EvoMenuRadioGroup
              defaultSelected="recent"
              onSelectedChange={onRadioChange}
            >
              <EvoMenuRadioItem value="recent">Recent</EvoMenuRadioItem>
              <EvoMenuRadioItem value="price">Price</EvoMenuRadioItem>
            </EvoMenuRadioGroup>
            <EvoMenuCheckboxGroup
              defaultSelected={[]}
              onSelectedChange={onCheckboxChange}
            >
              <EvoMenuCheckboxItem value="free">
                Free shipping
              </EvoMenuCheckboxItem>
            </EvoMenuCheckboxGroup>
          </EvoMenuItems>
        </EvoMenu>
      </EvoMenuButton>,
    );
    const trigger = screen.getByRole("button", { name: "Preferences" });
    await user.click(trigger);
    await user.click(screen.getByRole("menuitemradio", { name: "Price" }));
    expect(onRadioChange).toHaveBeenCalledWith("price");
    await expect.element(trigger).toHaveAttribute("aria-expanded", "false");
    await expect.element(trigger).toHaveFocus();

    await user.click(trigger);
    await user.click(
      screen.getByRole("menuitemcheckbox", { name: "Free shipping" }),
    );
    expect(onCheckboxChange).toHaveBeenCalledWith(["free"]);
    await expect.element(trigger).toHaveAttribute("aria-expanded", "false");
    await expect.element(trigger).toHaveFocus();
  });

  it("hides a controlled-open popup while disabled", async () => {
    const screen = await render(
      <EvoMenuButton open disabled>
        <EvoMenuButtonTrigger>Actions</EvoMenuButtonTrigger>
        <EvoMenu>
          <EvoMenuItems>
            <EvoMenuItem>Edit</EvoMenuItem>
          </EvoMenuItems>
        </EvoMenu>
      </EvoMenuButton>,
    );
    await expect
      .element(screen.getByRole("button", { name: "Actions" }))
      .toBeDisabled();
    await expect
      .element(screen.getByRole("button", { name: "Actions" }))
      .toHaveAttribute("aria-expanded", "false");
    await expect
      .element(screen.getByRole("menu", { name: "Actions" }))
      .not.toBeInTheDocument();
  });

  it("honors disabled, defaultOpen, and native refs and attributes", async () => {
    const rootRef = createRef<HTMLSpanElement>();
    const triggerRef = createRef<HTMLButtonElement>();
    const screen = await render(
      <EvoMenuButton
        ref={rootRef}
        data-testid="menu-button-root"
        defaultOpen
        disabled
      >
        <EvoMenuButtonTrigger ref={triggerRef}>Actions</EvoMenuButtonTrigger>
        <EvoMenu>
          <EvoMenuItems>
            <EvoMenuItem>Edit</EvoMenuItem>
          </EvoMenuItems>
        </EvoMenu>
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
    await expect
      .element(screen.getByRole("button", { name: "Actions" }))
      .toHaveAttribute("aria-expanded", "false");
  });

  it("applies trigger presentation and accessibility props", async () => {
    const onFilterClick = vi.fn();
    const onStandardClick = vi.fn();
    const screen = await render(
      <>
        <span id="standard-prefix">Seller</span>
        <EvoMenuButton>
          <EvoMenuButtonTrigger
            data-testid="standard-trigger"
            name="standard"
            form="sort-form"
            priority="primary"
            size="large"
            transparent
            split="end"
            prefixId="standard-prefix"
            onClick={onStandardClick}
          >
            Standard actions
          </EvoMenuButtonTrigger>
          <EvoMenu />
        </EvoMenuButton>
        <EvoMenuButton variant="form">
          <EvoMenuButtonTrigger
            data-testid="form-trigger"
            borderless
            size="small"
            noToggleIcon
          >
            Sort by
          </EvoMenuButtonTrigger>
          <EvoMenu />
        </EvoMenuButton>
        <EvoMenuButton variant="icon">
          <EvoMenuButtonTrigger
            data-testid="icon-trigger"
            name="icon-actions"
            a11yText="More actions"
            transparent
            size="small"
          />
          <EvoMenu />
        </EvoMenuButton>
        <EvoMenuButton variant="filter">
          <EvoMenuButtonTrigger
            data-testid="filter-trigger"
            name="delivery"
            value="free-shipping"
            hasSelection
            a11ySelectedText="Filters applied"
            onClick={onFilterClick}
          >
            Delivery
          </EvoMenuButtonTrigger>
          <EvoMenu />
        </EvoMenuButton>
      </>,
    );

    await expect
      .element(screen.getByRole("button", { name: "Seller Standard actions" }))
      .toBeInTheDocument();
    await expect
      .element(screen.getByTestId("standard-trigger"))
      .toHaveClass(
        "btn--primary",
        "btn--large",
        "btn--transparent",
        "btn--split-end",
      );
    await expect
      .element(screen.getByTestId("form-trigger"))
      .toHaveClass("btn--form", "btn--small", "btn--borderless");
    expect(
      screen.getByTestId("form-trigger").element().querySelector("svg"),
    ).toBeNull();
    await expect
      .element(screen.getByRole("button", { name: "More actions" }))
      .toHaveClass("icon-btn--small", "icon-btn--transparent");
    await expect
      .element(screen.getByTestId("icon-trigger"))
      .toHaveAttribute("name", "icon-actions");
    await expect
      .element(screen.getByTestId("filter-trigger"))
      .toHaveClass("filter-chip--selected");
    await expect
      .element(screen.getByTestId("standard-trigger"))
      .toHaveAttribute("name", "standard");
    await expect
      .element(screen.getByTestId("standard-trigger"))
      .toHaveAttribute("form", "sort-form");
    await expect
      .element(screen.getByTestId("filter-trigger"))
      .toHaveAttribute("name", "delivery");
    await expect
      .element(screen.getByTestId("filter-trigger"))
      .toHaveAttribute("value", "free-shipping");

    await user.click(screen.getByTestId("filter-trigger"));
    expect(onFilterClick).toHaveBeenCalledOnce();
    expect(onFilterClick.mock.calls[0]).toHaveLength(1);
    expect(onFilterClick.mock.calls[0]?.[0]).toHaveProperty("type", "click");
    await expect
      .element(screen.getByTestId("filter-trigger"))
      .toHaveAttribute("aria-expanded", "true");

    await user.click(screen.getByTestId("standard-trigger"));
    expect(onStandardClick).toHaveBeenCalledOnce();
    expect(onStandardClick.mock.calls[0]).toHaveLength(1);
    expect(onStandardClick.mock.calls[0]?.[0]).toHaveProperty("type", "click");
  });

  it("does not forward wrapper-only aliases to mismatched trigger variants", async () => {
    const screen = await render(
      <>
        <EvoMenuButton variant="button">
          <EvoMenuButtonTrigger
            data-testid="button-trigger-aliases"
            hasSelection
            a11ySelectedText="Filter Applied"
          >
            Delivery
          </EvoMenuButtonTrigger>
          <EvoMenu />
        </EvoMenuButton>
        <EvoMenuButton variant="icon">
          <EvoMenuButtonTrigger
            data-testid="icon-trigger-aliases"
            a11yText="More actions"
            noToggleIcon
          />
          <EvoMenu />
        </EvoMenuButton>
      </>,
    );
    const buttonTrigger = screen.getByTestId("button-trigger-aliases");
    const iconTrigger = screen.getByTestId("icon-trigger-aliases");

    await expect.element(buttonTrigger).toHaveClass("btn");
    expect(buttonTrigger.element().getAttributeNames()).not.toContain(
      "hasselection",
    );
    expect(buttonTrigger.element().getAttributeNames()).not.toContain(
      "a11yselectedtext",
    );
    await expect.element(iconTrigger).toHaveClass("icon-btn");
    expect(iconTrigger.element().getAttributeNames()).not.toContain(
      "notoggleicon",
    );
  });

  it("uses the default icon label and filter selected text", async () => {
    const screen = await render(
      <>
        <EvoMenuButton variant="icon">
          <EvoMenuButtonTrigger />
          <EvoMenu />
        </EvoMenuButton>
        <EvoMenuButton variant="filter">
          <EvoMenuButtonTrigger
            hasSelection
            data-testid="default-filter-trigger"
          >
            Delivery
          </EvoMenuButtonTrigger>
          <EvoMenu />
        </EvoMenuButton>
      </>,
    );

    await expect
      .element(screen.getByRole("button", { name: "Menu" }))
      .toBeInTheDocument();
    await expect
      .element(screen.getByTestId("default-filter-trigger"))
      .toHaveTextContent("Delivery - Filter Applied");
  });

  it("preserves title-based naming when icon a11yText is null", async () => {
    const screen = await render(
      <EvoMenuButton variant="icon">
        <EvoMenuButtonTrigger a11yText={null} title="More listing actions" />
        <EvoMenu />
      </EvoMenuButton>,
    );
    const trigger = screen.getByRole("button", {
      name: "More listing actions",
    });

    await expect.element(trigger).not.toHaveAttribute("aria-label");
  });

  it("blocks activation of a partially disabled trigger", async () => {
    const screen = await render(
      <EvoMenuButton>
        <EvoMenuButtonTrigger partiallyDisabled>Actions</EvoMenuButtonTrigger>
        <EvoMenu>
          <EvoMenuItems>
            <EvoMenuItem>Edit</EvoMenuItem>
          </EvoMenuItems>
        </EvoMenu>
      </EvoMenuButton>,
    );
    const trigger = screen.getByRole("button", { name: "Actions" });
    await expect.element(trigger).toHaveAttribute("aria-disabled", "true");
    (trigger.element() as HTMLButtonElement).click();
    await expect.element(trigger).toHaveAttribute("aria-expanded", "false");
  });

  it("honors an explicit accessible name for the menu", async () => {
    const screen = await render(
      <EvoMenuButton>
        <EvoMenuButtonTrigger>Actions</EvoMenuButtonTrigger>
        <EvoMenu>
          <EvoMenuItems a11yText="Available actions">
            <EvoMenuItem>Edit</EvoMenuItem>
          </EvoMenuItems>
        </EvoMenu>
      </EvoMenuButton>,
    );
    await user.click(screen.getByRole("button", { name: "Actions" }));
    await expect
      .element(screen.getByRole("menu", { name: "Available actions" }))
      .toBeInTheDocument();
  });

  it("uses an explicit label ID and applies popup positioning settings", async () => {
    const screen = await render(
      <>
        <span id="menu-label">Available actions</span>
        <EvoMenuButton reverse strategy="fixed" fixWidth>
          <EvoMenuButtonTrigger>Actions</EvoMenuButtonTrigger>
          <EvoMenu>
            <EvoMenuItems a11yLabelId="menu-label">
              <EvoMenuItem>Edit</EvoMenuItem>
            </EvoMenuItems>
          </EvoMenu>
        </EvoMenuButton>
      </>,
    );
    await user.click(screen.getByRole("button", { name: "Actions" }));
    const menu = screen.getByRole("menu", { name: "Available actions" });
    await expect.element(menu).toBeInTheDocument();
    expect(menu.element().closest(".menu-button__menu")).toHaveClass(
      "menu-button__menu--reverse",
      "menu-button__menu--fixed",
      "menu-button__menu--fix-width",
    );
  });
});
