import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-CK-NQdWx.js";import{t as r}from"./classnames-D09xBJOL.js";import{C as i,D as a,E as o,T as s,_ as c,a as l,b as u,c as d,i as f,l as p,n as m,o as h,r as g,s as _,t as v,u as y,v as b,w as x,y as S}from"./shared-Bpzu69Fi.js";import{t as C}from"./legend-CWpQV2Xe.js";function w({date:e,points:t,total:n,valueFormatter:r}){let i=t.map(e=>`<div style="display:flex;justify-content:space-between;gap:var(--spacing-200, 16px)"><span>${f(e.series.name)}</span><span>${f(e.label===void 0?r(e.y??0):e.label)}</span></div>`).join(``),a=n?`<div style="display:flex;justify-content:space-between;gap:var(--spacing-200, 16px)"><span>Total</span><span>${f(r(n))}</span></div>`:``;return`<b>${f(e)}</b>${i}${a}`}function T(){return(T=t((()=>{h()})))()}function E(e,t){return t(`%b %e, %Y`,typeof e==`string`?parseFloat(e):e)}function D(e){let t=typeof e==`string`?parseFloat(e):e;return Intl.NumberFormat(`en-US`,{style:`currency`,currency:`USD`}).format(t)}function O(e){let t=typeof e==`string`?parseFloat(e):e;return Intl.NumberFormat(`en-US`,{notation:`compact`,style:`currency`,currency:`USD`,maximumSignificantDigits:4}).format(t)}function k(e,t){return Object.keys(e).forEach(n=>{let r=e[n],i=t[n];r instanceof Object&&Object.assign(r,k(i??{},r))}),Object.assign(t,e)}function A(e){let t=(Array.isArray(e)?e:[e]).map(e=>({...e,data:Array.isArray(e.data)?[...e.data]:e.data}));return b(t),c(t),t}var j,M,N,P;function F(){return(F=t((()=>{j=e(n()),M=e(r()),s(),i(),h(),T(),C(x),N=`
    .ebay-area-chart { width: 100%; }
    .ebay-area-chart .highcharts-tooltip-container svg { overflow: visible; }
`,P=({title:e,description:t,series:n,tooltipValueFormatter:r=D,tooltipTitleFormatter:i=E,xLabelFormatter:s,yLabelFormatter:c=O,areaType:f=`areaspline`,renderTooltipOutside:h=!0,highchartOptions:b,className:C,...T})=>{let P=(0,j.useMemo)(()=>A(n),[n]),F=(0,j.useMemo)(()=>{let e=P.length>1,n={chart:{type:f,animation:!1,backgroundColor:v,style:{fontFamily:m}},colors:g,xAxis:{type:`datetime`,labels:{formatter:s?function(){return s(this.value,x.dateFormat)}:void 0,format:`{value:%b %e}`,align:`center`,style:{color:_}},tickWidth:0,crosshair:{color:`rgba(0, 0, 0, 0.2)`,zIndex:3}},yAxis:{gridLineColor:l,opposite:!0,reversedStacks:!1,labels:{formatter:function(){return c(this.value)},style:{color:_}},title:{enabled:!1},offset:0},legend:{enabled:e,symbolRadius:2,symbolWidth:12,symbolHeight:12,align:`left`,itemStyle:{color:d,fontWeight:`normal`},itemHiddenStyle:{color:y},itemHoverStyle:{color:p}},tooltip:{formatter:function(){let e=i(this.x??0,x.dateFormat),t=this.points&&this.points.length>1&&this.points.reduce((e,t)=>e+(t.y??0)*100,0)/100;return w({date:e,points:this.points,total:t||!1,valueFormatter:r})},useHTML:!0,backgroundColor:S,borderWidth:0,borderRadius:10,outside:h,shadow:!1,shared:!0,style:{filter:u,fontSize:`12px`}},plotOptions:{series:{accessibility:{description:t},stacking:`normal`,states:{hover:{halo:{size:0}}},marker:{enabled:!1,animation:{duration:0}}},[f]:{className:`ebay-area-chart`,lineWidth:1}},credits:{enabled:!1}};return b?k(n,b):n},[P,f,t,s,c,r,i,h,b]);return j.createElement(j.Fragment,null,j.createElement(`style`,null,N),j.createElement(`div`,{...T,className:(0,M.default)(`ebay-area-chart`,C)},j.createElement(o,{highcharts:x,title:e,options:F},P.map((e,t)=>j.createElement(a,{key:e.name||t,type:f,data:e.data??[],options:{type:f,name:e.name}})))))};try{P.displayName=`areachart`,P.__docgenInfo={description:``,displayName:`areachart`,filePath:`/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-area-chart/area-chart.tsx`,methods:[],props:{title:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-area-chart/types.ts`,name:`TypeLiteral`}],description:``,name:`title`,required:!1,tags:{},type:{name:`string | undefined`}},description:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-area-chart/types.ts`,name:`TypeLiteral`}],description:``,name:`description`,required:!1,tags:{},type:{name:`string | undefined`}},tooltipValueFormatter:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-area-chart/types.ts`,name:`TypeLiteral`}],description:``,name:`tooltipValueFormatter`,required:!1,tags:{},type:{name:`((value: string | number) => string) | undefined`}},tooltipTitleFormatter:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-area-chart/types.ts`,name:`TypeLiteral`}],description:``,name:`tooltipTitleFormatter`,required:!1,tags:{},type:{name:`((value: string | number, dateFormat: any) => string) | undefined`}},xLabelFormatter:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-area-chart/types.ts`,name:`TypeLiteral`}],description:``,name:`xLabelFormatter`,required:!1,tags:{},type:{name:`((value: string | number, dateFormat: any) => string) | undefined`}},yLabelFormatter:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-area-chart/types.ts`,name:`TypeLiteral`}],description:``,name:`yLabelFormatter`,required:!1,tags:{},type:{name:`((value: string | number) => string) | undefined`}},renderTooltipOutside:{defaultValue:{value:`true`},declarations:[{fileName:`ebayui-core-react/src/ebay-area-chart/types.ts`,name:`TypeLiteral`}],description:``,name:`renderTooltipOutside`,required:!1,tags:{},type:{name:`boolean | undefined`}},highchartOptions:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-area-chart/types.ts`,name:`TypeLiteral`}],description:``,name:`highchartOptions`,required:!1,tags:{},type:{name:`any`}},areaType:{defaultValue:{value:`areaspline`},declarations:[{fileName:`ebayui-core-react/src/ebay-area-chart/types.ts`,name:`TypeLiteral`},{fileName:`ebayui-core-react/src/ebay-area-chart/types.ts`,name:`TypeLiteral`}],description:``,name:`areaType`,required:!1,tags:{},type:{name:`"area" | "areaspline" | undefined`}},series:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-area-chart/types.ts`,name:`TypeLiteral`},{fileName:`ebayui-core-react/src/ebay-area-chart/types.ts`,name:`TypeLiteral`}],description:``,name:`series`,required:!0,tags:{},type:{name:`any`}}},tags:{}}}catch{}})))()}function I(){return(I=t((()=>{F()})))()}function L(e){return z.slice(0,e)}var R,z,B,V,H,U,W,G,K;function q(){return(q=t((()=>{I(),R={component:P,title:`charts/ebay-area-chart`,tags:[`autodocs`],parameters:{docs:{description:{component:`Area chart component powered by Highcharts. Displays time-series data as filled area shapes with support for single or multiple stacked series, custom axis formatting, and interactive tooltips.

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
\`\`\``}}},argTypes:{title:{description:`A title displayed above the chart`,control:`text`},description:{description:`A description of what the chart is displaying (for accessibility)`,control:`text`},series:{description:"The series data: a single series or an array of up to five series objects, each containing `data` points with `x` (epoch time) and `y` (numeric value)",control:`object`},areaType:{description:'Highcharts series type. Use `"areaspline"` (default) for smooth curves or `"area"` for straight lines between points.',control:{type:`select`},options:[`areaspline`,`area`]},xLabelFormatter:{description:"Custom function to format x-axis labels. Receives the raw value and `Highcharts.dateFormat`.",table:{category:`Callbacks`}},yLabelFormatter:{description:"Custom function to format y-axis labels. Defaults to compact USD currency (e.g. `$4.6k`).",table:{category:`Callbacks`}},tooltipValueFormatter:{description:`Custom function to format the per-series value in the tooltip. Defaults to full USD currency.`,table:{category:`Callbacks`}},tooltipTitleFormatter:{description:'Custom function to format the date header in the tooltip. Defaults to `"Jan 1, 2022"` format.',table:{category:`Callbacks`}},renderTooltipOutside:{description:"When `true` (default), renders the tooltip outside the chart SVG to prevent clipping. Set to `false` when rendering inside a modal or dialog.",control:`boolean`},highchartOptions:{description:`Escape hatch for passing raw Highcharts options. Deep-merged into the default config — use sparingly.`,control:`object`}},globals:{a11y:{manual:!0}}},z=[{name:`Electronics`,data:[{x:16436736e5,y:686},{x:164376e7,y:3395},{x:16438464e5,y:4623},{x:16439328e5,y:742},{x:16440192e5,y:4525},{x:16441056e5,y:1568},{x:1644192e6,y:3511},{x:16442784e5,y:313},{x:16443648e5,y:653},{x:16444512e5,y:3117},{x:16445376e5,y:4497},{x:1644624e6,y:4206},{x:16447104e5,y:4640},{x:16447968e5,y:1849}]},{name:`Fashion`,data:[{x:16436736e5,y:2016},{x:164376e7,y:3035},{x:16438464e5,y:1452},{x:16439328e5,y:582},{x:16440192e5,y:1283},{x:16441056e5,y:3912},{x:1644192e6,y:2448},{x:16442784e5,y:717},{x:16443648e5,y:590},{x:16444512e5,y:1308},{x:16445376e5,y:3744},{x:1644624e6,y:1693},{x:16447104e5,y:4594},{x:16447968e5,y:3426}]},{name:`Home & Garden`,data:[{x:16436736e5,y:3744},{x:164376e7,y:4091},{x:16438464e5,y:1269},{x:16439328e5,y:4966},{x:16440192e5,y:1268},{x:16441056e5,y:4357},{x:1644192e6,y:3517},{x:16442784e5,y:4678},{x:16443648e5,y:4080},{x:16444512e5,y:1224},{x:16445376e5,y:356},{x:1644624e6,y:1534},{x:16447104e5,y:328},{x:16447968e5,y:4199}]}],B={args:{series:L(1)}},V={args:{series:L(2)}},H={args:{series:L(3)}},U={args:{title:`Revenue Over Time`,description:`Daily revenue breakdown across product categories`,series:L(2)}},W={args:{series:L(2),areaType:`area`}},G={args:{series:L(1),yLabelFormatter:e=>`${(Number(e)/1e3).toFixed(1)}k units`}},K=[`SingleSeries`,`TwoSeries`,`ThreeSeries`,`WithTitle`,`AreaType`,`CustomYAxisLabels`],B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    series: getSeries(1)
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    series: getSeries(2)
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    series: getSeries(3)
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Revenue Over Time",
    description: "Daily revenue breakdown across product categories",
    series: getSeries(2)
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    series: getSeries(2),
    areaType: "area"
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    series: getSeries(1),
    yLabelFormatter: v => \`\${(Number(v) / 1000).toFixed(1)}k units\`
  }
}`,...G.parameters?.docs?.source}}}})))()}q();export{W as AreaType,G as CustomYAxisLabels,B as SingleSeries,H as ThreeSeries,V as TwoSeries,U as WithTitle,K as __namedExportsOrder,R as default};