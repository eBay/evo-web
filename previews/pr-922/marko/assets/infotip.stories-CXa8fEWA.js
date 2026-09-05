import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./utils-CkiB0p9L.js";import{M as n,X as ee,et as te,i as r,k as ne,n as i,t as a,tt as re}from"./dom-CrmgVQ1h.js";import{i as ie,n as ae,o as oe,r as se,t as ce}from"./evo-button-OmHu2dco.js";import{a as le,c as o,d as s,i as ue,l as c,n as de,o as l,r as fe,s as u,t as pe,u as me}from"./evo-icon-help-24-CnmzmLk0.js";function he(e){u(e.a)}var d,f,p,m,h,g;function _(){return(_=e((()=>{s(),r(),d=o,f=(e=>`/${e}&`)(c),p=n(`nvow$CL`,`Important`),m=n(`gYPeX$C`,`This is some important info about this feature.`),h=(e,t)=>l(e.a,{...t,a11yIconText:`Important information`,a11yCloseText:`Dismiss infotip`,heading:i({content:p(e)}),content:m(e)}),g=a(`$zi5wRB`,d,f,he,h)})))()}var v;function y(){return(y=e((()=>{v=`<evo-infotip
  ...input
  a11yIconText="Important information"
  a11yCloseText="Dismiss infotip">
  <@heading>Important</@heading>
  This is some important info about this feature.
</evo-infotip>
`})))()}function ge(e){u(e.a)}var b,x,S,C,w;function T(){return(T=e((()=>{s(),r(),b=(e=>`<p>Here is some text with an info icon ${e} and the paragraph continues.</p>`)(o),x=(e=>`Db/${e}&l`)(c),S=n(`V$XCaW3`,`This provides additional context about the text.`),C=(e,t)=>l(e.a,{...t,a11yIconText:`More information`,a11yCloseText:`Dismiss`,content:S(e)}),w=a(`vHp2tyH`,b,x,ge,C)})))()}var E;function D(){return(D=e((()=>{E=`<p>
  Here is some text with an info icon\${" "}
  <evo-infotip ...input a11yIconText="More information" a11yCloseText="Dismiss">
    This provides additional context about the text.
  </evo-infotip>
  \${" "}and the paragraph continues.
</p>
`})))()}function _e(e){u(e.a)}var O,k,A,j,M,N;function ve(){return(ve=e((()=>{s(),r(),O=o,k=(e=>`/${e}&`)(c),A=n(`YxFOayT`,`Disabled`),j=n(`f_pDva2`,`This infotip is disabled.`),M=(e,t)=>l(e.a,{...t,disabled:!0,a11yIconText:`Help`,a11yCloseText:`Dismiss`,heading:i({content:A(e)}),content:j(e)}),N=a(`A8a7ObW`,O,k,_e,M)})))()}var P;function F(){return(F=e((()=>{P=`<evo-infotip ...input disabled a11yIconText="Help" a11yCloseText="Dismiss">
  <@heading>Disabled</@heading>
  This infotip is disabled.
</evo-infotip>
`})))()}function ye(e){u(e.a)}var I,L,R,z,B,V,H,U;function be(){return(be=e((()=>{le(),s(),r(),I=o,L=(e=>`/${e}&`)(c),R=n(`mI_1D4L`,`Shipping Info`),z=e=>{de(e.a),pe(e.a,{})},B=n(`kHcspDN`,fe,(e=>`/${e}&`)(ue),z),V=n(`LiSG8fb`,`Free shipping on orders over $50.`),H=(e,t)=>l(e.a,{...t,a11yIconText:`Help with shipping`,a11yCloseText:`Dismiss`,icon:i({content:B(e)}),heading:i({content:R(e)}),content:V(e)}),U=a(`uQ1yvSx`,I,L,ye,H)})))()}var xe;function Se(){return(Se=e((()=>{xe=`<evo-infotip ...input a11yIconText="Help with shipping" a11yCloseText="Dismiss">
  <@icon>
    <evo-icon-help-24/>
  </@icon>
  <@heading>Shipping Info</@heading>
  Free shipping on orders over $50.
</evo-infotip>
`})))()}function Ce(e){ae(e.a),u(e.b),G(e,!1)}var we,Te,Ee,De,Oe,W,G,ke,K,q,Ae;function je(){return(je=e((()=>{oe(),s(),r(),we=((e,t)=>`<!>${e}${t}`)(se,o),Te=((e,t)=>`b/${e}&/${t}&`)(ie,c),Ee=n(`We1dA8e`,`Controlled`),De=n(`uMYDkJb`,`This infotip is controlled externally.`),Oe=n(`MuhZp$B`,`Toggle Infotip`),W=te(5,e=>l(e.b,{...e.d,open:e.e,openChange:K(e),a11yIconText:`Help`,a11yCloseText:`Dismiss`,heading:i({content:Ee(e)}),content:De(e)})),G=ee(4,e=>{ce(e.a,{onClick:q(e),content:Oe(e)}),W(e)}),ke=ne(3,W),K=e=>t=>{G(e,t)},q=e=>function(){G(e,!e.e)},re(`xPFKGFQ`,K),re(`bwBa$VP`,q),Ae=a(`qaoAcQm`,we,Te,Ce,ke)})))()}var Me;function Ne(){return(Ne=e((()=>{Me=`<let/open=false>

<evo-button onClick() {
  open = !open;
}>
  Toggle Infotip
</evo-button>

<evo-infotip ...input open:=open a11yIconText="Help" a11yCloseText="Dismiss">
  <@heading>Controlled</@heading>
  This infotip is controlled externally.
</evo-infotip>
`})))()}var Pe,J,Y,X,Z,Q,Fe;function $(){return($=e((()=>{s(),_(),y(),T(),D(),ve(),F(),be(),Se(),je(),Ne(),Pe={title:`notices & tips/evo-infotip`,component:me,parameters:{docs:{description:{component:`An infotip provides additional information via a clickable info icon button.`}}},argTypes:{open:{controllable:!0,type:`boolean`,control:`boolean`,description:`Whether the infotip is open.`},placement:{type:`string`,options:[`top`,`top-start`,`top-end`,`right`,`right-start`,`right-end`,`bottom`,`bottom-start`,`bottom-end`,`left`,`left-start`,`left-end`],control:`select`,description:`Position of the overlay relative to the trigger button`,table:{defaultValue:{summary:`bottom`}}},offset:{type:`number`,control:`number`,description:`Offset distance from the trigger button in pixels`,table:{defaultValue:{summary:`8`}}},flip:{type:`boolean`,control:`boolean`,description:`Enable automatic flipping when near viewport edge`,table:{defaultValue:{summary:`true`}}},shift:{type:`boolean`,control:`boolean`,description:`Enable automatic shifting when near viewport edge`,table:{defaultValue:{summary:`true`}}},disabled:{type:`boolean`,control:`boolean`,description:`Disable the trigger button`,table:{defaultValue:{summary:`false`}}},a11yIconText:{type:{name:`string`,required:!0},control:`text`,description:`Localized accessibility label for the trigger button`,table:{defaultValue:{summary:`Help`}}},a11yCloseText:{type:{name:`string`,required:!0},control:`text`,description:`Localized accessibility label for the close button`,table:{defaultValue:{summary:`Dismiss infotip`}}},icon:{description:`Custom icon to replace the default info icon.`,"@":{"<span> attributes":{description:"All attributes and event handlers from [the native HTML `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through to `<@icon>`"}}},heading:{name:`@heading`,description:"Optional heading content. Defaults to `<span>`, but can be overridden","@":{as:{type:`string`,options:[`span`,`h1`,`h2`,`s`,`h4`,`h5`,`h6`],control:`select`,description:`Overrides the tag used for the header text`},"<span> attributes":{description:"All attributes and event handlers from [the native `<span>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/span) will be passed through to `<@title>`."}}}}},J=t(g,v),Y=t(w,E),X=t(N,P),Z=t(U,xe),Q=t(Ae,Me),Fe=[`Default`,`InParagraph`,`Disabled`,`CustomIcon`,`Controlled`],J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode)`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`buildExtensionTemplate(InParagraphTemplate, InParagraphTemplateCode)`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DisabledTemplate, DisabledTemplateCode)`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`buildExtensionTemplate(CustomIconTemplate, CustomIconTemplateCode)`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`buildExtensionTemplate(ControlledTemplate, ControlledTemplateCode)`,...Q.parameters?.docs?.source}}}})))()}$();export{Q as Controlled,Z as CustomIcon,J as Default,X as Disabled,Y as InParagraph,Fe as __namedExportsOrder,Pe as default};