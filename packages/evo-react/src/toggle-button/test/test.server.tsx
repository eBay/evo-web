import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import { EvoIconSettings24 } from "../../icon/icons/settings-24";
import { EvoToggleButton } from "../toggle-button";

describe("EvoToggleButton SSR", () => {
  it("renders title, subtitle, and default pressed state", () => {
    expect(
      renderToString(
        <EvoToggleButton
          title="Show sold items"
          subtitle="Completed listings"
        />,
      ),
    ).toMatchSnapshot();
  });

  it("renders an icon and controlled pressed state", () => {
    expect(
      renderToString(
        <EvoToggleButton
          title="Preferences"
          pressed
          layoutType="list"
          icon={<EvoIconSettings24 />}
        />,
      ),
    ).toMatchSnapshot();
  });

  it("renders image media and custom child content", () => {
    expect(
      renderToString(
        <EvoToggleButton
          layoutType="gallery"
          img={{ src: "/print.jpg", alt: "Landscape print" }}
        >
          <span>Landscape prints</span>
        </EvoToggleButton>,
      ),
    ).toMatchSnapshot();
  });
});
