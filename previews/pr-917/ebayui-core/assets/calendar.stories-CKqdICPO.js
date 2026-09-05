import{b as p,a as T}from"./utils-DWCsNc5l.js";import{t as V}from"./storybook-code-source-CCz6reEH.js";import{_ as c,t as u}from"./index-mDQTD3RY.js";import{v as y,b,_ as h,c as f}from"./defineComponent-B-Bg3Ud2.js";import{_ as g}from"./render-tag-B9T2mz-j.js";import"./index-B2OeNYFf.js";import"./index-BnD7O0EG.js";import"./index-CL8ZzwFK.js";/* empty css             */import"./index-o98Za02-.js";/* empty css                    *//* empty css               *//* empty css             */import"./dynamic-tag-B3Rndxlm.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BmRbtDLs.js";import"./index-eAGEw84U.js";import"./of-fallback-DrWEmKV1.js";const v=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
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
`,d="CQGmSIO",a=y.t(d);b.r(d,()=>a);const w={};a._=h(function(e,s,i,k,_,S){g(c,{...e,linkBuilder:l=>`https://www.ebay.com/sch/i.html?_nkw=${l}`},s,i,"0",[["select","emit",!1,["select"]],["month-change","emit",!1,["month"]],["focus","emit",!1,["focus"]]])},{t:d,s:!0},w);a.Component=f(w,a._);const L=`<ebay-calendar
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
`,m="A0e96Y4",o=y.t(m),D=u(new Date(Date.now()-1440*60*1e3)),I=u(new Date(Date.now()+1440*60*1e3)),O={[D]:"https://www.ebay.com/sch/i.html?_nkw=yesterday",[I]:"https://www.ebay.com/sch/i.html?_nkw=tomorrow"};b.r(m,()=>o);const x={};o._=h(function(e,s,i,k,_,S){g(c,{...e,linkBuilder:l=>O[l]},s,i,"0",[["select","emit",!1,["select"]],["month-change","emit",!1,["month"]],["focus","emit",!1,["focus"]]])},{t:m,s:!0},x);o.Component=f(x,o._);const E=`import { toISO } from "../../../common/dates/date-utils";
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
`,W=e=>({input:T(e)}),P={title:"building blocks/ebay-calendar",component:c,parameters:{docs:{description:{component:v}}},argTypes:{navigable:{type:"boolean",control:{type:"boolean"},description:"If true, a header is included that allows for navigation between months",table:{defaultValue:{summary:"false"}}},interactive:{type:"boolean",control:{type:"boolean"},description:"Date cells are contained in buttons for interactive calendars, and spans otherwise",table:{defaultValue:{summary:"false"}}},numMonths:{type:"number",control:{type:"number"},description:"Number of months to be displayed at once",table:{defaultValue:{summary:"false"}}},range:{type:"boolean",control:{type:"boolean"},description:"True if selecting a range, false if a single value",table:{defaultValue:{summary:"false"}}},selected:{type:"text|array",control:{type:"object"},description:"Date or list of dates that are selected, represented as an ISO string or an array of ISO strings",table:{defaultValue:{summary:"undefined"}}},locale:{type:"text",control:{type:"text"},description:"Locale of the date picker",table:{defaultValue:{summary:"navigator.language || 'en-US'"}}},todayISO:{type:"date",control:{type:"date"},description:"The starting current date.",table:{defaultValue:{summary:"Today's date"}}},disableBefore:{type:"date",control:{type:"date"},description:"First date that may be selected",table:{defaultValue:{summary:"undefined"}}},disableAfter:{type:"date",control:{type:"date"},description:"Last date that may be selected",table:{defaultValue:{summary:"undefined"}}},disableWeekdays:{type:"array",control:{type:"array"},description:"List of weekdays that are disabled. Must be an array of numbers, where Sunday is `0` and Saturday is `6`",table:{defaultValue:{summary:"undefined"}}},disableList:{type:"array",control:{type:"array"},description:"List of specific days that are disabled. Should be a list of ISO strings, but also accepts timestamps or `Date` objects",table:{defaultValue:{summary:"undefined"}}},linkBuilder:{type:"callback",control:{type:"callback"},description:"Function used to build the href for each date. The function is passed the date as a `Date` object, and should return a url string. For dates that don't have a link, the function should return a falsy value",table:{defaultValue:{summary:"undefined"}}},getA11yShowMonthText:{type:"callback",control:{type:"callback"},description:"Function used to get the text for showing previous and next months",table:{defaultValue:{summary:"(monthName) => `Show ${monthName}`"}}},a11ySelectedText:{type:"text",control:{type:"text"},description:"Localized, text to be read by screen readers when a date is selected",table:{defaultValue:{summary:"selected"}}},a11yRangeStartText:{type:"text",control:{type:"text"},description:"Localized, text to be read by screen readers when a date is the start of a range",table:{defaultValue:{summary:"start of range"}}},a11yInRangeText:{type:"text",control:{type:"text"},description:"Localized, text to be read by screen readers when a date is in a range",table:{defaultValue:{summary:"in range"}}},a11yRangeEndText:{type:"text",control:{type:"text"},description:"Localized, text to be read by screen readers when a date is the end of a range",table:{defaultValue:{summary:"end of range"}}},a11yTodayText:{type:"text",control:{type:"text"},description:"Localized, text to be read by screen readers when a date is the current date",table:{defaultValue:{summary:"today"}}},a11yDisabledText:{type:"text",control:{type:"text"},description:"Localized, text to be read by screen readers when a date is disabled",table:{defaultValue:{summary:"inactive"}}},a11ySeparator:{type:"text",control:{type:"text"},description:"Localized, text to be read by screen readers to separate properties",table:{defaultValue:{summary:" - "}}},onSelect:{action:"on-select",description:"Triggered when a date is selected",table:{category:"Events",defaultValue:{summary:"{ iso }"}}},"onMonth-change":{action:"on-month-change",description:"Triggered during month navigation",table:{category:"Events",defaultValue:{summary:"{ iso }"}}},onFocus:{action:"on-focus",description:"Triggered when a day is focused on, typically via keyboard events",table:{category:"Events",defaultValue:{summary:"{ iso }"}}}}},t=W.bind({});t.parameters={docs:{source:{code:V("ebay-calendar",{})}}};const n=p(a,L),r=p(o,E);t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: Input) => ({
  input: addRenderBodies(args)
})`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"buildExtensionTemplate(WithLinksTemplate, WithLinksTemplateCode)",...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"buildExtensionTemplate(WithSpecificLinksTemplate, WithSpecificLinksTemplateCode)",...r.parameters?.docs?.source}}};const X=["Default","WithLinks","WithSpecificLinks"];export{t as Default,n as WithLinks,r as WithSpecificLinks,X as __namedExportsOrder,P as default};
