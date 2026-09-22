import { createRef, useState } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { render } from "vitest-browser-react";
import { userEvent } from "vitest/browser";
import { EvoNumberInput } from "../number-input";

function getPaddle(
  screen: Awaited<ReturnType<typeof render>>,
  className: "decrement" | "increment",
) {
  // Paddles are aria-hidden and intentionally unavailable to semantic locators.
  return screen.container.querySelector<HTMLButtonElement>(
    `.number-input__${className}`,
  )!;
}

describe("evo-number-input", () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });

  afterEach(() => {
    user.cleanup();
  });

  it("uses a11yText as the input accessible name", async () => {
    const screen = await render(<EvoNumberInput a11yText="Item quantity" />);

    await expect
      .element(screen.getByRole("spinbutton", { name: "Item quantity" }))
      .toBeInTheDocument();
  });

  it("associates a generated ID with a visible label", async () => {
    const screen = await render(
      <EvoNumberInput label="Item quantity" a11yText={null} />,
    );
    const input = screen.getByRole("spinbutton", { name: "Item quantity" });
    const label = screen.getByText("Item quantity");

    await expect.element(label).toHaveAttribute("for", input.element().id);
  });

  it("preserves a consumer ID for the visible label", async () => {
    const screen = await render(
      <EvoNumberInput
        id="item-quantity"
        label="Item quantity"
        a11yText={null}
      />,
    );

    await expect
      .element(screen.getByRole("spinbutton", { name: "Item quantity" }))
      .toHaveAttribute("id", "item-quantity");
    await expect
      .element(screen.getByText("Item quantity"))
      .toHaveAttribute("for", "item-quantity");
  });

  it("updates an uncontrolled value from direct input and calls onChange", async () => {
    const onChange = vi.fn();
    const screen = await render(
      <EvoNumberInput a11yText="Item quantity" onChange={onChange} />,
    );
    const input = screen.getByRole("spinbutton", { name: "Item quantity" });

    await user.clear(input);
    await user.type(input, "4");

    await expect.element(input).toHaveValue(4);
    expect(onChange).toHaveBeenLastCalledWith(4);
  });

  it("passes the clamped displayed value to direct input callbacks", async () => {
    const displayedValues: number[] = [];
    const screen = await render(
      <EvoNumberInput
        a11yText="Item quantity"
        max={5}
        onChange={(nextValue) => displayedValues.push(nextValue)}
      />,
    );
    const input = screen.getByRole("spinbutton", { name: "Item quantity" });

    await user.clear(input);
    await user.type(input, "8");

    await expect.element(input).toHaveValue(5);
    expect(displayedValues[displayedValues.length - 1]).toBe(5);
  });

  it("updates an uncontrolled value and calls onChange after incrementing", async () => {
    const onChange = vi.fn();
    const screen = await render(
      <EvoNumberInput
        a11yText="Item quantity"
        defaultValue={2}
        onChange={onChange}
      />,
    );

    await user.click(getPaddle(screen, "increment"));

    await expect
      .element(screen.getByRole("spinbutton", { name: "Item quantity" }))
      .toHaveValue(3);
    expect(onChange).toHaveBeenCalledWith(3);
  });

  it("updates an uncontrolled value and calls onChange after decrementing", async () => {
    const onChange = vi.fn();
    const screen = await render(
      <EvoNumberInput
        a11yText="Item quantity"
        defaultValue={2}
        onChange={onChange}
      />,
    );

    await user.click(getPaddle(screen, "decrement"));

    await expect
      .element(screen.getByRole("spinbutton", { name: "Item quantity" }))
      .toHaveValue(1);
    expect(onChange).toHaveBeenCalledWith(1);
  });

  it("does not retain a controlled value until the parent updates it", async () => {
    const onChange = vi.fn();
    const screen = await render(
      <EvoNumberInput a11yText="Item quantity" value={2} onChange={onChange} />,
    );

    await user.click(getPaddle(screen, "increment"));

    await expect
      .element(screen.getByRole("spinbutton", { name: "Item quantity" }))
      .toHaveValue(2);
    expect(onChange).toHaveBeenCalledWith(3);
  });

  it("does not retain controlled direct input until the parent updates it", async () => {
    const onChange = vi.fn();
    const screen = await render(
      <EvoNumberInput a11yText="Item quantity" value={2} onChange={onChange} />,
    );
    const input = screen.getByRole("spinbutton", { name: "Item quantity" });

    (input.element() as HTMLInputElement).select();
    await user.type(input, "4");

    await expect.element(input).toHaveValue(2);
    expect(onChange).toHaveBeenLastCalledWith(4);
  });

  it("does not enable deletion for an empty accessible label", async () => {
    const screen = await render(
      <EvoNumberInput a11yDeleteText="" a11yText="Item quantity" />,
    );
    const input = screen.getByRole("spinbutton", { name: "Item quantity" });
    const root = screen.container.querySelector(".number-input")!;

    await expect.element(input).toHaveValue(0);
    await expect.element(input).toHaveAttribute("min", "0");
    expect(root.querySelector(".number-input__delete")).toBeNull();
    expect(root).not.toHaveClass("number-input--show-delete");
  });

  it("disables paddles at their boundaries", async () => {
    const screen = await render(
      <EvoNumberInput a11yText="Item quantity" value={5} min={1} max={5} />,
    );

    expect(getPaddle(screen, "increment")).toBeDisabled();
    expect(getPaddle(screen, "decrement")).not.toBeDisabled();
  });

  it("returns focus to the input after paddle clicks", async () => {
    const screen = await render(
      <EvoNumberInput a11yText="Item quantity" defaultValue={2} />,
    );
    const input = screen.getByRole("spinbutton", { name: "Item quantity" });

    await user.click(getPaddle(screen, "increment"));

    expect(document.activeElement).toBe(input.element());
  });

  it("renders and invokes the delete button", async () => {
    const onDelete = vi.fn();
    const screen = await render(
      <EvoNumberInput
        a11yDeleteText="Remove item"
        a11yText="Item quantity"
        defaultValue={1}
        onDelete={onDelete}
      />,
    );
    const deleteButton = screen.getByRole("button", { name: "Remove item" });

    await user.click(deleteButton);

    expect(onDelete).toHaveBeenCalledWith(expect.any(Object));
  });

  it("forwards ref to the native input", async () => {
    const ref = createRef<HTMLInputElement>();
    await render(<EvoNumberInput a11yText="Item quantity" ref={ref} />);

    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it("applies root and animation classes", async () => {
    const screen = await render(
      <EvoNumberInput
        a11yText="Item quantity"
        className="custom-number-input"
        defaultValue={1}
      />,
    );
    const root = screen.container.querySelector(".number-input")!;

    expect(root).toHaveClass("custom-number-input");
    await user.click(getPaddle(screen, "increment"));
    expect(root).toHaveClass("number-input--increment");

    await user.click(getPaddle(screen, "decrement"));
    expect(root).toHaveClass("number-input--decrement");
  });

  it("passes presentation props to the EvoInput textbox", async () => {
    const screen = await render(
      <EvoNumberInput
        a11yText="Item quantity"
        fluid
        inputSize="large"
        invalid
      />,
    );
    const textbox = screen.container.querySelector(".textbox")!;

    expect(textbox).toHaveClass(
      "textbox--fluid",
      "textbox--large",
      "textbox--invalid",
    );
  });

  it("supports controlled updates from every value-changing path", async () => {
    function Controlled() {
      const [value, setValue] = useState(2);

      return (
        <EvoNumberInput
          a11yText="Item quantity"
          value={value}
          onChange={setValue}
        />
      );
    }

    const screen = await render(<Controlled />);
    const input = screen.getByRole("spinbutton", { name: "Item quantity" });

    await user.click(getPaddle(screen, "increment"));
    await expect.element(input).toHaveValue(3);
    await user.click(getPaddle(screen, "decrement"));
    await expect.element(input).toHaveValue(2);
    await user.clear(input);
    await user.type(input, "4");
    await expect.element(input).toHaveValue(4);
  });
});
