var h=Object.defineProperty;var s=(a,t)=>h(a,"name",{value:t,configurable:!0});import{R as e,c as x}from"./iframe-DXKVC7Wu.js";import{E as T,a as _,b as C}from"./ebay-icon-ccd-top-COvDfF9g.js";import"./preload-helper-Cc2_yIPf.js";const n=s(({max:a,min:t,chargerIcon:r,units:l="W",secondaryType:d="none",secondaryText:i="USB PD",a11yUnits:m="watts","aria-label":u,className:y,...p})=>{const o=d==="usbpd",b=r?`Charger ${r==="included"?"":"not "}included.`:"",g=t||a?`${t} - ${a} ${m}. ${o?i:""}`:"",f=`${b} ${g}`.trim();return e.createElement("div",{...p,role:"img","aria-label":u||f,className:x("ccd",y)},r==="included"&&e.createElement(T,{className:"ccd__charger-icon"}),r==="not-included"&&e.createElement(_,{className:"ccd__charger-icon"}),(t||a)&&e.createElement("div",{className:"ccd__description-figure"},e.createElement(C,{className:"ccd__top-icon"}),e.createElement("div",{className:"ccd__body"},e.createElement("div",null,t," - ",a),e.createElement("div",null,l),o&&e.createElement("div",null,i))))},"EbayCCD");try{n.displayName="ccd",n.__docgenInfo={description:"",displayName:"ccd",filePath:"/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-ccd/ccd.tsx",methods:[],props:{max:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-ccd/ccd.tsx",name:"TypeLiteral"}],description:"",name:"max",required:!1,tags:{},type:{name:"string"}},min:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-ccd/ccd.tsx",name:"TypeLiteral"}],description:"",name:"min",required:!1,tags:{},type:{name:"string"}},chargerIcon:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-ccd/ccd.tsx",name:"TypeLiteral"}],description:"",name:"chargerIcon",required:!1,tags:{},type:{name:'"included" | "not-included"'}},units:{defaultValue:{value:"W"},declarations:[{fileName:"ebayui-core-react/src/ebay-ccd/ccd.tsx",name:"TypeLiteral"}],description:"",name:"units",required:!1,tags:{},type:{name:"string"}},secondaryType:{defaultValue:{value:"none"},declarations:[{fileName:"ebayui-core-react/src/ebay-ccd/ccd.tsx",name:"TypeLiteral"}],description:"",name:"secondaryType",required:!1,tags:{},type:{name:'"none" | "usbpd"'}},secondaryText:{defaultValue:{value:"USB PD"},declarations:[{fileName:"ebayui-core-react/src/ebay-ccd/ccd.tsx",name:"TypeLiteral"}],description:"",name:"secondaryText",required:!1,tags:{},type:{name:"string"}},a11yUnits:{defaultValue:{value:"watts"},declarations:[{fileName:"ebayui-core-react/src/ebay-ccd/ccd.tsx",name:"TypeLiteral"}],description:"",name:"a11yUnits",required:!1,tags:{},type:{name:"string"}},a11yText:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-ccd/ccd.tsx",name:"TypeLiteral"}],description:"",name:"a11yText",required:!1,tags:{},type:{name:"string"}}},tags:{}}}catch{}const w={title:"graphics & icons/ebay-ccd",component:n,argTypes:{max:{control:{type:"text"},description:"The maximum range. If min and max are both not set, then will not show the charger label."},min:{control:{type:"text"},description:"The minimum range. If min and max are both not set, then will not show the charger label."},chargerIcon:{control:{type:"select"},options:["none","included","not-included"],description:"Toggles the charger icon visible or if its included or not",table:{defaultValue:{summary:"none"}}},units:{control:{type:"text"},description:"The units of the rating.",table:{defaultValue:{summary:"w"}}},secondaryType:{control:{type:"select"},options:["none","usbpd"],description:"Toggles the usbpd secondary text",table:{defaultValue:{summary:"none"}}},secondaryText:{control:{type:"text"},description:"The text used for secondary text. Will also be used in aria-label",table:{defaultValue:{summary:"usbpd"}}},a11yUnits:{control:{type:"text"},description:"The units for the rating used for a11y",table:{defaultValue:{summary:"watts"}}},a11yText:{control:{type:"text"},description:"Overrides the default aria-label text"}},tags:["autodocs"],parameters:{docs:{description:{component:`## Usage

### Import

\`\`\`jsx harmony
import { EbayCCD } from "@ebay/ui-core-react/ebay-ccd";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/ccd";
import "@ebay/skin/icon";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/ccd.css";
@import "@ebay/skin/icon.css";
\`\`\`

### Basic

\`\`\`jsx harmony
<EbayCCD chargerIcon="included" max="2000" min="1000" units="W" secondaryType="usbpd" secondaryText="USB PD" />
\`\`\``}}}},c=s(a=>e.createElement(n,{...a}),"Default");c.args={max:"2000",min:"1000"};const I=["Default"];c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"args => <EbayCCD {...args} />",...c.parameters?.docs?.source}}};export{c as Default,I as __namedExportsOrder,w as default};
