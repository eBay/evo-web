import{b as a}from"./utils-DyU2_5R1.js";import{b as n,_ as i,S as o,Q as s,f as g,m as T,I as y}from"./dom-CK48op32.js";import{$ as r,a as p,b as l,c,d as x,e as C,f as v,g as I,I as D}from"./evo-icon-help-24-BqVmGBJa.js";import{c as _,a as w,$ as H,b as k}from"./index-4Zpi8n-y.js";import"./iframe-BNpSE5cT.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bj-c3Zh6.js";import"./index-IFKzbDrV.js";import"./index-CjYJ4M_N.js";import"./index-Dk7u5EJt.js";import"./controllable.feat-BJgVrh9O.js";import"./controllable-input.feat-BVHUjJDH.js";import"./controllable-open.feat-DWinryiA.js";import"./controllable-select.feat-B_1KoW2_.js";/* empty css                    */import"./evo-icon-close-16-DzPM1zAy.js";import"./index-BQcT7S2z.js";import"./evo-icon-chevron-down-16-1tcFEK-f.js";const S=r,E=(t=>`/${t}&`)(c),L=n("nvow$CL","Important"),P=s("gYPeX$C","This is some important info about this feature.");function V(t){l(t.a)}const M=(t,e)=>p(t.a,{...e,a11yIconText:"Important information",a11yCloseText:"Dismiss infotip",heading:o({content:L(t)}),content:P(t)}),O=i("$zi5wRB",S,E,V,M),A=`<evo-infotip
  ...input
  a11yIconText="Important information"
  a11yCloseText="Dismiss infotip">
  <@heading>Important</@heading>
  This is some important info about this feature.
</evo-infotip>
`,W=(t=>`<p>Here is some text with an info icon ${t} and the paragraph continues.</p>`)(r),z=(t=>`Db/${t}&l`)(c),R=s("V$XCaW3","This provides additional context about the text.");function q(t){l(t.a)}const F=(t,e)=>p(t.a,{...e,a11yIconText:"More information",a11yCloseText:"Dismiss",content:R(t)}),Q=i("vHp2tyH",W,z,q,F),Y=`<p>
  Here is some text with an info icon\${" "}
  <evo-infotip ...input a11yIconText="More information" a11yCloseText="Dismiss">
    This provides additional context about the text.
  </evo-infotip>
  \${" "}and the paragraph continues.
</p>
`,B=r,U=(t=>`/${t}&`)(c),X=n("YxFOayT","Disabled"),G=s("f_pDva2","This infotip is disabled.");function J(t){l(t.a)}const N=(t,e)=>p(t.a,{...e,disabled:!0,a11yIconText:"Help",a11yCloseText:"Dismiss",heading:o({content:X(t)}),content:G(t)}),Z=i("A8a7ObW",B,U,J,N),j=`<evo-infotip ...input disabled a11yIconText="Help" a11yCloseText="Dismiss">
  <@heading>Disabled</@heading>
  This infotip is disabled.
</evo-infotip>
`,K=r,tt=(t=>`/${t}&`)(c),et=n("mI_1D4L","Shipping Info"),nt=t=>{v(t.a),I(t.a,{})},ot=n("kHcspDN",C,(t=>`/${t}&`)(x),nt),at=s("LiSG8fb","Free shipping on orders over $50.");function it(t){l(t.a)}const st=(t,e)=>p(t.a,{...e,a11yIconText:"Help with shipping",a11yCloseText:"Dismiss",icon:o({content:ot(t)}),heading:o({content:et(t)}),content:at(t)}),rt=i("uQ1yvSx",K,tt,it,st),pt=`<evo-infotip ...input a11yIconText="Help with shipping" a11yCloseText="Dismiss">
  <@icon>
    <evo-icon-help-24/>
  </@icon>
  <@heading>Shipping Info</@heading>
  Free shipping on orders over $50.
</evo-infotip>
`,lt=((t,e)=>`<!>${t}${e}`)(H,r),ct=((t,e)=>`b/${t}&/${e}&`)(w,c),mt=n("We1dA8e","Controlled"),dt=s("uMYDkJb","This infotip is controlled externally."),ut=n("MuhZp$B","Toggle Infotip"),b=T(5,t=>p(t.b,{...t.d,open:t.e,openChange:$t(t),a11yIconText:"Help",a11yCloseText:"Dismiss",heading:o({content:mt(t)}),content:dt(t)})),$=y(4,t=>{k(t.a,{onClick:bt(t),content:ut(t)}),b(t)});function ft(t){_(t.a),l(t.b),$(t,!1)}const ht=g(3,b),$t=t=>e=>{$(t,e)},bt=t=>function(){$(t,!t.e)},gt=i("qaoAcQm",lt,ct,ft,ht),Tt=`<let/open=false>

<evo-button onClick() {
  open = !open;
}>
  Toggle Infotip
</evo-button>

<evo-infotip ...input open:=open a11yIconText="Help" a11yCloseText="Dismiss">
  <@heading>Controlled</@heading>
  This infotip is controlled externally.
</evo-infotip>
`,Wt={title:"notices & tips/evo-infotip",component:D,parameters:{docs:{description:{component:"An infotip provides additional information via a clickable info icon button."}}},argTypes:{open:{controllable:!0,type:"boolean",control:"boolean",description:"Whether the infotip is open."},placement:{type:"string",options:["top","top-start","top-end","right","right-start","right-end","bottom","bottom-start","bottom-end","left","left-start","left-end"],control:"select",description:"Position of the overlay relative to the trigger button",table:{defaultValue:{summary:"bottom"}}},offset:{type:"number",control:"number",description:"Offset distance from the trigger button in pixels",table:{defaultValue:{summary:"8"}}},flip:{type:"boolean",control:"boolean",description:"Enable automatic flipping when near viewport edge",table:{defaultValue:{summary:"true"}}},shift:{type:"boolean",control:"boolean",description:"Enable automatic shifting when near viewport edge",table:{defaultValue:{summary:"true"}}},disabled:{type:"boolean",control:"boolean",description:"Disable the trigger button",table:{defaultValue:{summary:"false"}}},a11yIconText:{type:{name:"string",required:!0},control:"text",description:"Localized accessibility label for the trigger button",table:{defaultValue:{summary:"Help"}}},a11yCloseText:{type:{name:"string",required:!0},control:"text",description:"Localized accessibility label for the close button",table:{defaultValue:{summary:"Dismiss infotip"}}},icon:{description:"Custom icon to replace the default info icon.","@":{"<span> attributes":{description:"All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through to `<@icon>`"}}},heading:{name:"@heading",description:"Optional heading content. Defaults to `<span>`, but can be overridden","@":{as:{type:"string",options:["span","h1","h2","s","h4","h5","h6"],control:"select",description:"Overrides the tag used for the header text"},"<span> attributes":{description:"All attributes and event handlers from [the native `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through to `<@title>`."}}}}},m=a(O,A),d=a(Q,Y),u=a(Z,j),f=a(rt,pt),h=a(gt,Tt);m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode)",...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"buildExtensionTemplate(InParagraphTemplate, InParagraphTemplateCode)",...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DisabledTemplate, DisabledTemplateCode)",...u.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:"buildExtensionTemplate(CustomIconTemplate, CustomIconTemplateCode)",...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:"buildExtensionTemplate(ControlledTemplate, ControlledTemplateCode)",...h.parameters?.docs?.source}}};const zt=["Default","InParagraph","Disabled","CustomIcon","Controlled"];export{h as Controlled,f as CustomIcon,m as Default,u as Disabled,d as InParagraph,zt as __namedExportsOrder,Wt as default};
