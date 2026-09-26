import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./utils-CkiB0p9L.js";import{$ as ee,D as n,K as te,L as ne,M as re,O as r,T as ie,X as i,Y as a,Z as o,_ as ae,at as s,c as oe,g as se,i as c,k as l,nt as ce,ot as u,t as d,tt as f,x as le}from"./dom-CNWckxLY.js";var p;function m(){return(m=e((()=>{p=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
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
`})))()}function ue(e){return _?[..._.segment(e)].length:[...e].length}var h,g,_,de,v,y,fe,b,x,pe,S,me,he,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H;function U(){return(U=e((()=>{c(),h=`<span></span>`,g=()=>{},_=`Segmenter`in Intl?new Intl.Segmenter(void 0,{granularity:`grapheme`}):null,de=ne(0,0,0,1),v=f(1,e=>de(e,e._.j,()=>[e._.l])),y=i(0,0,v),fe=e=>{y._(e),b._(e)},b=i(0,0,v),x=r(16,e=>u(e.a,e._._.f),e=>e._._),pe=x,S=i(0,1,e=>u(e.b,e._.e)),me=e=>{S._(e),C._(e),w._(e)},he=a(2,` <span class=clipped> </span>`,`bD `,pe),C=i(0,1,e=>he(e,+!e._.f)),w=i(0,1,e=>u(e.a,e._.l)),T=s(`k0`,e=>ee(e,{onMount:function(){this.inputElement=e.i?.(),this.previousAriaLive=this.inputElement?.getAttribute(`aria-live`)??null,this.inputElement?.setAttribute(`aria-live`,e.n)},onUpdate:function(){this.inputElement?.setAttribute(`aria-live`,e.n)},onDestroy:function(){this.inputElement&&(this.previousAriaLive==null?this.inputElement.removeAttribute(`aria-live`):this.inputElement.setAttribute(`aria-live`,this.previousAriaLive))}})),E=f(14,T),D=l(13,E),O=f(12,e=>D(e,e.l>e.e?`polite`:`off`)),k=l(11,e=>{O(e),w(e),b(e)}),A=f(7,e=>k(e,e.g===void 0?ue(e.d??``):e.g)),j=l(3,A),M=l(6,A),N=l(4,e=>{O(e),S(e)}),P=l(8,E),F=s(`k1`,e=>ie(e,`a`)),I=l(10,e=>{le(e,`a`,e.k),F(e)}),L=a(0,`<!><!><!>`,`b%`,fe,`<!>/<!><!><!>`,`%c%b%`,me),R=l(9,e=>{L(e,+!e.j),y(e)}),z=(e,t)=>{(({a11yText:t,content:ee,count:n,inputRef:te,max:ne,text:re,...r})=>I(e,r))(t),j(e,t.text),N(e,t.max),V(e,t.a11yText),M(e,t.count),P(e,t.inputRef),R(e,t.content)},B=n(x),V=l(5,e=>{C(e),B(e)}),H=d(`k`,h,` b`,g,z)})))()}function ge(e){e.a}var _e,ve,ye,be;function xe(){return(xe=e((()=>{U(),c(),_e=h,ve=(e=>`/${e}&`)(` b`),ye=l(2,e=>{V(e.a,e.c.a11yText),R(e.a,e.c.content),M(e.a,e.c.count),P(e.a,e.c.inputRef),N(e.a,e.c.max),j(e.a,e.c.text),I(e.a,(({a11yText:e,content:t,count:ee,inputRef:n,max:te,text:ne,...re})=>re)(e.c))}),be=d(`k3g_VZ3`,_e,ve,ge,ye)})))()}var Se;function Ce(){return(Ce=e((()=>{Se=`import type { Input as CharacterCountInput } from "<evo-character-count>";
export interface Input extends CharacterCountInput {}

<evo-character-count ...input/>
`})))()}function we(e){e.b,P(e.b,De(e)),R(e.b),M(e.b),I(e.b,{id:`my-input-charcount`}),je(e)}var Te,Ee,De,Oe,ke,W,Ae,je,Me,Ne,G,Pe;function Fe(){return(Fe=e((()=>{c(),U(),Te=(e=>`<span class=field><label class="field__label field__label--stacked" for=my-input>Field Label</label><span class=field__control><span class=textbox><input type=text aria-describedby="my-input-description my-input-charcount" class=textbox__control id=my-input></span></span><div class="field__description field__description--group"><span id=my-input-description>Brief description</span>${e}</div></span>`)(h),Ee=(e=>`DbE mDb/${e}&m`)(` b`),De=te(`aW$IzJl`,0),Oe=(e,t)=>N(e.b,t),ke=(e,t)=>Oe(e,t===void 0?120:t),W=o(8,e=>{se(e,`a`,e.i,G(e)),j(e.b,e.i)}),Ae=(e,t)=>W(e,t||``),je=s(`Gz5qCfY`,e=>ae(e,`a`)),Me=(e,t)=>V(e.b,t),Ne=(e,t)=>{Ae(e,t.value),ke(e,t.max),Me(e,t.a11yText)},G=e=>t=>{W(e,t)},ce(`nAv97Jz`,G),Pe=d(`R0S0d0C`,Te,Ee,we,Ne)})))()}var Ie;function Le(){return(Le=e((()=>{Ie=`export interface Input {
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
`})))()}function Re(e){e.b,R(e.b,We(e)),V(e.b,null),P(e.b,Ge(e)),M(e.b),I(e.b,{id:`my-input-charcount`}),Xe(e)}var ze,Be,K,q,Ve,He,Ue,We,Ge,Ke,qe,Je,J,Ye,Xe,Ze,Y,X;function Qe(){return(Qe=e((()=>{c(),U(),ze=(e=>`<span class=field><label class="field__label field__label--stacked" for=my-input>Field Label</label><span class=field__control><span class=textbox><input type=text aria-describedby=my-input-charcount class=textbox__control id=my-input></span></span>${e}</span>`)(h),Be=(e=>`DbE m/${e}&l`)(` b`),K=f(6,e=>{oe(e.a,[`field__description`,`field__description--group`,e.f>e._.g&&`field__description--attention`]),u(e.d,e._.g-e.f)}),q=r(8,e=>{u(e.c,e._.g),K(e)}),Ve=q,He=l(5,e=>{u(e.b,e.f),K(e)}),Ue=(e,t)=>He(e,t[0]),We=re(`L8hPzPN`,`<span><!> of <!> (<!> remaining)</span>`,` D%c%c%`,Ve,Ue),Ge=te(`iFc6vXL`,0),Ke=n(q),qe=l(6,e=>{N(e.b,e.g),Ke(e)}),Je=(e,t)=>qe(e,t===void 0?120:t),J=o(7,e=>{se(e,`a`,e.h,Y(e)),j(e.b,e.h)}),Ye=(e,t)=>J(e,t||``),Xe=s(`FiAWi7E`,e=>ae(e,`a`)),Ze=(e,t)=>{Ye(e,t.value),Je(e,t.max)},Y=e=>t=>{J(e,t)},ce(`vYlNwK0`,Y),X=d(`PgPjzMp`,ze,Be,Re,Ze)})))()}var $e;function et(){return(et=e((()=>{$e=`export interface Input {
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
`})))()}var tt,Z,Q,$,nt;function rt(){return(rt=e((()=>{m(),U(),xe(),Ce(),Fe(),Le(),Qe(),et(),tt={title:`building blocks/evo-character-count`,component:H,parameters:{docs:{description:{component:p}}},argTypes:{text:{type:`string`,control:`text`,description:`Text whose grapheme characters are counted. Required unless count is provided.`},count:{type:`number`,control:`number`,description:`Manual count used instead of calculating from text.`},max:{type:{name:`number`,required:!0},control:`number`,description:'Maximum number of characters allowed. The associated input receives `aria-live="polite"` when this value is exceeded.'},a11yText:{type:{name:`string`,required:!0},control:`text`,description:'Clipped text announced after the count. Often something like "characters used". Pass `null` explicitly only if alternative accessibility information is present.'},inputRef:{control:!1,description:`Native input or textarea getter whose aria-live attribute is managed by the character count.`}}},Z=t(be,Se,{text:`Hello world`,a11yText:`characters remaining`,max:120}),Q=t(Pe,Ie),$=t(X,$e,{max:120}),nt=[`Default`,`InField`,`CustomText`],Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`buildExtensionTemplate(IsolatedTemplate, IsolatedCode, {
  text: "Hello world",
  a11yText: "characters remaining",
  max: 120
})`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`buildExtensionTemplate(InFieldTemplate, InFieldCode)`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`buildExtensionTemplate(CustomTextTemplate, CustomTextCode, {
  max: 120
})`,...$.parameters?.docs?.source}}}})))()}rt();export{$ as CustomText,Z as Default,Q as InField,nt as __namedExportsOrder,tt as default};