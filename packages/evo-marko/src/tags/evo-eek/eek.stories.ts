import { tagToString } from "../../common/storybook/storybook-code-source";
import { type Meta } from "@storybook/marko";
import Readme from "./README.md";
import EEK, { type Input } from "./index.marko";
import example1 from "./examples/A+++.marko";
import example2 from "./examples/A++.marko";
import example3 from "./examples/A+.marko";
import example4 from "./examples/A.marko";
import example5 from "./examples/invalid.marko";
import example1Code from "./examples/A+++.marko?raw";
import example2Code from "./examples/A++.marko?raw";
import example3Code from "./examples/A+.marko?raw";
import example4Code from "./examples/A.marko?raw";
import example5Code from "./examples/invalid.marko?raw";
import type { StoryFn } from "@storybook/marko";

export default {
  title: "graphics & icons/evo-eek",
  component: EEK,
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
        "Localized, the aria-label accessibility label for the eek component. This is for internationalization. It should use min, max, and rating in the label in order to demonstrate to screen readers the content on the component. Expected value `Energy efficiency class ${rating}. ${min} - ${max}`. May be set to `null` only if accessibility is provided through other means.",
    },
    rating: {
      type: { name: "string", required: true },
      control: "text",
      description: "The energy rating",
    },
    max: {
      type: { name: "string", required: true },
      control: "text",
      description: "The maximum range",
    },
    min: {
      type: { name: "string", required: true },
      control: "text",
      description: "The minimum range",
    },
    size: {
      type: "string",
      options: ["regular (default)", "large"],
      control: "inline-radio",
      description: "The size of the EEK.",
    },
    ["<div> attributes" as any]: {
      description:
        "All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through",
    },
  },
} satisfies Meta<Input>;

export const Default: StoryFn<Input> = (args) => ({ input: args });
Default.args = {
  max: "A+++",
  min: "E",
  rating: "C",
};

Default.parameters = {
  docs: {
    source: {
      code: tagToString("evo-eek", Default.args),
    },
  },
};

export const exampleOne = () => ({
  component: example1,
  name: "A+++",
});
exampleOne.storyName = "A+++";
exampleOne.parameters = {
  controls: { hideNoControlsWarning: true },
  docs: {
    source: {
      code: example1Code,
    },
  },
};

export const exampleTwo = () => ({
  component: example2,
});
exampleTwo.storyName = "A++";
exampleTwo.parameters = {
  controls: { hideNoControlsWarning: true },
  docs: {
    source: {
      code: example2Code,
    },
  },
};

export const exampleThree = () => ({
  component: example3,
  name: "A+",
});
exampleThree.storyName = "A++";
exampleThree.parameters = {
  controls: { hideNoControlsWarning: true },
  docs: {
    source: {
      code: example3Code,
    },
  },
};

export const exampleFour = () => ({
  component: example4,
  name: "A",
});
exampleFour.storyName = "A";
exampleFour.parameters = {
  controls: { hideNoControlsWarning: true },
  docs: {
    source: {
      code: example4Code,
    },
  },
};

export const invalidCombinations = () => ({
  component: example5,
});
invalidCombinations.parameters = {
  controls: { hideNoControlsWarning: true },
  docs: {
    source: {
      code: example5Code,
    },
  },
};
