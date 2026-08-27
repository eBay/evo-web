import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import Readme from "./README.md";
import CarouselAutoplay, { type Input } from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultTemplateCode from "./examples/default.marko?raw";
import ControllableTemplate from "./examples/controllable.marko";
import ControllableTemplateCode from "./examples/controllable.marko?raw";

export default {
  title: "navigation & disclosure/evo-carousel-autoplay",
  component: CarouselAutoplay,
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
    interval: {
      type: "number",
      control: "number",
      description:
        "How long each slide stays before the next one, in milliseconds",
      table: { defaultValue: { summary: "5000" } },
    },
    paused: {
      controllable: true,
      type: "boolean",
      description:
        "Whether the rotation is stopped. Toggled by the playback button, and set when the slides are swiped",
      table: { defaultValue: { summary: "false" } },
    },
    imageTreatment: {
      type: "string",
      options: ["none", "matte"],
      control: "inline-radio",
      description: "Applies the image treatment styles",
      table: { defaultValue: { summary: "none" } },
    },
    index: {
      controllable: true,
      type: "number",
      control: "number",
      description:
        "Zero-based index of the visible slide, reported once the scrolling comes to rest. Setting it scrolls to that slide",
    },
    item: {
      description:
        "A slide in the carousel. The looping runway repeats every slide, so content must not contain `id` attributes",
      "@": {
        ["<li> attributes" as any]: {
          description:
            "All attributes and event handlers from [the native HTML `<li>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/li) will be passed through",
        },
      },
    },
    previous: {
      description:
        "The control that moves to the previous slide (required). Pass `a11yText` for the accessible label",
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
        "The control that moves to the next slide (required). Pass `a11yText` for the accessible label",
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
    playback: {
      description:
        "The play/pause control (required). It needs a label for each state",
      "@": {
        a11yPlayText: {
          type: { name: "string", required: true },
          description:
            "Accessible label for the playback control while it is paused",
        },
        a11yPauseText: {
          type: { name: "string", required: true },
          description:
            "Accessible label for the playback control while it is playing",
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

export const Default = buildExtensionTemplate(
  DefaultTemplate,
  DefaultTemplateCode,
);

export const Controllable = buildExtensionTemplate(
  ControllableTemplate,
  ControllableTemplateCode,
);
