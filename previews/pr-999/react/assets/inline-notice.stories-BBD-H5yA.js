import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-CK-NQdWx.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{t as i}from"./classnames-D09xBJOL.js";import{a,i as o,n as s,o as c,r as l,t as u}from"./information-filled-16-WW_EVc8F.js";function d(){return(d=t((()=>{})))()}function f({a11yText:e,children:t,className:n,hidden:r=!1,onNoticeShow:i,ref:a,status:o=`attention`,...s}){let c=(0,p.useEffectEvent)(()=>i?.());if((0,p.useEffect)(()=>{r||c()},[r]),r)return null;let l=g[o];return(0,h.jsxs)(`div`,{...s,ref:a,className:(0,m.default)(`inline-notice`,`inline-notice--${o}`,n),children:[(0,h.jsx)(`span`,{className:`inline-notice__header`,children:(0,h.jsx)(l,{a11yText:e??_[o],a11yVariant:`label`})}),t]})}var p,m,h,g,_;function v(){return(v=t((()=>{p=n(),m=e(i(),1),c(),o(),s(),d(),h=r(),g={attention:a,confirmation:l,information:u},_={attention:`Attention`,confirmation:`Confirmation`,information:`Information`};try{f.displayName=`EvoInlineNotice`,f.__docgenInfo={description:`Inline notices give concise feedback within the current page content.

\`EvoInlineNotice\` displays a labeled status icon and a named
\`EvoInlineNoticeMain\` region. Place the main region after the icon so the
Skin structure remains intact. \`hidden\` removes the notice from the DOM and
\`onNoticeShow\` runs when it becomes visible.

## Usage

\`\`\`tsx
import {
  EvoInlineNotice,
  EvoInlineNoticeMain,
} from "@evo-web/react/inline-notice";

<EvoInlineNotice status="confirmation" a11yText="Confirmed">
  <EvoInlineNoticeMain>Payment received.</EvoInlineNoticeMain>
</EvoInlineNotice>
\`\`\``,displayName:`EvoInlineNotice`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/inline-notice/inline-notice.tsx`,methods:[],props:{a11yText:{defaultValue:null,declarations:[{fileName:`evo-react/src/inline-notice/types.ts`,name:`TypeLiteral`}],description:`Names the status icon for assistive technology. English default to be
overridden is \`"Attention"\` for the default status; confirmation and
information use their matching English status names.`,name:`a11yText`,required:!1,tags:{},type:{name:`string`}},hidden:{defaultValue:{value:`false`},declarations:[{fileName:`evo-react/src/inline-notice/types.ts`,name:`TypeLiteral`}],description:"Omits the notice from the DOM while hidden. Defaults to `false`.",name:`hidden`,required:!1,tags:{},type:{name:`boolean`}},onNoticeShow:{defaultValue:null,declarations:[{fileName:`evo-react/src/inline-notice/types.ts`,name:`TypeLiteral`}],description:`Called when the notice first appears or changes from hidden to visible.`,name:`onNoticeShow`,required:!1,tags:{},type:{name:`(() => void)`}},status:{defaultValue:{value:`attention`},declarations:[{fileName:`evo-react/src/inline-notice/types.ts`,name:`TypeLiteral`}],description:'Selects the notice status and icon. Defaults to `"attention"`.',name:`status`,required:!1,tags:{},type:{name:`enum`,raw:`InlineNoticeStatus`,value:[{value:`"attention"`},{value:`"confirmation"`},{value:`"information"`}]}}},tags:{summary:`Inline status message with a labeled icon.`}}}catch{}})))()}function y({children:e,className:t,ref:n,...r}){return(0,x.jsx)(`span`,{...r,ref:n,className:(0,b.default)(`inline-notice__main`,t),children:e})}var b,x;function S(){return(S=t((()=>{b=e(i(),1),x=r();try{y.displayName=`EvoInlineNoticeMain`,y.__docgenInfo={description:"Phrasing content rendered in the main `span` of `EvoInlineNotice`.",displayName:`EvoInlineNoticeMain`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/inline-notice/inline-notice-main.tsx`,methods:[],props:{},tags:{summary:`Main content of an inline notice.`}}}catch{}})))()}var C,w,T,E;function D(){return(D=t((()=>{v(),S(),C=r(),w={title:`Notices & Tips/EvoInlineNotice`,component:f,subcomponents:{EvoInlineNoticeMain:y},argTypes:{status:{control:`select`,options:[`attention`,`confirmation`,`information`]},hidden:{control:`boolean`}},args:{status:`confirmation`,a11yText:`Confirmation`}},T={render:e=>(0,C.jsx)(f,{...e,children:(0,C.jsx)(y,{children:`Payment received. Your order is being prepared.`})})},E=[`Default`],T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => <EvoInlineNotice {...args}>
      <EvoInlineNoticeMain>
        Payment received. Your order is being prepared.
      </EvoInlineNoticeMain>
    </EvoInlineNotice>
}`,...T.parameters?.docs?.source},description:{story:`An inline confirmation appears beside the content it updates.`,...T.parameters?.docs?.description}}}})))()}D();export{T as Default,E as __namedExportsOrder,w as default};