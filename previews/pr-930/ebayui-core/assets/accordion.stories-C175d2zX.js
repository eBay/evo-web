import{b as v}from"./utils-DWCsNc5l.js";import{v as d,b as m,_ as c,d as G,p as N,e as P,c as p}from"./defineComponent-B-Bg3Ud2.js";import{_ as Q}from"./dynamic-tag-B3Rndxlm.js";import{_ as X}from"./index-BeDN17_6.js";import{_ as l}from"./render-tag-B9T2mz-j.js";import{_ as Z}from"./of-fallback-DrWEmKV1.js";import{a as i}from"./attr-tag-Dvq4QMvY.js";import{_ as n}from"./const-element-Ea3wmYuQ.js";import{_ as ee}from"./index-H8W7sR8R.js";import{_ as ie,a as te}from"./index-C1amtpIr.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D4_UUNUd.js";import"./index-CL8ZzwFK.js";/* empty css             */class ae extends Marko.Component{onCreate(){this.state={index:-1,interacted:!1}}onInput(a){this.state={index:-1,interacted:this.state.interacted}}handleToggle(a,o){const{autoCollapse:t}=this.input;this.state.interacted=!0,t&&o.open&&(this.state.index=a),this.emit("toggle",{originalEvent:o.originalEvent,open:o.originalEvent.target.open,index:a})}}const L="YqHK6ea",u=d.t(L);m.r(L,()=>u);const S=ae;u._=c(function(r,a,o,t,s,g){const{class:e,size:W,details:K=[],autoCollapse:Y,a11yRoleDescription:j,...J}=r;a.be("ul",G(N(J),{class:P(["accordion",W==="large"&&"accordion--large",e,s.interacted&&"accordion--animated"]),"aria-roledescription":j??"accordion"}),"@accordion-root",t,null,4);{let M=0;for(const $ of Z(K||[])){let D=M++;const T=`[${D}]`;a.be("li",null,"0"+T,t,null,0),l(X,{...$,open:$.open||Y&&D===s.index,renderBody:F=>{Q(F,$.renderBody,null,null,null,null,o,"2"+T)}},a,o,"1"+T,[["toggle","handleToggle",!1,[D]],["click","emit",!1,["click"]]]),a.ee()}}a.ee()},{t:L},S);u.Component=p(S,u._);const oe=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
    <span>
        ebay-accordion
    </span>
    <span style="font-weight: normal; font-size: medium; margin-bottom: -15px;">
        DS v1.1
    </span>
</h1>

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/navigation-disclosure-ebay-accordion)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/navigation-disclosure-ebay-accordion)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/ebay-accordion/examples)
`,C="wUIJzI4",b=d.t(C),ne=n("p",null,1).t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),re=n("p",null,1).t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),ue=n("p",null,1).t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");m.r(C,()=>b);const V={};b._=c(function(r,a,o,t,s,g){l(u,i.i(()=>{i.r("details",i.i(()=>(i.a("summary",{renderBody:e=>{e.t("Item 1",t)}}),e=>{e.n(ne,t)}))),i.r("details",i.i(()=>(i.a("summary",{renderBody:e=>{e.t("Item 2",t)}}),e=>{e.n(re,t)}))),i.r("details",i.i(()=>(i.a("summary",{renderBody:e=>{e.t("Item 3",t)}}),e=>{e.n(ue,t)})))},{...r,details:void 0}),a,o,"0")},{t:C,i:!0},V);b.Component=p(V,b._);const le=`<ebay-accordion ...input>
    <@details>
        <@summary>Item 1</@summary>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </@details>
    <@details>
        <@summary>Item 2</@summary>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </@details>
    <@details>
        <@summary>Item 3</@summary>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </@details>
</ebay-accordion>
`,U="wzb67m_",q=d.t(U),se=n("p",null,1).t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),de=n("p",null,1).t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),me=n("p",null,1).t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");m.r(U,()=>q);const A={};q._=c(function(r,a,o,t,s,g){l(u,i.i(()=>{i.r("details",i.i(()=>(i.a("summary",{renderBody:e=>{e.t("Item 1",t)}}),e=>{e.n(se,t)}),{open:!0})),i.r("details",i.i(()=>(i.a("summary",{renderBody:e=>{e.t("Item 2",t)}}),e=>{e.n(de,t)}))),i.r("details",i.i(()=>(i.a("summary",{renderBody:e=>{e.t("Item 3",t)}}),e=>{e.n(me,t)})))},{...r,details:void 0}),a,o,"0")},{t:U,i:!0},A);q.Component=p(A,q._);const ce=`<ebay-accordion ...input>
    <@details open>
        <@summary>Item 1</@summary>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </@details>
    <@details>
        <@summary>Item 2</@summary>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </@details>
    <@details>
        <@summary>Item 3</@summary>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </@details>
</ebay-accordion>
`,B="vDxTy_I",f=d.t(B),pe=n("p",null,1).t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),ge=n("p",null,1).t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),be=n("p",null,1).t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");m.r(B,()=>f);const R={};f._=c(function(r,a,o,t,s,g){l(u,i.i(()=>{i.r("details",i.i(()=>(i.a("summary",{renderBody:e=>{e.t("Item 1",t)}}),e=>{e.n(pe,t)}))),i.r("details",i.i(()=>(i.a("summary",{renderBody:e=>{e.t("Item 2",t)}}),e=>{e.n(ge,t)}))),i.r("details",i.i(()=>(i.a("summary",{renderBody:e=>{e.t("Item 3",t)}}),e=>{e.n(be,t)})))},{size:"large",...r,details:void 0}),a,o,"0")},{t:B,i:!0},R);f.Component=p(R,f._);const qe=`<ebay-accordion size="large" ...input>
    <@details>
        <@summary>Item 1</@summary>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </@details>
    <@details>
        <@summary>Item 2</@summary>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </@details>
    <@details>
        <@summary>Item 3</@summary>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </@details>
</ebay-accordion>
`,w="EE_zhhB",y=d.t(w),fe=n("p",null,1).t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),ye=n("p",null,1).t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),xe=n("p",null,1).t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");m.r(w,()=>y);const H={};y._=c(function(r,a,o,t,s,g){l(u,i.i(()=>{i.r("details",i.i(()=>(i.a("summary",{renderBody:e=>{e.t("Item 1",t)}}),e=>{e.n(fe,t)}))),i.r("details",i.i(()=>(i.a("summary",{renderBody:e=>{e.t("Item 2",t)}}),e=>{e.n(ye,t)}))),i.r("details",i.i(()=>(i.a("summary",{renderBody:e=>{e.t("Item 3",t)}}),e=>{e.n(xe,t)})))},{autoCollapse:!0,...r,details:void 0}),a,o,"0")},{t:w,i:!0},H);y.Component=p(H,y._);const ve=`<ebay-accordion auto-collapse ...input>
    <@details>
        <@summary>Item 1</@summary>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </@details>
    <@details>
        <@summary>Item 2</@summary>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </@details>
    <@details>
        <@summary>Item 3</@summary>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </@details>
</ebay-accordion>
`,z="DVgEKYH",x=d.t(z),_e=n("p",null,1).t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),he=n("p",null,1).t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),ke=n("p",null,1).t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");m.r(z,()=>x);const O={};x._=c(function(r,a,o,t,s,g){l(u,i.i(()=>{i.r("details",i.i(()=>(i.a("leading",{renderBody:e=>{l(ee,{},e,o,"1")}}),i.a("summary",{renderBody:e=>{e.t("Item 1",t)}}),e=>{e.n(_e,t)}))),i.r("details",i.i(()=>(i.a("leading",{renderBody:e=>{l(ie,{},e,o,"3")}}),i.a("summary",{renderBody:e=>{e.t("Item 2",t)}}),e=>{e.n(he,t)}))),i.r("details",i.i(()=>(i.a("leading",{renderBody:e=>{l(te,{},e,o,"5")}}),i.a("summary",{renderBody:e=>{e.t("Item 3",t)}}),e=>{e.n(ke,t)})))},{...r,details:void 0}),a,o,"0")},{t:z,i:!0},O);x.Component=p(O,x._);const Ee=`<ebay-accordion ...input>
    <@details>
        <@leading><ebay-lightbulb-24-icon/></@leading>
        <@summary>Item 1</@summary>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </@details>
    <@details>
        <@leading><ebay-graph-24-icon/></@leading>
        <@summary>Item 2</@summary>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </@details>
    <@details>
        <@leading><ebay-pencil-24-icon/></@leading>
        <@summary>Item 3</@summary>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </@details>
</ebay-accordion>
`,He={title:"navigation & disclosure/ebay-accordion",component:u,parameters:{docs:{description:{component:oe}}},argTypes:{size:{type:"options",description:"Size of the details",table:{defaultValue:{summary:"regular"}},options:["regular","large"]},autoCollapse:{type:"boolean",description:"Whether accordion panels should be autocollapsed when another is opened",table:{defaultValue:{summary:"false"}}},a11yRoleDescription:{type:"string",control:{type:"text"},description:"Localized, the role description to announce the component role for a11y users.",table:{defaultValue:{summary:"accordion"}}},details:{name:"@details",description:"Represents an <ebay-details/> element to be used as part of the group. Allowed attributes are `open`, `as`, `text` and `renderBody`",table:{category:"@attribute tags"}},onToggle:{action:"on-toggle",description:"Triggered on toggle of details to control auto-collapse",table:{category:"Events",defaultValue:{summary:"{ originalEvent, open }"}}},onClick:{action:"on-click",description:"Triggered on click of details",table:{category:"Events",defaultValue:{summary:"{ originalEvent }"}}}}},_=v(b,le),h=v(q,ce),k=v(f,qe),E=v(y,ve),I=v(x,Ee),Oe=["Default","Open","Large","AutoCollapsed","WithIcon"];_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:"buildExtensionTemplate(defaultTemplate, defaultTemplateCode)",..._.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:"buildExtensionTemplate(openTemplate, openTemplateCode)",...h.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:"buildExtensionTemplate(largeTemplate, largeTemplateCode)",...k.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:"buildExtensionTemplate(autoCollapsedTemplate, autoCollapsedTemplateCode)",...E.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:"buildExtensionTemplate(withIconTemplate, withIconTemplateCode)",...I.parameters?.docs?.source}}};export{E as AutoCollapsed,_ as Default,k as Large,h as Open,I as WithIcon,Oe as __namedExportsOrder,He as default};
