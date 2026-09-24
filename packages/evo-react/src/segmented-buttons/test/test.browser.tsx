import { createRef } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { userEvent } from "vitest/browser";
import { render } from "vitest-browser-react";
import { EvoIconFullView24 } from "../../icon/icons/full-view-24";
import { EvoSegmentedButton, EvoSegmentedButtons } from "../index";

describe("evo-segmented-buttons", () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });

  afterEach(() => {
    user.cleanup();
  });

  it("renders the same list and button structure with an accessible name", async () => {
    const screen = await render(
      <EvoSegmentedButtons a11yText="Listing status" defaultSelected="active">
        <EvoSegmentedButton value="active">Active</EvoSegmentedButton>
        <EvoSegmentedButton value="sold">Sold</EvoSegmentedButton>
      </EvoSegmentedButtons>,
    );

    const list = screen.getByRole("list", { name: "Listing status" });
    await expect.element(list).toBeInTheDocument();
    expect(list.element().closest(".segmented-buttons")).not.toBeNull();
    expect(list.element().querySelectorAll("li > button")).toHaveLength(2);
    await expect
      .element(screen.getByRole("button", { name: "Active" }))
      .toHaveAttribute("aria-current", "true");
    await expect
      .element(screen.getByRole("button", { name: "Sold" }))
      .not.toHaveAttribute("aria-current");
  });

  it("updates uncontrolled selection and reports the new value", async () => {
    const onSelectedChange = vi.fn();
    const screen = await render(
      <EvoSegmentedButtons
        a11yText="Listing status"
        defaultSelected="active"
        onSelectedChange={onSelectedChange}
      >
        <EvoSegmentedButton value="active">Active</EvoSegmentedButton>
        <EvoSegmentedButton value="sold">Sold</EvoSegmentedButton>
      </EvoSegmentedButtons>,
    );

    await user.click(screen.getByRole("button", { name: "Sold" }));
    await expect
      .element(screen.getByRole("button", { name: "Sold" }))
      .toHaveAttribute("aria-current", "true");
    await expect
      .element(screen.getByRole("button", { name: "Active" }))
      .not.toHaveAttribute("aria-current");
    expect(onSelectedChange).toHaveBeenCalledExactlyOnceWith("sold");

    await user.click(screen.getByRole("button", { name: "Sold" }));
    expect(onSelectedChange).toHaveBeenCalledTimes(1);
  });

  it("keeps controlled selection until its parent changes it", async () => {
    const onSelectedChange = vi.fn();
    const screen = await render(
      <EvoSegmentedButtons
        a11yText="Listing status"
        selected="active"
        onSelectedChange={onSelectedChange}
      >
        <EvoSegmentedButton value="active">Active</EvoSegmentedButton>
        <EvoSegmentedButton value="sold">Sold</EvoSegmentedButton>
      </EvoSegmentedButtons>,
    );

    await user.click(screen.getByRole("button", { name: "Sold" }));
    expect(onSelectedChange).toHaveBeenCalledExactlyOnceWith("sold");
    await expect
      .element(screen.getByRole("button", { name: "Active" }))
      .toHaveAttribute("aria-current", "true");
  });

  it("uses native keyboard and disabled button behavior", async () => {
    const onSelectedChange = vi.fn();
    const screen = await render(
      <EvoSegmentedButtons
        a11yText="Listing status"
        onSelectedChange={onSelectedChange}
      >
        <EvoSegmentedButton value="active">Active</EvoSegmentedButton>
        <EvoSegmentedButton value="sold" disabled>
          Sold
        </EvoSegmentedButton>
      </EvoSegmentedButtons>,
    );

    await user.tab();
    await expect
      .element(screen.getByRole("button", { name: "Active" }))
      .toHaveFocus();
    await user.keyboard("{Enter}");
    expect(onSelectedChange).toHaveBeenCalledExactlyOnceWith("active");
    await user.click(screen.getByRole("button", { name: "Sold" }), {
      force: true,
    });
    expect(onSelectedChange).toHaveBeenCalledTimes(1);
  });

  it("honors a canceled button click and passes through classes and refs", async () => {
    const onSelectedChange = vi.fn();
    const buttonRef = createRef<HTMLButtonElement>();
    const groupRef = createRef<HTMLDivElement>();
    const screen = await render(
      <EvoSegmentedButtons
        a11yText="Listing status"
        ref={groupRef}
        className="custom-group"
        onSelectedChange={onSelectedChange}
      >
        <EvoSegmentedButton
          ref={buttonRef}
          value="active"
          className="custom-button"
          onClick={(event) => event.preventDefault()}
        >
          Active
        </EvoSegmentedButton>
      </EvoSegmentedButtons>,
    );

    await user.click(screen.getByRole("button", { name: "Active" }));
    expect(onSelectedChange).not.toHaveBeenCalled();
    expect(groupRef.current).toHaveClass("segmented-buttons", "custom-group");
    expect(buttonRef.current).toHaveClass(
      "segmented-buttons__button",
      "custom-button",
    );
  });

  it("wraps a leading icon and its label in Skin's button cell", async () => {
    const screen = await render(
      <EvoSegmentedButtons a11yText="Listing view" defaultSelected="desktop">
        <EvoSegmentedButton value="desktop" icon={<EvoIconFullView24 />}>
          Desktop
        </EvoSegmentedButton>
      </EvoSegmentedButtons>,
    );

    const button = screen.getByRole("button", { name: "Desktop" });
    const cell = button
      .element()
      .querySelector(".segmented-buttons__button-cell");
    expect(cell?.firstElementChild?.tagName).toBe("svg");
    expect(cell?.lastElementChild?.textContent).toBe("Desktop");
  });
});
