var W=Object.defineProperty;var d=(e,l)=>W(e,"name",{value:l,configurable:!0});import{r as M,R as x,c as j}from"./iframe-DXKVC7Wu.js";import{E as q}from"./button-BAvxCJp2.js";import{E as Y}from"./dialog-previous-button-CGrVTs3d.js";import{E as G}from"./lightbox-dialog-C1EaB5Lb.js";import{e as $,C as X,H as I,S as z,j as U,f as Z,h as J,i as K,t as Q,a as ee,l as ae,b as te,c as re,d as _,g as se}from"./shared-qh-yE203.js";import{e as oe}from"./legend-CvNFz2xV.js";import"./preload-helper-Cc2_yIPf.js";import"./progress-spinner-DE2l3aJa.js";import"./ebay-icon-spinner-30-C7gEAvHE.js";import"./ebay-icon-chevron-down-12-Bx23oBI8.js";import"./index-CSGTE6jH.js";import"./ebay-icon-close-16-CPcoIDU4.js";import"./icon-button-eFlBz-0H.js";import"./badge-KBGKARd0.js";import"./ebay-icon-chevron-left-16-D70GS6Gt.js";function ie(e){e.wrap(e.seriesTypes.column.prototype,"translate",function(l){const s=this.options.top,i=this.options.bottom;l.call(this);for(const c of this.points){const o=c.shapeArgs;if(!o)continue;const r=o.x,a=o.width;let t=o.y,n=o.height-(i?0:4);n<0&&(n=o.height,t=t-4);const m=3;let u=e.relativeLength(s?m:0,a),b=e.relativeLength(s?m:0,a),p=e.relativeLength(i?m:0,a),h=e.relativeLength(i?m:0,a);const g=Math.min(a,n)/2;u>g&&(u=g),b>g&&(b=g),p>g&&(p=g),h>g&&(h=g),c.dlBox=o,c.shapeY=t,c.shapeType="path";const f=[["M",r+u,t],["L",r+a-b,t],["C",r+a-b/2,t,r+a,t+b/2,r+a,t+b],["L",r+a,t+n-p],["C",r+a,t+n-p/2,r+a-p/2,t+n,r+a-p,t+n],["L",r+h,t+n],["C",r+h/2,t+n,r,t+n-h/2,r,t+n-h],["L",r,t+u],["C",r,t+u/2,r+u/2,t,r+u,t],["Z"]];c.shapeArgs={...o,d:f}}})}d(ie,"eBayColumns");function N({date:e,data:l,stacked:s,x:i}){let c=`<b>${$(e)}</b>`;if(!s)c+=`<div><span>${$(l.label||"")}</span></div>`;else{const o=l;for(const r of o)for(const a of r.data)if(a.x===i){const t=a;c+='<div style="display: flex; justify-content: space-between; width: 100%; align-items: flex-start;">',c+=`${$(r.name||"")}`,c+=`<span style="margin-left: 16px">${$(t.label||"")}</span>`,c+="</div>"}}return c}d(N,"barChartTooltipHtml");oe(I);ie(I);const le=`
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
`;function ne(e,l){const s=Array.isArray(e)?e.map(i=>({...i})):[{...e}];return l?(s[0].bottom=!0,s[s.length-1].top=!0,s.forEach(i=>{i.group=":previous"})):s.forEach(i=>{i.top=!0,i.bottom=!0}),U(s),s}d(ne,"prepareSeries");function ce(e,l){if(!l)return Math.max(0,...e.flatMap(i=>i.data.map(c=>c.y)));const s=new Map;return e.forEach(i=>{i.data.forEach(c=>{s.set(c.x,(s.get(c.x)??0)+c.y)})}),Math.max(0,...s.values())}d(ce,"getMaxValue");function de(e,l){return{type:"datetime",labels:{format:e||"{value:%b %e}",align:"center",style:{color:_}},tickWidth:0,tickPositioner:l}}d(de,"getXAxisConfig");function pe(e,l,s){let i=0;return{gridLineColor:se,opposite:!0,reversedStacks:!1,labels:{format:l?void 0:"${text}",formatter:l?function(){return this.isFirst&&(i=-1),i=i+1,l[i]}:void 0,style:{color:_}},max:e,title:{enabled:!1},offset:0,tickPositioner:s}}d(pe,"getYAxisConfig");function ye(e){return{symbolRadius:2,enabled:Array.isArray(e)&&e.length>1,itemStyle:{color:re},itemHiddenStyle:{color:te},itemHoverStyle:{color:ae}}}d(ye,"getLegendConfig");function ue(e,l,s){return{formatter:d(function(){const o=this.series.chart.series,r=e.dateFormat("%b %e, %Y",this.x,!1),a=this.x;return N(l?{date:r,data:o,stacked:!0,x:a}:{date:r,data:this,stacked:!1,x:a})},"formatter"),useHTML:!0,backgroundColor:ee,borderWidth:0,borderRadius:10,outside:s,shadow:!1,style:{filter:Q,fontSize:"12px"},positioner:l?d(function(o,r){const a=this.chart,t=a.series,n=a.pointer.getChartPosition(),m=a.hoverPoint,u=m.index,b=m,p=t[t.length-1].data[u],h=m.series.yAxis.top,g=n.top+h+p.shapeY-r-15;let f=n.left+b.dlBox.x+b.dlBox.width*.5-o*.5+3;return f<6&&(f=6),f+b.dlBox.width>n.left+a.chartWidth-6&&(f=n.left+a.chartWidth-b.dlBox.width-6),{x:f,y:g}},"positioner"):void 0}}d(ue,"getTooltipConfig");function be(e,l){const s=d(function(){const o=this.chart.series;e&&setTimeout(()=>{let r=!1,a=!1;for(let t=0;t<o.length;t++){const n=o[t].options;!a&&o[t].visible?(n.bottom=!0,a=!0):n.bottom=!1}for(let t=o.length-1;t>=0;t--){const n=o[t].options;!r&&o[t].visible?(n.top=!0,r=!0):n.top=!1}this.chart.redraw()},0)},"legendItemClickHandler"),i=d(function(){const o=this.series.chart;o.series.forEach(r=>r.points.forEach(a=>{(e&&a.x!==this.x||!e&&a!==this)&&a.update({opacity:.2},!1)})),o.redraw()},"mouseOverHandler");function c(){const o=this.series.chart;o.series.forEach(r=>r.points.forEach(a=>a.update({opacity:1},!1))),o.redraw()}return d(c,"mouseOutHandler"),{series:{description:l},column:{events:{legendItemClick:s},stacking:e?"normal":void 0,groupPadding:.1,pointPadding:.15,states:{inactive:{opacity:1}},point:{events:{mouseOver:i,mouseOut:c}}}}}d(be,"getColumnPlotOptions");function me(e,l,s){const{description:i,series:c,xAxisLabelFormat:o,xAxisPositioner:r,yAxisLabels:a,yAxisPositioner:t,stacked:n=!1,renderTooltipOutside:m=!0}=l;return{chart:{type:"column",backgroundColor:K,style:{fontFamily:J}},colors:Z,xAxis:de(o,r),yAxis:pe(ce(s,n),a,t),legend:ye(c),tooltip:ue(e,n,m),plotOptions:be(n,i),credits:{enabled:!1}}}d(me,"buildChartOptions");const R=d(({title:e,description:l,series:s,xAxisLabelFormat:i,xAxisPositioner:c,yAxisLabels:o,yAxisPositioner:r,stacked:a=!1,renderTooltipOutside:t=!0,className:n,...m})=>{const u=M.useMemo(()=>ne(s,a),[s,a]),b=M.useMemo(()=>me(I,{description:l,series:s,xAxisLabelFormat:i,xAxisPositioner:c,yAxisLabels:o,yAxisPositioner:r,stacked:a,renderTooltipOutside:t},u),[l,s,i,c,o,r,a,t,u]);return x.createElement(x.Fragment,null,x.createElement("style",null,le),x.createElement("div",{...m,className:j("ebay-bar-chart",n)},x.createElement(X,{highcharts:I,title:e,options:b},u.map((p,h)=>x.createElement(z,{key:p.name||h,type:"column",data:p.data,options:{type:"column",name:p.name,color:p.color,borderColor:p.borderColor,lineColor:p.lineColor,fillOpacity:p.fillOpacity,top:p.top,bottom:p.bottom,group:p.group}})))))},"EbayBarChart");try{R.displayName="barchart",R.__docgenInfo={description:"",displayName:"barchart",filePath:"/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-bar-chart/bar-chart.tsx",methods:[],props:{title:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-bar-chart/types.ts",name:"TypeLiteral"}],description:"A title displayed above the graph",name:"title",required:!1,tags:{},type:{name:"string"}},description:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-bar-chart/types.ts",name:"TypeLiteral"}],description:"A description of what the chart is displaying (for accessibility)",name:"description",required:!1,tags:{},type:{name:"string"}},series:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-bar-chart/types.ts",name:"TypeLiteral"}],description:"The series data: an array of one to five series objects, each containing data points with x (epoch time), y (numeric value), and optional label",name:"series",required:!0,tags:{},type:{name:"BarChartSeriesItem | BarChartSeriesItem[]"}},xAxisLabelFormat:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-bar-chart/types.ts",name:"TypeLiteral"}],description:'Used to modify the display of the x-axis labels. Accepts Highcharts date format string. Default: "{value:%b %e}"',name:"xAxisLabelFormat",required:!1,tags:{},type:{name:"string"}},xAxisPositioner:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-bar-chart/types.ts",name:"TypeLiteral"}],description:"A custom function that returns an array of epoch/unix time values where x-axis labels will be displayed",name:"xAxisPositioner",required:!1,tags:{},type:{name:"() => number[]"}},yAxisLabels:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-bar-chart/types.ts",name:"TypeLiteral"}],description:"An array of labels to use on the y-axis",name:"yAxisLabels",required:!1,tags:{},type:{name:"string[]"}},yAxisPositioner:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-bar-chart/types.ts",name:"TypeLiteral"}],description:"A custom function that returns an array of numeric values where y-axis labels will be displayed",name:"yAxisPositioner",required:!1,tags:{},type:{name:"() => number[]"}},stacked:{defaultValue:{value:"false"},declarations:[{fileName:"ebayui-core-react/src/ebay-bar-chart/types.ts",name:"TypeLiteral"}],description:"When true, bars stack vertically; when false, bars render side-by-side. Default: false",name:"stacked",required:!1,tags:{},type:{name:"boolean"}},renderTooltipOutside:{defaultValue:{value:"true"},declarations:[{fileName:"ebayui-core-react/src/ebay-bar-chart/types.ts",name:"TypeLiteral"}],description:"When true, renders the tooltip outside the chart SVG to prevent clipping. Default: true",name:"renderTooltipOutside",required:!1,tags:{},type:{name:"boolean"}}},tags:{}}}catch{}const He={component:R,title:"charts/ebay-bar-chart",tags:["autodocs"],parameters:{docs:{description:{component:`Bar chart component powered by Highcharts. Displays time-series data as vertical bars with support for single or multiple series, stacked or grouped layouts, custom axis formatting, and interactive tooltips.

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
\`\`\``}}},argTypes:{title:{description:"A title displayed above the chart",control:"text"},description:{description:"A description of what the chart is displaying (for accessibility)",control:"text"},series:{description:"The series data: an array of one to five series objects, each containing `data` points with `x` (epoch time), `y` (numeric value), and optional `label`",control:"object"},xAxisLabelFormat:{description:'Highcharts date format string for x-axis labels. Default: `"{value:%b %e}"`',control:"text"},xAxisPositioner:{description:"A custom function that returns an array of epoch/unix time values where x-axis labels will be displayed",table:{category:"Callbacks"}},yAxisLabels:{description:"An array of labels to use on the y-axis",control:"object"},yAxisPositioner:{description:"A custom function that returns an array of numeric values where y-axis labels will be displayed",table:{category:"Callbacks"}},stacked:{description:"When `true`, bars stack vertically; when `false`, bars render side-by-side. Default: `false`",control:"boolean"},renderTooltipOutside:{description:"When `true` (default), renders the tooltip outside the chart SVG to prevent clipping. Set to `false` when rendering inside a modal or dialog.",control:"boolean"}},globals:{a11y:{manual:!0}}},xe=[{name:"Value 1",data:[{x:16436736e5,y:686.42,label:"$686.42"},{x:164376e7,y:3395.53,label:"$3395.53"},{x:16438464e5,y:4623.43,label:"$4623.43"},{x:16439328e5,y:742.12,label:"$742.12"},{x:16440192e5,y:4525.82,label:"$4525.82"},{x:16441056e5,y:1568.92,label:"$1568.92"},{x:1644192e6,y:3511.5,label:"$3511.5"},{x:16442784e5,y:313.66,label:"$313.66"},{x:16443648e5,y:653.18,label:"$653.18"},{x:16444512e5,y:3117,label:"$3117"},{x:16445376e5,y:4497.92,label:"$4497.92"},{x:1644624e6,y:4206.77,label:"$4206.77"},{x:16447104e5,y:4640.38,label:"$4640.38"},{x:16447968e5,y:1849.15,label:"$1849.15"},{x:16448832e5,y:4105.95,label:"$4105.95"},{x:16449696e5,y:2996.36,label:"$2996.36"},{x:1645056e6,y:2358.2,label:"$2358.2"},{x:16451424e5,y:3641.09,label:"$3641.09"},{x:16452288e5,y:3654.44,label:"$3654.44"},{x:16453152e5,y:1418.79,label:"$1418.79"},{x:16454016e5,y:207.46,label:"$207.46"},{x:1645488e6,y:1606.93,label:"$1606.93"},{x:16455744e5,y:604.25,label:"$604.25"},{x:16456608e5,y:3205.45,label:"$3205.45"}]},{name:"Value 2",data:[{x:16436736e5,y:2016.88,label:"$2016.88"},{x:164376e7,y:3035.94,label:"$3035.94"},{x:16438464e5,y:1452.5,label:"$1452.5"},{x:16439328e5,y:582.67,label:"$582.67"},{x:16440192e5,y:1283.86,label:"$1283.86"},{x:16441056e5,y:3912.73,label:"$3912.73"},{x:1644192e6,y:2448.16,label:"$2448.16"},{x:16442784e5,y:717.37,label:"$717.37"},{x:16443648e5,y:590.24,label:"$590.24"},{x:16444512e5,y:1308.96,label:"$1308.96"},{x:16445376e5,y:3744.15,label:"$3744.15"},{x:1644624e6,y:1693.57,label:"$1693.57"},{x:16447104e5,y:4594.56,label:"$4594.56"},{x:16447968e5,y:3426.48,label:"$3426.48"},{x:16448832e5,y:2364.75,label:"$2364.75"},{x:16449696e5,y:3338.47,label:"$3338.47"},{x:1645056e6,y:2217.38,label:"$2217.38"},{x:16451424e5,y:4269.42,label:"$4269.42"},{x:16452288e5,y:1811.27,label:"$1811.27"},{x:16453152e5,y:4247.46,label:"$4247.46"},{x:16454016e5,y:3230.72,label:"$3230.72"},{x:1645488e6,y:236.64,label:"$236.64"},{x:16455744e5,y:2960.39,label:"$2960.39"},{x:16456608e5,y:720.03,label:"$720.03"}]},{name:"Value 3",data:[{x:16436736e5,y:3744.38,label:"$3744.38"},{x:164376e7,y:4091.42,label:"$4091.42"},{x:16438464e5,y:1269.12,label:"$1269.12"},{x:16439328e5,y:4966.14,label:"$4966.14"},{x:16440192e5,y:1268.94,label:"$1268.94"},{x:16441056e5,y:4357.47,label:"$4357.47"},{x:1644192e6,y:3517.96,label:"$3517.96"},{x:16442784e5,y:4678.7,label:"$4678.7"},{x:16443648e5,y:4080.55,label:"$4080.55"},{x:16444512e5,y:1224.7,label:"$1224.7"},{x:16445376e5,y:356.99,label:"$356.99"},{x:1644624e6,y:1534.12,label:"$1534.12"},{x:16447104e5,y:328.14,label:"$328.14"},{x:16447968e5,y:4199.1,label:"$4199.1"},{x:16448832e5,y:4078.09,label:"$4078.09"},{x:16449696e5,y:1475.89,label:"$1475.89"},{x:1645056e6,y:2874.13,label:"$2874.13"},{x:16451424e5,y:2888.78,label:"$2888.78"},{x:16452288e5,y:658.46,label:"$658.46"},{x:16453152e5,y:2050.67,label:"$2050.67"},{x:16454016e5,y:1971.17,label:"$1971.17"},{x:1645488e6,y:4168.71,label:"$4168.71"},{x:16455744e5,y:425.5,label:"$425.5"},{x:16456608e5,y:3665.67,label:"$3665.67"}]},{name:"Value 4",data:[{x:16436736e5,y:3840.06,label:"$3840.06"},{x:164376e7,y:4828.12,label:"$4828.12"},{x:16438464e5,y:2265.45,label:"$2265.45"},{x:16439328e5,y:4496.69,label:"$4496.69"},{x:16440192e5,y:4393.03,label:"$4393.03"},{x:16441056e5,y:624.28,label:"$624.28"},{x:1644192e6,y:3722.88,label:"$3722.88"},{x:16442784e5,y:4590.79,label:"$4590.79"},{x:16443648e5,y:1679.32,label:"$1679.32"},{x:16444512e5,y:4748.64,label:"$4748.64"},{x:16445376e5,y:1822.92,label:"$1822.92"},{x:1644624e6,y:1384.22,label:"$1384.22"},{x:16447104e5,y:2966.97,label:"$2966.97"},{x:16447968e5,y:4730.39,label:"$4730.39"},{x:16448832e5,y:3929.62,label:"$3929.62"},{x:16449696e5,y:3731.83,label:"$3731.83"},{x:1645056e6,y:4785.14,label:"$4785.14"},{x:16451424e5,y:2657.6,label:"$2657.6"},{x:16452288e5,y:4816.07,label:"$4816.07"},{x:16453152e5,y:4493.61,label:"$4493.61"},{x:16454016e5,y:2887.25,label:"$2887.25"},{x:1645488e6,y:1905.9,label:"$1905.9"},{x:16455744e5,y:706.83,label:"$706.83"},{x:16456608e5,y:1516,label:"$1516"}]},{name:"Value 5",data:[{x:16436736e5,y:3510.98,label:"$3510.98"},{x:164376e7,y:2558.58,label:"$2558.58"},{x:16438464e5,y:2028.93,label:"$2028.93"},{x:16439328e5,y:3998.57,label:"$3998.57"},{x:16440192e5,y:1234.8,label:"$1234.8"},{x:16441056e5,y:3512.28,label:"$3512.28"},{x:1644192e6,y:554.04,label:"$554.04"},{x:16442784e5,y:4934.67,label:"$4934.67"},{x:16443648e5,y:3190.14,label:"$3190.14"},{x:16444512e5,y:2894.57,label:"$2894.57"},{x:16445376e5,y:68.99,label:"$68.99"},{x:1644624e6,y:3051.49,label:"$3051.49"},{x:16447104e5,y:1766.32,label:"$1766.32"},{x:16447968e5,y:1998.19,label:"$1998.19"},{x:16448832e5,y:3695.29,label:"$3695.29"},{x:16449696e5,y:46.56,label:"$46.56"},{x:1645056e6,y:3877.75,label:"$3877.75"},{x:16451424e5,y:2752.76,label:"$2752.76"},{x:16452288e5,y:4341.6,label:"$4341.6"},{x:16453152e5,y:1836.76,label:"$1836.76"},{x:16454016e5,y:346.63,label:"$346.63"},{x:1645488e6,y:1149.93,label:"$1149.93"},{x:16455744e5,y:4566.77,label:"$4566.77"},{x:16456608e5,y:4337.08,label:"$4337.08"}]}];function y(e,l){return xe.slice(0,e).map(s=>({...s,data:s.data.slice(0,l)}))}d(y,"getSeriesData");function he(e){const[l,s]=M.useState(!1),i=d(()=>s(!1),"close");return x.createElement("div",null,x.createElement(q,{onClick:d(()=>s(!0),"onClick")},"Open Chart Dialog"),x.createElement(G,{open:l,onClose:i,a11yCloseText:"Close chart dialog",size:"wide"},x.createElement(Y,null,"Bar chart in lightbox"),x.createElement(R,{...e})))}d(he,"BarChartInsideLightbox");const S={args:{series:y(1,5)}},v={args:{series:y(1,13)}},k={args:{series:y(1,24)}},T={args:{series:y(2,8)}},w={args:{series:y(3,3)}},C={args:{series:y(4,4)}},D={args:{series:y(5,3)}},A={args:{series:y(5,6)}},L={args:{series:y(2,24),stacked:!0}},E={args:{series:y(3,24),stacked:!0}},F={args:{series:y(4,24),stacked:!0}},O={args:{series:y(5,24),stacked:!0}},B={args:{title:"Revenue Over Time",description:"Daily revenue breakdown across product categories",series:y(3,8)}},H={args:{title:"Revenue Over Time",description:"Daily revenue breakdown across product categories inside a lightbox dialog",series:y(3,8),yAxisLabels:["$0","$1k","$2k","$3k","$4k","$5k"],renderTooltipOutside:!1},parameters:{docs:{description:{story:"Modal usage story for GH-740: the bar chart is mounted in a closed lightbox dialog, then displayed when the dialog opens. Set `renderTooltipOutside` to `false` when rendering inside a modal or dialog."}}},render:d(e=>x.createElement(he,{...e}),"render")},P={args:{series:y(2,12),xAxisLabelFormat:"{value:%b %e, %Y}"}},V={args:{series:y(1,8),yAxisLabels:["$0","$1k","$2k","$3k","$4k","$5k"]}},Pe=["SingleSeriesFiveDays","SingleSeriesThirteenDays","SingleSeriesTwentyFourDays","TwoSeriesEightDays","ThreeSeriesThreeDays","FourSeriesFourDays","FiveSeriesThreeDays","FiveSeriesSixDays","TwoSeriesStacked","ThreeSeriesStacked","FourSeriesStacked","FiveSeriesStacked","WithTitle","InsideLightboxDialog","CustomXAxisFormat","CustomYAxisLabels"];S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    series: getSeriesData(1, 5)
  }
}`,...S.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    series: getSeriesData(1, 13)
  }
}`,...v.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    series: getSeriesData(1, 24)
  }
}`,...k.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    series: getSeriesData(2, 8)
  }
}`,...T.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    series: getSeriesData(3, 3)
  }
}`,...w.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    series: getSeriesData(4, 4)
  }
}`,...C.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    series: getSeriesData(5, 3)
  }
}`,...D.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    series: getSeriesData(5, 6)
  }
}`,...A.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    series: getSeriesData(2, 24),
    stacked: true
  }
}`,...L.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    series: getSeriesData(3, 24),
    stacked: true
  }
}`,...E.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    series: getSeriesData(4, 24),
    stacked: true
  }
}`,...F.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    series: getSeriesData(5, 24),
    stacked: true
  }
}`,...O.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Revenue Over Time",
    description: "Daily revenue breakdown across product categories",
    series: getSeriesData(3, 8)
  }
}`,...B.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    series: getSeriesData(2, 12),
    xAxisLabelFormat: "{value:%b %e, %Y}"
  }
}`,...P.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    series: getSeriesData(1, 8),
    yAxisLabels: ["$0", "$1k", "$2k", "$3k", "$4k", "$5k"]
  }
}`,...V.parameters?.docs?.source}}};export{P as CustomXAxisFormat,V as CustomYAxisLabels,A as FiveSeriesSixDays,O as FiveSeriesStacked,D as FiveSeriesThreeDays,C as FourSeriesFourDays,F as FourSeriesStacked,H as InsideLightboxDialog,S as SingleSeriesFiveDays,v as SingleSeriesThirteenDays,k as SingleSeriesTwentyFourDays,E as ThreeSeriesStacked,w as ThreeSeriesThreeDays,T as TwoSeriesEightDays,L as TwoSeriesStacked,B as WithTitle,Pe as __namedExportsOrder,He as default};
