import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./input-Cv7W2tRK.js";import{t as i}from"./field-CbbNu1w4.js";import{a,i as o,n as s,o as c,r as l,t as u}from"./profile-24-D9FK0PPw.js";var d,f,p,m,h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{c(),o(),s(),n(),i(),d=t(),{action:f}=__STORYBOOK_MODULE_ACTIONS__,p={title:`form input/evo-input`,component:r,tags:[`autodocs`],parameters:{docs:{description:{component:`
A single-line text input with optional floating label and prefix or postfix content.

## Usage

\`\`\`tsx
import { EvoInput } from "@evo-web/react/input";
\`\`\`
        `}}},argTypes:{inputSize:{control:`select`,options:[`regular`,`large`],description:`Input size.`},fluid:{control:`boolean`,description:`Makes the input fill its container.`},invalid:{control:`boolean`,description:`Indicates a field-level error.`},floatingLabel:{control:`text`,description:`Text displayed as a floating label.`},floatingLabelStatic:{control:`boolean`,description:`Keeps the floating label raised.`},prefix:{control:!1,description:`Optional content and icon displayed before the input. Native span attributes are applied to the content element.`},postfix:{control:!1,description:`Optional content and icon displayed after the input. Supply buttonProps to make the icon actionable.`}}},m={args:{"aria-label":`Example input`}},h={render:e=>(0,d.jsxs)(`span`,{className:`field`,children:[(0,d.jsx)(`label`,{className:`field__label field__label--start`,htmlFor:`textbox`,children:`Email address`}),(0,d.jsx)(r,{...e,id:`textbox`,value:`test`})]})},g={render:e=>(0,d.jsxs)(`span`,{className:`field`,children:[(0,d.jsx)(`label`,{className:`field__label field__label--start field__label--disabled`,htmlFor:`disabled-textbox`,children:`Email address`}),(0,d.jsx)(r,{...e,disabled:!0,id:`disabled-textbox`,value:`test`})]})},_={args:{floatingLabel:`Email address`}},v={render:e=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r,{...e,autoComplete:`given-name`,floatingLabel:`First Name`}),(0,d.jsx)(r,{...e,autoComplete:`family-name`,floatingLabel:`Last Name`}),(0,d.jsx)(r,{...e,autoComplete:`email`,floatingLabel:`Email address`,placeholder:`valid email address`})]})},y={args:{"aria-label":`Email`,placeholder:`email`,prefix:{icon:(0,d.jsx)(l,{})}}},b={args:{"aria-label":`Name`,placeholder:`name`,postfix:{icon:(0,d.jsx)(u,{})}}},x={args:{"aria-label":`Name`,placeholder:`name`,prefix:{icon:(0,d.jsx)(u,{})},postfix:{icon:(0,d.jsx)(a,{}),buttonProps:{a11yText:`Clear`,onClick:f(`clear`)}}}},S={args:{"aria-label":`Monthly price`,placeholder:`0.00`,prefix:{content:`$`,icon:(0,d.jsx)(l,{})},postfix:{content:`/mo`,icon:(0,d.jsx)(a,{})}}},C=[`Default`,`WithLabel`,`Disabled`,`FloatingLabel`,`FloatingLabelAutocomplete`,`WithPrefixIcon`,`WithPostfixIcon`,`WithBothIcons`,`FullyDecorated`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-label": "Example input"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <span className="field">
      <label className="field__label field__label--start" htmlFor="textbox">
        Email address
      </label>
      <EvoInput {...args} id="textbox" value="test" />
    </span>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <span className="field">
      <label className="field__label field__label--start field__label--disabled" htmlFor="disabled-textbox">
        Email address
      </label>
      <EvoInput {...args} disabled id="disabled-textbox" value="test" />
    </span>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    floatingLabel: "Email address"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <>
      <EvoInput {...args} autoComplete="given-name" floatingLabel="First Name" />
      <EvoInput {...args} autoComplete="family-name" floatingLabel="Last Name" />
      <EvoInput {...args} autoComplete="email" floatingLabel="Email address" placeholder="valid email address" />
    </>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-label": "Email",
    placeholder: "email",
    prefix: {
      icon: <EvoIconMail24 />
    }
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-label": "Name",
    placeholder: "name",
    postfix: {
      icon: <EvoIconProfile24 />
    }
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}}})))()}w();export{m as Default,g as Disabled,_ as FloatingLabel,v as FloatingLabelAutocomplete,S as FullyDecorated,x as WithBothIcons,h as WithLabel,b as WithPostfixIcon,y as WithPrefixIcon,C as __namedExportsOrder,p as default};