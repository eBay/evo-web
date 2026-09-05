var u=Object.defineProperty;var s=(r,l)=>u(r,"name",{value:l,configurable:!0});import{R as e,c as i}from"./iframe-DXKVC7Wu.js";import"./preload-helper-Cc2_yIPf.js";const a=s(({value:r=0,max:l=100,fluid:c,className:p,...m})=>e.createElement("progress",{...m,className:i("progress-bar",p,{"progress-bar--fluid":c}),value:r,max:l}),"EbayProgressBar");try{a.displayName="progressbar",a.__docgenInfo={description:"",displayName:"progressbar",filePath:"/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-progress-bar/progress-bar.tsx",methods:[],props:{fluid:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-progress-bar/progress-bar.tsx",name:"TypeLiteral"}],description:"",name:"fluid",required:!1,tags:{},type:{name:"boolean"}}},tags:{}}}catch{}const E={title:"progress/ebay-progress-bar",component:a,tags:["autodocs"],parameters:{docs:{description:{component:`The progress bar gives an immediate, real-time visualisation of the current task completion status.

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
\`\`\``}}},argTypes:{value:{description:"Current value (<= Max)",control:"text"},max:{description:"Maximal value, default: 100",control:"text"},fluid:{description:"Fills the full width of its container",control:"boolean"}}},t=s(r=>e.createElement(e.Fragment,null,e.createElement("p",null,"0%",e.createElement("br",null),e.createElement(a,{...r})),e.createElement("p",null,"50%",e.createElement("br",null),e.createElement(a,{...r,value:50})),e.createElement("p",null,"100%",e.createElement("br",null),e.createElement(a,{...r,value:100}))),"Default"),n=s(r=>e.createElement(e.Fragment,null,e.createElement("p",null,"50/200",e.createElement("br",null),e.createElement(a,{...r,value:50,max:200})),e.createElement("p",null,"100/200",e.createElement("br",null),e.createElement(a,{...r,value:100,max:200}))),"CustomMax"),o=s(r=>e.createElement(e.Fragment,null,e.createElement("p",null,e.createElement(a,{...r,fluid:!0,value:50}))),"Fluid"),y=["Default","CustomMax","Fluid"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => <>
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
    </>`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => <>
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
    </>`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => <>
        <p>
            <EbayProgressBar {...args} fluid value={50} />
        </p>
    </>`,...o.parameters?.docs?.source}}};export{n as CustomMax,t as Default,o as Fluid,y as __namedExportsOrder,E as default};
