import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{t as r}from"./classnames-D09xBJOL.js";import{t as i}from"./field-CbbNu1w4.js";import{i as a,n as o,r as s,t as c}from"./radio-unchecked-18-BD6yjJKc.js";import{i as l,n as u,r as d,t as f}from"./radio-unchecked-24-DsPYZZZy.js";function p(){return(p=t((()=>{})))()}function m({className:e,ref:t,size:n,style:r,...i}){let a=n===`large`;return(0,g.jsxs)(`span`,{className:(0,h.default)(`radio`,a&&`radio--large`,e),style:r,children:[(0,g.jsx)(`input`,{...i,ref:t,className:`radio__control`,type:`radio`}),(0,g.jsx)(`span`,{className:`radio__icon`,hidden:!0,children:a?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(f,{className:`radio__unchecked`}),(0,g.jsx)(d,{className:`radio__checked`})]}):(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(c,{className:`radio__unchecked`}),(0,g.jsx)(s,{className:`radio__checked`})]})})]})}var h,g;function _(){return(_=t((()=>{h=e(r(),1),a(),l(),o(),u(),p(),g=n();try{m.displayName=`EvoRadio`,m.__docgenInfo={description:`Radio buttons allow the user to select one option from a set.

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
\`\`\``,displayName:`EvoRadio`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/radio/radio.tsx`,methods:[],props:{size:{defaultValue:null,declarations:[{fileName:`evo-react/src/radio/types.ts`,name:`TypeLiteral`}],description:`Uses the large radio icon. Omit for the default size.`,name:`size`,required:!1,tags:{},type:{name:`enum`,raw:`"large"`,value:[{value:`"large"`}]}}},tags:{summary:`Native radio button with Skin styling.`}}}catch{}})))()}var v,y,b,x,S,C;function w(){return(w=t((()=>{_(),i(),v=n(),y={title:`Form Input/EvoRadio`,component:m,argTypes:{size:{control:`select`,options:[`large`]},checked:{control:`boolean`},defaultChecked:{control:`boolean`},disabled:{control:`boolean`},onChange:{action:`change`,table:{category:`Events`}},onFocus:{action:`focus`,table:{category:`Events`}},onKeyDown:{action:`keydown`,table:{category:`Events`}}}},b={render:e=>(0,v.jsxs)(`span`,{className:`field`,children:[(0,v.jsx)(m,{...e,className:`field__control`,id:`standard-shipping`}),(0,v.jsx)(`label`,{className:`field__label field__label--end`,htmlFor:`standard-shipping`,children:`Standard shipping`})]})},x={args:{"aria-label":`Select standard shipping`}},S={render:e=>(0,v.jsxs)(`fieldset`,{children:[(0,v.jsx)(`legend`,{children:`Choose a shipping service`}),[{id:`standard`,label:`Standard shipping`},{id:`expedited`,label:`Expedited shipping`},{id:`local-pickup`,label:`Local pickup`}].map(({id:t,label:n})=>(0,v.jsxs)(`span`,{className:`field`,children:[(0,v.jsx)(m,{...e,className:`field__control`,id:t,name:`radio-group`,value:t}),(0,v.jsx)(`label`,{className:`field__label field__label--end`,htmlFor:t,children:n})]},t))]})},C=[`Default`,`Isolated`,`Group`],b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <span className="field">
      <EvoRadio {...args} className="field__control" id="standard-shipping" />
      <label className="field__label field__label--end" htmlFor="standard-shipping">
        Standard shipping
      </label>
    </span>
}`,...b.parameters?.docs?.source},description:{story:`A visible label names the radio in a standard form.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-label": "Select standard shipping"
  }
}`,...x.parameters?.docs?.source},description:{story:`An accessible name labels the radio without visible text.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => <fieldset>
      <legend>Choose a shipping service</legend>
      {[{
      id: "standard",
      label: "Standard shipping"
    }, {
      id: "expedited",
      label: "Expedited shipping"
    }, {
      id: "local-pickup",
      label: "Local pickup"
    }].map(({
      id,
      label
    }) => {
      return <span className="field" key={id}>
            <EvoRadio {...args} className="field__control" id={id} name="radio-group" value={id} />
            <label className="field__label field__label--end" htmlFor={id}>
              {label}
            </label>
          </span>;
    })}
    </fieldset>
}`,...S.parameters?.docs?.source},description:{story:`A fieldset groups mutually exclusive choices under a shared legend and name.`,...S.parameters?.docs?.description}}}})))()}w();export{b as Default,S as Group,x as Isolated,C as __namedExportsOrder,y as default};