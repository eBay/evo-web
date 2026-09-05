var k=Object.defineProperty;var a=(s,o)=>k(s,"name",{value:o,configurable:!0});import{R as e,c as _,u as A,r as n}from"./iframe-DXKVC7Wu.js";import{a as O}from"./utils-4VXCHhuo.js";import{u as C}from"./reduced-motion-C4vipGTe.js";import"./preload-helper-Cc2_yIPf.js";const r=a(({isFadingIn:s,isFadingOut:o,isInitial:x,...g})=>e.createElement("div",{...g,className:_("progress-bar-expressive__message",{"progress-bar-expressive__message--out":o,"progress-bar-expressive__message--in":s,"progress-bar-expressive__message--initial":x})}),"EbayProgressBarExpressiveMessage");try{r.displayName="progressbarexpressivemessage",r.__docgenInfo={description:"",displayName:"progressbarexpressivemessage",filePath:"/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-progress-bar-expressive/progress-bar-expressive-message.tsx",methods:[],props:{isFadingIn:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-progress-bar-expressive/progress-bar-expressive-message.tsx",name:"TypeLiteral"}],description:"",name:"isFadingIn",required:!1,tags:{},type:{name:"boolean"}},isFadingOut:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-progress-bar-expressive/progress-bar-expressive-message.tsx",name:"TypeLiteral"}],description:"",name:"isFadingOut",required:!1,tags:{},type:{name:"boolean"}},isInitial:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-progress-bar-expressive/progress-bar-expressive-message.tsx",name:"TypeLiteral"}],description:"",name:"isInitial",required:!1,tags:{},type:{name:"boolean"}},duration:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-progress-bar-expressive/progress-bar-expressive-message.tsx",name:"TypeLiteral"}],description:"",name:"duration",required:!1,tags:{},type:{name:"number"}}},tags:{}}}catch{}const U=1500,V=1.5,w=833,t=a(({className:s,"aria-label":o,children:x,size:g,...L})=>{const f=A(),[p,I]=n.useState(-1),[S,T]=n.useState(!1),[F,W]=n.useState(!0),v=O(x,r),i=v.length,D=g!=="medium",z=n.useMemo(()=>new Array(12).fill(0),[]),M=v[p]||null,l=p===i-1?0:p+1,h=v[l]||null,P=C();return n.useEffect(()=>{let B,c,N;if(i>0){const R=(h?.props?.duration??U)*(P?V:1);(!D||P)&&!M?I(l):B=setTimeout(()=>{T(!0),c=setTimeout(()=>{I(l),T(!1)},R)},w),N=setTimeout(()=>{W(!1)},w)}return()=>{clearTimeout(B),clearTimeout(c),clearTimeout(N)}},[i,p,l]),e.createElement("div",{...L,className:_("progress-bar-expressive",s)},i>0?e.createElement("div",{className:_("progress-bar-expressive__messages",{"progress-bar-expressive__messages--medium":g==="medium"})},!P&&h?e.createElement(r,{...h.props,"aria-hidden":"true",isFadingIn:S}):null,M?e.createElement(r,{...M.props,id:f,role:"status",isFadingIn:i===1,isFadingOut:S,isInitial:F}):null):null,e.createElement("div",{role:"progressbar","aria-label":o,"aria-describedby":f,className:"progress-bar-expressive__progress"},e.createElement("div",{className:"progress-bar-expressive__lines"},z.map((B,c)=>e.createElement("div",{key:c,className:"progress-bar-expressive__line"})))))},"EbayProgressBarExpressive");try{t.displayName="progressbarexpressive",t.__docgenInfo={description:"",displayName:"progressbarexpressive",filePath:"/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-progress-bar-expressive/progress-bar-expressive.tsx",methods:[],props:{size:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-progress-bar-expressive/progress-bar-expressive.tsx",name:"TypeLiteral"}],description:"",name:"size",required:!1,tags:{},type:{name:'"large" | "medium"'}}},tags:{}}}catch{}const K={component:t,title:"progress/ebay-progress-bar-expressive",argTypes:{"aria-label":{control:{type:"text"},description:"Localized, accessible label for the progress bar",table:{defaultValue:{summary:"Loading..."}}},size:{type:"string",control:{type:"select"},options:["large","medium"],description:"Message text size",table:{defaultValue:{summary:"large"}}},children:{description:"Child nodes, typically `EbayProgressBarExpressiveMessage` components",control:"text"},duration:{description:"Duration for which the message is displayed, in milliseconds",control:"number"}},tags:["autodocs"],parameters:{docs:{description:{component:`## Usage

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
\`\`\``}}}},m=a(s=>e.createElement(t,{...s}),"Default"),u=a(s=>e.createElement(t,{...s},e.createElement(r,null,"Hang tight"),e.createElement(r,null,"We're processing your order"),e.createElement(r,null,"Just a moment longer")),"WithMessages"),d=a(s=>e.createElement(t,{...s},e.createElement(r,null,"Single Message")),"WithSingleMessage"),E=a(s=>e.createElement(t,{...s},e.createElement(r,null,"Messages should be one line..."),e.createElement(r,{duration:2500},"Sometimes that's hard to guarantee, though."),e.createElement(r,null,"That's okay!")),"WithLongMessage"),b=a(s=>e.createElement(t,{...s},e.createElement(r,{duration:2e3},"Message with 2s duration"),e.createElement(r,{duration:3e3},"Message with 3s duration"),e.createElement(r,{duration:4e3},"Message with 4s duration")),"WithCustomTiming"),y=a(s=>e.createElement(t,{...s,size:"medium"},e.createElement(r,null,"Medium Size Message")),"WithMediumSize"),Q=["Default","WithMessages","WithSingleMessage","WithLongMessage","WithCustomTiming","WithMediumSize"];m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"args => <EbayProgressBarExpressive {...args} />",...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => <EbayProgressBarExpressive {...args}>
        <EbayProgressBarExpressiveMessage>Hang tight</EbayProgressBarExpressiveMessage>
        <EbayProgressBarExpressiveMessage>We&apos;re processing your order</EbayProgressBarExpressiveMessage>
        <EbayProgressBarExpressiveMessage>Just a moment longer</EbayProgressBarExpressiveMessage>
    </EbayProgressBarExpressive>`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => <EbayProgressBarExpressive {...args}>
        <EbayProgressBarExpressiveMessage>Single Message</EbayProgressBarExpressiveMessage>
    </EbayProgressBarExpressive>`,...d.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`args => <EbayProgressBarExpressive {...args}>
        <EbayProgressBarExpressiveMessage>Messages should be one line...</EbayProgressBarExpressiveMessage>
        <EbayProgressBarExpressiveMessage duration={2500}>
            Sometimes that&apos;s hard to guarantee, though.
        </EbayProgressBarExpressiveMessage>
        <EbayProgressBarExpressiveMessage>That&apos;s okay!</EbayProgressBarExpressiveMessage>
    </EbayProgressBarExpressive>`,...E.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`args => <EbayProgressBarExpressive {...args}>
        <EbayProgressBarExpressiveMessage duration={2000}>Message with 2s duration</EbayProgressBarExpressiveMessage>
        <EbayProgressBarExpressiveMessage duration={3000}>Message with 3s duration</EbayProgressBarExpressiveMessage>
        <EbayProgressBarExpressiveMessage duration={4000}>Message with 4s duration</EbayProgressBarExpressiveMessage>
    </EbayProgressBarExpressive>`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`args => <EbayProgressBarExpressive {...args} size="medium">
        <EbayProgressBarExpressiveMessage>Medium Size Message</EbayProgressBarExpressiveMessage>
    </EbayProgressBarExpressive>`,...y.parameters?.docs?.source}}};export{m as Default,b as WithCustomTiming,E as WithLongMessage,y as WithMediumSize,u as WithMessages,d as WithSingleMessage,Q as __namedExportsOrder,K as default};
