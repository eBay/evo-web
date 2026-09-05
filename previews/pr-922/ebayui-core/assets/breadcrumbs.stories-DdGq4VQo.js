import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{n}from"./storybook-code-source-DlBTenms.js";import{t as r}from"./utils-C7m-hPxw.js";import{c as i,h as a,l as o,n as s,r as c,s as l,t as u,u as d}from"./registry-95LfxIAE.js";import{t as f}from"./render-tag-hXgrwudm.js";import{t as p}from"./dynamic-tag-CCbAf3a9.js";import{t as m}from"./of-fallback-rY0Dkoru.js";import{t as h}from"./attr-tag--AgZ8oJt.js";import{c as ee,l as te}from"./event-utils-Bu5IuP5L.js";import{n as ne,t as re}from"./dom-C2KCbcve.js";import{t as ie}from"./utility-ByrNQMTr.js";import{i as ae,n as oe,r as se,t as ce}from"./ebay-chevron-right-12-icon-BM6zmIuK.js";import{n as le,t as ue}from"./ebay-fake-menu-button-BmezQ6d6.js";function de(){return(de=t((()=>{})))()}function fe(){return(fe=t((()=>{de(),ie()})))()}var g;function _(){return(_=t((()=>{ee(),ne(),g=class extends Marko.Component{handleClick(e){this.emit(`select`,{originalEvent:e,el:e?.target})}handleMenuBreadcrumb(e){this.emit(`select`,{originalEvent:e,el:e?.el})}onCreate(){this.state={hiddenIndex:[]}}onMount(){this._calculateMaxItems(),this.subscribeTo(te).on(`resize`,this._calculateMaxItems.bind(this))}onInput(e){this.cachedWidths=[];let t=[],n=[...e.item??[]];if((n||[]).length>4)for(let e=1;e<n.length-2;e++)t.push(e);this.state.hiddenIndex=t,this.newInput=!0}onUpdate(){this.newInput&&(this.newInput=!1,this._calculateMaxItems())}_getItemWidths(e){let t=this.cachedWidths;if(t.length!==e.children.length){t=[];for(let n=0;n<e.children.length;n++){let r=e.children[n];r.hasAttribute(`hidden`)?(r.removeAttribute(`hidden`),t[n]=r.offsetWidth,r.setAttribute(`hidden`,``)):t[n]=r.offsetWidth}this.cachedWidths=t}return t}_calculateMaxItems(){let{input:e,state:t}=this;if(![...e.item??[]].some(e=>!e.type))return;let n=this.getEl(`items`),r=re(n),i=n.children.length-1,a=this._getItemWidths(n),o=t.hiddenIndex.length>0,s=1,c=i-1,l=c-2,u=a[0]+a[i];o&&(u+=a[s],s++);let d=[];for(let e=c;e>=s;e--)u+=a[e],(u>r||l>=e)&&d.unshift(o?e-1:e);t.hiddenIndex=d}}})))()}var v,y,b,x,S,C,pe,me,he,ge,w,T,E;function D(){return(D=t((()=>{v=d(),fe(),i(),ae(),y=e(p()),b=h(),x=e(m()),le(),S=e(f()),oe(),C=e(l()),pe=e(a()),_(),me=e(s()),he=u(),ge=e(c()),w=`o`,T=(0,v.t)(w),(0,he.r)(w,()=>T),E=g,T._=(0,me.default)(function(e,t,n,r,i,a){let{a11yHeadingText:s,a11yHeadingTag:c,a11yMenuButtonText:l,class:u,item:d=[],...f}=e,p=[...d];var m=(p||[]).some(e=>e.href!=null);t.be(`nav`,(0,C.default)(o(f),{"aria-labelledby":n.elId(`breadcrumbs-heading`),class:(0,pe.default)([`breadcrumbs`,`breadcrumb--overflow`,u]),role:`navigation`}),`@root`,r,null,4),(0,y.default)(t,c||`h2`,()=>({id:n.elId(`breadcrumbs-heading`),class:`clipped`}),e=>{e.t(s,r)},null,null,n,`0`),t.be(`ul`,null,`@items`,r,null,0);{let e=0;for(let a of(0,x.default)(p)){let s=e++,c=`[${s}]`;var h=i.hiddenIndex.indexOf(s)>-1;i.hiddenIndex.length>0&&s===1&&(t.be(`li`,null,`1`+c,r,null,0),(0,S.default)(ue,(0,b.i)(()=>{let e=0;for(let t of(0,x.default)(i.hiddenIndex)){let r=`[${e+++c}]`;(0,b.r)(`item`,{type:m?`a`:`button`,...o(p[t]),renderBody:e=>{(0,y.default)(e,p[t].renderBody,null,null,null,null,n,`3`+r)}})}},{variant:`icon`,transparent:!0,icon:se,collapseOnSelect:!0,a11yText:l}),t,n,`2`+c,[[`select`,`handleMenuBreadcrumb`,!1]]),(0,S.default)(ce,{},t,n,`4`+c),t.ee()),t.be(`li`,{hidden:h},`5`+c,r,null,0),(()=>{var e=s===p.length-1,i=!a.href&&e;let l=m?`a`:`button`;t.be(l,(0,C.default)(o(a),{"aria-current":i&&`location`}),`6`+c,r,null,4,{onclick:n.d(`click`,!i&&`handleClick`,!1)}),(0,y.default)(t,a.renderBody,null,null,null,null,n,`7`+c),t.ee(),e||(0,S.default)(ce,{},t,n,`8`+c)})(),t.ee()}}t.ee(),t.ee()},{t:w},E),T.Component=(0,ge.default)(E,T._)})))()}var _e,O,ve,k,A,j,M,N,P;function F(){return(F=t((()=>{_e=d(),O=h(),D(),ve=e(f()),k=e(s()),A=u(),j=e(c()),M=`LWufV6X`,N=(0,_e.t)(M),(0,A.r)(M,()=>N),P={},N._=(0,k.default)(function(e,t,n,r,i,a){(0,ve.default)(T,(0,O.i)(()=>{(0,O.r)(`item`,{href:`http://www.ebay.com/`,renderBody:e=>{e.t(`eBay`,r)}}),(0,O.r)(`item`,{href:`https://www.ebay.com/rpp/cell-phone-pda`,renderBody:e=>{e.t(`Cell Phones, Smart Watches & Accessories`,r)}}),(0,O.r)(`item`,{href:`https://www.ebay.com/b/Smart-Watch-Accessories/182064/bn_16565905`,renderBody:e=>{e.t(`Smart Watch Accessories`,r)}}),(0,O.r)(`item`,{renderBody:e=>{e.t(`Smart Watch Bands`,r)}})},{a11yHeadingText:`Page navigation`}),t,n,`0`)},{t:M,i:!0},P),N.Component=(0,j.default)(P,N._)})))()}var ye,I,be,xe,Se,Ce,L,R,z;function B(){return(B=t((()=>{ye=d(),I=h(),D(),be=e(f()),xe=e(s()),Se=u(),Ce=e(c()),L=`nACB02E`,R=(0,ye.t)(L),(0,Se.r)(L,()=>R),z={},R._=(0,xe.default)(function(e,t,n,r,i,a){(0,be.default)(T,(0,I.i)(()=>{(0,I.r)(`item`,{href:`http://www.ebay.com/`,renderBody:e=>{e.t(`eBay`,r)}}),(0,I.r)(`item`,{href:`https://www.ebay.com/rpp/cell-phone-pda`,renderBody:e=>{e.t(`Cell Phones, Smart Watches & Accessories`,r)}}),(0,I.r)(`item`,{href:`https://www.ebay.com/b/Smart-Watch-Accessories/182064/bn_16565905`,renderBody:e=>{e.t(`Smart Watch Accessories`,r)}}),(0,I.r)(`item`,{href:`https://www.ebay.com/b/Smart-Watch-Bands/182068/bn_16565906`,renderBody:e=>{e.t(`Smart Watch Bands`,r)}})},{a11yHeadingText:`Page navigation`}),t,n,`0`)},{t:L,i:!0},z),R.Component=(0,Ce.default)(z,R._)})))()}var we,V,Te,Ee,De,Oe,H,U,W;function ke(){return(ke=t((()=>{we=d(),V=h(),D(),Te=e(f()),Ee=e(s()),De=u(),Oe=e(c()),H=`V$PcWU1`,U=(0,we.t)(H),(0,De.r)(H,()=>U),W={},U._=(0,Ee.default)(function(e,t,n,r,i,a){(0,Te.default)(T,(0,V.i)(()=>{(0,V.r)(`item`,{href:`http://www.ebay.com/`,renderBody:e=>{e.t(`eBay`,r)}}),(0,V.r)(`item`,{href:`https://www.ebay.com/rpp/cell-phone-pda`,renderBody:e=>{e.t(`Cell Phones, Smart Watches & Accessories`,r)}}),(0,V.r)(`item`,{href:`https://www.ebay.com/b/Smart-Watch-Accessories/182064/bn_16565905`,renderBody:e=>{e.t(`Smart Watch Accessories`,r)}}),(0,V.r)(`item`,{renderBody:e=>{e.t(`Smart Watch Bands`,r)}})},{a11yHeadingText:`Page navigation`}),t,n,`0`)},{t:H,i:!0},W),U.Component=(0,Oe.default)(W,U._)})))()}var Ae,G,je,Me,Ne,Pe,K,q,J;function Fe(){return(Fe=t((()=>{Ae=d(),G=h(),D(),je=e(f()),Me=e(s()),Ne=u(),Pe=e(c()),K=`qwk27O3`,q=(0,Ae.t)(K),(0,Ne.r)(K,()=>q),J={},q._=(0,Me.default)(function(e,t,n,r,i,a){(0,je.default)(T,(0,G.i)(()=>{(0,G.r)(`item`,{renderBody:e=>{e.t(`eBay`,r)}}),(0,G.r)(`item`,{renderBody:e=>{e.t(`Cell Phones, Smart Watches & Accessories`,r)}}),(0,G.r)(`item`,{renderBody:e=>{e.t(`Smart Watch Accessories`,r)}}),(0,G.r)(`item`,{renderBody:e=>{e.t(`Smart Watch Bands`,r)}})},{a11yHeadingText:`Page navigation`}),t,n,`0`,[[`select`,`emit`,!1,[`select`]]])},{t:K},J),q.Component=(0,Pe.default)(J,q._)})))()}var Ie;function Le(){return(Le=t((()=>{Ie=`<ebay-breadcrumbs a11yHeadingText="Page navigation">
    <@item href="http://www.ebay.com/">
        eBay
    </@item>
    <@item href="https://www.ebay.com/rpp/cell-phone-pda">
        Cell Phones, Smart Watches & Accessories
    </@item>
    <@item href="https://www.ebay.com/b/Smart-Watch-Accessories/182064/bn_16565905">
        Smart Watch Accessories
    </@item>
    <@item>Smart Watch Bands</@item>
</ebay-breadcrumbs>
`})))()}var Re;function ze(){return(ze=t((()=>{Re=`<ebay-breadcrumbs a11yHeadingText="Page navigation">
    <@item href="http://www.ebay.com/">
        eBay
    </@item>
    <@item href="https://www.ebay.com/rpp/cell-phone-pda">
        Cell Phones, Smart Watches & Accessories
    </@item>
    <@item href="https://www.ebay.com/b/Smart-Watch-Accessories/182064/bn_16565905">
        Smart Watch Accessories
    </@item>
    <@item href="https://www.ebay.com/b/Smart-Watch-Bands/182068/bn_16565906">
        Smart Watch Bands
    </@item>
</ebay-breadcrumbs>
`})))()}var Be;function Ve(){return(Ve=t((()=>{Be=`<ebay-breadcrumbs a11yHeadingText="Page navigation">
    <@item href="http://www.ebay.com/">
        eBay
    </@item>
    <@item href="https://www.ebay.com/rpp/cell-phone-pda">
        Cell Phones, Smart Watches & Accessories
    </@item>
    <@item href="https://www.ebay.com/b/Smart-Watch-Accessories/182064/bn_16565905">
        Smart Watch Accessories
    </@item>
    <@item>Smart Watch Bands</@item>
</ebay-breadcrumbs>
`})))()}var He;function Ue(){return(Ue=t((()=>{He=`class {}
<ebay-breadcrumbs a11yHeadingText="Page navigation" on-select("emit", "select")>
    <@item>eBay</@item>
    <@item>Cell Phones, Smart Watches & Accessories</@item>
    <@item>Smart Watch Accessories</@item>
    <@item>Smart Watch Bands</@item>
</ebay-breadcrumbs>
`})))()}var We;function Ge(){return(Ge=t((()=>{We=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
    <span>
        ebay-breadcrumbs
    </span>
    <span style="font-weight: normal; font-size: medium; margin-bottom: -15px;">
        DS v1.2.0
    </span>
</h1>

**Note**: If you want to have client side or ajax based navigation then you should omit the href attribute on each item. This will cause each item to be <button> instead of an <a>. Alternatively you can manually preventDefault the provided originalEvent on the select event.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/navigation-disclosure-ebay-breadcrumbs)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/navigation-disclosure-ebay-breadcrumbs)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/ebay-breadcrumbs/examples)
`})))()}var Ke,qe,Y,X,Z,Q,$,Je;function Ye(){return(Ye=t((()=>{D(),F(),B(),ke(),Fe(),Le(),ze(),Ve(),Ue(),Ge(),Ke=e=>({input:r(e)}),qe={title:`navigation & disclosure/ebay-breadcrumbs`,component:T,parameters:{docs:{description:{component:We}}},argTypes:{a11yHeadingText:{control:{type:`text`},description:`Localized, heading for breadcrumb which will be clipped`},a11yHeadingTag:{control:{type:`text`},table:{defaultValue:{summary:`h2`}},description:`heading tag for breadcrumb `},a11yMenuButtonText:{control:{type:`text`},description:`Localized, a11y text for the collapsed menu button`},href:{name:`href`,table:{category:`@item attribute tags`},description:`anchor href; omitting the href will switch to a button`},item:{name:`@item`,table:{category:`@attribute tags`}},onSelect:{action:`on-select`,description:`Triggered on breadcrumb selected clicked`,table:{category:`Events`,defaultValue:{summary:`{ originalEvent, el }`}}}}},Y=Ke.bind({}),Y.args={a11yHeadingText:`Current pages`,a11yMenuButtonText:`menu`,item:[{href:`http://www.ebay.com/`,renderBody:`eBay`},{href:`https://www.ebay.com/rpp/cell-phone-pda`,renderBody:`Cell Phones, Smart Watches & Accessories`},{href:`https://www.ebay.com/b/Smart-Watch-Accessories/182064/bn_16565905`,renderBody:`Smart Watch Accessories`},{href:`https://www.ebay.com/b/Smart-Watch-Bands/182068/bn_16565906`,renderBody:`Smart Watch Bands`}]},Y.parameters={docs:{source:{code:n(`ebay-breadcrumbs`,Y.args)}}},X=()=>({component:N}),X.parameters={docs:{source:{code:Ie}}},Z=()=>({component:R}),Z.parameters={docs:{source:{code:Re}}},Q=()=>({component:U}),Q.parameters={docs:{source:{code:Be}}},$=()=>({component:q}),$.parameters={docs:{source:{code:He}}},Je=[`heading`,`lastPageCurrent`,`lastPageParent`,`pageCustomAttribute`,`buttons`],Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: addRenderBodies(args)
})`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => ({
  component: breadcrumb2
})`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => ({
  component: breadcrumb3
})`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => ({
  component: breadcrumb4
})`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => ({
  component: breadcrumb5
})`,...$.parameters?.docs?.source}}}})))()}Ye();export{Je as __namedExportsOrder,$ as buttons,qe as default,Y as heading,X as lastPageCurrent,Z as lastPageParent,Q as pageCustomAttribute};