import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{t as r}from"./classnames-D09xBJOL.js";import{t as i}from"./link-DJNtH3mE.js";function a({variant:e,type:t=`button`,className:n,...r}){return(0,s.jsx)(`button`,{...r,className:(0,o.default)(`fake-link`,e===`standalone`&&`standalone-link`,n),type:t})}var o,s;function c(){return(c=t((()=>{o=e(r(),1),i(),s=n();try{a.displayName=`EvoFakeLink`,a.__docgenInfo={description:`Fake links style a button to look like a link for an in-page action.

\`EvoFakeLink\` keeps native button behavior and defaults to \`type="button"\`
so it does not submit a surrounding form. It forwards native button props
and a React 19 \`ref\`.

## Usage

\`\`\`tsx
import { EvoFakeLink } from "@evo-web/react/fake-link";

<EvoFakeLink onClick={showSellerDetails}>
  View seller details
</EvoFakeLink>
\`\`\``,displayName:`EvoFakeLink`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/fake-link/fake-link.tsx`,methods:[],props:{variant:{defaultValue:null,declarations:[{fileName:`evo-react/src/fake-link/types.ts`,name:`TypeLiteral`}],description:'Adds standalone link styling. Omit or use `"inline"` in text context.',name:`variant`,required:!1,tags:{},type:{name:`enum`,raw:`FakeLinkVariant`,value:[{value:`"inline"`},{value:`"standalone"`}]}}},tags:{summary:`Button with link styling for an in-page action.`}}}catch{}})))()}var l,u,d;function f(){return(f=t((()=>{c(),l={title:`Buttons/EvoFakeLink`,component:a,argTypes:{variant:{control:`select`,options:[`inline`,`standalone`]},disabled:{control:`boolean`},children:{control:`text`}},args:{children:`View seller details`,variant:`inline`}},u={},d=[`Default`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source},description:{story:`A button uses link styling for an action that stays on the current page.`,...u.parameters?.docs?.description}}}})))()}f();export{u as Default,d as __namedExportsOrder,l as default};