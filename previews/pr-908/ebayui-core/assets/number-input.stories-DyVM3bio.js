import{v as h,b as f,_ as k,e as z,p as A,c as v}from"./defineComponent-B-Bg3Ud2.js";/* empty css             */import{_ as H}from"./index-B0g55DpA.js";import{_ as M}from"./dynamic-tag-B3Rndxlm.js";import{_ as N,a as O,b as R}from"./index-CP68OGeL.js";import{_ as r}from"./render-tag-B9T2mz-j.js";import{_ as E}from"./index-o98Za02-.js";import{a as p}from"./attr-tag-Dvq4QMvY.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Qtpjd4O_.js";/* empty css                    */import"./style-value-D9hyxyYb.js";import"./index-CL8ZzwFK.js";/* empty css               *//* empty css             */import"./index-BmRbtDLs.js";import"./index-eAGEw84U.js";const q=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-number-input
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.1.0
    </span>
</h1>

A number-input is a textbox which only takes numbers as input

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/?path=/story/form-input-ebay-number-input)
- [Storybook Docs](https://ebay.github.io/evo-web/?path=/docs/form-input-ebay-number-input)
- [Code Examples](https://github.com/eBay/evo-web/tree/master/packages/ebayui-core/src/components/ebay-number-input/examples)
`;class U extends Marko.Component{onCreate(){this.state={value:0,min:0,max:1/0}}onMount(){this.textbox=this.getComponent("input")?.getEl("input")}onInput(t){const e=t.a11yDeleteText?1:0;this.state.min=t.min?parseInt(t.min.toString(),10):e,this.state.max=t.max?parseInt(t.max.toString(),10):1/0;const i=t.value??e;this.state.value=typeof i!="number"?parseInt(i.toString(),10):i}checkBoundary(t,e=0){const i=this.input.a11yDeleteText?1:0;let n=parseInt(t,10)+e;return isNaN(n)?n=i:n>this.state.max?n=this.state.max:n<this.state.min&&(n=this.state.min),n}updateInputValue(t){const e=this.checkBoundary(this.textbox.value,0);this.state.value=e,this.textbox.value=e.toString(),this.emit("input-change",{originalEvent:t.originalEvent,value:e}),this.emit("change",{originalEvent:t.originalEvent,value:e})}updateInputValueChange(t){const e=this.checkBoundary(this.textbox.value,0);this.state.value=e,this.textbox.value=e.toString(),this.emit("change",{originalEvent:t.originalEvent,value:e})}handleAnimation(t){const e=this.el;e.classList.remove("number-input--increment"),e.classList.remove("number-input--decrement"),e.classList.remove("number-input--increment-disabled"),e.classList.remove("number-input--decrement-disabled"),e.offsetWidth,e.classList.add(`number-input--${t}`)}handleIncrement(t){const e=this.checkBoundary(this.textbox.value,1);this.handleAnimation(e>=this.state.max?"increment-disabled":"increment"),this.state.value=e,this.textbox.value=e.toString(),this.emit("increment",{originalEvent:t.originalEvent,value:e}),this.emit("change",{originalEvent:t.originalEvent,value:e})}handleDecrement(t){const e=this.checkBoundary(this.textbox.value,-1);this.handleAnimation(e<=this.state.min?"decrement-disabled":"decrement"),this.state.value=e,this.textbox.value=e.toString(),this.emit("decrement",{originalEvent:t.originalEvent,value:e}),this.emit("change",{originalEvent:t.originalEvent,value:e})}}const w="GEn2UVa",o=h.t(w);f.r(w,()=>o);const $=U;o._=k(function(a,t,e,i,n,x){const{label:y,a11yDeleteText:_,class:B,value:J,min:W,max:K,...D}=a;t.be("span",{class:z(["number-input",_&&n.value===1&&"number-input--show-delete",B])},"0",i,null,1),r(H,p.i(()=>{p.a("prefixIcon",{renderBody:s=>{y&&(s.be("label",{for:e.elId("number-input")},"1",i,null,0),M(s,y,null,null,null,null,e,"2"),s.ee()),r(E,{ariaHidden:"true",disabled:n.value<=n.min,size:"small",class:"number-input__decrement",transparent:!0,tabindex:"-1",renderBody:u=>{r(N,{},u,e,"4")}},s,e,"3",[["click","handleDecrement",!1]])}}),p.a("postfixIcon",{renderBody:s=>{_&&r(E,{class:"number-input__delete",size:"small",transparent:!0,ariaLabel:_,renderBody:u=>{r(O,{},u,e,"6")}},s,e,"5",[["click","emit",!1,["delete-click"]]]),r(E,{ariaHidden:"true",disabled:n.value>=n.max,class:"number-input__increment",size:"small",transparent:!0,tabindex:"-1",renderBody:u=>{r(R,{},u,e,"8")}},s,e,"7",[["click","handleIncrement",!1]])}})},{...A(D),min:n.min,max:n.max,id:e.elId("number-input"),type:"number",value:n.value,prefixIcon:void 0,postfixIcon:void 0}),t,e,"@input",[["input-change","updateInputValue",!1],["change","updateInputValueChange",!1],["keydown","emit",!1,["keydown"]],["keyup","emit",!1,["keyup"]],["focus","emit",!1,["focus"]],["blur","emit",!1,["blur"]],["keypress","emit",!1,["keypress"]]]),t.ee()},{t:w},$);o.Component=v($,o._);const I="J0xl3el",d=h.t(I);f.r(I,()=>d);const C={};d._=k(function(a,t,e,i,n,x){r(o,{min:0,max:100,ariaLabel:"Enter a number",...a},t,e,"0",[["keyup","emit",!1,["keyup"]],["keydown","emit",!1,["keydown"]],["focus","emit",!1,["focus"]],["blur","emit",!1,["blur"]],["keypress","emit",!1,["keypress"]],["change","emit",!1,["change"]],["delete-click","emit",!1,["delete-click"]],["input-change","emit",!1,["input-change"]],["increment","emit",!1,["increment"]],["decrement","emit",!1,["decrement"]]])},{t:I},C);d.Component=v(C,d._);const j=`class {}

<ebay-number-input
    on-keyup("emit", "keyup")
    on-keydown("emit", "keydown")
    on-focus("emit", "focus")
    on-blur("emit", "blur")
    on-keypress("emit", "keypress")
    on-change("emit", "change")
    on-delete-click("emit", "delete-click")
    on-input-change("emit", "input-change")
    on-increment("emit", "increment")
    on-decrement("emit", "decrement")
    min=0
    max=100
    aria-label="Enter a number"
    ...input
/>
`,T="Ua72AyF",b=h.t(T);f.r(T,()=>b);const S={};b._=k(function(a,t,e,i,n,x){r(o,{a11yDeleteText:"Delete item",ariaLabel:"Enter a number",...a},t,e,"0",[["keydown","emit",!1,["keydown"]],["keyup","emit",!1,["keyup"]],["focus","emit",!1,["focus"]],["blur","emit",!1,["blur"]],["keypress","emit",!1,["keypress"]],["change","emit",!1,["change"]],["input-change","emit",!1,["input-change"]],["delete-click","emit",!1,["delete-click"]],["increment","emit",!1,["increment"]],["decrement","emit",!1,["decrement"]]])},{t:T},S);b.Component=v(S,b._);const F=`class {}

<ebay-number-input
    a11y-delete-text="Delete item"
    on-keydown("emit", "keydown")
    on-keyup("emit", "keyup")
    on-focus("emit", "focus")
    on-blur("emit", "blur")
    on-keypress("emit", "keypress")
    on-change("emit", "change")
    on-input-change("emit", "input-change")
    on-delete-click("emit", "delete-click")
    on-increment("emit", "increment")
    on-decrement("emit", "decrement")
    aria-label="Enter a number"
    ...input
/>
`,V="LIrE2gH",g=h.t(V);f.r(V,()=>g);const L={};g._=k(function(a,t,e,i,n,x){r(o,p.i(()=>{p.a("label",{renderBody:y=>{y.t("Enter a number",i)}})},{min:0,max:100,...a,label:void 0}),t,e,"0",[["keydown","emit",!1,["keydown"]],["keyup","emit",!1,["keyup"]],["focus","emit",!1,["focus"]],["blur","emit",!1,["blur"]],["keypress","emit",!1,["keypress"]],["change","emit",!1,["change"]],["input-change","emit",!1,["input-change"]],["delete-click","emit",!1,["delete-click"]],["increment","emit",!1,["increment"]],["decrement","emit",!1,["decrement"]]])},{t:V},L);g.Component=v(L,g._);const G=`class {}

<ebay-number-input
    on-keydown("emit", "keydown")
    on-keyup("emit", "keyup")
    on-focus("emit", "focus")
    on-blur("emit", "blur")
    on-keypress("emit", "keypress")
    on-change("emit", "change")
    on-input-change("emit", "input-change")
    on-delete-click("emit", "delete-click")
    on-increment("emit", "increment")
    on-decrement("emit", "decrement")
    min=0
    max=100
    ...input
>
    <@label>Enter a number</@label>
</ebay-number-input>
`,pe={title:"form input/ebay-number-input",component:o,parameters:{docs:{description:{component:q}}},argTypes:{fluid:{type:"boolean",control:{type:"boolean"}},inputSize:{options:["regular","large"],type:{category:"Options"},description:'either "regular" or "large". If large, then renders larger sized textbox',table:{defaultValue:{summary:"regular"}}},multiline:{type:"boolean",control:{type:"boolean"},description:"renders a multi-line texbox if true"},invalid:{type:"boolean",control:{type:"boolean"},description:"indicates a field-level error with red border if true"},"aria-label":{type:"string",control:{type:"Options"},description:"Either this or @label is required. Renders text for screen readers"},label:{description:"Either this or aria-label is required. Renders label inside input if set",control:{type:"text"},table:{category:"@attribute tags",defaultValue:{summary:""}}},a11yDeleteText:{control:{type:"text"},description:"Localized text for delete button. Shows delete button when value is 1"},"on-change":{action:"on-change",description:"Triggered whenever the value of the input changes",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value }"}}},"on-input-change":{action:"on-input-change",description:"Triggered when the value of the input is changed",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value }"}}},"on-focus":{action:"on-focus",description:"Triggered on focus",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value }"}}},"on-blur":{action:"on-blur",description:"Triggered on blur",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value }"}}},"on-keypress":{action:"on-keypress",description:"Triggered on keypress",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value }"}}},"on-keyup":{action:"on-keyup",description:"Triggered on keup",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value }"}}},"on-keydown":{action:"on-keydown",description:"Triggered on keydown",table:{category:"Events",defaultValue:{summary:"{ originalEvent, value }"}}},onIncrement:{action:"on-increment",description:"Triggered when increment button is clicked",table:{category:"Events",defaultValue:{summary:""}}},onDecrement:{action:"on-decrement",description:"Triggered when decrement button is clicked",table:{category:"Events",defaultValue:{summary:""}}},onDelete:{action:"on-delete",description:"Triggered when delete button is clicked",table:{category:"Events",defaultValue:{summary:""}}}}},l=a=>({input:a,component:d});l.args={};l.parameters={docs:{source:{code:j}}};const m=a=>({input:a,component:b});m.args={};m.parameters={docs:{source:{code:F}}};const c=a=>({input:a,component:g});c.args={};c.parameters={docs:{source:{code:G}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: args,
  component: defaultTemplate
})`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: args,
  component: withDeleteTemplate
})`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: args,
  component: withLabelTemplate
})`,...c.parameters?.docs?.source}}};const de=["Default","withDelete","withLabel"];export{l as Default,de as __namedExportsOrder,pe as default,m as withDelete,c as withLabel};
