import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-CK-NQdWx.js";import{n}from"./iframe-RezWaW69.js";import{n as r,t as i}from"./ebay-icon-settings-16-CVHTLz0R.js";import{c as a,i as o,n as s,o as c,t as l}from"./ebay-fake-menu-button-CAaX5Dyg.js";var u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{t(),r(),l(),u=n(),{action:d}=__STORYBOOK_MODULE_ACTIONS__,f={component:a,title:`buttons/ebay-fake-menu-button`,tags:[`autodocs`],parameters:{docs:{description:{component:`## Usage

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
\`\`\``}}},argTypes:{text:{description:`Button label text`,control:`text`},a11yText:{description:`A11y text for the button`,control:`text`},noToggleIcon:{description:`whether to hide the chevron toggle icon`,control:`boolean`},expanded:{description:`whether content is expanded`,control:`boolean`},type:{description:`Not yet implemented`,control:`text`},variant:{description:"will change the button style: `overflow`, `form` or `button`",options:[`overflow`,`form`,`button`],control:{type:`select`}},priority:{description:"button priority, only used when `variant` is `button`",options:[`variant`,`button`],control:{type:`select`}},reverse:{description:`expand menu flyout to the left`,control:`boolean`},fixWidth:{description:`Constrain items container width to button width`,control:`boolean`},borderless:{description:`Whether button has borders`,control:`boolean`},size:{description:"button size: `small` or `large`",options:[`small`,`large`],control:{type:`select`}},href:{description:`Creates a menu-item with a link`,control:`text`},current:{description:`Whether or not the href is the current href of the page`,control:`boolean`},value:{description:`Not yet implemented`,control:`text`},checked:{description:`Not yet implemented`,control:`boolean`},"badge-number":{description:`Not yet implemented`,control:`number`},"badge-aria-label":{description:`Not yet implemented`,control:`text`},onKeyDown:{description:`Triggered on key down`,action:`onKeyDown`,table:{category:`Events`,defaultValue:{summary:"`(KeyboardEvent)`"}}},onMouseDown:{description:`Triggered on mouse down on menu item`,action:`onMouseDown`,table:{category:`Events`,defaultValue:{summary:"`(MouseEvent, { index: number })`"}}},onCollapse:{description:`Triggered on menu collapse`,action:`onCollapse`,table:{category:`Events`,defaultValue:{summary:"`()`"}}},onExpand:{description:`Triggered on menu expand`,action:`onExpand`,table:{category:`Events`,defaultValue:{summary:"`()`"}}},onSelect:{description:`Not yet implemented`,action:`onSelect`,table:{category:`Events`,defaultValue:{summary:"`(ChangeEvent, { index: number })`"}}},strategy:{description:`CSS positioning strategy for dropdown`,options:[`absolute`,`fixed`],control:{type:`select`}},icon:{description:`Icon element to render in the button`,control:{type:`text`}}}},p=e=>(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(a,{...e,text:`eBay Menu`,onExpand:()=>d(`onExpand`)(),onCollapse:()=>d(`onCollapse`)(),onKeyDown:e=>d(`onKeyDown`)(e),onMouseDown:(e,t)=>d(`onMouseDown`)(e,t),onSelect:(e,t)=>d(`onSelect`)(e,t),children:[(0,u.jsx)(c,{href:`http://ebay.com`,onClick:e=>e.preventDefault(),children:`eBay US`}),(0,u.jsx)(c,{href:`http://ebay.de`,onClick:e=>e.preventDefault(),children:`eBay DE`}),(0,u.jsx)(c,{href:`http://ebay.co.uk`,onClick:e=>e.preventDefault(),children:`eBay UK`})]})}),m=e=>(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(a,{...e,expanded:!0,text:`eBay Menu`,children:[(0,u.jsx)(c,{href:`http://ebay.com`,children:`item 1 that has very long text`}),(0,u.jsx)(c,{href:`http://ebay.de`,children:`item 2`}),(0,u.jsx)(c,{href:`http://ebay.co.uk`,children:`item 3`})]})}),h=e=>(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(a,{...e,text:`eBay Menu`,disabled:!0,children:[(0,u.jsx)(c,{href:`http://ebay.com`,children:`item 1 that has very long text`}),(0,u.jsx)(c,{href:`http://ebay.com`,children:`item 2`}),(0,u.jsx)(c,{href:`http://ebay.com`,children:`item 3`})]})}),g=e=>(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(a,{...e,text:`Settings`,icon:(0,u.jsx)(i,{}),children:[(0,u.jsx)(c,{href:`http://ebay.com`,children:`item 1 that has very long text`}),(0,u.jsx)(c,{href:`http://ebay.com`,children:`item 2`}),(0,u.jsx)(c,{href:`http://ebay.com`,children:`item 3`})]})}),_=e=>(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(a,{...e,noToggleIcon:!0,text:`Menu`,children:[(0,u.jsx)(c,{href:`http://ebay.com`,children:`item 1 that has very long text`}),(0,u.jsx)(c,{href:`http://ebay.com`,children:`item 2`}),(0,u.jsx)(c,{href:`http://ebay.com`,children:`item 3`})]})}),v=e=>(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(`h3`,{children:`Button`}),(0,u.jsxs)(a,{...e,variant:`button`,text:`Button`,a11yText:`Menu`,children:[(0,u.jsx)(c,{href:`http://ebay.com`,children:`item 1`}),(0,u.jsx)(c,{href:`http://ebay.com`,children:`item 2`}),(0,u.jsx)(c,{href:`http://ebay.com`,children:`item 3`})]}),(0,u.jsx)(`h3`,{children:`Form`}),(0,u.jsxs)(a,{...e,variant:`form`,text:`Form`,a11yText:`Menu inside the form`,children:[(0,u.jsx)(c,{href:`http://ebay.com`,children:`item 1`}),(0,u.jsx)(c,{href:`http://ebay.com`,children:`item 2`}),(0,u.jsx)(c,{href:`http://ebay.com`,children:`item 3`})]}),(0,u.jsx)(`h3`,{children:`Overflow`}),(0,u.jsxs)(a,{...e,variant:`overflow`,a11yText:`Menu`,children:[(0,u.jsx)(c,{href:`http://ebay.com`,children:`item 1`}),(0,u.jsx)(c,{href:`http://ebay.com`,children:`item 2`}),(0,u.jsx)(c,{href:`http://ebay.com`,children:`item 3`})]})]}),y=e=>(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(a,{...e,variant:`button`,priority:`primary`,text:`Primary`,a11yText:`Menu`,children:[(0,u.jsx)(c,{href:`http://ebay.com`,children:`item 1`}),(0,u.jsx)(c,{href:`http://ebay.com`,children:`item 2`}),(0,u.jsx)(c,{href:`http://ebay.com`,children:`item 3`})]}),(0,u.jsxs)(a,{...e,variant:`button`,priority:`tertiary`,text:`Tertiary`,a11yText:`Menu`,children:[(0,u.jsx)(c,{href:`http://ebay.com`,children:`item 1`}),(0,u.jsx)(c,{href:`http://ebay.com`,children:`item 2`}),(0,u.jsx)(c,{href:`http://ebay.com`,children:`item 3`})]})]}),b=e=>(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(a,{...e,text:`eBay Menu without borders!`,borderless:!0,children:[(0,u.jsx)(c,{href:`http://ebay.com`,children:`item 1`}),(0,u.jsx)(c,{href:`http://ebay.com`,children:`item 2`}),(0,u.jsx)(c,{href:`http://ebay.com`,children:`item 3`})]})}),x=e=>(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(a,{...e,children:[(0,u.jsxs)(s,{children:[(0,u.jsx)(`span`,{style:{background:`url(https://ir.ebaystatic.com/pictures/aw/pics/cmp/ds3/sprds3_21.png)`,display:`inline-block`,height:`20px`,marginRight:`8px`,verticalAlign:`middle`,width:`26px`}}),` `,`Fun with flags!`]}),(0,u.jsx)(c,{href:`http://ebay.com`,children:`item 1`}),(0,u.jsx)(c,{href:`http://ebay.com`,children:`item 2`}),(0,u.jsx)(c,{href:`http://ebay.com`,children:`item 3`})]})}),S=e=>(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(a,{...e,text:`Complex menu`,onExpand:d(`Menu expanded!`),onCollapse:d(`Menu collapsed!`),children:[(0,u.jsx)(c,{href:`http://ebay.com`,children:`Link 1`}),(0,u.jsx)(c,{href:`http://ebay.com`,current:!0,children:`Current link`}),(0,u.jsx)(o,{}),(0,u.jsx)(c,{disabled:!0,children:`Link 3 (disabled)`}),(0,u.jsx)(c,{href:`http://ebay.com`,children:`Link 4`}),(0,u.jsx)(c,{href:`http://ebay.com`,children:`Link 5`}),(0,u.jsx)(o,{}),(0,u.jsx)(c,{href:`http://ebay.com`,onClick:d(`Open login popup!`),children:`Log in`})]})}),C=e=>(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(a,{...e,text:`Menu has a button width`,fixWidth:!0,children:[(0,u.jsx)(c,{href:`http://ebay.com`,children:`item 1 that has very very long text`}),(0,u.jsx)(c,{href:`http://ebay.com`,children:`item 2`}),(0,u.jsx)(c,{href:`http://ebay.com`,children:`item 3`})]})}),w={render:e=>(0,u.jsx)(`div`,{style:{marginLeft:`100px`},children:(0,u.jsxs)(a,{...e,text:`Menu grows to the left`,reverse:!0,children:[(0,u.jsx)(c,{href:`http://ebay.com`,children:`item 1 that has very very long text`}),(0,u.jsx)(c,{href:`http://ebay.com`,children:`item 2`}),(0,u.jsx)(c,{href:`http://ebay.com`,children:`item 3`})]})}),name:`Reverse (Menu grows to the left)`},T=[`Default`,`Expanded`,`Disabled`,`WithIcon`,`WithoutToggleIcon`,`Variants`,`Priorities`,`Borderless`,`WithCustomLabel`,`WithSeparator`,`FixedWidth`,`ReverseMenuGrowsToTheLeft`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => <>
        <EbayFakeMenuButton {...args} text="eBay Menu" onExpand={() => action("onExpand")()} onCollapse={() => action("onCollapse")()} onKeyDown={e => action("onKeyDown")(e)} onMouseDown={(e, props) => action("onMouseDown")(e, props)} onSelect={(e, props) => action("onSelect")(e, props)}>
            <Item href="http://ebay.com" onClick={e => e.preventDefault()}>
                eBay US
            </Item>
            <Item href="http://ebay.de" onClick={e => e.preventDefault()}>
                eBay DE
            </Item>
            <Item href="http://ebay.co.uk" onClick={e => e.preventDefault()}>
                eBay UK
            </Item>
        </EbayFakeMenuButton>
    </>`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => <>
        <EbayFakeMenuButton {...args} expanded text="eBay Menu">
            <Item href="http://ebay.com">item 1 that has very long text</Item>
            <Item href="http://ebay.de">item 2</Item>
            <Item href="http://ebay.co.uk">item 3</Item>
        </EbayFakeMenuButton>
    </>`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => <>
        <EbayFakeMenuButton {...args} text="eBay Menu" disabled>
            <Item href="http://ebay.com">item 1 that has very long text</Item>
            <Item href="http://ebay.com">item 2</Item>
            <Item href="http://ebay.com">item 3</Item>
        </EbayFakeMenuButton>
    </>`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => <>
        <EbayFakeMenuButton {...args} text="Settings" icon={<EbayIconSettings16 />}>
            <Item href="http://ebay.com">item 1 that has very long text</Item>
            <Item href="http://ebay.com">item 2</Item>
            <Item href="http://ebay.com">item 3</Item>
        </EbayFakeMenuButton>
    </>`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`args => <>
        <EbayFakeMenuButton {...args} noToggleIcon text="Menu">
            <Item href="http://ebay.com">item 1 that has very long text</Item>
            <Item href="http://ebay.com">item 2</Item>
            <Item href="http://ebay.com">item 3</Item>
        </EbayFakeMenuButton>
    </>`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`args => <>
        <h3>Button</h3>
        <EbayFakeMenuButton {...args} variant="button" text="Button" a11yText="Menu">
            <Item href="http://ebay.com">item 1</Item>
            <Item href="http://ebay.com">item 2</Item>
            <Item href="http://ebay.com">item 3</Item>
        </EbayFakeMenuButton>

        <h3>Form</h3>
        <EbayFakeMenuButton {...args} variant="form" text="Form" a11yText="Menu inside the form">
            <Item href="http://ebay.com">item 1</Item>
            <Item href="http://ebay.com">item 2</Item>
            <Item href="http://ebay.com">item 3</Item>
        </EbayFakeMenuButton>

        <h3>Overflow</h3>
        <EbayFakeMenuButton {...args} variant="overflow" a11yText="Menu">
            <Item href="http://ebay.com">item 1</Item>
            <Item href="http://ebay.com">item 2</Item>
            <Item href="http://ebay.com">item 3</Item>
        </EbayFakeMenuButton>
    </>`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`args => <>
        <EbayFakeMenuButton {...args} variant="button" priority="primary" text="Primary" a11yText="Menu">
            <Item href="http://ebay.com">item 1</Item>
            <Item href="http://ebay.com">item 2</Item>
            <Item href="http://ebay.com">item 3</Item>
        </EbayFakeMenuButton>
        <EbayFakeMenuButton {...args} variant="button" priority="tertiary" text="Tertiary" a11yText="Menu">
            <Item href="http://ebay.com">item 1</Item>
            <Item href="http://ebay.com">item 2</Item>
            <Item href="http://ebay.com">item 3</Item>
        </EbayFakeMenuButton>
    </>`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`args => <>
        <EbayFakeMenuButton {...args} text="eBay Menu without borders!" borderless>
            <Item href="http://ebay.com">item 1</Item>
            <Item href="http://ebay.com">item 2</Item>
            <Item href="http://ebay.com">item 3</Item>
        </EbayFakeMenuButton>
    </>`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`args => <>
        <EbayFakeMenuButton {...args}>
            <EbayFakeMenuButtonLabel>
                <span style={{
        background: "url(https://ir.ebaystatic.com/pictures/aw/pics/cmp/ds3/sprds3_21.png)",
        display: "inline-block",
        height: "20px",
        marginRight: "8px",
        verticalAlign: "middle",
        width: "26px"
      }} />{" "}
                Fun with flags!
            </EbayFakeMenuButtonLabel>
            <Item href="http://ebay.com">item 1</Item>
            <Item href="http://ebay.com">item 2</Item>
            <Item href="http://ebay.com">item 3</Item>
        </EbayFakeMenuButton>
    </>`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`args => <>
        <EbayFakeMenuButton {...args} text="Complex menu" onExpand={action("Menu expanded!")} onCollapse={action("Menu collapsed!")}>
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
    </>`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`args => <>
        <EbayFakeMenuButton {...args} text="Menu has a button width" fixWidth>
            <Item href="http://ebay.com">item 1 that has very very long text</Item>
            <Item href="http://ebay.com">item 2</Item>
            <Item href="http://ebay.com">item 3</Item>
        </EbayFakeMenuButton>
    </>`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    marginLeft: "100px"
  }}>
            <EbayFakeMenuButton {...args} text="Menu grows to the left" reverse>
                <Item href="http://ebay.com">item 1 that has very very long text</Item>
                <Item href="http://ebay.com">item 2</Item>
                <Item href="http://ebay.com">item 3</Item>
            </EbayFakeMenuButton>
        </div>,
  name: "Reverse (Menu grows to the left)"
}`,...w.parameters?.docs?.source}}}})))()}E();export{b as Borderless,p as Default,h as Disabled,m as Expanded,C as FixedWidth,y as Priorities,w as ReverseMenuGrowsToTheLeft,v as Variants,x as WithCustomLabel,g as WithIcon,S as WithSeparator,_ as WithoutToggleIcon,T as __namedExportsOrder,f as default};