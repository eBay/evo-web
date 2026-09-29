import { createRef } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { userEvent } from "vitest/browser";
import { render } from "vitest-browser-react";
import { EvoIconSettings24 } from "../../icon/icons/settings-24";
import { EvoToggleButton } from "../toggle-button";
import { EvoToggleButtonContent } from "../toggle-button-content";
import { EvoToggleButtonIcon } from "../toggle-button-icon";
import { EvoToggleButtonImage } from "../toggle-button-image";
import { EvoToggleButtonSubtitle } from "../toggle-button-subtitle";
import { EvoToggleButtonTitle } from "../toggle-button-title";

describe("evo-toggle-button", () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });

  afterEach(() => {
    user.cleanup();
  });

  it("toggles an uncontrolled button by pointer and keyboard", async () => {
    const onPressedChange = vi.fn();
    const ref = createRef<HTMLButtonElement>();
    const screen = await render(
      <EvoToggleButton
        ref={ref}
        onPressedChange={onPressedChange}
        data-testid="sold-items"
      >
        <EvoToggleButtonContent>
          <EvoToggleButtonTitle>Show sold items</EvoToggleButtonTitle>
          <EvoToggleButtonSubtitle>
            Include completed listings
          </EvoToggleButtonSubtitle>
        </EvoToggleButtonContent>
      </EvoToggleButton>,
    );
    const button = screen.getByRole("button", { name: /Show sold items/ });

    await expect.element(button).toHaveAttribute("type", "button");
    await expect.element(button).toHaveAttribute("aria-pressed", "false");
    await expect.element(button).toHaveClass("toggle-button", { exact: true });
    expect(ref.current).toBe(button.element());

    await user.click(button);
    await expect.element(button).toHaveAttribute("aria-pressed", "true");
    expect(onPressedChange).toHaveBeenLastCalledWith(true);

    await user.keyboard(" ");
    await expect.element(button).toHaveAttribute("aria-pressed", "false");
    expect(onPressedChange).toHaveBeenLastCalledWith(false);
  });

  it("keeps a controlled pressed state until its owner updates it", async () => {
    const onPressedChange = vi.fn();
    const screen = await render(
      <EvoToggleButton pressed onPressedChange={onPressedChange}>
        <EvoToggleButtonContent>
          <EvoToggleButtonTitle>Save filter</EvoToggleButtonTitle>
        </EvoToggleButtonContent>
      </EvoToggleButton>,
    );
    const button = screen.getByRole("button", { name: "Save filter" });

    await user.click(button);
    await expect.element(button).toHaveAttribute("aria-pressed", "true");
    expect(onPressedChange).toHaveBeenCalledWith(false);
  });

  it("runs a native click handler before toggling and honors preventDefault", async () => {
    const onPressedChange = vi.fn();
    const onClick = vi.fn((event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    });
    const screen = await render(
      <EvoToggleButton onClick={onClick} onPressedChange={onPressedChange}>
        <EvoToggleButtonContent>
          <EvoToggleButtonTitle>Filtered results</EvoToggleButtonTitle>
        </EvoToggleButtonContent>
      </EvoToggleButton>,
    );
    const button = screen.getByRole("button", { name: "Filtered results" });

    await user.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onPressedChange).not.toHaveBeenCalled();
    await expect.element(button).toHaveAttribute("aria-pressed", "false");
  });

  it("does not toggle when disabled", async () => {
    const onPressedChange = vi.fn();
    const screen = await render(
      <EvoToggleButton disabled onPressedChange={onPressedChange}>
        <EvoToggleButtonContent>
          <EvoToggleButtonTitle>Save filter</EvoToggleButtonTitle>
        </EvoToggleButtonContent>
      </EvoToggleButton>,
    );
    const button = screen.getByRole("button", { name: "Save filter" });

    await expect.element(button).toBeDisabled();
    await user.tab();
    await expect.element(button).not.toHaveFocus();
    expect(onPressedChange).not.toHaveBeenCalled();
  });

  it("passes attributes through to each part", async () => {
    const screen = await render(
      <EvoToggleButton layoutType="list">
        <EvoToggleButtonIcon data-testid="icon" className="custom-icon">
          <EvoIconSettings24 />
        </EvoToggleButtonIcon>
        <EvoToggleButtonContent data-testid="content">
          <EvoToggleButtonTitle data-testid="title" className="custom-title">
            Preferences
          </EvoToggleButtonTitle>
          <EvoToggleButtonSubtitle data-testid="subtitle">
            Use my saved preferences
          </EvoToggleButtonSubtitle>
        </EvoToggleButtonContent>
      </EvoToggleButton>,
    );

    await expect
      .element(screen.getByTestId("icon"))
      .toHaveClass("toggle-button__icon", "custom-icon");
    expect(screen.getByTestId("icon").element().querySelector("svg")).not.toBe(
      null,
    );
    await expect
      .element(screen.getByTestId("content"))
      .toHaveClass("toggle-button__content");
    await expect
      .element(screen.getByTestId("title"))
      .toHaveClass("toggle-button__title", "custom-title");
    await expect
      .element(screen.getByTestId("subtitle"))
      .toHaveClass("toggle-button__subtitle");
    await expect
      .element(screen.getByRole("button", { name: /Preferences/ }))
      .toHaveClass("toggle-button--list-layout");
  });

  it("renders an inline image with attributes on the img", async () => {
    const screen = await render(
      <EvoToggleButton layoutType="gallery">
        <EvoToggleButtonImage
          src="/print.jpg"
          alt="Landscape print"
          loading="lazy"
        />
        <EvoToggleButtonContent>
          <EvoToggleButtonTitle>Landscape prints</EvoToggleButtonTitle>
        </EvoToggleButtonContent>
      </EvoToggleButton>,
    );
    const image = screen.getByRole("img", { name: "Landscape print" });

    await expect.element(image).toHaveAttribute("src", "/print.jpg");
    await expect.element(image).toHaveAttribute("loading", "lazy");
    expect(image.element().parentElement).toHaveClass("toggle-button__image");
  });

  it("renders a fill image as a named or decorative background", async () => {
    const screen = await render(
      <>
        <EvoToggleButton layoutType="gallery">
          <EvoToggleButtonImage
            src="/print.jpg"
            alt="Landscape print"
            fillPlacement="top"
            style={{ backgroundSize: "contain" }}
          />
          <EvoToggleButtonContent>
            <EvoToggleButtonTitle>Landscape prints</EvoToggleButtonTitle>
          </EvoToggleButtonContent>
        </EvoToggleButton>
        <EvoToggleButton layoutType="gallery">
          <EvoToggleButtonImage
            src="/portrait.jpg"
            alt=""
            fillPlacement="center"
            data-testid="decorative"
          />
          <EvoToggleButtonContent>
            <EvoToggleButtonTitle>Portrait prints</EvoToggleButtonTitle>
          </EvoToggleButtonContent>
        </EvoToggleButton>
      </>,
    );
    const namedImage = screen.getByRole("img", { name: "Landscape print" });

    await expect.element(namedImage).toHaveClass("toggle-button__image");
    await expect
      .element(namedImage)
      .toHaveStyle("background-position: top; background-size: contain");
    await expect
      .element(screen.getByTestId("decorative"))
      .toHaveAttribute("aria-hidden", "true");
    await expect
      .element(screen.getByTestId("decorative"))
      .not.toHaveAttribute("role");
  });
});
