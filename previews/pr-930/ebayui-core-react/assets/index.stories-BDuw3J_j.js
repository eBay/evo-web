var E=Object.defineProperty;var a=(e,l)=>E(e,"name",{value:l,configurable:!0});import{r as N,R as r,c as _}from"./iframe-DXKVC7Wu.js";import"./preload-helper-Cc2_yIPf.js";const o=a(({defaultSelected:e,selected:l,href:t,className:u,useAriaPressed:p,a11ySelectedText:m,disabled:c,children:y,onClick:f=a(()=>{},"onClick"),...b})=>{const n=t?"filter-link":"filter-button",[g,k]=N.useState(e),s=typeof l<"u"?l:g,x=t?"a":"button",S=a(h=>{if(!c){const d=!s;k(d),f(h,{selected:d})}},"handleClick");return r.createElement(x,{...b,disabled:c,className:_(n,u,`${n}--${s?"selected":"unselected"}`),type:t?void 0:"button",href:t,"aria-pressed":p!==!1&&!t&&s?"true":void 0,onClick:S},r.createElement("span",{className:`${n}__cell`},r.createElement("span",null,y),t&&s?r.createElement("span",{className:"clipped"},"- ",m||"Selected"):null))},"EbayFilter");try{o.displayName="filter",o.__docgenInfo={description:"",displayName:"filter",filePath:"/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-filter/filter.tsx",methods:[],props:{selected:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-filter/filter.tsx",name:"TypeLiteral"}],description:"",name:"selected",required:!1,tags:{},type:{name:"boolean"}},defaultSelected:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-filter/filter.tsx",name:"TypeLiteral"}],description:"",name:"defaultSelected",required:!1,tags:{},type:{name:"boolean"}},a11ySelectedText:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-filter/filter.tsx",name:"TypeLiteral"}],description:"",name:"a11ySelectedText",required:!1,tags:{},type:{name:"string"}},useAriaPressed:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-filter/filter.tsx",name:"TypeLiteral"}],description:"",name:"useAriaPressed",required:!1,tags:{},type:{name:"boolean"}},onClick:{defaultValue:{value:"() => {}"},declarations:[{fileName:"ebayui-core-react/src/ebay-filter/filter.tsx",name:"TypeLiteral"}],description:"",name:"onClick",required:!1,tags:{},type:{name:"FilterClickHandler"}}},tags:{}}}catch{}const w={title:"building blocks/ebay-filter",component:o,argTypes:{href:{control:{type:"text"},description:"for link that looks like a button"},disabled:{control:{type:"boolean"}},selected:{control:{type:"boolean"}},defaultSelected:{control:{type:"boolean"}},useAriaPressed:{control:{type:"boolean"},description:"defaults to `true`"},a11ySelectedText:{control:{type:"text"},description:'defaults to `"Selected"`, but should be changed based on L10N or I18N',table:{category:"when using fake filters"}},onClick:{action:"onClick",description:"Triggered on item clicked",table:{category:"Events",defaultValue:{summary:"event, { selected }"}}}},tags:["autodocs"],parameters:{docs:{description:{component:`## Usage

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
\`\`\``}}}},i=a(e=>r.createElement(o,{...e},"Filter"),"Default"),v=["Default"];i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"args => <EbayFilter {...args}>Filter</EbayFilter>",...i.parameters?.docs?.source}}};export{i as Default,v as __namedExportsOrder,w as default};
