import{b as T}from"./utils-DyU2_5R1.js";import{_ as i,f as a,h as s,I as L,v as r,q as k,w as D,N as E,i as c,k as A,l as I}from"./dom-BCmBFxnG.js";import{_ as C}from"./preload-helper-PPVm8Dsz.js";import"./controllable.feat-HsyvwF1o.js";import{$ as S,a as P,b as V,c as j}from"./evo-icon-attention-24-CyTezJfW.js";import{$ as z,a as q,b as O,c as B,d as R,e as Z}from"./index-CyuLV89p.js";import"./iframe-neL4uaf-.js";import"./controllable-input.feat-_IrcFlQw.js";import"./controllable-open.feat-rRFqX3BQ.js";import"./controllable-select.feat-H3sDHw1U.js";import"./index-DV0LQG27.js";const G=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`;function H(){return C(()=>import("./model-viewer.min-QrBjV1S2.js"),[],import.meta.url)}const N="_player_kk101_2",l="_overlay_kk101_6";const d="<div></div>",m=" b",_=r(0,2,e=>O(e.b,e._.j)),Q=e=>{_._(e),s(e.a,l),B(e.b),R(e.b),Z(e.b,{})},u=r(0,1,e=>E(e.c,e._.f)),U=e=>{u._(e),s(e.a,l),V(e.b),j(e.b,{})},p=r(0,0,e=>D(e.a,"src",e._.e)),X=e=>{p._(e),v._(e)},F=c("yAfmfjZ",e=>I(e,"a")),v=r(0,0,e=>{k(e,"a",e._.i,{"camera-controls":1,"touch-action":1,src:1}),F(e)}),J=a(9,_),y=(e,t)=>J(e,t!==void 0?t:"loading"),K=A(0,"<!><model-viewer camera-controls touch-action=pan-y></model-viewer><!>","b ",X,(e=>`<div>${e}<div class=three-d-player__overlay-text> </div></div>`)(S),(e=>` D/${e}&D m`)(P),U,(e=>`<div>${e}</div>`)(z),(e=>` D/${e}&l`)(q),Q),n=L(10,e=>K(e,e.k==="ready"?0:e.k==="error"?1:2));function g(e){n(e,"loading")}const M=c("OBo$Z5Q",e=>(async()=>{try{await H(),n(e,"ready")}catch(t){e.g?.(t),n(e,"error")}})()),h=a(6,M),b=(e,t)=>s(e.a,[N,t]),W=(e,t)=>{(({a11yLoadingText:ne,class:se,errorText:ie,onLoadError:ce,src:le,...$})=>f(e,$))(t),b(e,t.class),x(e,t.src),w(e,t.errorText),h(e,t.onLoadError),y(e,t.a11yLoadingText)},f=a(8,v),x=a(4,p),w=a(5,u),Y=i("LyCaGXr",d,m,g,W),ee=d,te=(e=>`/${e}&`)(m);function ae(e){g(e.a),x(e.a,"https://ir.ebaystatic.com/cr/v/c1/ebayui/3d/v1/image.glb"),w(e.a,"An error has occurred"),y(e.a,"Loading..."),b(e.a),h(e.a),f(e.a,{alt:"3d viewer"})}const oe=i("S64VLfI",ee,te,ae),re=`<evo-3d-viewer
  src="https://ir.ebaystatic.com/cr/v/c1/ebayui/3d/v1/image.glb"
  alt="3d viewer"
  errorText="An error has occurred"
  a11yLoadingText="Loading..."/>
`,xe={title:"media/evo-3d-viewer",component:Y,parameters:{docs:{description:{component:G}}},argTypes:{src:{control:"text",description:"The asset to load"},a11yLoadingText:{type:{name:"string",required:!0},control:{type:"text"},table:{category:"Accessibility",defaultValue:{summary:"Loading"}},description:"Localized text for loading icon loading viewer"},errorText:{type:{name:"string",required:!0},control:"text",description:"Localized text to show error message"},onLoadError:{description:"Triggered when there is an error during loading",table:{category:"Events"}}}},o=T(oe,re);o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode)",...o.parameters?.docs?.source}}};const we=["Default"];export{o as Default,we as __namedExportsOrder,xe as default};
