import{b as d}from"./utils-DyU2_5R1.js";import{b as n,_ as y,f as a,S as i,m as A}from"./dom-8p8ib85z.js";import{$ as h,a as f,b as T,c as _,d as v,e as S,f as C,g as k,h as w,i as $,j as x,k as I,l as W,m as P,T as H}from"./index-BGj-ol1p.js";import{$ as O,a as j,b as B,c as U}from"./evo-icon-archive-24-D8bZBVU2.js";import"./iframe-BjWUPQEW.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D6p3sHt8.js";const N=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
    <span>
        evo-toggle-button
    </span>
    <span style="font-weight: normal; font-size: medium; margin-bottom: -15px;">
        DS v1.0.0
    </span>
</h1>

Group of toggle buttons.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/buttons-evo-toggle-button)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/buttons-evo-toggle-button)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/evo-toggle-button/examples)
`,q=h,J=(t=>`/${t}&`)(P),V=n("WIB4gO9","Title");function G(t){I(t.a),W(t.a,V(t))}const X=a(2,t=>{f(t.a,t.c.class),T(t.a,t.c.icon),_(t.a,t.c.image),v(t.a,t.c.layoutType),S(t.a,t.c.onClick),C(t.a,t.c.pressed),k(t.a,t.c.pressedChange),w(t.a,t.c.subtitle),$(t.a,t.c.title),x(t.a,(({class:e,content:s,icon:r,image:u,layoutType:o,onClick:M,pressed:E,pressedChange:L,subtitle:D,title:R,...c})=>c)(t.c))}),Y=y("O7Ncomx",q,J,G,X),F=`<evo-toggle-button ...input>
  Title
</evo-toggle-button>
`,K=h,Q=(t=>`/${t}&`)(P),Z=t=>{B(t.a),U(t.a,{})},tt=n("E2lO5W6",j,(t=>`/${t}&`)(O),Z),et=n("c$pzzbq","Subtitle"),nt=n("shRbvyL","Title");function at(t){I(t.a),w(t.a,i({content:et(t)})),T(t.a,i({content:tt(t)})),W(t.a,nt(t))}const ot=a(2,t=>{const e={layoutType:"list",...t.c};f(t.a,e.class),_(t.a,e.image),v(t.a,e.layoutType),S(t.a,e.onClick),C(t.a,e.pressed),k(t.a,e.pressedChange),$(t.a,e.title),x(t.a,(({class:s,content:r,icon:u,image:o,layoutType:M,onClick:E,pressed:L,pressedChange:D,subtitle:R,title:c,...l})=>l)(e))}),lt=y("mluBzYA",K,Q,at,ot),it=`<evo-toggle-button layoutType="list" ...input>
  <@subtitle>Subtitle</@subtitle>
  <@icon>
    <evo-icon-archive-24/>
  </@icon>
  Title
</evo-toggle-button>
`,st=h,rt=(t=>`/${t}&`)(P),ut=n("JX$ojJD","Subtitle"),ct=n("wtydAIh","Title");function pt(t){I(t.a),w(t.a,i({content:ut(t)})),W(t.a,ct(t))}const z=A(6,t=>_(t.a,i({src:t.d,alt:t.e,fillPlacement:t.f})),2),gt=a(3,z),mt=a(4,z),bt=a(5,z),dt=a(7,t=>{const e={layoutType:"list",...t.h};f(t.a,e.class),T(t.a,e.icon),v(t.a,e.layoutType),S(t.a,e.onClick),C(t.a,e.pressed),k(t.a,e.pressedChange),$(t.a,e.title),x(t.a,(({class:s,content:r,icon:u,image:o,layoutType:M,onClick:E,pressed:L,pressedChange:D,subtitle:R,title:c,...l})=>l)(e))}),yt=(t,e)=>{(({alt:s,fillPlacement:r,src:u,...o})=>dt(t,o))(e),gt(t,e.src),mt(t,e.alt),bt(t,e.fillPlacement)},ht=y("NiVIxON",st,rt,pt,yt),ft=`export interface Input {
  src: string;
  alt: string;
  fillPlacement: string;
}
<const/{ src, alt, fillPlacement, ...buttonInput }=input>
<evo-toggle-button layoutType="list" ...buttonInput>
  <@subtitle>Subtitle</@subtitle>
  <@image src=src alt=alt fillPlacement=fillPlacement/>
  Title
</evo-toggle-button>
`,Tt=h,_t=(t=>`/${t}&`)(P),vt=n("Di1xdat","<p>Subtitle 1</p><p>Subtitle 2</p>"),St=n("y6XzwnL","Title");function Ct(t){I(t.a),w(t.a,i({content:vt(t)})),W(t.a,St(t))}const kt=a(2,t=>{const e={layoutType:"list",...t.c};f(t.a,e.class),T(t.a,e.icon),_(t.a,e.image),v(t.a,e.layoutType),S(t.a,e.onClick),C(t.a,e.pressed),k(t.a,e.pressedChange),$(t.a,e.title),x(t.a,(({class:s,content:r,icon:u,image:o,layoutType:M,onClick:E,pressed:L,pressedChange:D,subtitle:R,title:c,...l})=>l)(e))}),wt=y("T2VNJ5_",Tt,_t,Ct,kt),$t=`<evo-toggle-button layoutType="list" ...input>
  <@subtitle>
    <p>Subtitle 1</p>
    <p>Subtitle 2</p>
  </@subtitle>
  Title
</evo-toggle-button>
`,Dt={title:"buttons/evo-toggle-button",component:H,parameters:{docs:{description:{component:N}}},argTypes:{pressed:{controllable:!0,type:"boolean",control:"boolean",description:"Pressed state of the button"},layoutType:{type:"string",options:["minimal","list","gallery"],control:"inline-radio",description:"Enforced layout type of the button. Gallery layout may only be used when there is also an icon or an image.",table:{defaultValue:{summary:"minimal"}}},icon:{description:"An `<evo-icon-*>` to show as the button's icon","@":{"<span> attributes":{description:"All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through"}}},image:{description:"An optional image. May be used when `<@icon>` is _not_ present","@":{src:{type:{name:"string",required:!0},control:"text",description:"The image source URL"},alt:{type:{name:"string",required:!0},control:"text",description:"Alt text for the image"},fillPlacement:{type:"string",control:"text",description:"Position of the image. May be any valid value for [the CSS `background-position` attribute](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/background-position)."}}},subtitle:{description:"An optional subtitle.","@":{"<span> attributes":{description:"All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through"}}},"<button> attributes":{description:"All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through"}}},p=d(Y,F),g=d(lt,it),m=d(ht,ft,{layoutType:"gallery",src:"https://cloudfront.slrlounge.com/wp-content/uploads/2012/07/01-SLRLounge-Holding-Standing-Wrong.jpg",fillPlacement:"top"}),b=d(wt,$t);p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultCode)",...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:"buildExtensionTemplate(WithIconTemplate, WithIconCode)",...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`buildExtensionTemplate(WithImageTemplate, WithImageCode, {
  layoutType: "gallery",
  src: "https://cloudfront.slrlounge.com/wp-content/uploads/2012/07/01-SLRLounge-Holding-Standing-Wrong.jpg",
  fillPlacement: "top"
})`,...m.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:"buildExtensionTemplate(MultilineSubtitleTemplate, MultilineSubtitleCode)",...b.parameters?.docs?.source}}};const Rt=["Default","WithIcon","WithImage","MultilineSubtitle"];export{p as Default,b as MultilineSubtitle,g as WithIcon,m as WithImage,Rt as __namedExportsOrder,Dt as default};
