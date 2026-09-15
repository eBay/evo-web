import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-CK-NQdWx.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{t as i}from"./classnames-D09xBJOL.js";import{n as a,t as o}from"./close-12-BC249qcC.js";function s(){let e=(0,l.use)(d);if(!e)throw Error(`EvoChip sub-components must be used within an EvoChip component`);return e}function c({children:e}){let t=(0,l.useId)(),n=(0,l.useMemo)(()=>({textId:t}),[t]);return(0,u.jsx)(d,{value:n,children:e})}var l,u,d;function f(){return(f=t((()=>{l=n(),u=r(),d=(0,l.createContext)(null);try{c.displayName=`ChipProvider`,c.__docgenInfo={description:``,displayName:`ChipProvider`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/chip/context.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}function p(){return(p=t((()=>{})))()}function m({children:e,className:t,...n}){return(0,g.jsx)(c,{children:(0,g.jsx)(`span`,{...n,className:(0,h.default)(`chip`,t),children:e})})}var h,g;function _(){return(_=t((()=>{h=e(i(),1),f(),p(),g=r();try{m.displayName=`EvoChip`,m.__docgenInfo={description:``,displayName:`EvoChip`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/chip/chip.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}function v({a11yText:e=`delete`,className:t,...n}){let{textId:r}=s();return(0,b.jsx)(`button`,{...n,type:`button`,className:(0,y.default)(`chip__button`,t),"aria-label":e,"aria-describedby":r,children:(0,b.jsx)(o,{})})}var y,b;function x(){return(x=t((()=>{y=e(i(),1),a(),f(),b=r();try{v.displayName=`EvoChipDeleteButton`,v.__docgenInfo={description:``,displayName:`EvoChipDeleteButton`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/chip/chip-delete-button.tsx`,methods:[],props:{a11yText:{defaultValue:{value:`delete`},declarations:[{fileName:`evo-react/src/chip/types.ts`,name:`TypeLiteral`}],description:'Accessible label for the delete button. English default to be overridden is `"delete"`.',name:`a11yText`,required:!1,tags:{},type:{name:`string | undefined`}}},tags:{}}}catch{}})))()}function S({children:e,className:t,...n}){let{textId:r}=s();return(0,w.jsx)(`span`,{...n,id:r,className:(0,C.default)(`chip__text`,t),children:e})}var C,w;function T(){return(T=t((()=>{C=e(i(),1),f(),w=r();try{S.displayName=`EvoChipText`,S.__docgenInfo={description:``,displayName:`EvoChipText`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/chip/chip-text.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var E,D,O,k,A;function j(){return(j=t((()=>{_(),x(),T(),E=r(),D={title:`building blocks/evo-chip`,component:m,subcomponents:{EvoChipText:S,EvoChipDeleteButton:v},tags:[`autodocs`],parameters:{docs:{description:{component:`
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
        `}}},argTypes:{children:{control:!1}}},O={render:e=>(0,E.jsx)(m,{...e,children:(0,E.jsx)(S,{children:`Football`})})},k={render:e=>(0,E.jsxs)(m,{...e,children:[(0,E.jsx)(S,{children:`Football`}),(0,E.jsx)(v,{a11yText:`Delete Football`})]})},A=[`Default`,`WithDeleteButton`],O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: args => <EvoChip {...args}>
      <EvoChipText>Football</EvoChipText>
    </EvoChip>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: args => <EvoChip {...args}>
      <EvoChipText>Football</EvoChipText>
      <EvoChipDeleteButton a11yText="Delete Football" />
    </EvoChip>
}`,...k.parameters?.docs?.source}}}})))()}j();export{O as Default,k as WithDeleteButton,A as __namedExportsOrder,D as default};