import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-CK-NQdWx.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{t as i}from"./classnames-D09xBJOL.js";import{n as a,t as o}from"./badge-L8aowDAG.js";import{t as s}from"./menu-CgpJxhKb.js";import{n as c,t as l}from"./tick-16-BblnEKxa.js";function u(){let e=(0,f.use)(m);if(!e)throw Error(`Fake menu components must be used within an EvoFakeMenu component`);return e}function d({baseClass:e,children:t}){let n=(0,f.useMemo)(()=>({baseClass:e}),[e]);return(0,p.jsx)(m,{value:n,children:t})}var f,p,m;function h(){return(h=t((()=>{f=n(),p=r(),m=(0,f.createContext)(void 0);try{d.displayName=`FakeMenuProvider`,d.__docgenInfo={description:``,displayName:`FakeMenuProvider`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/fake-menu/context.tsx`,methods:[],props:{baseClass:{defaultValue:null,declarations:[{fileName:`evo-react/src/fake-menu/context.tsx`,name:`TypeLiteral`}],description:``,name:`baseClass`,required:!0,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}function g({classPrefix:e,reverse:t=!1,fixed:n=!1,fixWidth:r=!1,className:i,children:a,...o}){let s=e||`fake-menu`;return(0,v.jsx)(d,{baseClass:s,children:(0,v.jsx)(`span`,{...o,className:(0,_.default)(e?`${s}__menu`:`fake-menu`,t&&`${s}__menu--reverse`,n&&`${s}__menu--fixed`,r&&`${s}__menu--fix-width`,i),children:a})})}var _,v;function y(){return(y=t((()=>{_=e(i(),1),h(),s(),v=r();try{g.displayName=`EvoFakeMenu`,g.__docgenInfo={description:``,displayName:`EvoFakeMenu`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/fake-menu/fake-menu.tsx`,methods:[],props:{classPrefix:{defaultValue:null,declarations:[{fileName:`evo-react/src/fake-menu/types.ts`,name:`TypeLiteral`}],description:`Prefix applied to item and separator BEM classes when embedded in another component.`,name:`classPrefix`,required:!1,tags:{},type:{name:`string | undefined`}},reverse:{defaultValue:{value:`false`},declarations:[{fileName:`evo-react/src/fake-menu/types.ts`,name:`TypeLiteral`}],description:`Aligns the menu to the opposite inline edge.`,name:`reverse`,required:!1,tags:{},type:{name:`boolean | undefined`}},fixed:{defaultValue:{value:`false`},declarations:[{fileName:`evo-react/src/fake-menu/types.ts`,name:`TypeLiteral`}],description:`Uses fixed positioning instead of absolute positioning.`,name:`fixed`,required:!1,tags:{},type:{name:`boolean | undefined`}},fixWidth:{defaultValue:{value:`false`},declarations:[{fileName:`evo-react/src/fake-menu/types.ts`,name:`TypeLiteral`}],description:`Makes the menu width match its containing control.`,name:`fixWidth`,required:!1,tags:{},type:{name:`boolean | undefined`}}},tags:{}}}catch{}})))()}function b({className:e,current:t=!1,itemMatchesUrl:n=!0,disabled:r=!1,type:i,href:a,as:o,children:s,...c}){let{baseClass:d}=u(),f=t?n?`page`:`true`:void 0,p=(0,x.default)(`${d}__item`,e),m=(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(`span`,{children:s}),(0,S.jsx)(l,{})]});return i===`button`||i===`submit`?(0,S.jsx)(`li`,{children:(0,S.jsx)(`button`,{...c,type:i,disabled:r,"aria-current":f,className:p,children:m})}):(0,S.jsx)(`li`,{children:(0,S.jsx)(o??`a`,{...c,href:r?void 0:a,"aria-disabled":r?`true`:void 0,"aria-current":f,className:p,children:m})})}var x,S;function C(){return(C=t((()=>{x=e(i(),1),c(),h(),S=r();try{b.displayName=`EvoFakeMenuItem`,b.__docgenInfo={description:``,displayName:`EvoFakeMenuItem`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/fake-menu/fake-menu-item.tsx`,methods:[],props:{current:{defaultValue:{value:`false`},declarations:[{fileName:`evo-react/src/fake-menu/types.ts`,name:`TypeLiteral`}],description:`Marks the item as representing the current page or current selection.`,name:`current`,required:!1,tags:{},type:{name:`boolean | undefined`}},itemMatchesUrl:{defaultValue:{value:`true`},declarations:[{fileName:`evo-react/src/fake-menu/types.ts`,name:`TypeLiteral`}],description:'When `false`, a current item uses `aria-current="true"` instead of `aria-current="page"`.',name:`itemMatchesUrl`,required:!1,tags:{},type:{name:`boolean | undefined`}},disabled:{defaultValue:{value:`false`},declarations:[{fileName:`evo-react/src/fake-menu/types.ts`,name:`TypeLiteral`},{fileName:`evo-react/src/fake-menu/types.ts`,name:`TypeLiteral`}],description:"Prevents navigation by removing the link's `href`.\nDisables the native button.",name:`disabled`,required:!1,tags:{},type:{name:`boolean | undefined`}},as:{defaultValue:null,declarations:[{fileName:`evo-react/src/fake-menu/types.ts`,name:`TypeLiteral`},{fileName:`evo-react/src/fake-menu/types.ts`,name:`TypeLiteral`}],description:"Custom component used in place of the native anchor. Only applies when `type` is omitted.\nUnavailable when the item renders as a button.",name:`as`,required:!1,tags:{},type:{name:`ComponentType<DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>> | undefined`}},type:{defaultValue:null,declarations:[{fileName:`evo-react/src/fake-menu/types.ts`,name:`TypeLiteral`},{fileName:`evo-react/src/fake-menu/types.ts`,name:`TypeLiteral`}],description:`Omit to render the item as an anchor.
Renders the item as a button with the specified native button type.`,name:`type`,required:!1,tags:{},type:{name:`EvoFakeMenuItemType | undefined`}}},tags:{}}}catch{}})))()}function w(e){return(0,T.jsx)(o,{...e,type:`menu`})}var T;function E(){return(E=t((()=>{a(),T=r();try{w.displayName=`EvoFakeMenuItemBadge`,w.__docgenInfo={description:``,displayName:`EvoFakeMenuItemBadge`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/fake-menu/fake-menu-item-badge.tsx`,methods:[],props:{number:{defaultValue:null,declarations:[{fileName:`evo-react/src/badge/types.ts`,name:`TypeLiteral`}],description:`Number displayed in the badge.`,name:`number`,required:!1,tags:{},type:{name:`string | number | undefined`}},a11yText:{defaultValue:null,declarations:[{fileName:`evo-react/src/badge/types.ts`,name:`TypeLiteral`}],description:'Descriptive label for what the badge represents, such as `"5 unread items"`.\nEnglish default to be overridden is `"notification"` when `number` is omitted,\nor `"{number} notifications"` otherwise. Pass `null` explicitly _only_ if\nalternative accessibility information is present.',name:`a11yText`,required:!0,tags:{},type:{name:`string | null`}}},tags:{}}}catch{}})))()}function D({className:e,children:t,...n}){return(0,k.jsx)(`ul`,{...n,className:(0,O.default)(`fake-menu__items`,e),tabIndex:-1,children:t})}var O,k;function A(){return(A=t((()=>{O=e(i(),1),k=r();try{D.displayName=`EvoFakeMenuItems`,D.__docgenInfo={description:``,displayName:`EvoFakeMenuItems`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/fake-menu/fake-menu-items.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}function j({className:e,...t}){let{baseClass:n}=u();return(0,N.jsx)(`li`,{children:(0,N.jsx)(`hr`,{...t,className:(0,M.default)(`${n}__separator`,e)})})}var M,N;function P(){return(P=t((()=>{M=e(i(),1),h(),N=r();try{j.displayName=`EvoFakeMenuSeparator`,j.__docgenInfo={description:``,displayName:`EvoFakeMenuSeparator`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/fake-menu/fake-menu-separator.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}function F({to:e,children:t,...n}){return(0,I.jsx)(`a`,{"data-custom-link":`true`,...n,href:e,onClick:e=>e.preventDefault(),children:t})}var I,L,R,z,B;function V(){return(V=t((()=>{y(),C(),E(),A(),P(),I=r(),L={title:`building blocks/evo-fake-menu`,component:g,subcomponents:{EvoFakeMenuItems:D,EvoFakeMenuItem:b,EvoFakeMenuItemBadge:w,EvoFakeMenuSeparator:j},tags:[`autodocs`],parameters:{docs:{description:{component:`
A compound navigation menu containing links, buttons, badges, and separators.

## Usage

\`\`\`tsx
import {
  EvoFakeMenu,
  EvoFakeMenuItem,
  EvoFakeMenuItems,
} from "@evo-web/react/fake-menu";
\`\`\`
        `}}},argTypes:{classPrefix:{control:`text`},reverse:{control:`boolean`},fixed:{control:`boolean`},fixWidth:{control:`boolean`}},args:{reverse:!1,fixed:!1,fixWidth:!1},render(e){return(0,I.jsx)(g,{...e,children:(0,I.jsxs)(D,{children:[(0,I.jsxs)(b,{href:`#`,onClick:e=>e.preventDefault(),children:[`Messages`,(0,I.jsx)(w,{number:5,a11yText:`5 unread messages`})]}),(0,I.jsx)(b,{href:`#`,current:!0,onClick:e=>e.preventDefault(),children:`Current page`}),(0,I.jsx)(j,{}),(0,I.jsx)(b,{type:`button`,children:`Button item`}),(0,I.jsx)(b,{href:`#`,disabled:!0,children:`Disabled link`})]})})}},R={},z={render:e=>(0,I.jsx)(g,{...e,children:(0,I.jsx)(D,{children:(0,I.jsx)(b,{href:`/account`,as:({href:e=``,...t})=>(0,I.jsx)(F,{...t,to:e}),children:`Account`})})}),parameters:{docs:{description:{story:`
Pass a custom component through the \`as\` prop to replace the native anchor. This example adapts React Router's \`Link\`, which uses \`to\` instead of \`href\`.

\`\`\`tsx
import { Link } from "react-router";

<EvoFakeMenuItem
  href="/account"
  as={({ href = "", ...rest }) => <Link {...rest} to={href} />}
>
  Account
</EvoFakeMenuItem>
\`\`\`
`}}}},B=[`Default`,`WithCustomLinkComponent`],R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
Pass a custom component through the \\\`as\\\` prop to replace the native anchor. This example adapts React Router's \\\`Link\\\`, which uses \\\`to\\\` instead of \\\`href\\\`.

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
}`,...z.parameters?.docs?.source}}}})))()}V();export{R as Default,z as WithCustomLinkComponent,B as __namedExportsOrder,L as default};