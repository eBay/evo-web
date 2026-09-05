import{b as z}from"./utils-DyU2_5R1.js";import{_ as d,b as a,e as l,X as Ot,f as e,K as $t,I as et,m as q,h as xt,R as Ft,u as ot,n as s,i as K,l as Z,o as wt,k as It,v as P,a3 as at,w as Tt,A as Ct,Z as c,S as Q,a2 as Lt,N as Dt,a0 as St}from"./dom-DzaaZrG-.js";import"./controllable-select.feat-CEdaIxhF.js";import{a as Rt,$ as kt,b as zt,c as Bt}from"./evo-icon-chevron-down-12-DnySSq2o.js";import{$ as Nt,a as Et,g as Gt,j as Mt,b as Wt,h as At,c as Ht,d as Jt,e as jt,f as Ut,i as qt,k as Kt,l as Zt,m as Pt}from"./index-D3J9ryEF.js";import"./index-CSnbFevZ.js";import{c as X,b as Y,a as tt,$ as nt}from"./index-D9Xx_KeA.js";import"./iframe-W1YmnRsb.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cqmv-JVY.js";import"./evo-icon-chevron-down-16-CYThcKDz.js";const Qt=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`,p=(t=>`<!>${t}<!>`)(Jt),b=(t=>`b/${t}&b`)(Ht);function Vt(t){return!!t.optgroup}const Xt=K("wlG92AJ",t=>Z(t,"a")),Yt=e(3,t=>{at(t,"a",t.d),Xt(t)}),tn=(t,n)=>nn(t,n[0]),nn=(t,n)=>(({optgroup:o,...i})=>Yt(t,i))(n),en=K("Gq1tVni",t=>Z(t,"a")),lt=P(0,1,t=>{at(t,"a",t._.c),en(t)}),on=lt,st=P(0,0,t=>Tt(t.a,"label",t._.d)),an=t=>{st._(t),it._(t)},ln=ot(0,"<option></option>"," ",0,tn),it=P(0,0,t=>ln(t,[t._.e])),sn=It(0,"<optgroup></optgroup>"," ",an,"<option></option>"," ",on),rn=e(2,t=>{un(t,t.c?.optgroup),cn(t,t.c?.options),sn(t,Vt(t.c)?0:1),lt(t)}),_n=(t,n)=>rn(t,n[0]),un=e(3,st),cn=e(4,it),B=q(3,t=>xt(t.a,["select",t._.n==="large"&&"select--large",t._.j&&"select--fluid",t._.k&&"select--borderless",t._.g]),3),rt=l(24,B),dn=t=>{rt(t),_t(t),ut(t),ct(t),dt(t),pt(t),bt(t),mt(t),ft(t),vt(t),zt(t.c),Bt(t.c,{})},_t=l(25,t=>Ot(t.a,t._.h)),pn=K("bs1IB6O",t=>Z(t,"b")),N=q(4,t=>{Ft(t,"b",{onBlur:Rn(t),onFocus:Sn(t),disabled:t._.i,id:t._.v,value:t._.t,valueChange:Dn(t),...t._.r},Ct),pn(t)},3),ut=l(26,N),ct=l(27,B),dt=l(28,B),pt=l(29,B),bt=l(30,N),mt=l(31,N),ft=l(32,N),bn=ot(1,"<!><!><!>","b%",0,_n),vt=l(33,t=>bn(t,[t._.w])),mn=a("NT$aRoM",(t=>`<span><select></select>${t}</span>`)(kt),(t=>` D b/${t}&l`)(Rt),dn),fn=s(vt),vn=e(22,fn),gn=(t,n)=>vn(t,(()=>{const o=[],i={};for(const _ of n){const r=_.optgroup;r?i[r]?i[r].options.push(_):o.push(i[r]={optgroup:r,options:[_]}):o.push(_)}return o})()),m=(t,n)=>gn(t,[...n||[]]),hn=s(mt),gt=wt(19,t=>{Pt(t.a,t.t),hn(t)}),ht=q(5,t=>gt(t,t.d,t.e)),f=e(3,ht),v=e(4,ht),yn=s(ft),On=e(21,t=>{Zt(t.a,t.v),yn(t)}),g=(t,n)=>On(t,n||$t(t,"Jv")),V=et(23,t=>Kt(t.a,t.x));function h(t){Nt(t.a),Et(t.a,mn(t)),Gt(t.a),Mt(t.a),Wt(t.a),At(t.a),V(t,!1)}const y=(t,n)=>Ut(t.a,n),$n=s(pt),O=e(13,t=>{qt(t.a,t.n),$n(t)}),xn=s(ut),$=e(8,t=>{jt(t.a,t.i),xn(t)}),Fn=(t,n)=>{(({borderless:o,class:i,disabled:_,floatingLabel:r,fluid:E,id:G,onBlur:M,onFocus:W,option:A,size:H,style:J,value:j,valueChange:U,...u})=>x(t,u))(n),f(t,n.value),v(t,n.valueChange),F(t,n.class),w(t,n.style),$(t,n.disabled),I(t,n.fluid),T(t,n.borderless),m(t,n.option),y(t,n.floatingLabel),O(t,n.size),g(t,n.id),C(t,n.onBlur),L(t,n.onFocus)},wn=s(bt),x=e(17,wn),In=s(rt),F=e(6,In),Tn=s(_t),w=e(7,Tn),Cn=s(ct),I=e(9,Cn),Ln=s(dt),T=e(10,Ln),C=e(15),L=e(16),Dn=t=>n=>{gt(t._,n)},Sn=t=>function(n,o){V(t._,!0),t._.q&&t._.q(n,o)},Rn=t=>function(n,o){V(t._,!1),t._.p&&t._.p(n,o)},kn=d("nJvmKyh",p,b,h,Fn),zn=(t=>`<!>${t}<!>`)(p),Bn=(t=>`b/${t}&b`)(b),Nn=a("KR7L6md","Option 3"),En=a("tQ$VREr","Option 2"),Gn=a("o3wtYUP","Option 1");function Mn(t){h(t.a),m(t.a,c(c(Q({value:"1",content:Gn(t)}),{value:"2",content:En(t)}),{value:"3",content:Nn(t)})),T(t.a),F(t.a),$(t.a),y(t.a),I(t.a),g(t.a),C(t.a),L(t.a),O(t.a),w(t.a),f(t.a),v(t.a),x(t.a,{name:"formFieldName"})}const Wn=d("MvlsofB",zn,Bn,Mn),An=`<evo-select name="formFieldName">
  <@option value="1">Option 1</@option>
  <@option value="2">Option 2</@option>
  <@option value="3">Option 3</@option>
</evo-select>
`,Hn=(t=>`<span class=field><label class="field__label field__label--start" for=select>Option</label>${t}</span>`)(p),Jn=(t=>`Db/${t}&l`)(b),jn=[{text:"Select an option",value:""},{text:"option 1",value:"1"},{text:"option 2",value:"2"},{text:"option 3",value:"3"}],Un=Lt(a("D4TZvOU"," "," "),{6(t){Dt(t.a,t.g)}}),yt=et(3,t=>f(t.a,t.d));function qn(t){h(t.a);let n;St(jn,o=>{n=c(n,{value:o.value,content:Un(t,{6:o?.text})})}),m(t.a,n),v(t.a,Zn(t)),g(t.a,"select"),yt(t,"")}const Kn=e(2,t=>{const n={...t.c,name:"formFieldName"};T(t.a,n.borderless),F(t.a,n.class),$(t.a,n.disabled),y(t.a,n.floatingLabel),I(t.a,n.fluid),C(t.a,n.onBlur),L(t.a,n.onFocus),O(t.a,n.size),w(t.a,n.style),x(t.a,(({borderless:o,class:i,disabled:_,floatingLabel:r,fluid:E,id:G,onBlur:M,onFocus:W,option:A,size:H,style:J,value:j,valueChange:U,...u})=>u)(n))}),Zn=t=>n=>{yt(t,n)},Pn=d("NwZhNBX",Hn,Jn,qn,Kn),Qn=`<let/selected="">
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
  <label class="field__label field__label--start" for="select">Option</label>
  <evo-select ...input value:=selected name="formFieldName" id="select">
    <for|option| of=options>
      <@option value=option.value>\${option.text}</@option>
    </for>
  </evo-select>
</span>
`,Vn=((t,n,o)=>`<form><div>${t}</div><div style="padding: 1em;">${n}${o}</div></form>`)(p,nt,nt),Xn=((t,n,o)=>`E/${t}&lD/${n}&/${o}&m`)(b,tt,tt),Yn=a("Bcm$wmo","Submit"),te=a("p6SoJca","Reset"),ne=a("gt7h9my","Option 3"),ee=a("bsDF4N_","Option 2"),oe=a("EYaNOlF","Option 1");function ae(t){h(t.a),m(t.a,c(c(Q({value:"1",content:oe(t)}),{value:"2",content:ee(t)}),{value:"3",content:ne(t)})),X(t.b),Y(t.b,{type:"reset",content:te(t)}),X(t.c),Y(t.c,{type:"submit",content:Yn(t)})}const le=e(4,t=>{const n={...t.e,name:"formFieldName"};T(t.a,n.borderless),F(t.a,n.class),$(t.a,n.disabled),y(t.a,n.floatingLabel),I(t.a,n.fluid),g(t.a,n.id),C(t.a,n.onBlur),L(t.a,n.onFocus),O(t.a,n.size),w(t.a,n.style),f(t.a,n.value),v(t.a,n.valueChange),x(t.a,(({borderless:o,class:i,disabled:_,floatingLabel:r,fluid:E,id:G,onBlur:M,onFocus:W,option:A,size:H,style:J,value:j,valueChange:U,...u})=>u)(n))}),se=d("QocjGM1",Vn,Xn,ae,le),ie=`import type { Input as SelectInput } from "<evo-select>";
export type Input = SelectInput;

<form>
  <div>
    <evo-select ...input name="formFieldName">
      <@option value="1">Option 1</@option>
      <@option value="2">Option 2</@option>
      <@option value="3">Option 3</@option>
    </evo-select>
  </div>
  <div style="padding: 1em;">
    <evo-button type="reset">Reset</evo-button>
    <evo-button type="submit">Submit</evo-button>
  </div>
</form>
`,re=(t=>`<span class=field><label class="field__label field__label--start field__label--disabled" for=select>Option</label>${t}</span>`)(p),_e=(t=>`Db/${t}&l`)(b),ue=a("JTD1E6b","Option 3"),ce=a("r03kvGg","Option 2"),de=a("JxKnPN$","Option 1");function pe(t){h(t.a),m(t.a,c(c(Q({value:"1",content:de(t)}),{value:"2",content:ce(t)}),{value:"3",content:ue(t)})),g(t.a,"select"),$(t.a,!0)}const be=e(2,t=>{const n={...t.c,name:"formFieldName"};T(t.a,n.borderless),F(t.a,n.class),y(t.a,n.floatingLabel),I(t.a,n.fluid),C(t.a,n.onBlur),L(t.a,n.onFocus),O(t.a,n.size),w(t.a,n.style),f(t.a,n.value),v(t.a,n.valueChange),x(t.a,(({borderless:o,class:i,disabled:_,floatingLabel:r,fluid:E,id:G,onBlur:M,onFocus:W,option:A,size:H,style:J,value:j,valueChange:U,...u})=>u)(n))}),me=d("u_hrpNE",re,_e,pe,be),fe=`import type { Input as SelectInput } from "<evo-select>";
export type Input = SelectInput;

<span class="field">
  <label
    class="field__label field__label--start field__label--disabled"
    for="select"
  >
    Option
  </label>
  <evo-select ...input name="formFieldName" id="select" disabled>
    <@option value="1">Option 1</@option>
    <@option value="2">Option 2</@option>
    <@option value="3">Option 3</@option>
  </evo-select>
</span>
`,Ce={title:"form input/evo-select",component:kn,parameters:{docs:{description:{component:Qt}}},argTypes:{option:{description:"An option in the `<select>`.","@":{optgroup:{type:"string",control:"text",description:"If present, this option will be placed inside an `<optgroup>` tag."},"<option> attributes":{description:"All attributes and event handlers from [the native HTML `<option>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/option) will be passed through"}}},floatingLabel:{type:"string",control:"text",description:"Adds a floating label. For it to float down, the first option must have a nullable value."},size:{type:"string",options:["regular (default)","large"],control:"text",description:"Optionally change size of the component."},borderless:{type:"boolean",control:"boolean",description:"Removes borders of the button"},fluid:{type:"boolean",control:"boolean",description:"Select takes 100% of the container width"},value:{controllable:!0,type:"string",control:"text",description:"Marko [adds `value` to the native `<select>` tag](https://markojs.com/docs/reference/native-tag#select)."},"<select> attributes":{description:"All attributes and event handlers from [the native HTML `<select>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/select) will be passed through"}}},D=z(Wn,An),S=z(Pn,Qn),R=z(se,ie),k=z(me,fe),Le=["Default","WithLabel","InForm","Disabled"];D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultCode)",...D.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:"buildExtensionTemplate(WithLabelTemplate, WithLabelCode)",...S.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:"buildExtensionTemplate(InFormTemplate, InFormCode)",...R.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DisabledTemplate, DisabledCode)",...k.parameters?.docs?.source}}};export{D as Default,k as Disabled,R as InForm,S as WithLabel,Le as __namedExportsOrder,Ce as default};
