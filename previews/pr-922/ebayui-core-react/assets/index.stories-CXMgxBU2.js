import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-CK-NQdWx.js";import{t as r}from"./classnames-D09xBJOL.js";import{n as i}from"./iframe-RezWaW69.js";var a,o,s;function c(){return(c=t((()=>{a=e(n()),o=e(r()),s=({value:e=0,max:t=100,fluid:n,className:r,...i})=>a.createElement(`progress`,{...i,className:(0,o.default)(`progress-bar`,r,{"progress-bar--fluid":n}),value:e,max:t});try{s.displayName=`progressbar`,s.__docgenInfo={description:``,displayName:`progressbar`,filePath:`/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-progress-bar/progress-bar.tsx`,methods:[],props:{fluid:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-progress-bar/progress-bar.tsx`,name:`TypeLiteral`}],description:``,name:`fluid`,required:!1,tags:{},type:{name:`boolean | undefined`}}},tags:{}}}catch{}})))()}function l(){return(l=t((()=>{c()})))()}var u,d,f,p,m,h;function g(){return(g=t((()=>{n(),l(),u=i(),d={title:`progress/ebay-progress-bar`,component:s,tags:[`autodocs`],parameters:{docs:{description:{component:`The progress bar gives an immediate, real-time visualisation of the current task completion status.

## Usage

### Import

\`\`\`jsx harmony
import { EbayProgressBar } from "@ebay/ui-core-react/ebay-progress-bar";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/progress-bar";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/progress-bar.css";
\`\`\`

### Basic

\`\`\`jsx
<EbayProgressBar value={50} />
\`\`\``}}},argTypes:{value:{description:`Current value (<= Max)`,control:`text`},max:{description:`Maximal value, default: 100`,control:`text`},fluid:{description:`Fills the full width of its container`,control:`boolean`}}},f=e=>(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(`p`,{children:[`0%`,(0,u.jsx)(`br`,{}),(0,u.jsx)(s,{...e})]}),(0,u.jsxs)(`p`,{children:[`50%`,(0,u.jsx)(`br`,{}),(0,u.jsx)(s,{...e,value:50})]}),(0,u.jsxs)(`p`,{children:[`100%`,(0,u.jsx)(`br`,{}),(0,u.jsx)(s,{...e,value:100})]})]}),p=e=>(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(`p`,{children:[`50/200`,(0,u.jsx)(`br`,{}),(0,u.jsx)(s,{...e,value:50,max:200})]}),(0,u.jsxs)(`p`,{children:[`100/200`,(0,u.jsx)(`br`,{}),(0,u.jsx)(s,{...e,value:100,max:200})]})]}),m=e=>(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(`p`,{children:(0,u.jsx)(s,{...e,fluid:!0,value:50})})}),h=[`Default`,`CustomMax`,`Fluid`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`args => <>
        <p>
            0%
            <br />
            <EbayProgressBar {...args} />
        </p>
        <p>
            50%
            <br />
            <EbayProgressBar {...args} value={50} />
        </p>
        <p>
            100%
            <br />
            <EbayProgressBar {...args} value={100} />
        </p>
    </>`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => <>
        <p>
            50/200
            <br />
            <EbayProgressBar {...args} value={50} max={200} />
        </p>
        <p>
            100/200
            <br />
            <EbayProgressBar {...args} value={100} max={200} />
        </p>
    </>`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => <>
        <p>
            <EbayProgressBar {...args} fluid value={50} />
        </p>
    </>`,...m.parameters?.docs?.source}}}})))()}g();export{p as CustomMax,f as Default,m as Fluid,h as __namedExportsOrder,d as default};