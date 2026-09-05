import{_ as l,f as e,g as z,h as B,w as O,i as W,l as P,k as o,m as r,v as i,N as c}from"./dom-8p8ib85z.js";import{b as L}from"./utils-DyU2_5R1.js";import{$ as q,a as A,b as M,c as N,d as V,e as H,f as J,g as Q,h as X,i as F,j as G,k as K}from"./evo-icon-ccd-top-Cx9VmB_c.js";import"./index-D6p3sHt8.js";import"./iframe-BjWUPQEW.js";import"./preload-helper-PPVm8Dsz.js";const Y=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
    <span>
        ebayccd-
    </span>
    <span style="font-weight: normal; font-size: medium; margin-bottom: -15px;">
        DS v1.0.0
    </span>
</h1>

EU energy label

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/graphics-icons-evo-ccd)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/graphics-icons-evo-ccd)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/evo-ccd/examples)
`,m="<div role=img><!><!></div>",u=" D%b%l",Z=()=>{},tt=t=>{J(t.a),Q(t.a,{class:"ccd__charger-icon"})},nt=t=>{V(t.a),H(t.a,{class:"ccd__charger-icon"})},_=i(2,0,t=>c(t.c,t._.i)),et=t=>{_._(t),p._(t),y._(t),h._(t),G(t.a),K(t.a,{class:"ccd__top-icon"})},p=i(2,0,t=>c(t.b,t._.j)),at=o(4,"<div>USB PD</div>"),y=i(2,0,t=>at(t,t._.l==="usbpd"?0:1)),h=i(2,0,t=>c(t.d,t._.o)),it=e(14,h),g=(t,n)=>it(t,n!==void 0?n:"W"),b=(t,n)=>O(t.a,"aria-label",n),x=(t,n)=>B(t.a,["ccd",n]),st=W("VkXdRAk",t=>P(t,"a")),$=e(13,t=>{z(t,"a",t.n,{"aria-label":1,role:1,class:1}),st(t)}),ot=o(1,q,(t=>`/${t}&`)(A),nt,M,(t=>`/${t}&`)(N),tt),f=(t,n)=>ot(t,n==="included"?0:n==="not-included"?1:2),rt=o(2,(t=>`<div class=ccd__description-figure>${t}<div class=ccd__body><div><!> - <!></div><div> </div><!></div></div>`)(X),(t=>`D/${t}&E%c%lD l%m`)(F),et),v=r(10,t=>rt(t,t.j||t.i?0:1)),T=e(8,t=>{v(t),_(t)}),C=e(9,t=>{v(t),p(t)}),ct=(t,n)=>{(({a11yText:I,chargerIcon:k,class:R,max:E,min:S,secondaryType:U,units:j,...s})=>$(t,s))(n),x(t,n.class),b(t,n.a11yText),f(t,n.chargerIcon),T(t,n.max),C(t,n.min),D(t,n.secondaryType),g(t,n.units)},D=e(11,y),dt=l("RrL3tzQ",m,u,Z,ct),lt=m,mt=(t=>`/${t}&`)(u),ut=()=>{},_t=(t,n)=>b(t.a,n),w=r(10,t=>_t(t,`${t.i} ${t.j}`.trim())),pt=e(8,w),yt=(t,n)=>pt(t,`${n?`Charger ${n==="included"?"":"not "}included.`:""} `.trim()),ht=e(9,w),d=r(7,t=>ht(t,t.e||t.f?`${t.e} - ${t.f} Watts. ${t.g==="usbpd"?"USB PD":""}`:"".trim()),2),gt=e(4,d),bt=e(5,d),xt=e(6,d),$t=e(2,t=>{const n={min:"1000",max:"2000",...t.c};f(t.a,n.chargerIcon),x(t.a,n.class),T(t.a,n.max),C(t.a,n.min),D(t.a,n.secondaryType),g(t.a,n.units),$(t.a,(({a11yText:I,chargerIcon:k,class:R,max:E,min:S,secondaryType:U,units:j,...s})=>s)(n)),yt(t,t.c.chargerIcon),gt(t,t.c.min),bt(t,t.c.max),xt(t,t.c.secondaryType)}),ft=l("VE0NJqp",lt,mt,ut,$t),vt=`import type { Input as CCDInput } from "../index.marko";
export interface Input extends CCDInput {}

<const/a11yCharger=\`\${
  input.chargerIcon
    ? \`Charger \${input.chargerIcon === "included" ? "" : "not "}included.\`
    : ""
} \`.trim()>
<const/a11yRange=(
  input.min || input.max
    ? \`\${input.min} - \${input.max} Watts. \${input.secondaryType === "usbpd" ? "USB PD" : ""}\`
    : "".trim()
)>
<const/a11yCombined=\`\${a11yCharger} \${a11yRange}\`.trim()>

<evo-ccd min="1000" max="2000" ...input a11yText=a11yCombined/>
`,Rt={title:"graphics & icons/evo-ccd",component:dt,parameters:{docs:{description:{component:Y}}},argTypes:{max:{type:"string",control:"text",description:"The maximum range. If min and max are both not set, then will not show the charger label."},min:{type:"string",control:"text",description:"The minimum range. If min and max are both not set, then will not show the charger label."},chargerIcon:{type:"string",options:["none (default)","included","not-included"],control:"inline-radio",description:"Toggles the charger icon visible or if its included or not"},a11yText:{type:{name:"string",required:!0},control:"text",description:"Localized, the accessibility label for the ccd component. This is for internationalization. It should use min, max, and charger included or not included, and secondaryText in the label in order to demonstrate to screen readers the content on the component. Expected value `Charger included. ${min} - ${max} Watts. USB PD`. May be set to `null` only if accessibility is provided through other means."},units:{type:"string",control:"text",description:"The unit label displayed beneath the power range."},secondaryType:{type:"string",options:["none (default)","usbpd"],control:"select",description:"Toggles the usbpd secondary text"},"<div> attributes":{description:"All attributes and event handlers from [the native `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through to `<@action>`."}}},a=L(ft,vt,{max:"2000",min:"1000"});a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode, {
  max: "2000",
  min: "1000"
})`,...a.parameters?.docs?.source}}};const Et=["Default"];export{a as Default,Et as __namedExportsOrder,Rt as default};
