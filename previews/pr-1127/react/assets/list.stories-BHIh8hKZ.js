import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{t as r}from"./classnames-D09xBJOL.js";import{a as i,i as a,n as o,o as s,r as c,t as l}from"./folder-16-DwFYjvzg.js";function u(){return(u=t((()=>{})))()}function d({a11yText:e,a11yLabelId:t,className:n,children:r,...i}){return(0,p.jsx)(`div`,{...i,className:(0,f.default)(`list`,n),children:(0,p.jsx)(`ul`,{"aria-label":e,"aria-labelledby":t,children:r})})}var f,p;function m(){return(m=t((()=>{f=e(r(),1),u(),p=n();try{d.displayName=`EvoList`,d.__docgenInfo={description:`List rows combine a set of content inside a horizontal layout.

## Usage

\`\`\`tsx
import {
  EvoList,
  EvoListItem,
  EvoListItemContent,
} from "@evo-web/react/list";

<EvoList>
  <EvoListItem>
    <EvoListItemContent>Saved searches</EvoListItemContent>
  </EvoListItem>
</EvoList>
\`\`\``,displayName:`EvoList`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/list/list.tsx`,methods:[],props:{a11yText:{defaultValue:null,declarations:[{fileName:`evo-react/src/list/types.ts`,name:`TypeLiteral`}],description:"Accessible name for the list. Use this or `a11yLabelId`.",name:`a11yText`,required:!1,tags:{},type:{name:`string`}},a11yLabelId:{defaultValue:null,declarations:[{fileName:`evo-react/src/list/types.ts`,name:`TypeLiteral`}],description:"ID of visible text naming the list. Use this or `a11yText`.",name:`a11yLabelId`,required:!1,tags:{},type:{name:`string`}}},tags:{summary:`Styled list of static or interactive items.`}}}catch{}})))()}function h({children:e,...t}){return(0,g.jsx)(`li`,{children:(0,g.jsx)(`div`,{...t,children:e})})}var g;function _(){return(_=t((()=>{g=n();try{h.displayName=`EvoListItem`,h.__docgenInfo={description:"A static item in `EvoList`. Use `EvoListItemButton` for an action or\n`EvoListItemLink` for navigation. Add named leading, content, and trailing\nchildren in the desired order.",displayName:`EvoListItem`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/list/list-item.tsx`,methods:[],props:{},tags:{summary:`Static list item.`}}}catch{}})))()}function v({children:e,...t}){return(0,y.jsx)(`li`,{children:(0,y.jsx)(`button`,{...t,children:e})})}var y;function b(){return(b=t((()=>{y=n();try{v.displayName=`EvoListItemButton`,v.__docgenInfo={description:"An `EvoList` item that runs an action with a native `<button>`.",displayName:`EvoListItemButton`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/list/list-item-button.tsx`,methods:[],props:{},tags:{summary:`Button list item.`}}}catch{}})))()}function x({as:e,children:t,...n}){return(0,S.jsx)(`li`,{children:(0,S.jsx)(e??`a`,{...n,children:t})})}var S;function C(){return(C=t((()=>{S=n();try{x.displayName=`EvoListItemLink`,x.__docgenInfo={description:"An `EvoList` item that navigates with an `<a>`. Use `as` with an\nanchor-compatible client-side router component.",displayName:`EvoListItemLink`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/list/list-item-link.tsx`,methods:[],props:{as:{defaultValue:null,declarations:[{fileName:`evo-react/src/list/types.ts`,name:`TypeLiteral`}],description:"Custom component used in place of the native anchor, such as a framework `Link`.\nIt must render an `<a>` element because the list's Skin CSS rules target anchors.",name:`as`,required:!1,tags:{},type:{name:`ComponentType<DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>>`}}},tags:{summary:`Link list item.`}}}catch{}})))()}function w({className:e,children:t,...n}){return(0,E.jsx)(`div`,{...n,className:(0,T.default)(`list__body`,e),children:t})}var T,E;function D(){return(D=t((()=>{T=e(r(),1),E=n();try{w.displayName=`EvoListItemContent`,w.__docgenInfo={description:"Contains the main text or controls of an `EvoListItem`.",displayName:`EvoListItemContent`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/list/list-item-content.tsx`,methods:[],props:{},tags:{summary:`List item content.`}}}catch{}})))()}function O({className:e,children:t,...n}){return(0,A.jsx)(`div`,{...n,className:(0,k.default)(`list__leading`,e),children:t})}var k,A;function j(){return(j=t((()=>{k=e(r(),1),A=n();try{O.displayName=`EvoListItemLeading`,O.__docgenInfo={description:"Adds content before an `EvoListItemContent`.",displayName:`EvoListItemLeading`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/list/list-item-leading.tsx`,methods:[],props:{},tags:{summary:`Leading list item region.`}}}catch{}})))()}function M({className:e,children:t,...n}){return(0,P.jsx)(`div`,{...n,className:(0,N.default)(`list__trailing`,e),children:t})}var N,P;function F(){return(F=t((()=>{N=e(r(),1),P=n();try{M.displayName=`EvoListItemTrailing`,M.__docgenInfo={description:"Adds content after an `EvoListItemContent`.",displayName:`EvoListItemTrailing`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/list/list-item-trailing.tsx`,methods:[],props:{},tags:{summary:`Trailing list item region.`}}}catch{}})))()}function I(e){return(0,L.jsx)(`hr`,{...e})}var L;function R(){return(R=t((()=>{L=n();try{I.displayName=`EvoListSeparator`,I.__docgenInfo={description:"Separates adjacent `EvoList` items with a native `<hr>`.",displayName:`EvoListSeparator`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/list/list-separator.tsx`,methods:[],props:{},tags:{summary:`List separator.`}}}catch{}})))()}function z({to:e,children:t,...n}){return(0,B.jsx)(`a`,{"data-custom-link":`true`,...n,href:e,children:t})}var B,V,H,U,W,G,K,q;function J(){return(J=t((()=>{s(),a(),o(),m(),_(),b(),C(),D(),j(),F(),R(),B=n(),{action:V}=__STORYBOOK_MODULE_ACTIONS__,H={title:`Building Blocks/EvoList`,component:d,subcomponents:{EvoListItem:h,EvoListItemButton:v,EvoListItemLink:x,EvoListItemContent:w,EvoListItemLeading:O,EvoListItemTrailing:M,EvoListSeparator:I}},U={render:e=>(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(`h2`,{id:`listing-files`,children:`Listing files`}),(0,B.jsxs)(d,{...e,a11yLabelId:`listing-files`,children:[(0,B.jsxs)(h,{children:[(0,B.jsx)(O,{children:(0,B.jsx)(l,{})}),(0,B.jsx)(w,{children:`Product photos`})]}),(0,B.jsxs)(h,{children:[(0,B.jsx)(O,{children:(0,B.jsx)(c,{})}),(0,B.jsx)(w,{children:`Size guide.pdf`})]})]})]})},W={render:e=>(0,B.jsxs)(d,{...e,children:[(0,B.jsx)(v,{type:`button`,onClick:V(`show shipping details`),children:(0,B.jsx)(w,{children:`Show shipping details`})}),(0,B.jsxs)(x,{href:`/help/returns`,children:[(0,B.jsx)(w,{children:`Read the returns guide`}),(0,B.jsx)(M,{children:(0,B.jsx)(i,{})})]})]})},G={render:e=>(0,B.jsx)(d,{...e,children:(0,B.jsxs)(x,{href:`/help/returns`,as:({href:e,...t})=>(0,B.jsx)(z,{...t,to:e}),children:[(0,B.jsx)(w,{children:`Read the returns guide`}),(0,B.jsx)(M,{children:(0,B.jsx)(i,{})})]})}),parameters:{docs:{description:{story:`
Pass a custom component via the \`as\` prop of \`EvoListItemLink\` to replace the native \`<a>\`.

\`\`\`tsx
import { Link } from "react-router";

<EvoListItemLink
  href="/help/returns"
  as={({ href, ...rest }) => <Link {...rest} to={href} />}
>
  <EvoListItemContent>Read the returns guide</EvoListItemContent>
</EvoListItemLink>
\`\`\`
        `}}}},K={render:e=>(0,B.jsxs)(d,{...e,children:[(0,B.jsx)(h,{children:(0,B.jsx)(w,{children:`Saved searches`})}),(0,B.jsx)(I,{}),(0,B.jsx)(h,{children:(0,B.jsx)(w,{children:`Recently viewed`})})]})},q=[`Default`,`Interactive`,`CustomLink`,`WithSeparator`],U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: args => <>
      <h2 id="listing-files">Listing files</h2>
      <EvoList {...args} a11yLabelId="listing-files">
        <EvoListItem>
          <EvoListItemLeading>
            <EvoIconFolder16 />
          </EvoListItemLeading>
          <EvoListItemContent>Product photos</EvoListItemContent>
        </EvoListItem>
        <EvoListItem>
          <EvoListItemLeading>
            <EvoIconFile16 />
          </EvoListItemLeading>
          <EvoListItemContent>Size guide.pdf</EvoListItemContent>
        </EvoListItem>
      </EvoList>
    </>
}`,...U.parameters?.docs?.source},description:{story:`A static list groups related files under one heading.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: args => <EvoList {...args}>
      <EvoListItemButton type="button" onClick={action("show shipping details")}>
        <EvoListItemContent>Show shipping details</EvoListItemContent>
      </EvoListItemButton>
      <EvoListItemLink href="/help/returns">
        <EvoListItemContent>Read the returns guide</EvoListItemContent>
        <EvoListItemTrailing>
          <EvoIconChevronRight16 />
        </EvoListItemTrailing>
      </EvoListItemLink>
    </EvoList>
}`,...W.parameters?.docs?.source},description:{story:`Native buttons run actions, while links navigate to another page.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: args => <EvoList {...args}>
      <EvoListItemLink href="/help/returns" as={({
      href,
      ...rest
    }) => <Link {...rest} to={href} />}>
        <EvoListItemContent>Read the returns guide</EvoListItemContent>
        <EvoListItemTrailing>
          <EvoIconChevronRight16 />
        </EvoListItemTrailing>
      </EvoListItemLink>
    </EvoList>,
  parameters: {
    docs: {
      description: {
        story: \`
Pass a custom component via the \\\`as\\\` prop of \\\`EvoListItemLink\\\` to replace the native \\\`<a>\\\`.

\\\`\\\`\\\`tsx
import { Link } from "react-router";

<EvoListItemLink
  href="/help/returns"
  as={({ href, ...rest }) => <Link {...rest} to={href} />}
>
  <EvoListItemContent>Read the returns guide</EvoListItemContent>
</EvoListItemLink>
\\\`\\\`\\\`
        \`
      }
    }
  }
}`,...G.parameters?.docs?.source},description:{story:"The `as` prop connects a link item to a client-side link component.",...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: args => <EvoList {...args}>
      <EvoListItem>
        <EvoListItemContent>Saved searches</EvoListItemContent>
      </EvoListItem>
      <EvoListSeparator />
      <EvoListItem>
        <EvoListItemContent>Recently viewed</EvoListItemContent>
      </EvoListItem>
    </EvoList>
}`,...K.parameters?.docs?.source},description:{story:`A separator divides related groups without adding an item.`,...K.parameters?.docs?.description}}}})))()}J();export{G as CustomLink,U as Default,W as Interactive,K as WithSeparator,q as __namedExportsOrder,H as default};