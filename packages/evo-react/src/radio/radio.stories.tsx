import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoRadio } from "./index";
import "@ebay/skin/field.mjs";

const meta: Meta<typeof EvoRadio> = {
  title: "Form Input/EvoRadio",
  component: EvoRadio,

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
type Story = StoryObj<typeof EvoRadio>;

/** A visible label names the radio in a standard form. */
export const Default: Story = {
  render: (args) => (
    <span className="field">
      <EvoRadio {...args} className="field__control" id="standard-shipping" />
      <label
        className="field__label field__label--end"
        htmlFor="standard-shipping"
      >
        Standard shipping
      </label>
    </span>
  ),
};

/** An accessible name labels the radio without visible text. */
export const Isolated: Story = {
  args: {
    "aria-label": "Select standard shipping",
  },
};

/** A fieldset groups mutually exclusive choices under a shared legend and name. */
export const Group: Story = {
  render: (args) => (
    <fieldset>
      <legend>Choose a shipping service</legend>
      {[
        { id: "standard", label: "Standard shipping" },
        { id: "expedited", label: "Expedited shipping" },
        { id: "local-pickup", label: "Local pickup" },
      ].map(({ id, label }) => {
        return (
          <span className="field" key={id}>
            <EvoRadio
              {...args}
              className="field__control"
              id={id}
              name="radio-group"
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
