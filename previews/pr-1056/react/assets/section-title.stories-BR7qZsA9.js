import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{t as r}from"./classnames-D09xBJOL.js";function i(){return(i=t((()=>{})))()}function a({className:e,children:t,...n}){return(0,s.jsx)(`div`,{...n,className:(0,o.default)(`section-title`,e),children:t})}var o,s;function c(){return(c=t((()=>{o=e(r(),1),i(),s=n();try{a.displayName=`EvoSectionTitle`,a.__docgenInfo={description:`Section titles identify a group of elements on a page.

Compose \`EvoSectionTitleContent\` around the heading and optional
subtitle, then place an action or overflow part after it. The heading
level must match the page hierarchy. Give icon-only actions accessible names.

## Usage

\`\`\`tsx
import {
  EvoSectionTitle,
  EvoSectionTitleContent,
  EvoSectionTitleCta,
  EvoSectionTitleHeading,
} from "@evo-web/react/section-title";

<EvoSectionTitle>
  <EvoSectionTitleContent>
    <EvoSectionTitleHeading>Recently viewed</EvoSectionTitleHeading>
  </EvoSectionTitleContent>
  <EvoSectionTitleCta href="/my/recently-viewed">
    See all recently viewed items
  </EvoSectionTitleCta>
</EvoSectionTitle>
\`\`\``,displayName:`EvoSectionTitle`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/section-title/section-title.tsx`,methods:[],props:{},tags:{summary:`Heading and optional actions for a page section.`}}}catch{}})))()}function l({className:e,children:t,...n}){return(0,d.jsx)(`div`,{...n,className:(0,u.default)(`section-title__title-container`,e),children:t})}var u,d;function f(){return(f=t((()=>{u=e(r(),1),d=n();try{l.displayName=`EvoSectionTitleContent`,l.__docgenInfo={description:`Groups the section heading and optional subtitle in the Skin title wrapper.`,displayName:`EvoSectionTitleContent`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/section-title/section-title-content.tsx`,methods:[],props:{},tags:{summary:`Section heading wrapper.`}}}catch{}})))()}function p({as:e,className:t,children:n,...r}){return(0,h.jsx)(e??`a`,{...r,className:(0,m.default)(`section-title__cta`,t),children:n})}var m,h;function g(){return(g=t((()=>{m=e(r(),1),h=n();try{p.displayName=`EvoSectionTitleCta`,p.__docgenInfo={description:"Links to related section content. Use visible, descriptive link text. Pass\nan anchor-compatible router component through `as` for client-side navigation.",displayName:`EvoSectionTitleCta`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/section-title/section-title-cta.tsx`,methods:[],props:{href:{defaultValue:null,declarations:[{fileName:`evo-react/src/section-title/types.ts`,name:`TypeLiteral`}],description:`Destination of the section action. Use descriptive link text as children.`,name:`href`,required:!0,tags:{},type:{name:`string`}},as:{defaultValue:null,declarations:[{fileName:`evo-react/src/section-title/types.ts`,name:`TypeLiteral`}],description:`Custom anchor-compatible component, such as a client-side router link.`,name:`as`,required:!1,tags:{},type:{name:`ComponentType<DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>>`}}},tags:{summary:`Section action link.`}}}catch{}})))()}function _({as:e=`h2`,className:t,children:n,...r}){return(0,y.jsx)(e,{...r,className:(0,v.default)(`section-title__title`,t),children:n})}var v,y;function b(){return(b=t((()=>{v=e(r(),1),y=n();try{_.displayName=`EvoSectionTitleHeading`,_.__docgenInfo={description:"Names the section with a semantic heading. Set `as` to the heading level that\nfits the page hierarchy; visual size comes from Skin.",displayName:`EvoSectionTitleHeading`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/section-title/section-title-heading.tsx`,methods:[],props:{as:{defaultValue:{value:`h2`},declarations:[{fileName:`evo-react/src/section-title/types.ts`,name:`TypeLiteral`}],description:'Sets the heading level to match the surrounding page hierarchy. Defaults to `"h2"`.',name:`as`,required:!1,tags:{},type:{name:`enum`,raw:`SectionTitleHeading`,value:[{value:`"h1"`},{value:`"h2"`},{value:`"h3"`},{value:`"h4"`},{value:`"h5"`},{value:`"h6"`}]}}},tags:{summary:`Section heading.`}}}catch{}})))()}function x({className:e,children:t,...n}){return(0,C.jsx)(`div`,{...n,className:(0,S.default)(`section-title__overflow`,e),children:t})}var S,C;function w(){return(w=t((()=>{S=e(r(),1),C=n();try{x.displayName=`EvoSectionTitleOverflow`,x.__docgenInfo={description:`Holds an optional menu action beside the section heading. The menu trigger
inside it needs an accessible name.`,displayName:`EvoSectionTitleOverflow`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/section-title/section-title-overflow.tsx`,methods:[],props:{},tags:{summary:`Section overflow slot.`}}}catch{}})))()}function T({className:e,children:t,...n}){return(0,D.jsx)(`span`,{...n,className:(0,E.default)(`section-title__subtitle`,e),children:t})}var E,D;function O(){return(O=t((()=>{E=e(r(),1),D=n();try{T.displayName=`EvoSectionTitleSubtitle`,T.__docgenInfo={description:"Adds supporting text after `EvoSectionTitleHeading` within the title wrapper.",displayName:`EvoSectionTitleSubtitle`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/section-title/section-title-subtitle.tsx`,methods:[],props:{},tags:{summary:`Section subtitle.`}}}catch{}})))()}function k({to:e,children:t,...n}){return(0,A.jsx)(`a`,{"data-custom-link":`true`,...n,href:e,children:t})}var A,j,M,N,P,F,I;function L(){return(L=t((()=>{c(),f(),g(),b(),w(),O(),A=n(),j={title:`Navigation & Disclosure/EvoSectionTitle`,component:a,subcomponents:{EvoSectionTitleContent:l,EvoSectionTitleHeading:_,EvoSectionTitleSubtitle:T,EvoSectionTitleCta:p,EvoSectionTitleOverflow:x}},M={render:e=>(0,A.jsx)(a,{...e,children:(0,A.jsx)(l,{children:(0,A.jsx)(_,{children:`Recently viewed`})})})},N={render:e=>(0,A.jsx)(a,{...e,children:(0,A.jsxs)(l,{children:[(0,A.jsx)(_,{as:`h3`,children:`Saved searches`}),(0,A.jsx)(T,{children:`New listings matching your searches`})]})})},P={render:e=>(0,A.jsxs)(a,{...e,children:[(0,A.jsx)(l,{children:(0,A.jsx)(_,{children:`Recently viewed`})}),(0,A.jsx)(p,{href:`/my/recently-viewed`,children:`See all recently viewed items`})]})},F={render:e=>(0,A.jsxs)(a,{...e,children:[(0,A.jsx)(l,{children:(0,A.jsx)(_,{children:`Recently viewed`})}),(0,A.jsx)(p,{href:`/my/recently-viewed`,as:({href:e,...t})=>(0,A.jsx)(k,{...t,to:e}),children:`See all recently viewed items`})]}),parameters:{docs:{description:{story:`
Pass a custom component via the \`as\` prop to replace the native \`<a>\`. React Router's \`Link\` uses \`to\` instead of \`href\`.

\`\`\`tsx
import { Link } from "react-router";

<EvoSectionTitle>
  <EvoSectionTitleContent>
    <EvoSectionTitleHeading>Recently viewed</EvoSectionTitleHeading>
  </EvoSectionTitleContent>
  <EvoSectionTitleCta
    href="/my/recently-viewed"
    as={({ href, ...rest }) => <Link {...rest} to={href} />}
  >
    See all recently viewed items
  </EvoSectionTitleCta>
</EvoSectionTitle>
\`\`\`
        `}}}},I=[`Default`,`WithSubtitle`,`WithCta`,`CustomLink`],M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: args => <EvoSectionTitle {...args}>
      <EvoSectionTitleContent>
        <EvoSectionTitleHeading>Recently viewed</EvoSectionTitleHeading>
      </EvoSectionTitleContent>
    </EvoSectionTitle>
}`,...M.parameters?.docs?.source},description:{story:`A section heading names the item group that follows it.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: args => <EvoSectionTitle {...args}>
      <EvoSectionTitleContent>
        <EvoSectionTitleHeading as="h3">Saved searches</EvoSectionTitleHeading>
        <EvoSectionTitleSubtitle>
          New listings matching your searches
        </EvoSectionTitleSubtitle>
      </EvoSectionTitleContent>
    </EvoSectionTitle>
}`,...N.parameters?.docs?.source},description:{story:`Supporting text adds context without changing the heading's accessible name.`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: args => <EvoSectionTitle {...args}>
      <EvoSectionTitleContent>
        <EvoSectionTitleHeading>Recently viewed</EvoSectionTitleHeading>
      </EvoSectionTitleContent>
      <EvoSectionTitleCta href="/my/recently-viewed">
        See all recently viewed items
      </EvoSectionTitleCta>
    </EvoSectionTitle>
}`,...P.parameters?.docs?.source},description:{story:`A descriptive action link follows the heading in reading and tab order.`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: args => <EvoSectionTitle {...args}>
      <EvoSectionTitleContent>
        <EvoSectionTitleHeading>Recently viewed</EvoSectionTitleHeading>
      </EvoSectionTitleContent>
      <EvoSectionTitleCta href="/my/recently-viewed" as={({
      href,
      ...rest
    }) => <Link {...rest} to={href} />}>
        See all recently viewed items
      </EvoSectionTitleCta>
    </EvoSectionTitle>,
  parameters: {
    docs: {
      description: {
        story: \`
Pass a custom component via the \\\`as\\\` prop to replace the native \\\`<a>\\\`. React Router's \\\`Link\\\` uses \\\`to\\\` instead of \\\`href\\\`.

\\\`\\\`\\\`tsx
import { Link } from "react-router";

<EvoSectionTitle>
  <EvoSectionTitleContent>
    <EvoSectionTitleHeading>Recently viewed</EvoSectionTitleHeading>
  </EvoSectionTitleContent>
  <EvoSectionTitleCta
    href="/my/recently-viewed"
    as={({ href, ...rest }) => <Link {...rest} to={href} />}
  >
    See all recently viewed items
  </EvoSectionTitleCta>
</EvoSectionTitle>
\\\`\\\`\\\`
        \`
      }
    }
  }
}`,...F.parameters?.docs?.source},description:{story:"The `as` prop connects the section action to a client-side link component.",...F.parameters?.docs?.description}}}})))()}L();export{F as CustomLink,M as Default,P as WithCta,N as WithSubtitle,I as __namedExportsOrder,j as default};