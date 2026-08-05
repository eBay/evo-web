import { createRef } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { userEvent } from "vitest/browser";
import { render } from "vitest-browser-react";
import { EvoChip } from "../chip";
import { EvoChipDeleteButton } from "../chip-delete-button";
import { EvoChipText } from "../chip-text";

describe("evo-chip", () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });

  afterEach(() => {
    user.cleanup();
  });

  it("renders chip text without a delete button", async () => {
    const screen = await render(
      <EvoChip>
        <EvoChipText>Football</EvoChipText>
      </EvoChip>,
    );

    await expect.element(screen.getByText("Football")).toBeInTheDocument();
    await expect.element(screen.getByRole("button")).not.toBeInTheDocument();
  });

  it("links the delete button description to the chip text", async () => {
    const screen = await render(
      <EvoChip>
        <EvoChipText>Football</EvoChipText>
        <EvoChipDeleteButton a11yText="Delete Football" />
      </EvoChip>,
    );

    const text = screen.getByText("Football").element();
    const button = screen.getByRole("button", { name: "Delete Football" });

    expect(text.id).toBeTruthy();
    await expect.element(button).toHaveAttribute("aria-describedby", text.id);
  });

  it("uses the English delete label by default", async () => {
    const screen = await render(
      <EvoChip>
        <EvoChipText>Football</EvoChipText>
        <EvoChipDeleteButton />
      </EvoChip>,
    );

    await expect
      .element(screen.getByRole("button", { name: "delete" }))
      .toBeInTheDocument();
  });

  it("calls the delete button click handler", async () => {
    const onClick = vi.fn();
    const screen = await render(
      <EvoChip>
        <EvoChipText>Football</EvoChipText>
        <EvoChipDeleteButton onClick={onClick} />
      </EvoChip>,
    );

    await user.click(screen.getByRole("button", { name: "delete" }));

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("does not call the click handler when disabled", async () => {
    const onClick = vi.fn();
    const screen = await render(
      <EvoChip>
        <EvoChipText>Football</EvoChipText>
        <EvoChipDeleteButton disabled onClick={onClick} />
      </EvoChip>,
    );

    const button = screen.getByRole("button", { name: "delete" });
    await expect.element(button).toBeDisabled();
    await button.click({ force: true });

    expect(onClick).not.toHaveBeenCalled();
  });

  it("merges classes and passes native attributes to each element", async () => {
    const screen = await render(
      <EvoChip className="custom-chip" data-testid="chip">
        <EvoChipText className="custom-text">Football</EvoChipText>
        <EvoChipDeleteButton
          className="custom-button"
          data-testid="delete-button"
        />
      </EvoChip>,
    );

    const chip = screen.getByTestId("chip");
    const text = screen.getByText("Football");
    const button = screen.getByTestId("delete-button");

    await expect.element(chip).toHaveClass("chip", "custom-chip");
    await expect.element(text).toHaveClass("chip__text", "custom-text");
    await expect.element(button).toHaveClass("chip__button", "custom-button");
    await expect.element(button).toHaveAttribute("type", "button");
  });

  it("forwards native refs", async () => {
    const chipRef = createRef<HTMLSpanElement>();
    const textRef = createRef<HTMLSpanElement>();
    const buttonRef = createRef<HTMLButtonElement>();

    await render(
      <EvoChip ref={chipRef}>
        <EvoChipText ref={textRef}>Football</EvoChipText>
        <EvoChipDeleteButton ref={buttonRef} />
      </EvoChip>,
    );

    expect(chipRef.current).toBeInstanceOf(HTMLSpanElement);
    expect(textRef.current).toBeInstanceOf(HTMLSpanElement);
    expect(buttonRef.current).toBeInstanceOf(HTMLButtonElement);
  });
});
