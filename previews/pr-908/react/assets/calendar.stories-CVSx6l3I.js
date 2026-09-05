import{E as a}from"./calendar-1IbLR-GU.js";import"./iframe-BrHXHCNP.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D-knZIDR.js";import"./chevron-right-24-t45N6xCV.js";import"./icon-Bcvhqsfb.js";import"./icon-button-Dd0Ltxs4.js";/* empty css               */const p={title:"building blocks/evo-calendar",component:a,tags:["autodocs"],parameters:{docs:{description:{component:`
A calendar component for displaying and selecting dates or date ranges.

## Usage

\`\`\`tsx
import { EvoCalendar } from "@evo-web/react/calendar";
\`\`\`
        `}}},argTypes:{selectMode:{control:"select",options:["day","range"]},locale:{type:"string",control:"text",table:{defaultValue:{summary:"navigator.language || 'en-US'"}}},today:{type:"string",control:"text"},selected:{control:"object"},defaultSelected:{control:"object"},visibleMonthCount:{type:"number",control:"number",table:{defaultValue:{summary:"1"}}},visibleMonth:{type:"string",control:"text"},defaultVisibleMonth:{type:"string",control:"text"},disable:{control:"object"},getDayHref:{control:!1},dayLinkAs:{control:!1},a11yNavigateText:{control:!1},a11yTodayText:{type:"string",control:"text"},a11yDisabledText:{type:"string",control:"text"},a11ySelectedText:{type:"string",control:"text"},a11yRangeText:{control:"object"},onSelectedChange:{action:"onSelectedChange",table:{category:"Events"}},onVisibleMonthChange:{action:"onVisibleMonthChange",table:{category:"Events"}}},args:{selectMode:"day",a11yNavigateText:(t,o)=>`${o==="prev"?"Previous":"Next"}: ${t}`,a11yRangeText:{start:"start of range",end:"end of range",in:"in range"}}},e={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};const m=["Default"];export{e as Default,m as __namedExportsOrder,p as default};
