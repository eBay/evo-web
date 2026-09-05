import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{n}from"./storybook-code-source-DlBTenms.js";import{t as r}from"./utils-C7m-hPxw.js";import{c as i,h as a,l as o,n as s,r as c,s as l,t as u,u as d}from"./registry-95LfxIAE.js";import{t as f}from"./dynamic-tag-CCbAf3a9.js";var p;function m(){return(m=t((()=>{p=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-filter
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.1.0
    </span>
</h1>

A button with a label which toggles between unselected and selected when clicked (similarly to a checkbox).

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/building-blocks-ebay-filter)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/building-blocks-ebay-filter)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/ebay-filter/examples)
`})))()}function h(){return(h=t((()=>{})))()}function g(){return(g=t((()=>{h()})))()}var _;function v(){return(v=t((()=>{_=class extends Marko.Component{handleButtonClick(e){if(!this.input.disabled){let t=!this.state.selected;this.state.selected=t,this.emit(`click`,{selected:t,originalEvent:e})}}onInput(e){this.state={selected:e.selected||!1}}}})))()}var y,b,x,S,C,w,T,E,D,O;function k(){return(k=t((()=>{y=d(),g(),i(),b=e(f()),x=e(a()),S=e(l()),v(),C=e(s()),w=u(),T=e(c()),E=`Q`,D=(0,y.t)(E),(0,w.r)(E,()=>D),O=_,D._=(0,C.default)(function(e,t,n,r,i,a){let{a11ySelectedText:s,class:c,href:l,renderBody:u,selected:d,useAriaPressed:f,...p}=e;var m=l?`filter-link`:`filter-button`;let h=l?`a`:`button`;t.be(h,(0,S.default)(o(p),{class:(0,x.default)([m,`${m}--${i.selected?`selected`:`unselected`}`,c]),type:!l&&`button`,href:l,"aria-pressed":f!==!1&&!l&&i.selected&&`true`}),`0`,r,null,4,{onclick:n.d(`click`,`handleButtonClick`,!1)}),t.be(`span`,{class:`${m}__cell`},`1`,r,null,1),t.be(`span`,null,`2`,r,null,0),(0,b.default)(t,u,null,null,null,null,n,`3`),t.ee(),l&&i.selected&&(t.be(`span`,{class:`clipped`,id:n.elId(`active-text`)},`@active-text`,r,null,1),t.t(`- `,r),t.t(s||`Selected`,r),t.ee()),t.ee(),t.ee()},{t:E},O),D.Component=(0,T.default)(O,D._)})))()}var A,j,M,N;function P(){return(P=t((()=>{m(),k(),A=e=>({input:r(e)}),j={title:`building blocks/ebay-filter`,component:D,parameters:{docs:{description:{component:p}}},argTypes:{href:{control:{type:`text`},description:`for link that looks like a button`},disabled:{control:{type:`boolean`}},selected:{control:{type:`boolean`}},useAriaPressed:{control:{type:`boolean`},description:"defaults to `true`"},a11ySelectedText:{control:{type:`text`},description:'Localized, defaults to `"Selected"`, but should be changed based on L10N or I18N',table:{category:`when using fake filters`}},onClick:{action:`on-click`,description:`Triggered on item clicked`,table:{category:`Events`,defaultValue:{summary:`{ el, checked, originalEvent }`}}}}},M=A.bind({}),M.args={renderBody:`text`,useAriaPressed:!0},M.parameters={docs:{source:{code:n(`ebay-filter`,M.args)}}},N=[`Standard`],M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: addRenderBodies(args)
})`,...M.parameters?.docs?.source}}}})))()}P();export{M as Standard,N as __namedExportsOrder,j as default};