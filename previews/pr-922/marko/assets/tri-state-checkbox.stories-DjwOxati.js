import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./utils-CkiB0p9L.js";import{B as ee,C as te,J as n,T as ne,V as re,X as r,Y as i,Z as ie,at as a,c as ae,et as o,f as oe,h as se,i as s,it as c,k as l,q as u,s as d,t as f,tt as p,y as ce}from"./dom-CrmgVQ1h.js";import{t as le}from"./controllable-input.feat-IcO0FdvC.js";import{a as ue,c as de,i as fe,l as pe,n as me,o as he,r as ge,s as _e,t as ve,u as ye}from"./evo-icon-checkbox-checked-24-o2UDF0Jd.js";import{a as be,c as xe,i as Se,l as Ce,n as we,o as Te,r as Ee,s as De,t as Oe,u as ke}from"./evo-icon-checkbox-checked-18-qzZ-qfr9.js";import{a as Ae,c as je,i as Me,n as Ne,r as Pe,s as Fe,t as Ie}from"./evo-checkbox-DgzY_CYt.js";import{t as Le}from"./field-CbbNu1w4.js";import{a as Re,c as ze,i as Be,l as Ve,n as He,o as Ue,r as We,s as Ge,t as Ke,u as qe}from"./evo-icon-checkbox-mixed-24-CCBzaDA6.js";var Je;function Ye(){return(Ye=e((()=>{Je=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
    <span>
        evo-tri-state-checkbox
    </span>
    <span style="font-weight: normal; font-size: medium; margin-bottom: -15px;">
        DS v1.2.0
    </span>
</h1>

A checkbox that toggles from unchecked, to partially checked, to fully checked states. Uses \`<input/>\` under the hood with custom icons.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/evo-marko/?path=/story/form-input-evo-tri-state-checkbox)
- [Storybook Docs](https://ebay.github.io/evo-web/evo-marko/?path=/docs/form-input-evo-tri-state-checkbox)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/evo-marko/src/tags/evo-tri-state-checkbox/examples)
`})))()}function Xe(){return(Xe=e((()=>{je(),Le()})))()}function m(e){M(e,null),pt(e)}var h,g,Ze,Qe,$e,et,tt,nt,rt,_,it,at,v,ot,st,y,ct,b,lt,ut,x,S,C,w,T,dt,E,D,ft,O,k,A,j,M,pt,mt,N,P,ht,F,gt,I,L,_t;function R(){return(R=e((()=>{s(),le(),Re(),qe(),ue(),be(),ye(),ke(),Xe(),h=`<span><input class=checkbox__control type=checkbox><span class=checkbox__icon hidden></span></span>`,g=` D b l`,Ze=e=>{De(e.a),Te(e.a,{class:`checkbox__unchecked`})},Qe=e=>{_e(e.a),he(e.a,{class:`checkbox__unchecked`})},$e=e=>{we(e.a),Oe(e.a,{class:`checkbox__checked`})},et=e=>{me(e.a),ve(e.a,{class:`checkbox__checked`})},tt=e=>{Ge(e.a),Ue(e.a,{class:`checkbox__checked`})},nt=e=>{He(e.a),Ke(e.a,{class:`checkbox__checked`})},rt=n(0,de,(e=>`/${e}&`)(pe),Qe,xe,(e=>`/${e}&`)(Ce),Ze),_=i(2,2,e=>rt(e,e._.h===`large`?0:1)),it=_,at=n(0,ge,(e=>`/${e}&`)(fe),et,Ee,(e=>`/${e}&`)(Se),$e),v=i(2,1,e=>at(e,e._.h===`large`?0:1)),ot=v,st=n(0,We,(e=>`/${e}&`)(Be),nt,ze,(e=>`/${e}&`)(Ve),tt),y=i(2,0,e=>st(e,e._.h===`large`?0:1)),ct=n(2,`<!><!><!>`,`b%`,y,`<!><!><!>`,`b%`,ot,`<!><!><!>`,`b%`,it),b=o(27,e=>oe(e,`b`,e.a0!==`false`,L(e)),5),lt=c(`eb1`,e=>e.b.indeterminate=e.a0===`mixed`),ut=l(26,e=>{d(e.b,`aria-checked`,e.a0),ct(e,e.a0===`mixed`?0:e.a0===`true`?1:2),b(e),lt(e)}),x=o(24,e=>ut(e,e.x?e.w>=e.m?`true`:e.w===0?`false`:`mixed`:e.r||`false`),3),S=ie(17,e=>{x(e),b(e)}),C=o(10,e=>S(e,e.i||`false`,e.j)),w=l(8,C),T=l(9,C),dt=l(23,e=>{x(e),b(e)}),E=o(21,e=>dt(e,!!(e.t&&e.o&&e.l)),2),D=ie(19,e=>{ft(e,e.t?.length),E(e),b(e)}),ft=l(22,x),O=o(15,e=>D(e,e.n,e.o)),k=l(13,O),A=l(14,e=>{O(e),E(e)}),j=l(11,e=>{mt(e,e.l?.length),E(e),b(e)}),M=r(25,b),pt=c(`eb2`,e=>se(e,`b`)),mt=l(12,x),N=(e,t)=>ce(e.a,t),P=(e,t)=>ae(e.a,[`checkbox`,t]),ht=c(`eb3`,e=>ne(e,`b`)),F=l(16,e=>{te(e,`b`,e.q,{checked:1,checkedChange:1,class:1,"aria-checked":1,type:1}),ht(e)}),gt=(e,t)=>{(({checked:t,checkedChange:ee,checkedValues:te,checkedValuesChange:n,class:ne,onChange:re,size:r,skipMixed:i,style:ie,values:a,...ae})=>F(e,ae))(t),P(e,t.class),N(e,t.style),I(e,t.size),w(e,t.checked),T(e,t.checkedChange),j(e,t.values),k(e,t.checkedValues),A(e,t.checkedValuesChange)},I=l(7,e=>{y(e),v(e),_(e)}),L=e=>function(t){e.x?e.a0===`true`?D(e,[]):e.a0===`mixed`?(M(e,e.t),D(e,e.l)):D(e,e.z||e.l):e.r===`true`?S(e,`false`):e.r===`false`?S(e,`mixed`):S(e,`true`)},p(`eb0`,L),_t=f(`eb`,h,g,m,gt)})))()}function vt(e){m(e.a)}var yt,bt,xt,St;function Ct(){return(Ct=e((()=>{R(),s(),yt=h,bt=(e=>`/${e}&`)(g),xt=l(2,e=>{w(e.a,e.c.checked),T(e.a,e.c.checkedChange),k(e.a,e.c.checkedValues),A(e.a,e.c.checkedValuesChange),P(e.a,e.c.class),I(e.a,e.c.size),N(e.a,e.c.style),j(e.a,e.c.values),F(e.a,(({checked:e,checkedChange:t,checkedValues:ee,checkedValuesChange:te,class:n,onChange:ne,size:re,skipMixed:r,style:i,values:ie,...a})=>a)(e.c))}),St=f(`Y$45QSH`,yt,bt,vt,xt)})))()}var wt;function Tt(){return(Tt=e((()=>{wt=`<evo-tri-state-checkbox ...input/>
`})))()}function Et(e){m(e.a),T(e.a,H(e)),V(e,u(e))}var Dt,Ot,z,kt,B,V,At,H,jt;function Mt(){return(Mt=e((()=>{R(),s(),Dt=(e=>`${e}<label> "<!>"</label>`)(h),Ot=(e=>`/${e}& Db%l`)(g),z=r(6,e=>{w(e.a,e.g),a(e.c,e.g)}),kt=(e,t)=>z(e,t||`false`),B=o(8,e=>{let t={...e.e,id:e.h};k(e.a,t.checkedValues),A(e.a,t.checkedValuesChange),P(e.a,t.class),I(e.a,t.size),N(e.a,t.style),j(e.a,t.values),F(e.a,(({checked:e,checkedChange:t,checkedValues:ee,checkedValuesChange:te,class:n,onChange:ne,size:re,skipMixed:r,style:i,values:ie,...a})=>a)(t))}),V=l(7,e=>{d(e.b,`for`,e.h),B(e)}),At=l(4,e=>{kt(e,e.e.checked),B(e)}),H=e=>t=>{z(e,t)},p(`LWh8kwM`,H),jt=f(`aRlvI8G`,Dt,Ot,Et,At)})))()}var Nt;function Pt(){return(Pt=e((()=>{Nt=`import { type Input as TriStateCheckboxInput } from "<evo-tri-state-checkbox>";
export interface Input extends TriStateCheckboxInput {}

<let/checked=input.checked || ("false" as const)>

<id/id>
<evo-tri-state-checkbox ...input id=id checked:=checked/>
<label for=id>
  \${" "}"\${checked}"
</label>
`})))()}function Ft(e){m(e.a),j(e.a,U),K(e,[]),Ut(e,J(e)),Wt(e,u(e)),Gt(e,[U])}var It,Lt,U,W,G,Rt,zt,Bt,Vt,Ht,K,Ut,q,Wt,Gt,Kt,J,qt;function Jt(){return(Jt=e((()=>{s(),R(),Fe(),It=(e=>`<div class=field>${e}<label class="field__label field__label--end">Select all</label></div><div class=container style="margin-left: 10px;"></div>`)(h),Lt=(e=>`D/${e}& l b`)(g),U=[`A`,`B`,`C`,`D`],W=o(6,e=>Ie(e.a,{checkedValueChange:e._.g,checkedValue:e._.f,value:e.e,id:e.f}),3),G=ee(2,W),Rt=l(5,e=>{d(e.b,`for`,e.f),W(e)}),zt=e=>{G._(e),Bt._(e),Ne(e.a),Pe(e.a),Rt(e,u(e))},Bt=ee(2,W),Vt=l(4,e=>{a(e.c,e.e),W(e)}),Ht=(e,t)=>Vt(e,t[0]),K=r(5,e=>{k(e.a,e.f),G(e)}),Ut=l(6,e=>A(e.a,e.g)),q=o(8,e=>{let t={...e.e,id:e.h};w(e.a,t.checked),T(e.a,t.checkedChange),P(e.a,t.class),I(e.a,t.size),N(e.a,t.style),F(e.a,(({checked:e,checkedChange:t,checkedValues:ee,checkedValuesChange:te,class:n,onChange:ne,size:re,skipMixed:r,style:i,values:ie,...a})=>a)(t))}),Wt=l(7,e=>{d(e.b,`for`,e.h),q(e)}),Gt=re(2,(e=>`<div class=field>${e}<label class="field__label field__label--end">Option <!></label></div>`)(Me),(e=>`D/${e}& Db%m`)(Ae),zt,Ht),Kt=l(4,q),J=e=>t=>{K(e,t)},p(`$uPhahL`,J),qt=f(`i4qL3_R`,It,Lt,Ft,Kt)})))()}var Yt;function Xt(){return(Xt=e((()=>{Yt=`static const boxes = ["A", "B", "C", "D"];

<let/checkedValue=([] as string[])>

<div class="field">
  <id/id>
  <evo-tri-state-checkbox
    ...input
    id=id
    checkedValues:=checkedValue
    values=boxes/>
  <label class="field__label field__label--end" for=id>
    Select all
  </label>
</div>
<div class="container" style="margin-left: 10px;">
  <for|value| of=boxes>
    <id/id>
    <div class="field">
      <evo-checkbox id=id value=value checkedValue:=checkedValue/>
      <label class="field__label field__label--end" for=id>
        Option \${value}
      </label>
    </div>
  </for>
</div>
`})))()}function Zt(e){m(e.a),P(e.a,`field__control`)}var Qt,$t,en,tn;function nn(){return(nn=e((()=>{R(),s(),Qt=(e=>`<span class=field>${e}<label class="field__label field__label--end" for=checkbox>Option</label></span>`)(h),$t=(e=>`D/${e}&l`)(g),en=l(2,e=>{let t={...e.c,id:`checkbox`};w(e.a,t.checked),T(e.a,t.checkedChange),k(e.a,t.checkedValues),A(e.a,t.checkedValuesChange),I(e.a,t.size),N(e.a,t.style),j(e.a,t.values),F(e.a,(({checked:e,checkedChange:t,checkedValues:ee,checkedValuesChange:te,class:n,onChange:ne,size:re,skipMixed:r,style:i,values:ie,...a})=>a)(t))}),tn=f(`cG5YVe$`,Qt,$t,Zt,en)})))()}function rn(e){m(e.a),P(e.a,`field__control`)}var an,on,sn,cn;function ln(){return(ln=e((()=>{R(),s(),an=(e=>`<span class=field>${e}<label class="field__label field__label--end field__label--disabled" for=checkbox>Option</label></span>`)(h),on=(e=>`D/${e}&l`)(g),sn=l(2,e=>{let t={...e.c,disabled:!0,id:`checkbox`};w(e.a,t.checked),T(e.a,t.checkedChange),k(e.a,t.checkedValues),A(e.a,t.checkedValuesChange),I(e.a,t.size),N(e.a,t.style),j(e.a,t.values),F(e.a,(({checked:e,checkedChange:t,checkedValues:ee,checkedValuesChange:te,class:n,onChange:ne,size:re,skipMixed:r,style:i,values:ie,...a})=>a)(t))}),cn=f(`WXsuZbF`,an,on,rn,sn)})))()}var un;function dn(){return(dn=e((()=>{un=`<span class="field">
  <evo-tri-state-checkbox ...input class="field__control" id="checkbox"/>
  <label class="field__label field__label--end" for="checkbox">
    Option
  </label>
</span>
`})))()}var fn;function pn(){return(pn=e((()=>{fn=`<span class="field">
  <evo-tri-state-checkbox
    ...input
    disabled
    class="field__control"
    id="checkbox"/>
  <label
    class="field__label field__label--end field__label--disabled"
    for="checkbox">
    Option
  </label>
</span>
`})))()}var mn,Y,X,Z,Q,$,hn;function gn(){return(gn=e((()=>{Ye(),R(),Ct(),Tt(),Mt(),Pt(),Jt(),Xt(),nn(),ln(),dn(),pn(),mn={title:`form input/evo-tri-state-checkbox`,component:_t,parameters:{docs:{description:{component:Je}}},argTypes:{checked:{controllable:!0,type:`string`,options:[`false`,`mixed`,`true`],control:`inline-radio`,description:`String enumeration of checkbox state.`,table:{defaultValue:{summary:`false`}}},skipMixed:{type:`boolean`,control:`boolean`,description:`If set, then will skip the mixed toggle when clicking on checkbox. Used if in some cases you want to toggle between all items selected or none.`},size:{type:`string`,options:[`regular (default)`,`large`],control:`inline-radio`,description:`Sets the checkbox icon. Default is regular. (Note: The dimensions of the checkbox will not change, but only the icon)`},values:{description:'Used alongside `checkedValues` for a [controllable](https://markojs.com/docs/explanation/controllable-components) pattern that aligns with [Marko\'s `checkedValue` checkbox pattern](https://markojs.com/docs/reference/native-tag#input-typeradio-and-input-typecheckbox). List of _all_ "child" checkbox values',table:{type:{summary:`string[]`}}},checkedValues:{controllable:!0,description:'**Must** be accompanied by `values` and `checkedValuesChange` (usually via [the `:=` bind syntax](https://markojs.com/docs/reference/language#shorthand-change-handlers-two-way-binding)). Leverages [Marko\'s `checkedValue` checkbox pattern](https://markojs.com/docs/reference/native-tag#input-typeradio-and-input-typecheckbox) for "select/deselect all" behavior',table:{type:{summary:`string[]`}}},"<input> attributes":{description:"All attributes and event handlers from [the native HTML `<input>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input) will be passed through, and its Marko [change handlers](https://markojs.com/docs/reference/native-tag#input-valuechange-checkedchange-checkedvaluechange)"}}},Y=t(tn,un),X=t(cn,fn),Z=t(qt,Yt),Q=t(jt,Nt),$=t(St,wt),hn=[`WithLabel`,`Disabled`,`ControlledCheckedValues`,`Controlled`,`Isolated`],Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`buildExtensionTemplate(WithLabelTemplate, WithLabelCode)`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DisabledTemplate, DisabledCode)`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`buildExtensionTemplate(ControlledCheckedValuesTemplate, ControlledCheckedValuesCode)`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`buildExtensionTemplate(ControlledTemplate, ControlledCode)`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultCode)`,...$.parameters?.docs?.source}}}})))()}gn();export{Q as Controlled,Z as ControlledCheckedValues,X as Disabled,$ as Isolated,Y as WithLabel,hn as __namedExportsOrder,mn as default};