var re=Object.defineProperty;var o=(t,s)=>re(t,"name",{value:s,configurable:!0});import{r as l,R as y,c as te}from"./iframe-DXKVC7Wu.js";import{e as h,t as ae,a as se,l as ie,b as ne,c as oe,d as M,g as le,h as ce,i as A,C as de,H as w,S as ue,k as me,m as pe,n as ye,o as he,p as fe,q as ge,r as xe}from"./shared-qh-yE203.js";import{e as be}from"./legend-CvNFz2xV.js";import{d as I}from"./debounce-YHMMpFC7.js";import"./preload-helper-Cc2_yIPf.js";function ve({date:t,points:s,seriesLength:a}){const e=s.map(i=>{if(i.tooltip)return h(i.tooltip);if(a){const r=h(i.series.name),n=h(i.label??"");return`<div style="display:flex"><span>${r}</span><span style="margin-left:16px">${n}</span></div>`}return h(i.label??"")}).join("");return`<b>${h(t)}</b><br>${e}`}o(ve,"lineChartTooltipHtml");be(w);const ke=`
    .ebay-line-chart .highcharts-point { opacity: 0; }
    .ebay-line-chart .ebay-line-chart__marker--visible { opacity: 1; }
    .ebay-line-chart .highcharts-legend-item .highcharts-point { opacity: 1; stroke-width: 0; }
    .ebay-line-chart .highcharts-legend-item .highcharts-graph { display: none; }
    .dark .ebay-line-chart .highcharts-halo { fill-opacity: 0.8; }
`,O=6,V=["circle","square","triangle","triangle-down","diamond"];function Se(t){return(Array.isArray(t)?t:[t]).map((a,e)=>({...a,marker:{...a.marker,symbol:V[e%V.length]}}))}o(Se,"prepareSeries");function Te(t,s){const a=[pe,ye,he,fe,ge];if(s){const e=s.toLowerCase(),i=t[0]?.data[0]?.y??0,r=t[0]?.data,n=r?.[r.length-1]?.y??0,d=i<n;e==="positive"||e!=="negative"&&e!=="neutral"&&d?a[0]=me:(e==="negative"||e!=="neutral"&&!d)&&(a[0]=xe)}return a}o(Te,"resolveColors");function Ce(t){const s=t();s&&(s.series.forEach(a=>{a.data.forEach(e=>{!e.onTick&&e.className!==null?e.update({className:void 0,marker:{enabled:!1}},!1,!1):e.onTick&&e.className===null&&e.update({className:"ebay-line-chart__marker--visible",onTick:e.onTick,marker:{enabled:!0,radius:O,lineColor:A,lineWidth:2}},!1,!1)})}),s.redraw())}o(Ce,"handleMouseOut");function Le(t,s){const a=t();if(!a)return;const e=s.target.x;a.series.forEach(i=>{i.data.forEach(r=>{r.x===e?r.update({className:"ebay-line-chart__marker--visible",onTick:r.onTick,marker:{enabled:!0,radius:O,lineColor:A,lineWidth:2}},!1,!1):!r.onTick&&r.className!==null&&r.update({className:void 0,onTick:r.onTick,marker:{enabled:!1}},!1,!1)})}),a.redraw()}o(Le,"handleMouseOver");function Y(t,s,a,e){if(!t)return;const i=s();i&&(e.current=Object.keys(i.axes[0].ticks).map(r=>parseInt(r,10)),a.current!==e.current.length&&(a.current=e.current.length,i.series.forEach(r=>{r.data.forEach(n=>{n.className!==null&&n.update({className:void 0,onTick:!1,marker:{enabled:!1}},!1,!1)})}),i.series.forEach(r=>{r.data.forEach(n=>{e.current.forEach(d=>{d===n.x&&n.className===null&&n.update({className:"ebay-line-chart__marker--visible",onTick:!0,marker:{enabled:!0,radius:O,lineColor:A,lineWidth:2}},!1,!1)})})}),i.redraw()))}o(Y,"updateMarkers");const _=o(({title:t,description:s,series:a,xAxisLabelFormat:e,xAxisPositioner:i,yAxisLabels:r,yAxisPositioner:n,plotPoints:d,renderTooltipOutside:P=!0,trend:H,className:j,...D})=>{const $=l.useRef(null),f=o(()=>$.current?.chart??null,"getChart"),R=l.useRef(-1),W=l.useRef([]),m=l.useMemo(()=>Se(a),[a]),F=l.useMemo(()=>Te(m,H),[m,H]),q=l.useRef(I(()=>Ce(f),80)),X=l.useRef(I(u=>Le(f,u),85));l.useEffect(()=>{Y(d,f,R,W)},[]);const B=l.useMemo(()=>{const u=m.length>1;let p=0,E=0;for(const J of m)for(const ee of J.data)E=Math.max(ee.y??0,E);const G={type:"datetime",labels:{format:e||"{value:%b %e}",align:"center",style:{color:M}},tickWidth:0,tickPositioner:i,crosshair:{dashStyle:"Solid"}},Q={gridLineColor:le,opposite:!0,labels:{format:r?void 0:"${text}",formatter:r?function(){return this.isFirst&&(p=-1),p=p+1,r[p]??""}:void 0,style:{color:M}},max:E,title:{enabled:!1},offset:0,tickPositioner:n},z={enabled:u,symbolRadius:6,symbolWidth:12,symbolHeight:12,itemStyle:{color:oe},itemHiddenStyle:{color:ne},itemHoverStyle:{color:ie}},K={formatter:o(function(){return ve({date:w.dateFormat("%b %e, %Y",this.points?.[0]?.x??0,!1),points:this.points,seriesLength:u})},"formatter"),useHTML:!0,backgroundColor:se,borderWidth:0,borderRadius:10,outside:P,shadow:!1,shared:!0,style:{filter:ae,fontSize:"12px"}},U=m[0]?.data[0]?.x,Z={line:{events:{mouseOut:q.current}},series:{description:s,lineWidth:3,pointStart:U,point:{events:{mouseOver:X.current,mouseOut:q.current}}}};return{chart:{type:"line",backgroundColor:A,style:{fontFamily:ce},events:{redraw:o(()=>Y(d,f,R,W),"redraw")}},colors:F,xAxis:G,yAxis:Q,legend:z,tooltip:K,plotOptions:Z,credits:{enabled:!1}}},[m,F,e,i,r,n,s,P,d]);return y.createElement(y.Fragment,null,y.createElement("style",null,ke),y.createElement("div",{...D,className:te("ebay-line-chart",j)},y.createElement(de,{ref:$,highcharts:w,title:t,options:B},m.map((u,p)=>y.createElement(ue,{key:u.name||p,type:"line",data:u.data,options:{type:"line",name:u.name}})))))},"EbayLineChart");try{_.displayName="linechart",_.__docgenInfo={description:"",displayName:"linechart",filePath:"/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-line-chart/line-chart.tsx",methods:[],props:{title:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-line-chart/types.ts",name:"TypeLiteral"}],description:"",name:"title",required:!1,tags:{},type:{name:"string"}},description:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-line-chart/types.ts",name:"TypeLiteral"}],description:"",name:"description",required:!1,tags:{},type:{name:"string"}},series:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-line-chart/types.ts",name:"TypeLiteral"}],description:"",name:"series",required:!0,tags:{},type:{name:"LineChartSeriesItem | LineChartSeriesItem[]"}},xAxisLabelFormat:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-line-chart/types.ts",name:"TypeLiteral"}],description:"",name:"xAxisLabelFormat",required:!1,tags:{},type:{name:"string"}},xAxisPositioner:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-line-chart/types.ts",name:"TypeLiteral"}],description:"",name:"xAxisPositioner",required:!1,tags:{},type:{name:"Highcharts.XAxisOptions"}},yAxisLabels:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-line-chart/types.ts",name:"TypeLiteral"}],description:"",name:"yAxisLabels",required:!1,tags:{},type:{name:"string[]"}},yAxisPositioner:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-line-chart/types.ts",name:"TypeLiteral"}],description:"",name:"yAxisPositioner",required:!1,tags:{},type:{name:"Highcharts.YAxisOptions"}},plotPoints:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-line-chart/types.ts",name:"TypeLiteral"}],description:"",name:"plotPoints",required:!1,tags:{},type:{name:"boolean"}},renderTooltipOutside:{defaultValue:{value:"true"},declarations:[{fileName:"ebayui-core-react/src/ebay-line-chart/types.ts",name:"TypeLiteral"}],description:"",name:"renderTooltipOutside",required:!1,tags:{},type:{name:"boolean"}},trend:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-line-chart/types.ts",name:"TypeLiteral"}],description:"",name:"trend",required:!1,tags:{},type:{name:'"neutral" | "positive" | "negative"'}}},tags:{}}}catch{}const He={component:_,title:"charts/ebay-line-chart",tags:["autodocs"],parameters:{docs:{description:{component:`Line chart component powered by Highcharts. Displays time-series data as lines with support for single or multiple series, trend color indicators, tick-aligned plot points, and interactive hover markers.

## Usage

### Import

\`\`\`jsx harmony
import { EbayLineChart } from "@ebay/ui-core-react/ebay-line-chart";
\`\`\`

### Basic

\`\`\`jsx
<EbayLineChart
    series={[{
        name: "Revenue",
        data: [
            { x: 1643673600000, y: 686 },
            { x: 1643760000000, y: 3395 },
        ],
    }]}
/>
\`\`\`

### With trend indicator

\`\`\`jsx
<EbayLineChart
    series={series}
    trend="positive"
/>
\`\`\`

### With plot points at tick marks

\`\`\`jsx
<EbayLineChart
    series={series}
    plotPoints
/>
\`\`\``}}},argTypes:{title:{description:"A title displayed above the chart",control:"text"},description:{description:"A description of what the chart is displaying (for accessibility)",control:"text"},series:{description:"The series data: a single series or an array of up to five series objects, each containing `data` points with `x` (epoch time) and `y` (numeric value)",control:"object"},trend:{description:'Sets the color of the first series to indicate trend direction. `"positive"` uses green, `"negative"` uses red, `"neutral"` uses the default color. If omitted, trend direction is auto-detected from the first and last `y` values.',control:{type:"select"},options:["positive","negative","neutral"]},plotPoints:{description:"When `true`, renders visible markers at x-axis tick positions. Markers appear on hover between tick positions.",control:"boolean"},renderTooltipOutside:{description:"When `true` (default), renders the tooltip outside the chart SVG to prevent clipping. Set to `false` when rendering inside a modal or dialog.",control:"boolean"},xAxisLabelFormat:{description:'Highcharts date format string for x-axis labels. Default: `"{value:%b %e}"`',control:"text"},xAxisPositioner:{description:"A custom function that returns an array of epoch/unix time values for x-axis tick positions",table:{category:"Callbacks"}},yAxisLabels:{description:"An array of custom labels to use on the y-axis, ordered from lowest to highest tick",control:"object"},yAxisPositioner:{description:"A custom function that returns an array of numeric values for y-axis tick positions",table:{category:"Callbacks"}}},globals:{a11y:{manual:!0}}},Ne=[{name:"Electronics",data:[{x:16436736e5,y:686},{x:164376e7,y:3395},{x:16438464e5,y:4623},{x:16439328e5,y:742},{x:16440192e5,y:4525},{x:16441056e5,y:1568},{x:1644192e6,y:3511},{x:16442784e5,y:313},{x:16443648e5,y:653},{x:16444512e5,y:3117},{x:16445376e5,y:4497},{x:1644624e6,y:4206},{x:16447104e5,y:4640},{x:16447968e5,y:1849}]},{name:"Fashion",data:[{x:16436736e5,y:2016},{x:164376e7,y:3035},{x:16438464e5,y:1452},{x:16439328e5,y:582},{x:16440192e5,y:1283},{x:16441056e5,y:3912},{x:1644192e6,y:2448},{x:16442784e5,y:717},{x:16443648e5,y:590},{x:16444512e5,y:1308},{x:16445376e5,y:3744},{x:1644624e6,y:1693},{x:16447104e5,y:4594},{x:16447968e5,y:3426}]},{name:"Home & Garden",data:[{x:16436736e5,y:3744},{x:164376e7,y:4091},{x:16438464e5,y:1269},{x:16439328e5,y:4966},{x:16440192e5,y:1268},{x:16441056e5,y:4357},{x:1644192e6,y:3517},{x:16442784e5,y:4678},{x:16443648e5,y:4080},{x:16444512e5,y:1224},{x:16445376e5,y:356},{x:1644624e6,y:1534},{x:16447104e5,y:328},{x:16447968e5,y:4199}]}];function c(t){return Ne.slice(0,t)}o(c,"getSeries");const g={args:{series:c(1)}},x={args:{series:c(2)}},b={args:{series:c(3)}},v={args:{title:"Revenue Over Time",description:"Daily revenue trends across product categories",series:c(2)}},k={args:{series:c(1),trend:"positive"}},S={args:{series:[{name:"Declining Revenue",data:[{x:16436736e5,y:4640},{x:164376e7,y:4206},{x:16438464e5,y:4497},{x:16439328e5,y:3117},{x:16440192e5,y:653},{x:16441056e5,y:313},{x:1644192e6,y:1568},{x:16442784e5,y:742}]}],trend:"negative"}},T={args:{series:c(1),trend:"neutral"}},C={args:{series:c(2),plotPoints:!0}},L={args:{series:c(1),yAxisLabels:["$0","$1k","$2k","$3k","$4k","$5k"]}},N={args:{series:c(1),xAxisLabelFormat:"{value:%b %e, %Y}"}},$e=["SingleSeries","TwoSeries","ThreeSeries","WithTitle","TrendPositive","TrendNegative","TrendNeutral","WithPlotPoints","CustomYAxisLabels","CustomXAxisFormat"];g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    series: getSeries(1)
  }
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    series: getSeries(2)
  }
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    series: getSeries(3)
  }
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Revenue Over Time",
    description: "Daily revenue trends across product categories",
    series: getSeries(2)
  }
}`,...v.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    series: getSeries(1),
    trend: "positive"
  }
}`,...k.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    series: [{
      name: "Declining Revenue",
      data: [{
        x: 1643673600000,
        y: 4640
      }, {
        x: 1643760000000,
        y: 4206
      }, {
        x: 1643846400000,
        y: 4497
      }, {
        x: 1643932800000,
        y: 3117
      }, {
        x: 1644019200000,
        y: 653
      }, {
        x: 1644105600000,
        y: 313
      }, {
        x: 1644192000000,
        y: 1568
      }, {
        x: 1644278400000,
        y: 742
      }]
    }],
    trend: "negative"
  }
}`,...S.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    series: getSeries(1),
    trend: "neutral"
  }
}`,...T.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    series: getSeries(2),
    plotPoints: true
  }
}`,...C.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    series: getSeries(1),
    yAxisLabels: ["$0", "$1k", "$2k", "$3k", "$4k", "$5k"]
  }
}`,...L.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    series: getSeries(1),
    xAxisLabelFormat: "{value:%b %e, %Y}"
  }
}`,...N.parameters?.docs?.source}}};export{N as CustomXAxisFormat,L as CustomYAxisLabels,g as SingleSeries,b as ThreeSeries,S as TrendNegative,T as TrendNeutral,k as TrendPositive,x as TwoSeries,C as WithPlotPoints,v as WithTitle,$e as __namedExportsOrder,He as default};
