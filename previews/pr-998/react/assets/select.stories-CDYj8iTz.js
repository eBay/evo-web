import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-CK-NQdWx.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{t as i}from"./classnames-D09xBJOL.js";import{n as a,t as o}from"./use-floating-label-Cj4BOam1.js";import{n as s,t as c}from"./chevron-down-12-0B9T5olF.js";function l(){return(l=t((()=>{})))()}function u({"aria-invalid":e,borderless:t=!1,children:n,className:r,defaultValue:i,disabled:o,floatingLabel:s,fluid:l=!1,id:u,multiple:m,onBlur:h,onChange:g,onFocus:_,onValueChange:v,ref:y,size:b=`regular`,style:x,value:S,...C}){let w=(0,d.useId)(),T=u??(s?w:void 0),[E,D]=(0,d.useState)(!1),[O,k]=(0,d.useState)(i),A=S!==void 0,j=a({disabled:o,focused:E,invalid:e===!0||e===`true`,size:b,text:s,value:A?S:O}),M=e=>{if(m){let t=Array.from(e.currentTarget.selectedOptions,e=>e.value);A||k(t),g?.(e),v?.(t)}else{let t=e.currentTarget.value;A||k(t),g?.(e),v?.(t)}},N=e=>{D(!0),_?.(e)},P=e=>{D(!1),h?.(e)};return(0,p.jsxs)(j.Container,{...j.containerProps,children:[(0,p.jsx)(j.Label,{...j.labelProps,htmlFor:T}),(0,p.jsxs)(`span`,{className:(0,f.default)(`select`,b===`large`&&`select--large`,l&&`select--fluid`,t&&`select--borderless`,r),style:x,children:[(0,p.jsx)(`select`,{...C,ref:y,"aria-invalid":e,defaultValue:A?void 0:i,disabled:o,id:T,multiple:m,onBlur:P,onChange:M,onFocus:N,value:S,children:n}),(0,p.jsx)(c,{height:`8`,width:`8`})]})]})}var d,f,p;function m(){return(m=t((()=>{d=n(),f=e(i(),1),s(),o(),l(),p=r();try{u.displayName=`EvoSelect`,u.__docgenInfo={description:`Selects let users choose from a list of options using the browser's native
select control.

\`EvoSelectOption\` renders an option. Place grouped options inside
\`EvoSelectOptionGroup\`; this keeps the native \`<optgroup>\` structure without
inspecting children. \`value\` and \`onValueChange\` support controlled use,
while \`defaultValue\` supports uncontrolled use.

## Usage

\`\`\`tsx
import {
  EvoSelect,
  EvoSelectOption,
} from "@evo-web/react/select";

<EvoSelect aria-label="Shipping method" defaultValue="standard">
  <EvoSelectOption value="standard">Standard</EvoSelectOption>
  <EvoSelectOption value="express">Express</EvoSelectOption>
</EvoSelect>
\`\`\``,displayName:`EvoSelect`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/select/select.tsx`,methods:[],props:{borderless:{defaultValue:{value:`false`},declarations:[{fileName:`evo-react/src/select/types.ts`,name:`TypeLiteral`}],description:`Removes the select border while retaining the native control.`,name:`borderless`,required:!1,tags:{},type:{name:`boolean`}},floatingLabel:{defaultValue:null,declarations:[{fileName:`evo-react/src/select/types.ts`,name:`TypeLiteral`}],description:`Displays a label that rises when focused or when a value is selected.`,name:`floatingLabel`,required:!1,tags:{},type:{name:`string`}},fluid:{defaultValue:{value:`false`},declarations:[{fileName:`evo-react/src/select/types.ts`,name:`TypeLiteral`}],description:`Makes the select fill its containing block.`,name:`fluid`,required:!1,tags:{},type:{name:`boolean`}},size:{defaultValue:{value:`regular`},declarations:[{fileName:`evo-react/src/select/types.ts`,name:`TypeLiteral`}],description:'Selects the regular or large Skin treatment. Defaults to `"regular"`.',name:`size`,required:!1,tags:{},type:{name:`enum`,raw:`SelectSize`,value:[{value:`"large"`},{value:`"regular"`}]}},multiple:{defaultValue:null,declarations:[{fileName:`evo-react/src/select/types.ts`,name:`TypeLiteral`},{fileName:`evo-react/src/select/types.ts`,name:`TypeLiteral`}],description:`Selects one option at a time.
Allows more than one option to be selected.`,name:`multiple`,required:!1,tags:{},type:{name:`boolean`}},onValueChange:{defaultValue:null,declarations:[{fileName:`evo-react/src/select/types.ts`,name:`TypeLiteral`},{fileName:`evo-react/src/select/types.ts`,name:`TypeLiteral`}],description:`Called with the selected option value.
Called with all selected option values.`,name:`onValueChange`,required:!1,tags:{},type:{name:`((value: string) => void) | ((values: string[]) => void)`}}},tags:{summary:`Native select with Skin styling and optional floating label.`}}}catch{}})))()}function h({children:e,...t}){return(0,g.jsx)(`option`,{...t,children:e})}var g;function _(){return(_=t((()=>{g=r();try{h.displayName=`EvoSelectOption`,h.__docgenInfo={description:"An option in `EvoSelect` or `EvoSelectOptionGroup`.",displayName:`EvoSelectOption`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/select/select-option.tsx`,methods:[],props:{},tags:{summary:`Native select option.`}}}catch{}})))()}function v({children:e,...t}){return(0,y.jsx)(`optgroup`,{...t,children:e})}var y;function b(){return(b=t((()=>{y=r();try{v.displayName=`EvoSelectOptionGroup`,v.__docgenInfo={description:"Groups related `EvoSelectOption` elements under a visible `label`.",displayName:`EvoSelectOptionGroup`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/select/select-option-group.tsx`,methods:[],props:{label:{defaultValue:null,declarations:[{fileName:`evo-react/src/select/types.ts`,name:`TypeLiteral`}],description:`Names this group of related options.`,name:`label`,required:!0,tags:{},type:{name:`string`}}},tags:{summary:`Native select option group.`}}}catch{}})))()}var x,S,C,w,T;function E(){return(E=t((()=>{m(),_(),b(),x=r(),S={title:`Form Input/EvoSelect`,component:u,subcomponents:{EvoSelectOption:h,EvoSelectOptionGroup:v},argTypes:{size:{control:`select`,options:[`regular`,`large`]},borderless:{control:`boolean`},fluid:{control:`boolean`}},args:{"aria-label":`Shipping method`,name:`shipping-method`,size:`regular`}},C={render:e=>(0,x.jsxs)(u,{...e,children:[(0,x.jsx)(h,{value:``,children:`Choose a shipping method`}),(0,x.jsx)(h,{value:`standard`,children:`Standard shipping`}),(0,x.jsx)(h,{value:`express`,children:`Express shipping`})]})},w={render:e=>(0,x.jsxs)(u,{...e,floatingLabel:`Shipping method`,children:[(0,x.jsx)(h,{value:``,children:`Choose a shipping method`}),(0,x.jsxs)(v,{label:`Domestic`,children:[(0,x.jsx)(h,{value:`standard`,children:`Standard shipping`}),(0,x.jsx)(h,{value:`express`,children:`Express shipping`})]}),(0,x.jsx)(v,{label:`International`,children:(0,x.jsx)(h,{value:`global`,children:`Global shipping`})})]})},T=[`Default`,`WithGroups`],C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => <EvoSelect {...args}>
      <EvoSelectOption value="">Choose a shipping method</EvoSelectOption>
      <EvoSelectOption value="standard">Standard shipping</EvoSelectOption>
      <EvoSelectOption value="express">Express shipping</EvoSelectOption>
    </EvoSelect>
}`,...C.parameters?.docs?.source},description:{story:`A native select exposes its options to keyboard and assistive technology.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => <EvoSelect {...args} floatingLabel="Shipping method">
      <EvoSelectOption value="">Choose a shipping method</EvoSelectOption>
      <EvoSelectOptionGroup label="Domestic">
        <EvoSelectOption value="standard">Standard shipping</EvoSelectOption>
        <EvoSelectOption value="express">Express shipping</EvoSelectOption>
      </EvoSelectOptionGroup>
      <EvoSelectOptionGroup label="International">
        <EvoSelectOption value="global">Global shipping</EvoSelectOption>
      </EvoSelectOptionGroup>
    </EvoSelect>
}`,...w.parameters?.docs?.source},description:{story:`Explicit option groups preserve native optgroup markup.`,...w.parameters?.docs?.description}}}})))()}E();export{C as Default,w as WithGroups,T as __namedExportsOrder,S as default};