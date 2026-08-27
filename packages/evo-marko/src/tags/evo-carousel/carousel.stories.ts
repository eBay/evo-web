import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import Readme from "./README.md";
import Carousel, { type Input } from "./index.marko";
import ContinuousTemplate from "./examples/continuous.marko";
import ContinuousTemplateCode from "./examples/continuous.marko?raw";
import SlidesTemplate from "./examples/slides.marko";
import SlidesTemplateCode from "./examples/slides.marko?raw";
import ControlledTemplate from "./examples/controlled.marko";
import ControlledTemplateCode from "./examples/controlled.marko?raw";
import ImageTreatmentTemplate from "./examples/image-treatment.marko";
import ImageTreatmentTemplateCode from "./examples/image-treatment.marko?raw";

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
        "Fit exactly this many items into the visible area, and move by that many when a control is pressed. Fractional values leave part of the next item showing. Leave unset to let each item size itself",
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
    scrollbar: {
      type: "boolean",
      description: "Show a thin scrollbar underneath the items while hovered",
      table: { defaultValue: { summary: "false" } },
    },
    mask: {
      type: "boolean",
      description: "Fade the trailing edge while there is more to scroll to",
      table: { defaultValue: { summary: "false" } },
    },
    index: {
      controllable: true,
      type: "number",
      control: "number",
      description:
        "Zero-based index of the item leading the visible area, reported once the scrolling comes to rest. Setting it scrolls that item to the start",
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
      description:
        "The control that scrolls backwards (required). Pass `a11yText` for the accessible label",
      "@": {
        a11yText: {
          type: { name: "string", required: true },
          description: "Accessible label for the previous control",
        },
        ["<button> attributes" as any]: {
          description:
            "All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through",
        },
      },
    },
    next: {
      description:
        "The control that scrolls forwards (required). Pass `a11yText` for the accessible label",
      "@": {
        a11yText: {
          type: { name: "string", required: true },
          description: "Accessible label for the next control",
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

export const Slides = buildExtensionTemplate(
  SlidesTemplate,
  SlidesTemplateCode,
);

export const Controlled = buildExtensionTemplate(
  ControlledTemplate,
  ControlledTemplateCode,
);

export const ImageTreatment = buildExtensionTemplate(
  ImageTreatmentTemplate,
  ImageTreatmentTemplateCode,
);
