import{b as z}from"./utils-DWCsNc5l.js";import{v as u,b as h,_ as g,d as B,p as L,e as N,c as _}from"./defineComponent-B-Bg3Ud2.js";import{_ as O,a as P,b as R}from"./index-DS4tcE7-.js";import{_ as m}from"./render-tag-B9T2mz-j.js";import{_ as W}from"./style-value-D9hyxyYb.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CL8ZzwFK.js";/* empty css             */const j=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
    <span>
        ebayccd-
    </span>
    <span style="font-weight: normal; font-size: medium; margin-bottom: -15px;">
        DS v1.0.0
    </span>
</h1>

EU energy label

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/graphics-icons-ebay-ccd)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/graphics-icons-ebay-ccd)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/ebay-ccd/examples)
`,d="gvV3do2",a=u.t(d);function A(){}h.r(d,()=>a);const f={};a._=g(function(o,e,n,t,T,k){const{class:$,style:v,a11yText:w,chargerIcon:r,units:C="W",a11yUnits:E="watts",max:i,min:l,secondaryType:D="none",secondaryText:y="USB PD",...S}=o;o.toJSON=A;const b=D==="usbpd",V=`${r?`Charger ${r==="included"?"":"not "}included.`:""} `.trim(),I=l||i?`${l} - ${i} ${E}. ${b?y:""}`:"".trim(),U=`${V} ${I}`.trim();e.be("div",B(L(S),{role:"img",style:W(v),"aria-label":w||U,class:N(["ccd",$])}),"0",t,null,4),r==="included"?m(O,{class:"ccd__charger-icon"},e,n,"1"):r==="not-included"&&m(P,{class:"ccd__charger-icon"},e,n,"2"),(l||i)&&(e.be("div",{class:"ccd__description-figure"},"3",t,null,1),m(R,{class:"ccd__top-icon"},e,n,"4"),e.be("div",{class:"ccd__body"},"5",t,null,1),e.be("div",null,"6",t,null,0),e.t(l,t),e.t(" - ",t),e.t(i,t),e.ee(),e.be("div",null,"7",t,null,0),e.t(C,t),e.ee(),b&&(e.be("div",null,"8",t,null,0),e.t(y,t),e.ee()),e.ee(),e.ee()),e.ee()},{t:d,i:!0},f);a.Component=_(f,a._);const p="cSrPN0$",s=u.t(p);h.r(p,()=>s);const x={};s._=g(function(o,e,n,t,T,k){m(a,{min:"1000",max:"2000",...o},e,n,"0")},{t:p,i:!0},x);s.Component=_(x,s._);const F=`<ebay-ccd min="1000" max="2000" ...input/>
`,Y={title:"graphics & icons/ebay-ccd",component:a,parameters:{docs:{description:{component:j}}},argTypes:{max:{control:{type:"text"},description:"The maximum range. If min and max are both not set, then will not show the charger label."},min:{control:{type:"text"},description:"The minimum range. If min and max are both not set, then will not show the charger label."},chargerIcon:{control:{type:"select"},options:["none","included","not-included"],description:"Toggles the charger icon visible or if its included or not",table:{defaultValue:{summary:"none"}}},units:{control:{type:"text"},description:"The units of the rating.",table:{defaultValue:{summary:"w"}}},secondaryType:{control:{type:"select"},options:["none","usbpd"],description:"Toggles the usbpd secondary text",table:{defaultValue:{summary:"none"}}},secondaryText:{control:{type:"text"},description:"The text used for secodnary text. Will also be used in aria-label",table:{defaultValue:{summary:"usbpd"}}},a11yUnits:{control:{type:"text"},description:"Localized, the units for the rating used for a11y",table:{defaultValue:{summary:"watts"}}},a11yText:{control:{type:"text"},description:"Localized, overrides the default aria-label text"}}},c=z(s,F,{max:"2000",min:"1000"});c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode, {
  max: "2000",
  min: "1000"
})`,...c.parameters?.docs?.source}}};const Z=["Default"];export{c as Default,Z as __namedExportsOrder,Y as default};
