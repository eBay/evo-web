import{b as T}from"./utils-DWCsNc5l.js";import{v as y,b as f,_ as g,e as q,p as D,c as h}from"./defineComponent-B-Bg3Ud2.js";/* empty css             */import{_ as L}from"./index-B0g55DpA.js";import{_ as R}from"./index-RJcpHTWn.js";import{_ as o}from"./render-tag-B9T2mz-j.js";import{a as d}from"./attr-tag-Dvq4QMvY.js";import{_ as O}from"./index-CWN5kzWH.js";import{_ as A}from"./index-o98Za02-.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Qtpjd4O_.js";/* empty css                    */import"./dynamic-tag-B3Rndxlm.js";import"./style-value-D9hyxyYb.js";import"./index-CL8ZzwFK.js";/* empty css               *//* empty css             */import"./index-BmRbtDLs.js";import"./index-eAGEw84U.js";const M=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-filter-input
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.1.0
    </span>
</h1>

A filter-input is a textbox which is used specifally to filter out content.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/?path=/story/form-input-ebay-filter-input)
- [Storybook Docs](https://ebay.github.io/evo-web/?path=/docs/form-input-ebay-filter-input)
- [Code Examples](https://github.com/eBay/evo-web/tree/master/packages/ebayui-core/src/components/ebay-filter-input/examples)
`,j=["large","small"];class H extends Marko.Component{onMount(){this.textbox=this.getComponent("input")?.getEl("input")}handleClear(e){const t=e.originalEvent;this.textbox.value="",this.emit("input-change",{originalEvent:t,value:""}),this.emit("clear",{originalEvent:t,value:""})}}const b="OIldpd1",r=y.t(b);f.r(b,()=>r);const w=H;r._=g(function(n,e,t,a,u,C){const{class:B,placeholder:F,a11yClearButton:_,a11yControlsId:V,size:c,...z}=n;var x=c&&j.includes(c)?c:null;const E=F??"Filter";e.be("span",{class:q(["filter-input",x&&`filter-input--${x}`,B])},"0",a,null,1),o(L,d.i(()=>{d.a("prefixIcon",{renderBody:m=>{o(R,{},m,t,"1")}}),d.a("postfixIcon",{renderBody:m=>{_&&E&&o(A,{ariaLabel:_,class:"filter-input__clear-btn",size:"small",transparent:!0,renderBody:S=>{o(O,{},S,t,"3")}},m,t,"2",[["click","handleClear",!1]])}})},{fluid:!0,type:"search",ariaControls:V,placeholder:E,...D(z),prefixIcon:void 0,postfixIcon:void 0}),e,t,"@input",[["keydown","emit",!1,["keydown"]],["keypress","emit",!1,["keypress"]],["keyup","emit",!1,["keyup"]],["change","emit",!1,["change"]],["input-change","emit",!1,["input-change"]],["focus","emit",!1,["focus"]],["blur","emit",!1,["blur"]]]),e.ee()},{t:b},w);r.Component=h(w,r._);const v="vc_bz_y",i=y.t(v);f.r(v,()=>i);const I={};i._=g(function(n,e,t,a,u,C){o(r,{ariaLabel:"Filter input",a11yClearButton:"Clear filter input",...n},e,t,"0",[["keyup","emit",!1,["keyup"]],["keydown","emit",!1,["keydown"]],["focus","emit",!1,["focus"]],["blur","emit",!1,["blur"]],["keypress","emit",!1,["keypress"]],["change","emit",!1,["change"]],["clear","emit",!1,["clear"]],["input-change","emit",!1,["input-change"]]])},{t:v},I);i.Component=h(I,i._);const J=`class {}

<ebay-filter-input
    on-keyup("emit", "keyup")
    on-keydown("emit", "keydown")
    on-focus("emit", "focus")
    on-blur("emit", "blur")
    on-keypress("emit", "keypress")
    on-change("emit", "change")
    on-clear("emit", "clear")
    on-input-change("emit", "input-change")
    aria-label="Filter input"
    a11y-clear-button="Clear filter input"
    ...input
/>
`,k="q0qKgJi",l=y.t(k);f.r(k,()=>l);const $={onCreate(){this.state={value:""}},handleInputChange(n){console.log(n),this.state.value=n.value,this.emit("input-change",n)}};l._=g(function(n,e,t,a,u,C){e.be("div",null,"0",a,null,0),o(r,{a11yControlsId:"filter-input-controls",ariaLabel:"Filter input",a11yClearButton:"Clear filter input",...n},e,t,"1",[["keyup","emit",!1,["keyup"]],["keydown","emit",!1,["keydown"]],["focus","emit",!1,["focus"]],["blur","emit",!1,["blur"]],["keypress","emit",!1,["keypress"]],["change","emit",!1,["change"]],["clear","emit",!1,["clear"]],["input-change","handleInputChange",!1]]),e.be("div",{id:"filter-input-controls"},"2",a,null,1),e.t('Current value: "',a),e.t(u.value,a),e.t('"',a),e.ee(),e.ee()},{t:k},$);l.Component=h($,l._);const K=`class {
    declare state: {
        value: string;
    };

    onCreate() {
        this.state = {
            value: "",
        };
    }
    handleInputChange(event: any) {
        console.log(event);
        this.state.value = event.value;
        this.emit("input-change", event);
    }
}

<div>
    <ebay-filter-input
        a11y-controls-id="filter-input-controls"
        on-keyup("emit", "keyup")
        on-keydown("emit", "keydown")
        on-focus("emit", "focus")
        on-blur("emit", "blur")
        on-keypress("emit", "keypress")
        on-change("emit", "change")
        on-clear("emit", "clear")
        on-input-change("handleInputChange")
        aria-label="Filter input"
        a11y-clear-button="Clear filter input"
        ...input
    />
    <div id="filter-input-controls">
        Current value: "\${state.value}"
    </div>
</div>
`,ue={title:"form input/ebay-filter-input",component:r,parameters:{docs:{description:{component:M}}},argTypes:{size:{options:["regular","small","large"],type:{category:"Options"},description:'either "regular" "small" or "large". If large, then renders larger sized textbox',table:{defaultValue:{summary:"regular"}}},a11yClearButton:{type:"string",control:{type:"text"},description:"Localized, text for the clear button. If not provided, then no clear button is rendered"},"aria-label":{type:"string",control:{type:"text"},description:"Either this or <label> is required. Renders text for screen readers"},a11yControlsId:{type:"string",control:{type:"text"},description:"Requied. This is the id of the element that this input controls, such as the list of filtered items."},placeholder:{type:"string",control:{type:"text"},table:{defaultValue:{summary:"Filter"}},description:"Reqired. Text to show when input is empty. This is not a label"},value:{type:"string",control:{type:"text"},table:{defaultValue:{summary:""}},description:"The value of the input. This is not a label. This is not required"},"on-change":{action:"on-change",description:"Triggered whenever the value of the input changes",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value }"}}},"on-input-change":{action:"on-input-change",description:"Triggered when the value of the input is changed",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value }"}}},"on-focus":{action:"on-focus",description:"Triggered on focus",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value }"}}},"on-blur":{action:"on-blur",description:"Triggered on blur",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value }"}}},"on-keypress":{action:"on-keypress",description:"Triggered on keypress",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value }"}}},"on-keyup":{action:"on-keyup",description:"Triggered on keup",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value }"}}},"on-keydown":{action:"on-keydown",description:"Triggered on keydown",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value }"}}},onClear:{action:"on-clear",description:"Triggered when clear button is clicked",table:{category:"Events",defaultValue:{summary:""}}}}},s=T(i,J,{a11yClearButton:"Clear filter input","aria-label":"Filter input"}),p=T(l,K,{a11yClearButton:"Clear filter input","aria-label":"Filter input",a11yControlsId:"filter-input-controls"}),ce=["Default","Controls"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`buildExtensionTemplate(DefaultTemplate, DefaultTemplateCode, {
  a11yClearButton: "Clear filter input",
  "aria-label": "Filter input"
})`,...s.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`buildExtensionTemplate(ControlsTemplate, ControlsTemplateCode, {
  a11yClearButton: "Clear filter input",
  "aria-label": "Filter input",
  a11yControlsId: "filter-input-controls"
})`,...p.parameters?.docs?.source}}};export{p as Controls,s as Default,ce as __namedExportsOrder,ue as default};
