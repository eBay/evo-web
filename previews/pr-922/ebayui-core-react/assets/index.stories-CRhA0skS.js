import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-CK-NQdWx.js";import{t as r}from"./classnames-D09xBJOL.js";import{i,r as a,t as o}from"./utils-i55QFFMK.js";import{n as s}from"./iframe-RezWaW69.js";import{t as c}from"./utils-BI15M-bA.js";import{n as l,t as u}from"./ebay-icon-lightbulb-16-CY6z4oXz.js";import{n as d,t as f}from"./ebay-icon-chevron-right-16-BOGvsNOP.js";import{n as p,t as m}from"./ebay-switch-zbUyAL9s.js";import{a as h,i as g,n as _,o as v,r as y,t as b}from"./ebay-icon-lamp-16-CBa6RFP_.js";var x,S;function C(){return(C=t((()=>{x=e(n()),S=({children:e})=>x.createElement(`div`,{className:`list__leading`},e)})))()}var w,T;function E(){return(E=t((()=>{w=e(n()),T=({children:e})=>w.createElement(`div`,{className:`list__trailing`},e)})))()}var D,O,k;function A(){return(A=t((()=>{D=e(n()),O=e(r()),c(),C(),E(),k=({className:e,as:t=`div`,separator:n,children:r,onClick:a,...s})=>{if(n)return D.createElement(`hr`,null);let c=i(r,S),l=i(r,T),u=o(o(r,S),T);return D.createElement(`li`,null,D.createElement(t,{className:(0,O.default)(`list__body`,e),onClick:a,...s},c,D.createElement(`div`,{className:`list__body`},u),l))};try{k.displayName=`listitem`,k.__docgenInfo={description:``,displayName:`listitem`,filePath:`/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-list/list-item.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var j,M,N;function P(){return(P=t((()=>{j=e(n()),M=e(r()),c(),A(),N=({className:e,style:t,children:n,onButtonClick:r=()=>{},...i})=>{let o=a(n,k);return j.createElement(`div`,{className:(0,M.default)(`list`,e),style:t,...i},j.createElement(`ul`,null,j.Children.map(o,(e,t)=>{let{as:n,onClick:i}=e.props;return(0,j.cloneElement)(e,n===`button`?{onClick:e=>{i&&i(e),r(e,{index:t})}}:{})})))};try{N.displayName=`list`,N.__docgenInfo={description:``,displayName:`list`,filePath:`/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-list/list.tsx`,methods:[],props:{onButtonClick:{defaultValue:{value:`() => {}`},declarations:[{fileName:`ebayui-core-react/src/ebay-list/list.tsx`,name:`TypeLiteral`}],description:``,name:`onButtonClick`,required:!1,tags:{},type:{name:`ListItemClickHandler | undefined`}}},tags:{}}}catch{}})))()}function F(){return(F=t((()=>{P(),A(),C(),E()})))()}var I,L,R,z,B,V;function H(){return(H=t((()=>{n(),F(),C(),E(),m(),g(),_(),v(),d(),l(),I=s(),L={component:N,title:`building blocks/ebay-list`,argTypes:{onButtonClick:{action:`onButtonClick`,table:{category:`Events`,defaultValue:{summary:`{ index }`}},description:`Triggered on item click when the item is rendered as a button`},className:{description:`Custom class name`,control:`text`},style:{description:`Custom styles`,control:`text`},as:{description:`The element to render the item as. Can be 'div', 'button', or 'a'. Default is 'div'.`,control:`text`},separator:{description:`If true, will render the current item as a separator`,control:`boolean`},children:{description:`Content to display in the leading section`,control:`text`}},tags:[`autodocs`],parameters:{docs:{description:{component:`A versatile list component for displaying items with optional leading and trailing content.

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

Component for adding trailing content to a list item.`}}}},R=e=>(0,I.jsxs)(N,{...e,children:[(0,I.jsxs)(k,{children:[(0,I.jsx)(S,{children:(0,I.jsx)(y,{})}),`Item 1`]}),(0,I.jsxs)(k,{children:[(0,I.jsx)(S,{children:(0,I.jsx)(b,{})}),`Item 2`]}),(0,I.jsxs)(k,{children:[(0,I.jsx)(S,{children:(0,I.jsx)(h,{})}),`Item 3`]})]}),z=e=>(0,I.jsxs)(N,{...e,children:[(0,I.jsx)(k,{as:`button`,children:`Item 1`}),(0,I.jsxs)(k,{as:`a`,href:`https://www.ebay.com`,children:[`Item 2`,(0,I.jsx)(T,{children:(0,I.jsx)(f,{})})]}),(0,I.jsxs)(k,{id:`switch-item`,children:[`Item 3`,(0,I.jsx)(T,{children:(0,I.jsx)(p,{"aria-labelledby":`switch-item`})})]})]}),B=e=>(0,I.jsxs)(N,{...e,children:[(0,I.jsxs)(k,{children:[(0,I.jsx)(S,{children:(0,I.jsx)(y,{})}),`Item 1`]}),(0,I.jsx)(k,{separator:!0}),(0,I.jsxs)(k,{children:[(0,I.jsx)(S,{children:(0,I.jsx)(b,{})}),`Item 2`]}),(0,I.jsxs)(k,{children:[(0,I.jsx)(S,{children:(0,I.jsx)(h,{})}),`Item 3`]}),(0,I.jsxs)(k,{children:[(0,I.jsx)(S,{children:(0,I.jsx)(h,{})}),`Item 4`]}),(0,I.jsx)(k,{separator:!0}),(0,I.jsxs)(k,{children:[(0,I.jsx)(S,{children:(0,I.jsx)(u,{})}),`Item 5`]})]}),V=[`Static`,`Interactive`,`WithSeparator`],R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`args => <EbayList {...args}>
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
    </EbayList>`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`args => <EbayList {...args}>
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
    </EbayList>`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`args => <EbayList {...args}>
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
    </EbayList>`,...B.parameters?.docs?.source}}}})))()}H();export{z as Interactive,R as Static,B as WithSeparator,V as __namedExportsOrder,L as default};