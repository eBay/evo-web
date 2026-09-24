import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoCheckbox } from "../checkbox";
import { EvoTriStateCheckbox } from "./tri-state-checkbox";
import "@ebay/skin/field.mjs";

const meta: Meta<typeof EvoTriStateCheckbox> = {
  title: "Form Input/EvoTriStateCheckbox",
  component: EvoTriStateCheckbox,
  argTypes: {
    checked: { control: "select", options: ["false", "mixed", "true"] },
    defaultChecked: {
      control: "select",
      options: ["false", "mixed", "true"],
    },
    size: { control: "select", options: ["regular", "large"] },
    values: { control: false },
    checkedValues: { control: false },
  },
  args: {
    defaultChecked: "false",
    size: "regular",
  },
};

export default meta;
type Story = StoryObj<typeof EvoTriStateCheckbox>;

/** Each activation moves through unchecked, mixed, and checked. */
export const Default: Story = {
  render: (args) => (
    <span className="field">
      <EvoTriStateCheckbox {...args} id="select-inventory" />
      <label
        className="field__label field__label--end"
        htmlFor="select-inventory"
      >
        Select inventory
      </label>
    </span>
  ),
};

/** The parent checkbox summarizes and updates a group of choices. */
export const WithGroup: Story = {
  render: (args) => {
    const items = ["Camera", "Lens", "Tripod"];

    function InventoryGroup() {
      const [selected, setSelected] = useState(["Camera"]);

      return (
        <fieldset>
          <legend>Inventory to include</legend>
          <span className="field">
            <EvoTriStateCheckbox
              {...args}
              id="select-all-inventory"
              values={items}
              checkedValues={selected}
              onCheckedValuesChange={setSelected}
            />
            <label
              className="field__label field__label--end"
              htmlFor="select-all-inventory"
            >
              Select all inventory
            </label>
          </span>
          {items.map((item) => (
            <span className="field" key={item}>
              <EvoCheckbox
                id={`inventory-${item.toLowerCase()}`}
                checked={selected.includes(item)}
                onChange={(event) => {
                  setSelected(
                    event.currentTarget.checked
                      ? [...selected, item]
                      : selected.filter((value) => value !== item),
                  );
                }}
              />
              <label
                className="field__label field__label--end"
                htmlFor={`inventory-${item.toLowerCase()}`}
              >
                {item}
              </label>
            </span>
          ))}
        </fieldset>
      );
    }

    return <InventoryGroup />;
  },
};
