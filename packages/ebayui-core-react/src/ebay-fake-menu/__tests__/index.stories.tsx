import React from "react";
import { StoryFn, Meta } from "@storybook/react-vite";
import { action } from "storybook/actions";
import { EbayFakeMenu, EbayFakeMenuItem as Item, EbayFakeMenuSeparator as Separator } from "../index";

const meta: Meta<typeof EbayFakeMenu> = {
    component: EbayFakeMenu,
    title: "building blocks/ebay-fake-menu",
};

export default meta;

export const Default: StoryFn<typeof EbayFakeMenu> = () => (
    <>
        <EbayFakeMenu
            onClick={(event) => {
                action("click")("MENU click event prevented");
                event.preventDefault();
            }}
            onKeyDown={(event, props) => action("onKeyDown")(event, props)}
            onSelect={(event, props) => {
                action("onSelect")(event, props);
                event.preventDefault();
            }}
        >
            <Item
                href="#"
                onClick={(event) => {
                    action("click")("ITEM click event prevented");
                    event.preventDefault();
                }}
            >
                Item 1 that has very long text
            </Item>
            <Item href="#" current>
                Current page
            </Item>
            <Item href="#">Item 3</Item>
        </EbayFakeMenu>
    </>
);

export const WithoutTickIcon: StoryFn<typeof EbayFakeMenu> = () => (
    <>
        <EbayFakeMenu
            itemMatchesUrl={false}
            onClick={(event) => {
                action("click")("MENU click event prevented");
                event.preventDefault();
            }}
            onKeyDown={action("key down")}
            onSelect={(event) => {
                action("select")("event prevented");
                event.preventDefault();
            }}
        >
            <Item
                href="#"
                onClick={(event) => {
                    action("click")("ITEM click event prevented");
                    event.preventDefault();
                }}
            >
                Item 1 that has very long text
            </Item>
            <Item href="#" current>
                Current page
            </Item>
            <Item href="#">Item 3</Item>
        </EbayFakeMenu>
    </>
);

export const WithSeparator: StoryFn<typeof EbayFakeMenu> = () => (
    <>
        <EbayFakeMenu>
            <Item href="#">item 1 that has very long text</Item>
            <Item href="#">Item 2</Item>
            <Separator />
            <Item href="#">Item 3</Item>
            <Item href="#">Item 4</Item>
            <Item href="#">Item 5</Item>
        </EbayFakeMenu>
    </>
);

export const WithDisabledItem: StoryFn<typeof EbayFakeMenu> = () => (
    <>
        <EbayFakeMenu>
            <Item href="#">item 1 that has very long text</Item>
            <Item>Item without href</Item>
            <Item disabled>Disabled Item</Item>
            <Item href="#">Item 3</Item>
        </EbayFakeMenu>
    </>
);

export const MixedWithButtons: StoryFn<typeof EbayFakeMenu> = () => (
    <>
        <EbayFakeMenu>
            <Item href="#">Link 1</Item>
            <Item type="button">Button</Item>
            <Item href="#">Link 2</Item>
            <Item type="button" disabled>
                Disabled Button
            </Item>
        </EbayFakeMenu>
    </>
);

export const WithBadges: StoryFn<typeof EbayFakeMenu> = () => (
    <>
        <EbayFakeMenu>
            <Item href="" badgeNumber={5} badgeAriaLabel="item 1 (5 unread items)">
                item 1
            </Item>
            <Item href="" badgeNumber={23} aria-label="item 2 (23 unread items)">
                item 2
            </Item>
            <Item href="">item 3</Item>
        </EbayFakeMenu>
    </>
);
