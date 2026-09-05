var s=Object.defineProperty;var o=(t,i)=>s(t,"name",{value:i,configurable:!0});import{R as r}from"./iframe-DmaTqTuZ.js";import{E as a}from"./chip-CC2uyNUh.js";import"./preload-helper-Cc2_yIPf.js";import"./ebay-icon-close-12-CCAeS-jk.js";const h={component:a,title:"building blocks/ebay-chip",argTypes:{a11yDeleteButtonText:{control:"text",description:"Accessibility text for the delete button"},disabled:{control:"boolean",description:"Whether the chip is disabled"},onDelete:{action:"onDelete"}},tags:["autodocs"],parameters:{docs:{description:{component:`## Usage

### Import

\`\`\`jsx harmony
import EbayChip from "@ebay/ui-core-react/ebay-chip";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/chip";
import "@ebay/skin/icon";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/chip.css";
@import "@ebay/skin/icon.css";
\`\`\`

### Basic

\`\`\`jsx harmony
<EbayChip a11yDeleteButtonText="Remove item" onDelete={handleDelete} disabled={false}>
    Chip Content
</EbayChip>
\`\`\``}}}},e=o(t=>r.createElement(a,{...t},"Chip Content"),"Default");e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"args => <EbayChip {...args}>Chip Content</EbayChip>",...e.parameters?.docs?.source}}};const y=["Default"];export{e as Default,y as __namedExportsOrder,h as default};
