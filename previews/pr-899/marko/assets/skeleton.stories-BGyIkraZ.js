import{b as w}from"./utils-DyU2_5R1.js";import{a as y,b as n,z as g,f as k,d as _,i as c,r as I,e as b,P as $,_ as r,q as h,v as f}from"./dom-TuxgW4Cw.js";import"./iframe-CqOKIB7R.js";import"./preload-helper-PPVm8Dsz.js";const o="<div role=img></div>",s=" b",O=()=>{},S=(t,e)=>I(t.a,"aria-label",e),l=(t,e)=>S(t,e!==void 0?e:"Loading..."),a=(t,e)=>k(t.a,["skeleton",e]),E=_("GPH9OIk",t=>c(t,"a")),i=n(5,t=>{g(t,"a",t.f,{role:1,"aria-label":1,class:1}),E(t)}),A=(t,e)=>{(({a11yText:u,class:v,...d})=>i(t,d))(e),a(t,e.class),l(t,e.a11yText)},D=y("Fyt6AHW",o,s,O,A),C=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
    <span>
        evo-skeleton
    </span>
    <span style="font-weight: normal; font-size: medium; margin-bottom: -15px;">
        DS v1.0.0 [BETA]
    </span>
</h1>

The Skeletons are simplified versions of layouts to indicate that information has not been fully loaded to improve the perceived performance.

## Examples and Documentation

- [Storybook](https://ebay.github.io/?path=/story/building-blocks-evo-skeleton--default)
- [Storybook Docs](https://ebay.github.io/?path=/story/building-blocks-evo-skeleton--default)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/evo-marko/src/tags/evo-skeleton/examples)
`,H="<div></div>",j=" b",q=_("XC4nU0l",t=>c(t,"a")),z=b(5,t=>{$(t,"a",{class:["skeleton__avatar",t.d],...t.e}),q(t)}),B=n(3,z),J=n(4,z),P="<div></div>",G=" b",M=()=>{},V=_("RJpITzm",t=>c(t,"a")),x=b(6,t=>{$(t,"a",{class:["skeleton__button",t.e&&`skeleton__button--${t.e}`,t.d],...t.f}),V(t)},2),F=n(3,x),U=n(4,x),W=n(5,x),X="<div></div>",Q=" b",Z=(t,e)=>k(t.a,["skeleton__image",e]),K=_("Vtlz6Qb",t=>c(t,"a")),N=n(2,t=>{g(t,"a",t.c,{class:1}),Z(t,t.c.class),K(t)}),Y="<div></div>",tt=" b",et=()=>{},nt=_("qEHqTJo",t=>c(t,"a")),p=b(7,t=>{$(t,"a",{class:["skeleton__text",t.e&&"skeleton__text--multiline",t.d==="large"&&"skeleton__text--large",t.f],...t.g}),nt(t)},3),ot=n(3,p),st=n(4,p),lt=n(5,p),at=n(6,p),it="<div></div>",_t=" b",ct=(t,e)=>k(t.a,["skeleton__textbox",e]),dt=_("yrL0pFE",t=>c(t,"a")),rt=n(2,t=>{g(t,"a",t.c,{class:1}),ct(t,t.c.class),dt(t)}),ut="_grid_ttzhg_2";const vt=((t,e,u,v,d)=>`<div><div>${t}<code>&lt;evo-skeleton-avatar&gt;</code></div><div>${e}<code>&lt;evo-skeleton-button&gt;</code></div><div>${u}<code>&lt;evo-skeleton-image&gt;</code></div><div>${v}<code>&lt;evo-skeleton-text&gt;</code></div><div>${d}<code>&lt;evo-skeleton-textbox&gt;</code></div></div>`)(o,o,o,o,o),mt=((t,e,u,v,d)=>` E/${t}&lD/${e}&lD/${u}&lD/${v}&lD/${d}&m`)(s,s,s,s,s),kt=t=>rt(t.a,{}),pt=r("bSraL2J",it,(t=>`/${t}&`)(_t),kt),gt=t=>N(t.a,{}),bt=r("$PXSS57",X,(t=>`/${t}&`)(Q),gt),$t=t=>{B(t.a),J(t.a,{})},ht=r("j5gPgha",H,(t=>`/${t}&`)(j),$t),T=h(10,t=>ot(t.a,t._.i)),xt=t=>{T(t),L(t),et(t.a),lt(t.a),at(t.a,{})},L=h(11,t=>st(t.a,t._.j)),yt=r("AfG5BkG",Y,(t=>`/${t}&`)(tt),xt),R=h(10,t=>U(t.a,t._.i)),ft=t=>{R(t),M(t.a),F(t.a),W(t.a,{})},zt=r("DSipC6J",P,(t=>`/${t}&`)(G),ft);function Tt(t){k(t.a,ut),l(t.b,"Loading..."),a(t.b),i(t.b,{content:ht(t)}),l(t.c,"Loading..."),a(t.c),i(t.c,{content:zt(t)}),l(t.d,"Loading..."),a(t.d),i(t.d,{content:bt(t)}),l(t.e,"Loading..."),a(t.e),i(t.e,{content:yt(t)}),l(t.f,"Loading..."),a(t.f),i(t.f,{content:pt(t)})}const Lt=(t,e)=>{wt(t,e.size),Ot(t,e.multiline)},Rt=f(R,T),wt=n(8,Rt),It=f(L),Ot=n(9,It),St=y("TZmAR$8",vt,mt,Tt,Lt),Et=`export interface Input {
  a11yText: string;
  size?: "small" | "large";
  multiline: boolean;
}

<const/{ a11yText, size, multiline }=input>

<div class=(styles as any).grid>
  <div>
    <evo-skeleton a11yText="Loading...">
      <evo-skeleton-avatar/>
    </evo-skeleton>
    <code>&lt;evo-skeleton-avatar&gt;</code>
  </div>
  <div>
    <evo-skeleton a11yText="Loading...">
      <evo-skeleton-button size=size/>
    </evo-skeleton>
    <code>&lt;evo-skeleton-button&gt;</code>
  </div>
  <div>
    <evo-skeleton a11yText="Loading...">
      <evo-skeleton-image/>
    </evo-skeleton>
    <code>&lt;evo-skeleton-image&gt;</code>
  </div>
  <div>
    <evo-skeleton a11yText="Loading...">
      <evo-skeleton-text size=size multiline=multiline/>
    </evo-skeleton>
    <code>&lt;evo-skeleton-text&gt;</code>
  </div>
  <div>
    <evo-skeleton a11yText="Loading...">
      <evo-skeleton-textbox/>
    </evo-skeleton>
    <code>&lt;evo-skeleton-textbox&gt;</code>
  </div>
</div>

<style/styles>
  .grid {
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
    justify-content: center;

    & > div {
      width: 15rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      border: 1px solid var(--color-border-strong);
      padding: 1rem;


      & > :first-child {
        height: 10rem;
      }
      & > code {
        text-align: center;
      }
    }
  }
</style>`,jt={title:"building blocks/evo-skeleton",component:D,parameters:{docs:{description:{component:C}}},argTypes:{a11yText:{type:{name:"string",required:!0},control:"text",description:'Localized accessibility text for the component. English default to be overridden is "Loading...". May be set to `null` only if accessibility is provided through other means.'},size:{type:"string",options:["default","small","large"],control:"inline-radio",table:{defaultValue:{summary:"default"}},description:"The Size of the component to render. Applicable for `evo-skeleton-button` and `evo-skeleton-text` only"},multiline:{type:"boolean",control:"boolean",description:"Boolean flag to make `evo-skeleton-text` render more than one line"},"<div> attributes":{description:"All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through"}}},m=w(St,Et);m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"buildExtensionTemplate(AllTemplate, AllCode)",...m.parameters?.docs?.source}}};const qt=["Default"];export{m as Default,qt as __namedExportsOrder,jt as default};
