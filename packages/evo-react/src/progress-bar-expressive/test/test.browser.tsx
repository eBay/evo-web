import { createRef, useState } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { render } from "vitest-browser-react";
import { EvoProgressBarExpressive } from "../progress-bar-expressive";

const firstMessages = [{ content: "Message 1" }, { content: "Message 2" }];

function ProgressBarWithParentRerender() {
  const [renderCount, setRenderCount] = useState(0);

  return (
    <>
      <button onClick={() => setRenderCount((count) => count + 1)}>
        Rerender {renderCount}
      </button>
      <EvoProgressBarExpressive
        a11yText="Loading"
        size="medium"
        messages={[{ content: "Message 1" }, { content: "Message 2" }]}
      />
    </>
  );
}

function advanceToNextMessage(duration = 1500) {
  return vi.advanceTimersByTimeAsync(duration + 833);
}

function mockReducedMotion(matches: boolean) {
  vi.spyOn(window, "matchMedia").mockImplementation(
    () =>
      ({
        matches,
        media: "(prefers-reduced-motion: reduce)",
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      }) as unknown as MediaQueryList,
  );
}

describe("evo-progress-bar-expressive", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it("renders an accessible progress bar with the default label", async () => {
    const screen = await render(
      <EvoProgressBarExpressive a11yText="Loading..." />,
    );

    await expect
      .element(screen.getByRole("progressbar", { name: "Loading..." }))
      .toBeInTheDocument();
  });

  it("maps a custom a11yText to the progress bar name", async () => {
    const screen = await render(
      <EvoProgressBarExpressive a11yText="Uploading photos" />,
    );

    await expect
      .element(screen.getByRole("progressbar", { name: "Uploading photos" }))
      .toBeInTheDocument();
  });

  it("passes root attributes, classes, and refs to the root div", async () => {
    const ref = createRef<HTMLDivElement>();
    const screen = await render(
      <EvoProgressBarExpressive
        a11yText="Loading"
        className="custom-class"
        data-testid="progress"
        ref={ref}
      />,
    );
    const root = screen.getByTestId("progress");

    await expect.element(root).toHaveClass("progress-bar-expressive");
    await expect.element(root).toHaveClass("custom-class");
    expect(ref.current).toBe(root.element());
  });

  it("renders no message region when messages are empty or omitted", async () => {
    const empty = await render(
      <EvoProgressBarExpressive a11yText="Loading" messages={[]} />,
    );
    expect(
      empty.container.querySelector(".progress-bar-expressive__messages"),
    ).toBeNull();

    await empty.rerender(<EvoProgressBarExpressive a11yText="Loading" />);
    expect(
      empty.container.querySelector(".progress-bar-expressive__messages"),
    ).toBeNull();
  });

  it("displays messages in order and wraps after the final message", async () => {
    const screen = await render(
      <EvoProgressBarExpressive
        a11yText="Loading"
        size="medium"
        messages={firstMessages}
      />,
    );
    const status = screen.getByRole("status");

    await expect.element(status).toHaveTextContent("Message 1");
    await advanceToNextMessage();
    await expect.element(status).toHaveTextContent("Message 2");
    await advanceToNextMessage();
    await expect.element(status).toHaveTextContent("Message 1");
  });

  it("honors the default message duration", async () => {
    const screen = await render(
      <EvoProgressBarExpressive
        a11yText="Loading"
        size="medium"
        messages={firstMessages}
      />,
    );
    const status = screen.getByRole("status");

    await vi.advanceTimersByTimeAsync(1499);
    await expect.element(status).toHaveTextContent("Message 1");
    await vi.advanceTimersByTimeAsync(1 + 833);
    await expect.element(status).toHaveTextContent("Message 2");
  });

  it("honors per-message custom durations", async () => {
    const screen = await render(
      <EvoProgressBarExpressive
        a11yText="Loading"
        size="medium"
        messages={[
          { content: "Message 1", duration: 2000 },
          { content: "Message 2", duration: 3000 },
        ]}
      />,
    );
    const status = screen.getByRole("status");

    await vi.advanceTimersByTimeAsync(2000 + 833);
    await expect.element(status).toHaveTextContent("Message 2");
    await vi.advanceTimersByTimeAsync(3000 + 833);
    await expect.element(status).toHaveTextContent("Message 1");
  });

  it("displays the first large message after its delayed entrance", async () => {
    const screen = await render(
      <EvoProgressBarExpressive
        a11yText="Loading"
        messages={[{ content: "Message 1" }]}
      />,
    );

    expect(screen.getByRole("status").element().textContent).toBe("");
    await vi.advanceTimersByTimeAsync(833 + 1500);
    await expect
      .element(screen.getByRole("status"))
      .toHaveTextContent("Message 1");
  });

  it("displays the first medium message immediately", async () => {
    const screen = await render(
      <EvoProgressBarExpressive
        a11yText="Loading"
        size="medium"
        messages={[{ content: "Message 1" }]}
      />,
    );

    await expect
      .element(screen.getByRole("status"))
      .toHaveTextContent("Message 1");
  });

  it("does not rotate a single message", async () => {
    const screen = await render(
      <EvoProgressBarExpressive
        a11yText="Loading"
        size="medium"
        messages={[{ content: "Only message" }]}
      />,
    );

    await vi.advanceTimersByTimeAsync(10000);
    await expect
      .element(screen.getByRole("status"))
      .toHaveTextContent("Only message");
    expect(vi.getTimerCount()).toBe(0);
  });

  it("mounts single-message content only once", async () => {
    const screen = await render(
      <EvoProgressBarExpressive
        a11yText="Loading"
        size="medium"
        messages={[
          {
            content: <span data-testid="single-message-content">Message</span>,
          },
        ]}
      />,
    );

    expect(
      screen.container.querySelectorAll(
        '[data-testid="single-message-content"]',
      ),
    ).toHaveLength(1);
  });

  it("uses reduced-motion timing without rendering a staged message", async () => {
    mockReducedMotion(true);
    const screen = await render(
      <EvoProgressBarExpressive a11yText="Loading" messages={firstMessages} />,
    );

    await expect
      .element(screen.getByRole("status"))
      .toHaveTextContent("Message 1");
    expect(screen.container.querySelector('[aria-hidden="true"]')).toBeNull();

    await vi.advanceTimersByTimeAsync(1500);
    await expect
      .element(screen.getByRole("status"))
      .toHaveTextContent("Message 1");
    await vi.advanceTimersByTimeAsync(750);
    await expect
      .element(screen.getByRole("status"))
      .toHaveTextContent("Message 2");
  });

  it("clears timers on unmount", async () => {
    const screen = await render(
      <EvoProgressBarExpressive
        a11yText="Loading"
        size="medium"
        messages={firstMessages}
      />,
    );

    expect(vi.getTimerCount()).toBeGreaterThan(0);
    await screen.unmount();
    expect(vi.getTimerCount()).toBe(0);
  });

  it("updates descriptors at the active index without resetting rotation", async () => {
    const screen = await render(
      <EvoProgressBarExpressive
        a11yText="Loading"
        size="medium"
        messages={[
          { content: "Message 1" },
          { content: "Message 2" },
          { content: "Message 3" },
        ]}
      />,
    );

    await vi.advanceTimersByTimeAsync(1499);
    await screen.rerender(
      <EvoProgressBarExpressive
        a11yText="Loading"
        size="medium"
        messages={[
          { content: "Message 1" },
          { content: "Message 2" },
          { content: "Message 3" },
        ]}
      />,
    );
    await vi.advanceTimersByTimeAsync(1 + 833);
    expect(screen.getByRole("status").element().textContent).toBe("Message 2");

    await screen.rerender(
      <EvoProgressBarExpressive
        a11yText="Loading"
        size="medium"
        messages={[
          { content: "Updated 1" },
          { content: "Updated 2" },
          { content: "Updated 3" },
        ]}
      />,
    );
    expect(screen.getByRole("status").element().textContent).toBe("Updated 2");

    await advanceToNextMessage();
    expect(screen.getByRole("status").element().textContent).toBe("Updated 3");

    await screen.rerender(
      <EvoProgressBarExpressive
        a11yText="Loading"
        size="medium"
        messages={[{ content: "Clamped 1" }]}
      />,
    );
    expect(screen.getByRole("status").element().textContent).toBe("Clamped 1");
  });

  it("handles messages becoming non-empty and empty", async () => {
    const screen = await render(
      <EvoProgressBarExpressive
        a11yText="Loading"
        size="medium"
        messages={[]}
      />,
    );

    await screen.rerender(
      <EvoProgressBarExpressive
        a11yText="Loading"
        size="medium"
        messages={[{ content: "Started" }]}
      />,
    );
    expect(screen.getByRole("status").element().textContent).toBe("Started");

    await screen.rerender(
      <EvoProgressBarExpressive a11yText="Loading" messages={[]} />,
    );
    expect(screen.container.querySelector('[role="status"]')).toBeNull();
  });

  it("preserves rotation timing across an ordinary parent rerender", async () => {
    const screen = await render(<ProgressBarWithParentRerender />);
    await vi.advanceTimersByTimeAsync(1499);

    await screen.getByRole("button", { name: "Rerender 0" }).click();
    expect(screen.container.querySelector("button")?.textContent).toContain(
      "Rerender 1",
    );
    await vi.advanceTimersByTimeAsync(1 + 833);

    expect(screen.getByRole("status").element().textContent).toBe("Message 2");
  });

  it("keeps the aria-describedby target in the DOM during delayed entrance", async () => {
    const screen = await render(
      <EvoProgressBarExpressive
        a11yText="Loading"
        messages={[{ content: "Message 1" }]}
      />,
    );
    const progressBar = screen.getByRole("progressbar");
    const describedBy = progressBar.element().getAttribute("aria-describedby");

    expect(describedBy).toBeTruthy();
    expect(
      screen.container.querySelector(`[id="${describedBy}"]`),
    ).not.toBeNull();
  });

  it("does not emit duration as a DOM attribute", async () => {
    const screen = await render(
      <EvoProgressBarExpressive
        a11yText="Loading"
        size="medium"
        messages={[{ content: "Message", duration: 2000 }]}
      />,
    );

    expect(screen.container.querySelector("[duration]")).toBeNull();
  });

  it("renders exactly 12 expressive line elements", async () => {
    const screen = await render(
      <EvoProgressBarExpressive a11yText="Loading" />,
    );

    expect(
      screen.container.querySelectorAll(
        ".progress-bar-expressive__lines > .progress-bar-expressive__line",
      ),
    ).toHaveLength(12);
  });
});
