import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import Readme from "./README.md";
import CharacterCount, { type Input } from "./index.marko";
import IsolatedTemplate from "./examples/isolated.marko";
import IsolatedCode from "./examples/isolated.marko?raw";
import InFieldTemplate from "./examples/in-field.marko";
import InFieldCode from "./examples/in-field.marko?raw";
import CustomTextTemplate from "./examples/custom-text.marko";
import CustomTextCode from "./examples/custom-text.marko?raw";

export default {
  title: "building blocks/evo-character-count",
  component: CharacterCount,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },

  argTypes: {
    text: {
      type: "string",
      control: "text",
      description:
        "Text whose grapheme characters are counted. Required unless count is provided.",
    },
    count: {
      type: "number",
      control: "number",
      description: "Manual count used instead of calculating from text.",
    },
    max: {
      type: { name: "number", required: true },
      control: "number",
      description:
        'Maximum number of characters allowed. The associated input receives `aria-live="polite"` when this value is exceeded.',
    },
    a11yText: {
      type: { name: "string", required: true },
      control: "text",
      description:
        'Clipped text announced after the count. Often something like "characters used". Pass `null` explicitly only if alternative accessibility information is present.',
    },
    inputRef: {
      control: false,
      description:
        "Native input or textarea getter whose aria-live attribute is managed by the character count.",
    },
  },
} satisfies Meta<Input>;

export const Default = buildExtensionTemplate(IsolatedTemplate, IsolatedCode, {
  text: "Hello world",
  a11yText: "characters remaining",
  max: 120,
});

export const InField = buildExtensionTemplate(InFieldTemplate, InFieldCode);

export const CustomText = buildExtensionTemplate(
  CustomTextTemplate,
  CustomTextCode,
  {
    max: 120,
  },
);
