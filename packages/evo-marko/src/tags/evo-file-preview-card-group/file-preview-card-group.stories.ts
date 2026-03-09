import Readme from "./README.md";
import { type Meta } from "@storybook/marko";
import FilePreviewCardGroup, { type Input } from "./index.marko";
import { buildExtensionTemplate } from "../../common/storybook/utils";
import DefaultTemplate from "./examples/default.marko";
import DefaultTemplateCode from "./examples/default.marko?raw";
import ManyCardsTemplate from "./examples/manyCards.marko";
import ManyCardsTemplateCode from "./examples/manyCards.marko?raw";

export default {
  title: "media/evo-file-preview-card-group",
  component: FilePreviewCardGroup,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },
  argTypes: {
    card: {
      description:
        "A repeatable attribute tag for each file preview card. Takes the same attributes as file-preview-card",
      "@": {
        ["<evo-file-preview-card> attributes" as any]: {
          description:
            "All attributes and event handlers from [the `<evo-file-preview-card>` tag](?path=/docs/media-evo-file-preview-card--docs) will be passed through to `<@card>`",
        },
      },
    },
    seeMoreAction: {
      description:
        'An additional "See More" tag will be rendered if there are too many cards shown at once',
      "@": {
        ["<evo-icon-button> attributes" as any]: {
          description:
            "All attributes and event handlers from [the `<evo-icon-button>` tag](?path=/docs/buttons-evo-icon-button--docs) will be passed through to `<@seeMoreAction>`",
        },
      },
    },
    visibleCardCount: {
      controllable: true,
      type: "number",
      control: "number",
      description:
        'The number of cards visible before a "see more" card is shown as the last one',
      table: { defaultValue: { summary: "15" } },
    },
  },
} satisfies Meta<Input>;

export const Default = buildExtensionTemplate(
  DefaultTemplate,
  DefaultTemplateCode,
);

export const ManyCards = buildExtensionTemplate(
  ManyCardsTemplate,
  ManyCardsTemplateCode,
);
