import React, { useState } from "react";
import { Meta } from "@storybook/react-vite";
import { action } from "storybook/actions";
import { EbayMenuButtonItem as Item, EbayMenuButtonSeparator as Separator } from "../../ebay-menu-button";
import { EbaySplitButton } from "../index";
import { Priority } from "../../ebay-button";
import { EbayIconConfirmation16 } from "../../ebay-icon/icons/ebay-icon-confirmation-16";
import { EbayIconAttention16 } from "../../ebay-icon/icons/ebay-icon-attention-16";

Item.displayName = "Item";
Item.toString = () => "Item";

export default {
    title: "buttons/ebay-split-button",

    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: `## Usage

### Import

\`\`\`jsx harmony
import { EbaySplitButton } from "@ebay/ui-core-react/ebay-split-button";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/icon";
import "@ebay/skin/button";
import "@ebay/skin/menu-button";
import "@ebay/skin/split-button";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/icon.css";
@import "@ebay/skin/button.css";
@import "@ebay/skin/menu-button.css";
@import "@ebay/skin/split-button.css";
\`\`\`
### Icon button

### Basic

\`\`\`jsx harmony
<EbaySplitButton a11yMenuText="Show save options">
    Save document
    <Item>Save as...</Item>
    <Item>Export</Item>
</EbaySplitButton>
\`\`\``,
            },
        },
    },
};

export const Controls = {
    render: (args) => (
        <EbaySplitButton {...args}>
            Save document
            <Item>Save as...</Item>
            <Item>Export</Item>
        </EbaySplitButton>
    ),

    parameters: {
        component: EbaySplitButton,
        args: {
            priority: "secondary",
            a11yMenuText: "Show save options",
        },
        argTypes: {
            priority: {
                options: ["primary", "secondary", "tertiary", "none"] as Priority[],
                control: "select",
            },
            onClick: { action: "clicked" },
            onKeyDown: { action: "key down" },
            onEscape: { action: "Esc pressed" },
            onFocus: { action: "focused" },
            onBlur: { action: "blured" },
            onCollapse: { action: "collapsed" },
            onExpand: { action: "expanded" },
            onSelect: { action: "selected" },

            a11yMenuText: { description: "aria label for menu button part", control: "text" },
            href: { description: "url for link behaviour (switches to anchor tag)", control: "text" },
            size: {
                description: "button size: `small` or `large`",
                options: ["small", "large"],
                control: { type: "select" },
            },
            bodyState: {
                description:
                    "`loading` adds progress spinner, when user interacts with button, `reset` should be called to reset `aria-live` state, default is `none`",
                options: ["loading", "reset", "aria-live", "none"],
                control: { type: "select" },
            },
            a11yButtonLoadingText: {
                description: "`aria-label` for button when `bodyState` is `loading`",
                options: ["aria-label", "bodyState", "loading"],
                control: { type: "select" },
            },
            type: {
                description: "menu items type: `radio` or `checkbox`",
                options: ["radio", "checkbox"],
                control: { type: "select" },
            },
            borderless: { description: "shows button without border", control: "boolean" },
            fixedHeight: { description: "fixes the height based on size", control: "boolean" },
            fluid: { description: "takes the whole width of the parent element", control: "boolean" },
            transparent: { description: "for transparent background", control: "boolean" },
            truncate: { description: "truncates the button text with an ellipsis", control: "boolean" },
            variant: {
                description: "button variant: `standard` (default), `destructive`, `form`",
                options: ["standard", "destructive", "form"],
                control: { type: "select" },
            },
            disabled: { control: "boolean" },
            partiallyDisabled: { description: "sets `aria-disabled` but not `disabled` prop", control: "boolean" },
            onChange: {
                description:
                    "Arguments: (e: event, { index: number, checked: number[], checkedValues: string[] }) for type `radio`/`checkbox`",
                action: "onChange",
                table: { category: "Events" },
            },
        },
    } as Meta<typeof EbaySplitButton>,
};

export const Default = () => (
    <>
        <p>
            <EbaySplitButton
                priority="primary"
                a11yMenuText="Show save options"
                onClick={action("click")}
                // testing TS compilation here:
                onKeyDown={(e) => action("key down")(e)}
                onSelect={(e, { index, checked }) => action("select")(e, { index, checked })}
                onChange={(e, { index, checked }) => action("change")(e, { index, checked })}
                //
                onEscape={action("escape")}
                onFocus={action("focus")}
                onBlur={action("blur")}
                onCollapse={action("collapse")}
                onExpand={action("expand")}
            >
                Save document
                <Item>Save as...</Item>
                <Item>Export</Item>
            </EbaySplitButton>
        </p>
        <p>
            <EbaySplitButton a11yMenuText="Menu" onClick={action("clicked")}>
                Split Button Menu with Separator
                <Item>Item 1</Item>
                <Item>Item 2</Item>
                <Separator />
                <Item>Item 3</Item>
            </EbaySplitButton>
        </p>
        <p>
            <EbaySplitButton priority="tertiary" a11yMenuText="Expand" onClick={action("clicked")}>
                Tertiary button menu with icons
                <Item>
                    <EbayIconConfirmation16 style={{ marginRight: "8px" }} /> Confirmed
                </Item>
                <Item>
                    <EbayIconAttention16 style={{ marginRight: "8px" }} /> Not yet confirmed
                </Item>
                <Item>
                    <EbayIconAttention16 style={{ marginRight: "8px" }} /> Not yet confirmed
                </Item>
            </EbaySplitButton>
        </p>
    </>
);

export const Size = () => (
    <>
        <p>
            <EbaySplitButton
                priority="primary"
                size="large"
                type="checkbox"
                a11yMenuText="Show options"
                onClick={action("clicked")}
                onChange={action("change")}
            >
                Primary multi-select
                <Item>Item 1</Item>
                <Item checked>Item 2</Item>
                <Item>Item 3</Item>
                <Item checked>Item 4</Item>
            </EbaySplitButton>
        </p>
        <p>
            <EbaySplitButton
                size="large"
                type="radio"
                a11yMenuText="Menu"
                onClick={action("clicked")}
                onChange={action("change")}
            >
                Single-select
                <Item>Item 1</Item>
                <Item checked>Item 2</Item>
                <Item>Item 3</Item>
            </EbaySplitButton>
        </p>
        <p>
            <EbaySplitButton
                size="large"
                priority="tertiary"
                a11yMenuText="Expand"
                onClick={action("clicked")}
                onSelect={action("select")}
            >
                Tertiary
                <Item>Item 1</Item>
                <Item>Item 2</Item>
                <Item>Item 3</Item>
            </EbaySplitButton>
        </p>
    </>
);

export const Truncated = () => (
    <>
        <p>
            <EbaySplitButton
                priority="primary"
                style={{ maxWidth: "200px" }}
                truncate
                a11yMenuText="Show options"
                onClick={action("clicked")}
            >
                Primary Split Button with truncated text label
                <Item>Item 1</Item>
                <Item>Item 2</Item>
                <Item>Item 3</Item>
            </EbaySplitButton>
        </p>
        <p>
            <EbaySplitButton style={{ maxWidth: "200px" }} truncate a11yMenuText="Menu" onClick={action("clicked")}>
                Split Button with truncated text label
                <Item>Item 1</Item>
                <Item>Item 2</Item>
                <Item>Item 3</Item>
            </EbaySplitButton>
        </p>
    </>
);

export const Loading = (args) => {
    const [loading, setLoading] = useState(false);

    return (
        <>
            <p>
                <EbaySplitButton
                    bodyState={loading ? "loading" : "reset"}
                    a11yMenuText="Show options"
                    a11yButtonLoadingText="Stand by or stop loading by using menu"
                    onClick={() => setLoading(true)}
                    onSelect={(e, { index }) => {
                        const value = [true, false][index];
                        setLoading(value);
                    }}
                    {...args}
                >
                    Load
                    <Item disabled={loading}>Start loading</Item>
                    <Item disabled={!loading}>Stop loading</Item>
                </EbaySplitButton>
            </p>
        </>
    );
};

export const Transparent = () => (
    <div style={{ background: "lightcyan", padding: "1em" }}>
        <p>
            <EbaySplitButton transparent a11yMenuText="Show options" onClick={action("clicked")}>
                Transparent split button
                <Item>Item 1</Item>
                <Item>Item 2</Item>
                <Item>Item 3</Item>
            </EbaySplitButton>
        </p>
        <p>
            <EbaySplitButton priority="tertiary" transparent a11yMenuText="Show options" onClick={action("clicked")}>
                Transparent tertiary split button
                <Item>Item 1</Item>
                <Item>Item 2</Item>
                <Item>Item 3</Item>
            </EbaySplitButton>
        </p>
    </div>
);

export const Disabled = () => (
    <>
        <p>
            <EbaySplitButton disabled a11yMenuText="Show options" onClick={action("clicked")}>
                Disabled Split Button
            </EbaySplitButton>
        </p>
    </>
);
