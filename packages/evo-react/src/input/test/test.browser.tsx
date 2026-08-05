import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { render } from "vitest-browser-react";
import { userEvent } from "vitest/browser";
import { createRef, useState } from "react";
import { EvoIconClear16 } from "../../icon/icons/clear-16";
import { EvoIconSearch16 } from "../../icon/icons/search-16";
import { EvoInput } from "../input";

describe("evo-input", () => {
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
      <EvoInput aria-label="Search" onChange={onChange} />,
    );

    await user.type(screen.getByRole("textbox", { name: "Search" }), "camera");

    expect(onChange).toHaveBeenCalledTimes(6);
  });

  it("associates prefix and postfix content with the input", async () => {
    const screen = await render(
      <>
        <p id="input-error">Enter a valid amount.</p>
        <EvoInput
          aria-label="Amount"
          aria-describedby="input-error"
          prefix={{ content: "$", className: "currency" }}
          postfix={{ content: "USD", "data-testid": "currency-code" }}
        />
      </>,
    );
    const input = screen.getByRole("textbox", { name: "Amount" });
    const ids = input.element().getAttribute("aria-describedby")!.split(" ");

    expect(ids[0]).toBe("input-error");
    expect(ids).toHaveLength(3);
    expect(ids.every((id) => document.getElementById(id))).toBe(true);
    await expect.element(screen.getByText("$")).toHaveClass("currency");
    await expect
      .element(screen.getByTestId("currency-code"))
      .toHaveTextContent("USD");
  });

  it("does not add description IDs for icon-only affixes", async () => {
    const screen = await render(
      <EvoInput
        aria-label="Search"
        prefix={{ content: false, icon: <EvoIconSearch16 /> }}
      />,
    );

    await expect
      .element(screen.getByRole("textbox", { name: "Search" }))
      .not.toHaveAttribute("aria-describedby");
  });

  it("renders an actionable postfix icon with EvoIconButton", async () => {
    const onClick = vi.fn();
    const screen = await render(
      <EvoInput
        aria-label="Search"
        postfix={{
          icon: <EvoIconClear16 />,
          buttonProps: { a11yText: "Clear search", onClick },
        }}
      />,
    );
    const button = screen.getByRole("button", { name: "Clear search" });

    await expect.element(button).toHaveClass("icon-btn--transparent");
    await user.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("animates a stable floating label and manages the placeholder", async () => {
    const screen = await render(
      <EvoInput floatingLabel="Email address" placeholder="name@example.com" />,
    );
    const input = screen.getByRole("textbox", { name: "Email address" });
    const label = screen.getByText("Email address");
    const labelElement = label.element();

    await expect.element(label).toHaveClass("floating-label__label--inline");
    await expect.element(input).not.toHaveAttribute("placeholder");

    await user.click(input);

    expect(screen.getByText("Email address").element()).toBe(labelElement);
    await expect
      .element(label)
      .toHaveClass(
        "floating-label__label--animate",
        "floating-label__label--focus",
      );
    await expect
      .element(label)
      .not.toHaveClass("floating-label__label--inline");
    await expect
      .element(input)
      .toHaveAttribute("placeholder", "name@example.com");

    await user.tab();

    expect(screen.getByText("Email address").element()).toBe(labelElement);
    await expect.element(label).toHaveClass("floating-label__label--inline");
    await expect.element(input).not.toHaveAttribute("placeholder");
  });

  it("refreshes the same floating label after controlled value updates", async () => {
    function ControlledInput() {
      const [value, setValue] = useState("");

      return (
        <EvoInput
          floatingLabel="Email address"
          value={value}
          onChange={(event) => setValue(event.currentTarget.value)}
        />
      );
    }

    const screen = await render(<ControlledInput />);
    const input = screen.getByRole("textbox", { name: "Email address" });
    const label = screen.getByText("Email address");
    const labelElement = label.element();

    await user.type(input, "a");
    await user.tab();

    expect(screen.getByText("Email address").element()).toBe(labelElement);
    await expect
      .element(label)
      .not.toHaveClass("floating-label__label--inline");
  });

  it("forwards ref to the native input", async () => {
    const ref = createRef<HTMLInputElement>();
    await render(<EvoInput aria-label="Search" ref={ref} />);

    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });
});
