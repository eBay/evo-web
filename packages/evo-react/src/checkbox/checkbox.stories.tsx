import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoCheckbox } from "./index";
import "@ebay/skin/field.mjs";

const meta: Meta<typeof EvoCheckbox> = {
  title: "Form Input/EvoCheckbox",
  component: EvoCheckbox,
  argTypes: {
    size: {
      control: "select",
      options: ["large"],
    },
    checked: {
      control: "boolean",
    },
    defaultChecked: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    onChange: {
      action: "change",
      table: { category: "Events" },
    },
    onFocus: {
      action: "focus",
      table: { category: "Events" },
    },
    onKeyDown: {
      action: "keydown",
      table: { category: "Events" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof EvoCheckbox>;

/** A visible label names the checkbox in a standard form. */
export const Default: Story = {
  render: (args) => (
    <span className="field">
      <EvoCheckbox {...args} className="field__control" id="accept-offers" />
      <label className="field__label field__label--end" htmlFor="accept-offers">
        Accept offers
      </label>
    </span>
  ),
};

/** An accessible name labels the checkbox without visible text. */
export const Isolated: Story = {
  args: {
    "aria-label": "Save this search",
  },
};

/** A fieldset groups independent choices under a shared legend. */
export const Group: Story = {
  render: (args) => (
    <fieldset>
      <legend>Delivery options</legend>
      {[
        { id: "free-shipping", label: "Free shipping" },
        { id: "local-pickup", label: "Local pickup" },
        { id: "returns-accepted", label: "Returns accepted" },
      ].map(({ id, label }) => {
        return (
          <span className="field" key={id}>
            <EvoCheckbox
              {...args}
              className="field__control"
              id={id}
              name="checkbox-group"
              value={id}
            />
            <label className="field__label field__label--end" htmlFor={id}>
              {label}
            </label>
          </span>
        );
      })}
    </fieldset>
  ),
};
