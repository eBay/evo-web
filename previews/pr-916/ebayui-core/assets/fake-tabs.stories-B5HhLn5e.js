import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{n}from"./storybook-code-source-DlBTenms.js";import{n as r,t as i}from"./utils-C7m-hPxw.js";import{c as a,h as o,l as s,n as c,r as l,s as u,t as d,u as f}from"./registry-95LfxIAE.js";import{t as p}from"./render-tag-hXgrwudm.js";import{t as m}from"./dynamic-tag-CCbAf3a9.js";import{t as h}from"./of-fallback-rY0Dkoru.js";import{t as g}from"./attr-tag--AgZ8oJt.js";import{t as _}from"./const-element-BfQ4jh6r.js";import{t as v}from"./tabs-DqM1PmOr.js";var y;function b(){return(b=t((()=>{y=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-fake-tabs
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v2.1.0
    </span>
</h1>

Tabs which link to other pages. This can be used to deep link to other pages which switch the current tab.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/navigation-disclosure-ebay-fake-tabs)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/navigation-disclosure-ebay-fake-tabs)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/ebay-video/examples)
`})))()}function x(){return(x=t((()=>{v()})))()}var S,C,w,T,E,D,O,k,A,j,M;function N(){return(N=t((()=>{S=f(),x(),a(),C=e(m()),w=e(o()),T=e(u()),E=e(h()),D=e(c()),O=d(),k=e(l()),A=`M`,j=(0,S.t)(A),(0,O.r)(A,()=>j),M={},j._=(0,D.default)(function(e,t,n,r,i,a){let{selectedIndex:o=0,class:c,size:l,tab:u=[],tabMatchesCurrentUrl:d,renderBody:f,...p}=e;var m=d===!1?`true`:`page`;t.be(`div`,(0,T.default)(s(p),{class:(0,w.default)([`fake-tabs`,l===`large`&&`fake-tabs--large`,c])}),`0`,r,null,4),t.be(`ul`,{class:`fake-tabs__items`},`1`,r,null,1);{let e=0;for(let i of(0,E.default)(u||[])){let a=e++,c=`[${a}]`,{href:l,...u}=i;var h=o===a;t.be(`li`,(0,T.default)(s(u),{class:(0,w.default)([i.class,`fake-tabs__item`])}),`2`+c,r,null,4),t.be(`a`,{"aria-current":h&&m,href:l},`3`+c,r,null,0),(0,C.default)(t,i.renderBody,null,null,null,null,n,`4`+c),t.ee(),t.ee()}}t.ee(),t.be(`div`,{class:`fake-tabs__content`},`5`,r,null,1),t.be(`div`,{class:`fake-tabs__panel`},`6`,r,null,1),t.be(`div`,{class:`fake-tabs__cell`},`7`,r,null,1),t.be(`div`,null,`8`,r,null,0),(0,C.default)(t,f,null,null,null,null,n,`9`),t.ee(),t.ee(),t.ee(),t.ee(),t.ee()},{t:A,i:!0},M),j.Component=(0,k.default)(M,j._)})))()}var P,F,I,L,R,z,B,V,H,U,W;function G(){return(G=t((()=>{P=f(),F=g(),I=e(_()),N(),L=e(p()),R=e(c()),z=d(),B=e(l()),V=`EsYCA58`,H=(0,P.t)(V),U=(0,I.default)(`p`,null,1).t(`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ornare, quam at lacinia pretium, lacus urna luctus nisi, eget molestie massa tortor id lacus. Aenean ac fringilla lacus. Fusce vel dui ex. Vivamus luctus egestas nulla, non hendrerit purus luctus at. Maecenas vel diam enim. Pellentesque quam neque, porttitor tincidunt vestibulum at, dapibus sit amet tortor.`),(0,z.r)(V,()=>H),W={},H._=(0,R.default)(function(e,t,n,r,i,a){(0,L.default)(j,(0,F.i)(()=>((0,F.r)(`tab`,{href:`https://www.ebay.com/`,renderBody:e=>{e.t(`Tab 1`,r)}}),(0,F.r)(`tab`,{renderBody:e=>{e.t(`Tab 2`,r)}}),(0,F.r)(`tab`,{href:`https://www.ebay.com/`,renderBody:e=>{e.t(`Tab 3`,r)}}),e=>{e.n(U,r)})),t,n,`0`)},{t:V,i:!0},W),H.Component=(0,B.default)(W,H._)})))()}var K;function q(){return(q=t((()=>{K=`<ebay-fake-tabs>
    <@tab href="https://www.ebay.com/">
        Tab 1
    </@tab>
    <@tab>
        Tab 2
    </@tab>
    <@tab href="https://www.ebay.com/">
        Tab 3
    </@tab>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ornare, quam at lacinia pretium, lacus urna luctus nisi, eget molestie massa tortor id lacus. Aenean ac fringilla lacus. Fusce vel dui ex. Vivamus luctus egestas nulla, non hendrerit purus luctus at. Maecenas vel diam enim. Pellentesque quam neque, porttitor tincidunt vestibulum at, dapibus sit amet tortor.
    </p>
</ebay-fake-tabs>
`})))()}var J,Y,X,Z,Q;function $(){return($=t((()=>{b(),N(),G(),q(),J=e=>({input:i(e)}),Y={title:`navigation & disclosure/ebay-fake-tabs`,component:j,parameters:{docs:{description:{component:y}}},argTypes:{selectedIndex:{control:{type:`number`},description:`0-based index of selected tab tab and panel`},tabMatchesCurrentUrl:{control:{type:`boolean`},description:`Specify whether the href of the currently active fake tab matches the current window url. Default is true. This property is used to configure the underlying aria-current attribute (i.e. a value of "page" (default) or "true").`},tab:{name:`@tab`,table:{category:`@attribute tags`}},size:{type:`select`,options:[`regular`,`large`],description:`The size of the tabs`},href:{control:{type:`text`},description:`The link to take the user to for each tab`,table:{category:`@tag attributes`}}}},X=J.bind({}),X.args={tab:[{renderBody:`Tab 1`,href:`https://www.ebay.com`},{renderBody:`Tab 2`,href:`https://www.ebay.com`},{renderBody:`Tab 3`,href:`https://www.ebay.com`}],renderBody:`Lorum ipsom dolor`},X.parameters={docs:{source:{code:n(`ebay-fake-tabs`,X.args,{tabs:`tab`})}}},Z=r(H,K),Q=[`Standard`,`Disabled`],X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: addRenderBodies(args)
})`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DisabledTabsTemplate, DisabledTabsCode)`,...Z.parameters?.docs?.source}}}})))()}$();export{Z as Disabled,X as Standard,Q as __namedExportsOrder,Y as default};