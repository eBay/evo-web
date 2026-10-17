import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-CK-NQdWx.js";import{t as r}from"./classnames-D09xBJOL.js";import{t as i}from"./debounce-CHr8AS-U.js";import{C as a,D as o,E as s,S as c,T as l,a as ee,b as u,c as te,d,f,h as p,i as m,l as ne,m as h,n as re,o as g,p as _,s as v,t as y,u as b,w as x,x as S,y as ie}from"./shared-Bpzu69Fi.js";import{t as C}from"./legend-CWpQV2Xe.js";function w({date:e,points:t,seriesLength:n}){let r=t.map(e=>e.tooltip?m(e.tooltip):n?`<div style="display:flex"><span>${m(e.series.name)}</span><span style="margin-left:16px">${m(e.label??``)}</span></div>`:m(e.label??``)).join(``);return`<b>${m(e)}</b><br>${r}`}function T(){return(T=t((()=>{g()})))()}function E(e){return(Array.isArray(e)?e:[e]).map((e,t)=>({...e,marker:{...e.marker,symbol:F[t%F.length]}}))}function D(e,t){let n=[d,h,p,f,_];if(t){let r=t.toLowerCase(),i=e[0]?.data[0]?.y??0,a=e[0]?.data,o=i<(a?.[a.length-1]?.y??0);r===`positive`||r!==`negative`&&r!==`neutral`&&o?n[0]=c:(r===`negative`||r!==`neutral`&&!o)&&(n[0]=S)}return n}function O(e){let t=e();t&&(t.series.forEach(e=>{e.data.forEach(e=>{!e.onTick&&e.className!==null?e.update({className:void 0,marker:{enabled:!1}},!1,!1):e.onTick&&e.className===null&&e.update({className:`ebay-line-chart__marker--visible`,onTick:e.onTick,marker:{enabled:!0,radius:P,lineColor:y,lineWidth:2}},!1,!1)})}),t.redraw())}function k(e,t){let n=e();if(!n)return;let r=t.target.x;n.series.forEach(e=>{e.data.forEach(e=>{e.x===r?e.update({className:`ebay-line-chart__marker--visible`,onTick:e.onTick,marker:{enabled:!0,radius:P,lineColor:y,lineWidth:2}},!1,!1):!e.onTick&&e.className!==null&&e.update({className:void 0,onTick:e.onTick,marker:{enabled:!1}},!1,!1)})}),n.redraw()}function A(e,t,n,r){if(!e)return;let i=t();i&&(r.current=Object.keys(i.axes[0].ticks).map(e=>parseInt(e,10)),n.current!==r.current.length&&(n.current=r.current.length,i.series.forEach(e=>{e.data.forEach(e=>{e.className!==null&&e.update({className:void 0,onTick:!1,marker:{enabled:!1}},!1,!1)})}),i.series.forEach(e=>{e.data.forEach(e=>{r.current.forEach(t=>{t===e.x&&e.className===null&&e.update({className:`ebay-line-chart__marker--visible`,onTick:!0,marker:{enabled:!0,radius:P,lineColor:y,lineWidth:2}},!1,!1)})})}),i.redraw()))}var j,M,N,P,F,I;function L(){return(L=t((()=>{j=e(n()),M=e(r()),l(),a(),g(),T(),C(x),N=`
    .ebay-line-chart .highcharts-point { opacity: 0; }
    .ebay-line-chart .ebay-line-chart__marker--visible { opacity: 1; }
    .ebay-line-chart .highcharts-legend-item .highcharts-point { opacity: 1; stroke-width: 0; }
    .ebay-line-chart .highcharts-legend-item .highcharts-graph { display: none; }
    .dark .ebay-line-chart .highcharts-halo { fill-opacity: 0.8; }
`,P=6,F=[`circle`,`square`,`triangle`,`triangle-down`,`diamond`],I=({title:e,description:t,series:n,xAxisLabelFormat:r,xAxisPositioner:a,yAxisLabels:c,yAxisPositioner:l,plotPoints:d,renderTooltipOutside:f=!0,trend:p,className:m,...h})=>{let g=(0,j.useRef)(null),_=()=>g.current?.chart??null,S=(0,j.useRef)(-1),C=(0,j.useRef)([]),T=(0,j.useMemo)(()=>E(n),[n]),P=(0,j.useMemo)(()=>D(T,p),[T,p]),F=(0,j.useRef)(i(()=>O(_),80)),I=(0,j.useRef)(i(e=>k(_,e),85));(0,j.useEffect)(()=>{A(d,_,S,C)},[]);let L=(0,j.useMemo)(()=>{let e=T.length>1,n=0,i=0;for(let e of T)for(let t of e.data)i=Math.max(t.y??0,i);let o={type:`datetime`,labels:{format:r||`{value:%b %e}`,align:`center`,style:{color:v}},tickWidth:0,tickPositioner:a,crosshair:{dashStyle:`Solid`}},s={gridLineColor:ee,opposite:!0,labels:{format:c?void 0:"${text}",formatter:c?function(){return this.isFirst&&(n=-1),n+=1,c[n]??``}:void 0,style:{color:v}},max:i,title:{enabled:!1},offset:0,tickPositioner:l},p={enabled:e,symbolRadius:6,symbolWidth:12,symbolHeight:12,itemStyle:{color:te},itemHiddenStyle:{color:b},itemHoverStyle:{color:ne}},m={formatter:function(){return w({date:x.dateFormat(`%b %e, %Y`,this.points?.[0]?.x??0,!1),points:this.points,seriesLength:e})},useHTML:!0,backgroundColor:ie,borderWidth:0,borderRadius:10,outside:f,shadow:!1,shared:!0,style:{filter:u,fontSize:`12px`}},h=T[0]?.data[0]?.x,g={line:{events:{mouseOut:F.current}},series:{description:t,lineWidth:3,pointStart:h,point:{events:{mouseOver:I.current,mouseOut:F.current}}}};return{chart:{type:`line`,backgroundColor:y,style:{fontFamily:re},events:{redraw:()=>A(d,_,S,C)}},colors:P,xAxis:o,yAxis:s,legend:p,tooltip:m,plotOptions:g,credits:{enabled:!1}}},[T,P,r,a,c,l,t,f,d]);return j.createElement(j.Fragment,null,j.createElement(`style`,null,N),j.createElement(`div`,{...h,className:(0,M.default)(`ebay-line-chart`,m)},j.createElement(s,{ref:g,highcharts:x,title:e,options:L},T.map((e,t)=>j.createElement(o,{key:e.name||t,type:`line`,data:e.data,options:{type:`line`,name:e.name}})))))};try{I.displayName=`linechart`,I.__docgenInfo={description:``,displayName:`linechart`,filePath:`/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-line-chart/line-chart.tsx`,methods:[],props:{title:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-line-chart/types.ts`,name:`TypeLiteral`}],description:``,name:`title`,required:!1,tags:{},type:{name:`string | undefined`}},description:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-line-chart/types.ts`,name:`TypeLiteral`}],description:``,name:`description`,required:!1,tags:{},type:{name:`string | undefined`}},series:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-line-chart/types.ts`,name:`TypeLiteral`}],description:``,name:`series`,required:!0,tags:{},type:{name:`LineChartSeriesItem | LineChartSeriesItem[]`}},xAxisLabelFormat:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-line-chart/types.ts`,name:`TypeLiteral`}],description:``,name:`xAxisLabelFormat`,required:!1,tags:{},type:{name:`string | undefined`}},xAxisPositioner:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-line-chart/types.ts`,name:`TypeLiteral`}],description:``,name:`xAxisPositioner`,required:!1,tags:{},type:{name:`any`}},yAxisLabels:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-line-chart/types.ts`,name:`TypeLiteral`}],description:``,name:`yAxisLabels`,required:!1,tags:{},type:{name:`string[] | undefined`}},yAxisPositioner:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-line-chart/types.ts`,name:`TypeLiteral`}],description:``,name:`yAxisPositioner`,required:!1,tags:{},type:{name:`any`}},plotPoints:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-line-chart/types.ts`,name:`TypeLiteral`}],description:``,name:`plotPoints`,required:!1,tags:{},type:{name:`boolean | undefined`}},renderTooltipOutside:{defaultValue:{value:`true`},declarations:[{fileName:`ebayui-core-react/src/ebay-line-chart/types.ts`,name:`TypeLiteral`}],description:``,name:`renderTooltipOutside`,required:!1,tags:{},type:{name:`boolean | undefined`}},trend:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-line-chart/types.ts`,name:`TypeLiteral`}],description:``,name:`trend`,required:!1,tags:{},type:{name:`"neutral" | "positive" | "negative" | undefined`}}},tags:{}}}catch{}})))()}function R(){return(R=t((()=>{L()})))()}function z(e){return V.slice(0,e)}var B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=t((()=>{R(),B={component:I,title:`charts/ebay-line-chart`,tags:[`autodocs`],parameters:{docs:{description:{component:`Line chart component powered by Highcharts. Displays time-series data as lines with support for single or multiple series, trend color indicators, tick-aligned plot points, and interactive hover markers.

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
\`\`\``}}},argTypes:{title:{description:`A title displayed above the chart`,control:`text`},description:{description:`A description of what the chart is displaying (for accessibility)`,control:`text`},series:{description:"The series data: a single series or an array of up to five series objects, each containing `data` points with `x` (epoch time) and `y` (numeric value)",control:`object`},trend:{description:'Sets the color of the first series to indicate trend direction. `"positive"` uses green, `"negative"` uses red, `"neutral"` uses the default color. If omitted, trend direction is auto-detected from the first and last `y` values.',control:{type:`select`},options:[`positive`,`negative`,`neutral`]},plotPoints:{description:"When `true`, renders visible markers at x-axis tick positions. Markers appear on hover between tick positions.",control:`boolean`},renderTooltipOutside:{description:"When `true` (default), renders the tooltip outside the chart SVG to prevent clipping. Set to `false` when rendering inside a modal or dialog.",control:`boolean`},xAxisLabelFormat:{description:'Highcharts date format string for x-axis labels. Default: `"{value:%b %e}"`',control:`text`},xAxisPositioner:{description:`A custom function that returns an array of epoch/unix time values for x-axis tick positions`,table:{category:`Callbacks`}},yAxisLabels:{description:`An array of custom labels to use on the y-axis, ordered from lowest to highest tick`,control:`object`},yAxisPositioner:{description:`A custom function that returns an array of numeric values for y-axis tick positions`,table:{category:`Callbacks`}}},globals:{a11y:{manual:!0}}},V=[{name:`Electronics`,data:[{x:16436736e5,y:686},{x:164376e7,y:3395},{x:16438464e5,y:4623},{x:16439328e5,y:742},{x:16440192e5,y:4525},{x:16441056e5,y:1568},{x:1644192e6,y:3511},{x:16442784e5,y:313},{x:16443648e5,y:653},{x:16444512e5,y:3117},{x:16445376e5,y:4497},{x:1644624e6,y:4206},{x:16447104e5,y:4640},{x:16447968e5,y:1849}]},{name:`Fashion`,data:[{x:16436736e5,y:2016},{x:164376e7,y:3035},{x:16438464e5,y:1452},{x:16439328e5,y:582},{x:16440192e5,y:1283},{x:16441056e5,y:3912},{x:1644192e6,y:2448},{x:16442784e5,y:717},{x:16443648e5,y:590},{x:16444512e5,y:1308},{x:16445376e5,y:3744},{x:1644624e6,y:1693},{x:16447104e5,y:4594},{x:16447968e5,y:3426}]},{name:`Home & Garden`,data:[{x:16436736e5,y:3744},{x:164376e7,y:4091},{x:16438464e5,y:1269},{x:16439328e5,y:4966},{x:16440192e5,y:1268},{x:16441056e5,y:4357},{x:1644192e6,y:3517},{x:16442784e5,y:4678},{x:16443648e5,y:4080},{x:16444512e5,y:1224},{x:16445376e5,y:356},{x:1644624e6,y:1534},{x:16447104e5,y:328},{x:16447968e5,y:4199}]}],H={args:{series:z(1)}},U={args:{series:z(2)}},W={args:{series:z(3)}},G={args:{title:`Revenue Over Time`,description:`Daily revenue trends across product categories`,series:z(2)}},K={args:{series:z(1),trend:`positive`}},q={args:{series:[{name:`Declining Revenue`,data:[{x:16436736e5,y:4640},{x:164376e7,y:4206},{x:16438464e5,y:4497},{x:16439328e5,y:3117},{x:16440192e5,y:653},{x:16441056e5,y:313},{x:1644192e6,y:1568},{x:16442784e5,y:742}]}],trend:`negative`}},J={args:{series:z(1),trend:`neutral`}},Y={args:{series:z(2),plotPoints:!0}},X={args:{series:z(1),yAxisLabels:[`$0`,`$1k`,`$2k`,`$3k`,`$4k`,`$5k`]}},Z={args:{series:z(1),xAxisLabelFormat:`{value:%b %e, %Y}`}},Q=[`SingleSeries`,`TwoSeries`,`ThreeSeries`,`WithTitle`,`TrendPositive`,`TrendNegative`,`TrendNeutral`,`WithPlotPoints`,`CustomYAxisLabels`,`CustomXAxisFormat`],H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    series: getSeries(1)
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    series: getSeries(2)
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    series: getSeries(3)
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Revenue Over Time",
    description: "Daily revenue trends across product categories",
    series: getSeries(2)
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    series: getSeries(1),
    trend: "positive"
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    series: getSeries(1),
    trend: "neutral"
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    series: getSeries(2),
    plotPoints: true
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    series: getSeries(1),
    yAxisLabels: ["$0", "$1k", "$2k", "$3k", "$4k", "$5k"]
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    series: getSeries(1),
    xAxisLabelFormat: "{value:%b %e, %Y}"
  }
}`,...Z.parameters?.docs?.source}}}})))()}$();export{Z as CustomXAxisFormat,X as CustomYAxisLabels,H as SingleSeries,W as ThreeSeries,q as TrendNegative,J as TrendNeutral,K as TrendPositive,U as TwoSeries,Y as WithPlotPoints,G as WithTitle,Q as __namedExportsOrder,B as default};