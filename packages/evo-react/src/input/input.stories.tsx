import type { Meta, StoryObj } from "@storybook/react-vite";
import { action } from "storybook/actions";
import { EvoIconClear24 } from "../icon/icons/clear-24";
import { EvoIconMail24 } from "../icon/icons/mail-24";
import { EvoIconProfile24 } from "../icon/icons/profile-24";
import { EvoInput } from "./input";
import "@ebay/skin/field.mjs";

const meta: Meta<typeof EvoInput> = {
  title: "form input/evo-input",
  component: EvoInput,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
A single-line text input with optional floating label and prefix or postfix content.

## Usage

\`\`\`tsx
import { EvoInput } from "@evo-web/react/input";
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    inputSize: {
      control: "select",
      options: ["regular", "large"],
      description: "Input size.",
    },
    fluid: {
      control: "boolean",
      description: "Makes the input fill its container.",
    },
    invalid: {
      control: "boolean",
      description: "Indicates a field-level error.",
    },
    floatingLabel: {
      control: "text",
      description: "Text displayed as a floating label.",
    },
    floatingLabelStatic: {
      control: "boolean",
      description: "Keeps the floating label raised.",
    },
    prefix: {
      control: false,
      description:
        "Optional content and icon displayed before the input. Native span attributes are applied to the content element.",
    },
    postfix: {
      control: false,
      description:
        "Optional content and icon displayed after the input. Supply buttonProps to make the icon actionable.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof EvoInput>;

export const Default: Story = {
  args: {
    "aria-label": "Example input",
  },
};

export const WithLabel: Story = {
  render: (args) => (
    <span className="field">
      <label className="field__label field__label--start" htmlFor="textbox">
        Email address
      </label>
      <EvoInput {...args} id="textbox" value="test" />
    </span>
  ),
};

export const Disabled: Story = {
  render: (args) => (
    <span className="field">
      <label
        className="field__label field__label--start field__label--disabled"
        htmlFor="disabled-textbox"
      >
        Email address
      </label>
      <EvoInput {...args} disabled id="disabled-textbox" value="test" />
    </span>
  ),
};

export const FloatingLabel: Story = {
  args: {
    floatingLabel: "Email address",
  },
};

export const FloatingLabelAutocomplete: Story = {
  render: (args) => (
    <>
      <EvoInput
        {...args}
        autoComplete="given-name"
        floatingLabel="First Name"
      />
      <EvoInput
        {...args}
        autoComplete="family-name"
        floatingLabel="Last Name"
      />
      <EvoInput
        {...args}
        autoComplete="email"
        floatingLabel="Email address"
        placeholder="valid email address"
      />
    </>
  ),
};

export const WithPrefixIcon: Story = {
  args: {
    "aria-label": "Email",
    placeholder: "email",
    prefix: {
      icon: <EvoIconMail24 />,
    },
  },
};

export const WithPostfixIcon: Story = {
  args: {
    "aria-label": "Name",
    placeholder: "name",
    postfix: {
      icon: <EvoIconProfile24 />,
    },
  },
};

export const WithBothIcons: Story = {
  args: {
    "aria-label": "Name",
    placeholder: "name",
    prefix: {
      icon: <EvoIconProfile24 />,
    },
    postfix: {
      icon: <EvoIconClear24 />,
      buttonProps: {
        a11yText: "Clear",
        onClick: action("clear"),
      },
    },
  },
};

export const FullyDecorated: Story = {
  args: {
    "aria-label": "Monthly price",
    placeholder: "0.00",
    prefix: {
      content: "$",
      icon: <EvoIconMail24 />,
    },
    postfix: {
      content: "/mo",
      icon: <EvoIconClear24 />,
    },
  },
};
