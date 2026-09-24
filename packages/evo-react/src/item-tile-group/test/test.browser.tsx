import { createRef } from "react";
import { describe, expect, it, vi } from "vitest";
import { render } from "vitest-browser-react";
import { userEvent } from "vitest/browser";
import { EvoIconHeart16 } from "../../icon/icons/heart-16";
import { EvoItemTileAction } from "../../item-tile/item-tile-action";
import { EvoItemTileTitle } from "../../item-tile/item-tile-title";
import { EvoItemTileGroup } from "../index";

const items = Array.from({ length: 3 }, (_, index) => ({
  id: `listing-${index + 1}`,
  href: `/listing/${index + 1}`,
  file: {
    name: `photo-${index + 1}.jpg`,
    type: "image/jpeg",
    src: `/photo-${index + 1}.jpg`,
  },
  title: <EvoItemTileTitle>Listing {index + 1}</EvoItemTileTitle>,
}));

describe("EvoItemTileGroup", () => {
  it("renders a semantic gallery with one tile per list item", async () => {
    const ref = createRef<HTMLDivElement>();
    const screen = await render(
      <EvoItemTileGroup items={items} ref={ref} data-testid="group" />,
    );
    expect(ref.current).toBe(screen.getByTestId("group").element());
    expect(
      screen.container.querySelector(".layout-grid.item-tile-group"),
    ).not.toBeNull();
    expect(
      screen.container.querySelectorAll("ul > li > .item-tile"),
    ).toHaveLength(3);
    await expect
      .element(screen.getByRole("link", { name: "Listing 2" }))
      .toHaveAttribute("href", "/listing/2");
  });

  it("applies list layout to the group and every tile", async () => {
    const screen = await render(
      <EvoItemTileGroup items={items} layout="list" />,
    );
    expect(
      screen.container.querySelector(".item-tile-group--list-view"),
    ).not.toBeNull();
    expect(
      screen.container.querySelectorAll(".item-tile--list-view"),
    ).toHaveLength(3);
  });

  it("keeps callbacks on each tile's named action", async () => {
    const onSave = vi.fn();
    const user = userEvent.setup();
    const screen = await render(
      <EvoItemTileGroup
        items={[
          {
            ...items[0],
            action: (
              <EvoItemTileAction a11yText="Save first listing" onClick={onSave}>
                <EvoIconHeart16 />
              </EvoItemTileAction>
            ),
          },
          items[1],
        ]}
      />,
    );
    await user.click(
      screen.getByRole("button", { name: "Save first listing" }),
    );
    expect(onSave).toHaveBeenCalledOnce();
    user.cleanup();
  });
});
