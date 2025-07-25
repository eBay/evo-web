/* eslint-disable jsx-a11y/no-autofocus */
import React, {
    cloneElement,
    ComponentProps,
    FC,
    Ref,
    ChangeEvent,
    FocusEvent,
    KeyboardEvent,
    MouseEvent,
    SyntheticEvent,
    useEffect,
    useState,
    LegacyRef,
} from "react";
import classNames from "classnames";
import { findComponent, withForwardRef } from "../common/component-utils";
import EbayTextboxPostfixIcon from "./postfix-icon";
import EbayTextboxPostfixText from "./postfix-text";
import EbayTextboxPrefixIcon from "./prefix-icon";
import EbayTextboxPrefixText from "./prefix-text";
import { useFloatingLabel } from "../common/floating-label-utils/hooks";
import {
    EbayChangeEventHandler,
    EbayEventHandler,
    EbayFocusEventHandler,
    EbayKeyboardEventHandler,
    EbayMouseEventHandler,
} from "../common/event-utils/types";
import type { Size } from "./types";

export const isControlled = (value?: unknown): boolean => typeof value !== "undefined";

type TextInputProps = ComponentProps<"input"> & ComponentProps<"textarea">;

export type TextboxEventProps = { value: string };
export type EbayTextboxProps = {
    fluid?: boolean;
    invalid?: boolean;
    multiline?: boolean;
    defaultValue?: string;
    inputSize?: Size;
    floatingLabel?: string;
    floatingLabelStatic?: boolean;
    onChange?: EbayChangeEventHandler<HTMLTextAreaElement & HTMLInputElement, TextboxEventProps>;
    onInputChange?: EbayChangeEventHandler<HTMLTextAreaElement & HTMLInputElement, TextboxEventProps>;
    onFocus?: EbayFocusEventHandler<HTMLTextAreaElement & HTMLInputElement, TextboxEventProps>;
    onBlur?: EbayFocusEventHandler<HTMLTextAreaElement & HTMLInputElement, TextboxEventProps>;
    onKeyPress?: EbayKeyboardEventHandler<HTMLTextAreaElement & HTMLInputElement, TextboxEventProps>;
    onKeyUp?: EbayKeyboardEventHandler<HTMLTextAreaElement & HTMLInputElement, TextboxEventProps>;
    onKeyDown?: EbayKeyboardEventHandler<HTMLTextAreaElement & HTMLInputElement, TextboxEventProps>;
    onInvalid?: EbayEventHandler<HTMLTextAreaElement & HTMLInputElement, TextboxEventProps>;
    onFloatingLabelInit?: () => void;
    onButtonClick?: EbayKeyboardEventHandler<HTMLInputElement, TextboxEventProps> &
        EbayMouseEventHandler<HTMLInputElement, TextboxEventProps>;
    forwardedRef?: Ref<HTMLTextAreaElement | HTMLInputElement>;
    opaqueLabel?: boolean;
} & Omit<TextInputProps, "onFocus" | "onBlur" | "onChange" | "onKeyPress" | "onKeyUp" | "onKeyDown" | "onInvalid">;

const EbayTextbox: FC<EbayTextboxProps> = ({
    type = "text",
    invalid,
    fluid,
    multiline,
    onChange = () => {},
    onInputChange = () => {},
    onFocus = () => {},
    onBlur = () => {},
    onKeyPress = () => {},
    onKeyUp = () => {},
    onKeyDown = () => {},
    onInvalid = () => {},
    onFloatingLabelInit = () => {},
    onButtonClick = () => {},
    autoFocus,
    defaultValue = "",
    value: controlledValue,
    forwardedRef,
    inputSize = "default",
    floatingLabel: floatingLabelText,
    floatingLabelStatic,
    children,
    placeholder,
    opaqueLabel,
    ...rest
}) => {
    const [value, setValue] = useState(defaultValue);
    const [inputValue, setInputValue] = useState(defaultValue);
    const floatingLabel = useFloatingLabel({
        text: floatingLabelText,
        disabled: rest.disabled,
        size: inputSize,
        invalid,
        opaqueLabel,
        static: floatingLabelStatic || type === "date",
        onMount: onFloatingLabelInit,
        containerTagName: fluid ? "div" : "span",
    });

    const handleFocus = (event?: FocusEvent<HTMLInputElement & HTMLTextAreaElement>) => {
        onFocus(event, { value: event?.target?.value || defaultValue });
    };

    const handleBlur = (event: FocusEvent<HTMLInputElement & HTMLTextAreaElement>) => {
        const newValue = event.target?.value;
        onBlur(event, { value: newValue });
        if (newValue !== value) {
            onChange(event, { value: newValue });
            setValue(newValue);
        }
    };

    const handleKeyPress = (event?: KeyboardEvent<HTMLInputElement & HTMLTextAreaElement>) => {
        const textbox = event.target as HTMLInputElement & HTMLTextAreaElement;
        onKeyPress(event, { value: textbox?.value });
    };
    const handleKeyUp = (event?: KeyboardEvent<HTMLInputElement & HTMLTextAreaElement>) => {
        const textbox = event.target as HTMLInputElement & HTMLTextAreaElement;
        onKeyUp(event, { value: textbox?.value });
    };
    const handleKeyDown = (event?: KeyboardEvent<HTMLInputElement & HTMLTextAreaElement>) => {
        const textbox = event.target as HTMLInputElement & HTMLTextAreaElement;
        onKeyDown(event, { value: textbox?.value });
    };

    const handleInvalid = (event?: SyntheticEvent<HTMLInputElement & HTMLTextAreaElement>) => {
        const textbox = event.target as HTMLInputElement & HTMLTextAreaElement;
        onInvalid(event, { value: textbox?.value });
    };

    const handleButtonClick = (event?: KeyboardEvent<HTMLInputElement> & MouseEvent<HTMLInputElement>) => {
        onButtonClick(event, { value });
    };

    useEffect(() => {
        if (autoFocus) {
            handleFocus();
        }
    }, []);

    const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement & HTMLInputElement>) => {
        const newValue = e.target?.value;

        if (!isControlled(controlledValue)) {
            setInputValue(newValue);
        }

        onInputChange(e, { value: newValue });
    };

    const Input = multiline ? "textarea" : "input";
    const Wrapper = fluid ? "div" : "span";

    const prefixIcon = findComponent(children, EbayTextboxPrefixIcon);
    const prefixText = findComponent(children, EbayTextboxPrefixText);
    const prefixId = prefixText?.props?.id;
    const postfixIcon = findComponent(children, EbayTextboxPostfixIcon);
    const postfixText = findComponent(children, EbayTextboxPostfixText);
    const postfixId = postfixText?.props?.id;

    const wrapperClassName = classNames("textbox", rest.className, {
        "textbox--fluid": fluid,
        "textbox--large": inputSize === "large",
        /** start remove after `:has` support */
        "textbox--disabled": rest.disabled,
        "textbox--invalid": invalid,
        "textbox--readonly": rest.readOnly,
        /** end remove after `:has` support */
    });

    return (
        <floatingLabel.Container>
            <floatingLabel.Label htmlFor={rest.id} />
            <Wrapper className={wrapperClassName}>
                {prefixIcon}
                {prefixText}
                <Input
                    aria-describedby={[prefixId, postfixId].filter(Boolean).join(" ") || undefined}
                    {...rest}
                    className="textbox__control"
                    type={type}
                    aria-invalid={invalid}
                    value={isControlled(controlledValue) ? controlledValue : inputValue}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    onKeyPress={handleKeyPress}
                    onKeyUp={handleKeyUp}
                    onKeyDown={handleKeyDown}
                    onInvalid={handleInvalid}
                    autoFocus={autoFocus}
                    ref={forwardedRef as LegacyRef<HTMLTextAreaElement> & LegacyRef<HTMLInputElement>}
                    placeholder={placeholder}
                />
                {postfixText}
                {postfixIcon &&
                    cloneElement(postfixIcon, {
                        ...postfixIcon.props,
                        onClick: (e) => {
                            const { onClick: iconClick = () => {} } = postfixIcon.props;
                            iconClick(e);
                            handleButtonClick(e);
                        },
                    })}
            </Wrapper>
        </floatingLabel.Container>
    );
};

export default withForwardRef<EbayTextboxProps>(EbayTextbox);
