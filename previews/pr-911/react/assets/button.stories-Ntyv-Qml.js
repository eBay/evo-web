import{j as e}from"./iframe-BJzwj3ZW.js";import{E as i}from"./button-ush9tjkx.js";import{E as c}from"./button-cell-BbwoKqTa.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BpOwUmMD.js";import"./chevron-down-16-CMuqooG9.js";import"./icon-t8bpTL2h.js";/* empty css               */const x={title:"buttons/evo-button",component:i,subcomponents:{EvoButtonCell:c},tags:["autodocs"],parameters:{docs:{description:{component:'\nA flexible button component that can render as either a `<button>` or `<a>` element based on the `href` prop.\n\n## Usage\n\n```tsx\nimport { EvoButton } from "@evo-web/react/button";\n```\n        '}}},argTypes:{priority:{control:"select",options:["primary","secondary","tertiary","none"]},variant:{control:"select",options:["standard","destructive","form"]},size:{control:"select",options:["small","large"]},bodyState:{control:"select",options:["loading","expand","reset","none"]},split:{control:"select",options:["start","end"]},fluid:{control:"boolean"},disabled:{control:"boolean"},partiallyDisabled:{control:"boolean"},transparent:{control:"boolean"},borderless:{control:"boolean"},fixedHeight:{control:"boolean"},truncate:{control:"boolean"},href:{control:"text",description:"Link URL (renders as anchor)"},as:{control:!1},children:{control:"text",description:"Button text content"}},args:{priority:"primary",variant:"standard",children:"Button"}},o={args:{children:"Button"}};function p({to:t,children:s,...a}){return e.jsx("a",{"data-custom-link":"true",...a,href:t,onClick:l=>{l.preventDefault(),alert("client side navigation")},children:s})}const r={render:t=>e.jsx(i,{...t,href:"/home",as:({href:s,...a})=>e.jsx(p,{...a,to:s}),priority:"primary",children:"Click me"}),parameters:{docs:{description:{story:'\nPass a custom component via the `as` prop to replace the native `<a>`. Only applies when `href` is set. Here we simulate React Router\'s `<Link to="/home">`\n\n```tsx\nimport { Link, href } from "react-router";\n\n<EvoButton\n  href={href("/home")}\n  as=(({ href, ...rest }) => <Link {...rest} to={href} />)\n```\n'}}}},n={render:t=>e.jsx(i,{...t,children:e.jsxs(c,{style:{justifyContent:"space-between"},children:[e.jsx("span",{children:"Select"}),e.jsx("span",{children:"Any"})]})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Button"
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <EvoButton {...args as unknown as AnchorButtonProps} href="/home" as={({
      href,
      ...rest
    }) => <Link {...rest} to={href} />} priority="primary">
        Click me
      </EvoButton>;
  },
  parameters: {
    docs: {
      description: {
        story: \`
Pass a custom component via the \\\`as\\\` prop to replace the native \\\`<a>\\\`. Only applies when \\\`href\\\` is set. Here we simulate React Router's \\\`<Link to="/home">\\\`

\\\`\\\`\\\`tsx
import { Link, href } from "react-router";

<EvoButton
  href={href("/home")}
  as=(({ href, ...rest }) => <Link {...rest} to={href} />)
\\\`\\\`\\\`
\`
      }
    }
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <EvoButton {...args}>
      <EvoButtonCell style={{
      justifyContent: "space-between"
    }}>
        <span>Select</span>
        <span>Any</span>
      </EvoButtonCell>
    </EvoButton>
}`,...n.parameters?.docs?.source}}};const B=["Default","WithCustomLinkComponent","WithButtonCell"];export{o as Default,n as WithButtonCell,r as WithCustomLinkComponent,B as __namedExportsOrder,x as default};
