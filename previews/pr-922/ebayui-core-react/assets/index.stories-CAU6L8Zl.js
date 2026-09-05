import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-CK-NQdWx.js";import{n}from"./iframe-RezWaW69.js";import{a as r,n as i,o as a,t as o}from"./ebay-menu-fP2Q1Tl9.js";import{i as s,n as c,r as l,t as u}from"./ebay-icon-attention-16-D7POUGBv.js";import{i as d,n as f,o as p,t as m}from"./ebay-tabs-C_gjSv2P.js";var h,g,_,v,y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{t(),s(),c(),m(),o(),h=n(),{action:g}=__STORYBOOK_MODULE_ACTIONS__,_={component:r,title:`building blocks/ebay-menu`,tags:[`autodocs`],parameters:{docs:{description:{component:`## Usage

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
\`\`\``}}},argTypes:{type:{description:"Can be `radio`/`checkbox`",options:[`radio`,`checkbox`],control:{type:`select`}},checked:{description:"when used with `radio` type will check the item with the corresponding index",control:`number`},baseEl:{description:"Container can be `span` (default) or `div`",options:[`span`,`div`],control:{type:`select`}},onKeyDown:{description:`props: (e: event, { index: number, checked: number[], checkedValues?: string[] })`,action:`onKeyDown`,table:{category:`Events`}},onSelect:{description:"props: (e: event, { index: number }), triggered on item clicked (not for type `radio`/`checkbox`)",action:`onSelect`,table:{category:`Events`}},onChange:{description:"props: (e: event, { index: number, checked: number[], checkedValues: string[]), triggered on item `checked` change, (for type `radio`/`checkbox` only)",action:`onChange`,table:{category:`Events`}},classPrefix:{description:"class prefix for the component, defaults to `menu`",control:`text`},reverse:{description:`reverse the menu item layout, so that the badge is on the left and the text on the right (default: false)`,control:`boolean`},fixWidth:{description:`makes the menu width the same as its parent`,control:`boolean`},fixed:{description:"Swap between `fixed` and `absolute` positioning strategy. Use `fixed` when dropdown is in contained in an overflow and needs to be visible as you scroll the screen.",control:`boolean`},value:{description:"for type `radio`, `checkbox`: the value to use with callbacks for `checkedValues[]`",options:[`radio`,`checkbox`,`checkedValues[]`],control:{type:`select`}},disabled:{description:`makes the menu item disabled`,control:`boolean`},badgeNumber:{description:`used as the number to be placed in the badge`,control:`number`},badgeAriaLabel:{control:`text`},priority:{description:`Menu priority style`,options:[`primary`,`secondary`,`none`],control:{type:`select`}},autofocus:{description:`Auto-focus menu on mount`,control:`boolean`}}},v=e=>(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(r,{...e,onClick:g(`click`),onKeyDown:g(`key down`),children:[(0,h.jsx)(a,{children:`Item 1 that has very long text`}),(0,h.jsx)(a,{children:`Item 2`}),(0,h.jsx)(a,{children:`Item 3`})]})}),y=e=>(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(f,{children:[(0,h.jsx)(p,{children:`Menu.checked`}),(0,h.jsx)(d,{children:(0,h.jsxs)(r,{...e,type:`radio`,checked:1,onKeyDown:g(`key down`),onChange:(e,{index:t,checked:n})=>g(`change`)(e,{index:t,checked:n}),onSelect:(e,{index:t,checked:n})=>g(`select`)(e,{index:t,checked:n}),children:[(0,h.jsx)(a,{children:`item 0`}),(0,h.jsx)(a,{children:`Prechecked on menu level`}),(0,h.jsx)(a,{children:`item 2`})]})}),(0,h.jsx)(p,{children:`Item.checked`}),(0,h.jsx)(d,{children:(0,h.jsxs)(r,{...e,type:`radio`,onKeyDown:g(`key down`),onChange:g(`change`),onSelect:g(`select`),children:[(0,h.jsx)(a,{checked:!0,children:`Prechecked on item level`}),(0,h.jsx)(a,{children:`item 1`}),(0,h.jsx)(a,{children:`item 2`})]})}),(0,h.jsx)(p,{children:`Menu.checked+Item.checked`}),(0,h.jsx)(d,{children:(0,h.jsxs)(r,{...e,type:`radio`,checked:1,onKeyDown:g(`key down`),onChange:g(`change`),onSelect:g(`select`),children:[(0,h.jsx)(a,{checked:!0,children:`Prechecked on item level`}),(0,h.jsx)(a,{children:`Prechecked on menu level`}),(0,h.jsx)(a,{children:`item 2`})]})})]})}),b=e=>(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(r,{...e,type:`checkbox`,onKeyDown:g(`key down`),onChange:g(`change`),onSelect:g(`select`),children:[(0,h.jsx)(a,{value:`item 1`,checked:!0,children:`item 1`}),(0,h.jsx)(a,{value:`item 2`,children:`item 2`}),(0,h.jsx)(a,{value:`item 3`,checked:!0,children:`item 3`})]})}),x=e=>(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(r,{...e,children:[(0,h.jsx)(a,{children:`item 1 that has very long text`}),(0,h.jsx)(a,{children:`Item 2`}),(0,h.jsx)(i,{}),(0,h.jsx)(a,{children:`Item 3`}),(0,h.jsx)(a,{children:`Item 4`}),(0,h.jsx)(a,{children:`Item 5`})]})}),S=e=>(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(r,{...e,children:[(0,h.jsx)(a,{children:`item 1 that has very long text`}),(0,h.jsx)(a,{disabled:!0,children:`Item 2`}),(0,h.jsx)(a,{children:`Item 3`})]})}),C=e=>(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(r,{...e,children:[(0,h.jsx)(a,{badgeNumber:5,badgeAriaLabel:`item 1 (5 unread items)`,children:`item 1`}),(0,h.jsx)(a,{badgeNumber:23,"aria-label":`item 2 (23 unread items)`,children:`item 2`}),(0,h.jsx)(a,{children:`item 3`})]})}),w=e=>(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(r,{...e,children:[(0,h.jsxs)(a,{children:[(0,h.jsx)(l,{style:{marginRight:`8px`}}),` Confirmed`]}),(0,h.jsxs)(a,{value:`item 2`,children:[(0,h.jsx)(u,{style:{marginRight:`8px`}}),` Not yet confirmed`]}),(0,h.jsxs)(a,{value:`item 3`,children:[(0,h.jsx)(u,{style:{marginRight:`8px`}}),` Not yet confirmed`]})]})}),T={render:e=>(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(r,{...e,baseEl:`div`,children:[(0,h.jsx)(a,{children:`Item 1 that has very long text`}),(0,h.jsx)(a,{children:`Item 2`}),(0,h.jsx)(a,{children:`Item 3`})]})}),name:`Div container`},E=[`Default`,`Radio`,`Checkbox`,`WithSeparator`,`WithDisabledItem`,`WithBadges`,`WithIcons`,`DivContainer`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`args => <>
        <EbayMenu {...args} onClick={action("click")} onKeyDown={action("key down")}>
            <Item>Item 1 that has very long text</Item>
            <Item>Item 2</Item>
            <Item>Item 3</Item>
        </EbayMenu>
    </>`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`args => <>
        <EbayTabs>
            <EbayTab>Menu.checked</EbayTab>
            <EbayTabPanel>
                <EbayMenu {...args} type="radio" checked={1} onKeyDown={action("key down")}
      // Test TS complier errors here:
      onChange={(e, {
        index,
        checked
      }) => action("change")(e, {
        index,
        checked
      })} onSelect={(e, {
        index,
        checked
      }) => action("select")(e, {
        index,
        checked
      })}>
                    <Item>item 0</Item>
                    <Item>Prechecked on menu level</Item>
                    <Item>item 2</Item>
                </EbayMenu>
            </EbayTabPanel>

            <EbayTab>Item.checked</EbayTab>
            <EbayTabPanel>
                <EbayMenu {...args} type="radio" onKeyDown={action("key down")} onChange={action("change")} onSelect={action("select")}>
                    <Item checked>Prechecked on item level</Item>
                    <Item>item 1</Item>
                    <Item>item 2</Item>
                </EbayMenu>
            </EbayTabPanel>

            <EbayTab>Menu.checked+Item.checked</EbayTab>
            <EbayTabPanel>
                <EbayMenu {...args} type="radio" checked={1} onKeyDown={action("key down")} onChange={action("change")} onSelect={action("select")}>
                    <Item checked>Prechecked on item level</Item>
                    <Item>Prechecked on menu level</Item>
                    <Item>item 2</Item>
                </EbayMenu>
            </EbayTabPanel>
        </EbayTabs>
    </>`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`args => <>
        <EbayMenu {...args} type="checkbox" onKeyDown={action("key down")} onChange={action("change")} onSelect={action("select")}>
            <Item value="item 1" checked>
                item 1
            </Item>
            <Item value="item 2">item 2</Item>
            <Item value="item 3" checked>
                item 3
            </Item>
        </EbayMenu>
    </>`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`args => <>
        <EbayMenu {...args}>
            <Item>item 1 that has very long text</Item>
            <Item>Item 2</Item>
            <Separator />
            <Item>Item 3</Item>
            <Item>Item 4</Item>
            <Item>Item 5</Item>
        </EbayMenu>
    </>`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`args => <>
        <EbayMenu {...args}>
            <Item>item 1 that has very long text</Item>
            <Item disabled>Item 2</Item>
            <Item>Item 3</Item>
        </EbayMenu>
    </>`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`args => <>
        <EbayMenu {...args}>
            <Item badgeNumber={5} badgeAriaLabel="item 1 (5 unread items)">
                item 1
            </Item>
            <Item badgeNumber={23} aria-label="item 2 (23 unread items)">
                item 2
            </Item>
            <Item>item 3</Item>
        </EbayMenu>
    </>`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`args => <>
        <EbayMenu {...args}>
            <Item>
                <EbayIconConfirmation16 style={{
        marginRight: "8px"
      }} /> Confirmed
            </Item>
            <Item value="item 2">
                <EbayIconAttention16 style={{
        marginRight: "8px"
      }} /> Not yet confirmed
            </Item>
            <Item value="item 3">
                <EbayIconAttention16 style={{
        marginRight: "8px"
      }} /> Not yet confirmed
            </Item>
        </EbayMenu>
    </>`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbayMenu {...args} baseEl="div">
                <Item>Item 1 that has very long text</Item>
                <Item>Item 2</Item>
                <Item>Item 3</Item>
            </EbayMenu>
        </>,
  name: "Div container"
}`,...T.parameters?.docs?.source}}}})))()}D();export{b as Checkbox,v as Default,T as DivContainer,y as Radio,C as WithBadges,S as WithDisabledItem,w as WithIcons,x as WithSeparator,E as __namedExportsOrder,_ as default};