var x=Object.defineProperty;var a=(n,o)=>x(n,"name",{value:o,configurable:!0});import{R as e}from"./iframe-xJqlUA9m.js";import{E as M}from"./ebay-icon-settings-16-i1vqrB1j.js";import{E as r,a as t,b as k,c as I}from"./menu-button-label-BIKHHYxx.js";import"./preload-helper-Cc2_yIPf.js";import"./utils-BuYU8jO-.js";import"./index-DhKlWmW_.js";import"./button-B5bq_2Pf.js";import"./progress-spinner-BxXRvOg1.js";import"./ebay-icon-spinner-30-BLWjaJ7S.js";import"./ebay-icon-chevron-down-12-B4NZJYvo.js";import"./icon-button-BgxtgIOo.js";import"./badge-ec71IVmH.js";import"./menu-item-separator-BnMyLA31.js";import"./ebay-icon-tick-16-jfkeiufJ.js";import"./index-BzamGs-v.js";import"./floating-ui-C62gXMHK.js";import"./jsx-runtime-BHIWlbBZ.js";import"./index-DGsyGkCi.js";import"./index-Bab1krK0.js";import"./ebay-icon-overflow-horizontal-24-B0oXTeWE.js";const{action:m}=__STORYBOOK_MODULE_ACTIONS__,G={component:r,title:"buttons/ebay-fake-menu-button",tags:["autodocs"],parameters:{docs:{description:{component:`## Usage

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
\`\`\``}}},argTypes:{text:{description:"Button label text",control:"text"},a11yText:{description:"A11y text for the button",control:"text"},noToggleIcon:{description:"whether to hide the chevron toggle icon",control:"boolean"},expanded:{description:"whether content is expanded",control:"boolean"},type:{description:"Not yet implemented",control:"text"},variant:{description:"will change the button style: `overflow`, `form` or `button`",options:["overflow","form","button"],control:{type:"select"}},priority:{description:"button priority, only used when `variant` is `button`",options:["variant","button"],control:{type:"select"}},reverse:{description:"expand menu flyout to the left",control:"boolean"},fixWidth:{description:"Constrain items container width to button width",control:"boolean"},borderless:{description:"Whether button has borders",control:"boolean"},size:{description:"button size: `small` or `large`",options:["small","large"],control:{type:"select"}},href:{description:"Creates a menu-item with a link",control:"text"},current:{description:"Whether or not the href is the current href of the page",control:"boolean"},value:{description:"Not yet implemented",control:"text"},checked:{description:"Not yet implemented",control:"boolean"},"badge-number":{description:"Not yet implemented",control:"number"},"badge-aria-label":{description:"Not yet implemented",control:"text"},onKeyDown:{description:"Triggered on key down",action:"onKeyDown",table:{category:"Events",defaultValue:{summary:"`(KeyboardEvent)`"}}},onMouseDown:{description:"Triggered on mouse down on menu item",action:"onMouseDown",table:{category:"Events",defaultValue:{summary:"`(MouseEvent, { index: number })`"}}},onCollapse:{description:"Triggered on menu collapse",action:"onCollapse",table:{category:"Events",defaultValue:{summary:"`()`"}}},onExpand:{description:"Triggered on menu expand",action:"onExpand",table:{category:"Events",defaultValue:{summary:"`()`"}}},onSelect:{description:"Not yet implemented",action:"onSelect",table:{category:"Events",defaultValue:{summary:"`(ChangeEvent, { index: number })`"}}},strategy:{description:"CSS positioning strategy for dropdown",options:["absolute","fixed"],control:{type:"select"}},icon:{description:"Icon element to render in the button",control:{type:"text"}}}},c=a(n=>e.createElement(e.Fragment,null,e.createElement(r,{...n,text:"eBay Menu",onExpand:a(()=>m("onExpand")(),"onExpand"),onCollapse:a(()=>m("onCollapse")(),"onCollapse"),onKeyDown:a(o=>m("onKeyDown")(o),"onKeyDown"),onMouseDown:a((o,g)=>m("onMouseDown")(o,g),"onMouseDown"),onSelect:a((o,g)=>m("onSelect")(o,g),"onSelect")},e.createElement(t,{href:"http://ebay.com",onClick:a(o=>o.preventDefault(),"onClick")},"eBay US"),e.createElement(t,{href:"http://ebay.de",onClick:a(o=>o.preventDefault(),"onClick")},"eBay DE"),e.createElement(t,{href:"http://ebay.co.uk",onClick:a(o=>o.preventDefault(),"onClick")},"eBay UK"))),"Default"),i=a(n=>e.createElement(e.Fragment,null,e.createElement(r,{...n,expanded:!0,text:"eBay Menu"},e.createElement(t,{href:"http://ebay.com"},"item 1 that has very long text"),e.createElement(t,{href:"http://ebay.de"},"item 2"),e.createElement(t,{href:"http://ebay.co.uk"},"item 3"))),"Expanded"),s=a(n=>e.createElement(e.Fragment,null,e.createElement(r,{...n,text:"eBay Menu",disabled:!0},e.createElement(t,{href:"http://ebay.com"},"item 1 that has very long text"),e.createElement(t,{href:"http://ebay.com"},"item 2"),e.createElement(t,{href:"http://ebay.com"},"item 3"))),"Disabled"),l=a(n=>e.createElement(e.Fragment,null,e.createElement(r,{...n,text:"Settings",icon:e.createElement(M,null)},e.createElement(t,{href:"http://ebay.com"},"item 1 that has very long text"),e.createElement(t,{href:"http://ebay.com"},"item 2"),e.createElement(t,{href:"http://ebay.com"},"item 3"))),"WithIcon"),p=a(n=>e.createElement(e.Fragment,null,e.createElement(r,{...n,noToggleIcon:!0,text:"Menu"},e.createElement(t,{href:"http://ebay.com"},"item 1 that has very long text"),e.createElement(t,{href:"http://ebay.com"},"item 2"),e.createElement(t,{href:"http://ebay.com"},"item 3"))),"WithoutToggleIcon"),h=a(n=>e.createElement(e.Fragment,null,e.createElement("h3",null,"Button"),e.createElement(r,{...n,variant:"button",text:"Button",a11yText:"Menu"},e.createElement(t,{href:"http://ebay.com"},"item 1"),e.createElement(t,{href:"http://ebay.com"},"item 2"),e.createElement(t,{href:"http://ebay.com"},"item 3")),e.createElement("h3",null,"Form"),e.createElement(r,{...n,variant:"form",text:"Form",a11yText:"Menu inside the form"},e.createElement(t,{href:"http://ebay.com"},"item 1"),e.createElement(t,{href:"http://ebay.com"},"item 2"),e.createElement(t,{href:"http://ebay.com"},"item 3")),e.createElement("h3",null,"Overflow"),e.createElement(r,{...n,variant:"overflow",a11yText:"Menu"},e.createElement(t,{href:"http://ebay.com"},"item 1"),e.createElement(t,{href:"http://ebay.com"},"item 2"),e.createElement(t,{href:"http://ebay.com"},"item 3"))),"Variants"),u=a(n=>e.createElement(e.Fragment,null,e.createElement(r,{...n,variant:"button",priority:"primary",text:"Primary",a11yText:"Menu"},e.createElement(t,{href:"http://ebay.com"},"item 1"),e.createElement(t,{href:"http://ebay.com"},"item 2"),e.createElement(t,{href:"http://ebay.com"},"item 3")),e.createElement(r,{...n,variant:"button",priority:"tertiary",text:"Tertiary",a11yText:"Menu"},e.createElement(t,{href:"http://ebay.com"},"item 1"),e.createElement(t,{href:"http://ebay.com"},"item 2"),e.createElement(t,{href:"http://ebay.com"},"item 3"))),"Priorities"),y=a(n=>e.createElement(e.Fragment,null,e.createElement(r,{...n,text:"eBay Menu without borders!",borderless:!0},e.createElement(t,{href:"http://ebay.com"},"item 1"),e.createElement(t,{href:"http://ebay.com"},"item 2"),e.createElement(t,{href:"http://ebay.com"},"item 3"))),"Borderless"),b=a(n=>e.createElement(e.Fragment,null,e.createElement(r,{...n},e.createElement(k,null,e.createElement("span",{style:{background:"url(https://ir.ebaystatic.com/pictures/aw/pics/cmp/ds3/sprds3_21.png)",display:"inline-block",height:"20px",marginRight:"8px",verticalAlign:"middle",width:"26px"}})," ","Fun with flags!"),e.createElement(t,{href:"http://ebay.com"},"item 1"),e.createElement(t,{href:"http://ebay.com"},"item 2"),e.createElement(t,{href:"http://ebay.com"},"item 3"))),"WithCustomLabel"),d=a(n=>e.createElement(e.Fragment,null,e.createElement(r,{...n,text:"Complex menu",onExpand:m("Menu expanded!"),onCollapse:m("Menu collapsed!")},e.createElement(t,{href:"http://ebay.com"},"Link 1"),e.createElement(t,{href:"http://ebay.com",current:!0},"Current link"),e.createElement(I,null),e.createElement(t,{disabled:!0},"Link 3 (disabled)"),e.createElement(t,{href:"http://ebay.com"},"Link 4"),e.createElement(t,{href:"http://ebay.com"},"Link 5"),e.createElement(I,null),e.createElement(t,{href:"http://ebay.com",onClick:m("Open login popup!")},"Log in"))),"WithSeparator"),f=a(n=>e.createElement(e.Fragment,null,e.createElement(r,{...n,text:"Menu has a button width",fixWidth:!0},e.createElement(t,{href:"http://ebay.com"},"item 1 that has very very long text"),e.createElement(t,{href:"http://ebay.com"},"item 2"),e.createElement(t,{href:"http://ebay.com"},"item 3"))),"FixedWidth"),E={render:a(n=>e.createElement("div",{style:{marginLeft:"100px"}},e.createElement(r,{...n,text:"Menu grows to the left",reverse:!0},e.createElement(t,{href:"http://ebay.com"},"item 1 that has very very long text"),e.createElement(t,{href:"http://ebay.com"},"item 2"),e.createElement(t,{href:"http://ebay.com"},"item 3"))),"render"),name:"Reverse (Menu grows to the left)"};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => <>
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
    </>`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => <>
        <EbayFakeMenuButton {...args} expanded text="eBay Menu">
            <Item href="http://ebay.com">item 1 that has very long text</Item>
            <Item href="http://ebay.de">item 2</Item>
            <Item href="http://ebay.co.uk">item 3</Item>
        </EbayFakeMenuButton>
    </>`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => <>
        <EbayFakeMenuButton {...args} text="eBay Menu" disabled>
            <Item href="http://ebay.com">item 1 that has very long text</Item>
            <Item href="http://ebay.com">item 2</Item>
            <Item href="http://ebay.com">item 3</Item>
        </EbayFakeMenuButton>
    </>`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => <>
        <EbayFakeMenuButton {...args} text="Settings" icon={<EbayIconSettings16 />}>
            <Item href="http://ebay.com">item 1 that has very long text</Item>
            <Item href="http://ebay.com">item 2</Item>
            <Item href="http://ebay.com">item 3</Item>
        </EbayFakeMenuButton>
    </>`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => <>
        <EbayFakeMenuButton {...args} noToggleIcon text="Menu">
            <Item href="http://ebay.com">item 1 that has very long text</Item>
            <Item href="http://ebay.com">item 2</Item>
            <Item href="http://ebay.com">item 3</Item>
        </EbayFakeMenuButton>
    </>`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`args => <>
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
    </>`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => <>
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
    </>`,...u.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`args => <>
        <EbayFakeMenuButton {...args} text="eBay Menu without borders!" borderless>
            <Item href="http://ebay.com">item 1</Item>
            <Item href="http://ebay.com">item 2</Item>
            <Item href="http://ebay.com">item 3</Item>
        </EbayFakeMenuButton>
    </>`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`args => <>
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
    </>`,...b.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => <>
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
    </>`,...d.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`args => <>
        <EbayFakeMenuButton {...args} text="Menu has a button width" fixWidth>
            <Item href="http://ebay.com">item 1 that has very very long text</Item>
            <Item href="http://ebay.com">item 2</Item>
            <Item href="http://ebay.com">item 3</Item>
        </EbayFakeMenuButton>
    </>`,...f.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};const H=["Default","Expanded","Disabled","WithIcon","WithoutToggleIcon","Variants","Priorities","Borderless","WithCustomLabel","WithSeparator","FixedWidth","ReverseMenuGrowsToTheLeft"];export{y as Borderless,c as Default,s as Disabled,i as Expanded,f as FixedWidth,u as Priorities,E as ReverseMenuGrowsToTheLeft,h as Variants,b as WithCustomLabel,l as WithIcon,d as WithSeparator,p as WithoutToggleIcon,H as __namedExportsOrder,G as default};
