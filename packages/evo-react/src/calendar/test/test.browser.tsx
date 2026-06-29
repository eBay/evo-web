import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { render } from "vitest-browser-react";
import { userEvent } from "vitest/browser";
import { EvoCalendar } from "../calendar";
import type { DayLinkAsProps } from "../types";

const a11yNavigateText = (month: string, dir: "next" | "prev") =>
  `${dir === "prev" ? "Previous" : "Next"}: ${month}`;

const a11yRangeText = {
  start: "start of range",
  end: "end of range",
  in: "in range",
};

describe("evo-calendar", () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });

  afterEach(() => {
    user.cleanup();
  });

  describe("given a default non-interactive calendar", () => {
    it("renders a calendar table with weekday headers", async () => {
      const screen = await render(
        <EvoCalendar today="2025-01-15" locale="en-US" />,
      );

      await expect.element(screen.getByRole("table")).toBeInTheDocument();
      await expect.element(screen.getByText("Sun")).toBeInTheDocument();
      await expect.element(screen.getByText("Mon")).toBeInTheDocument();
      await expect.element(screen.getByText("Tue")).toBeInTheDocument();
      await expect.element(screen.getByText("Wed")).toBeInTheDocument();
      await expect.element(screen.getByText("Thu")).toBeInTheDocument();
      await expect.element(screen.getByText("Fri")).toBeInTheDocument();
      await expect.element(screen.getByText("Sat")).toBeInTheDocument();
    });

    it("does not render navigation buttons when a11yNavigateText is absent", async () => {
      const screen = await render(<EvoCalendar today="2025-01-15" />);

      // No navigation or day buttons should exist when the calendar is static.
      expect(screen.container.querySelector("button")).toBeNull();
    });
  });

  describe("given a navigable calendar", () => {
    it("renders navigation buttons only when a11yNavigateText is present", async () => {
      const screen = await render(
        <EvoCalendar today="2025-01-15" a11yNavigateText={a11yNavigateText} />,
      );

      await expect
        .element(
          screen.getByRole("button", { name: "Previous: December 2024" }),
        )
        .toBeInTheDocument();
      await expect
        .element(screen.getByRole("button", { name: "Next: February 2025" }))
        .toBeInTheDocument();
    });

    it("updates uncontrolled viewStart and emits onViewStartChange when next month is clicked", async () => {
      const onViewStartChange = vi.fn();
      const screen = await render(
        <EvoCalendar
          today="2025-01-15"
          a11yNavigateText={a11yNavigateText}
          onViewStartChange={onViewStartChange}
        />,
      );

      await user.click(
        screen.getByRole("button", { name: "Next: February 2025" }),
      );

      expect(onViewStartChange).toHaveBeenCalledWith("2025-02");
      await expect
        .element(screen.getByRole("table", { name: "February 2025" }))
        .toBeInTheDocument();
    });
  });

  describe("given an interactive day calendar", () => {
    it("renders day buttons with aria-current on today", async () => {
      const screen = await render(
        <EvoCalendar selectMode="day" today="2025-01-15" />,
      );

      await expect
        .element(screen.getByRole("button", { name: "15" }))
        .toHaveAttribute("aria-current", "date");
    });

    it("selects a day in uncontrolled mode and emits onSelectedChange", async () => {
      const onSelectedChange = vi.fn();
      const screen = await render(
        <EvoCalendar
          selectMode="day"
          today="2025-01-15"
          onSelectedChange={onSelectedChange}
        />,
      );

      const day = screen.getByRole("button", { name: "10" });
      await user.click(day);

      expect(onSelectedChange).toHaveBeenCalledWith("2025-01-10");
      await expect.element(day).toHaveAttribute("aria-pressed", "true");
    });

    it("moves focus with arrow keys", async () => {
      const screen = await render(
        <EvoCalendar selectMode="day" today="2025-01-15" />,
      );

      await user.tab();
      await expect
        .element(screen.getByRole("button", { name: /^15$/ }))
        .toHaveFocus();

      await user.keyboard("{ArrowRight}");
      await expect
        .element(screen.getByRole("button", { name: /^16$/ }))
        .toHaveFocus();

      await user.keyboard("{ArrowDown}");
      await expect
        .element(screen.getByRole("button", { name: /^23$/ }))
        .toHaveFocus();

      await user.keyboard("{ArrowLeft}");
      await expect
        .element(screen.getByRole("button", { name: /^22$/ }))
        .toHaveFocus();

      await user.keyboard("{ArrowUp}");
      await expect
        .element(screen.getByRole("button", { name: /^15$/ }))
        .toHaveFocus();
    });

    it("moves to the next month with PageDown", async () => {
      const screen = await render(
        <EvoCalendar selectMode="day" today="2025-01-15" />,
      );

      await user.tab();
      await user.keyboard("{PageDown}");

      await expect
        .element(screen.getByRole("table", { name: "February 2025" }))
        .toBeInTheDocument();
      await expect
        .element(screen.getByRole("button", { name: /^15$/ }))
        .toHaveFocus();
    });

    it("moves to the next month with ArrowRight from the last day when navigation is enabled", async () => {
      const screen = await render(
        <EvoCalendar
          selectMode="day"
          today="2025-01-15"
          a11yNavigateText={a11yNavigateText}
        />,
      );

      screen.getByRole("button", { name: /^15$/ }).element().focus();
      await user.keyboard("{End}");
      await expect
        .element(screen.getByRole("button", { name: /^31$/ }))
        .toHaveFocus();

      await user.keyboard("{ArrowRight}");

      await expect
        .element(screen.getByRole("table", { name: "February 2025" }))
        .toBeInTheDocument();
      await expect
        .element(screen.getByRole("button", { name: /^1$/ }))
        .toHaveFocus();
    });

    it("disables dates using the grouped disable prop", async () => {
      const screen = await render(
        <EvoCalendar
          selectMode="day"
          today="2025-01-15"
          disable={{ list: ["2025-01-10"] }}
        />,
      );

      await expect
        .element(screen.getByRole("button", { name: "10" }))
        .toBeDisabled();
    });
  });

  describe("given an interactive range calendar", () => {
    it("selects a range in uncontrolled mode", async () => {
      const onSelectedChange = vi.fn();
      const screen = await render(
        <EvoCalendar
          selectMode="range"
          today="2025-01-15"
          a11yRangeText={a11yRangeText}
          onSelectedChange={onSelectedChange}
        />,
      );

      await user.click(screen.getByRole("button", { name: /^5$/ }));
      await user.click(screen.getByRole("button", { name: /^12$/ }));

      expect(onSelectedChange).toHaveBeenLastCalledWith({
        from: "2025-01-05",
        to: "2025-01-12",
      });
      await expect
        .element(screen.getByRole("button", { name: /^5 - start of range$/ }))
        .toHaveAttribute("aria-pressed", "true");
      await expect
        .element(screen.getByRole("button", { name: /^12 - end of range$/ }))
        .toHaveAttribute("aria-pressed", "true");
    });
  });

  describe("given a non-interactive calendar with links", () => {
    it("renders links returned by linkBuilder", async () => {
      const screen = await render(
        <EvoCalendar
          today="2025-01-15"
          linkBuilder={(iso) => (iso === "2025-01-15" ? `/day/${iso}` : false)}
        />,
      );

      await expect
        .element(screen.getByRole("link", { name: "15" }))
        .toHaveAttribute("href", "/day/2025-01-15");
    });

    it("renders linkable days with dayLinkAs when provided", async () => {
      function DayLink({ iso, children, ...rest }: DayLinkAsProps) {
        return (
          <a {...rest} data-custom-link="true" href={`/custom/${iso}`}>
            {children}
          </a>
        );
      }

      const screen = await render(
        <EvoCalendar
          today="2025-01-15"
          linkBuilder={(iso) => (iso === "2025-01-15" ? `/day/${iso}` : false)}
          dayLinkAs={DayLink}
        />,
      );

      const link = screen.getByRole("link", { name: "15" });
      await expect.element(link).toHaveAttribute("href", "/custom/2025-01-15");
      await expect.element(link).toHaveAttribute("data-custom-link", "true");
    });

    it("renders all non-disabled days with dayLinkAs without linkBuilder", async () => {
      function DayLink({ iso, children, ...rest }: DayLinkAsProps) {
        return (
          <a {...rest} data-custom-link="true" href={`/custom/${iso}`}>
            {children}
          </a>
        );
      }

      const screen = await render(
        <EvoCalendar
          today="2025-01-15"
          disable={{ list: ["2025-01-10"] }}
          dayLinkAs={DayLink}
        />,
      );

      await expect
        .element(screen.getByRole("link", { name: "15" }))
        .toHaveAttribute("href", "/custom/2025-01-15");
      expect(
        screen.container.querySelector('a[href="/custom/2025-01-10"]'),
      ).toBeNull();
    });
  });
});
