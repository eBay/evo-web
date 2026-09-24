import { createRef } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { userEvent } from "vitest/browser";
import { render } from "vitest-browser-react";
import {
  EvoMenuButtonCheckboxItem,
  EvoMenuButtonItem,
  EvoMenuCheckboxGroup,
  EvoSplitButton,
  EvoSplitButtonAction,
  EvoSplitButtonMenu,
} from "../index";

describe("EvoSplitButton", () => {
  let user: ReturnType<typeof userEvent.setup>;
  beforeEach(() => {
    user = userEvent.setup();
  });
  afterEach(() => {
    user.cleanup();
  });

  it("keeps the action separate from menu selection and restores focus", async () => {
    const onAction = vi.fn();
    const onSelect = vi.fn();
    const screen = await render(
      <EvoSplitButton priority="primary" a11yMenuText="More save options">
        <EvoSplitButtonAction onClick={onAction}>Save</EvoSplitButtonAction>
        <EvoSplitButtonMenu collapseOnSelect>
          <EvoMenuButtonItem onSelect={onSelect}>Save as</EvoMenuButtonItem>
        </EvoSplitButtonMenu>
      </EvoSplitButton>,
    );
    const action = screen.getByRole("button", { name: "Save" });
    const trigger = screen.getByRole("button", { name: "More save options" });
    await expect
      .element(action)
      .toHaveClass("btn--primary", "btn--split-start");
    await expect.element(trigger).toHaveClass("btn--primary", "btn--split-end");
    await user.click(action);
    expect(onAction).toHaveBeenCalledOnce();
    expect(onSelect).not.toHaveBeenCalled();
    await user.click(trigger);
    await expect
      .element(screen.getByRole("menuitem", { name: "Save as" }))
      .toHaveFocus();
    await user.keyboard("{Enter}");
    expect(onSelect).toHaveBeenCalledOnce();
    await expect.element(trigger).toHaveFocus();
    await expect.element(trigger).toHaveAttribute("aria-expanded", "false");
  });

  it("supports a link action and value-based menu choices", async () => {
    const onSelectedChange = vi.fn();
    const screen = await render(
      <EvoSplitButton size="large" a11yMenuText="More options">
        <EvoSplitButtonAction href="/drafts">View drafts</EvoSplitButtonAction>
        <EvoSplitButtonMenu>
          <EvoMenuCheckboxGroup
            defaultSelected={[]}
            onSelectedChange={onSelectedChange}
          >
            <EvoMenuButtonCheckboxItem value="free">
              Free shipping
            </EvoMenuButtonCheckboxItem>
          </EvoMenuCheckboxGroup>
        </EvoSplitButtonMenu>
      </EvoSplitButton>,
    );
    await expect
      .element(screen.getByRole("link", { name: "View drafts" }))
      .toHaveAttribute("href", "/drafts");
    await expect
      .element(screen.getByRole("button", { name: "More options" }))
      .toHaveClass("btn--large");
    await user.click(screen.getByRole("button", { name: "More options" }));
    await user.click(
      screen.getByRole("menuitemcheckbox", { name: "Free shipping" }),
    );
    expect(onSelectedChange).toHaveBeenCalledWith(["free"]);
  });

  it("shares disabled and transparent states and forwards a native wrapper ref", async () => {
    const ref = createRef<HTMLSpanElement>();
    const screen = await render(
      <EvoSplitButton disabled transparent ref={ref} data-testid="split-root">
        <EvoSplitButtonAction>Save</EvoSplitButtonAction>
        <EvoSplitButtonMenu>
          <EvoMenuButtonItem>Save as</EvoMenuButtonItem>
        </EvoSplitButtonMenu>
      </EvoSplitButton>,
    );
    expect(ref.current).toBe(screen.getByTestId("split-root").element());
    const action = screen.getByRole("button", { name: "Save" });
    const trigger = screen.getByRole("button", { name: "Menu" });
    await expect.element(action).toBeDisabled();
    await expect.element(trigger).toBeDisabled();
    await expect.element(action).toHaveClass("btn--transparent");
    await expect.element(trigger).toHaveClass("btn--transparent");
  });

  it("names the loading action", async () => {
    const screen = await render(
      <EvoSplitButton>
        <EvoSplitButtonAction
          bodyState="loading"
          a11yLoadingText="Saving document"
        >
          Save
        </EvoSplitButtonAction>
        <EvoSplitButtonMenu>
          <EvoMenuButtonItem>Save as</EvoMenuButtonItem>
        </EvoSplitButtonMenu>
      </EvoSplitButton>,
    );
    await expect
      .element(screen.getByRole("button", { name: "Saving document" }))
      .toHaveAttribute("aria-live", "polite");
  });

  it("keeps a partially disabled action focusable without running it", async () => {
    const onAction = vi.fn();
    const screen = await render(
      <EvoSplitButton partiallyDisabled>
        <EvoSplitButtonAction onClick={onAction}>Save</EvoSplitButtonAction>
        <EvoSplitButtonMenu>
          <EvoMenuButtonItem>Save as</EvoMenuButtonItem>
        </EvoSplitButtonMenu>
      </EvoSplitButton>,
    );
    const action = screen.getByRole("button", { name: "Save" });
    const trigger = screen.getByRole("button", { name: "Menu" });
    await expect.element(action).toHaveAttribute("aria-disabled", "true");
    await expect.element(trigger).toHaveAttribute("aria-disabled", "true");
    (action.element() as HTMLButtonElement).click();
    expect(onAction).not.toHaveBeenCalled();
    await expect.element(trigger).toHaveAttribute("aria-expanded", "false");
  });
});
