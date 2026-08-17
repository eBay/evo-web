import { createRef } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { userEvent } from "vitest/browser";
import { render } from "vitest-browser-react";
import { EvoRadio } from "../index";

describe("evo-radio", () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });

  afterEach(() => {
    user.cleanup();
  });

  it("passes the native change event through an external label", async () => {
    const onChange = vi.fn();
    const screen = await render(
      <>
        <EvoRadio id="option" value="123" onChange={onChange} />
        <label htmlFor="option">Option</label>
      </>,
    );

    await user.click(screen.getByText("Option"));

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange.mock.calls[0]).toHaveLength(1);
    expect(onChange.mock.calls[0][0]).toMatchObject({ type: "change" });
    await expect
      .element(screen.getByRole("radio", { name: "Option" }))
      .toBeChecked();
  });

  it("passes native focus and keyboard events through", async () => {
    const onFocus = vi.fn();
    const onKeyDown = vi.fn();
    await render(
      <EvoRadio aria-label="Option" onFocus={onFocus} onKeyDown={onKeyDown} />,
    );

    await user.tab();
    await user.keyboard("a");

    expect(onFocus).toHaveBeenCalledTimes(1);
    expect(onFocus.mock.calls[0]).toHaveLength(1);
    expect(onKeyDown).toHaveBeenCalledTimes(1);
    expect(onKeyDown.mock.calls[0]).toHaveLength(1);
    expect(onKeyDown.mock.calls[0][0]).toMatchObject({ key: "a" });
  });

  it("supports native uncontrolled checked state", async () => {
    const screen = await render(<EvoRadio aria-label="Option" />);
    const radio = screen.getByRole("radio", { name: "Option" });

    await expect.element(radio).not.toBeChecked();
    await user.click(radio);
    await expect.element(radio).toBeChecked();
  });

  it("preserves native controlled checked state", async () => {
    const onChange = vi.fn();
    const screen = await render(
      <EvoRadio aria-label="Option" checked={false} onChange={onChange} />,
    );
    const radio = screen.getByRole("radio", { name: "Option" });

    await user.click(radio);

    expect(onChange).toHaveBeenCalledTimes(1);
    await expect.element(radio).not.toBeChecked();
  });

  it("uses native radio grouping", async () => {
    const screen = await render(
      <>
        <EvoRadio aria-label="First" name="options" defaultChecked />
        <EvoRadio aria-label="Second" name="options" />
      </>,
    );
    const first = screen.getByRole("radio", { name: "First" });
    const second = screen.getByRole("radio", { name: "Second" });

    await user.click(second);

    await expect.element(first).not.toBeChecked();
    await expect.element(second).toBeChecked();
  });

  it("applies the large modifier to the wrapper", async () => {
    const screen = await render(<EvoRadio aria-label="Option" size="large" />);
    const radio = screen.getByRole("radio", { name: "Option" });

    expect(radio.element().closest(".radio")).toHaveClass("radio--large");
  });

  it("passes native attributes to the input", async () => {
    const screen = await render(
      <EvoRadio
        aria-label="Option"
        disabled
        name="options"
        required
        value="123"
      />,
    );
    const radio = screen.getByRole("radio", { name: "Option" });

    await expect.element(radio).toBeDisabled();
    await expect.element(radio).toBeRequired();
    await expect.element(radio).toHaveAttribute("name", "options");
    await expect.element(radio).toHaveAttribute("value", "123");
  });

  it("forwards ref to the native input", async () => {
    const ref = createRef<HTMLInputElement>();
    await render(<EvoRadio aria-label="Option" ref={ref} />);

    expect(ref.current).toBeInstanceOf(HTMLInputElement);
    expect(ref.current?.type).toBe("radio");
  });
});
