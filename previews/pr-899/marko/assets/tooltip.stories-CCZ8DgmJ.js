import{b as l}from"./utils-DyU2_5R1.js";import{_ as o,a as i,l as p,j as c,q as $,x as h,b as _,f as v,B as y,A as T,e as w}from"./dom-BBo1hePz.js";import{a as m,c as d,b as u,$ as f,T as H}from"./index-CBVy7JIj.js";import{a as x,b as S,$ as E,c as V}from"./index-BrKpxf3r.js";import{$ as k,a as C,b as D,c as A}from"./evo-icon-settings-24-CMaQwIq0.js";import{b as B,c as P,a as O,$ as U}from"./index-CquZUOiu.js";import"./iframe-DGm0Ux3b.js";import"./preload-helper-PPVm8Dsz.js";import"./index-JzESrrWT.js";import"./controllable.feat-DoF6VR6g.js";import"./controllable-input.feat-B0hxE-Qr.js";import"./controllable-open.feat-DDgkakf1.js";import"./controllable-select.feat-CdKLdSlF.js";import"./index-ClZyAMjO.js";import"./index-qYrWtsuo.js";/* empty css                *//* empty css                    */import"./index-Bh2oPHHR.js";import"./index-IQ2MfdxZ.js";import"./evo-icon-spinner-24-BrKnd4JX.js";import"./evo-icon-chevron-down-16-DlJj6fZt.js";import"./index-BjjBrcq5.js";const I=m,M=(t=>`/${t}&`)(f),L=o("l04gSRC","<a href=https://www.ebay.com>View options</a>"),N=c("tBJ0UA6","Use Access Key 'S' to display settings.");function R(t){u(t.a)}const W=(t,e)=>d(t.a,{...e,host:p({content:L(t)}),content:N(t)}),j=i("n2wPuOY",I,M,R,W),q=`<evo-tooltip ...input>
    <@host>
        <a href="https://www.ebay.com">View options</a>
    </@host>
    Use Access Key 'S' to display settings.
</evo-tooltip>
`,Y=m,z=(t=>`/${t}&`)(f),G=t=>{E(t.a),V(t.a,{placeholder:"Email address"})},J=o("cMeTTZI",(t=>`<!>${t}<!>`)(S),(t=>`b/${t}&b`)(x),G),Z=c("CWAfAV4","Please choose the email address you use the most.");function K(t){u(t.a)}const Q=(t,e)=>d(t.a,{...e,noHover:!0,host:p({content:J(t)}),content:Z(t)}),F=i("WwYW_1Z",Y,z,K,Q),X=`<evo-tooltip ...input noHover>
    <@host>
        <evo-input placeholder="Email address"/>
    </@host>
    Please choose the email address you use the most.
</evo-tooltip>
`,tt="_grid_k5ldq_2";const et="<div></div><a></a>",ot=" c",nt=$(4,t=>h(t.a,t._.c)),st=nt,at=c("UjI4qOA","<p>Tooltip content for <code> </code></p><p>Here we explicitly set <code>flip=false</code> for demonstration. By default, tourtip will not extend outside the window</p>","DbD ",st),rt=$(4,t=>h(t.a,t._.c)),lt=rt,it=o("GYmOo3D"," "," ",lt),b=w(3,t=>d(t.a,{...t._.c,placement:t.c,flip:!1,host:p({as:"button",content:it(t)}),content:at(t)})),g=y(0,b),pt=t=>{g._(t),u(t.a)},ct=_(2,b),mt=(t,e)=>ct(t,e[0]),dt=T(0,m,(t=>`/${t}&`)(f),pt,mt);function ut(t){v(t.a,tt),dt(t,[["top-start","top","top-end","right-start","right","right-end","bottom-start","bottom","bottom-end","left-start","left","left-end"]])}const ft=_(2,g),$t=i("r7GD90a",et,ot,ut,ft),ht=`<style/styles>
    .grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 4rem;
        justify-items: center;
    }
</style>

<div class=(styles as any).grid>
    <for|placement| of=([
        "top-start", "top", "top-end",
        "right-start", "right", "right-end",
        "bottom-start", "bottom", "bottom-end",
        "left-start", "left", "left-end",
    ] as const)>
        <evo-tooltip ...input placement=placement flip=false>
            <@host as="button">\${placement}</@host>
            <p>Tooltip content for <code>\${placement}</code></p>
            <p>Here we explicitly set <code>flip=false</code> for demonstration. By default, tourtip will not extend outside the window</p>
        </evo-tooltip>
    </for>
</div>
a`,_t=m,bt=(t=>`/${t}&`)(f),gt=t=>{D(t.a),A(t.a,{})},vt=o("JHnhxpG",C,(t=>`/${t}&`)(k),gt),yt=t=>{O(t.a),U(t.a,{a11yText:"Settings",content:vt(t)})},Tt=o("QY9S$Zf",(t=>`<!>${t}<!>`)(P),(t=>`b/${t}&b`)(B),yt),wt=c("RBlDSSo","Configure your settings");function Ht(t){u(t.a)}const xt=(t,e)=>d(t.a,{...e,placement:"right",host:p({content:Tt(t)}),content:wt(t)}),St=i("g1aUJUj",_t,bt,Ht,xt),Et=`<evo-tooltip ...input placement="right">
    <@host>
        <evo-icon-button a11yText="Settings">
            <evo-icon-settings-24/>
        </evo-icon-button>
    </@host>
    Configure your settings
</evo-tooltip>
`,Kt={title:"notices & tips/evo-tooltip",component:H,parameters:{docs:{description:{component:"A tooltip provides brief, supplementary information on hover or focus."}}},argTypes:{open:{controllable:!0,type:"boolean",control:"boolean",description:"Visibility of the tooltip."},placement:{type:"string",control:"select",options:["top","top-start","top-end","right","right-start","right-end","bottom","bottom-start","bottom-end","left","left-start","left-end"],description:"Position of the overlay relative to the host element",table:{defaultValue:{summary:"bottom"}}},offset:{type:"number",control:"number",description:"Offset distance from the host element in pixels",table:{defaultValue:{summary:"8"}}},flip:{type:"boolean",control:"boolean",description:"Enable automatic flipping when near viewport edge",table:{defaultValue:{summary:"true"}}},shift:{type:"boolean",control:"boolean",description:"Enable automatic shifting when near viewport edge",table:{defaultValue:{summary:"true"}}},inline:{type:"boolean",control:"boolean",description:"Enable inline positioning middleware",table:{defaultValue:{summary:"true"}}},noHover:{type:"boolean",control:"boolean",description:"Disable hover behavior (only focus will open the tooltip)",table:{defaultValue:{summary:"false"}}},host:{type:{name:"object",value:{},required:!0},description:"The host element that triggers the tooltip.",table:{type:{summary:void 0}},"@":{as:{type:"string",control:"text",description:"Override the element that the item is rendered as, instead of `<span>`",table:{defaultValue:{summary:"span"}}},"<span> attributes":{description:"All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through"}}},heading:{description:"Optional heading content, rendered as a styled `<span>`.","@":{as:{type:"string",control:"text",description:"Override the element that the item is rendered as, instead of `<span>`",table:{defaultValue:{summary:"span"}}},"<span> attributes":{description:"All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through"}}},"<span> attributes":{description:"All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through"}}},n=l(j,q),s=l(F,X),a=l(St,Et),r=l($t,ht);n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode)",...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"buildExtensionTemplate(NoHoverTemplate, NoHoverTemplateCode)",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"buildExtensionTemplate(IconButtonHostTemplate, IconButtonHostTemplateCode)",...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"buildExtensionTemplate(PlacementsTemplate, PlacementsTemplateCode)",...r.parameters?.docs?.source}}};const Qt=["Default","NoHover","IconButtonHost","Placements"];export{n as Default,a as IconButtonHost,s as NoHover,r as Placements,Qt as __namedExportsOrder,Kt as default};
