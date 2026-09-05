import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-CK-NQdWx.js";import{t as n}from"./icon-iuFjYIn4.js";import{a as r,i,n as a,r as o}from"./iframe-RezWaW69.js";var s,c,l,u;function d(){return(d=e((()=>{t(),r(),o(),s=a(),c={component:i,title:`graphics & icons/ebay-svg`,tags:[`autodocs`],parameters:{docs:{description:{component:`This is a helper component which holds all the SVG icons for your other \`@ebay/ui-core-react\` components.

## Usage

### Import

\`\`\`jsx harmony
import { EbaySvg, EbayFlagsSvg } from "@ebay/ui-core-react/ebay-svg";
\`\`\`

Import it and place at the end of your HTML. Make sure this component is only rendered on the server and never imported on the client side.

### Basic

\`\`\`jsx harmony
<Html>
    <Component1 />
    <Component2 />
    <EbaySvg />
    <EbayFlagsSvg />
</Html>
\`\`\`

### Use only necessary icons

To reduce the size of the HTML and processing time, use only the necessary icons via the \`icons\` attribute.

\`\`\`jsx harmony
<EbaySvg icons={["attention16", "information16"]} />
\`\`\``}}},argTypes:{icons:{description:`Yes`,control:`text`}}},l=()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i,{icons:[`notification16`,`attention16`]}),(0,s.jsx)(n,{name:`notification16`}),(0,s.jsx)(n,{name:`attention16`})]}),u=[`FilteredIcons`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => <>
        <EbaySvg icons={["notification16", "attention16"]} />
        <EbayIcon name="notification16" />
        <EbayIcon name="attention16" />
    </>`,...l.parameters?.docs?.source}}}})))()}d();export{l as FilteredIcons,u as __namedExportsOrder,c as default};