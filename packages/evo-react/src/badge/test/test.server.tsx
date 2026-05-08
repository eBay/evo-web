import { it, expect, describe } from "vitest";
import { renderToString } from "react-dom/server";
import { EvoBadge } from "../badge";
import type { BadgeType } from "../types";

describe("EvoBadge SSR", () => {
  it("renders defaults", () => {
    expect(
      renderToString(<EvoBadge number={5} a11yText="5 unread items" />),
    ).toMatchSnapshot();
  });

  it("renders nothing for zero", () => {
    expect(
      renderToString(<EvoBadge number={0} a11yText="0 unread items" />),
    ).toBe("");
  });

  it("renders nothing for negative numbers", () => {
    expect(
      renderToString(<EvoBadge number={-1} a11yText="unread items" />),
    ).toBe("");
  });

  it("truncates numbers greater than 99", () => {
    expect(
      renderToString(<EvoBadge number={150} a11yText="99+ unread items" />),
    ).toMatchSnapshot();
  });

  it.each<BadgeType>(["menu", "icon"])(
    "renders with type=%s",
    (type) => {
      expect(
        renderToString(
          <EvoBadge number={5} type={type} a11yText={null} />,
        ),
      ).toMatchSnapshot();
    },
  );

  it("renders with null a11yText (no aria-label)", () => {
    expect(
      renderToString(<EvoBadge number={5} type="menu" a11yText={null} />),
    ).toMatchSnapshot();
  });

  it("renders with a custom className", () => {
    expect(
      renderToString(
        <EvoBadge number={5} a11yText="5 unread items" className="custom-class" />,
      ),
    ).toMatchSnapshot();
  });

  it("renders with additional html attributes", () => {
    expect(
      renderToString(
        <EvoBadge number={5} a11yText="5 unread items" data-testid="my-badge" />,
      ),
    ).toMatchSnapshot();
  });
});
