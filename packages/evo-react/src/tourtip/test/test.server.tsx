import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import { EvoButton } from "../../button/button";
import {
  EvoTourtip,
  EvoTourtipContent,
  EvoTourtipFooter,
  EvoTourtipHeading,
  EvoTourtipHost,
} from "../index";

describe("EvoTourtip SSR", () => {
  it("renders a named tourtip with footer", () => {
    expect(
      renderToString(
        <EvoTourtip a11yCloseText="Dismiss guide" placement="bottom">
          <EvoTourtipHost as={EvoButton}>Seller tools</EvoTourtipHost>
          <EvoTourtipContent
            heading={<EvoTourtipHeading>Manage listings</EvoTourtipHeading>}
            footer={<EvoTourtipFooter index="1 of 3">Next</EvoTourtipFooter>}
          >
            <p>Find your listing tools here.</p>
          </EvoTourtipContent>
        </EvoTourtip>,
      ),
    ).toMatchSnapshot();
  });

  it("renders a closed tourtip with default span host and labelled content", () => {
    expect(
      renderToString(
        <EvoTourtip a11yCloseText="Dismiss guide" defaultOpen={false}>
          <EvoTourtipHost>Seller tools</EvoTourtipHost>
          <EvoTourtipContent aria-label="Seller tools guide">
            Find your listing tools here.
          </EvoTourtipContent>
        </EvoTourtip>,
      ),
    ).toMatchSnapshot();
  });

  it("keeps a custom heading ID associated during server rendering", () => {
    const markup = renderToString(
      <EvoTourtip a11yCloseText="Dismiss guide">
        <EvoTourtipHost>Seller tools</EvoTourtipHost>
        <EvoTourtipContent
          aria-labelledby="listing-guide-heading"
          heading={
            <EvoTourtipHeading id="listing-guide-heading">
              Manage listings
            </EvoTourtipHeading>
          }
        >
          Find your listing tools here.
        </EvoTourtipContent>
      </EvoTourtip>,
    );
    expect(markup).toContain('aria-labelledby="listing-guide-heading"');
    expect(markup).toContain('id="listing-guide-heading"');
  });
});
