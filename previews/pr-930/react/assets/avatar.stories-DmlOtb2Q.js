import{r as h,j as a}from"./iframe-DjAcWYNC.js";import{c as A}from"./index-C04a5A_d.js";import{E as k}from"./avatar-signed-out-B1mZrK0o.js";import"./preload-helper-PPVm8Dsz.js";import"./icon-OW-XSJJv.js";const u=h.createContext(null);function j(){return h.use(u)}function y({setImagePlacement:e,children:o}){const t=h.useMemo(()=>({setImagePlacement:e}),[e]);return a.jsx(u,{value:t,children:o})}try{y.displayName="AvatarProvider",y.__docgenInfo={description:"",displayName:"AvatarProvider",filePath:"/home/runner/work/evo-web/evo-web/packages/evo-react/src/avatar/context.tsx",methods:[],props:{setImagePlacement:{defaultValue:null,declarations:[{fileName:"evo-react/src/avatar/context.tsx",name:"TypeLiteral"}],description:"",name:"setImagePlacement",required:!0,tags:{},type:{name:'(value: "fit" | "cover") => void'}}},tags:{}}}catch{}try{u.displayName="AvatarContext",u.__docgenInfo={description:"",displayName:"AvatarContext",filePath:"/home/runner/work/evo-web/evo-web/packages/evo-react/src/avatar/context.tsx",methods:[],props:{},tags:{}}}catch{}const f=["teal","light-teal","green","lime","yellow","orange","magenta","pink"];function w(e,o){if(o)return o;let t=0,s,r;if(e&&e.length>0)for(r=0;r<e.length;r++)s=e.charCodeAt(r),t=(t<<5)-t+s,t|=0;const c=f.length,l=Math.abs(t)%c;return f[l]}function x(e){return!!e&&(e<3/4||e>4/3)}function n({size:e,color:o,username:t,children:s,className:r,knownAspectRatio:c,a11yText:l="avatar",...b}){const[_,E]=h.useState(x(c)?"fit":"cover");return a.jsx(y,{setImagePlacement:E,children:a.jsx("div",{...b,role:"img","aria-label":l??void 0,className:A("avatar",r,e&&`avatar--${e}`,_==="fit"&&"avatar--fit",t&&!s&&`avatar--${w(t,o)}`),children:s||t?.charAt(0).toUpperCase()||a.jsx(k,{})})})}try{n.displayName="EvoAvatar",n.__docgenInfo={description:"",displayName:"EvoAvatar",filePath:"/home/runner/work/evo-web/evo-web/packages/evo-react/src/avatar/avatar.tsx",methods:[],props:{size:{defaultValue:null,declarations:[{fileName:"evo-react/src/avatar/types.ts",name:"TypeLiteral"}],description:"The pixel size of the avatar. Only specific sizes are supported.",name:"size",required:!1,tags:{},type:{name:'Size | "32" | "40" | "48" | "56" | "64" | "96" | "128"'}},username:{defaultValue:null,declarations:[{fileName:"evo-react/src/avatar/types.ts",name:"TypeLiteral"}],description:"The username to display. Determines the background color and first letter. Omit to show the signed-out icon.",name:"username",required:!1,tags:{},type:{name:"string"}},knownAspectRatio:{defaultValue:null,declarations:[{fileName:"evo-react/src/avatar/types.ts",name:"TypeLiteral"}],description:"Optional pre-known image aspect ratio that prevents a flash of incorrectly styled content before load.",name:"knownAspectRatio",required:!1,tags:{},type:{name:"number"}},a11yText:{defaultValue:{value:"avatar"},declarations:[{fileName:"evo-react/src/avatar/types.ts",name:"TypeLiteral"}],description:'Accessible label for the avatar (`aria-label`). English default to be overridden is `"avatar"`.\nPass `null` explicitly _only_ if alternative accessibility information is present.',name:"a11yText",required:!1,tags:{},type:{name:"string"}}},tags:{}}}catch{}function i({onLoad:e,...o}){const t=j(),s=r=>{if(t){const c=r.target,l=c.naturalWidth/c.naturalHeight;t.setImagePlacement(x(l)?"fit":"cover")}e?.(r)};return a.jsx("img",{...o,alt:"",onLoad:s})}try{i.displayName="EvoAvatarImage",i.__docgenInfo={description:"",displayName:"EvoAvatarImage",filePath:"/home/runner/work/evo-web/evo-web/packages/evo-react/src/avatar/avatar-image.tsx",methods:[],props:{},tags:{}}}catch{}const N={title:"graphics & icons/evo-avatar",component:n,subcomponents:{EvoAvatarImage:i},tags:["autodocs"],parameters:{docs:{description:{component:`
An avatar component that displays a user's profile picture, initials, or a signed-out placeholder icon.

## Usage

\`\`\`tsx
import { EvoAvatar, EvoAvatarImage } from "@evo-web/react/avatar";
\`\`\`
        `}}},argTypes:{size:{control:"select",options:["32","40","48","56","64","96","128"],table:{defaultValue:{summary:"48"}}},color:{control:"select",options:["teal","light-teal","green","lime","yellow","orange","magenta","pink"],description:"Background color override for the initials variant. When omitted, color is derived from the username hash."},username:{control:"text"},knownAspectRatio:{control:"number"},a11yText:{type:{name:"string",required:!0},control:"text"}},args:{a11yText:"avatar"}},d={args:{username:"Elizabeth",a11yText:"Signed in as Elizabeth"}},p={args:{username:"Elizabeth",a11yText:"Signed in as Elizabeth"},render:e=>a.jsx(n,{...e,children:a.jsx(i,{src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile.png"})})},m={args:{a11yText:"Signed out"}},v={args:{username:"Elizabeth",a11yText:"Signed in as Elizabeth"},render:e=>a.jsx(n,{...e,children:a.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",width:"100%",color:"white",backgroundColor:"black"},children:a.jsx("span",{children:"EB"})})})},g={args:{a11yText:"Signed in as Doggy"},render:e=>a.jsxs(a.Fragment,{children:[a.jsx("div",{children:a.jsx(n,{...e,children:a.jsx(i,{src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile2.png"})})}),a.jsx("div",{children:a.jsx(n,{...e,children:a.jsx(i,{src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile3.png"})})}),a.jsx("div",{children:a.jsx(n,{...e,children:a.jsx(i,{src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile4.png"})})})]})},P=["Default","WithImage","SignedOut","WithCustomBody","WithAutoPlacement"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    username: "Elizabeth",
    a11yText: "Signed in as Elizabeth"
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    username: "Elizabeth",
    a11yText: "Signed in as Elizabeth"
  },
  render: args => <EvoAvatar {...args}>
      <EvoAvatarImage src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile.png" />
    </EvoAvatar>
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    a11yText: "Signed out"
  }
}`,...m.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};export{d as Default,m as SignedOut,g as WithAutoPlacement,v as WithCustomBody,p as WithImage,P as __namedExportsOrder,N as default};
