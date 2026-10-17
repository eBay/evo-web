import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./utils-CkiB0p9L.js";import{$ as ee,A as n,E as te,O as ne,R as re,S as r,X as i,_ as a,at as o,c as ie,ct as s,et as c,g as ae,i as l,j as oe,k as u,ot as d,rt as se,t as f,tt as p,ut as m}from"./dom-BJr4MHiD.js";var h;function g(){return(g=e((()=>{h=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
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
`})))()}function ce(e){return y?[...y.segment(e)].length:[...e].length}var _,v,y,le,b,x,ue,S,C,de,w,fe,pe,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,me;function W(){return(W=e((()=>{l(),_=`<span></span>`,v=()=>{},y=`Segmenter`in Intl?new Intl.Segmenter(void 0,{granularity:`grapheme`}):null,le=re(0,0,0,1),b=o(1,e=>le(e,e._.j,()=>[e._.l])),x=c(0,0,b),ue=e=>{x._(e),S._(e)},S=c(0,0,b),C=u(16,e=>m(e.a,e._._.f),e=>e._._,`k0`),de=C,w=c(0,1,e=>m(e.b,e._.e)),fe=e=>{w._(e),T._(e),E._(e)},pe=ee(2,` <span class=clipped> </span>`,`bD `,de),T=c(0,1,e=>pe(e,+!e._.f)),E=c(0,1,e=>m(e.a,e._.l)),D=s(`k1`,e=>se(e,{onMount:function(){this.inputElement=e.i?.(),this.previousAriaLive=this.inputElement?.getAttribute(`aria-live`)??null,this.inputElement?.setAttribute(`aria-live`,e.n)},onUpdate:function(){this.inputElement?.setAttribute(`aria-live`,e.n)},onDestroy:function(){this.inputElement&&(this.previousAriaLive==null?this.inputElement.removeAttribute(`aria-live`):this.inputElement.setAttribute(`aria-live`,this.previousAriaLive))}})),O=o(14,D),k=n(13,O),A=o(12,e=>k(e,e.l>e.e?`polite`:`off`)),j=n(11,e=>{A(e),E(e),S(e)}),M=o(7,e=>j(e,e.g===void 0?ce(e.d??``):e.g)),N=n(3,M),P=n(6,M),F=n(4,e=>{A(e),w(e)}),I=n(8,O),L=s(`k2`,e=>te(e,`a`)),R=n(10,e=>{r(e,`a`,e.k),L(e)}),z=ee(0,`<!><!><!>`,`b%`,ue,`<!>/<!><!><!>`,`%c%b%`,fe),B=n(9,e=>{z(e,+!e.j),x(e)}),V=(e,t)=>{(({a11yText:t,content:ee,count:n,inputRef:te,max:ne,text:re,...r})=>R(e,r))(t),N(e,t.text),F(e,t.max),U(e,t.a11yText),P(e,t.count),I(e,t.inputRef),B(e,t.content)},H=ne(C),U=n(5,e=>{T(e),H(e)}),me=f(`k`,_,` b`,v,V)})))()}function he(e){e.a}var ge,_e,ve,ye;function be(){return(be=e((()=>{W(),l(),ge=_,_e=(e=>`/${e}&`)(` b`),ve=n(2,e=>{U(e.a,e.c.a11yText),B(e.a,e.c.content),P(e.a,e.c.count),I(e.a,e.c.inputRef),F(e.a,e.c.max),N(e.a,e.c.text),R(e.a,(({a11yText:e,content:t,count:ee,inputRef:n,max:te,text:ne,...re})=>re)(e.c))}),ye=f(`k3g_VZ3`,ge,_e,he,ve)})))()}var xe;function Se(){return(Se=e((()=>{xe=`import type { Input as CharacterCountInput } from "<evo-character-count>";
export interface Input extends CharacterCountInput {}

<evo-character-count ...input/>
`})))()}function Ce(e){e.b,I(e.b,Ee(e)),B(e.b),P(e.b),R(e.b,{id:`my-input-charcount`}),Ae(e)}var we,Te,Ee,De,Oe,G,ke,Ae,je,Me,K,Ne;function Pe(){return(Pe=e((()=>{l(),W(),we=(e=>`<span class=field><label class="field__label field__label--stacked" for=my-input>Field Label</label><span class=field__control><span class=textbox><input type=text aria-describedby="my-input-description my-input-charcount" class=textbox__control id=my-input></span></span><div class="field__description field__description--group"><span id=my-input-description>Brief description</span>${e}</div></span>`)(_),Te=(e=>`DbE mDb/${e}&m`)(` b`),Ee=i(`aW$IzJl`,0),De=(e,t)=>F(e.b,t),Oe=(e,t)=>De(e,t===void 0?120:t),G=p(8,e=>{ae(e,`a`,e.i,K(e)),N(e.b,e.i)}),ke=(e,t)=>G(e,t||``),Ae=s(`Gz5qCfY`,e=>a(e,`a`)),je=(e,t)=>U(e.b,t),Me=(e,t)=>{ke(e,t.value),Oe(e,t.max),je(e,t.a11yText)},K=e=>t=>{G(e,t)},d.nAv97Jz=K,Ne=f(`R0S0d0C`,we,Te,Ce,Me)})))()}var Fe;function Ie(){return(Ie=e((()=>{Fe=`export interface Input {
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
`})))()}function Le(e){e.b,B(e.b,Ue(e)),U(e.b,null),I(e.b,We(e)),P(e.b),R(e.b,{id:`my-input-charcount`}),Ye(e)}var Re,ze,q,J,Be,Ve,He,Ue,We,Ge,Ke,qe,Y,Je,Ye,Xe,X,Ze;function Qe(){return(Qe=e((()=>{l(),W(),Re=(e=>`<span class=field><label class="field__label field__label--stacked" for=my-input>Field Label</label><span class=field__control><span class=textbox><input type=text aria-describedby=my-input-charcount class=textbox__control id=my-input></span></span>${e}</span>`)(_),ze=(e=>`DbE m/${e}&l`)(` b`),q=o(6,e=>{ie(e.a,[`field__description`,`field__description--group`,e.f>e._.g&&`field__description--attention`]),m(e.d,e._.g-e.f)}),J=u(8,e=>{m(e.c,e._.g),q(e)},0,`c4xRcSR`),Be=J,Ve=n(5,e=>{m(e.b,e.f),q(e)}),He=(e,t)=>Ve(e,t[0]),Ue=oe(`L8hPzPN`,`<span><!> of <!> (<!> remaining)</span>`,` D%c%c%`,Be,He),We=i(`iFc6vXL`,0),Ge=ne(J),Ke=n(6,e=>{F(e.b,e.g),Ge(e)}),qe=(e,t)=>Ke(e,t===void 0?120:t),Y=p(7,e=>{ae(e,`a`,e.h,X(e)),N(e.b,e.h)}),Je=(e,t)=>Y(e,t||``),Ye=s(`FiAWi7E`,e=>a(e,`a`)),Xe=(e,t)=>{Je(e,t.value),qe(e,t.max)},X=e=>t=>{Y(e,t)},d.vYlNwK0=X,Ze=f(`PgPjzMp`,Re,ze,Le,Xe)})))()}var $e;function et(){return(et=e((()=>{$e=`export interface Input {
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
`})))()}var tt,Z,Q,$,nt;function rt(){return(rt=e((()=>{g(),W(),be(),Se(),Pe(),Ie(),Qe(),et(),tt={title:`building blocks/evo-character-count`,component:me,parameters:{docs:{description:{component:h}}},argTypes:{text:{type:`string`,control:`text`,description:`Text whose grapheme characters are counted. Required unless count is provided.`},count:{type:`number`,control:`number`,description:`Manual count used instead of calculating from text.`},max:{type:{name:`number`,required:!0},control:`number`,description:'Maximum number of characters allowed. The associated input receives `aria-live="polite"` when this value is exceeded.'},a11yText:{type:{name:`string`,required:!0},control:`text`,description:'Clipped text announced after the count. Often something like "characters used". Pass `null` explicitly only if alternative accessibility information is present.'},inputRef:{control:!1,description:`Native input or textarea getter whose aria-live attribute is managed by the character count.`}}},Z=t(ye,xe,{text:`Hello world`,a11yText:`characters remaining`,max:120}),Q=t(Ne,Fe),$=t(Ze,$e,{max:120}),nt=[`Default`,`InField`,`CustomText`],Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`buildExtensionTemplate(IsolatedTemplate, IsolatedCode, {
  text: "Hello world",
  a11yText: "characters remaining",
  max: 120
})`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`buildExtensionTemplate(InFieldTemplate, InFieldCode)`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`buildExtensionTemplate(CustomTextTemplate, CustomTextCode, {
  max: 120
})`,...$.parameters?.docs?.source}}}})))()}rt();export{$ as CustomText,Z as Default,Q as InField,nt as __namedExportsOrder,tt as default};