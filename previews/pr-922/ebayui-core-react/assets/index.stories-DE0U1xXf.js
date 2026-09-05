import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./calendar-C6cB1-cZ.js";function r(){return(r=e((()=>{t()})))()}var i,a,o,s,c,l,u,d,f;function p(){return(p=e((()=>{r(),i={component:n,title:`building blocks/ebay-calendar`,tags:[`autodocs`],parameters:{docs:{description:{component:`## Usage

### Import

\`\`\`jsx harmony
import { EbayCalendar } from "@ebay/ui-core-react/ebay-calendar";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/calendar";

// When using navigable
import "@ebay/skin/icon";
import "@ebay/skin/icon-button";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/calendar.css";

/* When using navigable */
@import "@ebay/skin/icon.css";
@import "@ebay/skin/icon-button.css";
\`\`\``}}},argTypes:{navigable:{description:`If true, a header is included that allows for navigation between months`,control:`boolean`},interactive:{description:`Date cells are contained in buttons for interactive calendars, and spans otherwise`,control:`boolean`},numMonths:{description:`Number of months to be displayed at once`,control:`number`},range:{description:`True if selecting a range, false if a single value`,control:`boolean`},selected:{description:`Date or list of dates that are selected, represented as an ISO string or an array of ISO strings`,control:`text`},locale:{description:"Locale of the date picker, default to `navigator.language`",control:`text`},disableBefore:{description:`First date that may be selected`,control:`text`},disableAfter:{description:`Last date that may be selected`,control:`text`},disableWeekdays:{description:"List of weekdays that are disabled. Must be an array of numbers, where Sunday is `0` and Saturday is `6`",options:[`0`,`6`],control:{type:`select`}},disableList:{description:"List of specific days that are disabled. Should be a list of ISO strings, but also accepts timestamps or `Date` objects",control:`text`},linkBuilder:{description:"Function used to build the href for each date. The function is passed the date as a `Date` object, and should return a url string. For dates that don't have a link, the function should return a falsy value",action:`linkBuilder`,table:{category:`Events`}},getA11yShowMonthText:{description:"Function used to get the text for showing previous and next months, defaults to `Show ${monthName}`",action:`getA11yShowMonthText`,table:{category:`Events`}},a11ySelectedText:{description:"Text to be read by screen readers when a date is selected, defaults to `Selected`",control:`text`},a11yRangeStartText:{description:"Text to be read by screen readers when a date is the start of a range, defaults to `Start of range`",control:`text`},a11yInRangeText:{description:"Text to be read by screen readers when a date is in a range, defaults to `in range`",control:`text`},a11yRangeEndText:{description:"Text to be read by screen readers when a date is the end of a range, defaults to `End of range`",control:`text`},a11yTodayText:{description:"Text to be read by screen readers when a date is the current date, defaults to `Today`",control:`text`},a11yDisabledText:{description:"Text to be read by screen readers when a date is disabled, defaults to `inactive`",control:`text`},a11ySeparator:{description:"Text to be read by screen readers to separate properties, defaults to `-`",control:`text`},onFocus:{description:`Triggered when a day is focused on, typically via keyboard events`,action:`onFocus`,table:{category:`Events`,defaultValue:{summary:"`(event: FocusEvent, { iso })`"}}},onSelect:{description:`Triggered when a day is selected`,action:`onSelect`,table:{category:`Events`,defaultValue:{summary:"`(event: Event, { iso })`"}}},onMonthChange:{description:`Triggered during month navigation`,action:`onMonthChange`,table:{category:`Events`,defaultValue:{summary:"`(event: Event, { iso })`"}}}}},a={},o={args:{interactive:!0,selected:`2024-02-1
5`}},s={args:{interactive:!0,numMonths:2,selected:`2024-01-03`}},c={args:{interactive:!0,navigable:!0,numMonths:2,selected:`2024-01-03`}},l={args:{interactive:!0,range:!0,numMonths:2,selected:[`2024-01-03`,`2025-02-01`]}},u={args:{interactive:!0,navigable:!0,range:!0,numMonths:2,selected:[`2024-01-03`,`2025-02-01`],disableBefore:`2024-01-03`,disableAfter:`2025-02-01`}},d={args:{interactive:!0,numMonths:2,disableWeekdays:[0,6]}},f=[`Default`,`Interactive`,`MultipleMonths`,`Navigable`,`RangeSelected`,`DisableBeforeAndAfter`,`DisableWeekdays`],a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    interactive: true,
    selected: "2024-02-1\\n5"
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    interactive: true,
    numMonths: 2,
    selected: "2024-01-03"
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    interactive: true,
    navigable: true,
    numMonths: 2,
    selected: "2024-01-03"
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    interactive: true,
    range: true,
    numMonths: 2,
    selected: ["2024-01-03", "2025-02-01"]
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    interactive: true,
    navigable: true,
    range: true,
    numMonths: 2,
    selected: ["2024-01-03", "2025-02-01"],
    disableBefore: "2024-01-03",
    disableAfter: "2025-02-01"
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    interactive: true,
    numMonths: 2,
    disableWeekdays: [0, 6]
  }
}`,...d.parameters?.docs?.source}}}})))()}p();export{a as Default,u as DisableBeforeAndAfter,d as DisableWeekdays,o as Interactive,s as MultipleMonths,c as Navigable,l as RangeSelected,f as __namedExportsOrder,i as default};