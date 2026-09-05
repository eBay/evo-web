import{b as T}from"./utils-DyU2_5R1.js";import{a as i,b as a,f as s,E as L,y as r,z as E,r as D,x as k,d as c,w as A,i as I}from"./dom-BwDV3QmC.js";import{_ as C}from"./preload-helper-PPVm8Dsz.js";import"./controllable.feat-D9vM-6To.js";import{a as S,$ as z,b as P,c as V}from"./evo-icon-attention-24-iD4KnW5O.js";import{$ as j,a as O,b as q,c as B,d as R,e as Z}from"./index-Ba6UEypr.js";import"./iframe-Ca_lldlR.js";import"./controllable-input.feat-DETlOBnu.js";import"./controllable-open.feat-BWfZs7I0.js";import"./controllable-select.feat-BMvHSwho.js";import"./index-OPUfY1qY.js";import"./evo-icon-spinner-24-DjWXYzeb.js";const G=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        evo-3d-viewer
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.0.0
    </span>
</h1>

## evo-3d-viewer (_ALPHA_, some APIs might change)

Under the hood, this uses google model viewer. All APIs are passthough to the model viewer. To use methods on the model-viewer, you can access \`viewer\` object on the component.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/media-evo-3d-viewer)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/media-evo-3d-viewer)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/evo-3d-viewer/examples)
`;function H(){return C(()=>import("./model-viewer.min-QrBjV1S2.js"),[],import.meta.url)}const Q="_player_1dc5x_2",d="_overlay_1dc5x_6";const l="<div></div>",m=" b",_=r(0,2,e=>q(e.b,e._.j)),U=e=>{_._(e),s(e.a,d),B(e.b),R(e.b),Z(e.b,{})},u=r(0,1,e=>k(e.c,e._.f)),X=e=>{u._(e),s(e.a,d),P(e.b),V(e.b,{})},p=r(0,0,e=>D(e.a,"src",e._.e)),F=e=>{p._(e),y._(e)},J=c("yAfmfjZ",e=>I(e,"a")),y=r(0,0,e=>{E(e,"a",e._.i,{"camera-controls":1,"touch-action":1,src:1}),J(e)}),K=a(9,_),v=(e,t)=>K(e,t!==void 0?t:"loading"),M=A(0,"<!><model-viewer camera-controls touch-action=pan-y></model-viewer><!>","b ",F,(e=>`<div>${e}<div class=three-d-player__overlay-text> </div></div>`)(S),(e=>` D/${e}&D m`)(z),X,(e=>`<div>${e}</div>`)(j),(e=>` D/${e}&l`)(O),U),n=L(10,e=>M(e,e.k==="ready"?0:e.k==="error"?1:2));function g(e){n(e,"loading")}const N=c("OBo$Z5Q",e=>(async()=>{try{await H(),n(e,"ready")}catch(t){e.g?.(t),n(e,"error")}})()),b=a(6,N),h=(e,t)=>s(e.a,[Q,t]),W=(e,t)=>{(({a11yLoadingText:ne,class:se,errorText:ie,onLoadError:ce,src:de,...$})=>x(e,$))(t),h(e,t.class),f(e,t.src),w(e,t.errorText),b(e,t.onLoadError),v(e,t.a11yLoadingText)},x=a(8,y),f=a(4,p),w=a(5,u),Y=i("LyCaGXr",l,m,g,W),ee=l,te=(e=>`/${e}&`)(m);function ae(e){g(e.a),f(e.a,"https://ir.ebaystatic.com/cr/v/c1/ebayui/3d/v1/image.glb"),w(e.a,"An error has occurred"),v(e.a,"Loading..."),h(e.a),b(e.a),x(e.a,{alt:"3d viewer"})}const oe=i("S64VLfI",ee,te,ae),re=`<evo-3d-viewer
    src="https://ir.ebaystatic.com/cr/v/c1/ebayui/3d/v1/image.glb"
    alt="3d viewer"
    errorText="An error has occurred"
    a11yLoadingText="Loading..."
/>
`,we={title:"media/evo-3d-viewer",component:Y,parameters:{docs:{description:{component:G}}},argTypes:{src:{control:"text",description:"The asset to load"},a11yLoadingText:{type:{name:"string",required:!0},control:{type:"text"},table:{category:"Accessibility",defaultValue:{summary:"Loading"}},description:"Localized text for loading icon loading viewer"},errorText:{type:{name:"string",required:!0},control:"text",description:"Localized text to show error message"},onLoadError:{description:"Triggered when there is an error during loading",table:{category:"Events"}}}},o=T(oe,re);o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode)",...o.parameters?.docs?.source}}};const $e=["Default"];export{o as Default,$e as __namedExportsOrder,we as default};
