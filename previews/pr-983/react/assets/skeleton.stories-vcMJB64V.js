import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{t as r}from"./classnames-D09xBJOL.js";function i(){return(i=t((()=>{})))()}function a({a11yText:e=`Loading...`,color:t,className:n,children:r,...i}){return(0,s.jsx)(`div`,{...i,role:`img`,"aria-label":e??void 0,className:(0,o.default)(`skeleton`,t&&`skeleton--${t}`,n),children:r})}var o,s;function c(){return(c=t((()=>{o=e(r(),1),i(),s=n();try{a.displayName=`EvoSkeleton`,a.__docgenInfo={description:`Skeletons reserve space on a page for content that is still loading. Size
the placeholder to the expected content so loading does not shift the page.

\`EvoSkeleton\` groups its placeholder parts as one image with an accessible
loading description. Compose the exported \`EvoSkeleton*\` parts inside it,
and replace the group with the loaded content when ready.

## Usage

\`\`\`tsx
import { EvoSkeleton, EvoSkeletonImage, EvoSkeletonText } from "@evo-web/react/skeleton";

<EvoSkeleton a11yText="Loading listing details">
  <EvoSkeletonImage style={{ width: 220, height: 220 }} />
  <EvoSkeletonText multiline />
</EvoSkeleton>
\`\`\``,displayName:`EvoSkeleton`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/skeleton/skeleton.tsx`,methods:[],props:{a11yText:{defaultValue:{value:`Loading...`},declarations:[{fileName:`evo-react/src/skeleton/types.ts`,name:`TypeLiteral`}],description:'Accessible loading description. English default to be overridden is `"Loading..."`.\nPass `null` explicitly _only_ if alternative accessibility information is present.',name:`a11yText`,required:!1,tags:{},type:{name:`string | null`}}},tags:{summary:`Accessible placeholder group for loading content.`}}}catch{}})))()}function l({as:e,className:t,...n}){let r=(0,u.default)(`skeleton__avatar`,t);return e===`span`?(0,d.jsx)(`span`,{...n,className:r}):(0,d.jsx)(`div`,{...n,className:r})}var u,d;function f(){return(f=t((()=>{u=e(r(),1),d=n();try{l.displayName=`EvoSkeletonAvatar`,l.__docgenInfo={description:"Avatar-shaped placeholder for an `EvoSkeleton` group.",displayName:`EvoSkeletonAvatar`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/skeleton/skeleton-avatar.tsx`,methods:[],props:{as:{defaultValue:null,declarations:[{fileName:`evo-react/src/skeleton/types.ts`,name:`TypeLiteral`}],description:"Renders the placeholder part as a `<div>` or `<span>`. Defaults to `<div>`.",name:`as`,required:!1,tags:{},type:{name:`enum`,raw:`SupportedElements`,value:[{value:`"div"`},{value:`"span"`}]}}},tags:{summary:`Loading avatar shape.`}}}catch{}})))()}function p({as:e,className:t,size:n,...r}){let i=(0,m.default)(`skeleton__button`,n&&`skeleton__button--${n}`,t);return e===`span`?(0,h.jsx)(`span`,{...r,className:i}):(0,h.jsx)(`div`,{...r,className:i})}var m,h;function g(){return(g=t((()=>{m=e(r(),1),h=n();try{p.displayName=`EvoSkeletonButton`,p.__docgenInfo={description:"Button-shaped placeholder for an `EvoSkeleton` group.",displayName:`EvoSkeletonButton`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/skeleton/skeleton-button.tsx`,methods:[],props:{as:{defaultValue:null,declarations:[{fileName:`evo-react/src/skeleton/types.ts`,name:`TypeLiteral`}],description:"Renders the placeholder part as a `<div>` or `<span>`. Defaults to `<div>`.",name:`as`,required:!1,tags:{},type:{name:`enum`,raw:`SupportedElements`,value:[{value:`"div"`},{value:`"span"`}]}},size:{defaultValue:null,declarations:[{fileName:`evo-react/src/skeleton/types.ts`,name:`TypeLiteral`}],description:`Sets the button placeholder size. Omit for the default size.`,name:`size`,required:!1,tags:{},type:{name:`enum`,raw:`SkeletonSize`,value:[{value:`"small"`},{value:`"large"`}]}}},tags:{summary:`Loading button shape.`}}}catch{}})))()}function _({as:e,className:t,...n}){let r=(0,v.default)(`skeleton__image`,t);return e===`span`?(0,y.jsx)(`span`,{...n,className:r}):(0,y.jsx)(`div`,{...n,className:r})}var v,y;function b(){return(b=t((()=>{v=e(r(),1),y=n();try{_.displayName=`EvoSkeletonImage`,_.__docgenInfo={description:"Image-shaped placeholder for an `EvoSkeleton` group.",displayName:`EvoSkeletonImage`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/skeleton/skeleton-image.tsx`,methods:[],props:{as:{defaultValue:null,declarations:[{fileName:`evo-react/src/skeleton/types.ts`,name:`TypeLiteral`}],description:"Renders the placeholder part as a `<div>` or `<span>`. Defaults to `<div>`.",name:`as`,required:!1,tags:{},type:{name:`enum`,raw:`SupportedElements`,value:[{value:`"div"`},{value:`"span"`}]}}},tags:{summary:`Loading image shape.`}}}catch{}})))()}function x({as:e,className:t,multiline:n,size:r,...i}){let a=(0,S.default)(`skeleton__text`,n&&`skeleton__text--multiline`,r===`large`&&`skeleton__text--large`,t);return e===`span`?(0,C.jsx)(`span`,{...i,className:a}):(0,C.jsx)(`div`,{...i,className:a})}var S,C;function w(){return(w=t((()=>{S=e(r(),1),C=n();try{x.displayName=`EvoSkeletonText`,x.__docgenInfo={description:"Text-line placeholder for an `EvoSkeleton` group.",displayName:`EvoSkeletonText`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/skeleton/skeleton-text.tsx`,methods:[],props:{as:{defaultValue:null,declarations:[{fileName:`evo-react/src/skeleton/types.ts`,name:`TypeLiteral`}],description:"Renders the placeholder part as a `<div>` or `<span>`. Defaults to `<div>`.",name:`as`,required:!1,tags:{},type:{name:`enum`,raw:`SupportedElements`,value:[{value:`"div"`},{value:`"span"`}]}},size:{defaultValue:null,declarations:[{fileName:`evo-react/src/skeleton/types.ts`,name:`TypeLiteral`}],description:'Sets large text placeholder styling. `"small"` uses the default size.',name:`size`,required:!1,tags:{},type:{name:`enum`,raw:`SkeletonSize`,value:[{value:`"small"`},{value:`"large"`}]}},multiline:{defaultValue:null,declarations:[{fileName:`evo-react/src/skeleton/types.ts`,name:`TypeLiteral`}],description:`Extends the text placeholder to several lines.`,name:`multiline`,required:!1,tags:{},type:{name:`boolean`}}},tags:{summary:`Loading text shape.`}}}catch{}})))()}function T({as:e,className:t,...n}){let r=(0,E.default)(`skeleton__textbox`,t);return e===`span`?(0,D.jsx)(`span`,{...n,className:r}):(0,D.jsx)(`div`,{...n,className:r})}var E,D;function O(){return(O=t((()=>{E=e(r(),1),D=n();try{T.displayName=`EvoSkeletonTextbox`,T.__docgenInfo={description:"Textbox-shaped placeholder for an `EvoSkeleton` group.",displayName:`EvoSkeletonTextbox`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/skeleton/skeleton-textbox.tsx`,methods:[],props:{as:{defaultValue:null,declarations:[{fileName:`evo-react/src/skeleton/types.ts`,name:`TypeLiteral`}],description:"Renders the placeholder part as a `<div>` or `<span>`. Defaults to `<div>`.",name:`as`,required:!1,tags:{},type:{name:`enum`,raw:`SupportedElements`,value:[{value:`"div"`},{value:`"span"`}]}}},tags:{summary:`Loading textbox shape.`}}}catch{}})))()}var k,A,j,M,N;function P(){return(P=t((()=>{c(),f(),g(),b(),w(),O(),k=n(),A={title:`Building Blocks/EvoSkeleton`,component:a,subcomponents:{EvoSkeletonAvatar:l,EvoSkeletonButton:p,EvoSkeletonImage:_,EvoSkeletonText:x,EvoSkeletonTextbox:T},argTypes:{a11yText:{control:`text`},color:{control:`select`,options:[`purple`,`green`,`blue`]}},args:{a11yText:`Loading listing details`},parameters:{docs:{description:{component:`Place placeholder parts inside EvoSkeleton, size the group and image to the content they replace, and provide a loading description with a11yText. Multiline text draws its second line outside the element's height, so leave space below it before the next block. Replace the whole group when the content loads.`}}}},j={render:e=>(0,k.jsxs)(a,{...e,style:{width:220},children:[(0,k.jsx)(_,{style:{width:220,height:220}}),(0,k.jsx)(x,{size:`large`}),(0,k.jsx)(x,{multiline:!0,style:{marginBlockEnd:`var(--spacing-600)`}}),(0,k.jsx)(p,{size:`small`})]}),parameters:{docs:{description:{story:`The group and image reserve the listing card's width. The multiline text leaves room for its second line before the button placeholder.`}}}},M={render:e=>(0,k.jsxs)(a,{...e,style:{width:300},children:[(0,k.jsx)(l,{}),(0,k.jsx)(x,{multiline:!0,style:{marginBlockEnd:`var(--spacing-600)`}}),(0,k.jsx)(T,{}),(0,k.jsx)(p,{})]}),parameters:{docs:{description:{story:`Compose avatar, text, textbox, and button placeholders in content order. Leave space after multiline text so its second line clears the textbox.`}}}},N=[`Default`,`WithProfileLayout`],j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: args => <EvoSkeleton {...args} style={{
    width: 220
  }}>
      <EvoSkeletonImage style={{
      width: 220,
      height: 220
    }} />
      <EvoSkeletonText size="large" />
      <EvoSkeletonText multiline style={{
      marginBlockEnd: "var(--spacing-600)"
    }} />
      <EvoSkeletonButton size="small" />
    </EvoSkeleton>,
  parameters: {
    docs: {
      description: {
        story: "The group and image reserve the listing card's width. The multiline text leaves room for its second line before the button placeholder."
      }
    }
  }
}`,...j.parameters?.docs?.source},description:{story:`A listing card reserves image and text space while its details load.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: args => <EvoSkeleton {...args} style={{
    width: 300
  }}>
      <EvoSkeletonAvatar />
      <EvoSkeletonText multiline style={{
      marginBlockEnd: "var(--spacing-600)"
    }} />
      <EvoSkeletonTextbox />
      <EvoSkeletonButton />
    </EvoSkeleton>,
  parameters: {
    docs: {
      description: {
        story: "Compose avatar, text, textbox, and button placeholders in content order. Leave space after multiline text so its second line clears the textbox."
      }
    }
  }
}`,...M.parameters?.docs?.source},description:{story:`The placeholder parts also cover an avatar, button, and textbox layout.`,...M.parameters?.docs?.description}}}})))()}P();export{j as Default,M as WithProfileLayout,N as __namedExportsOrder,A as default};