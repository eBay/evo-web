import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import SegmentedButtons, { type Input } from "./index.marko";
import Readme from "./README.md";
import DefaultTemplate from "./examples/default.marko";
import DefaultTemplateCode from "./examples/default.marko?raw";
import WithIconsTemplate from "./examples/with-icons.marko";
import WithIconsTemplateCode from "./examples/with-icons.marko?raw";

export default {
  title: "buttons/evo-segmented-buttons",
  component: SegmentedButtons,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },
  argTypes: {
    selected: {
      controllable: true,
      control: "text",
      description: "Index of the selected button, or name if present",
      table: { type: { summary: "string | number" } },
    },
    button: {
      description: "A button in the segmented button",
      "@": {
        name: {
          type: "string",
          control: "string",
          description:
            "Name used to keep track of the `selected` button, use instead of index for more stability",
        },
        icon: {
          description: "Leading icon for this segment",
          "@": {},
        },
        ["<button> attributes" as any]: {
          description:
            "All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through",
        },
      },
    },
    size: {
      options: ["regular (default)", "large"],
      description: "Size override for the buttons.",
    },
    ["<div> attributes" as any]: {
      description:
        "All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through",
    },
  },
} satisfies Meta<Input<any>>;

export const Default = buildExtensionTemplate(
  DefaultTemplate,
  DefaultTemplateCode,
);

export const WithIcons = buildExtensionTemplate(
  WithIconsTemplate,
  WithIconsTemplateCode,
);
