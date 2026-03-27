import React from "react";
import { action } from "storybook/actions";
import { Meta } from "@storybook/react-vite";
import { EbayIconConfirmation16 } from "../../ebay-icon/icons/ebay-icon-confirmation-16";
import { EbayIconAttention16 } from "../../ebay-icon/icons/ebay-icon-attention-16";
import { EbayTab, EbayTabPanel, EbayTabs } from "../../ebay-tabs";
import { EbayMenu, EbayMenuItem as Item, EbayMenuSeparator as Separator } from "../index";

const story = {
    component: EbayMenu,
    title: "building blocks/ebay-menu",

    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: `## Usage

### Import

\`\`\`jsx harmony
import { EbayMenu, EbayMenuItem as Item } from "@ebay/ui-core-react/ebay-menu";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/badge";
import "@ebay/skin/icon";
import "@ebay/skin/menu";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/badge.css";
@import "@ebay/skin/icon.css";
@import "@ebay/skin/menu.css";
\`\`\`

### Basic

\`\`\`jsx
<EbayMenu>
    <Item>Item 1</Item>
    <Item>Item 2</Item>
    <Item>Item 3</Item>
</EbayMenu>
\`\`\``,
            },
        },
    },
    argTypes: {
        type: { description: "Can be `radio`/`checkbox`", options: ["radio", "checkbox"], control: { type: "select" } },
        checked: {
            description: "when used with `radio` type will check the item with the corresponding index",
            control: "number",
        },
        baseEl: {
            description: "Container can be `span` (default) or `div`",
            options: ["span", "div"],
            control: { type: "select" },
        },
        onKeyDown: {
            description: "props: (e: event, { index: number, checked: number[], checkedValues?: string[] })",
            action: "onKeyDown",
            table: { category: "Events" },
        },
        onSelect: {
            description:
                "props: (e: event, { index: number }), triggered on item clicked (not for type `radio`/`checkbox`)",
            action: "onSelect",
            table: { category: "Events" },
        },
        onChange: {
            description:
                "props: (e: event, { index: number, checked: number[], checkedValues: string[]), triggered on item `checked` change, (for type `radio`/`checkbox` only)",
            action: "onChange",
            table: { category: "Events" },
        },
        classPrefix: { description: "class prefix for the component, defaults to `menu`", control: "text" },
        reverse: {
            description:
                "reverse the menu item layout, so that the badge is on the left and the text on the right (default: false)",
            control: "boolean",
        },
        fixWidth: { description: "makes the menu width the same as its parent", control: "boolean" },
        fixed: {
            description:
                "Swap between `fixed` and `absolute` positioning strategy. Use `fixed` when dropdown is in contained in an overflow and needs to be visible as you scroll the screen.",
            control: "boolean",
        },
        value: {
            description: "for type `radio`, `checkbox`: the value to use with callbacks for `checkedValues[]`",
            options: ["radio", "checkbox", "checkedValues[]"],
            control: { type: "select" },
        },
        disabled: { description: "makes the menu item disabled", control: "boolean" },
        badgeNumber: { description: "used as the number to be placed in the badge", control: "number" },
        badgeAriaLabel: { control: "text" },
        priority: {
            description: "Menu priority style",
            options: ["primary", "secondary", "none"],
            control: { type: "select" },
        },
        autofocus: { description: "Auto-focus menu on mount", control: "boolean" },
    },
} satisfies Meta<typeof EbayMenu>;

export const Default = () => (
    <>
        <EbayMenu onClick={action("click")} onKeyDown={action("key down")}>
            <Item>Item 1 that has very long text</Item>
            <Item>Item 2</Item>
            <Item>Item 3</Item>
        </EbayMenu>
    </>
);

export const Radio = () => (
    <>
        <EbayTabs>
            <EbayTab>Menu.checked</EbayTab>
            <EbayTabPanel>
                <EbayMenu
                    type="radio"
                    checked={1}
                    onKeyDown={action("key down")}
                    // Test TS complier errors here:
                    onChange={(e, { index, checked }) => action("change")(e, { index, checked })}
                    onSelect={(e, { index, checked }) => action("select")(e, { index, checked })}
                >
                    <Item>item 0</Item>
                    <Item>Prechecked on menu level</Item>
                    <Item>item 2</Item>
                </EbayMenu>
            </EbayTabPanel>

            <EbayTab>Item.checked</EbayTab>
            <EbayTabPanel>
                <EbayMenu
                    type="radio"
                    onKeyDown={action("key down")}
                    onChange={action("change")}
                    onSelect={action("select")}
                >
                    <Item checked>Prechecked on item level</Item>
                    <Item>item 1</Item>
                    <Item>item 2</Item>
                </EbayMenu>
            </EbayTabPanel>

            <EbayTab>Menu.checked+Item.checked</EbayTab>
            <EbayTabPanel>
                <EbayMenu
                    type="radio"
                    checked={1}
                    onKeyDown={action("key down")}
                    onChange={action("change")}
                    onSelect={action("select")}
                >
                    <Item checked>Prechecked on item level</Item>
                    <Item>Prechecked on menu level</Item>
                    <Item>item 2</Item>
                </EbayMenu>
            </EbayTabPanel>
        </EbayTabs>
    </>
);

export const Checkbox = () => (
    <>
        <EbayMenu
            type="checkbox"
            onKeyDown={action("key down")}
            onChange={action("change")}
            onSelect={action("select")}
        >
            <Item value="item 1" checked>
                item 1
            </Item>
            <Item value="item 2">item 2</Item>
            <Item value="item 3" checked>
                item 3
            </Item>
        </EbayMenu>
    </>
);

export const WithSeparator = () => (
    <>
        <EbayMenu>
            <Item>item 1 that has very long text</Item>
            <Item>Item 2</Item>
            <Separator />
            <Item>Item 3</Item>
            <Item>Item 4</Item>
            <Item>Item 5</Item>
        </EbayMenu>
    </>
);

export const WithDisabledItem = () => (
    <>
        <EbayMenu>
            <Item>item 1 that has very long text</Item>
            <Item disabled>Item 2</Item>
            <Item>Item 3</Item>
        </EbayMenu>
    </>
);

export const WithBadges = () => (
    <>
        <EbayMenu>
            <Item badgeNumber={5} badgeAriaLabel="item 1 (5 unread items)">
                item 1
            </Item>
            <Item badgeNumber={23} aria-label="item 2 (23 unread items)">
                item 2
            </Item>
            <Item>item 3</Item>
        </EbayMenu>
    </>
);

export const WithIcons = () => (
    <>
        <EbayMenu>
            <Item>
                <EbayIconConfirmation16 style={{ marginRight: "8px" }} /> Confirmed
            </Item>
            <Item value="item 2">
                <EbayIconAttention16 style={{ marginRight: "8px" }} /> Not yet confirmed
            </Item>
            <Item value="item 3">
                <EbayIconAttention16 style={{ marginRight: "8px" }} /> Not yet confirmed
            </Item>
        </EbayMenu>
    </>
);

export const DivContainer = {
    render: () => (
        <>
            <EbayMenu baseEl="div">
                <Item>Item 1 that has very long text</Item>
                <Item>Item 2</Item>
                <Item>Item 3</Item>
            </EbayMenu>
        </>
    ),

    name: "Div container",
};

export default story;
