import{b as g}from"./utils-DyU2_5R1.js";import{_ as l,f as e,R as Z,i as u,l as K,m as i,v as s,N as a,n as R,k as I,e as k,a7 as Q,p as tt,c as w,F as E,I as $,M as D,b as nt,h as et}from"./dom-BCmBFxnG.js";import"./iframe-neL4uaf-.js";import"./preload-helper-PPVm8Dsz.js";const at=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
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
`,_="<span></span>",m=" b",p=()=>{},C="Segmenter"in Intl?new Intl.Segmenter(void 0,{granularity:"grapheme"}):null;function it(t){return C?[...C.segment(t)].length:[...t].length}const st=tt(0,0,0,1),F=i(1,t=>st(t,t._.j,()=>[t._.l])),L=s(0,0,F),ot=t=>{L._(t),A._(t)},A=s(0,0,F),O=k(16,t=>a(t.a,t._._.f),t=>t._._),ct=O,S=s(0,1,t=>a(t.b,t._.e)),rt=t=>{S._(t),P._(t),z._(t)},lt=I(2," <span class=clipped> </span>","bD ",ct),P=s(0,1,t=>lt(t,t._.f?0:1)),z=s(0,1,t=>a(t.a,t._.l)),ut=u("XcD1n5v",t=>Q(t,{onMount:function(){this.inputElement=t.i?.(),this.previousAriaLive=this.inputElement?.getAttribute("aria-live")??null,this.inputElement?.setAttribute("aria-live",t.n)},onUpdate:function(){this.inputElement?.setAttribute("aria-live",t.n)},onDestroy:function(){this.inputElement&&(this.previousAriaLive==null?this.inputElement.removeAttribute("aria-live"):this.inputElement.setAttribute("aria-live",this.previousAriaLive))}})),M=i(14,ut),_t=e(13,M),j=i(12,t=>_t(t,t.l>t.e?"polite":"off")),mt=e(11,t=>{j(t),z(t),A(t)}),q=i(7,t=>mt(t,t.g!==void 0?t.g:it(t.d??""))),d=e(3,q),x=e(6,q),f=e(4,t=>{j(t),S(t)}),b=e(8,M),pt=u("O9wY$IT",t=>K(t,"a")),h=e(10,t=>{Z(t,"a",t.k),pt(t)}),dt=I(0,"<!><!><!>","b%",ot,"<!>/<!><!><!>","%c%b%",rt),v=e(9,t=>{dt(t,t.j?0:1),L(t)}),xt=(t,n)=>{(({a11yText:W,content:X,count:Y,inputRef:J,max:U,text:T,...V})=>h(t,V))(n),d(t,n.text),f(t,n.max),y(t,n.a11yText),x(t,n.count),b(t,n.inputRef),v(t,n.content)},ft=R(O),y=e(5,t=>{P(t),ft(t)}),bt=l("dPA7aen",_,m,p,xt),ht=_,vt=(t=>`/${t}&`)(m);function yt(t){p(t.a)}const gt=e(2,t=>{y(t.a,t.c.a11yText),v(t.a,t.c.content),x(t.a,t.c.count),b(t.a,t.c.inputRef),f(t.a,t.c.max),d(t.a,t.c.text),h(t.a,(({a11yText:n,content:W,count:X,inputRef:Y,max:J,text:U,...T})=>T)(t.c))}),Tt=l("k3g_VZ3",ht,vt,yt,gt),Ct=`import type { Input as CharacterCountInput } from "<evo-character-count>";
export interface Input extends CharacterCountInput {}

<evo-character-count ...input/>
`,Rt=(t=>`<span class=field><label class="field__label field__label--stacked" for=my-input>Field Label</label><span class=field__control><span class=textbox><input type=text aria-describedby="my-input-description my-input-charcount" class=textbox__control id=my-input></span></span><div class="field__description field__description--group"><span id=my-input-description>Brief description</span>${t}</div></span>`)(_),It=(t=>`DbE mDb/${t}&m`)(m),kt=w("aW$IzJl",0),wt=(t,n)=>f(t.b,n),Et=(t,n)=>wt(t,n!==void 0?n:120),B=$(8,t=>{D(t,"a",t.i,Ot(t)),d(t.b,t.i)}),$t=(t,n)=>B(t,n||""),Dt=u("Gz5qCfY",t=>E(t,"a"));function Ft(t){p(t.b),b(t.b,kt(t)),v(t.b),x(t.b),h(t.b,{id:"my-input-charcount"}),Dt(t)}const Lt=(t,n)=>y(t.b,n),At=(t,n)=>{$t(t,n.value),Et(t,n.max),Lt(t,n.a11yText)},Ot=t=>n=>{B(t,n)},St=l("R0S0d0C",Rt,It,Ft,At),Pt=`export interface Input {
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
        id="my-input">
    </span>
  </span>
  <div class="field__description field__description--group">
    <span id="my-input-description">
      Brief description
    </span>
    <evo-character-count
      text=value
      max=max
      a11yText=a11yText
      inputRef=inputRef
      id="my-input-charcount"/>
  </div>
</span>
`,zt=(t=>`<span class=field><label class="field__label field__label--stacked" for=my-input>Field Label</label><span class=field__control><span class=textbox><input type=text aria-describedby=my-input-charcount class=textbox__control id=my-input></span></span>${t}</span>`)(_),Mt=(t=>`DbE m/${t}&l`)(m),N=i(6,t=>{et(t.a,["field__description","field__description--group",t.f>t._.g&&"field__description--attention"]),a(t.d,t._.g-t.f)}),G=k(8,t=>{a(t.c,t._.g),N(t)}),jt=G,qt=e(5,t=>{a(t.b,t.f),N(t)}),Bt=(t,n)=>qt(t,n[0]),Nt=nt("L8hPzPN","<span><!> of <!> (<!> remaining)</span>"," D%c%c%",jt,Bt),Gt=w("iFc6vXL",0),Ht=R(G),Wt=e(6,t=>{f(t.b,t.g),Ht(t)}),Xt=(t,n)=>Wt(t,n!==void 0?n:120),H=$(7,t=>{D(t,"a",t.h,Zt(t)),d(t.b,t.h)}),Yt=(t,n)=>H(t,n||""),Jt=u("FiAWi7E",t=>E(t,"a"));function Ut(t){p(t.b),v(t.b,Nt(t)),y(t.b,null),b(t.b,Gt(t)),x(t.b),h(t.b,{id:"my-input-charcount"}),Jt(t)}const Vt=(t,n)=>{Yt(t,n.value),Xt(t,n.max)},Zt=t=>n=>{H(t,n)},Kt=l("PgPjzMp",zt,Mt,Ut,Vt),Qt=`export interface Input {
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
        id="my-input">
    </span>
  </span>
  <evo-character-count|count|
    text=value
    max=max
    a11yText=null
    inputRef=inputRef
    id="my-input-charcount">
    <span class=[
      "field__description",
      "field__description--group",
      count > max && "field__description--attention",
    ]>
      \${count} of \${max} (\${max - count} remaining)
    </span>
  </evo-character-count>
</span>
`,sn={title:"building blocks/evo-character-count",component:bt,parameters:{docs:{description:{component:at}}},argTypes:{text:{type:"string",control:"text",description:"Text whose grapheme characters are counted. Required unless count is provided."},count:{type:"number",control:"number",description:"Manual count used instead of calculating from text."},max:{type:{name:"number",required:!0},control:"number",description:'Maximum number of characters allowed. The associated input receives `aria-live="polite"` when this value is exceeded.'},a11yText:{type:{name:"string",required:!0},control:"text",description:'Clipped text announced after the count. Often something like "characters used". Pass `null` explicitly only if alternative accessibility information is present.'},inputRef:{control:!1,description:"Native input or textarea getter whose aria-live attribute is managed by the character count."}}},o=g(Tt,Ct,{text:"Hello world",a11yText:"characters remaining",max:120}),c=g(St,Pt),r=g(Kt,Qt,{max:120});o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`buildExtensionTemplate(IsolatedTemplate, IsolatedCode, {
  text: "Hello world",
  a11yText: "characters remaining",
  max: 120
})`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"buildExtensionTemplate(InFieldTemplate, InFieldCode)",...c.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`buildExtensionTemplate(CustomTextTemplate, CustomTextCode, {
  max: 120
})`,...r.parameters?.docs?.source}}};const on=["Default","InField","CustomText"];export{r as CustomText,o as Default,c as InField,on as __namedExportsOrder,sn as default};
