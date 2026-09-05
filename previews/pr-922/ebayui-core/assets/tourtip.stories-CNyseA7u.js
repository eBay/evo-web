import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./utils-C7m-hPxw.js";import{c as r,h as i,l as a,n as o,r as s,s as c,t as l,u}from"./registry-95LfxIAE.js";import{t as d}from"./render-tag-hXgrwudm.js";import{t as f}from"./dynamic-tag-CCbAf3a9.js";import{t as p}from"./attr-tag--AgZ8oJt.js";import{t as m}from"./icon-button-BNGaPj6P.js";import{i as h,n as g,r as _,t as v}from"./ebay-tooltip-base-B4EnD-sy.js";var y;function b(){return(b=t((()=>{y=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-tourtip
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.0.0
    </span>
</h1>

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/notices-tips-ebay-tourtip)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/notices-tips-ebay-tourtip)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/ebay-tourtip/examples)
`})))()}function x(){return(x=t((()=>{})))()}function S(){return(S=t((()=>{m(),x()})))()}var C;function w(){return(w=t((()=>{C=class extends Marko.Component{handleCollapse({originalEvent:e}){this.state.expanded&&(this.state.expanded=!1,this.emit(`collapse`,{originalEvent:e}))}handleExpand({originalEvent:e}){this.state.expanded||(this.state.expanded=!0,this.emit(`expand`,{originalEvent:e}))}onInput(e){(e.open===!1||e.open===!0)&&(this.state.expanded=e.open)}onCreate(){this.state={expanded:!1}}handleLoaded(){this.input.open!==!1&&(this.state.expanded=!0),this.emit(`loaded`)}}})))()}var T,E,D,O,k,A,j,M,N,P,F,I;function L(){return(L=t((()=>{T=u(),S(),r(),E=e(f()),D=p(),h(),O=e(d()),k=e(i()),A=e(c()),g(),w(),j=e(o()),M=l(),N=e(s()),P=`Qb`,F=(0,T.t)(P),(0,M.r)(P,()=>F),I=C,F._=(0,j.default)(function(e,t,n,r,i,o){let{a11yCloseText:s,content:c,footer:l,heading:u,host:d,open:f,noFlip:p,notInline:m,noShift:h=!0,pointer:g=`bottom`,...y}=e;t.be(`span`,null,`0`,r,null,0),(0,O.default)(v,{open:i.expanded,type:`tourtip`,noFlip:p,notInline:m,noShift:h,pointer:e.pointer,placement:e.placement,offset:e.offset,overlayId:n.elId(`overlay`),renderBody:e=>{if(e.be(`span`,(0,A.default)(a(y),{class:(0,k.default)([`tourtip`,i.expanded&&`tourtip--expanded`])}),`1`,r,null,4),d){let{as:t=`span`,class:r,...i}=d;(0,E.default)(e,t,()=>({class:[r,`tourtip__host`],...a(i)}),e=>{(0,E.default)(e,d.renderBody,null,null,null,null,n,`3`)},null,null,n,`2`)}(0,O.default)(_,(0,D.i)(()=>{l&&(0,D.a)(`footer`,{class:[l.class],renderBody:e=>{l.index&&(e.be(`span`,{class:`tourtip__index`},`5`,r,null,1),e.t(l.index,r),e.ee()),(0,E.default)(e,l,null,null,null,null,n,`6`)}})},{type:`tourtip`,id:n.elId(`overlay`),heading:u,content:c,a11yCloseText:s}),e,n,`4`,[[`overlay-close`,`handleCollapse`,!1]]),e.ee()}},t,n,`@base`,[[`loaded`,`handleLoaded`,!1]]),t.ee()},{t:P},I),F.Component=(0,N.default)(I,F._)})))()}var R;function z(){return(z=t((()=>{R=`<ebay-tourtip a11yCloseText="Dismiss tourtip">
    <@host>
        <p>
            Nisi quis officia cupidatat irure qui aliquip mollit aliqua dolore. Sint ut anim adipisicing eiusmod. Dolor irure adipisicing dolor ullamco elit irure laboris consectetur eiusmod et officia mollit irure. Reprehenderit nostrud proident anim deserunt aliqua proident dolore reprehenderit. Proident fugiat sit nostrud Lorem aliquip enim est sint. Labore esse quis nulla in Lorem aute duis exercitation sit in laborum cillum qui. Dolore voluptate commodo adipisicing anim id voluptate dolore quis aliquip duis duis.
        </p>
    </@host>
    <@heading>Important</@heading>
    <@content>
        <p>This new feature was added.</p>
    </@content>
</ebay-tourtip>
`})))()}var B;function V(){return(V=t((()=>{B=`<ebay-tourtip ...input>
    <@host>
        <p>
            Nisi quis officia cupidatat irure qui aliquip mollit aliqua dolore. Sint ut anim adipisicing eiusmod. Dolor irure adipisicing dolor ullamco elit irure laboris consectetur eiusmod et officia mollit irure. Reprehenderit nostrud proident anim deserunt aliqua proident dolore reprehenderit. Proident fugiat sit nostrud Lorem aliquip enim est sint. Labore esse quis nulla in Lorem aute duis exercitation sit in laborum cillum qui. Dolore voluptate commodo adipisicing anim id voluptate dolore quis aliquip duis duis.
        </p>
    </@host>
    <@heading>Important</@heading>
    <@content>
        <p>This new feature was added.</p>
    </@content>
    <@footer index="1 of 3">
        <ebay-fake-link>Back</ebay-fake-link>
        <ebay-button priority="primary">
            Next
        </ebay-button>
    </@footer>
</ebay-tourtip>
`})))()}var H,U,W,G,K;function q(){return(q=t((()=>{b(),L(),z(),V(),H=e=>({input:n(e)}),U={title:`notices & tips/ebay-tourtip`,component:F,parameters:{docs:{description:{component:y}}},argTypes:{placement:{options:[`top`,`right`,`bottom`,`left`,`top-start`,`right-start`,`bottom-start`,`left-start`,`top-end`,`right-end`,`bottom-end`,`left-end`],control:{type:`select`},description:`places tourtip position`},offset:{control:{type:`number`},description:`offsets tourtip position`},a11yCloseText:{control:{type:`text`},description:`Localized, a11y text for close button`},host:{name:`@host`,description:`The body which will be wrapped as the tourtip's host. Defaults as span. Use "as" attribute on @host to override.`,table:{category:`@attribute tags`}},heading:{name:`@heading`,description:`The heading to be displayed in the tourtip`,table:{category:`@attribute tags`}},content:{name:`@content`,description:`The content to be displayed in the tourtip`,table:{category:`@attribute tags`}},footer:{name:`@footer`,description:`The footer to be displayed under the tourtip. Takes an index value which can display the left portion of the footer.`,table:{category:`@attribute tags`}},noFlip:{control:{type:`boolean`},description:`disables flipping tourtip when its offscreen`,table:{defaultValue:{summary:`false`}}},noShift:{control:{type:`boolean`},description:`disables shifting tourtip when its offscreen`,table:{defaultValue:{summary:`true`}}},notInline:{control:{type:`boolean`},description:`disables moving tourtip to be inline with content when it is rendered`,table:{defaultValue:{summary:`false`}}},open:{control:{type:`boolean`},description:`allows dev to specify whether tourtip is open or closed`},onCollapse:{action:`on-collapse`,description:`Triggered on menu collapse`,table:{category:`Events`,defaultValue:{summary:``}}},onExpand:{action:`on-expand`,description:`Triggered on menu expand`,table:{category:`Events`,defaultValue:{summary:``}}},onLoaded:{action:`on-loaded`,description:`Triggered when tourtip finishes loading`,table:{category:`Events`}}}},W=H.bind({}),W.args={host:{renderBody:`<p>Nisi quis officia cupidatat irure qui aliquip mollit aliqua dolore. Sint ut anim adipisicing
            eiusmod. Dolor irure adipisicing dolor ullamco elit irure laboris consectetur eiusmod et officia
            mollit irure. Reprehenderit nostrud proident anim deserunt aliqua proident dolore reprehenderit.
            Proident fugiat sit nostrud Lorem aliquip enim est sint. Labore esse quis nulla in Lorem aute
            duis exercitation sit in laborum cillum qui. Dolore voluptate commodo adipisicing anim id
            voluptate dolore quis aliquip duis duis.</p>`},heading:{renderBody:`Important`,as:`h2`},content:{renderBody:`<p>This new feature was added.</p>`},a11yCloseText:`close`,notInline:!0},W.parameters={docs:{source:{code:R}}},G=H.bind({}),G.args={host:{renderBody:`<p>Nisi quis officia cupidatat irure qui aliquip mollit aliqua dolore. Sint ut anim adipisicing
            eiusmod. Dolor irure adipisicing dolor ullamco elit irure laboris consectetur eiusmod et officia
            mollit irure. Reprehenderit nostrud proident anim deserunt aliqua proident dolore reprehenderit.
            Proident fugiat sit nostrud Lorem aliquip enim est sint. Labore esse quis nulla in Lorem aute
            duis exercitation sit in laborum cillum qui. Dolore voluptate commodo adipisicing anim id
            voluptate dolore quis aliquip duis duis.</p>`},heading:{renderBody:`Important`},content:{renderBody:`<p>This new feature was added.</p>`},a11yCloseText:`close`,footer:{index:`1 of 3`,renderBody:`<button class="fake-link">Back</button><button class="btn btn--primary">Next</button>`},notInline:!0},G.parameters={docs:{source:{code:B}}},K=[`Standard`,`withFooter`],W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: addRenderBodies(args)
})`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: addRenderBodies(args)
})`,...G.parameters?.docs?.source}}}})))()}q();export{W as Standard,K as __namedExportsOrder,U as default,G as withFooter};