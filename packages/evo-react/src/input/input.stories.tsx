import type { Meta, StoryObj } from "@storybook/react-vite";
import { action } from "storybook/actions";
import { EvoIconClear24 } from "../icon/icons/clear-24";
import { EvoIconInformation24 } from "../icon/icons/information-24";
import { EvoIconMoneyStack24 } from "../icon/icons/money-stack-24";
import { EvoIconMail24 } from "../icon/icons/mail-24";
import { EvoIconProfile24 } from "../icon/icons/profile-24";
import { EvoInput } from "./input";
import "@ebay/skin/field.mjs";

const meta: Meta<typeof EvoInput> = {
  title: "Form Input/EvoInput",
  component: EvoInput,

  argTypes: {
    inputSize: {
      control: "select",
      options: ["regular", "large"],
    },
    fluid: {
      control: "boolean",
    },
    invalid: {
      control: "boolean",
    },
    floatingLabel: {
      control: "text",
    },
    floatingLabelStatic: {
      control: "boolean",
    },
    prefix: {
      control: false,
    },
    postfix: {
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof EvoInput>;

/** A standard single-line input has an accessible name. */
export const Default: Story = {
  args: {
    "aria-label": "Search products",
    placeholder: "Search by keyword",
  },
};

/** A separate visible label names the input in its surrounding field. */
export const WithLabel: Story = {
  render: (args) => (
    <span className="field">
      <label className="field__label field__label--start" htmlFor="textbox">
        Email address
      </label>
      <EvoInput {...args} id="textbox" value="buyer@example.com" />
    </span>
  ),
};

/** A disabled input preserves its field context while preventing edits. */
export const Disabled: Story = {
  render: (args) => (
    <span className="field">
      <label
        className="field__label field__label--start field__label--disabled"
        htmlFor="disabled-textbox"
      >
        Email address
      </label>
      <EvoInput
        {...args}
        disabled
        id="disabled-textbox"
        value="seller@example.com"
      />
    </span>
  ),
};

/** A floating label provides the compact field treatment. */
export const FloatingLabel: Story = {
  args: {
    floatingLabel: "Email address",
  },
};

/** Floating labels can be combined with browser autocomplete semantics. */
export const FloatingLabelAutocomplete: Story = {
  render: (args) => (
    <>
      <EvoInput
        {...args}
        autoComplete="given-name"
        floatingLabel="First name"
      />
      <EvoInput
        {...args}
        autoComplete="family-name"
        floatingLabel="Last name"
      />
      <EvoInput
        {...args}
        autoComplete="email"
        floatingLabel="Email address"
        placeholder="name@example.com"
      />
    </>
  ),
};

/** A decorative icon appears before the value. */
export const WithPrefixIcon: Story = {
  args: {
    "aria-label": "Email address",
    placeholder: "name@example.com",
    prefix: {
      icon: <EvoIconMail24 />,
    },
  },
};

/** A decorative icon appears after the value. */
export const WithPostfixIcon: Story = {
  args: {
    "aria-label": "eBay username",
    placeholder: "Enter username",
    postfix: {
      icon: <EvoIconProfile24 />,
    },
  },
};

/** Leading context combines with an actionable postfix icon. */
export const WithBothIcons: Story = {
  args: {
    "aria-label": "Search sellers",
    placeholder: "Seller username",
    prefix: {
      icon: <EvoIconProfile24 />,
    },
    postfix: {
      icon: <EvoIconClear24 />,
      buttonProps: {
        a11yText: "Clear seller search",
        onClick: action("clear"),
      },
    },
  },
};

/** Text and icons on both sides format the value. */
export const FullyDecorated: Story = {
  args: {
    "aria-label": "Monthly payment",
    placeholder: "0.00",
    prefix: {
      content: "$",
      icon: <EvoIconMoneyStack24 />,
    },
    postfix: {
      content: "/mo",
      icon: <EvoIconInformation24 />,
    },
  },
};
