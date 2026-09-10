import { createRef } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { userEvent } from "vitest/browser";
import { render } from "vitest-browser-react";
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

describe("evo-menu", () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });

  afterEach(() => {
    user.cleanup();
  });

  it("renders the compound menu structure", async () => {
    const screen = await render(
      <EvoMenu>
        <EvoMenuItems a11yText="Actions">
          <EvoMenuItem>
            Messages
            <EvoMenuItemBadge number={5} a11yText="5 unread messages" />
          </EvoMenuItem>
          <EvoMenuSeparator />
        </EvoMenuItems>
        <EvoMenuFooter>
          <EvoButton>Apply</EvoButton>
        </EvoMenuFooter>
      </EvoMenu>,
    );

    await expect
      .element(screen.getByRole("menu", { name: "Actions" }))
      .toBeInTheDocument();
    await expect.element(screen.getByRole("separator")).toBeInTheDocument();
    await expect
      .element(screen.getByLabelText("5 unread messages"))
      .toBeInTheDocument();
    await expect
      .element(screen.getByRole("button", { name: "Apply" }))
      .toBeInTheDocument();
    expect(
      screen
        .getByText("Messages", { exact: false })
        .element()
        .closest(".menu__item"),
    ).not.toBeNull();
  });

  it("uses an external element as the accessible name", async () => {
    const screen = await render(
      <>
        <span id="actions-label">Actions</span>
        <EvoMenu>
          <EvoMenuItems a11yLabelId="actions-label">
            <EvoMenuItem>Open</EvoMenuItem>
          </EvoMenuItems>
        </EvoMenu>
      </>,
    );

    await expect
      .element(screen.getByRole("menu", { name: "Actions" }))
      .toHaveAttribute("aria-labelledby", "actions-label");
  });

  it("moves one roving tab stop across groups and skips disabled items", async () => {
    const screen = await render(
      <EvoMenu>
        <EvoMenuItems a11yText="Mixed menu">
          <EvoMenuItem>Alpha</EvoMenuItem>
          <EvoMenuRadioGroup defaultSelected="one">
            <EvoMenuRadioItem value="one">Radio one</EvoMenuRadioItem>
            <EvoMenuRadioItem value="two" disabled>
              Radio two
            </EvoMenuRadioItem>
          </EvoMenuRadioGroup>
          <EvoMenuSeparator />
          <EvoMenuCheckboxGroup defaultSelected={[]}>
            <EvoMenuCheckboxItem value="gamma">Gamma</EvoMenuCheckboxItem>
          </EvoMenuCheckboxGroup>
        </EvoMenuItems>
      </EvoMenu>,
    );

    const alpha = screen.getByRole("menuitem", { name: "Alpha" });
    const radio = screen.getByRole("menuitemradio", { name: "Radio one" });
    const disabledRadio = screen.getByRole("menuitemradio", {
      name: "Radio two",
    });
    const checkbox = screen.getByRole("menuitemcheckbox", { name: "Gamma" });

    await expect.element(alpha).toHaveAttribute("tabindex", "0");
    await expect.element(radio).toHaveAttribute("tabindex", "-1");
    await expect.element(disabledRadio).toHaveAttribute("tabindex", "-1");

    await user.click(alpha);
    await user.keyboard("{ArrowDown}");
    await expect.element(radio).toHaveFocus();

    await user.keyboard("{ArrowDown}");
    await expect.element(checkbox).toHaveFocus();

    await user.keyboard("{ArrowDown}");
    await expect.element(alpha).toHaveFocus();

    await user.keyboard("{ArrowUp}");
    await expect.element(checkbox).toHaveFocus();
  });

  it("supports Home, End, and horizontal arrow navigation", async () => {
    const screen = await render(
      <EvoMenu>
        <EvoMenuItems a11yText="Actions">
          <EvoMenuItem>First</EvoMenuItem>
          <EvoMenuItem>Middle</EvoMenuItem>
          <EvoMenuItem>Last</EvoMenuItem>
        </EvoMenuItems>
      </EvoMenu>,
    );

    const first = screen.getByRole("menuitem", { name: "First" });
    const middle = screen.getByRole("menuitem", { name: "Middle" });
    const last = screen.getByRole("menuitem", { name: "Last" });

    await user.click(middle);
    await user.keyboard("{End}");
    await expect.element(last).toHaveFocus();

    await user.keyboard("{Home}");
    await expect.element(first).toHaveFocus();

    await user.keyboard("{ArrowRight}");
    await expect.element(middle).toHaveFocus();

    await user.keyboard("{ArrowLeft}");
    await expect.element(first).toHaveFocus();
  });

  it("focuses matching items with typeahead across groups", async () => {
    const screen = await render(
      <EvoMenu>
        <EvoMenuItems a11yText="Countries">
          <EvoMenuItem>Albania</EvoMenuItem>
          <EvoMenuRadioGroup>
            <EvoMenuRadioItem value="canada">Canada</EvoMenuRadioItem>
          </EvoMenuRadioGroup>
          <EvoMenuCheckboxGroup>
            <EvoMenuCheckboxItem value="germany">Germany</EvoMenuCheckboxItem>
          </EvoMenuCheckboxGroup>
        </EvoMenuItems>
      </EvoMenu>,
    );

    const first = screen.getByRole("menuitem", { name: "Albania" });
    const germany = screen.getByRole("menuitemcheckbox", { name: "Germany" });

    await user.click(first);
    await user.keyboard("ger");

    await expect.element(germany).toHaveFocus();
  });

  it("treats Space as typeahead text while a search is active", async () => {
    const onSelect = vi.fn();
    const screen = await render(
      <EvoMenu>
        <EvoMenuItems a11yText="Cities">
          <EvoMenuItem>London</EvoMenuItem>
          <EvoMenuItem onSelect={onSelect}>New York</EvoMenuItem>
        </EvoMenuItems>
      </EvoMenu>,
    );

    const london = screen.getByRole("menuitem", { name: "London" });
    const newYork = screen.getByRole("menuitem", { name: "New York" });

    await user.click(london);
    await user.keyboard("new york");

    await expect.element(newYork).toHaveFocus();
    expect(onSelect).not.toHaveBeenCalled();
  });

  it("resets typeahead after the configured timeout", async () => {
    const screen = await render(
      <EvoMenu typeaheadTimeoutLength={20}>
        <EvoMenuItems a11yText="Countries">
          <EvoMenuItem>Albania</EvoMenuItem>
          <EvoMenuItem>Germany</EvoMenuItem>
        </EvoMenuItems>
      </EvoMenu>,
    );

    const albania = screen.getByRole("menuitem", { name: "Albania" });
    const germany = screen.getByRole("menuitem", { name: "Germany" });

    await user.click(albania);
    await user.keyboard("g");
    await expect.element(germany).toHaveFocus();

    await new Promise((resolve) => setTimeout(resolve, 30));
    await user.keyboard("a");

    await expect.element(albania).toHaveFocus();
  });

  it("uses textValue for typeahead when item content is complex", async () => {
    const screen = await render(
      <EvoMenu>
        <EvoMenuItems a11yText="Actions">
          <EvoMenuItem>First</EvoMenuItem>
          <EvoMenuItem textValue="Messages">
            Inbox
            <EvoMenuItemBadge number={5} a11yText="5 unread messages" />
          </EvoMenuItem>
        </EvoMenuItems>
      </EvoMenu>,
    );

    const first = screen.getByRole("menuitem", { name: "First" });
    const messages = screen.getByRole("menuitem", {
      name: "Inbox 5 unread messages",
    });

    await user.click(first);
    await user.keyboard("mes");

    await expect.element(messages).toHaveFocus();
  });

  it("selects an uncontrolled radio item by click and keyboard", async () => {
    const onSelectedChange = vi.fn();
    const screen = await render(
      <EvoMenu>
        <EvoMenuItems a11yText="Sort">
          <EvoMenuRadioGroup
            defaultSelected="price"
            onSelectedChange={onSelectedChange}
          >
            <EvoMenuRadioItem value="price">Price</EvoMenuRadioItem>
            <EvoMenuRadioItem value="distance">Distance</EvoMenuRadioItem>
          </EvoMenuRadioGroup>
        </EvoMenuItems>
      </EvoMenu>,
    );

    const price = screen.getByRole("menuitemradio", { name: "Price" });
    const distance = screen.getByRole("menuitemradio", { name: "Distance" });

    await expect.element(price).toHaveAttribute("aria-checked", "true");
    await user.click(distance);
    await expect.element(price).toHaveAttribute("aria-checked", "false");
    await expect.element(distance).toHaveAttribute("aria-checked", "true");
    expect(onSelectedChange).toHaveBeenLastCalledWith("distance");

    await user.keyboard("{Home}");
    await user.keyboard(" ");
    await expect.element(price).toHaveAttribute("aria-checked", "true");
    expect(onSelectedChange).toHaveBeenLastCalledWith("price");
  });

  it("reports controlled radio changes without updating controlled state", async () => {
    const onSelectedChange = vi.fn();
    const screen = await render(
      <EvoMenu>
        <EvoMenuItems a11yText="Sort">
          <EvoMenuRadioGroup
            selected="price"
            onSelectedChange={onSelectedChange}
          >
            <EvoMenuRadioItem value="price">Price</EvoMenuRadioItem>
            <EvoMenuRadioItem value="distance">Distance</EvoMenuRadioItem>
          </EvoMenuRadioGroup>
        </EvoMenuItems>
      </EvoMenu>,
    );

    const price = screen.getByRole("menuitemradio", { name: "Price" });
    const distance = screen.getByRole("menuitemradio", { name: "Distance" });

    await user.click(distance);

    expect(onSelectedChange).toHaveBeenCalledWith("distance");
    await expect.element(price).toHaveAttribute("aria-checked", "true");
    await expect.element(distance).toHaveAttribute("aria-checked", "false");
  });

  it("toggles uncontrolled checkbox values", async () => {
    const onSelectedChange = vi.fn();
    const screen = await render(
      <EvoMenu>
        <EvoMenuItems a11yText="Filters">
          <EvoMenuCheckboxGroup
            defaultSelected={["shipping"]}
            onSelectedChange={onSelectedChange}
          >
            <EvoMenuCheckboxItem value="shipping">Shipping</EvoMenuCheckboxItem>
            <EvoMenuCheckboxItem value="returns">Returns</EvoMenuCheckboxItem>
          </EvoMenuCheckboxGroup>
        </EvoMenuItems>
      </EvoMenu>,
    );

    const shipping = screen.getByRole("menuitemcheckbox", {
      name: "Shipping",
    });
    const returns = screen.getByRole("menuitemcheckbox", { name: "Returns" });

    await user.click(returns);
    await expect.element(returns).toHaveAttribute("aria-checked", "true");
    expect(onSelectedChange).toHaveBeenLastCalledWith(["shipping", "returns"]);

    await user.keyboard("{Home}");
    await user.keyboard("{Enter}");
    await expect.element(shipping).toHaveAttribute("aria-checked", "false");
    expect(onSelectedChange).toHaveBeenLastCalledWith(["returns"]);
  });

  it("does not activate disabled items", async () => {
    const onClick = vi.fn();
    const onSelect = vi.fn();
    const screen = await render(
      <EvoMenu>
        <EvoMenuItems a11yText="Actions">
          <EvoMenuItem disabled onClick={onClick} onSelect={onSelect}>
            Disabled
          </EvoMenuItem>
        </EvoMenuItems>
      </EvoMenu>,
    );

    const item = screen.getByRole("menuitem", { name: "Disabled" });
    await item.click({ force: true });
    item
      .element()
      .dispatchEvent(
        new KeyboardEvent("keydown", { key: "Enter", bubbles: true }),
      );

    expect(onClick).not.toHaveBeenCalled();
    expect(onSelect).not.toHaveBeenCalled();
  });

  it("activates command items with Enter and Space", async () => {
    const onSelect = vi.fn();
    const screen = await render(
      <EvoMenu>
        <EvoMenuItems a11yText="Actions">
          <EvoMenuItem onSelect={onSelect}>Open</EvoMenuItem>
        </EvoMenuItems>
      </EvoMenu>,
    );

    const item = screen.getByRole("menuitem", { name: "Open" });
    await user.click(item);
    onSelect.mockClear();

    await user.keyboard("{Enter}");
    await user.keyboard(" ");

    expect(onSelect).toHaveBeenCalledTimes(2);
  });

  it("forwards refs to the root and menu elements", async () => {
    const rootRef = createRef<HTMLSpanElement>();
    const itemsRef = createRef<HTMLDivElement>();

    await render(
      <EvoMenu ref={rootRef}>
        <EvoMenuItems ref={itemsRef} a11yText="Actions">
          <EvoMenuItem>Open</EvoMenuItem>
        </EvoMenuItems>
      </EvoMenu>,
    );

    expect(rootRef.current).toBeInstanceOf(HTMLSpanElement);
    expect(itemsRef.current).toBeInstanceOf(HTMLDivElement);
  });
});
