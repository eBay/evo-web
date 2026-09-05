import{t as ee}from"./storybook-code-source-CCz6reEH.js";import{a as te}from"./utils-DWCsNc5l.js";import{v as A,b as C,_ as T,d as Q,p as R,e as ae,c as I}from"./defineComponent-B-Bg3Ud2.js";import"./iframe-C3jlT5NX.js";import{_ as re,a as X}from"./index-BbH6Wr7o.js";import{_ as V}from"./dynamic-tag-B3Rndxlm.js";import{a as s}from"./attr-tag-Dvq4QMvY.js";import{_ as F}from"./of-fallback-DrWEmKV1.js";import{_ as se}from"./index-C4AmBNSj.js";import{_ as h}from"./render-tag-B9T2mz-j.js";import{r as ne}from"./index-eAGEw84U.js";import{g as oe}from"./index-Dc9wtS83.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CL8ZzwFK.js";/* empty css             *//* empty css                    */import"./index-o98Za02-.js";/* empty css                    *//* empty css               *//* empty css             */import"./index-BmRbtDLs.js";import"./index-Cw3bSwrm.js";import"./index-CV1wlU-t.js";import"./index-CuXUxThH.js";import"./index-D4_UUNUd.js";import"./index-n7KuEsog.js";import"./index-CZw0tK3j.js";import"./index-DtSBqbft.js";/* empty css             */import"./index-CiJctCOb.js";import"./style-value-D9hyxyYb.js";import"./index-DvCAfrCY.js";import"./dynamic-import-DdmK3sM_.js";import"./index-CNiudnPv.js";import"./index-CJDBRdqY.js";import"./index-BVXY2btv.js";class ie extends Marko.Component{handleClick(e){this.emit("select",{originalEvent:e,el:e?.target})}handleMenuBreadcrumb(e){this.emit("select",{originalEvent:e,el:e?.el})}onCreate(){this.state={hiddenIndex:[]}}onMount(){this._calculateMaxItems(),this.subscribeTo(ne).on("resize",this._calculateMaxItems.bind(this))}onInput(e){this.cachedWidths=[];const r=[],t=[...e.item??[]];if((t||[]).length>4)for(let n=1;n<t.length-2;n++)r.push(n);this.state.hiddenIndex=r,this.newInput=!0}onUpdate(){this.newInput&&(this.newInput=!1,this._calculateMaxItems())}_getItemWidths(e){let r=this.cachedWidths;if(r.length!==e.children.length){r=[];for(let t=0;t<e.children.length;t++){const n=e.children[t];n.hasAttribute("hidden")?(n.removeAttribute("hidden"),r[t]=n.offsetWidth,n.setAttribute("hidden","")):r[t]=n.offsetWidth}this.cachedWidths=r}return r}_calculateMaxItems(){const{input:e,state:r}=this;if(![...e.item??[]].some(o=>!o.type))return;const n=this.getEl("items"),p=oe(n),a=n.children.length-1,b=this._getItemWidths(n),P=r.hiddenIndex.length>0;let u=1;const $=a-1,E=$-2;let i=b[0]+b[a];P&&(i+=b[u],u++);const y=[];for(let o=$;o>=u;o--)i+=b[o],(i>p||E>=o)&&y.unshift(P?o-1:o);r.hiddenIndex=y}}const L="q3Qefhk",c=A.t(L);C.r(L,()=>c);const G=ie;c._=T(function(m,e,r,t,n,p){const{a11yHeadingText:a,a11yHeadingTag:b,a11yMenuButtonText:P,class:u,item:$=[],...E}=m,i=[...$];var y=(i||[]).some(g=>g.href!=null);e.be("nav",Q(R(E),{"aria-labelledby":r.elId("breadcrumbs-heading"),class:ae(["breadcrumbs","breadcrumb--overflow",u]),role:"navigation"}),"@root",t,null,4),V(e,b||"h2",()=>({id:r.elId("breadcrumbs-heading"),class:"clipped"}),g=>{g.t(a,t)},null,null,r,"0"),e.be("ul",null,"@items",t,null,0);{let g=0;for(const z of F(i)){let H=g++;const d=`[${H}]`;var o=n.hiddenIndex.indexOf(H)>-1;n.hiddenIndex.length>0&&H===1&&(e.be("li",null,"1"+d,t,null,0),h(se,s.i(()=>{let M=0;for(const w of F(n.hiddenIndex)){const O=`[${M+++d}]`;s.r("item",{type:y?"a":"button",...R(i[w]),renderBody:D=>{V(D,i[w].renderBody,null,null,null,null,r,"3"+O)}})}},{variant:"icon",transparent:!0,icon:re,collapseOnSelect:!0,a11yText:P}),e,r,"2"+d,[["select","handleMenuBreadcrumb",!1]]),h(X,{},e,r,"4"+d),e.ee()),e.be("li",{hidden:o},"5"+d,t,null,0),(()=>{var M=H===i.length-1,w=!z.href&&M;const O=y?"a":"button";e.be(O,Q(R(z),{"aria-current":w&&"location"}),"6"+d,t,null,4,{onclick:r.d("click",!w&&"handleClick",!1)}),V(e,z.renderBody,null,null,null,null,r,"7"+d),e.ee(),M||h(X,{},e,r,"8"+d)})(),e.ee()}}e.ee(),e.ee()},{t:L},G);c.Component=I(G,c._);const U="LWufV6X",S=A.t(U);C.r(U,()=>S);const J={};S._=T(function(m,e,r,t,n,p){h(c,s.i(()=>{s.r("item",{href:"http://www.ebay.com/",renderBody:a=>{a.t("eBay",t)}}),s.r("item",{href:"https://www.ebay.com/rpp/cell-phone-pda",renderBody:a=>{a.t("Cell Phones, Smart Watches & Accessories",t)}}),s.r("item",{href:"https://www.ebay.com/b/Smart-Watch-Accessories/182064/bn_16565905",renderBody:a=>{a.t("Smart Watch Accessories",t)}}),s.r("item",{renderBody:a=>{a.t("Smart Watch Bands",t)}})},{a11yHeadingText:"Page navigation"}),e,r,"0")},{t:U,i:!0},J);S.Component=I(J,S._);const j="nACB02E",x=A.t(j);C.r(j,()=>x);const K={};x._=T(function(m,e,r,t,n,p){h(c,s.i(()=>{s.r("item",{href:"http://www.ebay.com/",renderBody:a=>{a.t("eBay",t)}}),s.r("item",{href:"https://www.ebay.com/rpp/cell-phone-pda",renderBody:a=>{a.t("Cell Phones, Smart Watches & Accessories",t)}}),s.r("item",{href:"https://www.ebay.com/b/Smart-Watch-Accessories/182064/bn_16565905",renderBody:a=>{a.t("Smart Watch Accessories",t)}}),s.r("item",{href:"https://www.ebay.com/b/Smart-Watch-Bands/182068/bn_16565906",renderBody:a=>{a.t("Smart Watch Bands",t)}})},{a11yHeadingText:"Page navigation"}),e,r,"0")},{t:j,i:!0},K);x.Component=I(K,x._);const q="V$PcWU1",k=A.t(q);C.r(q,()=>k);const Y={};k._=T(function(m,e,r,t,n,p){h(c,s.i(()=>{s.r("item",{href:"http://www.ebay.com/",renderBody:a=>{a.t("eBay",t)}}),s.r("item",{href:"https://www.ebay.com/rpp/cell-phone-pda",renderBody:a=>{a.t("Cell Phones, Smart Watches & Accessories",t)}}),s.r("item",{href:"https://www.ebay.com/b/Smart-Watch-Accessories/182064/bn_16565905",renderBody:a=>{a.t("Smart Watch Accessories",t)}}),s.r("item",{renderBody:a=>{a.t("Smart Watch Bands",t)}})},{a11yHeadingText:"Page navigation"}),e,r,"0")},{t:q,i:!0},Y);k.Component=I(Y,k._);const N="qwk27O3",v=A.t(N);C.r(N,()=>v);const Z={};v._=T(function(m,e,r,t,n,p){h(c,s.i(()=>{s.r("item",{renderBody:a=>{a.t("eBay",t)}}),s.r("item",{renderBody:a=>{a.t("Cell Phones, Smart Watches & Accessories",t)}}),s.r("item",{renderBody:a=>{a.t("Smart Watch Accessories",t)}}),s.r("item",{renderBody:a=>{a.t("Smart Watch Bands",t)}})},{a11yHeadingText:"Page navigation"}),e,r,"0",[["select","emit",!1,["select"]]])},{t:N},Z);v.Component=I(Z,v._);const ce=`<ebay-breadcrumbs a11yHeadingText="Page navigation">
    <@item href="http://www.ebay.com/">
        eBay
    </@item>
    <@item href="https://www.ebay.com/rpp/cell-phone-pda">
        Cell Phones, Smart Watches & Accessories
    </@item>
    <@item href="https://www.ebay.com/b/Smart-Watch-Accessories/182064/bn_16565905">
        Smart Watch Accessories
    </@item>
    <@item>Smart Watch Bands</@item>
</ebay-breadcrumbs>
`,me=`<ebay-breadcrumbs a11yHeadingText="Page navigation">
    <@item href="http://www.ebay.com/">
        eBay
    </@item>
    <@item href="https://www.ebay.com/rpp/cell-phone-pda">
        Cell Phones, Smart Watches & Accessories
    </@item>
    <@item href="https://www.ebay.com/b/Smart-Watch-Accessories/182064/bn_16565905">
        Smart Watch Accessories
    </@item>
    <@item href="https://www.ebay.com/b/Smart-Watch-Bands/182068/bn_16565906">
        Smart Watch Bands
    </@item>
</ebay-breadcrumbs>
`,de=`<ebay-breadcrumbs a11yHeadingText="Page navigation">
    <@item href="http://www.ebay.com/">
        eBay
    </@item>
    <@item href="https://www.ebay.com/rpp/cell-phone-pda">
        Cell Phones, Smart Watches & Accessories
    </@item>
    <@item href="https://www.ebay.com/b/Smart-Watch-Accessories/182064/bn_16565905">
        Smart Watch Accessories
    </@item>
    <@item>Smart Watch Bands</@item>
</ebay-breadcrumbs>
`,le=`class {}
<ebay-breadcrumbs a11yHeadingText="Page navigation" on-select("emit", "select")>
    <@item>eBay</@item>
    <@item>Cell Phones, Smart Watches & Accessories</@item>
    <@item>Smart Watch Accessories</@item>
    <@item>Smart Watch Bands</@item>
</ebay-breadcrumbs>
`,he=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
    <span>
        ebay-breadcrumbs
    </span>
    <span style="font-weight: normal; font-size: medium; margin-bottom: -15px;">
        DS v1.2.0
    </span>
</h1>

**Note**: If you want to have client side or ajax based navigation then you should omit the href attribute on each item. This will cause each item to be <button> instead of an <a>. Alternatively you can manually preventDefault the provided originalEvent on the select event.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/navigation-disclosure-ebay-breadcrumbs)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/navigation-disclosure-ebay-breadcrumbs)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/ebay-breadcrumbs/examples)
`,pe=m=>({input:te(m)}),Ye={title:"navigation & disclosure/ebay-breadcrumbs",component:c,parameters:{docs:{description:{component:he}}},argTypes:{a11yHeadingText:{control:{type:"text"},description:"Localized, heading for breadcrumb which will be clipped"},a11yHeadingTag:{control:{type:"text"},table:{defaultValue:{summary:"h2"}},description:"heading tag for breadcrumb "},a11yMenuButtonText:{control:{type:"text"},description:"Localized, a11y text for the collapsed menu button"},href:{name:"href",table:{category:"@item attribute tags"},description:"anchor href; omitting the href will switch to a button"},item:{name:"@item",table:{category:"@attribute tags"}},onSelect:{action:"on-select",description:"Triggered on breadcrumb selected clicked",table:{category:"Events",defaultValue:{summary:"{ originalEvent, el }"}}}}},l=pe.bind({});l.args={a11yHeadingText:"Current pages",a11yMenuButtonText:"menu",item:[{href:"http://www.ebay.com/",renderBody:"eBay"},{href:"https://www.ebay.com/rpp/cell-phone-pda",renderBody:"Cell Phones, Smart Watches & Accessories"},{href:"https://www.ebay.com/b/Smart-Watch-Accessories/182064/bn_16565905",renderBody:"Smart Watch Accessories"},{href:"https://www.ebay.com/b/Smart-Watch-Bands/182068/bn_16565906",renderBody:"Smart Watch Bands"}]};l.parameters={docs:{source:{code:ee("ebay-breadcrumbs",l.args)}}};const f=()=>({component:S});f.parameters={docs:{source:{code:ce}}};const _=()=>({component:x});_.parameters={docs:{source:{code:me}}};const B=()=>({component:k});B.parameters={docs:{source:{code:de}}};const W=()=>({component:v});W.parameters={docs:{source:{code:le}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: addRenderBodies(args)
})`,...l.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => ({
  component: breadcrumb2
})`,...f.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => ({
  component: breadcrumb3
})`,..._.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => ({
  component: breadcrumb4
})`,...B.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => ({
  component: breadcrumb5
})`,...W.parameters?.docs?.source}}};const Ze=["heading","lastPageCurrent","lastPageParent","pageCustomAttribute","buttons"];export{Ze as __namedExportsOrder,W as buttons,Ye as default,l as heading,f as lastPageCurrent,_ as lastPageParent,B as pageCustomAttribute};
