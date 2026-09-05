import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./utils-CkiB0p9L.js";import{C as ee,J as n,T as te,Y as r,at as i,c as a,et as o,i as s,it as ne,k as c,s as re,t as l}from"./dom-CrmgVQ1h.js";import{s as ie}from"./evo-icon-CFoPYBpm.js";import{a as ae,c as oe,d as se,f as ce,h as le,i as ue,l as de,m as fe,n as pe,o as me,p as he,r as ge,s as _e,t as ve,u as ye}from"./evo-icon-ccd-top-BR6tC5p9.js";var u;function d(){return(d=e((()=>{u=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
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
`})))()}function f(){return(f=e((()=>{})))()}function p(){return(p=e((()=>{f(),ie()})))()}var m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,be,I,L;function R(){return(R=e((()=>{s(),le(),ye(),ae(),p(),m=`<div role=img><!><!></div>`,h=` D%b%l`,g=e=>{_e(e.a),me(e.a,{class:`ccd__charger-icon`})},_=e=>{ce(e.a),se(e.a,{class:`ccd__charger-icon`})},v=r(2,0,e=>i(e.c,e._.i)),y=e=>{v._(e),b._(e),S._(e),C._(e),pe(e.a),ve(e.a,{class:`ccd__top-icon`})},b=r(2,0,e=>i(e.b,e._.j)),x=n(4,`<div>USB PD</div>`),S=r(2,0,e=>x(e,e._.l===`usbpd`?0:1)),C=r(2,0,e=>i(e.d,e._.o)),w=c(14,C),T=(e,t)=>w(e,t===void 0?`W`:t),E=(e,t)=>re(e.a,`aria-label`,t),D=(e,t)=>a(e.a,[`ccd`,t]),O=ne(`j0`,e=>te(e,`a`)),k=c(13,e=>{ee(e,`a`,e.n,{"aria-label":1,role:1,class:1}),O(e)}),A=n(1,he,(e=>`/${e}&`)(fe),_,oe,(e=>`/${e}&`)(de),g),j=(e,t)=>A(e,t===`included`?0:t===`not-included`?1:2),M=n(2,(e=>`<div class=ccd__description-figure>${e}<div class=ccd__body><div><!> - <!></div><div> </div><!></div></div>`)(ge),(e=>`D/${e}&E%c%lD l%m`)(ue),y),N=o(10,e=>M(e,e.j||e.i?0:1)),P=c(8,e=>{N(e),v(e)}),F=c(9,e=>{N(e),b(e)}),be=(e,t)=>{(({a11yText:t,chargerIcon:ee,class:n,max:te,min:r,secondaryType:i,units:a,...o})=>k(e,o))(t),D(e,t.class),E(e,t.a11yText),j(e,t.chargerIcon),P(e,t.max),F(e,t.min),I(e,t.secondaryType),T(e,t.units)},I=c(11,S),L=l(`j`,m,h,0,be)})))()}var z,B,V,H,U,W,G,K,q,J,Y,X,xe;function Se(){return(Se=e((()=>{R(),s(),z=m,B=(e=>`/${e}&`)(h),V=(e,t)=>E(e.a,t),H=o(10,e=>V(e,`${e.i} ${e.j}`.trim())),U=c(8,H),W=(e,t)=>U(e,`${t?`Charger ${t===`included`?``:`not `}included.`:``} `.trim()),G=c(9,H),K=o(7,e=>G(e,e.e||e.f?`${e.e} - ${e.f} Watts. ${e.g===`usbpd`?`USB PD`:``}`:``),2),q=c(4,K),J=c(5,K),Y=c(6,K),X=c(2,e=>{let t={min:`1000`,max:`2000`,...e.c};j(e.a,t.chargerIcon),D(e.a,t.class),P(e.a,t.max),F(e.a,t.min),I(e.a,t.secondaryType),T(e.a,t.units),k(e.a,(({a11yText:e,chargerIcon:t,class:ee,max:n,min:te,secondaryType:r,units:i,...a})=>a)(t)),W(e,e.c.chargerIcon),q(e,e.c.min),J(e,e.c.max),Y(e,e.c.secondaryType)}),xe=l(`VE0NJqp`,z,B,0,X)})))()}var Z;function Ce(){return(Ce=e((()=>{Z=`import type { Input as CCDInput } from "../index.marko";
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
`})))()}var we,Q,Te;function $(){return($=e((()=>{d(),R(),Se(),Ce(),we={title:`graphics & icons/evo-ccd`,component:L,parameters:{docs:{description:{component:u}}},argTypes:{max:{type:`string`,control:`text`,description:`The maximum range. If min and max are both not set, then will not show the charger label.`},min:{type:`string`,control:`text`,description:`The minimum range. If min and max are both not set, then will not show the charger label.`},chargerIcon:{type:`string`,options:[`none (default)`,`included`,`not-included`],control:`inline-radio`,description:`Toggles the charger icon visible or if its included or not`},a11yText:{type:{name:`string`,required:!0},control:`text`,description:"Localized, the accessibility label for the ccd component. This is for internationalization. It should use min, max, and charger included or not included, and secondaryText in the label in order to demonstrate to screen readers the content on the component. Expected value `Charger included. ${min} - ${max} Watts. USB PD`. May be set to `null` only if accessibility is provided through other means."},units:{type:`string`,control:`text`,description:`The unit label displayed beneath the power range.`},secondaryType:{type:`string`,options:[`none (default)`,`usbpd`],control:`select`,description:`Toggles the usbpd secondary text`},"<div> attributes":{description:"All attributes and event handlers from [the native `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through to `<@action>`."}}},Q=t(xe,Z,{max:`2000`,min:`1000`}),Te=[`Default`],Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode, {
  max: "2000",
  min: "1000"
})`,...Q.parameters?.docs?.source}}}})))()}$();export{Q as Default,Te as __namedExportsOrder,we as default};