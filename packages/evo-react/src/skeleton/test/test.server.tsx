import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import { EvoSkeleton } from "../skeleton";
import { EvoSkeletonAvatar } from "../skeleton-avatar";
import { EvoSkeletonButton } from "../skeleton-button";
import { EvoSkeletonImage } from "../skeleton-image";
import { EvoSkeletonText } from "../skeleton-text";
import { EvoSkeletonTextbox } from "../skeleton-textbox";

describe("EvoSkeleton SSR", () => {
  it("renders a listing card placeholder", () => {
    expect(
      renderToString(
        <EvoSkeleton a11yText="Loading listing details" color="purple">
          <EvoSkeletonImage style={{ width: 220, height: 220 }} />
          <EvoSkeletonText size="large" multiline />
          <EvoSkeletonButton size="small" />
        </EvoSkeleton>,
      ),
    ).toMatchSnapshot();
  });

  it("renders span parts with an alternative label", () => {
    expect(
      renderToString(
        <>
          <span id="loading-label">Loading seller profile</span>
          <EvoSkeleton a11yText={null} aria-labelledby="loading-label">
            <EvoSkeletonAvatar as="span" />
            <EvoSkeletonTextbox as="span" />
          </EvoSkeleton>
        </>,
      ),
    ).toMatchSnapshot();
  });
});
