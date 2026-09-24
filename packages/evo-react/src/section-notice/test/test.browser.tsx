import { createRef, useState } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { userEvent } from "vitest/browser";
import { render } from "vitest-browser-react";
import {
  EvoSectionNotice,
  EvoSectionNoticeCTA,
  EvoSectionNoticeFooter,
  EvoSectionNoticeMain,
  EvoSectionNoticeTitle,
} from "../index";

describe("evo-section-notice", () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });

  afterEach(() => {
    user.cleanup();
  });

  it("keeps the section notice structure and default accessible name", async () => {
    const ref = createRef<HTMLElement>();
    const screen = await render(
      <EvoSectionNotice
        ref={ref}
        data-testid="notice"
        className="custom-notice"
      >
        <EvoSectionNoticeMain className="custom-main">
          <EvoSectionNoticeTitle>Check your address</EvoSectionNoticeTitle>
          <p>Confirm the address before paying.</p>
        </EvoSectionNoticeMain>
      </EvoSectionNotice>,
    );
    const region = screen.getByRole("region", { name: "Notice" });
    const main = screen
      .getByText("Confirm the address before paying.")
      .element().parentElement;

    expect(ref.current).toBe(region.element());
    await expect.element(region).toHaveClass("section-notice");
    expect(
      region.element().classList.contains("section-notice--attention"),
    ).toBe(false);
    await expect.element(region).toHaveClass("custom-notice");
    expect(region.element().tagName).toBe("SECTION");
    expect(main?.tagName).toBe("SPAN");
    expect(main).toHaveClass("section-notice__main", "custom-main");
    await expect
      .element(screen.getByRole("heading", { name: "Check your address" }))
      .toHaveClass("section-notice__title");
    expect(
      region.element().querySelector(".section-notice__header"),
    ).toBeNull();
  });

  it("uses distinct header ids and icon labels for adjacent notices", async () => {
    const screen = await render(
      <>
        <EvoSectionNotice
          status="confirmation"
          a11yText="Order confirmed"
          a11yIconText="Success"
        >
          <EvoSectionNoticeMain>Payment received.</EvoSectionNoticeMain>
        </EvoSectionNotice>
        <EvoSectionNotice status="information" a11yText="Shipping update">
          <EvoSectionNoticeMain>
            Seller has shipped your item.
          </EvoSectionNoticeMain>
        </EvoSectionNotice>
        <EvoSectionNotice status="attention" a11yText="Address issue">
          <EvoSectionNoticeMain>
            Check your delivery address.
          </EvoSectionNoticeMain>
        </EvoSectionNotice>
      </>,
    );
    const first = screen
      .getByRole("region", { name: "Order confirmed" })
      .element();
    const second = screen
      .getByRole("region", { name: "Shipping update" })
      .element();
    const third = screen
      .getByRole("region", { name: "Address issue" })
      .element();
    expect(first.getAttribute("aria-label")).toBe("Order confirmed");
    expect(second.getAttribute("aria-labelledby")).toBeTruthy();
    expect(second.getAttribute("aria-labelledby")).not.toBe(
      third.getAttribute("aria-labelledby"),
    );
    await expect
      .element(screen.getByRole("img", { name: "Success" }))
      .toBeInTheDocument();
  });

  it("supports an iconless named region", async () => {
    const screen = await render(
      <EvoSectionNotice icon="none" a11yText="Order update">
        <EvoSectionNoticeMain>Payment received.</EvoSectionNoticeMain>
      </EvoSectionNotice>,
    );
    const region = screen.getByRole("region", { name: "Order update" });
    await expect.element(region).toHaveAttribute("aria-label", "Order update");
    expect(
      region.element().querySelector(".section-notice__header"),
    ).toBeNull();
  });

  it("dismisses with the keyboard and calls onDismiss", async () => {
    const onDismiss = vi.fn();
    const screen = await render(
      <EvoSectionNotice a11yDismissText="Close notice" onDismiss={onDismiss}>
        <EvoSectionNoticeMain>Review your address.</EvoSectionNoticeMain>
      </EvoSectionNotice>,
    );
    await user.tab();
    await user.keyboard("{Enter}");
    expect(onDismiss).toHaveBeenCalledTimes(1);
    expect(screen.getByRole("region", { name: "Notice" }).query()).toBeNull();
  });

  it("lets the consumer control dismissal", async () => {
    function ControlledNotice() {
      const [dismissed, setDismissed] = useState(false);
      return (
        <EvoSectionNotice
          dismissed={dismissed}
          a11yDismissText="Close notice"
          onDismiss={() => setDismissed(true)}
        >
          <EvoSectionNoticeMain>Review your address.</EvoSectionNoticeMain>
        </EvoSectionNotice>
      );
    }
    const screen = await render(<ControlledNotice />);
    await user.click(screen.getByRole("button", { name: "Close notice" }));
    expect(screen.getByRole("region", { name: "Notice" }).query()).toBeNull();
  });

  it("renders footer and CTA regions and forwards the CTA event", async () => {
    const onCtaClick = vi.fn();
    const screen = await render(
      <EvoSectionNotice
        onCtaClick={(event) => {
          event.preventDefault();
          onCtaClick(event);
        }}
      >
        <EvoSectionNoticeMain>
          <EvoSectionNoticeTitle as="h3">Order update</EvoSectionNoticeTitle>
        </EvoSectionNoticeMain>
        <EvoSectionNoticeCTA>
          <a href="/orders">View orders</a>
        </EvoSectionNoticeCTA>
        <EvoSectionNoticeFooter>Additional details</EvoSectionNoticeFooter>
      </EvoSectionNotice>,
    );
    await user.click(screen.getByRole("link", { name: "View orders" }));
    expect(onCtaClick).toHaveBeenCalledTimes(1);
    expect(
      screen
        .getByRole("link", { name: "View orders" })
        .element()
        .closest(".section-notice__cta"),
    ).not.toBeNull();
    expect(screen.getByText("Additional details").element()).toHaveClass(
      "section-notice__footer",
    );
    await expect
      .element(screen.getByRole("heading", { level: 3, name: "Order update" }))
      .toBeInTheDocument();
  });
});
