var w=Object.defineProperty;var n=(t,a)=>w(t,"name",{value:a,configurable:!0});import{r as f,R as e,c as D}from"./iframe-DXKVC7Wu.js";import{e as _,t as R,h as V,i as x,C as H,H as E,u as W}from"./shared-qh-yE203.js";import{E as A}from"./chart-legend-GIptLgz3.js";import"./preload-helper-Cc2_yIPf.js";function M(t){t.wrap(t.seriesTypes.pie.prototype,"translate",function(a){if(a.call(this),this.points.length===1)return;const r=this.center[2],o=2*Math.asin(5/r);this.points.forEach(i=>{i.shapeArgs.start+=o/2,i.shapeArgs.end-=o/2})})}n(M,"ebayDonut");function k({name:t,value:a,tooltip:r}){const s=_(r??a);return`<div class="donut-tooltip tooltip__overlay" role="tooltip"><div class="tooltip__mask"><div class="tooltip__cell"><div class="tooltip__content"><b>${_(t)}</b><br>${s}</div></div></div></div>`}n(k,"donutChartTooltipHtml");M(E);const F=`
    .donut-tooltip.tooltip__overlay { display: block; position: relative; }
`;function q(t){const a=t[0];if(!a)return{prepared:void 0,colors:[]};const r={...a,type:a.type??"pie"},s=W(r);return{prepared:r,colors:s}}n(q,"prepareSeries");const b=n(({title:t,metricValue:a,metricLabel:r,series:s,highchartsDescription:o,renderTooltipOutside:i=!0,className:T,...C})=>{s.length===0&&console.warn("EbayDonutChart: at least one series is required."),s.length>1&&console.warn("EbayDonutChart: only one series is supported. Additional series will be ignored.");const{prepared:c,colors:v}=f.useMemo(()=>q(s),[s]),N=f.useMemo(()=>c?.data?.map(S=>({name:S.name??"",value:S.y}))??[],[c]),L=f.useMemo(()=>({chart:{type:"pie",spacing:[0,0,0,0],margin:[0,0,0,0],backgroundColor:x,style:{fontFamily:V}},colors:v,title:{text:void 0},plotOptions:{pie:{description:o,size:"100%",thickness:10,allowPointSelect:!1,cursor:"pointer",borderRadius:"30%",dataLabels:{enabled:!1},states:{hover:{halo:{size:0}}}}},tooltip:{hideDelay:250,useHTML:!0,backgroundColor:"transparent",padding:0,borderWidth:0,borderRadius:0,outside:i,shadow:!1,shared:!0,style:{filter:R,fontSize:"12px"},formatter:n(function(){return k({name:String(this.key??""),value:String(this.y??""),tooltip:this.tooltip})},"formatter")},series:c?[c]:[],credits:{enabled:!1}}),[c,v,o,i]);return e.createElement(e.Fragment,null,e.createElement("style",null,F),e.createElement("div",{...C,className:D("donut-chart",T)},e.createElement("div",{className:"donut-chart__grid"},t&&e.createElement("div",{className:"donut-chart__title"},t),(a||r)&&e.createElement("div",{className:"donut-chart__metric"},a&&e.createElement("div",{className:"donut-chart__metric-value"},a),r&&e.createElement("div",{className:"donut-chart__metric-label"},r)),e.createElement("div",{className:"donut-chart__graph"},e.createElement(H,{highcharts:E,options:L})),e.createElement("div",{className:"donut-chart__legend"},e.createElement(A,{items:N})))))},"EbayDonutChart");try{b.displayName="donutchart",b.__docgenInfo={description:"",displayName:"donutchart",filePath:"/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-donut-chart/donut-chart.tsx",methods:[],props:{title:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-donut-chart/types.ts",name:"TypeLiteral"}],description:"",name:"title",required:!1,tags:{},type:{name:"ReactNode"}},metricValue:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-donut-chart/types.ts",name:"TypeLiteral"}],description:"",name:"metricValue",required:!1,tags:{},type:{name:"ReactNode"}},metricLabel:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-donut-chart/types.ts",name:"TypeLiteral"}],description:"",name:"metricLabel",required:!1,tags:{},type:{name:"ReactNode"}},series:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-donut-chart/types.ts",name:"TypeLiteral"}],description:"",name:"series",required:!0,tags:{},type:{name:"DonutSeriesItem[]"}},highchartsDescription:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-donut-chart/types.ts",name:"TypeLiteral"}],description:"",name:"highchartsDescription",required:!1,tags:{},type:{name:"string"}},renderTooltipOutside:{defaultValue:{value:"true"},declarations:[{fileName:"ebayui-core-react/src/ebay-donut-chart/types.ts",name:"TypeLiteral"}],description:"When true, renders the tooltip outside the chart SVG to prevent clipping. Default: true",name:"renderTooltipOutside",required:!1,tags:{},type:{name:"boolean"}}},tags:{}}}catch{}const U={component:b,title:"charts/ebay-donut-chart",tags:["autodocs"],parameters:{docs:{description:{component:`Donut chart component powered by Highcharts. Displays a single series as a ring chart with arc spacing between slices, an optional title, optional metric value and label, and an integrated legend.

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
\`\`\``}}},argTypes:{title:{description:"Title displayed above the chart. Accepts a string or any React node.",control:"text"},metricValue:{description:"Large value displayed in the metric section (e.g. a total dollar amount). Accepts a string or any React node.",control:"text"},metricLabel:{description:'Label displayed below `metricValue` (e.g. `"Total Revenue"`). Accepts a string or any React node.',control:"text"},series:{description:"Array of series data. Only the first series is rendered — each data point requires `name` (string) and `y` (numeric value).",control:"object"},highchartsDescription:{description:"Accessible description passed to the Highcharts plot options for screen readers.",control:"text"},renderTooltipOutside:{description:"When `true` (default), renders the tooltip outside the chart SVG to prevent clipping. Set to `false` when rendering inside a modal or dialog.",control:"boolean"}},globals:{a11y:{manual:!0}}},l=[{data:[{name:"Electronics",y:400},{name:"Fashion",y:300},{name:"Home & Garden",y:200},{name:"Collectibles",y:100}]}],d={args:{series:l}},m={args:{title:"Category Sales",series:l}},p={args:{metricValue:"$12,345",metricLabel:"Total Revenue",series:l}},u={args:{title:"Category Sales",metricValue:"$12,345",metricLabel:"Total Revenue",series:l}},y={render:n(t=>e.createElement(b,{...t,title:e.createElement("span",{style:{fontStyle:"italic"}},"Category Breakdown")}),"render"),args:{series:l}},h={args:{series:[{data:[{name:"Sold",y:750},{name:"Unsold",y:250}]}],metricValue:"75%",metricLabel:"Sell-through rate"}},g={args:{series:[{data:[{name:"Electronics",y:400},{name:"Fashion",y:300},{name:"Home & Garden",y:200},{name:"Collectibles",y:100},{name:"Motors",y:150}]}]}},z=["Default","WithTitle","WithMetric","WithTitleAndMetric","WithReactNodeTitle","TwoSlices","FiveSlices"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    series: sampleSeries
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Category Sales",
    series: sampleSeries
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    metricValue: "$12,345",
    metricLabel: "Total Revenue",
    series: sampleSeries
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Category Sales",
    metricValue: "$12,345",
    metricLabel: "Total Revenue",
    series: sampleSeries
  }
}`,...u.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <EbayDonutChart {...args} title={<span style={{
    fontStyle: "italic"
  }}>Category Breakdown</span>} />,
  args: {
    series: sampleSeries
  }
}`,...y.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};export{d as Default,g as FiveSlices,h as TwoSlices,p as WithMetric,y as WithReactNodeTitle,m as WithTitle,u as WithTitleAndMetric,z as __namedExportsOrder,U as default};
