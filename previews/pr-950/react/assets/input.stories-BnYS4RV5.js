import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./input-BNFKktLM.js";import{t as i}from"./field-CbbNu1w4.js";import{a,i as o,n as s,o as c,r as l,t as u}from"./profile-24-CR8jfBYL.js";var d,f,p,m,h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{c(),o(),s(),n(),i(),d=t(),{action:f}=__STORYBOOK_MODULE_ACTIONS__,p={title:`Form Input/EvoInput`,component:r,argTypes:{inputSize:{control:`select`,options:[`regular`,`large`]},fluid:{control:`boolean`},invalid:{control:`boolean`},floatingLabel:{control:`text`},floatingLabelStatic:{control:`boolean`},prefix:{control:!1},postfix:{control:!1}}},m={args:{"aria-label":`Example input`}},h={render:e=>(0,d.jsxs)(`span`,{className:`field`,children:[(0,d.jsx)(`label`,{className:`field__label field__label--start`,htmlFor:`textbox`,children:`Email address`}),(0,d.jsx)(r,{...e,id:`textbox`,value:`test`})]})},g={render:e=>(0,d.jsxs)(`span`,{className:`field`,children:[(0,d.jsx)(`label`,{className:`field__label field__label--start field__label--disabled`,htmlFor:`disabled-textbox`,children:`Email address`}),(0,d.jsx)(r,{...e,disabled:!0,id:`disabled-textbox`,value:`test`})]})},_={args:{floatingLabel:`Email address`}},v={render:e=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r,{...e,autoComplete:`given-name`,floatingLabel:`First Name`}),(0,d.jsx)(r,{...e,autoComplete:`family-name`,floatingLabel:`Last Name`}),(0,d.jsx)(r,{...e,autoComplete:`email`,floatingLabel:`Email address`,placeholder:`valid email address`})]})},y={args:{"aria-label":`Email`,placeholder:`email`,prefix:{icon:(0,d.jsx)(l,{})}}},b={args:{"aria-label":`Name`,placeholder:`name`,postfix:{icon:(0,d.jsx)(u,{})}}},x={args:{"aria-label":`Name`,placeholder:`name`,prefix:{icon:(0,d.jsx)(u,{})},postfix:{icon:(0,d.jsx)(a,{}),buttonProps:{a11yText:`Clear`,onClick:f(`clear`)}}}},S={args:{"aria-label":`Monthly price`,placeholder:`0.00`,prefix:{content:`$`,icon:(0,d.jsx)(l,{})},postfix:{content:`/mo`,icon:(0,d.jsx)(a,{})}}},C=[`Default`,`WithLabel`,`Disabled`,`FloatingLabel`,`FloatingLabelAutocomplete`,`WithPrefixIcon`,`WithPostfixIcon`,`WithBothIcons`,`FullyDecorated`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-label": "Example input"
  }
}`,...m.parameters?.docs?.source},description:{story:`A standard single-line input has an accessible name.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <span className="field">
      <label className="field__label field__label--start" htmlFor="textbox">
        Email address
      </label>
      <EvoInput {...args} id="textbox" value="test" />
    </span>
}`,...h.parameters?.docs?.source},description:{story:`A separate visible label names the input in its surrounding field.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <span className="field">
      <label className="field__label field__label--start field__label--disabled" htmlFor="disabled-textbox">
        Email address
      </label>
      <EvoInput {...args} disabled id="disabled-textbox" value="test" />
    </span>
}`,...g.parameters?.docs?.source},description:{story:`A disabled input preserves its field context while preventing edits.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    floatingLabel: "Email address"
  }
}`,..._.parameters?.docs?.source},description:{story:`A floating label provides the compact field treatment.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <>
      <EvoInput {...args} autoComplete="given-name" floatingLabel="First Name" />
      <EvoInput {...args} autoComplete="family-name" floatingLabel="Last Name" />
      <EvoInput {...args} autoComplete="email" floatingLabel="Email address" placeholder="valid email address" />
    </>
}`,...v.parameters?.docs?.source},description:{story:`Floating labels can be combined with browser autocomplete semantics.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-label": "Email",
    placeholder: "email",
    prefix: {
      icon: <EvoIconMail24 />
    }
  }
}`,...y.parameters?.docs?.source},description:{story:`A decorative icon appears before the value.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-label": "Name",
    placeholder: "name",
    postfix: {
      icon: <EvoIconProfile24 />
    }
  }
}`,...b.parameters?.docs?.source},description:{story:`A decorative icon appears after the value.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-label": "Name",
    placeholder: "name",
    prefix: {
      icon: <EvoIconProfile24 />
    },
    postfix: {
      icon: <EvoIconClear24 />,
      buttonProps: {
        a11yText: "Clear",
        onClick: action("clear")
      }
    }
  }
}`,...x.parameters?.docs?.source},description:{story:`Leading context combines with an actionable postfix icon.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-label": "Monthly price",
    placeholder: "0.00",
    prefix: {
      content: "$",
      icon: <EvoIconMail24 />
    },
    postfix: {
      content: "/mo",
      icon: <EvoIconClear24 />
    }
  }
}`,...S.parameters?.docs?.source},description:{story:`Text and icons on both sides format the value.`,...S.parameters?.docs?.description}}}})))()}w();export{m as Default,g as Disabled,_ as FloatingLabel,v as FloatingLabelAutocomplete,S as FullyDecorated,x as WithBothIcons,h as WithLabel,b as WithPostfixIcon,y as WithPrefixIcon,C as __namedExportsOrder,p as default};