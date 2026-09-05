const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./model-viewer.min-COQ20uFk.js","./rolldown-runtime-DkW27tQK.js","./preload-helper-wdlQj8DP.js"])))=>i.map(i=>d[i]);
import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as ee}from"./preload-helper-wdlQj8DP.js";import{t as te}from"./utils-CkiB0p9L.js";import{J as n,T as ne,X as r,Y as i,at as re,c as a,i as o,it as s,k as c,s as ie,t as l,w as ae}from"./dom-CrmgVQ1h.js";import{t as u}from"./controllable.feat-Zzhbi3Cf.js";import{a as d,i as f,n as oe,r as se,t as ce}from"./evo-icon-attention-24-kGym2my4.js";import{a as p,i as le,n as m,r as ue,s as de,t as fe}from"./evo-progress-spinner-BrJTStku.js";var h;function g(){return(g=e((()=>{h=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`})))()}function pe(){return ee(()=>import(`./model-viewer.min-COQ20uFk.js`),__vite__mapDeps([0,1,2]),import.meta.url)}function _(){return(_=e((()=>{t()})))()}var v,y;function b(){return(b=e((()=>{v=`_player_kk101_2`,y=`_overlay_kk101_6`})))()}function x(e){P(e,`loading`)}var S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H;function U(){return(U=e((()=>{_(),b(),o(),u(),d(),de(),S=`<div></div>`,C=i(0,2,e=>fe(e.b,e._.j)),w=e=>{C._(e),a(e.a,y),ue(e.b),le(e.b),m(e.b,{})},T=i(0,1,e=>re(e.c,e._.f)),E=e=>{T._(e),a(e.a,y),oe(e.b),ce(e.b,{})},D=i(0,0,e=>ie(e.a,`src`,e._.e)),O=e=>{D._(e),A._(e)},k=s(`a0`,e=>ne(e,`a`)),A=i(0,0,e=>{ae(e,`a`,e._.i,{"camera-controls":1,"touch-action":1,src:1}),k(e)}),j=c(9,C),M=(e,t)=>j(e,t===void 0?`loading`:t),N=n(0,`<!><model-viewer camera-controls touch-action=pan-y></model-viewer><!>`,`b `,O,(e=>`<div>${e}<div class=three-d-player__overlay-text> </div></div>`)(se),(e=>` D/${e}&D m`)(f),E,(e=>`<div>${e}</div>`)(p),(e=>` D/${e}&l`)(` b`),w),P=r(10,e=>N(e,e.k===`ready`?0:e.k===`error`?1:2)),F=s(`a1`,e=>(async()=>{try{await pe(),P(e,`ready`)}catch(t){e.g?.(t),P(e,`error`)}})()),I=c(6,F),L=(e,t)=>a(e.a,[v,t]),R=(e,t)=>{(({a11yLoadingText:t,class:ee,errorText:te,onLoadError:n,src:ne,...r})=>z(e,r))(t),L(e,t.class),B(e,t.src),V(e,t.errorText),I(e,t.onLoadError),M(e,t.a11yLoadingText)},z=c(8,A),B=c(4,D),V=c(5,T),H=l(`a`,S,` b`,x,R)})))()}function me(e){x(e.a),B(e.a,`https://ir.ebaystatic.com/cr/v/c1/ebayui/3d/v1/image.glb`),V(e.a,`An error has occurred`),M(e.a,`Loading...`),L(e.a),I(e.a),z(e.a,{alt:`3d viewer`})}var W,G,K;function q(){return(q=e((()=>{U(),o(),W=S,G=(e=>`/${e}&`)(` b`),K=l(`S64VLfI`,W,G,me)})))()}var J;function Y(){return(Y=e((()=>{J=`<evo-3d-viewer
  src="https://ir.ebaystatic.com/cr/v/c1/ebayui/3d/v1/image.glb"
  alt="3d viewer"
  errorText="An error has occurred"
  a11yLoadingText="Loading..."/>
`})))()}var X,Z,Q;function $(){return($=e((()=>{g(),U(),q(),Y(),X={title:`media/evo-3d-viewer`,component:H,parameters:{docs:{description:{component:h}}},argTypes:{src:{control:`text`,description:`The asset to load`},a11yLoadingText:{type:{name:`string`,required:!0},control:{type:`text`},table:{category:`Accessibility`,defaultValue:{summary:`Loading`}},description:`Localized text for loading icon loading viewer`},errorText:{type:{name:`string`,required:!0},control:`text`,description:`Localized text to show error message`},onLoadError:{description:`Triggered when there is an error during loading`,table:{category:`Events`}}}},Z=te(K,J),Q=[`Default`],Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode)`,...Z.parameters?.docs?.source}}}})))()}$();export{Z as Default,Q as __namedExportsOrder,X as default};