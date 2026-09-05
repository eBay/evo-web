import{t as A}from"./storybook-code-source-CCz6reEH.js";import{a as N}from"./utils-DWCsNc5l.js";import{v as y,b as k,_ as b,c as _}from"./defineComponent-B-Bg3Ud2.js";/* empty css             */import{_ as L}from"./index-BDnhrurt.js";import{_ as l}from"./render-tag-B9T2mz-j.js";import{_ as i}from"./const-element-Ea3wmYuQ.js";import{a}from"./attr-tag-Dvq4QMvY.js";import{_ as $}from"./index-Bl6XLQ_q.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-H8W7sR8R.js";import"./index-CL8ZzwFK.js";import"./index-BIJMKU4H.js";import"./index-CFEW7sTq.js";import"./dynamic-tag-B3Rndxlm.js";import"./index-D7kkco59.js";import"./index-o98Za02-.js";/* empty css                    *//* empty css               *//* empty css             */import"./index-BmRbtDLs.js";import"./index-eAGEw84U.js";const P=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-page-notice
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.0.0
    </span>
</h1>

The \`<ebay-page-notice>\` is a tag used to create a custom-designed notice element. The notice can be single or multi-line but each line should be wrapped inside a \`<p>\` tag.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/notices-tips-ebay-page-notice)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/notices-tips-ebay-page-notice)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/ebay-page-notice/examples)
`;class W extends Marko.Component{onCreate(){this.state={dismissed:!1}}onInput(n){this.state={dismissed:n.dismissed||!1}}onDismiss(){this.state.dismissed=!0,this.emit("dismiss")}}const w="o92FtrC",r=y.t(w);k.r(w,()=>r);const D=W;r._=b(function(t,n,s,o,g,T){const{status:e="attention",...x}=t;g.dismissed||l(L,{...x,class:[`page-notice--${e}`,t.class],status:e,role:"region",prefixClass:"page-notice"},n,s,"0",[["dismiss","onDismiss",!1],["cta-click","emit",!1,["cta-click"]]])},{t:w},D);r.Component=_(D,r._);const C="fVZlr7a",u=y.t(C),V=i("div",null,1).t("Notice title"),R=i("p",null,2).e("strong",null,1).t("Error:").t(" Please take another look at the following:"),z=i("p",null,5).e("a",{href:"#"},1).t("Card number").t(" , ").e("a",{href:"#"},1).t("Expiration date").t(" & ").e("a",{href:"#"},1).t("Security code");k.r(C,()=>u);const B={};u._=b(function(t,n,s,o,g,T){l(r,a.i(()=>(a.a("title",{renderBody:e=>{e.n(V,o)}}),a.a("footer",{renderBody:e=>{l($,{renderBody:x=>{x.t("Footer",o)}},e,s,"2")}}),e=>{e.n(R,o),e.n(z,o)}),{...t,title:void 0,footer:void 0}),n,s,"0")},{t:C,i:!0},B);u.Component=_(B,u._);const F=`<ebay-page-notice ...input>
    <@title>
        <div>Notice title</div>
    </@title>
    <@footer>
        <ebay-fake-link>Footer</ebay-fake-link>
    </@footer>
    <p>
        <strong>Error:</strong>
         Please take another look at the following:
    </p>
    <p>
        <a href="#">
            Card number
        </a>
        ,
        <a href="#">
            Expiration date
        </a>
         &amp;
        <a href="#">
            Security code
        </a>
    </p>
</ebay-page-notice>
`,v="QRh4IZl",h=y.t(v),U=i("div",null,1).t("Notice title"),Z=i("p",null,2).e("strong",null,1).t("Error:").t(" Please take another look at the following:"),j=i("p",null,5).e("a",{href:"#"},1).t("Card number").t(" , ").e("a",{href:"#"},1).t("Expiration date").t(" & ").e("a",{href:"#"},1).t("Security code");k.r(v,()=>h);const S={};h._=b(function(t,n,s,o,g,T){l(r,a.i(()=>(a.a("title",{renderBody:e=>{e.n(U,o)}}),a.a("cta",{href:"https://www.ebay.com",renderBody:e=>{e.t("Link here",o)}}),e=>{e.n(Z,o),e.n(j,o)}),{...t,title:void 0,cta:void 0}),n,s,"0",[["dismiss","emit",!1,["dismiss"]]])},{t:v},S);h.Component=_(S,h._);const H=`class {}
<ebay-page-notice ...input on-dismiss("emit", "dismiss")>
    <@title>
        <div>Notice title</div>
    </@title>
    <@cta href="https://www.ebay.com">
        Link here
    </@cta>
    <p>
        <strong>Error:</strong>
         Please take another look at the following:
    </p>
    <p>
        <a href="#">
            Card number
        </a>
        ,
        <a href="#">
            Expiration date
        </a>
         &amp;
        <a href="#">
            Security code
        </a>
    </p>
</ebay-page-notice>
`,E="pH6hsU9",f=y.t(E),M=i("div",null,1).t("Notice title"),O=i("p",null,2).e("strong",null,1).t("Error:").t(" Please take another look at the following:"),Q=i("p",null,5).e("a",{href:"#"},1).t("Card number").t(" , ").e("a",{href:"#"},1).t("Expiration date").t(" & ").e("a",{href:"#"},1).t("Security code");k.r(E,()=>f);const I={};f._=b(function(t,n,s,o,g,T){l(r,a.i(()=>(a.a("title",{renderBody:e=>{e.n(M,o)}}),a.a("cta",{as:$,renderBody:e=>{e.t("Link here",o)}}),e=>{e.n(O,o),e.n(Q,o)}),{...t,title:void 0,cta:void 0}),n,s,"0",[["dismiss","emit",!1,["dismiss"]],["cta-click","emit",!1,["cta-click"]]])},{t:E},I);f.Component=_(I,f._);const q=`class {}
import fakeLink from "<ebay-fake-link>";

<ebay-page-notice
    ...input
    on-dismiss("emit", "dismiss")
    on-cta-click("emit", "cta-click")
>
    <@title>
        <div>Notice title</div>
    </@title>
    <@cta as=fakeLink>
        Link here
    </@cta>
    <p>
        <strong>Error:</strong>
         Please take another look at the following:
    </p>
    <p>
        <a href="#">
            Card number
        </a>
        ,
        <a href="#">
            Expiration date
        </a>
         &amp;
        <a href="#">
            Security code
        </a>
    </p>
</ebay-page-notice>
`,G=t=>({input:N(t)}),ke={title:"notices & tips/ebay-page-notice",component:r,parameters:{docs:{description:{component:P}}},argTypes:{status:{table:{defaultValue:{summary:"attention"}},description:"The icon used and status of the notice",options:["attention","confirmation","information"],type:"select"},icon:{table:{defaultValue:{summary:"default"}},options:["default","none"],type:"select",description:'matches whatever is specified by the "status", or if none hides icon'},a11yIconText:{description:"Localized, adding description for the icon in the notice for a11y users"},a11yDismissText:{description:"Localized, this adds a dismiss icon allowing the notice to be dismissed/hidden and sets the a11y text on the icon"},dismissed:{description:"whether or not the notice is dismissed",type:"boolean"},title:{name:"@title",description:"The title content to be displayed.",table:{category:"@attribute tags"}},footer:{name:"@footer",description:"The footer content to be displayed. Used to show the dismiss button generally",table:{category:"@attribute tags"}},cta:{name:"@cta",description:"This allows the addition of a main CTA link",table:{category:"@attribute tags"}},onDismiss:{action:"on-dismiss",description:"Triggered on notice dismiss",table:{category:"Events",defaultValue:{summary:""}}},"on-cta-click":{action:"on-cta-click",description:"Triggered when CTA is clicked",table:{category:"Events",defaultValue:{summary:""}}}}},c=G.bind({});c.args={a11yText:"attention",a11yIconText:"",a11yDismissText:"",status:null,icon:null,cta:null,dismissed:!1,title:{renderBody:"An error has occurred"},renderBody:`<p><strong>Error:</strong> Please take another look at the following:</p>
    <p>
        <a href='#'>Card number</a>
        ,
        <a href='#'>Expiration date</a>
        &amp;
        <a href='#'>Security code</a>
    </p>`};c.parameters={docs:{source:{code:A("ebay-page-notice",c.args)}}};const m=t=>({input:t,component:u});m.args={a11yText:"attention",a11yIconText:"",a11yDismissText:"",status:null,icon:null};m.parameters={docs:{source:{code:F}}};const d=t=>({input:t,component:h});d.args={a11yText:"information",a11yIconText:"",a11yDismissText:"Dismiss Notice",status:"information",icon:null};d.parameters={docs:{source:{code:H}}};const p=t=>({input:t,component:f});p.args={a11yText:"information",a11yIconText:"",a11yDismissText:"Dismiss Notice",status:"information",icon:null};p.parameters={docs:{source:{code:q}}};const be=["Basic","WithAction","WithDismiss","WithCustomCTADismiss"];c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: addRenderBodies(args)
})`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: args,
  component: withAction
})`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: args,
  component: withDismiss
})`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: args,
  component: withCustomCTADismiss
})`,...p.parameters?.docs?.source}}};export{c as Basic,m as WithAction,p as WithCustomCTADismiss,d as WithDismiss,be as __namedExportsOrder,ke as default};
