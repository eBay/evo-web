import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-CK-NQdWx.js";import{t as r}from"./classnames-D09xBJOL.js";import{n as i}from"./iframe-RezWaW69.js";var a,o,s;function c(){return(c=t((()=>{a=e(n()),o=e(r()),s=({variant:e,type:t,className:n,onKeyDown:r,onEscape:i,...s})=>{let c=e=>{r?.(e),(e.key===`Escape`||e.key===`Esc`)&&i?.(e)};return a.createElement(`button`,{...s,className:(0,o.default)(`fake-link`,e===`standalone`&&`standalone-link`,n),onKeyDown:c,type:t||`button`})};try{s.displayName=`fakelink`,s.__docgenInfo={description:``,displayName:`fakelink`,filePath:`/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-fake-link/fake-link.tsx`,methods:[],props:{variant:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-fake-link/fake-link.tsx`,name:`TypeLiteral`}],description:``,name:`variant`,required:!1,tags:{},type:{name:`"inline" | "standalone" | undefined`}},onEscape:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-fake-link/fake-link.tsx`,name:`TypeLiteral`}],description:``,name:`onEscape`,required:!1,tags:{},type:{name:`EbayKeyboardEventHandler<HTMLButtonElement> | undefined`}}},tags:{}}}catch{}})))()}function l(){return(l=t((()=>{c()})))()}var u,d,f,p;function m(){return(m=t((()=>{n(),l(),u=i(),d={component:s,title:`buttons/ebay-fake-link`,argTypes:{disabled:{description:``,control:{type:`boolean`},table:{category:`Toggles`,defaultValue:{summary:`false`}}},variant:{description:`Should only be standalone when it is clear contextually that this is a link, regardless of styles`,options:[`inline`,`standalone`],control:{type:`select`},table:{defaultValue:{summary:`inline`}}},onClick:{action:`on-click`,description:`Triggered on click`,table:{category:`Events`,defaultValue:{summary:`event`}}},onEscape:{action:`on-escape`,description:`Triggered on escape key`,table:{category:`Events`,defaultValue:{summary:`event`}}},onFocus:{action:`on-focus`,description:`Triggered on focus`,table:{category:`Events`,defaultValue:{summary:`event`}}},onBlur:{action:`on-blur`,description:`Triggered on blur`,table:{category:`Events`,defaultValue:{summary:`event`}}}},tags:[`autodocs`],parameters:{docs:{description:{component:`## Usage

### Import

\`\`\`jsx harmony
import { EbayFakeLink } from "@ebay/ui-core-react/ebay-fake-link";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/link";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/link.css";
\`\`\`

### Basic

\`\`\`jsx harmony
<EbayFakeLink>Fake Link</EbayFakeLink>
\`\`\``}}}},f=e=>(0,u.jsx)(s,{...e,children:`Fake-Link`}),p=[`Default`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`args => <EbayFakeLink {...args}>Fake-Link</EbayFakeLink>`,...f.parameters?.docs?.source}}}})))()}m();export{f as Default,p as __namedExportsOrder,d as default};