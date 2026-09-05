var k=Object.defineProperty;var i=(e,m)=>k(e,"name",{value:m,configurable:!0});import{R as t,c as _,r as f}from"./iframe-DXKVC7Wu.js";import{f as w,e as C,a as S}from"./utils-4VXCHhuo.js";import{E as N}from"./ebay-switch-BFuuZ2ib.js";import{E as v,a as x,b as g}from"./ebay-icon-lamp-16-DzIcw6wa.js";import{E as B}from"./ebay-icon-chevron-right-16-CHuBObq-.js";import{E as F}from"./ebay-icon-lightbulb-16-BmDUaxxC.js";import"./preload-helper-Cc2_yIPf.js";const n=i(({children:e})=>t.createElement("div",{className:"list__leading"},e),"EbayListItemLeading"),b=i(({children:e})=>t.createElement("div",{className:"list__trailing"},e),"EbayListItemTrailing"),a=i(({className:e,as:m="div",separator:y,children:r,onClick:I,...L})=>{if(y)return t.createElement("hr",null);const l=w(r,n),d=w(r,b),p=C(C(r,n),b);return t.createElement("li",null,t.createElement(m,{className:_("list__body",e),onClick:I,...L},l,t.createElement("div",{className:"list__body"},p),d))},"EbayListItem");try{a.displayName="listitem",a.__docgenInfo={description:"",displayName:"listitem",filePath:"/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-list/list-item.tsx",methods:[],props:{},tags:{}}}catch{}const s=i(({className:e,style:m,children:y,onButtonClick:r=i(()=>{},"onButtonClick"),...I})=>{const L=S(y,a);return t.createElement("div",{className:_("list",e),style:m,...I},t.createElement("ul",null,f.Children.map(L,(l,d)=>{const{as:p,onClick:u}=l.props,T=p==="button"?{onClick:i(h=>{u&&u(h),r(h,{index:d})},"onClick")}:{};return f.cloneElement(l,T)})))},"EbayList");try{s.displayName="list",s.__docgenInfo={description:"",displayName:"list",filePath:"/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-list/list.tsx",methods:[],props:{onButtonClick:{defaultValue:{value:"() => {}"},declarations:[{fileName:"ebayui-core-react/src/ebay-list/list.tsx",name:"TypeLiteral"}],description:"",name:"onButtonClick",required:!1,tags:{},type:{name:"ListItemClickHandler"}}},tags:{}}}catch{}const D={component:s,title:"building blocks/ebay-list",argTypes:{onButtonClick:{action:"onButtonClick",table:{category:"Events",defaultValue:{summary:"{ index }"}},description:"Triggered on item click when the item is rendered as a button"},className:{description:"Custom class name",control:"text"},style:{description:"Custom styles",control:"text"},as:{description:"The element to render the item as. Can be 'div', 'button', or 'a'. Default is 'div'.",control:"text"},separator:{description:"If true, will render the current item as a separator",control:"boolean"},children:{description:"Content to display in the leading section",control:"text"}},tags:["autodocs"],parameters:{docs:{description:{component:`A versatile list component for displaying items with optional leading and trailing content.

## Usage

### Import

\`\`\`jsx
import { EbayList, EbayListItem, EbayListItemLeading, EbayListItemTrailing } from "@ebay/ui-core-react/ebay-list";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/list";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/list.css";
\`\`\`

## Examples

### Basic List

### Basic

\`\`\`jsx
<EbayList>
    <EbayListItem>Item 1</EbayListItem>
    <EbayListItem>Item 2</EbayListItem>
    <EbayListItem>Item 3</EbayListItem>
</EbayList>
\`\`\`

### List with Leading and Trailing Content (Method 1 - Using Components)

\`\`\`jsx
<EbayList>
    <EbayListItem>
        <EbayListItemLeading>
            <EbayIconFolder16 />
        </EbayListItemLeading>
        Item 1
    </EbayListItem>
    <EbayListItem>
        <EbayListItemLeading>
            <EbayIconLamp16 />
        </EbayListItemLeading>
        Item 2
        <EbayListItemTrailing>
            <EbayIconChevronRight16 />
        </EbayListItemTrailing>
    </EbayListItem>
</EbayList>
\`\`\`

### Interactive List Items

\`\`\`jsx
<EbayList onButtonClick={(event, { index }) => console.log(\`Button \${index} clicked\`)}>
    <EbayListItem as="button">Clickable Button Item</EbayListItem>
    <EbayListItem as="a" href="https://www.ebay.com">
        Link Item
        <EbayListItemTrailing>
            <EbayIconChevronRight16 />
        </EbayListItemTrailing>
    </EbayListItem>
    <EbayListItem id="switch-item">
        Item with Switch
        <EbayListItemTrailing>
            <EbaySwitch aria-labelledby="switch-item" />
        </EbayListItemTrailing>
    </EbayListItem>
</EbayList>
\`\`\`

### List with Separators

\`\`\`jsx
<EbayList>
    <EbayListItem>Item 1</EbayListItem>
    <EbayListItem separator />
    <EbayListItem>Item 2</EbayListItem>
    <EbayListItem>Item 3</EbayListItem>
    <EbayListItem separator />
    <EbayListItem>Item 4</EbayListItem>
</EbayList>
\`\`\`

## Components

### EbayList

The main container component that wraps a list of EbayListItem components.

### EbayListItem

Individual list items that can be rendered as different elements (div, button, a) and can contain leading and trailing content.

### EbayListItemLeading

Component for adding leading content to a list item.

### EbayListItemTrailing

Component for adding trailing content to a list item.`}}}},o=i(e=>t.createElement(s,{...e},t.createElement(a,null,t.createElement(n,null,t.createElement(v,null)),"Item 1"),t.createElement(a,null,t.createElement(n,null,t.createElement(x,null)),"Item 2"),t.createElement(a,null,t.createElement(n,null,t.createElement(g,null)),"Item 3")),"Static"),c=i(e=>t.createElement(s,{...e},t.createElement(a,{as:"button"},"Item 1"),t.createElement(a,{as:"a",href:"https://www.ebay.com"},"Item 2",t.createElement(b,null,t.createElement(B,null))),t.createElement(a,{id:"switch-item"},"Item 3",t.createElement(b,null,t.createElement(N,{"aria-labelledby":"switch-item"})))),"Interactive"),E=i(e=>t.createElement(s,{...e},t.createElement(a,null,t.createElement(n,null,t.createElement(v,null)),"Item 1"),t.createElement(a,{separator:!0}),t.createElement(a,null,t.createElement(n,null,t.createElement(x,null)),"Item 2"),t.createElement(a,null,t.createElement(n,null,t.createElement(g,null)),"Item 3"),t.createElement(a,null,t.createElement(n,null,t.createElement(g,null)),"Item 4"),t.createElement(a,{separator:!0}),t.createElement(a,null,t.createElement(n,null,t.createElement(F,null)),"Item 5")),"WithSeparator"),H=["Static","Interactive","WithSeparator"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => <EbayList {...args}>
        <EbayListItem>
            <EbayListItemLeading>
                <EbayIconFolder16 />
            </EbayListItemLeading>
            Item 1
        </EbayListItem>
        <EbayListItem>
            <EbayListItemLeading>
                <EbayIconLamp16 />
            </EbayListItemLeading>
            Item 2
        </EbayListItem>
        <EbayListItem>
            <EbayListItemLeading>
                <EbayIconFile16 />
            </EbayListItemLeading>
            Item 3
        </EbayListItem>
    </EbayList>`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => <EbayList {...args}>
        <EbayListItem as="button">Item 1</EbayListItem>
        <EbayListItem as="a" href="https://www.ebay.com">
            Item 2
            <EbayListItemTrailing>
                <EbayIconChevronRight16 />
            </EbayListItemTrailing>
        </EbayListItem>
        <EbayListItem id="switch-item">
            Item 3
            <EbayListItemTrailing>
                <EbaySwitch aria-labelledby="switch-item" />
            </EbayListItemTrailing>
        </EbayListItem>
    </EbayList>`,...c.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`args => <EbayList {...args}>
        <EbayListItem>
            <EbayListItemLeading>
                <EbayIconFolder16 />
            </EbayListItemLeading>
            Item 1
        </EbayListItem>
        <EbayListItem separator />
        <EbayListItem>
            <EbayListItemLeading>
                <EbayIconLamp16 />
            </EbayListItemLeading>
            Item 2
        </EbayListItem>
        <EbayListItem>
            <EbayListItemLeading>
                <EbayIconFile16 />
            </EbayListItemLeading>
            Item 3
        </EbayListItem>
        <EbayListItem>
            <EbayListItemLeading>
                <EbayIconFile16 />
            </EbayListItemLeading>
            Item 4
        </EbayListItem>
        <EbayListItem separator />
        <EbayListItem>
            <EbayListItemLeading>
                <EbayIconLightbulb16 />
            </EbayListItemLeading>
            Item 5
        </EbayListItem>
    </EbayList>`,...E.parameters?.docs?.source}}};export{c as Interactive,o as Static,E as WithSeparator,H as __namedExportsOrder,D as default};
