import{b as N}from"./utils-DyU2_5R1.js";import{_ as d,b as a,e as l,X as Ot,w as K,g as xt,a8 as wt,i as E,H as Ft,j as P,f as e,K as Tt,I as et,m as ot,h as Ct,l as Q,u as at,n as s,o as It,k as Lt,v as X,a3 as lt,Z as c,S as Z,a2 as Dt,N as St,a0 as kt}from"./dom-8p8ib85z.js";import"./controllable-select.feat-QgsxkUw8.js";import{a as zt,$ as Nt,b as Et,c as Bt}from"./evo-icon-chevron-down-12-BXFr2edo.js";import{$ as Rt,a as Gt,g as Mt,j as Wt,b as jt,h as Ht,c as Jt,d as At,e as Ut,f as qt,i as Kt,k as Qt,l as Xt,m as Zt}from"./index-DrQeWAm0.js";import"./index-D6p3sHt8.js";import{c as V,b as Y,a as tt,$ as nt}from"./index-Ct-qxVYw.js";import"./iframe-BjWUPQEW.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D0OAQvSv.js";import"./evo-icon-chevron-down-16-DPmlMeiv.js";const Pt=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        evo-select
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.1.0
    </span>
</h1>

The \`<evo-select>\` is used to create a native \`<select>\` form element with default browser styling.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/form-input-evo-select)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/form-input-evo-select)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/evo-select/examples)
`,p=(t=>`<!>${t}<!>`)(At),b=(t=>`b/${t}&b`)(Jt);function Vt(t){return!!t.optgroup}const Yt=E("wlG92AJ",t=>Q(t,"a")),tn=e(3,t=>{lt(t,"a",t.d),Yt(t)}),nn=(t,n)=>en(t,n[0]),en=(t,n)=>(({optgroup:o,...i})=>tn(t,i))(n),on=E("Gq1tVni",t=>Q(t,"a")),st=X(0,1,t=>{lt(t,"a",t._.c),on(t)}),an=st,it=X(0,0,t=>K(t.a,"label",t._.d)),ln=t=>{it._(t),rt._(t)},sn=at(0,"<option></option>"," ",0,nn),rt=X(0,0,t=>sn(t,[t._.e])),rn=Lt(0,"<optgroup></optgroup>"," ",ln,"<option></option>"," ",an),_n=e(2,t=>{cn(t,t.c?.optgroup),dn(t,t.c?.options),rn(t,Vt(t.c)?0:1),st(t)}),un=(t,n)=>_n(t,n[0]),cn=e(3,it),dn=e(4,rt),B=ot(3,t=>Ct(t.a,["select",t._.n==="large"&&"select--large",t._.j&&"select--fluid",t._.k&&"select--borderless",t._.g]),3),_t=l(24,B),pn=E("Qj9wep6",t=>{Ft(t,"b"),P(t.b,"blur",function(n,o){q(t._,!1),t._.p&&t._.p(n,o)}),P(t.b,"focus",function(n,o){q(t._,!0),t._.q&&t._.q(n,o)})}),bn=t=>{_t(t),ut(t),ct(t),dt(t),pt(t),bt(t),ft(t),mt(t),vt(t),gt(t),Et(t.c),Bt(t.c,{}),pn(t)},ut=l(25,t=>Ot(t.a,t._.h)),ct=l(26,t=>K(t.b,"disabled",t._.i)),dt=l(27,B),pt=l(28,B),bt=l(29,B),fn=E("tJo8x_X",t=>Q(t,"b")),ft=l(30,t=>{xt(t,"b",t._.r,{value:1,valueChange:1,"on-blur":1,"on-focus":1,disabled:1,id:1}),fn(t)}),mt=l(31,t=>wt(t,"b",t._.t,kn(t))),vt=l(32,t=>K(t.b,"id",t._.v)),mn=at(1,"<!><!><!>","b%",0,un),gt=l(33,t=>mn(t,[t._.w])),vn=a("NT$aRoM",(t=>`<span><select></select>${t}</span>`)(Nt),(t=>` D b/${t}&l`)(zt),bn),gn=s(gt),hn=e(22,gn),yn=(t,n)=>hn(t,(()=>{const o=[],i={};for(const _ of n){const r=_.optgroup;r?i[r]?i[r].options.push(_):o.push(i[r]={optgroup:r,options:[_]}):o.push(_)}return o})()),f=(t,n)=>yn(t,[...n||[]]),$n=s(mt),ht=It(19,t=>{Zt(t.a,t.t),$n(t)}),yt=ot(5,t=>ht(t,t.d,t.e)),m=e(3,yt),v=e(4,yt),On=s(vt),xn=e(21,t=>{Xt(t.a,t.v),On(t)}),g=(t,n)=>xn(t,n||Tt(t,"Jv")),q=et(23,t=>Qt(t.a,t.x));function h(t){Rt(t.a),Gt(t.a,vn(t)),Mt(t.a),Wt(t.a),jt(t.a),Ht(t.a),q(t,!1)}const y=(t,n)=>qt(t.a,n),wn=s(bt),$=e(13,t=>{Kt(t.a,t.n),wn(t)}),Fn=s(ct),O=e(8,t=>{Ut(t.a,t.i),Fn(t)}),Tn=(t,n)=>{(({borderless:o,class:i,disabled:_,floatingLabel:r,fluid:R,id:G,onBlur:M,onFocus:W,option:j,size:H,style:J,value:A,valueChange:U,...u})=>x(t,u))(n),m(t,n.value),v(t,n.valueChange),w(t,n.class),F(t,n.style),O(t,n.disabled),T(t,n.fluid),C(t,n.borderless),f(t,n.option),y(t,n.floatingLabel),$(t,n.size),g(t,n.id),I(t,n.onBlur),L(t,n.onFocus)},Cn=s(ft),x=e(17,Cn),In=s(_t),w=e(6,In),Ln=s(ut),F=e(7,Ln),Dn=s(dt),T=e(9,Dn),Sn=s(pt),C=e(10,Sn),I=e(15),L=e(16),kn=t=>n=>{ht(t._,n)},zn=d("nJvmKyh",p,b,h,Tn),Nn=(t=>`<!>${t}<!>`)(p),En=(t=>`b/${t}&b`)(b),Bn=a("KR7L6md","Option 3"),Rn=a("tQ$VREr","Option 2"),Gn=a("o3wtYUP","Option 1");function Mn(t){h(t.a),f(t.a,c(c(Z({value:"1",content:Gn(t)}),{value:"2",content:Rn(t)}),{value:"3",content:Bn(t)})),C(t.a),w(t.a),O(t.a),y(t.a),T(t.a),g(t.a),I(t.a),L(t.a),$(t.a),F(t.a),m(t.a),v(t.a),x(t.a,{name:"formFieldName"})}const Wn=d("MvlsofB",Nn,En,Mn),jn=`<evo-select name="formFieldName">
  <@option value="1">
    Option 1
  </@option>
  <@option value="2">
    Option 2
  </@option>
  <@option value="3">
    Option 3
  </@option>
</evo-select>
`,Hn=(t=>`<span class=field><label class="field__label field__label--start" for=select>Option</label>${t}</span>`)(p),Jn=(t=>`Db/${t}&l`)(b),An=[{text:"Select an option",value:""},{text:"option 1",value:"1"},{text:"option 2",value:"2"},{text:"option 3",value:"3"}],Un=Dt(a("D4TZvOU"," "," "),{6(t){St(t.a,t.g)}}),$t=et(3,t=>m(t.a,t.d));function qn(t){h(t.a);let n;kt(An,o=>{n=c(n,{value:o.value,content:Un(t,{6:o?.text})})}),f(t.a,n),v(t.a,Qn(t)),g(t.a,"select"),$t(t,"")}const Kn=e(2,t=>{const n={...t.c,name:"formFieldName"};C(t.a,n.borderless),w(t.a,n.class),O(t.a,n.disabled),y(t.a,n.floatingLabel),T(t.a,n.fluid),I(t.a,n.onBlur),L(t.a,n.onFocus),$(t.a,n.size),F(t.a,n.style),x(t.a,(({borderless:o,class:i,disabled:_,floatingLabel:r,fluid:R,id:G,onBlur:M,onFocus:W,option:j,size:H,style:J,value:A,valueChange:U,...u})=>u)(n))}),Qn=t=>n=>{$t(t,n)},Xn=d("NwZhNBX",Hn,Jn,qn,Kn),Zn=`<let/selected="">
static const options = [
  {
    text: "Select an option",
    value: "",
  },
  {
    text: "option 1",
    value: "1",
  },
  {
    text: "option 2",
    value: "2",
  },
  {
    text: "option 3",
    value: "3",
  },
];

<span class="field">
  <label class="field__label field__label--start" for="select">
    Option
  </label>
  <evo-select ...input value:=selected name="formFieldName" id="select">
    <for|option| of=options>
      <@option value=option.value>
        \${option.text}
      </@option>
    </for>
  </evo-select>
</span>
`,Pn=((t,n,o)=>`<form><div>${t}</div><div style="padding: 1em;">${n}${o}</div></form>`)(p,nt,nt),Vn=((t,n,o)=>`E/${t}&lD/${n}&/${o}&m`)(b,tt,tt),Yn=a("Bcm$wmo","Submit"),te=a("p6SoJca","Reset"),ne=a("gt7h9my","Option 3"),ee=a("bsDF4N_","Option 2"),oe=a("EYaNOlF","Option 1");function ae(t){h(t.a),f(t.a,c(c(Z({value:"1",content:oe(t)}),{value:"2",content:ee(t)}),{value:"3",content:ne(t)})),V(t.b),Y(t.b,{type:"reset",content:te(t)}),V(t.c),Y(t.c,{type:"submit",content:Yn(t)})}const le=e(4,t=>{const n={...t.e,name:"formFieldName"};C(t.a,n.borderless),w(t.a,n.class),O(t.a,n.disabled),y(t.a,n.floatingLabel),T(t.a,n.fluid),g(t.a,n.id),I(t.a,n.onBlur),L(t.a,n.onFocus),$(t.a,n.size),F(t.a,n.style),m(t.a,n.value),v(t.a,n.valueChange),x(t.a,(({borderless:o,class:i,disabled:_,floatingLabel:r,fluid:R,id:G,onBlur:M,onFocus:W,option:j,size:H,style:J,value:A,valueChange:U,...u})=>u)(n))}),se=d("QocjGM1",Pn,Vn,ae,le),ie=`import type { Input as SelectInput } from "<evo-select>";
export type Input = SelectInput;

<form>
  <div>
    <evo-select ...input name="formFieldName">
      <@option value="1">
        Option 1
      </@option>
      <@option value="2">
        Option 2
      </@option>
      <@option value="3">
        Option 3
      </@option>
    </evo-select>
  </div>
  <div style="padding: 1em;">
    <evo-button type="reset">
      Reset
    </evo-button>
    <evo-button type="submit">
      Submit
    </evo-button>
  </div>
</form>
`,re=(t=>`<span class=field><label class="field__label field__label--start field__label--disabled" for=select>Option</label>${t}</span>`)(p),_e=(t=>`Db/${t}&l`)(b),ue=a("JTD1E6b","Option 3"),ce=a("r03kvGg","Option 2"),de=a("JxKnPN$","Option 1");function pe(t){h(t.a),f(t.a,c(c(Z({value:"1",content:de(t)}),{value:"2",content:ce(t)}),{value:"3",content:ue(t)})),g(t.a,"select"),O(t.a,!0)}const be=e(2,t=>{const n={...t.c,name:"formFieldName"};C(t.a,n.borderless),w(t.a,n.class),y(t.a,n.floatingLabel),T(t.a,n.fluid),I(t.a,n.onBlur),L(t.a,n.onFocus),$(t.a,n.size),F(t.a,n.style),m(t.a,n.value),v(t.a,n.valueChange),x(t.a,(({borderless:o,class:i,disabled:_,floatingLabel:r,fluid:R,id:G,onBlur:M,onFocus:W,option:j,size:H,style:J,value:A,valueChange:U,...u})=>u)(n))}),fe=d("u_hrpNE",re,_e,pe,be),me=`import type { Input as SelectInput } from "<evo-select>";
export type Input = SelectInput;

<span class="field">
  <label
    class="field__label field__label--start field__label--disabled"
    for="select">
    Option
  </label>
  <evo-select ...input name="formFieldName" id="select" disabled>
    <@option value="1">
      Option 1
    </@option>
    <@option value="2">
      Option 2
    </@option>
    <@option value="3">
      Option 3
    </@option>
  </evo-select>
</span>
`,Ie={title:"form input/evo-select",component:zn,parameters:{docs:{description:{component:Pt}}},argTypes:{option:{description:"An option in the `<select>`.","@":{optgroup:{type:"string",control:"text",description:"If present, this option will be placed inside an `<optgroup>` tag."},"<option> attributes":{description:"All attributes and event handlers from [the native HTML `<option>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/option) will be passed through"}}},floatingLabel:{type:"string",control:"text",description:"Adds a floating label. For it to float down, the first option must have a nullable value."},size:{type:"string",options:["regular (default)","large"],control:"text",description:"Optionally change size of the component."},borderless:{type:"boolean",control:"boolean",description:"Removes borders of the button"},fluid:{type:"boolean",control:"boolean",description:"Select takes 100% of the container width"},value:{controllable:!0,type:"string",control:"text",description:"Marko [adds `value` to the native `<select>` tag](https://markojs.com/docs/reference/native-tag#select)."},"<select> attributes":{description:"All attributes and event handlers from [the native HTML `<select>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/select) will be passed through"}}},D=N(Wn,jn),S=N(Xn,Zn),k=N(se,ie),z=N(fe,me);D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultCode)",...D.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:"buildExtensionTemplate(WithLabelTemplate, WithLabelCode)",...S.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:"buildExtensionTemplate(InFormTemplate, InFormCode)",...k.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DisabledTemplate, DisabledCode)",...z.parameters?.docs?.source}}};const Le=["Default","WithLabel","InForm","Disabled"];export{D as Default,z as Disabled,k as InForm,S as WithLabel,Le as __namedExportsOrder,Ie as default};
