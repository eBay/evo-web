import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-CK-NQdWx.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{t as i}from"./classnames-D09xBJOL.js";import{n as a,t as o}from"./avatar-signed-out-rS97Bka1.js";function s(){return(0,l.use)(d)}function c({setImagePlacement:e,children:t}){let n=(0,l.useMemo)(()=>({setImagePlacement:e}),[e]);return(0,u.jsx)(d,{value:n,children:t})}var l,u,d;function f(){return(f=t((()=>{l=n(),u=r(),d=(0,l.createContext)(null);try{c.displayName=`AvatarProvider`,c.__docgenInfo={description:``,displayName:`AvatarProvider`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/avatar/context.tsx`,methods:[],props:{setImagePlacement:{defaultValue:null,declarations:[{fileName:`evo-react/src/avatar/context.tsx`,name:`TypeLiteral`}],description:``,name:`setImagePlacement`,required:!0,tags:{},type:{name:`(value: "fit" | "cover") => void`}}},tags:{}}}catch{}try{d.displayName=`AvatarContext`,d.__docgenInfo={description:``,displayName:`AvatarContext`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/avatar/context.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}function p(e,t){if(t)return t;let n=0,r,i;if(e&&e.length>0)for(i=0;i<e.length;i++)r=e.charCodeAt(i),n=(n<<5)-n+r,n|=0;let a=h.length,o=Math.abs(n)%a;return h[o]}function m(e){return!!e&&(e<3/4||e>4/3)}var h;function g(){return(g=t((()=>{h=[`teal`,`light-teal`,`green`,`lime`,`yellow`,`orange`,`magenta`,`pink`]})))()}function _(){return(_=t((()=>{})))()}function v({size:e,color:t,username:n,children:r,className:i,knownAspectRatio:a,a11yText:s=`avatar`,...l}){let[u,d]=(0,y.useState)(m(a)?`fit`:`cover`);return(0,x.jsx)(c,{setImagePlacement:d,children:(0,x.jsx)(`div`,{...l,role:`img`,"aria-label":s??void 0,className:(0,b.default)(`avatar`,i,e&&`avatar--${e}`,u===`fit`&&`avatar--fit`,n&&!r&&`avatar--${p(n,t)}`),children:r||n?.charAt(0).toUpperCase()||(0,x.jsx)(o,{})})})}var y,b,x;function S(){return(S=t((()=>{y=n(),b=e(i(),1),f(),g(),a(),_(),x=r();try{v.displayName=`EvoAvatar`,v.__docgenInfo={description:``,displayName:`EvoAvatar`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/avatar/avatar.tsx`,methods:[],props:{size:{defaultValue:null,declarations:[{fileName:`evo-react/src/avatar/types.ts`,name:`TypeLiteral`}],description:`The pixel size of the avatar. Only specific sizes are supported.`,name:`size`,required:!1,tags:{},type:{name:`Size | "32" | "40" | "48" | "56" | "64" | "96" | "128" | undefined`}},username:{defaultValue:null,declarations:[{fileName:`evo-react/src/avatar/types.ts`,name:`TypeLiteral`}],description:`The username to display. Determines the background color and first letter. Omit to show the signed-out icon.`,name:`username`,required:!1,tags:{},type:{name:`string | undefined`}},knownAspectRatio:{defaultValue:null,declarations:[{fileName:`evo-react/src/avatar/types.ts`,name:`TypeLiteral`}],description:`Optional pre-known image aspect ratio that prevents a flash of incorrectly styled content before load.`,name:`knownAspectRatio`,required:!1,tags:{},type:{name:`number | undefined`}},a11yText:{defaultValue:{value:`avatar`},declarations:[{fileName:`evo-react/src/avatar/types.ts`,name:`TypeLiteral`}],description:'Accessible label for the avatar (`aria-label`). English default to be overridden is `"avatar"`.\nPass `null` explicitly _only_ if alternative accessibility information is present.',name:`a11yText`,required:!1,tags:{},type:{name:`string | null | undefined`}}},tags:{}}}catch{}})))()}function C({onLoad:e,...t}){let n=s(),r=t=>{if(n){let e=t.target,r=e.naturalWidth/e.naturalHeight;n.setImagePlacement(m(r)?`fit`:`cover`)}e?.(t)};return(0,w.jsx)(`img`,{...t,alt:``,onLoad:r})}var w;function T(){return(T=t((()=>{f(),g(),w=r();try{C.displayName=`EvoAvatarImage`,C.__docgenInfo={description:``,displayName:`EvoAvatarImage`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/avatar/avatar-image.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var E,D,O,k,A,j,M,N;function P(){return(P=t((()=>{S(),T(),E=r(),D={title:`graphics & icons/evo-avatar`,component:v,subcomponents:{EvoAvatarImage:C},tags:[`autodocs`],parameters:{docs:{description:{component:`
An avatar component that displays a user's profile picture, initials, or a signed-out placeholder icon.

## Usage

\`\`\`tsx
import { EvoAvatar, EvoAvatarImage } from "@evo-web/react/avatar";
\`\`\`
        `}}},argTypes:{size:{control:`select`,options:[`32`,`40`,`48`,`56`,`64`,`96`,`128`],table:{defaultValue:{summary:`48`}}},color:{control:`select`,options:[`teal`,`light-teal`,`green`,`lime`,`yellow`,`orange`,`magenta`,`pink`],description:`Background color override for the initials variant. When omitted, color is derived from the username hash.`},username:{control:`text`},knownAspectRatio:{control:`number`},a11yText:{type:{name:`string`,required:!0},control:`text`}},args:{a11yText:`avatar`}},O={args:{username:`Elizabeth`,a11yText:`Signed in as Elizabeth`}},k={args:{username:`Elizabeth`,a11yText:`Signed in as Elizabeth`},render:e=>(0,E.jsx)(v,{...e,children:(0,E.jsx)(C,{src:`https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile.png`})})},A={args:{a11yText:`Signed out`}},j={args:{username:`Elizabeth`,a11yText:`Signed in as Elizabeth`},render:e=>(0,E.jsx)(v,{...e,children:(0,E.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,height:`100%`,width:`100%`,color:`white`,backgroundColor:`black`},children:(0,E.jsx)(`span`,{children:`EB`})})})},M={args:{a11yText:`Signed in as Doggy`},render:e=>(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(`div`,{children:(0,E.jsx)(v,{...e,children:(0,E.jsx)(C,{src:`https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile2.png`})})}),(0,E.jsx)(`div`,{children:(0,E.jsx)(v,{...e,children:(0,E.jsx)(C,{src:`https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile3.png`})})}),(0,E.jsx)(`div`,{children:(0,E.jsx)(v,{...e,children:(0,E.jsx)(C,{src:`https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile4.png`})})})]})},N=[`Default`,`WithImage`,`SignedOut`,`WithCustomBody`,`WithAutoPlacement`],O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    username: "Elizabeth",
    a11yText: "Signed in as Elizabeth"
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    username: "Elizabeth",
    a11yText: "Signed in as Elizabeth"
  },
  render: args => <EvoAvatar {...args}>
      <EvoAvatarImage src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile.png" />
    </EvoAvatar>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    a11yText: "Signed out"
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    username: "Elizabeth",
    a11yText: "Signed in as Elizabeth"
  },
  render: args => <EvoAvatar {...args}>
      <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
      width: "100%",
      color: "white",
      backgroundColor: "black"
    }}>
        <span>EB</span>
      </div>
    </EvoAvatar>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    a11yText: "Signed in as Doggy"
  },
  render: args => <>
      <div>
        <EvoAvatar {...args}>
          <EvoAvatarImage src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile2.png" />
        </EvoAvatar>
      </div>
      <div>
        <EvoAvatar {...args}>
          <EvoAvatarImage src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile3.png" />
        </EvoAvatar>
      </div>
      <div>
        <EvoAvatar {...args}>
          <EvoAvatarImage src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile4.png" />
        </EvoAvatar>
      </div>
    </>
}`,...M.parameters?.docs?.source}}}})))()}P();export{O as Default,A as SignedOut,M as WithAutoPlacement,j as WithCustomBody,k as WithImage,N as __namedExportsOrder,D as default};