var z=Object.defineProperty;var b=(o,a)=>z(o,"name",{value:a,configurable:!0});import{R as e,c as Q,r as I}from"./iframe-DXKVC7Wu.js";import{E as K}from"./tri-state-checkbox-CYTq8-YN.js";import{a as V}from"./utils-4VXCHhuo.js";import{E as G,a as J,b as Y}from"./ebay-icon-sort-12-C_SvHFe_.js";import{E as Z}from"./checkbox-ec7Ttyok.js";import{E as v}from"./signal-C2KqZogX.js";import{E as ee,a as O}from"./ebay-select-qPMMN44w.js";import{E as ae}from"./cta-button-DdyrrTxB.js";import{E as D}from"./icon-button-eFlBz-0H.js";import{E as W}from"./ebay-icon-overflow-vertical-16-VPm-z0Xi.js";import"./preload-helper-Cc2_yIPf.js";import"./ebay-icon-checkbox-unchecked-18-CS-usKjo.js";import"./ebay-icon-checkbox-mixed-24-BNYSGZ-7.js";import"./description-Dia7aKRM.js";import"./hooks-BqzEUAcn.js";import"./ebay-icon-chevron-down-12-Bx23oBI8.js";import"./button-BAvxCJp2.js";import"./progress-spinner-DE2l3aJa.js";import"./ebay-icon-spinner-30-C7gEAvHE.js";import"./ebay-icon-arrow-right-24-DoKsmgny.js";import"./badge-KBGKARd0.js";const t=b(({rowHeader:o,columnType:a,className:c,children:m,...i})=>{const y=o?"th":"td",T=a==="layout"?"div":I.Fragment;return e.createElement(y,{className:Q("table-cell",c,{[`table-cell--${a}`]:a}),...i},e.createElement(T,{...a==="layout"?{className:"table-cell__layout"}:{}},m))},"EbayTableCell");try{t.displayName="tablecell",t.__docgenInfo={description:"",displayName:"tablecell",filePath:"/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-table/table-cell.tsx",methods:[],props:{rowHeader:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-table/table-cell.tsx",name:"TypeLiteral"}],description:"",name:"rowHeader",required:!1,tags:{},type:{name:"boolean"}},columnType:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-table/table-cell.tsx",name:"TypeLiteral"}],description:"",name:"columnType",required:!1,tags:{},type:{name:"ColumnType"}}},tags:{}}}catch{}const l=b(({columnType:o,sort:a,href:c,children:m,onSort:i,...y})=>{const T={asc:"ascending",desc:"descending",none:"none"},d={asc:Y,desc:J,none:G}[a],S=a?e.createElement(e.Fragment,null," ",e.createElement(d,null)):null;let f=m;return c?f=e.createElement("a",{href:c,onClick:i},m,S):a&&(f=e.createElement("button",{type:"button",onClick:i},m,S)),e.createElement(t,{...y,rowHeader:!0,columnType:o,"aria-sort":a?T[a]:void 0},f)},"EbayTableHeader");try{l.displayName="EbayTableHeader",l.__docgenInfo={description:"",displayName:"EbayTableHeader",filePath:"/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-table/table-header.tsx",methods:[],props:{columnType:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-table/table-header.tsx",name:"TypeLiteral"}],description:"",name:"columnType",required:!1,tags:{},type:{name:"ColumnType"}},name:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-table/table-header.tsx",name:"TypeLiteral"}],description:"",name:"name",required:!1,tags:{},type:{name:"string"}},sort:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-table/table-header.tsx",name:"TypeLiteral"}],description:"",name:"sort",required:!1,tags:{},type:{name:"TableSort"}},href:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-table/table-header.tsx",name:"TypeLiteral"}],description:"",name:"href",required:!1,tags:{},type:{name:"string"}},rowHeader:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-table/table-header.tsx",name:"TypeLiteral"}],description:"",name:"rowHeader",required:!1,tags:{},type:{name:"boolean"}},onSort:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-table/table-header.tsx",name:"TypeLiteral"}],description:"",name:"onSort",required:!1,tags:{},type:{name:"TableHeaderSortHandler"}}},tags:{}}}catch{}const g=b(({name:o,className:a,selected:c,mode:m,a11ySelectRowText:i,children:y,onSelect:T,__headers:u,...d})=>{const S=V(y,t),f=b((E,{checked:h})=>{T(E,{name:o,selected:h})},"handleCheckboxChange");return e.createElement("tr",{className:a,...d},m==="selection"&&e.createElement(t,{rowHeader:!0,key:"selection-cell"},e.createElement(Z,{checked:c,"aria-label":i||"Select row",onChange:f})),u?.map((E,h)=>e.cloneElement(S[h],{rowHeader:typeof E.props.rowHeader=="boolean"?E.props.rowHeader:S[h].props.rowHeader,columnType:typeof E.props.columnType=="string"?E.props.columnType:S[h].props.columnType})))},"EbayTableRow");try{g.displayName="tablerow",g.__docgenInfo={description:"",displayName:"tablerow",filePath:"/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-table/table-row.tsx",methods:[],props:{name:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-table/table-row.tsx",name:"TypeLiteral"}],description:"",name:"name",required:!1,tags:{},type:{name:"string"}},selected:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-table/table-row.tsx",name:"TypeLiteral"}],description:"",name:"selected",required:!1,tags:{},type:{name:"boolean"}},mode:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-table/table-row.tsx",name:"TypeLiteral"}],description:"",name:"mode",required:!1,tags:{},type:{name:"TableMode"}},a11ySelectRowText:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-table/table-row.tsx",name:"TypeLiteral"}],description:"",name:"a11ySelectRowText",required:!1,tags:{},type:{name:"string"}},onSelect:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-table/table-row.tsx",name:"TypeLiteral"}],description:"",name:"onSelect",required:!1,tags:{},type:{name:"TableRowSelectHandler"}},__headers:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-table/table-row.tsx",name:"TypeLiteral"}],description:`This property is used by EbayTable to make sure that headers match up with the correct cells
NOTE: The flag "@deprecated" is only to not show this property in the autocomplete list on the top`,name:"__headers",required:!1,tags:{deprecated:""},type:{name:"ReactElement<EbayTableHeaderProps, string | JSXElementConstructor<any>>[]"}}},tags:{}}}catch{}const C=b(({className:o,mode:a,allSelected:c,density:m,frozenHeader:i,a11ySelectAllText:y,a11ySelectRowText:T,onSelect:u,onSort:d,children:S,...f})=>{const E=V(S,l),h=V(S,g),[$,M]=I.useState(()=>E.reduce((r,n,s)=>(n.props.sort&&(r[n.props.name||`${s}`]=n.props.sort),r),{})),[_,B]=I.useState(()=>h.reduce((r,n,s)=>(r[n.props.name||`${s}`]=typeof n.props.selected=="boolean"?n.props.selected:!1,r),{}));function k(r){const n=Object.values(r).filter(Boolean).length,s=Object.values(r).length-n;return n===0?"false":s===0?"true":"mixed"}b(k,"getAllSelected");const R=typeof c<"u"?c:k(_),X=b(r=>{const n=h.reduce((s,p,H)=>(s[p.props.name||`${H}`]=R==="false"||R==="mixed",s),{});B(n),u?.(r,{selected:n,allSelected:k(n)})},"handleAllSelectChange"),F=b((r,{name:n,selected:s})=>{const p={..._,[n||""]:s};B(p),u?.(r,{selected:p,allSelected:k(p)})},"handleSelect"),j=b((r,n)=>{const s={none:"asc",asc:"desc",desc:"none"},p=Object.entries($).reduce((H,[L,U])=>(L===n?H[L]=s[U]:H[L]="none",H),{});M(p),d?.(r,{sorted:{[n]:p[n]}})},"handleSort");return e.createElement("div",{...f,className:Q("table",o,{"table--mode-selection":a==="selection","table--frozen-header":i,[`table--density-${m}`]:m}),role:"group",tabIndex:0},e.createElement("table",null,e.createElement("thead",null,e.createElement("tr",null,a==="selection"&&e.createElement(l,{key:"selection-all-cell"},e.createElement(K,{"aria-label":y||"Select all rows",checked:R,onChange:X})),E.map((r,n)=>e.cloneElement(r,{sort:$[r.props.name||`${n}`],onSort:b(s=>j(s,r.props.name||`${n}`),"onSort")})))),e.createElement("tbody",null,h.map((r,n)=>e.cloneElement(r,{mode:a,name:r.props.name||`${n}`,a11ySelectRowText:r.props.a11ySelectRowText||T,onSelect:b((s,p)=>F(s,{...p,name:r.props.name||`${n}`}),"onSelect"),selected:typeof r.props.selected=="boolean"?r.props.selected:_[r.props.name||`${n}`],__headers:E})))))},"EbayTable");try{C.displayName="table",C.__docgenInfo={description:"",displayName:"table",filePath:"/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-table/table.tsx",methods:[],props:{mode:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-table/table.tsx",name:"TypeLiteral"}],description:"",name:"mode",required:!1,tags:{},type:{name:"TableMode"}},allSelected:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-table/table.tsx",name:"TypeLiteral"}],description:"",name:"allSelected",required:!1,tags:{},type:{name:"CheckboxState"}},density:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-table/table.tsx",name:"TypeLiteral"}],description:"",name:"density",required:!1,tags:{},type:{name:"TableDensity"}},frozenHeader:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-table/table.tsx",name:"TypeLiteral"}],description:"",name:"frozenHeader",required:!1,tags:{},type:{name:"boolean"}},a11ySelectAllText:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-table/table.tsx",name:"TypeLiteral"}],description:"",name:"a11ySelectAllText",required:!1,tags:{},type:{name:"string"}},a11ySelectRowText:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-table/table.tsx",name:"TypeLiteral"}],description:"",name:"a11ySelectRowText",required:!1,tags:{},type:{name:"string"}},onSelect:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-table/table.tsx",name:"TypeLiteral"}],description:"",name:"onSelect",required:!1,tags:{},type:{name:"TableSelectHandler"}},onSort:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-table/table.tsx",name:"TypeLiteral"}],description:"",name:"onSort",required:!1,tags:{},type:{name:"TableSortHandler"}}},tags:{}}}catch{}const w=[{seller:"Nintendo",item:{title:"Nintendo Switch Brand New Gaming System with Four Controllers",subtitle:"SKU : A43BTR5678 • Quantity : 1",titleShort:"Switch",image:{url:"http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/shoes.jpeg",alt:"Nintendo Switch"}},status:"Ready to Ship",statusType:"recent",listPrice:"$287.96",quantityAvailable:"300",orders:{number:"00-10542-89507",quantity:100},watchers:"95",protection:"$17.99",shipping:"FREE",delivery:"4/1 - 4/5"},{seller:"Nintendo",item:{title:"Nintendo SNES Brand New Gaming System with Four Controllers",subtitle:"SKU : A43BTR5678 • Quantity : 1",titleShort:"SNES",image:{url:"http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/shoes.jpeg",alt:"Nintendo Switch"}},status:"Ready to Ship",statusType:"recent",listPrice:"$89.85",quantityAvailable:"45",orders:{number:"00-10542-89507",quantity:200},watchers:"5",protection:"$18.95",shipping:"FREE",delivery:"4/11 - 4/15"},{seller:"Microsoft",item:{title:"Microsoft XBOX 360 Brand New Gaming System with Four Controllers",subtitle:"SKU : A43BTR5678 • Quantity : 1",titleShort:"XBOX 360",image:{url:"http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/shoes.jpeg",alt:"Microsoft XBOX"}},status:"Backorder",statusType:"time-sensitive",listPrice:"$499.99",quantityAvailable:"345",orders:{number:"00-10542-89507",quantity:100},watchers:"205",protection:"$17.99",shipping:"FREE",delivery:"4/17 - 4/25"},{seller:"Microsoft",item:{title:"Microsoft XBOX One Brand New Gaming System with Four Controllers",subtitle:"SKU : A43BTR5678 • Quantity : 1",titleShort:"XBOX One",image:{url:"http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/shoes.jpeg",alt:"Microsoft XBOX"}},status:"Preparing",statusType:"neutral",listPrice:"$499.99",quantityAvailable:"399",orders:{number:"00-10542-89507",quantity:100},watchers:"305",protection:"$27.99",shipping:"FREE",delivery:"4/9 - 4/11"},{seller:"Sony",item:{title:"Sony Playstation 5 Brand New Gaming System with Four Controllers",subtitle:"SKU : A43BTR5678 • Quantity : 1",titleShort:"Playstation 5",image:{url:"http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/shoes.jpeg",alt:"Sony Playstation 5"}},status:"Restocking",statusType:"trustworthy",listPrice:"$519.99",quantityAvailable:"205",orders:{number:"00-10542-89507",quantity:100},watchers:"199",protection:"$29.99",shipping:"FREE",delivery:"4/11 - 4/15"}],He={component:C,title:"data display/ebay-table",argTypes:{density:{control:{type:"select"},description:"table density",options:["compact","relaxed","none"]},mode:{control:{type:"select"},description:"table mode",options:["selection","none"]},frozenHeader:{control:{type:"boolean"},description:"If true, the header will be frozen"},allSelected:{control:{type:"select"},description:"Select all tri-state checkbox state",options:["true","false","mixed"]},a11ySelectAllText:{control:{type:"text"},description:"Accessibility text for select all checkbox",table:{category:"Accessibility",defaultValue:{summary:"Select all rows"}}},a11ySelectRowText:{control:{type:"text"},description:"Accessibility text for select row checkbox",table:{category:"Accessibility",defaultValue:{summary:"Select row"}}},onSelect:{action:"onSelect",description:"Triggered on selection",table:{category:"Events",defaultValue:{summary:"event, { selected, allSelected }"}}},onSort:{action:"onSort",description:"Triggered on column sort",table:{category:"Events",defaultValue:{summary:"event, { sorted }"}}},columnType:{description:"Column type, `normal`, `numeric`, `layout`, `icon-action`",options:["normal","numeric","layout","icon-action"],control:{type:"select"}},name:{description:"Column name that will be used in the EbayTable event `sorted` object",control:"text"},sort:{description:"Defines which icon will be shown, `asc`, `desc`, `none`",options:["asc","desc","none"],control:{type:"select"}},rowHeader:{description:"Defines if the column is a row header",control:"boolean"},selected:{description:"Defines if the row is selected",control:"boolean"}},tags:["autodocs"],parameters:{docs:{description:{component:`## Usage

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
\`\`\``}}}},x=b(o=>e.createElement(C,{...o},e.createElement(l,{rowHeader:!0},"Seller"),e.createElement(l,null,"Item"),e.createElement(l,null,"Status"),e.createElement(l,{columnType:"numeric"},"List Price"),e.createElement(l,{columnType:"numeric"},"Quantity Available"),e.createElement(l,null,"Orders"),e.createElement(l,{columnType:"numeric"},"Watchers"),e.createElement(l,{columnType:"numeric"},"Protection"),e.createElement(l,null,"Shipping"),e.createElement(l,null,"Delivery"),w.map((a,c)=>e.createElement(g,{key:c,name:`row_${c}`},e.createElement(t,null,a.seller),e.createElement(t,null,a.item.title),e.createElement(t,null,e.createElement(v,{status:a.statusType},a.status)),e.createElement(t,{columnType:"numeric"},a.listPrice),e.createElement(t,{columnType:"numeric"},a.quantityAvailable),e.createElement(t,null,e.createElement("a",{href:"https://ebay.com"},a.orders.number)),e.createElement(t,{columnType:"numeric"},a.watchers),e.createElement(t,{columnType:"numeric"},a.protection),e.createElement(t,null,a.shipping),e.createElement(t,null,a.delivery)))),"Default"),N=b(o=>e.createElement(C,{...o},e.createElement(l,{rowHeader:!0},"Seller"),e.createElement(l,null,"Item"),e.createElement(l,null,"Condition"),e.createElement(l,{columnType:"layout"},"Multiple Actions"),e.createElement(l,{columnType:"icon-action"},"Action Plus"),e.createElement(l,{columnType:"numeric"},"List Price"),e.createElement(l,{columnType:"numeric"},"Quantity Available"),e.createElement(l,null,"Orders"),e.createElement(l,{columnType:"numeric"},"Watchers"),e.createElement(l,{columnType:"numeric"},"Protection"),e.createElement(l,null,"Shipping"),e.createElement(l,null,"Delivery"),w.map((a,c)=>e.createElement(g,{key:c,name:`row_${c}`},e.createElement(t,null,a.seller),e.createElement(t,null,a.item.titleShort),e.createElement(t,null,e.createElement(ee,{borderless:!0,defaultValue:"newWithoutBox"},e.createElement(O,{value:"new"},"New"),e.createElement(O,{value:"newWithoutBox"},"New without box"),e.createElement(O,{value:"used"},"Used"))),e.createElement(t,null,e.createElement(ae,{href:"https://ebay.com"},"Edit Listing"),e.createElement(D,{icon:e.createElement(W,null)})),e.createElement(t,null,e.createElement(D,{icon:e.createElement(W,null)})),e.createElement(t,null,e.createElement(v,{status:a.statusType},a.status)),e.createElement(t,{columnType:"numeric"},a.listPrice),e.createElement(t,{columnType:"numeric"},a.quantityAvailable),e.createElement(t,null,e.createElement("a",{href:"https://ebay.com"},a.orders.number)),e.createElement(t,{columnType:"numeric"},a.watchers),e.createElement(t,{columnType:"numeric"},a.protection),e.createElement(t,null,a.shipping),e.createElement(t,null,a.delivery)))),"TableWithAction"),A=b(o=>e.createElement(C,{...o},e.createElement(l,{sort:"none",rowHeader:!0},"Seller"),e.createElement(l,{sort:"none"},"Item"),e.createElement(l,{sort:"none"},"Status"),e.createElement(l,{columnType:"numeric",sort:"none"},"List Price"),e.createElement(l,{columnType:"numeric",sort:"none"},"Quantity Available"),e.createElement(l,{sort:"none"},"Orders"),e.createElement(l,{columnType:"numeric",sort:"none"},"Watchers"),e.createElement(l,{columnType:"numeric",sort:"none"},"Protection"),e.createElement(l,{sort:"none"},"Shipping"),e.createElement(l,{sort:"none"},"Delivery"),w.map((a,c)=>e.createElement(g,{key:c,name:`row_${c}`},e.createElement(t,null,a.seller),e.createElement(t,null,a.item.title),e.createElement(t,null,e.createElement(v,{status:a.statusType},a.status)),e.createElement(t,{columnType:"numeric"},a.listPrice),e.createElement(t,{columnType:"numeric"},a.quantityAvailable),e.createElement(t,null,e.createElement("a",{href:"https://ebay.com"},a.orders.number)),e.createElement(t,{columnType:"numeric"},a.watchers),e.createElement(t,{columnType:"numeric"},a.protection),e.createElement(t,null,a.shipping),e.createElement(t,null,a.delivery)))),"ColumnSorting"),P=b(o=>e.createElement(C,{...o},e.createElement(l,{sort:"asc",rowHeader:!0,href:"https://ebay.com"},"Seller"),e.createElement(l,null,"Item"),e.createElement(l,null,"Status"),e.createElement(l,{columnType:"numeric"},"List Price"),e.createElement(l,{columnType:"numeric"},"Quantity Available"),e.createElement(l,null,"Orders"),e.createElement(l,{columnType:"numeric"},"Watchers"),e.createElement(l,{columnType:"numeric"},"Protection"),e.createElement(l,null,"Shipping"),e.createElement(l,null,"Delivery"),w.map((a,c)=>e.createElement(g,{key:c,name:`row_${c}`},e.createElement(t,null,a.seller),e.createElement(t,null,a.item.title),e.createElement(t,null,e.createElement(v,{status:a.statusType},a.status)),e.createElement(t,{columnType:"numeric"},a.listPrice),e.createElement(t,{columnType:"numeric"},a.quantityAvailable),e.createElement(t,null,e.createElement("a",{href:"https://ebay.com"},a.orders.number)),e.createElement(t,{columnType:"numeric"},a.watchers),e.createElement(t,{columnType:"numeric"},a.protection),e.createElement(t,null,a.shipping),e.createElement(t,null,a.delivery)))),"ColumnSortingWithLinks"),q=b(o=>{const[a,c]=e.useState(w),m=b((i,{sorted:y})=>{const T=[...w].sort((u,d)=>y.listPrice==="asc"?Number(u.listPrice.substring(1))-Number(d.listPrice.substring(1)):y.listPrice==="desc"?Number(d.listPrice.substring(1))-Number(u.listPrice.substring(1)):y.quantityAvailable==="asc"?Number(u.quantityAvailable)-Number(d.quantityAvailable):y.quantityAvailable==="desc"?Number(d.quantityAvailable)-Number(u.quantityAvailable):0);c(T)},"handleSort");return e.createElement(C,{...o,onSort:m},e.createElement(l,{rowHeader:!0},"Seller"),e.createElement(l,null,"Item"),e.createElement(l,null,"Status"),e.createElement(l,{name:"listPrice",columnType:"numeric",sort:"none"},"List Price"),e.createElement(l,{name:"quantityAvailable",columnType:"numeric",sort:"none"},"Quantity Available"),e.createElement(l,null,"Orders"),e.createElement(l,{columnType:"numeric"},"Watchers"),e.createElement(l,{columnType:"numeric"},"Protection"),e.createElement(l,null,"Shipping"),e.createElement(l,null,"Delivery"),a.map((i,y)=>e.createElement(g,{key:y,name:`row_${y}`},e.createElement(t,null,i.seller),e.createElement(t,null,i.item.title),e.createElement(t,null,e.createElement(v,{status:i.statusType},i.status)),e.createElement(t,{columnType:"numeric"},i.listPrice),e.createElement(t,{columnType:"numeric"},i.quantityAvailable),e.createElement(t,null,e.createElement("a",{href:"https://ebay.com"},i.orders.number)),e.createElement(t,{columnType:"numeric"},i.watchers),e.createElement(t,{columnType:"numeric"},i.protection),e.createElement(t,null,i.shipping),e.createElement(t,null,i.delivery))))},"ColumnSortingClientSide"),ve=["Default","TableWithAction","ColumnSorting","ColumnSortingWithLinks","ColumnSortingClientSide"];x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`args => <EbayTable {...args}>
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
    </EbayTable>`,...x.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`args => <EbayTable {...args}>
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
    </EbayTable>`,...N.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`args => <EbayTable {...args}>
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
    </EbayTable>`,...A.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`args => <EbayTable {...args}>
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
    </EbayTable>`,...P.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`args => {
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
}`,...q.parameters?.docs?.source}}};export{A as ColumnSorting,q as ColumnSortingClientSide,P as ColumnSortingWithLinks,x as Default,N as TableWithAction,ve as __namedExportsOrder,He as default};
