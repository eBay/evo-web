var M=Object.defineProperty;var l=(o,u)=>M(o,"name",{value:u,configurable:!0});import{r as c,R as e,c as G}from"./iframe-_qbICbPR.js";import{f as P}from"./utils-CtrxG01O.js";import{E as a}from"./toggle-button-Btiutk6A.js";import{E as q}from"./ebay-icon-settings-24-DygTaStR.js";import"./preload-helper-Cc2_yIPf.js";const b=l(({a11yText:o,a11yLabelId:u,layoutType:p="minimal",variant:d="checkbox",children:y,columnsMin:f,columnsXS:h,columnsSM:E,columnsMD:B,columnsXL:T,onChange:m,className:w,...x})=>{const g=P(y,a),I=l(()=>g.reduce((s,t,n)=>(s[n]=t.props.pressed||!1,s),{}),"getInitialPressedButtons"),[S,k]=c.useState(I),L=c.useCallback((s,t)=>{k(n=>{let r={};switch(d){case"checkbox":r={...n},r[t]=!n[t];break;case"radio-toggle":r[t]=!n[t];break;case"radio":r[t]=!0;break}return m&&m(s,{pressedButtonsIndex:r}),r})},[d,m]);return e.createElement("div",{className:G(w,"toggle-button-group"),"data-columns-min":f,"data-columns-xs":h,"data-columns-sm":E,"data-columns-md":B,"data-columns-xl":T,...x},e.createElement("ul",{"aria-label":o,"aria-labelledby":u},g.map((s,t)=>e.createElement("li",{key:t},c.cloneElement(s,{layoutType:p,pressed:S[t],onToggle:l(n=>{L(n,t)},"onToggle")})))))},"EbayToggleButtonGroup"),v={title:"Buttons/ebay-toggle-button-group",component:b,argTypes:{a11yText:{control:{type:"text"},table:{type:{summary:"string"}},description:"Accessibility text for the group. Cannot be used together with `a11yLabelId`"},a11yLabelId:{control:{type:"text"},table:{type:{summary:"string"}},description:"Id of the element that labels the group. Required for a11y compliance. Cannot be used together with `a11yText`"},variant:{options:["checkbox","radio","radio-toggle"],control:{type:"select"},table:{defaultValue:{summary:"checkbox"},type:{summary:"string"}},description:'Selection type for the buttons in the group. May be "checkbox" (default), "radio", or "radio-toggle" (same as radio but with the option to deselect)'},layoutType:{options:["minimal","list","gallery"],control:{type:"select"},table:{defaultValue:{summary:"minimal"},type:{summary:["minimal","list","gallery"]}},description:"Enforced layout type of all buttons. May be `minimal` (default), `list`, or `gallery`. Gallery layout may only be used when there is also an icon or an image, and minimal layout may not be used when there is an icon or an image"},onChange:{action:"changed",table:{category:"Events",defaultValue:{summary:"originalEvent,  pressedButtons"}},description:"Triggered when the pressed state changes"},columnsMin:{control:{type:"number"},type:{name:"number",required:!1},name:"columnsMin",table:{type:{summary:"number"}},description:"Preferred minimum number of columns for smallest container/screen (1-3). If this is not set will do an automatic layout. It is recommended to not set this unless needed."},columnsXS:{control:{type:"number"},type:{name:"number",required:!1},name:"columnsXS",table:{type:{summary:"number"}},description:"Preferred minimum number of columns within extra small containers. If this is not set will do an automatic layout. It is recommended to not set this unless needed."},columnsSM:{control:{type:"number"},type:{name:"number",required:!1},name:"columnsSM",table:{type:{summary:"number"}},description:"Preferred minimum number of columns within small containers. If this is not set will do an automatic layout. It is recommended to not set this unless needed."},columnsMD:{control:{type:"number"},type:{name:"number",required:!1},name:"columnsMD",table:{type:{summary:"number"}},description:"Preferred minimum number of columns within medium containers. If this is not set will do an automatic layout. It is recommended to not set this unless needed."},columnsXL:{control:{type:"number"},type:{name:"number",required:!1},name:"columnsXL",table:{type:{summary:"number"}},description:"Preferred minimum number of columns within extra large containers. If this is not set will do an automatic layout. It is recommended to not set this unless needed."}},decorators:[o=>e.createElement("div",{style:{padding:"3rem"}},e.createElement(o,null))],tags:["autodocs"],parameters:{layout:"left",controls:{expanded:!0},options:{storySort:{order:["buttons","dialogs","form input","graphics & icons","media","navigation & disclosure","notices & tips","progress","building blocks"]}},docs:{description:{component:`## Usage

### Import

\`\`\`jsx harmony
import { EbayToggleButtonGroup } from "@ebay/ui-core-react/ebay-toggle-button-group";
import { EbayToggleButton } from "@ebay/ui-core-react/ebay-toggle-button";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/icon";
import "@ebay/skin/toggle-button";
import "@ebay/skin/toggle-button-group";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/icon.css";
@import "@ebay/skin/toggle-button.css";
@import "@ebay/skin/toggle-button-group.css";
\`\`\`

### Basic

\`\`\`jsx
<EbayToggleButtonGroup>
    <EbayToggleButton pressed title="Option 1" />
    <EbayToggleButton title="Option 2" />
    <EbayToggleButton title="Option 3" />
</EbayToggleButtonGroup>
\`\`\``}}}},i={render:l(o=>e.createElement(b,{...o},e.createElement(a,{pressed:!0,title:"Button1"}),e.createElement(a,null,"Child Button"),e.createElement(a,{title:"Button2",subtitle:"subtitle"}),e.createElement(a,{icon:e.createElement(q,null),title:"Button3",subtitle:"subtitle"}),e.createElement(a,{title:"Button4",subtitle:"subtitle",img:{src:"https://cloudfront.slrlounge.com/wp-content/uploads/2012/07/01-SLRLounge-Holding-Standing-Wrong.jpg",alt:"image alt"}})),"render")};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <EbayToggleButtonGroup {...args}>
                <EbayToggleButton pressed title="Button1" />
                <EbayToggleButton>Child Button</EbayToggleButton>
                <EbayToggleButton title="Button2" subtitle={"subtitle"} />
                <EbayToggleButton icon={<EbayIconSettings24 />} title="Button3" subtitle="subtitle"></EbayToggleButton>
                <EbayToggleButton title="Button4" subtitle="subtitle" img={{
        src: "https://cloudfront.slrlounge.com/wp-content/uploads/2012/07/01-SLRLounge-Holding-Standing-Wrong.jpg",
        alt: "image alt"
      }}></EbayToggleButton>
            </EbayToggleButtonGroup>;
  }
}`,...i.parameters?.docs?.source}}};const V=["Default"];export{i as Default,V as __namedExportsOrder,v as default};
