import React, { useState } from "react";
import { action } from "storybook/actions";
import { EbayIcon } from "../../ebay-icon";
import {
    EbayMenuButton,
    EbayMenuButtonItem as Item,
    EbayMenuButtonSeparator as Separator,
    EbayMenuButtonLabel,
} from "../index";

export default {
    title: "buttons/ebay-menu-button",
};

export const Default = () => (
    <>
        <EbayMenuButton
            text="eBay Menu"
            onKeyDown={action("key down")}
            onClick={action("click button")}
            onSelect={(e, { index, checked }) => action("select")(e, { index, checked })}
            onExpand={action("expand")}
            onCollapse={action("collapse")}
        >
            <Item>item 1 that has very long text</Item>
            <Item>item 2</Item>
            <Item>item 3</Item>
        </EbayMenuButton>
    </>
);

export const Expanded = () => (
    <>
        <EbayMenuButton expanded text="eBay Menu">
            <Item>item 1 that has very long text</Item>
            <Item>item 2</Item>
            <Item>item 3</Item>
        </EbayMenuButton>
    </>
);

export const Disabled = () => (
    <>
        <EbayMenuButton text="eBay Menu" disabled>
            <Item>item 1 that has very long text</Item>
            <Item>item 2</Item>
            <Item>item 3</Item>
        </EbayMenuButton>
    </>
);

export const WithIcon = {
    render: () => (
        <>
            <EbayMenuButton text="Settings">
                <EbayIcon name="settings16" />
                <Item>item 1 that has very long text</Item>
                <Item>item 2</Item>
                <Item>item 3</Item>
            </EbayMenuButton>
        </>
    ),

    name: "With icon",
};

export const WithoutToggleIcon = {
    render: () => (
        <>
            <EbayMenuButton noToggleIcon text="Menu">
                <Item>item 1 that has very long text</Item>
                <Item>item 2</Item>
                <Item>item 3</Item>
            </EbayMenuButton>
        </>
    ),

    name: "Without toggle icon",
};

export const Variants = () => (
    <>
        <h3>Button</h3>
        <EbayMenuButton variant="button" text="Button" a11yText="Menu inside the form">
            <Item>item 1</Item>
            <Item>item 2</Item>
            <Item>item 3</Item>
        </EbayMenuButton>

        <h3>Form</h3>
        <EbayMenuButton variant="form" text="Form" a11yText="Menu inside the form">
            <Item>item 1</Item>
            <Item>item 2</Item>
            <Item>item 3</Item>
        </EbayMenuButton>

        <h3>Overflow</h3>
        <EbayMenuButton variant="overflow" a11yText="Menu">
            <Item>item 1</Item>
            <Item>item 2</Item>
            <Item>item 3</Item>
        </EbayMenuButton>
    </>
);

export const Priorities = () => (
    <>
        <EbayMenuButton priority="primary" text="Primary" a11y-text="Menu">
            <Item>item 1</Item>
            <Item>item 2</Item>
            <Item>item 3</Item>
        </EbayMenuButton>
        <EbayMenuButton priority="tertiary" text="Tertiary" a11y-text="Menu">
            <Item>item 1</Item>
            <Item>item 2</Item>
            <Item>item 3</Item>
        </EbayMenuButton>
    </>
);

export const Borderless = () => (
    <>
        <EbayMenuButton text="eBay Menu without borders!" borderless>
            <Item>item 1</Item>
            <Item>item 2</Item>
            <Item>item 3</Item>
        </EbayMenuButton>
    </>
);

export const WithCustomLabel = () => (
    <>
        <h2>Custom style label</h2>
        <EbayMenuButton>
            <EbayMenuButtonLabel>
                <span
                    style={{
                        background:
                            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='25' height='15' viewBox='0 0 5 3'%3E%3Cpath d='M0 0h5v3H0z'/%3E%3Cpath fill='%23D00' d='M0 1h5v2H0z'/%3E%3Cpath fill='%23FFCE00' d='M0 2h5v1H0z'/%3E%3C/svg%3E\") no-repeat 50% 50%",
                        display: "inline-block",
                        height: "20px",
                        marginRight: "8px",
                        verticalAlign: "middle",
                        width: "26px",
                    }}
                />
                Fun with flags!
            </EbayMenuButtonLabel>
            <Item>item 1</Item>
            <Item>item 2</Item>
            <Item>item 3</Item>
        </EbayMenuButton>

        <br />
        <br />

        <h2 id="external-label">External label</h2>
        <EbayMenuButton prefixId="external-label">
            <EbayMenuButtonLabel>Using external label for a11y</EbayMenuButtonLabel>
            <Item>item 1</Item>
            <Item>item 2</Item>
            <Item>item 3</Item>
        </EbayMenuButton>

        <br />
        <br />

        <h2>Prefix Label</h2>
        <EbayMenuButton prefixLabel="Prefix:">
            <EbayMenuButtonLabel>Label</EbayMenuButtonLabel>
            <Item>item 1</Item>
            <Item>item 2</Item>
            <Item>item 3</Item>
        </EbayMenuButton>

        <br />
        <br />

        <h2>No Label</h2>
        <EbayMenuButton split="end">
            <Item>item 1</Item>
            <Item>item 2</Item>
            <Item>item 3</Item>
        </EbayMenuButton>
    </>
);

export const WithSeparator = (args) => (
    <>
        <EbayMenuButton
            {...args}
            text="Complex menu"
            onExpand={action("Menu expanded!")}
            onCollapse={action("Menu collapsed!")}
        >
            <Item>item 1</Item>
            <Item>item 2</Item>
            <Separator />
            <Item>item 3</Item>
            <Item>item 4</Item>
            <Item>item 5</Item>
            <Separator />
            <Item onClick={action("Open login popup!")}>Log in</Item>
        </EbayMenuButton>
    </>
);

export const SingleSelectMenuButtonItemChecked = {
    render: (args) => (
        <>
            <EbayMenuButton {...args} text="Sort order" type="radio">
                <Item>Date</Item>
                <Item checked>Price</Item>
                <Item>Relevance</Item>
            </EbayMenuButton>
        </>
    ),

    name: "Single-Select Menu Button (item.checked)",
};

export const SingleSelectMenuButtonCollapseOnClick = {
    render: () => {
        const defaultSortIndex = 1;
        const sortItems = ["Date", "Price", "Relevance"];
        const [checkedSort, setCheckedSort] = useState(defaultSortIndex);

        return (
            <EbayMenuButton
                prefixLabel="Sort order:"
                text={sortItems[checkedSort]}
                type="radio"
                collapseOnSelect
                checked={defaultSortIndex}
                onChange={(e, { index }) => setCheckedSort(index)}
            >
                {sortItems.map((item, i) => (
                    <Item key={i}>{item}</Item>
                ))}
            </EbayMenuButton>
        );
    },

    name: "Single-Select Menu Button (collapse on click)",
};

export const SingleSelectMenuButtonMenuChecked = {
    render: (args) => {
        const defaultSortIndex = 2;
        const defaultTopicIndex = 1;
        const sortItems = ["Date", "Price", "Relevance"];
        const topicItems = ["Cars", "Phones", "Computers"];
        const [checkedSort, setCheckedSort] = useState(defaultSortIndex);
        const [checkedTopic, setCheckedTopic] = useState(defaultTopicIndex);

        return (
            <>
                <EbayMenuButton
                    {...args}
                    prefixLabel="Topic:"
                    text={topicItems[checkedTopic]}
                    type="radio"
                    checked={defaultTopicIndex}
                    onChange={(e, { index }) => setCheckedTopic(index)}
                >
                    {topicItems.map((item, i) => (
                        <Item key={i}>{item}</Item>
                    ))}
                </EbayMenuButton>
                &nbsp;
                <EbayMenuButton
                    prefixLabel="Sort order:"
                    text={sortItems[checkedSort]}
                    type="radio"
                    checked={defaultSortIndex}
                    onChange={(e, { index }) => setCheckedSort(index)}
                >
                    {sortItems.map((item, i) => (
                        <Item key={i}>{item}</Item>
                    ))}
                </EbayMenuButton>
            </>
        );
    },

    name: "Single-Select Menu Button (menu.checked)",
};

export const MultiSelectMenuButton = {
    render: (args) => (
        <>
            <EbayMenuButton {...args} text="Filter" type="checkbox">
                <Item checked>Snickers</Item>
                <Item>T-Shirts</Item>
                <Item checked>Pants</Item>
            </EbayMenuButton>
        </>
    ),

    name: "Multi-Select Menu Button",
};

export const FixedWidth = (args) => (
    <>
        <EbayMenuButton {...args} text="Menu has a button width" fixWidth>
            <Item>item 1 that has very long text</Item>
            <Item>item 2</Item>
            <Item>item 3</Item>
        </EbayMenuButton>
    </>
);

export const ReverseMenuGrowsToTheLeft = {
    render: (args) => (
        <div style={{ marginLeft: "100px" }}>
            <EbayMenuButton {...args} text="Menu grows to the left" reverse>
                <Item>item 1 that has very very long text</Item>
                <Item>item 2</Item>
                <Item>item 3</Item>
            </EbayMenuButton>
        </div>
    ),

    name: "Reverse (Menu grows to the left)",
};
