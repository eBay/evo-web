import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{t as r}from"./classnames-D09xBJOL.js";import{i,n as a,r as o,t as s}from"./checkbox-unchecked-18-BDJIqbgB.js";import{i as c,n as l,r as u,t as d}from"./checkbox-unchecked-24-uAVlmLUW.js";function f(){return(f=t((()=>{})))()}function p({className:e,ref:t,size:n,style:r,...i}){let a=n===`large`;return(0,h.jsxs)(`span`,{className:(0,m.default)(`checkbox`,a&&`checkbox--large`,e),style:r,children:[(0,h.jsx)(`input`,{...i,ref:t,className:`checkbox__control`,type:`checkbox`}),(0,h.jsx)(`span`,{className:`checkbox__icon`,hidden:!0,children:a?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(d,{className:`checkbox__unchecked`}),(0,h.jsx)(u,{className:`checkbox__checked`})]}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(s,{className:`checkbox__unchecked`}),(0,h.jsx)(o,{className:`checkbox__checked`})]})})]})}var m,h;function g(){return(g=t((()=>{m=e(r(),1),i(),c(),a(),l(),f(),h=n();try{p.displayName=`EvoCheckbox`,p.__docgenInfo={description:`Checkboxes allow the user to select multiple options from a list or a single
yes/no option.

\`EvoCheckbox\` accepts native checkbox props and supports \`size="large"\`. Provide
a visible label or an accessible name for the \`<input type="checkbox">\`.

## Usage

\`\`\`tsx
import { EvoCheckbox } from "@evo-web/react/checkbox";

<label>
  <EvoCheckbox name="updates" />
  Send me updates
</label>
\`\`\``,displayName:`EvoCheckbox`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/checkbox/checkbox.tsx`,methods:[],props:{size:{defaultValue:null,declarations:[{fileName:`evo-react/src/checkbox/types.ts`,name:`TypeLiteral`}],description:`Uses the large checkbox icon. Omit for the default size.`,name:`size`,required:!1,tags:{},type:{name:`enum`,raw:`"large"`,value:[{value:`"large"`}]}}},tags:{summary:`Native checkbox with Skin styling.`}}}catch{}})))()}export{g as n,f as r,p as t};