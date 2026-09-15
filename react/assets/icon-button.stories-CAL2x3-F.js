import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./badge-BTLNf20F.js";import{n as i,t as a}from"./icon-button-DE-W2DMa.js";import{a as o,i as s,n as c,o as l,r as u,t as d}from"./cart-16-CTCl0f6b.js";function f(e){return(0,p.jsx)(r,{...e,type:`icon`,a11yText:null})}var p;function m(){return(m=e((()=>{n(),p=t();try{f.displayName=`EvoIconButtonBadge`,f.__docgenInfo={description:"Adds a count or status indicator to an `EvoIconButton`. The parent button's\naccessible label must include the badge's meaning.",displayName:`EvoIconButtonBadge`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/icon-button/icon-button-badge.tsx`,methods:[],props:{number:{defaultValue:null,declarations:[{fileName:`evo-react/src/badge/types.ts`,name:`TypeLiteral`}],description:"Count displayed in the badge. Values greater than 99 display as `99+`;\nzero and negative values render nothing. Omit to show an empty indicator.",name:`number`,required:!1,tags:{},type:{name:`string | number`}}},tags:{summary:`Badge attached to an icon button.`}}}catch{}})))()}function h({to:e,children:t,...n}){return(0,g.jsx)(`a`,{"data-custom-link":`true`,...n,href:e,onClick:e=>{e.preventDefault(),alert(`client side navigation`)},children:t})}var g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{i(),m(),l(),s(),c(),g=t(),{action:_}=__STORYBOOK_MODULE_ACTIONS__,v={title:`Buttons/EvoIconButton`,component:a,subcomponents:{EvoIconButtonBadge:f},argTypes:{a11yText:{type:{name:`string`,required:!0},control:`text`},href:{control:`text`},as:{control:!1},priority:{options:[`primary`,`secondary`,`tertiary`,`none`],control:{type:`select`}},size:{options:[`large`,`small`],control:{type:`select`}},transparent:{control:`boolean`},partiallyDisabled:{control:`boolean`},disabled:{control:`boolean`},onClick:{action:`onClick`,table:{category:`Events`,defaultValue:{summary:"`(MouseEvent)`"}}},onEscape:{action:`onEscape`,table:{category:`Events`,defaultValue:{summary:"`(KeyboardEvent)`"}}},onFocus:{action:`onFocus`,table:{category:`Events`,defaultValue:{summary:"`(FocusEvent)`"}}},onBlur:{action:`onBlur`,table:{category:`Events`,defaultValue:{summary:"`(FocusEvent)`"}}}},args:{a11yText:`Menu`,priority:`none`}},y={render:e=>(0,g.jsx)(a,{...e,onClick:_(`onClick`),onFocus:_(`onFocus`),onBlur:_(`onBlur`),onEscape:_(`onEscape`),children:(0,g.jsx)(o,{})})},b={render:e=>(0,g.jsxs)(a,{...e,a11yText:`Cart`,children:[(0,g.jsx)(d,{}),(0,g.jsx)(f,{number:3})]})},x={render:e=>(0,g.jsx)(a,{...e,href:`https://ebay.com`,a11yText:`Settings`,onClick:e=>e.preventDefault(),children:(0,g.jsx)(u,{})})},S={render:e=>(0,g.jsx)(a,{...e,href:`/home`,a11yText:`Settings`,as:({href:e,...t})=>(0,g.jsx)(h,{...t,to:e}),children:(0,g.jsx)(u,{})}),parameters:{docs:{description:{story:`
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
`}}}},C=[`Default`,`WithBadge`,`AsLink`,`CustomLink`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <EvoIconButton {...args} onClick={action("onClick")} onFocus={action("onFocus")} onBlur={action("onBlur")} onEscape={action("onEscape")}>
      <EvoIconMenu20 />
    </EvoIconButton>
}`,...y.parameters?.docs?.source},description:{story:`An icon-only action uses a clear, familiar icon meaning.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <EvoIconButton {...args} a11yText="Cart">
      <EvoIconCart16 />
      <EvoIconButtonBadge number={3} />
    </EvoIconButton>
}`,...b.parameters?.docs?.source},description:{story:`A count badge identifies pending items or notifications.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <EvoIconButton {...args as unknown as AnchorIconButtonProps} href="https://ebay.com" a11yText="Settings" onClick={e => e.preventDefault()}>
      <EvoIconSettings16 />
    </EvoIconButton>
}`,...x.parameters?.docs?.source},description:{story:`An anchor icon button navigates to another location.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source},description:{story:"The `as` prop connects navigation to a client-side link component.",...S.parameters?.docs?.description}}}})))()}w();export{x as AsLink,S as CustomLink,y as Default,b as WithBadge,C as __namedExportsOrder,v as default};