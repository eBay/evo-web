import { createRef, useState } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { userEvent } from "vitest/browser";
import { render } from "vitest-browser-react";
import { EvoInlineNotice, EvoInlineNoticeMain } from "../index";

describe("evo-inline-notice", () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });

  afterEach(() => {
    user.cleanup();
  });

  it("renders the Marko default status and legacy notice structure", async () => {
    const ref = createRef<HTMLDivElement>();
    const screen = await render(
      <EvoInlineNotice ref={ref} data-testid="notice">
        <EvoInlineNoticeMain>Update your payment method.</EvoInlineNoticeMain>
      </EvoInlineNotice>,
    );
    const icon = screen.getByRole("img", { name: "Attention" });
    const main = screen.getByText("Update your payment method.");

    expect(ref.current).toBe(screen.getByTestId("notice").element());
    expect(ref.current).toHaveClass("inline-notice--attention");
    expect(icon.element().closest(".inline-notice__header")).not.toBeNull();
    expect(main.element().tagName).toBe("SPAN");
    await expect.element(main).toHaveClass("inline-notice__main");
  });

  it("uses the supplied status and icon label", async () => {
    const screen = await render(
      <EvoInlineNotice
        a11yText="Order confirmed"
        className="custom-notice"
        status="confirmation"
      >
        <EvoInlineNoticeMain className="custom-main">
          Payment received.
        </EvoInlineNoticeMain>
      </EvoInlineNotice>,
    );
    const icon = screen.getByRole("img", { name: "Order confirmed" });
    const main = screen.getByText("Payment received.");

    expect(icon.element().closest(".inline-notice--confirmation")).toHaveClass(
      "custom-notice",
    );
    await expect.element(main).toHaveClass("custom-main");
  });

  it("omits hidden content and reports each appearance once", async () => {
    const onNoticeShow = vi.fn();

    function ToggleNotice() {
      const [hidden, setHidden] = useState(true);
      const [count, setCount] = useState(0);
      return (
        <>
          <button type="button" onClick={() => setHidden((value) => !value)}>
            Toggle notice
          </button>
          <button type="button" onClick={() => setCount(count + 1)}>
            Rerender {count}
          </button>
          <EvoInlineNotice hidden={hidden} onNoticeShow={() => onNoticeShow()}>
            <EvoInlineNoticeMain>Shipping update</EvoInlineNoticeMain>
          </EvoInlineNotice>
        </>
      );
    }

    const screen = await render(<ToggleNotice />);
    expect(screen.getByText("Shipping update").query()).toBeNull();
    expect(onNoticeShow).not.toHaveBeenCalled();

    await user.click(screen.getByRole("button", { name: "Toggle notice" }));
    await expect
      .element(screen.getByText("Shipping update"))
      .toBeInTheDocument();
    expect(onNoticeShow).toHaveBeenCalledTimes(1);

    await user.click(screen.getByRole("button", { name: "Rerender 0" }));
    expect(onNoticeShow).toHaveBeenCalledTimes(1);
    await user.click(screen.getByRole("button", { name: "Toggle notice" }));
    expect(screen.getByText("Shipping update").query()).toBeNull();
    await user.click(screen.getByRole("button", { name: "Toggle notice" }));
    expect(onNoticeShow).toHaveBeenCalledTimes(2);
  });
});
