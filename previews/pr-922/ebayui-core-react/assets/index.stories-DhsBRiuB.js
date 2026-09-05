import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-CK-NQdWx.js";import{t as r}from"./classnames-D09xBJOL.js";import{n as i}from"./iframe-RezWaW69.js";import{f as a,t as o}from"./ebay-dialog-base-Dkvy9hiC.js";import{n as s,t as c}from"./ebay-button-B_FEPJ7h.js";import{C as l,D as u,E as d,T as f,_ as p,a as m,b as ee,c as te,i as h,l as g,n as ne,o as _,r as re,s as v,t as y,u as b,w as x,y as ie}from"./shared-Bpzu69Fi.js";import{t as ae}from"./legend-CWpQV2Xe.js";import{n as oe,t as se}from"./ebay-lightbox-dialog-CzJDL8Ef.js";function ce(e){e.wrap(e.seriesTypes.column.prototype,`translate`,function(t){let n=this.options.top,r=this.options.bottom;t.call(this);for(let t of this.points){let i=t.shapeArgs;if(!i)continue;let a=i.x,o=i.width,s=i.y,c=i.height-(r?0:4);c<0&&(c=i.height,s-=4);let l=e.relativeLength(n?3:0,o),u=e.relativeLength(n?3:0,o),d=e.relativeLength(r?3:0,o),f=e.relativeLength(r?3:0,o),p=Math.min(o,c)/2;l>p&&(l=p),u>p&&(u=p),d>p&&(d=p),f>p&&(f=p),t.dlBox=i,t.shapeY=s,t.shapeType=`path`;let m=[[`M`,a+l,s],[`L`,a+o-u,s],[`C`,a+o-u/2,s,a+o,s+u/2,a+o,s+u],[`L`,a+o,s+c-d],[`C`,a+o,s+c-d/2,a+o-d/2,s+c,a+o-d,s+c],[`L`,a+f,s+c],[`C`,a+f/2,s+c,a,s+c-f/2,a,s+c-f],[`L`,a,s+l],[`C`,a,s+l/2,a+l/2,s,a+l,s],[`Z`]];t.shapeArgs={...i,d:m}}})}function le({date:e,data:t,stacked:n,x:r}){let i=`<b>${h(e)}</b>`;if(!n)i+=`<div><span>${h(t.label||``)}</span></div>`;else{let e=t;for(let t of e)for(let e of t.data)if(e.x===r){let n=e;i+=`<div style="display: flex; justify-content: space-between; width: 100%; align-items: flex-start;">`,i+=`${h(t.name||``)}`,i+=`<span style="margin-left: 16px">${h(n.label||``)}</span>`,i+=`</div>`}}return i}function S(){return(S=t((()=>{_()})))()}function ue(e,t){let n=Array.isArray(e)?e.map(e=>({...e})):[{...e}];return t?(n[0].bottom=!0,n[n.length-1].top=!0,n.forEach(e=>{e.group=`:previous`})):n.forEach(e=>{e.top=!0,e.bottom=!0}),p(n),n}function de(e,t){if(!t)return Math.max(0,...e.flatMap(e=>e.data.map(e=>e.y)));let n=new Map;return e.forEach(e=>{e.data.forEach(e=>{n.set(e.x,(n.get(e.x)??0)+e.y)})}),Math.max(0,...n.values())}function fe(e,t){return{type:`datetime`,labels:{format:e||`{value:%b %e}`,align:`center`,style:{color:v}},tickWidth:0,tickPositioner:t}}function pe(e,t,n){let r=0;return{gridLineColor:m,opposite:!0,reversedStacks:!1,labels:{format:t?void 0:"${text}",formatter:t?function(){return this.isFirst&&(r=-1),r+=1,t[r]}:void 0,style:{color:v}},max:e,title:{enabled:!1},offset:0,tickPositioner:n}}function me(e){return{symbolRadius:2,enabled:Array.isArray(e)&&e.length>1,itemStyle:{color:te},itemHiddenStyle:{color:b},itemHoverStyle:{color:g}}}function he(e,t,n){return{formatter:function(){let n=this.series.chart.series,r=e.dateFormat(`%b %e, %Y`,this.x,!1),i=this.x;return le(t?{date:r,data:n,stacked:!0,x:i}:{date:r,data:this,stacked:!1,x:i})},useHTML:!0,backgroundColor:ie,borderWidth:0,borderRadius:10,outside:n,shadow:!1,style:{filter:ee,fontSize:`12px`},positioner:t?function(e,t){let n=this.chart,r=n.series,i=n.pointer.getChartPosition(),a=n.hoverPoint,o=a.index,s=a,c=r[r.length-1].data[o],l=a.series.yAxis.top,u=i.top+l+c.shapeY-t-15,d=i.left+s.dlBox.x+s.dlBox.width*.5-e*.5+3;return d<6&&(d=6),d+s.dlBox.width>i.left+n.chartWidth-6&&(d=i.left+n.chartWidth-s.dlBox.width-6),{x:d,y:u}}:void 0}}function C(e,t){let n=function(){let t=this.chart.series;e&&setTimeout(()=>{let e=!1,n=!1;for(let e=0;e<t.length;e++){let r=t[e].options;!n&&t[e].visible?(r.bottom=!0,n=!0):r.bottom=!1}for(let n=t.length-1;n>=0;n--){let r=t[n].options;!e&&t[n].visible?(r.top=!0,e=!0):r.top=!1}this.chart.redraw()},0)},r=function(){let t=this.series.chart;t.series.forEach(t=>t.points.forEach(t=>{(e&&t.x!==this.x||!e&&t!==this)&&t.update({opacity:.2},!1)})),t.redraw()};function i(){let e=this.series.chart;e.series.forEach(e=>e.points.forEach(e=>e.update({opacity:1},!1))),e.redraw()}return{series:{description:t},column:{events:{legendItemClick:n},stacking:e?`normal`:void 0,groupPadding:.1,pointPadding:.15,states:{inactive:{opacity:1}},point:{events:{mouseOver:r,mouseOut:i}}}}}function w(e,t,n){let{description:r,series:i,xAxisLabelFormat:a,xAxisPositioner:o,yAxisLabels:s,yAxisPositioner:c,stacked:l=!1,renderTooltipOutside:u=!0}=t;return{chart:{type:`column`,backgroundColor:y,style:{fontFamily:ne}},colors:re,xAxis:fe(a,o),yAxis:pe(de(n,l),s,c),legend:me(i),tooltip:he(e,l,u),plotOptions:C(l,r),credits:{enabled:!1}}}var T,E,D,O;function k(){return(k=t((()=>{T=e(n()),E=e(r()),f(),_(),l(),S(),ae(x),ce(x),D=`
    .ebay-bar-chart {
        width: 100%;
    }
    .ebay-bar-chart .highcharts-legend-item-hidden {
        transition: fill 250ms;
    }
    .ebay-bar-chart .highcharts-legend-item-hidden .highcharts-point {
        stroke-width: 0;
    }
    .highcharts-tooltip-container svg {
        overflow: visible;
    }
`,O=({title:e,description:t,series:n,xAxisLabelFormat:r,xAxisPositioner:i,yAxisLabels:a,yAxisPositioner:o,stacked:s=!1,renderTooltipOutside:c=!0,className:l,...f})=>{let p=(0,T.useMemo)(()=>ue(n,s),[n,s]),m=(0,T.useMemo)(()=>w(x,{description:t,series:n,xAxisLabelFormat:r,xAxisPositioner:i,yAxisLabels:a,yAxisPositioner:o,stacked:s,renderTooltipOutside:c},p),[t,n,r,i,a,o,s,c,p]);return T.createElement(T.Fragment,null,T.createElement(`style`,null,D),T.createElement(`div`,{...f,className:(0,E.default)(`ebay-bar-chart`,l)},T.createElement(d,{highcharts:x,title:e,options:m},p.map((e,t)=>T.createElement(u,{key:e.name||t,type:`column`,data:e.data,options:{type:`column`,name:e.name,color:e.color,borderColor:e.borderColor,lineColor:e.lineColor,fillOpacity:e.fillOpacity,top:e.top,bottom:e.bottom,group:e.group}})))))};try{O.displayName=`barchart`,O.__docgenInfo={description:``,displayName:`barchart`,filePath:`/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-bar-chart/bar-chart.tsx`,methods:[],props:{title:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-bar-chart/types.ts`,name:`TypeLiteral`}],description:`A title displayed above the graph`,name:`title`,required:!1,tags:{},type:{name:`string | undefined`}},description:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-bar-chart/types.ts`,name:`TypeLiteral`}],description:`A description of what the chart is displaying (for accessibility)`,name:`description`,required:!1,tags:{},type:{name:`string | undefined`}},series:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-bar-chart/types.ts`,name:`TypeLiteral`}],description:`The series data: an array of one to five series objects, each containing data points with x (epoch time), y (numeric value), and optional label`,name:`series`,required:!0,tags:{},type:{name:`BarChartSeriesItem | BarChartSeriesItem[]`}},xAxisLabelFormat:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-bar-chart/types.ts`,name:`TypeLiteral`}],description:`Used to modify the display of the x-axis labels. Accepts Highcharts date format string. Default: "{value:%b %e}"`,name:`xAxisLabelFormat`,required:!1,tags:{},type:{name:`string | undefined`}},xAxisPositioner:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-bar-chart/types.ts`,name:`TypeLiteral`}],description:`A custom function that returns an array of epoch/unix time values where x-axis labels will be displayed`,name:`xAxisPositioner`,required:!1,tags:{},type:{name:`(() => number[]) | undefined`}},yAxisLabels:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-bar-chart/types.ts`,name:`TypeLiteral`}],description:`An array of labels to use on the y-axis`,name:`yAxisLabels`,required:!1,tags:{},type:{name:`string[] | undefined`}},yAxisPositioner:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-bar-chart/types.ts`,name:`TypeLiteral`}],description:`A custom function that returns an array of numeric values where y-axis labels will be displayed`,name:`yAxisPositioner`,required:!1,tags:{},type:{name:`(() => number[]) | undefined`}},stacked:{defaultValue:{value:`false`},declarations:[{fileName:`ebayui-core-react/src/ebay-bar-chart/types.ts`,name:`TypeLiteral`}],description:`When true, bars stack vertically; when false, bars render side-by-side. Default: false`,name:`stacked`,required:!1,tags:{},type:{name:`boolean | undefined`}},renderTooltipOutside:{defaultValue:{value:`true`},declarations:[{fileName:`ebayui-core-react/src/ebay-bar-chart/types.ts`,name:`TypeLiteral`}],description:`When true, renders the tooltip outside the chart SVG to prevent clipping. Default: true`,name:`renderTooltipOutside`,required:!1,tags:{},type:{name:`boolean | undefined`}}},tags:{}}}catch{}})))()}function A(){return(A=t((()=>{k()})))()}function j(e,t){return F.slice(0,e).map(e=>({...e,data:e.data.slice(0,t)}))}function ge(e){let[t,n]=(0,M.useState)(!1);return(0,N.jsxs)(`div`,{children:[(0,N.jsx)(s,{onClick:()=>n(!0),children:`Open Chart Dialog`}),(0,N.jsxs)(oe,{open:t,onClose:()=>n(!1),a11yCloseText:`Close chart dialog`,size:`wide`,children:[(0,N.jsx)(a,{children:`Bar chart in lightbox`}),(0,N.jsx)(O,{...e})]})]})}var M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=t((()=>{M=e(n()),c(),o(),se(),A(),N=i(),P={component:O,title:`charts/ebay-bar-chart`,tags:[`autodocs`],parameters:{docs:{description:{component:`Bar chart component powered by Highcharts. Displays time-series data as vertical bars with support for single or multiple series, stacked or grouped layouts, custom axis formatting, and interactive tooltips.

## Usage

### Import

\`\`\`jsx harmony
import { EbayBarChart } from "@ebay/ui-core-react/ebay-bar-chart";
\`\`\`

### Basic

\`\`\`jsx
<EbayBarChart
    series={[{
        name: "Sales",
        data: [
            { x: 1643673600000, y: 686.42, label: "$686.42" },
            { x: 1643760000000, y: 3395.53, label: "$3395.53" },
        ],
    }]}
/>
\`\`\`

### Stacked

\`\`\`jsx
<EbayBarChart
    series={[
        { name: "Product A", data: [...] },
        { name: "Product B", data: [...] },
    ]}
    stacked
/>
\`\`\``}}},argTypes:{title:{description:`A title displayed above the chart`,control:`text`},description:{description:`A description of what the chart is displaying (for accessibility)`,control:`text`},series:{description:"The series data: an array of one to five series objects, each containing `data` points with `x` (epoch time), `y` (numeric value), and optional `label`",control:`object`},xAxisLabelFormat:{description:'Highcharts date format string for x-axis labels. Default: `"{value:%b %e}"`',control:`text`},xAxisPositioner:{description:`A custom function that returns an array of epoch/unix time values where x-axis labels will be displayed`,table:{category:`Callbacks`}},yAxisLabels:{description:`An array of labels to use on the y-axis`,control:`object`},yAxisPositioner:{description:`A custom function that returns an array of numeric values where y-axis labels will be displayed`,table:{category:`Callbacks`}},stacked:{description:"When `true`, bars stack vertically; when `false`, bars render side-by-side. Default: `false`",control:`boolean`},renderTooltipOutside:{description:"When `true` (default), renders the tooltip outside the chart SVG to prevent clipping. Set to `false` when rendering inside a modal or dialog.",control:`boolean`}},globals:{a11y:{manual:!0}}},F=[{name:`Value 1`,data:[{x:16436736e5,y:686.42,label:`$686.42`},{x:164376e7,y:3395.53,label:`$3395.53`},{x:16438464e5,y:4623.43,label:`$4623.43`},{x:16439328e5,y:742.12,label:`$742.12`},{x:16440192e5,y:4525.82,label:`$4525.82`},{x:16441056e5,y:1568.92,label:`$1568.92`},{x:1644192e6,y:3511.5,label:`$3511.5`},{x:16442784e5,y:313.66,label:`$313.66`},{x:16443648e5,y:653.18,label:`$653.18`},{x:16444512e5,y:3117,label:`$3117`},{x:16445376e5,y:4497.92,label:`$4497.92`},{x:1644624e6,y:4206.77,label:`$4206.77`},{x:16447104e5,y:4640.38,label:`$4640.38`},{x:16447968e5,y:1849.15,label:`$1849.15`},{x:16448832e5,y:4105.95,label:`$4105.95`},{x:16449696e5,y:2996.36,label:`$2996.36`},{x:1645056e6,y:2358.2,label:`$2358.2`},{x:16451424e5,y:3641.09,label:`$3641.09`},{x:16452288e5,y:3654.44,label:`$3654.44`},{x:16453152e5,y:1418.79,label:`$1418.79`},{x:16454016e5,y:207.46,label:`$207.46`},{x:1645488e6,y:1606.93,label:`$1606.93`},{x:16455744e5,y:604.25,label:`$604.25`},{x:16456608e5,y:3205.45,label:`$3205.45`}]},{name:`Value 2`,data:[{x:16436736e5,y:2016.88,label:`$2016.88`},{x:164376e7,y:3035.94,label:`$3035.94`},{x:16438464e5,y:1452.5,label:`$1452.5`},{x:16439328e5,y:582.67,label:`$582.67`},{x:16440192e5,y:1283.86,label:`$1283.86`},{x:16441056e5,y:3912.73,label:`$3912.73`},{x:1644192e6,y:2448.16,label:`$2448.16`},{x:16442784e5,y:717.37,label:`$717.37`},{x:16443648e5,y:590.24,label:`$590.24`},{x:16444512e5,y:1308.96,label:`$1308.96`},{x:16445376e5,y:3744.15,label:`$3744.15`},{x:1644624e6,y:1693.57,label:`$1693.57`},{x:16447104e5,y:4594.56,label:`$4594.56`},{x:16447968e5,y:3426.48,label:`$3426.48`},{x:16448832e5,y:2364.75,label:`$2364.75`},{x:16449696e5,y:3338.47,label:`$3338.47`},{x:1645056e6,y:2217.38,label:`$2217.38`},{x:16451424e5,y:4269.42,label:`$4269.42`},{x:16452288e5,y:1811.27,label:`$1811.27`},{x:16453152e5,y:4247.46,label:`$4247.46`},{x:16454016e5,y:3230.72,label:`$3230.72`},{x:1645488e6,y:236.64,label:`$236.64`},{x:16455744e5,y:2960.39,label:`$2960.39`},{x:16456608e5,y:720.03,label:`$720.03`}]},{name:`Value 3`,data:[{x:16436736e5,y:3744.38,label:`$3744.38`},{x:164376e7,y:4091.42,label:`$4091.42`},{x:16438464e5,y:1269.12,label:`$1269.12`},{x:16439328e5,y:4966.14,label:`$4966.14`},{x:16440192e5,y:1268.94,label:`$1268.94`},{x:16441056e5,y:4357.47,label:`$4357.47`},{x:1644192e6,y:3517.96,label:`$3517.96`},{x:16442784e5,y:4678.7,label:`$4678.7`},{x:16443648e5,y:4080.55,label:`$4080.55`},{x:16444512e5,y:1224.7,label:`$1224.7`},{x:16445376e5,y:356.99,label:`$356.99`},{x:1644624e6,y:1534.12,label:`$1534.12`},{x:16447104e5,y:328.14,label:`$328.14`},{x:16447968e5,y:4199.1,label:`$4199.1`},{x:16448832e5,y:4078.09,label:`$4078.09`},{x:16449696e5,y:1475.89,label:`$1475.89`},{x:1645056e6,y:2874.13,label:`$2874.13`},{x:16451424e5,y:2888.78,label:`$2888.78`},{x:16452288e5,y:658.46,label:`$658.46`},{x:16453152e5,y:2050.67,label:`$2050.67`},{x:16454016e5,y:1971.17,label:`$1971.17`},{x:1645488e6,y:4168.71,label:`$4168.71`},{x:16455744e5,y:425.5,label:`$425.5`},{x:16456608e5,y:3665.67,label:`$3665.67`}]},{name:`Value 4`,data:[{x:16436736e5,y:3840.06,label:`$3840.06`},{x:164376e7,y:4828.12,label:`$4828.12`},{x:16438464e5,y:2265.45,label:`$2265.45`},{x:16439328e5,y:4496.69,label:`$4496.69`},{x:16440192e5,y:4393.03,label:`$4393.03`},{x:16441056e5,y:624.28,label:`$624.28`},{x:1644192e6,y:3722.88,label:`$3722.88`},{x:16442784e5,y:4590.79,label:`$4590.79`},{x:16443648e5,y:1679.32,label:`$1679.32`},{x:16444512e5,y:4748.64,label:`$4748.64`},{x:16445376e5,y:1822.92,label:`$1822.92`},{x:1644624e6,y:1384.22,label:`$1384.22`},{x:16447104e5,y:2966.97,label:`$2966.97`},{x:16447968e5,y:4730.39,label:`$4730.39`},{x:16448832e5,y:3929.62,label:`$3929.62`},{x:16449696e5,y:3731.83,label:`$3731.83`},{x:1645056e6,y:4785.14,label:`$4785.14`},{x:16451424e5,y:2657.6,label:`$2657.6`},{x:16452288e5,y:4816.07,label:`$4816.07`},{x:16453152e5,y:4493.61,label:`$4493.61`},{x:16454016e5,y:2887.25,label:`$2887.25`},{x:1645488e6,y:1905.9,label:`$1905.9`},{x:16455744e5,y:706.83,label:`$706.83`},{x:16456608e5,y:1516,label:`$1516`}]},{name:`Value 5`,data:[{x:16436736e5,y:3510.98,label:`$3510.98`},{x:164376e7,y:2558.58,label:`$2558.58`},{x:16438464e5,y:2028.93,label:`$2028.93`},{x:16439328e5,y:3998.57,label:`$3998.57`},{x:16440192e5,y:1234.8,label:`$1234.8`},{x:16441056e5,y:3512.28,label:`$3512.28`},{x:1644192e6,y:554.04,label:`$554.04`},{x:16442784e5,y:4934.67,label:`$4934.67`},{x:16443648e5,y:3190.14,label:`$3190.14`},{x:16444512e5,y:2894.57,label:`$2894.57`},{x:16445376e5,y:68.99,label:`$68.99`},{x:1644624e6,y:3051.49,label:`$3051.49`},{x:16447104e5,y:1766.32,label:`$1766.32`},{x:16447968e5,y:1998.19,label:`$1998.19`},{x:16448832e5,y:3695.29,label:`$3695.29`},{x:16449696e5,y:46.56,label:`$46.56`},{x:1645056e6,y:3877.75,label:`$3877.75`},{x:16451424e5,y:2752.76,label:`$2752.76`},{x:16452288e5,y:4341.6,label:`$4341.6`},{x:16453152e5,y:1836.76,label:`$1836.76`},{x:16454016e5,y:346.63,label:`$346.63`},{x:1645488e6,y:1149.93,label:`$1149.93`},{x:16455744e5,y:4566.77,label:`$4566.77`},{x:16456608e5,y:4337.08,label:`$4337.08`}]}],I={args:{series:j(1,5)}},L={args:{series:j(1,13)}},R={args:{series:j(1,24)}},z={args:{series:j(2,8)}},B={args:{series:j(3,3)}},V={args:{series:j(4,4)}},H={args:{series:j(5,3)}},U={args:{series:j(5,6)}},W={args:{series:j(2,24),stacked:!0}},G={args:{series:j(3,24),stacked:!0}},K={args:{series:j(4,24),stacked:!0}},q={args:{series:j(5,24),stacked:!0}},J={args:{title:`Revenue Over Time`,description:`Daily revenue breakdown across product categories`,series:j(3,8)}},Y={args:{title:`Revenue Over Time`,description:`Daily revenue breakdown across product categories inside a lightbox dialog`,series:j(3,8),yAxisLabels:[`$0`,`$1k`,`$2k`,`$3k`,`$4k`,`$5k`],renderTooltipOutside:!1},parameters:{docs:{description:{story:"Modal usage story for GH-740: the bar chart is mounted in a closed lightbox dialog, then displayed when the dialog opens. Set `renderTooltipOutside` to `false` when rendering inside a modal or dialog."}}},render:e=>(0,N.jsx)(ge,{...e})},X={args:{series:j(2,12),xAxisLabelFormat:`{value:%b %e, %Y}`}},Z={args:{series:j(1,8),yAxisLabels:[`$0`,`$1k`,`$2k`,`$3k`,`$4k`,`$5k`]}},Q=[`SingleSeriesFiveDays`,`SingleSeriesThirteenDays`,`SingleSeriesTwentyFourDays`,`TwoSeriesEightDays`,`ThreeSeriesThreeDays`,`FourSeriesFourDays`,`FiveSeriesThreeDays`,`FiveSeriesSixDays`,`TwoSeriesStacked`,`ThreeSeriesStacked`,`FourSeriesStacked`,`FiveSeriesStacked`,`WithTitle`,`InsideLightboxDialog`,`CustomXAxisFormat`,`CustomYAxisLabels`],I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    series: getSeriesData(1, 5)
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    series: getSeriesData(1, 13)
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    series: getSeriesData(1, 24)
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    series: getSeriesData(2, 8)
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    series: getSeriesData(3, 3)
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    series: getSeriesData(4, 4)
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    series: getSeriesData(5, 3)
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    series: getSeriesData(5, 6)
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    series: getSeriesData(2, 24),
    stacked: true
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    series: getSeriesData(3, 24),
    stacked: true
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    series: getSeriesData(4, 24),
    stacked: true
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    series: getSeriesData(5, 24),
    stacked: true
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Revenue Over Time",
    description: "Daily revenue breakdown across product categories",
    series: getSeriesData(3, 8)
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Revenue Over Time",
    description: "Daily revenue breakdown across product categories inside a lightbox dialog",
    series: getSeriesData(3, 8),
    yAxisLabels: ["$0", "$1k", "$2k", "$3k", "$4k", "$5k"],
    renderTooltipOutside: false
  },
  parameters: {
    docs: {
      description: {
        story: "Modal usage story for GH-740: the bar chart is mounted in a closed lightbox dialog, then displayed when the dialog opens. Set \`renderTooltipOutside\` to \`false\` when rendering inside a modal or dialog."
      }
    }
  },
  render: args => <BarChartInsideLightbox {...args} />
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    series: getSeriesData(2, 12),
    xAxisLabelFormat: "{value:%b %e, %Y}"
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    series: getSeriesData(1, 8),
    yAxisLabels: ["$0", "$1k", "$2k", "$3k", "$4k", "$5k"]
  }
}`,...Z.parameters?.docs?.source}}}})))()}$();export{X as CustomXAxisFormat,Z as CustomYAxisLabels,U as FiveSeriesSixDays,q as FiveSeriesStacked,H as FiveSeriesThreeDays,V as FourSeriesFourDays,K as FourSeriesStacked,Y as InsideLightboxDialog,I as SingleSeriesFiveDays,L as SingleSeriesThirteenDays,R as SingleSeriesTwentyFourDays,G as ThreeSeriesStacked,B as ThreeSeriesThreeDays,z as TwoSeriesEightDays,W as TwoSeriesStacked,J as WithTitle,Q as __namedExportsOrder,P as default};