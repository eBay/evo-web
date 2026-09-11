import { useRef, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoInput } from "../input";
import { EvoCharacterCount } from "./character-count";
import { countCharacters } from "./count-characters";
import "@ebay/skin/field.mjs";

const meta: Meta<typeof EvoCharacterCount> = {
  title: "Building Blocks/EvoCharacterCount",
  component: EvoCharacterCount,
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
    },
  },
  args: {
    text: "Vintage leather messenger bag",
    max: 80,
    a11yText: "characters used",
  },
};

export default meta;
type Story = StoryObj<typeof EvoCharacterCount>;

/** A calculated count compares text with a configured maximum. */
export const Default: Story = {};

/** The `inputRef` target receives `aria-live="polite"` when the count exceeds the maximum. */
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
          Item description
        </label>
        <span className="field__control">
          <EvoInput
            ref={inputRef}
            value={text}
            type="text"
            aria-describedby="character-count-description character-count-value"
            id="character-count-input"
            onChange={(event) => setText(event.currentTarget.value)}
          />
        </span>
        <div className="field__description field__description--group">
          <span id="character-count-description">
            Describe the condition, defects, and included accessories.
          </span>
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

const customText = "Refurbished headphones with charging case and USB-C cable";
const customCount = countCharacters(customText);

/** Custom content replaces the default count wording. */
export const CustomContent: Story = {
  args: {
    text: undefined,
    count: customCount,
    max: 120,
    children: `${customCount} of 120 (${120 - customCount} remaining)`,
  },
};
