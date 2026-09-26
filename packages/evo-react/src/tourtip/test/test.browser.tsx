import { createRef, useState } from "react";
import { describe, expect, it, vi } from "vitest";
import { userEvent } from "vitest/browser";
import { render } from "vitest-browser-react";
import { EvoButton } from "../../button/button";
import {
  EvoTourtip,
  EvoTourtipContent,
  EvoTourtipFooter,
  EvoTourtipHeading,
  EvoTourtipHost,
} from "../index";

function Tourtip() {
  return (
    <EvoTourtip a11yCloseText="Dismiss guide">
      <EvoTourtipHost as={EvoButton}>Seller tools</EvoTourtipHost>
      <EvoTourtipContent
        heading={<EvoTourtipHeading>Manage listings</EvoTourtipHeading>}
        footer={
          <EvoTourtipFooter index="1 of 3">
            <EvoButton>Next</EvoButton>
          </EvoTourtipFooter>
        }
      >
        <p>Find your listing tools here.</p>
      </EvoTourtipContent>
    </EvoTourtip>
  );
}

describe("evo-tourtip", () => {
  it("names the region and preserves the tourtip structure", async () => {
    const screen = await render(<Tourtip />);
    const region = screen.getByRole("region", { name: "Manage listings" });
    const host = screen.getByRole("button", { name: "Seller tools" });
    const close = screen.getByRole("button", { name: "Dismiss guide" });
    const heading = screen.getByRole("heading", { name: "Manage listings" });

    await expect.element(host).toHaveAttribute("aria-expanded", "true");
    await expect
      .element(host)
      .toHaveAttribute("aria-controls", region.element().id);
    expect(host.element().parentElement).toHaveClass("tourtip--expanded");
    expect(region.element().tagName).toBe("SPAN");
    expect(
      region
        .element()
        .querySelector(".tourtip__mask .tourtip__cell .tourtip__content p"),
    ).toHaveTextContent("Find your listing tools here.");
    expect(region.element().querySelector(".tourtip__pointer")).not.toBeNull();
    expect(heading.element().id).toBe(
      region.element().getAttribute("aria-labelledby"),
    );
    expect(close.element().nextElementSibling).toHaveClass("tourtip__footer");
    expect(screen.getByText("1 of 3").element()).toHaveClass("tourtip__index");
  });

  it("closes on the close button and restores focus to its host", async () => {
    const user = userEvent.setup();
    const screen = await render(<Tourtip />);
    const host = screen.getByRole("button", { name: "Seller tools" });
    await user.click(screen.getByRole("button", { name: "Dismiss guide" }));
    await expect.element(host).toHaveAttribute("aria-expanded", "false");
    await expect.element(host).toHaveFocus();
    expect(host.element().parentElement).not.toHaveClass("tourtip--expanded");
    user.cleanup();
  });

  it("closes on Escape and calls the controlled state callback", async () => {
    const user = userEvent.setup();
    const onOpenChange = vi.fn();
    function ControlledTourtip() {
      const [open, setOpen] = useState(true);
      return (
        <EvoTourtip
          a11yCloseText="Dismiss guide"
          open={open}
          onOpenChange={(next) => {
            onOpenChange(next);
            setOpen(next);
          }}
        >
          <EvoTourtipHost as={EvoButton}>Seller tools</EvoTourtipHost>
          <EvoTourtipContent aria-label="Seller tools guide">
            <p>Find your listing tools here.</p>
          </EvoTourtipContent>
        </EvoTourtip>
      );
    }
    const screen = await render(<ControlledTourtip />);
    const host = screen.getByRole("button", { name: "Seller tools" });
    host.element().focus();
    await user.keyboard("{Escape}");
    await expect.element(host).toHaveAttribute("aria-expanded", "false");
    expect(onOpenChange).toHaveBeenCalledWith(false);
    user.cleanup();
  });

  it("uses Marko span defaults and forwards refs and attributes", async () => {
    const ref = createRef<HTMLSpanElement>();
    const hostRef = createRef<HTMLSpanElement>();
    const screen = await render(
      <EvoTourtip a11yCloseText="Dismiss guide" ref={ref} data-guide="listings">
        <EvoTourtipHost ref={hostRef}>Seller tools</EvoTourtipHost>
        <EvoTourtipContent aria-label="Seller tools guide">
          Find your listing tools here.
        </EvoTourtipContent>
      </EvoTourtip>,
    );
    expect(ref.current).toHaveAttribute("data-guide", "listings");
    expect(hostRef.current?.tagName).toBe("SPAN");
    await expect
      .element(screen.getByRole("region", { name: "Seller tools guide" }))
      .toBeInTheDocument();
  });

  it("uses a supplied heading ID to name the region", async () => {
    const screen = await render(
      <EvoTourtip a11yCloseText="Dismiss guide">
        <EvoTourtipHost as={EvoButton}>Seller tools</EvoTourtipHost>
        <EvoTourtipContent
          aria-labelledby="listing-guide-heading"
          heading={
            <EvoTourtipHeading id="listing-guide-heading">
              Manage listings
            </EvoTourtipHeading>
          }
        >
          Find your listing tools here.
        </EvoTourtipContent>
      </EvoTourtip>,
    );
    const region = screen.getByRole("region", { name: "Manage listings" });
    expect(region.element()).toHaveAttribute(
      "aria-labelledby",
      "listing-guide-heading",
    );
  });
});
