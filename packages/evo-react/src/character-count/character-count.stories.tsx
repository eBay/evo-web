import { useRef, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoCharacterCount } from "./character-count";
import { countCharacters } from "./count-characters";
import "@ebay/skin/field.mjs";
import "@ebay/skin/textbox.mjs";

const meta: Meta<typeof EvoCharacterCount> = {
  title: "building blocks/evo-character-count",
  component: EvoCharacterCount,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
Displays the number of grapheme characters in text relative to a maximum.

## Usage

\`\`\`tsx
import { EvoCharacterCount } from "@evo-web/react/character-count";
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    text: {
      control: "text",
    },
    count: {
      control: "number",
    },
    max: {
      control: "number",
    },
    a11yText: {
      type: { name: "string", required: true },
      control: "text",
    },
    inputRef: {
      control: false,
    },
    children: {
      control: false,
      description: "Custom content that replaces the default count display.",
    },
  },
  args: {
    text: "Hello world",
    max: 120,
    a11yText: "characters used",
  },
};

export default meta;
type Story = StoryObj<typeof EvoCharacterCount>;

export const Default: Story = {};

export const InField: Story = {
  args: {
    text: "",
    max: 120,
    a11yText: "characters remaining",
  },
  render: ({ text: initialText = "", max, a11yText }) => {
    const [text, setText] = useState(initialText);
    const inputRef = useRef<HTMLInputElement>(null);

    return (
      <span className="field">
        <label
          className="field__label field__label--stacked"
          htmlFor="character-count-input"
        >
          Field Label
        </label>
        <span className="field__control">
          <span className="textbox">
            <input
              ref={inputRef}
              value={text}
              type="text"
              aria-describedby="character-count-description character-count-value"
              className="textbox__control"
              id="character-count-input"
              onChange={(event) => setText(event.currentTarget.value)}
            />
          </span>
        </span>
        <div className="field__description field__description--group">
          <span id="character-count-description">Brief description</span>
          <EvoCharacterCount
            text={text}
            max={max}
            a11yText={a11yText}
            inputRef={inputRef}
            id="character-count-value"
          />
        </div>
      </span>
    );
  },
};

const customText = "Custom";
const customCount = countCharacters(customText);

export const CustomContent: Story = {
  args: {
    text: undefined,
    count: customCount,
    max: 120,
    children: `${customCount} of 120 (${120 - customCount} remaining)`,
  },
};
