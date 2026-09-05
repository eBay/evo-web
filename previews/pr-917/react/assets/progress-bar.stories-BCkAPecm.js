import{j as p}from"./iframe-C6UuLfLN.js";import{c}from"./index-C8RT2u9f.js";import"./preload-helper-PPVm8Dsz.js";function r({a11yText:s,value:a,max:o=100,fluid:t,className:i,ref:l,...n}){return p.jsx("progress",{...n,ref:l,"aria-label":s??void 0,className:c("progress-bar",i,{"progress-bar--fluid":t}),value:a,max:o})}try{r.displayName="EvoProgressBar",r.__docgenInfo={description:"",displayName:"EvoProgressBar",props:{a11yText:{defaultValue:null,description:"Accessible label for the progress bar. Callers must provide a localized accessible label.\nPass `null` explicitly _only_ if alternative accessibility information is present.",name:"a11yText",required:!0,type:{name:"string"}},fluid:{defaultValue:null,description:"Fills the container width.",name:"fluid",required:!1,type:{name:"boolean"}}}}}catch{}const g={title:"progress/evo-progress-bar",component:r,tags:["autodocs"],parameters:{docs:{description:{component:`
The progress bar gives an immediate, real-time visualisation of the current task completion status.

## Usage

\`\`\`tsx
import { EvoProgressBar } from "@evo-web/react/progress-bar";
\`\`\`
        `}}},argTypes:{value:{control:"number",description:"Current progress value. Omit for indeterminate progress."},max:{control:"number",description:"Maximum progress value. Defaults to 100."},fluid:{control:"boolean"},a11yText:{type:{name:"string",required:!0},control:"text"}},args:{a11yText:"Task progress",value:50,max:100,fluid:!1}},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const f=["Default"];export{e as Default,f as __namedExportsOrder,g as default};
