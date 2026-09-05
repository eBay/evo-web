import{t as A}from"./storybook-code-source-CCz6reEH.js";import{b as E,a as H}from"./utils-DWCsNc5l.js";import{v as b,b as v,_,c as f,d as I,p as U,e as j}from"./defineComponent-B-Bg3Ud2.js";import{_ as q}from"./dynamic-tag-B3Rndxlm.js";import{_ as N}from"./index-CL8ZzwFK.js";import{_ as l}from"./render-tag-B9T2mz-j.js";import{a as r}from"./attr-tag-Dvq4QMvY.js";import"./_commonjsHelpers-Cpj98o6Y.js";/* empty css             */const $=["teal","light-teal","green","lime","yellow","orange","magenta","pink"];function V(t,e){if(e)return e;let a=0,o,n;if(t&&t.length>0)for(n=0;n<t.length;n++)o=t.charCodeAt(n),a=(a<<5)-a+o,a|=0;const m=$.length,k=Math.abs(a)%m;return $[k]}function X(){return'<symbol viewbox="0 0 40 40" id=icon-avatar-signed-out><circle cx=20 cy=20 r=20 fill="var(--color-background-secondary, #F7F7F7)"></circle><circle cx=20 cy=17.5 r=8.333 fill="var(--color-foreground-secondary, #707070)"></circle><path d="M7.67 35.748c2-4.84 6.767-8.248 12.33-8.248s10.33 3.407 12.33 8.249A19.914 19.914 0 0 1 20 40a19.914 19.914 0 0 1-12.33-4.252Z" fill="var(--color-foreground-secondary, #707070)"></path></symbol>'}const x="Xn8N8FI",g=b.t(x);v.r(x,()=>g);const z={};g._=_(function(t,e,a,o,n,m){l(N,{...t,_name:"avatar-signed-out",_size:"",_type:"icon",_themes:X},e,a,"0")},{t:x,i:!0},z);g.Component=f(z,g._);class Z extends Marko.Component{onCreate(e){this.state={imagePlacement:e.knownAspectRatio&&(e.knownAspectRatio<3/4||e.knownAspectRatio>4/3)?"fit":"cover"}}handleImageLoad(e,a){const o=a.naturalWidth/a.naturalHeight;o<3/4||o>4/3?this.state.imagePlacement="fit":this.state.imagePlacement="cover"}}const S="Iv08umm",s=b.t(S);v.r(S,()=>s);const R=Z;s._=_(function(t,e,a,o,n,m){const{a11yText:k,class:W,size:D,color:O,img:T,username:y,renderBody:L,...M}=t;e.be("div",I(U(M),{role:"img","aria-label":k,class:j(["avatar",n.imagePlacement==="fit"&&"avatar--fit",W,D&&`avatar--${D}`,y&&!T&&`avatar--${V(y,O)}`])}),"0",o,null,4),T?e.e("img",I(T,{alt:""}),"1",o,0,4,{onload:a.d("load","handleImageLoad",!1)}):L?q(e,t,null,null,null,null,a,"2"):y?e.t(y.charAt(0).toUpperCase(),o):l(g,{},e,a,"3"),e.ee()},{t:S},R);s.Component=f(R,s._);const G=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
    <span>
        ebay-avatar
    </span>
    <span style="font-weight: normal; font-size: medium; margin-bottom: -15px;">
        DS v1.2.0
    </span>
</h1>

Avatar is a users badge which shows their current state, either signed out or signed in. It can take different colors or a profile pic.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/graphics-icons-ebay-avatar)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/graphics-icons-ebay-avatar)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/ebay-avatar/examples)
`,w="zv1wFpl",p=b.t(w);v.r(w,()=>p);const B={};p._=_(function(t,e,a,o,n,m){l(s,r.i(()=>{r.a("img",{src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile.png"})},{a11yText:"Signed in as Doggy",...t,img:void 0}),e,a,"0")},{t:w,i:!0},B);p.Component=f(B,p._);const J=`<ebay-avatar a11yText="Signed in as Doggy" ...input>
    <@img
        src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile.png"
    />
</ebay-avatar>
`,C="Sca1qCt",d=b.t(C);v.r(C,()=>d);const F={};d._=_(function(t,e,a,o,n,m){e.be("div",null,"0",o,null,0),l(s,r.i(()=>{r.a("img",{src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile2.png"})},{a11yText:"Signed in as Doggy",...t,img:void 0}),e,a,"1"),e.ee(),e.be("div",null,"2",o,null,0),l(s,r.i(()=>{r.a("img",{src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile3.png"})},{a11yText:"Signed in as Doggy",...t,img:void 0}),e,a,"3"),e.ee(),e.be("div",null,"4",o,null,0),l(s,r.i(()=>{r.a("img",{src:"https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile4.png"})},{a11yText:"Signed in as Doggy",...t,img:void 0}),e,a,"5"),e.ee()},{t:C,i:!0},F);d.Component=f(F,d._);const K=`<div>
    <ebay-avatar a11yText="Signed in as Doggy" ...input>
        <@img
            src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile2.png"
        />
    </ebay-avatar>
</div>
<div>
    <ebay-avatar a11yText="Signed in as Doggy" ...input>
        <@img
            src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile3.png"
        />
    </ebay-avatar>
</div>
<div>
    <ebay-avatar a11yText="Signed in as Doggy" ...input>
        <@img
            src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/dog_profile4.png"
        />
    </ebay-avatar>
</div>
`,P=t=>({input:H(t)}),ie={title:"graphics & icons/ebay-avatar",component:s,parameters:{docs:{description:{component:G}}},argTypes:{color:{options:["teal","light-teal","green","lime","yellow","orange","magenta","pink"],type:"select",description:"The color to color the background. This can be only used in the non icon/image case. This is used simply as an override to the username hash"},size:{options:["32","40","48","56","64","96","128"],table:{defaultValue:{summary:"48"}},type:"select",description:"The pixel size of the avatar. Can only be specific sizes"},username:{description:"The username to display. If there is no body, then this will deternmine what the content is. If there is no username passed, then user is signed out. Based on the username, the icon will change colors and show the first letter if there is no user profile pic."},a11yText:{control:{type:"text"},description:'Localized, the label to describe the users state as well as their user name. Usually in the format of "Signed in as Bob" or "Signed out"'},knownAspectRatio:{control:{type:"number"},description:"Optional, as aspect ratio will be calculated when the image loads on the client. This can be passed to help prevent a flash of incorrectly styled content before the image loads"},img:{name:"@img",description:"Image element attributes"}}},i=P.bind({});i.args={a11yText:"Signed in - as Elizabeth",username:"Elizabeth",color:"teal"};i.parameters={docs:{source:{code:A("ebay-avatar",i.args)}}};const u=E(p,J,{a11yText:"Signed in - as Doggy",username:"Doggy"}),h=E(d,K,{a11yText:"Signed in - as Doggy",username:"Doggy"}),c=P.bind({});c.args={a11yText:"Signed out"};c.parameters={docs:{source:{code:A("ebay-avatar",c.args)}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: addRenderBodies(args)
})`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`buildExtensionTemplate(imageTemplate, imageTemplateCode, {
  a11yText: "Signed in - as Doggy",
  username: "Doggy"
})`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`buildExtensionTemplate(autoImageTemplate, autoImageTemplateCode, {
  a11yText: "Signed in - as Doggy",
  username: "Doggy"
})`,...h.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: addRenderBodies(args)
})`,...c.parameters?.docs?.source}}};const ce=["Default","WithImage","WithAutoPlacement","SignedOut"];export{i as Default,c as SignedOut,h as WithAutoPlacement,u as WithImage,ce as __namedExportsOrder,ie as default};
