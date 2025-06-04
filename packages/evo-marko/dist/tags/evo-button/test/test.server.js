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
import { it } from "vitest";
import { composeStories } from "@storybook/marko";
import { snapshotHTML } from "../../../common/test-utils/snapshots";
import * as stories from "../button.stories.js"; // import all stories from the stories file
const { Standard, ExpandButton } = composeStories(stories);
const htmlSnap = snapshotHTML(__dirname);
const properties = {
  priority: ["primary", "secondary", "delete"],
  size: ["large"],
};
Object.keys(properties).forEach((property) => {
  const values = properties[property];
  values.forEach((value) => {
    it(`renders button with ${property}=${value}`, () =>
      __awaiter(void 0, void 0, void 0, function* () {
        yield htmlSnap(Standard, { [property]: value });
      }));
  });
});
[false, true].forEach((fluid) => {
  it(`renders button with fluid=${fluid}`, () =>
    __awaiter(void 0, void 0, void 0, function* () {
      yield htmlSnap(Standard, { fluid });
    }));
});
it("renders defaults", () =>
  __awaiter(void 0, void 0, void 0, function* () {
    yield htmlSnap(Standard);
  }));
it("renders with id override", () =>
  __awaiter(void 0, void 0, void 0, function* () {
    yield htmlSnap(Standard, { id: "test" });
  }));
it("renders with type override", () =>
  __awaiter(void 0, void 0, void 0, function* () {
    yield htmlSnap(Standard, { type: "submit" });
  }));
it("does not apply priority class for unsupported value", () =>
  __awaiter(void 0, void 0, void 0, function* () {
    yield htmlSnap(Standard, { priority: "none" });
  }));
it("renders fake version", () =>
  __awaiter(void 0, void 0, void 0, function* () {
    yield htmlSnap(Standard, {
      href: "#",
      size: "large",
      priority: "primary",
      ariaLabel: "fake button",
    });
  }));
it("renders disabled version", () =>
  __awaiter(void 0, void 0, void 0, function* () {
    yield htmlSnap(Standard, { disabled: true });
  }));
it("renders partially disabled version", () =>
  __awaiter(void 0, void 0, void 0, function* () {
    yield htmlSnap(Standard, { partiallyDisabled: true });
  }));
it("renders truncated button", () =>
  __awaiter(void 0, void 0, void 0, function* () {
    yield htmlSnap(Standard, {
      truncate: true,
    });
  }));
it("renders small button", () =>
  __awaiter(void 0, void 0, void 0, function* () {
    yield htmlSnap(Standard, {
      size: "small",
    });
  }));
it("renders large truncated button", () =>
  __awaiter(void 0, void 0, void 0, function* () {
    yield htmlSnap(Standard, {
      truncate: true,
      size: "large",
    });
  }));
it("renders fixed-height button", () =>
  __awaiter(void 0, void 0, void 0, function* () {
    yield htmlSnap(Standard, {
      fixedHeight: true,
    });
  }));
it("renders large fixed-height button", () =>
  __awaiter(void 0, void 0, void 0, function* () {
    yield htmlSnap(Standard, {
      fixedHeight: true,
      size: "large",
    });
  }));
it("renders a11yText when bodyState === loading", () =>
  __awaiter(void 0, void 0, void 0, function* () {
    yield htmlSnap(Standard, {
      priority: "primary",
      a11yText: "loading text",
      bodyState: "loading",
    });
  }));
it("renders expanded button", () =>
  __awaiter(void 0, void 0, void 0, function* () {
    yield htmlSnap(ExpandButton);
  }));
//# sourceMappingURL=test.server.js.map
