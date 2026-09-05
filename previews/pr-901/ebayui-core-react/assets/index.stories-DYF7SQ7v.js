var i=Object.defineProperty;var o=(s,r)=>i(s,"name",{value:r,configurable:!0});import{e as a,R as e,E as n}from"./iframe-DGu6SM1O.js";import"./preload-helper-Cc2_yIPf.js";const l={component:a,title:"graphics & icons/ebay-svg",tags:["autodocs"],parameters:{docs:{description:{component:`This is a helper component which holds all the SVG icons for your other \`@ebay/ui-core-react\` components.

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
\`\`\``}}},argTypes:{icons:{description:"Yes",control:"text"}}},t=o(()=>e.createElement(e.Fragment,null,e.createElement(a,{icons:["notification16","attention16"]}),e.createElement(n,{name:"notification16"}),e.createElement(n,{name:"attention16"})),"FilteredIcons");t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => <>
        <EbaySvg icons={["notification16", "attention16"]} />
        <EbayIcon name="notification16" />
        <EbayIcon name="attention16" />
    </>`,...t.parameters?.docs?.source}}};const y=["FilteredIcons"];export{t as FilteredIcons,y as __namedExportsOrder,l as default};
