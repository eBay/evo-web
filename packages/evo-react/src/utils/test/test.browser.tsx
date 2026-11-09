import { act, createRef, useRef, useState } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { render } from "vitest-browser-react";
import { userEvent } from "vitest/browser";
import { EvoInput } from "../../input";
import { EvoTextarea } from "../../textarea";
import { EvoCombobox } from "../../combobox";
import { EvoChipsCombobox } from "../../chips-combobox";
import { EvoNumberInput } from "../../number-input";
import { EvoStarRatingSelect } from "../../star-rating-select";
import { EvoDateInput } from "../../date-input";
import {
  EvoDateRangeInput,
  EvoDateRangeInputGroup,
} from "../../date-range-input";
import { useFormReset } from "../use-form-reset";

const starText = [
  "1 star",
  "2 stars",
  "3 stars",
  "4 stars",
  "5 stars",
] as const;

function ResetField({
  defaultValue,
  form,
  onResetValue,
}: {
  defaultValue: string;
  form: string;
  onResetValue: (value: string) => void;
}) {
  const ref = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState(defaultValue);
  useFormReset(ref, defaultValue, (next) => {
    setValue(next);
    onResetValue(next);
  });
  return (
    <input
      ref={ref}
      form={form}
      aria-label="Field"
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
    />
  );
}

describe("form reset", () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });

  afterEach(() => {
    user.cleanup();
  });

  it("uses the current default and associated form, and removes stale listeners", async () => {
    const first = createRef<HTMLFormElement>();
    const second = createRef<HTMLFormElement>();
    const onResetValue = vi.fn();
    const fixture = (defaultValue: string, form: string, show = true) => (
      <>
        <form id="first-reset-form" ref={first} />
        <form id="second-reset-form" ref={second} />
        {show && (
          <ResetField
            defaultValue={defaultValue}
            form={form}
            onResetValue={onResetValue}
          />
        )}
      </>
    );
    const screen = await render(fixture("initial", "first-reset-form"));
    await user.type(screen.getByRole("textbox"), "edited");
    await screen.rerender(fixture("latest", "second-reset-form"));

    await act(async () => first.current!.reset());
    expect(onResetValue).not.toHaveBeenCalled();
    await act(async () => second.current!.reset());
    await expect.element(screen.getByRole("textbox")).toHaveValue("latest");
    expect(onResetValue).toHaveBeenCalledExactlyOnceWith("latest");

    await screen.rerender(fixture("latest", "second-reset-form", false));
    await act(async () => second.current!.reset());
    expect(onResetValue).toHaveBeenCalledTimes(1);
  });

  it("does not apply a canceled reset", async () => {
    const onResetValue = vi.fn();
    const screen = await render(
      <>
        <form
          id="canceled-reset-form"
          onReset={(event) => event.preventDefault()}
        >
          <button type="reset">Reset</button>
        </form>
        <ResetField
          form="canceled-reset-form"
          defaultValue="initial"
          onResetValue={onResetValue}
        />
      </>,
    );
    await user.type(screen.getByRole("textbox"), "edited");
    await user.click(screen.getByRole("button", { name: "Reset" }));
    await expect
      .element(screen.getByRole("textbox"))
      .toHaveValue("initialedited");
    expect(onResetValue).not.toHaveBeenCalled();
  });

  for (const [name, Component] of [
    ["input", EvoInput],
    ["textarea", EvoTextarea],
    ["combobox", EvoCombobox],
  ] as const) {
    describe(name, () => {
      it.each([undefined, "initial"])(
        "restores native value and floating label to default %s",
        async (defaultValue) => {
          const onChange = vi.fn();
          const ref = vi.fn();
          const screen = await render(
            <form>
              <Component
                ref={ref}
                floatingLabel="Field"
                defaultValue={defaultValue}
                onChange={onChange}
              />
              <button type="reset">Reset</button>
            </form>,
          );
          const input = screen.getByRole(
            Component === EvoCombobox ? "combobox" : "textbox",
          );
          await user.type(input, "edited");
          onChange.mockClear();
          await user.click(screen.getByRole("button", { name: "Reset" }));

          await expect.element(input).toHaveValue(defaultValue ?? "");
          await expect
            .element(screen.getByText("Field"))
            .toHaveClass(
              defaultValue
                ? "floating-label__label"
                : "floating-label__label--inline",
            );
          expect(onChange).not.toHaveBeenCalled();
          expect(ref).toHaveBeenCalledWith(input.element());
          await user.click(screen.getByRole("button", { name: "Reset" }));
          await expect.element(input).toHaveValue(defaultValue ?? "");
        },
      );

      it("preserves controlled values", async () => {
        const onChange = vi.fn();
        const screen = await render(
          <form>
            <Component
              floatingLabel="Field"
              value="controlled"
              onChange={onChange}
            />
            <button type="reset">Reset</button>
          </form>,
        );
        await user.click(screen.getByRole("button", { name: "Reset" }));
        await expect
          .element(
            screen.getByRole(
              Component === EvoCombobox ? "combobox" : "textbox",
            ),
          )
          .toHaveValue("controlled");
        expect(onChange).not.toHaveBeenCalled();
      });
    });
  }

  it.each([0, 2] as const)(
    "restores a star rating of %s and its filled icons",
    async (defaultValue) => {
      const onValueChange = vi.fn();
      const form = createRef<HTMLFormElement>();
      const screen = await render(
        <form ref={form}>
          <EvoStarRatingSelect
            defaultValue={defaultValue}
            a11yText="Rating"
            a11yStarText={starText}
            onValueChange={onValueChange}
          />
        </form>,
      );
      await user.click(screen.getByRole("radio", { name: "4 stars" }));
      onValueChange.mockClear();
      await act(async () => form.current!.reset());

      for (let star = 1; star <= 5; star++) {
        const radio = screen.getByRole("radio", { name: starText[star - 1] });
        await expect
          .poll(() => (radio.element() as HTMLInputElement).checked)
          .toBe(star === defaultValue);
        expect(
          radio
            .element()
            .classList.contains("star-rating-select__control--filled"),
        ).toBe(star <= defaultValue);
      }
      expect(onValueChange).not.toHaveBeenCalled();
    },
  );

  it("restores number input values and boundary buttons without notifying consumers", async () => {
    const onChange = vi.fn();
    const screen = await render(
      <form>
        <EvoNumberInput defaultValue={2} min={2} onChange={onChange} />
        <button type="reset">Reset</button>
      </form>,
    );
    const increment = screen.container.querySelector<HTMLButtonElement>(
      ".number-input__increment",
    )!;
    const decrement = screen.container.querySelector<HTMLButtonElement>(
      ".number-input__decrement",
    )!;
    await user.click(increment);
    await expect.element(screen.getByRole("spinbutton")).toHaveValue(3);
    onChange.mockClear();
    await user.click(screen.getByRole("button", { name: "Reset" }));
    await expect.element(screen.getByRole("spinbutton")).toHaveValue(2);
    expect(decrement).toBeDisabled();
    expect(onChange).not.toHaveBeenCalled();
  });

  it("restores chips and clears uncommitted input without selection callbacks", async () => {
    const onSelectedChange = vi.fn();
    const screen = await render(
      <form>
        <EvoChipsCombobox
          aria-label="Features"
          defaultSelected={["Original"]}
          onSelectedChange={onSelectedChange}
        />
        <button type="reset">Reset</button>
      </form>,
    );
    const input = screen.getByRole("combobox");
    await user.type(input, "Added");
    await user.keyboard("{Enter}");
    await user.type(input, "draft");
    onSelectedChange.mockClear();
    await user.click(screen.getByRole("button", { name: "Reset" }));
    await expect.element(input).toHaveValue("");
    await expect.element(screen.getByText("Original")).toBeInTheDocument();
    await expect
      .element(screen.getByText("Added", { exact: true }))
      .not.toBeInTheDocument();
    expect(onSelectedChange).not.toHaveBeenCalled();
  });

  it("restores committed dates and clears invalid drafts even when the committed date has not changed", async () => {
    const onChange = vi.fn();
    const screen = await render(
      <form>
        <EvoDateInput
          floatingLabel="Date"
          locale="en-US"
          defaultValue="2024-01-03"
          a11yOpenPopoverText="Choose date"
          onChange={onChange}
        >
          {null}
        </EvoDateInput>
        <button type="reset">Reset</button>
      </form>,
    );
    const input = screen.getByRole("textbox", { name: "Date" });
    await user.clear(input);
    await user.type(input, "01/12/2024");
    await user.click(screen.getByRole("button", { name: "Reset" }));
    await expect.element(input).toHaveValue("01/03/2024");
    await user.clear(input);
    await user.type(input, "invalid");
    await user.tab();
    await expect.element(input).toHaveAttribute("aria-invalid", "true");
    onChange.mockClear();
    await user.click(screen.getByRole("button", { name: "Reset" }));
    await expect.element(input).toHaveValue("01/03/2024");
    await expect.element(input).not.toHaveAttribute("aria-invalid");
    expect(onChange).not.toHaveBeenCalled();
  });

  it("restores both date range fields", async () => {
    const onChange = vi.fn();
    const screen = await render(
      <form>
        <EvoDateRangeInputGroup
          defaultValue={{ from: "2024-01-03", to: "2024-01-10" }}
          locale="en-US"
          a11yOpenPopoverText="Choose range"
          onChange={onChange}
        >
          <EvoDateRangeInput type="start" floatingLabel="From" />
          <EvoDateRangeInput type="end" floatingLabel="To" />
        </EvoDateRangeInputGroup>
        <button type="reset">Reset</button>
      </form>,
    );
    const from = screen.getByRole("textbox", { name: "From" });
    const to = screen.getByRole("textbox", { name: "To" });
    await user.clear(from);
    await user.type(from, "01/04/2024");
    await user.clear(to);
    await user.type(to, "01/12/2024");
    await user.tab();
    onChange.mockClear();
    await user.click(screen.getByRole("button", { name: "Reset" }));
    await expect.element(from).toHaveValue("01/03/2024");
    await expect.element(to).toHaveValue("01/10/2024");
    expect(onChange).not.toHaveBeenCalled();
  });
});
