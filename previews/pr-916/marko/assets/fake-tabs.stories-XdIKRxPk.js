import{_ as d,f as a,g as R,i as q,l as z,m as U,h as A,u as V,p as Z,a1 as H,L as O,w as x,q as W,Y as G,b as n,Z as s,S as M,Q as N}from"./dom-BJw3UtKR.js";/* empty css             */import{b as D}from"./utils-DyU2_5R1.js";import"./iframe-Bp9ocpcF.js";import"./preload-helper-PPVm8Dsz.js";const j=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        evo-fake-tabs
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v2.1.0
    </span>
</h1>

Tabs which link to other pages. This can be used to deep link to other pages which switch the current tab.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/navigation-disclosure-evo-fake-tabs)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/navigation-disclosure-evo-fake-tabs)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/evo-fake-tabs/examples)
`,_="<div><ul class=fake-tabs__items></ul><div class=fake-tabs__content><div class=fake-tabs__panel><div class=fake-tabs__cell><div><!></div></div></div></div></div>",f=" D bG%p",h=()=>{},S=G(2),$=U(6,t=>x(t.b,"aria-current",t.f!==void 0&&t._.m===t.M&&t._.p),2),L=H(1,12,"M",$),I=t=>{L._(t),P._(t)},P=O(1,$),Y=(t,e)=>A(t.a,[e,"fake-tabs__item"]),J=a(5,t=>{x(t.b,"href",t.f),x(t.b,"aria-disabled",t.f===void 0&&"true"),$(t)}),B=q("cFx9GWW",t=>z(t,"b")),K=a(9,t=>{W(t,"b",t.j,{href:1,"aria-current":1,"aria-disabled":1}),B(t)}),Q=(t,e)=>X(t,e[0]),X=(t,e)=>{(({class:i,href:c,...r})=>K(t,r))(e),J(t,e.href),Y(t,e.class)},tt=a(12,L),p=(t,e)=>tt(t,e!==void 0?e:0),E=U(14,t=>A(t.a,["fake-tabs",t.n==="large"&&"fake-tabs--large",t.g])),et=a(13,E),w=(t,e)=>et(t,e!==void 0?e:"regular"),at=a(15,P),v=(t,e)=>at(t,e===!1?"true":"page"),g=a(6,E),nt=q("L9vwvUm",t=>z(t,"a")),T=a(11,t=>{R(t,"a",t.l,{class:1}),nt(t)}),st=V(1,"<li><a></a></li>"," D ",I,Q),y=(t,e)=>st(t,[e||[]]),rt=Z(2),F=rt,ot=(t,e)=>{(({class:i,content:c,selected:r,size:k,tab:C,tabMatchesCurrentUrl:l,...o})=>T(t,o))(e),p(t,e.selected),g(t,e.class),w(t,e.size),y(t,e.tab),v(t,e.tabMatchesCurrentUrl),F(t,e.content)},it=d("Tg3NfKL",_,f,h,ot),ct=_,lt=(t=>`/${t}&`)(f),ut=n("mt_2wp6","Tab 3"),bt=n("MGPwtYt","Tab 2"),mt=n("IRzCXdf","Tab 1"),dt=N("um7DYky","<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ornare, quam at lacinia pretium, lacus urna luctus nisi, eget molestie massa tortor id lacus. Aenean ac fringilla lacus. Fusce vel dui ex. Vivamus luctus egestas nulla, non hendrerit purus luctus at. Maecenas vel diam enim. Pellentesque quam neque, porttitor tincidunt vestibulum at, dapibus sit amet tortor.</p>");function _t(t){h(t.a),y(t.a,s(s(M({href:"https://www.ebay.com/",content:mt(t)}),{href:"https://www.ebay.com/",content:bt(t)}),{href:"https://www.ebay.com/",content:ut(t)})),S(t.a,dt(t))}const ft=a(2,t=>{const e={selected:1,...t.c};g(t.a,e.class),p(t.a,e.selected),w(t.a,e.size),v(t.a,e.tabMatchesCurrentUrl),T(t.a,(({class:i,content:c,selected:r,size:k,tab:C,tabMatchesCurrentUrl:l,...o})=>o)(e))}),ht=d("fANoZVM",ct,lt,_t,ft),pt=`<evo-fake-tabs selected=1 ...input>
  <@tab href="https://www.ebay.com/">
    Tab 1
  </@tab>
  <@tab href="https://www.ebay.com/">
    Tab 2
  </@tab>
  <@tab href="https://www.ebay.com/">
    Tab 3
  </@tab>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ornare, quam
    at lacinia pretium, lacus urna luctus nisi, eget molestie massa tortor id
    lacus. Aenean ac fringilla lacus. Fusce vel dui ex. Vivamus luctus egestas
    nulla, non hendrerit purus luctus at. Maecenas vel diam enim. Pellentesque
    quam neque, porttitor tincidunt vestibulum at, dapibus sit amet tortor.
  </p>
</evo-fake-tabs>
`,wt=_,vt=(t=>`/${t}&`)(f),gt=n("OS6H2xF","Tab 3"),Tt=n("arH8zx6","Tab 2"),yt=n("ajq74U_","Tab 1");function kt(t){h(t.a),y(t.a,s(s(M({href:"https://www.ebay.com/",content:yt(t)}),{href:"https://www.ebay.com/",content:Tt(t)}),{href:"https://www.ebay.com/",content:gt(t)}))}const Ct=a(2,t=>{g(t.a,t.c.class),F(t.a,t.c.content),p(t.a,t.c.selected),w(t.a,t.c.size),v(t.a,t.c.tabMatchesCurrentUrl),T(t.a,(({class:e,content:i,selected:c,size:r,tab:k,tabMatchesCurrentUrl:C,...l})=>l)(t.c))}),xt=d("FZ8tf_Z",wt,vt,kt,Ct),Mt=`<evo-fake-tabs ...input>
  <@tab href="https://www.ebay.com/">
    Tab 1
  </@tab>
  <@tab href="https://www.ebay.com/">
    Tab 2
  </@tab>
  <@tab href="https://www.ebay.com/">
    Tab 3
  </@tab>
</evo-fake-tabs>
`,Dt=_,$t=(t=>`/${t}&`)(f),qt=n("ZtyuAcE","Tab 3"),zt=n("x9yV9GJ","Tab 2"),Ut=n("RWVAD8x","Tab 1"),At=N("ZSwUJpx","<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ornare, quam at lacinia pretium, lacus urna luctus nisi, eget molestie massa tortor id lacus. Aenean ac fringilla lacus. Fusce vel dui ex. Vivamus luctus egestas nulla, non hendrerit purus luctus at. Maecenas vel diam enim. Pellentesque quam neque, porttitor tincidunt vestibulum at, dapibus sit amet tortor.</p>");function Nt(t){h(t.a),y(t.a,s(s(M({href:"https://www.ebay.com/",content:Ut(t)}),{content:zt(t)}),{href:"https://www.ebay.com/",content:qt(t)})),S(t.a,At(t))}const St=a(2,t=>{const e={selected:1,...t.c};g(t.a,e.class),p(t.a,e.selected),w(t.a,e.size),v(t.a,e.tabMatchesCurrentUrl),T(t.a,(({class:i,content:c,selected:r,size:k,tab:C,tabMatchesCurrentUrl:l,...o})=>o)(e))}),Lt=d("a8DTy6a",Dt,$t,Nt,St),Pt=`<evo-fake-tabs selected=1 ...input>
  <@tab href="https://www.ebay.com/">
    Tab 1
  </@tab>
  <@tab>Tab 2</@tab>
  <@tab href="https://www.ebay.com/">
    Tab 3
  </@tab>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ornare, quam
    at lacinia pretium, lacus urna luctus nisi, eget molestie massa tortor id
    lacus. Aenean ac fringilla lacus. Fusce vel dui ex. Vivamus luctus egestas
    nulla, non hendrerit purus luctus at. Maecenas vel diam enim. Pellentesque
    quam neque, porttitor tincidunt vestibulum at, dapibus sit amet tortor.
  </p>
</evo-fake-tabs>
`,Ht={title:"navigation & disclosure/evo-fake-tabs",component:it,parameters:{docs:{description:{component:j}}},argTypes:{selected:{type:"number",control:"number",description:"Zero-based index of selected tab tab and panel"},tabMatchesCurrentUrl:{type:"boolean",control:"boolean",description:'Specify whether the href of the currently active fake tab matches the current window url. Default is true. This property is used to configure the underlying aria-current attribute (i.e. a value of "page" (default) or "true").'},tab:{description:"The tab element. This takes the same attributes as an anchor tag which navigates the user to a new page. ","@":{"<a> attributes":{description:"All attributes and event handlers from [the native HTML `<a>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a) will be passed through"}}},"<div> attributes":{description:"All attributes and event handlers from [the native HTML `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through"}}},u=D(ht,pt),b=D(xt,Mt),m=D(Lt,Pt);u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode)",...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:"buildExtensionTemplate(NoPanelTemplate, NoPanelTemplateCode)",...b.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DisabledTemplate, DisabledTemplateCode)",...m.parameters?.docs?.source}}};const Ot=["Default","NoPanel","Disabled"];export{u as Default,m as Disabled,b as NoPanel,Ot as __namedExportsOrder,Ht as default};
