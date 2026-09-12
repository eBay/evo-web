import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{n}from"./storybook-code-source-DlBTenms.js";import{n as r,r as i,t as a,u as o}from"./registry-95LfxIAE.js";import{t as s}from"./render-tag-hXgrwudm.js";import{t as ee}from"./of-fallback-rY0Dkoru.js";import{t as c}from"./const-element-BfQ4jh6r.js";import{n as l,t as u}from"./ebay-checkbox-DTK_hF8l.js";var te;function ne(){return(ne=t((()=>{te=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
    <span>
        ebay-checkbox
    </span>
    <span style="font-weight: normal; font-size: medium; margin-bottom: -15px;">
        DS v1.2.0
    </span>
</h1>

Displays an accessible checkbox component. Uses \`<input/>\` under the hood but displays a custom SVG icon.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/form-input-ebay-checkbox)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/form-input-ebay-checkbox)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/ebay-checkbox/examples)
`})))()}var d,f,p,m,h,g,_,v,y,re,b;function x(){return(x=t((()=>{d=o(),f=e(c()),l(),p=e(s()),m=e(ee()),h=e(r()),g=a(),_=e(i()),v=`fCIfY7U`,y=(0,d.t)(v),re=(0,f.default)(`legend`,null,1).t(`Choose an Option`),(0,g.r)(v,()=>y),b={},y._=(0,h.default)(function(e,t,n,r,i,a){t.be(`fieldset`,null,`0`,r,null,0);{t.n(re,r);let i=0;for(let a of(0,m.default)([1,2,3])){let o=`[${i++}]`;t.be(`span`,{class:`field`},`2`+o,r,null,1),(0,p.default)(u,{...e,class:`field__control`,id:`group-checkbox-${a}`,value:a,name:`checkbox-group`},t,n,`3`+o,[[`change`,`emit`,!1,[`change`]],[`focus`,`emit`,!1,[`focus`]],[`keydown`,`emit`,!1,[`keydown`]]]),t.be(`label`,{class:`field__label field__label--end`,for:`group-checkbox-${a}`},`4`+o,r,null,0),t.t(`Option `,r),t.t(a,r),t.ee(),t.ee()}}t.ee()},{t:v},b),y.Component=(0,_.default)(b,y._)})))()}var S,C,w,T,E,D,O,k,A,j;function M(){return(M=t((()=>{S=o(),l(),C=e(s()),w=e(c()),T=e(r()),E=a(),D=e(i()),O=`hgumnlL`,k=(0,S.t)(O),A=(0,w.default)(`label`,{class:`field__label field__label--end`,for:`checkbox`},1).t(`Option`),(0,E.r)(O,()=>k),j={},k._=(0,T.default)(function(e,t,n,r,i,a){t.be(`span`,{class:`field`},`0`,r,null,1),(0,C.default)(u,{...e,class:`field__control`,id:`checkbox`},t,n,`1`,[[`change`,`emit`,!1,[`change`]],[`focus`,`emit`,!1,[`focus`]],[`keydown`,`emit`,!1,[`keydown`]]]),t.n(A,r),t.ee()},{t:O},j),k.Component=(0,D.default)(j,k._)})))()}var N,P,F,I,ie,L,R,z,B,V;function H(){return(H=t((()=>{N=o(),l(),P=e(s()),F=e(c()),I=e(r()),ie=a(),L=e(i()),R=`f8Y49ZC`,z=(0,N.t)(R),B=(0,F.default)(`label`,{class:`field__label field__label--end field__label--disabled`,for:`checkbox`},1).t(`Option`),(0,ie.r)(R,()=>z),V={},z._=(0,I.default)(function(e,t,n,r,i,a){t.be(`span`,{class:`field`},`0`,r,null,1),(0,P.default)(u,{...e,disabled:!0,class:`field__control`,id:`checkbox`},t,n,`1`,[[`change`,`emit`,!1,[`change`]],[`focus`,`emit`,!1,[`focus`]],[`keydown`,`emit`,!1,[`keydown`]]]),t.n(B,r),t.ee()},{t:R},V),z.Component=(0,L.default)(V,z._)})))()}var U;function W(){return(W=t((()=>{U=`class {}

<fieldset>
    <legend>Choose an Option</legend>
    <for|option_num| of=[1, 2, 3]>
        <span class="field">
            <ebay-checkbox
                ...input
                class="field__control"
                id=\`group-checkbox-\${option_num}\`
                value=option_num
                on-change("emit", "change")
                on-focus("emit", "focus")
                on-keydown("emit", "keydown")
                name="checkbox-group"
            />
            <label
                class="field__label field__label--end"
                for=\`group-checkbox-\${option_num}\`
            >
                Option \${option_num}
            </label>
        </span>
    </for>
</fieldset>
`})))()}var G;function K(){return(K=t((()=>{G=`// TODO: import field from skin

class {}

<span class="field">
    <ebay-checkbox
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
`})))()}var q;function J(){return(J=t((()=>{q=`// TODO: import field from skin

class {}

<span class="field">
    <ebay-checkbox
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
`})))()}var Y,ae,X,Z,Q,$,oe;function se(){return(se=t((()=>{ne(),l(),x(),M(),H(),W(),K(),J(),Y=e=>({input:e}),ae={title:`form input/ebay-checkbox`,component:u,parameters:{docs:{description:{component:te}}},argTypes:{checked:{description:`if checked or not`,table:{defaultValue:{summary:`false`}},type:`boolean`},size:{options:[`regular`,`large`],description:`Sets the checkbox icon. Default is regular. For mweb this should be set to large. (Note: The dimensions of the checkbox will not change, but only the icon)`,table:{defaultValue:{summary:`regular`}},type:{category:`Options`}},"icon-style":{options:[`rounded`,`square`],description:`Will change the icon to be rounded or square (square being the legacy and deprecated version)`,table:{defaultValue:{summary:`rounded`}},type:{category:`Options`}},onChange:{action:`on-change`,description:`Triggered on change`,table:{category:`Events`,defaultValue:{summary:`{ originalEvent, value, checked }`}}},onFocus:{action:`on-focus`,description:`Triggered on focus`,table:{category:`Events`,defaultValue:{summary:`{ originalEvent, value }`}}},onKeydown:{action:`on-keydown`,description:`Triggered on keydown`,table:{category:`Events`,defaultValue:{summary:`{ originalEvent, value }`}}}}},X=e=>({input:e,component:k}),X.args={checked:!1},X.parameters={docs:{source:{code:G}}},Z=e=>({input:e,component:z}),Z.args={checked:!1},Z.parameters={docs:{source:{code:q}}},Q=e=>({input:e,component:y}),Q.args={},Q.parameters={docs:{source:{code:U}}},$=Y.bind({}),$.args={checked:!1},$.parameters={docs:{source:{code:n(`ebay-checkbox`,$.args)}}},oe=[`WithLabel`,`Disabled`,`Group`,`Isolated`],X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: args,
  component: WithLabelTemplate
})`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: args,
  component: DisabledTemplate
})`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: args,
  component: GroupTemplate
})`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: args
})`,...$.parameters?.docs?.source}}}})))()}se();export{Z as Disabled,Q as Group,$ as Isolated,X as WithLabel,oe as __namedExportsOrder,ae as default};