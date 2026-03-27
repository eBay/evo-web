import React from "react";
import { StoryObj, StoryFn, Meta } from "@storybook/react-vite";
import { action } from "storybook/actions";
import { EbayIconSettings16 } from "../../ebay-icon/icons/ebay-icon-settings-16";
import {
    EbayFakeMenuButton,
    EbayFakeMenuButtonItem as Item,
    EbayFakeMenuButtonSeparator as Separator,
    EbayFakeMenuButtonLabel,
} from "../index";

const meta: Meta<typeof EbayFakeMenuButton> = {
    component: EbayFakeMenuButton,
    title: "buttons/ebay-fake-menu-button",

    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: `## Usage

### Import

\`\`\`jsx harmony
import {
    EbayFakeMenuButton,
    EbayFakeMenuButtonItem as Item,
    EbayFakeMenuButtonSeparator as Separator,
    EbayFakeMenuButtonLabel as Label
} from "@ebay/ui-core-react/ebay-fake-menu-button";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/button";
import "@ebay/skin/icon";
import "@ebay/skin/menu";
import "@ebay/skin/menu-button";

// For variant=overflow
import "@ebay/skin/icon-button";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/button.css";
@import "@ebay/skin/icon.css";
@import "@ebay/skin/menu.css";
@import "@ebay/skin/menu-button.css";

/* For variant=overflow */
@import "@ebay/skin/icon-button.css";
\`\`\`

### Basic

\`\`\`jsx
<EbayFakeMenuButton text="Menu">
    <Item href="https://ebay.com">Home</Item>
    <Item href="https://ebay.com/my">My eBay</Item>
    <Separator />
    <Item>Log in</Item>
</EbayFakeMenuButton>
\`\`\``,
            },
        },
    },
    argTypes: {
        text: { description: "Button label text", control: "text" },
        a11yText: { description: "A11y text for the button", control: "text" },
        noToggleIcon: { description: "whether to hide the chevron toggle icon", control: "boolean" },
        expanded: { description: "whether content is expanded", control: "boolean" },
        type: { description: "Not yet implemented", control: "text" },
        variant: {
            description: "will change the button style: `overflow`, `form` or `button`",
            options: ["overflow", "form", "button"],
            control: { type: "select" },
        },
        priority: {
            description: "button priority, only used when `variant` is `button`",
            options: ["variant", "button"],
            control: { type: "select" },
        },
        reverse: { description: "expand menu flyout to the left", control: "boolean" },
        fixWidth: { description: "Constrain items container width to button width", control: "boolean" },
        borderless: { description: "Whether button has borders", control: "boolean" },
        size: {
            description: "button size: `small` or `large`",
            options: ["small", "large"],
            control: { type: "select" },
        },
        href: { description: "Creates a menu-item with a link", control: "text" },
        current: { description: "Whether or not the href is the current href of the page", control: "boolean" },
        value: { description: "Not yet implemented", control: "text" },
        checked: { description: "Not yet implemented", control: "boolean" },
        "badge-number": { description: "Not yet implemented", control: "number" },
        "badge-aria-label": { description: "Not yet implemented", control: "text" },
        onClick: {
            description: "For a non-link menu item, with param `{ originalEvent }`",
            action: "onClick",
            table: { category: "Events" },
        },
        onKeyDown: {
            description: "Triggered on key down",
            action: "onKeyDown",
            table: { category: "Events", defaultValue: { summary: "`(KeyboardEvent)`" } },
        },
        onMouseDown: {
            description: "Triggered on mouse down on menu item",
            action: "onMouseDown",
            table: { category: "Events", defaultValue: { summary: "`(MouseEvent, { index: number })`" } },
        },
        onCollapse: {
            description: "Triggered on menu collapse",
            action: "onCollapse",
            table: { category: "Events", defaultValue: { summary: "`()`" } },
        },
        onExpand: {
            description: "Triggered on menu expand",
            action: "onExpand",
            table: { category: "Events", defaultValue: { summary: "`()`" } },
        },
        onSelect: {
            description: "Not yet implemented",
            action: "onSelect",
            table: { category: "Events", defaultValue: { summary: "`(ChangeEvent, { index: number })`" } },
        },
        strategy: {
            description: "CSS positioning strategy for dropdown",
            options: ["absolute", "fixed"],
            control: { type: "select" },
        },
        icon: { description: "Icon element to render in the button", control: { type: "text" } },
    },
};

export default meta;

export const Default: StoryFn<typeof EbayFakeMenuButton> = () => (
    <>
        <EbayFakeMenuButton
            text="eBay Menu"
            onExpand={() => action("onExpand")()}
            onCollapse={() => action("onCollapse")()}
            onKeyDown={(e) => action("onKeyDown")(e)}
            onMouseDown={(e, props) => action("onMouseDown")(e, props)}
            onSelect={(e, props) => action("onSelect")(e, props)}
        >
            <Item href="http://ebay.com" onClick={(e) => e.preventDefault()}>
                eBay US
            </Item>
            <Item href="http://ebay.de" onClick={(e) => e.preventDefault()}>
                eBay DE
            </Item>
            <Item href="http://ebay.co.uk" onClick={(e) => e.preventDefault()}>
                eBay UK
            </Item>
        </EbayFakeMenuButton>
    </>
);

export const Expanded: StoryFn<typeof EbayFakeMenuButton> = () => (
    <>
        <EbayFakeMenuButton expanded text="eBay Menu">
            <Item href="http://ebay.com">item 1 that has very long text</Item>
            <Item href="http://ebay.de">item 2</Item>
            <Item href="http://ebay.co.uk">item 3</Item>
        </EbayFakeMenuButton>
    </>
);

export const Disabled: StoryFn<typeof EbayFakeMenuButton> = () => (
    <>
        <EbayFakeMenuButton text="eBay Menu" disabled>
            <Item href="http://ebay.com">item 1 that has very long text</Item>
            <Item href="http://ebay.com">item 2</Item>
            <Item href="http://ebay.com">item 3</Item>
        </EbayFakeMenuButton>
    </>
);

export const WithIcon: StoryFn<typeof EbayFakeMenuButton> = () => (
    <>
        <EbayFakeMenuButton text="Settings" icon={<EbayIconSettings16 />}>
            <Item href="http://ebay.com">item 1 that has very long text</Item>
            <Item href="http://ebay.com">item 2</Item>
            <Item href="http://ebay.com">item 3</Item>
        </EbayFakeMenuButton>
    </>
);

export const WithoutToggleIcon: StoryFn<typeof EbayFakeMenuButton> = () => (
    <>
        <EbayFakeMenuButton noToggleIcon text="Menu">
            <Item href="http://ebay.com">item 1 that has very long text</Item>
            <Item href="http://ebay.com">item 2</Item>
            <Item href="http://ebay.com">item 3</Item>
        </EbayFakeMenuButton>
    </>
);

export const Variants: StoryFn<typeof EbayFakeMenuButton> = () => (
    <>
        <h3>Button</h3>
        <EbayFakeMenuButton variant="button" text="Button" a11yText="Menu">
            <Item href="http://ebay.com">item 1</Item>
            <Item href="http://ebay.com">item 2</Item>
            <Item href="http://ebay.com">item 3</Item>
        </EbayFakeMenuButton>

        <h3>Form</h3>
        <EbayFakeMenuButton variant="form" text="Form" a11yText="Menu inside the form">
            <Item href="http://ebay.com">item 1</Item>
            <Item href="http://ebay.com">item 2</Item>
            <Item href="http://ebay.com">item 3</Item>
        </EbayFakeMenuButton>

        <h3>Overflow</h3>
        <EbayFakeMenuButton variant="overflow" a11yText="Menu">
            <Item href="http://ebay.com">item 1</Item>
            <Item href="http://ebay.com">item 2</Item>
            <Item href="http://ebay.com">item 3</Item>
        </EbayFakeMenuButton>
    </>
);

export const Priorities: StoryFn<typeof EbayFakeMenuButton> = () => (
    <>
        <EbayFakeMenuButton variant="button" priority="primary" text="Primary" a11yText="Menu">
            <Item href="http://ebay.com">item 1</Item>
            <Item href="http://ebay.com">item 2</Item>
            <Item href="http://ebay.com">item 3</Item>
        </EbayFakeMenuButton>
        <EbayFakeMenuButton variant="button" priority="tertiary" text="Tertiary" a11yText="Menu">
            <Item href="http://ebay.com">item 1</Item>
            <Item href="http://ebay.com">item 2</Item>
            <Item href="http://ebay.com">item 3</Item>
        </EbayFakeMenuButton>
    </>
);

export const Borderless: StoryFn<typeof EbayFakeMenuButton> = () => (
    <>
        <EbayFakeMenuButton text="eBay Menu without borders!" borderless>
            <Item href="http://ebay.com">item 1</Item>
            <Item href="http://ebay.com">item 2</Item>
            <Item href="http://ebay.com">item 3</Item>
        </EbayFakeMenuButton>
    </>
);

export const WithCustomLabel: StoryFn<typeof EbayFakeMenuButton> = () => (
    <>
        <EbayFakeMenuButton>
            <EbayFakeMenuButtonLabel>
                <span
                    style={{
                        background: "url(https://ir.ebaystatic.com/pictures/aw/pics/cmp/ds3/sprds3_21.png)",
                        display: "inline-block",
                        height: "20px",
                        marginRight: "8px",
                        verticalAlign: "middle",
                        width: "26px",
                    }}
                />{" "}
                Fun with flags!
            </EbayFakeMenuButtonLabel>
            <Item href="http://ebay.com">item 1</Item>
            <Item href="http://ebay.com">item 2</Item>
            <Item href="http://ebay.com">item 3</Item>
        </EbayFakeMenuButton>
    </>
);

export const WithSeparator: StoryFn<typeof EbayFakeMenuButton> = (args) => (
    <>
        <EbayFakeMenuButton
            {...args}
            text="Complex menu"
            onExpand={action("Menu expanded!")}
            onCollapse={action("Menu collapsed!")}
        >
            <Item href="http://ebay.com">Link 1</Item>
            <Item href="http://ebay.com" current>
                Current link
            </Item>
            <Separator />
            <Item disabled>Link 3 (disabled)</Item>
            <Item href="http://ebay.com">Link 4</Item>
            <Item href="http://ebay.com">Link 5</Item>
            <Separator />
            <Item href="http://ebay.com" onClick={action("Open login popup!")}>
                Log in
            </Item>
        </EbayFakeMenuButton>
    </>
);

export const FixedWidth: StoryFn<typeof EbayFakeMenuButton> = (args) => (
    <>
        <EbayFakeMenuButton {...args} text="Menu has a button width" fixWidth>
            <Item href="http://ebay.com">item 1 that has very very long text</Item>
            <Item href="http://ebay.com">item 2</Item>
            <Item href="http://ebay.com">item 3</Item>
        </EbayFakeMenuButton>
    </>
);

export const ReverseMenuGrowsToTheLeft: StoryObj<typeof EbayFakeMenuButton> = {
    render: () => (
        <div style={{ marginLeft: "100px" }}>
            <EbayFakeMenuButton text="Menu grows to the left" reverse>
                <Item href="http://ebay.com">item 1 that has very very long text</Item>
                <Item href="http://ebay.com">item 2</Item>
                <Item href="http://ebay.com">item 3</Item>
            </EbayFakeMenuButton>
        </div>
    ),

    name: "Reverse (Menu grows to the left)",
};
