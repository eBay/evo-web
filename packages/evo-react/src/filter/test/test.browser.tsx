import { createRef, useState } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { userEvent } from "vitest/browser";
import { render } from "vitest-browser-react";
import { EvoFilter } from "../filter";

describe("evo-filter", () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });

  afterEach(() => {
    user.cleanup();
  });

  it("toggles a button and reports its next selection state", async () => {
    const onClick = vi.fn();
    const ref = createRef<HTMLButtonElement>();
    const screen = await render(
      <EvoFilter ref={ref} className="custom-filter" onClick={onClick}>
        Free shipping
      </EvoFilter>,
    );
    const button = screen.getByRole("button", { name: "Free shipping" });
    expect(ref.current).toBe(button.element());
    await expect.element(button).toHaveClass("filter-button--unselected");
    expect(
      button.element().querySelector(".filter-button__cell > span"),
    ).not.toBeNull();
    await user.click(button);
    await expect.element(button).toHaveAttribute("aria-pressed", "true");
    expect(onClick).toHaveBeenCalledWith(
      expect.objectContaining({ type: "click" }),
      { selected: true },
    );
    await user.click(button);
    await expect.element(button).toHaveClass("filter-button--unselected");
    expect(button.element().hasAttribute("aria-pressed")).toBe(false);
  });

  it("allows controlled selection and optional aria-pressed", async () => {
    function Controlled() {
      const [selected, setSelected] = useState(false);
      return (
        <EvoFilter
          selected={selected}
          useAriaPressed={false}
          onClick={(_, data) => setSelected(data.selected)}
        >
          Auction
        </EvoFilter>
      );
    }
    const screen = await render(<Controlled />);
    const button = screen.getByRole("button", { name: "Auction" });
    await user.click(button);
    await expect.element(button).toHaveClass("filter-button--selected");
    expect(button.element().hasAttribute("aria-pressed")).toBe(false);
  });

  it("does not activate a disabled button", async () => {
    const onClick = vi.fn();
    const screen = await render(
      <EvoFilter disabled onClick={onClick}>
        Sold listings
      </EvoFilter>,
    );
    const button = screen.getByRole("button", { name: "Sold listings" });
    await expect.element(button).toBeDisabled();
    await button.click({ force: true });
    expect(onClick).not.toHaveBeenCalled();
  });

  it("renders a selected link with clipped localized text", async () => {
    const ref = createRef<HTMLAnchorElement>();
    const screen = await render(
      <EvoFilter
        ref={ref}
        href="/search"
        selected
        a11ySelectedText="Ausgewählt"
        onClick={(event) => event.preventDefault()}
      >
        Free shipping
      </EvoFilter>,
    );
    const link = screen.getByRole("link", {
      name: "Free shipping - Ausgewählt",
    });
    expect(ref.current).toBe(link.element());
    await expect.element(link).toHaveClass("filter-link--selected");
    await expect.element(link).toHaveAttribute("href", "/search");
    await user.click(link);
  });

  it("removes the destination and selection callback from a disabled link", async () => {
    const onClick = vi.fn();
    const screen = await render(
      <EvoFilter href="/search" disabled onClick={onClick}>
        Free shipping
      </EvoFilter>,
    );
    const link = screen.getByText("Free shipping").element().closest("a");
    expect(link).not.toBeNull();
    expect(link?.hasAttribute("href")).toBe(false);
    expect(link).toHaveAttribute("aria-disabled", "true");
    await user.click(link!);
    expect(onClick).not.toHaveBeenCalled();
  });
});
