import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./utils-CkiB0p9L.js";import{$ as n,E as r,L as i,Q as a,c as o,et as ee,i as s,it as c,k as l,lt as te,n as u,rt as ne,s as re,st as d,t as f,w as ie}from"./dom-CUxLGBQ2.js";import{a as ae,i as oe,n as se,r as ce,t as le}from"./evo-icon-Bkms0d_7.js";function ue(e,t){if(t)return t;let n=0,r,i;if(e&&e.length>0)for(i=0;i<e.length;i++)r=e.charCodeAt(i),n=(n<<5)-n+r,n|=0;let a=p.length,o=Math.abs(n)%a;return p[o]}var p;function m(){return(m=e((()=>{p=[`teal`,`light-teal`,`green`,`lime`,`yellow`,`orange`,`magenta`,`pink`]})))()}function de(e){se(e.a)}var h,g,_;function v(){return(v=e((()=>{ae(),h=ce,g=(e=>`/${e}&`)(oe),_=(e,t)=>le(e.a,{...t,_name:`avatar-signed-out`,_type:`icon`,_symbol:`<symbol viewbox="0 0 40 40" id=icon-avatar-signed-out><circle cx=20 cy=20 r=20 fill="var(--color-background-secondary, #F7F7F7)"></circle><circle cx=20 cy=17.5 r=8.333 fill="var(--color-foreground-secondary, #707070)"></circle><path d="M7.67 35.748c2-4.84 6.767-8.248 12.33-8.248s10.33 3.407 12.33 8.249A19.914 19.914 0 0 1 20 40a19.914 19.914 0 0 1-12.33-4.252Z" fill="var(--color-foreground-secondary, #707070)"></path></symbol>`})})))()}function y(){return(y=e((()=>{})))()}function b(){return(b=e((()=>{y()})))()}var x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,fe,pe,me;function J(){return(J=e((()=>{m(),s(),v(),b(),x=`<div role=img></div>`,S=e=>{},C=e=>{de(e.a),_(e.a,{})},w=i(0),T=n(0,1,e=>w(e,e._.j)),E=T,D=n(0,2,e=>te(e.a,e._.i.charAt(0).toUpperCase())),O=D,k=d(`d0`,e=>r(e,`a`)),A=n(0,0,e=>{ie(e,`a`,e._.g,{alt:1,"on-load":1}),k(e)}),j=d(`d1`,e=>ne(e.a,`load`,function(t,n){I(e._,n.naturalWidth/n.naturalHeight),e._.h&&e._.h(t,n)})),M=e=>{A._(e),j(e)},N=(e,t)=>re(e.a,`aria-label`,t===void 0?`avatar`:t),P=c(17,e=>o(e.a,[`avatar`,e.q===`fit`&&`avatar--fit`,e.d,e.e&&`avatar--${e.e}`,e.i&&!e.g&&`avatar--${ue(e.i,e.f)}`]),5),F=l(16,P),I=ee(15,e=>F(e,e.p&&(e.p<3/4||e.p>4/3)?`fit`:`cover`)),L=I,R=l(3,P),z=l(4,P),B=l(5,P),V=a(0,`<img alt>`,` `,M,`<!><!><!>`,`b%`,E,` `,` `,O,h,(e=>`/${e}&`)(g),C),H=c(10,e=>V(e,e.g?0:e.j?1:e.i?2:3),2),U=l(6,e=>{pe(e,e.g?.onLoad),P(e),H(e),A(e)}),W=l(8,e=>{P(e),H(e),D(e)}),G=d(`d2`,e=>r(e,`a`)),K=l(13,e=>{ie(e,`a`,e.n,{"aria-label":1,role:1,class:1}),G(e)}),q=l(9,e=>{H(e),T(e)}),fe=(e,t)=>{K(e,(({a11yText:e,class:t,color:n,content:r,image:i,knownAspectRatio:a,size:o,username:ee,...s})=>s)(t)),R(e,t.class),z(e,t.size),B(e,t.color),U(e,t.image),W(e,t.username),q(e,t.content),L(e,t.knownAspectRatio),N(e,t.a11yText)},pe=l(7),me=f(`d`,x,` b`,S,fe)})))()}var he;function ge(){return(ge=e((()=>{he=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
    <span>
        evo-avatar
    </span>
    <span style="font-weight: normal; font-size: medium; margin-bottom: -15px;">
        DS v1.2.0
    </span>
</h1>

Avatar is a users badge which shows their current state, either signed out or signed in. It can take different colors or a profile pic.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/graphics-icons-evo-avatar)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/graphics-icons-evo-avatar)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/evo-avatar/examples)
`})))()}function _e(e){e.a,N(e.a,`Signed in as Elizabeth`),B(e.a,`teal`),W(e.a,`Elizabeth`)}var Y,ve,ye,be;function xe(){return(xe=e((()=>{J(),s(),Y=x,ve=(e=>`/${e}&`)(` b`),ye=l(2,e=>{R(e.a,e.c.class),q(e.a,e.c.content),U(e.a,e.c.image),L(e.a,e.c.knownAspectRatio),z(e.a,e.c.size),K(e.a,(({a11yText:e,class:t,color:n,content:r,image:i,knownAspectRatio:a,size:o,username:ee,...s})=>s)(e.c))}),be=f(`vMNNVaA`,Y,ve,_e,ye)})))()}var Se;function Ce(){return(Ce=e((()=>{Se=`<evo-avatar
  ...input
  a11yText="Signed in as Elizabeth"
  color="teal"
  username="Elizabeth"
/>
`})))()}function we(e){e.a,U(e.a,u({src:`https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile.png`}))}var Te,Ee,De,Oe;function ke(){return(ke=e((()=>{J(),s(),Te=x,Ee=(e=>`/${e}&`)(` b`),De=l(2,e=>{let t={a11yText:`Signed in as Doggy`,...e.c};N(e.a,t.a11yText),R(e.a,t.class),B(e.a,t.color),q(e.a,t.content),L(e.a,t.knownAspectRatio),z(e.a,t.size),W(e.a,t.username),K(e.a,(({a11yText:e,class:t,color:n,content:r,image:i,knownAspectRatio:a,size:o,username:ee,...s})=>s)(t))}),Oe=f(`gnuZvT6`,Te,Ee,we,De)})))()}var Ae;function je(){return(je=e((()=>{Ae=`<evo-avatar a11yText="Signed in as Doggy" ...input>
  <@image src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile.png"/>
</evo-avatar>
`})))()}function Me(e){e.a,U(e.a,u({src:`https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile2.png`})),e.b,U(e.b,u({src:`https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile3.png`})),e.c,U(e.c,u({src:`https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile4.png`}))}var Ne,Pe,Fe,Ie;function Le(){return(Le=e((()=>{J(),s(),Ne=((e,t,n)=>`<div>${e}</div><div>${t}</div><div>${n}</div>`)(x,x,x),Pe=((e,t,n)=>`D/${e}&lD/${t}&lD/${n}&l`)(` b`,` b`,` b`),Fe=l(4,e=>{let t={a11yText:`Signed in as Doggy`,...e.e};N(e.a,t.a11yText),R(e.a,t.class),B(e.a,t.color),q(e.a,t.content),L(e.a,t.knownAspectRatio),z(e.a,t.size),W(e.a,t.username),K(e.a,(({a11yText:e,class:t,color:n,content:r,image:i,knownAspectRatio:a,size:o,username:ee,...s})=>s)(t));let n={a11yText:`Signed in as Doggy`,...e.e};N(e.b,n.a11yText),R(e.b,n.class),B(e.b,n.color),q(e.b,n.content),L(e.b,n.knownAspectRatio),z(e.b,n.size),W(e.b,n.username),K(e.b,(({a11yText:e,class:t,color:n,content:r,image:i,knownAspectRatio:a,size:o,username:ee,...s})=>s)(n));let r={a11yText:`Signed in as Doggy`,...e.e};N(e.c,r.a11yText),R(e.c,r.class),B(e.c,r.color),q(e.c,r.content),L(e.c,r.knownAspectRatio),z(e.c,r.size),W(e.c,r.username),K(e.c,(({a11yText:e,class:t,color:n,content:r,image:i,knownAspectRatio:a,size:o,username:ee,...s})=>s)(r))}),Ie=f(`Aqu94TA`,Ne,Pe,Me,Fe)})))()}var Re;function ze(){return(ze=e((()=>{Re=`<div>
  <evo-avatar a11yText="Signed in as Doggy" ...input>
    <@image src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile2.png"/>
  </evo-avatar>
</div>
<div>
  <evo-avatar a11yText="Signed in as Doggy" ...input>
    <@image src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile3.png"/>
  </evo-avatar>
</div>
<div>
  <evo-avatar a11yText="Signed in as Doggy" ...input>
    <@image src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile4.png"/>
  </evo-avatar>
</div>
`})))()}function Be(e){e.a}var Ve,He,Ue,We;function Ge(){return(Ge=e((()=>{J(),s(),Ve=x,He=(e=>`/${e}&`)(` b`),Ue=l(2,e=>{let t={a11yText:`Signed out`,...e.c};N(e.a,t.a11yText),R(e.a,t.class),B(e.a,t.color),q(e.a,t.content),U(e.a,t.image),L(e.a,t.knownAspectRatio),z(e.a,t.size),W(e.a,t.username),K(e.a,(({a11yText:e,class:t,color:n,content:r,image:i,knownAspectRatio:a,size:o,username:ee,...s})=>s)(t))}),We=f(`GdmTmI_`,Ve,He,Be,Ue)})))()}var Ke;function qe(){return(qe=e((()=>{Ke=`<evo-avatar a11yText="Signed out" ...input/>
`})))()}var Je,X,Z,Q,$,Ye;function Xe(){return(Xe=e((()=>{J(),ge(),xe(),Ce(),ke(),je(),Le(),ze(),Ge(),qe(),Je={title:`graphics & icons/evo-avatar`,component:me,parameters:{docs:{description:{component:he}}},argTypes:{content:{},color:{type:`string`,options:[`teal`,`light-teal`,`green`,`lime`,`yellow`,`orange`,`magenta`,`pink`],control:`select`,description:`The color to color the background. This can be only used in the non icon/image case. This is used simply as an override to the username hash`},size:{type:`string`,options:[`32`,`40`,`48`,`56`,`64`,`96`,`128`],control:`select`,description:`The pixel size of the avatar. Can only be specific sizes`,table:{defaultValue:{summary:`48`}}},username:{type:`string`,control:`text`,description:`The username to display. If there is no body, then this will determine what the content is. If there is no username passed, then user is signed out. Based on the username, the icon will change colors and show the first letter if there is no user profile pic.`},a11yText:{type:{name:`string`,required:!0},control:`text`,description:'The label to describe the users state as well as their user name. Usually in the format of "Signed in as Bob" or "Signed out". May be set to `null` only if accessibility is provided through other means.'},knownAspectRatio:{type:`number`,control:`number`,description:`Optional, as aspect ratio will be calculated when the image loads on the client. This can be passed to help prevent a flash of incorrectly styled content before the image loads`},image:{description:"An optional image. Should be passed alongside `knownAspectRatio`, but if not aspect ratio will be automatically adjusted after the image loads.","@":{"<img> attributes":{description:"All attributes and event handlers from [the native `<img>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img) will be passed through to `<@image>`, except `alt`"}}},"<div> attributes":{description:"All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through, except `role`"}}},X=t(be,Se,{a11yText:`Profile picture - Elizabeth`,username:`Elizabeth`,color:`teal`}),Z=t(Oe,Ae,{a11yText:`Profile picture - Doggy`,username:`Doggy`}),Q=t(Ie,Re,{a11yText:`Profile picture - Doggy`,username:`Doggy`}),$=t(We,Ke,{a11yText:`Profile picture - Signed out`}),Ye=[`Default`,`WithImage`,`WithAutoPlacement`,`SignedOut`],X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode, {
  a11yText: "Profile picture - Elizabeth",
  username: "Elizabeth",
  color: "teal"
})`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`buildExtensionTemplate(imageTemplate, imageTemplateCode, {
  a11yText: "Profile picture - Doggy",
  username: "Doggy"
})`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`buildExtensionTemplate(autoImageTemplate, autoImageTemplateCode, {
  a11yText: "Profile picture - Doggy",
  username: "Doggy"
})`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`buildExtensionTemplate(signedOutTemplate, signedOutTemplateCode, {
  a11yText: "Profile picture - Signed out"
})`,...$.parameters?.docs?.source}}}})))()}Xe();export{X as Default,$ as SignedOut,Q as WithAutoPlacement,Z as WithImage,Ye as __namedExportsOrder,Je as default};