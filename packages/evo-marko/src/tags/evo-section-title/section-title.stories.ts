import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import Readme from "./README.md";
import Component, { type Input } from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultCode from "./examples/default.marko?raw";
import WithCtaTemplate from "./examples/with-cta.marko";
import WithCtaCode from "./examples/with-cta.marko?raw";
import SaveSeeAllTemplate from "./examples/save-see-all.marko";
import SaveSeeAllCode from "./examples/save-see-all.marko?raw";
import OverflowTemplate from "./examples/overflow.marko";
import OverflowCode from "./examples/overflow.marko?raw";
import InfotipTemplate from "./examples/infotip.marko";
import InfotipCode from "./examples/infotip.marko?raw";

export default {
  title: "navigation & disclosure/evo-section-title",
  component: Component,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },
  argTypes: {
    cta: {
      description:
        "The call to action, rendered as an `<a>`. All attributes of [the native HTML `<a>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a) are passed through",
      "@": {},
    },
    title: {
      description:
        "The main title content, rendered in an `<h2>`. All attributes of [the native HTML `<h2>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements) are passed through",
      "@": {},
    },
    subtitle: {
      description: "The subtitle content to be displayed",
      "@": {},
    },
    info: {
      description: "Placeholder for the `<evo-infotip>` component",
      "@": {},
    },
    overflow: {
      description: "Placeholder for the `<evo-menu-button>` component",
      "@": {},
    },
    ["<div> attributes" as any]: {
      description:
        "All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through",
    },
  },
} satisfies Meta<Input>;

export const Default = buildExtensionTemplate(DefaultTemplate, DefaultCode);
export const WithCta = buildExtensionTemplate(WithCtaTemplate, WithCtaCode);
export const IconAndSeeAll = buildExtensionTemplate(
  SaveSeeAllTemplate,
  SaveSeeAllCode,
);
export const WithOverflow = buildExtensionTemplate(
  OverflowTemplate,
  OverflowCode,
);
export const WithInfotip = buildExtensionTemplate(InfotipTemplate, InfotipCode);
