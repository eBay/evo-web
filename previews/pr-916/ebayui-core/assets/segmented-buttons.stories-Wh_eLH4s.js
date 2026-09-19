import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{n}from"./storybook-code-source-DlBTenms.js";import{n as r,t as i}from"./utils-C7m-hPxw.js";import{c as a,h as o,l as s,n as c,r as l,s as u,t as d,u as f}from"./registry-95LfxIAE.js";import{t as ee}from"./render-tag-hXgrwudm.js";import{t as p}from"./dynamic-tag-CCbAf3a9.js";import{t as m}from"./of-fallback-rY0Dkoru.js";import{t as te}from"./attr-tag--AgZ8oJt.js";import{i as ne,n as h,r as g,t as re}from"./ebay-mobile-24-icon-C_1GzIG9.js";function _(){return(_=t((()=>{})))()}function v(){return(v=t((()=>{_()})))()}var y;function b(){return(b=t((()=>{y=class extends Marko.Component{onCreate(){this.state={selectedIndex:0}}onInput(e){let t=(e.button||[]).findIndex(e=>e.selected);t===-1&&(t=0),this.state.selectedIndex=t}onButtonClick(e,t){if(e!==this.state.selectedIndex){this.state.selectedIndex=e;let n=this.input.button&&[...this.input.button][e].value||void 0;this.emit(`change`,{index:e,value:n,originalEvent:t})}}}})))()}var x,S,C,w,T,E,D,O,k,A,j,M;function N(){return(N=t((()=>{x=f(),v(),a(),S=e(p()),C=e(o()),w=e(u()),T=e(m()),b(),E=e(c()),D=d(),O=e(l()),k=`yb`,A=(0,x.t)(k),j=[`large`],(0,D.r)(k,()=>A),M=y,A._=(0,E.default)(function(e,t,n,r,i,a){let{size:o,class:c,button:l=[],...u}=e;var d=o&&j.includes(o)?o:null;t.be(`div`,(0,w.default)({class:(0,C.default)([`segmented-buttons`,d&&`segmented-buttons--${d}`,e.class])},s(u)),`0`,r,null,4),t.be(`ul`,null,`1`,r,null,0);{let a=0;for(let o of(0,T.default)(e.button||[])){let e=a++,c=`[${e}]`,{class:l,icon:u,renderBody:d,...f}=o;t.be(`li`,null,`2`+c,r,null,0),t.be(`button`,(0,w.default)({class:(0,C.default)([`segmented-buttons__button`,l]),"aria-current":i.selectedIndex===e&&`true`},s(f)),`3`+c,r,null,4,{onclick:n.d(`click`,`onButtonClick`,!1,[e])}),u?(t.be(`span`,{class:`segmented-buttons__button-cell`},`4`+c,r,null,1),(0,S.default)(t,u,null,null,null,null,n,`5`+c),t.be(`span`,null,`6`+c,r,null,0),(0,S.default)(t,o,null,null,null,null,n,`7`+c),t.ee(),t.ee()):(0,S.default)(t,d,null,null,null,null,n,`8`+c),t.ee(),t.ee()}}t.ee(),t.ee()},{t:k},M),A.Component=(0,O.default)(M,A._)})))()}var P;function F(){return(F=t((()=>{P=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
    <span>
        ebay-segmented-buttons
    </span>
    <span style="font-weight: normal; font-size: medium; margin-bottom: -15px;">
        DS v1.1.0
    </span>
</h1>

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/buttons-ebay-segmented-buttons)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/buttons-ebay-segmented-buttons)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/ebay-segmented-buttons/examples)
`})))()}var I,L,R,z,B,V,H,U,W;function G(){return(G=t((()=>{I=f(),ne(),L=e(ee()),R=te(),h(),N(),z=e(c()),B=d(),V=e(l()),H=`DLgqvqC`,U=(0,I.t)(H),(0,B.r)(H,()=>U),W={},U._=(0,z.default)(function(e,t,n,r,i,a){(0,L.default)(A,(0,R.i)(()=>{(0,R.r)(`button`,(0,R.i)(()=>((0,R.a)(`icon`,{renderBody:e=>{(0,L.default)(g,{},e,n,`1`)}}),e=>{e.t(`Desktop`,r)}))),(0,R.r)(`button`,(0,R.i)(()=>((0,R.a)(`icon`,{renderBody:e=>{(0,L.default)(re,{},e,n,`2`)}}),e=>{e.t(`Mobile`,r)})))}),t,n,`0`,[[`change`,`emit`,!1,[`change`]]])},{t:H,s:!0},W),U.Component=(0,V.default)(W,U._)})))()}var K;function q(){return(q=t((()=>{K=`<ebay-segmented-buttons on-change("emit", "change")>
    <@button>
        <@icon>
            <ebay-full-view-24-icon/>
        </@icon>
        Desktop
    </@button>
    <@button>
        <@icon>
            <ebay-mobile-24-icon/>
        </@icon>
        Mobile
    </@button>
</ebay-segmented-buttons>
`})))()}var J,Y,X,Z,Q;function $(){return($=t((()=>{N(),F(),G(),q(),J=e=>({input:i(e)}),Y={title:`buttons/ebay-segmented-buttons`,component:A,parameters:{docs:{description:{component:P}}},argTypes:{button:{description:`Each button in the segmented button`,name:`@button`,table:{category:`@Attribute Tags`}},selected:{description:`If true, this will be the selected button`,table:{category:`@button attribute`}},size:{options:[`large`,`regular`],description:``,table:{defaultValue:{summary:`none`}},type:{category:`Options`}},icon:{description:`The icon to show before the text`,name:`@icon`,table:{category:`@button attribute`}},onChange:{action:`on-change`,description:`Triggered on change`,table:{category:`Events`,defaultValue:{summary:`{ originalEvent, index, value }`}}},spread:{control:{type:`object`},description:`Additional attributes being passed to component`,table:{category:`Other`}}}},X=J.bind({}),X.args={button:[{renderBody:`Q1`,value:`quarter1`},{renderBody:`Q2`,value:`quarter2`},{renderBody:`Q3`,value:`quarter3`},{renderBody:`Q4`,value:`quarter4`}]},X.parameters={docs:{source:{code:n(`ebay-segmented-buttons`,X.args,{button:`button`})}}},Z=r(U,K),Q=[`Default`,`WithIcons`],X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: addRenderBodies(args)
})`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`buildExtensionTemplate(WithIconsTemplate, WithIconsTemplateCode)`,...Z.parameters?.docs?.source}}}})))()}$();export{X as Default,Z as WithIcons,Q as __namedExportsOrder,Y as default};