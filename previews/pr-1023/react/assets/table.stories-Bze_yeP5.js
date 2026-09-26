import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-CK-NQdWx.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{t as i}from"./classnames-D09xBJOL.js";import{a,i as o,n as s,o as c,r as l,t as u}from"./sort-up-12-DCqnkFXp.js";function d(){return(d=t((()=>{})))()}function f({children:e,className:t,density:n,frozenHeader:r,mode:i=`none`,ref:a,tabIndex:o=0,...s}){return(0,m.jsx)(`div`,{...s,ref:a,role:`group`,tabIndex:o,className:(0,p.default)(`table`,i===`selection`&&`table--mode-selection`,r&&`table--frozen-header`,n&&`table--density-${n}`,t),children:(0,m.jsx)(`table`,{children:e})})}var p,m;function h(){return(h=t((()=>{p=e(i(),1),d(),m=r();try{f.displayName=`EvoTable`,f.__docgenInfo={description:`Tables present structured data in rows and columns. Compose a table head,
body, rows, and cells as named components. The outer group can receive a
descriptive \`aria-label\` when its purpose is not clear from surrounding
content.

## Usage

\`\`\`tsx
import {
  EvoTable,
  EvoTableBody,
  EvoTableCell,
  EvoTableHead,
  EvoTableHeader,
  EvoTableRow,
} from "@evo-web/react/table";

<EvoTable aria-label="Active listings">
  <EvoTableHead>
    <EvoTableHeader>Item</EvoTableHeader>
    <EvoTableHeader>Price</EvoTableHeader>
  </EvoTableHead>
  <EvoTableBody>
    <EvoTableRow>
      <EvoTableCell rowHeader>Camera</EvoTableCell>
      <EvoTableCell columnType="numeric">$120</EvoTableCell>
    </EvoTableRow>
  </EvoTableBody>
</EvoTable>
\`\`\``,displayName:`EvoTable`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/table/table.tsx`,methods:[],props:{mode:{defaultValue:{value:`none`},declarations:[{fileName:`evo-react/src/table/types.ts`,name:`TypeLiteral`}],description:`Applies selection cell sizing when row controls are supplied.`,name:`mode`,required:!1,tags:{},type:{name:`enum`,raw:`TableMode`,value:[{value:`"none"`},{value:`"selection"`}]}},density:{defaultValue:null,declarations:[{fileName:`evo-react/src/table/types.ts`,name:`TypeLiteral`}],description:`Adjusts table row and cell spacing.`,name:`density`,required:!1,tags:{},type:{name:`enum`,raw:`TableDensity`,value:[{value:`"compact"`},{value:`"relaxed"`}]}},frozenHeader:{defaultValue:null,declarations:[{fileName:`evo-react/src/table/types.ts`,name:`TypeLiteral`}],description:`Keeps the header visible when scrolling the table wrapper.`,name:`frozenHeader`,required:!1,tags:{},type:{name:`boolean`}}},tags:{summary:`Scrollable table for structured data.`}}}catch{}})))()}function g({children:e,...t}){return(0,_.jsx)(`thead`,{...t,children:(0,_.jsx)(`tr`,{children:e})})}var _;function v(){return(v=t((()=>{_=r();try{g.displayName=`EvoTableHead`,g.__docgenInfo={description:``,displayName:`EvoTableHead`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/table/table-head.tsx`,methods:[],props:{},tags:{summary:`Column header row of a table.`}}}catch{}})))()}function y({children:e,...t}){return(0,b.jsx)(`tbody`,{...t,children:e})}var b;function x(){return(x=t((()=>{b=r();try{y.displayName=`EvoTableBody`,y.__docgenInfo={description:``,displayName:`EvoTableBody`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/table/table-body.tsx`,methods:[],props:{},tags:{summary:`Body region for table rows.`}}}catch{}})))()}function S({children:e,...t}){return(0,C.jsx)(`tr`,{...t,children:e})}var C;function w(){return(w=t((()=>{C=r();try{S.displayName=`EvoTableRow`,S.__docgenInfo={description:``,displayName:`EvoTableRow`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/table/table-row.tsx`,methods:[],props:{},tags:{summary:`One row of application supplied table cells.`}}}catch{}})))()}function T({children:e,className:t,columnType:n,href:r,onSortChange:i,scope:o=`col`,sort:s,...c}){let d=s===`asc`?(0,D.jsx)(l,{}):s===`desc`?(0,D.jsx)(u,{}):s===`none`?(0,D.jsx)(a,{}):null,f=r?(0,D.jsxs)(`a`,{href:r,onClick:()=>s!==void 0&&i?.(k[s]),children:[e,d&&(0,D.jsxs)(D.Fragment,{children:[` `,d]})]}):s===void 0?e:(0,D.jsxs)(`button`,{type:`button`,onClick:()=>i?.(k[s]),children:[e,d&&(0,D.jsxs)(D.Fragment,{children:[` `,d]})]});return(0,D.jsx)(`th`,{...c,scope:o,"aria-sort":s===void 0?void 0:O[s],className:(0,E.default)(`table-cell`,n&&`table-cell--${n}`,t),children:n===`layout`?(0,D.jsx)(`div`,{className:`table-cell__layout`,children:f}):f})}var E,D,O,k;function A(){return(A=t((()=>{E=e(i(),1),c(),o(),s(),D=r(),O={none:`none`,asc:`ascending`,desc:`descending`},k={none:`asc`,asc:`desc`,desc:`none`};try{T.displayName=`EvoTableHeader`,T.__docgenInfo={description:"Column heading. When `sort` is supplied, it renders a native button that\nrequests the next direction through `onSortChange`. The application owns\nsorting the rows and updating `sort`.",displayName:`EvoTableHeader`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/table/table-header.tsx`,methods:[],props:{columnType:{defaultValue:null,declarations:[{fileName:`evo-react/src/table/types.ts`,name:`TypeLiteral`}],description:`Applies a Skin cell treatment such as numeric or layout.`,name:`columnType`,required:!1,tags:{},type:{name:`enum`,raw:`TableColumnType`,value:[{value:`"numeric"`},{value:`"normal"`},{value:`"layout"`},{value:`"icon-action"`}]}},sort:{defaultValue:null,declarations:[{fileName:`evo-react/src/table/types.ts`,name:`TypeLiteral`}],description:`Controlled sort direction. Omit when the column is not sortable.`,name:`sort`,required:!1,tags:{},type:{name:`enum`,raw:`TableSort`,value:[{value:`"desc"`},{value:`"none"`},{value:`"asc"`}]}},onSortChange:{defaultValue:null,declarations:[{fileName:`evo-react/src/table/types.ts`,name:`TypeLiteral`}],description:`Called with the next direction after activating a sortable header.`,name:`onSortChange`,required:!1,tags:{},type:{name:`((sort: TableSort) => void)`}},href:{defaultValue:null,declarations:[{fileName:`evo-react/src/table/types.ts`,name:`TypeLiteral`}],description:`Optional heading link destination; renders an anchor instead of a button.`,name:`href`,required:!1,tags:{},type:{name:`string`}}},tags:{summary:`Column heading cell of a table.`}}}catch{}})))()}function j({children:e,className:t,columnType:n,rowHeader:r=!1,...i}){return(0,N.jsx)(r?`th`:`td`,{...i,scope:r?`row`:void 0,className:(0,M.default)(`table-cell`,n&&`table-cell--${n}`,t),children:n===`layout`?(0,N.jsx)(`div`,{className:`table-cell__layout`,children:e}):e})}var M,N;function P(){return(P=t((()=>{M=e(i(),1),N=r();try{j.displayName=`EvoTableCell`,j.__docgenInfo={description:'A data cell. Set `rowHeader` for the row\'s identifying cell and\n`columnType="layout"` for a horizontal arrangement of its contents.',displayName:`EvoTableCell`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/table/table-cell.tsx`,methods:[],props:{rowHeader:{defaultValue:{value:`false`},declarations:[{fileName:`evo-react/src/table/types.ts`,name:`TypeLiteral`}],description:'Renders a row header `<th scope="row">` instead of `<td>`.',name:`rowHeader`,required:!1,tags:{},type:{name:`boolean`}},columnType:{defaultValue:null,declarations:[{fileName:`evo-react/src/table/types.ts`,name:`TypeLiteral`}],description:`Applies a Skin cell treatment such as numeric or layout.`,name:`columnType`,required:!1,tags:{},type:{name:`enum`,raw:`TableColumnType`,value:[{value:`"numeric"`},{value:`"normal"`},{value:`"layout"`},{value:`"icon-action"`}]}}},tags:{summary:`Data or row heading cell.`}}}catch{}})))()}var F,I,L,R,z,B,V;function H(){return(H=t((()=>{F=n(),h(),x(),P(),v(),A(),w(),I=r(),L=[{id:`camera`,item:`Digital camera`,price:`$120`,quantity:3},{id:`case`,item:`Phone case`,price:`$18`,quantity:12},{id:`headphones`,item:`Headphones`,price:`$45`,quantity:6}],R={title:`Data Display/EvoTable`,component:f,subcomponents:{EvoTableHead:g,EvoTableBody:y,EvoTableRow:S,EvoTableHeader:T,EvoTableCell:j},argTypes:{density:{control:`select`,options:[`compact`,`relaxed`]}}},z={render:e=>(0,I.jsxs)(f,{...e,"aria-label":`Active listings`,children:[(0,I.jsxs)(g,{children:[(0,I.jsx)(T,{children:`Item`}),(0,I.jsx)(T,{columnType:`numeric`,children:`Price`}),(0,I.jsx)(T,{columnType:`numeric`,children:`Available`})]}),(0,I.jsx)(y,{children:L.map(e=>(0,I.jsxs)(S,{children:[(0,I.jsx)(j,{rowHeader:!0,children:e.item}),(0,I.jsx)(j,{columnType:`numeric`,children:e.price}),(0,I.jsx)(j,{columnType:`numeric`,children:e.quantity})]},e.id))})]})},B={render:()=>{let[e,t]=(0,F.useState)(`none`),n=[...L].sort((t,n)=>e===`none`?0:e===`asc`?Number(t.price.slice(1))-Number(n.price.slice(1)):Number(n.price.slice(1))-Number(t.price.slice(1)));return(0,I.jsxs)(f,{"aria-label":`Active listings`,children:[(0,I.jsxs)(g,{children:[(0,I.jsx)(T,{children:`Item`}),(0,I.jsx)(T,{columnType:`numeric`,sort:e,onSortChange:t,children:`Price`}),(0,I.jsx)(T,{columnType:`numeric`,children:`Available`})]}),(0,I.jsx)(y,{children:n.map(e=>(0,I.jsxs)(S,{children:[(0,I.jsx)(j,{rowHeader:!0,children:e.item}),(0,I.jsx)(j,{columnType:`numeric`,children:e.price}),(0,I.jsx)(j,{columnType:`numeric`,children:e.quantity})]},e.id))})]})}},V=[`Default`,`Sorting`],z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: args => <EvoTable {...args} aria-label="Active listings">
      <EvoTableHead>
        <EvoTableHeader>Item</EvoTableHeader>
        <EvoTableHeader columnType="numeric">Price</EvoTableHeader>
        <EvoTableHeader columnType="numeric">Available</EvoTableHeader>
      </EvoTableHead>
      <EvoTableBody>
        {listings.map(listing => <EvoTableRow key={listing.id}>
            <EvoTableCell rowHeader>{listing.item}</EvoTableCell>
            <EvoTableCell columnType="numeric">{listing.price}</EvoTableCell>
            <EvoTableCell columnType="numeric">{listing.quantity}</EvoTableCell>
          </EvoTableRow>)}
      </EvoTableBody>
    </EvoTable>
}`,...z.parameters?.docs?.source},description:{story:`Compare current listing prices and quantities.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [sort, setSort] = useState<TableSort>("none");
    const rows = [...listings].sort((first, second) => sort === "none" ? 0 : sort === "asc" ? Number(first.price.slice(1)) - Number(second.price.slice(1)) : Number(second.price.slice(1)) - Number(first.price.slice(1)));
    return <EvoTable aria-label="Active listings">
        <EvoTableHead>
          <EvoTableHeader>Item</EvoTableHeader>
          <EvoTableHeader columnType="numeric" sort={sort} onSortChange={setSort}>
            Price
          </EvoTableHeader>
          <EvoTableHeader columnType="numeric">Available</EvoTableHeader>
        </EvoTableHead>
        <EvoTableBody>
          {rows.map(listing => <EvoTableRow key={listing.id}>
              <EvoTableCell rowHeader>{listing.item}</EvoTableCell>
              <EvoTableCell columnType="numeric">{listing.price}</EvoTableCell>
              <EvoTableCell columnType="numeric">
                {listing.quantity}
              </EvoTableCell>
            </EvoTableRow>)}
        </EvoTableBody>
      </EvoTable>;
  }
}`,...B.parameters?.docs?.source},description:{story:`The application sorts its rows after a column requests a direction.`,...B.parameters?.docs?.description}}}})))()}H();export{z as Default,B as Sorting,V as __namedExportsOrder,R as default};