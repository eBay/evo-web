import { vi, describe, it, expect } from "vitest";
import { renderToString } from "react-dom/server";
import { EvoIconCart16 } from "../icons/evo-icon-cart-16";
import { EvoIconAttention24 } from "../icons/evo-icon-attention-24";
import { EvoIconChevronDown16 } from "../icons/evo-icon-chevron-down-16";
import { EvoIconProvider, ROOT_ID } from "../context";

describe("evo-icon SSR", () => {
  describe("symbol deduplication with provider", () => {
    it("does not duplicate symbols when same icon rendered multiple times", () => {
      const html = renderToString(
        <EvoIconProvider>
          <EvoIconCart16 />
          <EvoIconCart16 />
          <EvoIconCart16 />
        </EvoIconProvider>,
      );

      // Count occurrences of the cart-16 symbol in the output
      const symbolMatches = html.match(/id="icon-cart-16"/g);
      expect(symbolMatches?.length).toBe(1);
    });

    it("renders each unique icon symbol only once", () => {
      const html = renderToString(
        <EvoIconProvider>
          <EvoIconCart16 />
          <EvoIconCart16 />
          <EvoIconAttention24 />
          <EvoIconAttention24 />
          <EvoIconChevronDown16 />
        </EvoIconProvider>,
      );

      // Each symbol should appear exactly once
      const cartSymbols = html.match(/id="icon-cart-16"/g);
      const attentionSymbols = html.match(/id="icon-attention-24"/g);
      const chevronSymbols = html.match(/id="icon-chevron-down-16"/g);

      expect(cartSymbols?.length).toBe(1);
      expect(attentionSymbols?.length).toBe(1);
      expect(chevronSymbols?.length).toBe(1);
    });

    it("includes root SVG container with provider", () => {
      const html = renderToString(
        <EvoIconProvider>
          <EvoIconCart16 />
        </EvoIconProvider>,
      );

      expect(html).toContain(`id="${ROOT_ID}"`);
      expect(html).toContain('position:absolute');
      expect(html).toContain('height:0px');
      expect(html).toContain('width:0px');
    });

    it("renders SVG use elements referencing symbols", () => {
      const html = renderToString(
        <EvoIconProvider>
          <EvoIconCart16 />
          <EvoIconAttention24 />
        </EvoIconProvider>,
      );

      // Should have use elements pointing to the symbols
      expect(html).toContain('href="#icon-cart-16"');
      expect(html).toContain('href="#icon-attention-24"');
    });
  });

  describe("without provider", () => {
    it("includes inline symbol when no provider", () => {
      const html = renderToString(<EvoIconCart16 />);

      // Without provider, icon should have inline defs with symbol
      expect(html).toContain('<defs');
      expect(html).toContain('<symbol');
      expect(html).toContain('id="icon-cart-16"');
    });

    it("warns about missing provider on server", () => {
      const consoleSpy = vi.spyOn(console, "warn").mockImplementation(() => {});

      renderToString(<EvoIconCart16 />);

      expect(consoleSpy).toHaveBeenCalledWith(
        expect.stringContaining(
          'Icon "cart16" used without wrapping it in a <EvoIconProvider />',
        ),
      );

      consoleSpy.mockRestore();
    });
  });
});
