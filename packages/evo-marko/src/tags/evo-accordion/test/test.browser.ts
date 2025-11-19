import { afterEach, beforeEach, describe, it, expect, vi } from "vitest";
import { render, cleanup, fireEvent } from "@marko/testing-library";
import { composeStories } from "@storybook/marko";
import { fastAnimations } from "../../../common/test-utils/index";
import * as stories from "../accordion.stories"; // import all stories from the stories file
const { Default, AutoCollapsed } = composeStories(stories);

let component: Awaited<ReturnType<typeof render>>;
let clickSpy = vi.fn();
let toggleSpy = vi.fn();

beforeAll(() => fastAnimations.start());
afterAll(() => fastAnimations.stop());
afterEach(cleanup);

describe("evo-accordion", () => {
  describe("given the accordion in the default state", () => {
    beforeEach(async () => {
      component = await render(Default, {
        onClick: clickSpy,
        onToggle: toggleSpy,
      });
    });

    afterEach(() => {
      clickSpy.mockReset();
      toggleSpy.mockReset();
    });

    it("should render with all details closed", () => {
      const detailsElements = component.container.querySelectorAll("details");
      detailsElements.forEach((details) => {
        expect(details.open).to.equal(false);
      });
    });

    it("should render with accordion role description", () => {
      const accordionElement = component.container.querySelector("ul.accordion");
      expect(accordionElement?.getAttribute("aria-roledescription")).to.equal("accordion");
    });

    it("should render all accordion items", () => {
      expect(component.getByText("Item 1")).toBeDefined();
      expect(component.getByText("Item 2")).toBeDefined();
      expect(component.getByText("Item 3")).toBeDefined();
    });

    describe("when clicking on first accordion item", () => {
      beforeEach(async () => {
        await fireEvent.click(component.getByText("Item 1"));
      });

      it("then it emits the toggle and click events", () => {
        expect(toggleSpy).toBeCalledTimes(1);
        expect(clickSpy).toBeCalledTimes(1);
      });

      it("then the first item should be open", () => {
        const firstDetails = component.getByText("Item 1").closest("details");
        expect(firstDetails?.open).to.equal(true);
      });

      it("then other items should remain closed", () => {
        const secondDetails = component.getByText("Item 2").closest("details");
        const thirdDetails = component.getByText("Item 3").closest("details");
        expect(secondDetails?.open).to.equal(false);
        expect(thirdDetails?.open).to.equal(false);
      });
    });

    describe("when clicking on second accordion item", () => {
      beforeEach(async () => {
        await fireEvent.click(component.getByText("Item 2"));
      });

      it("then it emits the toggle and click events", () => {
        expect(toggleSpy).toBeCalledTimes(1);
        expect(clickSpy).toBeCalledTimes(1);
      });

      it("then the second item should be open", () => {
        const secondDetails = component.getByText("Item 2").closest("details");
        expect(secondDetails?.open).to.equal(true);
      });
    });
  });

  describe("given the accordion with auto-collapse enabled", () => {
    beforeEach(async () => {
      component = await render(AutoCollapsed, {
        onClick: clickSpy,
        onToggle: toggleSpy,
      });
    });

    afterEach(() => {
      clickSpy.mockReset();
      toggleSpy.mockReset();
    });

    it("should render with all details closed initially", () => {
      const detailsElements = component.container.querySelectorAll("details");
      detailsElements.forEach((details) => {
        expect(details.open).to.equal(false);
      });
    });

    describe("when clicking on first accordion item", () => {
      beforeEach(async () => {
        await fireEvent.click(component.getByText("Item 1"));
      });

      it("then it emits the toggle and click events", () => {
        expect(toggleSpy).toBeCalledTimes(1);
        expect(clickSpy).toBeCalledTimes(1);
      });

      it("then the first item should be open", () => {
        const firstDetails = component.getByText("Item 1").closest("details");
        expect(firstDetails?.open).to.equal(true);
      });

      describe("when clicking on second accordion item", () => {
        beforeEach(async () => {
          clickSpy.mockReset();
          toggleSpy.mockReset();
          await fireEvent.click(component.getByText("Item 2"));
        });

        it("then it emits the toggle and click events", () => {
          expect(toggleSpy).toBeCalledTimes(1);
          expect(clickSpy).toBeCalledTimes(1);
        });

        it("then the second item should be open", () => {
          const secondDetails = component.getByText("Item 2").closest("details");
          expect(secondDetails?.open).to.equal(true);
        });

        it("then the first item should be auto-collapsed", () => {
          const firstDetails = component.getByText("Item 1").closest("details");
          expect(firstDetails?.open).to.equal(false);
        });

        it("then the third item should remain closed", () => {
          const thirdDetails = component.getByText("Item 3").closest("details");
          expect(thirdDetails?.open).to.equal(false);
        });
      });

      describe("when clicking on the same item again", () => {
        beforeEach(async () => {
          clickSpy.mockReset();
          toggleSpy.mockReset();
          await fireEvent.click(component.getByText("Item 1"));
        });

        it("then it emits the toggle and click events", () => {
          expect(toggleSpy).toBeCalledTimes(1);
          expect(clickSpy).toBeCalledTimes(1);
        });

        it("then the item should be closed", () => {
          const firstDetails = component.getByText("Item 1").closest("details");
          expect(firstDetails?.open).to.equal(false);
        });
      });
    });
  });
});
