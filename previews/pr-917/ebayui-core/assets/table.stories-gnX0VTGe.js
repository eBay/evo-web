import{b as C}from"./utils-DWCsNc5l.js";import{v as $,b as v,_ as T,d as te,p as M,e as re,c as A}from"./defineComponent-B-Bg3Ud2.js";import{_ as Ne}from"./index-DFK0Dv0z.js";import{_ as d}from"./render-tag-B9T2mz-j.js";import{_ as he}from"./dynamic-tag-B3Rndxlm.js";import{_ as Ie,a as Ee,b as Le}from"./index-BwI7I1rK.js";import{_ as ue}from"./attrs-DH_qbVAN.js";import{_ as f}from"./of-fallback-DrWEmKV1.js";import{_ as Oe}from"./index-CSt2g4KI.js";import{_ as Re}from"./index-BDrSA20w.js";import{i as Fe}from"./index-CJDBRdqY.js";import{a as r}from"./attr-tag-Dvq4QMvY.js";import{_ as Q}from"./index-Drz0WDSr.js";import{_ as We}from"./index-CGBSgwe6.js";import{_ as Qe}from"./index-CHHi-qUv.js";import{_ as me}from"./index-n7KuEsog.js";import{_ as be}from"./index-o98Za02-.js";import"./_commonjsHelpers-Cpj98o6Y.js";/* empty css              */import"./index-D8vhxc05.js";import"./index-CL8ZzwFK.js";/* empty css             */import"./index-M9K2-HtW.js";import"./index-BSoKmMuk.js";import"./style-value-D9hyxyYb.js";import"./index-Dc9wtS83.js";import"./preserve-tag-DAN9egP4.js";import"./index-Qtpjd4O_.js";import"./index-CZw0tK3j.js";import"./index-CdR04xAO.js";/* empty css                    *//* empty css               *//* empty css             */import"./index-BmRbtDLs.js";import"./index-eAGEw84U.js";class je extends Marko.Component{onCreate(){this.state={selected:{},sorted:{},allSelected:"false"}}onMount(){this.disabledItems=new Set,this.tbody=this.getEl("tbody"),this.setLoading()}onInput(a){this.state.selected=this.getSelectedRowStateFromInput(a),this.state.allSelected=this.getAllSelectedState(a),this.state.sorted=this.getSortedColStateFromInput(a)}onUpdate(){this.setLoading()}onRender(){typeof window<"u"&&cancelAnimationFrame(this.animationFrame)}onDestroy(){cancelAnimationFrame(this.animationFrame)}getSelectedRowStateFromInput(a){const n={};if(a.row)for(const[t,s]of Object.entries([...a.row])){const y=s.name||t;n[y]=s.selected||!1}return n}getSortedColStateFromInput(a){const n={};for(const[t,s]of Object.entries([...a.header])){const y=s.name||t;s.sort===!0?n[y]="none":s.sort&&(n[y]=s.sort)}return n}getAllSelectedState(a){if(a.allSelected)return a.allSelected;let n=0,t=0;for(const[s,y]of Object.entries(this.state.selected))y&&n++,t++;return n===0?"false":n===t?"true":"mixed"}headerSelect(){const{allSelected:a}=this.state;this.state.selected=[...this.input.row||[]].reduce((n,{name:t},s)=>(n[t||s]=a!=="true",n),{}),this.state.allSelected=a!=="true"?"true":"false",this.emit("select",{selected:this.state.selected,allSelected:this.state.allSelected})}rowSelect(a,{checked:n}){this.state.selected[a]=n,this.setStateDirty("selected"),this.state.allSelected=this.getAllSelectedState(this.input),this.emit("select",{selected:this.state.selected})}setLoading(){if(this.input.bodyState==="loading")this.tbody&&(this.animationFrame=requestAnimationFrame(()=>{Fe(this.tbody).forEach(a=>{a.tagName==="A"?(a.setAttribute("data-href",a.getAttribute("href")||""),a.removeAttribute("href")):a.setAttribute("disabled","true"),a.setAttribute("data-tabindex",a.getAttribute("tabindex")||""),a.setAttribute("tabindex","-1"),this.disabledItems.add(a)})}));else{for(const[a]of this.disabledItems.entries())a.tagName==="A"?(a.setAttribute("href",a.getAttribute("data-href")||""),a.removeAttribute("data-href")):a.setAttribute("disabled","true"),a.getAttribute("data-tabindex")!==null?a.setAttribute("tabindex",a.getAttribute("tabindex")||""):a.removeAttribute("tabindex");this.disabledItems.clear()}}sortColumn(a){const n={asc:"desc",desc:"none",none:"asc"},t=this.state.sorted[a];if(t){const s=n[t];this.state.sorted=Object.keys(this.state.sorted).reduce((y,h)=>(y[h]=h===a?s:"none",y),{}),this.emit("sort",{sorted:{[a]:s}})}}}const le="xoJ23nG",b=$.t(le);var He=["compact","relaxed"],pe=["numeric","icon-action"];v.r(le,()=>b);const ge=je;b._=T(function(c,a,n,t,s,y){const{class:h,density:e,header:i,row:l,allSelected:u,a11yLoadingText:o,a11ySelectAllText:J,a11ySelectRowText:Te,mode:Z="none",frozenHeader:Ae,bodyState:ke="none",...xe}=c,g=ke==="loading";a.be("div",te(M(xe),{class:re(["table",Z==="selection"&&"table--mode-selection",g&&"table--loading-state",Ae&&"table--frozen-header",e&&He.includes(e)&&`table--density-${e}`,h]),role:"group",tabindex:"0"}),"0",t,null,4),a.be("table",{"aria-hidden":g&&"true",inert:g},"1",t,null,0),a.be("thead",null,"2",t,null,0),a.be("tr",null,"3",t,null,0);{Z==="selection"&&(a.be("th",{class:"table-cell"},"4",t,null,1),d(Ne,{disabled:g,ariaLabel:J??"Select all rows",checked:s.allSelected},a,n,"5",[["change","headerSelect",!1]]),a.ee());let Y=0;for(const k of f(i)){let N=Y++;const m=`[${N}]`,{columnType:j="normal",rowHeader:_,class:ce,name:H=`${N}`,sort:ye,renderBody:S,href:B,...x}=k,p=s.sorted[H];let I;p==="asc"?I="ascending":p==="desc"&&(I="descending"),a.be("th",te(M(x),{class:re(["table-cell",k.columnType&&pe.includes(k.columnType)&&`table-cell--${k.columnType}`,ce]),"aria-sort":I}),"6"+m,t,null,4);{let P={};B?g?P={}:P={href:B}:p&&(P={type:"button",tabindex:g?-1:null,disabled:g});const E=B?"a":p?"button":null;E?a.be(E,ue(P),"7"+m,t,null,4,{onclick:n.d("click",B?void 0:"sortColumn",!1,[H])}):a.bf(`f_${"7"+m}`,t),he(a,S,null,null,null,null,n,"8"+m),p&&(a.t(" ",t),p==="asc"?d(Ie,{},a,n,"9"+m):p==="desc"?d(Ee,{},a,n,"10"+m):d(Le,{},a,n,"11"+m)),E?a.ee():a.ef()}a.ee()}}a.ee(),a.ee(),a.be("tbody",null,"@tbody",t,null,0);{let Y=0;for(const k of f(l||[])){let N=Y++;const m=`[${N}]`,{cell:j,name:_=`${N}`,selected:ce,...H}=k;a.be("tr",ue(M(H)),"12"+m,t,null,4);{Z==="selection"&&(a.be("th",{scope:"row",class:"table__cell"},"13"+m,t,null,0),d(Oe,{disabled:g,ariaLabel:Te??"Select row",checked:s.selected[_]},a,n,"14"+m,[["change","rowSelect",!1,[_]]]),a.ee());let ye=0;for(const S of f(i)){let B=ye++;const x=`[${B+m}]`,p=Array.isArray(j)?j[B]:j;if(p){const{class:I,renderBody:P,...E}=p,Pe=["table-cell",S.columnType&&pe.includes(S.columnType)&&`table-cell--${S.columnType}`],qe=S.rowHeader?"th":"td";a.be(qe,te(M(E),{class:re([Pe,I])}),"15"+x,t,null,4);{const ee=S.columnType==="layout"&&"div";ee?a.be(ee,{class:"table-cell__layout"},"16"+x,t,null,1):a.bf(`f_${"16"+x}`,t),he(a,P,null,null,null,null,n,"17"+x),ee?a.ee():a.ef()}a.ee()}}}a.ee()}}a.ee(),a.ee(),a.be("div",{role:"status"},"18",t,null,0),g&&d(Re,{a11yText:o||"Loading..."},a,n,"19"),a.ee(),a.ee()},{t:le},ge);b.Component=A(ge,b._);const Me=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
    <span>
        ebay-table
    </span>
    <span style="font-weight: normal; font-size: medium; margin-bottom: -15px;">
        DS v1.1.0
    </span>
</h1>

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/data-display-ebay-table)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/data-display-ebay-table)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/ebay-table/examples)
`,w=[{seller:"Nintendo",item:{title:"Nintendo Switch Brand New Gaming System with Four Controllers",subtitle:"SKU : A43BTR5678 • Quantity : 1",titleShort:"Switch",image:{url:"http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/shoes.jpeg",alt:"Nintendo Switch"}},status:"Ready to Ship",statusType:"recent",listPrice:"$287.96",quantityAvailable:"300",orders:{number:"00-10542-89507",quantity:100},watchers:"95",protection:"$17.99",shipping:"FREE",delivery:"4/1 - 4/5"},{seller:"Nintendo",item:{title:"Nintendo SNES Brand New Gaming System with Four Controllers",subtitle:"SKU : A43BTR5678 • Quantity : 1",titleShort:"SNES",image:{url:"http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/shoes.jpeg",alt:"Nintendo Switch"}},status:"Ready to Ship",statusType:"recent",listPrice:"$89.85",quantityAvailable:"45",orders:{number:"00-10542-89507",quantity:200},watchers:"5",protection:"$18.95",shipping:"FREE",delivery:"4/11 - 4/15"},{seller:"Microsoft",item:{title:"Microsoft XBOX 360 Brand New Gaming System with Four Controllers",subtitle:"SKU : A43BTR5678 • Quantity : 1",titleShort:"XBOX 360",image:{url:"http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/shoes.jpeg",alt:"Microsoft XBOX"}},status:"Backorder",statusType:"time-sensitive",listPrice:"$499.99",quantityAvailable:"345",orders:{number:"00-10542-89507",quantity:100},watchers:"205",protection:"$17.99",shipping:"FREE",delivery:"4/17 - 4/25"},{seller:"Microsoft",item:{title:"Microsoft XBOX One Brand New Gaming System with Four Controllers",subtitle:"SKU : A43BTR5678 • Quantity : 1",titleShort:"XBOX One",image:{url:"http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/shoes.jpeg",alt:"Microsoft XBOX"}},status:"Preparing",statusType:"neutral",listPrice:"$499.99",quantityAvailable:"399",orders:{number:"00-10542-89507",quantity:100},watchers:"305",protection:"$27.99",shipping:"FREE",delivery:"4/9 - 4/11"},{seller:"Sony",item:{title:"Sony Playstation 5 Brand New Gaming System with Four Controllers",subtitle:"SKU : A43BTR5678 • Quantity : 1",titleShort:"Playstation 5",image:{url:"http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/shoes.jpeg",alt:"Sony Playstation 5"}},status:"Restocking",statusType:"trustworthy",listPrice:"$519.99",quantityAvailable:"205",orders:{number:"00-10542-89507",quantity:100},watchers:"199",protection:"$29.99",shipping:"FREE",delivery:"4/11 - 4/15"}],ae="vjpQna5",q=$.t(ae);v.r(ae,()=>q);const fe={};q._=T(function(c,a,n,t,s,y){d(b,r.i(()=>{r.r("header",{rowHeader:!0,renderBody:e=>{e.t("Seller",t)}}),r.r("header",{renderBody:e=>{e.t("Item",t)}}),r.r("header",{renderBody:e=>{e.t("Status",t)}}),r.r("header",{columnType:"numeric",renderBody:e=>{e.t("List Price",t)}}),r.r("header",{columnType:"numeric",renderBody:e=>{e.t("Quantity Available",t)}}),r.r("header",{renderBody:e=>{e.t("Orders",t)}}),r.r("header",{columnType:"numeric",renderBody:e=>{e.t("Watchers",t)}}),r.r("header",{columnType:"numeric",renderBody:e=>{e.t("Protection",t)}}),r.r("header",{renderBody:e=>{e.t("Shipping",t)}}),r.r("header",{renderBody:e=>{e.t("Delivery",t)}});let h=0;for(const e of f(w)){const i=`[${h++}]`;r.r("row",r.i(()=>{r.r("cell",{renderBody:l=>{l.t(e.seller,t)}}),r.r("cell",{renderBody:l=>{l.t(e.item.title,t)}}),r.r("cell",{renderBody:l=>{d(Q,{status:e.statusType,renderBody:u=>{u.t(e.status,t)}},l,n,"1"+i)}}),r.r("cell",{renderBody:l=>{l.t(e.listPrice,t)}}),r.r("cell",{renderBody:l=>{l.t(e.quantityAvailable,t)}}),r.r("cell",{renderBody:l=>{l.be("a",{href:"https://ebay.com"},"2"+i,t,null,0),l.t(e.orders.number,t),l.ee()}}),r.r("cell",{renderBody:l=>{l.t(e.watchers,t)}}),r.r("cell",{renderBody:l=>{l.t(e.protection,t)}}),r.r("cell",{renderBody:l=>{l.t(e.shipping,t)}}),r.r("cell",{renderBody:l=>{l.t(e.delivery,t)}})}))}},{...c,header:void 0,row:void 0}),a,n,"0")},{t:ae,i:!0},fe);q.Component=A(fe,q._);const Se=`import data from "./data.json";

<ebay-table ...input>
    <@header row-header>
        Seller
    </@header>
    <@header>Item</@header>
    <@header>Status</@header>
    <@header column-type="numeric">
        List Price
    </@header>
    <@header column-type="numeric">
        Quantity Available
    </@header>
    <@header>Orders</@header>
    <@header column-type="numeric">
        Watchers
    </@header>
    <@header column-type="numeric">
        Protection
    </@header>
    <@header>Shipping</@header>
    <@header>Delivery</@header>
    <for|r| of=data>
        <@row>
            <@cell>\${r.seller}</@cell>
            <@cell>\${r.item.title}</@cell>
            <@cell>
                <ebay-signal status=r.statusType as any>
                    \${r.status}
                </ebay-signal>
            </@cell>
            <@cell>\${r.listPrice}</@cell>
            <@cell>\${r.quantityAvailable}</@cell>
            <@cell>
                <a href="https://ebay.com">
                    \${r.orders.number}
                </a>
            </@cell>
            <@cell>\${r.watchers}</@cell>
            <@cell>\${r.protection}</@cell>
            <@cell>\${r.shipping}</@cell>
            <@cell>\${r.delivery}</@cell>
        </@row>
    </for>
</ebay-table>
`,ne="a4Zahzs",L=$.t(ne);v.r(ne,()=>L);const Be={};L._=T(function(c,a,n,t,s,y){d(b,r.i(()=>{r.r("header",{rowHeader:!0,renderBody:e=>{e.t("Seller",t)}}),r.r("header",{renderBody:e=>{e.t("Item",t)}}),r.r("header",{renderBody:e=>{e.t("Status",t)}}),r.r("header",{columnType:"numeric",renderBody:e=>{e.t("List Price",t)}}),r.r("header",{columnType:"numeric",renderBody:e=>{e.t("Quantity Available",t)}}),r.r("header",{renderBody:e=>{e.t("Orders",t)}}),r.r("header",{columnType:"numeric",renderBody:e=>{e.t("Watchers",t)}}),r.r("header",{columnType:"numeric",renderBody:e=>{e.t("Protection",t)}}),r.r("header",{renderBody:e=>{e.t("Shipping",t)}}),r.r("header",{renderBody:e=>{e.t("Delivery",t)}});let h=0;for(const e of f(w)){let i=h++;const l=`[${i}]`,u=i===0;r.r("row",r.i(()=>{r.r("cell",{renderBody:o=>{o.t(e.seller,t)}}),r.r("cell",{renderBody:o=>{o.t(e.item.title,t)}}),r.r("cell",{renderBody:o=>{d(Q,{status:e.statusType,renderBody:J=>{J.t(e.status,t)}},o,n,"1"+l)}}),r.r("cell",{renderBody:o=>{o.t(e.listPrice,t)}}),r.r("cell",{renderBody:o=>{o.t(e.quantityAvailable,t)}}),r.r("cell",{renderBody:o=>{o.be("a",{href:"https://ebay.com"},"2"+l,t,null,0),o.t(e.orders.number,t),o.ee()}}),r.r("cell",{renderBody:o=>{o.t(e.watchers,t)}}),r.r("cell",{renderBody:o=>{o.t(e.protection,t)}}),r.r("cell",{renderBody:o=>{o.t(e.shipping,t)}}),r.r("cell",{renderBody:o=>{o.t(e.delivery,t)}})},{name:`row_${i}`,selected:u}))}},{mode:"selection",...c,header:void 0,row:void 0}),a,n,"0",[["select","emit",!1,["select"]]])},{t:ne,s:!0},Be);L.Component=A(Be,L._);const Xe=`import data from "./data.json";

<ebay-table mode="selection" on-select("emit", "select") ...input>
    <@header row-header>
        Seller
    </@header>
    <@header>Item</@header>
    <@header>Status</@header>
    <@header column-type="numeric">
        List Price
    </@header>
    <@header column-type="numeric">
        Quantity Available
    </@header>
    <@header>Orders</@header>
    <@header column-type="numeric">
        Watchers
    </@header>
    <@header column-type="numeric">
        Protection
    </@header>
    <@header>Shipping</@header>
    <@header>Delivery</@header>
    <for|r, i| of=data>
        <!-- first row selected by default -->
        $ const selected = i === 0;
        <@row name=\`row_\${i}\` selected=selected>
            <@cell>\${r.seller}</@cell>
            <@cell>\${r.item.title}</@cell>
            <@cell>
                <ebay-signal status=r.statusType as any>
                    \${r.status}
                </ebay-signal>
            </@cell>
            <@cell>\${r.listPrice}</@cell>
            <@cell>\${r.quantityAvailable}</@cell>
            <@cell>
                <a href="https://ebay.com">
                    \${r.orders.number}
                </a>
            </@cell>
            <@cell>\${r.watchers}</@cell>
            <@cell>\${r.protection}</@cell>
            <@cell>\${r.shipping}</@cell>
            <@cell>\${r.delivery}</@cell>
        </@row>
    </for>
</ebay-table>
`,se="t928wlw",O=$.t(se);v.r(se,()=>O);const we={};O._=T(function(c,a,n,t,s,y){d(b,r.i(()=>{r.r("header",{rowHeader:!0,renderBody:e=>{e.t("Seller",t)}}),r.r("header",{renderBody:e=>{e.t("Item",t)}}),r.r("header",{renderBody:e=>{e.t("Condition",t)}}),r.r("header",{columnType:"layout",renderBody:e=>{e.t("Mutiple Actions",t)}}),r.r("header",{columnType:"icon-action",renderBody:e=>{e.t("Actions Plus",t)}}),r.r("header",{columnType:"numeric",renderBody:e=>{e.t("List Price",t)}}),r.r("header",{columnType:"numeric",renderBody:e=>{e.t("Quantity Available",t)}}),r.r("header",{renderBody:e=>{e.t("Orders",t)}}),r.r("header",{columnType:"numeric",renderBody:e=>{e.t("Watchers",t)}}),r.r("header",{columnType:"numeric",renderBody:e=>{e.t("Protection",t)}}),r.r("header",{renderBody:e=>{e.t("Shipping",t)}}),r.r("header",{renderBody:e=>{e.t("Delivery",t)}});let h=0;for(const e of f(w)){const i=`[${h++}]`;r.r("row",r.i(()=>{r.r("cell",{renderBody:l=>{l.t(e.seller,t)}}),r.r("cell",{renderBody:l=>{l.t(e.item.titleShort,t)}}),r.r("cell",{renderBody:l=>{d(We,r.i(()=>{r.r("option",{text:"New"}),r.r("option",{text:"New without box",selected:!0}),r.r("option",{text:"Used"})},{borderless:!0}),l,n,"1"+i)}}),r.r("cell",{renderBody:l=>{d(Qe,{href:"https://www.ebay.com",renderBody:u=>{u.t("Edit Listing",t)}},l,n,"2"+i),d(be,{renderBody:u=>{d(me,{},u,n,"4"+i)}},l,n,"3"+i)}}),r.r("cell",{renderBody:l=>{d(be,{renderBody:u=>{d(me,{},u,n,"6"+i)}},l,n,"5"+i)}}),r.r("cell",{renderBody:l=>{l.t(e.listPrice,t)}}),r.r("cell",{renderBody:l=>{l.t(e.quantityAvailable,t)}}),r.r("cell",{renderBody:l=>{l.be("a",{href:"https://ebay.com"},"7"+i,t,null,0),l.t(e.orders.number,t),l.ee()}}),r.r("cell",{renderBody:l=>{l.t(e.watchers,t)}}),r.r("cell",{renderBody:l=>{l.t(e.protection,t)}}),r.r("cell",{renderBody:l=>{l.t(e.shipping,t)}}),r.r("cell",{renderBody:l=>{l.t(e.delivery,t)}})}))}},{...c,header:void 0,row:void 0}),a,n,"0")},{t:se,i:!0},we);O.Component=A(we,O._);const ze=`import data from "./data.json";

<ebay-table ...input>
    <@header row-header>
        Seller
    </@header>
    <@header>Item</@header>
    <@header>Condition</@header>
    <@header column-type="layout">
        Mutiple Actions
    </@header>
    <@header column-type="icon-action">
        Actions Plus
    </@header>
    <@header column-type="numeric">
        List Price
    </@header>
    <@header column-type="numeric">
        Quantity Available
    </@header>
    <@header>Orders</@header>
    <@header column-type="numeric">
        Watchers
    </@header>
    <@header column-type="numeric">
        Protection
    </@header>
    <@header>Shipping</@header>
    <@header>Delivery</@header>
    <for|r| of=data>
        <@row>
            <@cell>\${r.seller}</@cell>
            <@cell>\${r.item.titleShort}</@cell>
            <@cell>
                <ebay-select borderless>
                    <@option text="New"/>
                    <@option text="New without box" selected/>
                    <@option text="Used"/>
                </ebay-select>
            </@cell>
            <@cell>
                <ebay-cta-button href="https://www.ebay.com">
                    Edit Listing
                </ebay-cta-button>
                <ebay-icon-button>
                    <ebay-overflow-vertical-16-icon/>
                </ebay-icon-button>
            </@cell>
            <@cell>
                <ebay-icon-button>
                    <ebay-overflow-vertical-16-icon/>
                </ebay-icon-button>
            </@cell>
            <@cell>\${r.listPrice}</@cell>
            <@cell>\${r.quantityAvailable}</@cell>
            <@cell>
                <a href="https://ebay.com">
                    \${r.orders.number}
                </a>
            </@cell>
            <@cell>\${r.watchers}</@cell>
            <@cell>\${r.protection}</@cell>
            <@cell>\${r.shipping}</@cell>
            <@cell>\${r.delivery}</@cell>
        </@row>
    </for>
</ebay-table>
`,ie="cbOpHOh",R=$.t(ie);v.r(ie,()=>R);const Ce={onCreate(){this.onSort=c=>{this.state.sorted=c.sorted,this.emit("sort",c)},this.state={sorted:{sellerCol:"asc"}}}};R._=T(function(c,a,n,t,s,y){d(b,r.i(()=>{r.r("header",{name:"sellerCol",rowHeader:!0,sort:s.sorted.sellerCol||"none",renderBody:e=>{e.t("Seller",t)}}),r.r("header",{name:"itemCol",sort:s.sorted.itemCol||"none",renderBody:e=>{e.t("Item",t)}}),r.r("header",{name:"statusCol",sort:s.sorted.statusCol||"none",renderBody:e=>{e.t("Status",t)}}),r.r("header",{name:"listPriceCol",columnType:"numeric",sort:s.sorted.listPriceCol||"none",renderBody:e=>{e.t("List Price",t)}}),r.r("header",{name:"quantityCol",columnType:"numeric",sort:s.sorted.quantityCol||"none",renderBody:e=>{e.t("Quantity Available",t)}}),r.r("header",{name:"orderCol",sort:s.sorted.orderCol||"none",renderBody:e=>{e.t("Orders",t)}}),r.r("header",{name:"watchersCol",columnType:"numeric",sort:s.sorted.watchersCol||"none",renderBody:e=>{e.t("Watchers",t)}}),r.r("header",{name:"protectionCol",columnType:"numeric",sort:s.sorted.protectionCol||"none",renderBody:e=>{e.t("Protection",t)}}),r.r("header",{name:"shippingCol",sort:s.sorted.shippingCol||"none",renderBody:e=>{e.t("Shipping",t)}}),r.r("header",{name:"deliveryCol",sort:s.sorted.deliveryCol||"none",renderBody:e=>{e.t("Delivery",t)}});let h=0;for(const e of f(w)){const i=`[${h++}]`;r.r("row",r.i(()=>{r.r("cell",{renderBody:l=>{l.t(e.seller,t)}}),r.r("cell",{renderBody:l=>{l.t(e.item.title,t)}}),r.r("cell",{renderBody:l=>{d(Q,{status:e.statusType,renderBody:u=>{u.t(e.status,t)}},l,n,"1"+i)}}),r.r("cell",{renderBody:l=>{l.t(e.listPrice,t)}}),r.r("cell",{renderBody:l=>{l.t(e.quantityAvailable,t)}}),r.r("cell",{renderBody:l=>{l.be("a",{href:"https://ebay.com"},"2"+i,t,null,0),l.t(e.orders.number,t),l.ee()}}),r.r("cell",{renderBody:l=>{l.t(e.watchers,t)}}),r.r("cell",{renderBody:l=>{l.t(e.protection,t)}}),r.r("cell",{renderBody:l=>{l.t(e.shipping,t)}}),r.r("cell",{renderBody:l=>{l.t(e.delivery,t)}})}))}},{...c,header:void 0,row:void 0}),a,n,"0",[["sort","onSort",!1]])},{t:ie},Ce);R.Component=A(Ce,R._);const Ue=`import data from "./data.json";
import type { Input as TableInput } from "<ebay-table>";
class {
    declare state: {
        sorted: Record<string, "asc" | "desc" | "none">;
    };
    onCreate() {
        this.state = { sorted: { sellerCol: "asc" } };
    }
    onSort: TableInput["on-sort"] = (event) => {
        this.state.sorted = event.sorted;
        this.emit("sort", event);
    };
}

<ebay-table on-sort("onSort") ...input>
    <@header
        name="sellerCol"
        row-header
        sort=(state.sorted.sellerCol || "none")
    >
        Seller
    </@header>
    <@header name="itemCol" sort=(state.sorted.itemCol || "none")>
        Item
    </@header>
    <@header name="statusCol" sort=(state.sorted.statusCol || "none")>
        Status
    </@header>
    <@header
        name="listPriceCol"
        column-type="numeric"
        sort=(state.sorted.listPriceCol || "none")
    >
        List Price
    </@header>
    <@header
        name="quantityCol"
        column-type="numeric"
        sort=(state.sorted.quantityCol || "none")
    >
        Quantity Available
    </@header>
    <@header name="orderCol" sort=(state.sorted.orderCol || "none")>
        Orders
    </@header>
    <@header
        name="watchersCol"
        column-type="numeric"
        sort=(state.sorted.watchersCol || "none")
    >
        Watchers
    </@header>
    <@header
        name="protectionCol"
        column-type="numeric"
        sort=(state.sorted.protectionCol || "none")
    >
        Protection
    </@header>
    <@header name="shippingCol" sort=(state.sorted.shippingCol || "none")>
        Shipping
    </@header>
    <@header name="deliveryCol" sort=(state.sorted.deliveryCol || "none")>
        Delivery
    </@header>
    <for|r| of=data>
        <@row>
            <@cell>\${r.seller}</@cell>
            <@cell>\${r.item.title}</@cell>
            <@cell>
                <ebay-signal status=r.statusType as any>
                    \${r.status}
                </ebay-signal>
            </@cell>
            <@cell>\${r.listPrice}</@cell>
            <@cell>\${r.quantityAvailable}</@cell>
            <@cell>
                <a href="https://ebay.com">
                    \${r.orders.number}
                </a>
            </@cell>
            <@cell>\${r.watchers}</@cell>
            <@cell>\${r.protection}</@cell>
            <@cell>\${r.shipping}</@cell>
            <@cell>\${r.delivery}</@cell>
        </@row>
    </for>
</ebay-table>
`,oe="ChzLaPy",F=$.t(oe);v.r(oe,()=>F);const $e={};F._=T(function(c,a,n,t,s,y){d(b,r.i(()=>{r.r("header",{rowHeader:!0,sort:"asc",href:"https://www.ebay.com",renderBody:e=>{e.t("Seller",t)}}),r.r("header",{renderBody:e=>{e.t("Item",t)}}),r.r("header",{renderBody:e=>{e.t("Status",t)}}),r.r("header",{columnType:"numeric",renderBody:e=>{e.t("List Price",t)}}),r.r("header",{columnType:"numeric",renderBody:e=>{e.t("Quantity Available",t)}}),r.r("header",{renderBody:e=>{e.t("Orders",t)}}),r.r("header",{columnType:"numeric",renderBody:e=>{e.t("Watchers",t)}}),r.r("header",{columnType:"numeric",renderBody:e=>{e.t("Protection",t)}}),r.r("header",{renderBody:e=>{e.t("Shipping",t)}}),r.r("header",{renderBody:e=>{e.t("Delivery",t)}});let h=0;for(const e of f(w)){const i=`[${h++}]`;r.r("row",r.i(()=>{r.r("cell",{renderBody:l=>{l.t(e.seller,t)}}),r.r("cell",{renderBody:l=>{l.t(e.item.title,t)}}),r.r("cell",{renderBody:l=>{d(Q,{status:e.statusType,renderBody:u=>{u.t(e.status,t)}},l,n,"1"+i)}}),r.r("cell",{renderBody:l=>{l.t(e.listPrice,t)}}),r.r("cell",{renderBody:l=>{l.t(e.quantityAvailable,t)}}),r.r("cell",{renderBody:l=>{l.be("a",{href:"https://ebay.com"},"2"+i,t,null,0),l.t(e.orders.number,t),l.ee()}}),r.r("cell",{renderBody:l=>{l.t(e.watchers,t)}}),r.r("cell",{renderBody:l=>{l.t(e.protection,t)}}),r.r("cell",{renderBody:l=>{l.t(e.shipping,t)}}),r.r("cell",{renderBody:l=>{l.t(e.delivery,t)}})}))}},{...c,header:void 0,row:void 0}),a,n,"0")},{t:oe,i:!0},$e);F.Component=A($e,F._);const Ve=`import data from "./data.json";

<ebay-table ...input>
    <@header row-header sort=("asc" as const) href="https://www.ebay.com">
        Seller
    </@header>
    <@header>Item</@header>
    <@header>Status</@header>
    <@header column-type="numeric">
        List Price
    </@header>
    <@header column-type="numeric">
        Quantity Available
    </@header>
    <@header>Orders</@header>
    <@header column-type="numeric">
        Watchers
    </@header>
    <@header column-type="numeric">
        Protection
    </@header>
    <@header>Shipping</@header>
    <@header>Delivery</@header>
    <for|r| of=data>
        <@row>
            <@cell>\${r.seller}</@cell>
            <@cell>\${r.item.title}</@cell>
            <@cell>
                <ebay-signal status=r.statusType as any>
                    \${r.status}
                </ebay-signal>
            </@cell>
            <@cell>\${r.listPrice}</@cell>
            <@cell>\${r.quantityAvailable}</@cell>
            <@cell>
                <a href="https://ebay.com">
                    \${r.orders.number}
                </a>
            </@cell>
            <@cell>\${r.watchers}</@cell>
            <@cell>\${r.protection}</@cell>
            <@cell>\${r.shipping}</@cell>
            <@cell>\${r.delivery}</@cell>
        </@row>
    </for>
</ebay-table>
`,de="xGB4yBh",W=$.t(de);v.r(de,()=>W);const ve={onCreate(){this.onSort=c=>{this.state.sorted=c.sorted,this.state.data=[...w].sort((a,n)=>this.state.sorted.listPriceCol==="asc"?Number(a.listPrice.substring(1))-Number(n.listPrice.substring(1)):this.state.sorted.listPriceCol==="desc"?Number(n.listPrice.substring(1))-Number(a.listPrice.substring(1)):this.state.sorted.quantityCol==="asc"?Number(a.quantityAvailable)-Number(n.quantityAvailable):this.state.sorted.quantityCol==="desc"?Number(n.quantityAvailable)-Number(a.quantityAvailable):0),this.emit("sort",c)},this.state={sorted:{},data:w}}};W._=T(function(c,a,n,t,s,y){d(b,r.i(()=>{r.r("header",{name:"sellerCol",rowHeader:!0,renderBody:e=>{e.t("Seller",t)}}),r.r("header",{name:"itemCol",renderBody:e=>{e.t("Item",t)}}),r.r("header",{name:"statusCol",renderBody:e=>{e.t("Status",t)}}),r.r("header",{name:"listPriceCol",columnType:"numeric",sort:s.sorted.listPriceCol||"none",renderBody:e=>{e.t("List Price",t)}}),r.r("header",{name:"quantityCol",columnType:"numeric",sort:s.sorted.quantityCol||"none",renderBody:e=>{e.t("Quantity Available",t)}}),r.r("header",{name:"orderCol",renderBody:e=>{e.t("Orders",t)}}),r.r("header",{name:"watchersCol",columnType:"numeric",renderBody:e=>{e.t("Watchers",t)}}),r.r("header",{name:"protectionCol",columnType:"numeric",renderBody:e=>{e.t("Protection",t)}}),r.r("header",{name:"shippingCol",renderBody:e=>{e.t("Shipping",t)}}),r.r("header",{name:"deliveryCol",renderBody:e=>{e.t("Delivery",t)}});let h=0;for(const e of f(s.data)){const i=`[${h++}]`;r.r("row",r.i(()=>{r.r("cell",{renderBody:l=>{l.t(e.seller,t)}}),r.r("cell",{renderBody:l=>{l.t(e.item.title,t)}}),r.r("cell",{renderBody:l=>{d(Q,{status:e.statusType,renderBody:u=>{u.t(e.status,t)}},l,n,"1"+i)}}),r.r("cell",{renderBody:l=>{l.t(e.listPrice,t)}}),r.r("cell",{renderBody:l=>{l.t(e.quantityAvailable,t)}}),r.r("cell",{renderBody:l=>{l.be("a",{href:"https://ebay.com"},"2"+i,t,null,0),l.t(e.orders.number,t),l.ee()}}),r.r("cell",{renderBody:l=>{l.t(e.watchers,t)}}),r.r("cell",{renderBody:l=>{l.t(e.protection,t)}}),r.r("cell",{renderBody:l=>{l.t(e.shipping,t)}}),r.r("cell",{renderBody:l=>{l.t(e.delivery,t)}})}))}},{...c,header:void 0,row:void 0}),a,n,"0",[["sort","onSort",!1]])},{t:de},ve);W.Component=A(ve,W._);const Ge=`import data from "./data.json";
import type { Input as TableInput } from "<ebay-table>";
class {
    declare state: {
        sorted: Record<string, "asc" | "desc" | "none">;
        data: typeof data;
    };
    onCreate() {
        this.state = { sorted: {}, data };
    }
    onSort: TableInput["on-sort"] = (event) => {
        this.state.sorted = event.sorted;
        this.state.data = [...data].sort((a, b) => {
            if (this.state.sorted.listPriceCol === "asc") {
                return (
                    Number(a.listPrice.substring(1)) -
                    Number(b.listPrice.substring(1))
                );
            } else if (this.state.sorted.listPriceCol === "desc") {
                return (
                    Number(b.listPrice.substring(1)) -
                    Number(a.listPrice.substring(1))
                );
            } else if (this.state.sorted.quantityCol === "asc") {
                return (
                    Number(a.quantityAvailable) - Number(b.quantityAvailable)
                );
            } else if (this.state.sorted.quantityCol === "desc") {
                return (
                    Number(b.quantityAvailable) - Number(a.quantityAvailable)
                );
            }
            return 0;
        });
        this.emit("sort", event);
    };
}
<ebay-table on-sort("onSort") ...input>
    <@header name="sellerCol" row-header>
        Seller
    </@header>
    <@header name="itemCol">
        Item
    </@header>
    <@header name="statusCol">
        Status
    </@header>
    <@header
        name="listPriceCol"
        column-type="numeric"
        sort=(state.sorted.listPriceCol || "none")
    >
        List Price
    </@header>
    <@header
        name="quantityCol"
        column-type="numeric"
        sort=(state.sorted.quantityCol || "none")
    >
        Quantity Available
    </@header>
    <@header name="orderCol">
        Orders
    </@header>
    <@header name="watchersCol" column-type="numeric">
        Watchers
    </@header>
    <@header name="protectionCol" column-type="numeric">
        Protection
    </@header>
    <@header name="shippingCol">
        Shipping
    </@header>
    <@header name="deliveryCol">
        Delivery
    </@header>
    <for|r| of=state.data>
        <@row>
            <@cell>\${r.seller}</@cell>
            <@cell>\${r.item.title}</@cell>
            <@cell>
                <ebay-signal status=r.statusType as any>
                    \${r.status}
                </ebay-signal>
            </@cell>
            <@cell>\${r.listPrice}</@cell>
            <@cell>\${r.quantityAvailable}</@cell>
            <@cell>
                <a href="https://ebay.com">
                    \${r.orders.number}
                </a>
            </@cell>
            <@cell>\${r.watchers}</@cell>
            <@cell>\${r.protection}</@cell>
            <@cell>\${r.shipping}</@cell>
            <@cell>\${r.delivery}</@cell>
        </@row>
    </for>
</ebay-table>
`,Pt={title:"data-display/ebay-table",component:b,parameters:{docs:{description:{component:Me}}},argTypes:{density:{control:{type:"select"},description:"table density",options:["compact","relaxed","none"]},mode:{control:{type:"select"},description:"table mode",options:["selection","none"]},bodyState:{control:{type:"select"},description:"table state",options:["loading","none"]},frozenHeader:{control:{type:"boolean"},description:"If true, the header will be frozen"},allSelected:{control:{type:"select"},description:"Select all tri-state checkbox state",options:["true","false","mixed"]},header:{name:"@header",description:"header attribute tags",table:{category:"@attribute tags"}},rowHeader:{name:"row-header",control:{type:"boolean"},description:"If true, the cell will be rendered as a row header",table:{category:"@header attribute tags"}},row:{name:"@row",description:"row attribute tags",table:{category:"@attribute tags"}},columnName:{name:"name",control:{type:"text"},description:"Column name, default is index",table:{category:"@header attribute tags"}},columnType:{name:"column-type",control:{type:"select"},options:["normal","numeric","layout","icon-action"],table:{category:"@header attribute tags",defaultValue:{summary:"normal"}}},href:{name:"href",control:{type:"text"},description:"If set, column sorting will be a link to this href",table:{category:"@header attribute tags"}},rowName:{name:"name",control:{type:"text"},description:"Row name, default is index",table:{category:"@row attribute tags"}},selected:{name:"selected",control:{type:"boolean"},table:{category:"@row attribute tags"}},cell:{controls:{hideNoControlsWarning:!0},name:"@cell",description:"cell attribute tags",table:{category:"@row attribute tags"}},a11yLoadingText:{description:"Localized, text for progress bar expressive when table is in loading body state",table:{category:"a11y",defaultValue:{summary:"Loading..."}}},a11ySelectAllText:{description:"Localized, text for selecting all rows. Used with select mode",table:{category:"a11y"}},a11ySelectRowText:{description:"Localized, text for selecting a row. Used with select mode",table:{category:"a11y"}},onSelect:{action:"on-select",description:"Triggered on selection",table:{category:"Events",defaultValue:{summary:"{ selected, allSelected }"}}},onSort:{action:"on-sort",description:"Triggered on column sort",table:{category:"Events",defaultValue:{summary:"{ sorted }"}}}}},X=C(q,Se),z=C(q,Se,{density:"compact"}),U=C(L,Xe,{a11ySelectAllText:"Select all",a11ySelectRowText:"Select row"}),V=C(O,ze),G=C(R,Ue),K=C(F,Ve),D=C(W,Ge);X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:"buildExtensionTemplate(defaultTemplate, defaultCode)",...X.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`buildExtensionTemplate(defaultTemplate, defaultCode, {
  density: "compact"
})`,...z.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`buildExtensionTemplate(selectionTemplate, selectionCode, {
  a11ySelectAllText: "Select all",
  a11ySelectRowText: "Select row"
})`,...U.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:"buildExtensionTemplate(withActionsTemplate, withActionsCode)",...V.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:"buildExtensionTemplate(sortTemplate, sortCode)",...G.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:"buildExtensionTemplate(sortWithLinkTemplate, sortWithLinkCode)",...K.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:"buildExtensionTemplate(sortClientSideTemplate, sortClientSideCode)",...D.parameters?.docs?.source}}};const qt=["Default","TableDensity","SelectionModeBasic","TableWithActions","ColumnSorting","ColumnSortingWithLink","ColumnSortingClientSide"];export{G as ColumnSorting,D as ColumnSortingClientSide,K as ColumnSortingWithLink,X as Default,U as SelectionModeBasic,z as TableDensity,V as TableWithActions,qt as __namedExportsOrder,Pt as default};
