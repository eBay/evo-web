import{t as S}from"./storybook-code-source-CCz6reEH.js";import{b as $,a as V}from"./utils-DWCsNc5l.js";import{v as k,b as _,_ as T,c as x}from"./defineComponent-B-Bg3Ud2.js";/* empty css             */import{_ as z}from"./index-BDnhrurt.js";import{_ as p}from"./render-tag-B9T2mz-j.js";import{_ as s}from"./const-element-Ea3wmYuQ.js";import{a as i}from"./attr-tag-Dvq4QMvY.js";import{_ as N}from"./index-Bl6XLQ_q.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-H8W7sR8R.js";import"./index-CL8ZzwFK.js";import"./index-BIJMKU4H.js";import"./index-CFEW7sTq.js";import"./dynamic-tag-B3Rndxlm.js";import"./index-D7kkco59.js";import"./index-o98Za02-.js";/* empty css                    *//* empty css               *//* empty css             */import"./index-BmRbtDLs.js";import"./index-eAGEw84U.js";const F=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-section-notice
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.0.0
    </span>
</h1>

The \`<ebay-section-notice>\` is a tag used to create a custom-designed notice element. The notice can be single or multi-line but each line should be wrapped inside a \`<p>\` tag.

This notice should be used at the top of various sections to display information needed.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/notices-tips-ebay-section-notice)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/notices-tips-ebay-section-notice)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/ebay-section-notice/examples)
`;class O extends Marko.Component{onCreate(){this.state={dismissed:!1}}onInput(n){this.state={dismissed:n.dismissed||!1}}onDismiss(){this.state.dismissed=!0,this.emit("dismiss")}}const C="mFuQg10",r=k.t(C);_.r(C,()=>r);const B=O;r._=T(function(o,n,a,e,h,w){const{a11yRoleDescription:t="Notice",status:f,class:W,...P}=o;h.dismissed||p(z,{...P,status:f,role:"region",prefixClass:"section-notice",type:"section",mainRoot:"span",a11yRoleDescription:t,class:[f==="education"&&"section-notice--large-icon",W]},n,a,"0",[["dismiss","onDismiss",!1],["cta-click","emit",!1,["cta-click"]]])},{t:C},B);r.Component=x(B,r._);const v="ilZYT_w",l=k.t(v),Q=s("div",null,1).t("Notice title"),j=s("p",null,2).e("strong",null,1).t("Error:").t(" Please take another look at the following:"),J=s("p",null,5).e("a",{href:"#"},1).t("Card number").t(" , ").e("a",{href:"#"},1).t("Expiration date").t(" & ").e("a",{href:"#"},1).t("Security code");_.r(v,()=>l);const I={};l._=T(function(o,n,a,e,h,w){p(r,i.i(()=>(i.a("title",{renderBody:t=>{t.n(Q,e)}}),i.a("footer",{renderBody:t=>{p(N,{renderBody:f=>{f.t("Footer",e)}},t,a,"2")}}),t=>{t.n(j,e),t.n(J,e)}),{...o,title:void 0,footer:void 0}),n,a,"0")},{t:v,i:!0},I);l.Component=x(I,l._);const M=`import type { Input as SectionNoticeInput } from "<ebay-section-notice>";
export type Input = SectionNoticeInput;

<ebay-section-notice ...input>
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
</ebay-section-notice>
`,D="JfCX7OL",u=k.t(D),U=s("div",null,1).t("Notice title"),X=s("p",null,2).e("strong",null,1).t("Error:").t(" Please take another look at the following:"),Y=s("p",null,5).e("a",{href:"#"},1).t("Card number").t(" , ").e("a",{href:"#"},1).t("Expiration date").t(" & ").e("a",{href:"#"},1).t("Security code");_.r(D,()=>u);const A={};u._=T(function(o,n,a,e,h,w){p(r,i.i(()=>(i.a("title",{renderBody:t=>{t.n(U,e)}}),i.a("cta",{href:"https://www.ebay.com",renderBody:t=>{t.t("Link here",e)}}),t=>{t.n(X,e),t.n(Y,e)}),{...o,title:void 0,cta:void 0}),n,a,"0",[["dismiss","emit",!1,["dismiss"]]])},{t:D},A);u.Component=x(A,u._);const Z=`import type { Input as SectionNoticeInput } from "<ebay-section-notice>";
export type Input = SectionNoticeInput;
class {}

<ebay-section-notice ...input on-dismiss("emit", "dismiss")>
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
</ebay-section-notice>
`,E="$QouamL",y=k.t(E),q=s("div",null,1).t("Notice title"),G=s("p",null,2).e("strong",null,1).t("Error:").t(" Please take another look at the following:"),H=s("p",null,5).e("a",{href:"#"},1).t("Card number").t(" , ").e("a",{href:"#"},1).t("Expiration date").t(" & ").e("a",{href:"#"},1).t("Security code");_.r(E,()=>y);const L={};y._=T(function(o,n,a,e,h,w){p(r,i.i(()=>(i.a("title",{renderBody:t=>{t.n(q,e)}}),i.a("cta",{as:N,renderBody:t=>{t.t("Link here",e)}}),t=>{t.n(G,e),t.n(H,e)}),{...o,title:void 0,cta:void 0}),n,a,"0",[["dismiss","emit",!1,["dismiss"]],["cta-click","emit",!1,["cta-click"]]])},{t:E},L);y.Component=x(L,y._);const K=`class {}
import fakeLink from "<ebay-fake-link>";

<ebay-section-notice
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
</ebay-section-notice>
`,R=o=>({input:V(o)}),xt={title:"notices & tips/ebay-section-notice",component:r,parameters:{docs:{description:{component:F}}},argTypes:{status:{table:{defaultValue:{summary:"attention"}},description:"The icon used and status of the notice",options:["attention","confirmation","information"],type:"select"},icon:{table:{defaultValue:{summary:"default"}},options:["default","none"],type:"select",description:'matches whatever is specified by the "status", or if none hides icon'},a11yText:{description:"Localized, adding description for the notice for a11y users"},a11yRoleDescription:{table:{defaultValue:{summary:"Notice"}},description:"Localized, the roledescription to announce the component type for a11y users."},dismissed:{description:"whether or not the notice is dismissed",type:"boolean"},title:{name:"@title",description:"The title content to be displayed.",table:{category:"@attribute tags"}},footer:{name:"@footer",description:"The footer content to be displayed. Used to show a CTA button generally",table:{category:"@attribute tags"}},cta:{name:"@cta",description:"This allows the addition of a main CTA link",table:{category:"@attribute tags"}},onDismiss:{action:"on-dismiss",description:"Triggered on notice dismiss",table:{category:"Events",defaultValue:{summary:""}}},"on-cta-click":{action:"on-cta-click",description:"Triggered when CTA is clicked",table:{category:"Events",defaultValue:{summary:""}}}}},c=R.bind({});c.args={a11yText:"attention",status:"attention",a11yRoleDescription:"Notice",renderBody:"<p>Section notice info. Things you need to know.</p>"};c.parameters={docs:{source:{code:S("ebay-section-notice",c.args)}}};const m=R.bind({});m.args={a11yText:"attention",status:"attention",a11yRoleDescription:"Notice",title:{renderBody:"Section notice title"},renderBody:"<p>Section notice info. Things you need to know.</p>"};m.parameters={docs:{source:{code:S("ebay-section-notice",m.args)}}};const b=$(l,M,{a11yText:"attention",status:"attention"}),g=$(u,Z,{a11yText:"information",a11yIconText:"",a11yDismissText:"Dismiss Notice",status:"information",icon:null}),d=o=>({input:o,component:y});d.args={a11yText:"information",a11yIconText:"",a11yDismissText:"Dismiss Notice",status:"information",icon:null};d.parameters={docs:{source:{code:K}}};const wt=["Basic","WithTitle","WithAction","WithDismiss","WithCustomCTADismiss"];c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: addRenderBodies(args)
})`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: addRenderBodies(args)
})`,...m.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`buildExtensionTemplate(withAction, withActionCode, {
  a11yText: "attention",
  status: "attention"
})`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`buildExtensionTemplate(withDismiss, withDismissCode, {
  a11yText: "information",
  a11yIconText: "",
  a11yDismissText: "Dismiss Notice",
  status: "information",
  icon: null
})`,...g.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: args,
  component: withCustomCTADismiss
})`,...d.parameters?.docs?.source}}};export{c as Basic,b as WithAction,d as WithCustomCTADismiss,g as WithDismiss,m as WithTitle,wt as __namedExportsOrder,xt as default};
