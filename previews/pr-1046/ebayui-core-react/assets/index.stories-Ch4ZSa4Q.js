import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./ebay-chart-legend-Bh6QPVYs.js";var r,i,a,o,s,c,l;function u(){return(u=e((()=>{n(),r={component:t,title:`charts/ebay-chart-legend`,tags:[`autodocs`],parameters:{docs:{description:{component:`Presentational legend component used alongside chart components to display named series with their associated values. Used internally by \`EbayDonutChart\` but can also be used standalone.

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
\`\`\``}}},argTypes:{items:{description:"Array of legend items. Each item has a `name` (string) and `value` (string, number, or undefined) to display.",control:`object`}},globals:{a11y:{manual:!0}}},i=[{name:`Electronics`,value:`$12,345`},{name:`Fashion`,value:`$8,762`},{name:`Home & Garden`,value:`$5,431`},{name:`Collectibles`,value:`$3,210`}],a={args:{items:i}},o={args:{items:i.slice(0,2)}},s={args:{items:[{name:`Total Sales`,value:`$42,000`}]}},c={args:{items:[{name:`Series A`,value:4200},{name:`Series B`,value:3100},{name:`Series C`,value:1800}]}},l=[`Default`,`TwoItems`,`SingleItem`,`WithNumericValues`],a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems.slice(0, 2)
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      name: "Total Sales",
      value: "$42,000"
    }]
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}}})))()}u();export{a as Default,s as SingleItem,o as TwoItems,c as WithNumericValues,l as __namedExportsOrder,r as default};