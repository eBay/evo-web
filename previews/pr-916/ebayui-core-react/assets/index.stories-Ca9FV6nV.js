var m=Object.defineProperty;var a=(t,l)=>m(t,"name",{value:l,configurable:!0});import{R as e}from"./iframe-_qbICbPR.js";import{E as s}from"./signal-DRZz0BLQ.js";import"./preload-helper-Cc2_yIPf.js";const d={component:s,title:"graphics & icons/ebay-signal",tags:["autodocs"],parameters:{docs:{description:{component:'## Description\n\nSignals are data-backed recommendations to help customers make more informed decisions. There are four signal statuses, each corresponding to a specific color: `trustworthy`, `recent`, `time-sensitive` & `neutral`. Defaults to `neutral` if none specified.\n\n## Usage\n\n### Import\n\n```jsx harmony\nimport { EbaySignal } from "@ebay/ui-core-react/ebay-signal";\n```\n\n### Import following styles from SKIN\n\n```jsx harmony\nimport "@ebay/skin/signal";\n```\n\nor import styles using SCSS/CSS\n\n```css\n@import "@ebay/skin/signal.css";\n```\n\n### Basic\n\n```jsx\n<EbaySignal status="trustworthy">Top Rated</EbaySignal>\n```'}}},argTypes:{status:{description:"Status of signal; determines color. Possible values: `trustworthy`, `recent`, `time-sensitive` & `neutral` (default)",options:["trustworthy","recent","time-sensitive","neutral"],control:{type:"select"}}}},r=a(t=>e.createElement(e.Fragment,null,e.createElement(s,{...t},"Default")),"DefaultCase"),n=a(t=>e.createElement(e.Fragment,null,e.createElement(s,{...t,status:"trustworthy"},"Trustworthy")),"Trustworthy"),o=a(t=>e.createElement(e.Fragment,null,e.createElement(s,{...t,status:"recent"},"Recent")),"Recent"),i=a(t=>e.createElement(e.Fragment,null,e.createElement(s,{...t,status:"time-sensitive"},"Time-Sensitive")),"TimeSensitive"),c=a(t=>e.createElement(e.Fragment,null,e.createElement(s,{...t,status:"neutral"},"Neutral")),"Neutral");r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => <>
        <EbaySignal {...args}>Default</EbaySignal>
    </>`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => <>
        <EbaySignal {...args} status="trustworthy">
            Trustworthy
        </EbaySignal>
    </>`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => <>
        <EbaySignal {...args} status="recent">
            Recent
        </EbaySignal>
    </>`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => <>
        <EbaySignal {...args} status="time-sensitive">
            Time-Sensitive
        </EbaySignal>
    </>`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => <>
        <EbaySignal {...args} status="neutral">
            Neutral
        </EbaySignal>
    </>`,...c.parameters?.docs?.source}}};const S=["DefaultCase","Trustworthy","Recent","TimeSensitive","Neutral"];export{r as DefaultCase,c as Neutral,o as Recent,i as TimeSensitive,n as Trustworthy,S as __namedExportsOrder,d as default};
