import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./badge-L8aowDAG.js";import{n as i,t as a}from"./icon-button-IEekM1Tz.js";import{a as o,c as s,i as c,n as l,o as u,r as d,s as f,t as p}from"./chat-16-pTEzsi8y.js";function m(e){return(0,h.jsx)(r,{...e,type:`icon`,a11yText:null})}var h;function g(){return(g=e((()=>{n(),h=t();try{m.displayName=`EvoIconButtonBadge`,m.__docgenInfo={description:``,displayName:`EvoIconButtonBadge`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/icon-button/icon-button-badge.tsx`,methods:[],props:{number:{defaultValue:null,declarations:[{fileName:`evo-react/src/badge/types.ts`,name:`TypeLiteral`}],description:`Number displayed in the badge.`,name:`number`,required:!1,tags:{},type:{name:`string | number | undefined`}}},tags:{}}}catch{}})))()}function _({to:e,children:t,...n}){return(0,v.jsx)(`a`,{"data-custom-link":`true`,...n,href:e,onClick:e=>{e.preventDefault(),alert(`client side navigation`)},children:t})}var v,y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{i(),g(),s(),u(),c(),l(),v=t(),{action:y}=__STORYBOOK_MODULE_ACTIONS__,b={title:`buttons/evo-icon-button`,component:a,subcomponents:{EvoIconButtonBadge:m},tags:[`autodocs`],parameters:{docs:{description:{component:'\nA circular button that contains an icon only. Renders as `<button>` or `<a>` based on the `href` prop.\n\n## Usage\n\n```tsx\nimport { EvoIconButton } from "@evo-web/react/icon-button";\n```\n        '}}},argTypes:{a11yText:{type:{name:`string`,required:!0},control:`text`},href:{description:`Renders as an anchor element when provided`,control:`text`},as:{control:!1},priority:{options:[`primary`,`secondary`,`tertiary`,`none`],control:{type:`select`}},size:{options:[`large`,`small`],control:{type:`select`}},transparent:{control:`boolean`},partiallyDisabled:{control:`boolean`},disabled:{control:`boolean`},onClick:{description:`Triggered on click`,action:`onClick`,table:{category:`Events`,defaultValue:{summary:"`(MouseEvent)`"}}},onEscape:{action:`onEscape`,table:{category:`Events`,defaultValue:{summary:"`(KeyboardEvent)`"}}},onFocus:{description:`Triggered on keyboard focus`,action:`onFocus`,table:{category:`Events`,defaultValue:{summary:"`(FocusEvent)`"}}},onBlur:{description:`Triggered on focus lost`,action:`onBlur`,table:{category:`Events`,defaultValue:{summary:"`(FocusEvent)`"}}}},args:{a11yText:`Menu`,priority:`none`}},x={render:e=>(0,v.jsx)(a,{...e,onClick:y(`onClick`),onFocus:y(`onFocus`),onBlur:y(`onBlur`),onEscape:y(`onEscape`),children:(0,v.jsx)(f,{})})},S={render:e=>(0,v.jsxs)(a,{...e,a11yText:`Cart`,children:[(0,v.jsx)(d,{}),(0,v.jsx)(m,{number:3})]})},C={render:e=>(0,v.jsx)(a,{...e,href:`https://ebay.com`,a11yText:`Settings`,onClick:e=>e.preventDefault(),children:(0,v.jsx)(o,{})})},w={render:e=>(0,v.jsx)(a,{...e,href:`/home`,a11yText:`Settings`,as:({href:e,...t})=>(0,v.jsx)(_,{...t,to:e}),children:(0,v.jsx)(o,{})}),parameters:{docs:{description:{story:`
Pass a custom component via the \`as\` prop to replace the native \`<a>\`. Only applies when \`href\` is set.

\`\`\`tsx
import { Link, href } from "react-router";

<EvoIconButton
  href={href("/home")}
  a11yText="Settings"
  as={({ href, ...rest }) => <Link {...rest} to={href} />}
>
  <EvoIconSettings16 />
</EvoIconButton>
\`\`\`
`}}}},T={render:e=>(0,v.jsxs)(a,{...e,href:`https://ebay.com`,a11yText:`Chat`,onClick:e=>e.preventDefault(),children:[(0,v.jsx)(p,{}),(0,v.jsx)(m,{number:99})]})},E=[`Default`,`WithBadge`,`AsLink`,`WithCustomLinkComponent`,`WithChat`],x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <EvoIconButton {...args} onClick={action("onClick")} onFocus={action("onFocus")} onBlur={action("onBlur")} onEscape={action("onEscape")}>
      <EvoIconMenu20 />
    </EvoIconButton>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => <EvoIconButton {...args} a11yText="Cart">
      <EvoIconCart16 />
      <EvoIconButtonBadge number={3} />
    </EvoIconButton>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => <EvoIconButton {...args as unknown as AnchorIconButtonProps} href="https://ebay.com" a11yText="Settings" onClick={e => e.preventDefault()}>
      <EvoIconSettings16 />
    </EvoIconButton>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => <EvoIconButton {...args as unknown as AnchorIconButtonProps} href="/home" a11yText="Settings" as={({
    href,
    ...rest
  }) => <Link {...rest} to={href} />}>
      <EvoIconSettings16 />
    </EvoIconButton>,
  parameters: {
    docs: {
      description: {
        story: \`
Pass a custom component via the \\\`as\\\` prop to replace the native \\\`<a>\\\`. Only applies when \\\`href\\\` is set.

\\\`\\\`\\\`tsx
import { Link, href } from "react-router";

<EvoIconButton
  href={href("/home")}
  a11yText="Settings"
  as={({ href, ...rest }) => <Link {...rest} to={href} />}
>
  <EvoIconSettings16 />
</EvoIconButton>
\\\`\\\`\\\`
\`
      }
    }
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => <EvoIconButton {...args as unknown as AnchorIconButtonProps} href="https://ebay.com" a11yText="Chat" onClick={e => e.preventDefault()}>
      <EvoIconChat16 />
      <EvoIconButtonBadge number={99} />
    </EvoIconButton>
}`,...T.parameters?.docs?.source}}}})))()}D();export{C as AsLink,x as Default,S as WithBadge,T as WithChat,w as WithCustomLinkComponent,E as __namedExportsOrder,b as default};