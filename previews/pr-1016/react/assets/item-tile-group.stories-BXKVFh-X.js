import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{t as r}from"./classnames-D09xBJOL.js";import{a as i,i as a,n as o,o as s,r as c,t as l}from"./item-tile-C-gizrW5.js";function u(){return(u=t((()=>{})))()}function d(){return(d=t((()=>{})))()}function f({className:e,items:t,layout:n=`gallery`,ref:r,...i}){return(0,m.jsx)(`div`,{...i,ref:r,className:(0,p.default)(`layout-grid`,`item-tile-group`,n===`list`&&`item-tile-group--list-view`,e),children:(0,m.jsx)(`ul`,{children:t.map((e,t)=>(0,m.jsx)(`li`,{children:(0,m.jsx)(l,{...e,layout:n})},e.id??t))})})}var p,m;function h(){return(h=t((()=>{p=e(r(),1),o(),u(),d(),m=n();try{f.displayName=`EvoItemTileGroup`,f.__docgenInfo={description:`Item tile groups render tile data in a semantic list. The group controls
grid/list styling while each item retains its own named content and action.

## Usage

\`\`\`tsx
import { EvoItemTileGroup } from "@evo-web/react/item-tile-group";
import { EvoItemTileTitle } from "@evo-web/react/item-tile";

<EvoItemTileGroup
  items={[{ href: "/listing", title: <EvoItemTileTitle>Phone</EvoItemTileTitle> }]}
/>
\`\`\``,displayName:`EvoItemTileGroup`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/item-tile-group/item-tile-group.tsx`,methods:[],props:{items:{defaultValue:null,declarations:[{fileName:`evo-react/src/item-tile-group/types.ts`,name:`TypeLiteral`}],description:"Tile data rendered in order, each inside an `<li>`.",name:`items`,required:!0,tags:{},type:{name:`readonly EvoItemTileProps[]`}},layout:{defaultValue:{value:`gallery`},declarations:[{fileName:`evo-react/src/item-tile-group/types.ts`,name:`TypeLiteral`}],description:'Shared gallery or list layout; defaults to `"gallery"`.',name:`layout`,required:!1,tags:{},type:{name:`enum`,raw:`ItemTileLayout`,value:[{value:`"list"`},{value:`"gallery"`}]}}},tags:{summary:`Responsive grid or list of item tiles.`}}}catch{}})))()}var g,_,v,y,b,x;function S(){return(S=t((()=>{s(),a(),h(),g=n(),_=Array.from({length:5},(e,t)=>({id:`listing-${t+1}`,href:`/listing/${t+1}`,file:{name:`photo-${t+1}.jpg`,type:`image/jpeg`,src:`https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg`},title:(0,g.jsxs)(c,{children:[`Listing `,t+1]}),description:(0,g.jsx)(i,{children:`$29.99`})})),v={title:`Layout/EvoItemTileGroup`,component:f,argTypes:{layout:{control:`select`,options:[`gallery`,`list`]}},args:{items:_,layout:`gallery`}},y={},b={args:{layout:`list`}},x=[`Default`,`List`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{}`,...y.parameters?.docs?.source},description:{story:`Tiles render in a responsive grid of semantic list items.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    layout: "list"
  }
}`,...b.parameters?.docs?.source},description:{story:`List view shares the layout across every tile.`,...b.parameters?.docs?.description}}}})))()}S();export{y as Default,b as List,x as __namedExportsOrder,v as default};