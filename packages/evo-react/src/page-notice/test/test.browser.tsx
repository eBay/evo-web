import { createRef, useState } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { userEvent } from "vitest/browser";
import { render } from "vitest-browser-react";
import {
  EvoPageNotice,
  EvoPageNoticeCTA,
  EvoPageNoticeFooter,
  EvoPageNoticeMain,
  EvoPageNoticeTitle,
} from "../index";

describe("evo-page-notice", () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });

  afterEach(() => {
    user.cleanup();
  });

  it("keeps the page notice structure and default accessible name", async () => {
    const ref = createRef<HTMLElement>();
    const screen = await render(
      <EvoPageNotice ref={ref} data-testid="notice" className="custom-notice">
        <EvoPageNoticeMain className="custom-main">
          <EvoPageNoticeTitle>Check your address</EvoPageNoticeTitle>
          <p>Confirm the address before paying.</p>
        </EvoPageNoticeMain>
      </EvoPageNotice>,
    );
    const region = screen.getByRole("region", { name: "Attention" });
    const main = screen
      .getByText("Confirm the address before paying.")
      .element().parentElement;

    expect(ref.current).toBe(region.element());
    await expect.element(region).toHaveClass("page-notice--attention");
    await expect.element(region).toHaveClass("custom-notice");
    expect(region.element().tagName).toBe("SECTION");
    expect(main?.tagName).toBe("DIV");
    expect(main).toHaveClass("page-notice__main", "custom-main");
    await expect
      .element(screen.getByRole("heading", { name: "Check your address" }))
      .toHaveClass("page-notice__title");
    expect(
      region
        .element()
        .querySelector(".page-notice__header + .page-notice__main"),
    ).not.toBeNull();
  });

  it("uses distinct header ids and icon labels for adjacent notices", async () => {
    const screen = await render(
      <>
        <EvoPageNotice
          status="confirmation"
          a11yText="Order confirmed"
          a11yIconText="Success"
        >
          <EvoPageNoticeMain>Payment received.</EvoPageNoticeMain>
        </EvoPageNotice>
        <EvoPageNotice status="information" a11yText="Shipping update">
          <EvoPageNoticeMain>Seller has shipped your item.</EvoPageNoticeMain>
        </EvoPageNotice>
        <EvoPageNotice status="attention" a11yText="Address issue">
          <EvoPageNoticeMain>Check your delivery address.</EvoPageNoticeMain>
        </EvoPageNotice>
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
      <EvoPageNotice icon="none" a11yText="Order update">
        <EvoPageNoticeMain>Payment received.</EvoPageNoticeMain>
      </EvoPageNotice>,
    );
    const region = screen.getByRole("region", { name: "Order update" });
    await expect.element(region).toHaveAttribute("aria-label", "Order update");
    expect(region.element().querySelector(".page-notice__header")).toBeNull();
  });

  it("dismisses with the keyboard and calls onDismiss", async () => {
    const onDismiss = vi.fn();
    const screen = await render(
      <EvoPageNotice a11yDismissText="Close notice" onDismiss={onDismiss}>
        <EvoPageNoticeMain>Review your address.</EvoPageNoticeMain>
      </EvoPageNotice>,
    );
    await user.tab();
    await user.keyboard("{Enter}");
    expect(onDismiss).toHaveBeenCalledTimes(1);
    expect(
      screen.getByRole("region", { name: "Attention" }).query(),
    ).toBeNull();
  });

  it("lets the consumer control dismissal", async () => {
    function ControlledNotice() {
      const [dismissed, setDismissed] = useState(false);
      return (
        <EvoPageNotice
          dismissed={dismissed}
          a11yDismissText="Close notice"
          onDismiss={() => setDismissed(true)}
        >
          <EvoPageNoticeMain>Review your address.</EvoPageNoticeMain>
        </EvoPageNotice>
      );
    }
    const screen = await render(<ControlledNotice />);
    await user.click(screen.getByRole("button", { name: "Close notice" }));
    expect(
      screen.getByRole("region", { name: "Attention" }).query(),
    ).toBeNull();
  });

  it("renders footer and CTA regions and forwards the CTA event", async () => {
    const onCtaClick = vi.fn();
    const screen = await render(
      <EvoPageNotice
        onCtaClick={(event) => {
          event.preventDefault();
          onCtaClick(event);
        }}
      >
        <EvoPageNoticeMain>
          <EvoPageNoticeTitle as="h3">Order update</EvoPageNoticeTitle>
        </EvoPageNoticeMain>
        <EvoPageNoticeCTA>
          <a href="/orders">View orders</a>
        </EvoPageNoticeCTA>
        <EvoPageNoticeFooter>Additional details</EvoPageNoticeFooter>
      </EvoPageNotice>,
    );
    await user.click(screen.getByRole("link", { name: "View orders" }));
    expect(onCtaClick).toHaveBeenCalledTimes(1);
    expect(
      screen
        .getByRole("link", { name: "View orders" })
        .element()
        .closest(".page-notice__cta"),
    ).not.toBeNull();
    expect(screen.getByText("Additional details").element()).toHaveClass(
      "page-notice__footer",
    );
    await expect
      .element(screen.getByRole("heading", { level: 3, name: "Order update" }))
      .toBeInTheDocument();
  });
});
