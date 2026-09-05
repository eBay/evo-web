import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-CK-NQdWx.js";import{n}from"./iframe-RezWaW69.js";import{n as r,t as i}from"./ebay-icon-button-B3kLZnD2.js";import{n as a,t as o}from"./ebay-icon-menu-20-D20EjCYn.js";import{n as s,t as c}from"./ebay-icon-settings-16-CVHTLz0R.js";import{i as l,n as u,r as d,t as f}from"./ebay-icon-chat-16-B66IbIdh.js";var p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{t(),i(),a(),s(),l(),u(),p=n(),{action:m}=__STORYBOOK_MODULE_ACTIONS__,h={title:`buttons/ebay-icon-button`,tags:[`autodocs`],parameters:{docs:{description:{component:`This is a circular button with an icon only.

## Usage

### Import

\`\`\`jsx harmony
import { EbayIconButton } from "@ebay/ui-core-react/ebay-icon-button";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/badge";
import "@ebay/skin/icon";
import "@ebay/skin/icon-button";

// When using with "href"
import "@ebay/skin/link";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/badge.css";
@import "@ebay/skin/icon.css";
@import "@ebay/skin/icon-button.css";

/* When using with "href" */
@import "@ebay/skin/link.css";
\`\`\`
### Icon button

### Basic

\`\`\`jsx harmony
<EbayIconButton icon={<EbayIconSettings16 />} aria-label="settings" />
\`\`\`

### With badge

\`\`\`jsx harmony
<EbayIconButton icon={<EbayMenu16Icon />} badgeNumber={1} badgeAriaLabel="new feature available" />
\`\`\``}}},argTypes:{icon:{description:`icon name`,control:`text`},href:{description:`for link that looks like a button`,control:`text`},badgeAriaLabel:{description:`aria label of the badge`,control:`text`},badgeNumber:{description:`number on the badge`,control:`number`},disabled:{description:`Whether the button is disabled`,control:{type:`boolean`}},transparent:{description:`for transparent background`,control:`boolean`},size:{description:`alternative size for the icon button, 'large' or 'small'`,control:`text`},priority:{description:"`primary`, `secondary`, `tertiary`, `none` (default)",options:[`primary`,`secondary`,`tertiary`,`none`],control:{type:`select`}},onClick:{description:`triggered on click`,action:`onClick`,table:{category:`Events`,defaultValue:{summary:"`(MouseEvent)`"}}},onEscape:{description:`triggered on Esc key press`,action:`onEscape`,table:{category:`Events`,defaultValue:{summary:"`(KeyboardEvent)`"}}},onFocus:{description:`triggered on keyboard focus`,action:`onFocus`,table:{category:`Events`,defaultValue:{summary:"`(FocusEvent)`"}}},onBlur:{description:`triggered on focus lost`,action:`onBlur`,table:{category:`Events`,defaultValue:{summary:"`(FocusEvent)`"}}}}},g=e=>(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`p`,{children:(0,p.jsx)(r,{...e,onClick:e=>m(`onClick`)(e),onFocus:e=>m(`onFocus`)(e),onBlur:e=>m(`onBlur`)(e),onEscape:e=>m(`onEscape`)(e),icon:(0,p.jsx)(o,{}),"aria-label":`Menu`})}),(0,p.jsx)(`p`,{children:(0,p.jsx)(r,{...e,href:`https://ebay.com`,icon:(0,p.jsx)(c,{}),"aria-label":`Settings`})})]}),_=e=>(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`p`,{children:(0,p.jsx)(r,{...e,icon:(0,p.jsx)(o,{}),"aria-label":`Menu`,badgeNumber:1,badgeAriaLabel:`new feature available`})}),(0,p.jsx)(`p`,{children:(0,p.jsx)(r,{...e,href:`https://ebay.com`,icon:(0,p.jsx)(d,{}),badgeNumber:3,badgeAriaLabel:`3 items in your cart`,"aria-label":`Cart`})}),(0,p.jsx)(`p`,{children:(0,p.jsx)(r,{...e,href:`https://ebay.com`,icon:(0,p.jsx)(f,{}),badgeNumber:99,badgeAriaLabel:`99 unread messages`,"aria-label":`Chat`})})]}),v=e=>(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(`p`,{children:(0,p.jsx)(r,{...e,onClick:m(`clicked`),icon:(0,p.jsx)(o,{}),transparent:!0,"aria-label":`Menu`})})}),y=e=>(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`},children:[(0,p.jsx)(r,{...e,onClick:m(`clicked`),icon:`menu20`,"aria-label":`Menu`}),(0,p.jsx)(r,{...e,onClick:m(`clicked`),priority:`primary`,icon:`menu20`,"aria-label":`Menu`}),(0,p.jsx)(r,{...e,onClick:m(`clicked`),priority:`secondary`,icon:`menu20`,"aria-label":`Menu`}),(0,p.jsx)(r,{...e,onClick:m(`clicked`),priority:`tertiary`,icon:`menu20`,"aria-label":`Menu`})]}),b=[`Default`,`WithBadges`,`Transparent`,`WithPriority`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => <>
        <p>
            <EbayIconButton {...args} onClick={(e: React.MouseEvent) => action("onClick")(e)} onFocus={(e: React.FocusEvent) => action("onFocus")(e)} onBlur={(e: React.FocusEvent) => action("onBlur")(e)} onEscape={(e: React.KeyboardEvent) => action("onEscape")(e)} icon={<EbayIconMenu20 />} aria-label="Menu" />
        </p>
        <p>
            <EbayIconButton {...args} href="https://ebay.com" icon={<EbayIconSettings16 />} aria-label="Settings" />
        </p>
    </>`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`args => <>
        <p>
            <EbayIconButton {...args} icon={<EbayIconMenu20 />} aria-label="Menu" badgeNumber={1} badgeAriaLabel="new feature available" />
        </p>
        <p>
            <EbayIconButton {...args} href="https://ebay.com" icon={<EbayIconCart16 />} badgeNumber={3} badgeAriaLabel="3 items in your cart" aria-label="Cart" />
        </p>
        <p>
            <EbayIconButton {...args} href="https://ebay.com" icon={<EbayIconChat16 />} badgeNumber={99} badgeAriaLabel="99 unread messages" aria-label="Chat" />
        </p>
    </>`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`args => <>
        <p>
            <EbayIconButton {...args} onClick={action("clicked")} icon={<EbayIconMenu20 />} transparent aria-label="Menu" />
        </p>
    </>`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`args => <div style={{
  display: "flex",
  flexDirection: "column",
  gap: "16px"
}}>
        <EbayIconButton {...args} onClick={action("clicked")} icon="menu20" aria-label="Menu" />
        <EbayIconButton {...args} onClick={action("clicked")} priority="primary" icon="menu20" aria-label="Menu" />
        <EbayIconButton {...args} onClick={action("clicked")} priority="secondary" icon="menu20" aria-label="Menu" />
        <EbayIconButton {...args} onClick={action("clicked")} priority="tertiary" icon="menu20" aria-label="Menu" />
    </div>`,...y.parameters?.docs?.source}}}})))()}x();export{g as Default,v as Transparent,_ as WithBadges,y as WithPriority,b as __namedExportsOrder,h as default};