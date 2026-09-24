import { createRef } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { userEvent } from "vitest/browser";
import { render } from "vitest-browser-react";
import { EvoIconClose16 } from "../../icon/icons/close-16";
import { EvoIconDelete16 } from "../../icon/icons/delete-16";
import {
  EvoFilePreviewCard,
  EvoFilePreviewCardAction,
  EvoFilePreviewCardMenu,
  EvoFilePreviewCardSeeMoreAction,
  EvoMenuButtonItem,
} from "../index";

describe("EvoFilePreviewCard", () => {
  let user: ReturnType<typeof userEvent.setup>;
  beforeEach(() => {
    user = userEvent.setup();
  });
  afterEach(() => {
    user.cleanup();
    vi.restoreAllMocks();
  });

  it("renders image, link, footer, and accessible delete action in legacy order", async () => {
    const onDelete = vi.fn();
    const ref = createRef<HTMLDivElement>();
    const screen = await render(
      <EvoFilePreviewCard
        ref={ref}
        data-testid="card"
        file={{ name: "photo.jpg", type: "image/jpeg", src: "/photo.jpg" }}
        href="/photo"
        a11yExternalLinkText="opens in a new tab"
        footerTitle="photo.jpg"
        footerSubtitle="JPEG image"
        deleteAction={
          <EvoFilePreviewCardAction a11yText="Delete photo" onClick={onDelete}>
            <EvoIconDelete16 />
          </EvoFilePreviewCardAction>
        }
      />,
    );
    expect(ref.current).toBe(screen.getByTestId("card").element());
    const body = screen.container.querySelector(
      ".file-preview-card__body",
    ) as HTMLElement;
    expect(body.children[0].tagName).toBe("A");
    expect(
      body.children[1].classList.contains("file-preview-card__action"),
    ).toBe(true);
    await expect
      .element(screen.getByRole("img", { name: "photo.jpg" }))
      .toHaveAttribute("src", "/photo.jpg");
    await expect
      .element(screen.getByRole("link", { name: /opens in a new tab/ }))
      .toHaveAttribute("target", "_blank");
    await expect.element(screen.getByText("JPEG image")).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Delete photo" }));
    expect(onDelete).toHaveBeenCalledOnce();
  });

  it("shows upload progress and the cancel action instead of ordinary actions", async () => {
    const onCancel = vi.fn();
    const screen = await render(
      <EvoFilePreviewCard
        status="uploading"
        a11yUploadingText="Uploading photo"
        cancelAction={
          <EvoFilePreviewCardAction a11yText="Cancel upload" onClick={onCancel}>
            <EvoIconClose16 />
          </EvoFilePreviewCardAction>
        }
        deleteAction={
          <EvoFilePreviewCardAction a11yText="Delete">
            <EvoIconDelete16 />
          </EvoFilePreviewCardAction>
        }
      />,
    );
    await expect
      .element(screen.getByRole("img", { name: "Uploading photo" }))
      .toBeInTheDocument();
    await expect
      .element(screen.getByRole("button", { name: "Cancel upload" }))
      .toBeInTheDocument();
    expect(screen.container.querySelector('[aria-label="Delete"]')).toBeNull();
    await user.click(screen.getByRole("button", { name: "Cancel upload" }));
    expect(onCancel).toHaveBeenCalledOnce();
  });

  it("fades the image and prioritizes the see-more overlay", async () => {
    const onSeeMore = vi.fn();
    const screen = await render(
      <EvoFilePreviewCard
        file={{ name: "photo.jpg", type: "image/jpeg", src: "/photo.jpg" }}
        seeMore={12}
        a11ySeeMoreText="See 12 more photos"
        onSeeMore={onSeeMore}
        deleteAction={
          <EvoFilePreviewCardAction a11yText="Delete">
            <EvoIconDelete16 />
          </EvoFilePreviewCardAction>
        }
      />,
    );
    await expect
      .element(screen.getByRole("img", { name: "photo.jpg" }))
      .toHaveClass("file-preview-card__asset--fade");
    await expect
      .element(screen.getByRole("button", { name: "See 12 more photos" }))
      .toHaveTextContent("+12");
    expect(screen.container.querySelector('[aria-label="Delete"]')).toBeNull();
    await user.click(
      screen.getByRole("button", { name: "See 12 more photos" }),
    );
    expect(onSeeMore).toHaveBeenCalledOnce();
  });

  it("accepts a named see-more action slot", async () => {
    const screen = await render(
      <EvoFilePreviewCard
        file={{ name: "photo.jpg", type: "image/jpeg", src: "/photo.jpg" }}
        seeMoreAction={
          <EvoFilePreviewCardSeeMoreAction count={5} a11yText="See more" />
        }
      />,
    );
    await expect
      .element(screen.getByRole("button", { name: "See more" }))
      .toHaveTextContent("+5");
  });

  it("uses EvoMenuButton's keyboard selection for menu actions", async () => {
    const onEdit = vi.fn();
    const screen = await render(
      <EvoFilePreviewCard
        file={{ name: "report.csv", type: "text/csv" }}
        menu={
          <EvoFilePreviewCardMenu a11yText="File actions">
            <EvoMenuButtonItem onSelect={onEdit}>Edit</EvoMenuButtonItem>
          </EvoFilePreviewCardMenu>
        }
      />,
    );
    await expect.element(screen.getByText("CSV")).toBeInTheDocument();
    const trigger = screen.getByRole("button", { name: "File actions" });
    await user.click(trigger);
    await expect
      .element(screen.getByRole("menuitem", { name: "Edit" }))
      .toHaveFocus();
    await user.keyboard("{Enter}");
    expect(onEdit).toHaveBeenCalledOnce();
    await expect.element(trigger).toHaveAttribute("aria-expanded", "false");
  });

  it("creates and revokes an object URL for a browser image File", async () => {
    const createObjectURL = vi
      .spyOn(URL, "createObjectURL")
      .mockReturnValue("blob:preview-test");
    const revokeObjectURL = vi
      .spyOn(URL, "revokeObjectURL")
      .mockImplementation(() => {});
    const file = new File(["pixels"], "photo.jpg", { type: "image/jpeg" });
    const screen = await render(<EvoFilePreviewCard file={file} />);
    await expect
      .element(screen.getByRole("img", { name: "photo.jpg" }))
      .toHaveAttribute("src", "blob:preview-test");
    expect(createObjectURL).toHaveBeenCalledWith(file);
    await screen.unmount();
    expect(revokeObjectURL).toHaveBeenCalledWith("blob:preview-test");
  });
});
