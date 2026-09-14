import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { render, fireEvent, cleanup, waitFor } from "@marko/testing-library";
import { composeStories } from "@storybook/marko";
import * as stories from "../combobox.stories";
import ActiveOptions from "./active-options.marko";
import FilterMethod from "./filter-method.marko";
import RuntimeFilterMethod from "./runtime-filter-method.marko";

const { Default } = composeStories(stories);

afterEach(cleanup);

let component: Awaited<ReturnType<typeof render>>;

function getActiveOptionText() {
  const input = component.getByRole("combobox");
  const activeId = input.getAttribute("aria-activedescendant");
  return activeId
    ? component.container.querySelector(`#${activeId}`)?.textContent?.trim()
    : undefined;
}

describe("evo-combobox", () => {
  describe("given a default combobox with options", () => {
    beforeEach(async () => {
      component = await render(Default);
    });

    it("renders the combobox input", () => {
      expect(component.getByRole("combobox")).toBeTruthy();
    });

    it("is initially collapsed", () => {
      expect(component.getByRole("combobox")).toHaveAttribute(
        "aria-expanded",
        "false",
      );
    });

    it("uses list autocomplete by default", () => {
      expect(component.getByRole("combobox")).toHaveAttribute(
        "aria-autocomplete",
        "list",
      );
    });

    it("has no listbox visible initially", () => {
      expect(component.queryByRole("listbox")).not.toBeInTheDocument();
    });

    describe("when the input receives focus", () => {
      beforeEach(async () => {
        await fireEvent.focus(component.getByRole("combobox"));
      });

      it("expands the combobox", () => {
        expect(component.getByRole("combobox")).toHaveAttribute(
          "aria-expanded",
          "true",
        );
      });

      it("shows the listbox", () => {
        expect(component.getByRole("listbox")).toBeVisible();
      });

      it("shows all options", () => {
        expect(component.getAllByRole("option")).toHaveLength(5);
      });

      describe("when ArrowDown is pressed", () => {
        beforeEach(async () => {
          await fireEvent.keyDown(component.getByRole("combobox"), {
            key: "ArrowDown",
          });
        });

        it("highlights the first option", () => {
          const options = component.getAllByRole("option");
          expect(options[0]).toHaveClass("combobox__option--active");
        });

        it("does not filter by the temporary preview value", () => {
          expect(component.getAllByRole("option")).toHaveLength(5);
        });

        it("sets aria-activedescendant to the first option", () => {
          const options = component.getAllByRole("option");
          expect(component.getByRole("combobox")).toHaveAttribute(
            "aria-activedescendant",
            options[0].id,
          );
        });

        describe("when Enter is pressed", () => {
          beforeEach(async () => {
            await fireEvent.keyDown(component.getByRole("combobox"), {
              key: "Enter",
            });
          });

          it("collapses the combobox", () => {
            expect(component.getByRole("combobox")).toHaveAttribute(
              "aria-expanded",
              "false",
            );
          });

          it("sets the input value to the selected option text", () => {
            expect(
              (component.getByRole("combobox") as HTMLInputElement).value,
            ).toBe("August Campaign");
          });
        });
      });

      describe("when Escape is pressed", () => {
        beforeEach(async () => {
          await fireEvent.keyDown(component.getByRole("combobox"), {
            key: "Escape",
          });
        });

        it("collapses the combobox", () => {
          expect(component.getByRole("combobox")).toHaveAttribute(
            "aria-expanded",
            "false",
          );
        });
      });

      describe("when an option is clicked", () => {
        beforeEach(async () => {
          const options = component.getAllByRole("option");
          await fireEvent.mouseDown(options[2]);
          await fireEvent.click(options[2]);
        });

        it("collapses the combobox", async () => {
          await waitFor(() => {
            expect(component.getByRole("combobox")).toHaveAttribute(
              "aria-expanded",
              "false",
            );
          });
        });

        it("sets the input value to the clicked option text", async () => {
          await waitFor(() => {
            expect(
              (component.getByRole("combobox") as HTMLInputElement).value,
            ).toBe("Basic Offer");
          });
        });
      });
    });
  });

  describe("filtering", () => {
    it("filters options in auto mode", async () => {
      component = await render(Default, { filterMethod: "auto" });
      const input = component.getByRole("combobox") as HTMLInputElement;

      await fireEvent.focus(input);
      await fireEvent.input(input, { target: { value: "Basic" } });

      expect(component.getAllByRole("option")).toHaveLength(3);
      expect(
        component.getByRole("option", { name: "Basic Offer" }),
      ).toBeTruthy();
    });

    it("matches case-insensitively and ignores query whitespace", async () => {
      component = await render(FilterMethod, { filterMethod: "auto" });
      const input = component.getByRole("combobox") as HTMLInputElement;

      await fireEvent.input(input, { target: { value: "  nEw yOrK  " } });

      expect(component.getAllByRole("option")).toHaveLength(1);
      expect(component.getByRole("option", { name: "New York" })).toBeTruthy();
    });

    it("treats regex characters literally", async () => {
      component = await render(FilterMethod, { filterMethod: "auto" });
      const input = component.getByRole("combobox") as HTMLInputElement;

      await fireEvent.input(input, { target: { value: "C++" } });

      expect(component.getAllByRole("option")).toHaveLength(1);
      expect(component.getByRole("option", { name: "C++" })).toBeTruthy();
    });

    it("keeps all options for an empty query and filters a prefilled value", async () => {
      component = await render(FilterMethod, { filterMethod: "auto" });
      const input = component.getByRole("combobox") as HTMLInputElement;

      await fireEvent.input(input, { target: { value: "C++" } });
      await fireEvent.input(input, { target: { value: "" } });
      expect(component.getAllByRole("option")).toHaveLength(3);

      component = await render(FilterMethod, {
        filterMethod: "auto",
        value: "C++",
      });
      await fireEvent.focus(component.getByRole("combobox"));
      expect(component.getAllByRole("option")).toHaveLength(1);
      expect(component.getByRole("combobox")).toHaveAttribute(
        "aria-autocomplete",
        "list",
      );
    });

    it("leaves application-filtered suggestions unchanged in manual mode", async () => {
      component = await render(FilterMethod, { filterMethod: "manual" });
      const input = component.getByRole("combobox") as HTMLInputElement;

      await fireEvent.input(input, { target: { value: "nyc" } });
      expect(component.getByRole("option", { name: "New York" })).toBeTruthy();
      expect(component.getByRole("combobox")).toHaveAttribute(
        "aria-autocomplete",
        "list",
      );

      await fireEvent.click(
        component.getByRole("button", { name: "Load more suggestions" }),
      );
      expect(component.getByRole("option", { name: "London" })).toBeTruthy();
    });

    it("leaves input-independent suggestions unchanged in none mode", async () => {
      component = await render(FilterMethod, {
        filterMethod: "none",
        value: "missing",
      });
      await fireEvent.focus(component.getByRole("combobox"));

      expect(component.getAllByRole("option")).toHaveLength(3);
      expect(component.getByRole("combobox")).toHaveAttribute(
        "aria-autocomplete",
        "none",
      );
    });

    it("updates filtering and ARIA when the mode changes", async () => {
      component = await render(RuntimeFilterMethod);
      const input = component.getByRole("combobox");

      expect(input).toHaveAttribute("aria-autocomplete", "list");
      expect(
        component.queryByRole("option", { name: "August Campaign" }),
      ).not.toBeInTheDocument();

      await fireEvent.click(
        component.getByRole("button", { name: "Change filter method" }),
      );
      await fireEvent.focus(input);

      expect(input).toHaveAttribute("aria-autocomplete", "none");
      expect(
        component.getByRole("option", { name: "August Campaign" }),
      ).toBeTruthy();
    });

    it("keeps native autocomplete off and does not leak filterMethod", async () => {
      for (const filterMethod of ["auto", "manual", "none"] as const) {
        component = await render(Default, { filterMethod });
        const input = component.getByRole("combobox");

        expect(input).toHaveAttribute("autocomplete", "off");
        expect(input).not.toHaveAttribute("filtermethod");
      }
    });
  });

  describe("active option state", () => {
    it("keeps the selected option active after automatic filtering", async () => {
      component = await render(Default);
      const input = component.getByRole("combobox");

      await fireEvent.focus(input);
      const option = component.getByRole("option", { name: "Basic Offer" });
      await fireEvent.mouseDown(option);
      await fireEvent.click(option);
      await waitFor(() => expect(input).toHaveValue("Basic Offer"));

      await fireEvent.focus(input);
      expect(getActiveOptionText()).toBe("Basic Offer");
      await fireEvent.keyDown(input, { key: "Enter" });

      expect(input).toHaveValue("Basic Offer");
    });

    it("does not retain an out-of-range active descendant", async () => {
      component = await render(Default);
      const input = component.getByRole("combobox");

      await fireEvent.focus(input);
      const option = component.getByRole("option", {
        name: "Basic Offer 3",
      });
      await fireEvent.mouseDown(option);
      await fireEvent.click(option);
      await waitFor(() => expect(input).toHaveValue("Basic Offer 3"));

      await fireEvent.focus(input);
      const activeId = input.getAttribute("aria-activedescendant");
      expect(activeId).toBeTruthy();
      await fireEvent.keyDown(input, { key: "Enter" });

      expect(component.container.querySelector(`#${activeId}`)).toBeTruthy();
      expect(input).toHaveValue("Basic Offer 3");
    });

    it("clears removed manual suggestions and stale previews", async () => {
      component = await render(ActiveOptions);
      const input = component.getByRole("combobox");

      await fireEvent.focus(input);
      await fireEvent.keyDown(input, { key: "ArrowDown" });
      expect(getActiveOptionText()).toBe("First");

      await fireEvent.click(
        component.getByRole("button", { name: "Remove active suggestion" }),
      );

      expect(input).not.toHaveAttribute("aria-activedescendant");
      expect(input).toHaveValue("");
      await fireEvent.keyDown(input, { key: "Enter" });
      expect(input).toHaveValue("");
    });

    it("follows an active suggestion when application options reorder", async () => {
      component = await render(ActiveOptions);
      const input = component.getByRole("combobox");

      await fireEvent.focus(input);
      await fireEvent.keyDown(input, { key: "ArrowDown" });
      expect(getActiveOptionText()).toBe("First");

      await fireEvent.click(
        component.getByRole("button", {
          name: "Restore and reorder suggestions",
        }),
      );

      expect(getActiveOptionText()).toBe("First");
      await fireEvent.keyDown(input, { key: "Enter" });
      expect(input).toHaveValue("First");
    });

    it("does not resurrect an active suggestion after it disappears", async () => {
      component = await render(ActiveOptions);
      const input = component.getByRole("combobox");

      await fireEvent.focus(input);
      await fireEvent.keyDown(input, { key: "ArrowDown" });
      expect(getActiveOptionText()).toBe("First");

      await fireEvent.click(
        component.getByRole("button", { name: "Remove active suggestion" }),
      );
      await waitFor(() => {
        expect(input).not.toHaveAttribute("aria-activedescendant");
        expect(input).toHaveValue("");
      });

      await fireEvent.click(
        component.getByRole("button", {
          name: "Restore and reorder suggestions",
        }),
      );
      await waitFor(() => {
        expect(input).not.toHaveAttribute("aria-activedescendant");
        expect(input).toHaveValue("");
        expect(
          component.container.querySelector(".combobox__option--active"),
        ).toBeNull();
      });

      await fireEvent.keyDown(input, { key: "ArrowDown" });
      expect(getActiveOptionText()).toBe("Third");
    });
  });
});
