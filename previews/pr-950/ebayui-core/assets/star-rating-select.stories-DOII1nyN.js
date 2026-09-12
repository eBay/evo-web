import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{n}from"./storybook-code-source-DlBTenms.js";import{c as r,h as i,l as a,n as o,r as s,s as c,t as l,u}from"./registry-95LfxIAE.js";import{t as d}from"./render-tag-hXgrwudm.js";import{t as f}from"./const-element-BfQ4jh6r.js";import{n as p,t as m}from"./ebay-star-dynamic-icon-BiOw7cul.js";var h;function g(){return(g=t((()=>{h=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-star-rating-select
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.2.0
    </span>
</h1>

## ebay-star-rating-select Usage

\`\`\`marko
<ebay-star-rating-select/>
\`\`\`

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/form-input-ebay-star-rating-select)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/form-input-ebay-star-rating-select)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/ebay-star-rating-select/examples)
`})))()}function _(){return(_=t((()=>{})))()}function v(){return(v=t((()=>{_()})))()}var y;function b(){return(b=t((()=>{y=class extends Marko.Component{onCreate(){this.state={value:0}}onInput(e){let t=parseInt(e.value)||0;t>5&&(t=0),this.state.value=t}handleClick(e,t,n){n.disabled||(this.state.value=e),this.emitEvent(`change`,e,t,n)}emitEvent(e,t,n,r){r.disabled||this.emit(e,{originalEvent:n,value:t})}}})))()}var x,S,C,w,T,E,D,O,k,A;function j(){return(j=t((()=>{x=u(),v(),r(),S=e(i()),p(),C=e(d()),w=e(c()),b(),T=e(o()),E=l(),D=e(s()),O=`Hb`,k=(0,x.t)(O),(0,E.r)(O,()=>k),A=y,k._=(0,T.default)(function(e,t,n,r,i,o){let{class:s,value:c,a11yText:l,a11yStarText:u=[],disabled:d,...f}=e;t.be(`div`,(0,w.default)({role:!!l&&`radiogroup`,"aria-label":l,class:(0,S.default)([`star-rating-select`,s])},a(f)),`0`,r,null,4);for(let e=0;e<=4;e++){let a=1+e*1,o=`[${a}]`;t.be(`span`,{class:`star-rating-select__radio`},`1`+o,r,null,1),t.e(`input`,{"aria-label":u[a-1],class:(0,S.default)([`star-rating-select__control`,a<=i.value&&`star-rating-select__control--filled`]),type:`radio`,name:n.elId(`star-rating`),value:a,disabled:d,checked:i.value===a},`2`+o,r,0,0,{onclick:n.d(`click`,`handleClick`,!1,[a]),onfocus:n.d(`focus`,`emitEvent`,!1,[`focus`,a]),onkeydown:n.d(`keydown`,`emitEvent`,!1,[`keydown`,a])}),t.be(`span`,{class:`star-rating-select__radio-icon`},`3`+o,r,null,1),(0,C.default)(m,{},t,n,`4`+o),t.ee(),t.ee()}t.ee()},{t:O},A),k.Component=(0,D.default)(A,k._)})))()}var M,N,P,F,I,L,R,z,B,V;function H(){return(H=t((()=>{M=u(),N=e(f()),j(),P=e(d()),F=e(o()),I=l(),L=e(s()),R=`KcGGOGa`,z=(0,M.t)(R),B=(0,N.default)(`legend`,null,1).t(`Rate Product`),(0,I.r)(R,()=>z),V={},z._=(0,F.default)(function(e,t,n,r,i,a){t.be(`fieldset`,null,`0`,r,null,0),t.n(B,r),(0,P.default)(k,{value:e.value,a11yStarText:e.a11yStarText},t,n,`2`,[[`change`,`emit`,!1,[`change`]],[`keydown`,`emit`,!1,[`keydown`]],[`focus`,`emit`,!1,[`focus`]]]),t.ee()},{t:R},V),z.Component=(0,L.default)(V,z._)})))()}var U;function W(){return(W=t((()=>{U=`export interface Input {
    value: number;
    a11yStarText: [string, string, string, string, string];
}
class {}

<fieldset>
    <legend>Rate Product</legend>
    <ebay-star-rating-select
        value=input.value
        a11yStarText=input.a11yStarText
        onChange("emit", "change")
        onKeydown("emit", "keydown")
        onFocus("emit", "focus")
    />
</fieldset>
`})))()}var G,K,q,J,Y;function X(){return(X=t((()=>{g(),j(),H(),W(),G=e=>({input:{...e,renderBody:e.renderBody?t=>{t.html(e.renderBody)}:null}}),K={title:`form input/ebay-star-rating-select`,component:k,parameters:{docs:{description:{component:h}}},argTypes:{disabled:{control:{type:`boolean`}},value:{control:{type:`number`},description:`1 - 5, depending on how many stars are selected. If 0 or null defaults to no stars selected`},a11yStarText:{control:`object`,description:`Localized, array object which sets the aria label for each star`},a11yText:{control:{type:`text`},description:`Localized, the aria label for the outer container. Only used on isolated case.`},onChange:{action:`on-change`,description:`Triggered on change`,table:{category:`Events`,defaultValue:{summary:`{ originalEvent, value }`}}},onFocus:{action:`on-focus`,description:`Triggered on focus`,table:{category:`Events`,defaultValue:{summary:`{ originalEvent, value }`}}},onKeydown:{action:`on-keydown`,description:`Triggered on keydown`,table:{category:`Events`,defaultValue:{summary:`{ originalEvent, value }`}}}}},q=G.bind({}),q.args={disabled:!1,a11yStarText:[`1 star`,`2 stars`,`3 stars`,`4 stars`,`5 stars`],a11yText:`Rate product`,value:0},q.parameters={docs:{source:{code:n(`ebay-star-rating-select`,q.args)}}},J=e=>({input:e,component:z}),J.args={disabled:!1,a11yStarText:[`1 star`,`2 stars`,`3 stars`,`4 stars`,`5 stars`],value:0},J.parameters={docs:{source:{code:U}}},Y=[`Isolated`,`Fieldset`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: {
    ...args,
    renderBody: (args.renderBody ? (out: any) => {
      out.html(args.renderBody);
    } : null) as any
  }
})`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: args,
  component: FieldsetTemplate
})`,...J.parameters?.docs?.source}}}})))()}X();export{J as Fieldset,q as Isolated,Y as __namedExportsOrder,K as default};