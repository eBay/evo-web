import{t as B}from"./storybook-code-source-CCz6reEH.js";import{_ as b}from"./index-CGBSgwe6.js";import{v as y,b as _,_ as f,c as h}from"./defineComponent-B-Bg3Ud2.js";import{_ as $}from"./const-element-Ea3wmYuQ.js";import{a as n}from"./attr-tag-Dvq4QMvY.js";import{_ as F}from"./of-fallback-DrWEmKV1.js";import{_ as d}from"./render-tag-B9T2mz-j.js";import{_ as w}from"./index-Cw3bSwrm.js";/* empty css             */import"./index-Qtpjd4O_.js";import"./index-CZw0tK3j.js";import"./index-CL8ZzwFK.js";import"./style-value-D9hyxyYb.js";import"./_commonjsHelpers-Cpj98o6Y.js";/* empty css               */import"./index-CV1wlU-t.js";import"./index-CuXUxThH.js";import"./dynamic-tag-B3Rndxlm.js";import"./index-D4_UUNUd.js";import"./index-eAGEw84U.js";const L=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`,x="hJi$a3K",u=y.t(x),N=$("label",{class:"field__label field__label--start",for:"select"},1).t("Option");_.r(x,()=>u);const O={onCreate(){this.state={selected:null}},handleChange({index:t}){this.state.selected=t}};u._=f(function(t,e,a,o,g,C){e.be("span",{class:"field"},"0",o,null,1),e.n(N,o),d(b,n.i(()=>{let p=0;for(const T of F(t.option)){let I=p++;n.r("option",{value:T.value,text:T.text,selected:I===g.selected})}},{...t,name:"formFieldName",id:"select",option:void 0}),e,a,"2",[["change","handleChange",!1]]),e.ee()},{t:x},O);u.Component=h(O,u._);const v="OUIeqWT",i=y.t(v);_.r(v,()=>i);const S={};i._=f(function(t,e,a,o,g,C){e.be("form",{style:"text-align: center"},"0",o,null,1),e.be("div",null,"1",o,null,0),d(b,n.i(()=>{n.r("option",{value:"1",text:"Option 1"}),n.r("option",{value:"2",text:"Option 2"}),n.r("option",{value:"3",text:"Option 3"})},{...t,name:"formFieldName",option:void 0}),e,a,"2"),e.ee(),e.be("div",{style:"padding: 1em"},"3",o,null,1),d(w,{type:"reset",renderBody:p=>{p.t("Reset",o)}},e,a,"4"),d(w,{type:"submit",renderBody:p=>{p.t("Submit",o)}},e,a,"5"),e.ee(),e.ee()},{t:v,i:!0},S);i.Component=h(S,i._);const k="Cgn7rRG",l=y.t(k),D=$("label",{class:"field__label field__label--start field__label--disabled",for:"select"},1).t("Option");_.r(k,()=>l);const E={};l._=f(function(t,e,a,o,g,C){e.be("span",{class:"field"},"0",o,null,1),e.n(D,o),d(b,n.i(()=>{n.r("option",{value:"1",text:"Option 1"}),n.r("option",{value:"2",text:"Option 2"}),n.r("option",{value:"3",text:"Option 3"})},{...t,name:"formFieldName",id:"select",disabled:!0,option:void 0}),e,a,"2"),e.ee()},{t:k},E);l.Component=h(E,l._);const R=`export interface Input {
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
`,W=t=>({input:{...t,renderBody:t.renderBody?e=>{e.html(t.renderBody)}:null}}),ae={title:"form input/ebay-select",component:b,parameters:{docs:{description:{component:L}}},argTypes:{floatingLabel:{type:"string",control:{type:"string"},description:"if set, then label will move up and down. Need to have first option to have a nullable value."},borderless:{type:"boolean",control:{type:"boolean"},description:"whether button has borders"},fluid:{type:"boolean",control:{type:"boolean"},description:"If true, then the select takes 100% of the container width"},isLarge:{type:"boolean",control:{type:"boolean"},description:"to show large version"},text:{control:{type:"text"},description:"text to use in the option",table:{category:"@option attributes"}},value:{control:{type:"text"},description:"used for the `value` attribute of the native `<option>`",table:{category:"@option attributes"}},selected:{control:{type:"text"},description:"used to determine which option is selected. This should be included in one and only one option.",table:{category:"@option attributes"}},option:{name:"@option",table:{category:"@attribute tags"}},onChange:{action:"on-change",description:"Triggered on option selected",table:{category:"Events",defaultValue:{summary:"{ el, index, selected }"}}}}},r=W.bind({});r.args={floatingLabel:"Option",option:[{text:"Select an option",value:""},{text:"option 1",value:"option 1"},{text:"option 2",value:"option 2"},{text:"option 3",value:"option 3"}]};r.parameters={docs:{source:{code:B("ebay-select",r.args,{options:"option"})}}};const s=t=>({input:t,component:u});s.parameters={docs:{source:{code:R}}};s.args={option:[{text:"Select an option",value:""},{text:"option 1",value:"option 1"},{text:"option 2",value:"option 2"},{text:"option 3",value:"option 3"}]};const c=t=>({input:t,component:l});c.parameters={docs:{source:{code:l}}};const m=t=>({input:t,component:i});m.parameters={docs:{source:{code:i}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: {
    ...args,
    renderBody: (args.renderBody ? (out: any) => {
      out.html(args.renderBody);
    } : null) as any
  }
})`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: args,
  component: WithLabelTemplate
})`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: args,
  component: DisabledTemplate
})`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: args,
  component: InFormTemplate
})`,...m.parameters?.docs?.source}}};const re=["Floating","ExternalLabel","Disabled","InForm"];export{c as Disabled,s as ExternalLabel,r as Floating,m as InForm,re as __namedExportsOrder,ae as default};
