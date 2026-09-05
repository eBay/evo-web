import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-CK-NQdWx.js";import{t as r}from"./classnames-D09xBJOL.js";import{n as i}from"./iframe-RezWaW69.js";import{n as a,t as o}from"./ebay-icon-avatar-signed-out-C1NQ9ozS.js";function s(e,t){if(t)return t;let n=0,r,i;if(e&&e.length>0)for(i=0;i<e.length;i++)r=e.charCodeAt(i),n=(n<<5)-n+r,n|=0;let a=l.length,o=Math.abs(n)%a;return l[o]}function c(e){return e&&(e<3/4||e<4/3)}var l;function u(){return(u=t((()=>{l=[`teal`,`light-teal`,`green`,`lime`,`yellow`,`orange`,`magenta`,`pink`]})))()}var d,f;function p(){return(p=t((()=>{d=n(),f=(0,d.createContext)(null)})))()}var m,h,g;function _(){return(_=t((()=>{m=e(n()),h=e(r()),u(),p(),a(),g=({size:e,color:t,username:n,children:r,className:i,knownAspectRatio:a,...l})=>{let[u,d]=(0,m.useState)(c(a)?`fit`:`cover`);return m.createElement(f.Provider,{value:{setImagePlacement:d}},m.createElement(`div`,{...l,role:`img`,className:(0,h.default)(`avatar`,i,e&&`avatar--${e}`,u===`fit`&&`avatar--fit`,n&&!r&&`avatar--${s(n,t)}`)},r||n?.charAt(0).toUpperCase()||m.createElement(o,null)))};try{g.displayName=`avatar`,g.__docgenInfo={description:``,displayName:`avatar`,filePath:`/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-avatar/avatar.tsx`,methods:[],props:{size:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-avatar/avatar.tsx`,name:`TypeLiteral`}],description:``,name:`size`,required:!1,tags:{},type:{name:`Size | "32" | "40" | "48" | "56" | "64" | "96" | "128" | undefined`}},username:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-avatar/avatar.tsx`,name:`TypeLiteral`}],description:``,name:`username`,required:!1,tags:{},type:{name:`string | undefined`}},knownAspectRatio:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-avatar/avatar.tsx`,name:`TypeLiteral`}],description:``,name:`knownAspectRatio`,required:!1,tags:{},type:{name:`number | undefined`}}},tags:{}}}catch{}})))()}function v(e,t){if(!e)throw Error(t||`Invariant failed`)}var y,b;function x(){return(x=t((()=>{y=e(n()),p(),u(),b=({onLoad:e,...t})=>{let n=(0,y.useContext)(f);v(n,`EbayAvatarImage needs to be used with EbayAvatar component`);let r=t=>{let r=t.target,i=r.naturalWidth/r.naturalHeight;n.setImagePlacement(c(i)?`fit`:`cover`),e?.(t)};return y.createElement(`img`,{...t,alt:``,onLoad:r})};try{b.displayName=`avatarimage`,b.__docgenInfo={description:``,displayName:`avatarimage`,filePath:`/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-avatar/avatar-image.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}function S(){return(S=t((()=>{_(),x()})))()}var C,w,T,E,D,O,k,A;function j(){return(j=t((()=>{n(),S(),C=i(),w={title:`graphics & icons/ebay-avatar`,component:g,argTypes:{color:{options:[`teal`,`light-teal`,`green`,`lime`,`yellow`,`orange`,`magenta`,`pink`],table:{defaultValue:{summary:`teal`}},control:{type:`select`},description:`The color to color the background. This can be only used in the non icon/image case. This is used simply as an override to the username hash`},size:{options:[`32`,`40`,`48`,`56`,`64`,`96`,`128`],table:{defaultValue:{summary:`48`}},control:{type:`select`},description:`The pixel size of the avatar. Can only be specific sizes`},username:{description:`The username to display. If there is no body, then this will deternmine what the content is. If there is no username passed, then user is signed out. Based on the username, the icon will change colors and show the first letter if there is no user profile pic.`},knownAspectRatio:{control:{type:`number`},description:`Optional, as aspect ratio will be calculated when the image loads on the client. This can be passed to help prevent a flash of incorrectly styled content before the image loads`}},tags:[`autodocs`],parameters:{docs:{description:{component:`## Usage

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
\`\`\``}}}},T=e=>(0,C.jsx)(g,{...e,"aria-label":`Signed in as Elizabeth`,username:e.username||`Elizabeth`}),E=e=>(0,C.jsx)(g,{...e,"aria-label":`Signed in as Elizabeth`,username:e.username||`Elizabeth`,children:(0,C.jsx)(b,{src:`https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile.png`})}),D=e=>(0,C.jsx)(g,{...e,"aria-label":`Signed out`}),O=e=>(0,C.jsx)(g,{...e,"aria-label":`Signed in as Elizabeth`,username:e.username||`Elizabeth`,children:(0,C.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,height:`100%`,width:`100%`,color:`white`,backgroundColor:`black`},children:(0,C.jsx)(`span`,{children:`EB`})})}),k=e=>(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(`div`,{children:(0,C.jsx)(g,{...e,"aria-label":`Signed in as Doggy`,children:(0,C.jsx)(b,{src:`https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile2.png`})})}),(0,C.jsx)(`div`,{children:(0,C.jsx)(g,{...e,"aria-label":`Signed in as Doggy`,children:(0,C.jsx)(b,{src:`https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile3.png`})})}),(0,C.jsx)(`div`,{children:(0,C.jsx)(g,{...e,"aria-label":`Signed in as Doggy`,children:(0,C.jsx)(b,{src:`https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile4.png`})})})]}),A=[`Default`,`WithImage`,`SignedOut`,`WithCustomBody`,`WithAutoPlacement`],T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`args => <EbayAvatar {...args} aria-label="Signed in as Elizabeth" username={args.username || "Elizabeth"} />`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`args => <EbayAvatar {...args} aria-label="Signed in as Elizabeth" username={args.username || "Elizabeth"}>
        <EbayAvatarImage src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile.png" />
    </EbayAvatar>`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`args => <EbayAvatar {...args} aria-label="Signed out" />`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`args => <EbayAvatar {...args} aria-label="Signed in as Elizabeth" username={args.username || "Elizabeth"}>
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
    </EbayAvatar>`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`args => <>
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
    </>`,...k.parameters?.docs?.source}}}})))()}j();export{T as Default,D as SignedOut,k as WithAutoPlacement,O as WithCustomBody,E as WithImage,A as __namedExportsOrder,w as default};