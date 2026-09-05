import{j as e}from"./iframe-DQj41_o1.js";/* empty css              */import{c as m}from"./index-DBCV8iKu.js";import{E as p,a as _}from"./radio-unchecked-18-iEIFx-9K.js";import{E as u,a as f}from"./radio-unchecked-24-DNwFzQ-j.js";import"./preload-helper-PPVm8Dsz.js";import"./icon-t9DYjfmM.js";function r({className:a,ref:o,size:s,style:t,...c}){const d=s==="large";return e.jsxs("span",{className:m("radio",d&&"radio--large",a),style:t,children:[e.jsx("input",{...c,ref:o,className:"radio__control",type:"radio"}),e.jsx("span",{className:"radio__icon",hidden:!0,children:d?e.jsxs(e.Fragment,{children:[e.jsx(u,{className:"radio__unchecked"}),e.jsx(f,{className:"radio__checked"})]}):e.jsxs(e.Fragment,{children:[e.jsx(p,{className:"radio__unchecked"}),e.jsx(_,{className:"radio__checked"})]})})]})}try{r.displayName="EvoRadio",r.__docgenInfo={description:"",displayName:"EvoRadio",props:{size:{defaultValue:null,description:"Uses the large radio icon. Omit for the default size.",name:"size",required:!1,type:{name:'"large"'}}}}}catch{}const E={title:"form input/evo-radio",component:r,tags:["autodocs"],parameters:{docs:{description:{component:`
A native radio control styled with eBay Skin.

## Usage

\`\`\`tsx
import { EvoRadio } from "@evo-web/react/radio";
\`\`\`
        `}}},argTypes:{size:{control:"select",options:["large"]},checked:{control:"boolean"},defaultChecked:{control:"boolean"},disabled:{control:"boolean"},onChange:{action:"change",table:{category:"Events"}},onFocus:{action:"focus",table:{category:"Events"}},onKeyDown:{action:"keydown",table:{category:"Events"}}}},n={render:a=>e.jsxs("span",{className:"field",children:[e.jsx(r,{...a,className:"field__control",id:"radio"}),e.jsx("label",{className:"field__label field__label--end",htmlFor:"radio",children:"Option"})]})},l={args:{"aria-label":"Option"}},i={render:a=>e.jsxs("fieldset",{children:[e.jsx("legend",{children:"Choose an option"}),[1,2,3].map(o=>{const s=`radio-${o}`;return e.jsxs("span",{className:"field",children:[e.jsx(r,{...a,className:"field__control",id:s,name:"radio-group",value:o}),e.jsxs("label",{className:"field__label field__label--end",htmlFor:s,children:["Option ",o]})]},s)})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <span className="field">
      <EvoRadio {...args} className="field__control" id="radio" />
      <label className="field__label field__label--end" htmlFor="radio">
        Option
      </label>
    </span>
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-label": "Option"
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <fieldset>
      <legend>Choose an option</legend>
      {[1, 2, 3].map(option => {
      const id = \`radio-\${option}\`;
      return <span className="field" key={id}>
            <EvoRadio {...args} className="field__control" id={id} name="radio-group" value={option} />
            <label className="field__label field__label--end" htmlFor={id}>
              Option {option}
            </label>
          </span>;
    })}
    </fieldset>
}`,...i.parameters?.docs?.source}}};const y=["Default","Isolated","Group"];export{n as Default,i as Group,l as Isolated,y as __namedExportsOrder,E as default};
