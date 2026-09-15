import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{n}from"./storybook-code-source-DlBTenms.js";import{n as r,t as i}from"./utils-C7m-hPxw.js";import{n as a,r as o,t as s,u as c}from"./registry-95LfxIAE.js";import{t as l}from"./render-tag-hXgrwudm.js";import{a as u,i as d,n as f,t as p}from"./ebay-calendar-BvKhkCfs.js";var m;function h(){return(h=t((()=>{m=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-calendar
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.2.0
    </span>
</h1>

Calendar component, used for displaying dates and date ranges.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/dialogs-ebay-date-textbox)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/dialogs-ebay-date-textbox)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/ebay-date-textbox/examples)
`})))()}var g,_,v,y,b,x,S,C;function w(){return(w=t((()=>{g=c(),f(),_=e(l()),v=e(a()),y=s(),b=e(o()),x=`CQGmSIO`,S=(0,g.t)(x),(0,y.r)(x,()=>S),C={},S._=(0,v.default)(function(e,t,n,r,i,a){(0,_.default)(p,{...e,linkBuilder:e=>`https://www.ebay.com/sch/i.html?_nkw=${e}`},t,n,`0`,[[`select`,`emit`,!1,[`select`]],[`month-change`,`emit`,!1,[`month`]],[`focus`,`emit`,!1,[`focus`]]])},{t:x,s:!0},C),S.Component=(0,b.default)(C,S._)})))()}var T;function E(){return(E=t((()=>{T=`<ebay-calendar
    ...input
    linkBuilder=(
        (iso) => {
            return \`https://www.ebay.com/sch/i.html?_nkw=\${iso}\`;
        }
    )
    on-select("emit", "select")
    on-month-change("emit", "month")
    on-focus("emit", "focus")
/>
`})))()}var D,O,k,A,j,M,N,P,F,I,L;function R(){return(R=t((()=>{D=c(),d(),f(),O=e(l()),k=e(a()),A=s(),j=e(o()),M=`A0e96Y4`,N=(0,D.t)(M),P=u(new Date(Date.now()-864e5)),F=u(new Date(Date.now()+864e5)),I={[P]:`https://www.ebay.com/sch/i.html?_nkw=yesterday`,[F]:`https://www.ebay.com/sch/i.html?_nkw=tomorrow`},(0,A.r)(M,()=>N),L={},N._=(0,k.default)(function(e,t,n,r,i,a){(0,O.default)(p,{...e,linkBuilder:e=>I[e]},t,n,`0`,[[`select`,`emit`,!1,[`select`]],[`month-change`,`emit`,!1,[`month`]],[`focus`,`emit`,!1,[`focus`]]])},{t:M,s:!0},L),N.Component=(0,j.default)(L,N._)})))()}var z;function B(){return(B=t((()=>{z=`import { toISO } from "../../../common/dates/date-utils";
static const yesterdayISO = toISO(new Date(Date.now() - 24 * 60 * 60 * 1000));
static const tomorrowISO = toISO(new Date(Date.now() + 24 * 60 * 60 * 1000));
static const linkMap = {
    [yesterdayISO]: "https://www.ebay.com/sch/i.html?_nkw=yesterday",
    [tomorrowISO]: "https://www.ebay.com/sch/i.html?_nkw=tomorrow",
};

<ebay-calendar
    ...input
    linkBuilder=(
        (iso) => {
            return linkMap[iso];
        }
    )
    on-select("emit", "select")
    on-month-change("emit", "month")
    on-focus("emit", "focus")
/>
`})))()}var V,H,U,W,G,K;function q(){return(q=t((()=>{h(),f(),w(),E(),R(),B(),V=e=>({input:i(e)}),H={title:`building blocks/ebay-calendar`,component:p,parameters:{docs:{description:{component:m}}},argTypes:{navigable:{type:`boolean`,control:{type:`boolean`},description:`If true, a header is included that allows for navigation between months`,table:{defaultValue:{summary:`false`}}},interactive:{type:`boolean`,control:{type:`boolean`},description:`Date cells are contained in buttons for interactive calendars, and spans otherwise`,table:{defaultValue:{summary:`false`}}},numMonths:{type:`number`,control:{type:`number`},description:`Number of months to be displayed at once`,table:{defaultValue:{summary:`false`}}},range:{type:`boolean`,control:{type:`boolean`},description:`True if selecting a range, false if a single value`,table:{defaultValue:{summary:`false`}}},selected:{type:`text|array`,control:{type:`object`},description:`Date or list of dates that are selected, represented as an ISO string or an array of ISO strings`,table:{defaultValue:{summary:`undefined`}}},locale:{type:`text`,control:{type:`text`},description:`Locale of the date picker`,table:{defaultValue:{summary:`navigator.language || 'en-US'`}}},todayISO:{type:`date`,control:{type:`date`},description:`The starting current date.`,table:{defaultValue:{summary:`Today's date`}}},disableBefore:{type:`date`,control:{type:`date`},description:`First date that may be selected`,table:{defaultValue:{summary:`undefined`}}},disableAfter:{type:`date`,control:{type:`date`},description:`Last date that may be selected`,table:{defaultValue:{summary:`undefined`}}},disableWeekdays:{type:`array`,control:{type:`array`},description:"List of weekdays that are disabled. Must be an array of numbers, where Sunday is `0` and Saturday is `6`",table:{defaultValue:{summary:`undefined`}}},disableList:{type:`array`,control:{type:`array`},description:"List of specific days that are disabled. Should be a list of ISO strings, but also accepts timestamps or `Date` objects",table:{defaultValue:{summary:`undefined`}}},linkBuilder:{type:`callback`,control:{type:`callback`},description:"Function used to build the href for each date. The function is passed the date as a `Date` object, and should return a url string. For dates that don't have a link, the function should return a falsy value",table:{defaultValue:{summary:`undefined`}}},getA11yShowMonthText:{type:`callback`,control:{type:`callback`},description:`Function used to get the text for showing previous and next months`,table:{defaultValue:{summary:"(monthName) => `Show ${monthName}`"}}},a11ySelectedText:{type:`text`,control:{type:`text`},description:`Localized, text to be read by screen readers when a date is selected`,table:{defaultValue:{summary:`selected`}}},a11yRangeStartText:{type:`text`,control:{type:`text`},description:`Localized, text to be read by screen readers when a date is the start of a range`,table:{defaultValue:{summary:`start of range`}}},a11yInRangeText:{type:`text`,control:{type:`text`},description:`Localized, text to be read by screen readers when a date is in a range`,table:{defaultValue:{summary:`in range`}}},a11yRangeEndText:{type:`text`,control:{type:`text`},description:`Localized, text to be read by screen readers when a date is the end of a range`,table:{defaultValue:{summary:`end of range`}}},a11yTodayText:{type:`text`,control:{type:`text`},description:`Localized, text to be read by screen readers when a date is the current date`,table:{defaultValue:{summary:`today`}}},a11yDisabledText:{type:`text`,control:{type:`text`},description:`Localized, text to be read by screen readers when a date is disabled`,table:{defaultValue:{summary:`inactive`}}},a11ySeparator:{type:`text`,control:{type:`text`},description:`Localized, text to be read by screen readers to separate properties`,table:{defaultValue:{summary:` - `}}},onSelect:{action:`on-select`,description:`Triggered when a date is selected`,table:{category:`Events`,defaultValue:{summary:`{ iso }`}}},"onMonth-change":{action:`on-month-change`,description:`Triggered during month navigation`,table:{category:`Events`,defaultValue:{summary:`{ iso }`}}},onFocus:{action:`on-focus`,description:`Triggered when a day is focused on, typically via keyboard events`,table:{category:`Events`,defaultValue:{summary:`{ iso }`}}}}},U=V.bind({}),U.parameters={docs:{source:{code:n(`ebay-calendar`,{})}}},W=r(S,T),G=r(N,z),K=[`Default`,`WithLinks`,`WithSpecificLinks`],U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: addRenderBodies(args)
})`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`buildExtensionTemplate(WithLinksTemplate, WithLinksTemplateCode)`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`buildExtensionTemplate(WithSpecificLinksTemplate, WithSpecificLinksTemplateCode)`,...G.parameters?.docs?.source}}}})))()}q();export{U as Default,W as WithLinks,G as WithSpecificLinks,K as __namedExportsOrder,H as default};