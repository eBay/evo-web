import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{n}from"./storybook-code-source-DlBTenms.js";import{n as r,t as i}from"./utils-C7m-hPxw.js";import{h as a,n as o,r as s,t as c,u as l}from"./registry-95LfxIAE.js";import{t as u}from"./render-tag-hXgrwudm.js";import{t as d}from"./attr-tag--AgZ8oJt.js";import{t as f}from"./const-element-BfQ4jh6r.js";import{n as p,t as m}from"./ebay-button-ev-RMJXM.js";import{n as h,t as ee}from"./subscribe-i6MKJXfO.js";import{i as g,r as _}from"./dynamic-import-PU3hoq9-.js";import{n as te,t as ne}from"./dropdown-DXVak41I.js";import{i as re,n as ie,r as ae,t as oe}from"./ebay-calendar-BvKhkCfs.js";import{a as se,n as ce,o as le,r as ue,t as de}from"./dates-kH10SiJN.js";import{n as fe,t as pe}from"./ebay-textbox-4Woy562k.js";import{n as me,t as he}from"./ebay-calendar-24-icon-Dz0PNRIs.js";var ge;function _e(){return(_e=t((()=>{ge=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`})))()}function ve(){return(ve=t((()=>{})))()}function ye(){return(ye=t((()=>{ve()})))()}var be,v;function y(){return(y=t((()=>{g(),ue(),re(),te(),be=600,v=class extends Marko.Component{onCreate(){this.state={numMonths:1,firstSelected:null,secondSelected:null,popover:!1}}onMount(){this.expander=new _(this.el,{hostSelector:`.ebay-date-textbox--main > .icon-btn`,contentSelector:`.date-textbox__popover`,expandOnClick:!0,autoCollapse:!0}),this.dropdownUtil=new ne(this.el,this.getEl(`popover`),{strategy:this.input.strategy??`absolute`})}onDestroy(){this.expander?.destroy(),this.dropdownUtil?.cleanup()}onInput(e){e.value!==void 0&&(this.state.firstSelected=ae(e.value)),e.rangeEnd!==void 0&&(this.state.secondSelected=ae(e.rangeEnd)),e.range||(this.state.secondSelected=null)}calculateNumMonths(){this.state.numMonths=document.documentElement.clientWidth<be?1:2}handleInputChange(e,{value:t}){let n=se(t,this.input.locale);if(n===null){this.emit(`invalid-date`,{value:t,index:e});return}e===0?this.state.firstSelected=n:this.state.secondSelected=n,this.emitSelectedChange()}openPopover(){this.calculateNumMonths(),this.state.popover=!0,this.dropdownUtil.show()}closePopover(){this.state.popover=!1,this.dropdownUtil.hide()}onPopoverSelect({iso:e}){let{firstSelected:t,secondSelected:n}=this.state;if(this.state.firstSelected=e,this.input.range){let r=t||n;t&&n?this.state.secondSelected=null:r&&(r<e?(this.state.firstSelected=r,this.state.secondSelected=e):this.state.secondSelected=r,this.input.collapseOnSelect&&(this.expander.expanded=!1,this.focusCalendarButton()))}else this.input.collapseOnSelect&&(this.expander.expanded=!1,this.focusCalendarButton());this.emitSelectedChange()}focusCalendarButton(){(this.getComponent(`mainTextbox`)?.getEl(`iconBtn`))?.focus()}onInputKeyup({originalEvent:e}){if(!/^\d$/.test(e.key))return;let t=e.target,{value:n}=t;if(t.selectionStart===n.length){let{o:e,s:r}=ce(this.input.locale),i=0,a=0;for(let e;~(e=n.indexOf(r[i],a));)a=e+r[i].length,i++;n.length-a===(e[i]===`y`?4:2)&&(t.value+=r[i]??``)}}emitSelectedChange(){this.emit(`change`,this.input.range?{rangeStart:this.state.firstSelected,rangeEnd:this.state.secondSelected}:{selected:this.state.firstSelected})}}})))()}var b,x,S,C,w,T,E,D,O,k;function A(){return(A=t((()=>{b=l(),ye(),ue(),fe(),x=e(u()),me(),S=d(),h(),ie(),C=e(a()),y(),w=e(o()),T=c(),E=e(s()),D=`C`,O=(0,b.t)(D),(0,T.r)(D,()=>O),k=v,O._=(0,w.default)(function(e,t,n,r,i,a){let{a11yOpenPopoverText:o=`open calendar`,range:s,inputPlaceholderText:c=le(e.locale),disabled:l,strategy:u,textbox:d,...f}=e,[p,m]=Array.isArray(c)?c:[c,c],[h,g]=Array.isArray(d)?d:[d,d],_=t=>t?de(t,e.locale):``;t.be(`span`,{class:`date-textbox`},`0`,r,null,1,{"onexpander-expand":n.d(`expander-expand`,`openPopover`,!1),"onexpander-collapse":n.d(`expander-collapse`,`closePopover`,!1)}),s&&(0,x.default)(pe,{placeholder:p,disabled:l,value:_(i.firstSelected),...h},t,n,`1`,[[`blur`,`handleInputChange`,!1,[0]],[`keyup`,`onInputKeyup`,!1]]),(0,x.default)(pe,(0,S.i)(()=>{(0,S.a)(`postfixIcon`,{renderBody:e=>{(0,x.default)(he,{},e,n,`2`)}})},{class:`ebay-date-textbox--main`,placeholder:m,buttonAriaLabel:o,value:_(s?i.secondSelected:i.firstSelected),disabled:l,...g,postfixIcon:void 0}),t,n,`@mainTextbox`,[[`blur`,`handleInputChange`,!1,[+!!s]],[`keyup`,`onInputKeyup`,!1]]),t.be(`div`,{hidden:!i.popover,class:(0,C.default)([`date-textbox__popover`,u===`fixed`&&`date-textbox__popover--fixed`])},`@popover`,r,null,0),i.popover&&(0,x.default)(ee,{to:typeof window==`object`&&window,__events:[`on`,`resize`]},t,n,`3`,[[`resize`,`calculateNumMonths`,!1]]),(0,x.default)(oe,{...f,range:s,interactive:!0,navigable:!0,numMonths:i.numMonths,selected:i.firstSelected&&i.secondSelected?[i.firstSelected,i.secondSelected]:i.firstSelected||i.secondSelected||void 0},t,n,`4`,[[`select`,`onPopoverSelect`,!1]]),t.ee(),t.ee()},{t:D},k),O.Component=(0,E.default)(k,O._)})))()}var j,M,N,P,F,xe,I,L,R;function Se(){return(Se=t((()=>{j=l(),M=d(),A(),N=e(u()),P=e(o()),F=c(),xe=e(s()),I=`gd0gq_s`,L=(0,j.t)(I),(0,F.r)(I,()=>L),R={},L._=(0,P.default)(function(e,t,n,r,i,a){(0,N.default)(O,(0,M.i)(()=>{(0,M.a)(`textbox`,{placeholder:`JJJJ/MM/DD`,floatingLabel:`Begin`}),(0,M.a)(`textbox`,{placeholder:`JJJJ/MM/DD`,floatingLabel:`Einde`})},{disableBefore:new Date,range:!0,locale:`af`,getA11yShowMonthText:e=>`Gaan na ${e}`,a11ySelectedText:`Geselekteerde`,a11yRangeStartText:`Reeks begin`,a11yInRangeText:`Binne bereik`,a11yRangeEndText:`Reeks einde`,...e,textbox:void 0}),t,n,`0`,[[`change`,`emit`,!1,[`change`]]])},{t:I,s:!0},R),L.Component=(0,xe.default)(R,L._)})))()}var Ce;function we(){return(we=t((()=>{Ce=`<ebay-date-textbox
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
`})))()}var Te,z,Ee,De,Oe,B,V,H;function ke(){return(ke=t((()=>{Te=l(),A(),z=e(u()),p(),Ee=e(o()),De=c(),Oe=e(s()),B=`W4_uJQG`,V=(0,Te.t)(B),(0,De.r)(B,()=>V),H={onCreate(){this.state={value:void 0,rangeEnd:void 0}},handleChange(e){`selected`in e&&e.selected?this.state.value=e.selected:(`rangeStart`in e&&e.rangeStart&&(this.state.value=e.rangeStart),`rangeEnd`in e&&e.rangeEnd&&(this.state.rangeEnd=e.rangeEnd))},clear(){this.state.value=void 0,this.input.range&&(this.state.rangeEnd=void 0)}},V._=(0,Ee.default)(function(e,t,n,r,i,a){(0,z.default)(O,{value:i.value,rangeEnd:i.rangeEnd,...e},t,n,`0`,[[`change`,`handleChange`,!1]]),(0,z.default)(m,{renderBody:e=>{e.t(`Clear`,r)}},t,n,`1`,[[`click`,`clear`,!1]])},{t:B},H),V.Component=(0,Oe.default)(H,V._)})))()}var Ae;function je(){return(je=t((()=>{Ae=`export interface Input {
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
`})))()}var Me,U,Ne,Pe,Fe,Ie,Le,W,G,Re,K;function ze(){return(ze=t((()=>{Me=l(),U=d(),A(),Ne=e(u()),Pe=e(f()),Fe=e(o()),Ie=c(),Le=e(s()),W=`pVkUEe4`,G=(0,Me.t)(W),Re=(0,Pe.default)(`strong`,null,1).t(`YYYY-MM-DD`),(0,Ie.r)(W,()=>G),K={onCreate(){this.state={invalid:!1}},onError(){this.state.invalid=!0},onChange(){this.state.invalid=!1}},G._=(0,Fe.default)(function(e,t,n,r,i,a){t.be(`div`,{class:`field`},`0`,r,null,1),t.be(`label`,{for:n.elId(`textbox`)},`1`,r,null,0),t.t(`Enter Date`,r),t.ee(),t.be(`div`,null,`2`,r,null,0),(0,Ne.default)(O,(0,U.i)(()=>{(0,U.a)(`textbox`,{id:n.elId(`textbox`),invalid:i.invalid,ariaLabelledby:n.elId(`error-label`)})}),t,n,`3`,[[`invalid-date`,`onError`,!1],[`change`,`onChange`,!1]]),t.ee(),i.invalid&&(t.be(`div`,{class:`field__description field__description--attention`,id:n.elId(`error-label`)},`4`,r,null,1),t.t(`Use `,r),t.n(Re,r),t.t(` format`,r),t.ee()),t.ee()},{t:W},K),G.Component=(0,Le.default)(K,G._)})))()}var Be;function q(){return(q=t((()=>{Be=`class {
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
`})))()}var J,Ve,Y,X,Z,Q,$,He;function Ue(){return(Ue=t((()=>{_e(),A(),Se(),we(),ke(),je(),ze(),q(),J=e=>({input:i(e)}),Ve={title:`form input/ebay-date-textbox`,component:O,parameters:{docs:{description:{component:ge}}},argTypes:{value:{type:`date`,control:{type:`date`},description:`Selected date`,table:{defaultValue:{summary:`undefined`}}},range:{type:`boolean`,control:{type:`boolean`},description:`True if selecting a range, false if a single value`,table:{defaultValue:{summary:`false`}}},todayISO:{type:`date`,control:{type:`date`},description:`The current date in ISO format`,table:{defaultValue:{summary:`Today's date`}}},floatingLabel:{type:`text|array`,control:{type:`object`},description:'If set then shows this text as the floating label. If separate floating labels are required for a range display, use an array of two strings (i. e. `["Start", "End"]`)..'},rangeEnd:{type:`date`,control:{type:`date`},description:`If range is true, the end of the selected range`,table:{defaultValue:{summary:`undefined`}}},locale:{type:`text`,control:{type:`text`},description:`Locale of the date picker`,table:{defaultValue:{summary:`navigator.language || 'en-US'`}}},strategy:{options:[`fixed`,`absolute`],control:{type:`select`},description:`Swap between fixed and absolute positioning strategy. Use fixed when the popover is contained in an overflow and needs to remain visible as the page scrolls.`},disabled:{type:`boolean`,control:{type:`boolean`},description:`If true, the textbox is disabled and popover cannot be opened.`,table:{defaultValue:{summary:`false`}}},disableBefore:{type:`date`,control:{type:`date`},description:"First date that may be selected. Should be an ISO string, but also accepts a timestamp or `Date` object",table:{defaultValue:{summary:`undefined`}}},disableAfter:{type:`date`,control:{type:`date`},description:"Last date that may be selected. Should be an ISO string, but also accepts a timestamp or `Date` object",table:{defaultValue:{summary:`undefined`}}},disableWeekdays:{type:`array`,control:{type:`array`},description:"List of weekdays that are disabled. Must be an array of numbers, where Sunday is `0` and Saturday is `6`",table:{defaultValue:{summary:`undefined`}}},disableList:{type:`array`,control:{type:`array`},description:"List of specific days that are disabled. Should be a list of ISO strings, but also accepts timestamps or `Date` objects",table:{defaultValue:{summary:`undefined`}}},collapseOnSelect:{type:`boolean`,control:{type:`boolean`},description:`Whether the calendar should collapse after a date is selected`,table:{defaultValue:{summary:`false`}}},getA11yShowMonthText:{type:`callback`,control:{type:`callback`},description:`Function used to get the text for showing previous and next months`,table:{defaultValue:{summary:"(monthName) => `Show ${monthName}`"}}},a11ySelectedText:{type:`text`,control:{type:`text`},description:`Localized, text to be read by screen readers when a date is selected`,table:{defaultValue:{summary:`selected`}}},a11yRangeStartText:{type:`text`,control:{type:`text`},description:`Localized, text to be read by screen readers when a date is the start of a range`,table:{defaultValue:{summary:`start of range`}}},a11yInRangeText:{type:`text`,control:{type:`text`},description:`Localized, text to be read by screen readers when a date is in a range`,table:{defaultValue:{summary:`in range`}}},a11yRangeEndText:{type:`text`,control:{type:`text`},description:`Localized, text to be read by screen readers when a date is the end of a range`,table:{defaultValue:{summary:`end of range`}}},a11ySeparator:{type:`text`,control:{type:`text`},description:`Localized, text to be read by screen readers to separate properties`,table:{defaultValue:{summary:` - `}}},a11yOpenPopoverText:{type:`text`,control:{type:`text`},description:`Localized, a11y label for the button that opens the calendar popover`,table:{defaultValue:{summary:`open calendar`}}},inputPlaceholderText:{type:`text|array`,control:{type:`object`},description:'Text for the input placeholder. Should indicate that users need to enter dates in ISO format. If separate placeholders are required for a range display, use an array of two strings (i. e. `["Start (MM/DD/YYYY)", "End (MM/DD/YYYY)"]`).',table:{defaultValue:{summary:`"MM/DD/YYYY"`}}},localizeFormat:{type:`boolean`,control:{type:`boolean`},description:`_**Deprecated— will be default after next major release**_ Localize the date format`,table:{defaultValue:{summary:`false`}}},textbox:{name:`@textbox`,description:"Proxy for textbox attributes— includes all attributes for `<ebay-textbox>`",table:{category:`@attribute tags`}},onChange:{action:`on-change`,description:`Triggered when the selection changes`,table:{category:`Events`,defaultValue:{summary:`{ selected } | { rangeStart, rangeEnd }`}}},"onInvalid-date":{action:`on-invalid-date`,description:`Triggered when the user manually types an invalid date`,table:{category:`Events`}}}},Y=J.bind({}),Y.parameters={docs:{source:{code:n(`ebay-date-textbox`,{})}}},X=J.bind({}),X.args={strategy:`fixed`},Z=r(L,Ce),Q=r(V,Ae),$=r(G,Be),He=[`Default`,`WithFixedStrategy`,`Localized`,`WithClear`,`InFieldExample`],Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: addRenderBodies(args)
})`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: addRenderBodies(args)
})`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`buildExtensionTemplate(LocalizedTemplate, LocalizedTemplateCode)`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`buildExtensionTemplate(WithClearTemplate, WithClearTemplateCode)`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`buildExtensionTemplate(InField, InFieldCode)`,...$.parameters?.docs?.source}}}})))()}Ue();export{Y as Default,$ as InFieldExample,Z as Localized,Q as WithClear,X as WithFixedStrategy,He as __namedExportsOrder,Ve as default};