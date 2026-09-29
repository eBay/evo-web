import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import { EvoButton } from "../../button/button";
import {
  EvoTourtip,
  EvoTourtipContent,
  EvoTourtipFooter,
  EvoTourtipHeading,
  EvoTourtipHost,
  EvoTourtipOverlay,
} from "../index";

describe("EvoTourtip SSR", () => {
  it("renders a named tourtip with footer", () => {
    expect(
      renderToString(
        <EvoTourtip a11yCloseText="Dismiss guide" placement="bottom">
          <EvoTourtipHost as={EvoButton}>Seller tools</EvoTourtipHost>
          <EvoTourtipOverlay>
            <EvoTourtipContent>
              <EvoTourtipHeading>Manage listings</EvoTourtipHeading>
              <p>Find your listing tools here.</p>
            </EvoTourtipContent>
            <EvoTourtipFooter index="1 of 3">Next</EvoTourtipFooter>
          </EvoTourtipOverlay>
        </EvoTourtip>,
      ),
    ).toMatchSnapshot();
  });

  it("renders a closed tourtip with default span host and labelled content", () => {
    expect(
      renderToString(
        <EvoTourtip a11yCloseText="Dismiss guide" defaultOpen={false}>
          <EvoTourtipHost>Seller tools</EvoTourtipHost>
          <EvoTourtipOverlay aria-label="Seller tools guide">
            <EvoTourtipContent>Find your listing tools here.</EvoTourtipContent>
          </EvoTourtipOverlay>
        </EvoTourtip>,
      ),
    ).toMatchSnapshot();
  });

  it("keeps a custom heading ID associated during server rendering", () => {
    const markup = renderToString(
      <EvoTourtip a11yCloseText="Dismiss guide">
        <EvoTourtipHost>Seller tools</EvoTourtipHost>
        <EvoTourtipOverlay aria-labelledby="listing-guide-heading">
          <EvoTourtipContent>
            <EvoTourtipHeading id="listing-guide-heading">
              Manage listings
            </EvoTourtipHeading>
            Find your listing tools here.
          </EvoTourtipContent>
        </EvoTourtipOverlay>
      </EvoTourtip>,
    );
    expect(markup).toContain('aria-labelledby="listing-guide-heading"');
    expect(markup).toContain('id="listing-guide-heading"');
  });
});
