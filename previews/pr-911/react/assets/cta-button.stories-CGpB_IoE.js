import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{t as r}from"./classnames-D09xBJOL.js";import{n as i,t as a}from"./button-cell-B8q8yAY9.js";import{n as o,t as s}from"./arrow-right-24-CUtKL6E3.js";function c(){return(c=t((()=>{})))()}function l({as:e,children:t,className:n,fluid:r=!1,size:i,truncated:o=!1,...c}){let l=e??`a`,f=(0,u.default)(n,`cta-btn`,i===`large`&&`cta-btn--large`,r&&`cta-btn--fluid`,o&&`cta-btn--truncated`);return(0,d.jsx)(l,{...c,className:f,children:(0,d.jsxs)(a,{type:`cta`,children:[(0,d.jsx)(`span`,{children:t}),(0,d.jsx)(s,{})]})})}var u,d;function f(){return(f=t((()=>{u=e(r(),1),i(),o(),c(),d=n();try{l.displayName=`EvoCtaButton`,l.__docgenInfo={description:``,displayName:`EvoCtaButton`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/cta-button/cta-button.tsx`,methods:[],props:{as:{defaultValue:null,declarations:[{fileName:`evo-react/src/cta-button/types.ts`,name:`TypeLiteral`}],description:"Custom component used in place of the native anchor, such as a framework Link.\nIt must render an `<a>` element because the CTA button's Skin CSS rules target anchors.",name:`as`,required:!1,tags:{},type:{name:`ComponentType<DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>> | undefined`}},fluid:{defaultValue:{value:`false`},declarations:[{fileName:`evo-react/src/cta-button/types.ts`,name:`TypeLiteral`}],description:`Expands the CTA button to the full width of its parent.`,name:`fluid`,required:!1,tags:{},type:{name:`boolean | undefined`}},truncated:{defaultValue:{value:`false`},declarations:[{fileName:`evo-react/src/cta-button/types.ts`,name:`TypeLiteral`}],description:`Truncates overflowing text to a single line with an ellipsis.`,name:`truncated`,required:!1,tags:{},type:{name:`boolean | undefined`}},size:{defaultValue:null,declarations:[{fileName:`evo-react/src/cta-button/types.ts`,name:`TypeLiteral`}],description:`CTA button size. Omit for the default size.`,name:`size`,required:!1,tags:{},type:{name:`"large" | undefined`}}},tags:{}}}catch{}})))()}function p({to:e,children:t,...n}){return(0,m.jsx)(`a`,{"data-custom-link":`true`,...n,href:e,children:t})}var m,h,g,_,v;function y(){return(y=t((()=>{f(),m=n(),h={title:`buttons/evo-cta-button`,component:l,tags:[`autodocs`],parameters:{docs:{description:{component:`
A call-to-action link with prominent button styling and a directional icon.

## Usage

\`\`\`tsx
import { EvoCtaButton } from "@evo-web/react/cta-button";
\`\`\`
        `}}},argTypes:{as:{control:!1},fluid:{control:`boolean`},truncated:{control:`boolean`},size:{control:`select`,options:[`large`]},href:{control:`text`,description:`The destination URL.`},children:{control:`text`,description:`CTA button content.`}},args:{children:`Take Action Now!`,href:`https://www.ebay.com`}},g={},_={render:e=>(0,m.jsx)(l,{...e,as:({href:e,...t})=>(0,m.jsx)(p,{...t,to:e})}),parameters:{docs:{description:{story:`
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
        `}}}},v=[`Default`,`WithCustomLinkComponent`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}}})))()}y();export{g as Default,_ as WithCustomLinkComponent,v as __namedExportsOrder,h as default};