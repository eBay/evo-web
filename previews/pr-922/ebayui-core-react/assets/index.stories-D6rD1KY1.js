import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-CK-NQdWx.js";import{t as r}from"./classnames-D09xBJOL.js";import{i,r as a,t as o}from"./utils-i55QFFMK.js";import{t as s}from"./component-utils-CjDOSXvC.js";import{t as c}from"./icon-iuFjYIn4.js";import{n as l,r as u}from"./iframe-RezWaW69.js";import{i as d,n as f,r as p,t as m}from"./ebay-icon-mobile-24-SAtKRM5z.js";var h,g,_;function v(){return(v=t((()=>{h=e(n()),g=e(r()),s(),u(),_=({selected:e,children:t,className:n,...r})=>{let a=i(t,c),s=()=>{let e=o(t,c);return h.createElement(`span`,{className:`segmented-buttons__button-cell`},a,h.createElement(`span`,null,e))};return h.createElement(`li`,null,h.createElement(`button`,{className:(0,g.default)(`segmented-buttons__button`,n),"aria-current":e||void 0,...r},a?s():t))};try{_.displayName=`button`,_.__docgenInfo={description:``,displayName:`button`,filePath:`/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-segmented-buttons/button.tsx`,methods:[],props:{selected:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-segmented-buttons/types.ts`,name:`TypeLiteral`}],description:``,name:`selected`,required:!1,tags:{},type:{name:`boolean | undefined`}},onClick:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-segmented-buttons/types.ts`,name:`TypeLiteral`}],description:``,name:`onClick`,required:!1,tags:{},type:{name:`EbayMouseEventHandler<HTMLButtonElement> | undefined`}}},tags:{}}}catch{}})))()}var y,b,x;function S(){return(S=t((()=>{y=e(n()),b=e(r()),s(),v(),x=({size:e,className:t,onChange:n=()=>{},children:r,...i})=>{let o=a(r,_),[s,c]=(0,y.useState)(o.findIndex(e=>e.props.selected)||0),l=(e,t,r)=>{c(t),n(e,{index:t,value:r})};return y.createElement(`div`,{className:(0,b.default)(`segmented-buttons`,e&&`segmented-buttons--${e}`,t),...i},y.createElement(`ul`,null,o.map((e,t)=>{let{value:n,...r}=e.props;return(0,y.cloneElement)(e,{...r,onClick:e=>l(e,t,n),selected:t===s})})))};try{x.displayName=`segmentedbuttons`,x.__docgenInfo={description:``,displayName:`segmentedbuttons`,filePath:`/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-segmented-buttons/segmented-buttons.tsx`,methods:[],props:{size:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-segmented-buttons/types.ts`,name:`TypeLiteral`}],description:``,name:`size`,required:!1,tags:{},type:{name:`SegmentedButtonSize | undefined`}},onChange:{defaultValue:{value:`() => {}`},declarations:[{fileName:`ebayui-core-react/src/ebay-segmented-buttons/types.ts`,name:`TypeLiteral`}],description:``,name:`onChange`,required:!1,tags:{},type:{name:`EbayChangeEventHandler<HTMLButtonElement, { index: number; value?: string | undefined; }> | undefined`}}},tags:{}}}catch{}})))()}function C(){return(C=t((()=>{S(),v()})))()}var w,T,E,D,O,k;function A(){return(A=t((()=>{n(),C(),d(),f(),w=l(),{action:T}=__STORYBOOK_MODULE_ACTIONS__,E={title:`Buttons/ebay-segmented-buttons`,component:x,argTypes:{size:{options:[`large`,`regular`],control:{type:`select`},table:{defaultValue:{summary:`regular`}}},onChange:{action:`changed`,table:{category:`Events`,defaultValue:{summary:`originalEvent, { index, value }`}}},value:{description:"the value to use with `onChange` callback",control:`text`},selected:{description:`Whether or not the button is selected`,control:`boolean`}},tags:[`autodocs`],parameters:{docs:{description:{component:`## Usage

### Import

\`\`\`jsx harmony
import { EbaySegmentedButtons, EbaySegmentedButton as Button } from "@ebay/ui-core-react/ebay-segmented-buttons";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/icon";
import "@ebay/skin/segmented-buttons";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/icon.css";
@import "@ebay/skin/segmented-buttons.css";
\`\`\`

### Basic

\`\`\`jsx
<EbaySegmentedButtons>
    <Button pressed>Option 1</Button>
    <Button>Option 2</Button>
    <Button>Option 3</Button>
</EbaySegmentedButtons>
\`\`\``}}}},D={render:e=>(0,w.jsxs)(x,{onChange:T(`change`),...e,children:[(0,w.jsx)(_,{selected:!0,value:`quarter1`,children:`Q1`}),(0,w.jsx)(_,{value:`quarter2`,children:`Q2`}),(0,w.jsx)(_,{value:`quarter3`,children:`Q3`}),(0,w.jsx)(_,{value:`quarter4`,children:`Q4`})]})},O={render:e=>(0,w.jsxs)(x,{onChange:T(`change`),...e,children:[(0,w.jsxs)(_,{selected:!0,children:[(0,w.jsx)(p,{}),` Desktop`]}),(0,w.jsxs)(_,{children:[(0,w.jsx)(m,{}),` Mobile`]})]})},k=[`Default`,`WithIcons`],D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: args => <EbaySegmentedButtons onChange={action("change")} {...args}>
            <Button selected value="quarter1">
                Q1
            </Button>
            <Button value="quarter2">Q2</Button>
            <Button value="quarter3">Q3</Button>
            <Button value="quarter4">Q4</Button>
        </EbaySegmentedButtons>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: args => <EbaySegmentedButtons onChange={action("change")} {...args}>
            <Button selected>
                <EbayIconFullView24 /> Desktop
            </Button>
            <Button>
                <EbayIconMobile24 /> Mobile
            </Button>
        </EbaySegmentedButtons>
}`,...O.parameters?.docs?.source}}}})))()}A();export{D as Default,O as WithIcons,k as __namedExportsOrder,E as default};