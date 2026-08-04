import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { render } from "vitest-browser-react";
import { userEvent } from "vitest/browser";
import { createRef } from "react";
import { EvoTextarea } from "../textarea";

describe("evo-textarea", () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });

  afterEach(() => {
    user.cleanup();
  });

  it("passes native change events through", async () => {
    const onChange = vi.fn();
    const screen = await render(
      <EvoTextarea aria-label="Description" onChange={onChange} />,
    );

    await user.type(
      screen.getByRole("textbox", { name: "Description" }),
      "Details",
    );

    expect(onChange).toHaveBeenCalledTimes(7);
  });

  it("applies textarea states to the Skin wrapper and control", async () => {
    const screen = await render(
      <EvoTextarea aria-label="Description" fluid inputSize="large" invalid />,
    );
    const textarea = screen.getByRole("textbox", { name: "Description" });
    const wrapper = textarea.element().closest(".textbox");

    await expect.element(textarea).toHaveAttribute("aria-invalid", "true");
    expect(wrapper).toHaveClass(
      "textbox--fluid",
      "textbox--large",
      "textbox--invalid",
    );
  });

  it("raises a floating label when text is entered", async () => {
    const screen = await render(
      <EvoTextarea floatingLabel="Description" opaqueLabel />,
    );
    const textarea = screen.getByRole("textbox", { name: "Description" });
    const label = screen.getByText("Description");

    await expect.element(label).toHaveClass("floating-label__label--inline");
    await user.type(textarea, "Details");
    await user.tab();
    await expect
      .element(label)
      .not.toHaveClass("floating-label__label--inline");
    expect(label.element().closest(".floating-label")).toHaveClass(
      "floating-label--opaque",
    );
  });

  it("forwards ref to the native textarea", async () => {
    const ref = createRef<HTMLTextAreaElement>();
    await render(<EvoTextarea aria-label="Description" ref={ref} />);

    expect(ref.current).toBeInstanceOf(HTMLTextAreaElement);
  });
});
