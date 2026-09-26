import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{t as r}from"./classnames-D09xBJOL.js";import{n as i,t as a}from"./infotip-jr0pGm1C.js";import{n as o,t as s}from"./infotip-heading-DHYt_Rj_.js";function c(){return(c=t((()=>{})))()}function l({className:e,children:t,...n}){return(0,d.jsx)(`div`,{...n,className:(0,u.default)(`section-title`,e),children:t})}var u,d;function f(){return(f=t((()=>{u=e(r(),1),c(),d=n();try{l.displayName=`EvoSectionTitle`,l.__docgenInfo={description:`Section titles identify a group of elements on a page.

Compose \`EvoSectionTitleContent\` around the heading and optional
subtitle, then place an action, info, or overflow part after it. The heading
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
\`\`\``,displayName:`EvoSectionTitle`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/section-title/section-title.tsx`,methods:[],props:{},tags:{summary:`Heading and optional actions for a page section.`}}}catch{}})))()}function p({className:e,children:t,...n}){return(0,h.jsx)(`div`,{...n,className:(0,m.default)(`section-title__title-container`,e),children:t})}var m,h;function g(){return(g=t((()=>{m=e(r(),1),h=n();try{p.displayName=`EvoSectionTitleContent`,p.__docgenInfo={description:`Groups the section heading and optional subtitle in the Skin title wrapper.`,displayName:`EvoSectionTitleContent`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/section-title/section-title-content.tsx`,methods:[],props:{},tags:{summary:`Section heading wrapper.`}}}catch{}})))()}function _({as:e,className:t,children:n,...r}){return(0,y.jsx)(e??`a`,{...r,className:(0,v.default)(`section-title__cta`,t),children:n})}var v,y;function b(){return(b=t((()=>{v=e(r(),1),y=n();try{_.displayName=`EvoSectionTitleCta`,_.__docgenInfo={description:"Links to related section content. Use visible, descriptive link text. Pass\nan anchor-compatible router component through `as` for client-side navigation.",displayName:`EvoSectionTitleCta`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/section-title/section-title-cta.tsx`,methods:[],props:{href:{defaultValue:null,declarations:[{fileName:`evo-react/src/section-title/types.ts`,name:`TypeLiteral`}],description:`Destination of the section action. Use descriptive link text as children.`,name:`href`,required:!0,tags:{},type:{name:`string`}},as:{defaultValue:null,declarations:[{fileName:`evo-react/src/section-title/types.ts`,name:`TypeLiteral`}],description:`Custom anchor-compatible component, such as a client-side router link.`,name:`as`,required:!1,tags:{},type:{name:`ComponentType<DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>>`}}},tags:{summary:`Section action link.`}}}catch{}})))()}function x({as:e=`h2`,className:t,children:n,...r}){return(0,C.jsx)(e,{...r,className:(0,S.default)(`section-title__title`,t),children:n})}var S,C;function w(){return(w=t((()=>{S=e(r(),1),C=n();try{x.displayName=`EvoSectionTitleHeading`,x.__docgenInfo={description:"Names the section with a semantic heading. Set `as` to the heading level that\nfits the page hierarchy; visual size comes from Skin.",displayName:`EvoSectionTitleHeading`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/section-title/section-title-heading.tsx`,methods:[],props:{as:{defaultValue:{value:`h2`},declarations:[{fileName:`evo-react/src/section-title/types.ts`,name:`TypeLiteral`}],description:'Sets the heading level to match the surrounding page hierarchy. Defaults to `"h2"`.',name:`as`,required:!1,tags:{},type:{name:`enum`,raw:`SectionTitleHeading`,value:[{value:`"h1"`},{value:`"h2"`},{value:`"h3"`},{value:`"h4"`},{value:`"h5"`},{value:`"h6"`}]}}},tags:{summary:`Section heading.`}}}catch{}})))()}function T({className:e,children:t,...n}){return(0,D.jsx)(`div`,{...n,className:(0,E.default)(`section-title__info`,e),children:t})}var E,D;function O(){return(O=t((()=>{E=e(r(),1),D=n();try{T.displayName=`EvoSectionTitleInfo`,T.__docgenInfo={description:`Holds supplementary help beside the section heading. An icon-only control
inside it needs an accessible name.`,displayName:`EvoSectionTitleInfo`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/section-title/section-title-info.tsx`,methods:[],props:{},tags:{summary:`Section information slot.`}}}catch{}})))()}function k({className:e,children:t,...n}){return(0,j.jsx)(`div`,{...n,className:(0,A.default)(`section-title__overflow`,e),children:t})}var A,j;function M(){return(M=t((()=>{A=e(r(),1),j=n();try{k.displayName=`EvoSectionTitleOverflow`,k.__docgenInfo={description:`Holds an optional menu action beside the section heading. The menu trigger
inside it needs an accessible name.`,displayName:`EvoSectionTitleOverflow`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/section-title/section-title-overflow.tsx`,methods:[],props:{},tags:{summary:`Section overflow slot.`}}}catch{}})))()}function N({className:e,children:t,...n}){return(0,F.jsx)(`span`,{...n,className:(0,P.default)(`section-title__subtitle`,e),children:t})}var P,F;function I(){return(I=t((()=>{P=e(r(),1),F=n();try{N.displayName=`EvoSectionTitleSubtitle`,N.__docgenInfo={description:"Adds supporting text after `EvoSectionTitleHeading` within the title wrapper.",displayName:`EvoSectionTitleSubtitle`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/section-title/section-title-subtitle.tsx`,methods:[],props:{},tags:{summary:`Section subtitle.`}}}catch{}})))()}function L({to:e,children:t,...n}){return(0,R.jsx)(`a`,{"data-custom-link":`true`,...n,href:e,children:t})}var R,z,B,V,H,U,W,G;function K(){return(K=t((()=>{i(),o(),f(),g(),b(),w(),O(),M(),I(),R=n(),z={title:`Navigation & Disclosure/EvoSectionTitle`,component:l,subcomponents:{EvoSectionTitleContent:p,EvoSectionTitleHeading:x,EvoSectionTitleSubtitle:N,EvoSectionTitleCta:_,EvoSectionTitleInfo:T,EvoSectionTitleOverflow:k}},B={render:e=>(0,R.jsx)(l,{...e,children:(0,R.jsx)(p,{children:(0,R.jsx)(x,{children:`Recently viewed`})})})},V={render:e=>(0,R.jsx)(l,{...e,children:(0,R.jsxs)(p,{children:[(0,R.jsx)(x,{as:`h3`,children:`Saved searches`}),(0,R.jsx)(N,{children:`New listings matching your searches`})]})})},H={render:e=>(0,R.jsxs)(l,{...e,children:[(0,R.jsx)(p,{children:(0,R.jsx)(x,{children:`Recently viewed`})}),(0,R.jsx)(_,{href:`/my/recently-viewed`,children:`See all recently viewed items`})]})},U={render:e=>(0,R.jsxs)(l,{...e,children:[(0,R.jsx)(p,{children:(0,R.jsx)(x,{children:`Recently viewed`})}),(0,R.jsx)(_,{href:`/my/recently-viewed`,as:({href:e,...t})=>(0,R.jsx)(L,{...t,to:e}),children:`See all recently viewed items`})]}),parameters:{docs:{description:{story:`
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
        `}}}},W={render:e=>(0,R.jsxs)(l,{...e,children:[(0,R.jsx)(p,{children:(0,R.jsx)(x,{children:`Seller feedback`})}),(0,R.jsx)(T,{children:(0,R.jsxs)(a,{a11yIconText:`About seller feedback`,a11yCloseText:`Dismiss seller feedback help`,children:[(0,R.jsx)(s,{children:`About seller feedback`}),(0,R.jsx)(`p`,{children:`Feedback comes from buyers who purchased from this seller.`})]})})]})},G=[`Default`,`WithSubtitle`,`WithCta`,`CustomLink`,`WithInfo`],B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: args => <EvoSectionTitle {...args}>
      <EvoSectionTitleContent>
        <EvoSectionTitleHeading>Recently viewed</EvoSectionTitleHeading>
      </EvoSectionTitleContent>
    </EvoSectionTitle>
}`,...B.parameters?.docs?.source},description:{story:`A section heading names the item group that follows it.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: args => <EvoSectionTitle {...args}>
      <EvoSectionTitleContent>
        <EvoSectionTitleHeading as="h3">Saved searches</EvoSectionTitleHeading>
        <EvoSectionTitleSubtitle>
          New listings matching your searches
        </EvoSectionTitleSubtitle>
      </EvoSectionTitleContent>
    </EvoSectionTitle>
}`,...V.parameters?.docs?.source},description:{story:`Supporting text adds context without changing the heading's accessible name.`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: args => <EvoSectionTitle {...args}>
      <EvoSectionTitleContent>
        <EvoSectionTitleHeading>Recently viewed</EvoSectionTitleHeading>
      </EvoSectionTitleContent>
      <EvoSectionTitleCta href="/my/recently-viewed">
        See all recently viewed items
      </EvoSectionTitleCta>
    </EvoSectionTitle>
}`,...H.parameters?.docs?.source},description:{story:`A descriptive action link follows the heading in reading and tab order.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source},description:{story:"The `as` prop connects the section action to a client-side link component.",...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: args => <EvoSectionTitle {...args}>
      <EvoSectionTitleContent>
        <EvoSectionTitleHeading>Seller feedback</EvoSectionTitleHeading>
      </EvoSectionTitleContent>
      <EvoSectionTitleInfo>
        <EvoInfotip a11yIconText="About seller feedback" a11yCloseText="Dismiss seller feedback help">
          <EvoInfotipHeading>About seller feedback</EvoInfotipHeading>
          <p>Feedback comes from buyers who purchased from this seller.</p>
        </EvoInfotip>
      </EvoSectionTitleInfo>
    </EvoSectionTitle>
}`,...W.parameters?.docs?.source},description:{story:`An infotip gives extra context without putting a control inside the heading.`,...W.parameters?.docs?.description}}}})))()}K();export{U as CustomLink,B as Default,H as WithCta,W as WithInfo,V as WithSubtitle,G as __namedExportsOrder,z as default};