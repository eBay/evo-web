import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{n}from"./storybook-code-source-DlBTenms.js";import{n as r,t as i}from"./utils-C7m-hPxw.js";import{c as ee,f as a,h as o,l as te,n as s,r as c,t as l,u}from"./registry-95LfxIAE.js";import{t as d}from"./render-tag-hXgrwudm.js";import{t as ne}from"./dynamic-tag-CCbAf3a9.js";import{t as f}from"./const-element-BfQ4jh6r.js";import{n as re,t as ie}from"./ebay-textbox-4Woy562k.js";var ae;function p(){return(p=t((()=>{ae=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
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
`})))()}var m;function h(){return(h=t((()=>{m=class extends Marko.Component{onCreate(e){this.state={count:this.countFromValue(e.value)}}onInput(e){typeof window>`u`||(this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout(()=>{this.state.count=this.countFromValue(e.value),this.emit(`change`,{count:this.state.count,inputAriaLive:this.state.count>=e.max?`polite`:`off`})},500))}countFromValue(e){return typeof e==`string`?[...e].length:typeof e==`number`?e:0}}})))()}var g,_,v,y,b,x,S,C,w;function T(){return(T=t((()=>{g=u(),ee(),_=e(ne()),v=e(a()),h(),y=e(s()),b=l(),x=e(c()),S=`u`,C=(0,g.t)(S),(0,b.r)(S,()=>C),w=m,C._=(0,y.default)(function(e,t,n,r,i,ee){let{renderBody:a,max:o,clippedText:s,value:c,...l}=e;t.be(`span`,(0,v.default)(te(l)),`0`,r,null,4),a?(0,_.default)(t,a,null,null,null,null,n,`1`):(t.t(i.count,r),t.t(`/`,r),t.t(o,r),s&&(t.be(`span`,{class:`clipped`},`2`,r,null,1),t.t(s,r),t.ee())),t.ee()},{t:S},w),C.Component=(0,x.default)(w,C._)})))()}var E,D,O,k,A,j,M,N,P,F,I;function L(){return(L=t((()=>{E=u(),D=e(f()),re(),O=e(d()),T(),k=e(s()),A=l(),j=e(c()),M=`d5LY2Zt`,N=(0,E.t)(M),P=(0,D.default)(`label`,{class:`field__label field__label--stacked`,for:`my-input`},1).t(`Field Label`),F=(0,D.default)(`span`,{id:`my-input-description`},1).t(`Brief description`),(0,A.r)(M,()=>N),I={onCreate(){this.state={inputValue:``,inputAriaLive:null}},onTextChange({value:e}){this.state.inputValue=e},onCharCountChange(e){e&&(this.state.inputAriaLive=e.inputAriaLive,this.emit(`change`,{count:e.count,inputAriaLive:e.inputAriaLive}))}},N._=(0,k.default)(function(e,t,n,r,i,ee){let{max:a=120,clippedText:o}=e;t.be(`span`,{class:`field`},`0`,r,null,1),t.n(P,r),t.be(`span`,{class:`field__control`},`2`,r,null,1),(0,O.default)(ie,{value:i.inputValue,type:`text`,ariaDescribedby:`my-input-description my-input-charcount`,class:`textbox__control`,id:`my-input`,ariaLive:i.inputAriaLive},t,n,`3`,[[`keyup`,`onTextChange`,!1],[`change`,`onTextChange`,!1]]),t.ee(),t.be(`div`,{class:`field__description field__description--group`},`4`,r,null,1),t.n(F,r),(0,O.default)(C,{id:`my-input-charcount`,value:i.inputValue,max:a,clippedText:o},t,n,`6`,[[`change`,`onCharCountChange`,!1]]),t.ee(),t.ee()},{t:M},I),N.Component=(0,j.default)(I,N._)})))()}var oe;function R(){return(R=t((()=>{oe=`export interface Input {
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
`})))()}var z,B,V,H,U,W,G,K,q,J,Y;function se(){return(se=t((()=>{z=u(),B=e(f()),re(),V=e(d()),T(),H=e(o()),U=e(s()),W=l(),G=e(c()),K=`hsYSHu4`,q=(0,z.t)(K),J=(0,B.default)(`label`,{class:`field__label field__label--stacked`,for:`my-input`},1).t(`Field Label`),(0,W.r)(K,()=>q),Y={onCreate(){this.state={inputValue:``,inputAriaLive:null,charCount:0}},onTextChange({value:e}){this.state.inputValue=e},onCharCountChange(e){e&&(this.state.inputAriaLive=e.inputAriaLive,this.state.charCount=e.count,this.emit(`change`,{count:e.count,inputAriaLive:e.inputAriaLive}))}},q._=(0,U.default)(function(e,t,n,r,i,ee){let{max:a=120}=e;t.be(`span`,{class:`field`},`0`,r,null,1),t.n(J,r),t.be(`span`,{class:`field__control`},`2`,r,null,1),(0,V.default)(ie,{value:i.inputValue,type:`text`,ariaDescribedby:`my-input-charcount`,class:`textbox__control`,id:`my-input`,ariaLive:i.inputAriaLive},t,n,`3`,[[`keyup`,`onTextChange`,!1],[`change`,`onTextChange`,!1]]),t.ee(),t.be(`div`,{class:(0,H.default)([`field__description`,`field__description--group`,i.charCount>a&&`field__description--attention`])},`4`,r,null,1),(0,V.default)(C,{id:`my-input-charcount`,value:i.inputValue,max:a,renderBody:e=>{e.t(i.charCount,r),e.t(` of `,r),e.t(a,r),e.t(` (`,r),e.t(a-i.charCount,r),e.t(` remaining)`,r)}},t,n,`5`,[[`change`,`onCharCountChange`,!1]]),t.ee(),t.ee()},{t:K},Y),q.Component=(0,G.default)(Y,q._)})))()}var ce;function le(){return(le=t((()=>{ce=`export interface Input {
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
`})))()}var ue,de,X,Z,Q,fe;function $(){return($=t((()=>{p(),T(),L(),R(),se(),le(),ue=e=>({input:i(e)}),de={title:`building blocks/ebay-character-count`,component:C,parameters:{docs:{description:{component:ae}}},argTypes:{renderBody:{description:`If set, will override the default body content`},value:{type:`string|number`,control:{type:`text`},description:`String to count characters from, or a number representing the current character count`},max:{type:{name:`number`,required:!0},control:{type:`number`},description:"Maximum number of characters allowed in the input, we allow users to go over this limit but `aria-live` should be set to `polite`."},clippedText:{type:`string`,control:{type:`text`},description:`With default body content, clipped text should be provided after the character count for screen readers to announce.`},onChange:{action:`on-change`,description:`Triggered when the character count changes. Debounced by 500ms.`,table:{category:`Events`,defaultValue:{summary:`{ count, inputAriaLive }`}}}}},X=ue.bind({}),X.args={value:`Hello world`,clippedText:`characters remaining`,max:120},X.parameters={docs:{source:{code:n(`ebay-character-count`,X.args)}}},Z=r(N,oe),Q=r(q,ce),fe=[`Default`,`InField`,`CustomText`],X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: addRenderBodies(args)
})`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`buildExtensionTemplate(InFieldTemplate, InFieldCode)`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`buildExtensionTemplate(CustomTextTemplate, CustomTextCode)`,...Q.parameters?.docs?.source}}}})))()}$();export{Q as CustomText,X as Default,Z as InField,fe as __namedExportsOrder,de as default};