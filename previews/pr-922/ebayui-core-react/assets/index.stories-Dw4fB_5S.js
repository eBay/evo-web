import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-CK-NQdWx.js";import{n,t as r}from"./icon-iuFjYIn4.js";import{n as i}from"./iframe-RezWaW69.js";import{n as a,t as o}from"./ebay-icon-notification-16-5YkquI2l.js";import{n as s,t as c}from"./ebay-icon-attention-filled-16-BrOi0bC1.js";import{i as l,n as u,r as d,t as f}from"./ebay-icon-attention-16-D7POUGBv.js";var p,m,h,g,_;function v(){return(v=e((()=>{t(),a(),s(),l(),u(),n(),p=i(),m={component:r,title:`graphics & icons/ebay-icon`,tags:[`autodocs`],parameters:{docs:{description:{component:`The \`EbayIcon\` component will include the actual SVG markup in the HTML and then reference the chosen icon.
Each icon has its own component and all the available icons are listed in the [icons](./icons) folder

## Usage

\`\`\`jsx
import { EbayIconArrowLeft16 } from "@ebay/ui-core-react/icons/ebay-icon-arrow-left-16";
import "@ebay/skin/icon";

<EbayIconArrowLeft16 />;
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/icon";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/icon.css";
\`\`\`
### Add the \`EbayIconProvider\`

In the root of your app, add the \`EbayIconProvider\` component to avoid loading the SVG markup multiple times for a better server and client performance.

\`\`\`jsx
import { EbayIconProvider } from "@ebay/ui-core-react/ebay-icon";

<EbayIconProvider>
    <App />
</EbayIconProvider>;
\`\`\``}}},argTypes:{name:{description:"name of the icon from [Skin](./types.ts), transparent versions of colored icons has `-transparent` suffix",control:`text`},noSkinClasses:{description:"Used for special cases where `icon` classes from Skin should not be applied",control:`boolean`},a11yText:{description:`text for non-decorative inline icon; icon is assumed to be decorative if this is not passed`,control:`text`},type:{description:`'icon' or 'program-badge' default 'icon' (DEPRECATED, use <EbayProgramBadge /> instead)`,control:`text`},a11yVariant:{description:`Controls aria-label vs aria-labelledby`,options:[`label`],control:{type:`select`}},prominent:{description:`Adds icon--prominent CSS class`,control:`boolean`}}},h=()=>(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`.demo3 {color: blue;}`}}),(0,p.jsxs)(`p`,{children:[`default `,(0,p.jsx)(o,{})]}),(0,p.jsxs)(`p`,{children:[`with className `,(0,p.jsx)(o,{className:`demo3`})]}),(0,p.jsxs)(`p`,{children:[`with style `,(0,p.jsx)(o,{style:{color:`green`}})]}),(0,p.jsxs)(`p`,{children:[`with style `,(0,p.jsx)(c,{style:{color:`purple`}})]})]}),g=()=>(0,p.jsxs)(`div`,{children:[(0,p.jsx)(d,{a11yText:`Confirmation`}),(0,p.jsx)(f,{a11yText:`Attention`,a11yVariant:`label`})]}),_=[`CustomColor`,`NonDecorative`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => <div>
        <style dangerouslySetInnerHTML={{
    __html: \`.demo3 {color: blue;}\`
  }} />
        <p>
            default <EbayIconNotification16 />
        </p>
        <p>
            with className <EbayIconNotification16 className="demo3" />
        </p>
        <p>
            with style <EbayIconNotification16 style={{
      color: "green"
    }} />
        </p>
        <p>
            with style <EbayIconAttentionFilled16 style={{
      color: "purple"
    }} />
        </p>
    </div>`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => <div>
        <EbayIconConfirmation16 a11yText="Confirmation" />
        <EbayIconAttention16 a11yText="Attention" a11yVariant="label" />
    </div>`,...g.parameters?.docs?.source}}}})))()}v();export{h as CustomColor,g as NonDecorative,_ as __namedExportsOrder,m as default};