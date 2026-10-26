import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import { EvoIconSettings24 } from "../../icon/icons/settings-24";
import { EvoToggleButton } from "../toggle-button";
import { EvoToggleButtonContent } from "../toggle-button-content";
import { EvoToggleButtonIcon } from "../toggle-button-icon";
import { EvoToggleButtonImage } from "../toggle-button-image";
import { EvoToggleButtonSubtitle } from "../toggle-button-subtitle";
import { EvoToggleButtonTitle } from "../toggle-button-title";

describe("EvoToggleButton SSR", () => {
  it("renders title, subtitle, and default pressed state", () => {
    expect(
      renderToString(
        <EvoToggleButton>
          <EvoToggleButtonContent>
            <EvoToggleButtonTitle>Show sold items</EvoToggleButtonTitle>
            <EvoToggleButtonSubtitle>
              Completed listings
            </EvoToggleButtonSubtitle>
          </EvoToggleButtonContent>
        </EvoToggleButton>,
      ),
    ).toMatchSnapshot();
  });

  it("renders an icon and controlled pressed state", () => {
    expect(
      renderToString(
        <EvoToggleButton pressed layoutType="list">
          <EvoToggleButtonIcon>
            <EvoIconSettings24 />
          </EvoToggleButtonIcon>
          <EvoToggleButtonContent>
            <EvoToggleButtonTitle>Preferences</EvoToggleButtonTitle>
          </EvoToggleButtonContent>
        </EvoToggleButton>,
      ),
    ).toMatchSnapshot();
  });

  it("renders inline and fill image media", () => {
    expect(
      renderToString(
        <>
          <EvoToggleButton layoutType="gallery">
            <EvoToggleButtonImage src="/print.jpg" alt="Landscape print" />
            <EvoToggleButtonContent>
              <EvoToggleButtonTitle>Landscape prints</EvoToggleButtonTitle>
            </EvoToggleButtonContent>
          </EvoToggleButton>
          <EvoToggleButton layoutType="gallery">
            <EvoToggleButtonImage
              src="/portrait.jpg"
              alt=""
              fillPlacement="center"
            />
            <EvoToggleButtonContent>
              <EvoToggleButtonTitle>Portrait prints</EvoToggleButtonTitle>
            </EvoToggleButtonContent>
          </EvoToggleButton>
        </>,
      ),
    ).toMatchSnapshot();
  });
});
