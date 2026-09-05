import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-CK-NQdWx.js";import{t as r}from"./classnames-D09xBJOL.js";import{r as i}from"./utils-i55QFFMK.js";import{t as a}from"./component-utils-CjDOSXvC.js";import{n as o}from"./iframe-RezWaW69.js";import{n as s,t as c}from"./ebay-icon-settings-24-B6AJHQk4.js";import{n as l,t as u}from"./ebay-toggle-button-Bj7Fmc7f.js";var d,f,p;function m(){return(m=t((()=>{d=e(n()),f=e(r()),a(),u(),p=({a11yText:e,a11yLabelId:t,layoutType:n=`minimal`,variant:r=`checkbox`,children:a,columnsMin:o,columnsXS:s,columnsSM:c,columnsMD:u,columnsXL:p,onChange:m,className:h,...g})=>{let _=i(a,l),[v,y]=(0,d.useState)(()=>_.reduce((e,t,n)=>(e[n]=t.props.pressed||!1,e),{})),b=(0,d.useCallback)((e,t)=>{y(n=>{let i={};switch(r){case`checkbox`:i={...n},i[t]=!n[t];break;case`radio-toggle`:i[t]=!n[t];break;case`radio`:i[t]=!0}return m&&m(e,{pressedButtonsIndex:i}),i})},[r,m]);return d.createElement(`div`,{className:(0,f.default)(h,`toggle-button-group`),"data-columns-min":o,"data-columns-xs":s,"data-columns-sm":c,"data-columns-md":u,"data-columns-xl":p,...g},d.createElement(`ul`,{"aria-label":e,"aria-labelledby":t},_.map((e,t)=>d.createElement(`li`,{key:t},(0,d.cloneElement)(e,{layoutType:n,pressed:v[t],onToggle:e=>{b(e,t)}})))))}})))()}function h(){return(h=t((()=>{m()})))()}var g,_,v,y;function b(){return(b=t((()=>{n(),h(),u(),s(),g=o(),_={title:`Buttons/ebay-toggle-button-group`,component:p,argTypes:{a11yText:{control:{type:`text`},table:{type:{summary:`string`}},description:"Accessibility text for the group. Cannot be used together with `a11yLabelId`"},a11yLabelId:{control:{type:`text`},table:{type:{summary:`string`}},description:"Id of the element that labels the group. Required for a11y compliance. Cannot be used together with `a11yText`"},variant:{options:[`checkbox`,`radio`,`radio-toggle`],control:{type:`select`},table:{defaultValue:{summary:`checkbox`},type:{summary:`string`}},description:`Selection type for the buttons in the group. May be "checkbox" (default), "radio", or "radio-toggle" (same as radio but with the option to deselect)`},layoutType:{options:[`minimal`,`list`,`gallery`],control:{type:`select`},table:{defaultValue:{summary:`minimal`},type:{summary:[`minimal`,`list`,`gallery`]}},description:"Enforced layout type of all buttons. May be `minimal` (default), `list`, or `gallery`. Gallery layout may only be used when there is also an icon or an image, and minimal layout may not be used when there is an icon or an image"},onChange:{action:`changed`,table:{category:`Events`,defaultValue:{summary:`originalEvent,  pressedButtons`}},description:`Triggered when the pressed state changes`},columnsMin:{control:{type:`number`},type:{name:`number`,required:!1},name:`columnsMin`,table:{type:{summary:`number`}},description:`Preferred minimum number of columns for smallest container/screen (1-3). If this is not set will do an automatic layout. It is recommended to not set this unless needed.`},columnsXS:{control:{type:`number`},type:{name:`number`,required:!1},name:`columnsXS`,table:{type:{summary:`number`}},description:`Preferred minimum number of columns within extra small containers. If this is not set will do an automatic layout. It is recommended to not set this unless needed.`},columnsSM:{control:{type:`number`},type:{name:`number`,required:!1},name:`columnsSM`,table:{type:{summary:`number`}},description:`Preferred minimum number of columns within small containers. If this is not set will do an automatic layout. It is recommended to not set this unless needed.`},columnsMD:{control:{type:`number`},type:{name:`number`,required:!1},name:`columnsMD`,table:{type:{summary:`number`}},description:`Preferred minimum number of columns within medium containers. If this is not set will do an automatic layout. It is recommended to not set this unless needed.`},columnsXL:{control:{type:`number`},type:{name:`number`,required:!1},name:`columnsXL`,table:{type:{summary:`number`}},description:`Preferred minimum number of columns within extra large containers. If this is not set will do an automatic layout. It is recommended to not set this unless needed.`}},decorators:[e=>(0,g.jsx)(`div`,{style:{padding:`3rem`},children:(0,g.jsx)(e,{})})],tags:[`autodocs`],parameters:{layout:`left`,controls:{expanded:!0},options:{storySort:{order:[`buttons`,`dialogs`,`form input`,`graphics & icons`,`media`,`navigation & disclosure`,`notices & tips`,`progress`,`building blocks`]}},docs:{description:{component:`## Usage

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
\`\`\``}}}},v={render:e=>(0,g.jsxs)(p,{...e,children:[(0,g.jsx)(l,{pressed:!0,title:`Button1`}),(0,g.jsx)(l,{children:`Child Button`}),(0,g.jsx)(l,{title:`Button2`,subtitle:`subtitle`}),(0,g.jsx)(l,{icon:(0,g.jsx)(c,{}),title:`Button3`,subtitle:`subtitle`}),(0,g.jsx)(l,{title:`Button4`,subtitle:`subtitle`,img:{src:`https://cloudfront.slrlounge.com/wp-content/uploads/2012/07/01-SLRLounge-Holding-Standing-Wrong.jpg`,alt:`image alt`}})]})},y=[`Default`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}}})))()}b();export{v as Default,y as __namedExportsOrder,_ as default};