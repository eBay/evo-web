import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoRadio } from "./index";
import "@ebay/skin/field.mjs";

const meta: Meta<typeof EvoRadio> = {
  title: "form input/evo-radio",
  component: EvoRadio,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
A native radio control styled with eBay Skin.

## Usage

\`\`\`tsx
import { EvoRadio } from "@evo-web/react/radio";
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
type Story = StoryObj<typeof EvoRadio>;

export const Default: Story = {
  render: (args) => (
    <span className="field">
      <EvoRadio {...args} className="field__control" id="radio" />
      <label className="field__label field__label--end" htmlFor="radio">
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
        const id = `radio-${option}`;
        return (
          <span className="field" key={id}>
            <EvoRadio
              {...args}
              className="field__control"
              id={id}
              name="radio-group"
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
