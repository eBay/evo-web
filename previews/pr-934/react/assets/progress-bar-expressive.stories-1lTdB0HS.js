import{r as t,j as c}from"./iframe-C0ZXvZOv.js";import{c as v}from"./index-BUh9EJXD.js";import"./preload-helper-PPVm8Dsz.js";const V="(prefers-reduced-motion: reduce)";function U(){if(!(typeof window>"u"||!window.matchMedia))return window.matchMedia(V)}function Q(){return U()?.matches??!1}function W(u){const s=U();if(!s)return()=>{};const r=()=>u();return s.addEventListener?(s.addEventListener("change",r),()=>s.removeEventListener("change",r)):(s.addListener(r),()=>s.removeListener(r))}function z(){return t.useSyncExternalStore(W,Q,()=>!1)}const Y=1500,k=1.5,T=833,H=12,J=[];function D({a11yText:u="Loading...",messages:s,size:r,className:O,ref:P,...C}){const N=t.useId(),o=z(),l=s??J,g=t.useRef(l);g.current=l;const[f,x]=t.useState(()=>r==="medium"||o?0:-1),[B,d]=t.useState(!1),[F,R]=t.useState(!0),i=t.useRef(f),n=t.useRef({});i.current=f;const L=r==="medium"||o?0:-1,e=l.length,_=f>=0&&e>0?Math.min(f,e-1):-1,q=_<0||_===e-1?0:_+1,G=l[_],w=l[q],A=B;return t.useEffect(()=>{const m=()=>{clearTimeout(n.current.fadeIn),clearTimeout(n.current.showMessage),n.current={}};if(m(),e===0)return i.current=-1,x(-1),d(!1),m;const p=i.current<0?L:Math.min(i.current,e-1);i.current=p,x(p),d(!1);const j=a=>{const y=g.current.length;if(y===0)return;const b=a>=y-1?0:Math.min(a+1,y-1);i.current=b,x(b),d(!1),h(b)},h=a=>{if(a<0){n.current.fadeIn=setTimeout(()=>{d(!0),n.current.showMessage=setTimeout(()=>{i.current=0,x(0),d(!1),g.current.length>1&&h(0)},S(g.current[0],o))},T);return}if(!(e<2)){if(o){n.current.showMessage=setTimeout(()=>j(a),S(g.current[a],!0));return}n.current.fadeIn=setTimeout(()=>{d(!0),n.current.showMessage=setTimeout(()=>j(a),T)},S(g.current[a],!1))}};return h(p),m},[L,o,e,r]),t.useEffect(()=>{if(e===0)return;R(!0);const m=setTimeout(()=>{R(!1)},T);return()=>clearTimeout(m)},[o,e,r]),c.jsxs("div",{...C,ref:P,className:v("progress-bar-expressive",O),children:[e>0?c.jsxs("div",{className:v("progress-bar-expressive__messages",r==="medium"&&"progress-bar-expressive__messages--medium"),children:[!o&&e>1&&w?c.jsx("div",{"aria-hidden":"true",className:v("progress-bar-expressive__message",A&&"progress-bar-expressive__message--in"),children:w.content}):null,c.jsx("div",{role:"status",id:N,className:v("progress-bar-expressive__message",A&&"progress-bar-expressive__message--out",e===1&&"progress-bar-expressive__message--in",F&&"progress-bar-expressive__message--initial"),children:G?.content})]}):null,c.jsx("div",{role:"progressbar","aria-label":u,"aria-describedby":e>0?N:void 0,className:"progress-bar-expressive__progress",children:c.jsx("div",{className:"progress-bar-expressive__lines",children:Array.from({length:H},(m,p)=>c.jsx("div",{className:"progress-bar-expressive__line"},p))})})]})}function S(u,s){return(u?.duration??Y)*(s?k:1)}try{D.displayName="EvoProgressBarExpressive",D.__docgenInfo={description:"",displayName:"EvoProgressBarExpressive",props:{a11yText:{defaultValue:{value:"Loading..."},description:'Localized accessible label for the progress bar.\nEnglish default to be overridden is `"Loading..."`.',name:"a11yText",required:!1,type:{name:"string"}},messages:{defaultValue:null,description:"Messages displayed in order while progress continues.",name:"messages",required:!1,type:{name:"readonly ProgressBarExpressiveMessage[]"}},size:{defaultValue:null,description:'Message text size. Defaults to `"large"`.',name:"size",required:!1,type:{name:"ProgressBarExpressiveSize"}}}}}catch{}const $={title:"progress/evo-progress-bar-expressive",component:D,tags:["autodocs"],parameters:{docs:{description:{component:`
An expressive progress bar that communicates ongoing work with animated messages.

## Usage

\`\`\`tsx
import { EvoProgressBarExpressive } from "@evo-web/react/progress-bar-expressive";
\`\`\`
        `}}},argTypes:{a11yText:{type:{name:"string",required:!0},control:"text"},size:{control:"select",options:["medium","large"]},messages:{control:"object"}},args:{a11yText:"Loading...",messages:[{content:"Hang tight"},{content:"We're processing your order"},{content:"Just a moment longer"}]}},M={},E={args:{messages:[{content:"We're processing your order"}]}},I={args:{messages:[{content:"Display for 2 seconds",duration:2e3},{content:"Display for 3 seconds",duration:3e3},{content:"Display for 4 seconds",duration:4e3}]}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:"{}",...M.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    messages: [{
      content: "We're processing your order"
    }]
  }
}`,...E.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    messages: [{
      content: "Display for 2 seconds",
      duration: 2000
    }, {
      content: "Display for 3 seconds",
      duration: 3000
    }, {
      content: "Display for 4 seconds",
      duration: 4000
    }]
  }
}`,...I.parameters?.docs?.source}}};const ee=["Default","SingleMessage","CustomTiming"];export{I as CustomTiming,M as Default,E as SingleMessage,ee as __namedExportsOrder,$ as default};
