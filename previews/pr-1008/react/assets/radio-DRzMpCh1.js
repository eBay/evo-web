import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{t as r}from"./classnames-D09xBJOL.js";import{i,n as a,r as o,t as s}from"./radio-unchecked-18-BSYMtWBj.js";import{i as c,n as l,r as u,t as d}from"./radio-unchecked-24-B2qyTNwS.js";function f(){return(f=t((()=>{})))()}function p({className:e,ref:t,size:n,style:r,...i}){let a=n===`large`;return(0,h.jsxs)(`span`,{className:(0,m.default)(`radio`,a&&`radio--large`,e),style:r,children:[(0,h.jsx)(`input`,{...i,ref:t,className:`radio__control`,type:`radio`}),(0,h.jsx)(`span`,{className:`radio__icon`,hidden:!0,children:a?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(d,{className:`radio__unchecked`}),(0,h.jsx)(u,{className:`radio__checked`})]}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(s,{className:`radio__unchecked`}),(0,h.jsx)(o,{className:`radio__checked`})]})})]})}var m,h;function g(){return(g=t((()=>{m=e(r(),1),i(),c(),a(),l(),f(),h=n();try{p.displayName=`EvoRadio`,p.__docgenInfo={description:`Radio buttons allow the user to select one option from a set.

Options in a group share a \`name\`, and the group needs a visible \`<legend>\`.
\`EvoRadio\` accepts native radio props and supports \`size="large"\`. The native
control is an \`<input type="radio">\`.

## Usage

\`\`\`tsx
import { EvoRadio } from "@evo-web/react/radio";

<fieldset>
  <legend>Delivery method</legend>
  <label>
    <EvoRadio name="delivery" value="standard" />
    Standard
  </label>
  <label>
    <EvoRadio name="delivery" value="express" />
    Express
  </label>
</fieldset>
\`\`\``,displayName:`EvoRadio`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/radio/radio.tsx`,methods:[],props:{size:{defaultValue:null,declarations:[{fileName:`evo-react/src/radio/types.ts`,name:`TypeLiteral`}],description:`Uses the large radio icon. Omit for the default size.`,name:`size`,required:!1,tags:{},type:{name:`enum`,raw:`"large"`,value:[{value:`"large"`}]}}},tags:{summary:`Native radio button with Skin styling.`}}}catch{}})))()}export{g as n,p as t};