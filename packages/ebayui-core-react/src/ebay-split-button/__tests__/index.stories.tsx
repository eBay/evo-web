import React, { useState } from "react";
import { Meta } from "@storybook/react-vite";
import { action } from "storybook/actions";
import { EbayIcon } from "../../ebay-icon";
import { EbayMenuButtonItem as Item, EbayMenuButtonSeparator as Separator } from "../../ebay-menu-button";
import { EbaySplitButton } from "../index";
import { Priority } from "../../ebay-button";

Item.displayName = "Item";
Item.toString = () => "Item";

export default {
    title: "buttons/ebay-split-button",
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
                    <EbayIcon name="confirmation16" style={{ marginRight: "8px" }} /> Confirmed
                </Item>
                <Item>
                    <EbayIcon name="attention16" style={{ marginRight: "8px" }} /> Not yet confirmed
                </Item>
                <Item>
                    <EbayIcon name="attention16" style={{ marginRight: "8px" }} /> Not yet confirmed
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
