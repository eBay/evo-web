import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./button-B0lPOAgu.js";import{n as i,t as a}from"./button-cell-OLJsrFFL.js";function o({to:e,children:t,...n}){return(0,s.jsx)(`a`,{"data-custom-link":`true`,...n,href:e,onClick:e=>{e.preventDefault(),alert(`client side navigation`)},children:t})}var s,c,l,u,d,f;function p(){return(p=e((()=>{n(),i(),s=t(),c={title:`Buttons/EvoButton`,component:r,subcomponents:{EvoButtonCell:a},argTypes:{priority:{control:`select`},variant:{control:`select`},size:{control:`select`},bodyState:{control:`select`},split:{control:`select`},fluid:{control:`boolean`},disabled:{control:`boolean`},partiallyDisabled:{control:`boolean`},transparent:{control:`boolean`},borderless:{control:`boolean`},fixedHeight:{control:`boolean`},truncate:{control:`boolean`},href:{control:`text`},as:{control:!1},children:{control:`text`}},args:{priority:`primary`,variant:`standard`,children:`Button`}},l={args:{children:`Button`}},u={render:e=>(0,s.jsx)(r,{...e,href:`/home`,as:({href:e,...t})=>(0,s.jsx)(o,{...t,to:e}),priority:`primary`,children:`Click me`})},d={render:e=>(0,s.jsx)(r,{...e,children:(0,s.jsxs)(a,{style:{justifyContent:`space-between`},children:[(0,s.jsx)(`span`,{children:`Select`}),(0,s.jsx)(`span`,{children:`Any`})]})})},f=[`Default`,`WithCustomLinkComponent`,`WithButtonCell`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Button"
  }
}`,...l.parameters?.docs?.source},description:{story:`Start with a standard button for common actions such as saving or continuing.`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <EvoButton {...args as unknown as AnchorButtonProps} href="/home" as={({
      href,
      ...rest
    }) => <Link {...rest} to={href} />} priority="primary">
        Click me
      </EvoButton>;
  }
}`,...u.parameters?.docs?.source},description:{story:`When a client-side router handles navigation, use \`as\` to connect its link
component while keeping the button's appearance.

\`\`\`tsx
<EvoButton
  href="/home"
  as={({ href, ...rest }) => <Link {...rest} to={href} />}
>
  Home
</EvoButton>
\`\`\``,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <EvoButton {...args}>
      <EvoButtonCell style={{
      justifyContent: "space-between"
    }}>
        <span>Select</span>
        <span>Any</span>
      </EvoButtonCell>
    </EvoButton>
}`,...d.parameters?.docs?.source},description:{story:`Use a button cell to align a label with an icon or secondary value.`,...d.parameters?.docs?.description}}}})))()}p();export{l as Default,d as WithButtonCell,u as WithCustomLinkComponent,f as __namedExportsOrder,c as default};