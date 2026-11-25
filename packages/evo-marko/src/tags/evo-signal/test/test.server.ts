import { describe, it, expect } from "vitest";
import { render } from "@marko/testing-library";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import { composeStories } from "@storybook/marko";
import * as stories from "../signal.stories";
const { Default, WithIcon } = composeStories(stories);

const tones = [
  "neutral",
  "information",
  "positive",
  "warning",
  "attention",
] as const;

async function renderSignal(story: typeof Default, input?: object) {
  const { container } = await render(story, input as any);
  return container.querySelector("span") as HTMLSpanElement;
}

describe("signal", () => {
  it("renders neutral version when no tone is specified", async () => {
    await snapshotHTML(Default);
  });

  it.each(tones)("renders the %s tone", async (tone) => {
    const el = await renderSignal(Default, { tone });
    expect(el.className).toBe(`signal signal--${tone}`);
  });

  it("defaults to the neutral tone", async () => {
    expect((await renderSignal(Default)).className).toBe(
      "signal signal--neutral",
    );
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

  it("combines tone, emphasis and custom class", async () => {
    const el = await renderSignal(Default, {
      tone: "information",
      emphasis: "strong",
      class: "custom",
    });
    expect(el.className).toBe(
      "custom signal signal--information signal--strong",
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
