import{v as k,b as I,_ as h,d as x,e as B,p as y,c as f}from"./defineComponent-B-Bg3Ud2.js";import{_}from"./dynamic-tag-B3Rndxlm.js";import{_ as D}from"./of-fallback-DrWEmKV1.js";import{_ as ee}from"./style-value-D9hyxyYb.js";import{_ as P,a as j,b as E,c as te}from"./index-CbDx_osR.js";import{_ as r}from"./render-tag-B9T2mz-j.js";import{a as t}from"./attr-tag-Dvq4QMvY.js";import{_ as ae}from"./index-DQJCyt5g.js";import{_ as ne}from"./index-CjSj6Ml2.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CL8ZzwFK.js";/* empty css             */import"./const-element-Ea3wmYuQ.js";const ie=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
    <span>
        ebay-list
    </span>
    <span style="font-weight: normal; font-size: medium; margin-bottom: -15px;">
        DS v1.2.0
    </span>
</h1>

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/building-blocks-ebay-list)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/building-blocks-ebay-list)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/ebay-list/examples)
`;class q extends Marko.Component{}const L="Pvw3Hiz",m=k.t(L);I.r(L,()=>q);const A={};q.renderer=m._=h(function(s,i,a,n,w,v){const{class:e,style:G,item:J=[],...K}=s;i.be("div",x({style:ee(G),class:B(["list",e])},y(K)),"0",n,null,4),i.be("ul",null,"1",n,null,0);{let Q=0;for(const z of D(J||[])){let M=Q++;const l=`[${M}]`,{class:U,style:X,as:O,separator:Y,leading:$,trailing:S,...Z}=z;Y?i.e("hr",null,"2"+l,n,0,0):(i.be("li",null,"3"+l,n,null,0),_(i,O||"div",()=>({class:["list__body",U],style:X,...y(Z)}),o=>{if($){const{class:C,...T}=$;o.be("div",x({class:B(["list__leading",C])},y(T)),"5"+l,n,null,4),_(o,$,null,null,null,null,a,"6"+l),o.ee()}if(o.be("div",{class:"list__body"},"7"+l,n,null,1),_(o,z,null,null,null,null,a,"8"+l),o.ee(),S){const{class:C,...T}=S;o.be("div",x({class:B(["list__trailing",C])},y(T)),"9"+l,n,null,4),_(o,S,null,null,null,null,a,"10"+l),o.ee()}},null,null,a,"4"+l,[["click",O==="button"&&"emit",!1,["button-click",{index:M}]]]),i.ee())}}i.ee(),i.ee()},{t:L,s:!0},A);m.Component=f(A,m._);const W="wLNPFcO",u=k.t(W);I.r(W,()=>u);const F={};u._=h(function(s,i,a,n,w,v){r(m,t.i(()=>{t.r("item",t.i(()=>(t.a("leading",{renderBody:e=>{r(P,{},e,a,"1")}}),e=>{e.t("Item 1",n)}))),t.r("item",t.i(()=>(t.a("leading",{renderBody:e=>{r(j,{},e,a,"2")}}),e=>{e.t("Item 2",n)}))),t.r("item",t.i(()=>(t.a("leading",{renderBody:e=>{r(E,{},e,a,"3")}}),e=>{e.t("Item 3",n)})))}),i,a,"0")},{t:W,i:!0},F);u.Component=f(F,u._);const re=`<ebay-list>
    <@item>
        <@leading>
            <ebay-folder-16-icon/>
        </@leading>
        Item 1
    </@item>
    <@item>
        <@leading>
            <ebay-lamp-16-icon/>
        </@leading>
        Item 2
    </@item>
    <@item>
        <@leading>
            <ebay-file-16-icon/>
        </@leading>
        Item 3
    </@item>
</ebay-list>
`,H="wNdvNIq",g=k.t(H);I.r(H,()=>g);const R={};g._=h(function(s,i,a,n,w,v){r(m,t.i(()=>{t.r("item",{as:"button",renderBody:e=>{e.t("Item 1",n)}}),t.r("item",t.i(()=>(t.a("trailing",{renderBody:e=>{r(ae,{},e,a,"1")}}),e=>{e.t("Item 2",n)}),{as:"a",href:"https://www.ebay.com"})),t.r("item",t.i(()=>(t.a("trailing",{renderBody:e=>{r(ne,{ariaLabelledby:a.elId("switch-item")},e,a,"2")}}),e=>{e.t("Item 3",n)}),{id:a.elId("switch-item")}))}),i,a,"0",[["button-click","emit",!1,["button-click"]]])},{t:H},R);g.Component=f(R,g._);const se=`class {}
<ebay-list on-button-click("emit", "button-click")>
    <@item as="button">
        Item 1
    </@item>
    <@item as="a" href="https://www.ebay.com">
        <@trailing>
            <ebay-chevron-right-16-icon/>
        </@trailing>
        Item 2
    </@item>
    <@item id:scoped="switch-item">
        <@trailing>
            <ebay-switch aria-labelledby:scoped="switch-item"/>
        </@trailing>
        Item 3
    </@item>
</ebay-list>
`,N="d7MH0Dv",b=k.t(N);I.r(N,()=>b);const V={};b._=h(function(s,i,a,n,w,v){r(m,t.i(()=>{t.r("item",t.i(()=>(t.a("leading",{renderBody:e=>{r(P,{},e,a,"1")}}),e=>{e.t("Item 1",n)}))),t.r("item",{separator:!0}),t.r("item",t.i(()=>(t.a("leading",{renderBody:e=>{r(j,{},e,a,"2")}}),e=>{e.t("Item 2",n)}))),t.r("item",t.i(()=>(t.a("leading",{renderBody:e=>{r(E,{},e,a,"3")}}),e=>{e.t("Item 3",n)}))),t.r("item",t.i(()=>(t.a("leading",{renderBody:e=>{r(E,{},e,a,"4")}}),e=>{e.t("Item 4",n)}))),t.r("item",{separator:!0}),t.r("item",t.i(()=>(t.a("leading",{renderBody:e=>{r(te,{},e,a,"5")}}),e=>{e.t("Item 5",n)})))}),i,a,"0")},{t:N,i:!0},V);b.Component=f(V,b._);const le=`<ebay-list>
    <@item>
        <@leading>
            <ebay-folder-16-icon/>
        </@leading>
        Item 1
    </@item>
    <@item separator/>
    <@item>
        <@leading>
            <ebay-lamp-16-icon/>
        </@leading>
        Item 2
    </@item>
    <@item>
        <@leading>
            <ebay-file-16-icon/>
        </@leading>
        Item 3
    </@item>
    <@item>
        <@leading>
            <ebay-file-16-icon/>
        </@leading>
        Item 4
    </@item>
    <@item separator/>
    <@item>
        <@leading>
            <ebay-lightbulb-16-icon/>
        </@leading>
        Item 5
    </@item>
</ebay-list>
`,fe={title:"building blocks/ebay-list",component:m,parameters:{docs:{description:{component:ie}}},argTypes:{item:{name:"@item",description:"Item to render in the list",table:{category:"@attribute tags"}},as:{name:"as",description:"Element to render the item as",table:{category:"@item attributes"}},leading:{name:"@leading",description:"Leading content to render in the list item",table:{category:"@item attributes"}},trailing:{name:"@trailing",description:"Trailing content to render in the list item",table:{category:"@item attributes"}},separator:{name:"separator",description:"If true, will render the current item as a separator",table:{category:"@item attributes"}},"onButton-click":{action:"on-button-click",description:"Triggered on item click when the item is renderd as a button",table:{category:"Events",defaultValue:{summary:"{ index }"}}}}},c=s=>({input:s,component:u});c.args={};c.parameters={docs:{source:{code:re}}};const d=s=>({input:s,component:g});d.args={};d.parameters={docs:{source:{code:se}}};const p=s=>({input:s,component:b});p.args={};p.parameters={docs:{source:{code:le}}};const we=["Static","Interactive","WithSeparator"];c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: args,
  component: StaticTemplate
})`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: args,
  component: InteractiveTemplate
})`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: args,
  component: WithSeparatorTemplate
})`,...p.parameters?.docs?.source}}};export{d as Interactive,c as Static,p as WithSeparator,we as __namedExportsOrder,fe as default};
