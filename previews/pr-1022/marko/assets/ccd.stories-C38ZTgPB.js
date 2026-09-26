import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./utils-CkiB0p9L.js";import{C as ee,T as te,X as n,Y as r,at as ne,c as i,i as a,k as o,ot as s,s as re,t as c,tt as l}from"./dom-CNWckxLY.js";import{s as ie}from"./evo-icon-COXCIbT1.js";import{a as ae,c as oe,d as se,f as ce,h as le,i as ue,l as de,m as fe,n as pe,o as me,p as he,r as ge,s as _e,t as ve,u as ye}from"./evo-icon-ccd-top-B0duuPAy.js";var u;function d(){return(d=e((()=>{u=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
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
`})))()}function f(){return(f=e((()=>{})))()}function p(){return(p=e((()=>{f(),ie()})))()}var m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,be,M,N,P,F,I,L;function R(){return(R=e((()=>{a(),le(),ye(),ae(),p(),m=`<div role=img><!><!></div>`,h=` D%b%l`,g=e=>{_e(e.a),me(e.a,{class:`ccd__charger-icon`})},_=e=>{ce(e.a),se(e.a,{class:`ccd__charger-icon`})},v=n(2,0,e=>s(e.c,e._.i)),y=e=>{v._(e),b._(e),S._(e),C._(e),pe(e.a),ve(e.a,{class:`ccd__top-icon`})},b=n(2,0,e=>s(e.b,e._.j)),x=r(4,`<div>USB PD</div>`),S=n(2,0,e=>x(e,e._.l===`usbpd`?0:1)),C=n(2,0,e=>s(e.d,e._.o)),w=o(14,C),T=(e,t)=>w(e,t===void 0?`W`:t),E=(e,t)=>re(e.a,`aria-label`,t),D=(e,t)=>i(e.a,[`ccd`,t]),O=ne(`j0`,e=>te(e,`a`)),k=o(13,e=>{ee(e,`a`,e.n,{"aria-label":1,role:1,class:1}),O(e)}),A=r(1,he,(e=>`/${e}&`)(fe),_,oe,(e=>`/${e}&`)(de),g),j=(e,t)=>A(e,t===`included`?0:t===`not-included`?1:2),be=r(2,(e=>`<div class=ccd__description-figure>${e}<div class=ccd__body><div><!> - <!></div><div> </div><!></div></div>`)(ge),(e=>`D/${e}&E%c%lD l%m`)(ue),y),M=l(10,e=>be(e,e.j||e.i?0:1)),N=o(8,e=>{M(e),v(e)}),P=o(9,e=>{M(e),b(e)}),F=(e,t)=>{(({a11yText:t,chargerIcon:ee,class:te,max:n,min:r,secondaryType:ne,units:i,...a})=>k(e,a))(t),D(e,t.class),E(e,t.a11yText),j(e,t.chargerIcon),N(e,t.max),P(e,t.min),I(e,t.secondaryType),T(e,t.units)},I=o(11,S),L=c(`j`,m,h,0,F)})))()}var z,B,V,H,U,W,G,K,q,J,Y,X,Z;function xe(){return(xe=e((()=>{R(),a(),z=m,B=(e=>`/${e}&`)(h),V=(e,t)=>E(e.a,t),H=l(10,e=>V(e,`${e.i} ${e.j}`.trim())),U=o(8,H),W=(e,t)=>U(e,`${t?`Charger ${t===`included`?``:`not `}included.`:``} `.trim()),G=o(9,H),K=l(7,e=>G(e,e.e||e.f?`${e.e} - ${e.f} Watts. ${e.g===`usbpd`?`USB PD`:``}`:``),2),q=o(4,K),J=o(5,K),Y=o(6,K),X=o(2,e=>{let t={min:`1000`,max:`2000`,...e.c};j(e.a,t.chargerIcon),D(e.a,t.class),N(e.a,t.max),P(e.a,t.min),I(e.a,t.secondaryType),T(e.a,t.units),k(e.a,(({a11yText:e,chargerIcon:t,class:ee,max:te,min:n,secondaryType:r,units:ne,...i})=>i)(t)),W(e,e.c.chargerIcon),q(e,e.c.min),J(e,e.c.max),Y(e,e.c.secondaryType)}),Z=c(`VE0NJqp`,z,B,0,X)})))()}var Se;function Ce(){return(Ce=e((()=>{Se=`import type { Input as CCDInput } from "../index.marko";
export interface Input extends CCDInput {}

<const/a11yCharger=(
  \`\${
    input.chargerIcon
      ? \`Charger \${input.chargerIcon === "included" ? "" : "not "}included.\`
      : ""
  } \`.trim()
)>
<const/a11yRange=(
  input.min || input.max
    ? \`\${input.min} - \${input.max} Watts. \${input.secondaryType === "usbpd" ? "USB PD" : ""}\`
    : "".trim()
)>
<const/a11yCombined=\`\${a11yCharger} \${a11yRange}\`.trim()>

<evo-ccd min="1000" max="2000" ...input a11yText=a11yCombined/>
`})))()}var we,Q,Te;function $(){return($=e((()=>{d(),R(),xe(),Ce(),we={title:`graphics & icons/evo-ccd`,component:L,parameters:{docs:{description:{component:u}}},argTypes:{max:{type:`string`,control:`text`,description:`The maximum range. If min and max are both not set, then will not show the charger label.`},min:{type:`string`,control:`text`,description:`The minimum range. If min and max are both not set, then will not show the charger label.`},chargerIcon:{type:`string`,options:[`none (default)`,`included`,`not-included`],control:`inline-radio`,description:`Toggles the charger icon visible or if its included or not`},a11yText:{type:{name:`string`,required:!0},control:`text`,description:"Localized, the accessibility label for the ccd component. This is for internationalization. It should use min, max, and charger included or not included, and secondaryText in the label in order to demonstrate to screen readers the content on the component. Expected value `Charger included. ${min} - ${max} Watts. USB PD`. May be set to `null` only if accessibility is provided through other means."},units:{type:`string`,control:`text`,description:`The unit label displayed beneath the power range.`},secondaryType:{type:`string`,options:[`none (default)`,`usbpd`],control:`select`,description:`Toggles the usbpd secondary text`},"<div> attributes":{description:"All attributes and event handlers from [the native `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through to `<@action>`."}}},Q=t(Z,Se,{max:`2000`,min:`1000`}),Te=[`Default`],Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode, {
  max: "2000",
  min: "1000"
})`,...Q.parameters?.docs?.source}}}})))()}$();export{Q as Default,Te as __namedExportsOrder,we as default};