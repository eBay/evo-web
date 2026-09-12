import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./input-BHY8JV8b.js";import{t as i}from"./field-CbbNu1w4.js";import{a,c as o,i as s,l as c,n as l,o as u,r as d,s as f,t as p,u as m}from"./profile-24-CGCyKHEo.js";var h,g,_,v,y,b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{m(),o(),s(),u(),l(),n(),i(),h=t(),{action:g}=__STORYBOOK_MODULE_ACTIONS__,_={title:`Form Input/EvoInput`,component:r,argTypes:{inputSize:{control:`select`,options:[`regular`,`large`]},fluid:{control:`boolean`},invalid:{control:`boolean`},floatingLabel:{control:`text`},floatingLabelStatic:{control:`boolean`},prefix:{control:!1},postfix:{control:!1}}},v={args:{"aria-label":`Search products`,placeholder:`Search by keyword`}},y={render:e=>(0,h.jsxs)(`span`,{className:`field`,children:[(0,h.jsx)(`label`,{className:`field__label field__label--start`,htmlFor:`textbox`,children:`Email address`}),(0,h.jsx)(r,{...e,id:`textbox`,value:`buyer@example.com`})]})},b={render:e=>(0,h.jsxs)(`span`,{className:`field`,children:[(0,h.jsx)(`label`,{className:`field__label field__label--start field__label--disabled`,htmlFor:`disabled-textbox`,children:`Email address`}),(0,h.jsx)(r,{...e,disabled:!0,id:`disabled-textbox`,value:`seller@example.com`})]})},x={args:{floatingLabel:`Email address`}},S={render:e=>(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(r,{...e,autoComplete:`given-name`,floatingLabel:`First name`}),(0,h.jsx)(r,{...e,autoComplete:`family-name`,floatingLabel:`Last name`}),(0,h.jsx)(r,{...e,autoComplete:`email`,floatingLabel:`Email address`,placeholder:`name@example.com`})]})},C={args:{"aria-label":`Email address`,placeholder:`name@example.com`,prefix:{icon:(0,h.jsx)(a,{})}}},w={args:{"aria-label":`eBay username`,placeholder:`Enter username`,postfix:{icon:(0,h.jsx)(p,{})}}},T={args:{"aria-label":`Search sellers`,placeholder:`Seller username`,prefix:{icon:(0,h.jsx)(p,{})},postfix:{icon:(0,h.jsx)(c,{}),buttonProps:{a11yText:`Clear seller search`,onClick:g(`clear`)}}}},E={args:{"aria-label":`Monthly payment`,placeholder:`0.00`,prefix:{content:`$`,icon:(0,h.jsx)(d,{})},postfix:{content:`/mo`,icon:(0,h.jsx)(f,{})}}},D=[`Default`,`WithLabel`,`Disabled`,`FloatingLabel`,`FloatingLabelAutocomplete`,`WithPrefixIcon`,`WithPostfixIcon`,`WithBothIcons`,`FullyDecorated`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-label": "Search products",
    placeholder: "Search by keyword"
  }
}`,...v.parameters?.docs?.source},description:{story:`A standard single-line input has an accessible name.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <span className="field">
      <label className="field__label field__label--start" htmlFor="textbox">
        Email address
      </label>
      <EvoInput {...args} id="textbox" value="buyer@example.com" />
    </span>
}`,...y.parameters?.docs?.source},description:{story:`A separate visible label names the input in its surrounding field.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <span className="field">
      <label className="field__label field__label--start field__label--disabled" htmlFor="disabled-textbox">
        Email address
      </label>
      <EvoInput {...args} disabled id="disabled-textbox" value="seller@example.com" />
    </span>
}`,...b.parameters?.docs?.source},description:{story:`A disabled input preserves its field context while preventing edits.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    floatingLabel: "Email address"
  }
}`,...x.parameters?.docs?.source},description:{story:`A floating label provides the compact field treatment.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => <>
      <EvoInput {...args} autoComplete="given-name" floatingLabel="First name" />
      <EvoInput {...args} autoComplete="family-name" floatingLabel="Last name" />
      <EvoInput {...args} autoComplete="email" floatingLabel="Email address" placeholder="name@example.com" />
    </>
}`,...S.parameters?.docs?.source},description:{story:`Floating labels can be combined with browser autocomplete semantics.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-label": "Email address",
    placeholder: "name@example.com",
    prefix: {
      icon: <EvoIconMail24 />
    }
  }
}`,...C.parameters?.docs?.source},description:{story:`A decorative icon appears before the value.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-label": "eBay username",
    placeholder: "Enter username",
    postfix: {
      icon: <EvoIconProfile24 />
    }
  }
}`,...w.parameters?.docs?.source},description:{story:`A decorative icon appears after the value.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-label": "Search sellers",
    placeholder: "Seller username",
    prefix: {
      icon: <EvoIconProfile24 />
    },
    postfix: {
      icon: <EvoIconClear24 />,
      buttonProps: {
        a11yText: "Clear seller search",
        onClick: action("clear")
      }
    }
  }
}`,...T.parameters?.docs?.source},description:{story:`Leading context combines with an actionable postfix icon.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-label": "Monthly payment",
    placeholder: "0.00",
    prefix: {
      content: "$",
      icon: <EvoIconMoneyStack24 />
    },
    postfix: {
      content: "/mo",
      icon: <EvoIconInformation24 />
    }
  }
}`,...E.parameters?.docs?.source},description:{story:`Text and icons on both sides format the value.`,...E.parameters?.docs?.description}}}})))()}O();export{v as Default,b as Disabled,x as FloatingLabel,S as FloatingLabelAutocomplete,E as FullyDecorated,T as WithBothIcons,y as WithLabel,w as WithPostfixIcon,C as WithPrefixIcon,D as __namedExportsOrder,_ as default};