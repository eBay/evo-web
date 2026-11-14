const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./model-viewer.min-COQ20uFk.js","./rolldown-runtime-DkW27tQK.js","./preload-helper-wdlQj8DP.js"])))=>i.map(i=>d[i]);
import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as ee}from"./preload-helper-wdlQj8DP.js";import{t as te}from"./utils-CkiB0p9L.js";import{$ as n,E as r,Q as ne,T as re,c as ie,et as i,i as a,k as o,lt as s,s as ae,st as c,t as l}from"./dom-CUxLGBQ2.js";import{a as u,i as d,n as oe,r as se,t as f}from"./evo-icon-attention-24-GFF-2duX.js";import{a as p,i as m,n as ce,r as le,s as ue,t as de}from"./evo-progress-spinner-Cjrvn8E8.js";var h;function g(){return(g=e((()=>{h=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`})))()}function fe(){return ee(()=>import(`./model-viewer.min-COQ20uFk.js`),__vite__mapDeps([0,1,2]),import.meta.url)}function _(){return(_=e((()=>{t()})))()}var v,y;function b(){return(b=e((()=>{v=`_player_kk101_2`,y=`_overlay_kk101_6`})))()}function x(e){P(e,`loading`)}var S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H;function U(){return(U=e((()=>{_(),b(),a(),u(),ue(),S=`<div></div>`,C=n(0,2,e=>de(e.a,e._.j)),w=e=>{C._(e),le(e.a),m(e.a),ce(e.a,{})},T=n(0,1,e=>s(e.b,e._.f)),E=e=>{T._(e),oe(e.a),f(e.a,{})},D=n(0,0,e=>ae(e.a,`src`,e._.e)),O=e=>{D._(e),A._(e)},k=c(`a0`,e=>r(e,`a`)),A=n(0,0,e=>{re(e,`a`,e._.i,{"camera-controls":1,"touch-action":1,src:1}),k(e)}),j=o(9,C),M=(e,t)=>j(e,t===void 0?`loading`:t),N=ne(0,`<model-viewer camera-controls touch-action=pan-y></model-viewer>`,` `,O,(e=>`<div class="${y}">${e}<div class=three-d-player__overlay-text> </div></div>`)(se),(e=>`D/${e}&D m`)(d),E,(e=>`<div class="${y}">${e}</div>`)(p),(e=>`D/${e}&l`)(` b`),w),P=i(10,e=>N(e,e.k===`ready`?0:e.k===`error`?1:2)),F=c(`a1`,e=>(async()=>{try{await fe(),P(e,`ready`)}catch(t){e.g?.(t),P(e,`error`)}})()),I=o(6,F),L=(e,t)=>ie(e.a,[v,t]),R=(e,t)=>{z(e,(({a11yLoadingText:e,class:t,errorText:ee,onLoadError:te,src:n,...r})=>r)(t)),L(e,t.class),B(e,t.src),V(e,t.errorText),I(e,t.onLoadError),M(e,t.a11yLoadingText)},z=o(8,A),B=o(4,D),V=o(5,T),H=l(`a`,S,` b`,x,R)})))()}function pe(e){x(e.a),B(e.a,`https://ir.ebaystatic.com/cr/v/c1/ebayui/3d/v1/image.glb`),V(e.a,`An error has occurred`),M(e.a,`Loading...`),L(e.a),I(e.a),z(e.a,{alt:`3d viewer`})}var W,G,K;function q(){return(q=e((()=>{U(),a(),W=S,G=(e=>`/${e}&`)(` b`),K=l(`H5x2AkI`,W,G,pe)})))()}var J;function Y(){return(Y=e((()=>{J=`<evo-3d-viewer
  src="https://ir.ebaystatic.com/cr/v/c1/ebayui/3d/v1/image.glb"
  alt="3d viewer"
  errorText="An error has occurred"
  a11yLoadingText="Loading..."
/>
`})))()}var X,Z,Q;function $(){return($=e((()=>{g(),U(),q(),Y(),X={title:`media/evo-3d-viewer`,component:H,parameters:{docs:{description:{component:h}}},argTypes:{src:{control:`text`,description:`The asset to load`},a11yLoadingText:{type:{name:`string`,required:!0},control:{type:`text`},table:{category:`Accessibility`,defaultValue:{summary:`Loading`}},description:`Localized text for loading icon loading viewer`},errorText:{type:{name:`string`,required:!0},control:`text`,description:`Localized text to show error message`},onLoadError:{description:`Triggered when there is an error during loading`,table:{category:`Events`}}}},Z=te(K,J),Q=[`Default`],Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode)`,...Z.parameters?.docs?.source}}}})))()}$();export{Z as Default,Q as __namedExportsOrder,X as default};