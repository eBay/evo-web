import { buildExtensionTemplate } from "../../common/storybook/utils";
import { type Meta } from "@storybook/marko";
import avatar, { type Input } from "./index.marko";
import Readme from "./README.md";
import DefaultTemplate from "./examples/default.marko";
import DefaultTemplateCode from "./examples/default.marko?raw";
import imageTemplate from "./examples/image.marko";
import imageTemplateCode from "./examples/image.marko?raw";
import autoImageTemplate from "./examples/with-auto-placement.marko";
import autoImageTemplateCode from "./examples/with-auto-placement.marko?raw";
import signedOutTemplate from "./examples/signedout.marko";
import signedOutTemplateCode from "./examples/signedout.marko?raw";

export default {
  title: "graphics & icons/evo-avatar",
  component: avatar,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },

  argTypes: {
    content: {},
    color: {
      type: "string",
      options: [
        "teal",
        "light-teal",
        "green",
        "lime",
        "yellow",
        "orange",
        "magenta",
        "pink",
      ],
      control: "select",
      description:
        "The color to color the background. This can be only used in the non icon/image case. This is used simply as an override to the username hash",
    },
    size: {
      type: "string",
      options: ["32", "40", "48", "56", "64", "96", "128"],
      control: "select",
      description: "The pixel size of the avatar. Can only be specific sizes",
      table: { defaultValue: { summary: "48" } },
    },
    username: {
      type: "string",
      control: "text",
      description:
        "The username to display. If there is no body, then this will determine what the content is. If there is no username passed, then user is signed out. Based on the username, the icon will change colors and show the first letter if there is no user profile pic.",
    },
    a11yText: {
      type: { name: "string", required: true },
      control: "text",
      description:
        'The label to describe the users state as well as their user name. Usually in the format of "Signed in as Bob" or "Signed out". May be set to `null` only if accessibility is provided through other means.',
    },
    knownAspectRatio: {
      type: "number",
      control: "number",
      description:
        "Optional, as aspect ratio will be calculated when the image loads on the client. This can be passed to help prevent a flash of incorrectly styled content before the image loads",
    },
    image: {
      description:
        "An optional image. Should be passed alongside `knownAspectRatio`, but if not aspect ratio will be automatically adjusted after the image loads.",
      "@": {
        ["<img> attributes" as any]: {
          description:
            "All attributes and event handlers from [the native `<img>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img) will be passed through to `<@image>`, except `alt`",
        },
      },
    },
    ["<div> attributes" as any]: {
      description:
        "All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through, except `role`",
    },
  },
} satisfies Meta<Input>;

export const Default = buildExtensionTemplate(
  DefaultTemplate,
  DefaultTemplateCode,
  {
    a11yText: "Signed in - as Elizabeth",
    username: "Elizabeth",
    color: "teal",
  },
);

export const WithImage = buildExtensionTemplate(
  imageTemplate,
  imageTemplateCode,
  {
    a11yText: "Signed in - as Doggy",
    username: "Doggy",
  },
);

export const WithAutoPlacement = buildExtensionTemplate(
  autoImageTemplate,
  autoImageTemplateCode,
  {
    a11yText: "Signed in - as Doggy",
    username: "Doggy",
  },
);

export const SignedOut = buildExtensionTemplate(
  signedOutTemplate,
  signedOutTemplateCode,
  {
    a11yText: "Signed out",
  },
);
