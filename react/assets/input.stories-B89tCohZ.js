import{j as e}from"./iframe-BWQsrW0i.js";import{E as m,a as b,b as u}from"./profile-24-B2kTH4Ow.js";import{E as o}from"./input-DXe7GnNF.js";/* empty css              */import"./preload-helper-PPVm8Dsz.js";import"./icon-BODPvi0J.js";import"./index-CXf_58fg.js";import"./textbox-YWxll7wM.js";import"./icon-button-BYNyUJro.js";/* empty css               */const{action:f}=__STORYBOOK_MODULE_ACTIONS__,C={title:"form input/evo-input",component:o,tags:["autodocs"],parameters:{docs:{description:{component:`
A single-line text input with optional floating label and prefix or postfix content.

## Usage

\`\`\`tsx
import { EvoInput } from "@evo-web/react/input";
\`\`\`
        `}}},argTypes:{inputSize:{control:"select",options:["regular","large"],description:"Input size."},fluid:{control:"boolean",description:"Makes the input fill its container."},invalid:{control:"boolean",description:"Indicates a field-level error."},floatingLabel:{control:"text",description:"Text displayed as a floating label."},floatingLabelStatic:{control:"boolean",description:"Keeps the floating label raised."},prefix:{control:!1,description:"Optional content and icon displayed before the input. Native span attributes are applied to the content element."},postfix:{control:!1,description:"Optional content and icon displayed after the input. Supply buttonProps to make the icon actionable."}}},r={args:{"aria-label":"Example input"}},t={render:a=>e.jsxs("span",{className:"field",children:[e.jsx("label",{className:"field__label field__label--start",htmlFor:"textbox",children:"Email address"}),e.jsx(o,{...a,id:"textbox",value:"test"})]})},l={render:a=>e.jsxs("span",{className:"field",children:[e.jsx("label",{className:"field__label field__label--start field__label--disabled",htmlFor:"disabled-textbox",children:"Email address"}),e.jsx(o,{...a,disabled:!0,id:"disabled-textbox",value:"test"})]})},n={args:{floatingLabel:"Email address"}},s={render:a=>e.jsxs(e.Fragment,{children:[e.jsx(o,{...a,autoComplete:"given-name",floatingLabel:"First Name"}),e.jsx(o,{...a,autoComplete:"family-name",floatingLabel:"Last Name"}),e.jsx(o,{...a,autoComplete:"email",floatingLabel:"Email address",placeholder:"valid email address"})]})},i={args:{"aria-label":"Email",placeholder:"email",prefix:{icon:e.jsx(b,{})}}},c={args:{"aria-label":"Name",placeholder:"name",postfix:{icon:e.jsx(u,{})}}},p={args:{"aria-label":"Name",placeholder:"name",prefix:{icon:e.jsx(u,{})},postfix:{icon:e.jsx(m,{}),buttonProps:{a11yText:"Clear",onClick:f("clear")}}}},d={args:{"aria-label":"Monthly price",placeholder:"0.00",prefix:{content:"$",icon:e.jsx(b,{})},postfix:{content:"/mo",icon:e.jsx(m,{})}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-label": "Example input"
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <span className="field">
      <label className="field__label field__label--start" htmlFor="textbox">
        Email address
      </label>
      <EvoInput {...args} id="textbox" value="test" />
    </span>
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <span className="field">
      <label className="field__label field__label--start field__label--disabled" htmlFor="disabled-textbox">
        Email address
      </label>
      <EvoInput {...args} disabled id="disabled-textbox" value="test" />
    </span>
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    floatingLabel: "Email address"
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <>
      <EvoInput {...args} autoComplete="given-name" floatingLabel="First Name" />
      <EvoInput {...args} autoComplete="family-name" floatingLabel="Last Name" />
      <EvoInput {...args} autoComplete="email" floatingLabel="Email address" placeholder="valid email address" />
    </>
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-label": "Email",
    placeholder: "email",
    prefix: {
      icon: <EvoIconMail24 />
    }
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-label": "Name",
    placeholder: "name",
    postfix: {
      icon: <EvoIconProfile24 />
    }
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const S=["Default","WithLabel","Disabled","FloatingLabel","FloatingLabelAutocomplete","WithPrefixIcon","WithPostfixIcon","WithBothIcons","FullyDecorated"];export{r as Default,l as Disabled,n as FloatingLabel,s as FloatingLabelAutocomplete,d as FullyDecorated,p as WithBothIcons,t as WithLabel,c as WithPostfixIcon,i as WithPrefixIcon,S as __namedExportsOrder,C as default};
