import { describe, it, expect } from "vitest";
import { render } from "@marko/testing-library";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import { composeStories } from "@storybook/marko";
import * as stories from "../signal.stories"; // import all stories from the stories file
const { Default, WithIcon } = composeStories(stories);

async function renderSignal(story: typeof Default, input?: object) {
  const { container } = await render(story, input as any);
  return container.querySelector("span") as HTMLSpanElement;
}

describe("signal", () => {
  it("renders neutral version when no type is specified", async () => {
    await snapshotHTML(Default);
  });

  it("renders recent version", async () => {
    await snapshotHTML(Default, { status: "recent" });
  });

  it("renders time sensitive version", async () => {
    await snapshotHTML(Default, { status: "time-sensitive" });
  });

  it("renders trustworthy version", async () => {
    await snapshotHTML(Default, { status: "trustworthy" });
  });

  it("renders neutral version", async () => {
    await snapshotHTML(Default, { status: "neutral" });
  });

  it("sets the class for tone", async () => {
    const el = await renderSignal(Default, { tone: "positive" });
    expect(el.className).toBe("signal signal--positive");
  });

  it("tone overrides status", async () => {
    const el = await renderSignal(Default, {
      status: "recent",
      tone: "warning",
    });
    expect(el.className).toBe("signal signal--warning");
  });

  it("adds strong and subtle emphasis classes and none for default", async () => {
    expect(
      (await renderSignal(Default, { emphasis: "strong" })).className,
    ).toBe("signal signal--neutral signal--strong");
    expect(
      (await renderSignal(Default, { emphasis: "subtle" })).className,
    ).toBe("signal signal--neutral signal--subtle");
    expect(
      (await renderSignal(Default, { emphasis: "default" })).className,
    ).toBe("signal signal--neutral");
  });

  it("combines emphasis with status and custom class", async () => {
    const el = await renderSignal(Default, {
      status: "trustworthy",
      emphasis: "strong",
      class: "custom",
    });
    expect(el.className).toBe(
      "custom signal signal--trustworthy signal--strong",
    );
  });

  it("renders the icon as the first child before the label", async () => {
    const el = await renderSignal(WithIcon, { tone: "information" });
    const icon = el.firstElementChild;
    expect(icon?.tagName.toLowerCase()).toBe("svg");
    expect(icon?.getAttribute("class")).toBe("icon icon--12");
    expect(icon?.getAttribute("aria-hidden")).toBe("true");
    expect(el.firstChild).toBe(icon);
    expect(el.lastChild?.textContent).toBe("Signal");
  });
});
