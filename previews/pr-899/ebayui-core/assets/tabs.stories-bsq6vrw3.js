import{b as H,a as z}from"./utils-DWCsNc5l.js";import{t as D}from"./storybook-code-source-CCz6reEH.js";import{v as S,b as $,_ as M,d as x,p as v,e as T,c as R}from"./defineComponent-B-Bg3Ud2.js";/* empty css             */import{_ as C}from"./dynamic-tag-B3Rndxlm.js";import{_ as E}from"./of-fallback-DrWEmKV1.js";import{c as K}from"./index-D1mN6L1e.js";import{a as Z,b as N}from"./index-eAGEw84U.js";import{a as i}from"./attr-tag-Dvq4QMvY.js";import{_ as u}from"./const-element-Ea3wmYuQ.js";import{_ as O}from"./render-tag-B9T2mz-j.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Ktyjf5Jd.js";import"./index-CNiudnPv.js";const V=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-tabs
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v2.1.0
    </span>
</h1>

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/navigation-disclosure-ebay-tabs)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/navigation-disclosure-ebay-tabs)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/ebay-tabs/examples)
`;class j extends Marko.Component{handleHeadingKeydown(e,a){Z(a,()=>{a.preventDefault(),this._setIndex(e)}),N(a,()=>{a.preventDefault();const{input:t,state:r}=this,p=r.tab.length,n=a.charCode||a.keyCode,_=n===37||n===38?-1:1;let c=(r.selectedIndex+p+_)%p,h;for(;h=this.getEl(`tabs-${c}`),!(h.getAttribute("aria-disabled")!=="true"||c===r.selectedIndex);)c=(c+p+_)%p;h?.focus(),(!t.activation||t.activation==="auto")&&this._setIndex(c)})}handleHeadingClick(e){this._setIndex(e)}onCreate(){this.state={selectedIndex:0,tab:[],panel:[]}}onInput(e){const{state:a}=this;a.tab=[...e.tab||[]],a.panel=[...e.panel||[]],isNaN(e.selectedIndex)||(a.selectedIndex=parseInt(e.selectedIndex,10)%(a.tab.length||1))}onMount(){this._setupMakeup()}onUpdate(){this._setupMakeup()}onRender(){typeof window<"u"&&this._cleanupMakeup()}onDestroy(){this._cleanupMakeup()}_setIndex(e){const{state:a}=this;e!==a.selectedIndex&&(a.selectedIndex=e,this.emit("select",{selectedIndex:e}))}_setupMakeup(){const{input:e,state:a}=this;e.fake||(this._linearRovingTabindex=K(this.getEl("tabs"),".tabs__item",{index:a.selectedIndex,wrap:!0}))}_cleanupMakeup(){this._linearRovingTabindex&&(this._linearRovingTabindex.destroy(),this._linearRovingTabindex=void 0)}}const I="ZZrntrI",m=S.t(I);var U=["href","disabled"];$.r(I,()=>m);const L=j;m._=M(function(b,e,a,t,r,p){const{class:n,size:_="regular",selectedIndex:c,activation:h,tab:ee=[],panel:ae=[],...P}=b;e.be("div",x(v(P),{class:T(["tabs",_==="large"&&"tabs--large",n])}),"0",t,null,4),e.be("div",{role:"tablist",class:"tabs__items"},"@tabs",t,null,0);{let f=0;for(const l of E(r.tab)){let s=f++;var k=r.selectedIndex===s;const o=`@tabs-${s}`,B=`[${o}]`;e.be("div",x(v(l,U),{id:a.elId(`tabs-${s}`),"aria-controls":a.elId(`tabpanel-${s}`),role:"tab","aria-selected":k&&"true","aria-disabled":l.disabled&&"true",class:T([l.class,"tabs__item"])}),o,t,null,4,{onclick:a.d("click",!l.disabled&&"handleHeadingClick",!1,[s]),onkeydown:a.d("keydown","handleHeadingKeydown",!1,[s])}),e.be("span",null,"1"+B,t,null,0),C(e,l.renderBody,null,null,null,null,a,"2"+B),e.ee(),e.ee()}}e.ee(),e.be("div",{class:"tabs__content"},"3",t,null,1);{let f=0;for(const l of E(r.panel)){let s=f++;const o=`[${s}]`;var k=r.selectedIndex===s;e.be("div",x(v(l),{id:a.elId(`tabpanel-${s}`),"aria-labelledby":a.elId(`tabs-${s}`),role:"tabpanel",class:T([l.class,"tabs__panel"]),hidden:!k}),"4"+o,t,null,4),e.be("div",{class:"tabs__cell"},"5"+o,t,null,1),e.be("div",null,"6"+o,t,null,0),C(e,l.renderBody,null,null,null,null,a,"7"+o),e.ee(),e.ee(),e.ee()}}e.ee(),e.ee()},{t:I},L);m.Component=R(L,m._);const w="OT0ptIZ",y=S.t(w),W=u("h3",null,1).t("Panel 1"),q=u("p",null,1).t("1. Lorem ipsum dolor sit amet"),F=u("h3",null,1).t("Panel 2"),G=u("p",null,1).t("2. Lorem ipsum dolor sit amet"),J=u("h3",null,1).t("Panel 3"),Q=u("p",null,1).t("3. Lorem ipsum dolor sit amet");$.r(w,()=>y);const A={};y._=M(function(b,e,a,t,r,p){O(m,i.i(()=>{i.r("tab",{renderBody:n=>{n.t("Tab 1",t)}}),i.r("tab",{disabled:!0,renderBody:n=>{n.t("Tab 2",t)}}),i.r("tab",{renderBody:n=>{n.t("Tab 3",t)}}),i.r("panel",{renderBody:n=>{n.n(W,t),n.n(q,t)}}),i.r("panel",{renderBody:n=>{n.n(F,t),n.n(G,t)}}),i.r("panel",{renderBody:n=>{n.n(J,t),n.n(Q,t)}})},{...b,tab:void 0,panel:void 0}),e,a,"0")},{t:w,i:!0},A);y.Component=R(A,y._);const X=`<ebay-tabs ...input>
    <@tab>Tab 1</@tab>
    <@tab disabled>Tab 2</@tab>
    <@tab>Tab 3</@tab>
    <@panel>
        <h3>Panel 1</h3>
        <p>1. Lorem ipsum dolor sit amet</p>
    </@panel>
    <@panel>
        <h3>Panel 2</h3>
        <p>2. Lorem ipsum dolor sit amet</p>
    </@panel>
    <@panel>
        <h3>Panel 3</h3>
        <p>3. Lorem ipsum dolor sit amet</p>
    </@panel>
</ebay-tabs>
`,Y=b=>({input:z(b)}),_e={title:"navigation & disclosure/ebay-tabs",component:m,parameters:{docs:{description:{component:V}}},argTypes:{selectedIndex:{control:{type:"text"},description:"0-based index of selected tab tab and panel"},activation:{control:{type:"text"},description:'whether to use automatic or manual activation when navigating by keyboard, "auto" (default) / "manual"'},size:{type:"select",options:["regular","large"],description:"The size of the tabs"},tab:{name:"@tab",table:{category:"@attribute tags"}},panel:{name:"@panel",table:{category:"@attribute tags"}},fake:{control:{type:"boolean"},description:"Whether to use fake tabs (no roving tabindex)"},onSelect:{action:"on-select",description:"Triggered on tab selected",table:{category:"Events",defaultValue:{summary:"{ selectedIndex }"}}}}},d=Y.bind({});d.args={panel:[{renderBody:"panel one"},{renderBody:"panel two"},{renderBody:"panel three"}],tab:[{renderBody:"Tab 1"},{renderBody:"Tab 2"},{renderBody:"Tab 3"}]};d.parameters={docs:{source:{code:D("ebay-tabs",d.args,{tab:"tab",panel:"panel"})}}};const g=H(y,X);d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: addRenderBodies(args)
})`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DisabledTabsTemplate, DisabledTabsCode)",...g.parameters?.docs?.source}}};const he=["Standard","Disabled"];export{g as Disabled,d as Standard,he as __namedExportsOrder,_e as default};
