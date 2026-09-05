import{t as K}from"./storybook-code-source-CCz6reEH.js";import{a as A}from"./utils-DWCsNc5l.js";import{v as y,b as u,_ as f,d as F,p as j,c as g}from"./defineComponent-B-Bg3Ud2.js";/* empty css                    *//* empty css                */import{_ as R}from"./index-CeRTVWM9.js";import{_ as p}from"./render-tag-B9T2mz-j.js";import{_ as U}from"./dynamic-tag-B3Rndxlm.js";import{_ as M,a as q}from"./index-L6h8lR5W.js";import{h as z}from"./index-eAGEw84U.js";import{_ as J}from"./index-D_BBUif8.js";import{a as m}from"./attr-tag-Dvq4QMvY.js";import{_ as L}from"./const-element-Ea3wmYuQ.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./attrs-DH_qbVAN.js";import"./index-D7kkco59.js";import"./index-CL8ZzwFK.js";/* empty css             */import"./dynamic-import-DdmK3sM_.js";import"./index-CNiudnPv.js";import"./index-CJDBRdqY.js";import"./preload-helper-PPVm8Dsz.js";const N=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-tooltip
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.0.0
    </span>
</h1>

**Note:** You must supply the \`.tooltip__host\` class to the element in the \`<@host>\` to
which you would like to have the tooltip hover and focus event bindings. In the case that your element
is not focusable, the first focusable element will trigger the tooltip's focus events.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/notices-tips-ebay-tooltip)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/notices-tips-ebay-tooltip)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/ebay-tooltip/examples)
`;class O extends Marko.Component{onCreate(){this.state={open:!1}}onInput(e){(e.open===!0||e.open===!1)&&(this.state.open=e.open)}handleExpand(){this.state.open=!0,this.emit("expand")}handleCollapse(){this.state.open=!1,this.emit("collapse")}handleKeydown(e){z(e,()=>{this.state.open=!1})}}const b="dFlfM1J",i=y.t(b),Y=typeof window<"u";u.r(b,()=>i);const _=O;i._=f(function(o,e,t,r,d,v){const{content:n,heading:x,host:E,noHover:S,offset:T,placement:I,pointer:C="bottom",noShift:B,notInline:$,noFlip:V,...H}=o;Y&&d.open&&p(R,{to:typeof window=="object"&&document,__events:["on","keydown"]},e,t,"0",[["keydown","handleKeydown",!1]]),e.be("span",null,"1",r,null,0),p(M,{open:d.open,type:"tooltip",overlayId:t.elId("overlay"),noFlip:V,notInline:$,noShift:B,noHover:S,pointer:C,placement:I,offset:T,renderBody:c=>{c.be("span",F(j(H),{class:"tooltip"}),"2",r,null,4,{pa:{class:1}}),U(c,E,null,null,null,null,t,"3"),p(q,{type:"tooltip",id:t.elId("overlay"),heading:x,content:n},c,t,"4"),c.ee()}},e,t,"@base",[["loaded","emit",!1,["loaded"]],["base-expand","handleExpand",!1],["base-collapse","handleCollapse",!1]]),e.ee()},{t:b},_);i.Component=g(_,i._);const h="V3jhqT2",l=y.t(h),G=L("p",null,1).t("Use Access Key 'S' to display settings.");u.r(h,()=>l);const w={};l._=f(function(o,e,t,r,d,v){p(i,m.i(()=>{m.a("host",{renderBody:n=>{n.be("button",{name:"icon-btn-1",accesskey:"i",class:"icon-btn tooltip__host",type:"button","aria-label":"Developer-handled label"},"1",r,null,0),p(J,{},n,t,"2"),n.ee()}}),m.a("content",{renderBody:n=>{n.n(G,r)}})},{open:o.open}),e,t,"0")},{t:h,i:!0},w);l.Component=g(w,l._);const P=`export interface Input {
    open: boolean;
}

<ebay-tooltip open=input.open>
    <@host>
        <button
            name="icon-btn-1"
            accesskey="i"
            class="icon-btn tooltip__host"
            type="button"
            aria-label="Developer-handled label"
        >
            <ebay-cart-24-icon/>
        </button>
    </@host>
    <@content>
        <p>Use Access Key 'S' to display settings.</p>
    </@content>
</ebay-tooltip>
`,k=o=>({input:A(o)}),fe={title:"notices & tips/ebay-tooltip",component:i,parameters:{docs:{description:{component:N}}},argTypes:{placement:{options:["top","right","bottom","left","top-start","right-start","bottom-start","left-start","top-end","right-end","bottom-end","left-end"],control:{type:"select"},description:"places tooltip position"},offset:{control:{type:"number"},description:"offsets tooltip position"},noHover:{control:{type:"boolean"},description:"disable hover (and only use focus) to open the tooltip"},host:{name:"@host",description:"The body which will be wrapped as the tooltip's host",table:{category:"@attribute tags"}},content:{name:"@content",description:"The content to be displayed in the tooltip",table:{category:"@attribute tags"}},open:{control:{type:"boolean"},description:"allows dev to specify whether tooltip is open or closed"},noFlip:{control:{type:"boolean"},description:"disables flipping tooltip when its offscreen",table:{defaultValue:{summary:"false"}}},noShift:{control:{type:"boolean"},description:"disables shifting tooltip when its offscreen",table:{defaultValue:{summary:"false"}}},notInline:{control:{type:"boolean"},description:"disables moving tooltip to be inline with content when it is rendered",table:{defaultValue:{summary:"false"}}},onCollapse:{action:"on-collapse",description:"Triggered on menu collapse",table:{category:"Events",defaultValue:{summary:""}}},onExpand:{action:"on-expand",description:"Triggered on menu expand",table:{category:"Events",defaultValue:{summary:""}}},onLoaded:{action:"on-loaded",description:"Triggered when tooltip finishes loading",table:{category:"Events"}}}},a=k.bind({});a.args={host:{renderBody:'<a href="https://www.ebay.com" class="tooltip__host">View options</a>'},content:{renderBody:"<p>Use Access Key 'S' to display settings.</p>"}};a.parameters={docs:{source:{code:K("ebay-tooltip",a.args)}}};const s=(o,e)=>({input:k(o).input,component:l});s.parameters={controls:{exclude:/./}};s.parameters={docs:{source:{code:P}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: addRenderBodies(args)
})`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: Input, context: any) => ({
  // eslint-disable-next-line new-cap
  input: Template(args, context).input,
  component: buttonComponent
})`,...s.parameters?.docs?.source}}};const ge=["Standard","buttonHost"];export{a as Standard,ge as __namedExportsOrder,s as buttonHost,fe as default};
