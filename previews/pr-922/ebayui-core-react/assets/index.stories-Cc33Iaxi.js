import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-CK-NQdWx.js";import{n}from"./iframe-RezWaW69.js";import{n as r,t as i}from"./ebay-cta-button-GgO98_uk.js";var a,o,s,c,l,u,d;function f(){return(f=e((()=>{t(),i(),a=n(),o={component:r,title:`buttons/ebay-cta-button`,tags:[`autodocs`],parameters:{docs:{description:{component:`## Usage

### Import

\`\`\`jsx harmony
import { EbayCtaButton } from "@ebay/ui-core-react/ebay-cta-button";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/icon";
import "@ebay/skin/cta-button";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/icon.css";
@import "@ebay/skin/cta-button.css";
\`\`\`

### Basic

\`\`\`jsx harmony
<EbayCtaButton>I'm a CTA button!</EbayCtaButton>
\`\`\``}}},argTypes:{size:{description:"can be only `large` or just omit it for default appearance",control:`text`},href:{description:`URL`,control:`text`},fluid:{description:`takes the whole width of the parent element`,control:`boolean`},truncate:{description:`will truncate the text of the button onto a single line, and adds an ellipsis, when the button's text overflows`,control:`boolean`}}},s=e=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(`p`,{children:(0,a.jsx)(r,{...e,href:`https://ebay.com`,children:`Take Action Now!`})})}),c=e=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(`p`,{children:(0,a.jsx)(r,{...e,href:`https://ebay.com`,size:`large`,children:`Large Button`})})}),l=e=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(`p`,{children:(0,a.jsx)(r,{...e,href:`https://ebay.com`,fluid:!0,children:`100%`})}),(0,a.jsx)(`p`,{children:(0,a.jsx)(r,{...e,href:`https://ebay.com`,size:`large`,fluid:!0,children:`Large!`})})]}),u=e=>(0,a.jsxs)(`div`,{style:{maxWidth:`200px`},children:[(0,a.jsx)(`p`,{children:(0,a.jsx)(r,{...e,href:`https://ebay.com`,truncate:!0,children:`Wide Long Call To Action!`})}),(0,a.jsx)(`p`,{children:(0,a.jsx)(r,{...e,href:`https://ebay.com`,size:`large`,truncate:!0,children:`Go Big with Call To Action!`})})]}),d=[`Default`,`Large`,`Fluid`,`Truncated`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => <>
        <p>
            <EbayCtaButton {...args} href="https://ebay.com">
                Take Action Now!
            </EbayCtaButton>
        </p>
    </>`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => <>
        <p>
            <EbayCtaButton {...args} href="https://ebay.com" size="large">
                Large Button
            </EbayCtaButton>
        </p>
    </>`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => <>
        <p>
            <EbayCtaButton {...args} href="https://ebay.com" fluid>
                100%
            </EbayCtaButton>
        </p>
        <p>
            <EbayCtaButton {...args} href="https://ebay.com" size="large" fluid>
                Large!
            </EbayCtaButton>
        </p>
    </>`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => <div style={{
  maxWidth: "200px"
}}>
        <p>
            <EbayCtaButton {...args} href="https://ebay.com" truncate>
                Wide Long Call To Action!
            </EbayCtaButton>
        </p>
        <p>
            <EbayCtaButton {...args} href="https://ebay.com" size="large" truncate>
                Go Big with Call To Action!
            </EbayCtaButton>
        </p>
    </div>`,...u.parameters?.docs?.source}}}})))()}f();export{s as Default,l as Fluid,c as Large,u as Truncated,d as __namedExportsOrder,o as default};