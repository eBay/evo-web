var b=Object.defineProperty;var o=(a,t)=>b(a,"name",{value:t,configurable:!0});import{R as e}from"./iframe-BWZCfxwo.js";import{E as n}from"./icon-button-DMXKxQz_.js";import{E as u}from"./ebay-icon-menu-20-zprdodZt.js";import{E as m}from"./ebay-icon-settings-16-CfumX9im.js";import{E as p,a as d}from"./ebay-icon-chat-16-D400NsUc.js";import"./preload-helper-Cc2_yIPf.js";import"./badge-C4lKsYeh.js";const{action:r}=__STORYBOOK_MODULE_ACTIONS__,B={title:"buttons/ebay-icon-button",tags:["autodocs"],parameters:{docs:{description:{component:`This is a circular button with an icon only.

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
\`\`\``}}},argTypes:{icon:{description:"icon name",control:"text"},href:{description:"for link that looks like a button",control:"text"},badgeAriaLabel:{description:"aria label of the badge",control:"text"},badgeNumber:{description:"number on the badge",control:"number"},disabled:{description:"Whether the button is disabled",control:{type:"boolean"}},transparent:{description:"for transparent background",control:"boolean"},size:{description:"alternative size for the icon button, 'large' or 'small'",control:"text"},priority:{description:"`primary`, `secondary`, `tertiary`, `none` (default)",options:["primary","secondary","tertiary","none"],control:{type:"select"}},onClick:{description:"triggered on click",action:"onClick",table:{category:"Events",defaultValue:{summary:"`(MouseEvent)`"}}},onEscape:{description:"triggered on Esc key press",action:"onEscape",table:{category:"Events",defaultValue:{summary:"`(KeyboardEvent)`"}}},onFocus:{description:"triggered on keyboard focus",action:"onFocus",table:{category:"Events",defaultValue:{summary:"`(FocusEvent)`"}}},onBlur:{description:"triggered on focus lost",action:"onBlur",table:{category:"Events",defaultValue:{summary:"`(FocusEvent)`"}}}}},c=o(a=>e.createElement(e.Fragment,null,e.createElement("p",null,e.createElement(n,{...a,onClick:o(t=>r("onClick")(t),"onClick"),onFocus:o(t=>r("onFocus")(t),"onFocus"),onBlur:o(t=>r("onBlur")(t),"onBlur"),onEscape:o(t=>r("onEscape")(t),"onEscape"),icon:e.createElement(u,null),"aria-label":"Menu"})),e.createElement("p",null,e.createElement(n,{...a,href:"https://ebay.com",icon:e.createElement(m,null),"aria-label":"Settings"}))),"Default"),i=o(a=>e.createElement(e.Fragment,null,e.createElement("p",null,e.createElement(n,{...a,icon:e.createElement(u,null),"aria-label":"Menu",badgeNumber:1,badgeAriaLabel:"new feature available"})),e.createElement("p",null,e.createElement(n,{...a,href:"https://ebay.com",icon:e.createElement(p,null),badgeNumber:3,badgeAriaLabel:"3 items in your cart","aria-label":"Cart"})),e.createElement("p",null,e.createElement(n,{...a,href:"https://ebay.com",icon:e.createElement(d,null),badgeNumber:99,badgeAriaLabel:"99 unread messages","aria-label":"Chat"}))),"WithBadges"),l=o(a=>e.createElement(e.Fragment,null,e.createElement("p",null,e.createElement(n,{...a,onClick:r("clicked"),icon:e.createElement(u,null),transparent:!0,"aria-label":"Menu"}))),"Transparent"),s=o(a=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"16px"}},e.createElement(n,{...a,onClick:r("clicked"),icon:"menu20","aria-label":"Menu"}),e.createElement(n,{...a,onClick:r("clicked"),priority:"primary",icon:"menu20","aria-label":"Menu"}),e.createElement(n,{...a,onClick:r("clicked"),priority:"secondary",icon:"menu20","aria-label":"Menu"}),e.createElement(n,{...a,onClick:r("clicked"),priority:"tertiary",icon:"menu20","aria-label":"Menu"})),"WithPriority");c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => <>
        <p>
            <EbayIconButton {...args} onClick={(e: React.MouseEvent) => action("onClick")(e)} onFocus={(e: React.FocusEvent) => action("onFocus")(e)} onBlur={(e: React.FocusEvent) => action("onBlur")(e)} onEscape={(e: React.KeyboardEvent) => action("onEscape")(e)} icon={<EbayIconMenu20 />} aria-label="Menu" />
        </p>
        <p>
            <EbayIconButton {...args} href="https://ebay.com" icon={<EbayIconSettings16 />} aria-label="Settings" />
        </p>
    </>`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => <>
        <p>
            <EbayIconButton {...args} icon={<EbayIconMenu20 />} aria-label="Menu" badgeNumber={1} badgeAriaLabel="new feature available" />
        </p>
        <p>
            <EbayIconButton {...args} href="https://ebay.com" icon={<EbayIconCart16 />} badgeNumber={3} badgeAriaLabel="3 items in your cart" aria-label="Cart" />
        </p>
        <p>
            <EbayIconButton {...args} href="https://ebay.com" icon={<EbayIconChat16 />} badgeNumber={99} badgeAriaLabel="99 unread messages" aria-label="Chat" />
        </p>
    </>`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => <>
        <p>
            <EbayIconButton {...args} onClick={action("clicked")} icon={<EbayIconMenu20 />} transparent aria-label="Menu" />
        </p>
    </>`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => <div style={{
  display: "flex",
  flexDirection: "column",
  gap: "16px"
}}>
        <EbayIconButton {...args} onClick={action("clicked")} icon="menu20" aria-label="Menu" />
        <EbayIconButton {...args} onClick={action("clicked")} priority="primary" icon="menu20" aria-label="Menu" />
        <EbayIconButton {...args} onClick={action("clicked")} priority="secondary" icon="menu20" aria-label="Menu" />
        <EbayIconButton {...args} onClick={action("clicked")} priority="tertiary" icon="menu20" aria-label="Menu" />
    </div>`,...s.parameters?.docs?.source}}};const M=["Default","WithBadges","Transparent","WithPriority"];export{c as Default,l as Transparent,i as WithBadges,s as WithPriority,M as __namedExportsOrder,B as default};
