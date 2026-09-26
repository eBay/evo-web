import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{t as r}from"./classnames-D09xBJOL.js";import{n as i,t as a}from"./input-Dv6N7F-V.js";import{t as o}from"./field-CbbNu1w4.js";import{n as s,t as c}from"./checkbox-p-LelUM3.js";function l({type:e,position:t=`below`,className:n,children:r,...i}){let a=(0,u.default)(`field__description`,e&&`field__description--${e}`,n);return t===`below`?(0,d.jsx)(`div`,{...i,className:a,children:r}):(0,d.jsx)(`span`,{...i,className:a,children:r})}var u,d;function f(){return(f=t((()=>{u=e(r(),1),o(),d=n();try{l.displayName=`EvoFieldDescription`,l.__docgenInfo={description:"Adds supporting or status text to a field. Give it an `id` and reference that\nID from the control's `aria-describedby`.",displayName:`EvoFieldDescription`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/field/description.tsx`,methods:[],props:{type:{defaultValue:null,declarations:[{fileName:`evo-react/src/field/types.ts`,name:`TypeLiteral`}],description:`Sets the helper or status treatment. Omit for unmodified supporting text.`,name:`type`,required:!1,tags:{},type:{name:`enum`,raw:`FieldDescriptionType`,value:[{value:`"group"`},{value:`"default"`},{value:`"confirmation"`},{value:`"information"`},{value:`"attention"`}]}},position:{defaultValue:{value:`below`},declarations:[{fileName:`evo-react/src/field/types.ts`,name:`TypeLiteral`},{fileName:`evo-react/src/field/types.ts`,name:`TypeLiteral`}],description:"Places the description below the control in a `<div>`. This is the default.\nPlaces the description inline or above the control in a `<span>`.",name:`position`,required:!1,tags:{},type:{name:`enum`,raw:`"inline" | "below" | "above"`,value:[{value:`"inline"`},{value:`"below"`},{value:`"above"`}]}}},tags:{summary:`Field description or status text.`}}}catch{}})))()}function p({layout:e=`inline`,className:t,children:n,...r}){let i=(0,m.default)(`field`,t);return e===`block`?(0,h.jsx)(`div`,{...r,className:i,children:n}):(0,h.jsx)(`span`,{...r,className:i,children:n})}var m,h;function g(){return(g=t((()=>{m=e(r(),1),o(),h=n();try{p.displayName=`EvoField`,p.__docgenInfo={description:`Fields arrange a form control with its label, supporting text, and optional
related controls.

\`EvoField\` supplies layout only. Connect \`EvoLabel\` with the control's \`id\`
through \`htmlFor\`, and connect \`EvoFieldDescription\` through the control's
\`aria-describedby\`. Use a \`<fieldset>\` and \`<legend>\` for related controls.

## Usage

\`\`\`tsx
import { EvoField, EvoFieldDescription, EvoLabel } from "@evo-web/react/field";

<EvoField layout="block">
  <EvoLabel htmlFor="listing-title" stacked required>
    Listing title
  </EvoLabel>
  <input id="listing-title" required aria-describedby="title-help" />
  <EvoFieldDescription id="title-help">
    Include the item's brand and model.
  </EvoFieldDescription>
</EvoField>
\`\`\``,displayName:`EvoField`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/field/field.tsx`,methods:[],props:{layout:{defaultValue:{value:`inline`},declarations:[{fileName:`evo-react/src/field/types.ts`,name:`TypeLiteral`},{fileName:`evo-react/src/field/types.ts`,name:`TypeLiteral`}],description:"Uses the inline `<span>` field wrapper. This is the default.\nUses a block `<div>` field wrapper.",name:`layout`,required:!1,tags:{},type:{name:`enum`,raw:`"inline" | "block"`,value:[{value:`"inline"`},{value:`"block"`}]}}},tags:{summary:`Form control layout with optional label and description parts.`}}}catch{}})))()}function _({className:e,children:t,stacked:n=!1,required:r=!1,position:i=`start`,...a}){return(0,y.jsxs)(`label`,{...a,className:(0,v.default)(`field__label`,n&&`field__label--stacked`,i===`end`&&`field__label--end`,e),children:[t,r&&(0,y.jsxs)(y.Fragment,{children:[` `,(0,y.jsx)(`sup`,{"aria-hidden":`true`,children:`*`})]})]})}var v,y;function b(){return(b=t((()=>{v=e(r(),1),o(),y=n();try{_.displayName=`EvoLabel`,_.__docgenInfo={description:"Names a field control. Set `htmlFor` to the control's `id`; `required` adds\nonly the visual mark, so the control also needs native `required`.",displayName:`EvoLabel`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/field/label.tsx`,methods:[],props:{stacked:{defaultValue:{value:`false`},declarations:[{fileName:`evo-react/src/field/types.ts`,name:`TypeLiteral`}],description:"Places the label above its associated control. Defaults to `false`.",name:`stacked`,required:!1,tags:{},type:{name:`boolean`}},required:{defaultValue:{value:`false`},declarations:[{fileName:`evo-react/src/field/types.ts`,name:`TypeLiteral`}],description:"Adds a visible asterisk; also set `required` on the control itself.",name:`required`,required:!1,tags:{},type:{name:`boolean`}},position:{defaultValue:{value:`start`},declarations:[{fileName:`evo-react/src/field/types.ts`,name:`TypeLiteral`}],description:'Places the label before or after the control. Defaults to `"start"`.',name:`position`,required:!1,tags:{},type:{name:`enum`,raw:`LabelPosition`,value:[{value:`"start"`},{value:`"end"`}]}}},tags:{summary:`Associated field label.`}}}catch{}})))()}var x,S,C,w,T,E;function D(){return(D=t((()=>{s(),i(),f(),g(),b(),x=n(),S={title:`Form Input/EvoField`,component:p,subcomponents:{EvoLabel:_,EvoFieldDescription:l},argTypes:{layout:{control:`select`,options:[`inline`,`block`]}},args:{layout:`inline`}},C={render:e=>(0,x.jsxs)(p,{...e,children:[(0,x.jsx)(_,{htmlFor:`buyer-email`,children:`Email address`}),(0,x.jsx)(a,{id:`buyer-email`,type:`email`,autoComplete:`email`})]})},w={args:{layout:`block`},render:e=>(0,x.jsxs)(p,{...e,children:[(0,x.jsx)(_,{htmlFor:`listing-title`,stacked:!0,required:!0,children:`Listing title`}),(0,x.jsx)(a,{id:`listing-title`,required:!0,"aria-describedby":`listing-title-help`,placeholder:`Brand, model, and item type`}),(0,x.jsx)(l,{id:`listing-title-help`,children:`Include the brand and model so buyers can find your listing.`})]})},T={render:e=>(0,x.jsxs)(p,{...e,children:[(0,x.jsx)(c,{id:`watch-search`,name:`watch-search`}),(0,x.jsx)(_,{htmlFor:`watch-search`,position:`end`,children:`Save this search`})]})},E=[`Default`,`WithDescription`,`LabelAtEnd`],C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => <EvoField {...args}>
      <EvoLabel htmlFor="buyer-email">Email address</EvoLabel>
      <EvoInput id="buyer-email" type="email" autoComplete="email" />
    </EvoField>
}`,...C.parameters?.docs?.source},description:{story:"An inline label names its control through matching `htmlFor` and `id`.",...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    layout: "block"
  },
  render: args => <EvoField {...args}>
      <EvoLabel htmlFor="listing-title" stacked required>
        Listing title
      </EvoLabel>
      <EvoInput id="listing-title" required aria-describedby="listing-title-help" placeholder="Brand, model, and item type" />
      <EvoFieldDescription id="listing-title-help">
        Include the brand and model so buyers can find your listing.
      </EvoFieldDescription>
    </EvoField>
}`,...w.parameters?.docs?.source},description:{story:`A block layout stacks the label and connects supporting text to the input.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => <EvoField {...args}>
      <EvoCheckbox id="watch-search" name="watch-search" />
      <EvoLabel htmlFor="watch-search" position="end">
        Save this search
      </EvoLabel>
    </EvoField>
}`,...T.parameters?.docs?.source},description:{story:`The label may follow a checkbox while remaining connected to its native input.`,...T.parameters?.docs?.description}}}})))()}D();export{C as Default,T as LabelAtEnd,w as WithDescription,E as __namedExportsOrder,S as default};