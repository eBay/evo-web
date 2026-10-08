import { createRef, useState } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { userEvent } from "vitest/browser";
import { render } from "vitest-browser-react";
import { EvoIconLightningBolt24 } from "../../icon/icons/lightning-bolt-24";
import {
  EvoEducationNotice,
  EvoEducationNoticeCTA,
  EvoEducationNoticeFooter,
  EvoEducationNoticeHeader,
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
    const screen = await render(
      <EvoEducationNotice ref={ref} className="custom-notice">
        <EvoEducationNoticeHeader>
          <EvoEducationNoticeTitle>Write a clear title</EvoEducationNoticeTitle>
        </EvoEducationNoticeHeader>
        <EvoEducationNoticeMain>
          Include the item condition.
        </EvoEducationNoticeMain>
        <EvoEducationNoticeFooter>More advice</EvoEducationNoticeFooter>
      </EvoEducationNotice>,
    );
    const region = screen.getByRole("region");
    const heading = screen.getByRole("heading", {
      name: "Write a clear title",
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
      .element(screen.getByRole("img", { name: "Education notice" }))
      .toBeInTheDocument();
    expect(heading.element().parentElement).toHaveClass(
      "education-notice__header",
    );
    expect(
      screen.getByText("Include the item condition.").element(),
    ).toHaveClass("education-notice__main");
    expect(screen.getByText("More advice").element()).toHaveClass(
      "education-notice__footer",
    );
  });

  it("applies prominent styles and supports a custom labeled icon", async () => {
    const screen = await render(
      <EvoEducationNotice
        variant="prominent"
        educationIcon={
          <EvoIconLightningBolt24
            a11yText="Listing insight"
            a11yVariant="label"
            prominent
          />
        }
      >
        <EvoEducationNoticeHeader>
          <EvoEducationNoticeTitle>
            Improve your listing
          </EvoEducationNoticeTitle>
        </EvoEducationNoticeHeader>
        <EvoEducationNoticeMain>Add more photos.</EvoEducationNoticeMain>
      </EvoEducationNotice>,
    );
    const region = screen.getByRole("region", { name: "Education notice" });
    await expect.element(region).toHaveClass("education-notice--prominent");
    await expect
      .element(screen.getByRole("img", { name: "Listing insight" }))
      .toHaveClass("icon--prominent");
  });

  it("renders a selected status icon or no icon", async () => {
    const statusScreen = await render(
      <EvoEducationNotice status="information" iconVariant="prominent">
        <EvoEducationNoticeHeader>
          <EvoEducationNoticeTitle>
            Shipping information
          </EvoEducationNoticeTitle>
        </EvoEducationNoticeHeader>
      </EvoEducationNotice>,
    );
    await expect
      .element(statusScreen.getByRole("img", { name: "Education notice" }))
      .toHaveClass("icon--prominent");

    const iconlessScreen = await render(
      <EvoEducationNotice icon="none" a11yText="Seller update">
        <EvoEducationNoticeHeader>
          <EvoEducationNoticeTitle>Seller update</EvoEducationNoticeTitle>
        </EvoEducationNoticeHeader>
      </EvoEducationNotice>,
    );
    const iconless = iconlessScreen.getByRole("region", {
      name: "Seller update",
    });
    expect(iconless.element().querySelector("svg")).toBeNull();
  });

  it("dismisses by keyboard and calls onDismiss", async () => {
    const onDismiss = vi.fn();
    const screen = await render(
      <EvoEducationNotice
        a11yDismissText="Dismiss guidance"
        onDismiss={onDismiss}
      >
        <EvoEducationNoticeHeader>
          <EvoEducationNoticeTitle>Listing guidance</EvoEducationNoticeTitle>
        </EvoEducationNoticeHeader>
      </EvoEducationNotice>,
    );
    await user.tab();
    await user.keyboard("{Enter}");
    expect(onDismiss).toHaveBeenCalledTimes(1);
    expect(screen.getByRole("region").query()).toBeNull();
  });

  it("lets consumers control dismissal", async () => {
    function ControlledNotice() {
      const [dismissed, setDismissed] = useState(false);
      return (
        <EvoEducationNotice
          dismissed={dismissed}
          a11yDismissText="Dismiss guidance"
          onDismiss={() => setDismissed(true)}
        >
          <EvoEducationNoticeHeader>
            <EvoEducationNoticeTitle>Listing guidance</EvoEducationNoticeTitle>
          </EvoEducationNoticeHeader>
        </EvoEducationNotice>
      );
    }
    const screen = await render(<ControlledNotice />);
    await user.click(screen.getByRole("button", { name: "Dismiss guidance" }));
    expect(screen.getByRole("region").query()).toBeNull();
  });

  it("forwards CTA activation", async () => {
    const onCtaClick = vi.fn();
    const screen = await render(
      <EvoEducationNotice onCtaClick={onCtaClick}>
        <EvoEducationNoticeHeader>
          <EvoEducationNoticeTitle>Listing guidance</EvoEducationNoticeTitle>
        </EvoEducationNoticeHeader>
        <EvoEducationNoticeCTA>
          <button type="button">Read listing tips</button>
        </EvoEducationNoticeCTA>
      </EvoEducationNotice>,
    );
    await user.click(screen.getByRole("button", { name: "Read listing tips" }));
    expect(onCtaClick).toHaveBeenCalledTimes(1);
  });
});
