import{b as T}from"./utils-DyU2_5R1.js";import{a as i,b as a,f as s,E as L,y as r,z as k,r as E,x as D,d as c,w as A,i as I}from"./dom-BHuf_wjI.js";import{_ as C}from"./preload-helper-PPVm8Dsz.js";import"./controllable.feat-D9Vh_Z1q.js";import{a as S,$ as z,b as P,c as V}from"./evo-icon-attention-24-2esF9REL.js";import{l as j,m as q,n as O,o as B,p as R,q as Z}from"./index-edzibN_L.js";import"./iframe-D1vEsa04.js";import"./controllable-input.feat-DsMrAAy9.js";import"./controllable-open.feat-DzmLOvf4.js";import"./controllable-select.feat-B-1_7x6U.js";import"./index-3OPMgxGk.js";const G=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`;function H(){return C(()=>import("./model-viewer.min-QrBjV1S2.js"),[],import.meta.url)}const Q="_player_kk101_2",l="_overlay_kk101_6";const d="<div></div>",m=" b",_=r(0,2,e=>O(e.b,e._.j)),U=e=>{_._(e),s(e.a,l),B(e.b),R(e.b),Z(e.b,{})},u=r(0,1,e=>D(e.c,e._.f)),X=e=>{u._(e),s(e.a,l),P(e.b),V(e.b,{})},p=r(0,0,e=>E(e.a,"src",e._.e)),F=e=>{p._(e),y._(e)},J=c("yAfmfjZ",e=>I(e,"a")),y=r(0,0,e=>{k(e,"a",e._.i,{"camera-controls":1,"touch-action":1,src:1}),J(e)}),K=a(9,_),v=(e,t)=>K(e,t!==void 0?t:"loading"),M=A(0,"<!><model-viewer camera-controls touch-action=pan-y></model-viewer><!>","b ",F,(e=>`<div>${e}<div class=three-d-player__overlay-text> </div></div>`)(S),(e=>` D/${e}&D m`)(z),X,(e=>`<div>${e}</div>`)(j),(e=>` D/${e}&l`)(q),U),n=L(10,e=>M(e,e.k==="ready"?0:e.k==="error"?1:2));function g(e){n(e,"loading")}const N=c("OBo$Z5Q",e=>(async()=>{try{await H(),n(e,"ready")}catch(t){e.g?.(t),n(e,"error")}})()),b=a(6,N),h=(e,t)=>s(e.a,[Q,t]),W=(e,t)=>{(({a11yLoadingText:ne,class:se,errorText:ie,onLoadError:ce,src:le,...$})=>f(e,$))(t),h(e,t.class),x(e,t.src),w(e,t.errorText),b(e,t.onLoadError),v(e,t.a11yLoadingText)},f=a(8,y),x=a(4,p),w=a(5,u),Y=i("LyCaGXr",d,m,g,W),ee=d,te=(e=>`/${e}&`)(m);function ae(e){g(e.a),x(e.a,"https://ir.ebaystatic.com/cr/v/c1/ebayui/3d/v1/image.glb"),w(e.a,"An error has occurred"),v(e.a,"Loading..."),h(e.a),b(e.a),f(e.a,{alt:"3d viewer"})}const oe=i("S64VLfI",ee,te,ae),re=`<evo-3d-viewer
  src="https://ir.ebaystatic.com/cr/v/c1/ebayui/3d/v1/image.glb"
  alt="3d viewer"
  errorText="An error has occurred"
  a11yLoadingText="Loading..."/>
`,xe={title:"media/evo-3d-viewer",component:Y,parameters:{docs:{description:{component:G}}},argTypes:{src:{control:"text",description:"The asset to load"},a11yLoadingText:{type:{name:"string",required:!0},control:{type:"text"},table:{category:"Accessibility",defaultValue:{summary:"Loading"}},description:"Localized text for loading icon loading viewer"},errorText:{type:{name:"string",required:!0},control:"text",description:"Localized text to show error message"},onLoadError:{description:"Triggered when there is an error during loading",table:{category:"Events"}}}},o=T(oe,re);o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode)",...o.parameters?.docs?.source}}};const we=["Default"];export{o as Default,we as __namedExportsOrder,xe as default};
