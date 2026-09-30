import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import Readme from "./README.md";
import Carousel, { type Input } from "./index.marko";
import ContinuousTemplate from "./examples/continuous.marko";
import ContinuousTemplateCode from "./examples/continuous.marko?raw";
import DiscreteTemplate from "./examples/discrete.marko";
import DiscreteTemplateCode from "./examples/discrete.marko?raw";
import ControlledTemplate from "./examples/controlled.marko";
import ControlledTemplateCode from "./examples/controlled.marko?raw";
import ImageTreatmentTemplate from "./examples/image-treatment.marko";
import ImageTreatmentTemplateCode from "./examples/image-treatment.marko?raw";
import AutoplayTemplate from "./examples/autoplay.marko";
import AutoplayTemplateCode from "./examples/autoplay.marko?raw";

export default {
  title: "navigation & disclosure/evo-carousel",
  component: Carousel,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },

  argTypes: {
    a11yText: {
      type: { name: "string", required: true },
      control: "text",
      description:
        "The accessible name for the carousel. Pass `null` explicitly _only_ if alternative accessibility information is present",
      table: { category: "accessibility attributes" },
    },
    itemsPerSlide: {
      type: "number",
      control: "number",
      description:
        "Makes the carousel discrete: this many items fill the view and each press moves by that many. A fraction sets how much of the next item peeks in; a whole number peeks a tenth of one unless `noPeek` is set. Leave unset for a continuous carousel where each item sizes itself",
    },
    noPeek: {
      type: "boolean",
      description:
        "With a whole `itemsPerSlide`, fill the view exactly instead of peeking a tenth of the next item",
      table: { defaultValue: { summary: "false" } },
    },
    gap: {
      control: "text",
      description:
        "Space between items, as a number of pixels or any CSS length",
      table: { defaultValue: { summary: "16px" } },
    },
    imageTreatment: {
      type: "string",
      options: ["none", "matte", "large"],
      control: "inline-radio",
      description:
        "Applies the image treatment styles, at the default or the large corner radius",
      table: { defaultValue: { summary: "none" } },
    },
    hiddenScrollbar: {
      type: "boolean",
      description: "Hide the scrollbar that otherwise shows on hover",
      table: { defaultValue: { summary: "false" } },
    },
    autoplay: {
      control: "number",
      description:
        "Advance on a timer of this many milliseconds (`true` for 4000), going back to the start after the last slide. Implies one item per slide unless `itemsPerSlide` says otherwise. Holds still while hovered or focused, and starts paused for users who prefer reduced motion",
    },
    paused: {
      controllable: true,
      type: "boolean",
      description: "Whether autoplay is paused",
      table: { defaultValue: { summary: "false" } },
    },
    index: {
      controllable: true,
      type: "number",
      control: "number",
      description:
        "Zero-based index of the item at the leading edge. A press reports where it is headed straight away; scrolling by hand reports once it comes to rest. Setting it scrolls there, to the start of the slide for a discrete carousel",
    },
    item: {
      description: "An item in the carousel",
      "@": {
        ["<li> attributes" as any]: {
          description:
            "All attributes and event handlers from [the native HTML `<li>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/li) will be passed through",
        },
      },
    },
    previous: {
      description: "The control that scrolls backwards",
      "@": {
        a11yText: {
          type: "string",
          description: "Accessible label for the previous control",
          table: { defaultValue: { summary: "Previous slide" } },
        },
        ["<button> attributes" as any]: {
          description:
            "All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through",
        },
      },
    },
    next: {
      description: "The control that scrolls forwards",
      "@": {
        a11yText: {
          type: "string",
          description: "Accessible label for the next control",
          table: { defaultValue: { summary: "Next slide" } },
        },
        ["<button> attributes" as any]: {
          description:
            "All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through",
        },
      },
    },
    playback: {
      description: "The control that pauses and plays autoplay",
      "@": {
        a11yPlayText: {
          type: "string",
          description: "Accessible label while paused",
          table: { defaultValue: { summary: "Play carousel" } },
        },
        a11yPauseText: {
          type: "string",
          description: "Accessible label while playing",
          table: { defaultValue: { summary: "Pause carousel" } },
        },
        ["<button> attributes" as any]: {
          description:
            "All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through",
        },
      },
    },
    "aria-roledescription": {
      description: "a11y role description for the carousel",
      table: {
        defaultValue: { summary: "carousel" },
        category: "accessibility attributes",
      },
      control: "text",
    },
    ["<div> attributes" as any]: {
      description:
        "All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through",
    },
  },
} satisfies Meta<Input>;

export const Continuous = buildExtensionTemplate(
  ContinuousTemplate,
  ContinuousTemplateCode,
);

export const Discrete = buildExtensionTemplate(
  DiscreteTemplate,
  DiscreteTemplateCode,
);

export const Controlled = buildExtensionTemplate(
  ControlledTemplate,
  ControlledTemplateCode,
);

export const ImageTreatment = buildExtensionTemplate(
  ImageTreatmentTemplate,
  ImageTreatmentTemplateCode,
);

export const Autoplay = buildExtensionTemplate(
  AutoplayTemplate,
  AutoplayTemplateCode,
);
