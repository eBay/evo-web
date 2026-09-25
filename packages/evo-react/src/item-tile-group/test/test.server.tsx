import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import { EvoItemTileTitle } from "../../item-tile/item-tile-title";
import { EvoItemTileGroup } from "../index";

const items = [
  { href: "/one", title: <EvoItemTileTitle>One</EvoItemTileTitle> },
  { href: "/two", title: <EvoItemTileTitle>Two</EvoItemTileTitle> },
];

describe("EvoItemTileGroup SSR", () => {
  it("renders a gallery list", () => {
    expect(
      renderToString(<EvoItemTileGroup items={items} />),
    ).toMatchSnapshot();
  });

  it("renders list layout on the group and items", () => {
    expect(
      renderToString(<EvoItemTileGroup items={items} layout="list" />),
    ).toMatchSnapshot();
  });
});
