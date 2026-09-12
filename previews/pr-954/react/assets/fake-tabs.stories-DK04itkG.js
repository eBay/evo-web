import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-CK-NQdWx.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{t as i}from"./classnames-D09xBJOL.js";import{t as a}from"./tabs-DqM1PmOr.js";function o(){let e=(0,c.use)(u);if(!e)throw Error(`EvoFakeTab must be used within an EvoFakeTabs component`);return e}function s({selected:e,ariaCurrent:t,children:n}){let r=(0,c.useMemo)(()=>({selected:e,ariaCurrent:t}),[e,t]);return(0,l.jsx)(u,{value:r,children:n})}var c,l,u;function d(){return(d=t((()=>{c=n(),l=r(),u=(0,c.createContext)(void 0);try{s.displayName=`FakeTabsProvider`,s.__docgenInfo={description:``,displayName:`FakeTabsProvider`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/fake-tabs/context.tsx`,methods:[],props:{selected:{defaultValue:null,declarations:[{fileName:`evo-react/src/fake-tabs/context.tsx`,name:`TypeLiteral`}],description:``,name:`selected`,required:!0,tags:{},type:{name:`FakeTabId | null`}},ariaCurrent:{defaultValue:null,declarations:[{fileName:`evo-react/src/fake-tabs/context.tsx`,name:`TypeLiteral`}],description:``,name:`ariaCurrent`,required:!0,tags:{},type:{name:`"true" | "page"`}}},tags:{}}}catch{}})))()}function f({id:e,href:t,as:n,className:r,children:i,onClick:a,...s}){let{selected:c,ariaCurrent:l}=o(),u=t===void 0,d=Object.is(c,e),f=n??`a`;return(0,m.jsx)(`li`,{className:(0,p.default)(`fake-tabs__item`,r),children:(0,m.jsx)(f,{...s,href:t,"aria-current":!u&&d?l:void 0,"aria-disabled":u?`true`:void 0,onClick:u?void 0:a,children:i})})}var p,m;function h(){return(h=t((()=>{p=e(i(),1),d(),m=r();try{f.displayName=`EvoFakeTab`,f.__docgenInfo={description:``,displayName:`EvoFakeTab`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/fake-tabs/fake-tab.tsx`,methods:[],props:{id:{defaultValue:null,declarations:[{fileName:`evo-react/src/fake-tabs/types.ts`,name:`TypeLiteral`}],description:"Unique identifier matching this tab to the parent EvoFakeTabs `selected` prop.",name:`id`,required:!0,tags:{},type:{name:`FakeTabId`}},href:{defaultValue:null,declarations:[{fileName:`evo-react/src/fake-tabs/types.ts`,name:`TypeLiteral`}],description:`Link destination. Omit to disable the tab.`,name:`href`,required:!1,tags:{},type:{name:`string | undefined`}},as:{defaultValue:null,declarations:[{fileName:`evo-react/src/fake-tabs/types.ts`,name:`TypeLiteral`}],description:"Custom component used in place of the native anchor, such as a framework Link.\nThe component receives `href` and all other anchor-compatible props.",name:`as`,required:!1,tags:{},type:{name:`ComponentType<DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>> | undefined`}}},tags:{}}}catch{}})))()}function g({className:e,children:t,...n}){return(0,v.jsx)(`ul`,{...n,className:(0,_.default)(`fake-tabs__items`,e),children:t})}var _,v;function y(){return(y=t((()=>{_=e(i(),1),v=r();try{g.displayName=`EvoFakeTabList`,g.__docgenInfo={description:``,displayName:`EvoFakeTabList`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/fake-tabs/fake-tab-list.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}function b({className:e,children:t,...n}){return(0,S.jsx)(`div`,{...n,className:(0,x.default)(`fake-tabs__content`,e),children:(0,S.jsx)(`div`,{className:`fake-tabs__panel`,children:(0,S.jsx)(`div`,{className:`fake-tabs__cell`,children:(0,S.jsx)(`div`,{children:t})})})})}var x,S;function C(){return(C=t((()=>{x=e(i(),1),S=r();try{b.displayName=`EvoFakeTabPanel`,b.__docgenInfo={description:``,displayName:`EvoFakeTabPanel`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/fake-tabs/fake-tab-panel.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}function w({selected:e,size:t=`regular`,tabMatchesCurrentUrl:n=!0,className:r,children:i,...a}){return(0,E.jsx)(s,{selected:e,ariaCurrent:n?`page`:`true`,children:(0,E.jsx)(`div`,{...a,className:(0,T.default)(`fake-tabs`,t===`large`&&`fake-tabs--large`,r),children:i})})}var T,E;function D(){return(D=t((()=>{T=e(i(),1),d(),a(),E=r();try{w.displayName=`EvoFakeTabs`,w.__docgenInfo={description:``,displayName:`EvoFakeTabs`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/fake-tabs/fake-tabs.tsx`,methods:[],props:{selected:{defaultValue:null,declarations:[{fileName:`evo-react/src/fake-tabs/types.ts`,name:`TypeLiteral`}],description:"The id of the currently selected tab.\nPass `null` explicitly when no tab corresponds to the current page.",name:`selected`,required:!0,tags:{},type:{name:`FakeTabId | null`}},size:{defaultValue:{value:`regular`},declarations:[{fileName:`evo-react/src/fake-tabs/types.ts`,name:`TypeLiteral`}],description:'Size of the tab strip. Defaults to `"regular"`.',name:`size`,required:!1,tags:{},type:{name:`Size | undefined`}},tabMatchesCurrentUrl:{defaultValue:{value:`true`},declarations:[{fileName:`evo-react/src/fake-tabs/types.ts`,name:`TypeLiteral`}],description:'Controls the `aria-current` value on the selected tab link.\nWhen `true` (default), the selected link gets `aria-current="page"`.\nWhen `false`, it gets `aria-current="true"`.',name:`tabMatchesCurrentUrl`,required:!1,tags:{},type:{name:`boolean | undefined`}}},tags:{}}}catch{}})))()}var O,k,A,j,M;function N(){return(N=t((()=>{h(),y(),C(),D(),O=r(),k={title:`navigation & disclosure/evo-fake-tabs`,component:w,subcomponents:{EvoFakeTabList:g,EvoFakeTab:f,EvoFakeTabPanel:b},tags:[`autodocs`],parameters:{docs:{description:{component:`
A navigation-based tab strip where each tab is an anchor link. Unlike the interactive \`EvoTabs\` widget,
fake tabs use \`aria-current\` on the selected link rather than ARIA tab roles.

**Fake tabs are appropriate when each tab navigates to a distinct URL.** The selected tab reflects
the current page, not client-side state managed by JavaScript. Omit a tab's \`href\` to render it disabled.

## Usage

\`\`\`tsx
import {
  EvoFakeTabs,
  EvoFakeTabList,
  EvoFakeTab,
  EvoFakeTabPanel,
} from "@evo-web/react/fake-tabs";
\`\`\`
        `}}},argTypes:{selected:{control:`select`,options:[`overview`,`shipping`,`returns`,null]},size:{control:`select`,options:[`regular`,`large`],table:{defaultValue:{summary:`regular`}}},tabMatchesCurrentUrl:{control:`boolean`,table:{defaultValue:{summary:`true`}}}},args:{selected:`overview`,size:`regular`,tabMatchesCurrentUrl:!0},render({selected:e,...t}){return(0,O.jsxs)(w,{selected:e,...t,children:[(0,O.jsxs)(g,{children:[(0,O.jsx)(f,{id:`overview`,href:`/overview`,children:`Overview`}),(0,O.jsx)(f,{id:`shipping`,href:`/shipping`,children:`Shipping`}),(0,O.jsx)(f,{id:`returns`,href:`/returns`,children:`Returns`}),(0,O.jsx)(f,{id:`contact`,children:`Contact (disabled)`})]}),(0,O.jsxs)(b,{children:[(0,O.jsx)(`h3`,{children:`Page content`}),(0,O.jsx)(`p`,{children:`In a server-rendered app this area contains the page content for the selected tab URL.`})]})]})}},A={},j={parameters:{docs:{description:{story:`
Pass a custom \`as\` component to swap the native \`<a>\` for a framework link.
The component receives \`href\` and all anchor-compatible props:

\`\`\`tsx
import { Link } from "react-router";

function RouterTab({ href, ...props }: React.ComponentProps<"a">) {
  return href === undefined ? null : <Link to={href} {...props} />;
}

<EvoFakeTab id="overview" href="/overview" as={RouterTab}>Overview</EvoFakeTab>
\`\`\`
`}}},render(e){let t=({href:e,children:t,...n})=>(0,O.jsx)(`a`,{"data-router-link":`true`,href:e,...n,children:t});return(0,O.jsxs)(w,{...e,children:[(0,O.jsxs)(g,{children:[(0,O.jsx)(f,{id:`overview`,href:`/overview`,as:t,children:`Overview`}),(0,O.jsx)(f,{id:`shipping`,href:`/shipping`,as:t,children:`Shipping`})]}),(0,O.jsx)(b,{children:(0,O.jsx)(`p`,{children:`Content rendered by the router.`})})]})}},M=[`Default`,`CustomLinkAdapter`],A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
Pass a custom \\\`as\\\` component to swap the native \\\`<a>\\\` for a framework link.
The component receives \\\`href\\\` and all anchor-compatible props:

\\\`\\\`\\\`tsx
import { Link } from "react-router";

function RouterTab({ href, ...props }: React.ComponentProps<"a">) {
  return href === undefined ? null : <Link to={href} {...props} />;
}

<EvoFakeTab id="overview" href="/overview" as={RouterTab}>Overview</EvoFakeTab>
\\\`\\\`\\\`
\`
      }
    }
  },
  render(args) {
    type LinkProps = React.ComponentProps<"a">;
    const CustomLink = ({
      href,
      children,
      ...rest
    }: LinkProps) => <a data-router-link="true" href={href} {...rest}>
        {children}
      </a>;
    return <EvoFakeTabs {...args}>
        <EvoFakeTabList>
          <EvoFakeTab id="overview" href="/overview" as={CustomLink}>
            Overview
          </EvoFakeTab>
          <EvoFakeTab id="shipping" href="/shipping" as={CustomLink}>
            Shipping
          </EvoFakeTab>
        </EvoFakeTabList>
        <EvoFakeTabPanel>
          <p>Content rendered by the router.</p>
        </EvoFakeTabPanel>
      </EvoFakeTabs>;
  }
}`,...j.parameters?.docs?.source}}}})))()}N();export{j as CustomLinkAdapter,A as Default,M as __namedExportsOrder,k as default};