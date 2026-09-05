var S=Object.defineProperty;var r=(e,n)=>S(e,"name",{value:n,configurable:!0});import{r as y,R as a,c as k}from"./iframe-DXKVC7Wu.js";import{E as _}from"./ebay-icon-avatar-signed-out-4TOGd16M.js";import"./preload-helper-Cc2_yIPf.js";const h=["teal","light-teal","green","lime","yellow","orange","magenta","pink"];function w(e,n){if(n)return n;let t=0,i,o;if(e&&e.length>0)for(o=0;o<e.length;o++)i=e.charCodeAt(o),t=(t<<5)-t+i,t|=0;const c=h.length,m=Math.abs(t)%c;return h[m]}r(w,"getColorForText");function v(e){return e&&(e<3/4||e<4/3)}r(v,"isFit");const E=y.createContext(null),s=r(({size:e,color:n,username:t,children:i,className:o,knownAspectRatio:c,...m})=>{const[f,A]=y.useState(v(c)?"fit":"cover");return a.createElement(E.Provider,{value:{setImagePlacement:A}},a.createElement("div",{...m,role:"img",className:k("avatar",o,e&&`avatar--${e}`,f==="fit"&&"avatar--fit",t&&!i&&`avatar--${w(t,n)}`)},i||t?.charAt(0).toUpperCase()||a.createElement(_,null)))},"EbayAvatar");try{s.displayName="avatar",s.__docgenInfo={description:"",displayName:"avatar",filePath:"/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-avatar/avatar.tsx",methods:[],props:{size:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-avatar/avatar.tsx",name:"TypeLiteral"}],description:"",name:"size",required:!1,tags:{},type:{name:'Size | "32" | "40" | "48" | "56" | "64" | "96" | "128"'}},username:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-avatar/avatar.tsx",name:"TypeLiteral"}],description:"",name:"username",required:!1,tags:{},type:{name:"string"}},knownAspectRatio:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-avatar/avatar.tsx",name:"TypeLiteral"}],description:"",name:"knownAspectRatio",required:!1,tags:{},type:{name:"number"}}},tags:{}}}catch{}function x(e,n){if(!e)throw new Error(n)}r(x,"invariant");const l=r(({onLoad:e,...n})=>{const t=y.useContext(E);x(t,"EbayAvatarImage needs to be used with EbayAvatar component");const i=r(o=>{const c=o.target,m=c.naturalWidth/c.naturalHeight;t.setImagePlacement(v(m)?"fit":"cover"),e?.(o)},"handleImageLoad");return a.createElement("img",{...n,alt:"",onLoad:i})},"EbayAvatarImage");try{l.displayName="avatarimage",l.__docgenInfo={description:"",displayName:"avatarimage",filePath:"/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-avatar/avatar-image.tsx",methods:[],props:{},tags:{}}}catch{}const N={title:"graphics & icons/ebay-avatar",component:s,argTypes:{color:{options:["teal","light-teal","green","lime","yellow","orange","magenta","pink"],table:{defaultValue:{summary:"teal"}},control:{type:"select"},description:"The color to color the background. This can be only used in the non icon/image case. This is used simply as an override to the username hash"},size:{options:["32","40","48","56","64","96","128"],table:{defaultValue:{summary:"48"}},control:{type:"select"},description:"The pixel size of the avatar. Can only be specific sizes"},username:{description:"The username to display. If there is no body, then this will deternmine what the content is. If there is no username passed, then user is signed out. Based on the username, the icon will change colors and show the first letter if there is no user profile pic."},knownAspectRatio:{control:{type:"number"},description:"Optional, as aspect ratio will be calculated when the image loads on the client. This can be passed to help prevent a flash of incorrectly styled content before the image loads"}},tags:["autodocs"],parameters:{docs:{description:{component:`## Usage

### Import

\`\`\`jsx harmony
import { EbayAvatar } from "@ebay/ui-core-react/ebay-avatar";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/avatar";
import "@ebay/skin/icon";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/avatar.css";
@import "@ebay/skin/icon.css";
\`\`\`

### Basic

\`\`\`jsx harmony
<EbayAvatar username="Joe" />
\`\`\``}}}},d=r(e=>a.createElement(s,{...e,"aria-label":"Signed in as Elizabeth",username:e.username||"Elizabeth"}),"Default"),g=r(e=>a.createElement(s,{...e,"aria-label":"Signed in as Elizabeth",username:e.username||"Elizabeth"},a.createElement(l,{src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile.png"})),"WithImage"),p=r(e=>a.createElement(s,{...e,"aria-label":"Signed out"}),"SignedOut"),u=r(e=>a.createElement(s,{...e,"aria-label":"Signed in as Elizabeth",username:e.username||"Elizabeth"},a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",width:"100%",color:"white",backgroundColor:"black"}},a.createElement("span",null,"EB"))),"WithCustomBody"),b=r(e=>a.createElement(a.Fragment,null,a.createElement("div",null,a.createElement(s,{...e,"aria-label":"Signed in as Doggy"},a.createElement(l,{src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile2.png"}))),a.createElement("div",null,a.createElement(s,{...e,"aria-label":"Signed in as Doggy"},a.createElement(l,{src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile3.png"}))),a.createElement("div",null,a.createElement(s,{...e,"aria-label":"Signed in as Doggy"},a.createElement(l,{src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile4.png"})))),"WithAutoPlacement"),D=["Default","WithImage","SignedOut","WithCustomBody","WithAutoPlacement"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:'args => <EbayAvatar {...args} aria-label="Signed in as Elizabeth" username={args.username || "Elizabeth"} />',...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`args => <EbayAvatar {...args} aria-label="Signed in as Elizabeth" username={args.username || "Elizabeth"}>
        <EbayAvatarImage src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile.png" />
    </EbayAvatar>`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:'args => <EbayAvatar {...args} aria-label="Signed out" />',...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => <EbayAvatar {...args} aria-label="Signed in as Elizabeth" username={args.username || "Elizabeth"}>
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
    </EbayAvatar>`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`args => <>
        <div>
            <EbayAvatar {...args} aria-label="Signed in as Doggy">
                <EbayAvatarImage src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile2.png" />
            </EbayAvatar>
        </div>

        <div>
            <EbayAvatar {...args} aria-label="Signed in as Doggy">
                <EbayAvatarImage src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile3.png" />
            </EbayAvatar>
        </div>

        <div>
            <EbayAvatar {...args} aria-label="Signed in as Doggy">
                <EbayAvatarImage src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile4.png" />
            </EbayAvatar>
        </div>
    </>`,...b.parameters?.docs?.source}}};export{d as Default,p as SignedOut,b as WithAutoPlacement,u as WithCustomBody,g as WithImage,D as __namedExportsOrder,N as default};
