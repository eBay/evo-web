import{r as c,j as t}from"./iframe-DjAcWYNC.js";import{c as d}from"./index-C04a5A_d.js";import{E as v}from"./close-12-CtZvuRb3.js";import"./preload-helper-PPVm8Dsz.js";import"./icon-OW-XSJJv.js";const u=c.createContext(null);function m(){const e=c.use(u);if(!e)throw new Error("EvoChip sub-components must be used within an EvoChip component");return e}function h({children:e}){const o=c.useId(),r=c.useMemo(()=>({textId:o}),[o]);return t.jsx(u,{value:r,children:e})}try{h.displayName="ChipProvider",h.__docgenInfo={description:"",displayName:"ChipProvider",filePath:"/home/runner/work/evo-web/evo-web/packages/evo-react/src/chip/context.tsx",methods:[],props:{},tags:{}}}catch{}function s({children:e,className:o,...r}){return t.jsx(h,{children:t.jsx("span",{...r,className:d("chip",o),children:e})})}try{s.displayName="EvoChip",s.__docgenInfo={description:"",displayName:"EvoChip",filePath:"/home/runner/work/evo-web/evo-web/packages/evo-react/src/chip/chip.tsx",methods:[],props:{},tags:{}}}catch{}function p({a11yText:e="delete",className:o,...r}){const{textId:l}=m();return t.jsx("button",{...r,type:"button",className:d("chip__button",o),"aria-label":e,"aria-describedby":l,children:t.jsx(v,{})})}try{p.displayName="EvoChipDeleteButton",p.__docgenInfo={description:"",displayName:"EvoChipDeleteButton",filePath:"/home/runner/work/evo-web/evo-web/packages/evo-react/src/chip/chip-delete-button.tsx",methods:[],props:{a11yText:{defaultValue:{value:"delete"},declarations:[{fileName:"evo-react/src/chip/types.ts",name:"TypeLiteral"}],description:'Accessible label for the delete button. English default to be overridden is `"delete"`.',name:"a11yText",required:!1,tags:{},type:{name:"string"}}},tags:{}}}catch{}function a({children:e,className:o,...r}){const{textId:l}=m();return t.jsx("span",{...r,id:l,className:d("chip__text",o),children:e})}try{a.displayName="EvoChipText",a.__docgenInfo={description:"",displayName:"EvoChipText",filePath:"/home/runner/work/evo-web/evo-web/packages/evo-react/src/chip/chip-text.tsx",methods:[],props:{},tags:{}}}catch{}const g={title:"building blocks/evo-chip",component:s,subcomponents:{EvoChipText:a,EvoChipDeleteButton:p},tags:["autodocs"],parameters:{docs:{description:{component:`
A chip that composes text and an optional delete button through named sub-components.

## Usage

\`\`\`tsx
import {
  EvoChip,
  EvoChipDeleteButton,
  EvoChipText,
} from "@evo-web/react/chip";

<EvoChip>
  <EvoChipText>Football</EvoChipText>
  <EvoChipDeleteButton a11yText="Delete Football" />
</EvoChip>
\`\`\`
        `}}},argTypes:{children:{control:!1}}},n={render:e=>t.jsx(s,{...e,children:t.jsx(a,{children:"Football"})})},i={render:e=>t.jsxs(s,{...e,children:[t.jsx(a,{children:"Football"}),t.jsx(p,{a11yText:"Delete Football"})]})},f=["Default","WithDeleteButton"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <EvoChip {...args}>
      <EvoChipText>Football</EvoChipText>
    </EvoChip>
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <EvoChip {...args}>
      <EvoChipText>Football</EvoChipText>
      <EvoChipDeleteButton a11yText="Delete Football" />
    </EvoChip>
}`,...i.parameters?.docs?.source}}};export{n as Default,i as WithDeleteButton,f as __namedExportsOrder,g as default};
