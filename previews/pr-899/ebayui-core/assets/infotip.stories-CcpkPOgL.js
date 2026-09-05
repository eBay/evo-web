import{b as $}from"./utils-DWCsNc5l.js";import{v as y,b as g,_,d as H,p as J,e as w,c as x}from"./defineComponent-B-Bg3Ud2.js";/* empty css                    */import{_ as h}from"./dynamic-tag-B3Rndxlm.js";import{_ as K}from"./index-Q-hYL3Bf.js";import{_ as p}from"./render-tag-B9T2mz-j.js";import{_ as N,a as P}from"./index-L6h8lR5W.js";import{a as s}from"./attr-tag-Dvq4QMvY.js";import{_ as U}from"./index-BIl_hUE3.js";import{_ as L}from"./const-element-Ea3wmYuQ.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CL8ZzwFK.js";/* empty css             */import"./attrs-DH_qbVAN.js";import"./index-D7kkco59.js";import"./dynamic-import-DdmK3sM_.js";import"./index-CNiudnPv.js";import"./index-CJDBRdqY.js";import"./preload-helper-PPVm8Dsz.js";import"./style-value-D9hyxyYb.js";import"./index-I3zWZF9K.js";import"./index-CeRTVWM9.js";import"./index-eAGEw84U.js";import"./index-Dc9wtS83.js";const W=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-infotip
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.0.0
    </span>
</h1>

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/buttons-ebay-infotip)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/buttons-ebay-infotip)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/ebay-infotip/examples)
`;class q extends Marko.Component{onInput(t){this.state={open:t.open||!1}}setOpen(t){this.input.variant==="modal"&&(this.state.open=t)}handleOpenModal(){this.setOpen(!0)}handleExpand(){this.setOpen(!0),this.emit("expand")}handleOverlayClose(){this.getComponent("base").collapse()}isExpanded(){return this.getComponent("base").isExpanded()}expand(){this.getComponent("base").expand()}collapse(){this.getComponent("base").collapse()}handleCollapse(){this.setOpen(!1),this.getEl("host").focus(),this.emit("collapse")}}const C="ODDJcvi",r=y.t(C);g.r(C,()=>r);const D=q;r._=_(function(n,t,e,i,c,k){const{a11yCloseButtonText:a,ariaLabel:I,class:R,content:B,disabled:F,heading:u,icon:O,open:Z,pointer:ee="bottom",variant:te,noFlip:M,noShift:j,notInline:z,...A}=n;var l=n.variant==="modal",E=l?"dialog--mini":"infotip";t.be("span",null,"0",i,null,0),p(N,{open:c.open,type:E,overlayId:e.elId("overlay"),noFlip:M,noShift:j,notInline:z,offset:n.offset,pointer:n.pointer,placement:n.placement,renderBody:o=>{o.be("span",H(J(A),{class:w(["infotip",l===!0&&"dialog--mini",R])}),"1",i,null,4,{pa:{class:1}}),o.be("button",{class:w([`${E}__host`,"icon-btn","icon-btn--transparent"]),type:"button",disabled:F,"aria-label":I},"@host",i,null,0,{onclick:e.d("click",l&&"handleOpenModal",!1)}),O?h(o,O,null,null,null,null,e,"2"):p(K,{},o,e,"3"),o.ee(),l!==!0&&p(P,{type:"infotip",id:e.elId("overlay"),heading:u,content:B,a11yCloseText:a},o,e,"4",[["overlay-close","handleOverlayClose",!1]]),o.ee()}},t,e,"@base",[["loaded","emit",!1,["loaded"]],["base-expand",l?void 0:"handleExpand",!1],["base-collapse",l?void 0:"handleCollapse",!1]]),t.ee(),l===!0&&p(U,s.i(()=>(s.a("header",{renderBody:o=>{h(o,u&&u.renderBody,null,null,null,null,e,"6")}}),o=>{h(o,B,null,null,null,null,e,"7")}),{open:c.open,a11yCloseText:a,ariaLabel:I}),t,e,"5",[["open","handleExpand",!1],["close","handleCollapse",!1]])},{t:C},D);r.Component=x(D,r._);const T="WdkKChB",m=y.t(T),G=L("p",null,1).t("This is some important info");g.r(T,()=>m);const S={};m._=_(function(n,t,e,i,c,k){p(r,s.i(()=>{s.a("heading",{renderBody:a=>{a.t("Important",i)}}),s.a("content",{renderBody:a=>{a.n(G,i)}})},{a11yCloseButtonText:"Dismiss infotip",ariaLabel:"Important information",...n,heading:void 0,content:void 0}),t,e,"0",[["loaded","emit",!1,["loaded"]],["expand","emit",!1,["expand"]],["collapse","emit",!1,["collapse"]]])},{t:T},S);m.Component=x(S,m._);const Q=`class {}
<ebay-infotip
    a11yCloseButtonText="Dismiss infotip"
    ariaLabel="Important information"
    on-loaded("emit", "loaded")
    on-expand("emit", "expand")
    on-collapse("emit", "collapse")
    ...input
>
    <@heading>Important</@heading>
    <@content>
        <p>This is some important info</p>
    </@content>
</ebay-infotip>
`,v="DOolBB1",d=y.t(v),X=L("p",null,1).t("This is some important info");g.r(v,()=>d);const V={};d._=_(function(n,t,e,i,c,k){p(r,s.i(()=>{s.a("heading",{renderBody:a=>{a.t("Important",i)}}),s.a("content",{renderBody:a=>{a.n(X,i)}})},{a11yCloseButtonText:"Dismiss infotip",ariaLabel:"Important information",open:!0,...n,heading:void 0,content:void 0}),t,e,"0",[["loaded","emit",!1,["loaded"]],["expand","emit",!1,["expand"]],["collapse","emit",!1,["collapse"]]])},{t:v,s:!0},V);d.Component=x(V,d._);const Y=`<ebay-infotip
    a11yCloseButtonText="Dismiss infotip"
    ariaLabel="Important information"
    on-loaded("emit", "loaded")
    on-expand("emit", "expand")
    on-collapse("emit", "collapse")
    open
    ...input
>
    <@heading>Important</@heading>
    <@content>
        <p>This is some important info</p>
    </@content>
</ebay-infotip>
`,Be={title:"buttons/ebay-infotip",component:r,parameters:{docs:{description:{component:W}}},argTypes:{heading:{name:"@heading",table:{category:"@attribute tags"}},content:{name:"@content",table:{category:"@attribute tags"}},icon:{name:"@icon",table:{category:"@attribute tags"}},variant:{control:{type:"select"},options:["default","modal"],description:"Either modal or default. If modal will show the mobile version of infotip"},placement:{options:["top","right","bottom","left","top-start","right-start","bottom-start","left-start","top-end","right-end","bottom-end","left-end"],control:{type:"select"},description:"places infotip position"},offset:{control:{type:"number"},description:"offsets infotip position",table:{defaultValue:{summary:"6"}}},noFlip:{control:{type:"boolean"},description:"disables flipping infotip when its offscreen",table:{defaultValue:{summary:"false"}}},noShift:{control:{type:"boolean"},description:"disables shifting infotip when its offscreen",table:{defaultValue:{summary:"false"}}},notInline:{control:{type:"boolean"},description:"disables moving infotip to be inline with content when it is rendered",table:{defaultValue:{summary:"false"}}},disabled:{control:{type:"boolean"},description:"adds a `disabled` attribute to the button"},a11yCloseButtonText:{control:{type:"text"},description:"Localized, a11y text for close button"},ariaLabel:{control:{type:"text"},description:'A descriptive label of what the infotip button represents (e.g. "Important information")'},open:{control:{type:"boolean"},description:"allows dev to specify whether infotip is open or closed"},pointer:{control:{type:"select"},options:["top","top-left","top-right","bottom","bottom-left","bottom-right","left","left-top","left-bottom","right","right-top","right-bottom"],description:"The position of the pointer. Note: Floating-UI flip middleware may adjust placement based on viewport space.",table:{defaultValue:{summary:"bottom"}}},onCollapse:{action:"on-collapse",description:"Triggered on menu collapse",table:{category:"Events",defaultValue:{summary:""}}},onExpand:{action:"on-expand",description:"Triggered on menu expand",table:{category:"Events",defaultValue:{summary:""}}}}},f=$(m,Q,{a11yCloseButtonText:"Dismiss infotip",ariaLabel:"Important information"}),b=$(d,Y,{a11yCloseButtonText:"Dismiss infotip",ariaLabel:"Important information",open:!0});f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode, {
  a11yCloseButtonText: "Dismiss infotip",
  ariaLabel: "Important information"
})`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`buildExtensionTemplate(OpenOnRenderTemplate, OpenOnRenderTemplateCode, {
  a11yCloseButtonText: "Dismiss infotip",
  ariaLabel: "Important information",
  open: true
})`,...b.parameters?.docs?.source}}};const Oe=["Default","OpenOnRender"];export{f as Default,b as OpenOnRender,Oe as __namedExportsOrder,Be as default};
