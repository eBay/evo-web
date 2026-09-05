import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-CK-NQdWx.js";import{t as r}from"./classnames-D09xBJOL.js";import{n as i}from"./iframe-RezWaW69.js";import{C as a,E as o,T as s,b as c,g as l,i as u,n as d,o as f,t as p,w as m}from"./shared-Bpzu69Fi.js";import{n as h,t as g}from"./ebay-chart-legend-Bh6QPVYs.js";function _(e){e.wrap(e.seriesTypes.pie.prototype,`translate`,function(e){if(e.call(this),this.points.length===1)return;let t=this.center[2],n=2*Math.asin(5/t);this.points.forEach(e=>{e.shapeArgs.start+=n/2,e.shapeArgs.end-=n/2})})}function v({name:e,value:t,tooltip:n}){let r=u(n??t);return`<div class="donut-tooltip tooltip__overlay" role="tooltip"><div class="tooltip__mask"><div class="tooltip__cell"><div class="tooltip__content"><b>${u(e)}</b><br>${r}</div></div></div></div>`}function y(){return(y=t((()=>{f()})))()}function b(e){let t=e[0];if(!t)return{prepared:void 0,colors:[]};let n={...t,type:t.type??`pie`};return{prepared:n,colors:l(n)}}var x,S,C,w;function T(){return(T=t((()=>{x=e(n()),S=e(r()),s(),a(),f(),g(),y(),_(m),C=`
    .donut-tooltip.tooltip__overlay { display: block; position: relative; }
`,w=({title:e,metricValue:t,metricLabel:n,series:r,highchartsDescription:i,renderTooltipOutside:a=!0,className:s,...l})=>{r.length===0&&console.warn(`EbayDonutChart: at least one series is required.`),r.length>1&&console.warn(`EbayDonutChart: only one series is supported. Additional series will be ignored.`);let{prepared:u,colors:f}=(0,x.useMemo)(()=>b(r),[r]),g=(0,x.useMemo)(()=>u?.data?.map(e=>({name:e.name??``,value:e.y}))??[],[u]),_=(0,x.useMemo)(()=>({chart:{type:`pie`,spacing:[0,0,0,0],margin:[0,0,0,0],backgroundColor:p,style:{fontFamily:d}},colors:f,title:{text:void 0},plotOptions:{pie:{description:i,size:`100%`,thickness:10,allowPointSelect:!1,cursor:`pointer`,borderRadius:`30%`,dataLabels:{enabled:!1},states:{hover:{halo:{size:0}}}}},tooltip:{hideDelay:250,useHTML:!0,backgroundColor:`transparent`,padding:0,borderWidth:0,borderRadius:0,outside:a,shadow:!1,shared:!0,style:{filter:c,fontSize:`12px`},formatter:function(){return v({name:String(this.key??``),value:String(this.y??``),tooltip:this.tooltip})}},series:u?[u]:[],credits:{enabled:!1}}),[u,f,i,a]);return x.createElement(x.Fragment,null,x.createElement(`style`,null,C),x.createElement(`div`,{...l,className:(0,S.default)(`donut-chart`,s)},x.createElement(`div`,{className:`donut-chart__grid`},e&&x.createElement(`div`,{className:`donut-chart__title`},e),(t||n)&&x.createElement(`div`,{className:`donut-chart__metric`},t&&x.createElement(`div`,{className:`donut-chart__metric-value`},t),n&&x.createElement(`div`,{className:`donut-chart__metric-label`},n)),x.createElement(`div`,{className:`donut-chart__graph`},x.createElement(o,{highcharts:m,options:_})),x.createElement(`div`,{className:`donut-chart__legend`},x.createElement(h,{items:g})))))};try{w.displayName=`donutchart`,w.__docgenInfo={description:``,displayName:`donutchart`,filePath:`/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-donut-chart/donut-chart.tsx`,methods:[],props:{title:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-donut-chart/types.ts`,name:`TypeLiteral`}],description:``,name:`title`,required:!1,tags:{},type:{name:`ReactNode`}},metricValue:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-donut-chart/types.ts`,name:`TypeLiteral`}],description:``,name:`metricValue`,required:!1,tags:{},type:{name:`ReactNode`}},metricLabel:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-donut-chart/types.ts`,name:`TypeLiteral`}],description:``,name:`metricLabel`,required:!1,tags:{},type:{name:`ReactNode`}},series:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-donut-chart/types.ts`,name:`TypeLiteral`}],description:``,name:`series`,required:!0,tags:{},type:{name:`DonutSeriesItem[]`}},highchartsDescription:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-donut-chart/types.ts`,name:`TypeLiteral`}],description:``,name:`highchartsDescription`,required:!1,tags:{},type:{name:`string | undefined`}},renderTooltipOutside:{defaultValue:{value:`true`},declarations:[{fileName:`ebayui-core-react/src/ebay-donut-chart/types.ts`,name:`TypeLiteral`}],description:`When true, renders the tooltip outside the chart SVG to prevent clipping. Default: true`,name:`renderTooltipOutside`,required:!1,tags:{},type:{name:`boolean | undefined`}}},tags:{}}}catch{}})))()}function E(){return(E=t((()=>{T()})))()}var D,O,k,A,j,M,N,P,F,I,L;function R(){return(R=t((()=>{n(),E(),D=i(),O={component:w,title:`charts/ebay-donut-chart`,tags:[`autodocs`],parameters:{docs:{description:{component:`Donut chart component powered by Highcharts. Displays a single series as a ring chart with arc spacing between slices, an optional title, optional metric value and label, and an integrated legend.

## Usage

### Import

\`\`\`jsx harmony
import { EbayDonutChart } from "@ebay/ui-core-react/ebay-donut-chart";
\`\`\`

### Basic

\`\`\`jsx
<EbayDonutChart
    series={[{
        data: [
            { name: "Electronics", y: 400 },
            { name: "Fashion", y: 300 },
            { name: "Home & Garden", y: 200 },
        ],
    }]}
/>
\`\`\`

### With title and metric

\`\`\`jsx
<EbayDonutChart
    title="Category Sales"
    metricValue="$12,345"
    metricLabel="Total Revenue"
    series={series}
/>
\`\`\``}}},argTypes:{title:{description:`Title displayed above the chart. Accepts a string or any React node.`,control:`text`},metricValue:{description:`Large value displayed in the metric section (e.g. a total dollar amount). Accepts a string or any React node.`,control:`text`},metricLabel:{description:'Label displayed below `metricValue` (e.g. `"Total Revenue"`). Accepts a string or any React node.',control:`text`},series:{description:"Array of series data. Only the first series is rendered — each data point requires `name` (string) and `y` (numeric value).",control:`object`},highchartsDescription:{description:`Accessible description passed to the Highcharts plot options for screen readers.`,control:`text`},renderTooltipOutside:{description:"When `true` (default), renders the tooltip outside the chart SVG to prevent clipping. Set to `false` when rendering inside a modal or dialog.",control:`boolean`}},globals:{a11y:{manual:!0}}},k=[{data:[{name:`Electronics`,y:400},{name:`Fashion`,y:300},{name:`Home & Garden`,y:200},{name:`Collectibles`,y:100}]}],A={args:{series:k}},j={args:{title:`Category Sales`,series:k}},M={args:{metricValue:`$12,345`,metricLabel:`Total Revenue`,series:k}},N={args:{title:`Category Sales`,metricValue:`$12,345`,metricLabel:`Total Revenue`,series:k}},P={render:e=>(0,D.jsx)(w,{...e,title:(0,D.jsx)(`span`,{style:{fontStyle:`italic`},children:`Category Breakdown`})}),args:{series:k}},F={args:{series:[{data:[{name:`Sold`,y:750},{name:`Unsold`,y:250}]}],metricValue:`75%`,metricLabel:`Sell-through rate`}},I={args:{series:[{data:[{name:`Electronics`,y:400},{name:`Fashion`,y:300},{name:`Home & Garden`,y:200},{name:`Collectibles`,y:100},{name:`Motors`,y:150}]}]}},L=[`Default`,`WithTitle`,`WithMetric`,`WithTitleAndMetric`,`WithReactNodeTitle`,`TwoSlices`,`FiveSlices`],A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    series: sampleSeries
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Category Sales",
    series: sampleSeries
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    metricValue: "$12,345",
    metricLabel: "Total Revenue",
    series: sampleSeries
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Category Sales",
    metricValue: "$12,345",
    metricLabel: "Total Revenue",
    series: sampleSeries
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: args => <EbayDonutChart {...args} title={<span style={{
    fontStyle: "italic"
  }}>Category Breakdown</span>} />,
  args: {
    series: sampleSeries
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    series: [{
      data: [{
        name: "Sold",
        y: 750
      }, {
        name: "Unsold",
        y: 250
      }]
    }],
    metricValue: "75%",
    metricLabel: "Sell-through rate"
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    series: [{
      data: [{
        name: "Electronics",
        y: 400
      }, {
        name: "Fashion",
        y: 300
      }, {
        name: "Home & Garden",
        y: 200
      }, {
        name: "Collectibles",
        y: 100
      }, {
        name: "Motors",
        y: 150
      }]
    }]
  }
}`,...I.parameters?.docs?.source}}}})))()}R();export{A as Default,I as FiveSlices,F as TwoSlices,M as WithMetric,P as WithReactNodeTitle,j as WithTitle,N as WithTitleAndMetric,L as __namedExportsOrder,O as default};