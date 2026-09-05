import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-CK-NQdWx.js";import{n}from"./iframe-RezWaW69.js";import{i as r,n as i,s as a,t as o}from"./ebay-fake-menu-CFlrRIP3.js";var s,c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{t(),o(),s=n(),{action:c}=__STORYBOOK_MODULE_ACTIONS__,l={component:a,title:`building blocks/ebay-fake-menu`,tags:[`autodocs`],parameters:{docs:{description:{component:`## Usage

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
\`\`\``}}},argTypes:{itemMatchesUrl:{description:"used in conjunction with `current` -- This determines whether aria-current will be `page` or `true` -- Defaults to `true` which gives `aria-current` a value of `page`",control:`boolean`},onKeyDown:{description:`triggered on key down`,action:`onKeyDown`,table:{category:`Events`,defaultValue:{summary:"`(KeyboardEvent"}}},onSelect:{description:`For using with keyboard navigation`,action:`onSelect`,table:{category:`Events`,defaultValue:{summary:"`(KeyboardEvent"}}},href:{description:`Redirection link on click`,control:`text`},type:{description:"Set to `button` to render menu-item as a button instead of a link",control:`text`},current:{description:`Whether or not the href is the current href of the page`,control:`boolean`},badgeNumber:{description:`Used as a number to be placed inside the badge`,control:`number`},badgeAriaLabel:{description:"Only if `badgeNumber` provided, passed as the `aria-label` directly to the badge",control:`number`},disabled:{description:`Whether the menu item is disabled`,control:`boolean`}}},u=e=>(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(a,{...e,onClick:e=>{c(`click`)(`MENU click event prevented`),e.preventDefault()},onKeyDown:(e,t)=>c(`onKeyDown`)(e,t),onSelect:(e,t)=>{c(`onSelect`)(e,t),e.preventDefault()},children:[(0,s.jsx)(r,{href:`#`,onClick:e=>{c(`click`)(`ITEM click event prevented`),e.preventDefault()},children:`Item 1 that has very long text`}),(0,s.jsx)(r,{href:`#`,current:!0,children:`Current page`}),(0,s.jsx)(r,{href:`#`,children:`Item 3`})]})}),d=e=>(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(a,{...e,itemMatchesUrl:!1,onClick:e=>{c(`click`)(`MENU click event prevented`),e.preventDefault()},onKeyDown:c(`key down`),onSelect:e=>{c(`select`)(`event prevented`),e.preventDefault()},children:[(0,s.jsx)(r,{href:`#`,onClick:e=>{c(`click`)(`ITEM click event prevented`),e.preventDefault()},children:`Item 1 that has very long text`}),(0,s.jsx)(r,{href:`#`,current:!0,children:`Current page`}),(0,s.jsx)(r,{href:`#`,children:`Item 3`})]})}),f=e=>(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(a,{...e,children:[(0,s.jsx)(r,{href:`#`,children:`item 1 that has very long text`}),(0,s.jsx)(r,{href:`#`,children:`Item 2`}),(0,s.jsx)(i,{}),(0,s.jsx)(r,{href:`#`,children:`Item 3`}),(0,s.jsx)(r,{href:`#`,children:`Item 4`}),(0,s.jsx)(r,{href:`#`,children:`Item 5`})]})}),p=e=>(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(a,{...e,children:[(0,s.jsx)(r,{href:`#`,children:`item 1 that has very long text`}),(0,s.jsx)(r,{children:`Item without href`}),(0,s.jsx)(r,{disabled:!0,children:`Disabled Item`}),(0,s.jsx)(r,{href:`#`,children:`Item 3`})]})}),m=e=>(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(a,{...e,children:[(0,s.jsx)(r,{href:`#`,children:`Link 1`}),(0,s.jsx)(r,{type:`button`,children:`Button`}),(0,s.jsx)(r,{href:`#`,children:`Link 2`}),(0,s.jsx)(r,{type:`button`,disabled:!0,children:`Disabled Button`})]})}),h=e=>(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(a,{...e,children:[(0,s.jsx)(r,{href:``,badgeNumber:5,badgeAriaLabel:`item 1 (5 unread items)`,children:`item 1`}),(0,s.jsx)(r,{href:``,badgeNumber:23,"aria-label":`item 2 (23 unread items)`,children:`item 2`}),(0,s.jsx)(r,{href:``,children:`item 3`})]})}),g=[`Default`,`WithoutTickIcon`,`WithSeparator`,`WithDisabledItem`,`MixedWithButtons`,`WithBadges`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => <>
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
    </>`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => <>
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
    </>`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`args => <>
        <EbayFakeMenu {...args}>
            <Item href="#">item 1 that has very long text</Item>
            <Item href="#">Item 2</Item>
            <Separator />
            <Item href="#">Item 3</Item>
            <Item href="#">Item 4</Item>
            <Item href="#">Item 5</Item>
        </EbayFakeMenu>
    </>`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => <>
        <EbayFakeMenu {...args}>
            <Item href="#">item 1 that has very long text</Item>
            <Item>Item without href</Item>
            <Item disabled>Disabled Item</Item>
            <Item href="#">Item 3</Item>
        </EbayFakeMenu>
    </>`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => <>
        <EbayFakeMenu {...args}>
            <Item href="#">Link 1</Item>
            <Item type="button">Button</Item>
            <Item href="#">Link 2</Item>
            <Item type="button" disabled>
                Disabled Button
            </Item>
        </EbayFakeMenu>
    </>`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => <>
        <EbayFakeMenu {...args}>
            <Item href="" badgeNumber={5} badgeAriaLabel="item 1 (5 unread items)">
                item 1
            </Item>
            <Item href="" badgeNumber={23} aria-label="item 2 (23 unread items)">
                item 2
            </Item>
            <Item href="">item 3</Item>
        </EbayFakeMenu>
    </>`,...h.parameters?.docs?.source}}}})))()}_();export{u as Default,m as MixedWithButtons,h as WithBadges,p as WithDisabledItem,f as WithSeparator,d as WithoutTickIcon,g as __namedExportsOrder,l as default};