import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-CK-NQdWx.js";import{n}from"./iframe-RezWaW69.js";import{n as r,t as i}from"./ebay-signal-DMV65Eu7.js";var a,o,s,c,l,u,d,f;function p(){return(p=e((()=>{t(),i(),a=n(),o={component:r,title:`graphics & icons/ebay-signal`,tags:[`autodocs`],parameters:{docs:{description:{component:'## Description\n\nSignals are data-backed recommendations to help customers make more informed decisions. There are four signal statuses, each corresponding to a specific color: `trustworthy`, `recent`, `time-sensitive` & `neutral`. Defaults to `neutral` if none specified.\n\n## Usage\n\n### Import\n\n```jsx harmony\nimport { EbaySignal } from "@ebay/ui-core-react/ebay-signal";\n```\n\n### Import following styles from SKIN\n\n```jsx harmony\nimport "@ebay/skin/signal";\n```\n\nor import styles using SCSS/CSS\n\n```css\n@import "@ebay/skin/signal.css";\n```\n\n### Basic\n\n```jsx\n<EbaySignal status="trustworthy">Top Rated</EbaySignal>\n```'}}},argTypes:{status:{description:"Status of signal; determines color. Possible values: `trustworthy`, `recent`, `time-sensitive` & `neutral` (default)",options:[`trustworthy`,`recent`,`time-sensitive`,`neutral`],control:{type:`select`}}}},s=e=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(r,{...e,children:`Default`})}),c=e=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(r,{...e,status:`trustworthy`,children:`Trustworthy`})}),l=e=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(r,{...e,status:`recent`,children:`Recent`})}),u=e=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(r,{...e,status:`time-sensitive`,children:`Time-Sensitive`})}),d=e=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(r,{...e,status:`neutral`,children:`Neutral`})}),f=[`DefaultCase`,`Trustworthy`,`Recent`,`TimeSensitive`,`Neutral`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => <>
        <EbaySignal {...args}>Default</EbaySignal>
    </>`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => <>
        <EbaySignal {...args} status="trustworthy">
            Trustworthy
        </EbaySignal>
    </>`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => <>
        <EbaySignal {...args} status="recent">
            Recent
        </EbaySignal>
    </>`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => <>
        <EbaySignal {...args} status="time-sensitive">
            Time-Sensitive
        </EbaySignal>
    </>`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => <>
        <EbaySignal {...args} status="neutral">
            Neutral
        </EbaySignal>
    </>`,...d.parameters?.docs?.source}}}})))()}p();export{s as DefaultCase,d as Neutral,l as Recent,u as TimeSensitive,c as Trustworthy,f as __namedExportsOrder,o as default};