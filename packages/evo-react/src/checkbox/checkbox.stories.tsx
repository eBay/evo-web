import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoCheckbox } from "./index";
import "@ebay/skin/field.mjs";

const meta: Meta<typeof EvoCheckbox> = {
  title: "form input/evo-checkbox",
  component: EvoCheckbox,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
A native checkbox control styled with eBay Skin.

## Usage

\`\`\`tsx
import { EvoCheckbox } from "@evo-web/react/checkbox";
\`\`\`
        `,
      },
    },
  },
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

export const Default: Story = {
  render: (args) => (
    <span className="field">
      <EvoCheckbox {...args} className="field__control" id="checkbox" />
      <label className="field__label field__label--end" htmlFor="checkbox">
        Option
      </label>
    </span>
  ),
};

export const Isolated: Story = {
  args: {
    "aria-label": "Option",
  },
};

export const Group: Story = {
  render: (args) => (
    <fieldset>
      <legend>Choose an option</legend>
      {[1, 2, 3].map((option) => {
        const id = `checkbox-${option}`;
        return (
          <span className="field" key={id}>
            <EvoCheckbox
              {...args}
              className="field__control"
              id={id}
              name="checkbox-group"
              value={option}
            />
            <label className="field__label field__label--end" htmlFor={id}>
              Option {option}
            </label>
          </span>
        );
      })}
    </fieldset>
  ),
};
