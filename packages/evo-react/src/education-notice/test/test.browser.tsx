import { createRef, useRef, useState } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { userEvent } from "vitest/browser";
import { render } from "vitest-browser-react";
import { EvoIconLightningBolt24 } from "../../icon/icons/lightning-bolt-24";
import {
  EvoEducationNotice,
  EvoEducationNoticeFooter,
  EvoEducationNoticeHeader,
  EvoEducationNoticeIcon,
  EvoEducationNoticeMain,
  EvoEducationNoticeTitle,
} from "../index";

describe("evo-education-notice", () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });

  afterEach(() => {
    user.cleanup();
  });

  it("keeps the header, main, and footer structure", async () => {
    const ref = createRef<HTMLElement>();
    const headerRef = createRef<HTMLDivElement>();
    const onFooterAction = vi.fn();
    const screen = await render(
      <EvoEducationNotice
        ref={ref}
        a11yText="Listing guidance"
        className="custom-notice"
      >
        <EvoEducationNoticeHeader ref={headerRef} id="listing-notice-header">
          <EvoEducationNoticeIcon />
          <EvoEducationNoticeTitle>Write a clear title</EvoEducationNoticeTitle>
        </EvoEducationNoticeHeader>
        <EvoEducationNoticeMain>
          Include the item condition.
        </EvoEducationNoticeMain>
        <EvoEducationNoticeFooter>
          <button type="button" className="fake-link" onClick={onFooterAction}>
            Read listing tips
          </button>
        </EvoEducationNoticeFooter>
      </EvoEducationNotice>,
    );
    const region = screen.getByRole("region");
    const heading = screen.getByRole("heading", {
      name: "Write a clear title",
    });
    const footerAction = screen.getByRole("button", {
      name: "Read listing tips",
    });
    expect(ref.current).toBe(region.element());
    expect(region.element().tagName).toBe("SECTION");
    await expect
      .element(region)
      .toHaveClass("education-notice", "custom-notice");
    await expect
      .element(region)
      .toHaveAttribute("aria-roledescription", "Notice");
    await expect
      .element(screen.getByRole("img", { name: "Listing guidance" }))
      .toBeInTheDocument();
    expect(headerRef.current).toBe(heading.element().parentElement);
    expect(headerRef.current).toHaveAttribute("id", "listing-notice-header");
    expect(headerRef.current).toHaveClass("education-notice__header");
    expect(
      screen.getByText("Include the item condition.").element(),
    ).toHaveClass("education-notice__main");
    expect(footerAction.element().parentElement).toHaveClass(
      "education-notice__footer",
    );
    await user.click(footerAction);
    expect(onFooterAction).toHaveBeenCalledTimes(1);
    await expect.element(region).toBeInTheDocument();
  });

  it("uses a11yText for the region and default icon labels", async () => {
    const screen = await render(
      <EvoEducationNotice
        a11yText="Listing guidance"
        a11yDismissText="Dismiss guidance"
      >
        <EvoEducationNoticeHeader>
          <EvoEducationNoticeIcon />
          <EvoEducationNoticeTitle>Write a clear title</EvoEducationNoticeTitle>
        </EvoEducationNoticeHeader>
      </EvoEducationNotice>,
    );
    await expect
      .element(screen.getByRole("region"))
      .toHaveAccessibleName("Listing guidance");
    await expect
      .element(screen.getByRole("img", { name: "Listing guidance" }))
      .toBeInTheDocument();
  });

  it("names a notice that has no header", async () => {
    const screen = await render(
      <EvoEducationNotice a11yText="Listing guidance">
        <EvoEducationNoticeMain>
          Include the item condition.
        </EvoEducationNoticeMain>
      </EvoEducationNotice>,
    );
    await expect
      .element(screen.getByRole("region"))
      .toHaveAccessibleName("Listing guidance");
  });

  it("applies prominent styling and supports a custom labeled icon", async () => {
    const screen = await render(
      <EvoEducationNotice a11yText="Listing guidance" variant="prominent">
        <EvoEducationNoticeHeader>
          <EvoEducationNoticeIcon
            icon={
              <EvoIconLightningBolt24
                a11yText="Listing insight"
                a11yVariant="label"
                prominent
              />
            }
          />
          <EvoEducationNoticeTitle>
            Improve your listing
          </EvoEducationNoticeTitle>
        </EvoEducationNoticeHeader>
        <EvoEducationNoticeMain>Add more photos.</EvoEducationNoticeMain>
      </EvoEducationNotice>,
    );
    const region = screen.getByRole("region");
    await expect.element(region).toHaveAccessibleName("Listing guidance");
    await expect.element(region).toHaveClass("education-notice--prominent");
    await expect
      .element(screen.getByRole("img", { name: "Listing insight" }))
      .toHaveClass("icon--prominent");
  });

  it("labels and emphasizes the default lightbulb when its component is included", async () => {
    const screen = await render(
      <EvoEducationNotice a11yText="Listing guidance">
        <EvoEducationNoticeHeader>
          <EvoEducationNoticeIcon a11yText="Tip" prominent />
          <EvoEducationNoticeTitle as="h3">
            Write a clear title
          </EvoEducationNoticeTitle>
        </EvoEducationNoticeHeader>
      </EvoEducationNotice>,
    );
    const icon = screen.getByRole("img", { name: "Tip" });
    await expect.element(icon).toHaveClass("icon--24", "icon--prominent");
    expect(icon.element().querySelector("use")).toHaveAttribute(
      "xlink:href",
      "#icon-lightbulb-24",
    );
    expect(
      screen.getByRole("heading", { level: 3 }).element(),
    ).toHaveTextContent("Write a clear title");
  });

  it("renders no icon when EvoEducationNoticeIcon is omitted", async () => {
    const screen = await render(
      <EvoEducationNotice
        a11yText="Seller notice"
        a11yDismissText="Dismiss update"
      >
        <EvoEducationNoticeHeader>
          <EvoEducationNoticeTitle>Seller update</EvoEducationNoticeTitle>
        </EvoEducationNoticeHeader>
      </EvoEducationNotice>,
    );
    const region = screen.getByRole("region", { name: "Seller notice" });
    expect(region.getByRole("img").query()).toBeNull();
    await expect
      .element(region.getByRole("heading", { name: "Seller update" }))
      .toBeInTheDocument();
    await expect
      .element(region.getByRole("button", { name: "Dismiss update" }))
      .toBeInTheDocument();
  });

  it("dismisses by keyboard and calls onDismiss", async () => {
    const onDismiss = vi.fn();
    const screen = await render(
      <EvoEducationNotice
        a11yText="Listing guidance"
        a11yDismissText="Dismiss guidance"
        onDismiss={onDismiss}
      >
        <EvoEducationNoticeHeader>
          <EvoEducationNoticeIcon />
          <EvoEducationNoticeTitle>Listing guidance</EvoEducationNoticeTitle>
        </EvoEducationNoticeHeader>
      </EvoEducationNotice>,
    );
    await user.tab();
    await user.keyboard("{Enter}");
    expect(onDismiss).toHaveBeenCalledTimes(1);
    expect(screen.getByRole("region").query()).toBeNull();
  });

  it("keeps a controlled notice until its dismissed prop changes", async () => {
    const onDismiss = vi.fn();
    const screen = await render(
      <EvoEducationNotice
        a11yText="Listing guidance"
        a11yDismissText="Dismiss guidance"
        dismissed={false}
        onDismiss={onDismiss}
      >
        <EvoEducationNoticeHeader>
          <EvoEducationNoticeTitle>Write a clear title</EvoEducationNoticeTitle>
        </EvoEducationNoticeHeader>
      </EvoEducationNotice>,
    );
    await user.click(screen.getByRole("button", { name: "Dismiss guidance" }));
    expect(onDismiss).toHaveBeenCalledTimes(1);
    expect(screen.getByRole("region").element()).toHaveAccessibleName(
      "Listing guidance",
    );
  });

  it("calls onDismiss before unmounting so focus can move to a surviving element", async () => {
    let dismissButtonConnected: boolean | undefined;
    function ControlledNotice() {
      const [dismissed, setDismissed] = useState(false);
      const restoreRef = useRef<HTMLButtonElement>(null);
      return (
        <>
          <EvoEducationNotice
            a11yText="Listing guidance"
            dismissed={dismissed}
            a11yDismissText="Dismiss guidance"
            onDismiss={(event) => {
              dismissButtonConnected = event.currentTarget.isConnected;
              restoreRef.current?.focus();
              setDismissed(true);
            }}
          >
            <EvoEducationNoticeHeader>
              <EvoEducationNoticeTitle>
                Listing guidance
              </EvoEducationNoticeTitle>
            </EvoEducationNoticeHeader>
          </EvoEducationNotice>
          <button
            ref={restoreRef}
            type="button"
            onClick={() => setDismissed(false)}
          >
            Show listing guidance
          </button>
        </>
      );
    }
    const screen = await render(<ControlledNotice />);
    const restore = screen.getByRole("button", {
      name: "Show listing guidance",
    });
    await user.click(screen.getByRole("button", { name: "Dismiss guidance" }));
    expect(dismissButtonConnected).toBe(true);
    expect(screen.getByRole("region").query()).toBeNull();
    expect(document.activeElement).toBe(restore.element());

    await user.click(restore);
    await expect
      .element(screen.getByRole("region"))
      .toHaveAccessibleName("Listing guidance");
  });
});
