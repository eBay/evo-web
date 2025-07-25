import React from "react";
import { Meta, StoryFn } from "@storybook/react-vite";
import { EbayPhoneInput } from "../index";

const meta: Meta<typeof EbayPhoneInput> = {
    component: EbayPhoneInput,
    title: "form input/ebay-phone-input",
    argTypes: {
        countryCode: {
            description: "Initial country code (2-letter ISO country code)",
            control: { type: "text" },
            table: {
                defaultValue: {
                    summary: "US",
                },
            },
        },
        value: {
            description: "The phone number value",
            control: { type: "text" },
            table: {
                defaultValue: {
                    summary: "",
                },
            },
        },
        locale: {
            description: "Locale for country name localization",
            control: { type: "text" },
            table: {
                defaultValue: {
                    summary: "navigator.language",
                },
            },
        },
        floatingLabel: {
            description: "Floating label text",
            control: { type: "text" },
            table: {
                defaultValue: {
                    summary: "",
                },
            },
        },
        disabled: {
            description: "Whether the component is disabled",
            control: { type: "boolean" },
            table: {
                category: "Toggles",
                defaultValue: {
                    summary: "false",
                },
            },
        },
        readonly: {
            description: "Whether the component is read-only",
            control: { type: "boolean" },
            table: {
                category: "Toggles",
                defaultValue: {
                    summary: "false",
                },
            },
        },
        invalid: {
            description: "Whether the component is in invalid state",
            control: { type: "boolean" },
            table: {
                category: "Toggles",
                defaultValue: {
                    summary: "false",
                },
            },
        },
        onFocus: {
            action: "onFocus",
            description: "Triggered on focus",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "(event: FocusEvent, data: PhoneInputEvent)",
                },
            },
        },
        onBlur: {
            action: "onBlur",
            description: "Triggered on blur",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "(event: FocusEvent, data: PhoneInputEvent)",
                },
            },
        },
        onInputChange: {
            action: "onInputChange",
            description: "Triggered on input change",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "(event: ChangeEvent, data: PhoneInputEvent)",
                },
            },
        },
        onChange: {
            action: "onChange",
            description: "Triggered on change (country selection or phone input)",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "(event: ChangeEvent, data: PhoneInputEvent)",
                },
            },
        },
        onKeyDown: {
            action: "onKeyDown",
            description: "Triggered on key down",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "(event: KeyboardEvent, data: PhoneInputEvent)",
                },
            },
        },
        onKeyPress: {
            action: "onKeyPress",
            description: "Triggered on key press",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "(event: KeyboardEvent, data: PhoneInputEvent)",
                },
            },
        },
        onKeyUp: {
            action: "onKeyUp",
            description: "Triggered on key up",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "(event: KeyboardEvent, data: PhoneInputEvent)",
                },
            },
        },
        onExpand: {
            action: "onExpand",
            description: "Triggered when country dropdown expands",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "()",
                },
            },
        },
        onCollapse: {
            action: "onCollapse",
            description: "Triggered when country dropdown collapses",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "()",
                },
            },
        },
    },
};

export default meta;

export const Default: StoryFn<typeof EbayPhoneInput> = (args) => (
    <EbayPhoneInput {...args} countryCode="us" floatingLabel="Phone Number" />
);

export const WithValue: StoryFn<typeof EbayPhoneInput> = (args) => (
    <EbayPhoneInput {...args} countryCode="us" floatingLabel="Phone Number" value="5551234567" />
);

export const UKCountry: StoryFn<typeof EbayPhoneInput> = (args) => (
    <EbayPhoneInput {...args} countryCode="gb" floatingLabel="Phone Number" value="2071234567" />
);

export const Disabled: StoryFn<typeof EbayPhoneInput> = (args) => (
    <EbayPhoneInput {...args} countryCode="us" floatingLabel="Phone Number" value="5551234567" disabled />
);

export const ReadOnly: StoryFn<typeof EbayPhoneInput> = (args) => (
    <EbayPhoneInput {...args} countryCode="us" floatingLabel="Phone Number" value="5551234567" readonly />
);

export const Invalid: StoryFn<typeof EbayPhoneInput> = (args) => (
    <EbayPhoneInput {...args} countryCode="us" floatingLabel="Phone Number" value="invalid" invalid />
);

export const Localization: StoryFn<typeof EbayPhoneInput> = (args) => (
    <EbayPhoneInput {...args} countryCode="fr" locale="fr-FR" floatingLabel="Numéro de téléphone" />
);

export const Interactive: StoryFn<typeof EbayPhoneInput> = (args) => {
    const [value, setValue] = React.useState("");

    return (
        <div>
            <EbayPhoneInput
                {...args}
                countryCode="us"
                floatingLabel="Phone Number"
                value={value}
                onChange={(event, data) => {
                    setValue(data?.value || "");
                    args.onChange?.(event, data);
                }}
                onFocus={args.onFocus}
                onBlur={args.onBlur}
            />
            <div style={{ marginTop: "16px", fontSize: "14px" }}>
                <div>Value: {value}</div>
                <div>Formatted: {value}</div>
            </div>
        </div>
    );
};
