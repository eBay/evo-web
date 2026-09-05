import{j as e}from"./iframe-k8H2tOgC.js";/* empty css              */import{c as m}from"./index-eRnAsZC-.js";import{E as p,a as h}from"./checkbox-unchecked-18-CFOqShaZ.js";import{E as b,a as x}from"./checkbox-unchecked-24-h_tPl1fs.js";import"./preload-helper-PPVm8Dsz.js";import"./icon-CI4mDQZb.js";function s({className:o,ref:a,size:c,style:i,...d}){const t=c==="large";return e.jsxs("span",{className:m("checkbox",t&&"checkbox--large",o),style:i,children:[e.jsx("input",{...d,ref:a,className:"checkbox__control",type:"checkbox"}),e.jsx("span",{className:"checkbox__icon",hidden:!0,children:t?e.jsxs(e.Fragment,{children:[e.jsx(b,{className:"checkbox__unchecked"}),e.jsx(x,{className:"checkbox__checked"})]}):e.jsxs(e.Fragment,{children:[e.jsx(p,{className:"checkbox__unchecked"}),e.jsx(h,{className:"checkbox__checked"})]})})]})}try{s.displayName="EvoCheckbox",s.__docgenInfo={description:"",displayName:"EvoCheckbox",props:{size:{defaultValue:null,description:"Uses the large checkbox icon. Omit for the default size.",name:"size",required:!1,type:{name:'"large"'}}}}}catch{}const v={title:"form input/evo-checkbox",component:s,tags:["autodocs"],parameters:{docs:{description:{component:`
A native checkbox control styled with eBay Skin.

## Usage

\`\`\`tsx
import { EvoCheckbox } from "@evo-web/react/checkbox";
\`\`\`
        `}}},argTypes:{size:{control:"select",options:["large"]},checked:{control:"boolean"},defaultChecked:{control:"boolean"},disabled:{control:"boolean"},onChange:{action:"change",table:{category:"Events"}},onFocus:{action:"focus",table:{category:"Events"}},onKeyDown:{action:"keydown",table:{category:"Events"}}}},n={render:o=>e.jsxs("span",{className:"field",children:[e.jsx(s,{...o,className:"field__control",id:"checkbox"}),e.jsx("label",{className:"field__label field__label--end",htmlFor:"checkbox",children:"Option"})]})},r={args:{"aria-label":"Option"}},l={render:o=>e.jsxs("fieldset",{children:[e.jsx("legend",{children:"Choose an option"}),[1,2,3].map(a=>{const c=`checkbox-${a}`;return e.jsxs("span",{className:"field",children:[e.jsx(s,{...o,className:"field__control",id:c,name:"checkbox-group",value:a}),e.jsxs("label",{className:"field__label field__label--end",htmlFor:c,children:["Option ",a]})]},c)})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <span className="field">
      <EvoCheckbox {...args} className="field__control" id="checkbox" />
      <label className="field__label field__label--end" htmlFor="checkbox">
        Option
      </label>
    </span>
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-label": "Option"
  }
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <fieldset>
      <legend>Choose an option</legend>
      {[1, 2, 3].map(option => {
      const id = \`checkbox-\${option}\`;
      return <span className="field" key={id}>
            <EvoCheckbox {...args} className="field__control" id={id} name="checkbox-group" value={option} />
            <label className="field__label field__label--end" htmlFor={id}>
              Option {option}
            </label>
          </span>;
    })}
    </fieldset>
}`,...l.parameters?.docs?.source}}};const E=["Default","Isolated","Group"];export{n as Default,l as Group,r as Isolated,E as __namedExportsOrder,v as default};
