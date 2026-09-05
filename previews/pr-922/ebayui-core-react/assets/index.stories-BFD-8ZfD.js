import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-CK-NQdWx.js";import{n}from"./iframe-RezWaW69.js";import{n as r,t as i}from"./ebay-progress-spinner-qgNlXfna.js";var a,o,s,c;function l(){return(l=e((()=>{t(),i(),a=n(),o={title:`progress/ebay-progress-spinner`,tags:[`autodocs`],parameters:{docs:{description:{component:`## Usage

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
\`\`\``}}},argTypes:{size:{description:"`default` (default), `small`, `large`",options:[`default`,`small`,`large`],control:{type:`select`}},"aria-label":{description:"custom aria label instead of `Busy`",control:`text`}}},s={render:e=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(`p`,{children:(0,a.jsx)(r,{...e})}),(0,a.jsx)(`p`,{children:(0,a.jsx)(r,{...e,size:`small`,"aria-label":`Stand by...`})}),(0,a.jsx)(`p`,{children:(0,a.jsx)(r,{...e,size:`large`,"aria-label":`Stand by...`})})]}),name:`Default, Small & Large`},c=[`DefaultSmallLarge`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}}})))()}l();export{s as DefaultSmallLarge,c as __namedExportsOrder,o as default};