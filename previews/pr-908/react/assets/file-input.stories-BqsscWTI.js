import{r as a,j as t}from"./iframe-BrHXHCNP.js";import{c as l}from"./index-D-knZIDR.js";import{E as T}from"./upload-24-D5lz37Pl.js";import"./preload-helper-PPVm8Dsz.js";import"./icon-Bcvhqsfb.js";const v=a.createContext(null);function A(){const e=a.use(v);if(!e)throw new Error("EvoFileInputCTA must be used within an EvoFileInput component");return e}function _({inputId:e,children:n}){const o=a.useMemo(()=>({inputId:e}),[e]);return t.jsx(v,{value:o,children:n})}try{_.displayName="FileInputProvider",_.__docgenInfo={description:"",displayName:"FileInputProvider",props:{inputId:{defaultValue:null,description:"",name:"inputId",required:!0,type:{name:"string"}}}}}catch{}function c({children:e,className:n,id:o,ref:i,onDragEnter:I,onDragOver:g,onDragLeave:h,onDrop:E,style:y,...F}){const x=a.useId(),f=o??x,[N,s]=a.useState(!1),j=r=>{s(!0),I?.(r)},D=r=>{s(!0),g?.(r)},b=r=>{s(!1),h?.(r)},C=r=>{s(!1),E?.(r)};return t.jsx(_,{inputId:f,children:t.jsxs("div",{className:l("file-input",n),style:y,children:[t.jsxs("div",{className:l("file-input__container",N&&"file-input___container--dragged-over"),children:[t.jsx("div",{className:"file-input__upload-icon",children:t.jsx(T,{})}),t.jsx("div",{className:"file-input__content",children:e})]}),t.jsx("input",{...F,ref:i,id:f,type:"file",className:"file-input__input",onDragEnter:j,onDragOver:D,onDragLeave:b,onDrop:C})]})})}try{c.displayName="EvoFileInput",c.__docgenInfo={description:"",displayName:"EvoFileInput",props:{}}}catch{}function d({as:e="span",className:n,children:o,...i}){return t.jsx(e,{...i,className:l("file-input__content-header",n),children:o})}try{d.displayName="EvoFileInputHeader",d.__docgenInfo={description:"",displayName:"EvoFileInputHeader",props:{as:{defaultValue:{value:"span"},description:'HTML element to render as the header. Defaults to `span`.\nUse a heading element (e.g. `"h2"`) for semantic heading hierarchy.',name:"as",required:!1,type:{name:"ElementType"}}}}}catch{}function u({className:e,children:n,...o}){return t.jsx("span",{...o,className:l("file-input__content-subheader",e),children:n})}try{u.displayName="EvoFileInputDescription",u.__docgenInfo={description:"",displayName:"EvoFileInputDescription",props:{}}}catch{}function m({className:e,children:n,...o}){const{inputId:i}=A();return t.jsx("label",{...o,htmlFor:i,className:e,children:t.jsx("span",{className:"file-input__content-cta",children:n})})}try{m.displayName="EvoFileInputCTA",m.__docgenInfo={description:"",displayName:"EvoFileInputCTA",props:{}}}catch{}const S={title:"form input/evo-file-input",component:c,subcomponents:{EvoFileInputHeader:d,EvoFileInputDescription:u,EvoFileInputCTA:m},tags:["autodocs"],parameters:{docs:{description:{component:`
A styled \`<input type="file">\` composed with named sub-components for the header, description, and call-to-action label.

## Usage

\`\`\`tsx
import {
  EvoFileInput,
  EvoFileInputHeader,
  EvoFileInputDescription,
  EvoFileInputCTA,
} from "@evo-web/react/file-input";
\`\`\`
        `}}},argTypes:{multiple:{control:"boolean",description:"Whether multiple files can be selected."},disabled:{control:"boolean"},accept:{control:"text",description:"Comma-separated list of accepted file types."},onChange:{action:"change",table:{category:"Events"}}}},p={render:e=>t.jsxs(c,{...e,children:[t.jsx(d,{children:"Upload your files"}),t.jsx(u,{children:"Supported formats: JPG, PNG"}),t.jsx(m,{children:"Browse files"})]})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <EvoFileInput {...args}>
      <EvoFileInputHeader>Upload your files</EvoFileInputHeader>
      <EvoFileInputDescription>
        Supported formats: JPG, PNG
      </EvoFileInputDescription>
      <EvoFileInputCTA>Browse files</EvoFileInputCTA>
    </EvoFileInput>
}`,...p.parameters?.docs?.source}}};const L=["Default"];export{p as Default,L as __namedExportsOrder,S as default};
