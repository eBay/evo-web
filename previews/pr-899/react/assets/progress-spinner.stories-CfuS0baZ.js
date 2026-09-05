import{j as o}from"./iframe-D13G7DjE.js";import{c as p}from"./index-jc4nkU0l.js";import{E as l,a as c,b as m}from"./spinner-30-BnaHxPtp.js";import"./preload-helper-PPVm8Dsz.js";import"./icon-CkCVTWLK.js";function s({a11yText:n="Loading",size:r,className:a,...t}){const i=r==="large"?l:r==="small"?c:m;return o.jsx("span",{...t,"aria-label":n??void 0,className:p("progress-spinner",r==="large"&&"progress-spinner--large",a),role:"img",children:o.jsx(i,{})})}try{s.displayName="EvoProgressSpinner",s.__docgenInfo={description:"",displayName:"EvoProgressSpinner",props:{a11yText:{defaultValue:{value:"Loading"},description:'Localized accessible label that describes the progress spinner.\nEnglish default to be overridden is `"Loading"`.\nPass `null` explicitly _only_ if alternative accessibility information is present.',name:"a11yText",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"Spinner size. Omit for the default 24px spinner.",name:"size",required:!1,type:{name:"SpinnerSize"}}}}}catch{}const x={title:"progress/evo-progress-spinner",component:s,tags:["autodocs"],parameters:{docs:{description:{component:`
A progress spinner that communicates an ongoing operation.

## Usage

\`\`\`tsx
import { EvoProgressSpinner } from "@evo-web/react/progress-spinner";
\`\`\`
        `}}},argTypes:{size:{control:"select",options:["small","large"]},a11yText:{type:{name:"string",required:!0},control:"text"}},args:{a11yText:"Loading"}},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const v=["Default"];export{e as Default,v as __namedExportsOrder,x as default};
