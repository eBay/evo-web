import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import { EvoImagePlaceholder } from "../image-placeholder";

describe("EvoImagePlaceholder SSR", () => {
  it("renders a decorative placeholder", () => {
    expect(renderToString(<EvoImagePlaceholder />)).toMatchSnapshot();
  });

  it("renders an informative resized placeholder", () => {
    expect(
      renderToString(
        <EvoImagePlaceholder
          a11yText="Product image unavailable"
          a11yVariant="label"
          style={{ height: 100, width: 100 }}
        />,
      ),
    ).toMatchSnapshot();
  });
});
