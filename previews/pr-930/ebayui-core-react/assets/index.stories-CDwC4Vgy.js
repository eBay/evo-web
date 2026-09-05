var x=Object.defineProperty;var n=(t,o)=>x(t,"name",{value:o,configurable:!0});import{R as e,c as B,E as y,r as E}from"./iframe-DXKVC7Wu.js";import{f as C,e as I,a as k}from"./utils-4VXCHhuo.js";import{E as N,a as q}from"./ebay-icon-mobile-24-D6FVhFQY.js";import"./preload-helper-Cc2_yIPf.js";const a=n(({selected:t,children:o,className:d,...p})=>{const l=C(o,y),u=n(()=>{const b=I(o,y);return e.createElement("span",{className:"segmented-buttons__button-cell"},l,e.createElement("span",null,b))},"iconWithText");return e.createElement("li",null,e.createElement("button",{className:B("segmented-buttons__button",d),"aria-current":t||void 0,...p},l?u():o))},"EbaySegmentedButton");try{a.displayName="button",a.__docgenInfo={description:"",displayName:"button",filePath:"/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-segmented-buttons/button.tsx",methods:[],props:{selected:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-segmented-buttons/types.ts",name:"TypeLiteral"}],description:"",name:"selected",required:!1,tags:{},type:{name:"boolean"}},onClick:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-segmented-buttons/types.ts",name:"TypeLiteral"}],description:"",name:"onClick",required:!1,tags:{},type:{name:"EbayMouseEventHandler<HTMLButtonElement>"}}},tags:{}}}catch{}const c=n(({size:t,className:o,onChange:d=n(()=>{},"onChange"),children:p,...l})=>{const u=k(p,a),[b,h]=E.useState(u.findIndex(s=>s.props.selected)||0),_=n((s,r,g)=>{h(r),d(s,{index:r,value:g})},"handleClick");return e.createElement("div",{className:B("segmented-buttons",t&&`segmented-buttons--${t}`,o),...l},e.createElement("ul",null,u.map((s,r)=>{const{value:g,...v}=s.props;return E.cloneElement(s,{...v,onClick:n(S=>_(S,r,g),"onClick"),selected:r===b})})))},"EbaySegmentedButtons");try{c.displayName="segmentedbuttons",c.__docgenInfo={description:"",displayName:"segmentedbuttons",filePath:"/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-segmented-buttons/segmented-buttons.tsx",methods:[],props:{size:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-segmented-buttons/types.ts",name:"TypeLiteral"}],description:"",name:"size",required:!1,tags:{},type:{name:"SegmentedButtonSize"}},onChange:{defaultValue:{value:"() => {}"},declarations:[{fileName:"ebayui-core-react/src/ebay-segmented-buttons/types.ts",name:"TypeLiteral"}],description:"",name:"onChange",required:!1,tags:{},type:{name:"EbayChangeEventHandler<HTMLButtonElement, { index: number; value?: string; }>"}}},tags:{}}}catch{}const{action:f}=__STORYBOOK_MODULE_ACTIONS__,V={title:"Buttons/ebay-segmented-buttons",component:c,argTypes:{size:{options:["large","regular"],control:{type:"select"},table:{defaultValue:{summary:"regular"}}},onChange:{action:"changed",table:{category:"Events",defaultValue:{summary:"originalEvent, { index, value }"}}},value:{description:"the value to use with `onChange` callback",control:"text"},selected:{description:"Whether or not the button is selected",control:"boolean"}},tags:["autodocs"],parameters:{docs:{description:{component:`## Usage

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
\`\`\``}}}},m={render:n(t=>e.createElement(c,{onChange:f("change"),...t},e.createElement(a,{selected:!0,value:"quarter1"},"Q1"),e.createElement(a,{value:"quarter2"},"Q2"),e.createElement(a,{value:"quarter3"},"Q3"),e.createElement(a,{value:"quarter4"},"Q4")),"render")},i={render:n(t=>e.createElement(c,{onChange:f("change"),...t},e.createElement(a,{selected:!0},e.createElement(N,null)," Desktop"),e.createElement(a,null,e.createElement(q,null)," Mobile")),"render")},L=["Default","WithIcons"];m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <EbaySegmentedButtons onChange={action("change")} {...args}>
            <Button selected value="quarter1">
                Q1
            </Button>
            <Button value="quarter2">Q2</Button>
            <Button value="quarter3">Q3</Button>
            <Button value="quarter4">Q4</Button>
        </EbaySegmentedButtons>
}`,...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <EbaySegmentedButtons onChange={action("change")} {...args}>
            <Button selected>
                <EbayIconFullView24 /> Desktop
            </Button>
            <Button>
                <EbayIconMobile24 /> Mobile
            </Button>
        </EbaySegmentedButtons>
}`,...i.parameters?.docs?.source}}};export{m as Default,i as WithIcons,L as __namedExportsOrder,V as default};
