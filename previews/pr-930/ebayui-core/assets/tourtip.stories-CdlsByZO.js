import{a as L}from"./utils-DWCsNc5l.js";import{v as S,b as E,_ as R,d as D,p as h,e as F,c as N}from"./defineComponent-B-Bg3Ud2.js";/* empty css                    */import{_ as u}from"./dynamic-tag-B3Rndxlm.js";import{a as b}from"./attr-tag-Dvq4QMvY.js";import{_ as V,a as P}from"./index-X0JldVez.js";import{_ as f}from"./render-tag-B9T2mz-j.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./attrs-DH_qbVAN.js";import"./index-D7kkco59.js";import"./index-CL8ZzwFK.js";/* empty css             */import"./dynamic-import-rn7iEbEb.js";import"./index-BO82MG2q.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CJDBRdqY.js";const $=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`;class z extends Marko.Component{handleCollapse({originalEvent:e}){this.state.expanded&&(this.state.expanded=!1,this.emit("collapse",{originalEvent:e}))}handleExpand({originalEvent:e}){this.state.expanded||(this.state.expanded=!0,this.emit("expand",{originalEvent:e}))}onInput(e){(e.open===!1||e.open===!0)&&(this.state.expanded=e.open)}onCreate(){this.state={expanded:!1}}handleLoaded(){this.input.open!==!1&&(this.state.expanded=!0),this.emit("loaded")}}const c="V$YkJMw",s=S.t(c);E.r(c,()=>s);const y=z;s._=R(function(t,e,i,d,m,j){const{a11yCloseText:x,content:q,footer:r,heading:_,host:p,open:H,noFlip:w,notInline:k,noShift:v=!0,pointer:J="bottom",...T}=t;e.be("span",null,"0",d,null,0),f(V,{open:m.expanded,type:"tourtip",noFlip:w,notInline:k,noShift:v,pointer:t.pointer,placement:t.placement,offset:t.offset,overlayId:i.elId("overlay"),renderBody:l=>{if(l.be("span",D(h(T),{class:F(["tourtip",m.expanded&&"tourtip--expanded"])}),"1",d,null,4),p){const{as:o="span",class:I,...B}=p;u(l,o,()=>({class:[I,"tourtip__host"],...h(B)}),C=>{u(C,p.renderBody,null,null,null,null,i,"3")},null,null,i,"2")}f(P,b.i(()=>{r&&b.a("footer",{class:[r.class],renderBody:o=>{r.index&&(o.be("span",{class:"tourtip__index"},"5",d,null,1),o.t(r.index,d),o.ee()),u(o,r,null,null,null,null,i,"6")}})},{type:"tourtip",id:i.elId("overlay"),heading:_,content:q,a11yCloseText:x}),l,i,"4",[["overlay-close","handleCollapse",!1]]),l.ee()}},e,i,"@base",[["loaded","handleLoaded",!1]]),e.ee()},{t:c},y);s.Component=N(y,s._);const A=`<ebay-tourtip a11yCloseText="Dismiss tourtip">
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
`,M=`<ebay-tourtip ...input>
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
`,g=t=>({input:L(t)}),se={title:"notices & tips/ebay-tourtip",component:s,parameters:{docs:{description:{component:$}}},argTypes:{placement:{options:["top","right","bottom","left","top-start","right-start","bottom-start","left-start","top-end","right-end","bottom-end","left-end"],control:{type:"select"},description:"places tourtip position"},offset:{control:{type:"number"},description:"offsets tourtip position"},a11yCloseText:{control:{type:"text"},description:"Localized, a11y text for close button"},host:{name:"@host",description:`The body which will be wrapped as the tourtip's host. Defaults as span. Use "as" attribute on @host to override.`,table:{category:"@attribute tags"}},heading:{name:"@heading",description:"The heading to be displayed in the tourtip",table:{category:"@attribute tags"}},content:{name:"@content",description:"The content to be displayed in the tourtip",table:{category:"@attribute tags"}},footer:{name:"@footer",description:"The footer to be displayed under the tourtip. Takes an index value which can display the left portion of the footer.",table:{category:"@attribute tags"}},noFlip:{control:{type:"boolean"},description:"disables flipping tourtip when its offscreen",table:{defaultValue:{summary:"false"}}},noShift:{control:{type:"boolean"},description:"disables shifting tourtip when its offscreen",table:{defaultValue:{summary:"true"}}},notInline:{control:{type:"boolean"},description:"disables moving tourtip to be inline with content when it is rendered",table:{defaultValue:{summary:"false"}}},open:{control:{type:"boolean"},description:"allows dev to specify whether tourtip is open or closed"},onCollapse:{action:"on-collapse",description:"Triggered on menu collapse",table:{category:"Events",defaultValue:{summary:""}}},onExpand:{action:"on-expand",description:"Triggered on menu expand",table:{category:"Events",defaultValue:{summary:""}}},onLoaded:{action:"on-loaded",description:"Triggered when tourtip finishes loading",table:{category:"Events"}}}},a=g.bind({});a.args={host:{renderBody:`<p>Nisi quis officia cupidatat irure qui aliquip mollit aliqua dolore. Sint ut anim adipisicing
            eiusmod. Dolor irure adipisicing dolor ullamco elit irure laboris consectetur eiusmod et officia
            mollit irure. Reprehenderit nostrud proident anim deserunt aliqua proident dolore reprehenderit.
            Proident fugiat sit nostrud Lorem aliquip enim est sint. Labore esse quis nulla in Lorem aute
            duis exercitation sit in laborum cillum qui. Dolore voluptate commodo adipisicing anim id
            voluptate dolore quis aliquip duis duis.</p>`},heading:{renderBody:"Important",as:"h2"},content:{renderBody:"<p>This new feature was added.</p>"},a11yCloseText:"close",notInline:!0};a.parameters={docs:{source:{code:A}}};const n=g.bind({});n.args={host:{renderBody:`<p>Nisi quis officia cupidatat irure qui aliquip mollit aliqua dolore. Sint ut anim adipisicing
            eiusmod. Dolor irure adipisicing dolor ullamco elit irure laboris consectetur eiusmod et officia
            mollit irure. Reprehenderit nostrud proident anim deserunt aliqua proident dolore reprehenderit.
            Proident fugiat sit nostrud Lorem aliquip enim est sint. Labore esse quis nulla in Lorem aute
            duis exercitation sit in laborum cillum qui. Dolore voluptate commodo adipisicing anim id
            voluptate dolore quis aliquip duis duis.</p>`},heading:{renderBody:"Important"},content:{renderBody:"<p>This new feature was added.</p>"},a11yCloseText:"close",footer:{index:"1 of 3",renderBody:'<button class="fake-link">Back</button><button class="btn btn--primary">Next</button>'},notInline:!0};n.parameters={docs:{source:{code:M}}};const de=["Standard","withFooter"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: addRenderBodies(args)
})`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: addRenderBodies(args)
})`,...n.parameters?.docs?.source}}};export{a as Standard,de as __namedExportsOrder,se as default,n as withFooter};
