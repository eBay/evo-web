import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { render } from "vitest-browser-react";
import { userEvent } from "vitest/browser";
import { EvoIconCart16 } from "../icons/evo-icon-cart-16";
import { EvoIconAttention24 } from "../icons/evo-icon-attention-24";
import { EvoIconAttentionFilled16 } from "../icons/evo-icon-attention-filled-16";
import { EvoIconAfterpay24Colored } from "../icons/evo-icon-afterpay-24-colored";
import { EvoIconProvider, ROOT_ID } from "../context";

describe("evo-icon", () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
  });

  afterEach(async () => {
    await user.cleanup();
  });

  describe("basic rendering", () => {
    it("renders an icon with correct classes", async () => {
      const screen = await render(<EvoIconCart16 />);

      const icon = screen.container.querySelector("svg");
      expect(icon).toBeTruthy();
      expect(icon?.classList.contains("icon")).toBe(true);
      expect(icon?.classList.contains("icon--16")).toBe(true);
    });

    it("renders with correct SVG use reference", async () => {
      const screen = await render(<EvoIconCart16 />);

      const use = screen.container.querySelector("use");
      const xlinkHref = use?.getAttributeNS(
        "http://www.w3.org/1999/xlink",
        "href",
      );
      expect(xlinkHref).toBe("#icon-cart-16");
    });

    it("applies custom className", async () => {
      const screen = await render(<EvoIconCart16 className="custom-class" />);

      const icon = screen.container.querySelector("svg");
      expect(icon?.classList.contains("custom-class")).toBe(true);
      expect(icon?.classList.contains("icon")).toBe(true);
    });

    it("applies prominent class", async () => {
      const screen = await render(<EvoIconCart16 prominent />);

      const icon = screen.container.querySelector("svg");
      expect(icon?.classList.contains("icon--prominent")).toBe(true);
    });
  });

  describe("accessibility", () => {
    it("is decorative by default (aria-hidden)", async () => {
      const screen = await render(<EvoIconCart16 />);

      const icon = screen.container.querySelector("svg");
      expect(icon?.getAttribute("aria-hidden")).toBe("true");
      expect(icon?.getAttribute("focusable")).toBe("false");
    });

    it("supports a11yText with title element", async () => {
      const screen = await render(<EvoIconCart16 a11yText="Shopping cart" />);

      const icon = screen.container.querySelector("svg");
      const title = icon?.querySelector("title");

      expect(icon?.getAttribute("role")).toBe("img");
      expect(icon?.getAttribute("aria-hidden")).toBe(null);
      expect(title?.textContent).toBe("Shopping cart");
      expect(icon?.getAttribute("aria-labelledby")).toContain("icon-title-");
    });

    it("supports a11yText with aria-label variant", async () => {
      const screen = await render(
        <EvoIconCart16 a11yText="Shopping cart" a11yVariant="label" />,
      );

      const icon = screen.container.querySelector("svg");

      expect(icon?.getAttribute("role")).toBe("img");
      expect(icon?.getAttribute("aria-label")).toBe("Shopping cart");
      expect(icon?.getAttribute("aria-labelledby")).toBe(null);
      expect(icon?.querySelector("title")).toBe(null);
    });
  });

  describe("symbol registration with provider", () => {
    it("creates root SVG container with provider", async () => {
      await render(
        <EvoIconProvider>
          <EvoIconCart16 />
        </EvoIconProvider>,
      );

      await vi.waitFor(() => {
        const root = document.getElementById(ROOT_ID);
        expect(root).toBeTruthy();
        expect(root?.tagName).toBe("svg");
        expect((root as HTMLElement)?.style.position).toBe("absolute");
        expect((root as HTMLElement)?.style.width).toBe("0px");
        expect((root as HTMLElement)?.style.height).toBe("0px");
      });
    });

    it("registers symbol only once when multiple same icons used", async () => {
      const root = document.getElementById(ROOT_ID);

      if (root?.parentNode) {
        root.parentNode.removeChild(root);
      }
      await render(
        <EvoIconProvider>
          <EvoIconCart16 />
          <EvoIconCart16 />
          <EvoIconCart16 />
        </EvoIconProvider>,
      );

      await vi.waitFor(() => {
        const root = document.getElementById(ROOT_ID);
        const symbols = root?.querySelectorAll('symbol[id="icon-cart-16"]');
        expect(symbols?.length).toBe(1);
      });
    });

    it("registers multiple different icons", async () => {
      await render(
        <EvoIconProvider>
          <EvoIconCart16 />
          <EvoIconAttention24 />
          <EvoIconAttentionFilled16 />
        </EvoIconProvider>,
      );

      await vi.waitFor(() => {
        const root = document.getElementById(ROOT_ID);
        expect(root?.querySelector('symbol[id="icon-cart-16"]')).toBeTruthy();
        expect(
          root?.querySelector('symbol[id="icon-attention-24"]'),
        ).toBeTruthy();
        expect(
          root?.querySelector('symbol[id="icon-attention-filled-16"]'),
        ).toBeTruthy();
      });
    });
  });

  describe("size detection", () => {
    it("detects size 16 from icon name", async () => {
      const screen = await render(<EvoIconCart16 />);

      const icon = screen.container.querySelector("svg");
      expect(icon?.classList.contains("icon--16")).toBe(true);
    });

    it("detects size 24 from icon name", async () => {
      const screen = await render(<EvoIconAttention24 />);

      const icon = screen.container.querySelector("svg");
      expect(icon?.classList.contains("icon--24")).toBe(true);
    });

    it("handles colored icons size detection", async () => {
      const screen = await render(<EvoIconAfterpay24Colored />);

      const icon = screen.container.querySelector("svg");
      expect(icon?.classList.contains("icon--24")).toBe(true);
    });

    it("handles filled icons with modifier class", async () => {
      const screen = await render(<EvoIconAttentionFilled16 />);

      const icon = screen.container.querySelector("svg");
      expect(icon?.classList.contains("icon--16")).toBe(true);
      expect(icon?.classList.contains("icon--attention-filled")).toBe(true);
    });
  });

  describe("pass-through props", () => {
    it("forwards SVG attributes", async () => {
      const screen = await render(<EvoIconCart16 data-testid="my-icon" />);

      const icon = screen.container.querySelector('svg[data-testid="my-icon"]');
      expect(icon).toBeTruthy();
    });

    it("supports style prop", async () => {
      const screen = await render(<EvoIconCart16 style={{ color: "red" }} />);

      const icon = screen.container.querySelector("svg")!;
      expect(icon?.style.color).toBe("red");
    });
  });
});
