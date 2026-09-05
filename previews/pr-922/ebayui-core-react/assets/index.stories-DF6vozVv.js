import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-CK-NQdWx.js";import{t as r}from"./classnames-D09xBJOL.js";import{r as i}from"./utils-i55QFFMK.js";import{n as a}from"./iframe-RezWaW69.js";import{t as o}from"./utils-BI15M-bA.js";import{n as s,t as c}from"./ebay-icon-button-B3kLZnD2.js";import{n as l,t as u}from"./ebay-checkbox-CrS3fqEa.js";import{n as d,t as f}from"./ebay-cta-button-GgO98_uk.js";import{n as p,t as m}from"./ebay-icon-overflow-vertical-16-AMEDGDdZ.js";import{a as h,i as g,n as _,o as v,r as y,t as b}from"./ebay-icon-sort-up-12-DLLMPCJp.js";import{n as x,t as S}from"./ebay-signal-DMV65Eu7.js";import{i as C,n as w,t as T}from"./ebay-select-7-_UnZLa.js";import{n as E,t as ee}from"./ebay-tri-state-checkbox-Bj69nfkI.js";var D,O,k;function A(){return(A=t((()=>{D=e(n()),O=e(r()),k=({rowHeader:e,columnType:t,className:n,children:r,...i})=>{let a=e?`th`:`td`,o=t===`layout`?`div`:D.Fragment;return D.createElement(a,{className:(0,O.default)(`table-cell`,n,{[`table-cell--${t}`]:t}),...i},D.createElement(o,t===`layout`?{className:`table-cell__layout`}:{},r))};try{k.displayName=`tablecell`,k.__docgenInfo={description:``,displayName:`tablecell`,filePath:`/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-table/table-cell.tsx`,methods:[],props:{rowHeader:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-table/table-cell.tsx`,name:`TypeLiteral`}],description:``,name:`rowHeader`,required:!1,tags:{},type:{name:`boolean | undefined`}},columnType:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-table/table-cell.tsx`,name:`TypeLiteral`}],description:``,name:`columnType`,required:!1,tags:{},type:{name:`ColumnType | undefined`}}},tags:{}}}catch{}})))()}var j,M;function N(){return(N=t((()=>{j=e(n()),A(),g(),_(),v(),M=({columnType:e,sort:t,href:n,children:r,onSort:i,...a})=>{let o={asc:`ascending`,desc:`descending`,none:`none`},s={asc:y,desc:b,none:h}[t],c=t?j.createElement(j.Fragment,null,` `,j.createElement(s,null)):null,l=r;return n?l=j.createElement(`a`,{href:n,onClick:i},r,c):t&&(l=j.createElement(`button`,{type:`button`,onClick:i},r,c)),j.createElement(k,{...a,rowHeader:!0,columnType:e,"aria-sort":t?o[t]:void 0},l)};try{M.displayName=`EbayTableHeader`,M.__docgenInfo={description:``,displayName:`EbayTableHeader`,filePath:`/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-table/table-header.tsx`,methods:[],props:{columnType:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-table/table-header.tsx`,name:`TypeLiteral`}],description:``,name:`columnType`,required:!1,tags:{},type:{name:`ColumnType | undefined`}},name:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-table/table-header.tsx`,name:`TypeLiteral`}],description:``,name:`name`,required:!1,tags:{},type:{name:`string | undefined`}},sort:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-table/table-header.tsx`,name:`TypeLiteral`}],description:``,name:`sort`,required:!1,tags:{},type:{name:`TableSort | undefined`}},href:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-table/table-header.tsx`,name:`TypeLiteral`}],description:``,name:`href`,required:!1,tags:{},type:{name:`string | undefined`}},rowHeader:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-table/table-header.tsx`,name:`TypeLiteral`}],description:``,name:`rowHeader`,required:!1,tags:{},type:{name:`boolean | undefined`}},onSort:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-table/table-header.tsx`,name:`TypeLiteral`}],description:``,name:`onSort`,required:!1,tags:{},type:{name:`TableHeaderSortHandler | undefined`}}},tags:{}}}catch{}})))()}var P,F;function I(){return(I=t((()=>{P=e(n()),o(),A(),u(),F=({name:e,className:t,selected:n,mode:r,a11ySelectRowText:a,children:o,onSelect:s,__headers:c,...u})=>{let d=i(o,k),f=(t,{checked:n})=>{s(t,{name:e,selected:n})};return P.createElement(`tr`,{className:t,...u},r===`selection`&&P.createElement(k,{rowHeader:!0,key:`selection-cell`},P.createElement(l,{checked:n,"aria-label":a||`Select row`,onChange:f})),c?.map((e,t)=>P.cloneElement(d[t],{rowHeader:typeof e.props.rowHeader==`boolean`?e.props.rowHeader:d[t].props.rowHeader,columnType:typeof e.props.columnType==`string`?e.props.columnType:d[t].props.columnType})))};try{F.displayName=`tablerow`,F.__docgenInfo={description:``,displayName:`tablerow`,filePath:`/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-table/table-row.tsx`,methods:[],props:{name:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-table/table-row.tsx`,name:`TypeLiteral`}],description:``,name:`name`,required:!1,tags:{},type:{name:`string | undefined`}},selected:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-table/table-row.tsx`,name:`TypeLiteral`}],description:``,name:`selected`,required:!1,tags:{},type:{name:`boolean | undefined`}},mode:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-table/table-row.tsx`,name:`TypeLiteral`}],description:``,name:`mode`,required:!1,tags:{},type:{name:`TableMode | undefined`}},a11ySelectRowText:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-table/table-row.tsx`,name:`TypeLiteral`}],description:``,name:`a11ySelectRowText`,required:!1,tags:{},type:{name:`string | undefined`}},onSelect:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-table/table-row.tsx`,name:`TypeLiteral`}],description:``,name:`onSelect`,required:!1,tags:{},type:{name:`TableRowSelectHandler | undefined`}},__headers:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-table/table-row.tsx`,name:`TypeLiteral`}],description:`This property is used by EbayTable to make sure that headers match up with the correct cells
NOTE: The flag "@deprecated" is only to not show this property in the autocomplete list on the top`,name:`__headers`,required:!1,tags:{deprecated:``},type:{name:`ReactElement<EbayTableHeaderProps, string | JSXElementConstructor<any>>[] | undefined`}}},tags:{}}}catch{}})))()}var L,R,z;function B(){return(B=t((()=>{L=e(n()),R=e(r()),ee(),o(),N(),I(),z=({className:e,mode:t,allSelected:n,density:r,frozenHeader:a,a11ySelectAllText:o,a11ySelectRowText:s,onSelect:c,onSort:l,children:u,...d})=>{let f=i(u,M),p=i(u,F),[m,h]=(0,L.useState)(()=>f.reduce((e,t,n)=>(t.props.sort&&(e[t.props.name||`${n}`]=t.props.sort),e),{})),[g,_]=(0,L.useState)(()=>p.reduce((e,t,n)=>(e[t.props.name||`${n}`]=typeof t.props.selected==`boolean`&&t.props.selected,e),{}));function v(e){let t=Object.values(e).filter(Boolean).length,n=Object.values(e).length-t;return t===0?`false`:n===0?`true`:`mixed`}let y=n===void 0?v(g):n,b=e=>{let t=p.reduce((e,t,n)=>(e[t.props.name||`${n}`]=y===`false`||y===`mixed`,e),{});_(t),c?.(e,{selected:t,allSelected:v(t)})},x=(e,{name:t,selected:n})=>{let r={...g,[t||``]:n};_(r),c?.(e,{selected:r,allSelected:v(r)})},S=(e,t)=>{let n={none:`asc`,asc:`desc`,desc:`none`},r=Object.entries(m).reduce((e,[r,i])=>(e[r]=r===t?n[i]:`none`,e),{});h(r),l?.(e,{sorted:{[t]:r[t]}})};return L.createElement(`div`,{...d,className:(0,R.default)(`table`,e,{"table--mode-selection":t===`selection`,"table--frozen-header":a,[`table--density-${r}`]:r}),role:`group`,tabIndex:0},L.createElement(`table`,null,L.createElement(`thead`,null,L.createElement(`tr`,null,t===`selection`&&L.createElement(M,{key:`selection-all-cell`},L.createElement(E,{"aria-label":o||`Select all rows`,checked:y,onChange:b})),f.map((e,t)=>L.cloneElement(e,{sort:m[e.props.name||`${t}`],onSort:n=>S(n,e.props.name||`${t}`)})))),L.createElement(`tbody`,null,p.map((e,n)=>L.cloneElement(e,{mode:t,name:e.props.name||`${n}`,a11ySelectRowText:e.props.a11ySelectRowText||s,onSelect:(t,r)=>x(t,{...r,name:e.props.name||`${n}`}),selected:typeof e.props.selected==`boolean`?e.props.selected:g[e.props.name||`${n}`],__headers:f})))))};try{z.displayName=`table`,z.__docgenInfo={description:``,displayName:`table`,filePath:`/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-table/table.tsx`,methods:[],props:{mode:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-table/table.tsx`,name:`TypeLiteral`}],description:``,name:`mode`,required:!1,tags:{},type:{name:`TableMode | undefined`}},allSelected:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-table/table.tsx`,name:`TypeLiteral`}],description:``,name:`allSelected`,required:!1,tags:{},type:{name:`CheckboxState | undefined`}},density:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-table/table.tsx`,name:`TypeLiteral`}],description:``,name:`density`,required:!1,tags:{},type:{name:`TableDensity | undefined`}},frozenHeader:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-table/table.tsx`,name:`TypeLiteral`}],description:``,name:`frozenHeader`,required:!1,tags:{},type:{name:`boolean | undefined`}},a11ySelectAllText:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-table/table.tsx`,name:`TypeLiteral`}],description:``,name:`a11ySelectAllText`,required:!1,tags:{},type:{name:`string | undefined`}},a11ySelectRowText:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-table/table.tsx`,name:`TypeLiteral`}],description:``,name:`a11ySelectRowText`,required:!1,tags:{},type:{name:`string | undefined`}},onSelect:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-table/table.tsx`,name:`TypeLiteral`}],description:``,name:`onSelect`,required:!1,tags:{},type:{name:`TableSelectHandler | undefined`}},onSort:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-table/table.tsx`,name:`TypeLiteral`}],description:``,name:`onSort`,required:!1,tags:{},type:{name:`TableSortHandler | undefined`}}},tags:{}}}catch{}})))()}function V(){return(V=t((()=>{B(),N(),I(),A()})))()}var H;function U(){return(U=t((()=>{H=[{seller:`Nintendo`,item:{title:`Nintendo Switch Brand New Gaming System with Four Controllers`,subtitle:`SKU : A43BTR5678 • Quantity : 1`,titleShort:`Switch`,image:{url:`http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/shoes.jpeg`,alt:`Nintendo Switch`}},status:`Ready to Ship`,statusType:`recent`,listPrice:`$287.96`,quantityAvailable:`300`,orders:{number:`00-10542-89507`,quantity:100},watchers:`95`,protection:`$17.99`,shipping:`FREE`,delivery:`4/1 - 4/5`},{seller:`Nintendo`,item:{title:`Nintendo SNES Brand New Gaming System with Four Controllers`,subtitle:`SKU : A43BTR5678 • Quantity : 1`,titleShort:`SNES`,image:{url:`http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/shoes.jpeg`,alt:`Nintendo Switch`}},status:`Ready to Ship`,statusType:`recent`,listPrice:`$89.85`,quantityAvailable:`45`,orders:{number:`00-10542-89507`,quantity:200},watchers:`5`,protection:`$18.95`,shipping:`FREE`,delivery:`4/11 - 4/15`},{seller:`Microsoft`,item:{title:`Microsoft XBOX 360 Brand New Gaming System with Four Controllers`,subtitle:`SKU : A43BTR5678 • Quantity : 1`,titleShort:`XBOX 360`,image:{url:`http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/shoes.jpeg`,alt:`Microsoft XBOX`}},status:`Backorder`,statusType:`time-sensitive`,listPrice:`$499.99`,quantityAvailable:`345`,orders:{number:`00-10542-89507`,quantity:100},watchers:`205`,protection:`$17.99`,shipping:`FREE`,delivery:`4/17 - 4/25`},{seller:`Microsoft`,item:{title:`Microsoft XBOX One Brand New Gaming System with Four Controllers`,subtitle:`SKU : A43BTR5678 • Quantity : 1`,titleShort:`XBOX One`,image:{url:`http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/shoes.jpeg`,alt:`Microsoft XBOX`}},status:`Preparing`,statusType:`neutral`,listPrice:`$499.99`,quantityAvailable:`399`,orders:{number:`00-10542-89507`,quantity:100},watchers:`305`,protection:`$27.99`,shipping:`FREE`,delivery:`4/9 - 4/11`},{seller:`Sony`,item:{title:`Sony Playstation 5 Brand New Gaming System with Four Controllers`,subtitle:`SKU : A43BTR5678 • Quantity : 1`,titleShort:`Playstation 5`,image:{url:`http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/shoes.jpeg`,alt:`Sony Playstation 5`}},status:`Restocking`,statusType:`trustworthy`,listPrice:`$519.99`,quantityAvailable:`205`,orders:{number:`00-10542-89507`,quantity:100},watchers:`199`,protection:`$29.99`,shipping:`FREE`,delivery:`4/11 - 4/15`}]})))()}var W,G,K,q,J,Y,X,Z,Q;function $(){return($=t((()=>{W=e(n()),V(),S(),T(),f(),c(),U(),p(),G=a(),K={component:z,title:`data display/ebay-table`,argTypes:{density:{control:{type:`select`},description:`table density`,options:[`compact`,`relaxed`,`none`]},mode:{control:{type:`select`},description:`table mode`,options:[`selection`,`none`]},frozenHeader:{control:{type:`boolean`},description:`If true, the header will be frozen`},allSelected:{control:{type:`select`},description:`Select all tri-state checkbox state`,options:[`true`,`false`,`mixed`]},a11ySelectAllText:{control:{type:`text`},description:`Accessibility text for select all checkbox`,table:{category:`Accessibility`,defaultValue:{summary:`Select all rows`}}},a11ySelectRowText:{control:{type:`text`},description:`Accessibility text for select row checkbox`,table:{category:`Accessibility`,defaultValue:{summary:`Select row`}}},onSelect:{action:`onSelect`,description:`Triggered on selection`,table:{category:`Events`,defaultValue:{summary:`event, { selected, allSelected }`}}},onSort:{action:`onSort`,description:`Triggered on column sort`,table:{category:`Events`,defaultValue:{summary:`event, { sorted }`}}},columnType:{description:"Column type, `normal`, `numeric`, `layout`, `icon-action`",options:[`normal`,`numeric`,`layout`,`icon-action`],control:{type:`select`}},name:{description:"Column name that will be used in the EbayTable event `sorted` object",control:`text`},sort:{description:"Defines which icon will be shown, `asc`, `desc`, `none`",options:[`asc`,`desc`,`none`],control:{type:`select`}},rowHeader:{description:`Defines if the column is a row header`,control:`boolean`},selected:{description:`Defines if the row is selected`,control:`boolean`}},tags:[`autodocs`],parameters:{docs:{description:{component:`## Usage

### Import

\`\`\`tsx
import {
    EbayTable,
    EbayTableHeader,
    EbayTableRow,
    EbayTableCell,
    type TableSelectHandler,
    type TableSortHandler,
    type TableRowSelectHandler,
    type TableHeaderSortHandler,
} from "@ebay/ui-core-react/ebay-table";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/checkbox";
import "@ebay/skin/icon";
import "@ebay/skin/table";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/checkbox.css";
@import "@ebay/skin/icon.css";
@import "@ebay/skin/table.css";
\`\`\`

\`\`\`tsx
<EbayTable>
    <EbayTableHeader>Column 1</EbayTableHeader>
    <EbayTableHeader>Column 2</EbayTableHeader>
    <EbayTableHeader>Column 3</EbayTableHeader>
    <EbayTableRow>
        <EbayTableCell>Row 1, Cell 1</EbayTableCell>
        <EbayTableCell>Row 1, Cell 2</EbayTableCell>
        <EbayTableCell>Row 1, Cell 3</EbayTableCell>
    </EbayTableRow>
    <EbayTableRow>
        <EbayTableCell>Row 2, Cell 1</EbayTableCell>
        <EbayTableCell>Row 2, Cell 2</EbayTableCell>
        <EbayTableCell>Row 2, Cell 3</EbayTableCell>
    </EbayTableRow>
</EbayTable>
\`\`\``}}}},q=e=>(0,G.jsxs)(z,{...e,children:[(0,G.jsx)(M,{rowHeader:!0,children:`Seller`}),(0,G.jsx)(M,{children:`Item`}),(0,G.jsx)(M,{children:`Status`}),(0,G.jsx)(M,{columnType:`numeric`,children:`List Price`}),(0,G.jsx)(M,{columnType:`numeric`,children:`Quantity Available`}),(0,G.jsx)(M,{children:`Orders`}),(0,G.jsx)(M,{columnType:`numeric`,children:`Watchers`}),(0,G.jsx)(M,{columnType:`numeric`,children:`Protection`}),(0,G.jsx)(M,{children:`Shipping`}),(0,G.jsx)(M,{children:`Delivery`}),H.map((e,t)=>(0,G.jsxs)(F,{name:`row_${t}`,children:[(0,G.jsx)(k,{children:e.seller}),(0,G.jsx)(k,{children:e.item.title}),(0,G.jsx)(k,{children:(0,G.jsx)(x,{status:e.statusType,children:e.status})}),(0,G.jsx)(k,{columnType:`numeric`,children:e.listPrice}),(0,G.jsx)(k,{columnType:`numeric`,children:e.quantityAvailable}),(0,G.jsx)(k,{children:(0,G.jsx)(`a`,{href:`https://ebay.com`,children:e.orders.number})}),(0,G.jsx)(k,{columnType:`numeric`,children:e.watchers}),(0,G.jsx)(k,{columnType:`numeric`,children:e.protection}),(0,G.jsx)(k,{children:e.shipping}),(0,G.jsx)(k,{children:e.delivery})]},t))]}),J=e=>(0,G.jsxs)(z,{...e,children:[(0,G.jsx)(M,{rowHeader:!0,children:`Seller`}),(0,G.jsx)(M,{children:`Item`}),(0,G.jsx)(M,{children:`Condition`}),(0,G.jsx)(M,{columnType:`layout`,children:`Multiple Actions`}),(0,G.jsx)(M,{columnType:`icon-action`,children:`Action Plus`}),(0,G.jsx)(M,{columnType:`numeric`,children:`List Price`}),(0,G.jsx)(M,{columnType:`numeric`,children:`Quantity Available`}),(0,G.jsx)(M,{children:`Orders`}),(0,G.jsx)(M,{columnType:`numeric`,children:`Watchers`}),(0,G.jsx)(M,{columnType:`numeric`,children:`Protection`}),(0,G.jsx)(M,{children:`Shipping`}),(0,G.jsx)(M,{children:`Delivery`}),H.map((e,t)=>(0,G.jsxs)(F,{name:`row_${t}`,children:[(0,G.jsx)(k,{children:e.seller}),(0,G.jsx)(k,{children:e.item.titleShort}),(0,G.jsx)(k,{children:(0,G.jsxs)(w,{borderless:!0,defaultValue:`newWithoutBox`,children:[(0,G.jsx)(C,{value:`new`,children:`New`}),(0,G.jsx)(C,{value:`newWithoutBox`,children:`New without box`}),(0,G.jsx)(C,{value:`used`,children:`Used`})]})}),(0,G.jsxs)(k,{children:[(0,G.jsx)(d,{href:`https://ebay.com`,children:`Edit Listing`}),(0,G.jsx)(s,{icon:(0,G.jsx)(m,{})})]}),(0,G.jsx)(k,{children:(0,G.jsx)(s,{icon:(0,G.jsx)(m,{})})}),(0,G.jsx)(k,{children:(0,G.jsx)(x,{status:e.statusType,children:e.status})}),(0,G.jsx)(k,{columnType:`numeric`,children:e.listPrice}),(0,G.jsx)(k,{columnType:`numeric`,children:e.quantityAvailable}),(0,G.jsx)(k,{children:(0,G.jsx)(`a`,{href:`https://ebay.com`,children:e.orders.number})}),(0,G.jsx)(k,{columnType:`numeric`,children:e.watchers}),(0,G.jsx)(k,{columnType:`numeric`,children:e.protection}),(0,G.jsx)(k,{children:e.shipping}),(0,G.jsx)(k,{children:e.delivery})]},t))]}),Y=e=>(0,G.jsxs)(z,{...e,children:[(0,G.jsx)(M,{sort:`none`,rowHeader:!0,children:`Seller`}),(0,G.jsx)(M,{sort:`none`,children:`Item`}),(0,G.jsx)(M,{sort:`none`,children:`Status`}),(0,G.jsx)(M,{columnType:`numeric`,sort:`none`,children:`List Price`}),(0,G.jsx)(M,{columnType:`numeric`,sort:`none`,children:`Quantity Available`}),(0,G.jsx)(M,{sort:`none`,children:`Orders`}),(0,G.jsx)(M,{columnType:`numeric`,sort:`none`,children:`Watchers`}),(0,G.jsx)(M,{columnType:`numeric`,sort:`none`,children:`Protection`}),(0,G.jsx)(M,{sort:`none`,children:`Shipping`}),(0,G.jsx)(M,{sort:`none`,children:`Delivery`}),H.map((e,t)=>(0,G.jsxs)(F,{name:`row_${t}`,children:[(0,G.jsx)(k,{children:e.seller}),(0,G.jsx)(k,{children:e.item.title}),(0,G.jsx)(k,{children:(0,G.jsx)(x,{status:e.statusType,children:e.status})}),(0,G.jsx)(k,{columnType:`numeric`,children:e.listPrice}),(0,G.jsx)(k,{columnType:`numeric`,children:e.quantityAvailable}),(0,G.jsx)(k,{children:(0,G.jsx)(`a`,{href:`https://ebay.com`,children:e.orders.number})}),(0,G.jsx)(k,{columnType:`numeric`,children:e.watchers}),(0,G.jsx)(k,{columnType:`numeric`,children:e.protection}),(0,G.jsx)(k,{children:e.shipping}),(0,G.jsx)(k,{children:e.delivery})]},t))]}),X=e=>(0,G.jsxs)(z,{...e,children:[(0,G.jsx)(M,{sort:`asc`,rowHeader:!0,href:`https://ebay.com`,children:`Seller`}),(0,G.jsx)(M,{children:`Item`}),(0,G.jsx)(M,{children:`Status`}),(0,G.jsx)(M,{columnType:`numeric`,children:`List Price`}),(0,G.jsx)(M,{columnType:`numeric`,children:`Quantity Available`}),(0,G.jsx)(M,{children:`Orders`}),(0,G.jsx)(M,{columnType:`numeric`,children:`Watchers`}),(0,G.jsx)(M,{columnType:`numeric`,children:`Protection`}),(0,G.jsx)(M,{children:`Shipping`}),(0,G.jsx)(M,{children:`Delivery`}),H.map((e,t)=>(0,G.jsxs)(F,{name:`row_${t}`,children:[(0,G.jsx)(k,{children:e.seller}),(0,G.jsx)(k,{children:e.item.title}),(0,G.jsx)(k,{children:(0,G.jsx)(x,{status:e.statusType,children:e.status})}),(0,G.jsx)(k,{columnType:`numeric`,children:e.listPrice}),(0,G.jsx)(k,{columnType:`numeric`,children:e.quantityAvailable}),(0,G.jsx)(k,{children:(0,G.jsx)(`a`,{href:`https://ebay.com`,children:e.orders.number})}),(0,G.jsx)(k,{columnType:`numeric`,children:e.watchers}),(0,G.jsx)(k,{columnType:`numeric`,children:e.protection}),(0,G.jsx)(k,{children:e.shipping}),(0,G.jsx)(k,{children:e.delivery})]},t))]}),Z=e=>{let[t,n]=W.useState(H),r=(e,{sorted:t})=>{let r=[...H].sort((e,n)=>t.listPrice===`asc`?Number(e.listPrice.substring(1))-Number(n.listPrice.substring(1)):t.listPrice===`desc`?Number(n.listPrice.substring(1))-Number(e.listPrice.substring(1)):t.quantityAvailable===`asc`?Number(e.quantityAvailable)-Number(n.quantityAvailable):t.quantityAvailable===`desc`?Number(n.quantityAvailable)-Number(e.quantityAvailable):0);n(r)};return(0,G.jsxs)(z,{...e,onSort:r,children:[(0,G.jsx)(M,{rowHeader:!0,children:`Seller`}),(0,G.jsx)(M,{children:`Item`}),(0,G.jsx)(M,{children:`Status`}),(0,G.jsx)(M,{name:`listPrice`,columnType:`numeric`,sort:`none`,children:`List Price`}),(0,G.jsx)(M,{name:`quantityAvailable`,columnType:`numeric`,sort:`none`,children:`Quantity Available`}),(0,G.jsx)(M,{children:`Orders`}),(0,G.jsx)(M,{columnType:`numeric`,children:`Watchers`}),(0,G.jsx)(M,{columnType:`numeric`,children:`Protection`}),(0,G.jsx)(M,{children:`Shipping`}),(0,G.jsx)(M,{children:`Delivery`}),t.map((e,t)=>(0,G.jsxs)(F,{name:`row_${t}`,children:[(0,G.jsx)(k,{children:e.seller}),(0,G.jsx)(k,{children:e.item.title}),(0,G.jsx)(k,{children:(0,G.jsx)(x,{status:e.statusType,children:e.status})}),(0,G.jsx)(k,{columnType:`numeric`,children:e.listPrice}),(0,G.jsx)(k,{columnType:`numeric`,children:e.quantityAvailable}),(0,G.jsx)(k,{children:(0,G.jsx)(`a`,{href:`https://ebay.com`,children:e.orders.number})}),(0,G.jsx)(k,{columnType:`numeric`,children:e.watchers}),(0,G.jsx)(k,{columnType:`numeric`,children:e.protection}),(0,G.jsx)(k,{children:e.shipping}),(0,G.jsx)(k,{children:e.delivery})]},t))]})},Q=[`Default`,`TableWithAction`,`ColumnSorting`,`ColumnSortingWithLinks`,`ColumnSortingClientSide`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`args => <EbayTable {...args}>
        <EbayTableHeader rowHeader>Seller</EbayTableHeader>
        <EbayTableHeader>Item</EbayTableHeader>
        <EbayTableHeader>Status</EbayTableHeader>
        <EbayTableHeader columnType="numeric">List Price</EbayTableHeader>
        <EbayTableHeader columnType="numeric">Quantity Available</EbayTableHeader>
        <EbayTableHeader>Orders</EbayTableHeader>
        <EbayTableHeader columnType="numeric">Watchers</EbayTableHeader>
        <EbayTableHeader columnType="numeric">Protection</EbayTableHeader>
        <EbayTableHeader>Shipping</EbayTableHeader>
        <EbayTableHeader>Delivery</EbayTableHeader>
        {data.map((row, index) => <EbayTableRow key={index} name={\`row_\${index}\`}>
                <EbayTableCell>{row.seller}</EbayTableCell>
                <EbayTableCell>{row.item.title}</EbayTableCell>
                <EbayTableCell>
                    <EbaySignal status={row.statusType as SignalStatus}>{row.status}</EbaySignal>
                </EbayTableCell>
                <EbayTableCell columnType="numeric">{row.listPrice}</EbayTableCell>
                <EbayTableCell columnType="numeric">{row.quantityAvailable}</EbayTableCell>
                <EbayTableCell>
                    <a href="https://ebay.com">{row.orders.number}</a>
                </EbayTableCell>
                <EbayTableCell columnType="numeric">{row.watchers}</EbayTableCell>
                <EbayTableCell columnType="numeric">{row.protection}</EbayTableCell>
                <EbayTableCell>{row.shipping}</EbayTableCell>
                <EbayTableCell>{row.delivery}</EbayTableCell>
            </EbayTableRow>)}
    </EbayTable>`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`args => <EbayTable {...args}>
        <EbayTableHeader rowHeader>Seller</EbayTableHeader>
        <EbayTableHeader>Item</EbayTableHeader>
        <EbayTableHeader>Condition</EbayTableHeader>
        <EbayTableHeader columnType="layout">Multiple Actions</EbayTableHeader>
        <EbayTableHeader columnType="icon-action">Action Plus</EbayTableHeader>
        <EbayTableHeader columnType="numeric">List Price</EbayTableHeader>
        <EbayTableHeader columnType="numeric">Quantity Available</EbayTableHeader>
        <EbayTableHeader>Orders</EbayTableHeader>
        <EbayTableHeader columnType="numeric">Watchers</EbayTableHeader>
        <EbayTableHeader columnType="numeric">Protection</EbayTableHeader>
        <EbayTableHeader>Shipping</EbayTableHeader>
        <EbayTableHeader>Delivery</EbayTableHeader>
        {data.map((row, index) => <EbayTableRow key={index} name={\`row_\${index}\`}>
                <EbayTableCell>{row.seller}</EbayTableCell>
                <EbayTableCell>{row.item.titleShort}</EbayTableCell>
                <EbayTableCell>
                    <EbaySelect borderless defaultValue="newWithoutBox">
                        <EbaySelectOption value="new">New</EbaySelectOption>
                        <EbaySelectOption value="newWithoutBox">New without box</EbaySelectOption>
                        <EbaySelectOption value="used">Used</EbaySelectOption>
                    </EbaySelect>
                </EbayTableCell>
                <EbayTableCell>
                    <EbayCtaButton href="https://ebay.com">Edit Listing</EbayCtaButton>
                    <EbayIconButton icon={<EbayIconOverflowVertical16 />} />
                </EbayTableCell>
                <EbayTableCell>
                    <EbayIconButton icon={<EbayIconOverflowVertical16 />} />
                </EbayTableCell>
                <EbayTableCell>
                    <EbaySignal status={row.statusType as SignalStatus}>{row.status}</EbaySignal>
                </EbayTableCell>
                <EbayTableCell columnType="numeric">{row.listPrice}</EbayTableCell>
                <EbayTableCell columnType="numeric">{row.quantityAvailable}</EbayTableCell>
                <EbayTableCell>
                    <a href="https://ebay.com">{row.orders.number}</a>
                </EbayTableCell>
                <EbayTableCell columnType="numeric">{row.watchers}</EbayTableCell>
                <EbayTableCell columnType="numeric">{row.protection}</EbayTableCell>
                <EbayTableCell>{row.shipping}</EbayTableCell>
                <EbayTableCell>{row.delivery}</EbayTableCell>
            </EbayTableRow>)}
    </EbayTable>`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`args => <EbayTable {...args}>
        <EbayTableHeader sort="none" rowHeader>
            Seller
        </EbayTableHeader>
        <EbayTableHeader sort="none">Item</EbayTableHeader>
        <EbayTableHeader sort="none">Status</EbayTableHeader>
        <EbayTableHeader columnType="numeric" sort="none">
            List Price
        </EbayTableHeader>
        <EbayTableHeader columnType="numeric" sort="none">
            Quantity Available
        </EbayTableHeader>
        <EbayTableHeader sort="none">Orders</EbayTableHeader>
        <EbayTableHeader columnType="numeric" sort="none">
            Watchers
        </EbayTableHeader>
        <EbayTableHeader columnType="numeric" sort="none">
            Protection
        </EbayTableHeader>
        <EbayTableHeader sort="none">Shipping</EbayTableHeader>
        <EbayTableHeader sort="none">Delivery</EbayTableHeader>
        {data.map((row, index) => <EbayTableRow key={index} name={\`row_\${index}\`}>
                <EbayTableCell>{row.seller}</EbayTableCell>
                <EbayTableCell>{row.item.title}</EbayTableCell>
                <EbayTableCell>
                    <EbaySignal status={row.statusType as SignalStatus}>{row.status}</EbaySignal>
                </EbayTableCell>
                <EbayTableCell columnType="numeric">{row.listPrice}</EbayTableCell>
                <EbayTableCell columnType="numeric">{row.quantityAvailable}</EbayTableCell>
                <EbayTableCell>
                    <a href="https://ebay.com">{row.orders.number}</a>
                </EbayTableCell>
                <EbayTableCell columnType="numeric">{row.watchers}</EbayTableCell>
                <EbayTableCell columnType="numeric">{row.protection}</EbayTableCell>
                <EbayTableCell>{row.shipping}</EbayTableCell>
                <EbayTableCell>{row.delivery}</EbayTableCell>
            </EbayTableRow>)}
    </EbayTable>`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`args => <EbayTable {...args}>
        <EbayTableHeader sort="asc" rowHeader href="https://ebay.com">
            Seller
        </EbayTableHeader>
        <EbayTableHeader>Item</EbayTableHeader>
        <EbayTableHeader>Status</EbayTableHeader>
        <EbayTableHeader columnType="numeric">List Price</EbayTableHeader>
        <EbayTableHeader columnType="numeric">Quantity Available</EbayTableHeader>
        <EbayTableHeader>Orders</EbayTableHeader>
        <EbayTableHeader columnType="numeric">Watchers</EbayTableHeader>
        <EbayTableHeader columnType="numeric">Protection</EbayTableHeader>
        <EbayTableHeader>Shipping</EbayTableHeader>
        <EbayTableHeader>Delivery</EbayTableHeader>
        {data.map((row, index) => <EbayTableRow key={index} name={\`row_\${index}\`}>
                <EbayTableCell>{row.seller}</EbayTableCell>
                <EbayTableCell>{row.item.title}</EbayTableCell>
                <EbayTableCell>
                    <EbaySignal status={row.statusType as SignalStatus}>{row.status}</EbaySignal>
                </EbayTableCell>
                <EbayTableCell columnType="numeric">{row.listPrice}</EbayTableCell>
                <EbayTableCell columnType="numeric">{row.quantityAvailable}</EbayTableCell>
                <EbayTableCell>
                    <a href="https://ebay.com">{row.orders.number}</a>
                </EbayTableCell>
                <EbayTableCell columnType="numeric">{row.watchers}</EbayTableCell>
                <EbayTableCell columnType="numeric">{row.protection}</EbayTableCell>
                <EbayTableCell>{row.shipping}</EbayTableCell>
                <EbayTableCell>{row.delivery}</EbayTableCell>
            </EbayTableRow>)}
    </EbayTable>`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`args => {
  const [sortedData, setSortedData] = React.useState(data);
  const handleSort: TableSortHandler = (event, {
    sorted
  }) => {
    const newSortedData = [...data].sort((a, b) => {
      if (sorted.listPrice === "asc") {
        return Number(a.listPrice.substring(1)) - Number(b.listPrice.substring(1));
      } else if (sorted.listPrice === "desc") {
        return Number(b.listPrice.substring(1)) - Number(a.listPrice.substring(1));
      } else if (sorted.quantityAvailable === "asc") {
        return Number(a.quantityAvailable) - Number(b.quantityAvailable);
      } else if (sorted.quantityAvailable === "desc") {
        return Number(b.quantityAvailable) - Number(a.quantityAvailable);
      }
      return 0;
    });
    setSortedData(newSortedData);
  };
  return <EbayTable {...args} onSort={handleSort}>
            <EbayTableHeader rowHeader>Seller</EbayTableHeader>
            <EbayTableHeader>Item</EbayTableHeader>
            <EbayTableHeader>Status</EbayTableHeader>
            <EbayTableHeader name="listPrice" columnType="numeric" sort="none">
                List Price
            </EbayTableHeader>
            <EbayTableHeader name="quantityAvailable" columnType="numeric" sort="none">
                Quantity Available
            </EbayTableHeader>
            <EbayTableHeader>Orders</EbayTableHeader>
            <EbayTableHeader columnType="numeric">Watchers</EbayTableHeader>
            <EbayTableHeader columnType="numeric">Protection</EbayTableHeader>
            <EbayTableHeader>Shipping</EbayTableHeader>
            <EbayTableHeader>Delivery</EbayTableHeader>
            {sortedData.map((row, index) => <EbayTableRow key={index} name={\`row_\${index}\`}>
                    <EbayTableCell>{row.seller}</EbayTableCell>
                    <EbayTableCell>{row.item.title}</EbayTableCell>
                    <EbayTableCell>
                        <EbaySignal status={row.statusType as SignalStatus}>{row.status}</EbaySignal>
                    </EbayTableCell>
                    <EbayTableCell columnType="numeric">{row.listPrice}</EbayTableCell>
                    <EbayTableCell columnType="numeric">{row.quantityAvailable}</EbayTableCell>
                    <EbayTableCell>
                        <a href="https://ebay.com">{row.orders.number}</a>
                    </EbayTableCell>
                    <EbayTableCell columnType="numeric">{row.watchers}</EbayTableCell>
                    <EbayTableCell columnType="numeric">{row.protection}</EbayTableCell>
                    <EbayTableCell>{row.shipping}</EbayTableCell>
                    <EbayTableCell>{row.delivery}</EbayTableCell>
                </EbayTableRow>)}
        </EbayTable>;
}`,...Z.parameters?.docs?.source}}}})))()}$();export{Y as ColumnSorting,Z as ColumnSortingClientSide,X as ColumnSortingWithLinks,q as Default,J as TableWithAction,Q as __namedExportsOrder,K as default};