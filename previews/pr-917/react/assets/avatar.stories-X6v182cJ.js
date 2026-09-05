import{r as h,j as a}from"./iframe-C6UuLfLN.js";import{c as A}from"./index-C8RT2u9f.js";import{E as j}from"./avatar-signed-out-DzS2_UQy.js";import"./preload-helper-PPVm8Dsz.js";import"./icon-72M2XBFp.js";const u=h.createContext(null);function k(){return h.use(u)}function y({setImagePlacement:e,children:n}){const t=h.useMemo(()=>({setImagePlacement:e}),[e]);return a.jsx(u,{value:t,children:n})}try{y.displayName="AvatarProvider",y.__docgenInfo={description:"",displayName:"AvatarProvider",props:{setImagePlacement:{defaultValue:null,description:"",name:"setImagePlacement",required:!0,type:{name:'(value: "fit" | "cover") => void'}}}}}catch{}try{u.displayName="AvatarContext",u.__docgenInfo={description:"",displayName:"AvatarContext",props:{}}}catch{}const f=["teal","light-teal","green","lime","yellow","orange","magenta","pink"];function I(e,n){if(n)return n;let t=0,s,r;if(e&&e.length>0)for(r=0;r<e.length;r++)s=e.charCodeAt(r),t=(t<<5)-t+s,t|=0;const c=f.length,l=Math.abs(t)%c;return f[l]}function x(e){return!!e&&(e<3/4||e>4/3)}function o({size:e,color:n,username:t,children:s,className:r,knownAspectRatio:c,a11yText:l="avatar",..._}){const[E,b]=h.useState(x(c)?"fit":"cover");return a.jsx(y,{setImagePlacement:b,children:a.jsx("div",{..._,role:"img","aria-label":l??void 0,className:A("avatar",r,e&&`avatar--${e}`,E==="fit"&&"avatar--fit",t&&!s&&`avatar--${I(t,n)}`),children:s||t?.charAt(0).toUpperCase()||a.jsx(j,{})})})}try{o.displayName="EvoAvatar",o.__docgenInfo={description:"",displayName:"EvoAvatar",props:{size:{defaultValue:null,description:"The pixel size of the avatar. Only specific sizes are supported.",name:"size",required:!1,type:{name:'Size | "32" | "40" | "48" | "56" | "64" | "96" | "128"'}},username:{defaultValue:null,description:"The username to display. Determines the background color and first letter. Omit to show the signed-out icon.",name:"username",required:!1,type:{name:"string"}},knownAspectRatio:{defaultValue:null,description:"Optional pre-known image aspect ratio that prevents a flash of incorrectly styled content before load.",name:"knownAspectRatio",required:!1,type:{name:"number"}},a11yText:{defaultValue:{value:"avatar"},description:'Accessible label for the avatar (`aria-label`). English default to be overridden is `"avatar"`.\nPass `null` explicitly _only_ if alternative accessibility information is present.',name:"a11yText",required:!1,type:{name:"string"}}}}}catch{}function i({onLoad:e,...n}){const t=k(),s=r=>{if(t){const c=r.target,l=c.naturalWidth/c.naturalHeight;t.setImagePlacement(x(l)?"fit":"cover")}e?.(r)};return a.jsx("img",{...n,alt:"",onLoad:s})}try{i.displayName="EvoAvatarImage",i.__docgenInfo={description:"",displayName:"EvoAvatarImage",props:{}}}catch{}const N={title:"graphics & icons/evo-avatar",component:o,subcomponents:{EvoAvatarImage:i},tags:["autodocs"],parameters:{docs:{description:{component:`
An avatar component that displays a user's profile picture, initials, or a signed-out placeholder icon.

## Usage

\`\`\`tsx
import { EvoAvatar, EvoAvatarImage } from "@evo-web/react/avatar";
\`\`\`
        `}}},argTypes:{size:{control:"select",options:["32","40","48","56","64","96","128"],table:{defaultValue:{summary:"48"}}},color:{control:"select",options:["teal","light-teal","green","lime","yellow","orange","magenta","pink"],description:"Background color override for the initials variant. When omitted, color is derived from the username hash."},username:{control:"text"},knownAspectRatio:{control:"number"},a11yText:{type:{name:"string",required:!0},control:"text"}},args:{a11yText:"avatar"}},d={args:{username:"Elizabeth",a11yText:"Signed in as Elizabeth"}},p={args:{username:"Elizabeth",a11yText:"Signed in as Elizabeth"},render:e=>a.jsx(o,{...e,children:a.jsx(i,{src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile.png"})})},m={args:{a11yText:"Signed out"}},g={args:{username:"Elizabeth",a11yText:"Signed in as Elizabeth"},render:e=>a.jsx(o,{...e,children:a.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",width:"100%",color:"white",backgroundColor:"black"},children:a.jsx("span",{children:"EB"})})})},v={args:{a11yText:"Signed in as Doggy"},render:e=>a.jsxs(a.Fragment,{children:[a.jsx("div",{children:a.jsx(o,{...e,children:a.jsx(i,{src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile2.png"})})}),a.jsx("div",{children:a.jsx(o,{...e,children:a.jsx(i,{src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile3.png"})})}),a.jsx("div",{children:a.jsx(o,{...e,children:a.jsx(i,{src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile4.png"})})})]})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};const P=["Default","WithImage","SignedOut","WithCustomBody","WithAutoPlacement"];export{d as Default,m as SignedOut,v as WithAutoPlacement,g as WithCustomBody,p as WithImage,P as __namedExportsOrder,N as default};
