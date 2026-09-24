import { createRef } from "react";
import { beforeEach, afterEach, describe, expect, it, vi } from "vitest";
import { userEvent } from "vitest/browser";
import { render } from "vitest-browser-react";
import {
  EvoFilePreviewCardGroup,
  EvoFilePreviewCardGroupSeeMoreAction,
} from "../index";

const cards = Array.from({ length: 20 }, (_, index) => ({
  file: {
    name: `photo-${index + 1}.jpg`,
    type: "image/jpeg",
    src: `/photo-${index + 1}.jpg`,
  },
}));

describe("EvoFilePreviewCardGroup", () => {
  let user: ReturnType<typeof userEvent.setup>;
  beforeEach(() => {
    user = userEvent.setup();
  });
  afterEach(() => {
    user.cleanup();
  });

  it("renders cards as list items and reveals 15 more at a time", async () => {
    const screen = await render(
      <EvoFilePreviewCardGroup
        cards={cards}
        a11ySeeMoreText="See more photos"
      />,
    );
    await expect.element(screen.getByRole("list")).toBeInTheDocument();
    expect(
      screen.container.querySelectorAll("li.file-preview-card"),
    ).toHaveLength(16);
    await expect
      .element(screen.getByRole("button", { name: "See more photos" }))
      .toHaveTextContent("+5");
    await expect
      .element(screen.getByRole("img", { name: "photo-16.jpg" }))
      .toHaveClass("file-preview-card__asset--fade");
    await user.click(screen.getByRole("button", { name: "See more photos" }));
    expect(
      screen.container.querySelectorAll("li.file-preview-card"),
    ).toHaveLength(20);
    expect(
      screen.container.querySelector(".file-preview-card__see-more"),
    ).toBeNull();
    await expect
      .element(screen.getByRole("img", { name: "photo-20.jpg" }))
      .toBeInTheDocument();
  });

  it("reports a controlled visible count without changing it internally", async () => {
    const onVisibleCardCountChange = vi.fn();
    const screen = await render(
      <EvoFilePreviewCardGroup
        cards={cards}
        visibleCardCount={5}
        onVisibleCardCountChange={onVisibleCardCountChange}
      />,
    );
    expect(
      screen.container.querySelectorAll("li.file-preview-card"),
    ).toHaveLength(6);
    await expect
      .element(screen.getByRole("button", { name: "See more files" }))
      .toHaveTextContent("+15");
    await user.click(screen.getByRole("button", { name: "See more files" }));
    expect(onVisibleCardCountChange).toHaveBeenCalledWith(20);
    expect(
      screen.container.querySelectorAll("li.file-preview-card"),
    ).toHaveLength(6);
  });

  it("uses the named see-more action and preserves root attributes and ref", async () => {
    const ref = createRef<HTMLDivElement>();
    const onClick = vi.fn();
    const screen = await render(
      <EvoFilePreviewCardGroup
        cards={cards}
        ref={ref}
        data-testid="gallery"
        defaultVisibleCardCount={18}
        seeMoreAction={
          <EvoFilePreviewCardGroupSeeMoreAction
            a11yText="Show remaining"
            onClick={onClick}
          />
        }
      />,
    );
    expect(ref.current).toBe(screen.getByTestId("gallery").element());
    await expect
      .element(screen.getByRole("button", { name: "Show remaining" }))
      .toHaveTextContent("+2");
    await user.click(screen.getByRole("button", { name: "Show remaining" }));
    expect(onClick).toHaveBeenCalledOnce();
    expect(
      screen.container.querySelectorAll("li.file-preview-card"),
    ).toHaveLength(20);
  });

  it("omits the overlay when all cards fit", async () => {
    const screen = await render(
      <EvoFilePreviewCardGroup cards={cards.slice(0, 3)} />,
    );
    expect(
      screen.container.querySelectorAll("li.file-preview-card"),
    ).toHaveLength(3);
    expect(
      screen.container.querySelector(".file-preview-card__see-more"),
    ).toBeNull();
  });
});
