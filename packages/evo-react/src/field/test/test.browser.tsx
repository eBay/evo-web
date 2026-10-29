import { createRef } from "react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { userEvent } from "vitest/browser";
import { render } from "vitest-browser-react";
import { EvoField, EvoFieldDescription, EvoLabel } from "../index";

describe("evo-field", () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });

  afterEach(() => {
    user.cleanup();
  });

  it("keeps block layout, label, description, and native refs", async () => {
    const fieldRef = createRef<HTMLDivElement>();
    const labelRef = createRef<HTMLLabelElement>();
    const descriptionRef = createRef<HTMLDivElement>();
    const screen = await render(
      <EvoField
        layout="block"
        ref={fieldRef}
        className="listing-field"
        dir="rtl"
        data-testid="listing-field"
      >
        <EvoLabel ref={labelRef} htmlFor="listing-title" stacked required>
          Listing title
        </EvoLabel>
        <input
          id="listing-title"
          required
          aria-describedby="listing-title-help"
        />
        <EvoFieldDescription
          ref={descriptionRef}
          id="listing-title-help"
          type="information"
        >
          Include the brand and model.
        </EvoFieldDescription>
      </EvoField>,
    );

    const field = screen.getByTestId("listing-field");
    const label = screen.getByText("Listing title", { exact: false });
    const input = screen.getByRole("textbox", { name: /Listing title/ });
    const description = screen.getByText("Include the brand and model.");

    expect(field.element().tagName).toBe("DIV");
    await expect.element(field).toHaveClass("field", "listing-field");
    await expect.element(field).toHaveAttribute("dir", "rtl");
    await expect
      .element(label)
      .toHaveClass("field__label", "field__label--stacked");
    await expect
      .element(description)
      .toHaveClass("field__description", "field__description--information");
    await expect
      .element(input)
      .toHaveAttribute("aria-describedby", "listing-title-help");
    expect(fieldRef.current).toBe(field.element());
    expect(labelRef.current).toBe(label.element());
    expect(descriptionRef.current).toBe(description.element());
    await user.click(label);
    await expect.element(input).toHaveFocus();
  });

  it("renders inline wrappers and a label after a native checkbox", async () => {
    const fieldRef = createRef<HTMLSpanElement>();
    const descriptionRef = createRef<HTMLSpanElement>();
    const screen = await render(
      <EvoField ref={fieldRef} data-testid="save-search-field">
        <input type="checkbox" id="save-search" />
        <EvoLabel htmlFor="save-search" position="end">
          Save this search
        </EvoLabel>
        <EvoFieldDescription
          ref={descriptionRef}
          position="inline"
          type="confirmation"
        >
          Search saved
        </EvoFieldDescription>
      </EvoField>,
    );

    const field = screen.getByTestId("save-search-field");
    const checkbox = screen.getByRole("checkbox", { name: "Save this search" });
    const label = screen.getByText("Save this search");
    const description = screen.getByText("Search saved");

    expect(field.element().tagName).toBe("SPAN");
    expect(description.element().tagName).toBe("SPAN");
    await expect.element(label).toHaveClass("field__label--end");
    await expect
      .element(description)
      .toHaveClass("field__description--confirmation");
    expect(fieldRef.current).toBe(field.element());
    expect(descriptionRef.current).toBe(description.element());
    await user.click(label);
    await expect.element(checkbox).toBeChecked();
  });

  it("renders above descriptions as spans", async () => {
    const screen = await render(
      <EvoFieldDescription position="above" type="attention">
        Check the item dimensions
      </EvoFieldDescription>,
    );
    const description = screen.getByText("Check the item dimensions");
    expect(description.element().tagName).toBe("SPAN");
    await expect
      .element(description)
      .toHaveClass("field__description--attention");
  });
});
