import{t as C}from"./storybook-code-source-CCz6reEH.js";import{_ as p}from"./index-Dn5d1X1G.js";import{v as f,b as _,_ as b,c as y}from"./defineComponent-B-Bg3Ud2.js";import{_ as g}from"./const-element-Ea3wmYuQ.js";import{_ as h}from"./render-tag-B9T2mz-j.js";import{_ as O}from"./of-fallback-DrWEmKV1.js";/* empty css              */import"./index-Ci85Lllk.js";import"./index-CL8ZzwFK.js";/* empty css             */import"./index-Bue5N1gN.js";import"./style-value-D9hyxyYb.js";import"./_commonjsHelpers-Cpj98o6Y.js";const S=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-radio
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.2.0
    </span>
</h1>

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/form-input-ebay-radio)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/form-input-ebay-radio)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/ebay-radio/examples)
`,k="tPctQuQ",i=f.t(k),D=g("legend",null,1).t("Choose an Option");_.r(k,()=>i);const B={};i._=b(function(n,e,t,o,I,$){e.be("fieldset",null,"0",o,null,0);{e.n(D,o);let x=0;for(const m of O([1,2,3])){const u=`[${x++}]`;e.be("span",{class:"field"},"2"+u,o,null,1),h(p,{...n,class:"field__control",id:`group-radio-${m}`,value:m,name:"radio-group"},e,t,"3"+u,[["change","emit",!1,["change"]],["focus","emit",!1,["focus"]],["keydown","emit",!1,["keydown"]]]),e.be("label",{class:"field__label field__label--end",for:`group-radio-${m}`},"4"+u,o,null,0),e.t("Option ",o),e.t(m,o),e.ee(),e.ee()}}e.ee()},{t:k},B);i.Component=y(B,i._);const v="aOz40Wm",d=f.t(v),R=g("label",{for:"radio",class:"field__label field__label--end"},1).t("Option");_.r(v,()=>d);const E={};d._=b(function(n,e,t,o,I,$){e.be("span",{class:"field"},"0",o,null,1),h(p,{...n,value:"1",class:"field__control",id:"radio"},e,t,"1",[["change","emit",!1,["change"]],["focus","emit",!1,["focus"]],["keydown","emit",!1,["keydown"]]]),e.n(R,o),e.ee()},{t:v},E);d.Component=y(E,d._);const w="Y0vIF6R",c=f.t(w),V=g("label",{for:"radio",class:"field__label field__label--end field__label--disabled"},1).t("Option");_.r(w,()=>c);const T={};c._=b(function(n,e,t,o,I,$){e.be("span",{class:"field"},"0",o,null,1),h(p,{...n,disabled:!0,value:"1",class:"field__control",id:"radio"},e,t,"1",[["change","emit",!1,["change"]],["focus","emit",!1,["focus"]],["keydown","emit",!1,["keydown"]]]),e.n(V,o),e.ee()},{t:w},T);c.Component=y(T,c._);const W=`import type { Input as RadioInput } from "<ebay-radio>";
export type Input = RadioInput;
class {}

<fieldset>
    <legend>Choose an Option</legend>
    <for|label_num| of=[1, 2, 3]>
        <span class="field">
            <ebay-radio
                ...input
                on-change("emit", "change")
                on-focus("emit", "focus")
                on-keydown("emit", "keydown")
                class="field__control"
                id=\`group-radio-\${label_num}\`
                value=label_num
                name="radio-group"
            />
            <label
                class="field__label field__label--end"
                for=\`group-radio-\${label_num}\`
            >
                Option \${label_num}
            </label>
        </span>
    </for>
</fieldset>
`,L=`import type { Input as RadioInput } from "<ebay-radio>";
export type Input = RadioInput;
class {}

<span class="field">
    <ebay-radio
        ...input
        value="1"
        on-change("emit", "change")
        on-focus("emit", "focus")
        on-keydown("emit", "keydown")
        class="field__control"
        id="radio"
    />
    <label for="radio" class="field__label field__label--end">
        Option
    </label>
</span>
`,z=`import type { Input as RadioInput } from "<ebay-radio>";
export type Input = RadioInput;
class {}

<span class="field">
    <ebay-radio
        ...input
        disabled
        value="1"
        on-change("emit", "change")
        on-focus("emit", "focus")
        on-keydown("emit", "keydown")
        class="field__control"
        id="radio"
    />
    <label
        for="radio"
        class="field__label field__label--end field__label--disabled"
    >
        Option
    </label>
</span>
`,F=n=>({input:{...n,renderBody:n.renderBody?e=>{e.html(n.renderBody)}:null}}),X={title:"form input/ebay-radio",component:p,parameters:{docs:{description:{component:S}}},argTypes:{size:{options:["regular","large"],type:{category:"Options"},table:{defaultValue:{summary:"regular"}},description:'Either "large" or "regular". Sets the radio icon. Default is regular. For mweb this should be set to large. (Note: The dimensions of the radio will not change, but only the icon)'},onChange:{action:"on-change",description:"Triggered on change",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value }"}}},onFocus:{action:"on-focus",description:"Triggered on focus",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value }"}}},onKeydown:{action:"on-keydown",description:"Triggered on keydown",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value }"}}}}},r=n=>({input:n,component:d});r.parameters={docs:{source:{code:L}}};const s=n=>({input:n,component:c});s.parameters={docs:{source:{code:z}}};const l=n=>({input:{...n,renderBody:n.renderBody?e=>{e.html(n.renderBody)}:null},component:i});l.parameters={docs:{source:{code:W}}};const a=F.bind({});a.args={};a.component=p;a.parameters={docs:{source:{code:C("ebay-radio",a.args)}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: args,
  component: WithLabelTemplate
})`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: args,
  component: DisabledTemplate
})`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: {
    ...args,
    renderBody: (args.renderBody ? (out: any) => {
      out.html(args.renderBody);
    } : null) as any
  },
  component: groupTemplate
})`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: {
    ...args,
    renderBody: (args.renderBody ? (out: any) => {
      out.html(args.renderBody);
    } : null) as any
  }
})`,...a.parameters?.docs?.source}}};const Z=["WithLabel","Disabled","Group","Isolated"];export{s as Disabled,l as Group,a as Isolated,r as WithLabel,Z as __namedExportsOrder,X as default};
