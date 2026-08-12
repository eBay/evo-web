import { afterEach, beforeEach, describe, it, expect, vi } from "vitest";
import { render, cleanup, fireEvent } from "@marko/testing-library";
import { composeStories } from "@storybook/marko";
import * as stories from "../file-input.stories";

const { Default } = composeStories(stories);

afterEach(cleanup);

let component: Awaited<ReturnType<typeof render>>;

describe("evo-file-input", () => {
  describe("given the default file input", () => {
    beforeEach(async () => {
      component = await render(Default);
    });

    it("renders a native file input", () => {
      const input = component.container.querySelector("input[type='file']");
      expect(input).toBeTruthy();
    });

    it("renders the description slot with subheader BEM class", () => {
      const desc = component.container.querySelector(
        ".file-input__content-subheader",
      );
      expect(desc).toBeTruthy();
    });

    it("renders the upload icon wrapper", () => {
      expect(
        component.container.querySelector(".file-input__upload-icon"),
      ).toBeTruthy();
    });

    it("associates the CTA label with the file input via matching id/for", () => {
      const input = component.container.querySelector(
        "input[type='file']",
      ) as HTMLInputElement;
      const label = component.container.querySelector("label");
      expect(input).toBeTruthy();
      expect(label).toBeTruthy();
      expect(label!.htmlFor).toBe(input.id);
    });
  });

  describe("when dragenter fires on the file input", () => {
    beforeEach(async () => {
      component = await render(Default);
      await fireEvent.dragEnter(
        component.container.querySelector("input[type='file']")!,
      );
    });

    it("adds the dragged-over modifier to the container", () => {
      expect(
        component.container.querySelector(
          ".file-input___container--dragged-over",
        ),
      ).toBeTruthy();
    });
  });

  describe("when dragleave fires on the file input", () => {
    beforeEach(async () => {
      component = await render(Default);
      const input = component.container.querySelector("input[type='file']")!;
      await fireEvent.dragEnter(input);
      await fireEvent.dragLeave(input);
    });

    it("removes the dragged-over modifier from the container", () => {
      expect(
        component.container.querySelector(
          ".file-input___container--dragged-over",
        ),
      ).toBeNull();
    });
  });

  describe("consumer drag handlers", () => {
    it("passes through onDragEnter to the consumer", async () => {
      const onDragEnter = vi.fn();
      component = await render(Default, { onDragEnter });
      await fireEvent.dragEnter(
        component.container.querySelector("input[type='file']")!,
      );
      expect(onDragEnter).toHaveBeenCalledTimes(1);
    });

    it("passes through onDrop to the consumer", async () => {
      const onDrop = vi.fn();
      component = await render(Default, { onDrop });
      await fireEvent.drop(
        component.container.querySelector("input[type='file']")!,
      );
      expect(onDrop).toHaveBeenCalledTimes(1);
    });
  });
});
