var i=Object.defineProperty;var r=(e,l)=>i(e,"name",{value:l,configurable:!0});import{R as t}from"./iframe-DXKVC7Wu.js";import{E as a}from"./cta-button-DdyrrTxB.js";import"./preload-helper-Cc2_yIPf.js";import"./button-BAvxCJp2.js";import"./progress-spinner-DE2l3aJa.js";import"./ebay-icon-spinner-30-C7gEAvHE.js";import"./ebay-icon-chevron-down-12-Bx23oBI8.js";import"./ebay-icon-arrow-right-24-DoKsmgny.js";const f={component:a,title:"buttons/ebay-cta-button",tags:["autodocs"],parameters:{docs:{description:{component:`## Usage

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
\`\`\``}}},argTypes:{size:{description:"can be only `large` or just omit it for default appearance",control:"text"},href:{description:"URL",control:"text"},fluid:{description:"takes the whole width of the parent element",control:"boolean"},truncate:{description:"will truncate the text of the button onto a single line, and adds an ellipsis, when the button's text overflows",control:"boolean"}}},n=r(e=>t.createElement(t.Fragment,null,t.createElement("p",null,t.createElement(a,{...e,href:"https://ebay.com"},"Take Action Now!"))),"Default"),o=r(e=>t.createElement(t.Fragment,null,t.createElement("p",null,t.createElement(a,{...e,href:"https://ebay.com",size:"large"},"Large Button"))),"Large"),s=r(e=>t.createElement(t.Fragment,null,t.createElement("p",null,t.createElement(a,{...e,href:"https://ebay.com",fluid:!0},"100%")),t.createElement("p",null,t.createElement(a,{...e,href:"https://ebay.com",size:"large",fluid:!0},"Large!"))),"Fluid"),c=r(e=>t.createElement("div",{style:{maxWidth:"200px"}},t.createElement("p",null,t.createElement(a,{...e,href:"https://ebay.com",truncate:!0},"Wide Long Call To Action!")),t.createElement("p",null,t.createElement(a,{...e,href:"https://ebay.com",size:"large",truncate:!0},"Go Big with Call To Action!"))),"Truncated"),C=["Default","Large","Fluid","Truncated"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => <>
        <p>
            <EbayCtaButton {...args} href="https://ebay.com">
                Take Action Now!
            </EbayCtaButton>
        </p>
    </>`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => <>
        <p>
            <EbayCtaButton {...args} href="https://ebay.com" size="large">
                Large Button
            </EbayCtaButton>
        </p>
    </>`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => <>
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
    </>`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => <div style={{
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
    </div>`,...c.parameters?.docs?.source}}};export{n as Default,s as Fluid,o as Large,c as Truncated,C as __namedExportsOrder,f as default};
