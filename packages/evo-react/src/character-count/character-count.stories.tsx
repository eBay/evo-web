import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoCharacterCount } from "./character-count";
import { countCharacters } from "./count-characters";

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
      description:
        "Text whose grapheme characters are counted. Required unless count is provided.",
    },
    count: {
      control: "number",
      description: "Manual count used instead of calculating from text.",
    },
    max: {
      control: "number",
      description: "Maximum number of characters allowed.",
    },
    a11yText: {
      type: { name: "string", required: true },
      control: "text",
      description:
        'Clipped text announced after the count. English default to be overridden is "characters used". Pass `null` explicitly only if alternative accessibility information is present.',
    },
    inputRef: {
      control: false,
      description:
        'Reference to the associated input or textarea. Its `aria-live` is set to "polite" when the count exceeds the maximum.',
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
