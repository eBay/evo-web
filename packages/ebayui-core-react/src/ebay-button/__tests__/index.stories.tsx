import React from "react";
import { StoryFn, Meta } from "@storybook/react-vite";
import { action } from "storybook/actions";
import { EbayButton, EbayButtonCell } from "../index";
import EbayIcon from "../../ebay-icon/icon";

const meta: Meta<typeof EbayButton> = {
    component: EbayButton,
    title: "buttons/ebay-button",
};

export default meta;

export const Default: StoryFn<typeof EbayButton> = () => (
    <>
        <p>
            <EbayButton
                onClick={action("clicked")}
                onEscape={action("escape pressed")}
                onFocus={(e) => action("focus")(e)}
                onBlur={action("blur")}
                onKeyDown={action("key down")}
            >
                Hello, I am a button!
            </EbayButton>
        </p>
        <p>
            <EbayButton href="https://ebay.com">Hello, I am a link!</EbayButton>
        </p>
    </>
);

export const Size: StoryFn<typeof EbayButton> = () => (
    <>
        <p>
            <EbayButton size="large">Large Button</EbayButton>
        </p>
        <p>
            <EbayButton href="https://ebay.com" size="large">
                Large Link
            </EbayButton>
        </p>
        <p>
            <EbayButton>Default Size Button</EbayButton>
        </p>
        <p>
            <EbayButton href="https://ebay.com">Default Size Link</EbayButton>
        </p>
    </>
);

export const Priority: StoryFn<typeof EbayButton> = () => (
    <>
        <p>
            <EbayButton priority="primary">Primary Button</EbayButton>
        </p>
        <p>
            <EbayButton priority="primary" href="https://ebay.com">
                Primary Link
            </EbayButton>
        </p>
        <p>
            <EbayButton priority="secondary">Secondary Button</EbayButton>
        </p>
        <p>
            <EbayButton priority="secondary" href="https://ebay.com">
                Secondary Link
            </EbayButton>
        </p>
        <p>
            <EbayButton>Secondary Button (Default)</EbayButton>
        </p>
        <p>
            <EbayButton href="https://ebay.com">Secondary Link (Default)</EbayButton>
        </p>
        <p>
            <EbayButton priority="tertiary">Tertiary Button</EbayButton>
        </p>
        <p>
            <EbayButton priority="tertiary" href="https://ebay.com">
                Tertiary Link
            </EbayButton>
        </p>
        <p>
            <EbayButton priority="none">Base Button</EbayButton>
        </p>
    </>
);

export const DestructiveVariant: StoryFn<typeof EbayButton> = () => (
    <>
        <p>
            <EbayButton priority="primary" variant="destructive">
                Primary Button
            </EbayButton>
        </p>
        <p>
            <EbayButton priority="primary" variant="destructive" href="https://ebay.com">
                Primary Link
            </EbayButton>
        </p>
        <p>
            <EbayButton priority="secondary" variant="destructive">
                Secondary Button
            </EbayButton>
        </p>
        <p>
            <EbayButton priority="secondary" variant="destructive" href="https://ebay.com">
                Secondary Link
            </EbayButton>
        </p>
        <p>
            <EbayButton priority="tertiary" variant="destructive">
                Tertiary Button
            </EbayButton>
        </p>
        <p>
            <EbayButton priority="tertiary" variant="destructive" href="https://ebay.com">
                Tertiary Link
            </EbayButton>
        </p>
    </>
);

export const Fluid: StoryFn<typeof EbayButton> = () => (
    <>
        <p>
            <EbayButton priority="primary" fluid>
                Primary Button
            </EbayButton>
        </p>
        <p>
            <EbayButton fluid>Secondary Button</EbayButton>
        </p>
        <p>
            <EbayButton fluid href="https://www.ebay.com">
                Link
            </EbayButton>
        </p>
    </>
);

export const WithIcon: StoryFn<typeof EbayButton> = () => (
    <>
        <p>
            Form button:
            <br />
            <EbayButton aria-label="Menu button">
                <EbayIcon name="menu20" />
                <span>Button with icon</span>
            </EbayButton>
        </p>
        <p>
            Form fake-button (link):
            <br />
            <EbayButton href="#" variant="form" aria-label="Settings link">
                <EbayIcon name="settings16" />
                <span>Button with icon</span>
            </EbayButton>
        </p>
        <p>
            Delete button:
            <br />
            <EbayButton variant="destructive" aria-label="Destructive button">
                <EbayIcon name="delete16" />
                <span>Button with icon</span>
            </EbayButton>
        </p>
        <p>
            Expand button:
            <br />
            <EbayButton bodyState="expand" aria-label="Destructive button">
                <EbayIcon name="settings16" />
                <span>Expand button</span>
            </EbayButton>
        </p>
    </>
);

export const IconOnly: StoryFn<typeof EbayButton> = () => (
    <>
        <p>
            Form button:
            <br />
            <EbayButton variant="form" aria-label="Menu button">
                <EbayIcon name="menu20" />
            </EbayButton>
        </p>
        <p>
            Form fake-button (link):
            <br />
            <EbayButton href="#" variant="form" aria-label="Settings link">
                <EbayIcon name="settings16" />
            </EbayButton>
        </p>
        <p>
            Delete button:
            <br />
            <EbayButton variant="destructive" aria-label="Destructive button">
                <EbayIcon name="delete16" />
            </EbayButton>
        </p>
    </>
);

export const Transparent: StoryFn<typeof EbayButton> = () => (
    <div style={{ background: "rgba(66, 214, 205, 0.5)" }}>
        <p>
            <EbayButton>Default Button</EbayButton>
        </p>
        <p>
            <EbayButton transparent>Transparent Button</EbayButton>
        </p>
        <p>
            <EbayButton transparent priority="secondary" variant="destructive">
                Transparent Destructive Button
            </EbayButton>
        </p>
        <p>
            <EbayButton href="https://ebay.com" transparent>
                Transparent Link
            </EbayButton>
        </p>
    </div>
);

export const Disabled: StoryFn<typeof EbayButton> = () => (
    <>
        <p>
            <EbayButton priority="primary" disabled>
                Primary Button
            </EbayButton>
        </p>
        <p>
            <EbayButton disabled>Secondary Button</EbayButton>
        </p>
        <p>
            <EbayButton href="https://ebay.com" disabled>
                Link
            </EbayButton>
        </p>
    </>
);

export const PartiallyDisabledButton: StoryFn<typeof EbayButton> = () => (
    <EbayButton priority="primary" partiallyDisabled>
        Hello, I am a button!
    </EbayButton>
);

export const Truncated: StoryFn<typeof EbayButton> = () => (
    <div>
        <p>
            <EbayButton truncate style={{ maxWidth: "200px" }}>
                Hello, I am a button! this is a long text
            </EbayButton>
        </p>
        <p>
            <EbayButton size="large" truncate style={{ maxWidth: "200px" }}>
                Hello, I am a BIG button! this is a long text
            </EbayButton>
        </p>
        <p>
            <EbayButton href="https://ebay.com" truncate style={{ maxWidth: "200px" }}>
                Hello, I am a link! this is a long text
            </EbayButton>
        </p>
    </div>
);

export const FlexButton: StoryFn<typeof EbayButton> = () => (
    <EbayButton priority="primary" fluid>
        <EbayButtonCell style={{ justifyContent: "space-between" }}>
            <span>Select</span>
            <span style={{ display: "inline-flex" }}>
                <span>Any</span>
                <EbayIcon name="chevronDown12" />
            </span>
        </EbayButtonCell>
    </EbayButton>
);

export const LoadingButton: StoryFn<typeof EbayButton> = () => (
    <>
        <p>
            <EbayButton bodyState="loading" />
        </p>
        <p>
            <EbayButton priority="primary" bodyState="loading" />
        </p>
        <p>
            <EbayButton priority="tertiary" bodyState="loading" />
        </p>
        <p>
            <EbayButton variant="form" bodyState="loading" />
        </p>
        <p>
            <EbayButton variant="destructive" bodyState="loading" />
        </p>
    </>
);

export const ExpandButton: StoryFn<typeof EbayButton> = () => (
    <>
        <p>
            <EbayButton priority="primary" bodyState="expand">
                Primary expand button
            </EbayButton>{" "}
            <EbayButton priority="primary" bodyState="expand" aria-expanded="true">
                Expanded button
            </EbayButton>
        </p>
        <p>
            <EbayButton bodyState="expand">Expand button</EbayButton>
        </p>
        <p>
            <EbayButton priority="tertiary" bodyState="expand">
                Tertiary expand button
            </EbayButton>
        </p>
        <p>
            <EbayButton variant="form" bodyState="expand">
                Form expand button
            </EbayButton>{" "}
            <EbayButton variant="form" bodyState="expand" />{" "}
            <EbayButton variant="form" bodyState="expand" aria-expanded />
        </p>
        <p>
            <EbayButton priority="primary" bodyState="expand" borderless>
                Borderless expand button
            </EbayButton>
        </p>
    </>
);

export const SplitButton: StoryFn<typeof EbayButton> = () => (
    <>
        <p>
            <EbayButton priority="primary" split="start">
                Primary split start button
            </EbayButton>
            <EbayButton priority="primary" split="end">
                Primary split end button
            </EbayButton>
        </p>
        <p>
            <EbayButton split="start">Split start button</EbayButton>
            <EbayButton split="end">Split end button</EbayButton>
        </p>
        <p>
            <EbayButton priority="tertiary" split="start">
                Tertiary split start button
            </EbayButton>
            <EbayButton priority="tertiary" split="end">
                Tertiary split end button
            </EbayButton>
        </p>
        <p>
            <EbayButton priority="primary" split="start">
                Primary Split button
            </EbayButton>
            <EbayButton priority="primary" bodyState="expand" split="end" />
        </p>
        <p>
            <EbayButton split="start">Split button</EbayButton>
            <EbayButton bodyState="expand" split="end" />
        </p>
        <p>
            <EbayButton priority="tertiary" split="start">
                Tertiary split button
            </EbayButton>
            <EbayButton priority="tertiary" bodyState="expand" split="end" />
        </p>
    </>
);

export const FormButton: StoryFn<typeof EbayButton> = () => (
    <>
        <p>
            <EbayButton variant="form">Form button</EbayButton>
        </p>
    </>
);

export const BorderlessButton: StoryFn<typeof EbayButton> = () => (
    <>
        <p>
            <EbayButton borderless>Borderless button</EbayButton>
        </p>
    </>
);

export const FixedHeight: StoryFn<typeof EbayButton> = () => (
    <>
        <p>
            <EbayButton fixedHeight>Fixed height button</EbayButton>
        </p>
        <p>
            <EbayButton fixedHeight size="large">
                Fixed height large button
            </EbayButton>
        </p>
    </>
);
