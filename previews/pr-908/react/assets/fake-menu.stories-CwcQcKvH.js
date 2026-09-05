import{r as k,j as n}from"./iframe-Dm1EhO3b.js";import{c as f}from"./index-4aOAFbGx.js";/* empty css             */import{E as I}from"./tick-16-BMYH_HPi.js";import{E as C}from"./badge-PIGGYJ8T.js";import"./preload-helper-PPVm8Dsz.js";import"./icon-D6n9mbyQ.js";const M=k.createContext(void 0);function E(){const e=k.use(M);if(!e)throw new Error("Fake menu components must be used within an EvoFakeMenu component");return e}function _({baseClass:e,children:t}){const a=k.useMemo(()=>({baseClass:e}),[e]);return n.jsx(M,{value:a,children:t})}try{_.displayName="FakeMenuProvider",_.__docgenInfo={description:"",displayName:"FakeMenuProvider",props:{baseClass:{defaultValue:null,description:"",name:"baseClass",required:!0,type:{name:"string"}}}}}catch{}function u({classPrefix:e,reverse:t=!1,fixed:a=!1,fixWidth:s=!1,className:i,children:h,...v}){const o=e||"fake-menu";return n.jsx(_,{baseClass:o,children:n.jsx("span",{...v,className:f(e?`${o}__menu`:"fake-menu",t&&`${o}__menu--reverse`,a&&`${o}__menu--fixed`,s&&`${o}__menu--fix-width`,i),children:h})})}try{u.displayName="EvoFakeMenu",u.__docgenInfo={description:"",displayName:"EvoFakeMenu",props:{classPrefix:{defaultValue:null,description:"Prefix applied to item and separator BEM classes when embedded in another component.",name:"classPrefix",required:!1,type:{name:"string"}},reverse:{defaultValue:{value:"false"},description:"Aligns the menu to the opposite inline edge.",name:"reverse",required:!1,type:{name:"boolean"}},fixed:{defaultValue:{value:"false"},description:"Uses fixed positioning instead of absolute positioning.",name:"fixed",required:!1,type:{name:"boolean"}},fixWidth:{defaultValue:{value:"false"},description:"Makes the menu width match its containing control.",name:"fixWidth",required:!1,type:{name:"boolean"}}}}}catch{}function r({className:e,current:t=!1,itemMatchesUrl:a=!0,disabled:s=!1,type:i,href:h,as:v,children:o,...x}){const{baseClass:F}=E(),y=t?a?"page":"true":void 0,g=f(`${F}__item`,e),b=n.jsxs(n.Fragment,{children:[n.jsx("span",{children:o}),n.jsx(I,{})]});if(i==="button"||i==="submit")return n.jsx("li",{children:n.jsx("button",{...x,type:i,disabled:s,"aria-current":y,className:g,children:b})});const j=v??"a";return n.jsx("li",{children:n.jsx(j,{...x,href:s?void 0:h,"aria-disabled":s?"true":void 0,"aria-current":y,className:g,children:b})})}try{r.displayName="EvoFakeMenuItem",r.__docgenInfo={description:"",displayName:"EvoFakeMenuItem",props:{current:{defaultValue:{value:"false"},description:"Marks the item as representing the current page or current selection.",name:"current",required:!1,type:{name:"boolean"}},itemMatchesUrl:{defaultValue:{value:"true"},description:'When `false`, a current item uses `aria-current="true"` instead of `aria-current="page"`.',name:"itemMatchesUrl",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"Prevents navigation by removing the link's `href`.\nDisables the native button.",name:"disabled",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"Custom component used in place of the native anchor. Only applies when `type` is omitted.\nUnavailable when the item renders as a button.",name:"as",required:!1,type:{name:"ComponentType<DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>>"}},type:{defaultValue:null,description:`Omit to render the item as an anchor.
Renders the item as a button with the specified native button type.`,name:"type",required:!1,type:{name:"EvoFakeMenuItemType"}}}}}catch{}function m(e){return n.jsx(C,{...e,type:"menu"})}try{m.displayName="EvoFakeMenuItemBadge",m.__docgenInfo={description:"",displayName:"EvoFakeMenuItemBadge",props:{number:{defaultValue:null,description:"Number displayed in the badge.",name:"number",required:!1,type:{name:"string | number"}},a11yText:{defaultValue:null,description:'Descriptive label for what the badge represents, such as `"5 unread items"`.\nEnglish default to be overridden is `"notification"` when `number` is omitted,\nor `"{number} notifications"` otherwise. Pass `null` explicitly _only_ if\nalternative accessibility information is present.',name:"a11yText",required:!0,type:{name:"string"}}}}}catch{}function c({className:e,children:t,...a}){return n.jsx("ul",{...a,className:f("fake-menu__items",e),tabIndex:-1,children:t})}try{c.displayName="EvoFakeMenuItems",c.__docgenInfo={description:"",displayName:"EvoFakeMenuItems",props:{}}}catch{}function p({className:e,...t}){const{baseClass:a}=E();return n.jsx("li",{children:n.jsx("hr",{...t,className:f(`${a}__separator`,e)})})}try{p.displayName="EvoFakeMenuSeparator",p.__docgenInfo={description:"",displayName:"EvoFakeMenuSeparator",props:{}}}catch{}function N({to:e,children:t,...a}){return n.jsx("a",{"data-custom-link":"true",...a,href:e,onClick:s=>s.preventDefault(),children:t})}const D={title:"building blocks/evo-fake-menu",component:u,subcomponents:{EvoFakeMenuItems:c,EvoFakeMenuItem:r,EvoFakeMenuItemBadge:m,EvoFakeMenuSeparator:p},tags:["autodocs"],parameters:{docs:{description:{component:`
A compound navigation menu containing links, buttons, badges, and separators.

## Usage

\`\`\`tsx
import {
  EvoFakeMenu,
  EvoFakeMenuItem,
  EvoFakeMenuItems,
} from "@evo-web/react/fake-menu";
\`\`\`
        `}}},argTypes:{classPrefix:{control:"text"},reverse:{control:"boolean"},fixed:{control:"boolean"},fixWidth:{control:"boolean"}},args:{reverse:!1,fixed:!1,fixWidth:!1},render(e){return n.jsx(u,{...e,children:n.jsxs(c,{children:[n.jsxs(r,{href:"#",onClick:t=>t.preventDefault(),children:["Messages",n.jsx(m,{number:5,a11yText:"5 unread messages"})]}),n.jsx(r,{href:"#",current:!0,onClick:t=>t.preventDefault(),children:"Current page"}),n.jsx(p,{}),n.jsx(r,{type:"button",children:"Button item"}),n.jsx(r,{href:"#",disabled:!0,children:"Disabled link"})]})})}},l={},d={render:e=>n.jsx(u,{...e,children:n.jsx(c,{children:n.jsx(r,{href:"/account",as:({href:t="",...a})=>n.jsx(N,{...a,to:t}),children:"Account"})})}),parameters:{docs:{description:{story:'\nPass a custom component through the `as` prop to replace the native anchor. This example adapts React Router\'s `Link`, which uses `to` instead of `href`.\n\n```tsx\nimport { Link } from "react-router";\n\n<EvoFakeMenuItem\n  href="/account"\n  as={({ href = "", ...rest }) => <Link {...rest} to={href} />}\n>\n  Account\n</EvoFakeMenuItem>\n```\n'}}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const W=["Default","WithCustomLinkComponent"];export{l as Default,d as WithCustomLinkComponent,W as __namedExportsOrder,D as default};
