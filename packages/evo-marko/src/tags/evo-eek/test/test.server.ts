import { describe, it } from "vitest";
import { render, cleanup, fireEvent } from "@marko/testing-library";
import { composeStories } from "@storybook/marko";
import { snapshotHTML, prettyNormalizedDOM } from "../../../common/test-utils/snapshots";
import * as stories from "../eek.stories"; // import all stories from the stories file
const { Default } = composeStories(stories);

describe("eek", () => {
  async function ratingCheck(max: string, min: string, rating: string) {
    await snapshotHTML(Default, {
      max,
      min,
      rating,
      a11yText: `${min} - ${max}. ${rating}`,
    });
  }

  it("renders default eek", async () => {
    const { getByRole, getByText } = await render(Default, {
      max: "A+++",
      min: "D",
      rating: "B",
      a11yText: "A+++ - D. Rating B",
    });
    expect(prettyNormalizedDOM(getByText("A+++"))).toMatchSnapshot();
    expect(prettyNormalizedDOM(getByText("D"))).toMatchSnapshot();
    expect(prettyNormalizedDOM(getByText("B"))).toMatchSnapshot();
    expect(prettyNormalizedDOM(getByRole("img"))).toMatchSnapshot();
  });

  it("renders large eek", async () => {
    const { getByRole, getByText } = await render(Default, {
      max: "A+++",
      min: "D",
      rating: "B",
      size: "large",
      a11yText: "A+++ - D. Rating B",
    });
    expect(prettyNormalizedDOM(getByText("A+++"))).toMatchSnapshot();
    expect(prettyNormalizedDOM(getByText("D"))).toMatchSnapshot();
    expect(prettyNormalizedDOM(getByText("B"))).toMatchSnapshot();
    expect(prettyNormalizedDOM(getByRole("img"))).toMatchSnapshot();
  });

  it("renders invalid eek", async () => {
    const { getByRole, getByText } = await render(Default, {
      max: "A",
      min: "D",
      rating: "B",
      a11yText: "A+++ - D. Rating B",
    });
    expect(prettyNormalizedDOM(getByText("A"))).toMatchSnapshot();
    expect(prettyNormalizedDOM(getByText("D"))).toMatchSnapshot();
    expect(prettyNormalizedDOM(getByText("B"))).toMatchSnapshot();
    expect(prettyNormalizedDOM(getByRole("img"))).toMatchSnapshot();
  });

  it("renders the correct eek if rating is outside", async () => {
    await ratingCheck("A+", "D", "A++");
  });

  it("renders rating 1", async () => {
    await ratingCheck("A++", "E", "A++");
  });

  it("renders rating 2", async () => {
    await ratingCheck("A++", "E", "A+");
  });

  it("renders rating 3", async () => {
    await ratingCheck("A++", "E", "A");
  });

  it("renders rating 4", async () => {
    await ratingCheck("A++", "E", "B");
  });

  it("renders rating 5", async () => {
    await ratingCheck("A++", "E", "C");
  });

  it("renders rating 6", async () => {
    await ratingCheck("A++", "E", "D");
  });

  it("renders rating 7", async () => {
    await ratingCheck("A++", "E", "E");
  });

  it("renders rating 7 (not 8)", async () => {
    await ratingCheck("A++", "G", "F");
    await ratingCheck("A++", "G", "G");
  });
});
