import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./button-Ce0hufhd.js";import{n as i,t as a}from"./button-cell-B8q8yAY9.js";function o({to:e,children:t,...n}){return(0,s.jsx)(`a`,{"data-custom-link":`true`,...n,href:e,onClick:e=>{e.preventDefault(),alert(`client side navigation`)},children:t})}var s,c,l,u,d,f;function p(){return(p=e((()=>{n(),i(),s=t(),c={title:`buttons/evo-button`,component:r,subcomponents:{EvoButtonCell:a},tags:[`autodocs`],parameters:{docs:{description:{component:'\nA flexible button component that can render as either a `<button>` or `<a>` element based on the `href` prop.\n\n## Usage\n\n```tsx\nimport { EvoButton } from "@evo-web/react/button";\n```\n        '}}},argTypes:{priority:{control:`select`,options:[`primary`,`secondary`,`tertiary`,`none`]},variant:{control:`select`,options:[`standard`,`destructive`,`form`]},size:{control:`select`,options:[`small`,`large`]},bodyState:{control:`select`,options:[`loading`,`expand`,`reset`,`none`]},split:{control:`select`,options:[`start`,`end`]},fluid:{control:`boolean`},disabled:{control:`boolean`},partiallyDisabled:{control:`boolean`},transparent:{control:`boolean`},borderless:{control:`boolean`},fixedHeight:{control:`boolean`},truncate:{control:`boolean`},href:{control:`text`,description:`Link URL (renders as anchor)`},as:{control:!1},children:{control:`text`,description:`Button text content`}},args:{priority:`primary`,variant:`standard`,children:`Button`}},l={args:{children:`Button`}},u={render:e=>(0,s.jsx)(r,{...e,href:`/home`,as:({href:e,...t})=>(0,s.jsx)(o,{...t,to:e}),priority:`primary`,children:`Click me`}),parameters:{docs:{description:{story:'\nPass a custom component via the `as` prop to replace the native `<a>`. Only applies when `href` is set. Here we simulate React Router\'s `<Link to="/home">`\n\n```tsx\nimport { Link, href } from "react-router";\n\n<EvoButton\n  href={href("/home")}\n  as=(({ href, ...rest }) => <Link {...rest} to={href} />)\n```\n'}}}},d={render:e=>(0,s.jsx)(r,{...e,children:(0,s.jsxs)(a,{style:{justifyContent:`space-between`},children:[(0,s.jsx)(`span`,{children:`Select`}),(0,s.jsx)(`span`,{children:`Any`})]})})},f=[`Default`,`WithCustomLinkComponent`,`WithButtonCell`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Button"
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <EvoButton {...args}>
      <EvoButtonCell style={{
      justifyContent: "space-between"
    }}>
        <span>Select</span>
        <span>Any</span>
      </EvoButtonCell>
    </EvoButton>
}`,...d.parameters?.docs?.source}}}})))()}p();export{l as Default,d as WithButtonCell,u as WithCustomLinkComponent,f as __namedExportsOrder,c as default};