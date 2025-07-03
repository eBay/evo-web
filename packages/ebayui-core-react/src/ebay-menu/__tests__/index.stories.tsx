import React from "react";
import { action } from "storybook/actions";
import { Meta } from "@storybook/react-vite";
import { EbayIcon } from "../../ebay-icon";
import { EbayTab, EbayTabPanel, EbayTabs } from "../../ebay-tabs";
import { EbayMenu, EbayMenuItem as Item, EbayMenuSeparator as Separator } from "../index";

const story = {
    component: EbayMenu,
    title: "building blocks/ebay-menu",
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
                <EbayIcon name="confirmation16" style={{ marginRight: "8px" }} /> Confirmed
            </Item>
            <Item value="item 2">
                <EbayIcon name="attention16" style={{ marginRight: "8px" }} /> Not yet confirmed
            </Item>
            <Item value="item 3">
                <EbayIcon name="attention16" style={{ marginRight: "8px" }} /> Not yet confirmed
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
