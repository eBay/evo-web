import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{n}from"./storybook-code-source-DlBTenms.js";import{t as r}from"./utils-C7m-hPxw.js";import{n as i,r as a,t as o,u as s}from"./registry-95LfxIAE.js";import{t as c}from"./render-tag-hXgrwudm.js";import{t as l}from"./attr-tag--AgZ8oJt.js";import{t as ee}from"./const-element-BfQ4jh6r.js";import{n as te,t as ne}from"./ebay-archive-24-icon-Sznc8rHl.js";import{n as u,t as d}from"./ebay-toggle-button-DgBow4wv.js";var f;function p(){return(p=t((()=>{f=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
    <span>
        ebay-toggle-button
    </span>
    <span style="font-weight: normal; font-size: medium; margin-bottom: -15px;">
        DS v1.0.0
    </span>
</h1>

Group of toggle buttons.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/buttons-ebay-toggle-button)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/buttons-ebay-toggle-button)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/ebay-toggle-button/examples)
`})))()}var re,m,h,g,_,v,y,b,x;function ie(){return(ie=t((()=>{re=s(),m=l(),te(),h=e(c()),u(),g=e(i()),_=o(),v=e(a()),y=`n$h60gp`,b=(0,re.t)(y),(0,_.r)(y,()=>b),x={},b._=(0,g.default)(function(e,t,n,r,i,a){(0,h.default)(d,(0,m.i)(()=>((0,m.a)(`subtitle`,{renderBody:e=>{e.t(`Subtitle`,r)}}),(0,m.a)(`icon`,{renderBody:e=>{(0,h.default)(ne,{},e,n,`1`)}}),e=>{e.t(`Title`,r)}),{layoutType:`list`,...e,subtitle:void 0,icon:void 0}),t,n,`0`,[[`toggle`,`emit`,!1,[`toggle`]]])},{t:y,s:!0},x),b.Component=(0,v.default)(x,b._)})))()}var ae;function oe(){return(oe=t((()=>{ae=`<ebay-toggle-button layoutType="list" ...input onToggle("emit", "toggle")>
    <@subtitle>Subtitle</@subtitle>
    <@icon>
        <ebay-archive-24-icon/>
    </@icon>
    Title
</ebay-toggle-button>
`})))()}var se,S,C,w,T,E,D,O,k;function A(){return(A=t((()=>{se=s(),S=l(),u(),C=e(c()),w=e(i()),T=o(),E=e(a()),D=`R2LjdMv`,O=(0,se.t)(D),(0,T.r)(D,()=>O),k={},O._=(0,w.default)(function(e,t,n,r,i,a){let{src:o,alt:s,fillPlacement:c,...l}=e;(0,C.default)(d,(0,S.i)(()=>((0,S.a)(`subtitle`,{renderBody:e=>{e.t(`Subtitle`,r)}}),(0,S.a)(`img`,{src:o,alt:s,fillPlacement:c}),e=>{e.t(`Title`,r)}),{layoutType:`list`,...l,subtitle:void 0,img:void 0}),t,n,`0`,[[`toggle`,`emit`,!1,[`toggle`]]])},{t:D,s:!0},k),O.Component=(0,E.default)(k,O._)})))()}var j;function M(){return(M=t((()=>{j=`export interface Input {
    src: string;
    alt: string;
    fillPlacement: string;
}
$ const { src, alt, fillPlacement, ...buttonInput } = input;
<ebay-toggle-button layoutType="list" ...buttonInput onToggle("emit", "toggle")>
    <@subtitle>Subtitle</@subtitle>
    <@img src=src alt=alt fillPlacement=fillPlacement/>
    Title
</ebay-toggle-button>
`})))()}var N,P,F,I,L,R,ce,z,B,V,H,U;function W(){return(W=t((()=>{N=s(),P=e(ee()),F=l(),u(),I=e(c()),L=e(i()),R=o(),ce=e(a()),z=`oPJGB7K`,B=(0,N.t)(z),V=(0,P.default)(`p`,null,1).t(`Subtitle 1`),H=(0,P.default)(`p`,null,1).t(`Subtitle 2`),(0,R.r)(z,()=>B),U={},B._=(0,L.default)(function(e,t,n,r,i,a){(0,I.default)(d,(0,F.i)(()=>((0,F.a)(`subtitle`,{renderBody:e=>{e.n(V,r),e.n(H,r)}}),e=>{e.t(`Title`,r)}),{layoutType:`list`,...e,subtitle:void 0}),t,n,`0`,[[`toggle`,`emit`,!1,[`toggle`]]])},{t:z,s:!0},U),B.Component=(0,ce.default)(U,B._)})))()}var G;function K(){return(K=t((()=>{G=`<ebay-toggle-button layoutType="list" ...input onToggle("emit", "toggle")>
    <@subtitle>
        <p>Subtitle 1</p>
        <p>Subtitle 2</p>
    </@subtitle>
    Title
</ebay-toggle-button>
`})))()}var q,J,Y,X,Z,Q,le;function $(){return($=t((()=>{p(),u(),ie(),oe(),A(),M(),W(),K(),q=e=>({input:r(e)}),J={title:`buttons/ebay-toggle-button`,component:d,parameters:{docs:{description:{component:f}}},argTypes:{renderBody:{control:{type:`text`}},layoutType:{type:`string`,control:{type:`select`},options:[`minimal`,`list`,`gallery`],description:'Enforced layout type of the button. May be `"minimal"` (default), `"list"`, or `"gallery"`. Gallery layout may only be used when there is also an icon or an image.'},pressed:{type:`boolean`,control:{type:`boolean`},description:`Pressed state of the button`},title:{type:`string`,control:{type:`text`},description:`Title attribute for the button`},subtitle:{type:`string|@subtitle`,control:{type:`text`},description:`Subtitle attribute for the button`},icon:{name:`@icon`,description:"An `<ebay-[name]-icon>` to show as the button's icon",table:{category:`@attribute tags`}},img:{name:`@img`,description:"An `<img>` to show as the button's image",table:{category:`@attribute tags`}},subtitleTag:{name:`@subtitle`,description:"May be used instead of the `subtitle` attribute for more control. Should contain no more than two brief lines of text",table:{category:`@attribute tags`}},src:{table:{category:`@img attributes`},control:{type:`text`},description:`Link to the image source`},alt:{table:{category:`@img attributes`},control:{type:`text`},description:`Alt text for the image`},fillPlacement:{table:{category:`@img attributes`},control:{type:`text`},description:"Placement of the image within the given bounds using the CSS `background-position` property. Options include [keywords, lengths, and edge distances](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position). Using this property will switch the image fit from `contain` to `cover`"},onToggle:{action:`on-toggle`,description:`Triggered when the button is toggled`,table:{category:`Events`,defaultValue:{summary:`{ originalEvent, pressed }`}}}}},Y=q.bind({}),Y.args={renderBody:`Title`},Y.parameters={docs:{source:{code:n(`ebay-toggle-button`,Y.args)}}},X=e=>({input:e,component:b}),X.args={},X.parameters={docs:{source:{code:ae}}},Z=e=>({input:e,component:O}),Z.args={layoutType:`gallery`,src:`https://cloudfront.slrlounge.com/wp-content/uploads/2012/07/01-SLRLounge-Holding-Standing-Wrong.jpg`,fillPlacement:`top`},Z.parameters={docs:{source:{code:j}}},Q=e=>({input:e,component:B}),Q.args={},Q.parameters={docs:{source:{code:G}}},le=[`Default`,`WithIcon`,`WithImage`,`MultilineSubtitle`],Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: addRenderBodies(args)
})`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: args,
  component: WithIconTemplate
})`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: args,
  component: WithImageTemplate
})`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: args,
  component: MultilineSubtitleTemplate
})`,...Q.parameters?.docs?.source}}}})))()}$();export{Y as Default,Q as MultilineSubtitle,X as WithIcon,Z as WithImage,le as __namedExportsOrder,J as default};