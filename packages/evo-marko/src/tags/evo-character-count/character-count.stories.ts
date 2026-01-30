import { buildExtensionTemplate } from "../../common/storybook/utils";
import Readme from "./README.md";
import Component from "./index.marko";
import IsolatedTemplate from "./examples/isolated.marko";
import IsolatedCode from "./examples/isolated.marko?raw";
import InFieldTemplate from "./examples/in-field.marko";
import InFieldCode from "./examples/in-field.marko?raw";
import CustomTextTemplate from "./examples/custom-text.marko";
import CustomTextCode from "./examples/custom-text.marko?raw";

export default {
  title: "building blocks/evo-character-count",
  component: Component,
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
      control: { type: "text" },
      description:
        "String to count characters from, or a number representing the current character count",
    },
    max: {
      type: { name: "number", required: true },
      control: { type: "number" },
      description:
        "Maximum number of characters allowed in the input, we allow users to go over this limit but `aria-live` should be set to `polite`.",
    },
    clippedText: {
      type: "string",
      control: { type: "text" },
      description:
        "With default body content, clipped text should be provided after the character count for screen readers to announce.",
    },
  },
};

export const Default = buildExtensionTemplate(IsolatedTemplate, IsolatedCode, {
  string: "Hello world",
  clippedText: "characters remaining",
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
