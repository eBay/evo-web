import{t as tt}from"./storybook-code-source-CCz6reEH.js";import{b as S,a as et}from"./utils-DWCsNc5l.js";import{v as d,b,_ as m,d as nt,e as ot,p as rt,c}from"./defineComponent-B-Bg3Ud2.js";import{_ as st}from"./index-DUNAbEK8.js";import{_ as a}from"./render-tag-B9T2mz-j.js";import{_ as G}from"./of-fallback-DrWEmKV1.js";import{a as e}from"./attr-tag-Dvq4QMvY.js";import{_ as at,a as it,b as lt,c as ut,d as dt}from"./index-orqHlpvC.js";import{_ as bt}from"./index-D_BBUif8.js";import{_ as mt}from"./index-Cw3bSwrm.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./dynamic-tag-B3Rndxlm.js";import"./style-value-D9hyxyYb.js";import"./index-CL8ZzwFK.js";/* empty css             *//* empty css               */import"./index-CV1wlU-t.js";import"./index-CuXUxThH.js";import"./index-D4_UUNUd.js";import"./index-eAGEw84U.js";const ct=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
    <span>
        ebay-toggle-button-group
    </span>
    <span style="font-weight: normal; font-size: medium; margin-bottom: -15px;">
        DS v1.0.0
    </span>
</h1>

Group of toggle buttons.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/buttons-ebay-toggle-button-group)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/buttons-ebay-toggle-button-group)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/ebay-toggle-button-group/examples)
`;class pt extends Marko.Component{onCreate(){this.state={pressed:{}}}onInput(o){this.state.pressed=Object.fromEntries([...o.button||[]].map(({pressed:r},n)=>[n,!!r]))}handleToggle(o,{originalEvent:r,pressed:n}){this.input.variant==="radio"?this.state.pressed={[o]:!0}:this.input.variant==="radio-toggle"?this.state.pressed={[o]:n}:this.state.pressed={...this.state.pressed,[o]:n},this.emit("change",{originalEvent:r,pressed:Object.keys(this.state.pressed).filter(i=>this.state.pressed[+i]).map(i=>+i)})}}const v="Tkeo2eN",l=d.t(v);b.r(v,()=>l);const R=pt;l._=m(function(s,o,r,n,i,p){const{class:t,layoutType:y,columnsMin:w,columnsXS:_,columnsSM:$,columnsMD:J,columnsXL:q,a11yText:H,a11yLabelId:U,button:N=[],...Y}=s;o.be("div",nt({class:ot(["toggle-button-group",t]),"data-columns-min":w,"data-columns-xs":_,"data-columns-sm":$,"data-columns-md":J,"data-columns-xl":q},rt(Y)),"0",n,null,4),o.be("ul",{"aria-label":H,"aria-labelledby":U},"1",n,null,0);{let K=0;for(const{layoutType:Q=y,pressed:St,...Z}of G(N)){let M=K++;const D=`[${M}]`;o.be("li",null,"2"+D,n,null,0),a(st,{layoutType:Q,pressed:i.pressed[M],...Z},o,r,"3"+D,[["toggle","handleToggle",!1,[M]]]),o.ee()}}o.ee(),o.ee()},{t:v},R);l.Component=c(R,l._);const P="zOVIl6q",g=d.t(P);b.r(P,()=>g);const W={};g._=m(function(s,o,r,n,i,p){a(l,e.i(()=>{e.r("button",e.i(()=>(e.a("subtitle",{renderBody:t=>{t.t("Car",n)}}),e.a("icon",{renderBody:t=>{a(at,{},t,r,"1")}}),t=>{t.t("Icon 1",n)}))),e.r("button",e.i(()=>(e.a("subtitle",{renderBody:t=>{t.t("ATV",n)}}),e.a("icon",{renderBody:t=>{a(it,{},t,r,"2")}}),t=>{t.t("Icon 2",n)}))),e.r("button",e.i(()=>(e.a("subtitle",{renderBody:t=>{t.t("Cart",n)}}),e.a("icon",{renderBody:t=>{a(bt,{},t,r,"3")}}),t=>{t.t("Icon 3",n)}))),e.r("button",e.i(()=>(e.a("subtitle",{renderBody:t=>{t.t("Jet Ski",n)}}),e.a("icon",{renderBody:t=>{a(lt,{},t,r,"4")}}),t=>{t.t("Icon 4",n)}))),e.r("button",e.i(()=>(e.a("subtitle",{renderBody:t=>{t.t("Motorcycle",n)}}),e.a("icon",{renderBody:t=>{a(ut,{},t,r,"5")}}),t=>{t.t("Icon 5",n)}))),e.r("button",e.i(()=>(e.a("subtitle",{renderBody:t=>{t.t("Snowmobile",n)}}),e.a("icon",{renderBody:t=>{a(dt,{},t,r,"6")}}),t=>{t.t("Icon 6",n)})))},{layoutType:"list",...s,button:void 0}),o,r,"0")},{t:P,i:!0},W);g.Component=c(W,g._);const yt=`<ebay-toggle-button-group layoutType="list" ...input>
    <@button>
        <@subtitle>Car</@subtitle>
        <@icon>
            <ebay-car-24-icon/>
        </@icon>
        Icon 1
    </@button>
    <@button>
        <@subtitle>ATV</@subtitle>
        <@icon>
            <ebay-atv-24-icon/>
        </@icon>
        Icon 2
    </@button>
    <@button>
        <@subtitle>Cart</@subtitle>
        <@icon>
            <ebay-cart-24-icon/>
        </@icon>
        Icon 3
    </@button>
    <@button>
        <@subtitle>Jet Ski</@subtitle>
        <@icon>
            <ebay-jet-ski-24-icon/>
        </@icon>
        Icon 4
    </@button>
    <@button>
        <@subtitle>Motorcycle</@subtitle>
        <@icon>
            <ebay-motorcycle-24-icon/>
        </@icon>
        Icon 5
    </@button>
    <@button>
        <@subtitle>Snowmobile</@subtitle>
        <@icon>
            <ebay-snowmobile-24-icon/>
        </@icon>
        Icon 6
    </@button>
</ebay-toggle-button-group>
`,F="LysiJUy",h=d.t(F);b.r(F,()=>h);const j={};h._=m(function(s,o,r,n,i,p){a(l,e.i(()=>{e.r("button",e.i(()=>(e.a("subtitle",{renderBody:t=>{t.t("Empty on load",n)}}),t=>{t.t("First Item",n)}))),e.r("button",e.i(()=>(e.a("subtitle",{renderBody:t=>{t.t("Empty on load",n)}}),t=>{t.t("Second Item",n)}))),e.r("button",e.i(()=>(e.a("subtitle",{renderBody:t=>{t.t("Pressed on load",n)}}),t=>{t.t("Third Item",n)}),{pressed:!0})),e.r("button",e.i(()=>(e.a("subtitle",{renderBody:t=>{t.t("Empty on load",n)}}),t=>{t.t("Fourth Item",n)}))),e.r("button",e.i(()=>(e.a("subtitle",{renderBody:t=>{t.t("Pressed on load",n)}}),t=>{t.t("Fifth Item",n)}),{pressed:!0})),e.r("button",e.i(()=>(e.a("subtitle",{renderBody:t=>{t.t("Empty on load",n)}}),t=>{t.t("Sixth Item",n)})))},{...s,button:void 0}),o,r,"0")},{t:F,i:!0},j);h.Component=c(j,h._);const gt=`<ebay-toggle-button-group ...input>
    <@button>
        <@subtitle>Empty on load</@subtitle>
        First Item
    </@button>
    <@button>
        <@subtitle>Empty on load</@subtitle>
        Second Item
    </@button>
    <@button pressed>
        <@subtitle>Pressed on load</@subtitle>
        Third Item
    </@button>
    <@button>
        <@subtitle>Empty on load</@subtitle>
        Fourth Item
    </@button>
    <@button pressed>
        <@subtitle>Pressed on load</@subtitle>
        Fifth Item
    </@button>
    <@button>
        <@subtitle>Empty on load</@subtitle>
        Sixth Item
    </@button>
</ebay-toggle-button-group>
`,L="Ck8y1gb",I=d.t(L);b.r(L,()=>I);const A={onCreate(){this.state={pressed:[]}},handleChange({pressed:s}){this.state.pressed=s},clearSelection(){this.state.pressed=[]}};I._=m(function(s,o,r,n,i,p){const t=["Option 1","Option 2","Option 3"];o.be("div",{style:"width:100%"},"0",n,null,1),a(mt,{renderBody:y=>{y.t("Clear Selection",n)}},o,r,"1",[["click","clearSelection",!1]]),a(l,e.i(()=>{let y=0;for(const w of G(t)){let _=y++;e.r("button",{pressed:i.pressed.includes(_),renderBody:$=>{$.t(w,n)}})}},{a11yText:"Toggle Button Group",...s,button:void 0}),o,r,"2",[["change","handleChange",!1]]),o.ee()},{t:L},A);I.Component=c(A,I._);const ht=`$ const titles = ["Option 1", "Option 2", "Option 3"];

<div style={ width: "100%" }>
    <ebay-button onClick("clearSelection")>
        Clear Selection
    </ebay-button>
    <ebay-toggle-button-group
        on-change("handleChange")
        a11yText="Toggle Button Group"
        ...input
    >
        <for|title, i| of=titles>
            <@button pressed=state.pressed.includes(i)>
                \${title}
            </@button>
        </for>
    </ebay-toggle-button-group>
</div>
class {
    declare state: {
        pressed: number[];
    };
    onCreate() {
        this.state = {
            pressed: [],
        };
    }
    handleChange({ pressed }: { pressed: number[] }) {
        this.state.pressed = pressed;
    }
    clearSelection() {
        this.state.pressed = [];
    }
}
`,X="WfweuYH",f=d.t(X);b.r(X,()=>f);const V={};f._=m(function(s,o,r,n,i,p){o.be("h5",{id:r.elId("label")},"0",n,null,1),o.t("Select Items",n),o.ee(),a(l,e.i(()=>{e.r("button",e.i(()=>(e.a("subtitle",{renderBody:t=>{t.t("Empty on load",n)}}),t=>{t.t("First Item",n)}))),e.r("button",e.i(()=>(e.a("subtitle",{renderBody:t=>{t.t("Empty on load",n)}}),t=>{t.t("Second Item",n)}))),e.r("button",e.i(()=>(e.a("subtitle",{renderBody:t=>{t.t("Pressed on load",n)}}),t=>{t.t("Third Item",n)}),{pressed:!0})),e.r("button",e.i(()=>(e.a("subtitle",{renderBody:t=>{t.t("Empty on load",n)}}),t=>{t.t("Fourth Item",n)}))),e.r("button",e.i(()=>(e.a("subtitle",{renderBody:t=>{t.t("Pressed on load",n)}}),t=>{t.t("Fifth Item",n)}),{pressed:!0})),e.r("button",e.i(()=>(e.a("subtitle",{renderBody:t=>{t.t("Empty on load",n)}}),t=>{t.t("Sixth Item",n)})))},{a11yLabelId:r.elId("label"),...s,button:void 0}),o,r,"1")},{t:X,i:!0},V);f.Component=c(V,f._);const It=`<h5 id:scoped="label">
    Select Items
</h5>
<ebay-toggle-button-group a11y-label-id:scoped="label" ...input>
    <@button>
        <@subtitle>Empty on load</@subtitle>
        First Item
    </@button>
    <@button>
        <@subtitle>Empty on load</@subtitle>
        Second Item
    </@button>
    <@button pressed>
        <@subtitle>Pressed on load</@subtitle>
        Third Item
    </@button>
    <@button>
        <@subtitle>Empty on load</@subtitle>
        Fourth Item
    </@button>
    <@button pressed>
        <@subtitle>Pressed on load</@subtitle>
        Fifth Item
    </@button>
    <@button>
        <@subtitle>Empty on load</@subtitle>
        Sixth Item
    </@button>
</ebay-toggle-button-group>
`,O="SUx65xA",B=d.t(O);b.r(O,()=>B);const z={};B._=m(function(s,o,r,n,i,p){a(l,e.i(()=>{e.r("button",e.i(()=>(e.a("subtitle",{renderBody:t=>{t.t("Empty on load",n)}}),t=>{t.t("First Item",n)}))),e.r("button",e.i(()=>(e.a("subtitle",{renderBody:t=>{t.t("Empty on load",n)}}),t=>{t.t("Second Item",n)}))),e.r("button",e.i(()=>(e.a("subtitle",{renderBody:t=>{t.t("Pressed on load",n)}}),t=>{t.t("Third Item",n)}),{pressed:!0})),e.r("button",e.i(()=>(e.a("subtitle",{renderBody:t=>{t.t("Empty on load",n)}}),t=>{t.t("Fourth Item",n)}))),e.r("button",e.i(()=>(e.a("subtitle",{renderBody:t=>{t.t("Pressed on load",n)}}),t=>{t.t("Fifth Item",n)}),{pressed:!0})),e.r("button",e.i(()=>(e.a("subtitle",{renderBody:t=>{t.t("Empty on load",n)}}),t=>{t.t("Sixth Item",n)})))},{columnsMin:1,columnsSM:3,columnsXS:2,columnsMD:6,columnsXL:8,...s,button:void 0}),o,r,"0")},{t:O,i:!0},z);B.Component=c(z,B._);const ft=`<ebay-toggle-button-group
    columnsMin=1
    columnsSM=3
    columnsXS=2
    columnsMD=6
    columnsXL=8
    ...input
>
    <@button>
        <@subtitle>Empty on load</@subtitle>
        First Item
    </@button>
    <@button>
        <@subtitle>Empty on load</@subtitle>
        Second Item
    </@button>
    <@button pressed>
        <@subtitle>Pressed on load</@subtitle>
        Third Item
    </@button>
    <@button>
        <@subtitle>Empty on load</@subtitle>
        Fourth Item
    </@button>
    <@button pressed>
        <@subtitle>Pressed on load</@subtitle>
        Fifth Item
    </@button>
    <@button>
        <@subtitle>Empty on load</@subtitle>
        Sixth Item
    </@button>
</ebay-toggle-button-group>
`,Bt=s=>({input:et(s)}),At={title:"buttons/ebay-toggle-button-group",component:l,parameters:{docs:{description:{component:ct}}},argTypes:{variant:{type:"string",control:{type:"select"},options:["checkbox","radio","radio-toggle"],description:'Selection type for the buttons in the group. May be `"checkbox"` (default), `"radio"`, or `"radio-toggle"` (same as radio but with the option to deselect)'},columnsMin:{type:"number",control:{type:"number"},description:"Preferred minimum number of columns for smallest container/screen (1-3). If this is not set will do an automatic layout. It is recommended to not set this unless needed."},columnsXS:{type:"number",control:{type:"number"},description:"Preferred minimum number of columns within extra small containers. If this is not set will do an automatic layout. It is recommended to not set this unless needed."},columnsSM:{type:"number",control:{type:"number"},description:"Preferred minimum number of columns within small containers. If this is not set will do an automatic layout. It is recommended to not set this unless needed."},columnsMD:{type:"number",control:{type:"number"},description:"Preferred minimum number of columns within medium containers. If this is not set will do an automatic layout. It is recommended to not set this unless needed."},columnsXL:{type:"number",control:{type:"number"},description:"Preferred minimum number of columns within extra large containers. If this is not set will do an automatic layout. It is recommended to not set this unless needed."},a11yText:{type:"string",description:"Localized, accessibility text for the group. Cannot be used together with `a11yLabelId`"},a11yLabelId:{type:"string",description:"Id of the element that labels the group. Required for a11y compliance. Cannot be used together with `a11yText`"},layoutType:{type:"string",control:{type:"select"},options:["minimal","list","gallery"],description:'Enforced layout type of all buttons. May be `"minimal"` (default), `"list"`, or `"gallery"`. Gallery layout may only be used when there is also an icon or an image, and minimal layout may **not** be used when there is an icon or an image'},buttons:{name:"@button",description:"Represents an `<ebay-toggle-button/>` to be used as part of the group",table:{category:"@attribute tags"}},onChange:{action:"on-change",description:"Triggered when the pressed state changes",table:{category:"Events",defaultValue:{summary:"{ originalEvent, pressed }"}}}}},u=Bt.bind({});u.args={a11yText:"Toggle Button Group",button:[{renderBody:"Button 1"},{renderBody:"Button 2"},{renderBody:"Button 3"},{renderBody:"Button 4"},{renderBody:"Button 5"},{renderBody:"Button 6"}]};u.parameters={docs:{source:{code:tt("ebay-toggle-button",u.args)}}};const T=S(g,yt),k=S(h,gt),C=S(f,It),x=S(I,ht),E=S(B,ft,{columnsMin:1,columnsSM:3,columnsXS:2,columnsMD:6,columnsXL:8});u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: addRenderBodies(args)
})`,...u.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:"buildExtensionTemplate(withIconsTemplate, withIconsCode)",...T.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:"buildExtensionTemplate(withDefaultTemplate, withDefaultCode)",...k.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:"buildExtensionTemplate(externalLabelTemplate, externalLabelCode)",...C.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:"buildExtensionTemplate(controlledTemplate, controlledCode)",...x.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`buildExtensionTemplate(columnsTemplate, columnsCode, {
  columnsMin: 1,
  columnsSM: 3,
  columnsXS: 2,
  columnsMD: 6,
  columnsXL: 8
})`,...E.parameters?.docs?.source}}};const Vt=["Default","WithIcons","WithDefaultSelected","externalLabel","Controlled","PerferedColumns"];export{x as Controlled,u as Default,E as PerferedColumns,k as WithDefaultSelected,T as WithIcons,Vt as __namedExportsOrder,At as default,C as externalLabel};
