import{t as D}from"./storybook-code-source-CCz6reEH.js";import{_ as m}from"./index-CSt2g4KI.js";import{v as b,b as f,_,c as g}from"./defineComponent-B-Bg3Ud2.js";import{_ as h}from"./const-element-Ea3wmYuQ.js";import{_ as k}from"./render-tag-B9T2mz-j.js";import{_ as S}from"./of-fallback-DrWEmKV1.js";/* empty css              */import"./index-M9K2-HtW.js";import"./index-CL8ZzwFK.js";/* empty css             */import"./index-BSoKmMuk.js";import"./style-value-D9hyxyYb.js";import"./_commonjsHelpers-Cpj98o6Y.js";const V=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
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
`,y="fCIfY7U",r=b.t(y),I=h("legend",null,1).t("Choose an Option");f.r(y,()=>r);const O={};r._=_(function(o,e,l,n,v,$){e.be("fieldset",null,"0",n,null,0);{e.n(I,n);let E=0;for(const p of S([1,2,3])){const u=`[${E++}]`;e.be("span",{class:"field"},"2"+u,n,null,1),k(m,{...o,class:"field__control",id:`group-checkbox-${p}`,value:p,name:"checkbox-group"},e,l,"3"+u,[["change","emit",!1,["change"]],["focus","emit",!1,["focus"]],["keydown","emit",!1,["keydown"]]]),e.be("label",{class:"field__label field__label--end",for:`group-checkbox-${p}`},"4"+u,n,null,0),e.t("Option ",n),e.t(p,n),e.ee(),e.ee()}}e.ee()},{t:y},O);r.Component=g(O,r._);const x="hgumnlL",i=b.t(x),G=h("label",{class:"field__label field__label--end",for:"checkbox"},1).t("Option");f.r(x,()=>i);const T={};i._=_(function(o,e,l,n,v,$){e.be("span",{class:"field"},"0",n,null,1),k(m,{...o,class:"field__control",id:"checkbox"},e,l,"1",[["change","emit",!1,["change"]],["focus","emit",!1,["focus"]],["keydown","emit",!1,["keydown"]]]),e.n(G,n),e.ee()},{t:x},T);i.Component=g(T,i._);const w="f8Y49ZC",d=b.t(w),L=h("label",{class:"field__label field__label--end field__label--disabled",for:"checkbox"},1).t("Option");f.r(w,()=>d);const C={};d._=_(function(o,e,l,n,v,$){e.be("span",{class:"field"},"0",n,null,1),k(m,{...o,disabled:!0,class:"field__control",id:"checkbox"},e,l,"1",[["change","emit",!1,["change"]],["focus","emit",!1,["focus"]],["keydown","emit",!1,["keydown"]]]),e.n(L,n),e.ee()},{t:w},C);d.Component=g(C,d._);const W=`class {}

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
`,q=`// TODO: import field from skin

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
`,z=`// TODO: import field from skin

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
`,F=o=>({input:o}),Q={title:"form input/ebay-checkbox",component:m,parameters:{docs:{description:{component:V}}},argTypes:{checked:{description:"if checked or not",table:{defaultValue:{summary:"false"}},type:"boolean"},size:{options:["regular","large"],description:"Sets the checkbox icon. Default is regular. For mweb this should be set to large. (Note: The dimensions of the checkbox will not change, but only the icon)",table:{defaultValue:{summary:"regular"}},type:{category:"Options"}},"icon-style":{options:["rounded","square"],description:"Will change the icon to be rounded or square (square being the legacy and deprecated version)",table:{defaultValue:{summary:"rounded"}},type:{category:"Options"}},onChange:{action:"on-change",description:"Triggered on change",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value, checked }"}}},onFocus:{action:"on-focus",description:"Triggered on focus",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value }"}}},onKeydown:{action:"on-keydown",description:"Triggered on keydown",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value }"}}}}},s=o=>({input:o,component:i});s.args={checked:!1};s.parameters={docs:{source:{code:q}}};const t=o=>({input:o,component:d});t.args={checked:!1};t.parameters={docs:{source:{code:z}}};const c=o=>({input:o,component:r});c.args={};c.parameters={docs:{source:{code:W}}};const a=F.bind({});a.args={checked:!1};a.parameters={docs:{source:{code:D("ebay-checkbox",a.args)}}};const X=["WithLabel","Disabled","Group","Isolated"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: args,
  component: WithLabelTemplate
})`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: args,
  component: DisabledTemplate
})`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: args,
  component: GroupTemplate
})`,...c.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: args
})`,...a.parameters?.docs?.source}}};export{t as Disabled,c as Group,a as Isolated,s as WithLabel,X as __namedExportsOrder,Q as default};
