import{b as z}from"./utils-DyU2_5R1.js";import{a as d,_ as a,q as l,O as Ot,b as e,p as $t,E as et,e as U,f as xt,F as Ft,A as ot,v as s,d as K,i as P,u as wt,w as It,y as Q,P as at,r as Tt,Q as Ct,k as c,l as V,G as Lt,x as Dt,H as St}from"./dom-BHuf_wjI.js";import"./controllable-select.feat-B-1_7x6U.js";import{a as Rt,$ as kt,b as zt,c as Bt}from"./evo-icon-chevron-down-12-grL1CR2N.js";import{$ as Et,a as Nt,b as Gt,d as Mt,e as Wt,j as Ht,f as At,g as Jt,h as jt,i as qt,c as Ut,k as Kt,m as Pt,l as Qt}from"./index-CUllvtcv.js";import"./index-3OPMgxGk.js";import{a as Z,$ as X,b as tt,c as nt}from"./index-Ctnw2zLv.js";import"./iframe-D1vEsa04.js";import"./preload-helper-PPVm8Dsz.js";import"./index-edzibN_L.js";import"./evo-icon-chevron-down-16-Zh7qSkbb.js";const Vt=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`,p=(t=>`<!>${t}<!>`)(Jt),b=(t=>`b/${t}&b`)(At);function Yt(t){return!!t.optgroup}const Zt=K("wlG92AJ",t=>P(t,"a")),Xt=e(3,t=>{at(t,"a",t.d),Zt(t)}),tn=(t,n)=>nn(t,n[0]),nn=(t,n)=>(({optgroup:o,...i})=>Xt(t,i))(n),en=K("Gq1tVni",t=>P(t,"a")),lt=Q(0,1,t=>{at(t,"a",t._.c),en(t)}),on=lt,st=Q(0,0,t=>Tt(t.a,"label",t._.d)),an=t=>{st._(t),it._(t)},ln=ot(0,"<option></option>"," ",0,tn),it=Q(0,0,t=>ln(t,[t._.e])),sn=It(0,"<optgroup></optgroup>"," ",an,"<option></option>"," ",on),rn=e(2,t=>{un(t,t.c?.optgroup),cn(t,t.c?.options),sn(t,Yt(t.c)?0:1),lt(t)}),_n=(t,n)=>rn(t,n[0]),un=e(3,st),cn=e(4,it),B=U(3,t=>xt(t.a,["select",t._.n==="large"&&"select--large",t._.j&&"select--fluid",t._.k&&"select--borderless",t._.g]),3),rt=l(24,B),dn=t=>{rt(t),_t(t),ut(t),ct(t),dt(t),pt(t),bt(t),ft(t),mt(t),vt(t),zt(t.c),Bt(t.c,{})},_t=l(25,t=>Ot(t.a,t._.h)),pn=K("bs1IB6O",t=>P(t,"b")),E=U(4,t=>{Ft(t,"b",{onBlur:Rn(t),onFocus:Sn(t),disabled:t._.i,id:t._.v,value:t._.t,valueChange:Dn(t),...t._.r},Ct),pn(t)},3),ut=l(26,E),ct=l(27,B),dt=l(28,B),pt=l(29,B),bt=l(30,E),ft=l(31,E),mt=l(32,E),bn=ot(1,"<!><!><!>","b%",0,_n),vt=l(33,t=>bn(t,[t._.w])),fn=a("NT$aRoM",(t=>`<span><select></select>${t}</span>`)(kt),(t=>` D b/${t}&l`)(Rt),dn),mn=s(vt),vn=e(22,mn),gn=(t,n)=>vn(t,(()=>{const o=[],i={};for(const _ of n){const r=_.optgroup;r?i[r]?i[r].options.push(_):o.push(i[r]={optgroup:r,options:[_]}):o.push(_)}return o})()),f=(t,n)=>gn(t,[...n||[]]),hn=s(ft),gt=wt(19,t=>{Qt(t.a,t.t),hn(t)}),ht=U(5,t=>gt(t,t.d,t.e)),m=e(3,ht),v=e(4,ht),yn=s(mt),On=e(21,t=>{Pt(t.a,t.v),yn(t)}),g=(t,n)=>On(t,n||$t(t,"Jv")),Y=et(23,t=>Kt(t.a,t.x));function h(t){Et(t.a),Nt(t.a,fn(t)),Gt(t.a),Mt(t.a),Wt(t.a),Ht(t.a),Y(t,!1)}const y=(t,n)=>qt(t.a,n),$n=s(pt),O=e(13,t=>{Ut(t.a,t.n),$n(t)}),xn=s(ut),$=e(8,t=>{jt(t.a,t.i),xn(t)}),Fn=(t,n)=>{(({borderless:o,class:i,disabled:_,floatingLabel:r,fluid:N,id:G,onBlur:M,onFocus:W,option:H,size:A,style:J,value:j,valueChange:q,...u})=>x(t,u))(n),m(t,n.value),v(t,n.valueChange),F(t,n.class),w(t,n.style),$(t,n.disabled),I(t,n.fluid),T(t,n.borderless),f(t,n.option),y(t,n.floatingLabel),O(t,n.size),g(t,n.id),C(t,n.onBlur),L(t,n.onFocus)},wn=s(bt),x=e(17,wn),In=s(rt),F=e(6,In),Tn=s(_t),w=e(7,Tn),Cn=s(ct),I=e(9,Cn),Ln=s(dt),T=e(10,Ln),C=e(15),L=e(16),Dn=t=>n=>{gt(t._,n)},Sn=t=>function(n,o){Y(t._,!0),t._.q&&t._.q(n,o)},Rn=t=>function(n,o){Y(t._,!1),t._.p&&t._.p(n,o)},kn=d("nJvmKyh",p,b,h,Fn),zn=(t=>`<!>${t}<!>`)(p),Bn=(t=>`b/${t}&b`)(b),En=a("KR7L6md","Option 3"),Nn=a("tQ$VREr","Option 2"),Gn=a("o3wtYUP","Option 1");function Mn(t){h(t.a),f(t.a,c(c(V({value:"1",content:Gn(t)}),{value:"2",content:Nn(t)}),{value:"3",content:En(t)})),T(t.a),F(t.a),$(t.a),y(t.a),I(t.a),g(t.a),C(t.a),L(t.a),O(t.a),w(t.a),m(t.a),v(t.a),x(t.a,{name:"formFieldName"})}const Wn=d("MvlsofB",zn,Bn,Mn),Hn=`<evo-select name="formFieldName">
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
`,An=(t=>`<span class=field><label class="field__label field__label--start" for=select>Option</label>${t}</span>`)(p),Jn=(t=>`Db/${t}&l`)(b),jn=[{text:"Select an option",value:""},{text:"option 1",value:"1"},{text:"option 2",value:"2"},{text:"option 3",value:"3"}],qn=Lt(a("D4TZvOU"," "," "),{6(t){Dt(t.a,t.g)}}),yt=et(3,t=>m(t.a,t.d));function Un(t){h(t.a);let n;St(jn,o=>{n=c(n,{value:o.value,content:qn(t,{6:o?.text})})}),f(t.a,n),v(t.a,Pn(t)),g(t.a,"select"),yt(t,"")}const Kn=e(2,t=>{const n={...t.c,name:"formFieldName"};T(t.a,n.borderless),F(t.a,n.class),$(t.a,n.disabled),y(t.a,n.floatingLabel),I(t.a,n.fluid),C(t.a,n.onBlur),L(t.a,n.onFocus),O(t.a,n.size),w(t.a,n.style),x(t.a,(({borderless:o,class:i,disabled:_,floatingLabel:r,fluid:N,id:G,onBlur:M,onFocus:W,option:H,size:A,style:J,value:j,valueChange:q,...u})=>u)(n))}),Pn=t=>n=>{yt(t,n)},Qn=d("NwZhNBX",An,Jn,Un,Kn),Vn=`<let/selected="">
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
`,Yn=((t,n,o)=>`<form><div>${t}</div><div style="padding: 1em;">${n}${o}</div></form>`)(p,nt,nt),Zn=((t,n,o)=>`E/${t}&lD/${n}&/${o}&m`)(b,tt,tt),Xn=a("Bcm$wmo","Submit"),te=a("p6SoJca","Reset"),ne=a("gt7h9my","Option 3"),ee=a("bsDF4N_","Option 2"),oe=a("EYaNOlF","Option 1");function ae(t){h(t.a),f(t.a,c(c(V({value:"1",content:oe(t)}),{value:"2",content:ee(t)}),{value:"3",content:ne(t)})),Z(t.b),X(t.b,{type:"reset",content:te(t)}),Z(t.c),X(t.c,{type:"submit",content:Xn(t)})}const le=e(4,t=>{const n={...t.e,name:"formFieldName"};T(t.a,n.borderless),F(t.a,n.class),$(t.a,n.disabled),y(t.a,n.floatingLabel),I(t.a,n.fluid),g(t.a,n.id),C(t.a,n.onBlur),L(t.a,n.onFocus),O(t.a,n.size),w(t.a,n.style),m(t.a,n.value),v(t.a,n.valueChange),x(t.a,(({borderless:o,class:i,disabled:_,floatingLabel:r,fluid:N,id:G,onBlur:M,onFocus:W,option:H,size:A,style:J,value:j,valueChange:q,...u})=>u)(n))}),se=d("QocjGM1",Yn,Zn,ae,le),ie=`import type { Input as SelectInput } from "<evo-select>";
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
`,re=(t=>`<span class=field><label class="field__label field__label--start field__label--disabled" for=select>Option</label>${t}</span>`)(p),_e=(t=>`Db/${t}&l`)(b),ue=a("JTD1E6b","Option 3"),ce=a("r03kvGg","Option 2"),de=a("JxKnPN$","Option 1");function pe(t){h(t.a),f(t.a,c(c(V({value:"1",content:de(t)}),{value:"2",content:ce(t)}),{value:"3",content:ue(t)})),g(t.a,"select"),$(t.a,!0)}const be=e(2,t=>{const n={...t.c,name:"formFieldName"};T(t.a,n.borderless),F(t.a,n.class),y(t.a,n.floatingLabel),I(t.a,n.fluid),C(t.a,n.onBlur),L(t.a,n.onFocus),O(t.a,n.size),w(t.a,n.style),m(t.a,n.value),v(t.a,n.valueChange),x(t.a,(({borderless:o,class:i,disabled:_,floatingLabel:r,fluid:N,id:G,onBlur:M,onFocus:W,option:H,size:A,style:J,value:j,valueChange:q,...u})=>u)(n))}),fe=d("u_hrpNE",re,_e,pe,be),me=`import type { Input as SelectInput } from "<evo-select>";
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
`,Ce={title:"form input/evo-select",component:kn,parameters:{docs:{description:{component:Vt}}},argTypes:{option:{description:"An option in the `<select>`.","@":{optgroup:{type:"string",control:"text",description:"If present, this option will be placed inside an `<optgroup>` tag."},"<option> attributes":{description:"All attributes and event handlers from [the native HTML `<option>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/option) will be passed through"}}},floatingLabel:{type:"string",control:"text",description:"Adds a floating label. For it to float down, the first option must have a nullable value."},size:{type:"string",options:["regular (default)","large"],control:"text",description:"Optionally change size of the component."},borderless:{type:"boolean",control:"boolean",description:"Removes borders of the button"},fluid:{type:"boolean",control:"boolean",description:"Select takes 100% of the container width"},value:{controllable:!0,type:"string",control:"text",description:"Marko [adds `value` to the native `<select>` tag](https://markojs.com/docs/reference/native-tag#select)."},"<select> attributes":{description:"All attributes and event handlers from [the native HTML `<select>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/select) will be passed through"}}},D=z(Wn,Hn),S=z(Qn,Vn),R=z(se,ie),k=z(fe,me);D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultCode)",...D.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:"buildExtensionTemplate(WithLabelTemplate, WithLabelCode)",...S.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:"buildExtensionTemplate(InFormTemplate, InFormCode)",...R.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DisabledTemplate, DisabledCode)",...k.parameters?.docs?.source}}};const Le=["Default","WithLabel","InForm","Disabled"];export{D as Default,k as Disabled,R as InForm,S as WithLabel,Le as __namedExportsOrder,Ce as default};
