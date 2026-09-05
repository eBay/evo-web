var U=Object.defineProperty;var r=(e,a)=>U(e,"name",{value:a,configurable:!0});import{r as w,R as c,c as W}from"./iframe-DXKVC7Wu.js";import{e as u,t as M,a as I,l as Y,b as z,c as B,d as k,g as G,f as J,h as K,i as Q,C as X,H as v,S as Z,s as P,j as ee}from"./shared-qh-yE203.js";import{e as ae}from"./legend-CvNFz2xV.js";import"./preload-helper-Cc2_yIPf.js";function te({date:e,points:a,total:t,valueFormatter:s}){const n=a.map(o=>{const i=u(o.series.name),y=u(o.label!==void 0?o.label:s(o.y??0));return`<div style="display:flex;justify-content:space-between;gap:var(--spacing-200, 16px)"><span>${i}</span><span>${y}</span></div>`}).join(""),p=t?`<div style="display:flex;justify-content:space-between;gap:var(--spacing-200, 16px)"><span>Total</span><span>${u(s(t))}</span></div>`:"";return`<b>${u(e)}</b>${n}${p}`}r(te,"areaChartTooltipHtml");ae(v);const re=`
    .ebay-area-chart { width: 100%; }
    .ebay-area-chart .highcharts-tooltip-container svg { overflow: visible; }
`;function se(e,a){const t=typeof e=="string"?parseFloat(e):e;return a("%b %e, %Y",t)}r(se,"defaultTooltipTitleFormatter");function oe(e){const a=typeof e=="string"?parseFloat(e):e;return Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(a)}r(oe,"defaultTooltipValueFormatter");function ie(e){const a=typeof e=="string"?parseFloat(e):e;return Intl.NumberFormat("en-US",{notation:"compact",style:"currency",currency:"USD",maximumSignificantDigits:4}).format(a)}r(ie,"defaultYLabelFormatter");function A(e,a){return Object.keys(e).forEach(t=>{const s=e[t],n=a[t];s instanceof Object&&Object.assign(s,A(n??{},s))}),Object.assign(a,e)}r(A,"mergeConfigs");function ne(e){const a=(Array.isArray(e)?e:[e]).map(t=>({...t,data:Array.isArray(t.data)?[...t.data]:t.data}));return P(a),ee(a),a}r(ne,"prepareSeries");const C=r(({title:e,description:a,series:t,tooltipValueFormatter:s=oe,tooltipTitleFormatter:n=se,xLabelFormatter:p,yLabelFormatter:o=ie,areaType:i="areaspline",renderTooltipOutside:y=!0,highchartOptions:S,className:N,...E})=>{const T=w.useMemo(()=>ne(t),[t]),V=w.useMemo(()=>{const m=T.length>1,F={type:"datetime",labels:{formatter:p?function(){return p(this.value,v.dateFormat)}:void 0,format:"{value:%b %e}",align:"center",style:{color:k}},tickWidth:0,crosshair:{color:"rgba(0, 0, 0, 0.2)",zIndex:3}},H={gridLineColor:G,opposite:!0,reversedStacks:!1,labels:{formatter:r(function(){return o(this.value)},"formatter"),style:{color:k}},title:{enabled:!1},offset:0},j={enabled:m,symbolRadius:2,symbolWidth:12,symbolHeight:12,align:"left",itemStyle:{color:B,fontWeight:"normal"},itemHiddenStyle:{color:z},itemHoverStyle:{color:Y}},D={formatter:r(function(){const _=n(this.x??0,v.dateFormat),R=this.points&&this.points.length>1&&this.points.reduce(($,q)=>$+(q.y??0)*100,0)/100;return te({date:_,points:this.points,total:R||!1,valueFormatter:s})},"formatter"),useHTML:!0,backgroundColor:I,borderWidth:0,borderRadius:10,outside:y,shadow:!1,shared:!0,style:{filter:M,fontSize:"12px"}},O={series:{accessibility:{description:a},stacking:"normal",states:{hover:{halo:{size:0}}},marker:{enabled:!1,animation:{duration:0}}},[i]:{className:"ebay-area-chart",lineWidth:1}},L={chart:{type:i,animation:!1,backgroundColor:Q,style:{fontFamily:K}},colors:J,xAxis:F,yAxis:H,legend:j,tooltip:D,plotOptions:O,credits:{enabled:!1}};return S?A(L,S):L},[T,i,a,p,o,s,n,y,S]);return c.createElement(c.Fragment,null,c.createElement("style",null,re),c.createElement("div",{...E,className:W("ebay-area-chart",N)},c.createElement(X,{highcharts:v,title:e,options:V},T.map((m,F)=>c.createElement(Z,{key:m.name||F,type:i,data:m.data??[],options:{type:i,name:m.name}})))))},"EbayAreaChart");try{C.displayName="areachart",C.__docgenInfo={description:"",displayName:"areachart",filePath:"/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-area-chart/area-chart.tsx",methods:[],props:{title:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-area-chart/types.ts",name:"TypeLiteral"}],description:"",name:"title",required:!1,tags:{},type:{name:"string"}},description:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-area-chart/types.ts",name:"TypeLiteral"}],description:"",name:"description",required:!1,tags:{},type:{name:"string"}},tooltipValueFormatter:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-area-chart/types.ts",name:"TypeLiteral"}],description:"",name:"tooltipValueFormatter",required:!1,tags:{},type:{name:"(value: string | number) => string"}},tooltipTitleFormatter:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-area-chart/types.ts",name:"TypeLiteral"}],description:"",name:"tooltipTitleFormatter",required:!1,tags:{},type:{name:"(value: string | number, dateFormat: any) => string"}},xLabelFormatter:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-area-chart/types.ts",name:"TypeLiteral"}],description:"",name:"xLabelFormatter",required:!1,tags:{},type:{name:"(value: string | number, dateFormat: any) => string"}},yLabelFormatter:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-area-chart/types.ts",name:"TypeLiteral"}],description:"",name:"yLabelFormatter",required:!1,tags:{},type:{name:"(value: string | number) => string"}},renderTooltipOutside:{defaultValue:{value:"true"},declarations:[{fileName:"ebayui-core-react/src/ebay-area-chart/types.ts",name:"TypeLiteral"}],description:"",name:"renderTooltipOutside",required:!1,tags:{},type:{name:"boolean"}},highchartOptions:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-area-chart/types.ts",name:"TypeLiteral"}],description:"",name:"highchartOptions",required:!1,tags:{},type:{name:"Highcharts.Options"}},areaType:{defaultValue:{value:"areaspline"},declarations:[{fileName:"ebayui-core-react/src/ebay-area-chart/types.ts",name:"TypeLiteral"},{fileName:"ebayui-core-react/src/ebay-area-chart/types.ts",name:"TypeLiteral"}],description:"",name:"areaType",required:!1,tags:{},type:{name:'"area" | "areaspline"'}},series:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-area-chart/types.ts",name:"TypeLiteral"},{fileName:"ebayui-core-react/src/ebay-area-chart/types.ts",name:"TypeLiteral"}],description:"",name:"series",required:!0,tags:{},type:{name:"any"}}},tags:{}}}catch{}const de={component:C,title:"charts/ebay-area-chart",tags:["autodocs"],parameters:{docs:{description:{component:`Area chart component powered by Highcharts. Displays time-series data as filled area shapes with support for single or multiple stacked series, custom axis formatting, and interactive tooltips.

## Usage

### Import

\`\`\`jsx harmony
import { EbayAreaChart } from "@ebay/ui-core-react/ebay-area-chart";
\`\`\`

### Basic

\`\`\`jsx
<EbayAreaChart
    series={[{
        name: "Revenue",
        data: [
            { x: 1643673600000, y: 686 },
            { x: 1643760000000, y: 3395 },
        ],
    }]}
/>
\`\`\`

### Multi-series (stacked)

\`\`\`jsx
<EbayAreaChart
    series={[
        { name: "Electronics", data: [...] },
        { name: "Fashion", data: [...] },
    ]}
/>
\`\`\`

### Custom formatters

\`\`\`jsx
<EbayAreaChart
    series={series}
    yLabelFormatter={(v) => \`\${Number(v).toLocaleString()} units\`}
    tooltipValueFormatter={(v) => \`\${v} items\`}
/>
\`\`\``}}},argTypes:{title:{description:"A title displayed above the chart",control:"text"},description:{description:"A description of what the chart is displaying (for accessibility)",control:"text"},series:{description:"The series data: a single series or an array of up to five series objects, each containing `data` points with `x` (epoch time) and `y` (numeric value)",control:"object"},areaType:{description:'Highcharts series type. Use `"areaspline"` (default) for smooth curves or `"area"` for straight lines between points.',control:{type:"select"},options:["areaspline","area"]},xLabelFormatter:{description:"Custom function to format x-axis labels. Receives the raw value and `Highcharts.dateFormat`.",table:{category:"Callbacks"}},yLabelFormatter:{description:"Custom function to format y-axis labels. Defaults to compact USD currency (e.g. `$4.6k`).",table:{category:"Callbacks"}},tooltipValueFormatter:{description:"Custom function to format the per-series value in the tooltip. Defaults to full USD currency.",table:{category:"Callbacks"}},tooltipTitleFormatter:{description:'Custom function to format the date header in the tooltip. Defaults to `"Jan 1, 2022"` format.',table:{category:"Callbacks"}},renderTooltipOutside:{description:"When `true` (default), renders the tooltip outside the chart SVG to prevent clipping. Set to `false` when rendering inside a modal or dialog.",control:"boolean"},highchartOptions:{description:"Escape hatch for passing raw Highcharts options. Deep-merged into the default config — use sparingly.",control:"object"}},globals:{a11y:{manual:!0}}},ce=[{name:"Electronics",data:[{x:16436736e5,y:686},{x:164376e7,y:3395},{x:16438464e5,y:4623},{x:16439328e5,y:742},{x:16440192e5,y:4525},{x:16441056e5,y:1568},{x:1644192e6,y:3511},{x:16442784e5,y:313},{x:16443648e5,y:653},{x:16444512e5,y:3117},{x:16445376e5,y:4497},{x:1644624e6,y:4206},{x:16447104e5,y:4640},{x:16447968e5,y:1849}]},{name:"Fashion",data:[{x:16436736e5,y:2016},{x:164376e7,y:3035},{x:16438464e5,y:1452},{x:16439328e5,y:582},{x:16440192e5,y:1283},{x:16441056e5,y:3912},{x:1644192e6,y:2448},{x:16442784e5,y:717},{x:16443648e5,y:590},{x:16444512e5,y:1308},{x:16445376e5,y:3744},{x:1644624e6,y:1693},{x:16447104e5,y:4594},{x:16447968e5,y:3426}]},{name:"Home & Garden",data:[{x:16436736e5,y:3744},{x:164376e7,y:4091},{x:16438464e5,y:1269},{x:16439328e5,y:4966},{x:16440192e5,y:1268},{x:16441056e5,y:4357},{x:1644192e6,y:3517},{x:16442784e5,y:4678},{x:16443648e5,y:4080},{x:16444512e5,y:1224},{x:16445376e5,y:356},{x:1644624e6,y:1534},{x:16447104e5,y:328},{x:16447968e5,y:4199}]}];function l(e){return ce.slice(0,e)}r(l,"getSeries");const d={args:{series:l(1)}},g={args:{series:l(2)}},h={args:{series:l(3)}},f={args:{title:"Revenue Over Time",description:"Daily revenue breakdown across product categories",series:l(2)}},b={args:{series:l(2),areaType:"area"}},x={args:{series:l(1),yLabelFormatter:r(e=>`${(Number(e)/1e3).toFixed(1)}k units`,"yLabelFormatter")}},ge=["SingleSeries","TwoSeries","ThreeSeries","WithTitle","AreaType","CustomYAxisLabels"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    series: getSeries(1)
  }
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    series: getSeries(2)
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    series: getSeries(3)
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Revenue Over Time",
    description: "Daily revenue breakdown across product categories",
    series: getSeries(2)
  }
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    series: getSeries(2),
    areaType: "area"
  }
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    series: getSeries(1),
    yLabelFormatter: v => \`\${(Number(v) / 1000).toFixed(1)}k units\`
  }
}`,...x.parameters?.docs?.source}}};export{b as AreaType,x as CustomYAxisLabels,d as SingleSeries,h as ThreeSeries,g as TwoSeries,f as WithTitle,ge as __namedExportsOrder,de as default};
