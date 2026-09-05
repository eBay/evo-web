import{b as A}from"./utils-DyU2_5R1.js";import{a as g,b as i,c as P,E as W,d as L,i as B,e as d,f as J,A as K,r as N,u as M,B as U,_ as n,k as c,l as a,U as j,x as F,D as G,C as Q}from"./dom-DF5f8Ddd.js";import{$ as X,a as Y,b as Z,c as tt,d as et,e as nt,f as it,g as at,h as ot,i as rt,j as ut}from"./index-CAWl9X6G.js";import"./iframe-CuDE3HaJ.js";import"./preload-helper-PPVm8Dsz.js";import"./controllable-open.feat-DWEv_6C-.js";import"./evo-icon-chevron-down-16-COGQacX7.js";import"./index-CGOhNcPA.js";const b="<ul></ul>",v=" b",k=d(3,t=>{const e={...t.c,open:Array.isArray(t._.m)?t._.m.includes(t.M):t._.m===t.M,openChange:ft(t)};tt(t.a,e.alignment),et(t.a,e.class),nt(t.a,e.content),it(t.a,e.contentAs),at(t.a,e.leading),ot(t.a,e.size),rt(t.a,e.summary),ut(t.a,(({alignment:o,class:r,content:p,contentAs:_,leading:f,size:u,summary:z,...O})=>O)(e))}),w=U(0,k),st=t=>{w._(t),Z(t.a)},lt=i(2,k),mt=(t,e)=>lt(t,e[0]),ct=(t,e)=>N(t.a,"aria-roledescription",e),h=(t,e)=>ct(t,e!==void 0?e:"accordion"),m=M(12,w),S=d(5,t=>m(t,t.d,t.e)),y=i(3,S),q=i(4,S),x=d(15,t=>J(t.a,["accordion",t.h==="large"&&"accordion--large",t.g,t.o&&"accordion--animated"]),2),R=W(14,x);function C(t){R(t,!1)}const D=i(6,x),E=i(7,x),dt=L("awmAXeH",t=>B(t,"a")),$=i(10,t=>{P(t,"a",t.k,{"aria-roledescription":1,class:1}),dt(t)}),pt=K(0,(t=>`<li>${t}</li>`)(X),(t=>`D/${t}&l`)(Y),st,mt),I=(t,e)=>pt(t,[e]),_t=(t,e)=>{(({a11yText:o,class:r,item:p,open:_,openChange:f,size:u,...z})=>$(t,z))(e),y(t,e.open),q(t,e.openChange),D(t,e.class),E(t,e.size),I(t,e.item),h(t,e.a11yText)},ft=t=>function(e){if(R(t._,!0),Array.isArray(t._.m)){const o=t._.m;e?o.includes(t.M)||m(t._,[...o,t.M]):m(t._,o.filter(r=>r!==t.M))}else m(t._,e?t.M:-1)},gt=g("h2nN9mM",b,v,C,_t),bt=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
    <span>
        evo-accordion
    </span>
    <span style="font-weight: normal; font-size: medium; margin-bottom: -15px;">
        DS v1.1
    </span>
</h1>

## Examples and Documentation

- [Storybook](https://ebay.github.io/?path=/story/navigation-disclosure-evo-accordion)
- [Storybook Docs](https://ebay.github.io/?path=/docs/navigation-disclosure-evo-accordion)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/evo-marko/src/tags/evo-accordion/examples)
`,vt=b,ht=(t=>`/${t}&`)(v),yt=n("LlSa7eu","Item 3"),qt=n("ut4PH_F","<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>"),xt=n("mJH61Lt","Item 2"),Ct=n("pKSDzK8","<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>"),Dt=n("rU5PWqz","Item 1"),Et=n("$8yKgLH","<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>");function $t(t){C(t.a),I(t.a,c(c(a({summary:a({content:Dt(t)}),content:Et(t)}),{summary:a({content:xt(t)}),content:Ct(t)}),{summary:a({content:yt(t)}),content:qt(t)})),h(t.a,"Accordion Menu")}const It=i(2,t=>{D(t.a,t.c.class),y(t.a,t.c.open),q(t.a,t.c.openChange),E(t.a,t.c.size),$(t.a,(({a11yText:e,class:o,item:r,open:p,openChange:_,size:f,...u})=>u)(t.c))}),Tt=g("NhrB9Di",vt,ht,$t,It),zt=`<evo-accordion ...input a11yText="Accordion Menu">
    <@item>
        <@summary>Item 1</@summary>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </@item>
    <@item>
        <@summary>Item 2</@summary>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </@item>
    <@item>
        <@summary>Item 3</@summary>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </@item>
</evo-accordion>
`,At=(t=>`<div></div>${t}`)(b),Lt=(t=>` b/${t}&`)(v),Mt=n("NuURd$E","Item 3"),Ut=n("aEF7xlq","<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>"),kt=n("Gyspkyv","Item 2"),wt=n("fnH_iMf","<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>"),St=n("ZC2ql7Q","Item 1"),Rt=n("Vbf7uEW","<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>"),H=U(0,t=>G(t,"a",t._.h,Kt(t),t.M)),Ht=L("U_V3YPW",t=>Q(t,"a")),Vt=t=>{H._(t),F(t.b,t.M),Ht(t)},T=M(7,t=>{y(t.b,t.h),H(t)}),V=d(6,t=>T(t,t.e??0,t.f)),Ot=i(4,V),Pt=i(5,V),Wt=j(0,"<label><input type=radio name=accordion-control> <!></label>","D c%",Vt);function Bt(t){C(t.b),I(t.b,c(c(a({summary:a({content:St(t)}),content:Rt(t)}),{summary:a({content:kt(t)}),content:wt(t)}),{summary:a({content:Mt(t)}),content:Ut(t)})),q(t.b,Nt(t)),h(t.b,"Accordion Menu"),Wt(t,[3,0,1])}const Jt=i(3,t=>{D(t.b,t.d.class),E(t.b,t.d.size),$(t.b,(({a11yText:e,class:o,item:r,open:p,openChange:_,size:f,...u})=>u)(t.d)),Ot(t,t.d.open),Pt(t,t.d.openChange)}),Kt=t=>e=>{T(t._,parseInt(e))},Nt=t=>e=>{T(t,e)},jt=g("JJcSEP_",At,Lt,Bt,Jt),Ft=`import { type Input as AccordionInput } from "<evo-accordion>";
export interface Input extends AccordionInput<number> {}

<let/open=input.open ?? 0 valueChange=input.openChange>

<div>
  <for|i| until=3>
    <label>
      <input
        type="radio"
        name="accordion-control"
        value=i
        checkedValue:parseInt:=open>
      \${" "}\${i}
    </label>
  </for>
</div>

<evo-accordion ...input open:=open a11yText="Accordion Menu">
  <@item>
    <@summary>Item 1</@summary>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
  </@item>
  <@item>
    <@summary>Item 2</@summary>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
  </@item>
  <@item>
    <@summary>Item 3</@summary>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
  </@item>
</evo-accordion>
`,ie={title:"navigation & disclosure/evo-accordion",component:gt,parameters:{docs:{description:{component:bt}}},argTypes:{size:{type:"string",options:["regular (default)","large"],control:{type:"inline-radio"},description:"Size of the details"},a11yText:{type:{name:"string",required:!0},control:"text",description:"Localized role description to announce the component role for a11y users. May be set to `null` only if accessibility is provided through other means.",table:{defaultValue:{summary:"accordion"}}},item:{description:"Represents an [`<evo-details>` tag](?path=/story/navigation-disclosure-evo-details--default) to be used as part of the group.","@":{"<evo-details> attributes":{description:"All attributes and event handlers from [the `<evo-details>` tag](?path=/story/navigation-disclosure-evo-details--docs) will be passed through to `<@item>`, except `open`"}}},open:{controllable:!0,control:"number",description:"The index or indices of the open items. Pass a number if only one may be open at a time, or an array for multiple",table:{type:{summary:"number | number[]"}}},"<ul> attributes":{description:"All attributes and event handlers from [the native HTML `<ul>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/ul) will be passed through"}}},s=A(Tt,zt),l=A(jt,Ft);s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultCode)",...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"buildExtensionTemplate(ControlledTemplate, ControlledCode)",...l.parameters?.docs?.source}}};const ae=["Default","Controlled"];export{l as Controlled,s as Default,ae as __namedExportsOrder,ie as default};
