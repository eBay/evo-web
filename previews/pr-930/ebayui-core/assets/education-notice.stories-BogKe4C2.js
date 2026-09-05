import{t as L}from"./storybook-code-source-CCz6reEH.js";import{b as w,a as G}from"./utils-DWCsNc5l.js";import{v as _,b,_ as f,c as h}from"./defineComponent-B-Bg3Ud2.js";/* empty css             */import{_ as O}from"./index-BDnhrurt.js";import{_ as m}from"./render-tag-B9T2mz-j.js";import{_ as r}from"./const-element-Ea3wmYuQ.js";import{a}from"./attr-tag-Dvq4QMvY.js";import{_ as X}from"./index-Bl6XLQ_q.js";import{_ as j,a as J}from"./index-DmkIt9bL.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-H8W7sR8R.js";import"./index-CL8ZzwFK.js";import"./index-BIJMKU4H.js";import"./index-CFEW7sTq.js";import"./dynamic-tag-B3Rndxlm.js";import"./index-D7kkco59.js";import"./index-o98Za02-.js";/* empty css                    *//* empty css               *//* empty css             */import"./index-BmRbtDLs.js";import"./index-eAGEw84U.js";const M=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-education-notice
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.0.0
    </span>
</h1>

The \`<ebay-education-notice>\` is a tag used to create an education notice element. The notice requires a \`@title\` element and should be wrapped inside a \`<p>\` tag.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/notices-tips-ebay-education-notice)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/notices-tips-ebay-education-notice)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/ebay-education-notice/examples)
`;class Q extends Marko.Component{onCreate(){this.state={dismissed:!1}}onInput(n){this.state={dismissed:n.dismissed||!1}}onDismiss(){this.state.dismissed=!0,this.emit("dismiss")}}const I="z8qwhRq",s=_.t(I);b.r(I,()=>s);const N=Q;s._=f(function(o,n,i,e,p,T){const{a11yRoleDescription:t="Notice",status:B,class:F,variant:V,iconVariant:q,...W}=o;p.dismissed||m(O,{...W,role:"region",prefixClass:"education-notice",type:"section",mainRoot:"div",iconClass:[q==="prominent"&&"icon--prominent"],a11yRoleDescription:t,class:[V==="prominent"&&"education-notice--prominent",F]},n,i,"0",[["dismiss","onDismiss",!1]])},{t:I},N);s.Component=h(N,s._);const $="ZD6Ug$X",d=_.t($),U=r("div",null,1).t("Educaiton title"),Y=r("p",null,1).t("Please take another look at the following");b.r($,()=>d);const P={};d._=f(function(o,n,i,e,p,T){m(s,a.i(()=>(a.a("title",{renderBody:t=>{t.n(U,e)}}),a.a("footer",{renderBody:t=>{m(X,{renderBody:B=>{B.t("Footer",e)}},t,i,"2")}}),t=>{t.n(Y,e)}),{...o,title:void 0,footer:void 0}),n,i,"0")},{t:$,i:!0},P);d.Component=h(P,d._);const Z=`import type { Input as EducationNoticeInput } from "<ebay-education-notice>";
export type Input = EducationNoticeInput;

<ebay-education-notice ...input>
    <@title>
        <div>Educaiton title</div>
    </@title>
    <@footer>
        <ebay-fake-link>Footer</ebay-fake-link>
    </@footer>
    <p>Please take another look at the following</p>
</ebay-education-notice>
`,E="hEmXeOY",l=_.t(E),A=r("div",null,1).t("Notice title"),H=r("p",null,1).t("The eBay vault will store items for you.");b.r(E,()=>l);const S={};l._=f(function(o,n,i,e,p,T){m(s,a.i(()=>(a.a("title",{renderBody:t=>{t.n(A,e)}}),t=>{t.n(H,e)}),{...o,a11yText:"ebay vault",variant:"prominent",educationIcon:j,title:void 0}),n,i,"0")},{t:E,i:!0},S);l.Component=h(S,l._);const K=`import vaultIcon from "<ebay-the-ebay-vault-24-icon>";

<ebay-education-notice
    ...input
    a11y-text="ebay vault"
    variant="prominent"
    education-icon=vaultIcon
>
    <@title>
        <div>Notice title</div>
    </@title>
    <p>The eBay vault will store items for you.</p>
</ebay-education-notice>
`,D="Io8JzSh",u=_.t(D),tt=r("div",null,1).t("Notice title"),et=r("p",null,1).t("The eBay vault will store items for you.");b.r(D,()=>u);const R={};u._=f(function(o,n,i,e,p,T){m(s,a.i(()=>(a.a("title",{renderBody:t=>{t.n(tt,e)}}),t=>{t.n(et,e)}),{...o,a11yText:"ebay vault",iconVariant:"prominent",educationIcon:J,title:void 0}),n,i,"0")},{t:D,i:!0},R);u.Component=h(R,u._);const ot=`import authGuarantee from "<ebay-authenticity-guarantee-24-icon>";

<ebay-education-notice
    ...input
    a11y-text="ebay vault"
    icon-variant="prominent"
    education-icon=authGuarantee
>
    <@title>
        <div>Notice title</div>
    </@title>
    <p>The eBay vault will store items for you.</p>
</ebay-education-notice>
`,C="zxwQ_1z",y=_.t(C),nt=r("div",null,1).t("Notice title"),it=r("p",null,1).t("The eBay vault will store items for you.");b.r(C,()=>y);const z={};y._=f(function(o,n,i,e,p,T){m(s,a.i(()=>(a.a("title",{renderBody:t=>{t.n(nt,e)}}),t=>{t.n(it,e)}),{...o,title:void 0}),n,i,"0",[["dismiss","emit",!1,["dismiss"]]])},{t:C},z);y.Component=h(z,y._);const at=`import type { Input as EducationNoticeInput } from "<ebay-education-notice>";
export type Input = EducationNoticeInput;
class {}

<ebay-education-notice ...input on-dismiss("emit", "dismiss")>
    <@title>
        <div>Notice title</div>
    </@title>
    <p>The eBay vault will store items for you.</p>
</ebay-education-notice>
`,st=o=>({input:G(o)}),Bt={title:"notices & tips/ebay-education-notice",component:s,parameters:{docs:{description:{component:M}}},argTypes:{educationIcon:{name:"@educationIcon",description:"For status education, an `<ebay-[name]-icon>` to show as the button's icon",table:{defaultValue:{summary:"ebay-lightbulb-24-icon",category:"@attribute tags"}}},variant:{description:"Either none or prominent. If prominent, the notice will be more prominent",options:["none","prominent"],type:"select",defaultValue:{summary:"none"}},iconVariant:{description:"Either none or prominent. If prominent, the icon will be more prominent",options:["none","prominent"],type:"select",defaultValue:{summary:"none"}},a11yText:{description:"Localized, adding description for the notice for a11y users"},a11yRoleDescription:{table:{defaultValue:{summary:"Notice"}},description:"Localized, the roledescription to announce the component type for a11y users."},dismissed:{description:"whether or not the notice is dismissed",type:"boolean"},a11yDismissText:{control:{type:"text"},description:"Localized text for dismiss button"},title:{name:"@title",description:"The title content to be displayed.",table:{required:!0,category:"@attribute tags"}},footer:{name:"@footer",description:"The footer content to be displayed. Contains a button or link.",table:{category:"@attribute tags"}},onDismiss:{action:"on-dismiss",description:"Triggered on notice dismiss",table:{category:"Events",defaultValue:{summary:""}}}}},c=st.bind({});c.args={a11yText:"education",a11yRoleDescription:"Notice",title:{renderBody:"Education notice title"},renderBody:"<p>Education notice info. Things you need to know.</p>"};c.parameters={docs:{source:{code:L("ebay-education-notice",c.args)}}};const g=w(l,K,{a11yText:"attention",status:"attention"}),k=w(u,ot,{a11yText:"attention",status:"attention"}),v=w(y,at,{a11yText:"information",a11yIconText:"",a11yDismissText:"Dismiss Notice"}),x=w(d,Z,{a11yText:"information"}),Nt=["Default","Prominent","ProminentIcon","WithDismiss","WithFooter"];c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: addRenderBodies(args)
})`,...c.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`buildExtensionTemplate(ProminentTemplate, ProminentTemplateCode, {
  a11yText: "attention",
  status: "attention"
})`,...g.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`buildExtensionTemplate(ProminentIconTemplate, ProminentIconTemplateCode, {
  a11yText: "attention",
  status: "attention"
})`,...k.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`buildExtensionTemplate(withDismiss, withDismissCode, {
  a11yText: "information",
  a11yIconText: "",
  a11yDismissText: "Dismiss Notice"
})`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`buildExtensionTemplate(withFooter, withFooterCode, {
  a11yText: "information"
})`,...x.parameters?.docs?.source}}};export{c as Default,g as Prominent,k as ProminentIcon,v as WithDismiss,x as WithFooter,Nt as __namedExportsOrder,Bt as default};
