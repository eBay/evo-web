import{j as e}from"./iframe-Cg-ElmEC.js";import{E as t}from"./icon-button-DI9YqGBE.js";import{E as d}from"./badge-DzRvtu81.js";import{E as m,a as h,b as g,c as v}from"./chat-16-CEu5__Ss.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DqdtECl9.js";/* empty css               */import"./icon-BoPtPe1b.js";function r(o){return e.jsx(d,{...o,type:"icon",a11yText:null})}try{r.displayName="EvoIconButtonBadge",r.__docgenInfo={description:"",displayName:"EvoIconButtonBadge",props:{number:{defaultValue:null,description:"Number displayed in the badge.",name:"number",required:!1,type:{name:"string | number"}}}}}catch{}const{action:a}=__STORYBOOK_MODULE_ACTIONS__,T={title:"buttons/evo-icon-button",component:t,subcomponents:{EvoIconButtonBadge:r},tags:["autodocs"],parameters:{docs:{description:{component:'\nA circular button that contains an icon only. Renders as `<button>` or `<a>` based on the `href` prop.\n\n## Usage\n\n```tsx\nimport { EvoIconButton } from "@evo-web/react/icon-button";\n```\n        '}}},argTypes:{a11yText:{type:{name:"string",required:!0},control:"text"},href:{description:"Renders as an anchor element when provided",control:"text"},as:{control:!1},priority:{options:["primary","secondary","tertiary","none"],control:{type:"select"}},size:{options:["large","small"],control:{type:"select"}},transparent:{control:"boolean"},partiallyDisabled:{control:"boolean"},disabled:{control:"boolean"},onClick:{description:"Triggered on click",action:"onClick",table:{category:"Events",defaultValue:{summary:"`(MouseEvent)`"}}},onEscape:{action:"onEscape",table:{category:"Events",defaultValue:{summary:"`(KeyboardEvent)`"}}},onFocus:{description:"Triggered on keyboard focus",action:"onFocus",table:{category:"Events",defaultValue:{summary:"`(FocusEvent)`"}}},onBlur:{description:"Triggered on focus lost",action:"onBlur",table:{category:"Events",defaultValue:{summary:"`(FocusEvent)`"}}}},args:{a11yText:"Menu",priority:"none"}},s={render:o=>e.jsx(t,{...o,onClick:a("onClick"),onFocus:a("onFocus"),onBlur:a("onBlur"),onEscape:a("onEscape"),children:e.jsx(h,{})})},c={render:o=>e.jsxs(t,{...o,a11yText:"Cart",children:[e.jsx(g,{}),e.jsx(r,{number:3})]})},i={render:o=>e.jsx(t,{...o,href:"https://ebay.com",a11yText:"Settings",onClick:n=>n.preventDefault(),children:e.jsx(m,{})})};function E({to:o,...n}){return e.jsx("a",{"data-custom-link":"true",...n,href:o,onClick:l=>{l.preventDefault(),alert("client side navigation")}})}const u={render:o=>e.jsx(t,{...o,href:"/home",a11yText:"Settings",as:({href:n,...l})=>e.jsx(E,{...l,to:n}),children:e.jsx(m,{})}),parameters:{docs:{description:{story:`
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
`}}}},p={render:o=>e.jsxs(t,{...o,href:"https://ebay.com",a11yText:"Chat",onClick:n=>n.preventDefault(),children:[e.jsx(v,{}),e.jsx(r,{number:99})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <EvoIconButton {...args} onClick={action("onClick")} onFocus={action("onFocus")} onBlur={action("onBlur")} onEscape={action("onEscape")}>
      <EvoIconMenu20 />
    </EvoIconButton>
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <EvoIconButton {...args} a11yText="Cart">
      <EvoIconCart16 />
      <EvoIconButtonBadge number={3} />
    </EvoIconButton>
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <EvoIconButton {...args as unknown as AnchorIconButtonProps} href="https://ebay.com" a11yText="Settings" onClick={e => e.preventDefault()}>
      <EvoIconSettings16 />
    </EvoIconButton>
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <EvoIconButton {...args as unknown as AnchorIconButtonProps} href="https://ebay.com" a11yText="Chat" onClick={e => e.preventDefault()}>
      <EvoIconChat16 />
      <EvoIconButtonBadge number={99} />
    </EvoIconButton>
}`,...p.parameters?.docs?.source}}};const S=["Default","WithBadge","AsLink","WithCustomLinkComponent","WithChat"];export{i as AsLink,s as Default,c as WithBadge,p as WithChat,u as WithCustomLinkComponent,S as __namedExportsOrder,T as default};
