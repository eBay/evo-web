import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import Readme from "./README.md";
import CharCount, { type Input } from "./index.marko";
import IsolatedTemplate from "./examples/isolated.marko";
import IsolatedCode from "./examples/isolated.marko?raw";
import InFieldTemplate from "./examples/in-field.marko";
import InFieldCode from "./examples/in-field.marko?raw";
import CustomTextTemplate from "./examples/custom-text.marko";
import CustomTextCode from "./examples/custom-text.marko?raw";

export default {
  title: "building blocks/evo-character-count",
  component: CharCount,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },

  argTypes: {
    string: {
      type: { name: "string", required: true },
      control: "text",
      description:
        "String to count characters from, or a number representing the current character count",
    },
    count: {
      type: "number",
      control: "number",
      description: "Manual count value, used to override string grapheme count",
    },
    max: {
      type: { name: "number", required: true },
      control: "number",
      description:
        "Maximum number of characters allowed in the input, we allow users to go over this limit but `aria-live` should be set to `polite`.",
    },
    a11yText: {
      type: "string",
      control: "text",
      description:
        'Clipped text for screen readers, announced after the character count. Often something like "characters remaining". May be set to `null` only if accessibility is provided through other means.',
    },
  },
} satisfies Meta<Input>;

export const Default = buildExtensionTemplate(IsolatedTemplate, IsolatedCode, {
  string: "Hello world",
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
