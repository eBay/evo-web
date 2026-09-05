import{t as O}from"./storybook-code-source-CCz6reEH.js";import{_ as m}from"./index-DFK0Dv0z.js";import{v as f,b as k,_ as g,c as _}from"./defineComponent-B-Bg3Ud2.js";import{_ as p}from"./render-tag-B9T2mz-j.js";import{_ as V}from"./index-CSt2g4KI.js";import{_ as D}from"./of-fallback-DrWEmKV1.js";import{_ as w}from"./const-element-Ea3wmYuQ.js";/* empty css              */import"./index-D8vhxc05.js";import"./index-CL8ZzwFK.js";/* empty css             */import"./index-M9K2-HtW.js";import"./index-BSoKmMuk.js";import"./style-value-D9hyxyYb.js";import"./_commonjsHelpers-Cpj98o6Y.js";const L=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
    <span>
        ebay-tri-state-checkbox
    </span>
    <span style="font-weight: normal; font-size: medium; margin-bottom: -15px;">
        DS v1.2.0
    </span>
</h1>

A checkbox that toggles from unchecked, to partially checked, to fully checked states. Uses \`<input/>\` under the hood with custom icons.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/form-input-ebay-tri-state-checkbox)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/form-input-ebay-tri-state-checkbox)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/ebay-tri-state-checkbox/examples)
`,y="F2QNtfy",i=f.t(y);k.r(y,()=>i);const v={onCreate(){this.state={count:2,checked:[!1,!0,!0,!1],cachedChecked:[!1,!0,!0,!1],cacheCount:2}},handleChange(t,{checked:e}){this.state.checked[t]=e,this.state.cachedChecked=[...this.state.checked],this.state.count+=e?1:-1,this.state.cacheCount=this.state.count},handleParentChange({checked:t}){let e;t==="true"?(this.state.checked.fill(!0),e=this.state.checked.length):t==="mixed"?(this.state.checked=[...this.state.cachedChecked],e=this.state.cacheCount):(this.state.checked.fill(!1),e=0),this.state.count=e},get checked(){return this.state.count===0?"false":this.state.count===this.state.checked.length?"true":"mixed"},get skipMixed(){const t=this.state.cacheCount;return t===0||t===this.state.checked.length}};i._=g(function(t,e,n,a,b,I){e.be("div",{class:"field"},"0",a,null,1),p(m,{skipMixed:a.skipMixed,checked:a.checked,id:n.elId("checkbox-all")},e,n,"1",[["change","handleParentChange",!1]]),e.be("label",{class:"field__label field__label--end",for:n.elId("checkbox-all")},"2",a,null,0),e.t("Select all",a),e.ee(),e.ee(),e.be("div",{class:"container",style:"margin-left: 10px"},"3",a,null,1);{let B=0;for(const E of D(b.checked)){let l=B++;const u=`[${l}]`;e.be("div",{class:"field"},"4"+u,a,null,1),p(V,{id:n.elId(`checkbox-${l}`),checked:E},e,n,"5"+u,[["change","handleChange",!1,[l]]]),e.be("label",{class:"field__label field__label--end",for:n.elId(`checkbox-${l}`)},"6"+u,a,null,0),e.t("Option ",a),e.t(l,a),e.ee(),e.ee()}}e.ee()},{t:y},v);i.Component=_(v,i._);const x="XnHpqtt",d=f.t(x),M=w("label",{class:"field__label field__label--end",for:"checkbox"},1).t("Option");k.r(x,()=>d);const S={};d._=g(function(t,e,n,a,b,I){e.be("span",{class:"field"},"0",a,null,1),p(m,{...t,class:"field__control",id:"checkbox"},e,n,"1",[["change","emit",!1,["change"]],["focus","emit",!1,["focus"]],["keydown","emit",!1,["keydown"]]]),e.n(M,a),e.ee()},{t:x},S);d.Component=_(S,d._);const C="VBBUs07",h=f.t(C),W=w("label",{class:"field__label field__label--end field__label--disabled",for:"checkbox"},1).t("Option");k.r(C,()=>h);const T={};h._=g(function(t,e,n,a,b,I){e.be("span",{class:"field"},"0",a,null,1),p(m,{...t,disabled:!0,class:"field__control",id:"checkbox"},e,n,"1",[["change","emit",!1,["change"]],["focus","emit",!1,["focus"]],["keydown","emit",!1,["keydown"]]]),e.n(W,a),e.ee()},{t:C},T);h.Component=_(T,h._);const F=`import type { Input as TriStateCheckboxInput } from "<ebay-tri-state-checkbox>";
export type Input = TriStateCheckboxInput;
class {}

<span class="field">
    <ebay-tri-state-checkbox
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
`,U=`import type { Input as TriStateCheckboxInput } from "<ebay-tri-state-checkbox>";
export type Input = TriStateCheckboxInput;
class {}

<span class="field">
    <ebay-tri-state-checkbox
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
`,$=t=>({input:{...t,renderBody:t.renderBody?e=>{e.html(t.renderBody)}:null}}),ee={title:"form input/ebay-tri-state-checkbox",component:m,parameters:{docs:{description:{component:L}}},argTypes:{checked:{options:["false","mixed","true"],type:{category:"Options"},description:'Either "true", "false" or "mixed". Defaults to "false". Changes the checkbox state to the given one depdending on the checked state.',table:{defaultValue:{summary:"false"}}},skipMixed:{type:"boolean",control:{type:"boolean"},description:"If set, then will skip the mixed toggle when clicking on checkbox. Used if in some cases you want to toggle between all items selected or none."},size:{options:["regular","large"],type:{category:"Options"},description:'Either "large" or "regular". Sets the checkbox icon. Default is regular. For mweb this should be set to large. (Note: The dimensions of the checkbox will not change, but only the icon)',table:{defaultValue:{summary:"regular"}}},onChange:{action:"on-change",description:"Triggered on change",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value, checked }"}}},onFocus:{action:"on-focus",description:"Triggered on focus",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value }"}}}}},o=t=>({input:t,component:d});o.args={};o.parameters={docs:{source:{code:F}}};const c=t=>({input:t,component:h});c.args={};c.parameters={docs:{source:{code:U}}};const r=$.bind({});r.component=i;const s=$.bind({});s.args={};s.parameters={docs:{source:{code:O("ebay-tri-state-checkbox",s.args)}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: args,
  component: WithLabelTemplate
})`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: args,
  component: DisabledTemplate
})`,...c.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: {
    ...args,
    renderBody: (args.renderBody ? (out: any) => {
      out.html(args.renderBody);
    } : null) as any
  }
})`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: {
    ...args,
    renderBody: (args.renderBody ? (out: any) => {
      out.html(args.renderBody);
    } : null) as any
  }
})`,...s.parameters?.docs?.source}}};const te=["WithLabel","Disabled","mixedImplementation","Isolated"];export{c as Disabled,s as Isolated,o as WithLabel,te as __namedExportsOrder,ee as default,r as mixedImplementation};
