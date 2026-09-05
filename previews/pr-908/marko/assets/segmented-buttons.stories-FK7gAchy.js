import{b as x}from"./utils-DyU2_5R1.js";import{a as l,b as e,e as _,F as L,A as j,d as r,i as w,u as F,B as q,t as G,c as N,f as P,y as u,r as U,w as V,g as d,G as J,_ as s,H as K,k as D,E as I,x as Y,l as i}from"./dom-DF5f8Ddd.js";import{$ as X,a as Z,b as tt,c as nt,d as et,e as ot,f as st,g as at}from"./evo-icon-mobile-24-BS5miVO_.js";import"./iframe-CuDE3HaJ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CGOhNcPA.js";const m="<div><ul></ul></div>",b=" D l",f=()=>{},ct=["large"],it=d(0),z=u(0,1,t=>it(t,t._.c)),lt=z,_t=d(1),S=u(0,0,t=>_t(t,t._.c)),rt=t=>{S._(t),Q._(t)},ut=d(0),Q=u(0,0,t=>ut(t,t._.h)),dt=(t,n)=>U(t.a,"aria-current",n&&"true"),R=_(11,t=>dt(t,t._.n===t.k)),E=q(1,R),mt=r("TuabTCh",t=>G(t.a,"click",function(n,o){W(t._,t.k),(t.i||null)?.(n,o)})),bt=t=>{E._(t),mt(t)},ft=e(10,R),gt=(t,n)=>ft(t,n!==void 0?n:t.M),ht=(t,n)=>P(t.a,["segmented-buttons__button",n]),pt=r("tt0IHvN",t=>w(t,"a")),vt=e(9,t=>{N(t,"a",t.j,{class:1,"on-click":1,"aria-current":1}),pt(t)}),$t=V(0,"<span class=segmented-buttons__button-cell><!><span><!></span></span>","D%bD%",rt,"<!><!><!>","b%",lt),kt=e(7,t=>{$t(t,t.h?0:1),Q(t)}),Ct=(t,n)=>yt(t,n[0]),yt=e(2,t=>{(({class:n,icon:o,name:y,onClick:B,...T})=>vt(t,T))(t.c),ht(t,t.c.class),gt(t,t.c.name),kt(t,t.c.icon),Tt(t,t.c.onClick),S(t),z(t)}),Tt=e(8),xt=r("dgn_J8p",t=>w(t,"a")),g=_(12,t=>{L(t,"a",{class:["segmented-buttons",t.l&&`segmented-buttons--${t.l}`,t.i],...t.k}),xt(t)},2),wt=e(11,g),h=(t,n)=>wt(t,n&&ct.includes(n)?n:null),W=F(13,E),A=_(6,t=>W(t,t.e,t.f)),p=e(4,A),v=e(5,A),$=e(8,g),k=e(10,g),Dt=j(1,"<li><button></button></li>","D ",bt,Ct),C=(t,n)=>Dt(t,[n]),It=(t,n)=>{(({button:o,class:y,selected:B,selectedChange:T,size:Zt,...H})=>k(t,H))(n),p(t,n.selected),v(t,n.selectedChange),h(t,n.size),$(t,n.class),C(t,n.button)},zt=l("iAWqAHV",m,b,f,It),St=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
    <span>
        evo-segmented-buttons
    </span>
    <span style="font-weight: normal; font-size: medium; margin-bottom: -15px;">
        DS v1.1.0
    </span>
</h1>

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/buttons-evo-segmented-buttons)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/buttons-evo-segmented-buttons)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/evo-segmented-buttons/examples)
`,Qt=m,Rt=(t=>`/${t}&`)(b),Et=J(s("Iogyfye"," "," "),{4(t){Y(t.a,t.e)}}),Wt=e(1,t=>{let n;K(t.b,(o,y)=>{n=D(n,{name:o,content:Et(t,{4:o})})}),C(t.a,n)}),M=I(2,t=>p(t.a,t.c));function At(t){f(t.a),v(t.a,Mt(t)),$(t.a),h(t.a),k(t.a,{}),Wt(t,["Q1","Q2","Q3","Q4"]),M(t,"Q1")}const Mt=t=>n=>{M(t,n)},Ot=l("xxkdBn1",Qt,Rt,At),Bt=`<const/items = ["Q1", "Q2", "Q3", "Q4"]>
<let/selected="Q1">

<evo-segmented-buttons selected:=selected>
    <for|item, i| of=items>
        <@button name=item>
            \${item}
        </@button>
    </for>
</evo-segmented-buttons>
`,Ht=m,Lt=(t=>`/${t}&`)(b),jt=t=>{et(t.a),ot(t.a,{})},Ft=s("YFqM63a",Z,(t=>`/${t}&`)(X),jt),qt=s("oiVz3K9","Mobile"),Gt=t=>{st(t.a),at(t.a,{})},Nt=s("FPinDRP",nt,(t=>`/${t}&`)(tt),Gt),Pt=s("iThSlGA","Desktop"),O=I(1,t=>p(t.a,t.b));function Ut(t){f(t.a),C(t.a,D(i({onClick:Kt,icon:i({content:Nt(t)}),content:Pt(t)}),{onClick:Jt,icon:i({content:Ft(t)}),content:qt(t)})),v(t.a,Vt(t)),$(t.a),h(t.a),k(t.a,{}),O(t,0)}const Vt=t=>n=>{O(t,n)};function Jt(){console.log("Clicked mobile")}function Kt(){console.log("Clicked full view")}const Yt=l("v2Aj0T6",Ht,Lt,Ut),Xt=`<let/selected=0>
<evo-segmented-buttons selected:=selected>
    <@button onClick() {
        console.log("Clicked full view");
    }>
        <@icon>
            <evo-icon-full-view-24/>
        </@icon>
        Desktop
    </@button>
    <@button onClick() {
        console.log("Clicked mobile");
    }>
        <@icon>
            <evo-icon-mobile-24/>
        </@icon>
        Mobile
    </@button>
</evo-segmented-buttons>
`,cn={title:"buttons/evo-segmented-buttons",component:zt,parameters:{docs:{description:{component:St}}},argTypes:{selected:{controllable:!0,control:"text",description:"Index of the selected button, or name if present",table:{type:{summary:"string | number"}}},button:{description:"A button in the segmented button","@":{name:{type:"string",control:"string",description:"Name used to keep track of the `selected` button, use instead of index for more stability"},icon:{description:"Leading icon for this segment","@":{}},"<button> attributes":{description:"All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through"}}},size:{options:["regular (default)","large"],description:"Size override for the buttons."},"<div> attributes":{description:"All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through"}}},a=x(Ot,Bt),c=x(Yt,Xt);a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode)",...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"buildExtensionTemplate(WithIconsTemplate, WithIconsTemplateCode)",...c.parameters?.docs?.source}}};const ln=["Default","WithIcons"];export{a as Default,c as WithIcons,ln as __namedExportsOrder,cn as default};
