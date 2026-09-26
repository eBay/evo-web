import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{t as r}from"./classnames-D09xBJOL.js";import{a as i,i as a,n as o,o as s,r as c,t as l}from"./folder-16-DqIy2clU.js";function u(){return(u=t((()=>{})))()}function d({a11yText:e,a11yLabelId:t,className:n,children:r,...i}){return(0,p.jsx)(`div`,{...i,className:(0,f.default)(`list`,n),children:(0,p.jsx)(`ul`,{"aria-label":e,"aria-labelledby":t,children:r})})}var f,p;function m(){return(m=t((()=>{f=e(r(),1),u(),p=n();try{d.displayName=`EvoList`,d.__docgenInfo={description:`A list displays related items in a structured format. Items can contain
information, buttons, or links, and the list fits its container up to
Skin's maximum width.

\`EvoList\` wraps its children in a native \`<ul>\`. Use \`EvoListItem\` for each
entry and place its content in \`EvoListItemBody\`. Optional
\`EvoListItemLeading\` and \`EvoListItemTrailing\` regions flank the body.
Use \`a11yText\` or \`a11yLabelId\` when the list needs an accessible name.

## Usage

\`\`\`tsx
import {
  EvoList,
  EvoListItem,
  EvoListItemBody,
} from "@evo-web/react/list";

<EvoList>
  <EvoListItem>
    <EvoListItemBody>Saved searches</EvoListItemBody>
  </EvoListItem>
</EvoList>
\`\`\``,displayName:`EvoList`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/list/list.tsx`,methods:[],props:{a11yText:{defaultValue:null,declarations:[{fileName:`evo-react/src/list/types.ts`,name:`TypeLiteral`}],description:"Accessible name for the list. Use this or `a11yLabelId`.",name:`a11yText`,required:!1,tags:{},type:{name:`string`}},a11yLabelId:{defaultValue:null,declarations:[{fileName:`evo-react/src/list/types.ts`,name:`TypeLiteral`}],description:"ID of visible text naming the list. Use this or `a11yText`.",name:`a11yLabelId`,required:!1,tags:{},type:{name:`string`}}},tags:{summary:`Styled list of static or interactive items.`}}}catch{}})))()}function h({as:e=`div`,className:t,children:n,...r}){let i=(0,g.default)(`list__body`,t);return e===`button`?(0,_.jsx)(`li`,{children:(0,_.jsx)(`button`,{...r,className:i,children:n})}):e===`a`?(0,_.jsx)(`li`,{children:(0,_.jsx)(`a`,{...r,className:i,children:n})}):(0,_.jsx)(`li`,{children:(0,_.jsx)(`div`,{...r,className:i,children:n})})}var g,_;function v(){return(v=t((()=>{g=e(r(),1),_=n();try{h.displayName=`EvoListItem`,h.__docgenInfo={description:'An item in `EvoList`. Choose `as="button"` for an action or `as="a"` for\nnavigation. The default `<div>` body is static. Add named leading, body,\nand trailing children in the desired order.',displayName:`EvoListItem`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/list/list-item.tsx`,methods:[],props:{as:{defaultValue:{value:`div`},declarations:[{fileName:`evo-react/src/list/types.ts`,name:`TypeLiteral`}],description:"Renders an interactive item as a native `<button>`.",name:`as`,required:!1,tags:{},type:{name:`"button"`}}},tags:{summary:`Static, button, or link list item.`}}}catch{}})))()}function y({className:e,children:t,...n}){return(0,x.jsx)(`div`,{...n,className:(0,b.default)(`list__body`,e),children:t})}var b,x;function S(){return(S=t((()=>{b=e(r(),1),x=n();try{y.displayName=`EvoListItemBody`,y.__docgenInfo={description:"Contains the main text or controls of an `EvoListItem`.",displayName:`EvoListItemBody`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/list/list-item-body.tsx`,methods:[],props:{},tags:{summary:`List item body.`}}}catch{}})))()}function C({className:e,children:t,...n}){return(0,T.jsx)(`div`,{...n,className:(0,w.default)(`list__leading`,e),children:t})}var w,T;function E(){return(E=t((()=>{w=e(r(),1),T=n();try{C.displayName=`EvoListItemLeading`,C.__docgenInfo={description:"Adds content before an `EvoListItemBody`.",displayName:`EvoListItemLeading`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/list/list-item-leading.tsx`,methods:[],props:{},tags:{summary:`Leading list item region.`}}}catch{}})))()}function D({className:e,children:t,...n}){return(0,k.jsx)(`div`,{...n,className:(0,O.default)(`list__trailing`,e),children:t})}var O,k;function A(){return(A=t((()=>{O=e(r(),1),k=n();try{D.displayName=`EvoListItemTrailing`,D.__docgenInfo={description:"Adds content after an `EvoListItemBody`.",displayName:`EvoListItemTrailing`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/list/list-item-trailing.tsx`,methods:[],props:{},tags:{summary:`Trailing list item region.`}}}catch{}})))()}function j({style:e,...t}){return(0,M.jsx)(`li`,{"aria-hidden":`true`,style:{display:`contents`},children:(0,M.jsx)(`hr`,{...t,style:{backgroundColor:`transparent`,boxSizing:`content-box`,display:`block`,fontSize:`inherit`,marginBlock:`0.5em`,minHeight:0,width:`auto`,...e}})})}var M;function N(){return(N=t((()=>{M=n();try{j.displayName=`EvoListSeparator`,j.__docgenInfo={description:"Separates adjacent `EvoListItem` children with a native `<hr>`. The\ndecorative `<li>` keeps the parent `<ul>` valid for assistive technology.",displayName:`EvoListSeparator`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/list/list-separator.tsx`,methods:[],props:{},tags:{summary:`List separator.`}}}catch{}})))()}var P,F,I,L,R,z,B;function V(){return(V=t((()=>{s(),a(),o(),m(),v(),S(),E(),A(),N(),P=n(),{action:F}=__STORYBOOK_MODULE_ACTIONS__,I={title:`Building Blocks/EvoList`,component:d,subcomponents:{EvoListItem:h,EvoListItemBody:y,EvoListItemLeading:C,EvoListItemTrailing:D,EvoListSeparator:j}},L={render:e=>(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(`h2`,{id:`listing-files`,children:`Listing files`}),(0,P.jsxs)(d,{...e,a11yLabelId:`listing-files`,children:[(0,P.jsxs)(h,{children:[(0,P.jsx)(C,{children:(0,P.jsx)(l,{})}),(0,P.jsx)(y,{children:`Product photos`})]}),(0,P.jsxs)(h,{children:[(0,P.jsx)(C,{children:(0,P.jsx)(c,{})}),(0,P.jsx)(y,{children:`Size guide.pdf`})]})]})]})},R={render:e=>(0,P.jsxs)(d,{...e,children:[(0,P.jsx)(h,{as:`button`,onClick:F(`show shipping details`),children:(0,P.jsx)(y,{children:`Show shipping details`})}),(0,P.jsxs)(h,{as:`a`,href:`/help/returns`,children:[(0,P.jsx)(y,{children:`Read the returns guide`}),(0,P.jsx)(D,{children:(0,P.jsx)(i,{})})]})]})},z={render:e=>(0,P.jsxs)(d,{...e,children:[(0,P.jsx)(h,{children:(0,P.jsx)(y,{children:`Saved searches`})}),(0,P.jsx)(j,{}),(0,P.jsx)(h,{children:(0,P.jsx)(y,{children:`Recently viewed`})})]})},B=[`Default`,`Interactive`,`WithSeparator`],L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: args => <>
      <h2 id="listing-files">Listing files</h2>
      <EvoList {...args} a11yLabelId="listing-files">
        <EvoListItem>
          <EvoListItemLeading>
            <EvoIconFolder16 />
          </EvoListItemLeading>
          <EvoListItemBody>Product photos</EvoListItemBody>
        </EvoListItem>
        <EvoListItem>
          <EvoListItemLeading>
            <EvoIconFile16 />
          </EvoListItemLeading>
          <EvoListItemBody>Size guide.pdf</EvoListItemBody>
        </EvoListItem>
      </EvoList>
    </>
}`,...L.parameters?.docs?.source},description:{story:`A static list groups related files under one heading.`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: args => <EvoList {...args}>
      <EvoListItem as="button" onClick={action("show shipping details")}>
        <EvoListItemBody>Show shipping details</EvoListItemBody>
      </EvoListItem>
      <EvoListItem as="a" href="/help/returns">
        <EvoListItemBody>Read the returns guide</EvoListItemBody>
        <EvoListItemTrailing>
          <EvoIconChevronRight16 />
        </EvoListItemTrailing>
      </EvoListItem>
    </EvoList>
}`,...R.parameters?.docs?.source},description:{story:`Native buttons run actions, while links navigate to another page.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: args => <EvoList {...args}>
      <EvoListItem>
        <EvoListItemBody>Saved searches</EvoListItemBody>
      </EvoListItem>
      <EvoListSeparator />
      <EvoListItem>
        <EvoListItemBody>Recently viewed</EvoListItemBody>
      </EvoListItem>
    </EvoList>
}`,...z.parameters?.docs?.source},description:{story:`A separator divides related groups without adding an item.`,...z.parameters?.docs?.description}}}})))()}V();export{L as Default,R as Interactive,z as WithSeparator,B as __namedExportsOrder,I as default};