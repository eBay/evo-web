import { createRef } from "react";
import { describe, expect, it } from "vitest";
import { render } from "vitest-browser-react";
import { EvoSkeleton } from "../skeleton";
import { EvoSkeletonAvatar } from "../skeleton-avatar";
import { EvoSkeletonButton } from "../skeleton-button";
import { EvoSkeletonImage } from "../skeleton-image";
import { EvoSkeletonText } from "../skeleton-text";
import { EvoSkeletonTextbox } from "../skeleton-textbox";

describe("evo-skeleton", () => {
  it("groups its shapes under one accessible loading label", async () => {
    const screen = await render(
      <EvoSkeleton a11yText="Loading listing details" color="blue">
        <EvoSkeletonImage />
        <EvoSkeletonText size="large" multiline />
        <EvoSkeletonButton size="small" />
      </EvoSkeleton>,
    );
    const graphic = screen.getByRole("img", {
      name: "Loading listing details",
    });

    await expect.element(graphic).toHaveClass("skeleton", "skeleton--blue");
    // Shapes belong to the labeled image group, so inspect their fixed Skin structure.
    const root = graphic.element();
    expect(root.querySelector(".skeleton__image")).not.toBeNull();
    expect(
      root.querySelector(".skeleton__text--large.skeleton__text--multiline"),
    ).not.toBeNull();
    expect(root.querySelector(".skeleton__button--small")).not.toBeNull();
  });

  it("uses the English loading label by default", async () => {
    const screen = await render(
      <EvoSkeleton>
        <EvoSkeletonTextbox />
      </EvoSkeleton>,
    );

    await expect
      .element(screen.getByRole("img", { name: "Loading..." }))
      .toHaveClass("skeleton");
  });

  it("accepts an alternative accessible name and native root props", async () => {
    const ref = createRef<HTMLDivElement>();
    const screen = await render(
      <>
        <span id="loading-label">Loading seller profile</span>
        <EvoSkeleton
          a11yText={null}
          aria-labelledby="loading-label"
          className="profile-placeholder"
          data-testid="profile-placeholder"
          ref={ref}
        >
          <EvoSkeletonAvatar />
        </EvoSkeleton>
      </>,
    );
    const graphic = screen.getByRole("img", { name: "Loading seller profile" });

    await expect.element(graphic).not.toHaveAttribute("aria-label");
    await expect.element(graphic).toHaveClass("profile-placeholder");
    await expect
      .element(graphic)
      .toHaveAttribute("data-testid", "profile-placeholder");
    expect(ref.current).toBe(graphic.element());
  });

  it("renders each part as a span and passes its ref and native props through", async () => {
    const avatarRef = createRef<HTMLSpanElement>();
    const buttonRef = createRef<HTMLSpanElement>();
    const imageRef = createRef<HTMLSpanElement>();
    const textRef = createRef<HTMLSpanElement>();
    const textboxRef = createRef<HTMLSpanElement>();
    const screen = await render(
      <EvoSkeleton a11yText="Loading seller profile">
        <EvoSkeletonAvatar as="span" ref={avatarRef} data-testid="avatar" />
        <EvoSkeletonButton
          as="span"
          ref={buttonRef}
          data-testid="button"
          size="large"
        />
        <EvoSkeletonImage as="span" ref={imageRef} data-testid="image" />
        <EvoSkeletonText as="span" ref={textRef} data-testid="text" multiline />
        <EvoSkeletonTextbox as="span" ref={textboxRef} data-testid="textbox" />
      </EvoSkeleton>,
    );
    const root = screen
      .getByRole("img", { name: "Loading seller profile" })
      .element();

    for (const [name, ref] of [
      ["avatar", avatarRef],
      ["button", buttonRef],
      ["image", imageRef],
      ["text", textRef],
      ["textbox", textboxRef],
    ] as const) {
      const part = root.querySelector(`[data-testid="${name}"]`);
      expect(part?.tagName).toBe("SPAN");
      expect(ref.current).toBe(part);
    }
  });
});
