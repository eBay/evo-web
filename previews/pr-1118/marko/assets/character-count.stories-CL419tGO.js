import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./utils-CkiB0p9L.js";import{$ as n,A as ee,D as te,E as ne,L as r,O as i,Q as a,S as re,Y as o,_ as s,at as ie,et as ae,g as oe,i as c,it as l,k as u,l as se,lt as d,nt as ce,st as f,t as p}from"./dom-CUxLGBQ2.js";var m;function h(){return(h=e((()=>{m=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
    <span>
        evo-character-count
    </span>
    <span style="font-weight: normal; font-size: medium; margin-bottom: -15px;">
        DS v1.0.0
    </span>
</h1>

Displays the number of grapheme characters in text relative to a maximum.

## Examples and Documentation

- [Storybook](https://opensource.ebay.com/evo-web/marko/?path=/story/building-blocks-evo-character-count)
- [Storybook Docs](https://opensource.ebay.com/evo-web/marko/?path=/docs/building-blocks-evo-character-count)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/evo-marko/src/tags/evo-character-count/examples)
`})))()}function le(e){return v?[...v.segment(e)].length:[...e].length}var g,_,v,ue,y,b,de,x,S,fe,C,pe,me,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,he;function U(){return(U=e((()=>{c(),g=`<span></span>`,_=e=>{},v=`Segmenter`in Intl?new Intl.Segmenter(void 0,{granularity:`grapheme`}):null,ue=r(0,0,0,1),y=l(1,e=>ue(e,e._.j,t=>[e._.l])),b=n(0,0,y),de=e=>{b._(e),x._(e)},x=n(0,0,y),S=i(16,e=>d(e.a,e._._.f),e=>e._._,`k0`),fe=S,C=n(0,1,e=>d(e.b,e._.e)),pe=e=>{C._(e),w._(e),T._(e)},me=a(2,` <span class=clipped> </span>`,`bD `,fe),w=n(0,1,e=>me(e,+!e._.f)),T=n(0,1,e=>d(e.a,e._.l)),E=f(`k1`,e=>ce(e,{onMount:function(){this.inputElement=e.i?.(),this.previousAriaLive=this.inputElement?.getAttribute(`aria-live`)??null,this.inputElement?.setAttribute(`aria-live`,e.n)},onUpdate:function(){this.inputElement?.setAttribute(`aria-live`,e.n)},onDestroy:function(){this.inputElement&&(this.previousAriaLive==null?this.inputElement.removeAttribute(`aria-live`):this.inputElement.setAttribute(`aria-live`,this.previousAriaLive))}})),D=l(14,E),O=u(13,D),k=l(12,e=>O(e,e.l>e.e?`polite`:`off`)),A=u(11,e=>{k(e),T(e),x(e)}),j=l(7,e=>A(e,e.g===void 0?le(e.d??``):e.g)),M=u(3,j),N=u(6,j),P=u(4,e=>{k(e),C(e)}),F=u(8,D),I=f(`k2`,e=>ne(e,`a`)),L=u(10,e=>{re(e,`a`,e.k),I(e)}),R=a(0,`<!><!><!>`,`b%`,de,`<!>/<!><!><!>`,`%c%b%`,pe),z=u(9,e=>{R(e,+!e.j),b(e)}),B=(e,t)=>{L(e,(({a11yText:e,content:t,count:n,inputRef:ee,max:te,text:ne,...r})=>r)(t)),M(e,t.text),P(e,t.max),H(e,t.a11yText),N(e,t.count),F(e,t.inputRef),z(e,t.content)},V=te(S),H=u(5,e=>{w(e),V(e)}),he=p(`k`,g,` b`,_,B)})))()}function ge(e){e.a}var _e,ve,ye,be;function xe(){return(xe=e((()=>{U(),c(),_e=g,ve=(e=>`/${e}&`)(` b`),ye=u(2,e=>{H(e.a,e.c.a11yText),z(e.a,e.c.content),N(e.a,e.c.count),F(e.a,e.c.inputRef),P(e.a,e.c.max),M(e.a,e.c.text),L(e.a,(({a11yText:e,content:t,count:n,inputRef:ee,max:te,text:ne,...r})=>r)(e.c))}),be=p(`$1J7K23`,_e,ve,ge,ye)})))()}var Se;function Ce(){return(Ce=e((()=>{Se=`import type { Input as CharacterCountInput } from "<evo-character-count>";
export interface Input extends CharacterCountInput {}

<evo-character-count ...input/>
`})))()}function we(e){e.b,F(e.b,De(e)),z(e.b),N(e.b),L(e.b,{id:`my-input-charcount`}),Ae(e)}var Te,Ee,De,Oe,W,ke,Ae,je,Me,G,Ne;function Pe(){return(Pe=e((()=>{c(),U(),Te=(e=>`<span class=field><label class="field__label field__label--stacked" for=my-input>Field Label</label><span class=field__control><span class=textbox><input type=text aria-describedby="my-input-description my-input-charcount" class=textbox__control id=my-input></span></span><div class="field__description field__description--group"><span id=my-input-description>Brief description</span>${e}</div></span>`)(g),Ee=(e=>`DbE mDb/${e}&m`)(` b`),De=o(`aW$IzJl`,0),Oe=(e,t)=>P(e.b,t===void 0?120:t),W=ae(8,e=>{oe(e,`a`,e.i,G(e)),M(e.b,e.i)}),ke=(e,t)=>W(e,t||``),Ae=f(`vyyzrkY`,e=>s(e,`a`)),je=(e,t)=>H(e.b,t),Me=(e,t)=>{ke(e,t.value),Oe(e,t.max),je(e,t.a11yText)},G=e=>t=>W(e,t),ie.czYhZOz=G,Ne=p(`R0S0d0C`,Te,Ee,we,Me)})))()}var Fe;function Ie(){return(Ie=e((()=>{Fe=`export interface Input {
  value?: string;
  max?: number;
  a11yText?: string | null;
}
<const/{ max = 120, a11yText }=input>
<let/value=input.value || "">

<span class="field">
  <label class="field__label field__label--stacked" for="my-input">
    Field Label
  </label>
  <span class="field__control">
    <span class="textbox">
      <input/inputRef
        value:=value
        type="text"
        aria-describedby="my-input-description my-input-charcount"
        class="textbox__control"
        id="my-input"
      >
    </span>
  </span>
  <div class="field__description field__description--group">
    <span id="my-input-description">Brief description</span>
    <evo-character-count
      text=value
      max=max
      a11yText=a11yText
      inputRef=inputRef
      id="my-input-charcount"
    />
  </div>
</span>
`})))()}function Le(e){e.b,z(e.b,Ue(e)),H(e.b,null),F(e.b,We(e)),N(e.b),L(e.b,{id:`my-input-charcount`}),Je(e)}var Re,ze,K,q,Be,Ve,He,Ue,We,Ge,Ke,J,Y,qe,Je,Ye,X,Xe;function Ze(){return(Ze=e((()=>{c(),U(),Re=(e=>`<span class=field><label class="field__label field__label--stacked" for=my-input>Field Label</label><span class=field__control><span class=textbox><input type=text aria-describedby=my-input-charcount class=textbox__control id=my-input></span></span>${e}</span>`)(g),ze=(e=>`DbE m/${e}&l`)(` b`),K=l(6,e=>{se(e.a,`field__description--attention`,e.f>e._.g),d(e.d,e._.g-e.f)}),q=i(8,e=>{d(e.c,e._.g),K(e)},0,`UIizEMi`),Be=q,Ve=u(5,e=>{d(e.b,e.f),K(e)}),He=(e,t)=>Ve(e,t[0]),Ue=ee(`L8hPzPN`,`<span class="field__description field__description--group"><!> of <!> (<!> remaining)</span>`,` D%c%c%`,Be,He),We=o(`iFc6vXL`,0),Ge=te(q),Ke=u(6,e=>{P(e.b,e.g),Ge(e)}),J=(e,t)=>Ke(e,t===void 0?120:t),Y=ae(7,e=>{oe(e,`a`,e.h,X(e)),M(e.b,e.h)}),qe=(e,t)=>Y(e,t||``),Je=f(`FiAWi7E`,e=>s(e,`a`)),Ye=(e,t)=>{qe(e,t.value),J(e,t.max)},X=e=>t=>Y(e,t),ie.vYlNwK0=X,Xe=p(`EfgsoRp`,Re,ze,Le,Ye)})))()}var Qe;function $e(){return($e=e((()=>{Qe=`export interface Input {
  value?: string;
  max?: number;
}
<const/{ max = 120 }=input>
<let/value=input.value || "">

<span class="field">
  <label class="field__label field__label--stacked" for="my-input">
    Field Label
  </label>
  <span class="field__control">
    <span class="textbox">
      <input/inputRef
        value:=value
        type="text"
        aria-describedby="my-input-charcount"
        class="textbox__control"
        id="my-input"
      >
    </span>
  </span>
  <evo-character-count|count|
    text=value
    max=max
    a11yText=null
    inputRef=inputRef
    id="my-input-charcount"
  >
    <span class=[
      "field__description",
      "field__description--group",
      count > max && "field__description--attention",
    ]>
      \${count} of \${max} (\${max - count} remaining)
    </span>
  </evo-character-count>
</span>
`})))()}var et,Z,Q,$,tt;function nt(){return(nt=e((()=>{h(),U(),xe(),Ce(),Pe(),Ie(),Ze(),$e(),et={title:`building blocks/evo-character-count`,component:he,parameters:{docs:{description:{component:m}}},argTypes:{text:{type:`string`,control:`text`,description:`Text whose grapheme characters are counted. Required unless count is provided.`},count:{type:`number`,control:`number`,description:`Manual count used instead of calculating from text.`},max:{type:{name:`number`,required:!0},control:`number`,description:'Maximum number of characters allowed. The associated input receives `aria-live="polite"` when this value is exceeded.'},a11yText:{type:{name:`string`,required:!0},control:`text`,description:'Clipped text announced after the count. Often something like "characters used". Pass `null` explicitly only if alternative accessibility information is present.'},inputRef:{control:!1,description:`Native input or textarea getter whose aria-live attribute is managed by the character count.`}}},Z=t(be,Se,{text:`Hello world`,a11yText:`characters remaining`,max:120}),Q=t(Ne,Fe),$=t(Xe,Qe,{max:120}),tt=[`Default`,`InField`,`CustomText`],Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`buildExtensionTemplate(IsolatedTemplate, IsolatedCode, {
  text: "Hello world",
  a11yText: "characters remaining",
  max: 120
})`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`buildExtensionTemplate(InFieldTemplate, InFieldCode)`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`buildExtensionTemplate(CustomTextTemplate, CustomTextCode, {
  max: 120
})`,...$.parameters?.docs?.source}}}})))()}nt();export{$ as CustomText,Z as Default,Q as InField,tt as __namedExportsOrder,et as default};