import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./badge-BTLNf20F.js";import{a as i,c as a,i as o,n as s,o as c,r as l,s as u,t as d}from"./fake-menu-DhGmSirQ.js";function f(e){return(0,p.jsx)(r,{...e,type:`menu`})}var p;function m(){return(m=e((()=>{n(),p=t();try{f.displayName=`EvoFakeMenuItemBadge`,f.__docgenInfo={description:`Adds a count or status indicator to a fake menu item.`,displayName:`EvoFakeMenuItemBadge`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/fake-menu/fake-menu-item-badge.tsx`,methods:[],props:{number:{defaultValue:null,declarations:[{fileName:`evo-react/src/badge/types.ts`,name:`TypeLiteral`}],description:"Count displayed in the badge. Values greater than 99 display as `99+`;\nzero and negative values render nothing. Omit to show an empty indicator.",name:`number`,required:!1,tags:{},type:{name:`string | number`}},a11yText:{defaultValue:null,declarations:[{fileName:`evo-react/src/badge/types.ts`,name:`TypeLiteral`}],description:'Descriptive label for what the badge represents, such as `"5 unread items"`.\nEnglish default to be overridden is `"notification"` when `number` is omitted,\nor `"{number} notifications"` otherwise. Pass `null` explicitly _only_ if\nalternative accessibility information is present.',name:`a11yText`,required:!0,tags:{},type:{name:`string | null`}}},tags:{summary:`Badge attached to a fake menu item.`}}}catch{}})))()}function h({to:e,children:t,...n}){return(0,g.jsx)(`a`,{"data-custom-link":`true`,...n,href:e,onClick:e=>e.preventDefault(),children:t})}var g,_,v,y,b;function x(){return(x=e((()=>{s(),a(),m(),c(),o(),g=t(),_={title:`Building Blocks/EvoFakeMenu`,component:d,subcomponents:{EvoFakeMenuItems:i,EvoFakeMenuItem:u,EvoFakeMenuItemBadge:f,EvoFakeMenuSeparator:l},argTypes:{classPrefix:{control:`text`},reverse:{control:`boolean`},fixed:{control:`boolean`},fixWidth:{control:`boolean`}},args:{reverse:!1,fixed:!1,fixWidth:!1},render(e){return(0,g.jsx)(d,{...e,children:(0,g.jsxs)(i,{children:[(0,g.jsxs)(u,{href:`/messages`,onClick:e=>e.preventDefault(),children:[`Messages`,(0,g.jsx)(f,{number:5,a11yText:`5 unread messages`})]}),(0,g.jsx)(u,{href:`/purchase-history`,current:!0,onClick:e=>e.preventDefault(),children:`Purchase history`}),(0,g.jsx)(l,{}),(0,g.jsx)(u,{type:`button`,children:`Sign out`}),(0,g.jsx)(u,{href:`/seller-hub`,disabled:!0,children:`Seller Hub unavailable`})]})})}},v={},y={render:e=>(0,g.jsx)(d,{...e,children:(0,g.jsx)(i,{children:(0,g.jsx)(u,{href:`/account`,as:({href:e=``,...t})=>(0,g.jsx)(h,{...t,to:e}),children:`Account`})})}),parameters:{docs:{description:{story:`
A custom component through the \`as\` prop can replace the native anchor.
React Router's \`Link\` uses \`to\` instead of \`href\`.

\`\`\`tsx
import { Link } from "react-router";

<EvoFakeMenuItem
  href="/account"
  as={({ href = "", ...rest }) => <Link {...rest} to={href} />}
>
  Account
</EvoFakeMenuItem>
\`\`\`
`}}}},b=[`Default`,`CustomLink`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{}`,...v.parameters?.docs?.source},description:{story:`Navigation items include current, disabled, and grouped entries.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <EvoFakeMenu {...args}>
      <EvoFakeMenuItems>
        <EvoFakeMenuItem href="/account" as={({
        href = "",
        ...rest
      }) => <Link {...rest} to={href} />}>
          Account
        </EvoFakeMenuItem>
      </EvoFakeMenuItems>
    </EvoFakeMenu>,
  parameters: {
    docs: {
      description: {
        story: \`
A custom component through the \\\`as\\\` prop can replace the native anchor.
React Router's \\\`Link\\\` uses \\\`to\\\` instead of \\\`href\\\`.

\\\`\\\`\\\`tsx
import { Link } from "react-router";

<EvoFakeMenuItem
  href="/account"
  as={({ href = "", ...rest }) => <Link {...rest} to={href} />}
>
  Account
</EvoFakeMenuItem>
\\\`\\\`\\\`
\`
      }
    }
  }
}`,...y.parameters?.docs?.source},description:{story:`A fake menu link adapts to a client-side router component.`,...y.parameters?.docs?.description}}}})))()}x();export{y as CustomLink,v as Default,b as __namedExportsOrder,_ as default};