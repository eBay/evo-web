import{b as a}from"./utils-DyU2_5R1.js";import{_ as n,a as i,l as o,j as s,b as g,e as T,E as y}from"./dom-BHuf_wjI.js";import{a as r,c as l,b as p,$ as c,f as x,g as C,j as v,k as I,I as D}from"./evo-icon-help-24-5848XDZs.js";import{a as _,b as w,c as k,$ as H}from"./index-Ctnw2zLv.js";import"./iframe-D1vEsa04.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CE0S8RYG.js";import"./index-3OPMgxGk.js";import"./index-Cf7gXux2.js";import"./index-Ce3AU_ni.js";import"./controllable.feat-D9Vh_Z1q.js";import"./controllable-input.feat-DsMrAAy9.js";import"./controllable-open.feat-DzmLOvf4.js";import"./controllable-select.feat-B-1_7x6U.js";/* empty css                    */import"./evo-icon-close-16-pLvbr-v6.js";import"./index-edzibN_L.js";import"./evo-icon-chevron-down-16-Zh7qSkbb.js";const E=r,S=(t=>`/${t}&`)(c),L=n("nvow$CL","Important"),P=s("gYPeX$C","This is some important info about this feature.");function V(t){p(t.a)}const M=(t,e)=>l(t.a,{...e,a11yIconText:"Important information",a11yCloseText:"Dismiss infotip",heading:o({content:L(t)}),content:P(t)}),O=i("$zi5wRB",E,S,V,M),A=`<evo-infotip
  ...input
  a11yIconText="Important information"
  a11yCloseText="Dismiss infotip">
  <@heading>Important</@heading>
  This is some important info about this feature.
</evo-infotip>
`,W=(t=>`<p>Here is some text with an info icon ${t} and the paragraph continues.</p>`)(r),z=(t=>`Db/${t}&l`)(c),R=s("V$XCaW3","This provides additional context about the text.");function q(t){p(t.a)}const F=(t,e)=>l(t.a,{...e,a11yIconText:"More information",a11yCloseText:"Dismiss",content:R(t)}),Y=i("vHp2tyH",W,z,q,F),j=`<p>
  Here is some text with an info icon\${" "}
  <evo-infotip ...input a11yIconText="More information" a11yCloseText="Dismiss">
    This provides additional context about the text.
  </evo-infotip>
  \${" "}and the paragraph continues.
</p>
`,B=r,Q=(t=>`/${t}&`)(c),U=n("YxFOayT","Disabled"),X=s("f_pDva2","This infotip is disabled.");function G(t){p(t.a)}const J=(t,e)=>l(t.a,{...e,disabled:!0,a11yIconText:"Help",a11yCloseText:"Dismiss",heading:o({content:U(t)}),content:X(t)}),N=i("A8a7ObW",B,Q,G,J),Z=`<evo-infotip ...input disabled a11yIconText="Help" a11yCloseText="Dismiss">
  <@heading>Disabled</@heading>
  This infotip is disabled.
</evo-infotip>
`,K=r,tt=(t=>`/${t}&`)(c),et=n("mI_1D4L","Shipping Info"),nt=t=>{v(t.a),I(t.a,{})},ot=n("kHcspDN",C,(t=>`/${t}&`)(x),nt),at=s("LiSG8fb","Free shipping on orders over $50.");function it(t){p(t.a)}const st=(t,e)=>l(t.a,{...e,a11yIconText:"Help with shipping",a11yCloseText:"Dismiss",icon:o({content:ot(t)}),heading:o({content:et(t)}),content:at(t)}),rt=i("uQ1yvSx",K,tt,it,st),lt=`<evo-infotip ...input a11yIconText="Help with shipping" a11yCloseText="Dismiss">
  <@icon>
    <evo-icon-help-24/>
  </@icon>
  <@heading>Shipping Info</@heading>
  Free shipping on orders over $50.
</evo-infotip>
`,pt=((t,e)=>`<!>${t}${e}`)(k,r),ct=((t,e)=>`b/${t}&/${e}&`)(w,c),mt=n("We1dA8e","Controlled"),dt=s("uMYDkJb","This infotip is controlled externally."),ut=n("MuhZp$B","Toggle Infotip"),b=T(5,t=>l(t.b,{...t.d,open:t.e,openChange:$t(t),a11yIconText:"Help",a11yCloseText:"Dismiss",heading:o({content:mt(t)}),content:dt(t)})),$=y(4,t=>{H(t.a,{onClick:bt(t),content:ut(t)}),b(t)});function ft(t){_(t.a),p(t.b),$(t,!1)}const ht=g(3,b),$t=t=>e=>{$(t,e)},bt=t=>function(){$(t,!t.e)},gt=i("qaoAcQm",pt,ct,ft,ht),Tt=`<let/open=false>

<evo-button onClick() {
  open = !open;
}>
  Toggle Infotip
</evo-button>

<evo-infotip ...input open:=open a11yIconText="Help" a11yCloseText="Dismiss">
  <@heading>Controlled</@heading>
  This infotip is controlled externally.
</evo-infotip>
`,Wt={title:"notices & tips/evo-infotip",component:D,parameters:{docs:{description:{component:"An infotip provides additional information via a clickable info icon button."}}},argTypes:{open:{controllable:!0,type:"boolean",control:"boolean",description:"Whether the infotip is open."},placement:{type:"string",options:["top","top-start","top-end","right","right-start","right-end","bottom","bottom-start","bottom-end","left","left-start","left-end"],control:"select",description:"Position of the overlay relative to the trigger button",table:{defaultValue:{summary:"bottom"}}},offset:{type:"number",control:"number",description:"Offset distance from the trigger button in pixels",table:{defaultValue:{summary:"8"}}},flip:{type:"boolean",control:"boolean",description:"Enable automatic flipping when near viewport edge",table:{defaultValue:{summary:"true"}}},shift:{type:"boolean",control:"boolean",description:"Enable automatic shifting when near viewport edge",table:{defaultValue:{summary:"true"}}},disabled:{type:"boolean",control:"boolean",description:"Disable the trigger button",table:{defaultValue:{summary:"false"}}},a11yIconText:{type:{name:"string",required:!0},control:"text",description:"Localized accessibility label for the trigger button",table:{defaultValue:{summary:"Help"}}},a11yCloseText:{type:{name:"string",required:!0},control:"text",description:"Localized accessibility label for the close button",table:{defaultValue:{summary:"Dismiss infotip"}}},icon:{description:"Custom icon to replace the default info icon.","@":{"<span> attributes":{description:"All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through to `<@icon>`"}}},heading:{name:"@heading",description:"Optional heading content. Defaults to `<span>`, but can be overridden","@":{as:{type:"string",options:["span","h1","h2","s","h4","h5","h6"],control:"select",description:"Overrides the tag used for the header text"},"<span> attributes":{description:"All attributes and event handlers from [the native `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through to `<@title>`."}}}}},m=a(O,A),d=a(Y,j),u=a(N,Z),f=a(rt,lt),h=a(gt,Tt);m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode)",...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"buildExtensionTemplate(InParagraphTemplate, InParagraphTemplateCode)",...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:"buildExtensionTemplate(DisabledTemplate, DisabledTemplateCode)",...u.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:"buildExtensionTemplate(CustomIconTemplate, CustomIconTemplateCode)",...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:"buildExtensionTemplate(ControlledTemplate, ControlledTemplateCode)",...h.parameters?.docs?.source}}};const zt=["Default","InParagraph","Disabled","CustomIcon","Controlled"];export{h as Controlled,f as CustomIcon,m as Default,u as Disabled,d as InParagraph,zt as __namedExportsOrder,Wt as default};
