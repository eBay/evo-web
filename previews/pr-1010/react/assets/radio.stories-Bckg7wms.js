import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{t as n}from"./field-CbbNu1w4.js";import{n as r,t as i}from"./radio-DRzMpCh1.js";var a,o,s,c,l,u;function d(){return(d=e((()=>{r(),n(),a=t(),o={title:`Form Input/EvoRadio`,component:i,argTypes:{size:{control:`select`,options:[`large`]},checked:{control:`boolean`},defaultChecked:{control:`boolean`},disabled:{control:`boolean`},onChange:{action:`change`,table:{category:`Events`}},onFocus:{action:`focus`,table:{category:`Events`}},onKeyDown:{action:`keydown`,table:{category:`Events`}}}},s={render:e=>(0,a.jsxs)(`span`,{className:`field`,children:[(0,a.jsx)(i,{...e,className:`field__control`,id:`standard-shipping`}),(0,a.jsx)(`label`,{className:`field__label field__label--end`,htmlFor:`standard-shipping`,children:`Standard shipping`})]})},c={args:{"aria-label":`Select standard shipping`}},l={render:e=>(0,a.jsxs)(`fieldset`,{children:[(0,a.jsx)(`legend`,{children:`Choose a shipping service`}),[{id:`standard`,label:`Standard shipping`},{id:`expedited`,label:`Expedited shipping`},{id:`local-pickup`,label:`Local pickup`}].map(({id:t,label:n})=>(0,a.jsxs)(`span`,{className:`field`,children:[(0,a.jsx)(i,{...e,className:`field__control`,id:t,name:`radio-group`,value:t}),(0,a.jsx)(`label`,{className:`field__label field__label--end`,htmlFor:t,children:n})]},t))]})},u=[`Default`,`Isolated`,`Group`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <span className="field">
      <EvoRadio {...args} className="field__control" id="standard-shipping" />
      <label className="field__label field__label--end" htmlFor="standard-shipping">
        Standard shipping
      </label>
    </span>
}`,...s.parameters?.docs?.source},description:{story:`A visible label names the radio in a standard form.`,...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-label": "Select standard shipping"
  }
}`,...c.parameters?.docs?.source},description:{story:`An accessible name labels the radio without visible text.`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source},description:{story:`A fieldset groups mutually exclusive choices under a shared legend and name.`,...l.parameters?.docs?.description}}}})))()}d();export{s as Default,l as Group,c as Isolated,u as __namedExportsOrder,o as default};