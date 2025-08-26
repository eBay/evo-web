import { Story } from "@storybook/marko";
import Readme from "./README.md";
import component, { type Input } from "./index.marko";
import { buildExtensionTemplate } from "../../common/storybook/utils";
import DefaultTemplate from "./examples/default.marko";
import DefaultTemplateCode from "./examples/default.marko?raw";
import ManyCardsTemplate from "./examples/manyCards.marko";
import ManyCardsTemplateCode from "./examples/manyCards.marko?raw";

export default {
  title: "media/evo-file-preview-card-group",
  component,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },
  argTypes: {
    card: {
      name: "@card",
      table: {
        category: "@attribute tags",
      },
      description:
        "A repeatable attribute tag for each file preview card. Takes the same attributes as file-preview-card",
    },
    seeMore: {
      name: "@seeMore",
      control: { type: "object" },
      description:
        "Attribute tag for seeMore, applied for all cards. This requires an aria-label and an onClick event which will attach to the icon-button. If not present a see more button won't render.",
    },
  },
};

export const Default = buildExtensionTemplate(
  DefaultTemplate,
  DefaultTemplateCode,
);

export const ManyCards = buildExtensionTemplate(
  ManyCardsTemplate,
  ManyCardsTemplateCode,
);
