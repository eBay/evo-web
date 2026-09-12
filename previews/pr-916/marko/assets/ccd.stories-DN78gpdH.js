import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./utils-CkiB0p9L.js";import{A as n,E as ee,X as r,Z as i,c as te,ct as a,i as o,nt as s,ot as ne,s as re,t as c,w as ie}from"./dom-DAi6NM7T.js";import{s as ae}from"./evo-icon-BcUhk3ax.js";import{a as oe,c as se,d as ce,f as le,h as ue,i as de,l as fe,m as pe,n as me,o as he,p as ge,r as _e,s as ve,t as ye,u as be}from"./evo-icon-ccd-top-BZ7fs_8G.js";var l;function u(){return(u=e((()=>{l=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
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
`})))()}function d(){return(d=e((()=>{})))()}function f(){return(f=e((()=>{d(),ae()})))()}var p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,xe,j,M,N,P,F,I;function L(){return(L=e((()=>{o(),ue(),be(),oe(),f(),p=`<div role=img><!><!></div>`,m=` D%b%l`,h=e=>{ve(e.a),he(e.a,{class:`ccd__charger-icon`})},g=e=>{le(e.a),ce(e.a,{class:`ccd__charger-icon`})},_=i(2,0,e=>a(e.c,e._.i)),v=e=>{_._(e),y._(e),x._(e),S._(e),me(e.a),ye(e.a,{class:`ccd__top-icon`})},y=i(2,0,e=>a(e.b,e._.j)),b=r(4,`<div>USB PD</div>`),x=i(2,0,e=>b(e,e._.l===`usbpd`?0:1)),S=i(2,0,e=>a(e.d,e._.o)),C=n(14,S),w=(e,t)=>C(e,t===void 0?`W`:t),T=(e,t)=>re(e.a,`aria-label`,t),E=(e,t)=>te(e.a,[`ccd`,t]),D=ne(`j0`,e=>ee(e,`a`)),O=n(13,e=>{ie(e,`a`,e.n,{"aria-label":1,role:1,class:1}),D(e)}),k=r(1,ge,(e=>`/${e}&`)(pe),g,se,(e=>`/${e}&`)(fe),h),A=(e,t)=>k(e,t===`included`?0:t===`not-included`?1:2),xe=r(2,(e=>`<div class=ccd__description-figure>${e}<div class=ccd__body><div><!> - <!></div><div> </div><!></div></div>`)(_e),(e=>`D/${e}&E%c%lD l%m`)(de),v),j=s(10,e=>xe(e,e.j||e.i?0:1)),M=n(8,e=>{j(e),_(e)}),N=n(9,e=>{j(e),y(e)}),P=(e,t)=>{(({a11yText:t,chargerIcon:n,class:ee,max:r,min:i,secondaryType:te,units:a,...o})=>O(e,o))(t),E(e,t.class),T(e,t.a11yText),A(e,t.chargerIcon),M(e,t.max),N(e,t.min),F(e,t.secondaryType),w(e,t.units)},F=n(11,x),I=c(`j`,p,m,0,P)})))()}var R,z,B,V,H,U,W,G,K,q,J,Y,X;function Z(){return(Z=e((()=>{L(),o(),R=p,z=(e=>`/${e}&`)(m),B=(e,t)=>T(e.a,t),V=s(10,e=>B(e,`${e.i} ${e.j}`.trim())),H=n(8,V),U=(e,t)=>H(e,`${t?`Charger ${t===`included`?``:`not `}included.`:``} `.trim()),W=n(9,V),G=s(7,e=>W(e,e.e||e.f?`${e.e} - ${e.f} Watts. ${e.g===`usbpd`?`USB PD`:``}`:``),2),K=n(4,G),q=n(5,G),J=n(6,G),Y=n(2,e=>{let t={min:`1000`,max:`2000`,...e.c};A(e.a,t.chargerIcon),E(e.a,t.class),M(e.a,t.max),N(e.a,t.min),F(e.a,t.secondaryType),w(e.a,t.units),O(e.a,(({a11yText:e,chargerIcon:t,class:n,max:ee,min:r,secondaryType:i,units:te,...a})=>a)(t)),U(e,e.c.chargerIcon),K(e,e.c.min),q(e,e.c.max),J(e,e.c.secondaryType)}),X=c(`VE0NJqp`,R,z,0,Y)})))()}var Se;function Ce(){return(Ce=e((()=>{Se=`import type { Input as CCDInput } from "../index.marko";
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
`})))()}var we,Q,Te;function $(){return($=e((()=>{u(),L(),Z(),Ce(),we={title:`graphics & icons/evo-ccd`,component:I,parameters:{docs:{description:{component:l}}},argTypes:{max:{type:`string`,control:`text`,description:`The maximum range. If min and max are both not set, then will not show the charger label.`},min:{type:`string`,control:`text`,description:`The minimum range. If min and max are both not set, then will not show the charger label.`},chargerIcon:{type:`string`,options:[`none (default)`,`included`,`not-included`],control:`inline-radio`,description:`Toggles the charger icon visible or if its included or not`},a11yText:{type:{name:`string`,required:!0},control:`text`,description:"Localized, the accessibility label for the ccd component. This is for internationalization. It should use min, max, and charger included or not included, and secondaryText in the label in order to demonstrate to screen readers the content on the component. Expected value `Charger included. ${min} - ${max} Watts. USB PD`. May be set to `null` only if accessibility is provided through other means."},units:{type:`string`,control:`text`,description:`The unit label displayed beneath the power range.`},secondaryType:{type:`string`,options:[`none (default)`,`usbpd`],control:`select`,description:`Toggles the usbpd secondary text`},"<div> attributes":{description:"All attributes and event handlers from [the native `<div>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div) will be passed through to `<@action>`."}}},Q=t(X,Se,{max:`2000`,min:`1000`}),Te=[`Default`],Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode, {
  max: "2000",
  min: "1000"
})`,...Q.parameters?.docs?.source}}}})))()}$();export{Q as Default,Te as __namedExportsOrder,we as default};