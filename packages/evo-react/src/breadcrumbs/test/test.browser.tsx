import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { render } from "vitest-browser-react";
import { userEvent } from "vitest/browser";
import { EvoBreadcrumbs } from "../breadcrumbs";

const defaultItems = [
  { href: "https://www.ebay.com/", content: "eBay" },
  { href: "https://www.ebay.com/rpp/cell-phone-pda", content: "Cell Phones" },
  { content: "Smart Watch Bands" },
];

describe("evo-breadcrumbs", () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });

  afterEach(() => {
    user.cleanup();
  });

  describe("given default breadcrumbs", () => {
    it("renders a nav element with role navigation", async () => {
      const screen = await render(<EvoBreadcrumbs items={defaultItems} />);

      await expect.element(screen.getByRole("navigation")).toBeInTheDocument();
    });

    it("renders the clipped heading with default text", async () => {
      const screen = await render(<EvoBreadcrumbs items={defaultItems} />);

      const heading = screen.getByRole("heading", { level: 2 });
      await expect.element(heading).toHaveTextContent("Page navigation");
    });

    it("renders the correct number of list items", async () => {
      const screen = await render(<EvoBreadcrumbs items={defaultItems} />);

      const listItems = screen.baseElement.querySelectorAll("li");
      expect(listItems.length).toBe(3);
    });

    it("renders separator icons between items but not after the last", async () => {
      const screen = await render(<EvoBreadcrumbs items={defaultItems} />);

      const listItems = screen.baseElement.querySelectorAll("li");
      for (let i = 0; i < listItems.length - 1; i++) {
        expect(listItems[i].querySelectorAll("svg").length).toBeGreaterThan(0);
      }
      expect(
        listItems[listItems.length - 1].querySelectorAll("svg").length,
      ).toBe(0);
    });

    it("nav is labelled by the clipped heading", async () => {
      const screen = await render(<EvoBreadcrumbs items={defaultItems} />);

      await expect
        .element(screen.getByRole("navigation", { name: "Page navigation" }))
        .toBeInTheDocument();
    });
  });

  describe("given a custom a11yHeadingText", () => {
    it("renders the custom heading text", async () => {
      const screen = await render(
        <EvoBreadcrumbs
          items={defaultItems}
          a11yHeadingText="Custom navigation"
        />,
      );

      await expect
        .element(screen.getByRole("heading", { level: 2 }))
        .toHaveTextContent("Custom navigation");
    });
  });

  describe("given a custom a11yHeadingTag", () => {
    it("renders the heading at the specified level", async () => {
      const screen = await render(
        <EvoBreadcrumbs items={defaultItems} a11yHeadingTag="h3" />,
      );

      await expect
        .element(screen.getByRole("heading", { level: 3 }))
        .toBeInTheDocument();
    });
  });

  describe("given items with href", () => {
    it("renders anchor elements", async () => {
      const screen = await render(<EvoBreadcrumbs items={defaultItems} />);

      const links = screen.baseElement.querySelectorAll("a");
      expect(links.length).toBe(2);
    });

    it("renders the correct href on each link", async () => {
      const screen = await render(<EvoBreadcrumbs items={defaultItems} />);

      const links = screen.baseElement.querySelectorAll("a");
      expect(links[0].getAttribute("href")).toBe("https://www.ebay.com/");
    });

    it("renders the correct link content", async () => {
      const screen = await render(<EvoBreadcrumbs items={defaultItems} />);

      const links = screen.baseElement.querySelectorAll("a");
      expect(links[0].textContent).toBe("eBay");
    });
  });

  describe("given items without href", () => {
    it("renders button elements", async () => {
      const screen = await render(
        <EvoBreadcrumbs
          items={[
            { content: "eBay" },
            { content: "Cell Phones" },
            { content: "Smart Watch Bands" },
          ]}
        />,
      );

      const buttons = screen.baseElement.querySelectorAll("button");
      expect(buttons.length).toBe(3);
    });

    it("emits onClick when a button item is clicked", async () => {
      const onClick = vi.fn();
      const screen = await render(
        <EvoBreadcrumbs
          items={[{ content: "eBay", onClick }, { content: "Current" }]}
        />,
      );

      await user.click(screen.getByRole("button", { name: "eBay" }));

      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });

  describe("given mixed link and button items", () => {
    it("applies aria-current=location only to the last item", async () => {
      const screen = await render(
        <EvoBreadcrumbs
          items={[
            { href: "https://ebay.com", content: "eBay" },
            { href: "https://ebay.com/cars", content: "Cars" },
            { href: "https://ebay.com/cars/used", content: "Used Cars" },
          ]}
        />,
      );

      const links = screen.baseElement.querySelectorAll("a");
      expect(links[2].getAttribute("aria-current")).toBe("location");
      expect(links[0].hasAttribute("aria-current")).toBe(false);
      expect(links[1].hasAttribute("aria-current")).toBe(false);
    });
  });

  describe("given all button items", () => {
    it("applies aria-current=location to the last button", async () => {
      const screen = await render(
        <EvoBreadcrumbs
          items={[
            { content: "eBay" },
            { content: "Cars" },
            { content: "Used Cars" },
          ]}
        />,
      );

      const buttons = screen.baseElement.querySelectorAll("button");
      expect(buttons[2].getAttribute("aria-current")).toBe("location");
      expect(buttons[0].hasAttribute("aria-current")).toBe(false);
      expect(buttons[1].hasAttribute("aria-current")).toBe(false);
    });
  });

  describe("given a single item", () => {
    it("applies aria-current=location to that item", async () => {
      const screen = await render(
        <EvoBreadcrumbs items={[{ content: "Only Item" }]} />,
      );

      const button = screen.getByRole("button");
      await expect.element(button).toHaveAttribute("aria-current", "location");
    });
  });

  describe("given a custom className", () => {
    it("passes it to the nav element alongside the breadcrumbs class", async () => {
      const screen = await render(
        <EvoBreadcrumbs items={defaultItems} className="custom-class" />,
      );

      const nav = screen.getByRole("navigation");
      await expect.element(nav).toHaveClass("breadcrumbs");
      await expect.element(nav).toHaveClass("custom-class");
    });
  });

  describe("given items with data attributes", () => {
    it("passes data attributes through to the rendered element", async () => {
      const screen = await render(
        <EvoBreadcrumbs
          items={[
            { href: "https://ebay.com", content: "eBay", "data-track": "123" },
            { content: "Current" },
          ]}
        />,
      );

      const link = screen.baseElement.querySelector("a");
      expect(link?.getAttribute("data-track")).toBe("123");
    });
  });
});
