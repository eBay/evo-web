import { useState } from "react";
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  onTestFinished,
  vi,
} from "vitest";
import { userEvent } from "vitest/browser";
import { render } from "vitest-browser-react";
import { EvoIconSettings16 } from "../../icon/icons/settings-16";
import { EvoInfotip } from "../infotip";
import { EvoInfotipHeading } from "../infotip-heading";

function InfotipContent() {
  return (
    <>
      <EvoInfotipHeading>Important</EvoInfotipHeading>
      <p>Additional information</p>
    </>
  );
}

describe("evo-infotip", () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });

  afterEach(() => {
    user.cleanup();
  });

  it("opens and closes an uncontrolled infotip", async () => {
    const screen = await render(
      <EvoInfotip
        a11yIconText="Important information"
        a11yCloseText="Dismiss infotip"
      >
        <InfotipContent />
      </EvoInfotip>,
    );
    const trigger = screen.getByRole("button", {
      name: "Important information",
    });

    await expect.element(trigger).toHaveAttribute("aria-expanded", "false");
    await user.click(trigger);

    await expect.element(trigger).toHaveAttribute("aria-expanded", "true");
    await expect
      .element(screen.getByText("Additional information"))
      .toBeVisible();

    await user.click(screen.getByRole("button", { name: "Dismiss infotip" }));

    await expect.element(trigger).toHaveAttribute("aria-expanded", "false");
    await expect.element(trigger).toHaveFocus();
  });

  it("notifies the consumer when the requested open state changes", async () => {
    const onOpenChange = vi.fn();
    const screen = await render(
      <EvoInfotip
        a11yIconText="Help"
        a11yCloseText="Dismiss"
        onOpenChange={onOpenChange}
      >
        <InfotipContent />
      </EvoInfotip>,
    );

    await user.click(screen.getByRole("button", { name: "Help" }));
    await user.click(screen.getByRole("button", { name: "Dismiss" }));

    expect(onOpenChange).toHaveBeenNthCalledWith(1, true);
    expect(onOpenChange).toHaveBeenNthCalledWith(2, false);
  });

  it("supports a controlled open state", async () => {
    function ControlledInfotip() {
      const [open, setOpen] = useState(false);

      return (
        <EvoInfotip
          open={open}
          onOpenChange={setOpen}
          a11yIconText="Help"
          a11yCloseText="Dismiss"
        >
          <InfotipContent />
        </EvoInfotip>
      );
    }

    const screen = await render(<ControlledInfotip />);
    const trigger = screen.getByRole("button", { name: "Help" });

    await user.click(trigger);
    await expect.element(trigger).toHaveAttribute("aria-expanded", "true");

    await user.click(screen.getByRole("button", { name: "Dismiss" }));
    await expect.element(trigger).toHaveAttribute("aria-expanded", "false");
  });

  it("opens on initial render when defaultOpen is true", async () => {
    const screen = await render(
      <EvoInfotip defaultOpen a11yIconText="Help" a11yCloseText="Dismiss">
        <InfotipContent />
      </EvoInfotip>,
    );

    await expect
      .element(screen.getByRole("button", { name: "Help" }))
      .toHaveAttribute("aria-expanded", "true");
  });

  it("does not open when disabled", async () => {
    const screen = await render(
      <EvoInfotip disabled a11yIconText="Help" a11yCloseText="Dismiss">
        <InfotipContent />
      </EvoInfotip>,
    );
    const trigger = screen.getByRole("button", { name: "Help" });

    await expect.element(trigger).toBeDisabled();
    await expect.element(trigger).toHaveAttribute("aria-expanded", "false");
  });

  it("does not expose the overlay as a tooltip", async () => {
    const screen = await render(
      <EvoInfotip defaultOpen a11yIconText="Help" a11yCloseText="Dismiss">
        <EvoInfotipHeading>Shipping information</EvoInfotipHeading>
        <p>Ships tomorrow</p>
      </EvoInfotip>,
    );
    const overlay = screen.container.querySelector(".infotip__overlay");

    expect(overlay).not.toBeNull();
    expect(overlay).not.toHaveAttribute("role");
    expect(overlay).not.toHaveAttribute("aria-labelledby");
    expect(screen.container.querySelector('[role="tooltip"]')).toBeNull();
  });

  it("does not add an id to a heading without a custom id", async () => {
    const screen = await render(
      <EvoInfotip defaultOpen a11yIconText="Help" a11yCloseText="Dismiss">
        <EvoInfotipHeading>Shipping information</EvoInfotipHeading>
        <p>Ships tomorrow</p>
      </EvoInfotip>,
    );

    await expect
      .element(screen.getByText("Shipping information"))
      .not.toHaveAttribute("id");
  });

  it("keeps a custom heading id", async () => {
    const screen = await render(
      <EvoInfotip defaultOpen a11yIconText="Help" a11yCloseText="Dismiss">
        <EvoInfotipHeading id="shipping-heading">
          Shipping information
        </EvoInfotipHeading>
        <p>Ships tomorrow</p>
      </EvoInfotip>,
    );

    await expect
      .element(screen.getByText("Shipping information"))
      .toHaveAttribute("id", "shipping-heading");
  });

  it("supports a custom heading element", async () => {
    const screen = await render(
      <EvoInfotip defaultOpen a11yIconText="Help" a11yCloseText="Dismiss">
        <EvoInfotipHeading as="h2">Shipping information</EvoInfotipHeading>
        <p>Ships tomorrow</p>
      </EvoInfotip>,
    );

    await expect
      .element(screen.getByRole("heading", { level: 2 }))
      .toHaveClass("infotip__heading");
  });

  it("renders a custom icon and passes attributes to the root", async () => {
    const screen = await render(
      <EvoInfotip
        className="custom-infotip"
        data-testid="infotip"
        icon={<EvoIconSettings16 />}
        a11yIconText="Settings help"
        a11yCloseText="Dismiss"
      >
        <InfotipContent />
      </EvoInfotip>,
    );
    const trigger = screen.getByRole("button", { name: "Settings help" });
    const root = trigger.element().closest(".infotip");

    expect(root).toHaveClass("custom-infotip");
    expect(root).toHaveAttribute("data-testid", "infotip");
    expect(trigger.element().querySelector("use")).toHaveAttribute(
      "xlink:href",
      "#icon-settings-16",
    );
  });

  it("is not clipped by an overflow: hidden ancestor with the fixed strategy", async () => {
    const container = document.createElement("div");
    container.style.cssText =
      "overflow: hidden; height: 24px; margin: 100px 0 0 150px;";
    document.body.appendChild(container);
    onTestFinished(() => container.remove());
    await render(
      <EvoInfotip
        a11yIconText="Help"
        a11yCloseText="Dismiss infotip"
        strategy="fixed"
        defaultOpen
      >
        <InfotipContent />
      </EvoInfotip>,
      { container },
    );
    const overlay = container.querySelector(".infotip__overlay") as HTMLElement;
    await expect.poll(() => overlay.style.visibility).not.toBe("hidden");

    const { left, width, bottom } = overlay.getBoundingClientRect();
    expect(bottom).toBeGreaterThan(container.getBoundingClientRect().bottom);
    expect(
      overlay.contains(document.elementFromPoint(left + width / 2, bottom - 5)),
    ).toBe(true);
  });
});
