import { it, expect, describe } from "vitest";
import { renderToString } from "react-dom/server";
import { EvoBreadcrumbs } from "../breadcrumbs";

const mixedItems = [
  { href: "https://www.ebay.com/", content: "eBay" },
  { href: "https://www.ebay.com/rpp/cell-phone-pda", content: "Cell Phones" },
  { content: "Smart Watch Bands" },
];

describe("EvoBreadcrumbs SSR", () => {
  it("should render default breadcrumbs with mixed links and button", () => {
    expect(
      renderToString(<EvoBreadcrumbs items={mixedItems} />),
    ).toMatchSnapshot();
  });

  it("should render all link items", () => {
    expect(
      renderToString(
        <EvoBreadcrumbs
          items={[
            { href: "https://www.ebay.com/", content: "eBay" },
            {
              href: "https://www.ebay.com/rpp/cell-phone-pda",
              content: "Cell Phones",
            },
            {
              href: "https://www.ebay.com/b/Smart-Watch-Bands/182068",
              content: "Smart Watch Bands",
            },
          ]}
        />,
      ),
    ).toMatchSnapshot();
  });

  it("should render all button items", () => {
    expect(
      renderToString(
        <EvoBreadcrumbs
          items={[
            { content: "eBay" },
            { content: "Cell Phones" },
            { content: "Smart Watch Bands" },
          ]}
        />,
      ),
    ).toMatchSnapshot();
  });

  it("should render with custom a11yHeadingText", () => {
    expect(
      renderToString(
        <EvoBreadcrumbs
          items={mixedItems}
          a11yHeadingText="Custom navigation"
        />,
      ),
    ).toMatchSnapshot();
  });

  it("should render with custom a11yHeadingTag", () => {
    expect(
      renderToString(<EvoBreadcrumbs items={mixedItems} a11yHeadingTag="h3" />),
    ).toMatchSnapshot();
  });

  it("should render a single item with aria-current", () => {
    expect(
      renderToString(<EvoBreadcrumbs items={[{ content: "Only Item" }]} />),
    ).toMatchSnapshot();
  });

  it("should render with custom className", () => {
    expect(
      renderToString(
        <EvoBreadcrumbs items={mixedItems} className="custom-class" />,
      ),
    ).toMatchSnapshot();
  });

  it("should render item with data attributes passed through", () => {
    expect(
      renderToString(
        <EvoBreadcrumbs
          items={[
            { href: "https://ebay.com", content: "eBay", "data-track": "123" },
            { content: "Current" },
          ]}
        />,
      ),
    ).toMatchSnapshot();
  });
});
