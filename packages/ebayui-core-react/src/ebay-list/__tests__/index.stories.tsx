import React from "react";
import { Meta, StoryFn } from "@storybook/react-vite";
import { EbayList, EbayListItem } from "../index";
import EbayListItemLeading from "../list-item-leading";
import EbayListItemTrailing from "../list-item-trailing";
import { EbaySwitch } from "../../ebay-switch";
import { EbayIconFolder16 } from "../../ebay-icon/icons/ebay-icon-folder-16";
import { EbayIconLamp16 } from "../../ebay-icon/icons/ebay-icon-lamp-16";
import { EbayIconFile16 } from "../../ebay-icon/icons/ebay-icon-file-16";
import { EbayIconChevronRight16 } from "../../ebay-icon/icons/ebay-icon-chevron-right-16";
import { EbayIconLightbulb16 } from "../../ebay-icon/icons/ebay-icon-lightbulb-16";

const meta: Meta<typeof EbayList> = {
    component: EbayList,
    title: "building blocks/ebay-list",
    argTypes: {
        onButtonClick: {
            action: "onButtonClick",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ index }",
                },
            },
            description: "Triggered on item click when the item is rendered as a button",
        },

        className: { description: "Custom class name", control: "text" },
        style: { description: "Custom styles", control: "text" },
        as: {
            description: "The element to render the item as. Can be 'div', 'button', or 'a'. Default is 'div'.",
            control: "text",
        },
        separator: { description: "If true, will render the current item as a separator", control: "boolean" },
        children: { description: "Content to display in the leading section", control: "text" },
    },

    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: `A versatile list component for displaying items with optional leading and trailing content.

## Usage

### Import

\`\`\`jsx
import { EbayList, EbayListItem, EbayListItemLeading, EbayListItemTrailing } from "@ebay/ui-core-react/ebay-list";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/list";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/list.css";
\`\`\`

## Examples

### Basic List

### Basic

\`\`\`jsx
<EbayList>
    <EbayListItem>Item 1</EbayListItem>
    <EbayListItem>Item 2</EbayListItem>
    <EbayListItem>Item 3</EbayListItem>
</EbayList>
\`\`\`

### List with Leading and Trailing Content (Method 1 - Using Components)

\`\`\`jsx
<EbayList>
    <EbayListItem>
        <EbayListItemLeading>
            <EbayIconFolder16 />
        </EbayListItemLeading>
        Item 1
    </EbayListItem>
    <EbayListItem>
        <EbayListItemLeading>
            <EbayIconLamp16 />
        </EbayListItemLeading>
        Item 2
        <EbayListItemTrailing>
            <EbayIconChevronRight16 />
        </EbayListItemTrailing>
    </EbayListItem>
</EbayList>
\`\`\`

### Interactive List Items

\`\`\`jsx
<EbayList onButtonClick={(event, { index }) => console.log(\`Button \${index} clicked\`)}>
    <EbayListItem as="button">Clickable Button Item</EbayListItem>
    <EbayListItem as="a" href="https://www.ebay.com">
        Link Item
        <EbayListItemTrailing>
            <EbayIconChevronRight16 />
        </EbayListItemTrailing>
    </EbayListItem>
    <EbayListItem id="switch-item">
        Item with Switch
        <EbayListItemTrailing>
            <EbaySwitch aria-labelledby="switch-item" />
        </EbayListItemTrailing>
    </EbayListItem>
</EbayList>
\`\`\`

### List with Separators

\`\`\`jsx
<EbayList>
    <EbayListItem>Item 1</EbayListItem>
    <EbayListItem separator />
    <EbayListItem>Item 2</EbayListItem>
    <EbayListItem>Item 3</EbayListItem>
    <EbayListItem separator />
    <EbayListItem>Item 4</EbayListItem>
</EbayList>
\`\`\`

## Components

### EbayList

The main container component that wraps a list of EbayListItem components.

### EbayListItem

Individual list items that can be rendered as different elements (div, button, a) and can contain leading and trailing content.

### EbayListItemLeading

Component for adding leading content to a list item.

### EbayListItemTrailing

Component for adding trailing content to a list item.`,
            },
        },
    },
};

export default meta;

export const Static: StoryFn<typeof EbayList> = (args) => (
    <EbayList {...args}>
        <EbayListItem>
            <EbayListItemLeading>
                <EbayIconFolder16 />
            </EbayListItemLeading>
            Item 1
        </EbayListItem>
        <EbayListItem>
            <EbayListItemLeading>
                <EbayIconLamp16 />
            </EbayListItemLeading>
            Item 2
        </EbayListItem>
        <EbayListItem>
            <EbayListItemLeading>
                <EbayIconFile16 />
            </EbayListItemLeading>
            Item 3
        </EbayListItem>
    </EbayList>
);

export const Interactive: StoryFn<typeof EbayList> = (args) => (
    <EbayList {...args}>
        <EbayListItem as="button">Item 1</EbayListItem>
        <EbayListItem as="a" href="https://www.ebay.com">
            Item 2
            <EbayListItemTrailing>
                <EbayIconChevronRight16 />
            </EbayListItemTrailing>
        </EbayListItem>
        <EbayListItem id="switch-item">
            Item 3
            <EbayListItemTrailing>
                <EbaySwitch aria-labelledby="switch-item" />
            </EbayListItemTrailing>
        </EbayListItem>
    </EbayList>
);

export const WithSeparator: StoryFn<typeof EbayList> = (args) => (
    <EbayList {...args}>
        <EbayListItem>
            <EbayListItemLeading>
                <EbayIconFolder16 />
            </EbayListItemLeading>
            Item 1
        </EbayListItem>
        <EbayListItem separator />
        <EbayListItem>
            <EbayListItemLeading>
                <EbayIconLamp16 />
            </EbayListItemLeading>
            Item 2
        </EbayListItem>
        <EbayListItem>
            <EbayListItemLeading>
                <EbayIconFile16 />
            </EbayListItemLeading>
            Item 3
        </EbayListItem>
        <EbayListItem>
            <EbayListItemLeading>
                <EbayIconFile16 />
            </EbayListItemLeading>
            Item 4
        </EbayListItem>
        <EbayListItem separator />
        <EbayListItem>
            <EbayListItemLeading>
                <EbayIconLightbulb16 />
            </EbayListItemLeading>
            Item 5
        </EbayListItem>
    </EbayList>
);
