import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-CK-NQdWx.js";import{t as r}from"./classnames-D09xBJOL.js";import{n as i}from"./iframe-RezWaW69.js";import{a,i as o,n as s,o as c,r as l,t as u}from"./ebay-icon-ccd-top-arPV7XvG.js";var d,f,p;function m(){return(m=t((()=>{d=e(n()),f=e(r()),c(),o(),s(),p=({max:e,min:t,chargerIcon:n,units:r=`W`,secondaryType:i=`none`,secondaryText:o=`USB PD`,a11yUnits:s=`watts`,"aria-label":c,className:p,...m})=>{let h=i===`usbpd`,g=`${n?`Charger ${n===`included`?``:`not `}included.`:``} ${t||e?`${t} - ${e} ${s}. ${h?o:``}`:``}`.trim();return d.createElement(`div`,{...m,role:`img`,"aria-label":c||g,className:(0,f.default)(`ccd`,p)},n===`included`&&d.createElement(a,{className:`ccd__charger-icon`}),n===`not-included`&&d.createElement(l,{className:`ccd__charger-icon`}),(t||e)&&d.createElement(`div`,{className:`ccd__description-figure`},d.createElement(u,{className:`ccd__top-icon`}),d.createElement(`div`,{className:`ccd__body`},d.createElement(`div`,null,t,` - `,e),d.createElement(`div`,null,r),h&&d.createElement(`div`,null,o))))};try{p.displayName=`ccd`,p.__docgenInfo={description:``,displayName:`ccd`,filePath:`/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-ccd/ccd.tsx`,methods:[],props:{max:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-ccd/ccd.tsx`,name:`TypeLiteral`}],description:``,name:`max`,required:!1,tags:{},type:{name:`string | undefined`}},min:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-ccd/ccd.tsx`,name:`TypeLiteral`}],description:``,name:`min`,required:!1,tags:{},type:{name:`string | undefined`}},chargerIcon:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-ccd/ccd.tsx`,name:`TypeLiteral`}],description:``,name:`chargerIcon`,required:!1,tags:{},type:{name:`"included" | "not-included" | undefined`}},units:{defaultValue:{value:`W`},declarations:[{fileName:`ebayui-core-react/src/ebay-ccd/ccd.tsx`,name:`TypeLiteral`}],description:``,name:`units`,required:!1,tags:{},type:{name:`string | undefined`}},secondaryType:{defaultValue:{value:`none`},declarations:[{fileName:`ebayui-core-react/src/ebay-ccd/ccd.tsx`,name:`TypeLiteral`}],description:``,name:`secondaryType`,required:!1,tags:{},type:{name:`"none" | "usbpd" | undefined`}},secondaryText:{defaultValue:{value:`USB PD`},declarations:[{fileName:`ebayui-core-react/src/ebay-ccd/ccd.tsx`,name:`TypeLiteral`}],description:``,name:`secondaryText`,required:!1,tags:{},type:{name:`string | undefined`}},a11yUnits:{defaultValue:{value:`watts`},declarations:[{fileName:`ebayui-core-react/src/ebay-ccd/ccd.tsx`,name:`TypeLiteral`}],description:``,name:`a11yUnits`,required:!1,tags:{},type:{name:`string | undefined`}},a11yText:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-ccd/ccd.tsx`,name:`TypeLiteral`}],description:``,name:`a11yText`,required:!1,tags:{},type:{name:`string | undefined`}}},tags:{}}}catch{}})))()}function h(){return(h=t((()=>{m()})))()}var g,_,v,y;function b(){return(b=t((()=>{n(),h(),g=i(),_={title:`graphics & icons/ebay-ccd`,component:p,argTypes:{max:{control:{type:`text`},description:`The maximum range. If min and max are both not set, then will not show the charger label.`},min:{control:{type:`text`},description:`The minimum range. If min and max are both not set, then will not show the charger label.`},chargerIcon:{control:{type:`select`},options:[`none`,`included`,`not-included`],description:`Toggles the charger icon visible or if its included or not`,table:{defaultValue:{summary:`none`}}},units:{control:{type:`text`},description:`The units of the rating.`,table:{defaultValue:{summary:`w`}}},secondaryType:{control:{type:`select`},options:[`none`,`usbpd`],description:`Toggles the usbpd secondary text`,table:{defaultValue:{summary:`none`}}},secondaryText:{control:{type:`text`},description:`The text used for secondary text. Will also be used in aria-label`,table:{defaultValue:{summary:`usbpd`}}},a11yUnits:{control:{type:`text`},description:`The units for the rating used for a11y`,table:{defaultValue:{summary:`watts`}}},a11yText:{control:{type:`text`},description:`Overrides the default aria-label text`}},tags:[`autodocs`],parameters:{docs:{description:{component:`## Usage

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
\`\`\``}}}},v=e=>(0,g.jsx)(p,{...e}),v.args={max:`2000`,min:`1000`},y=[`Default`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`args => <EbayCCD {...args} />`,...v.parameters?.docs?.source}}}})))()}b();export{v as Default,y as __namedExportsOrder,_ as default};