import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./utils-CkiB0p9L.js";import{$ as ee,A as n,E as te,R as r,at as i,c as ne,ct as re,et as ie,i as a,j as o,n as ae,t as s,w as oe,z as se}from"./dom-BJr4MHiD.js";import{a as ce,i as le,n as ue,r as de,t as fe}from"./evo-icon-promotion-12-9LoydXDB.js";var pe;function c(){return(c=e((()=>{pe=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        evo-signal
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.0.0
    </span>
</h1>

\`\`\`marko
<evo-signal tone="information">Information</evo-signal>
<evo-signal tone="positive" emphasis="strong">
  <@icon>
    <evo-icon-promotion-12/>
  </@icon>
  Positive
</evo-signal>
\`\`\`

## Attributes

| Name       | Type                                                                   | Description                              |
| ---------- | ---------------------------------------------------------------------- | ---------------------------------------- |
| \`tone\`     | \`"neutral" \\| "information" \\| "positive" \\| "warning" \\| "attention"\` | Color tone.Defaults to \`"neutral"\`       |
| \`emphasis\` | \`"default" \\| "strong" \\| "subtle"\`                                    | Visual emphasis. Defaults to \`"default"\` |

## Attribute Tags

| Name    | Description                                                                                                                                                    |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`@icon\` | Optional leading icon rendered before the label. Pass a 12px icon such as \`<evo-icon-promotion-12/>\`; it is \`aria-hidden\` by default, so don't pass \`a11yText\` |

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/graphics-icons-evo-signal)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/graphics-icons-evo-signal)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/evo-signal/examples)
`})))()}function l(){return(l=e((()=>{})))()}function u(){return(u=e((()=>{l()})))()}var d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{a(),u(),d=`<span><!><!></span>`,f=` D%b%l`,p=se(2),m=r(0),h=ie(1,0,e=>m(e,e._.i)),g=h,_=i(13,e=>ne(e.a,[e.f,`signal`,`signal--${e.l}`,e.m!=="default"&&`signal--${e.m}`]),2),v=n(11,_),y=(e,t)=>v(e,t===void 0?`neutral`:t),b=n(12,_),x=(e,t)=>b(e,t===void 0?`default`:t),S=n(5,_),C=re(`ab0`,e=>te(e,`a`)),w=n(10,e=>{oe(e,`a`,e.k,{class:1}),C(e)}),T=ee(1,`<!><!><!>`,`b%`,g),E=n(8,e=>{T(e,+!e.i),h(e)}),D=r(2),O=D,k=(e,t)=>{(({class:t,content:ee,emphasis:n,icon:te,tone:r,...i})=>w(e,i))(t),S(e,t.class),y(e,t.tone),x(e,t.emphasis),E(e,t.icon),O(e,t.content)},A=s(`ab`,d,f,0,k)})))()}function me(e){p(e.a,P(e))}var M,N,P,F,I;function L(){return(L=e((()=>{j(),a(),M=d,N=(e=>`/${e}&`)(f),P=o(`gk0B_O1`,`Signal`),F=n(2,e=>{S(e.a,e.c.class),x(e.a,e.c.emphasis),E(e.a,e.c.icon),y(e.a,e.c.tone),w(e.a,(({class:e,content:t,emphasis:ee,icon:n,tone:te,...r})=>r)(e.c))}),I=s(`mViDIBm`,M,N,me,F)})))()}var R;function z(){return(z=e((()=>{R=`<evo-signal ...input>Signal</evo-signal>
`})))()}function he(e){E(e.a,ae({content:U(e)})),p(e.a,W(e))}var B,V,H,U,W,G,K;function q(){return(q=e((()=>{ce(),j(),a(),B=d,V=(e=>`/${e}&`)(f),H=e=>{ue(e.a),fe(e.a,{})},U=o(`MDZ_Qlj`,de,(e=>`/${e}&`)(le),H),W=o(`nkc4BzI`,`Signal`),G=n(2,e=>{S(e.a,e.c.class),x(e.a,e.c.emphasis),y(e.a,e.c.tone),w(e.a,(({class:e,content:t,emphasis:ee,icon:n,tone:te,...r})=>r)(e.c))}),K=s(`xrA5O3a`,B,V,he,G)})))()}var J;function Y(){return(Y=e((()=>{J=`<evo-signal ...input>
  <@icon>
    <evo-icon-promotion-12/>
  </@icon>
  Signal
</evo-signal>
`})))()}var X,Z,Q,$;function ge(){return(ge=e((()=>{c(),j(),L(),z(),q(),Y(),X={title:`graphics & icons/evo-signal`,component:A,parameters:{docs:{description:{component:pe}}},argTypes:{tone:{type:`string`,options:[`neutral`,`information`,`positive`,`warning`,`attention`],control:`select`,description:`Color tone of the signal`,table:{defaultValue:{summary:`neutral`}}},emphasis:{type:`string`,options:[`default`,`strong`,`subtle`],control:`radio`,description:`Visual emphasis of the signal`,table:{defaultValue:{summary:`default`}}},icon:{description:`Optional leading 12px icon, rendered before the label. See the WithIcon story`,"@":{}},"<span> attributes":{description:"All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through"}}},Z=t(I,R),Q=t(K,J),$=[`Default`,`WithIcon`],Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode)`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`buildExtensionTemplate(WithIconTemplate, WithIconTemplateCode)`,...Q.parameters?.docs?.source}}}})))()}ge();export{Z as Default,Q as WithIcon,$ as __namedExportsOrder,X as default};