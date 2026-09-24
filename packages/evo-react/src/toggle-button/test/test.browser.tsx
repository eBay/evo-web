import { createRef } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { userEvent } from "vitest/browser";
import { render } from "vitest-browser-react";
import { EvoIconSettings24 } from "../../icon/icons/settings-24";
import { EvoToggleButton } from "../toggle-button";

describe("evo-toggle-button", () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });

  afterEach(() => {
    user.cleanup();
  });

  it("toggles an uncontrolled button by pointer and keyboard", async () => {
    const onToggle = vi.fn();
    const ref = createRef<HTMLButtonElement>();
    const screen = await render(
      <EvoToggleButton
        ref={ref}
        title="Show sold items"
        subtitle="Include completed listings"
        onToggle={onToggle}
        data-testid="sold-items"
      />,
    );
    const button = screen.getByRole("button", { name: /Show sold items/ });

    await expect.element(button).toHaveAttribute("type", "button");
    await expect.element(button).toHaveAttribute("aria-pressed", "false");
    await expect
      .element(button)
      .toHaveClass("toggle-button", "toggle-button--minimal-layout");
    expect(ref.current).toBe(button.element());
    expect(
      button.element().querySelector(".toggle-button__title")?.tagName,
    ).toBe("P");

    await user.click(button);
    await expect.element(button).toHaveAttribute("aria-pressed", "true");
    expect(onToggle).toHaveBeenLastCalledWith(expect.anything(), {
      pressed: true,
    });

    await user.keyboard(" ");
    await expect.element(button).toHaveAttribute("aria-pressed", "false");
    expect(onToggle).toHaveBeenLastCalledWith(expect.anything(), {
      pressed: false,
    });
  });

  it("keeps a controlled pressed state until its owner updates it", async () => {
    const onToggle = vi.fn();
    const screen = await render(
      <EvoToggleButton title="Save filter" pressed onToggle={onToggle} />,
    );
    const button = screen.getByRole("button", { name: "Save filter" });

    await user.click(button);
    await expect.element(button).toHaveAttribute("aria-pressed", "true");
    expect(onToggle).toHaveBeenCalledWith(expect.anything(), {
      pressed: false,
    });
  });

  it("runs a native click handler before toggling and honors preventDefault", async () => {
    const onToggle = vi.fn();
    const onClick = vi.fn((event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    });
    const screen = await render(
      <EvoToggleButton
        title="Filtered results"
        onClick={onClick}
        onToggle={onToggle}
      />,
    );

    await user.click(screen.getByRole("button", { name: "Filtered results" }));
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onToggle).not.toHaveBeenCalled();
    await expect
      .element(screen.getByRole("button", { name: "Filtered results" }))
      .toHaveAttribute("aria-pressed", "false");
  });

  it("does not toggle when disabled", async () => {
    const onToggle = vi.fn();
    const screen = await render(
      <EvoToggleButton title="Save filter" disabled onToggle={onToggle} />,
    );
    const button = screen.getByRole("button", { name: "Save filter" });

    await expect.element(button).toBeDisabled();
    await user.tab();
    await expect.element(button).not.toHaveFocus();
    expect(onToggle).not.toHaveBeenCalled();
  });

  it("preserves icon and image media structure", async () => {
    const screen = await render(
      <>
        <EvoToggleButton
          title="Preferences"
          layoutType="list"
          icon={<EvoIconSettings24 />}
        />
        <EvoToggleButton
          title="Landscape prints"
          layoutType="gallery"
          img={{ src: "/print.jpg", alt: "", fillPlacement: "top" }}
        />
      </>,
    );

    const iconButton = screen.getByRole("button", { name: "Preferences" });
    const imageButton = screen.getByRole("button", {
      name: "Landscape prints",
    });
    expect(
      iconButton.element().querySelector(".toggle-button__icon svg"),
    ).not.toBeNull();
    expect(
      imageButton.element().querySelector(".toggle-button__image-container"),
    ).not.toBeNull();
    await expect
      .element(imageButton)
      .toHaveClass("toggle-button--gallery-layout");
  });
});
