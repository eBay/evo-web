import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-CK-NQdWx.js";import{t as r}from"./classnames-D09xBJOL.js";import{n as i}from"./iframe-RezWaW69.js";var a,o,s;function c(){return(c=t((()=>{a=e(r()),o=e(n()),s=({defaultSelected:e,selected:t,href:n,className:r,useAriaPressed:i,a11ySelectedText:s,disabled:c,children:l,onClick:u=()=>{},...d})=>{let f=n?`filter-link`:`filter-button`,[p,m]=(0,o.useState)(e),h=t===void 0?p:t,g=n?`a`:`button`,_=e=>{if(!c){let t=!h;m(t),u(e,{selected:t})}};return o.createElement(g,{...d,disabled:c,className:(0,a.default)(f,r,`${f}--${h?`selected`:`unselected`}`),type:n?void 0:`button`,href:n,"aria-pressed":i!==!1&&!n&&h?`true`:void 0,onClick:_},o.createElement(`span`,{className:`${f}__cell`},o.createElement(`span`,null,l),n&&h?o.createElement(`span`,{className:`clipped`},`- `,s||`Selected`):null))};try{s.displayName=`filter`,s.__docgenInfo={description:``,displayName:`filter`,filePath:`/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-filter/filter.tsx`,methods:[],props:{selected:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-filter/filter.tsx`,name:`TypeLiteral`}],description:``,name:`selected`,required:!1,tags:{},type:{name:`boolean | undefined`}},defaultSelected:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-filter/filter.tsx`,name:`TypeLiteral`}],description:``,name:`defaultSelected`,required:!1,tags:{},type:{name:`boolean | undefined`}},a11ySelectedText:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-filter/filter.tsx`,name:`TypeLiteral`}],description:``,name:`a11ySelectedText`,required:!1,tags:{},type:{name:`string | undefined`}},useAriaPressed:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-filter/filter.tsx`,name:`TypeLiteral`}],description:``,name:`useAriaPressed`,required:!1,tags:{},type:{name:`boolean | undefined`}},onClick:{defaultValue:{value:`() => {}`},declarations:[{fileName:`ebayui-core-react/src/ebay-filter/filter.tsx`,name:`TypeLiteral`}],description:``,name:`onClick`,required:!1,tags:{},type:{name:`FilterClickHandler | undefined`}}},tags:{}}}catch{}})))()}function l(){return(l=t((()=>{c()})))()}var u,d,f,p;function m(){return(m=t((()=>{n(),l(),u=i(),d={title:`building blocks/ebay-filter`,component:s,argTypes:{href:{control:{type:`text`},description:`for link that looks like a button`},disabled:{control:{type:`boolean`}},selected:{control:{type:`boolean`}},defaultSelected:{control:{type:`boolean`}},useAriaPressed:{control:{type:`boolean`},description:"defaults to `true`"},a11ySelectedText:{control:{type:`text`},description:'defaults to `"Selected"`, but should be changed based on L10N or I18N',table:{category:`when using fake filters`}},onClick:{action:`onClick`,description:`Triggered on item clicked`,table:{category:`Events`,defaultValue:{summary:`event, { selected }`}}}},tags:[`autodocs`],parameters:{docs:{description:{component:`## Usage

### Import

\`\`\`jsx harmony
import { EbayFilter } from "@ebay/ui-core-react/ebay-filter";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/filter-button";

// When using with "href"
import "@ebay/skin/filter-link";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/filter-button.css";

/* When using with "href" */
@import "@ebay/skin/filter-link.css";
\`\`\`

### Basic

\`\`\`jsx harmony
<EbayFilter>Text</EbayFilter>
\`\`\``}}}},f=e=>(0,u.jsx)(s,{...e,children:`Filter`}),p=[`Default`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`args => <EbayFilter {...args}>Filter</EbayFilter>`,...f.parameters?.docs?.source}}}})))()}m();export{f as Default,p as __namedExportsOrder,d as default};