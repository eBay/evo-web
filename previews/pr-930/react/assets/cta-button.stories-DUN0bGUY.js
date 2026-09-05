import{j as t}from"./iframe-DjAcWYNC.js";import{c as d}from"./index-C04a5A_d.js";import{E as f}from"./button-cell-DKsPcvdK.js";import{E as h}from"./arrow-right-24-DHJHQuwi.js";import"./preload-helper-PPVm8Dsz.js";import"./icon-OW-XSJJv.js";function s({as:e,children:a,className:o,fluid:c=!1,size:i,truncated:l=!1,...u}){const p=e??"a",m=d(o,"cta-btn",i==="large"&&"cta-btn--large",c&&"cta-btn--fluid",l&&"cta-btn--truncated");return t.jsx(p,{...u,className:m,children:t.jsxs(f,{type:"cta",children:[t.jsx("span",{children:a}),t.jsx(h,{})]})})}try{s.displayName="EvoCtaButton",s.__docgenInfo={description:"",displayName:"EvoCtaButton",filePath:"/home/runner/work/evo-web/evo-web/packages/evo-react/src/cta-button/cta-button.tsx",methods:[],props:{as:{defaultValue:null,declarations:[{fileName:"evo-react/src/cta-button/types.ts",name:"TypeLiteral"}],description:"Custom component used in place of the native anchor, such as a framework Link.\nIt must render an `<a>` element because the CTA button's Skin CSS rules target anchors.",name:"as",required:!1,tags:{},type:{name:"ComponentType<DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>>"}},fluid:{defaultValue:{value:"false"},declarations:[{fileName:"evo-react/src/cta-button/types.ts",name:"TypeLiteral"}],description:"Expands the CTA button to the full width of its parent.",name:"fluid",required:!1,tags:{},type:{name:"boolean"}},truncated:{defaultValue:{value:"false"},declarations:[{fileName:"evo-react/src/cta-button/types.ts",name:"TypeLiteral"}],description:"Truncates overflowing text to a single line with an ellipsis.",name:"truncated",required:!1,tags:{},type:{name:"boolean"}},size:{defaultValue:null,declarations:[{fileName:"evo-react/src/cta-button/types.ts",name:"TypeLiteral"}],description:"CTA button size. Omit for the default size.",name:"size",required:!1,tags:{},type:{name:'"large"'}}},tags:{}}}catch{}const k={title:"buttons/evo-cta-button",component:s,tags:["autodocs"],parameters:{docs:{description:{component:`
A call-to-action link with prominent button styling and a directional icon.

## Usage

\`\`\`tsx
import { EvoCtaButton } from "@evo-web/react/cta-button";
\`\`\`
        `}}},argTypes:{as:{control:!1},fluid:{control:"boolean"},truncated:{control:"boolean"},size:{control:"select",options:["large"]},href:{control:"text",description:"The destination URL."},children:{control:"text",description:"CTA button content."}},args:{children:"Take Action Now!",href:"https://www.ebay.com"}},n={};function b({to:e,children:a,...o}){return t.jsx("a",{"data-custom-link":"true",...o,href:e,children:a})}const r={render:e=>t.jsx(s,{...e,as:({href:a,...o})=>t.jsx(b,{...o,to:a})}),parameters:{docs:{description:{story:`
Pass a custom component via the \`as\` prop to replace the native \`<a>\`.

\`\`\`tsx
import { Link } from "react-router";

<EvoCtaButton
  href="/home"
  as={({ href, ...rest }) => <Link {...rest} to={href} />}
>
  Take Action Now!
</EvoCtaButton>
\`\`\`
        `}}}},E=["Default","WithCustomLinkComponent"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <EvoCtaButton {...args} as={({
    href,
    ...rest
  }) => <Link {...rest} to={href} />} />,
  parameters: {
    docs: {
      description: {
        story: \`
Pass a custom component via the \\\`as\\\` prop to replace the native \\\`<a>\\\`.

\\\`\\\`\\\`tsx
import { Link } from "react-router";

<EvoCtaButton
  href="/home"
  as={({ href, ...rest }) => <Link {...rest} to={href} />}
>
  Take Action Now!
</EvoCtaButton>
\\\`\\\`\\\`
        \`
      }
    }
  }
}`,...r.parameters?.docs?.source}}};export{n as Default,r as WithCustomLinkComponent,E as __namedExportsOrder,k as default};
