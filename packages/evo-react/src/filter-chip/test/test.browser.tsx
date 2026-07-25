import { createRef } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { userEvent } from "vitest/browser";
import { render } from "vitest-browser-react";
import { EvoIconSneaker16 } from "../../icon/icons/sneaker-16";
import { EvoFilterChip } from "../filter-chip";

describe("evo-filter-chip", () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });

  afterEach(() => {
    user.cleanup();
  });

  describe("default variant", () => {
    it("toggles uncontrolled selected state and emits selected data", async () => {
      const onClick = vi.fn();
      const screen = await render(
        <EvoFilterChip onClick={onClick}>Filter</EvoFilterChip>,
      );
      const button = screen.getByRole("button");

      await expect.element(button).toHaveAttribute("aria-selected", "false");
      await user.click(button);
      await expect.element(button).toHaveAttribute("aria-selected", "true");
      expect(onClick).toHaveBeenLastCalledWith(expect.any(Object), {
        selected: true,
      });

      await user.click(button);
      await expect.element(button).toHaveAttribute("aria-selected", "false");
      expect(onClick).toHaveBeenLastCalledWith(expect.any(Object), {
        selected: false,
      });
    });

    it("does not change controlled selected state", async () => {
      const onClick = vi.fn();
      const screen = await render(
        <EvoFilterChip selected={false} onClick={onClick}>
          Filter
        </EvoFilterChip>,
      );
      const button = screen.getByRole("button");

      await user.click(button);

      await expect.element(button).toHaveAttribute("aria-selected", "false");
      expect(onClick).toHaveBeenCalledWith(expect.any(Object), {
        selected: true,
      });
    });

    it("renders an individual icon component", async () => {
      const screen = await render(
        <EvoFilterChip icon={<EvoIconSneaker16 />}>Filter</EvoFilterChip>,
      );
      const button = screen.getByRole("button");
      // Decorative icons are hidden from the accessibility tree.
      const icon = button.element().querySelector("svg");

      expect(icon).not.toBeNull();
      await expect.element(icon!).toHaveClass("icon--16");
    });
  });

  describe("menu variant", () => {
    it("toggles uncontrolled open state and emits open data", async () => {
      const onClick = vi.fn();
      const screen = await render(
        <EvoFilterChip variant="menu" onClick={onClick}>
          Price
        </EvoFilterChip>,
      );
      const button = screen.getByRole("button");

      await expect.element(button).toHaveAttribute("aria-expanded", "false");
      await expect.element(button).not.toHaveAttribute("aria-selected");

      await user.click(button);
      await expect.element(button).toHaveAttribute("aria-expanded", "true");
      expect(onClick).toHaveBeenLastCalledWith(expect.any(Object), {
        open: true,
      });

      await user.click(button);
      await expect.element(button).toHaveAttribute("aria-expanded", "false");
      expect(onClick).toHaveBeenLastCalledWith(expect.any(Object), {
        open: false,
      });
    });

    it("does not change controlled open state", async () => {
      const onClick = vi.fn();
      const screen = await render(
        <EvoFilterChip variant="menu" open={false} onClick={onClick}>
          Price
        </EvoFilterChip>,
      );
      const button = screen.getByRole("button");

      await user.click(button);

      await expect.element(button).toHaveAttribute("aria-expanded", "false");
      expect(onClick).toHaveBeenCalledWith(expect.any(Object), {
        open: true,
      });
    });

    it("renders selected styling and accessibility text", async () => {
      const screen = await render(
        <EvoFilterChip
          variant="menu"
          selected
          a11ySelectedText="Filter Applied"
        >
          Price
        </EvoFilterChip>,
      );
      const button = screen.getByRole("button");

      await expect.element(button).toHaveClass("filter-chip--selected");
      await expect
        .element(screen.getByText("- Filter Applied"))
        .toBeInTheDocument();
    });
  });

  describe("anchor variant", () => {
    it("toggles selected state and emits selected data", async () => {
      const onClick = vi.fn((event) => event.preventDefault());
      const screen = await render(
        <EvoFilterChip
          href="/filter"
          a11ySelectedText="Filter Applied"
          onClick={onClick}
        >
          Filter
        </EvoFilterChip>,
      );
      const link = screen.getByRole("link");

      await user.click(link);

      await expect.element(link).toHaveClass("filter-chip--selected");
      await expect
        .element(screen.getByText("- Filter Applied"))
        .toBeInTheDocument();
      expect(onClick).toHaveBeenCalledWith(expect.any(Object), {
        selected: true,
      });
    });

    it("removes href and does not emit click when disabled", async () => {
      const onClick = vi.fn();
      const screen = await render(
        <EvoFilterChip
          href="/filter"
          a11ySelectedText="Filter Applied"
          disabled
          onClick={onClick}
        >
          Filter
        </EvoFilterChip>,
      );
      const text = screen.getByText("Filter");
      const anchor = text.element().closest("a");

      expect(anchor).not.toBeNull();
      await expect.element(anchor!).not.toHaveAttribute("href");
      await user.click(text);
      expect(onClick).not.toHaveBeenCalled();
    });
  });

  it("renders expressive media", async () => {
    const screen = await render(
      <EvoFilterChip
        variant="expressive"
        image={<img src="/category.jpg" alt="Category" />}
      >
        Category
      </EvoFilterChip>,
    );

    await expect
      .element(screen.getByRole("img", { name: "Category" }))
      .toHaveAttribute("src", "/category.jpg");
  });

  it("passes attributes and ref to the root element", async () => {
    const ref = createRef<HTMLButtonElement>();
    const screen = await render(
      <EvoFilterChip
        ref={ref}
        className="custom-class"
        data-testid="filter-chip"
      >
        Filter
      </EvoFilterChip>,
    );
    const button = screen.getByTestId("filter-chip");

    await expect.element(button).toHaveClass("custom-class");
    await expect.element(button).toHaveClass("filter-chip--animated");
    expect(ref.current).toBe(button.element());
  });

  it("does not emit click when disabled", async () => {
    const onClick = vi.fn();
    const screen = await render(
      <EvoFilterChip disabled onClick={onClick}>
        Filter
      </EvoFilterChip>,
    );
    const button = screen.getByRole("button");

    await expect.element(button).toBeDisabled();
    expect(onClick).not.toHaveBeenCalled();
  });
});
