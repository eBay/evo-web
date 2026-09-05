var h=Object.defineProperty;var r=(a,n)=>h(a,"name",{value:n,configurable:!0});import{R as e}from"./iframe-D4Wzx8PH.js";import{E as m,a as t,b}from"./menu-item-separator-CYSUB8aI.js";import"./preload-helper-Cc2_yIPf.js";import"./badge-D_2ivD6P.js";import"./ebay-icon-tick-16-DEd2jfC_.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,v={component:m,title:"building blocks/ebay-fake-menu",tags:["autodocs"],parameters:{docs:{description:{component:`## Usage

### Import

\`\`\`jsx harmony
import { EbayFakeMenu, EbayFakeMenuItem as Item } from "@ebay/ui-core-react/ebay-fake-menu";
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
<EbayFakeMenu>
    <Item href="https://ebay.com">eBay US</Item>
    <Item href="https://ebay.com/uk">eBay UK</Item>
</EbayFakeMenu>
\`\`\``}}},argTypes:{itemMatchesUrl:{description:"used in conjunction with `current` -- This determines whether aria-current will be `page` or `true` -- Defaults to `true` which gives `aria-current` a value of `page`",control:"boolean"},onKeyDown:{description:"triggered on key down",action:"onKeyDown",table:{category:"Events",defaultValue:{summary:"`(KeyboardEvent"}}},onSelect:{description:"For using with keyboard navigation",action:"onSelect",table:{category:"Events",defaultValue:{summary:"`(KeyboardEvent"}}},href:{description:"Redirection link on click",control:"text"},type:{description:"Set to `button` to render menu-item as a button instead of a link",control:"text"},current:{description:"Whether or not the href is the current href of the page",control:"boolean"},badgeNumber:{description:"Used as a number to be placed inside the badge",control:"number"},badgeAriaLabel:{description:"Only if `badgeNumber` provided, passed as the `aria-label` directly to the badge",control:"number"},disabled:{description:"Whether the menu item is disabled",control:"boolean"}}},c=r(a=>e.createElement(e.Fragment,null,e.createElement(m,{...a,onClick:r(n=>{o("click")("MENU click event prevented"),n.preventDefault()},"onClick"),onKeyDown:r((n,d)=>o("onKeyDown")(n,d),"onKeyDown"),onSelect:r((n,d)=>{o("onSelect")(n,d),n.preventDefault()},"onSelect")},e.createElement(t,{href:"#",onClick:r(n=>{o("click")("ITEM click event prevented"),n.preventDefault()},"onClick")},"Item 1 that has very long text"),e.createElement(t,{href:"#",current:!0},"Current page"),e.createElement(t,{href:"#"},"Item 3"))),"Default"),i=r(a=>e.createElement(e.Fragment,null,e.createElement(m,{...a,itemMatchesUrl:!1,onClick:r(n=>{o("click")("MENU click event prevented"),n.preventDefault()},"onClick"),onKeyDown:o("key down"),onSelect:r(n=>{o("select")("event prevented"),n.preventDefault()},"onSelect")},e.createElement(t,{href:"#",onClick:r(n=>{o("click")("ITEM click event prevented"),n.preventDefault()},"onClick")},"Item 1 that has very long text"),e.createElement(t,{href:"#",current:!0},"Current page"),e.createElement(t,{href:"#"},"Item 3"))),"WithoutTickIcon"),s=r(a=>e.createElement(e.Fragment,null,e.createElement(m,{...a},e.createElement(t,{href:"#"},"item 1 that has very long text"),e.createElement(t,{href:"#"},"Item 2"),e.createElement(b,null),e.createElement(t,{href:"#"},"Item 3"),e.createElement(t,{href:"#"},"Item 4"),e.createElement(t,{href:"#"},"Item 5"))),"WithSeparator"),l=r(a=>e.createElement(e.Fragment,null,e.createElement(m,{...a},e.createElement(t,{href:"#"},"item 1 that has very long text"),e.createElement(t,null,"Item without href"),e.createElement(t,{disabled:!0},"Disabled Item"),e.createElement(t,{href:"#"},"Item 3"))),"WithDisabledItem"),u=r(a=>e.createElement(e.Fragment,null,e.createElement(m,{...a},e.createElement(t,{href:"#"},"Link 1"),e.createElement(t,{type:"button"},"Button"),e.createElement(t,{href:"#"},"Link 2"),e.createElement(t,{type:"button",disabled:!0},"Disabled Button"))),"MixedWithButtons"),p=r(a=>e.createElement(e.Fragment,null,e.createElement(m,{...a},e.createElement(t,{href:"",badgeNumber:5,badgeAriaLabel:"item 1 (5 unread items)"},"item 1"),e.createElement(t,{href:"",badgeNumber:23,"aria-label":"item 2 (23 unread items)"},"item 2"),e.createElement(t,{href:""},"item 3"))),"WithBadges");c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => <>
        <EbayFakeMenu {...args} onClick={event => {
    action("click")("MENU click event prevented");
    event.preventDefault();
  }} onKeyDown={(event, props) => action("onKeyDown")(event, props)} onSelect={(event, props) => {
    action("onSelect")(event, props);
    event.preventDefault();
  }}>
            <Item href="#" onClick={event => {
      action("click")("ITEM click event prevented");
      event.preventDefault();
    }}>
                Item 1 that has very long text
            </Item>
            <Item href="#" current>
                Current page
            </Item>
            <Item href="#">Item 3</Item>
        </EbayFakeMenu>
    </>`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => <>
        <EbayFakeMenu {...args} itemMatchesUrl={false} onClick={event => {
    action("click")("MENU click event prevented");
    event.preventDefault();
  }} onKeyDown={action("key down")} onSelect={event => {
    action("select")("event prevented");
    event.preventDefault();
  }}>
            <Item href="#" onClick={event => {
      action("click")("ITEM click event prevented");
      event.preventDefault();
    }}>
                Item 1 that has very long text
            </Item>
            <Item href="#" current>
                Current page
            </Item>
            <Item href="#">Item 3</Item>
        </EbayFakeMenu>
    </>`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => <>
        <EbayFakeMenu {...args}>
            <Item href="#">item 1 that has very long text</Item>
            <Item href="#">Item 2</Item>
            <Separator />
            <Item href="#">Item 3</Item>
            <Item href="#">Item 4</Item>
            <Item href="#">Item 5</Item>
        </EbayFakeMenu>
    </>`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => <>
        <EbayFakeMenu {...args}>
            <Item href="#">item 1 that has very long text</Item>
            <Item>Item without href</Item>
            <Item disabled>Disabled Item</Item>
            <Item href="#">Item 3</Item>
        </EbayFakeMenu>
    </>`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => <>
        <EbayFakeMenu {...args}>
            <Item href="#">Link 1</Item>
            <Item type="button">Button</Item>
            <Item href="#">Link 2</Item>
            <Item type="button" disabled>
                Disabled Button
            </Item>
        </EbayFakeMenu>
    </>`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => <>
        <EbayFakeMenu {...args}>
            <Item href="" badgeNumber={5} badgeAriaLabel="item 1 (5 unread items)">
                item 1
            </Item>
            <Item href="" badgeNumber={23} aria-label="item 2 (23 unread items)">
                item 2
            </Item>
            <Item href="">item 3</Item>
        </EbayFakeMenu>
    </>`,...p.parameters?.docs?.source}}};const M=["Default","WithoutTickIcon","WithSeparator","WithDisabledItem","MixedWithButtons","WithBadges"];export{c as Default,u as MixedWithButtons,p as WithBadges,l as WithDisabledItem,s as WithSeparator,i as WithoutTickIcon,M as __namedExportsOrder,v as default};
