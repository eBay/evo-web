import { afterEach, beforeEach, describe, it, expect } from "vitest";
import { composeStories } from "@storybook/marko";
import { render, fireEvent, cleanup } from "@marko/testing-library";
import { userEvent, type UserEvent } from "vitest/browser";
import { pressKey } from "../../../common/test-utils/browser";
import * as stories from "../menu-button.stories"; // import all stories from the stories file
const { Default } = composeStories(stories);

const items: { value: string }[] = [];

afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */
let component;

function getExpandedInput(expanded) {
  return Object.assign({}, Default.args, {
    item: [...items],
    expanded,
  });
}

describe.skip("given the menu is in the default state", () => {
  beforeEach(async () => {
    component = await render(Default);
  });

  describe("when the button is clicked once", () => {
    beforeEach(async () => {
      await fireEvent.click(component.getByRole("button"));
    });

    it("then it expands", async () => {
      expect(component.getByRole("button")).toHaveAttribute(
        "aria-expanded",
        "true",
      );
    });

    it("then it emits the marko event from expander-expand", () => {
      expect(component.emitted("expand")).has.length(1);
    });

    describe("when it is clicked again", () => {
      beforeEach(async () => {
        await fireEvent.click(component.getByRole("button"));
      });

      it("then it collapses", async () => {
        expect(component.getByRole("button")).toHaveAttribute(
          "aria-expanded",
          "false",
        );
      });

      it("then it emits the marko event from expander-collapse", () => {
        expect(component.emitted("collapse")).has.length(1);
      });
    });
  });

  describe("when an item is added via input from its parent and the new item is clicked", () => {
    const newItems = [
      ...items,
      {
        value: "item 4",
      },
    ];
    const fourthItem = "item 4";

    beforeEach(async () => {
      await component.rerender(
        Object.assign({}, Default.args, { item: newItems }),
      );
      await fireEvent.click(component.getByText(fourthItem));
    });

    it("then the new item is selected or something");

    it("then it uses the new input in event data", () => {
      const selectEvents = component.emitted("select");
      expect(selectEvents).has.length(1);

      const [[eventArg]] = selectEvents;
      expect(eventArg).has.property("el").toHaveTextContent(fourthItem);
    });
  });

  describe("when re-rendered with expanded set to false", () => {
    beforeEach(async () => {
      await component.rerender(getExpandedInput(false));
    });

    it("then it remains collapsed", () => {
      expect(component.getByRole("button")).toHaveAttribute(
        "aria-expanded",
        "false",
      );
    });

    it("then it doesn't emit the marko collapse event", () => {
      expect(component.emitted("collapse")).has.length(0);
    });
  });

  // TODO: we should make the `expanded` property controllable via input.
  describe.skip("when re-rendered with expanded set to true", () => {
    beforeEach(async () => {
      await component.rerender(getExpandedInput(true));
    });

    it("then it expands", () => {
      expect(component.getByRole("button")).toHaveAttribute(
        "aria-expanded",
        "true",
      );
    });

    it("then it emits the expand event", () => {
      expect(component.emitted("expand")).has.length(1);
    });
  });
});

describe.skip("given the menu is in the expanded state", () => {
  const firstItemText = "Item 0";

  beforeEach(async () => {
    component = await render(Default);
    await fireEvent.click(component.getByRole("button"));
    expect(component.emitted("expand")).has.length(1);
  });

  // TODO: we should make the `expanded` property controllable via input.
  describe.skip("when re-rendered with expanded set to true", () => {
    beforeEach(async () => {
      await component.rerender(getExpandedInput(true));
    });

    it("then it remains expanded", () => {
      expect(component.getByRole("button")).toHaveAttribute(
        "aria-expanded",
        "true",
      );
    });

    it("then it doesn't emit the marko expand event", () => {
      expect(component.emitted("expand")).has.length(0);
    });
  });

  // TODO: we should make the `expanded` property controllable via input.
  describe.skip("when re-rendered with expanded set to false", () => {
    beforeEach(async () => {
      await component.rerender(getExpandedInput(false));
    });

    it("then it expands", () => {
      expect(component.getByRole("button")).toHaveAttribute(
        "aria-expanded",
        "false",
      );
    });

    it("then it emits the expand event", () => {
      expect(component.emitted("collapse")).has.length(1);
    });
  });

  describe("when an item is clicked", () => {
    beforeEach(async () => {
      await fireEvent.mouseDown(component.getByText(firstItemText));
      await fireEvent.click(component.getByText(firstItemText));
    });

    it("then it emits the select event with correct data", () => {
      const selectEvents = component.emitted("select");
      expect(selectEvents).to.length(1);

      const [[eventArg]] = selectEvents;
      expect(eventArg).has.property("el").toHaveTextContent(firstItemText);
      expect(eventArg).has.property("checked").to.deep.equal([0]);
    });

    it("then it emits the mousedown event", () => {
      expect(component.emitted("mousedown")).has.length(1);
    });
  });

  describe("when the escape key is pressed from an item", () => {
    beforeEach(async () => {
      await pressKey(component.getByText(firstItemText), {
        key: "Escape",
        keyCode: 27,
      });
    });

    it("then it collapses", () => {
      expect(component.getByRole("button")).toHaveAttribute(
        "aria-expanded",
        "false",
      );
    });

    it("then it emits the marko collapse event", () => {
      expect(component.emitted("collapse")).to.have.property("length", 1);
    });
  });

  describe("when the escape key is pressed from the button", () => {
    beforeEach(async () => {
      await pressKey(component.getByRole("button"), {
        key: "Escape",
        keyCode: 27,
      });
    });

    it("then it collapses", () => {
      expect(component.getByRole("button")).toHaveAttribute(
        "aria-expanded",
        "false",
      );
    });

    it("then it emits the marko collapse event", () => {
      expect(component.emitted("collapse")).to.have.property("length", 1);
    });
  });
});

describe.skip("given the menu is in the expanded state with radio items", () => {
  let firstItem, secondItem;
  beforeEach(async () => {
    component = await render(Default, { type: "radio" });
    firstItem = component.getAllByRole("menuitemradio", {
      hidden: true,
    })[0];
    secondItem = component.getAllByRole("menuitemradio", {
      hidden: true,
    })[1];
  });

  describe("when an item is clicked", () => {
    beforeEach(async () => {
      await fireEvent.click(secondItem);
    });

    it("then it emits the change event with correct data", () => {
      const changeEvents = component.emitted("change");
      expect(changeEvents).to.have.length(1);

      const [[eventData]] = changeEvents;
      expect(eventData.checked).to.deep.equal([1]);
    });

    it("then the item is selected", () => {
      expect(secondItem).toHaveAttribute("aria-checked", "true");
    });
  });

  describe("when an action button is pressed on an item", () => {
    beforeEach(async () => {
      await pressKey(firstItem, {
        key: " ",
        keyCode: 32,
      });
    });

    it("then it emits the change event with correct data", () => {
      const changeEvents = component.emitted("change");
      expect(changeEvents).to.have.length(1);

      const [[eventData]] = changeEvents;
      expect(eventData.checked).to.deep.equal([0]);
    });

    it("then the item is selected", () => {
      expect(firstItem).toHaveAttribute("aria-checked", "true");
    });
  });

  describe("when two items are clicked", () => {
    beforeEach(async () => {
      await fireEvent.click(firstItem);
      await fireEvent.click(secondItem);
    });

    it("then it emits two change events with correct data", () => {
      const changeEvents = component.emitted("change");
      expect(changeEvents).to.have.length(2);

      const [[firstEventData], [secondEventData]] = changeEvents;
      expect(firstEventData.checked).to.deep.equal([0]);
      expect(secondEventData.checked).to.deep.equal([1]);
    });

    it("then the second item is selected", () => {
      expect(firstItem).toHaveAttribute("aria-checked", "false");
      expect(secondItem).toHaveAttribute("aria-checked", "true");
    });
  });

  describe("when an item is clicked multiple times", () => {
    beforeEach(async () => {
      await fireEvent.click(firstItem);
      expect(firstItem).toHaveAttribute("aria-checked", "true");
      await fireEvent.click(firstItem);
    });

    it("then it emits only one change event with correct data", () => {
      const changeEvents = component.emitted("change");
      expect(changeEvents).to.have.length(1);

      const [[eventData]] = changeEvents;
      expect(eventData.checked).to.deep.equal([0]);
    });

    it("then the item is selected", () => {
      expect(firstItem).toHaveAttribute("aria-checked", "true");
    });
  });
});

describe.skip("given the menu is in the expanded state with checkbox items", () => {
  let firstItem, secondItem;
  beforeEach(async () => {
    component = await render(Default, { type: "checkbox" });
    firstItem = component.getAllByRole("menuitemcheckbox", {
      hidden: true,
    })[0];
    secondItem = component.getAllByRole("menuitemcheckbox", {
      hidden: true,
    })[1];
  });

  describe("when two items are clicked", () => {
    beforeEach(async () => {
      await fireEvent.click(firstItem);
      await fireEvent.click(secondItem);
    });

    it("then it emits two change events with correct data", () => {
      const changeEvents = component.emitted("change");
      expect(changeEvents).to.have.length(2);

      const [[firstEventData], [secondEventData]] = changeEvents;
      expect(firstEventData.checked).to.deep.equal([0]);
      expect(secondEventData.checked).to.deep.equal([0, 1]);
    });

    it("then both items are selected", () => {
      expect(firstItem).toHaveAttribute("aria-checked", "true");
      expect(secondItem).toHaveAttribute("aria-checked", "true");
    });
  });

  describe("when an item is checked and then unchecked", () => {
    beforeEach(async () => {
      await fireEvent.click(firstItem);
      await fireEvent.click(firstItem);
    });

    it("then it emits the change events with correct data", () => {
      const changeEvents = component.emitted("change");
      expect(changeEvents).to.have.length(2);

      const [[firstEventData], [secondEventData]] = changeEvents;
      expect(firstEventData.checked).to.deep.equal([0]);
      expect(secondEventData.checked).to.deep.equal([]);
    });

    it("then the item is unchecked", () => {
      expect(firstItem).toHaveAttribute("aria-checked", "false");
    });
  });
});

describe("given the evo-menu-button is open", () => {
  beforeEach(async () => {
    component = await render(Default);
    await fireEvent.click(component.getByRole("button"));
  });

  describe("when focus moves outside the component", () => {
    beforeEach(async () => {
      await fireEvent.focusOut(component.getByRole("button"), {
        relatedTarget: document.body,
      });
    });

    it("then it collapses", () => {
      expect(component.getByRole("button")).toHaveAttribute(
        "aria-expanded",
        "false",
      );
    });
  });
});

describe("given the evo-menu-button is closed", () => {
  const firstItemText = "item 1";
  let user: UserEvent;

  const getItem = (text: string) =>
    component.getByText(text).parentElement as HTMLElement;

  beforeEach(async () => {
    user = userEvent.setup();
    component = await render(Default);
    await user.click(component.getByRole("button"));
  });

  it("then clicking the button expands it and moves focus to the first item", () => {
    expect(document.activeElement).to.equal(getItem(firstItemText));
    expect(component.getByRole("button")).toHaveAttribute(
      "aria-expanded",
      "true",
    );
  });

  for (const key of ["{Enter}", "{ }"]) {
    describe(`when "${key}" is pressed on the button`, () => {
      beforeEach(async () => {
        await user.keyboard("{Escape}");
        await user.keyboard(key);
      });

      it("then it expands and moves focus to the first item", () => {
        expect(component.getByRole("button")).toHaveAttribute(
          "aria-expanded",
          "true",
        );
        expect(document.activeElement).to.equal(getItem(firstItemText));
      });
    });
  }
});

describe("given the evo-menu-button is open via the keyboard", () => {
  const firstItemText = "item 1";

  const getItem = (text: string) =>
    component.getByText(text).parentElement as HTMLElement;

  beforeEach(async () => {
    component = await render(Default, { collapseOnSelect: true });
    component.getByRole("button").focus();
    await fireEvent.click(component.getByRole("button"));
  });

  describe("when escape is pressed inside the menu", () => {
    beforeEach(async () => {
      await pressKey(getItem(firstItemText), { key: "Escape" });
    });

    it("then it collapses and returns focus to the button", () => {
      expect(component.getByRole("button")).toHaveAttribute(
        "aria-expanded",
        "false",
      );
      expect(document.activeElement).to.equal(component.getByRole("button"));
    });
  });

  describe("when an item is activated with the space key", () => {
    beforeEach(async () => {
      await pressKey(getItem(firstItemText), { key: " " });
    });

    it("then it collapses and returns focus to the button", () => {
      expect(component.getByRole("button")).toHaveAttribute(
        "aria-expanded",
        "false",
      );
      expect(document.activeElement).to.equal(component.getByRole("button"));
    });
  });
});
