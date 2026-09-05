import{E as t}from"./chart-legend-B_Y98dvc.js";import"./iframe-CVwxB9bq.js";import"./preload-helper-Cc2_yIPf.js";const c={component:t,title:"charts/ebay-chart-legend",tags:["autodocs"],parameters:{docs:{description:{component:`Presentational legend component used alongside chart components to display named series with their associated values. Used internally by \`EbayDonutChart\` but can also be used standalone.

## Usage

### Import

\`\`\`jsx harmony
import { EbayChartLegend } from "@ebay/ui-core-react/ebay-chart-legend";
\`\`\`

### Basic

\`\`\`jsx
<EbayChartLegend
    items={[
        { name: "Electronics", value: "$12,345" },
        { name: "Fashion", value: "$8,762" },
        { name: "Home & Garden", value: "$5,431" },
    ]}
/>
\`\`\``}}},argTypes:{items:{description:"Array of legend items. Each item has a `name` (string) and `value` (string, number, or undefined) to display.",control:"object"}},globals:{a11y:{manual:!0}}},n=[{name:"Electronics",value:"$12,345"},{name:"Fashion",value:"$8,762"},{name:"Home & Garden",value:"$5,431"},{name:"Collectibles",value:"$3,210"}],e={args:{items:n}},a={args:{items:n.slice(0,2)}},s={args:{items:[{name:"Total Sales",value:"$42,000"}]}},r={args:{items:[{name:"Series A",value:4200},{name:"Series B",value:3100},{name:"Series C",value:1800}]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems.slice(0, 2)
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      name: "Total Sales",
      value: "$42,000"
    }]
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      name: "Series A",
      value: 4200
    }, {
      name: "Series B",
      value: 3100
    }, {
      name: "Series C",
      value: 1800
    }]
  }
}`,...r.parameters?.docs?.source}}};const l=["Default","TwoItems","SingleItem","WithNumericValues"];export{e as Default,s as SingleItem,a as TwoItems,r as WithNumericValues,l as __namedExportsOrder,c as default};
