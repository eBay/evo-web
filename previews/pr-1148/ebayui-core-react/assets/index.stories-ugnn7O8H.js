import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-CK-NQdWx.js";import{n}from"./iframe-BlBWXznU.js";import{n as r,t as i}from"./ebay-icon-promotion-12-BrRt5ke6.js";import{n as a,t as o}from"./ebay-signal-P4aCADey.js";var s,c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{t(),o(),r(),s=n(),c={component:a,title:`graphics & icons/ebay-signal`,tags:[`autodocs`],parameters:{docs:{description:{component:'## Description\n\nSignals are data-backed recommendations to help customers make more informed decisions. There are four signal statuses, each corresponding to a specific color: `trustworthy`, `recent`, `time-sensitive` & `neutral`. Defaults to `neutral` if none specified.\n\n## Usage\n\n### Import\n\n```jsx harmony\nimport { EbaySignal } from "@ebay/ui-core-react/ebay-signal";\n```\n\n### Import following styles from SKIN\n\n```jsx harmony\nimport "@ebay/skin/signal";\n```\n\nor import styles using SCSS/CSS\n\n```css\n@import "@ebay/skin/signal.css";\n```\n\n### Basic\n\n```jsx\n<EbaySignal tone="information">Top rated</EbaySignal>\n```\n\n### Emphasis and icon\n\n```jsx\n<EbaySignal tone="positive" emphasis="strong" icon={<EbayIconPromotion12 />}>\n    Promoted\n</EbaySignal>\n```\n\n`status` is deprecated; use `tone` (trustworthy → information, recent → positive, time-sensitive → attention).'}}},argTypes:{tone:{description:"Color tone. Takes precedence over `status`. Possible values: `neutral`, `information`, `positive`, `warning` & `attention`",options:[`neutral`,`information`,`positive`,`warning`,`attention`],control:{type:`select`}},emphasis:{description:"Visual emphasis. Possible values: `default`, `strong` & `subtle`",options:[`default`,`strong`,`subtle`],control:{type:`select`}},icon:{description:`Optional leading 12px icon, rendered before the label. See the WithIcon story`,control:!1},status:{description:"Deprecated: use `tone`. Possible values: `trustworthy` (information), `recent` (positive), `time-sensitive` (attention) & `neutral` (default)",options:[`trustworthy`,`recent`,`time-sensitive`,`neutral`],control:{type:`select`}}}},l=e=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(a,{...e,children:`Default`})}),u=e=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(a,{...e,icon:(0,s.jsx)(i,{}),children:`With icon`})}),d=e=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(a,{...e,status:`trustworthy`,children:`Trustworthy`})}),f=e=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(a,{...e,status:`recent`,children:`Recent`})}),p=e=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(a,{...e,status:`time-sensitive`,children:`Time-Sensitive`})}),m=e=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(a,{...e,status:`neutral`,children:`Neutral`})}),h=[`DefaultCase`,`WithIcon`,`Trustworthy`,`Recent`,`TimeSensitive`,`Neutral`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => <>
        <EbaySignal {...args}>Default</EbaySignal>
    </>`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => <>
        <EbaySignal {...args} icon={<EbayIconPromotion12 />}>
            With icon
        </EbaySignal>
    </>`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => <>
        <EbaySignal {...args} status="trustworthy">
            Trustworthy
        </EbaySignal>
    </>`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`args => <>
        <EbaySignal {...args} status="recent">
            Recent
        </EbaySignal>
    </>`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => <>
        <EbaySignal {...args} status="time-sensitive">
            Time-Sensitive
        </EbaySignal>
    </>`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => <>
        <EbaySignal {...args} status="neutral">
            Neutral
        </EbaySignal>
    </>`,...m.parameters?.docs?.source}}}})))()}g();export{l as DefaultCase,m as Neutral,f as Recent,p as TimeSensitive,d as Trustworthy,u as WithIcon,h as __namedExportsOrder,c as default};