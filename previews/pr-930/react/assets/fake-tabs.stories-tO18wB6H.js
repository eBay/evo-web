import{r as f,j as e}from"./iframe-DjAcWYNC.js";import{c as u}from"./index-C04a5A_d.js";/* empty css             */import"./preload-helper-PPVm8Dsz.js";const k=f.createContext(void 0);function x(){const a=f.use(k);if(!a)throw new Error("EvoFakeTab must be used within an EvoFakeTabs component");return a}function v({selected:a,ariaCurrent:t,children:r}){const n=f.useMemo(()=>({selected:a,ariaCurrent:t}),[a,t]);return e.jsx(k,{value:n,children:r})}try{v.displayName="FakeTabsProvider",v.__docgenInfo={description:"",displayName:"FakeTabsProvider",filePath:"/home/runner/work/evo-web/evo-web/packages/evo-react/src/fake-tabs/context.tsx",methods:[],props:{selected:{defaultValue:null,declarations:[{fileName:"evo-react/src/fake-tabs/context.tsx",name:"TypeLiteral"}],description:"",name:"selected",required:!0,tags:{},type:{name:"FakeTabId"}},ariaCurrent:{defaultValue:null,declarations:[{fileName:"evo-react/src/fake-tabs/context.tsx",name:"TypeLiteral"}],description:"",name:"ariaCurrent",required:!0,tags:{},type:{name:'"true" | "page"'}}},tags:{}}}catch{}function s({id:a,href:t,as:r,className:n,children:o,onClick:m,...h}){const{selected:g,ariaCurrent:T}=x(),b=t===void 0,y=Object.is(g,a),_=r??"a";return e.jsx("li",{className:u("fake-tabs__item",n),children:e.jsx(_,{...h,href:t,"aria-current":!b&&y?T:void 0,"aria-disabled":b?"true":void 0,onClick:b?void 0:m,children:o})})}try{s.displayName="EvoFakeTab",s.__docgenInfo={description:"",displayName:"EvoFakeTab",filePath:"/home/runner/work/evo-web/evo-web/packages/evo-react/src/fake-tabs/fake-tab.tsx",methods:[],props:{id:{defaultValue:null,declarations:[{fileName:"evo-react/src/fake-tabs/types.ts",name:"TypeLiteral"}],description:"Unique identifier matching this tab to the parent EvoFakeTabs `selected` prop.",name:"id",required:!0,tags:{},type:{name:"FakeTabId"}},href:{defaultValue:null,declarations:[{fileName:"evo-react/src/fake-tabs/types.ts",name:"TypeLiteral"}],description:"Link destination. Omit to disable the tab.",name:"href",required:!1,tags:{},type:{name:"string"}},as:{defaultValue:null,declarations:[{fileName:"evo-react/src/fake-tabs/types.ts",name:"TypeLiteral"}],description:"Custom component used in place of the native anchor, such as a framework Link.\nThe component receives `href` and all other anchor-compatible props.",name:"as",required:!1,tags:{},type:{name:"ComponentType<DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>>"}}},tags:{}}}catch{}function i({className:a,children:t,...r}){return e.jsx("ul",{...r,className:u("fake-tabs__items",a),children:t})}try{i.displayName="EvoFakeTabList",i.__docgenInfo={description:"",displayName:"EvoFakeTabList",filePath:"/home/runner/work/evo-web/evo-web/packages/evo-react/src/fake-tabs/fake-tab-list.tsx",methods:[],props:{},tags:{}}}catch{}function c({className:a,children:t,...r}){return e.jsx("div",{...r,className:u("fake-tabs__content",a),children:e.jsx("div",{className:"fake-tabs__panel",children:e.jsx("div",{className:"fake-tabs__cell",children:e.jsx("div",{children:t})})})})}try{c.displayName="EvoFakeTabPanel",c.__docgenInfo={description:"",displayName:"EvoFakeTabPanel",filePath:"/home/runner/work/evo-web/evo-web/packages/evo-react/src/fake-tabs/fake-tab-panel.tsx",methods:[],props:{},tags:{}}}catch{}function l({selected:a,size:t="regular",tabMatchesCurrentUrl:r=!0,className:n,children:o,...m}){const h=r?"page":"true";return e.jsx(v,{selected:a,ariaCurrent:h,children:e.jsx("div",{...m,className:u("fake-tabs",t==="large"&&"fake-tabs--large",n),children:o})})}try{l.displayName="EvoFakeTabs",l.__docgenInfo={description:"",displayName:"EvoFakeTabs",filePath:"/home/runner/work/evo-web/evo-web/packages/evo-react/src/fake-tabs/fake-tabs.tsx",methods:[],props:{selected:{defaultValue:null,declarations:[{fileName:"evo-react/src/fake-tabs/types.ts",name:"TypeLiteral"}],description:"The id of the currently selected tab.\nPass `null` explicitly when no tab corresponds to the current page.",name:"selected",required:!0,tags:{},type:{name:"FakeTabId"}},size:{defaultValue:{value:"regular"},declarations:[{fileName:"evo-react/src/fake-tabs/types.ts",name:"TypeLiteral"}],description:'Size of the tab strip. Defaults to `"regular"`.',name:"size",required:!1,tags:{},type:{name:"Size"}},tabMatchesCurrentUrl:{defaultValue:{value:"true"},declarations:[{fileName:"evo-react/src/fake-tabs/types.ts",name:"TypeLiteral"}],description:'Controls the `aria-current` value on the selected tab link.\nWhen `true` (default), the selected link gets `aria-current="page"`.\nWhen `false`, it gets `aria-current="true"`.',name:"tabMatchesCurrentUrl",required:!1,tags:{},type:{name:"boolean"}}},tags:{}}}catch{}const j={title:"navigation & disclosure/evo-fake-tabs",component:l,subcomponents:{EvoFakeTabList:i,EvoFakeTab:s,EvoFakeTabPanel:c},tags:["autodocs"],parameters:{docs:{description:{component:`
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
        `}}},argTypes:{selected:{control:"select",options:["overview","shipping","returns",null]},size:{control:"select",options:["regular","large"],table:{defaultValue:{summary:"regular"}}},tabMatchesCurrentUrl:{control:"boolean",table:{defaultValue:{summary:"true"}}}},args:{selected:"overview",size:"regular",tabMatchesCurrentUrl:!0},render({selected:a,...t}){return e.jsxs(l,{selected:a,...t,children:[e.jsxs(i,{children:[e.jsx(s,{id:"overview",href:"/overview",children:"Overview"}),e.jsx(s,{id:"shipping",href:"/shipping",children:"Shipping"}),e.jsx(s,{id:"returns",href:"/returns",children:"Returns"}),e.jsx(s,{id:"contact",children:"Contact (disabled)"})]}),e.jsxs(c,{children:[e.jsx("h3",{children:"Page content"}),e.jsx("p",{children:"In a server-rendered app this area contains the page content for the selected tab URL."})]})]})}},d={},p={parameters:{docs:{description:{story:`
Pass a custom \`as\` component to swap the native \`<a>\` for a framework link.
The component receives \`href\` and all anchor-compatible props:

\`\`\`tsx
import { Link } from "react-router";

function RouterTab({ href, ...props }: React.ComponentProps<"a">) {
  return href === undefined ? null : <Link to={href} {...props} />;
}

<EvoFakeTab id="overview" href="/overview" as={RouterTab}>Overview</EvoFakeTab>
\`\`\`
`}}},render(a){const t=({href:r,children:n,...o})=>e.jsx("a",{"data-router-link":"true",href:r,...o,children:n});return e.jsxs(l,{...a,children:[e.jsxs(i,{children:[e.jsx(s,{id:"overview",href:"/overview",as:t,children:"Overview"}),e.jsx(s,{id:"shipping",href:"/shipping",as:t,children:"Shipping"})]}),e.jsx(c,{children:e.jsx("p",{children:"Content rendered by the router."})})]})}},C=["Default","CustomLinkAdapter"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};export{p as CustomLinkAdapter,d as Default,C as __namedExportsOrder,j as default};
