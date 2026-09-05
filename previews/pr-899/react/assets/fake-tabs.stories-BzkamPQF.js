import{r as f,j as e}from"./iframe-Cg-ElmEC.js";import{c as u}from"./index-DqdtECl9.js";/* empty css             */import"./preload-helper-PPVm8Dsz.js";const k=f.createContext(void 0);function y(){const a=f.use(k);if(!a)throw new Error("EvoFakeTab must be used within an EvoFakeTabs component");return a}function b({selected:a,ariaCurrent:r,children:t}){const s=f.useMemo(()=>({selected:a,ariaCurrent:r}),[a,r]);return e.jsx(k,{value:s,children:t})}try{b.displayName="FakeTabsProvider",b.__docgenInfo={description:"",displayName:"FakeTabsProvider",props:{selected:{defaultValue:null,description:"",name:"selected",required:!0,type:{name:"FakeTabId"}},ariaCurrent:{defaultValue:null,description:"",name:"ariaCurrent",required:!0,type:{name:'"true" | "page"'}}}}}catch{}function n({id:a,href:r,as:t,className:s,children:o,onClick:h,...m}){const{selected:T,ariaCurrent:g}=y(),v=r===void 0,_=Object.is(T,a),F=t??"a";return e.jsx("li",{className:u("fake-tabs__item",s),children:e.jsx(F,{...m,href:r,"aria-current":!v&&_?g:void 0,"aria-disabled":v?"true":void 0,onClick:v?void 0:h,children:o})})}try{n.displayName="EvoFakeTab",n.__docgenInfo={description:"",displayName:"EvoFakeTab",props:{id:{defaultValue:null,description:"Unique identifier matching this tab to the parent EvoFakeTabs `selected` prop.",name:"id",required:!0,type:{name:"FakeTabId"}},href:{defaultValue:null,description:"Link destination. Omit to disable the tab.",name:"href",required:!1,type:{name:"string"}},as:{defaultValue:null,description:"Custom component used in place of the native anchor, such as a framework Link.\nThe component receives `href` and all other anchor-compatible props.",name:"as",required:!1,type:{name:"ComponentType<DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>>"}}}}}catch{}function i({className:a,children:r,...t}){return e.jsx("ul",{...t,className:u("fake-tabs__items",a),children:r})}try{i.displayName="EvoFakeTabList",i.__docgenInfo={description:"",displayName:"EvoFakeTabList",props:{}}}catch{}function c({className:a,children:r,...t}){return e.jsx("div",{...t,className:u("fake-tabs__content",a),children:e.jsx("div",{className:"fake-tabs__panel",children:e.jsx("div",{className:"fake-tabs__cell",children:e.jsx("div",{children:r})})})})}try{c.displayName="EvoFakeTabPanel",c.__docgenInfo={description:"",displayName:"EvoFakeTabPanel",props:{}}}catch{}function l({selected:a,size:r="regular",tabMatchesCurrentUrl:t=!0,className:s,children:o,...h}){const m=t?"page":"true";return e.jsx(b,{selected:a,ariaCurrent:m,children:e.jsx("div",{...h,className:u("fake-tabs",r==="large"&&"fake-tabs--large",s),children:o})})}try{l.displayName="EvoFakeTabs",l.__docgenInfo={description:"",displayName:"EvoFakeTabs",props:{selected:{defaultValue:null,description:"The id of the currently selected tab.\nPass `null` explicitly when no tab corresponds to the current page.",name:"selected",required:!0,type:{name:"FakeTabId"}},size:{defaultValue:{value:"regular"},description:'Size of the tab strip. Defaults to `"regular"`.',name:"size",required:!1,type:{name:"Size"}},tabMatchesCurrentUrl:{defaultValue:{value:"true"},description:'Controls the `aria-current` value on the selected tab link.\nWhen `true` (default), the selected link gets `aria-current="page"`.\nWhen `false`, it gets `aria-current="true"`.',name:"tabMatchesCurrentUrl",required:!1,type:{name:"boolean"}}}}}catch{}const C={title:"navigation & disclosure/evo-fake-tabs",component:l,subcomponents:{EvoFakeTabList:i,EvoFakeTab:n,EvoFakeTabPanel:c},tags:["autodocs"],parameters:{docs:{description:{component:`
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
        `}}},argTypes:{selected:{control:"select",options:["overview","shipping","returns",null]},size:{control:"select",options:["regular","large"],table:{defaultValue:{summary:"regular"}}},tabMatchesCurrentUrl:{control:"boolean",table:{defaultValue:{summary:"true"}}}},args:{selected:"overview",size:"regular",tabMatchesCurrentUrl:!0},render({selected:a,...r}){return e.jsxs(l,{selected:a,...r,children:[e.jsxs(i,{children:[e.jsx(n,{id:"overview",href:"/overview",children:"Overview"}),e.jsx(n,{id:"shipping",href:"/shipping",children:"Shipping"}),e.jsx(n,{id:"returns",href:"/returns",children:"Returns"}),e.jsx(n,{id:"contact",children:"Contact (disabled)"})]}),e.jsxs(c,{children:[e.jsx("h3",{children:"Page content"}),e.jsx("p",{children:"In a server-rendered app this area contains the page content for the selected tab URL."})]})]})}},d={},p={parameters:{docs:{description:{story:`
Pass a custom \`as\` component to swap the native \`<a>\` for a framework link.
The component receives \`href\` and all anchor-compatible props:

\`\`\`tsx
import { Link } from "react-router";

function RouterTab({ href, ...props }: React.ComponentProps<"a">) {
  return href === undefined ? null : <Link to={href} {...props} />;
}

<EvoFakeTab id="overview" href="/overview" as={RouterTab}>Overview</EvoFakeTab>
\`\`\`
`}}},render(a){const r=({href:t,children:s,...o})=>e.jsx("a",{"data-router-link":"true",href:t,...o,children:s});return e.jsxs(l,{...a,children:[e.jsxs(i,{children:[e.jsx(n,{id:"overview",href:"/overview",as:r,children:"Overview"}),e.jsx(n,{id:"shipping",href:"/shipping",as:r,children:"Shipping"})]}),e.jsx(c,{children:e.jsx("p",{children:"Content rendered by the router."})})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const L=["Default","CustomLinkAdapter"];export{p as CustomLinkAdapter,d as Default,L as __namedExportsOrder,C as default};
