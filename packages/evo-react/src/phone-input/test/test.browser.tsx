import { createRef } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { userEvent } from "vitest/browser";
import { render } from "vitest-browser-react";
import { EvoPhoneInput } from "../phone-input";

describe("EvoPhoneInput", () => {
  let user: ReturnType<typeof userEvent.setup>;
  beforeEach(() => {
    user = userEvent.setup();
  });
  afterEach(() => {
    user.cleanup();
  });

  it("renders the legacy combined structure with a private CSS flag", async () => {
    const screen = await render(
      <EvoPhoneInput
        countryCode="US"
        locale="en-US"
        floatingLabel="Phone number"
      />,
    );
    const input = screen.getByRole("textbox", { name: "Phone number" });
    const button = screen.getByRole("button", {
      name: /Country calling code: United States \+1/,
    });
    await expect.element(input).toHaveAttribute("type", "tel");
    await expect.element(button).toHaveAttribute("aria-haspopup", "listbox");
    expect(button.element().closest(".phone-input")).not.toBeNull();
    expect(screen.container.querySelector(".fflag--us")).not.toBeNull();
    expect(
      screen.container.querySelector(".textbox span")?.textContent,
    ).toContain("+ 1");
  });

  it("formats a controlled number and forwards the native input ref", async () => {
    const ref = createRef<HTMLInputElement>();
    const screen = await render(
      <EvoPhoneInput
        ref={ref}
        countryCode="US"
        locale="en-US"
        floatingLabel="Phone number"
        value="5551234567"
      />,
    );
    const input = screen.getByRole("textbox", { name: "Phone number" });
    await expect.element(input).toHaveValue("(555) 123-4567");
    expect(ref.current).toBe(input.element());
  });

  it("reports formatted and raw values while editing", async () => {
    const onValueChange = vi.fn();
    const onChange = vi.fn();
    const screen = await render(
      <form>
        <EvoPhoneInput
          defaultCountryCode="US"
          locale="en-US"
          floatingLabel="Phone number"
          name="phone"
          onValueChange={onValueChange}
          onChange={onChange}
        />
      </form>,
    );
    const input = screen.getByRole("textbox", { name: "Phone number" });
    await user.type(input, "5551234567");
    await expect.element(input).toHaveValue("(555) 123-4567");
    expect(onValueChange).toHaveBeenLastCalledWith({
      value: "(555) 123-4567",
      rawValue: "5551234567",
      callingCode: "1",
      countryCode: "US",
    });
    expect(onChange).toHaveBeenCalled();
    expect(
      new FormData(screen.container.querySelector("form")!).get("phone"),
    ).toBe("(555) 123-4567");
  });

  it("selects a country by ISO value and reapplies its number mask", async () => {
    const onCountryCodeChange = vi.fn();
    const onValueChange = vi.fn();
    const screen = await render(
      <form>
        <EvoPhoneInput
          defaultCountryCode="US"
          defaultValue="48999216078"
          locale="en-US"
          floatingLabel="Phone number"
          countryName="country"
          onCountryCodeChange={onCountryCodeChange}
          onValueChange={onValueChange}
        />
      </form>,
    );
    await user.click(
      screen.getByRole("button", { name: /Country calling code/ }),
    );
    await user.click(screen.getByRole("option", { name: /Brazil/ }));
    expect(onCountryCodeChange).toHaveBeenCalledWith("BR");
    expect(onValueChange).toHaveBeenCalledWith({
      value: "(48) 99921-6078",
      rawValue: "48999216078",
      callingCode: "55",
      countryCode: "BR",
    });
    await expect
      .element(screen.getByRole("textbox", { name: "Phone number" }))
      .toHaveValue("(48) 99921-6078");
    expect(
      new FormData(screen.container.querySelector("form")!).get("country"),
    ).toBe("BR");
  });

  it("supports keyboard typeahead in the country selector", async () => {
    const onCountryCodeChange = vi.fn();
    const screen = await render(
      <EvoPhoneInput
        defaultCountryCode="US"
        locale="en-US"
        floatingLabel="Phone number"
        onCountryCodeChange={onCountryCodeChange}
      />,
    );
    const trigger = screen.getByRole("button", {
      name: /Country calling code/,
    });
    await user.click(trigger);
    await user.keyboard("Braz{Enter}");
    expect(onCountryCodeChange).toHaveBeenCalledWith("BR");
    await expect.element(trigger).toHaveAttribute("aria-expanded", "false");
    await expect.element(trigger).toHaveFocus();
  });

  it("updates the number and calling code when controlled country changes", async () => {
    const screen = await render(
      <EvoPhoneInput
        countryCode="US"
        locale="en-US"
        floatingLabel="Phone number"
        value="5551234567"
      />,
    );
    screen.rerender(
      <EvoPhoneInput
        countryCode="GB"
        locale="en-US"
        floatingLabel="Phone number"
        value="5551234567"
      />,
    );
    await expect
      .element(screen.getByRole("textbox", { name: "Phone number" }))
      .toHaveValue("55512 34567");
    await expect
      .element(screen.getByRole("button", { name: /United Kingdom \+44/ }))
      .toBeInTheDocument();
  });

  it("keeps the input and country selector disabled or readonly together", async () => {
    const screen = await render(
      <EvoPhoneInput
        countryCode="US"
        locale="en-US"
        floatingLabel="Phone number"
        disabled
      />,
    );
    await expect
      .element(screen.getByRole("textbox", { name: "Phone number" }))
      .toBeDisabled();
    await expect
      .element(screen.getByRole("button", { name: /Country calling code/ }))
      .toBeDisabled();
    screen.rerender(
      <EvoPhoneInput
        countryCode="US"
        locale="en-US"
        floatingLabel="Phone number"
        readOnly
      />,
    );
    await expect
      .element(screen.getByRole("textbox", { name: "Phone number" }))
      .toHaveAttribute("readonly");
    await expect
      .element(screen.getByRole("button", { name: /Country calling code/ }))
      .toBeDisabled();
  });

  it("maps invalid state to the input and Skin wrapper", async () => {
    const screen = await render(
      <EvoPhoneInput
        countryCode="US"
        locale="en-US"
        floatingLabel="Phone number"
        aria-invalid
      />,
    );
    await expect
      .element(screen.getByRole("textbox", { name: "Phone number" }))
      .toHaveAttribute("aria-invalid", "true");
    expect(
      screen.container.querySelector(".phone-input--error"),
    ).not.toBeNull();
  });

  it("localizes country names without changing country values", async () => {
    const screen = await render(
      <EvoPhoneInput
        countryCode="DE"
        locale="fr-FR"
        floatingLabel="Numéro de téléphone"
      />,
    );
    await expect
      .element(screen.getByRole("button", { name: /Allemagne \+49/ }))
      .toBeInTheDocument();
    await expect
      .element(screen.getByRole("textbox", { name: "Numéro de téléphone" }))
      .toBeInTheDocument();
  });
});
