import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{n}from"./storybook-code-source-DlBTenms.js";import{n as r,r as i,t as a,u as o}from"./registry-95LfxIAE.js";import{t as s}from"./render-tag-hXgrwudm.js";import{t as ee}from"./of-fallback-rY0Dkoru.js";import{t as c}from"./attr-tag--AgZ8oJt.js";import{t as l}from"./const-element-BfQ4jh6r.js";import{n as te,t as u}from"./ebay-button-ev-RMJXM.js";import{n as d,t as f}from"./ebay-select-IQdrtVyc.js";var p;function m(){return(m=t((()=>{p=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-select
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.1.0
    </span>
</h1>

The \`<ebay-select>\` is used to create a native \`<select>\` form element with default browser styling.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/form-input-ebay-select)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/form-input-ebay-select)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/ebay-select/examples)
`})))()}var h,ne,g,re,_,v,y,b,x,S,C,w;function ie(){return(ie=t((()=>{h=o(),ne=e(l()),g=c(),re=e(ee()),d(),_=e(s()),v=e(r()),y=a(),b=e(i()),x=`hJi$a3K`,S=(0,h.t)(x),C=(0,ne.default)(`label`,{class:`field__label field__label--start`,for:`select`},1).t(`Option`),(0,y.r)(x,()=>S),w={onCreate(){this.state={selected:null}},handleChange({index:e}){this.state.selected=e}},S._=(0,v.default)(function(e,t,n,r,i,a){t.be(`span`,{class:`field`},`0`,r,null,1),t.n(C,r),(0,_.default)(f,(0,g.i)(()=>{let t=0;for(let n of(0,re.default)(e.option)){let e=t++;(0,g.r)(`option`,{value:n.value,text:n.text,selected:e===i.selected})}},{...e,name:`formFieldName`,id:`select`,option:void 0}),t,n,`2`,[[`change`,`handleChange`,!1]]),t.ee()},{t:x},w),S.Component=(0,b.default)(w,S._)})))()}var T,E,D,O,k,A,j,M,N;function P(){return(P=t((()=>{T=o(),E=c(),d(),D=e(s()),te(),O=e(r()),k=a(),A=e(i()),j=`OUIeqWT`,M=(0,T.t)(j),(0,k.r)(j,()=>M),N={},M._=(0,O.default)(function(e,t,n,r,i,a){t.be(`form`,{style:`text-align: center`},`0`,r,null,1),t.be(`div`,null,`1`,r,null,0),(0,D.default)(f,(0,E.i)(()=>{(0,E.r)(`option`,{value:`1`,text:`Option 1`}),(0,E.r)(`option`,{value:`2`,text:`Option 2`}),(0,E.r)(`option`,{value:`3`,text:`Option 3`})},{...e,name:`formFieldName`,option:void 0}),t,n,`2`),t.ee(),t.be(`div`,{style:`padding: 1em`},`3`,r,null,1),(0,D.default)(u,{type:`reset`,renderBody:e=>{e.t(`Reset`,r)}},t,n,`4`),(0,D.default)(u,{type:`submit`,renderBody:e=>{e.t(`Submit`,r)}},t,n,`5`),t.ee(),t.ee()},{t:j,i:!0},N),M.Component=(0,A.default)(N,M._)})))()}var F,I,L,R,z,ae,B,V,H,U,W;function G(){return(G=t((()=>{F=o(),I=e(l()),L=c(),d(),R=e(s()),z=e(r()),ae=a(),B=e(i()),V=`Cgn7rRG`,H=(0,F.t)(V),U=(0,I.default)(`label`,{class:`field__label field__label--start field__label--disabled`,for:`select`},1).t(`Option`),(0,ae.r)(V,()=>H),W={},H._=(0,z.default)(function(e,t,n,r,i,a){t.be(`span`,{class:`field`},`0`,r,null,1),t.n(U,r),(0,R.default)(f,(0,L.i)(()=>{(0,L.r)(`option`,{value:`1`,text:`Option 1`}),(0,L.r)(`option`,{value:`2`,text:`Option 2`}),(0,L.r)(`option`,{value:`3`,text:`Option 3`})},{...e,name:`formFieldName`,id:`select`,disabled:!0,option:void 0}),t,n,`2`),t.ee()},{t:V},W),H.Component=(0,B.default)(W,H._)})))()}var K;function q(){return(q=t((()=>{K=`export interface Input {
    option: Array<{
        value: string;
        text: string;
    }>;
}
class {
    declare state: {
        selected: number | null;
    };
    onCreate() {
        this.state = {
            selected: null,
        };
    }

    handleChange({ index }: { index: number }) {
        this.state.selected = index;
    }
}

<span class="field">
    <label class="field__label field__label--start" for="select">
        Option
    </label>
    <ebay-select
        ...input
        name="formFieldName"
        id="select"
        on-change("handleChange")
    >
        <for|option, i| of=input.option>
            <@option
                value=option.value
                text=option.text
                selected=i === state.selected
            />
        </for>
    </ebay-select>
</span>
`})))()}var J,Y,X,Z,Q,$,oe;function se(){return(se=t((()=>{m(),d(),ie(),P(),G(),q(),J=e=>({input:{...e,renderBody:e.renderBody?t=>{t.html(e.renderBody)}:null}}),Y={title:`form input/ebay-select`,component:f,parameters:{docs:{description:{component:p}}},argTypes:{floatingLabel:{type:`string`,control:{type:`string`},description:`if set, then label will move up and down. Need to have first option to have a nullable value.`},borderless:{type:`boolean`,control:{type:`boolean`},description:`whether button has borders`},fluid:{type:`boolean`,control:{type:`boolean`},description:`If true, then the select takes 100% of the container width`},isLarge:{type:`boolean`,control:{type:`boolean`},description:`to show large version`},text:{control:{type:`text`},description:`text to use in the option`,table:{category:`@option attributes`}},value:{control:{type:`text`},description:"used for the `value` attribute of the native `<option>`",table:{category:`@option attributes`}},selected:{control:{type:`text`},description:`used to determine which option is selected. This should be included in one and only one option.`,table:{category:`@option attributes`}},option:{name:`@option`,table:{category:`@attribute tags`}},onChange:{action:`on-change`,description:`Triggered on option selected`,table:{category:`Events`,defaultValue:{summary:`{ el, index, selected }`}}}}},X=J.bind({}),X.args={floatingLabel:`Option`,option:[{text:`Select an option`,value:``},{text:`option 1`,value:`option 1`},{text:`option 2`,value:`option 2`},{text:`option 3`,value:`option 3`}]},X.parameters={docs:{source:{code:n(`ebay-select`,X.args,{options:`option`})}}},Z=e=>({input:e,component:S}),Z.parameters={docs:{source:{code:K}}},Z.args={option:[{text:`Select an option`,value:``},{text:`option 1`,value:`option 1`},{text:`option 2`,value:`option 2`},{text:`option 3`,value:`option 3`}]},Q=e=>({input:e,component:H}),Q.parameters={docs:{source:{code:H}}},$=e=>({input:e,component:M}),$.parameters={docs:{source:{code:M}}},oe=[`Floating`,`ExternalLabel`,`Disabled`,`InForm`],X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: {
    ...args,
    renderBody: (args.renderBody ? (out: any) => {
      out.html(args.renderBody);
    } : null) as any
  }
})`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: args,
  component: WithLabelTemplate
})`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: args,
  component: DisabledTemplate
})`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: args,
  component: InFormTemplate
})`,...$.parameters?.docs?.source}}}})))()}se();export{Q as Disabled,Z as ExternalLabel,X as Floating,$ as InForm,oe as __namedExportsOrder,Y as default};