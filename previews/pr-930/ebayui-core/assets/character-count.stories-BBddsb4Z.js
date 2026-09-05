import{b as A,a as F}from"./utils-DWCsNc5l.js";import{t as I}from"./storybook-code-source-CCz6reEH.js";import{v as h,b,_,p as E,c as g,e as B}from"./defineComponent-B-Bg3Ud2.js";import{_ as S}from"./dynamic-tag-B3Rndxlm.js";import{_ as D}from"./attrs-DH_qbVAN.js";import{_ as f}from"./const-element-Ea3wmYuQ.js";import{_ as T}from"./index-B0g55DpA.js";import{_ as m}from"./render-tag-B9T2mz-j.js";import"./_commonjsHelpers-Cpj98o6Y.js";/* empty css             */import"./index-Qtpjd4O_.js";/* empty css                    */import"./style-value-D9hyxyYb.js";const M=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
    <span>
        ebay-character-count
    </span>
    <span style="font-weight: normal; font-size: medium; margin-bottom: -15px;">
        DS v1.0.0
    </span>
</h1>

Button styled with core classes.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/building-blocks-ebay-character-count)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/building-blocks-ebay-character-count)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/ebay-character-count/examples)
`;class j extends Marko.Component{onCreate(e){this.state={count:this.countFromValue(e.value)}}onInput(e){typeof window>"u"||(this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout(()=>{this.state.count=this.countFromValue(e.value),this.emit("change",{count:this.state.count,inputAriaLive:this.state.count>=e.max?"polite":"off"})},500))}countFromValue(e){return typeof e=="string"?[...e].length:typeof e=="number"?e:0}}const x="PnUZvjj",l=h.t(x);b.r(x,()=>l);const L=j;l._=_(function(n,e,o,t,a,C){const{renderBody:r,max:i,clippedText:k,value:O,...w}=n;e.be("span",D(E(w)),"0",t,null,4),r?S(e,r,null,null,null,null,o,"1"):(e.t(a.count,t),e.t("/",t),e.t(i,t),k&&(e.be("span",{class:"clipped"},"2",t,null,1),e.t(k,t),e.ee())),e.ee()},{t:x},L);l.Component=g(L,l._);const y="d5LY2Zt",c=h.t(y),H=f("label",{class:"field__label field__label--stacked",for:"my-input"},1).t("Field Label"),R=f("span",{id:"my-input-description"},1).t("Brief description");b.r(y,()=>c);const V={onCreate(){this.state={inputValue:"",inputAriaLive:null}},onTextChange({value:n}){this.state.inputValue=n},onCharCountChange(n){n&&(this.state.inputAriaLive=n.inputAriaLive,this.emit("change",{count:n.count,inputAriaLive:n.inputAriaLive}))}};c._=_(function(n,e,o,t,a,C){const{max:r=120,clippedText:i}=n;e.be("span",{class:"field"},"0",t,null,1),e.n(H,t),e.be("span",{class:"field__control"},"2",t,null,1),m(T,{value:a.inputValue,type:"text",ariaDescribedby:"my-input-description my-input-charcount",class:"textbox__control",id:"my-input",ariaLive:a.inputAriaLive},e,o,"3",[["keyup","onTextChange",!1],["change","onTextChange",!1]]),e.ee(),e.be("div",{class:"field__description field__description--group"},"4",t,null,1),e.n(R,t),m(l,{id:"my-input-charcount",value:a.inputValue,max:r,clippedText:i},e,o,"6",[["change","onCharCountChange",!1]]),e.ee(),e.ee()},{t:y},V);c.Component=g(V,c._);const Y=`export interface Input {
    max?: number;
    clippedText?: string;
}
$ const { max = 120, clippedText } = input;

<span class="field">
    <label class="field__label field__label--stacked" for="my-input">
        Field Label
    </label>
    <span class="field__control">
        <ebay-textbox
            value=state.inputValue
            type="text"
            aria-describedby="my-input-description my-input-charcount"
            class="textbox__control"
            id="my-input"
            aria-live=state.inputAriaLive
            on-keyup("onTextChange")
            on-change("onTextChange")
        />
    </span>
    <div class="field__description field__description--group">
        <span id="my-input-description">
            Brief description
        </span>
        <ebay-character-count
            id="my-input-charcount"
            value=state.inputValue
            max=max
            clipped-text=clippedText
            on-change("onCharCountChange")
        />
    </div>
</span>
class {
    declare state: {
        inputValue: string;
        inputAriaLive: Marko.AriaAttributes["aria-live"];
    };
    onCreate() {
        this.state = {
            inputValue: "",
            inputAriaLive: null,
        };
    }
    onTextChange({ value }: { value: string }) {
        this.state.inputValue = value;
    }
    onCharCountChange(e?: {
        count: number;
        inputAriaLive: Marko.AriaAttributes["aria-live"];
    }) {
        if (e) {
            this.state.inputAriaLive = e.inputAriaLive;
            this.emit("change", {
                count: e.count,
                inputAriaLive: e.inputAriaLive,
            });
        }
    }
}
`,v="hsYSHu4",u=h.t(v),Z=f("label",{class:"field__label field__label--stacked",for:"my-input"},1).t("Field Label");b.r(v,()=>u);const $={onCreate(){this.state={inputValue:"",inputAriaLive:null,charCount:0}},onTextChange({value:n}){this.state.inputValue=n},onCharCountChange(n){n&&(this.state.inputAriaLive=n.inputAriaLive,this.state.charCount=n.count,this.emit("change",{count:n.count,inputAriaLive:n.inputAriaLive}))}};u._=_(function(n,e,o,t,a,C){const{max:r=120}=n;e.be("span",{class:"field"},"0",t,null,1),e.n(Z,t),e.be("span",{class:"field__control"},"2",t,null,1),m(T,{value:a.inputValue,type:"text",ariaDescribedby:"my-input-charcount",class:"textbox__control",id:"my-input",ariaLive:a.inputAriaLive},e,o,"3",[["keyup","onTextChange",!1],["change","onTextChange",!1]]),e.ee(),e.be("div",{class:B(["field__description","field__description--group",a.charCount>r&&"field__description--attention"])},"4",t,null,1),m(l,{id:"my-input-charcount",value:a.inputValue,max:r,renderBody:i=>{i.t(a.charCount,t),i.t(" of ",t),i.t(r,t),i.t(" (",t),i.t(r-a.charCount,t),i.t(" remaining)",t)}},e,o,"5",[["change","onCharCountChange",!1]]),e.ee(),e.ee()},{t:v},$);u.Component=g($,u._);const q=`export interface Input {
    max?: number;
}
$ const { max = 120 } = input;

<span class="field">
    <label class="field__label field__label--stacked" for="my-input">
        Field Label
    </label>
    <span class="field__control">
        <ebay-textbox
            value=state.inputValue
            type="text"
            aria-describedby="my-input-charcount"
            class="textbox__control"
            id="my-input"
            aria-live=state.inputAriaLive
            on-keyup("onTextChange")
            on-change("onTextChange")
        />
    </span>
    <div class=[
        "field__description",
        "field__description--group",
        state.charCount > max && "field__description--attention",
    ]>
        <ebay-character-count
            id="my-input-charcount"
            value=state.inputValue
            max=max
            on-change("onCharCountChange")
        >
            \${state.charCount} of \${max} (\${max - state.charCount} remaining)
        </ebay-character-count>
    </div>
</span>
class {
    declare state: {
        inputValue: string;
        inputAriaLive: Marko.AriaAttributes["aria-live"];
        charCount: number;
    };
    onCreate() {
        this.state = {
            inputValue: "",
            inputAriaLive: null,
            charCount: 0,
        };
    }
    onTextChange({ value }: { value: string }) {
        this.state.inputValue = value;
    }
    onCharCountChange(e?: {
        count: number;
        inputAriaLive: Marko.AriaAttributes["aria-live"];
    }) {
        if (e) {
            this.state.inputAriaLive = e.inputAriaLive;
            this.state.charCount = e.count;
            this.emit("change", {
                count: e.count,
                inputAriaLive: e.inputAriaLive,
            });
        }
    }
}
`,z=n=>({input:F(n)}),ie={title:"building blocks/ebay-character-count",component:l,parameters:{docs:{description:{component:M}}},argTypes:{renderBody:{description:"If set, will override the default body content"},value:{type:"string|number",control:{type:"text"},description:"String to count characters from, or a number representing the current character count"},max:{type:{name:"number",required:!0},control:{type:"number"},description:"Maximum number of characters allowed in the input, we allow users to go over this limit but `aria-live` should be set to `polite`."},clippedText:{type:"string",control:{type:"text"},description:"With default body content, clipped text should be provided after the character count for screen readers to announce."},onChange:{action:"on-change",description:"Triggered when the character count changes. Debounced by 500ms.",table:{category:"Events",defaultValue:{summary:"{ count, inputAriaLive }"}}}}},s=z.bind({});s.args={value:"Hello world",clippedText:"characters remaining",max:120};s.parameters={docs:{source:{code:I("ebay-character-count",s.args)}}};const p=A(c,Y),d=A(u,q),re=["Default","InField","CustomText"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: addRenderBodies(args)
})`,...s.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:"buildExtensionTemplate(InFieldTemplate, InFieldCode)",...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"buildExtensionTemplate(CustomTextTemplate, CustomTextCode)",...d.parameters?.docs?.source}}};export{d as CustomText,s as Default,p as InField,re as __namedExportsOrder,ie as default};
