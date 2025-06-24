import { expect, describe, it } from "vitest";
import { render, cleanup } from "@marko/testing-library";
import { composeStories } from "@storybook/marko";
import * as stories from "../ccd.stories"; // import all stories from the stories file
const { Default } = composeStories(stories);
import visualHTML from "visual-html";

afterEach(cleanup);

describe("ccd", () => {
  let component;
  beforeEach(async () => {
    component = await render(Default);
  });

  it("then it matches the snapshot", () => {
    const html = visualHTML(component.container);

    expect(html).toMatchSnapshot();
  });
});
