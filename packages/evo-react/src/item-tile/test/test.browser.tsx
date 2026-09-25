import { createRef } from "react";
import { beforeEach, afterEach, describe, expect, it, vi } from "vitest";
import { userEvent } from "vitest/browser";
import { render } from "vitest-browser-react";
import { EvoIconHeart16 } from "../../icon/icons/heart-16";
import {
  EvoItemTile,
  EvoItemTileAction,
  EvoItemTileDescription,
  EvoItemTileSubtitle,
  EvoItemTileSupertitle,
  EvoItemTileTitle,
} from "../index";

const file = { name: "phone.jpg", type: "image/jpeg", src: "/phone.jpg" };

describe("EvoItemTile", () => {
  let user: ReturnType<typeof userEvent.setup>;
  beforeEach(() => {
    user = userEvent.setup();
  });
  afterEach(() => {
    user.cleanup();
  });

  it("renders media and named information sections in legacy order", async () => {
    const onAction = vi.fn();
    const ref = createRef<HTMLDivElement>();
    const screen = await render(
      <EvoItemTile
        ref={ref}
        data-testid="tile"
        file={file}
        href="/listing"
        action={
          <EvoItemTileAction a11yText="Save listing" onClick={onAction}>
            <EvoIconHeart16 />
          </EvoItemTileAction>
        }
        supertitle={
          <EvoItemTileSupertitle>Time sensitive</EvoItemTileSupertitle>
        }
        title={<EvoItemTileTitle>Phone</EvoItemTileTitle>}
        subtitle={<EvoItemTileSubtitle>256GB Space Gray</EvoItemTileSubtitle>}
        description={
          <>
            <EvoItemTileDescription>$29.99</EvoItemTileDescription>
            <EvoItemTileDescription as="div">
              Free shipping
            </EvoItemTileDescription>
          </>
        }
      />,
    );
    expect(ref.current).toBe(screen.getByTestId("tile").element());
    const tile = screen.getByTestId("tile").element();
    expect(tile.children[0].classList.contains("item-tile__header")).toBe(true);
    expect(tile.children[1].classList.contains("item-tile__body")).toBe(true);
    await expect
      .element(screen.getByRole("img", { name: "phone.jpg" }))
      .toBeInTheDocument();
    await expect
      .element(screen.getByRole("link", { name: "Phone" }))
      .toHaveAttribute("href", "/listing");
    await expect
      .element(screen.getByText("Free shipping"))
      .toHaveProperty("tagName", "DIV");
    await user.click(screen.getByRole("button", { name: "Save listing" }));
    expect(onAction).toHaveBeenCalledOnce();
  });

  it("preserves list layout and a title href override", async () => {
    const screen = await render(
      <EvoItemTile
        layout="list"
        href="/preview"
        title={<EvoItemTileTitle href="/details">Details</EvoItemTileTitle>}
      />,
    );
    await expect
      .element(screen.getByRole("link", { name: "Details" }))
      .toHaveAttribute("href", "/details");
    expect(
      screen.container.querySelector(".item-tile--list-view"),
    ).not.toBeNull();
    expect(screen.container.querySelector(".item-tile__header")).toBeNull();
  });

  it("announces an external preview link", async () => {
    const screen = await render(
      <EvoItemTile
        file={file}
        href="/listing"
        a11yExternalLinkText="opens in a new tab"
        title={<EvoItemTileTitle>Phone</EvoItemTileTitle>}
      />,
    );
    await expect
      .element(screen.getByRole("link", { name: /opens in a new tab/ }))
      .toHaveAttribute("target", "_blank");
    await expect
      .element(screen.getByRole("link", { name: "Phone" }))
      .toHaveAttribute("href", "/listing");
  });
});
