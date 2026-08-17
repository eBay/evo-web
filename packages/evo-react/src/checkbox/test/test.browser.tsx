import { createRef } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { userEvent } from "vitest/browser";
import { render } from "vitest-browser-react";
import { EvoCheckbox } from "../index";

describe("evo-checkbox", () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });

  afterEach(() => {
    user.cleanup();
  });

  it("passes the native change event through", async () => {
    const onChange = vi.fn();
    const screen = await render(
      <EvoCheckbox aria-label="Option" value="123" onChange={onChange} />,
    );

    await user.click(screen.getByRole("checkbox", { name: "Option" }));

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange.mock.calls[0]).toHaveLength(1);
    expect(onChange.mock.calls[0][0]).toMatchObject({ type: "change" });
  });

  it("passes the native focus event through", async () => {
    const onFocus = vi.fn();
    await render(<EvoCheckbox aria-label="Option" onFocus={onFocus} />);

    await user.tab();

    expect(onFocus).toHaveBeenCalledTimes(1);
    expect(onFocus.mock.calls[0]).toHaveLength(1);
  });

  it("passes the native keyboard event through", async () => {
    const onKeyDown = vi.fn();
    await render(<EvoCheckbox aria-label="Option" onKeyDown={onKeyDown} />);

    await user.tab();
    await user.keyboard("a");

    expect(onKeyDown).toHaveBeenCalledTimes(1);
    expect(onKeyDown.mock.calls[0]).toHaveLength(1);
    expect(onKeyDown.mock.calls[0][0]).toMatchObject({ key: "a" });
  });

  it("supports native uncontrolled checked state", async () => {
    const screen = await render(
      <EvoCheckbox aria-label="Option" defaultChecked />,
    );
    const checkbox = screen.getByRole("checkbox", { name: "Option" });

    await expect.element(checkbox).toBeChecked();
    await user.click(checkbox);
    await expect.element(checkbox).not.toBeChecked();
  });

  it("preserves native controlled checked state", async () => {
    const onChange = vi.fn();
    const screen = await render(
      <EvoCheckbox aria-label="Option" checked onChange={onChange} />,
    );
    const checkbox = screen.getByRole("checkbox", { name: "Option" });

    await user.click(checkbox);

    expect(onChange).toHaveBeenCalledTimes(1);
    await expect.element(checkbox).toBeChecked();
  });

  it("applies the large modifier to the wrapper", async () => {
    const screen = await render(
      <EvoCheckbox aria-label="Option" size="large" />,
    );
    const checkbox = screen.getByRole("checkbox", { name: "Option" });

    expect(checkbox.element().closest(".checkbox")).toHaveClass(
      "checkbox--large",
    );
  });

  it("passes native attributes to the input", async () => {
    const screen = await render(
      <EvoCheckbox aria-label="Option" disabled name="options" value="123" />,
    );
    const checkbox = screen.getByRole("checkbox", { name: "Option" });

    await expect.element(checkbox).toBeDisabled();
    await expect.element(checkbox).toHaveAttribute("name", "options");
    await expect.element(checkbox).toHaveAttribute("value", "123");
  });

  it("forwards ref to the native input", async () => {
    const ref = createRef<HTMLInputElement>();
    await render(<EvoCheckbox aria-label="Option" ref={ref} />);

    expect(ref.current).toBeInstanceOf(HTMLInputElement);
    expect(ref.current?.type).toBe("checkbox");
  });
});
