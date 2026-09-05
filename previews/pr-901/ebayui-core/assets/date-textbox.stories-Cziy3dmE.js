import{b as k,a as j}from"./utils-DWCsNc5l.js";import{t as G}from"./storybook-code-source-CCz6reEH.js";import{v as _,b as E,_ as T,e as q,c as C}from"./defineComponent-B-Bg3Ud2.js";import{p as K,g as H,a as Q,f as X}from"./index-B2OeNYFf.js";import{_ as $}from"./index-B0g55DpA.js";import{_ as s}from"./render-tag-B9T2mz-j.js";import{_ as Z}from"./index-VXQjeOGx.js";import{a as p}from"./attr-tag-Dvq4QMvY.js";import{_ as ee}from"./index-CeRTVWM9.js";import{d as Y,_ as te}from"./index-DsCRWdbk.js";import{i as ae}from"./dynamic-import-DdmK3sM_.js";import{D as ne}from"./index-BVXY2btv.js";import{_ as oe}from"./index-Cw3bSwrm.js";import{_ as re}from"./const-element-Ea3wmYuQ.js";import"./_commonjsHelpers-Cpj98o6Y.js";/* empty css             */import"./index-Qtpjd4O_.js";/* empty css                    */import"./dynamic-tag-B3Rndxlm.js";import"./style-value-D9hyxyYb.js";import"./index-CL8ZzwFK.js";import"./index-BnD7O0EG.js";import"./index-o98Za02-.js";/* empty css               *//* empty css             */import"./index-BmRbtDLs.js";import"./index-eAGEw84U.js";import"./of-fallback-DrWEmKV1.js";import"./index-CNiudnPv.js";import"./index-CJDBRdqY.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CV1wlU-t.js";import"./index-CuXUxThH.js";import"./index-D4_UUNUd.js";const se=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`,le=600;class ie extends Marko.Component{onCreate(){this.state={numMonths:1,firstSelected:null,secondSelected:null,popover:!1}}onMount(){this.expander=new ae(this.el,{hostSelector:".ebay-date-textbox--main > .icon-btn",contentSelector:".date-textbox__popover",expandOnClick:!0,autoCollapse:!0}),this.dropdownUtil=new ne(this.el,this.getEl("popover"),{strategy:this.input.strategy??"absolute"})}onDestroy(){this.expander?.destroy(),this.dropdownUtil?.cleanup()}onInput(e){e.value!==void 0&&(this.state.firstSelected=Y(e.value)),e.rangeEnd!==void 0&&(this.state.secondSelected=Y(e.rangeEnd)),e.range||(this.state.secondSelected=null)}calculateNumMonths(){this.state.numMonths=document.documentElement.clientWidth<le?1:2}handleInputChange(e,{value:t}){let n=K(t,this.input.locale);if(n===null){this.emit("invalid-date",{value:t,index:e});return}e===0?this.state.firstSelected=n:this.state.secondSelected=n,this.emitSelectedChange()}openPopover(){this.calculateNumMonths(),this.state.popover=!0,this.dropdownUtil.show()}closePopover(){this.state.popover=!1,this.dropdownUtil.hide()}onPopoverSelect({iso:e}){const{firstSelected:t,secondSelected:n}=this.state;if(this.state.firstSelected=e,this.input.range){const a=t||n;t&&n?this.state.secondSelected=null:a&&(a<e?(this.state.firstSelected=a,this.state.secondSelected=e):this.state.secondSelected=a,this.input.collapseOnSelect&&(this.expander.expanded=!1,this.focusCalendarButton()))}else this.input.collapseOnSelect&&(this.expander.expanded=!1,this.focusCalendarButton());this.emitSelectedChange()}focusCalendarButton(){this.getComponent("mainTextbox")?.getEl("iconBtn")?.focus()}onInputKeyup({originalEvent:e}){if(!/^\d$/.test(e.key))return;const t=e.target,{value:n}=t;if(t.selectionStart===n.length){const{o:a,s:d}=H(this.input.locale);let r=0,l=0;for(let c;~(c=n.indexOf(d[r],l));)l=c+d[r].length,r++;n.length-l===(a[r]==="y"?4:2)&&(t.value+=d[r]??"")}}emitSelectedChange(){this.emit("change",this.input.range?{rangeStart:this.state.firstSelected,rangeEnd:this.state.secondSelected}:{selected:this.state.firstSelected})}}const I="uptpD_U",i=_.t(I);E.r(I,()=>i);const B=ie;i._=T(function(o,e,t,n,a,d){const{a11yOpenPopoverText:r="open calendar",range:l,inputPlaceholderText:c=Q(o.locale),disabled:L,strategy:P,textbox:g,...U}=o,[W,A]=Array.isArray(c)?c:[c,c],[F,N]=Array.isArray(g)?g:[g,g],V=y=>y?X(y,o.locale):"";e.be("span",{class:"date-textbox"},"0",n,null,1,{"onexpander-expand":t.d("expander-expand","openPopover",!1),"onexpander-collapse":t.d("expander-collapse","closePopover",!1)}),l&&s($,{placeholder:W,disabled:L,value:V(a.firstSelected),...F},e,t,"1",[["blur","handleInputChange",!1,[0]],["keyup","onInputKeyup",!1]]),s($,p.i(()=>{p.a("postfixIcon",{renderBody:y=>{s(Z,{},y,t,"2")}})},{class:"ebay-date-textbox--main",placeholder:A,buttonAriaLabel:r,value:V(l?a.secondSelected:a.firstSelected),disabled:L,...N,postfixIcon:void 0}),e,t,"@mainTextbox",[["blur","handleInputChange",!1,[l?1:0]],["keyup","onInputKeyup",!1]]),e.be("div",{hidden:!a.popover,class:q(["date-textbox__popover",P==="fixed"&&"date-textbox__popover--fixed"])},"@popover",n,null,0),a.popover&&s(ee,{to:typeof window=="object"&&window,__events:["on","resize"]},e,t,"3",[["resize","calculateNumMonths",!1]]),s(te,{...U,range:l,interactive:!0,navigable:!0,numMonths:a.numMonths,selected:a.firstSelected&&a.secondSelected?[a.firstSelected,a.secondSelected]:a.firstSelected||a.secondSelected||void 0},e,t,"4",[["select","onPopoverSelect",!1]]),e.ee(),e.ee()},{t:I},B);i.Component=C(B,i._);const w="gd0gq_s",b=_.t(w);E.r(w,()=>b);const R={};b._=T(function(o,e,t,n,a,d){s(i,p.i(()=>{p.a("textbox",{placeholder:"JJJJ/MM/DD",floatingLabel:"Begin"}),p.a("textbox",{placeholder:"JJJJ/MM/DD",floatingLabel:"Einde"})},{disableBefore:new Date,range:!0,locale:"af",getA11yShowMonthText:r=>`Gaan na ${r}`,a11ySelectedText:"Geselekteerde",a11yRangeStartText:"Reeks begin",a11yInRangeText:"Binne bereik",a11yRangeEndText:"Reeks einde",...o,textbox:void 0}),e,t,"0",[["change","emit",!1,["change"]]])},{t:w,s:!0},R);b.Component=C(R,b._);const de=`<ebay-date-textbox
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
`,M="W4_uJQG",f=_.t(M);E.r(M,()=>f);const J={onCreate(){this.state={value:void 0,rangeEnd:void 0}},handleChange(o){"selected"in o&&o.selected?this.state.value=o.selected:("rangeStart"in o&&o.rangeStart&&(this.state.value=o.rangeStart),"rangeEnd"in o&&o.rangeEnd&&(this.state.rangeEnd=o.rangeEnd))},clear(){this.state.value=void 0,this.input.range&&(this.state.rangeEnd=void 0)}};f._=T(function(o,e,t,n,a,d){s(i,{value:a.value,rangeEnd:a.rangeEnd,...o},e,t,"0",[["change","handleChange",!1]]),s(oe,{renderBody:r=>{r.t("Clear",n)}},e,t,"1",[["click","clear",!1]])},{t:M},J);f.Component=C(J,f._);const ce=`export interface Input {
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
`,D="pVkUEe4",h=_.t(D),pe=re("strong",null,1).t("YYYY-MM-DD");E.r(D,()=>h);const O={onCreate(){this.state={invalid:!1}},onError(){this.state.invalid=!0},onChange(){this.state.invalid=!1}};h._=T(function(o,e,t,n,a,d){e.be("div",{class:"field"},"0",n,null,1),e.be("label",{for:t.elId("textbox")},"1",n,null,0),e.t("Enter Date",n),e.ee(),e.be("div",null,"2",n,null,0),s(i,p.i(()=>{p.a("textbox",{id:t.elId("textbox"),invalid:a.invalid,ariaLabelledby:t.elId("error-label")})}),e,t,"3",[["invalid-date","onError",!1],["change","onChange",!1]]),e.ee(),a.invalid&&(e.be("div",{class:"field__description field__description--attention",id:t.elId("error-label")},"4",n,null,1),e.t("Use ",n),e.n(pe,n),e.t(" format",n),e.ee()),e.ee()},{t:D},O);h.Component=C(O,h._);const ue=`class {
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
`,z=o=>({input:j(o)}),Ge={title:"form input/ebay-date-textbox",component:i,parameters:{docs:{description:{component:se}}},argTypes:{value:{type:"date",control:{type:"date"},description:"Selected date",table:{defaultValue:{summary:"undefined"}}},range:{type:"boolean",control:{type:"boolean"},description:"True if selecting a range, false if a single value",table:{defaultValue:{summary:"false"}}},todayISO:{type:"date",control:{type:"date"},description:"The current date in ISO format",table:{defaultValue:{summary:"Today's date"}}},floatingLabel:{type:"text|array",control:{type:"object"},description:'If set then shows this text as the floating label. If separate floating labels are required for a range display, use an array of two strings (i. e. `["Start", "End"]`)..'},rangeEnd:{type:"date",control:{type:"date"},description:"If range is true, the end of the selected range",table:{defaultValue:{summary:"undefined"}}},locale:{type:"text",control:{type:"text"},description:"Locale of the date picker",table:{defaultValue:{summary:"navigator.language || 'en-US'"}}},strategy:{options:["fixed","absolute"],control:{type:"select"},description:"Swap between fixed and absolute positioning strategy. Use fixed when the popover is contained in an overflow and needs to remain visible as the page scrolls."},disabled:{type:"boolean",control:{type:"boolean"},description:"If true, the textbox is disabled and popover cannot be opened.",table:{defaultValue:{summary:"false"}}},disableBefore:{type:"date",control:{type:"date"},description:"First date that may be selected. Should be an ISO string, but also accepts a timestamp or `Date` object",table:{defaultValue:{summary:"undefined"}}},disableAfter:{type:"date",control:{type:"date"},description:"Last date that may be selected. Should be an ISO string, but also accepts a timestamp or `Date` object",table:{defaultValue:{summary:"undefined"}}},disableWeekdays:{type:"array",control:{type:"array"},description:"List of weekdays that are disabled. Must be an array of numbers, where Sunday is `0` and Saturday is `6`",table:{defaultValue:{summary:"undefined"}}},disableList:{type:"array",control:{type:"array"},description:"List of specific days that are disabled. Should be a list of ISO strings, but also accepts timestamps or `Date` objects",table:{defaultValue:{summary:"undefined"}}},collapseOnSelect:{type:"boolean",control:{type:"boolean"},description:"Whether the calendar should collapse after a date is selected",table:{defaultValue:{summary:"false"}}},getA11yShowMonthText:{type:"callback",control:{type:"callback"},description:"Function used to get the text for showing previous and next months",table:{defaultValue:{summary:"(monthName) => `Show ${monthName}`"}}},a11ySelectedText:{type:"text",control:{type:"text"},description:"Localized, text to be read by screen readers when a date is selected",table:{defaultValue:{summary:"selected"}}},a11yRangeStartText:{type:"text",control:{type:"text"},description:"Localized, text to be read by screen readers when a date is the start of a range",table:{defaultValue:{summary:"start of range"}}},a11yInRangeText:{type:"text",control:{type:"text"},description:"Localized, text to be read by screen readers when a date is in a range",table:{defaultValue:{summary:"in range"}}},a11yRangeEndText:{type:"text",control:{type:"text"},description:"Localized, text to be read by screen readers when a date is the end of a range",table:{defaultValue:{summary:"end of range"}}},a11ySeparator:{type:"text",control:{type:"text"},description:"Localized, text to be read by screen readers to separate properties",table:{defaultValue:{summary:" - "}}},a11yOpenPopoverText:{type:"text",control:{type:"text"},description:"Localized, a11y label for the button that opens the calendar popover",table:{defaultValue:{summary:"open calendar"}}},inputPlaceholderText:{type:"text|array",control:{type:"object"},description:'Text for the input placeholder. Should indicate that users need to enter dates in ISO format. If separate placeholders are required for a range display, use an array of two strings (i. e. `["Start (MM/DD/YYYY)", "End (MM/DD/YYYY)"]`).',table:{defaultValue:{summary:'"MM/DD/YYYY"'}}},localizeFormat:{type:"boolean",control:{type:"boolean"},description:"_**Deprecated— will be default after next major release**_ Localize the date format",table:{defaultValue:{summary:"false"}}},textbox:{name:"@textbox",description:"Proxy for textbox attributes— includes all attributes for `<ebay-textbox>`",table:{category:"@attribute tags"}},onChange:{action:"on-change",description:"Triggered when the selection changes",table:{category:"Events",defaultValue:{summary:"{ selected } | { rangeStart, rangeEnd }"}}},"onInvalid-date":{action:"on-invalid-date",description:"Triggered when the user manually types an invalid date",table:{category:"Events"}}}},u=z.bind({});u.parameters={docs:{source:{code:G("ebay-date-textbox",{})}}};const m=z.bind({});m.args={strategy:"fixed"};const x=k(b,de),v=k(f,ce),S=k(h,ue);u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: addRenderBodies(args)
})`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: addRenderBodies(args)
})`,...m.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:"buildExtensionTemplate(LocalizedTemplate, LocalizedTemplateCode)",...x.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:"buildExtensionTemplate(WithClearTemplate, WithClearTemplateCode)",...v.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:"buildExtensionTemplate(InField, InFieldCode)",...S.parameters?.docs?.source}}};const qe=["Default","WithFixedStrategy","Localized","WithClear","InFieldExample"];export{u as Default,S as InFieldExample,x as Localized,v as WithClear,m as WithFixedStrategy,qe as __namedExportsOrder,Ge as default};
