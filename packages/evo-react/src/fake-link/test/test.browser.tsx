import { createRef } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { userEvent } from "vitest/browser";
import { render } from "vitest-browser-react";
import { EvoFakeLink } from "../fake-link";

describe("evo-fake-link", () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });

  afterEach(() => {
    user.cleanup();
  });

  it("keeps button semantics and does not submit a form by default", async () => {
    const onSubmit = vi.fn();
    const screen = await render(
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onSubmit();
        }}
      >
        <EvoFakeLink>View seller details</EvoFakeLink>
      </form>,
    );
    const button = screen.getByRole("button", { name: "View seller details" });

    await expect.element(button).toHaveClass("fake-link");
    await expect.element(button).toHaveAttribute("type", "button");
    await user.click(button);
    expect(onSubmit).not.toHaveBeenCalled();
  });

  it("calls click and Escape handlers for an enabled button", async () => {
    const onClick = vi.fn();
    const onKeyDown = vi.fn();
    const onEscape = vi.fn();
    const screen = await render(
      <EvoFakeLink onClick={onClick} onKeyDown={onKeyDown} onEscape={onEscape}>
        View seller details
      </EvoFakeLink>,
    );
    const button = screen.getByRole("button", { name: "View seller details" });

    await user.click(button);
    await user.keyboard("{Escape}");

    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onKeyDown).toHaveBeenCalledTimes(1);
    expect(onEscape).toHaveBeenCalledTimes(1);
    expect(onKeyDown.mock.invocationCallOrder[0]).toBeLessThan(
      onEscape.mock.invocationCallOrder[0],
    );
  });

  it("keeps a disabled button inactive", async () => {
    const onClick = vi.fn();
    const onEscape = vi.fn();
    const ref = createRef<HTMLButtonElement>();
    const screen = await render(
      <EvoFakeLink disabled onClick={onClick} onEscape={onEscape} ref={ref}>
        View seller details
      </EvoFakeLink>,
    );
    const button = screen.getByRole("button", { name: "View seller details" });

    await expect.element(button).toBeDisabled();
    ref.current?.click();
    await user.keyboard("{Escape}");
    expect(onEscape).not.toHaveBeenCalled();
    expect(onClick).not.toHaveBeenCalled();
  });

  it("passes variant, native props, and ref to the button", async () => {
    const ref = createRef<HTMLButtonElement>();
    const screen = await render(
      <EvoFakeLink
        variant="standalone"
        className="seller-details"
        data-testid="seller-details"
        ref={ref}
        type="submit"
      >
        View seller details
      </EvoFakeLink>,
    );
    const button = screen.getByRole("button", { name: "View seller details" });

    await expect
      .element(button)
      .toHaveClass("standalone-link", "seller-details");
    await expect.element(button).toHaveAttribute("type", "submit");
    await expect
      .element(button)
      .toHaveAttribute("data-testid", "seller-details");
    expect(ref.current).toBe(button.element());
  });
});
