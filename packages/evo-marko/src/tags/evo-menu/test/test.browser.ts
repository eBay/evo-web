import { afterEach, beforeEach, describe, it, expect } from "vitest";
import { composeStories } from "@storybook/marko";
import { render, fireEvent, cleanup, waitFor } from "@marko/testing-library";
import { pressKey } from "../../../common/test-utils/browser";
import * as stories from "../menu.stories"; // import all stories from the stories file
const { Default, Groups, Controlled, Typeahead } = composeStories(stories);
const Separator: any = Default;

afterEach(cleanup);

let component: Awaited<ReturnType<typeof render>>;

describe("given the menu is single-select with no selection (selected=null)", () => {
  const firstItemText = "item 2";

  beforeEach(async () => {
    component = await render(Default, { selected: null });
  });

  it("then it renders radio items with none checked", () => {
    const items = component.getAllByRole("menuitemradio");
    expect(items).to.have.length(3);
    for (const item of items) {
      expect(item).toHaveAttribute("aria-checked", "false");
    }
  });

  describe("when an item is clicked", () => {
    beforeEach(async () => {
      await fireEvent.click(component.getByText(firstItemText));
    });

    it("then it becomes the checked item", () => {
      expect(
        component.getByText(firstItemText).parentElement,
      ).toHaveAttribute("aria-checked", "true");
    });
  });
});

describe("given the menu selection is controlled and shared across groups", () => {
  const selectedItemText = "System default";
  const otherGroupItemText = "Dark";

  const getItem = (text: string) =>
    component.getByText(text).parentElement as HTMLElement;

  beforeEach(async () => {
    component = await render(Controlled);
  });

  describe("when an item in the other group is clicked", () => {
    beforeEach(async () => {
      await fireEvent.click(getItem(otherGroupItemText));
    });

    it("then the selection moves across groups", () => {
      expect(getItem(otherGroupItemText)).toHaveAttribute(
        "aria-checked",
        "true",
      );
      expect(getItem(selectedItemText)).toHaveAttribute("aria-checked", "false");
    });
  });

  describe("when the selection is changed from outside the menu", () => {
    beforeEach(async () => {
      await fireEvent.click(component.getByDisplayValue("light"));
    });

    it("then the menu reflects the external selection", () => {
      expect(getItem("Light")).toHaveAttribute("aria-checked", "true");
      expect(getItem(selectedItemText)).toHaveAttribute("aria-checked", "false");
    });
  });
});

describe("given the menu has groups", () => {
  const radioItemText = "Price: low to high";
  const otherRadioItemText = "Price: high to low";
  const checkboxItemText = "Free shipping";
  const otherCheckboxItemText = "Buy It Now";

  const getItem = (text: string) =>
    component.getByText(text).parentElement as HTMLElement;

  beforeEach(async () => {
    component = await render(Groups);
  });

  it("then it renders a separator between the groups", () => {
    expect(component.getAllByRole("separator")).to.have.length(1);
  });

  it("then it renders item roles based on each group's selection type", () => {
    expect(component.getAllByRole("menuitemradio")).to.have.length(2);
    expect(component.getAllByRole("menuitemcheckbox")).to.have.length(3);
  });

  describe("when an item in the radio group is clicked", () => {
    beforeEach(async () => {
      await fireEvent.click(getItem(otherRadioItemText));
    });

    it("then it updates only that group's selection", () => {
      expect(getItem(otherRadioItemText)).toHaveAttribute(
        "aria-checked",
        "true",
      );
      expect(getItem(radioItemText)).toHaveAttribute("aria-checked", "false");
      expect(getItem(checkboxItemText)).toHaveAttribute("aria-checked", "true");
    });
  });

  describe("when an item in the checkbox group is clicked", () => {
    beforeEach(async () => {
      await fireEvent.click(getItem(otherCheckboxItemText));
    });

    it("then it adds to that group's selection without affecting others", () => {
      expect(getItem(otherCheckboxItemText)).toHaveAttribute(
        "aria-checked",
        "true",
      );
      expect(getItem(checkboxItemText)).toHaveAttribute("aria-checked", "true");
      expect(getItem(radioItemText)).toHaveAttribute("aria-checked", "true");
    });
  });

  describe("when the down key is pressed from the last item of a group", () => {
    beforeEach(async () => {
      await fireEvent.click(getItem(otherRadioItemText));
      await pressKey(getItem(otherRadioItemText), {
        key: "ArrowDown",
        keyCode: 40,
      });
    });

    it("then focus moves into the next group", () => {
      expect(getItem(checkboxItemText)).toHaveAttribute("tabindex", "0");
      expect(getItem(otherRadioItemText)).toHaveAttribute("tabindex", "-1");
    });
  });
});

describe.skip("typeahead functionality", () => {
  const firstItemText = "Albania";
  const secondItemText = "Alcania";
  const thirdItemText = "Alcdnia";

  beforeEach(async () => {
    component = await render(Typeahead);
  });
  describe("first", () => {
    beforeEach(async () => {
      await fireEvent.click(component.getByText(firstItemText));
      await fireEvent.keyPress(component.getByText(firstItemText), {
        key: "a",
        code: 65,
      });
      await fireEvent.keyPress(component.getByText(firstItemText), {
        key: "l",
        code: 76,
      });
      await fireEvent.keyPress(component.getByText(firstItemText), {
        key: "c",
        code: 67,
      });
    });

    it("shows the correct item in focus when the user types", async () => {
      expect(
        component
          .getByText(secondItemText)
          .parentElement.getAttribute("tabindex"),
      ).to.equal("0");
      await fireEvent.keyPress(component.getByText(secondItemText), {
        key: "d",
        code: 68,
      });
      expect(
        component
          .getByText(thirdItemText)
          .parentElement.getAttribute("tabindex"),
      ).to.equal("0");
    });
  });

  it("shows first element in focus when there is no match", async () => {
    await fireEvent.click(component.getByText(firstItemText));
    await fireEvent.keyPress(component.getByText(firstItemText), {
      key: "z",
      code: 90,
    });
    expect(
      component.getByText(firstItemText).parentElement.getAttribute("tabindex"),
    ).to.equal("0");
  });

  it("restarts the search from the beginning after it waits", async () => {
    await fireEvent.click(component.getByText(firstItemText));
    await fireEvent.keyPress(component.getByText(firstItemText), {
      key: "a",
      code: 65,
    });
    await fireEvent.keyPress(component.getByText(firstItemText), {
      key: "l",
      code: 76,
    });
    await fireEvent.keyPress(component.getByText(firstItemText), {
      key: "b",
      code: 66,
    });
    await new Promise((resolve) => setTimeout(resolve, 100));
    await waitFor(
      async () => {
        await fireEvent.keyPress(component.getByText(firstItemText), {
          key: "a",
          code: 65,
        });
        await fireEvent.keyPress(component.getByText(firstItemText), {
          key: "l",
          code: 76,
        });
        await fireEvent.keyPress(component.getByText(firstItemText), {
          key: "c",
          code: 67,
        });
        expect(
          component
            .getByText(secondItemText)
            .parentElement.getAttribute("tabindex"),
        ).to.equal("0");
      },
      { timeout: 1500 },
    );
  });
});

describe.skip("given the menu is in the default state", () => {
  const firstItemText = "Item 0";
  const secondItemText = "Item 1";

  beforeEach(async () => {
    component = await render(Default);
  });

  describe("when an item is clicked", () => {
    beforeEach(async () => {
      await fireEvent.click(component.getByText(firstItemText));
    });

    it("then it emits the select event with correct data", () => {
      const selectEvents = component.emitted("select");
      expect(selectEvents).to.length(1);

      const [[eventArg]] = selectEvents;
      expect(eventArg).has.property("el").toHaveTextContent(firstItemText);
    });
  });

  describe("when the escape key is pressed from an item", () => {
    beforeEach(async () => {
      await pressKey(component.getByText(firstItemText), {
        key: "Escape",
        keyCode: 27,
      });
    });

    it("then it emits the marko keydown event", () => {
      expect(component.emitted("keydown")).to.have.property("length", 1);
    });
  });

  describe("when the down key is pressed from an item", () => {
    beforeEach(async () => {
      await pressKey(component.getByText(firstItemText), {
        key: "ArrowDown",
        keyCode: 40,
      });
    });

    it("then it emits the marko keydown event", () => {
      const keydownEvents = component.emitted("keydown");
      expect(keydownEvents).to.have.property("length", 1);
      expect(keydownEvents[0][0].index).to.equal(1);
    });
  });

  describe("when the up key is pressed from the first item", () => {
    beforeEach(async () => {
      await pressKey(component.getByText(firstItemText), {
        key: "ArrowUp",
        keyCode: 38,
      });
    });

    it("then it does not emit the marko keydown event", () => {
      const keydownEvents = component.emitted("keydown");
      expect(keydownEvents).to.have.property("length", 0);
    });
  });

  describe("when the up key is pressed from the second item", () => {
    beforeEach(async () => {
      await pressKey(component.getByText(secondItemText), {
        key: "ArrowUp",
        keyCode: 38,
      });
    });

    it("then it emits the marko keydown event", () => {
      const keydownEvents = component.emitted("keydown");
      expect(keydownEvents).to.have.property("length", 1);
      expect(keydownEvents[0][0].index).to.equal(0);
    });
  });
});

describe.skip("given the menu has radio items", () => {
  let firstItem, secondItem;

  beforeEach(async () => {
    component = await render(Default, { type: "radio" });
    firstItem = component.getAllByRole("menuitemradio")[0];
    secondItem = component.getAllByRole("menuitemradio")[1];
  });

  describe("when an item is clicked", () => {
    beforeEach(async () => {
      await fireEvent.click(firstItem);
    });

    it("then it emits the change event with correct data", () => {
      const changeEvents = component.emitted("change");
      expect(changeEvents).to.have.length(1);

      const eventData = changeEvents[0][0];
      expect(eventData.checked).to.deep.equal([0]);
    });

    it("then the item is selected", () => {
      expect(firstItem).toHaveAttribute("aria-checked", "true");
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

      const eventData = changeEvents[0][0];
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

      const firstEventData = changeEvents[0][0];
      const secondEventData = changeEvents[1][0];
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

    it("then it emits two change events with correct data", () => {
      const changeEvents = component.emitted("change");
      expect(changeEvents).to.have.length(1);

      const eventData = changeEvents[0][0];
      expect(eventData.checked).to.deep.equal([0]);
    });

    it("then the item is selected", () => {
      expect(firstItem).toHaveAttribute("aria-checked", "true");
    });
  });
});

describe.skip("given the menu has checkbox items", () => {
  let firstItem, secondItem;

  beforeEach(async () => {
    component = await render(Default, { type: "checkbox" });
    firstItem = component.getAllByRole("menuitemcheckbox")[0];
    secondItem = component.getAllByRole("menuitemcheckbox")[1];
  });

  describe("when two items are clicked", () => {
    beforeEach(async () => {
      await fireEvent.click(firstItem);
      await fireEvent.click(secondItem);
    });

    it("then it emits two change events with correct data", () => {
      const changeEvents = component.emitted("change");
      expect(changeEvents).to.have.length(2);

      const firstEventData = changeEvents[0][0];
      const secondEventData = changeEvents[1][0];
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

      const firstEventData = changeEvents[0][0];
      const secondEventData = changeEvents[1][0];
      expect(firstEventData.checked).to.deep.equal([0]);
      expect(secondEventData.checked).to.deep.equal([]);
    });

    it("then the item is unchecked", () => {
      expect(firstItem).toHaveAttribute("aria-checked", "false");
    });
  });
});

describe.skip("given the menu has checkbox items with separator", () => {
  let firstItem, secondItem, thirdItem;

  beforeEach(async () => {
    component = await render(Separator, { type: "checkbox" });
    firstItem = component.getAllByRole("menuitemcheckbox")[0];
    secondItem = component.getAllByRole("menuitemcheckbox")[1];
    thirdItem = component.getAllByRole("menuitemcheckbox")[2];
  });

  describe("when all items are clicked", () => {
    beforeEach(async () => {
      await fireEvent.click(firstItem);
      await fireEvent.click(secondItem);
      await fireEvent.click(thirdItem);
    });

    it("then it emits three change events with correct data", () => {
      const changeEvents = component.emitted("change");
      expect(changeEvents).to.have.length(3);

      const firstEventData = changeEvents[0][0];
      const secondEventData = changeEvents[1][0];
      const thirdEventData = changeEvents[2][0];

      expect(firstEventData.checked).to.deep.equal([0]);
      expect(secondEventData.checked).to.deep.equal([0, 1]);
      expect(thirdEventData.checked).to.deep.equal([0, 1, 2]);
    });
  });

  describe("when an item is checked and then unchecked", () => {
    beforeEach(async () => {
      await fireEvent.click(thirdItem);
      await fireEvent.click(thirdItem);
    });

    it("then it emits the change events with correct data", () => {
      const changeEvents = component.emitted("change");
      expect(changeEvents).to.have.length(2);

      const firstEventData = changeEvents[0][0];
      const secondEventData = changeEvents[1][0];

      expect(firstEventData.checked).to.deep.equal([2]);
      expect(secondEventData.checked).to.deep.equal([]);
    });

    it("then the item is unchecked", () => {
      expect(thirdItem).toHaveAttribute("aria-checked", "false");
    });
  });
});
