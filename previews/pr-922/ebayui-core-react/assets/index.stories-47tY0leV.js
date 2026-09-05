import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-CK-NQdWx.js";import{t as r}from"./classnames-D09xBJOL.js";import{r as i}from"./utils-i55QFFMK.js";import{r as a}from"./random-id-C4JIZuFN.js";import{n as o}from"./iframe-RezWaW69.js";import{r as s,t as c}from"./utils-BI15M-bA.js";var l,u,d;function f(){return(f=t((()=>{l=e(n()),u=e(r()),d=({isFadingIn:e,isFadingOut:t,isInitial:n,...r})=>l.createElement(`div`,{...r,className:(0,u.default)(`progress-bar-expressive__message`,{"progress-bar-expressive__message--out":t,"progress-bar-expressive__message--in":e,"progress-bar-expressive__message--initial":n})});try{d.displayName=`progressbarexpressivemessage`,d.__docgenInfo={description:``,displayName:`progressbarexpressivemessage`,filePath:`/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-progress-bar-expressive/progress-bar-expressive-message.tsx`,methods:[],props:{isFadingIn:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-progress-bar-expressive/progress-bar-expressive-message.tsx`,name:`TypeLiteral`}],description:``,name:`isFadingIn`,required:!1,tags:{},type:{name:`boolean | undefined`}},isFadingOut:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-progress-bar-expressive/progress-bar-expressive-message.tsx`,name:`TypeLiteral`}],description:``,name:`isFadingOut`,required:!1,tags:{},type:{name:`boolean | undefined`}},isInitial:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-progress-bar-expressive/progress-bar-expressive-message.tsx`,name:`TypeLiteral`}],description:``,name:`isInitial`,required:!1,tags:{},type:{name:`boolean | undefined`}},duration:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-progress-bar-expressive/progress-bar-expressive-message.tsx`,name:`TypeLiteral`}],description:``,name:`duration`,required:!1,tags:{},type:{name:`number | undefined`}}},tags:{}}}catch{}})))()}var p,m,h,g,_,v;function y(){return(y=t((()=>{p=e(n()),c(),m=e(r()),f(),h=1500,g=1.5,_=833,v=({className:e,"aria-label":t,children:n,size:r,...o})=>{let c=a(),[l,u]=(0,p.useState)(-1),[f,v]=(0,p.useState)(!1),[y,b]=(0,p.useState)(!0),x=i(n,d),S=x.length,C=r!==`medium`,w=(0,p.useMemo)(()=>Array(12).fill(0),[]),T=x[l]||null,E=l===S-1?0:l+1,D=x[E]||null,O=s();return(0,p.useEffect)(()=>{let e,t,n;if(S>0){let r=(D?.props?.duration??h)*(O?g:1);(!C||O)&&!T?u(E):e=setTimeout(()=>{v(!0),t=setTimeout(()=>{u(E),v(!1)},r)},_),n=setTimeout(()=>{b(!1)},_)}return()=>{clearTimeout(e),clearTimeout(t),clearTimeout(n)}},[S,l,E]),p.createElement(`div`,{...o,className:(0,m.default)(`progress-bar-expressive`,e)},S>0?p.createElement(`div`,{className:(0,m.default)(`progress-bar-expressive__messages`,{"progress-bar-expressive__messages--medium":r===`medium`})},!O&&D?p.createElement(d,{...D.props,"aria-hidden":`true`,isFadingIn:f}):null,T?p.createElement(d,{...T.props,id:c,role:`status`,isFadingIn:S===1,isFadingOut:f,isInitial:y}):null):null,p.createElement(`div`,{role:`progressbar`,"aria-label":t,"aria-describedby":c,className:`progress-bar-expressive__progress`},p.createElement(`div`,{className:`progress-bar-expressive__lines`},w.map((e,t)=>p.createElement(`div`,{key:t,className:`progress-bar-expressive__line`})))))};try{v.displayName=`progressbarexpressive`,v.__docgenInfo={description:``,displayName:`progressbarexpressive`,filePath:`/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-progress-bar-expressive/progress-bar-expressive.tsx`,methods:[],props:{size:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-progress-bar-expressive/progress-bar-expressive.tsx`,name:`TypeLiteral`}],description:``,name:`size`,required:!1,tags:{},type:{name:`"large" | "medium" | undefined`}}},tags:{}}}catch{}})))()}function b(){return(b=t((()=>{y(),f()})))()}var x,S,C,w,T,E,D,O,k;function A(){return(A=t((()=>{n(),b(),x=o(),S={component:v,title:`progress/ebay-progress-bar-expressive`,argTypes:{"aria-label":{control:{type:`text`},description:`Localized, accessible label for the progress bar`,table:{defaultValue:{summary:`Loading...`}}},size:{type:`string`,control:{type:`select`},options:[`large`,`medium`],description:`Message text size`,table:{defaultValue:{summary:`large`}}},children:{description:"Child nodes, typically `EbayProgressBarExpressiveMessage` components",control:`text`},duration:{description:`Duration for which the message is displayed, in milliseconds`,control:`number`}},tags:[`autodocs`],parameters:{docs:{description:{component:`## Usage

### Import

\`\`\`jsx harmony
import {
    EbayProgressBarExpressive,
    EbayProgressBarExpressiveMessage,
} from "@ebay/ui-core-react/ebay-progress-bar-expressive";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/progress-bar-expressive";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/progress-bar-expressive.css";
\`\`\`

### Basic

\`\`\`jsx harmony
<EbayProgressBarExpressive aria-label="Progress">
    <EbayProgressBarExpressiveMessage>Message 1</EbayProgressBarExpressiveMessage>
    <EbayProgressBarExpressiveMessage>Message 2</EbayProgressBarExpressiveMessage>
</EbayProgressBarExpressive>
\`\`\``}}}},C=e=>(0,x.jsx)(v,{...e}),w=e=>(0,x.jsxs)(v,{...e,children:[(0,x.jsx)(d,{children:`Hang tight`}),(0,x.jsx)(d,{children:`We're processing your order`}),(0,x.jsx)(d,{children:`Just a moment longer`})]}),T=e=>(0,x.jsx)(v,{...e,children:(0,x.jsx)(d,{children:`Single Message`})}),E=e=>(0,x.jsxs)(v,{...e,children:[(0,x.jsx)(d,{children:`Messages should be one line...`}),(0,x.jsx)(d,{duration:2500,children:`Sometimes that's hard to guarantee, though.`}),(0,x.jsx)(d,{children:`That's okay!`})]}),D=e=>(0,x.jsxs)(v,{...e,children:[(0,x.jsx)(d,{duration:2e3,children:`Message with 2s duration`}),(0,x.jsx)(d,{duration:3e3,children:`Message with 3s duration`}),(0,x.jsx)(d,{duration:4e3,children:`Message with 4s duration`})]}),O=e=>(0,x.jsx)(v,{...e,size:`medium`,children:(0,x.jsx)(d,{children:`Medium Size Message`})}),k=[`Default`,`WithMessages`,`WithSingleMessage`,`WithLongMessage`,`WithCustomTiming`,`WithMediumSize`],C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`args => <EbayProgressBarExpressive {...args} />`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`args => <EbayProgressBarExpressive {...args}>
        <EbayProgressBarExpressiveMessage>Hang tight</EbayProgressBarExpressiveMessage>
        <EbayProgressBarExpressiveMessage>We&apos;re processing your order</EbayProgressBarExpressiveMessage>
        <EbayProgressBarExpressiveMessage>Just a moment longer</EbayProgressBarExpressiveMessage>
    </EbayProgressBarExpressive>`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`args => <EbayProgressBarExpressive {...args}>
        <EbayProgressBarExpressiveMessage>Single Message</EbayProgressBarExpressiveMessage>
    </EbayProgressBarExpressive>`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`args => <EbayProgressBarExpressive {...args}>
        <EbayProgressBarExpressiveMessage>Messages should be one line...</EbayProgressBarExpressiveMessage>
        <EbayProgressBarExpressiveMessage duration={2500}>
            Sometimes that&apos;s hard to guarantee, though.
        </EbayProgressBarExpressiveMessage>
        <EbayProgressBarExpressiveMessage>That&apos;s okay!</EbayProgressBarExpressiveMessage>
    </EbayProgressBarExpressive>`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`args => <EbayProgressBarExpressive {...args}>
        <EbayProgressBarExpressiveMessage duration={2000}>Message with 2s duration</EbayProgressBarExpressiveMessage>
        <EbayProgressBarExpressiveMessage duration={3000}>Message with 3s duration</EbayProgressBarExpressiveMessage>
        <EbayProgressBarExpressiveMessage duration={4000}>Message with 4s duration</EbayProgressBarExpressiveMessage>
    </EbayProgressBarExpressive>`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`args => <EbayProgressBarExpressive {...args} size="medium">
        <EbayProgressBarExpressiveMessage>Medium Size Message</EbayProgressBarExpressiveMessage>
    </EbayProgressBarExpressive>`,...O.parameters?.docs?.source}}}})))()}A();export{C as Default,D as WithCustomTiming,E as WithLongMessage,O as WithMediumSize,w as WithMessages,T as WithSingleMessage,k as __namedExportsOrder,S as default};