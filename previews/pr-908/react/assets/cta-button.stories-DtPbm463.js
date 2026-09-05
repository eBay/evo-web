import{j as t}from"./iframe-BrHXHCNP.js";import{c as d}from"./index-D-knZIDR.js";import{E as f}from"./button-cell-BQc1h-AL.js";import{E as h}from"./arrow-right-24-CXyn6Xm9.js";import"./preload-helper-PPVm8Dsz.js";import"./icon-Bcvhqsfb.js";function s({as:e,children:o,className:n,fluid:i=!1,size:c,truncated:l=!1,...u}){const p=e??"a",m=d(n,"cta-btn",c==="large"&&"cta-btn--large",i&&"cta-btn--fluid",l&&"cta-btn--truncated");return t.jsx(p,{...u,className:m,children:t.jsxs(f,{type:"cta",children:[t.jsx("span",{children:o}),t.jsx(h,{})]})})}try{s.displayName="EvoCtaButton",s.__docgenInfo={description:"",displayName:"EvoCtaButton",props:{as:{defaultValue:null,description:"Custom component used in place of the native anchor, such as a framework Link.\nIt must render an `<a>` element because the CTA button's Skin CSS rules target anchors.",name:"as",required:!1,type:{name:"ComponentType<DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>>"}},fluid:{defaultValue:{value:"false"},description:"Expands the CTA button to the full width of its parent.",name:"fluid",required:!1,type:{name:"boolean"}},truncated:{defaultValue:{value:"false"},description:"Truncates overflowing text to a single line with an ellipsis.",name:"truncated",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"CTA button size. Omit for the default size.",name:"size",required:!1,type:{name:'"large"'}}}}}catch{}const y={title:"buttons/evo-cta-button",component:s,tags:["autodocs"],parameters:{docs:{description:{component:`
A call-to-action link with prominent button styling and a directional icon.

## Usage

\`\`\`tsx
import { EvoCtaButton } from "@evo-web/react/cta-button";
\`\`\`
        `}}},argTypes:{as:{control:!1},fluid:{control:"boolean"},truncated:{control:"boolean"},size:{control:"select",options:["large"]},href:{control:"text",description:"The destination URL."},children:{control:"text",description:"CTA button content."}},args:{children:"Take Action Now!",href:"https://www.ebay.com"}},a={};function C({to:e,children:o,...n}){return t.jsx("a",{"data-custom-link":"true",...n,href:e,children:o})}const r={render:e=>t.jsx(s,{...e,as:({href:o,...n})=>t.jsx(C,{...n,to:o})}),parameters:{docs:{description:{story:`
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
        `}}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const T=["Default","WithCustomLinkComponent"];export{a as Default,r as WithCustomLinkComponent,T as __namedExportsOrder,y as default};
