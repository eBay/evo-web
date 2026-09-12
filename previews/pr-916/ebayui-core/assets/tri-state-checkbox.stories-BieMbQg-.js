import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{n}from"./storybook-code-source-DlBTenms.js";import{n as r,r as i,t as a,u as o}from"./registry-95LfxIAE.js";import{t as s}from"./render-tag-hXgrwudm.js";import{t as ee}from"./of-fallback-rY0Dkoru.js";import{t as c}from"./const-element-BfQ4jh6r.js";import{n as te,t as ne}from"./ebay-checkbox-DTK_hF8l.js";import{n as l,t as u}from"./ebay-tri-state-checkbox-D72A_o7r.js";var d;function f(){return(f=t((()=>{d=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
    <span>
        ebay-tri-state-checkbox
    </span>
    <span style="font-weight: normal; font-size: medium; margin-bottom: -15px;">
        DS v1.2.0
    </span>
</h1>

A checkbox that toggles from unchecked, to partially checked, to fully checked states. Uses \`<input/>\` under the hood with custom icons.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/form-input-ebay-tri-state-checkbox)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/form-input-ebay-tri-state-checkbox)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/ebay-tri-state-checkbox/examples)
`})))()}var p,m,h,g,_,v,y,b,x;function S(){return(S=t((()=>{p=o(),l(),m=e(s()),te(),h=e(ee()),g=e(r()),_=a(),v=e(i()),y=`F2QNtfy`,b=(0,p.t)(y),(0,_.r)(y,()=>b),x={onCreate(){this.state={count:2,checked:[!1,!0,!0,!1],cachedChecked:[!1,!0,!0,!1],cacheCount:2}},handleChange(e,{checked:t}){this.state.checked[e]=t,this.state.cachedChecked=[...this.state.checked],this.state.count+=t?1:-1,this.state.cacheCount=this.state.count},handleParentChange({checked:e}){let t;e===`true`?(this.state.checked.fill(!0),t=this.state.checked.length):e===`mixed`?(this.state.checked=[...this.state.cachedChecked],t=this.state.cacheCount):(this.state.checked.fill(!1),t=0),this.state.count=t},get checked(){return this.state.count===0?`false`:this.state.count===this.state.checked.length?`true`:`mixed`},get skipMixed(){let e=this.state.cacheCount;return e===0||e===this.state.checked.length}},b._=(0,g.default)(function(e,t,n,r,i,a){t.be(`div`,{class:`field`},`0`,r,null,1),(0,m.default)(u,{skipMixed:r.skipMixed,checked:r.checked,id:n.elId(`checkbox-all`)},t,n,`1`,[[`change`,`handleParentChange`,!1]]),t.be(`label`,{class:`field__label field__label--end`,for:n.elId(`checkbox-all`)},`2`,r,null,0),t.t(`Select all`,r),t.ee(),t.ee(),t.be(`div`,{class:`container`,style:`margin-left: 10px`},`3`,r,null,1);{let e=0;for(let a of(0,h.default)(i.checked)){let i=e++,o=`[${i}]`;t.be(`div`,{class:`field`},`4`+o,r,null,1),(0,m.default)(ne,{id:n.elId(`checkbox-${i}`),checked:a},t,n,`5`+o,[[`change`,`handleChange`,!1,[i]]]),t.be(`label`,{class:`field__label field__label--end`,for:n.elId(`checkbox-${i}`)},`6`+o,r,null,0),t.t(`Option `,r),t.t(i,r),t.ee(),t.ee()}}t.ee()},{t:y},x),b.Component=(0,v.default)(x,b._)})))()}var re,C,w,T,E,D,O,k,A,j;function M(){return(M=t((()=>{re=o(),l(),C=e(s()),w=e(c()),T=e(r()),E=a(),D=e(i()),O=`XnHpqtt`,k=(0,re.t)(O),A=(0,w.default)(`label`,{class:`field__label field__label--end`,for:`checkbox`},1).t(`Option`),(0,E.r)(O,()=>k),j={},k._=(0,T.default)(function(e,t,n,r,i,a){t.be(`span`,{class:`field`},`0`,r,null,1),(0,C.default)(u,{...e,class:`field__control`,id:`checkbox`},t,n,`1`,[[`change`,`emit`,!1,[`change`]],[`focus`,`emit`,!1,[`focus`]],[`keydown`,`emit`,!1,[`keydown`]]]),t.n(A,r),t.ee()},{t:O},j),k.Component=(0,D.default)(j,k._)})))()}var N,P,F,I,L,R,z,B,V,H;function U(){return(U=t((()=>{N=o(),l(),P=e(s()),F=e(c()),I=e(r()),L=a(),R=e(i()),z=`VBBUs07`,B=(0,N.t)(z),V=(0,F.default)(`label`,{class:`field__label field__label--end field__label--disabled`,for:`checkbox`},1).t(`Option`),(0,L.r)(z,()=>B),H={},B._=(0,I.default)(function(e,t,n,r,i,a){t.be(`span`,{class:`field`},`0`,r,null,1),(0,P.default)(u,{...e,disabled:!0,class:`field__control`,id:`checkbox`},t,n,`1`,[[`change`,`emit`,!1,[`change`]],[`focus`,`emit`,!1,[`focus`]],[`keydown`,`emit`,!1,[`keydown`]]]),t.n(V,r),t.ee()},{t:z},H),B.Component=(0,R.default)(H,B._)})))()}var W;function G(){return(G=t((()=>{W=`import type { Input as TriStateCheckboxInput } from "<ebay-tri-state-checkbox>";
export type Input = TriStateCheckboxInput;
class {}

<span class="field">
    <ebay-tri-state-checkbox
        ...input
        class="field__control"
        id="checkbox"
        on-change("emit", "change")
        on-focus("emit", "focus")
        on-keydown("emit", "keydown")
    />
    <label class="field__label field__label--end" for="checkbox">
        Option
    </label>
</span>
`})))()}var K;function q(){return(q=t((()=>{K=`import type { Input as TriStateCheckboxInput } from "<ebay-tri-state-checkbox>";
export type Input = TriStateCheckboxInput;
class {}

<span class="field">
    <ebay-tri-state-checkbox
        ...input
        disabled
        class="field__control"
        id="checkbox"
        on-change("emit", "change")
        on-focus("emit", "focus")
        on-keydown("emit", "keydown")
    />
    <label
        class="field__label field__label--end field__label--disabled"
        for="checkbox"
    >
        Option
    </label>
</span>
`})))()}var J,Y,X,Z,Q,$,ie;function ae(){return(ae=t((()=>{f(),l(),S(),M(),U(),G(),q(),J=e=>({input:{...e,renderBody:e.renderBody?t=>{t.html(e.renderBody)}:null}}),Y={title:`form input/ebay-tri-state-checkbox`,component:u,parameters:{docs:{description:{component:d}}},argTypes:{checked:{options:[`false`,`mixed`,`true`],type:{category:`Options`},description:`Either "true", "false" or "mixed". Defaults to "false". Changes the checkbox state to the given one depdending on the checked state.`,table:{defaultValue:{summary:`false`}}},skipMixed:{type:`boolean`,control:{type:`boolean`},description:`If set, then will skip the mixed toggle when clicking on checkbox. Used if in some cases you want to toggle between all items selected or none.`},size:{options:[`regular`,`large`],type:{category:`Options`},description:`Either "large" or "regular". Sets the checkbox icon. Default is regular. For mweb this should be set to large. (Note: The dimensions of the checkbox will not change, but only the icon)`,table:{defaultValue:{summary:`regular`}}},onChange:{action:`on-change`,description:`Triggered on change`,table:{category:`Events`,defaultValue:{summary:`{ originalEvent, value, checked }`}}},onFocus:{action:`on-focus`,description:`Triggered on focus`,table:{category:`Events`,defaultValue:{summary:`{ originalEvent, value }`}}}}},X=e=>({input:e,component:k}),X.args={},X.parameters={docs:{source:{code:W}}},Z=e=>({input:e,component:B}),Z.args={},Z.parameters={docs:{source:{code:K}}},Q=J.bind({}),Q.component=b,$=J.bind({}),$.args={},$.parameters={docs:{source:{code:n(`ebay-tri-state-checkbox`,$.args)}}},ie=[`WithLabel`,`Disabled`,`mixedImplementation`,`Isolated`],X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: args,
  component: WithLabelTemplate
})`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: args,
  component: DisabledTemplate
})`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: {
    ...args,
    renderBody: (args.renderBody ? (out: any) => {
      out.html(args.renderBody);
    } : null) as any
  }
})`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: {
    ...args,
    renderBody: (args.renderBody ? (out: any) => {
      out.html(args.renderBody);
    } : null) as any
  }
})`,...$.parameters?.docs?.source}}}})))()}ae();export{Z as Disabled,$ as Isolated,X as WithLabel,ie as __namedExportsOrder,Y as default,Q as mixedImplementation};