import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./utils-CkiB0p9L.js";import{A as n,M as r,Z as ee,i,k as te,n as a,nt as ne,t as o,tt as re}from"./dom-CNWckxLY.js";import{i as ie,n as ae,o as oe,r as se,t as ce}from"./evo-button-DCHqE7Ja.js";import{a as le,c as s,d as c,i as ue,l,n as de,o as u,r as fe,s as d,t as pe,u as me}from"./evo-icon-help-24-Bkmr8jAw.js";function he(e){d(e.a)}var f,p,m,h,g,_;function v(){return(v=e((()=>{c(),i(),f=s,p=(e=>`/${e}&`)(l),m=r(`nvow$CL`,`Important`),h=n(`gYPeX$C`,`This is some important info about this feature.`),g=(e,t)=>u(e.a,{...t,a11yIconText:`Important information`,a11yCloseText:`Dismiss infotip`,heading:a({content:m(e)}),content:h(e)}),_=o(`$zi5wRB`,f,p,he,g)})))()}var y;function b(){return(b=e((()=>{y=`<evo-infotip
  ...input
  a11yIconText="Important information"
  a11yCloseText="Dismiss infotip"
>
  <@heading>Important</@heading>
  This is some important info about this feature.
</evo-infotip>
`})))()}function ge(e){d(e.a)}var x,S,C,w,T;function E(){return(E=e((()=>{c(),i(),x=(e=>`<p>Here is some text with an info icon ${e} and the paragraph continues.</p>`)(s),S=(e=>`Db/${e}&l`)(l),C=n(`V$XCaW3`,`This provides additional context about the text.`),w=(e,t)=>u(e.a,{...t,a11yIconText:`More information`,a11yCloseText:`Dismiss`,content:C(e)}),T=o(`vHp2tyH`,x,S,ge,w)})))()}var D;function O(){return(O=e((()=>{D=`<p>
  Here is some text with an info icon\${" "}
  <evo-infotip ...input a11yIconText="More information" a11yCloseText="Dismiss">
    This provides additional context about the text.
  </evo-infotip>
  \${" "}and the paragraph continues.
</p>
`})))()}function _e(e){d(e.a)}var k,A,j,M,N,P;function ve(){return(ve=e((()=>{c(),i(),k=s,A=(e=>`/${e}&`)(l),j=r(`YxFOayT`,`Disabled`),M=n(`f_pDva2`,`This infotip is disabled.`),N=(e,t)=>u(e.a,{...t,disabled:!0,a11yIconText:`Help`,a11yCloseText:`Dismiss`,heading:a({content:j(e)}),content:M(e)}),P=o(`A8a7ObW`,k,A,_e,N)})))()}var F;function I(){return(I=e((()=>{F=`<evo-infotip ...input disabled a11yIconText="Help" a11yCloseText="Dismiss">
  <@heading>Disabled</@heading>
  This infotip is disabled.
</evo-infotip>
`})))()}function ye(e){d(e.a)}var L,R,z,B,V,H,U,be;function xe(){return(xe=e((()=>{le(),c(),i(),L=s,R=(e=>`/${e}&`)(l),z=r(`mI_1D4L`,`Shipping Info`),B=e=>{de(e.a),pe(e.a,{})},V=r(`kHcspDN`,fe,(e=>`/${e}&`)(ue),B),H=n(`LiSG8fb`,`Free shipping on orders over $50.`),U=(e,t)=>u(e.a,{...t,a11yIconText:`Help with shipping`,a11yCloseText:`Dismiss`,icon:a({content:V(e)}),heading:a({content:z(e)}),content:H(e)}),be=o(`uQ1yvSx`,L,R,ye,U)})))()}var Se;function Ce(){return(Ce=e((()=>{Se=`<evo-infotip ...input a11yIconText="Help with shipping" a11yCloseText="Dismiss">
  <@icon>
    <evo-icon-help-24/>
  </@icon>
  <@heading>Shipping Info</@heading>
  Free shipping on orders over $50.
</evo-infotip>
`})))()}function we(e){ae(e.a),d(e.b),G(e,!1)}var Te,Ee,De,Oe,ke,W,G,Ae,K,q,je;function Me(){return(Me=e((()=>{oe(),c(),i(),Te=((e,t)=>`<!>${e}${t}`)(se,s),Ee=((e,t)=>`b/${e}&/${t}&`)(ie,l),De=r(`We1dA8e`,`Controlled`),Oe=n(`uMYDkJb`,`This infotip is controlled externally.`),ke=r(`MuhZp$B`,`Toggle Infotip`),W=re(5,e=>u(e.b,{...e.d,open:e.e,openChange:K(e),a11yIconText:`Help`,a11yCloseText:`Dismiss`,heading:a({content:De(e)}),content:Oe(e)})),G=ee(4,e=>{ce(e.a,{onClick:q(e),content:ke(e)}),W(e)}),Ae=te(3,W),K=e=>t=>{G(e,t)},q=e=>function(){G(e,!e.e)},ne(`xPFKGFQ`,K),ne(`bwBa$VP`,q),je=o(`qaoAcQm`,Te,Ee,we,Ae)})))()}var Ne;function Pe(){return(Pe=e((()=>{Ne=`<let/open=false>

<evo-button onClick() {
  open = !open;
}>
  Toggle Infotip
</evo-button>

<evo-infotip ...input open:=open a11yIconText="Help" a11yCloseText="Dismiss">
  <@heading>Controlled</@heading>
  This infotip is controlled externally.
</evo-infotip>
`})))()}var Fe,J,Y,X,Z,Q,Ie;function $(){return($=e((()=>{c(),v(),b(),E(),O(),ve(),I(),xe(),Ce(),Me(),Pe(),Fe={title:`notices & tips/evo-infotip`,component:me,parameters:{docs:{description:{component:`An infotip provides additional information via a clickable info icon button.`}}},argTypes:{open:{controllable:!0,type:`boolean`,control:`boolean`,description:`Whether the infotip is open.`},placement:{type:`string`,options:[`top`,`top-start`,`top-end`,`right`,`right-start`,`right-end`,`bottom`,`bottom-start`,`bottom-end`,`left`,`left-start`,`left-end`],control:`select`,description:`Position of the overlay relative to the trigger button`,table:{defaultValue:{summary:`bottom`}}},offset:{type:`number`,control:`number`,description:`Offset distance from the trigger button in pixels`,table:{defaultValue:{summary:`8`}}},flip:{type:`boolean`,control:`boolean`,description:`Enable automatic flipping when near viewport edge`,table:{defaultValue:{summary:`true`}}},shift:{type:`boolean`,control:`boolean`,description:`Enable automatic shifting when near viewport edge`,table:{defaultValue:{summary:`true`}}},disabled:{type:`boolean`,control:`boolean`,description:`Disable the trigger button`,table:{defaultValue:{summary:`false`}}},a11yIconText:{type:{name:`string`,required:!0},control:`text`,description:`Localized accessibility label for the trigger button`,table:{defaultValue:{summary:`Help`}}},a11yCloseText:{type:{name:`string`,required:!0},control:`text`,description:`Localized accessibility label for the close button`,table:{defaultValue:{summary:`Dismiss infotip`}}},icon:{description:`Custom icon to replace the default info icon.`,"@":{"<span> attributes":{description:"All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through to `<@icon>`"}}},heading:{name:`@heading`,description:"Optional heading content. Defaults to `<span>`, but can be overridden","@":{as:{type:`string`,options:[`span`,`h1`,`h2`,`s`,`h4`,`h5`,`h6`],control:`select`,description:`Overrides the tag used for the header text`},"<span> attributes":{description:"All attributes and event handlers from [the native `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through to `<@title>`."}}}}},J=t(_,y),Y=t(T,D),X=t(P,F),Z=t(be,Se),Q=t(je,Ne),Ie=[`Default`,`InParagraph`,`Disabled`,`CustomIcon`,`Controlled`],J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode)`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`buildExtensionTemplate(InParagraphTemplate, InParagraphTemplateCode)`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DisabledTemplate, DisabledTemplateCode)`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`buildExtensionTemplate(CustomIconTemplate, CustomIconTemplateCode)`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`buildExtensionTemplate(ControlledTemplate, ControlledTemplateCode)`,...Q.parameters?.docs?.source}}}})))()}$();export{Q as Controlled,Z as CustomIcon,J as Default,X as Disabled,Y as InParagraph,Ie as __namedExportsOrder,Fe as default};