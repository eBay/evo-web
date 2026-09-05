import{b as C,a as W}from"./utils-DWCsNc5l.js";import{t as F}from"./storybook-code-source-CCz6reEH.js";import{v as S,b as _,_ as E,c as T}from"./defineComponent-B-Bg3Ud2.js";import{p as N,g as j,a as G,f as q}from"./index-B2OeNYFf.js";import{_ as V}from"./index-B0g55DpA.js";import{_ as l}from"./render-tag-B9T2mz-j.js";import{_ as K}from"./index-VXQjeOGx.js";import{a as p}from"./attr-tag-Dvq4QMvY.js";import{_ as H}from"./index-CeRTVWM9.js";import{d as $,_ as Q}from"./index-mDQTD3RY.js";import{i as X}from"./dynamic-import-DdmK3sM_.js";import{D as Z}from"./index-BVXY2btv.js";import{_ as ee}from"./index-Cw3bSwrm.js";import{_ as te}from"./const-element-Ea3wmYuQ.js";import"./_commonjsHelpers-Cpj98o6Y.js";/* empty css             */import"./index-Qtpjd4O_.js";/* empty css                    */import"./dynamic-tag-B3Rndxlm.js";import"./style-value-D9hyxyYb.js";import"./index-CL8ZzwFK.js";import"./index-BnD7O0EG.js";import"./index-o98Za02-.js";/* empty css               *//* empty css             */import"./index-BmRbtDLs.js";import"./index-eAGEw84U.js";import"./of-fallback-DrWEmKV1.js";import"./index-CNiudnPv.js";import"./index-CJDBRdqY.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CV1wlU-t.js";import"./index-CuXUxThH.js";import"./index-D4_UUNUd.js";const ae=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-date-textbox
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.2.0
    </span>
</h1>

Date textbox component, used as an alternative method for entering dates instead of \`<input type="date">\`.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/form-input-ebay-date-textbox--documentation)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/form-input-ebay-date-textbox--documentation)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/ebay-date-textbox/examples)
`,ne=600;class oe extends Marko.Component{onCreate(){this.state={numMonths:1,firstSelected:null,secondSelected:null,popover:!1}}onMount(){this.expander=new X(this.el,{hostSelector:".ebay-date-textbox--main > .icon-btn",contentSelector:".date-textbox__popover",expandOnClick:!0,autoCollapse:!0}),this.dropdownUtil=new Z(this.el,this.getEl("popover"))}onDestroy(){this.expander?.destroy(),this.dropdownUtil?.cleanup()}onInput(e){e.value!==void 0&&(this.state.firstSelected=$(e.value)),e.rangeEnd!==void 0&&(this.state.secondSelected=$(e.rangeEnd)),e.range||(this.state.secondSelected=null)}calculateNumMonths(){this.state.numMonths=document.documentElement.clientWidth<ne?1:2}handleInputChange(e,{value:t}){let n=N(t,this.input.locale);if(n===null){this.emit("invalid-date",{value:t,index:e});return}e===0?this.state.firstSelected=n:this.state.secondSelected=n,this.emitSelectedChange()}openPopover(){this.calculateNumMonths(),this.state.popover=!0,this.dropdownUtil.show()}closePopover(){this.state.popover=!1,this.dropdownUtil.hide()}onPopoverSelect({iso:e}){const{firstSelected:t,secondSelected:n}=this.state;if(this.state.firstSelected=e,this.input.range){const a=t||n;t&&n?this.state.secondSelected=null:a&&(a<e?(this.state.firstSelected=a,this.state.secondSelected=e):this.state.secondSelected=a,this.input.collapseOnSelect&&(this.expander.expanded=!1,this.focusCalendarButton()))}else this.input.collapseOnSelect&&(this.expander.expanded=!1,this.focusCalendarButton());this.emitSelectedChange()}focusCalendarButton(){this.getComponent("mainTextbox")?.getEl("iconBtn")?.focus()}onInputKeyup({originalEvent:e}){if(!/^\d$/.test(e.key))return;const t=e.target,{value:n}=t;if(t.selectionStart===n.length){const{o:a,s:d}=j(this.input.locale);let r=0,s=0;for(let c;~(c=n.indexOf(d[r],s));)s=c+d[r].length,r++;n.length-s===(a[r]==="y"?4:2)&&(t.value+=d[r]??"")}}emitSelectedChange(){this.emit("change",this.input.range?{rangeStart:this.state.firstSelected,rangeEnd:this.state.secondSelected}:{selected:this.state.firstSelected})}}const k="uptpD_U",i=S.t(k);_.r(k,()=>i);const Y=oe;i._=E(function(o,e,t,n,a,d){const{a11yOpenPopoverText:r="open calendar",range:s,inputPlaceholderText:c=G(o.locale),disabled:D,textbox:f,...R}=o,[z,P]=Array.isArray(c)?c:[c,c],[A,U]=Array.isArray(f)?f:[f,f],L=g=>g?q(g,o.locale):"";e.be("span",{class:"date-textbox"},"0",n,null,1,{"onexpander-expand":t.d("expander-expand","openPopover",!1),"onexpander-collapse":t.d("expander-collapse","closePopover",!1)}),s&&l(V,{placeholder:z,disabled:D,value:L(a.firstSelected),...A},e,t,"1",[["blur","handleInputChange",!1,[0]],["keyup","onInputKeyup",!1]]),l(V,p.i(()=>{p.a("postfixIcon",{renderBody:g=>{l(K,{},g,t,"2")}})},{class:"ebay-date-textbox--main",placeholder:P,buttonAriaLabel:r,value:L(s?a.secondSelected:a.firstSelected),disabled:D,...U,postfixIcon:void 0}),e,t,"@mainTextbox",[["blur","handleInputChange",!1,[s?1:0]],["keyup","onInputKeyup",!1]]),e.be("div",{hidden:!a.popover,class:"date-textbox__popover"},"@popover",n,null,0),a.popover&&l(H,{to:typeof window=="object"&&window,__events:["on","resize"]},e,t,"3",[["resize","calculateNumMonths",!1]]),l(Q,{...R,range:s,interactive:!0,navigable:!0,numMonths:a.numMonths,selected:a.firstSelected&&a.secondSelected?[a.firstSelected,a.secondSelected]:a.firstSelected||a.secondSelected||void 0},e,t,"4",[["select","onPopoverSelect",!1]]),e.ee(),e.ee()},{t:k},Y);i.Component=T(Y,i._);const I="gd0gq_s",m=S.t(I);_.r(I,()=>m);const B={};m._=E(function(o,e,t,n,a,d){l(i,p.i(()=>{p.a("textbox",{placeholder:"JJJJ/MM/DD",floatingLabel:"Begin"}),p.a("textbox",{placeholder:"JJJJ/MM/DD",floatingLabel:"Einde"})},{disableBefore:new Date,range:!0,locale:"af",getA11yShowMonthText:r=>`Gaan na ${r}`,a11ySelectedText:"Geselekteerde",a11yRangeStartText:"Reeks begin",a11yInRangeText:"Binne bereik",a11yRangeEndText:"Reeks einde",...o,textbox:void 0}),e,t,"0",[["change","emit",!1,["change"]]])},{t:I,s:!0},B);m.Component=T(B,m._);const re=`<ebay-date-textbox
    disableBefore=new Date()
    range
    locale="af"
    getA11yShowMonthText=((monthName) => \`Gaan na \${monthName}\`)
    a11ySelectedText="Geselekteerde"
    a11yRangeStartText="Reeks begin"
    a11yInRangeText="Binne bereik"
    a11yRangeEndText="Reeks einde"
    on-change("emit", "change")
    ...input
>
    <@textbox placeholder="JJJJ/MM/DD" floating-label="Begin"/>
    <@textbox placeholder="JJJJ/MM/DD" floating-label="Einde"/>
</ebay-date-textbox>
`,w="W4_uJQG",b=S.t(w);_.r(w,()=>b);const J={onCreate(){this.state={value:void 0,rangeEnd:void 0}},handleChange(o){"selected"in o&&o.selected?this.state.value=o.selected:("rangeStart"in o&&o.rangeStart&&(this.state.value=o.rangeStart),"rangeEnd"in o&&o.rangeEnd&&(this.state.rangeEnd=o.rangeEnd))},clear(){this.state.value=void 0,this.input.range&&(this.state.rangeEnd=void 0)}};b._=E(function(o,e,t,n,a,d){l(i,{value:a.value,rangeEnd:a.rangeEnd,...o},e,t,"0",[["change","handleChange",!1]]),l(ee,{renderBody:r=>{r.t("Clear",n)}},e,t,"1",[["click","clear",!1]])},{t:w},J);b.Component=T(J,b._);const le=`export interface Input {
    range?: boolean;
}
class {
    declare state: {
        value?: string;
        rangeEnd?: string;
    };
    onCreate() {
        this.state = {
            value: undefined,
            rangeEnd: undefined,
        };
    }

    handleChange(
        e:
            | { selected: string | null }
            | { rangeStart: string | null; rangeEnd: string | null },
    ) {
        if ("selected" in e && e.selected) {
            this.state.value = e.selected;
        } else {
            if ("rangeStart" in e && e.rangeStart) {
                this.state.value = e.rangeStart;
            }
            if ("rangeEnd" in e && e.rangeEnd) {
                this.state.rangeEnd = e.rangeEnd;
            }
        }
    }

    clear() {
        this.state.value = undefined;
        if (this.input.range) {
            this.state.rangeEnd = undefined;
        }
    }
}

<ebay-date-textbox
    value=state.value
    rangeEnd=state.rangeEnd
    onChange("handleChange")
    ...input
/>

<ebay-button onClick("clear")>
    Clear
</ebay-button>
`,M="pVkUEe4",h=S.t(M),se=te("strong",null,1).t("YYYY-MM-DD");_.r(M,()=>h);const O={onCreate(){this.state={invalid:!1}},onError(){this.state.invalid=!0},onChange(){this.state.invalid=!1}};h._=E(function(o,e,t,n,a,d){e.be("div",{class:"field"},"0",n,null,1),e.be("label",{for:t.elId("textbox")},"1",n,null,0),e.t("Enter Date",n),e.ee(),e.be("div",null,"2",n,null,0),l(i,p.i(()=>{p.a("textbox",{id:t.elId("textbox"),invalid:a.invalid,ariaLabelledby:t.elId("error-label")})}),e,t,"3",[["invalid-date","onError",!1],["change","onChange",!1]]),e.ee(),a.invalid&&(e.be("div",{class:"field__description field__description--attention",id:t.elId("error-label")},"4",n,null,1),e.t("Use ",n),e.n(se,n),e.t(" format",n),e.ee()),e.ee()},{t:M},O);h.Component=T(O,h._);const ie=`class {
    declare state: {
        invalid: boolean;
    };
    onCreate() {
        this.state = {
            invalid: false,
        };
    }

    onError() {
        this.state.invalid = true;
    }

    onChange() {
        this.state.invalid = false;
    }
}

<div class="field">
    <label for:scoped="textbox">
        Enter Date
    </label>
    <div>
        <ebay-date-textbox onInvalid-date("onError") on-change("onChange")>
            <@textbox
                id:scoped="textbox"
                invalid=state.invalid
                aria-labelledby:scoped="error-label"
            />
        </ebay-date-textbox>
    </div>
    <if(state.invalid)>
        <div
            class="field__description field__description--attention"
            id:scoped="error-label"
        >
            Use
            <strong>YYYY-MM-DD</strong>
             format
        </div>
    </if>
</div>
`,de=o=>({input:W(o)}),Fe={title:"form input/ebay-date-textbox",component:i,parameters:{docs:{description:{component:ae}}},argTypes:{value:{type:"date",control:{type:"date"},description:"Selected date",table:{defaultValue:{summary:"undefined"}}},range:{type:"boolean",control:{type:"boolean"},description:"True if selecting a range, false if a single value",table:{defaultValue:{summary:"false"}}},todayISO:{type:"date",control:{type:"date"},description:"The current date in ISO format",table:{defaultValue:{summary:"Today's date"}}},floatingLabel:{type:"text|array",control:{type:"object"},description:'If set then shows this text as the floating label. If separate floating labels are required for a range display, use an array of two strings (i. e. `["Start", "End"]`)..'},rangeEnd:{type:"date",control:{type:"date"},description:"If range is true, the end of the selected range",table:{defaultValue:{summary:"undefined"}}},locale:{type:"text",control:{type:"text"},description:"Locale of the date picker",table:{defaultValue:{summary:"navigator.language || 'en-US'"}}},disabled:{type:"boolean",control:{type:"boolean"},description:"If true, the textbox is disabled and popover cannot be opened.",table:{defaultValue:{summary:"false"}}},disableBefore:{type:"date",control:{type:"date"},description:"First date that may be selected. Should be an ISO string, but also accepts a timestamp or `Date` object",table:{defaultValue:{summary:"undefined"}}},disableAfter:{type:"date",control:{type:"date"},description:"Last date that may be selected. Should be an ISO string, but also accepts a timestamp or `Date` object",table:{defaultValue:{summary:"undefined"}}},disableWeekdays:{type:"array",control:{type:"array"},description:"List of weekdays that are disabled. Must be an array of numbers, where Sunday is `0` and Saturday is `6`",table:{defaultValue:{summary:"undefined"}}},disableList:{type:"array",control:{type:"array"},description:"List of specific days that are disabled. Should be a list of ISO strings, but also accepts timestamps or `Date` objects",table:{defaultValue:{summary:"undefined"}}},collapseOnSelect:{type:"boolean",control:{type:"boolean"},description:"Whether the calendar should collapse after a date is selected",table:{defaultValue:{summary:"false"}}},getA11yShowMonthText:{type:"callback",control:{type:"callback"},description:"Function used to get the text for showing previous and next months",table:{defaultValue:{summary:"(monthName) => `Show ${monthName}`"}}},a11ySelectedText:{type:"text",control:{type:"text"},description:"Localized, text to be read by screen readers when a date is selected",table:{defaultValue:{summary:"selected"}}},a11yRangeStartText:{type:"text",control:{type:"text"},description:"Localized, text to be read by screen readers when a date is the start of a range",table:{defaultValue:{summary:"start of range"}}},a11yInRangeText:{type:"text",control:{type:"text"},description:"Localized, text to be read by screen readers when a date is in a range",table:{defaultValue:{summary:"in range"}}},a11yRangeEndText:{type:"text",control:{type:"text"},description:"Localized, text to be read by screen readers when a date is the end of a range",table:{defaultValue:{summary:"end of range"}}},a11ySeparator:{type:"text",control:{type:"text"},description:"Localized, text to be read by screen readers to separate properties",table:{defaultValue:{summary:" - "}}},a11yOpenPopoverText:{type:"text",control:{type:"text"},description:"Localized, a11y label for the button that opens the calendar popover",table:{defaultValue:{summary:"open calendar"}}},inputPlaceholderText:{type:"text|array",control:{type:"object"},description:'Text for the input placeholder. Should indicate that users need to enter dates in ISO format. If separate placeholders are required for a range display, use an array of two strings (i. e. `["Start (MM/DD/YYYY)", "End (MM/DD/YYYY)"]`).',table:{defaultValue:{summary:'"MM/DD/YYYY"'}}},localizeFormat:{type:"boolean",control:{type:"boolean"},description:"_**Deprecated— will be default after next major release**_ Localize the date format",table:{defaultValue:{summary:"false"}}},textbox:{name:"@textbox",description:"Proxy for textbox attributes— includes all attributes for `<ebay-textbox>`",table:{category:"@attribute tags"}},onChange:{action:"on-change",description:"Triggered when the selection changes",table:{category:"Events",defaultValue:{summary:"{ selected } | { rangeStart, rangeEnd }"}}},"onInvalid-date":{action:"on-invalid-date",description:"Triggered when the user manually types an invalid date",table:{category:"Events"}}}},u=de.bind({});u.parameters={docs:{source:{code:F("ebay-date-textbox",{})}}};const y=C(m,re),x=C(b,le),v=C(h,ie);u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: addRenderBodies(args)
})`,...u.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:"buildExtensionTemplate(LocalizedTemplate, LocalizedTemplateCode)",...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:"buildExtensionTemplate(WithClearTemplate, WithClearTemplateCode)",...x.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:"buildExtensionTemplate(InField, InFieldCode)",...v.parameters?.docs?.source}}};const Ne=["Default","Localized","WithClear","InFieldExample"];export{u as Default,v as InFieldExample,y as Localized,x as WithClear,Ne as __namedExportsOrder,Fe as default};
