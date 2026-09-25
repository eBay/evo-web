import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import {
  EvoItemTile,
  EvoItemTileDescription,
  EvoItemTileSubtitle,
  EvoItemTileSupertitle,
  EvoItemTileTitle,
} from "../index";

describe("EvoItemTile SSR", () => {
  it("renders media and every information section", () => {
    expect(
      renderToString(
        <EvoItemTile
          file={{ name: "phone.jpg", type: "image/jpeg", src: "/phone.jpg" }}
          href="/listing"
          supertitle={
            <EvoItemTileSupertitle>Time sensitive</EvoItemTileSupertitle>
          }
          title={<EvoItemTileTitle>Phone</EvoItemTileTitle>}
          subtitle={<EvoItemTileSubtitle>Gray</EvoItemTileSubtitle>}
          description={<EvoItemTileDescription>$29.99</EvoItemTileDescription>}
        />,
      ),
    ).toMatchSnapshot();
  });

  it("renders list layout with text only", () => {
    expect(
      renderToString(
        <EvoItemTile
          layout="list"
          title={<EvoItemTileTitle href="/listing">Phone</EvoItemTileTitle>}
          description={
            <EvoItemTileDescription as="div">
              New condition
            </EvoItemTileDescription>
          }
        />,
      ),
    ).toMatchSnapshot();
  });
});
