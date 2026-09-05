import{r as p,j as t}from"./iframe-D13G7DjE.js";import{c as h}from"./index-jc4nkU0l.js";import{E as x}from"./close-12--Fk5cIL7.js";import"./preload-helper-PPVm8Dsz.js";import"./icon-CkCVTWLK.js";const u=p.createContext(null);function m(){const e=p.use(u);if(!e)throw new Error("EvoChip sub-components must be used within an EvoChip component");return e}function d({children:e}){const o=p.useId(),r=p.useMemo(()=>({textId:o}),[o]);return t.jsx(u,{value:r,children:e})}try{d.displayName="ChipProvider",d.__docgenInfo={description:"",displayName:"ChipProvider",props:{}}}catch{}function s({children:e,className:o,...r}){return t.jsx(d,{children:t.jsx("span",{...r,className:h("chip",o),children:e})})}try{s.displayName="EvoChip",s.__docgenInfo={description:"",displayName:"EvoChip",props:{}}}catch{}function c({a11yText:e="delete",className:o,...r}){const{textId:l}=m();return t.jsx("button",{...r,type:"button",className:h("chip__button",o),"aria-label":e,"aria-describedby":l,children:t.jsx(x,{})})}try{c.displayName="EvoChipDeleteButton",c.__docgenInfo={description:"",displayName:"EvoChipDeleteButton",props:{a11yText:{defaultValue:{value:"delete"},description:'Accessible label for the delete button. English default to be overridden is `"delete"`.',name:"a11yText",required:!1,type:{name:"string"}}}}}catch{}function n({children:e,className:o,...r}){const{textId:l}=m();return t.jsx("span",{...r,id:l,className:h("chip__text",o),children:e})}try{n.displayName="EvoChipText",n.__docgenInfo={description:"",displayName:"EvoChipText",props:{}}}catch{}const y={title:"building blocks/evo-chip",component:s,subcomponents:{EvoChipText:n,EvoChipDeleteButton:c},tags:["autodocs"],parameters:{docs:{description:{component:`
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
        `}}},argTypes:{children:{control:!1}}},a={render:e=>t.jsx(s,{...e,children:t.jsx(n,{children:"Football"})})},i={render:e=>t.jsxs(s,{...e,children:[t.jsx(n,{children:"Football"}),t.jsx(c,{a11yText:"Delete Football"})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <EvoChip {...args}>
      <EvoChipText>Football</EvoChipText>
    </EvoChip>
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <EvoChip {...args}>
      <EvoChipText>Football</EvoChipText>
      <EvoChipDeleteButton a11yText="Delete Football" />
    </EvoChip>
}`,...i.parameters?.docs?.source}}};const f=["Default","WithDeleteButton"];export{a as Default,i as WithDeleteButton,f as __namedExportsOrder,y as default};
