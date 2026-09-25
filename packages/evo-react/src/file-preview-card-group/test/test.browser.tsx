import { createRef } from "react";
import { describe, expect, it, vi } from "vitest";
import { userEvent } from "vitest/browser";
import { render } from "vitest-browser-react";
import { EvoPreviewCardSeeMore } from "../../file-preview-card";
import { EvoFilePreviewCardGroup, EvoFilePreviewCardGroupItem } from "../index";

const file = { name: "photo.jpg", type: "image/jpeg", src: "/photo.jpg" };

describe("EvoFilePreviewCardGroup", () => {
  it("renders a native list with caller-selected items and attributes", async () => {
    const ref = createRef<HTMLUListElement>();
    const screen = await render(
      <EvoFilePreviewCardGroup ref={ref} data-testid="gallery">
        <EvoFilePreviewCardGroupItem file={file} footerTitle="Photo" />
      </EvoFilePreviewCardGroup>,
    );
    expect(ref.current).toBe(screen.getByTestId("gallery").element());
    await expect.element(screen.getByRole("list")).toBeInTheDocument();
    expect(
      screen.container.querySelector("ul.file-preview-card-group"),
    ).not.toBeNull();
    expect(
      screen.container.querySelectorAll("li.file-preview-card"),
    ).toHaveLength(1);
    await expect
      .element(screen.getByRole("img", { name: "photo.jpg" }))
      .toBeInTheDocument();
    await expect.element(screen.getByText("Photo")).toBeInTheDocument();
  });

  it("renders only the items passed by the application", async () => {
    const screen = await render(
      <EvoFilePreviewCardGroup>
        {[0, 1].map((index) => (
          <EvoFilePreviewCardGroupItem
            key={index}
            file={{ name: `photo-${index}.jpg` }}
          />
        ))}
      </EvoFilePreviewCardGroup>,
    );
    expect(
      screen.container.querySelectorAll("li.file-preview-card"),
    ).toHaveLength(2);
    expect(
      screen.container.querySelector(".file-preview-card__see-more"),
    ).toBeNull();
  });

  it("lets the application place a see-more action on an item", async () => {
    const onClick = vi.fn();
    const screen = await render(
      <EvoFilePreviewCardGroup>
        <EvoFilePreviewCardGroupItem file={file}>
          <EvoPreviewCardSeeMore
            count={5}
            a11yText="See more photos"
            onClick={onClick}
          />
        </EvoFilePreviewCardGroupItem>
      </EvoFilePreviewCardGroup>,
    );
    const more = screen.getByRole("button", { name: "See more photos" });
    await expect.element(more).toHaveTextContent("+5");
    await userEvent.click(more);
    expect(onClick).toHaveBeenCalledOnce();
  });
});
