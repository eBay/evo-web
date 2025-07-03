// TODO: Remove support for autoFocus on EbayTextbox
/* eslint-disable jsx-a11y/no-autofocus */
import React, { ChangeEvent, FC, useState, KeyboardEvent, MouseEvent } from "react";
import { action } from "storybook/actions";
import { EbayButton } from "../../ebay-button";
import {
    EbayTextbox,
    EbayTextboxPostfixIcon,
    EbayTextboxPostfixText,
    EbayTextboxPrefixIcon,
    EbayTextboxPrefixText,
} from "../index";

export default {
    title: "form input/ebay-textbox",
};

export const DefaultTextbox = {
    render: () => <EbayTextbox defaultValue="EbayTextbox" />,
    name: "Default textbox",
};

export const TestingCallbacks = {
    render: () => {
        const TestComponent: FC = () => {
            const ref = React.useRef(null);
            const [value, setValue] = useState("");

            const handleInputChange = (
                e: ChangeEvent<HTMLTextAreaElement & HTMLInputElement>,
                props: { value: string },
            ) => {
                action("onInputChange")(e, props);
                setValue(props.value);
            };
            const handleButtonClick = (
                e: KeyboardEvent & MouseEvent<HTMLTextAreaElement & HTMLInputElement>,
                props: { value: string },
            ) => {
                action("onButtonClick")(e, props);
                setValue("");
            };

            return (
                <form ref={ref}>
                    <p>
                        <EbayTextbox
                            value={value}
                            onChange={(e, props) => action("onChange")(e, props)}
                            onInputChange={(e, props) => handleInputChange(e, props)}
                            onFocus={(e, props) => action("onFocus")(e, props)}
                            onBlur={(e, props) => action("onBlur")(e, props)}
                            onKeyPress={(e, props) => action("onKeyPress")(e, props)}
                            onKeyUp={(e, props) => action("onKeyUp")(e, props)}
                            onKeyDown={(e, props) => action("onKeyDown")(e, props)}
                            onInvalid={(e, props) => action("onInvalid")(e, props)}
                            onButtonClick={(e, props) => handleButtonClick(e, props)}
                            required
                        >
                            <EbayTextboxPostfixIcon
                                name="clear16"
                                buttonAriaLabel="Clear"
                                style={{ opacity: value.length ? "1" : "0" }}
                            />
                        </EbayTextbox>
                    </p>
                    <p>
                        <EbayButton
                            onClick={(e) => {
                                e.preventDefault();
                                ref.current?.reportValidity();
                            }}
                        >
                            Check value presence
                        </EbayButton>
                    </p>
                </form>
            );
        };
        return (
            <>
                <TestComponent />
            </>
        );
    },

    name: "Testing callbacks",
};

export const DisabledTextbox = {
    render: () => (
        <>
            <EbayTextbox disabled />
        </>
    ),

    name: "Disabled textbox",
};

export const PlaceholderTextbox = {
    render: () => (
        <>
            <EbayTextbox placeholder="placeholder text" />
        </>
    ),

    name: "Placeholder textbox",
};

export const InvalidTextbox = {
    render: () => (
        <>
            <EbayTextbox invalid />
        </>
    ),

    name: "Invalid textbox",
};

export const FluidTextbox = {
    render: () => (
        <>
            <EbayTextbox fluid />
        </>
    ),

    name: "Fluid textbox",
};

export const PasswordTextbox = {
    render: () => (
        <>
            <EbayTextbox type="password" />
        </>
    ),

    name: "Password textbox",
};

export const MultilineTextbox = {
    render: () => (
        <>
            <EbayTextbox multiline defaultValue={"some default value\nnext line"} />
        </>
    ),

    name: "Multiline textbox",
};

export const MultilineInvalidTextbox = {
    render: () => (
        <>
            <EbayTextbox multiline invalid defaultValue="some default value" />
        </>
    ),

    name: "Multiline invalid textbox",
};

export const AutofocusedTextbox = {
    render: () => (
        <>
            <EbayTextbox autoFocus placeholder="Should focus here" />
        </>
    ),

    name: "Autofocused textbox",
};

export const LargeTextbox = {
    render: () => (
        <>
            <EbayTextbox placeholder="placeholder text" inputSize="large" />
        </>
    ),

    name: "Large textbox",
};

export const WithIcon = {
    render: () => (
        <div>
            <p>
                <EbayTextbox placeholder="email">
                    <EbayTextboxPrefixIcon name="mail16" />
                </EbayTextbox>
            </p>
            <p>
                <EbayTextbox placeholder="username">
                    <EbayTextboxPostfixIcon name="profile20" />
                </EbayTextbox>
            </p>
            <p>
                <EbayTextbox placeholder="search" onButtonClick={action("Clear!")}>
                    <EbayTextboxPrefixIcon name="search16" />
                    <EbayTextboxPostfixIcon name="clear16" buttonAriaLabel="Clear" />
                </EbayTextbox>
            </p>
        </div>
    ),

    name: "With icon",
};

export const WithPrePostfixText = {
    render: () => (
        <div>
            <p>
                <EbayTextbox placeholder="0.00">
                    <EbayTextboxPrefixText id="prefix">$</EbayTextboxPrefixText>
                </EbayTextbox>
            </p>
            <p>
                <EbayTextbox placeholder="0">
                    <EbayTextboxPostfixText id="postfix">in.</EbayTextboxPostfixText>
                </EbayTextbox>
            </p>
        </div>
    ),

    name: "With Pre/Post fix text",
};

export const ControlValueFromOutside = {
    render: () => {
        const Component = () => {
            const [value, setValue] = useState("");

            const handleOnChange = (e, props) => {
                setValue(props.value.substring(0, 10));
            };

            return <EbayTextbox onInputChange={handleOnChange} value={value} placeholder="Max 10 chars" />;
        };

        return (
            <>
                <Component />
            </>
        );
    },

    name: "Control value from outside",
};

export const RefForwarding = {
    render: () => {
        const ref = React.createRef<HTMLInputElement>();

        return (
            <>
                <EbayTextbox forwardedRef={ref} />
            </>
        );
    },

    name: "Ref forwarding",
};

export const FloatingLabel = {
    render: () => (
        <EbayTextbox
            floatingLabel="Floating label"
            onChange={action("onChange")}
            onInputChange={action("onInputChange")}
            onFloatingLabelInit={() => action("onFloatingLabelInit")()}
        />
    ),

    name: "Floating label",
};

export const FloatingLabelFluid = {
    render: () => (
        <EbayTextbox
            fluid
            floatingLabel="Floating label"
            onChange={action("onChange")}
            onInputChange={action("onInputChange")}
            onFloatingLabelInit={() => action("onFloatingLabelInit")()}
        />
    ),

    name: "Floating label fluid",
};

export const FloatingLabelTypeDate = {
    render: () => (
        <EbayTextbox
            type="date"
            floatingLabel="Floating label"
            onChange={action("onChange")}
            onInputChange={action("onInputChange")}
            onFloatingLabelInit={() => action("onFloatingLabelInit")()}
        />
    ),

    name: "Floating label type date",
};

export const FloatingLabelWithValue = {
    render: () => (
        <EbayTextbox onChange={action("textbox-changed")} floatingLabel="Floating label" defaultValue="Default value" />
    ),

    name: "Floating label with value",
};

export const FloatingLabelInvalid = {
    render: () => <EbayTextbox invalid onChange={action("textbox-changed")} floatingLabel="Invalid Floating label" />,

    name: "Floating label invalid",
};

export const FloatingLabelWithAutofocus = {
    render: () => (
        <>
            <p>
                <EbayTextbox floatingLabel="Regular field" />
            </p>
            <p>
                <EbayTextbox floatingLabel="Autofocused field" autoFocus onFocus={action("onFocus")} />
            </p>
        </>
    ),

    name: "Floating label with autofocus",
};

export const FloatingLabelWithPlaceholderControlled = {
    render: () => {
        const Component = () => {
            const [value, setValue] = useState("");

            const handleOnChange = (e, { value: newValue }) => {
                setValue(newValue.toLowerCase());
            };

            return (
                <>
                    <p>
                        <EbayTextbox
                            floatingLabel="Will convert to lowercase"
                            placeholder="Enter some UPPERCASE"
                            onChange={handleOnChange}
                            value={value}
                            size={30}
                        />
                    </p>
                    <p>
                        <EbayButton
                            onClick={() => {
                                setValue("changed text");
                            }}
                        >
                            Change text
                        </EbayButton>
                    </p>
                    <p>
                        <EbayButton
                            onClick={() => {
                                setValue("");
                            }}
                        >
                            Clear
                        </EbayButton>
                    </p>
                </>
            );
        };

        return (
            <>
                <Component />
            </>
        );
    },

    name: "Floating label with placeholder, controlled",
};

export const FloatingLabelWithMultiline = {
    render: () => <EbayTextbox onChange={action("textbox-changed")} floatingLabel="Floating label" multiline />,

    name: "Floating label with multiline",
};

export const FloatingLabelWithMultilineAndOpaqueLabel = {
    render: () => (
        <EbayTextbox onChange={action("textbox-changed")} floatingLabel="Floating label" multiline opaqueLabel />
    ),

    name: "Floating label with multiline and opaque label",
};
