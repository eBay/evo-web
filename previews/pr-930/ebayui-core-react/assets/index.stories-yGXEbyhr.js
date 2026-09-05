var ye=Object.defineProperty;var a=(n,r)=>ye(n,"name",{value:r,configurable:!0});import{r as h,R as e,c as W,w as he}from"./iframe-DXKVC7Wu.js";import{E as Ie}from"./button-BAvxCJp2.js";import{E as fe}from"./lightbox-dialog-C1EaB5Lb.js";import{E as ve,a as le,b as me}from"./tabs-Nt1Ctw5X.js";import{b as be}from"./utils-4VXCHhuo.js";import{d as xe}from"./debounce-YHMMpFC7.js";import{E as Ee,a as we}from"./menu-button-label-D0vB1_XY.js";import{E as Pe}from"./ebay-icon-overflow-horizontal-24-C0Q09TRG.js";import{E as _e,a as Ne}from"./ebay-icon-arrow-right-16-DLLh-vRc.js";import"./preload-helper-Cc2_yIPf.js";import"./progress-spinner-DE2l3aJa.js";import"./ebay-icon-spinner-30-C7gEAvHE.js";import"./ebay-icon-chevron-down-12-Bx23oBI8.js";import"./dialog-previous-button-CGrVTs3d.js";import"./index-CSGTE6jH.js";import"./ebay-icon-close-16-CPcoIDU4.js";import"./icon-button-eFlBz-0H.js";import"./badge-KBGKARd0.js";import"./ebay-icon-chevron-left-16-D70GS6Gt.js";import"./index-ChCx--2D.js";import"./menu-item-separator-BrTYZbA2.js";import"./ebay-icon-tick-16-BRYYV87n.js";import"./index-BzamGs-v.js";import"./floating-ui-Dh-39v5u.js";import"./jsx-runtime-BHIWlbBZ.js";import"./index-BiwhiUzw.js";import"./index-JeB-DIMX.js";const Te=1,M=9,ue=4,ae=2,Se=M-ae;function ke(n,r,o=n,i=null){const s=i==="show-last"||i==="overflow"&&n>M,u=i==="overflow"&&n>M,m=Math.min(o,n),d=Math.max(0,r-Math.ceil((m-1)/2)),l=m<ue?r:Math.max(0,r-Math.floor((m-1)/2)),c=(s?l:d)+m,g=c>=n,x=r<=ue,A=a((f,I)=>{const p=B(n,f,I);return m>2?(p[I-2]="dots",p[I-1]="hidden",p[n-1]="visible"):m>1&&(p[I-1]="dots"),p},"visibleRangeWithDots"),E=a((f,I)=>{if(x)return A(0,I);if(g){const _=B(n,n-Se,n);return _[0]="visible",_[1]="dots",_}const p=B(n,r-ae,r+ae+1);return p[0]="visible",p[1]=x?"visible":"dots",p[n-2]="dots",p[n-1]="visible",p},"visibleRangeWithOverflowDots");return g&&n<=M?B(n,n-m):s?u?E(l,c):A(l,c):B(n,d,c)}a(ke,"pageNumbersAround");function Ae(n,r,o,i="show-range"){if(n===-1)return[];const s=i==="overflow"?M:Re(Math.min(o,r),Te,M);return ke(o,n-1,s,i)}a(Ae,"calcPageState");function Re(n,r,o){return n<=r?r:n>=o?o:n}a(Re,"clamp");function B(n,r,o){return Array(n).fill("hidden").fill("visible",r,o)}a(B,"visibleRange");function Oe(n){if(!n)return 0;n.style.width="100vw";const r=n.offsetWidth;return n.style.width=null,r}a(Oe,"getMaxWidth");const b=a(({id:n="ebay-pagination",a11yHeadingTag:r="h2",className:o,a11yCurrentText:i="Results Pagination - Page 1",a11yPreviousText:s="Previous page",a11yNextText:u="Next page",variant:m="show-range",fluid:d=!1,onPrevious:l=a(()=>{},"onPrevious"),onNext:c=a(()=>{},"onNext"),onSelect:g=a(()=>{},"onSelect"),children:x,...A})=>{const E=h.useRef(null),f=h.useRef([]);f.current=h.Children.map(x,h.createRef);const I=be(x,({props:w})=>w.type===void 0||w.type==="page").length,p=a(()=>{const w=f.current[0]?.current?.offsetWidth,P=f.current.slice(1).find(S=>S.current?.offsetWidth)?.current?.offsetWidth;return P?Math.floor((Oe(E.current)-w*2)/P):0},"getNumOfVisiblePageItems"),[_,J]=h.useState([]),[R,$]=h.useState(0),T=a(w=>{const N=w||f.current.findIndex(C=>C.current?.getAttribute("aria-current")==="page"),P=p(),S=Ae(N,P,I,m);$(N),J(["hidden",...S])},"updatePages");h.useEffect(()=>{const w=xe(T,16);T();const N=a(()=>w(),"resizeHandler");window.addEventListener("resize",N);let P=null;return E.current&&typeof IntersectionObserver<"u"&&(P=new IntersectionObserver(S=>{S.forEach(C=>{C.isIntersecting&&T()})},{threshold:0,root:null}),P.observe(E.current)),()=>{window.removeEventListener("resize",N),P?.disconnect()}},[x]);const O=a(w=>{let N=0;const P=[],S=[],C=[],Q=_.indexOf("dots"),Z=_.lastIndexOf("dots");return h.Children.map(x,(ie,k)=>{const{type:D="page",current:pe,disabled:de,href:ee,children:oe}=ie.props,q=_[k]==="dots",te=`${n}-item-${k}`,se=_[k]==="hidden",ge={current:pe,disabled:de,href:ee,type:q&&D==="page"?"separator":D,children:q?e.createElement(Pe,{focusable:!1}):oe,pageIndex:D==="page"?N++:void 0,key:te,hide:se,onPrevious:l,onNext:c,onSelect:g,a11yPreviousText:s,a11yNextText:u,ref:f.current[k]};if((se||q)&&D==="page"){const L=e.createElement(we,{key:te,href:ee,onClick:a(ne=>{ee||ne.preventDefault();const ce=ne.currentTarget;g(ne,{value:ce?.innerText||"",index:N}),T(Number(ce?.innerText))},"onClick")},oe);Q===Z&&C.push(L),R-2>Q&&k<R&&P.push(L),R+2<Z&&k>R&&S.push(L)}if(w==="page"&&q&&m==="overflow"){let L=C;return Q!==Z&&(L=k===2?P:S),e.createElement("li",{key:te},e.createElement("span",{className:"pagination__item",role:"separator"},e.createElement(Ee,{a11yText:"Menu",borderless:!0,variant:"overflow",noToggleIcon:!0},L)))}return w===D?h.cloneElement(ie,ge):null})},"createChildItems"),V=`${n}-pagination-heading`,v=r;return e.createElement("nav",{...A,role:"navigation",className:W(o,"pagination",{"pagination--fluid":d}),"aria-labelledby":V,ref:E},e.createElement("span",{"aria-live":"polite",role:"status"},e.createElement(v,{className:"clipped",id:V},i)),O("previous"),e.createElement("ol",{className:"pagination__items"},O("page")),O("next"))},"EbayPagination");try{b.displayName="pagination",b.__docgenInfo={description:"",displayName:"pagination",filePath:"/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-pagination/pagination.tsx",methods:[],props:{a11yHeadingTag:{defaultValue:{value:"h2"},declarations:[{fileName:"ebayui-core-react/src/ebay-pagination/pagination.tsx",name:"TypeLiteral"}],description:"",name:"a11yHeadingTag",required:!1,tags:{},type:{name:"keyof IntrinsicElements"}},a11yPreviousText:{defaultValue:{value:"Previous page"},declarations:[{fileName:"ebayui-core-react/src/ebay-pagination/pagination.tsx",name:"TypeLiteral"}],description:"",name:"a11yPreviousText",required:!1,tags:{},type:{name:"string"}},a11yNextText:{defaultValue:{value:"Next page"},declarations:[{fileName:"ebayui-core-react/src/ebay-pagination/pagination.tsx",name:"TypeLiteral"}],description:"",name:"a11yNextText",required:!1,tags:{},type:{name:"string"}},a11yCurrentText:{defaultValue:{value:"Results Pagination - Page 1"},declarations:[{fileName:"ebayui-core-react/src/ebay-pagination/pagination.tsx",name:"TypeLiteral"}],description:"",name:"a11yCurrentText",required:!1,tags:{},type:{name:"string"}},onPrevious:{defaultValue:{value:"() => {}"},declarations:[{fileName:"ebayui-core-react/src/ebay-pagination/pagination.tsx",name:"TypeLiteral"}],description:"",name:"onPrevious",required:!1,tags:{},type:{name:"EbayEventHandler"}},onNext:{defaultValue:{value:"() => {}"},declarations:[{fileName:"ebayui-core-react/src/ebay-pagination/pagination.tsx",name:"TypeLiteral"}],description:"",name:"onNext",required:!1,tags:{},type:{name:"EbayEventHandler"}},onSelect:{defaultValue:{value:"() => {}"},declarations:[{fileName:"ebayui-core-react/src/ebay-pagination/pagination.tsx",name:"TypeLiteral"}],description:"",name:"onSelect",required:!1,tags:{},type:{name:"EbayEventHandler<{ value: string; index: number; }>"}},variant:{defaultValue:{value:"show-range"},declarations:[{fileName:"ebayui-core-react/src/ebay-pagination/pagination.tsx",name:"TypeLiteral"}],description:"",name:"variant",required:!1,tags:{},type:{name:"PaginationVariant"}},fluid:{defaultValue:{value:"false"},declarations:[{fileName:"ebayui-core-react/src/ebay-pagination/pagination.tsx",name:"TypeLiteral"}],description:"",name:"fluid",required:!1,tags:{},type:{name:"boolean"}}},tags:{}}}catch{}const re=a(({pageIndex:n=0,key:r,current:o,disabled:i,type:s="page",href:u,hide:m,children:d,a11yPreviousText:l="Previous page",a11yNextText:c="Next page",onSelect:g,onNext:x,onPrevious:A,className:E,style:f,forwardedRef:I,...p})=>{const _=a(v=>{g(v,{value:v.currentTarget?.innerText||"",index:n})},"handlePageNumber"),J=a(v=>{if(v.currentTarget.getAttribute("aria-disabled")){v.preventDefault();return}x(v)},"handleNextPage"),R=a(v=>{if(v.currentTarget.getAttribute("aria-disabled")){v.preventDefault();return}A(v)},"handlePreviousPage"),$=!!u,T=$?"a":"button",O=$?"icon-link":"icon-btn",V={...f,minWidth:"40px"};switch(s){case"previous":return e.createElement(T,{...p,ref:I,"aria-disabled":i?"true":void 0,"aria-label":l,href:i?void 0:u,className:W(E,O,"pagination__previous"),style:V,onClick:R},e.createElement(Ne,null));case"next":return e.createElement(T,{...p,ref:I,"aria-disabled":i?"true":void 0,"aria-label":c,href:i?void 0:u,className:W(E,O,"pagination__next"),style:V,onClick:J},e.createElement(_e,null));case"separator":return e.createElement("span",{key:r,style:f,className:W(E,"pagination__item"),ref:I,role:"separator"},d);default:return e.createElement("li",{...p,hidden:m},e.createElement(T,{ref:I,"aria-current":o?"page":void 0,href:u,className:W(E,"pagination__item"),style:f,key:r,onClick:_},d))}},"EbayPaginationItem"),t=he(re);try{re.displayName="EbayPaginationItem",re.__docgenInfo={description:"",displayName:"EbayPaginationItem",filePath:"/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-pagination/pagination-item.tsx",methods:[],props:{pageIndex:{defaultValue:{value:"0"},declarations:[{fileName:"ebayui-core-react/src/ebay-pagination/pagination-item.tsx",name:"TypeLiteral"}],description:"",name:"pageIndex",required:!1,tags:{},type:{name:"number"}},current:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-pagination/pagination-item.tsx",name:"TypeLiteral"}],description:"",name:"current",required:!1,tags:{},type:{name:"boolean"}},hide:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-pagination/pagination-item.tsx",name:"TypeLiteral"}],description:"",name:"hide",required:!1,tags:{},type:{name:"boolean"}},a11yPreviousText:{defaultValue:{value:"Previous page"},declarations:[{fileName:"ebayui-core-react/src/ebay-pagination/pagination-item.tsx",name:"TypeLiteral"}],description:"",name:"a11yPreviousText",required:!1,tags:{},type:{name:"string"}},a11yNextText:{defaultValue:{value:"Next page"},declarations:[{fileName:"ebayui-core-react/src/ebay-pagination/pagination-item.tsx",name:"TypeLiteral"}],description:"",name:"a11yNextText",required:!1,tags:{},type:{name:"string"}},onPrevious:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-pagination/pagination-item.tsx",name:"TypeLiteral"}],description:"",name:"onPrevious",required:!1,tags:{},type:{name:"EbayEventHandler"}},onNext:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-pagination/pagination-item.tsx",name:"TypeLiteral"}],description:"",name:"onNext",required:!1,tags:{},type:{name:"EbayEventHandler"}},onSelect:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-pagination/pagination-item.tsx",name:"TypeLiteral"}],description:"",name:"onSelect",required:!1,tags:{},type:{name:"EbayEventHandler<{ value: string; index: number; }>"}},forwardedRef:{defaultValue:null,declarations:[{fileName:"ebayui-core-react/src/ebay-pagination/pagination-item.tsx",name:"TypeLiteral"}],description:"",name:"forwardedRef",required:!1,tags:{},type:{name:"RefObject<HTMLAnchorElement & HTMLButtonElement>"}}},tags:{}}}catch{}const{action:y}=__STORYBOOK_MODULE_ACTIONS__,ct={title:"navigation & disclosure/ebay-pagination",tags:["autodocs"],parameters:{docs:{description:{component:`## Import

\`\`\`jsx harmony
import { EbayPagination, EbayPaginationItem } from "@ebay/ui-core-react/ebay-pagination";
\`\`\`

### Import following styles from SKIN

\`\`\`jsx harmony
import "@ebay/skin/button";
import "@ebay/skin/icon";
import "@ebay/skin/icon-button";
import "@ebay/skin/menu";
import "@ebay/skin/menu-button";
import "@ebay/skin/pagination";
import "@ebay/skin/utility";
\`\`\`

or import styles using SCSS/CSS

\`\`\`css
@import "@ebay/skin/button.css";
@import "@ebay/skin/icon.css";
@import "@ebay/skin/icon-button.css";
@import "@ebay/skin/menu.css";
@import "@ebay/skin/menu-button.css";
@import "@ebay/skin/pagination.css";
@import "@ebay/skin/utility.css";
\`\`\`

### EbayPagination Usage

### Basic

\`\`\`jsx
<EbayPagination a11yPreviousText="Previous page" a11yNextText="Next page" a11yCurrentText="Results Pagination - Page 2">
    <EbayPaginationItem href="#" type="previous" disabled />
    <EbayPaginationItem href="#" current>
        item 1
    </EbayPaginationItem>
    <EbayPaginationItem href="#">item 2</EbayPaginationItem>
    <EbayPaginationItem href="#">item 3</EbayPaginationItem>
    <EbayPaginationItem href="#" type="next" />
</EbayPagination>
\`\`\`

## EbayPaginationItem Tag

### EbayPaginationItem Usage

\`\`\`jsx
<EbayPaginationItem>1</EbayPaginationItem>
\`\`\``}}},argTypes:{a11yPreviousText:{description:"a11y text for previous arrow button",control:"text"},a11yNextText:{description:"a11y text for next arrow button",control:"text"},a11yCurrentText:{description:"Description for the current page (e.g. Results of Page 1)",control:"text"},a11yHeadingTag:{description:"Heading tag for pagination (default: `h2`)",control:"text",table:{defaultValue:{summary:"h2"}}},variant:{description:"Either `show-last`, or `show-range` (default). If show-last then will show the last page always and will put `…` between the last visible range and the last page. `…` and the last page will take up two items in the range. `…` will be hidden when the range to the last item is fully visible.",options:["show-last","show-range","overflow"],control:{type:"select"}},fluid:{description:"Will fill all available horizontal space. Horizontal space will be distributed around each item as necessary.",control:"boolean"},disabled:{description:"Previous/next button is disabled or not",control:"boolean"},href:{description:"for link that looks like a menu-item; omitting the href will switch to a button",control:"text"},current:{description:"the current page",control:"boolean"},type:{description:'"previous", "next" or "page"(default). To specify if the information entered is for the previous or next arrow button or a page. If the `type=\'previous',control:"text"},onPrevious:{description:"Called when previous button is clicked",action:"onPrevious",table:{category:"Events"}},onNext:{description:"Called when next button is clicked",action:"onNext",table:{category:"Events"}},onSelect:{description:"Called when a page item is selected",action:"onSelect",table:{category:"Events"}}}},H={render:a(n=>e.createElement(e.Fragment,null,e.createElement(b,{...n,a11yPreviousText:"Previous page",a11yNextText:"Next page",a11yCurrentText:"Results Pagination - Page 1",onPrevious:a(r=>y("onPrevious")(r),"onPrevious"),onNext:a(r=>y("onNext")(r),"onNext"),onSelect:a((r,o)=>y("onSelect")(r,o),"onSelect")},e.createElement(t,{type:"previous",disabled:!0,href:"https://www.ebay.com/sch/i.html?_from=R40&_nkw=iphone&_sacat=0&_pgn=5"}),e.createElement(t,{href:"https://www.ebay.com/sch/i.html?_from=R40&_nkw=iphone&_sacat=0&_pgn=1",current:!0},"1"),e.createElement(t,{href:"https://www.ebay.com/sch/i.html?_from=R40&_nkw=iphone&_sacat=0&_pgn=2"},"2"),e.createElement(t,{href:"https://www.ebay.com/sch/i.html?_from=R40&_nkw=iphone&_sacat=0&_pgn=3"},"3"),e.createElement(t,{href:"https://www.ebay.com/sch/i.html?_from=R40&_nkw=iphone&_sacat=0&_pgn=4"},"4"),e.createElement(t,{href:"https://www.ebay.com/sch/i.html?_from=R40&_nkw=iphone&_sacat=0&_pgn=5"},"5"),e.createElement(t,{href:"https://www.ebay.com/sch/i.html?_from=R40&_nkw=iphone&_sacat=0&_pgn=6"},"6"),e.createElement(t,{href:"https://www.ebay.com/sch/i.html?_from=R40&_nkw=iphone&_sacat=0&_pgn=7"},"7"),e.createElement(t,{href:"https://www.ebay.com/sch/i.html?_from=R40&_nkw=iphone&_sacat=0&_pgn=8"},"8"),e.createElement(t,{href:"https://www.ebay.com/sch/i.html?_from=R40&_nkw=iphone&_sacat=0&_pgn=9"},"9"),e.createElement(t,{href:"https://www.ebay.com/sch/i.html?_from=R40&_nkw=iphone&_sacat=0&_pgn=10",type:"next"}))),"render"),name:"Basic links"},F={render:a(n=>e.createElement(e.Fragment,null,e.createElement(b,{...n},e.createElement(t,{disabled:!0,type:"previous",href:"#"}),e.createElement(t,{current:!0,type:"page",href:"#"},"1"),e.createElement(t,{disabled:!0,type:"next",href:"#"}))),"render"),name:"Arrows disabled"},z=a(n=>e.createElement(e.Fragment,null,e.createElement(b,{...n,onPrevious:a(r=>y("onPrevious")(r),"onPrevious"),onNext:a(r=>y("onNext")(r),"onNext"),onSelect:a((r,o)=>y("onSelect")(r,o),"onSelect")},e.createElement(t,{type:"previous"}),e.createElement(t,null,"1"),e.createElement(t,{current:!0},"2"),e.createElement(t,null,"3"),e.createElement(t,null,"4"),e.createElement(t,null,"5"),e.createElement(t,null,"6"),e.createElement(t,null,"7"),e.createElement(t,null,"8"),e.createElement(t,null,"9"),e.createElement(t,{type:"next"}))),"Buttons"),j={render:a(n=>{const r=a(({numOfItems:o,firstPage:i=1})=>{const[s,u]=h.useState(0),m=a(()=>{const c=Math.max(s-1,0);u(c),y("Select previous")(c+i)},"handlePrev"),d=a(()=>{const c=Math.min(s+1,o);u(c),y("Select next")(c+i)},"handleNext"),l=a((c,g)=>{u(g?.index),y("Select page")(g?.index+i)},"handleSelect");return e.createElement(b,{...n,a11yCurrentText:`Results Pagination - Page ${i+s}`,onPrevious:m,onNext:d,onSelect:l},e.createElement(t,{type:"previous",disabled:s===0}),Array.from(Array(o).keys()).map(c=>e.createElement(t,{key:`item-${c}`,current:c===s},i+c)),e.createElement(t,{type:"next",disabled:s>=o-1}))},"InteractivePaginationButtons");return e.createElement(e.Fragment,null,e.createElement("div",null,e.createElement(r,{numOfItems:15})),e.createElement("div",null,e.createElement(r,{numOfItems:5,firstPage:6})))},"render"),name:"Buttons interactive (click to change active page)"},U={render:a(n=>{const r=a(({numOfItems:o})=>{const[i,s]=h.useState(0),u=a(()=>s(Math.max(i-1,0)),"handlePrev"),m=a(()=>s(Math.min(i+1,o)),"handleNext"),d=a((l,c)=>s(parseInt(c?.value,10)-1),"handleSelect");return e.createElement(b,{...n,a11yCurrentText:`Results Pagination - Page ${i+1}`,onPrevious:u,onNext:m,onSelect:d,variant:"show-last"},e.createElement(t,{type:"previous",disabled:i===0}),Array.from(Array(o).keys()).map(l=>e.createElement(t,{key:`item-${l}`,current:l===i},l+1)),e.createElement(t,{type:"next",disabled:i>=o-1}))},"InteractivePagination");return e.createElement(e.Fragment,null,e.createElement(r,{numOfItems:15}))},"render"),name:"Variant `showLast` (interactive)"},G={render:a(n=>{const r=a(({numOfItems:o})=>{const[i,s]=h.useState(0),u=a(()=>s(Math.max(i-1,0)),"handlePrev"),m=a(()=>s(Math.min(i+1,o)),"handleNext"),d=a((l,c)=>s(parseInt(c?.value,10)-1),"handleSelect");return e.createElement(b,{...n,a11yCurrentText:`Results Pagination - Page ${i+1}`,onPrevious:u,onNext:m,onSelect:d,variant:"overflow"},e.createElement(t,{type:"previous",disabled:i===0}),Array.from(Array(o).keys()).map(l=>e.createElement(t,{key:`item-${l}`,href:"",current:l===i},l+1)),e.createElement(t,{type:"next",disabled:i>=o-1}))},"InteractivePagination");return e.createElement(e.Fragment,null,e.createElement("div",null,e.createElement(r,{numOfItems:5})),e.createElement("div",null,e.createElement(r,{numOfItems:9})),e.createElement("div",null,e.createElement(r,{numOfItems:10})),e.createElement("div",null,e.createElement(r,{numOfItems:15})))},"render"),name:"Variant `overflow` (interactive)"},K=a(n=>e.createElement(e.Fragment,null,e.createElement("h2",null,"Default fluid"),e.createElement(b,{...n,fluid:!0,onPrevious:y("onPaginationPrevious"),onNext:y("onPaginationNext"),onSelect:y("onPageSelect")},e.createElement(t,{type:"previous"}),e.createElement(t,null,"1"),e.createElement(t,{current:!0},"2"),e.createElement(t,null,"3"),e.createElement(t,null,"4"),e.createElement(t,null,"5"),e.createElement(t,null,"6"),e.createElement(t,null,"7"),e.createElement(t,null,"8"),e.createElement(t,null,"9"),e.createElement(t,null,"10"),e.createElement(t,null,"11"),e.createElement(t,null,"12"),e.createElement(t,null,"13"),e.createElement(t,{type:"next"})),e.createElement("h2",null,"Fluid with dots"),e.createElement(b,{...n,variant:"show-last",fluid:!0,onPrevious:y("onPaginationPrevious"),onNext:y("onPaginationNext"),onSelect:y("onPageSelect")},e.createElement(t,{type:"previous"}),e.createElement(t,null,"1"),e.createElement(t,{current:!0},"2"),e.createElement(t,null,"3"),e.createElement(t,null,"4"),e.createElement(t,null,"5"),e.createElement(t,null,"6"),e.createElement(t,null,"7"),e.createElement(t,null,"8"),e.createElement(t,null,"9"),e.createElement(t,null,"10"),e.createElement(t,null,"11"),e.createElement(t,null,"12"),e.createElement(t,null,"13"),e.createElement(t,{type:"next"}))),"Fluid"),X={render:a(n=>{const r=a(({numOfItems:o})=>{const[i,s]=h.useState(0),[u,m]=h.useState(!1),d=a(()=>s(Math.max(i-1,0)),"handlePrev"),l=a(()=>s(Math.min(i+1,o)),"handleNext"),c=a((g,{index:x})=>s(x),"handleSelect");return e.createElement(e.Fragment,null,e.createElement(Ie,{onClick:a(()=>m(!0),"onClick")},"Show pagination dialog"),e.createElement(fe,{open:u},e.createElement(b,{...n,a11yCurrentText:`Results Pagination - Page ${i+1}`,onPrevious:d,onNext:l,onSelect:c},e.createElement(t,{type:"previous",disabled:i===0}),Array.from(Array(o).keys()).map(g=>e.createElement(t,{key:`item-${g}`,current:g===i},g+1)),e.createElement(t,{type:"next",disabled:i>=o-1}))))},"InteractivePagination");return e.createElement(e.Fragment,null,e.createElement(r,{numOfItems:5}))},"render"),name:"Inside a dialog"},Y=a(n=>e.createElement(ve,{size:"large"},e.createElement(le,{className:"tab"},"Upload Process"),e.createElement(le,{className:"tab"},"Buyer View"),e.createElement(me,null,e.createElement("p",null,"Test content in first tab")),e.createElement(me,null,e.createElement(b,{...n,variant:"show-last",a11yPreviousText:"Previous page",a11yNextText:"Next page"},e.createElement(t,{type:"previous"}),e.createElement(t,null,"1"),e.createElement(t,{current:!0},"2"),e.createElement(t,null,"3"),e.createElement(t,{type:"next"})))),"InsideTabPanel"),lt=["BasicLinks","ArrowsDisabled","Buttons","ButtonsInteractiveClickToChangeActivePage","VariantShowLastInteractive","VariantOverflowInteractive","Fluid","InsideADialog","InsideTabPanel"];H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbayPagination {...args} a11yPreviousText="Previous page" a11yNextText="Next page" a11yCurrentText="Results Pagination - Page 1" onPrevious={e => action("onPrevious")(e)} onNext={e => action("onNext")(e)} onSelect={(e, props) => action("onSelect")(e, props)}>
                <Item type="previous" disabled href="https://www.ebay.com/sch/i.html?_from=R40&_nkw=iphone&_sacat=0&_pgn=5" />
                <Item href="https://www.ebay.com/sch/i.html?_from=R40&_nkw=iphone&_sacat=0&_pgn=1" current>
                    1
                </Item>
                <Item href="https://www.ebay.com/sch/i.html?_from=R40&_nkw=iphone&_sacat=0&_pgn=2">2</Item>
                <Item href="https://www.ebay.com/sch/i.html?_from=R40&_nkw=iphone&_sacat=0&_pgn=3">3</Item>
                <Item href="https://www.ebay.com/sch/i.html?_from=R40&_nkw=iphone&_sacat=0&_pgn=4">4</Item>
                <Item href="https://www.ebay.com/sch/i.html?_from=R40&_nkw=iphone&_sacat=0&_pgn=5">5</Item>
                <Item href="https://www.ebay.com/sch/i.html?_from=R40&_nkw=iphone&_sacat=0&_pgn=6">6</Item>
                <Item href="https://www.ebay.com/sch/i.html?_from=R40&_nkw=iphone&_sacat=0&_pgn=7">7</Item>
                <Item href="https://www.ebay.com/sch/i.html?_from=R40&_nkw=iphone&_sacat=0&_pgn=8">8</Item>
                <Item href="https://www.ebay.com/sch/i.html?_from=R40&_nkw=iphone&_sacat=0&_pgn=9">9</Item>
                <Item href="https://www.ebay.com/sch/i.html?_from=R40&_nkw=iphone&_sacat=0&_pgn=10" type="next" />
            </EbayPagination>
        </>,
  name: "Basic links"
}`,...H.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: args => <>
            <EbayPagination {...args}>
                <Item disabled type="previous" href="#" />
                <Item current type="page" href="#">
                    1
                </Item>
                <Item disabled type="next" href="#" />
            </EbayPagination>
        </>,
  name: "Arrows disabled"
}`,...F.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`args => <>
        <EbayPagination {...args} onPrevious={e => action("onPrevious")(e)} onNext={e => action("onNext")(e)} onSelect={(e, props) => action("onSelect")(e, props)}>
            <Item type="previous" />
            <Item>1</Item>
            <Item current>2</Item>
            <Item>3</Item>
            <Item>4</Item>
            <Item>5</Item>
            <Item>6</Item>
            <Item>7</Item>
            <Item>8</Item>
            <Item>9</Item>
            <Item type="next" />
        </EbayPagination>
    </>`,...z.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: args => {
    const InteractivePaginationButtons = ({
      numOfItems,
      firstPage = 1
    }) => {
      const [activeIndex, setActiveIndex] = useState(0);
      const handlePrev = () => {
        const newIndex = Math.max(activeIndex - 1, 0);
        setActiveIndex(newIndex);
        action("Select previous")(newIndex + firstPage);
      };
      const handleNext = () => {
        const newIndex = Math.min(activeIndex + 1, numOfItems);
        setActiveIndex(newIndex);
        action("Select next")(newIndex + firstPage);
      };
      const handleSelect: ComponentProps<typeof EbayPagination>["onSelect"] = (_, options) => {
        setActiveIndex(options?.index);
        action("Select page")(options?.index + firstPage);
      };
      return <EbayPagination {...args} a11yCurrentText={\`Results Pagination - Page \${firstPage + activeIndex}\`} onPrevious={handlePrev} onNext={handleNext} onSelect={handleSelect}>
                    <Item type="previous" disabled={activeIndex === 0} />
                    {Array.from(Array(numOfItems).keys()).map(i => <Item key={\`item-\${i}\`} current={i === activeIndex}>
                            {firstPage + i}
                        </Item>)}
                    <Item type="next" disabled={activeIndex >= numOfItems - 1} />
                </EbayPagination>;
    };
    return <>
                <div>
                    <InteractivePaginationButtons numOfItems={15} />
                </div>
                <div>
                    <InteractivePaginationButtons numOfItems={5} firstPage={6} />
                </div>
            </>;
  },
  name: "Buttons interactive (click to change active page)"
}`,...j.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: args => {
    const InteractivePagination = ({
      numOfItems
    }) => {
      const [activeIndex, setActiveIndex] = useState(0);
      const handlePrev = () => setActiveIndex(Math.max(activeIndex - 1, 0));
      const handleNext = () => setActiveIndex(Math.min(activeIndex + 1, numOfItems));
      const handleSelect: ComponentProps<typeof EbayPagination>["onSelect"] = (_, data) => setActiveIndex(parseInt(data?.value, 10) - 1);
      return <EbayPagination {...args} a11yCurrentText={\`Results Pagination - Page \${activeIndex + 1}\`} onPrevious={handlePrev} onNext={handleNext} onSelect={handleSelect} variant="show-last">
                    <Item type="previous" disabled={activeIndex === 0} />
                    {Array.from(Array(numOfItems).keys()).map(i => <Item key={\`item-\${i}\`} current={i === activeIndex}>
                            {i + 1}
                        </Item>)}
                    <Item type="next" disabled={activeIndex >= numOfItems - 1} />
                </EbayPagination>;
    };
    return <>
                <InteractivePagination numOfItems={15} />
            </>;
  },
  name: "Variant \`showLast\` (interactive)"
}`,...U.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: args => {
    const InteractivePagination = ({
      numOfItems
    }) => {
      const [activeIndex, setActiveIndex] = useState(0);
      const handlePrev = () => setActiveIndex(Math.max(activeIndex - 1, 0));
      const handleNext = () => setActiveIndex(Math.min(activeIndex + 1, numOfItems));
      const handleSelect: ComponentProps<typeof EbayPagination>["onSelect"] = (_, data) => setActiveIndex(parseInt(data?.value, 10) - 1);
      return <EbayPagination {...args} a11yCurrentText={\`Results Pagination - Page \${activeIndex + 1}\`} onPrevious={handlePrev} onNext={handleNext} onSelect={handleSelect} variant="overflow">
                    <Item type="previous" disabled={activeIndex === 0} />
                    {Array.from(Array(numOfItems).keys()).map(i => <Item key={\`item-\${i}\`} href="" current={i === activeIndex}>
                            {i + 1}
                        </Item>)}
                    <Item type="next" disabled={activeIndex >= numOfItems - 1} />
                </EbayPagination>;
    };
    return <>
                <div>
                    <InteractivePagination numOfItems={5} />
                </div>
                <div>
                    <InteractivePagination numOfItems={9} />
                </div>
                <div>
                    <InteractivePagination numOfItems={10} />
                </div>
                <div>
                    <InteractivePagination numOfItems={15} />
                </div>
            </>;
  },
  name: "Variant \`overflow\` (interactive)"
}`,...G.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`args => <>
        <h2>Default fluid</h2>
        <EbayPagination {...args} fluid onPrevious={action("onPaginationPrevious")} onNext={action("onPaginationNext")} onSelect={action("onPageSelect")}>
            <Item type="previous" />
            <Item>1</Item>
            <Item current>2</Item>
            <Item>3</Item>
            <Item>4</Item>
            <Item>5</Item>
            <Item>6</Item>
            <Item>7</Item>
            <Item>8</Item>
            <Item>9</Item>
            <Item>10</Item>
            <Item>11</Item>
            <Item>12</Item>
            <Item>13</Item>
            <Item type="next" />
        </EbayPagination>

        <h2>Fluid with dots</h2>
        <EbayPagination {...args} variant="show-last" fluid onPrevious={action("onPaginationPrevious")} onNext={action("onPaginationNext")} onSelect={action("onPageSelect")}>
            <Item type="previous" />
            <Item>1</Item>
            <Item current>2</Item>
            <Item>3</Item>
            <Item>4</Item>
            <Item>5</Item>
            <Item>6</Item>
            <Item>7</Item>
            <Item>8</Item>
            <Item>9</Item>
            <Item>10</Item>
            <Item>11</Item>
            <Item>12</Item>
            <Item>13</Item>
            <Item type="next" />
        </EbayPagination>
    </>`,...K.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: args => {
    const InteractivePagination = ({
      numOfItems
    }) => {
      const [activeIndex, setActiveIndex] = useState(0);
      const [open, setOpen] = useState(false);
      const handlePrev = () => setActiveIndex(Math.max(activeIndex - 1, 0));
      const handleNext = () => setActiveIndex(Math.min(activeIndex + 1, numOfItems));
      const handleSelect = (e, {
        index
      }) => setActiveIndex(index);
      return <>
                    <EbayButton onClick={() => setOpen(true)}>Show pagination dialog</EbayButton>
                    <EbayLightboxDialog open={open}>
                        <EbayPagination {...args} a11yCurrentText={\`Results Pagination - Page \${activeIndex + 1}\`} onPrevious={handlePrev} onNext={handleNext} onSelect={handleSelect}>
                            <Item type="previous" disabled={activeIndex === 0} />
                            {Array.from(Array(numOfItems).keys()).map(i => <Item key={\`item-\${i}\`} current={i === activeIndex}>
                                    {i + 1}
                                </Item>)}
                            <Item type="next" disabled={activeIndex >= numOfItems - 1} />
                        </EbayPagination>
                    </EbayLightboxDialog>
                </>;
    };
    return <>
                <InteractivePagination numOfItems={5} />
            </>;
  },
  name: "Inside a dialog"
}`,...X.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`args => {
  return <EbayTabs size="large">
            <EbayTab className="tab">Upload Process</EbayTab>
            <EbayTab className="tab">Buyer View</EbayTab>
            <EbayTabPanel>
                <p>Test content in first tab</p>
            </EbayTabPanel>
            <EbayTabPanel>
                <EbayPagination {...args} variant="show-last" a11yPreviousText="Previous page" a11yNextText="Next page">
                    <Item type="previous" />
                    <Item>1</Item>
                    <Item current>2</Item>
                    <Item>3</Item>
                    <Item type="next" />
                </EbayPagination>
            </EbayTabPanel>
        </EbayTabs>;
}`,...Y.parameters?.docs?.source}}};export{F as ArrowsDisabled,H as BasicLinks,z as Buttons,j as ButtonsInteractiveClickToChangeActivePage,K as Fluid,X as InsideADialog,Y as InsideTabPanel,G as VariantOverflowInteractive,U as VariantShowLastInteractive,lt as __namedExportsOrder,ct as default};
