import { createRef } from "react";
import { describe, expect, it, vi } from "vitest";
import { render } from "vitest-browser-react";
import { EvoImagePlaceholder } from "../image-placeholder";

describe("evo-image-placeholder", () => {
  it("keeps a decorative placeholder out of the accessibility tree", async () => {
    const screen = await render(<EvoImagePlaceholder />);
    // Decorative SVGs are hidden from role queries; inspect the fixed SVG element.
    const svg = screen.container.querySelector("svg.image-placeholder");

    expect(svg).not.toBeNull();
    expect(svg).toHaveAttribute("aria-hidden", "true");
    expect(svg).toHaveAttribute("focusable", "false");
    expect(svg).toHaveClass("icon", "icon--image-placeholder");
    expect(svg?.querySelector("use")).toHaveAttribute(
      "xlink:href",
      "#image-placeholder",
    );
  });

  it("names an informative placeholder", async () => {
    const screen = await render(
      <EvoImagePlaceholder a11yText="Product image unavailable" />,
    );
    const svg = screen.getByRole("img", { name: "Product image unavailable" });

    await expect.element(svg).toHaveClass("image-placeholder");
    await expect.element(svg).not.toHaveAttribute("aria-hidden");
    expect(svg.element().querySelector("title")).toHaveTextContent(
      "Product image unavailable",
    );
  });

  it("supports the shared icon label variant", async () => {
    const screen = await render(
      <EvoImagePlaceholder
        a11yText="Product image unavailable"
        a11yVariant="label"
      />,
    );
    const svg = screen.getByRole("img", { name: "Product image unavailable" });

    await expect
      .element(svg)
      .toHaveAttribute("aria-label", "Product image unavailable");
    expect(svg.element().querySelector("title")).toBeNull();
  });

  it("passes native SVG props, events, and the ref through", async () => {
    const ref = createRef<SVGSVGElement>();
    const onClick = vi.fn();
    const screen = await render(
      <EvoImagePlaceholder
        a11yText="Product image unavailable"
        className="listing-photo"
        data-testid="photo-placeholder"
        height={100}
        width={100}
        onClick={onClick}
        ref={ref}
      />,
    );
    const svg = screen.getByRole("img", { name: "Product image unavailable" });

    await expect.element(svg).toHaveClass("listing-photo");
    await expect.element(svg).toHaveAttribute("height", "100");
    await expect.element(svg).toHaveAttribute("width", "100");
    await expect
      .element(svg)
      .toHaveAttribute("data-testid", "photo-placeholder");
    expect(ref.current).toBe(svg.element());

    svg.element().dispatchEvent(new MouseEvent("click", { bubbles: true }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
