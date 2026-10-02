import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { EvoPhoneInput } from "./phone-input";

const meta: Meta<typeof EvoPhoneInput> = {
  title: "Form Input/EvoPhoneInput",
  component: EvoPhoneInput,
  argTypes: {
    size: { control: "select", options: ["regular", "large"] },
    locale: { control: "text" },
    countryCode: { control: "text" },
    open: { control: "boolean" },
    fluid: { control: "boolean" },
    disabled: { control: "boolean" },
    readOnly: { control: "boolean" },
    "aria-invalid": { control: "boolean" },
  },
  args: {
    defaultCountryCode: "US",
    floatingLabel: "Phone number",
    a11yCountryText: "Country calling code",
    locale: "en-US",
    name: "phone",
    countryName: "country",
  },
};

export default meta;
type Story = StoryObj<typeof EvoPhoneInput>;

/** Enter a phone number using a localized country selector and number mask. */
export const Default: Story = {};

/** The caller can store raw digits and the selected ISO country code. */
export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = useState("5551234567");
    const [countryCode, setCountryCode] = useState("US");
    return (
      <EvoPhoneInput
        {...args}
        defaultCountryCode={undefined}
        value={value}
        onValueChange={(phone) => setValue(phone.rawValue)}
        countryCode={countryCode}
        onCountryCodeChange={setCountryCode}
      />
    );
  },
};
