import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{t as r}from"./classnames-D09xBJOL.js";import{t as i}from"./field-CbbNu1w4.js";import{i as a,n as o,r as s,t as c}from"./checkbox-unchecked-18-EF6I8tuT.js";import{i as l,n as u,r as d,t as f}from"./checkbox-unchecked-24-DuAcY9Pe.js";function p(){return(p=t((()=>{})))()}function m({className:e,ref:t,size:n,style:r,...i}){let a=n===`large`;return(0,g.jsxs)(`span`,{className:(0,h.default)(`checkbox`,a&&`checkbox--large`,e),style:r,children:[(0,g.jsx)(`input`,{...i,ref:t,className:`checkbox__control`,type:`checkbox`}),(0,g.jsx)(`span`,{className:`checkbox__icon`,hidden:!0,children:a?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(f,{className:`checkbox__unchecked`}),(0,g.jsx)(d,{className:`checkbox__checked`})]}):(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(c,{className:`checkbox__unchecked`}),(0,g.jsx)(s,{className:`checkbox__checked`})]})})]})}var h,g;function _(){return(_=t((()=>{h=e(r(),1),a(),l(),o(),u(),p(),g=n();try{m.displayName=`EvoCheckbox`,m.__docgenInfo={description:`Checkboxes allow the user to select multiple options from a list or a single
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
\`\`\``,displayName:`EvoCheckbox`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/checkbox/checkbox.tsx`,methods:[],props:{size:{defaultValue:null,declarations:[{fileName:`evo-react/src/checkbox/types.ts`,name:`TypeLiteral`}],description:`Uses the large checkbox icon. Omit for the default size.`,name:`size`,required:!1,tags:{},type:{name:`enum`,raw:`"large"`,value:[{value:`"large"`}]}}},tags:{summary:`Native checkbox with Skin styling.`}}}catch{}})))()}var v,y,b,x,S,C;function w(){return(w=t((()=>{_(),i(),v=n(),y={title:`Form Input/EvoCheckbox`,component:m,argTypes:{size:{control:`select`,options:[`large`]},checked:{control:`boolean`},defaultChecked:{control:`boolean`},disabled:{control:`boolean`},onChange:{action:`change`,table:{category:`Events`}},onFocus:{action:`focus`,table:{category:`Events`}},onKeyDown:{action:`keydown`,table:{category:`Events`}}}},b={render:e=>(0,v.jsxs)(`span`,{className:`field`,children:[(0,v.jsx)(m,{...e,className:`field__control`,id:`accept-offers`}),(0,v.jsx)(`label`,{className:`field__label field__label--end`,htmlFor:`accept-offers`,children:`Accept offers`})]})},x={args:{"aria-label":`Save this search`}},S={render:e=>(0,v.jsxs)(`fieldset`,{children:[(0,v.jsx)(`legend`,{children:`Delivery options`}),[{id:`free-shipping`,label:`Free shipping`},{id:`local-pickup`,label:`Local pickup`},{id:`returns-accepted`,label:`Returns accepted`}].map(({id:t,label:n})=>(0,v.jsxs)(`span`,{className:`field`,children:[(0,v.jsx)(m,{...e,className:`field__control`,id:t,name:`checkbox-group`,value:t}),(0,v.jsx)(`label`,{className:`field__label field__label--end`,htmlFor:t,children:n})]},t))]})},C=[`Default`,`Isolated`,`Group`],b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <span className="field">
      <EvoCheckbox {...args} className="field__control" id="accept-offers" />
      <label className="field__label field__label--end" htmlFor="accept-offers">
        Accept offers
      </label>
    </span>
}`,...b.parameters?.docs?.source},description:{story:`A visible label names the checkbox in a standard form.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-label": "Save this search"
  }
}`,...x.parameters?.docs?.source},description:{story:`An accessible name labels the checkbox without visible text.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => <fieldset>
      <legend>Delivery options</legend>
      {[{
      id: "free-shipping",
      label: "Free shipping"
    }, {
      id: "local-pickup",
      label: "Local pickup"
    }, {
      id: "returns-accepted",
      label: "Returns accepted"
    }].map(({
      id,
      label
    }) => {
      return <span className="field" key={id}>
            <EvoCheckbox {...args} className="field__control" id={id} name="checkbox-group" value={id} />
            <label className="field__label field__label--end" htmlFor={id}>
              {label}
            </label>
          </span>;
    })}
    </fieldset>
}`,...S.parameters?.docs?.source},description:{story:`A fieldset groups independent choices under a shared legend.`,...S.parameters?.docs?.description}}}})))()}w();export{b as Default,S as Group,x as Isolated,C as __namedExportsOrder,y as default};