var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
import { composeStories } from "@storybook/marko";
import { afterEach, beforeEach, describe, it, expect } from "vitest";
import { render, fireEvent, cleanup } from "@marko/testing-library";
import { pressKey } from "../../../common/test-utils/browser";
import * as stories from "../button.stories.js"; // import all stories from the stories file
const { Standard } = composeStories(stories);
afterEach(cleanup);
/** @type import("@marko/testing-library").RenderResult */
let component;
describe("given button is enabled", () => {
  beforeEach(() =>
    __awaiter(void 0, void 0, void 0, function* () {
      component = yield render(Standard);
    }),
  );
  describe("when button is clicked", () => {
    beforeEach(() =>
      __awaiter(void 0, void 0, void 0, function* () {
        yield fireEvent.click(component.getByRole("button"));
      }),
    );
    it("then it emits the event with correct data", () => {
      expect(component.emitted("click")).has.length(1);
    });
  });
  describe("when escape key is pressed", () => {
    beforeEach(() =>
      __awaiter(void 0, void 0, void 0, function* () {
        yield pressKey(component.getByRole("button"), {
          key: "Escape",
          keyCode: 27,
        });
      }),
    );
    it("then it emits the event with correct data", () => {
      expect(component.emitted("escape")).has.length(1);
    });
  });
});
describe("given button is disabled", () => {
  beforeEach(() =>
    __awaiter(void 0, void 0, void 0, function* () {
      component = yield render(Standard, { disabled: true });
    }),
  );
  describe("when button is clicked", () => {
    beforeEach(() =>
      __awaiter(void 0, void 0, void 0, function* () {
        yield fireEvent.click(component.getByRole("button"));
      }),
    );
    it("then it does not emit the event", () => {
      expect(component.emitted("click")).has.length(0);
    });
  });
  describe("when escape key is pressed", () => {
    beforeEach(() =>
      __awaiter(void 0, void 0, void 0, function* () {
        yield pressKey(component.getByRole("button"), {
          key: "Escape",
          keyCode: 27,
        });
      }),
    );
    it("then it does not emit the event", () => {
      expect(component.emitted("escape")).has.length(0);
    });
  });
});
//# sourceMappingURL=test.browser.js.map
