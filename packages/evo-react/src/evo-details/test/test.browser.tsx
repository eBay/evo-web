import type { ComponentProps } from "react";
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { render } from "vitest-browser-react";
import { userEvent } from "vitest/browser";
import { EvoDetails } from "../details";
import { EvoDetailsSummary } from "../details-summary";
import { EvoDetailsLabel } from "../details-label";
import { EvoDetailsLeading } from "../details-leading";
import { EvoDetailsContent } from "../details-content";
import { EvoIconLightbulb16 } from "../../evo-icon/icons/evo-icon-lightbulb-16";

function renderDetails(
  props: Partial<ComponentProps<typeof EvoDetails>> = {},
) {
  return render(
    <EvoDetails {...props}>
      <EvoDetailsSummary>
        <EvoDetailsLabel>Details</EvoDetailsLabel>
      </EvoDetailsSummary>
      <EvoDetailsContent>Content</EvoDetailsContent>
    </EvoDetails>,
  );
}

describe("evo-details", () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });

  afterEach(() => {
    user.cleanup();
  });

  it("renders with open=false by default", async () => {
    const screen = await renderDetails();
    const details = screen
      .getByText("Details")
      .element()
      .closest("details") as HTMLDetailsElement;
    expect(details.open).toBe(false);
  });

  it("renders with open=true when passed open prop", async () => {
    const screen = await renderDetails({ open: true });
    const details = screen
      .getByText("Details")
      .element()
      .closest("details") as HTMLDetailsElement;
    expect(details.open).toBe(true);
  });

  it("fires onToggle with open=true when opened", async () => {
    const onToggle = vi.fn();
    const screen = await renderDetails({ onToggle });

    await user.click(screen.getByText("Details"));

    expect(onToggle).toHaveBeenCalledTimes(1);
    expect(onToggle).toHaveBeenCalledWith(
      expect.objectContaining({ type: "toggle" }),
      { open: true },
    );
  });

  it("fires onToggle with open=false when closed", async () => {
    const onToggle = vi.fn();
    const screen = await renderDetails({ open: true, onToggle });

    await user.click(screen.getByText("Details"));

    expect(onToggle).toHaveBeenCalledWith(
      expect.objectContaining({ type: "toggle" }),
      { open: false },
    );
  });

  it("applies small size class to summary", async () => {
    const screen = await renderDetails({ size: "small" });
    const summary = screen.getByText("Details").element().closest("summary");
    expect(summary).toHaveClass("details__summary--small");
  });

  it("applies center alignment class to summary", async () => {
    const screen = await renderDetails({ alignment: "center" });
    const summary = screen.getByText("Details").element().closest("summary");
    expect(summary).toHaveClass("details__summary--center");
  });

  it("renders leading element when EvoDetailsLeading is used", async () => {
    const screen = await render(
      <EvoDetails>
        <EvoDetailsSummary>
          <EvoDetailsLeading>
            <EvoIconLightbulb16 data-testid="icon" />
          </EvoDetailsLeading>
          <EvoDetailsLabel>Details</EvoDetailsLabel>
        </EvoDetailsSummary>
        <EvoDetailsContent>Content</EvoDetailsContent>
      </EvoDetails>,
    );

    await expect.element(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("renders content inside EvoDetailsContent", async () => {
    const screen = await renderDetails();
    await expect.element(screen.getByText("Content")).toBeInTheDocument();
  });

  it("renders the chevron icon inside summary", async () => {
    const screen = await renderDetails();
    const summary = screen.getByText("Details").element().closest("summary");
    const iconSpan = summary?.querySelector(".details__icon");
    expect(iconSpan).toBeTruthy();
  });
});
