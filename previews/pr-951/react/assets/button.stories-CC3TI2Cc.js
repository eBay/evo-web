import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./button-wdHlpOf3.js";import{n as i,t as a}from"./button-cell-DWuFuEYy.js";import{n as o,t as s}from"./download-16-fRy43d2l.js";function c({to:e,children:t,...n}){return(0,l.jsx)(`a`,{"data-custom-link":`true`,...n,href:e,onClick:e=>{e.preventDefault(),alert(`client side navigation`)},children:t})}var l,u,d,f,p,m;function h(){return(h=e((()=>{n(),i(),o(),l=t(),u={title:`Buttons/EvoButton`,component:r,subcomponents:{EvoButtonCell:a},argTypes:{priority:{control:`select`},variant:{control:`select`},size:{control:`select`},bodyState:{control:`select`},split:{control:`select`},fluid:{control:`boolean`},disabled:{control:`boolean`},partiallyDisabled:{control:`boolean`},transparent:{control:`boolean`},borderless:{control:`boolean`},fixedHeight:{control:`boolean`},truncate:{control:`boolean`},href:{control:`text`},as:{control:!1},children:{control:`text`}},args:{priority:`primary`,variant:`standard`,children:`Save changes`}},d={args:{children:`Save changes`}},f={render:e=>(0,l.jsx)(r,{...e,href:`/orders`,as:({href:e,...t})=>(0,l.jsx)(c,{...t,to:e}),priority:`primary`,children:`View orders`})},p={render:e=>(0,l.jsx)(r,{...e,children:(0,l.jsxs)(a,{children:[(0,l.jsx)(s,{}),(0,l.jsx)(`span`,{children:`Download invoice`})]})})},m=[`Default`,`CustomLink`,`WithButtonCell`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Save changes"
  }
}`,...d.parameters?.docs?.source},description:{story:`A standard button handles an in-page action such as saving or continuing.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <EvoButton {...args as unknown as AnchorButtonProps} href="/orders" as={({
      href,
      ...rest
    }) => <Link {...rest} to={href} />} priority="primary">
        View orders
      </EvoButton>;
  }
}`,...f.parameters?.docs?.source},description:{story:`A client-side router can supply the link component through \`as\` while the
button appearance is preserved.

\`\`\`tsx
<EvoButton
  href="/orders"
  as={({ href, ...rest }) => <Link {...rest} to={href} />}
>
  View orders
</EvoButton>
\`\`\``,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <EvoButton {...args}>
      <EvoButtonCell>
        <EvoIconDownload16 />
        <span>Download invoice</span>
      </EvoButtonCell>
    </EvoButton>
}`,...p.parameters?.docs?.source},description:{story:`A button cell aligns a decorative icon with the button's action label.`,...p.parameters?.docs?.description}}}})))()}h();export{f as CustomLink,d as Default,p as WithButtonCell,m as __namedExportsOrder,u as default};