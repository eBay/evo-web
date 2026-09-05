var l=Object.defineProperty;var n=(r,t)=>l(r,"name",{value:t,configurable:!0});import{R as e}from"./iframe-Cdnvy4Ve.js";import{E as s}from"./progress-spinner-RPAhuMm4.js";import"./preload-helper-Cc2_yIPf.js";import"./ebay-icon-spinner-30-CJ004weY.js";const g={title:"progress/ebay-progress-spinner",tags:["autodocs"],parameters:{docs:{description:{component:`## Usage

### Import

\`\`\`jsx harmony
import { EbayProgressSpinner } from "@ebay/ui-core-react/ebay-progress-spinner";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/icon";
import "@ebay/skin/progress-spinner";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/icon.css";
@import "@ebay/skin/progress-spinner.css";
\`\`\`

### Basic

\`\`\`jsx
<EbayProgressSpinner />
\`\`\``}}},argTypes:{size:{description:"`default` (default), `small`, `large`",options:["default","small","large"],control:{type:"select"}},"aria-label":{description:"custom aria label instead of `Busy`",control:"text"}}},a={render:n(r=>e.createElement(e.Fragment,null,e.createElement("p",null,e.createElement(s,{...r})),e.createElement("p",null,e.createElement(s,{...r,size:"small","aria-label":"Stand by..."})),e.createElement("p",null,e.createElement(s,{...r,size:"large","aria-label":"Stand by..."}))),"render"),name:"Default, Small & Large"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <p>
                <EbayProgressSpinner {...args} />
            </p>
            <p>
                <EbayProgressSpinner {...args} size="small" aria-label="Stand by..." />
            </p>
            <p>
                <EbayProgressSpinner {...args} size="large" aria-label="Stand by..." />
            </p>
        </>,
  name: "Default, Small & Large"
}`,...a.parameters?.docs?.source}}};const y=["DefaultSmallLarge"];export{a as DefaultSmallLarge,y as __namedExportsOrder,g as default};
