import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{t as r}from"./classnames-D09xBJOL.js";import{t as i}from"./field-CbbNu1w4.js";import{i as a,n as o,r as s,t as c}from"./checkbox-unchecked-18-6Me4urUq.js";import{i as l,n as u,r as d,t as f}from"./checkbox-unchecked-24-D8d_sfdu.js";function p(){return(p=t((()=>{})))()}function m({className:e,ref:t,size:n,style:r,...i}){let a=n===`large`;return(0,g.jsxs)(`span`,{className:(0,h.default)(`checkbox`,a&&`checkbox--large`,e),style:r,children:[(0,g.jsx)(`input`,{...i,ref:t,className:`checkbox__control`,type:`checkbox`}),(0,g.jsx)(`span`,{className:`checkbox__icon`,hidden:!0,children:a?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(f,{className:`checkbox__unchecked`}),(0,g.jsx)(d,{className:`checkbox__checked`})]}):(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(c,{className:`checkbox__unchecked`}),(0,g.jsx)(s,{className:`checkbox__checked`})]})})]})}var h,g;function _(){return(_=t((()=>{h=e(r(),1),a(),l(),o(),u(),p(),g=n();try{m.displayName=`EvoCheckbox`,m.__docgenInfo={description:``,displayName:`EvoCheckbox`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/checkbox/checkbox.tsx`,methods:[],props:{size:{defaultValue:null,declarations:[{fileName:`evo-react/src/checkbox/types.ts`,name:`TypeLiteral`}],description:`Uses the large checkbox icon. Omit for the default size.`,name:`size`,required:!1,tags:{},type:{name:`"large" | undefined`}}},tags:{}}}catch{}})))()}var v,y,b,x,S,C;function w(){return(w=t((()=>{_(),i(),v=n(),y={title:`form input/evo-checkbox`,component:m,tags:[`autodocs`],parameters:{docs:{description:{component:`
A native checkbox control styled with eBay Skin.

## Usage

\`\`\`tsx
import { EvoCheckbox } from "@evo-web/react/checkbox";
\`\`\`
        `}}},argTypes:{size:{control:`select`,options:[`large`]},checked:{control:`boolean`},defaultChecked:{control:`boolean`},disabled:{control:`boolean`},onChange:{action:`change`,table:{category:`Events`}},onFocus:{action:`focus`,table:{category:`Events`}},onKeyDown:{action:`keydown`,table:{category:`Events`}}}},b={render:e=>(0,v.jsxs)(`span`,{className:`field`,children:[(0,v.jsx)(m,{...e,className:`field__control`,id:`checkbox`}),(0,v.jsx)(`label`,{className:`field__label field__label--end`,htmlFor:`checkbox`,children:`Option`})]})},x={args:{"aria-label":`Option`}},S={render:e=>(0,v.jsxs)(`fieldset`,{children:[(0,v.jsx)(`legend`,{children:`Choose an option`}),[1,2,3].map(t=>{let n=`checkbox-${t}`;return(0,v.jsxs)(`span`,{className:`field`,children:[(0,v.jsx)(m,{...e,className:`field__control`,id:n,name:`checkbox-group`,value:t}),(0,v.jsxs)(`label`,{className:`field__label field__label--end`,htmlFor:n,children:[`Option `,t]})]},n)})]})},C=[`Default`,`Isolated`,`Group`],b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <span className="field">
      <EvoCheckbox {...args} className="field__control" id="checkbox" />
      <label className="field__label field__label--end" htmlFor="checkbox">
        Option
      </label>
    </span>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-label": "Option"
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}}})))()}w();export{b as Default,S as Group,x as Isolated,C as __namedExportsOrder,y as default};