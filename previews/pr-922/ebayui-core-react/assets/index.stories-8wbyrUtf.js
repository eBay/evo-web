import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-CK-NQdWx.js";import{t as r}from"./classnames-D09xBJOL.js";import{n as i,s as a}from"./utils-i55QFFMK.js";import{t as o}from"./component-utils-CjDOSXvC.js";import{n as s}from"./iframe-RezWaW69.js";import{t as c}from"./debounce-CHr8AS-U.js";import{n as l,t as u}from"./ebay-button-B_FEPJ7h.js";import{n as d,t as f}from"./ebay-lightbox-dialog-CzJDL8Ef.js";import{n as p,t as m}from"./ebay-icon-overflow-horizontal-24-DKt35K4k.js";import{c as h,o as g,t as _}from"./ebay-fake-menu-button-CAaX5Dyg.js";import{i as v,n as y,r as b,t as x}from"./ebay-icon-arrow-right-16-B1dAZ5yA.js";import{i as S,n as C,o as w,t as T}from"./ebay-tabs-C_gjSv2P.js";function E(e,t,n=e,r=null){let i=r===`show-last`||r===`overflow`&&e>9,a=r===`overflow`&&e>9,o=Math.min(n,e),s=Math.max(0,t-Math.ceil((o-1)/2)),c=o<4?t:Math.max(0,t-Math.floor((o-1)/2)),l=(i?c:s)+o,u=l>=e,d=t<=4,f=(t,n)=>{let r=k(e,t,n);return o>2?(r[n-2]=`dots`,r[n-1]=`hidden`,r[e-1]=`visible`):o>1&&(r[n-1]=`dots`),r};return u&&e<=9?k(e,e-o):i?a?((n,r)=>{if(d)return f(0,r);if(u){let t=k(e,e-7,e);return t[0]=`visible`,t[1]=`dots`,t}let i=k(e,t-2,t+2+1);return i[0]=`visible`,i[1]=d?`visible`:`dots`,i[e-2]=`dots`,i[e-1]=`visible`,i})(c,l):f(c,l):k(e,s,l)}function D(e,t,n,r=`show-range`){if(e===-1)return[];let i=r===`overflow`?9:O(Math.min(n,t),1,9);return E(n,e-1,i,r)}function O(e,t,n){return e<=t?t:e>=n?n:e}function k(e,t,n){return Array(e).fill(`hidden`).fill(`visible`,t,n)}function A(e){if(!e)return 0;e.style.width=`100vw`;let t=e.offsetWidth;return e.style.width=null,t}function j(){return(j=t((()=>{})))()}var M,N,P;function ee(){return(ee=t((()=>{M=e(r()),N=e(n()),o(),_(),p(),j(),P=({id:e=`ebay-pagination`,a11yHeadingTag:t=`h2`,className:n,a11yCurrentText:r=`Results Pagination - Page 1`,a11yPreviousText:a=`Previous page`,a11yNextText:o=`Next page`,variant:s=`show-range`,fluid:l=!1,onPrevious:u=()=>{},onNext:d=()=>{},onSelect:f=()=>{},children:p,..._})=>{let v=(0,N.useRef)(null),y=(0,N.useRef)([]);y.current=N.Children.map(p,N.createRef);let b=i(p,({props:e})=>e.type===void 0||e.type===`page`).length,x=()=>{let e=y.current[0]?.current?.offsetWidth,t=y.current.slice(1).find(e=>e.current?.offsetWidth)?.current?.offsetWidth;return t?Math.floor((A(v.current)-e*2)/t):0},[S,C]=(0,N.useState)([]),[w,T]=(0,N.useState)(0),E=e=>{let t=e||y.current.findIndex(e=>e.current?.getAttribute(`aria-current`)===`page`),n=D(t,x(),b,s);T(t),C([`hidden`,...n])};(0,N.useEffect)(()=>{let e=c(E,16);E();let t=()=>e();window.addEventListener(`resize`,t);let n=null;return v.current&&typeof IntersectionObserver<`u`&&(n=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&E()})},{threshold:0,root:null}),n.observe(v.current)),()=>{window.removeEventListener(`resize`,t),n?.disconnect()}},[p]);let O=t=>{let n=0,r=[],i=[],c=[],l=S.indexOf(`dots`),_=S.lastIndexOf(`dots`);return N.Children.map(p,(p,v)=>{let{type:b=`page`,current:x,disabled:C,href:T,children:D}=p.props,O=S[v]===`dots`,k=`${e}-item-${v}`,A=S[v]===`hidden`,j={current:x,disabled:C,href:T,type:O&&b===`page`?`separator`:b,children:O?N.createElement(m,{focusable:!1}):D,pageIndex:b===`page`?n++:void 0,key:k,hide:A,onPrevious:u,onNext:d,onSelect:f,a11yPreviousText:a,a11yNextText:o,ref:y.current[v]};if((A||O)&&b===`page`){let e=N.createElement(g,{key:k,href:T,onClick:e=>{T||e.preventDefault();let t=e.currentTarget;f(e,{value:t?.innerText||``,index:n}),E(Number(t?.innerText))}},D);l===_&&c.push(e),w-2>l&&v<w&&r.push(e),w+2<_&&v>w&&i.push(e)}if(t===`page`&&O&&s===`overflow`){let e=c;return l!==_&&(e=v===2?r:i),N.createElement(`li`,{key:k},N.createElement(`span`,{className:`pagination__item`,role:`separator`},N.createElement(h,{a11yText:`Menu`,borderless:!0,variant:`overflow`,noToggleIcon:!0},e)))}return t===b?(0,N.cloneElement)(p,j):null})},k=`${e}-pagination-heading`,j=t;return N.createElement(`nav`,{..._,role:`navigation`,className:(0,M.default)(n,`pagination`,{"pagination--fluid":l}),"aria-labelledby":k,ref:v},N.createElement(`span`,{"aria-live":`polite`,role:`status`},N.createElement(j,{className:`clipped`,id:k},r)),O(`previous`),N.createElement(`ol`,{className:`pagination__items`},O(`page`)),O(`next`))};try{P.displayName=`pagination`,P.__docgenInfo={description:``,displayName:`pagination`,filePath:`/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-pagination/pagination.tsx`,methods:[],props:{a11yHeadingTag:{defaultValue:{value:`h2`},declarations:[{fileName:`ebayui-core-react/src/ebay-pagination/pagination.tsx`,name:`TypeLiteral`}],description:``,name:`a11yHeadingTag`,required:!1,tags:{},type:{name:`keyof IntrinsicElements | undefined`}},a11yPreviousText:{defaultValue:{value:`Previous page`},declarations:[{fileName:`ebayui-core-react/src/ebay-pagination/pagination.tsx`,name:`TypeLiteral`}],description:``,name:`a11yPreviousText`,required:!1,tags:{},type:{name:`string | undefined`}},a11yNextText:{defaultValue:{value:`Next page`},declarations:[{fileName:`ebayui-core-react/src/ebay-pagination/pagination.tsx`,name:`TypeLiteral`}],description:``,name:`a11yNextText`,required:!1,tags:{},type:{name:`string | undefined`}},a11yCurrentText:{defaultValue:{value:`Results Pagination - Page 1`},declarations:[{fileName:`ebayui-core-react/src/ebay-pagination/pagination.tsx`,name:`TypeLiteral`}],description:``,name:`a11yCurrentText`,required:!1,tags:{},type:{name:`string | undefined`}},onPrevious:{defaultValue:{value:`() => {}`},declarations:[{fileName:`ebayui-core-react/src/ebay-pagination/pagination.tsx`,name:`TypeLiteral`}],description:``,name:`onPrevious`,required:!1,tags:{},type:{name:`EbayEventHandler | undefined`}},onNext:{defaultValue:{value:`() => {}`},declarations:[{fileName:`ebayui-core-react/src/ebay-pagination/pagination.tsx`,name:`TypeLiteral`}],description:``,name:`onNext`,required:!1,tags:{},type:{name:`EbayEventHandler | undefined`}},onSelect:{defaultValue:{value:`() => {}`},declarations:[{fileName:`ebayui-core-react/src/ebay-pagination/pagination.tsx`,name:`TypeLiteral`}],description:``,name:`onSelect`,required:!1,tags:{},type:{name:`EbayEventHandler<{ value: string; index: number; }> | undefined`}},variant:{defaultValue:{value:`show-range`},declarations:[{fileName:`ebayui-core-react/src/ebay-pagination/pagination.tsx`,name:`TypeLiteral`}],description:``,name:`variant`,required:!1,tags:{},type:{name:`PaginationVariant | undefined`}},fluid:{defaultValue:{value:`false`},declarations:[{fileName:`ebayui-core-react/src/ebay-pagination/pagination.tsx`,name:`TypeLiteral`}],description:``,name:`fluid`,required:!1,tags:{},type:{name:`boolean | undefined`}}},tags:{}}}catch{}})))()}var F,I,L,R;function z(){return(z=t((()=>{F=e(n()),o(),I=e(r()),v(),y(),L=({pageIndex:e=0,key:t,current:n,disabled:r,type:i=`page`,href:a,hide:o,children:s,a11yPreviousText:c=`Previous page`,a11yNextText:l=`Next page`,onSelect:u,onNext:d,onPrevious:f,className:p,style:m,forwardedRef:h,...g})=>{let _=t=>{u(t,{value:t.currentTarget?.innerText||``,index:e})},v=e=>{if(e.currentTarget.getAttribute(`aria-disabled`)){e.preventDefault();return}d(e)},y=e=>{if(e.currentTarget.getAttribute(`aria-disabled`)){e.preventDefault();return}f(e)},S=!!a,C=S?`a`:`button`,w=S?`icon-link`:`icon-btn`,T={...m,minWidth:`40px`};switch(i){case`previous`:return F.createElement(C,{...g,ref:h,"aria-disabled":r?`true`:void 0,"aria-label":c,href:r?void 0:a,className:(0,I.default)(p,w,`pagination__previous`),style:T,onClick:y},F.createElement(b,null));case`next`:return F.createElement(C,{...g,ref:h,"aria-disabled":r?`true`:void 0,"aria-label":l,href:r?void 0:a,className:(0,I.default)(p,w,`pagination__next`),style:T,onClick:v},F.createElement(x,null));case`separator`:return F.createElement(`span`,{key:t,style:m,className:(0,I.default)(p,`pagination__item`),ref:h,role:`separator`},s);default:return F.createElement(`li`,{...g,hidden:o},F.createElement(C,{ref:h,"aria-current":n?`page`:void 0,href:a,className:(0,I.default)(p,`pagination__item`),style:m,key:t,onClick:_},s))}},R=a(L);try{L.displayName=`EbayPaginationItem`,L.__docgenInfo={description:``,displayName:`EbayPaginationItem`,filePath:`/home/runner/work/evo-web/evo-web/packages/ebayui-core-react/src/ebay-pagination/pagination-item.tsx`,methods:[],props:{pageIndex:{defaultValue:{value:`0`},declarations:[{fileName:`ebayui-core-react/src/ebay-pagination/pagination-item.tsx`,name:`TypeLiteral`}],description:``,name:`pageIndex`,required:!1,tags:{},type:{name:`number | undefined`}},current:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-pagination/pagination-item.tsx`,name:`TypeLiteral`}],description:``,name:`current`,required:!1,tags:{},type:{name:`boolean | undefined`}},hide:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-pagination/pagination-item.tsx`,name:`TypeLiteral`}],description:``,name:`hide`,required:!1,tags:{},type:{name:`boolean | undefined`}},a11yPreviousText:{defaultValue:{value:`Previous page`},declarations:[{fileName:`ebayui-core-react/src/ebay-pagination/pagination-item.tsx`,name:`TypeLiteral`}],description:``,name:`a11yPreviousText`,required:!1,tags:{},type:{name:`string | undefined`}},a11yNextText:{defaultValue:{value:`Next page`},declarations:[{fileName:`ebayui-core-react/src/ebay-pagination/pagination-item.tsx`,name:`TypeLiteral`}],description:``,name:`a11yNextText`,required:!1,tags:{},type:{name:`string | undefined`}},onPrevious:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-pagination/pagination-item.tsx`,name:`TypeLiteral`}],description:``,name:`onPrevious`,required:!1,tags:{},type:{name:`EbayEventHandler | undefined`}},onNext:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-pagination/pagination-item.tsx`,name:`TypeLiteral`}],description:``,name:`onNext`,required:!1,tags:{},type:{name:`EbayEventHandler | undefined`}},onSelect:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-pagination/pagination-item.tsx`,name:`TypeLiteral`}],description:``,name:`onSelect`,required:!1,tags:{},type:{name:`EbayEventHandler<{ value: string; index: number; }> | undefined`}},forwardedRef:{defaultValue:null,declarations:[{fileName:`ebayui-core-react/src/ebay-pagination/pagination-item.tsx`,name:`TypeLiteral`}],description:``,name:`forwardedRef`,required:!1,tags:{},type:{name:`RefObject<HTMLAnchorElement & HTMLButtonElement> | undefined`}}},tags:{}}}catch{}})))()}function B(){return(B=t((()=>{ee(),z()})))()}var V,H,U,W,G,K,q,J,Y,X,Z,Q,$,te;function ne(){return(ne=t((()=>{V=e(n()),u(),f(),T(),B(),H=s(),{action:U}=__STORYBOOK_MODULE_ACTIONS__,W={title:`navigation & disclosure/ebay-pagination`,tags:[`autodocs`],parameters:{docs:{description:{component:`## Import

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
\`\`\``}}},argTypes:{a11yPreviousText:{description:`a11y text for previous arrow button`,control:`text`},a11yNextText:{description:`a11y text for next arrow button`,control:`text`},a11yCurrentText:{description:`Description for the current page (e.g. Results of Page 1)`,control:`text`},a11yHeadingTag:{description:"Heading tag for pagination (default: `h2`)",control:`text`,table:{defaultValue:{summary:`h2`}}},variant:{description:"Either `show-last`, or `show-range` (default). If show-last then will show the last page always and will put `…` between the last visible range and the last page. `…` and the last page will take up two items in the range. `…` will be hidden when the range to the last item is fully visible.",options:[`show-last`,`show-range`,`overflow`],control:{type:`select`}},fluid:{description:`Will fill all available horizontal space. Horizontal space will be distributed around each item as necessary.`,control:`boolean`},disabled:{description:`Previous/next button is disabled or not`,control:`boolean`},href:{description:`for link that looks like a menu-item; omitting the href will switch to a button`,control:`text`},current:{description:`the current page`,control:`boolean`},type:{description:`"previous", "next" or "page"(default). To specify if the information entered is for the previous or next arrow button or a page. If the \`type='previous`,control:`text`},onPrevious:{description:`Called when previous button is clicked`,action:`onPrevious`,table:{category:`Events`}},onNext:{description:`Called when next button is clicked`,action:`onNext`,table:{category:`Events`}},onSelect:{description:`Called when a page item is selected`,action:`onSelect`,table:{category:`Events`}}}},G={render:e=>(0,H.jsx)(H.Fragment,{children:(0,H.jsxs)(P,{...e,a11yPreviousText:`Previous page`,a11yNextText:`Next page`,a11yCurrentText:`Results Pagination - Page 1`,onPrevious:e=>U(`onPrevious`)(e),onNext:e=>U(`onNext`)(e),onSelect:(e,t)=>U(`onSelect`)(e,t),children:[(0,H.jsx)(R,{type:`previous`,disabled:!0,href:`https://www.ebay.com/sch/i.html?_from=R40&_nkw=iphone&_sacat=0&_pgn=5`}),(0,H.jsx)(R,{href:`https://www.ebay.com/sch/i.html?_from=R40&_nkw=iphone&_sacat=0&_pgn=1`,current:!0,children:`1`}),(0,H.jsx)(R,{href:`https://www.ebay.com/sch/i.html?_from=R40&_nkw=iphone&_sacat=0&_pgn=2`,children:`2`}),(0,H.jsx)(R,{href:`https://www.ebay.com/sch/i.html?_from=R40&_nkw=iphone&_sacat=0&_pgn=3`,children:`3`}),(0,H.jsx)(R,{href:`https://www.ebay.com/sch/i.html?_from=R40&_nkw=iphone&_sacat=0&_pgn=4`,children:`4`}),(0,H.jsx)(R,{href:`https://www.ebay.com/sch/i.html?_from=R40&_nkw=iphone&_sacat=0&_pgn=5`,children:`5`}),(0,H.jsx)(R,{href:`https://www.ebay.com/sch/i.html?_from=R40&_nkw=iphone&_sacat=0&_pgn=6`,children:`6`}),(0,H.jsx)(R,{href:`https://www.ebay.com/sch/i.html?_from=R40&_nkw=iphone&_sacat=0&_pgn=7`,children:`7`}),(0,H.jsx)(R,{href:`https://www.ebay.com/sch/i.html?_from=R40&_nkw=iphone&_sacat=0&_pgn=8`,children:`8`}),(0,H.jsx)(R,{href:`https://www.ebay.com/sch/i.html?_from=R40&_nkw=iphone&_sacat=0&_pgn=9`,children:`9`}),(0,H.jsx)(R,{href:`https://www.ebay.com/sch/i.html?_from=R40&_nkw=iphone&_sacat=0&_pgn=10`,type:`next`})]})}),name:`Basic links`},K={render:e=>(0,H.jsx)(H.Fragment,{children:(0,H.jsxs)(P,{...e,children:[(0,H.jsx)(R,{disabled:!0,type:`previous`,href:`#`}),(0,H.jsx)(R,{current:!0,type:`page`,href:`#`,children:`1`}),(0,H.jsx)(R,{disabled:!0,type:`next`,href:`#`})]})}),name:`Arrows disabled`},q=e=>(0,H.jsx)(H.Fragment,{children:(0,H.jsxs)(P,{...e,onPrevious:e=>U(`onPrevious`)(e),onNext:e=>U(`onNext`)(e),onSelect:(e,t)=>U(`onSelect`)(e,t),children:[(0,H.jsx)(R,{type:`previous`}),(0,H.jsx)(R,{children:`1`}),(0,H.jsx)(R,{current:!0,children:`2`}),(0,H.jsx)(R,{children:`3`}),(0,H.jsx)(R,{children:`4`}),(0,H.jsx)(R,{children:`5`}),(0,H.jsx)(R,{children:`6`}),(0,H.jsx)(R,{children:`7`}),(0,H.jsx)(R,{children:`8`}),(0,H.jsx)(R,{children:`9`}),(0,H.jsx)(R,{type:`next`})]})}),J={render:e=>{let t=({numOfItems:t,firstPage:n=1})=>{let[r,i]=(0,V.useState)(0),a=()=>{let e=Math.max(r-1,0);i(e),U(`Select previous`)(e+n)},o=()=>{let e=Math.min(r+1,t);i(e),U(`Select next`)(e+n)},s=(e,t)=>{i(t?.index),U(`Select page`)(t?.index+n)};return(0,H.jsxs)(P,{...e,a11yCurrentText:`Results Pagination - Page ${n+r}`,onPrevious:a,onNext:o,onSelect:s,children:[(0,H.jsx)(R,{type:`previous`,disabled:r===0}),Array.from(Array(t).keys()).map(e=>(0,H.jsx)(R,{current:e===r,children:n+e},`item-${e}`)),(0,H.jsx)(R,{type:`next`,disabled:r>=t-1})]})};return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`div`,{children:(0,H.jsx)(t,{numOfItems:15})}),(0,H.jsx)(`div`,{children:(0,H.jsx)(t,{numOfItems:5,firstPage:6})})]})},name:`Buttons interactive (click to change active page)`},Y={render:e=>(0,H.jsx)(H.Fragment,{children:(0,H.jsx)(({numOfItems:t})=>{let[n,r]=(0,V.useState)(0),i=()=>r(Math.max(n-1,0)),a=()=>r(Math.min(n+1,t)),o=(e,t)=>r(parseInt(t?.value,10)-1);return(0,H.jsxs)(P,{...e,a11yCurrentText:`Results Pagination - Page ${n+1}`,onPrevious:i,onNext:a,onSelect:o,variant:`show-last`,children:[(0,H.jsx)(R,{type:`previous`,disabled:n===0}),Array.from(Array(t).keys()).map(e=>(0,H.jsx)(R,{current:e===n,children:e+1},`item-${e}`)),(0,H.jsx)(R,{type:`next`,disabled:n>=t-1})]})},{numOfItems:15})}),name:"Variant `showLast` (interactive)"},X={render:e=>{let t=({numOfItems:t})=>{let[n,r]=(0,V.useState)(0),i=()=>r(Math.max(n-1,0)),a=()=>r(Math.min(n+1,t)),o=(e,t)=>r(parseInt(t?.value,10)-1);return(0,H.jsxs)(P,{...e,a11yCurrentText:`Results Pagination - Page ${n+1}`,onPrevious:i,onNext:a,onSelect:o,variant:`overflow`,children:[(0,H.jsx)(R,{type:`previous`,disabled:n===0}),Array.from(Array(t).keys()).map(e=>(0,H.jsx)(R,{href:``,current:e===n,children:e+1},`item-${e}`)),(0,H.jsx)(R,{type:`next`,disabled:n>=t-1})]})};return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`div`,{children:(0,H.jsx)(t,{numOfItems:5})}),(0,H.jsx)(`div`,{children:(0,H.jsx)(t,{numOfItems:9})}),(0,H.jsx)(`div`,{children:(0,H.jsx)(t,{numOfItems:10})}),(0,H.jsx)(`div`,{children:(0,H.jsx)(t,{numOfItems:15})})]})},name:"Variant `overflow` (interactive)"},Z=e=>(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`h2`,{children:`Default fluid`}),(0,H.jsxs)(P,{...e,fluid:!0,onPrevious:U(`onPaginationPrevious`),onNext:U(`onPaginationNext`),onSelect:U(`onPageSelect`),children:[(0,H.jsx)(R,{type:`previous`}),(0,H.jsx)(R,{children:`1`}),(0,H.jsx)(R,{current:!0,children:`2`}),(0,H.jsx)(R,{children:`3`}),(0,H.jsx)(R,{children:`4`}),(0,H.jsx)(R,{children:`5`}),(0,H.jsx)(R,{children:`6`}),(0,H.jsx)(R,{children:`7`}),(0,H.jsx)(R,{children:`8`}),(0,H.jsx)(R,{children:`9`}),(0,H.jsx)(R,{children:`10`}),(0,H.jsx)(R,{children:`11`}),(0,H.jsx)(R,{children:`12`}),(0,H.jsx)(R,{children:`13`}),(0,H.jsx)(R,{type:`next`})]}),(0,H.jsx)(`h2`,{children:`Fluid with dots`}),(0,H.jsxs)(P,{...e,variant:`show-last`,fluid:!0,onPrevious:U(`onPaginationPrevious`),onNext:U(`onPaginationNext`),onSelect:U(`onPageSelect`),children:[(0,H.jsx)(R,{type:`previous`}),(0,H.jsx)(R,{children:`1`}),(0,H.jsx)(R,{current:!0,children:`2`}),(0,H.jsx)(R,{children:`3`}),(0,H.jsx)(R,{children:`4`}),(0,H.jsx)(R,{children:`5`}),(0,H.jsx)(R,{children:`6`}),(0,H.jsx)(R,{children:`7`}),(0,H.jsx)(R,{children:`8`}),(0,H.jsx)(R,{children:`9`}),(0,H.jsx)(R,{children:`10`}),(0,H.jsx)(R,{children:`11`}),(0,H.jsx)(R,{children:`12`}),(0,H.jsx)(R,{children:`13`}),(0,H.jsx)(R,{type:`next`})]})]}),Q={render:e=>(0,H.jsx)(H.Fragment,{children:(0,H.jsx)(({numOfItems:t})=>{let[n,r]=(0,V.useState)(0),[i,a]=(0,V.useState)(!1),o=()=>r(Math.max(n-1,0)),s=()=>r(Math.min(n+1,t)),c=(e,{index:t})=>r(t);return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(l,{onClick:()=>a(!0),children:`Show pagination dialog`}),(0,H.jsx)(d,{open:i,children:(0,H.jsxs)(P,{...e,a11yCurrentText:`Results Pagination - Page ${n+1}`,onPrevious:o,onNext:s,onSelect:c,children:[(0,H.jsx)(R,{type:`previous`,disabled:n===0}),Array.from(Array(t).keys()).map(e=>(0,H.jsx)(R,{current:e===n,children:e+1},`item-${e}`)),(0,H.jsx)(R,{type:`next`,disabled:n>=t-1})]})})]})},{numOfItems:5})}),name:`Inside a dialog`},$=e=>(0,H.jsxs)(C,{size:`large`,children:[(0,H.jsx)(w,{className:`tab`,children:`Upload Process`}),(0,H.jsx)(w,{className:`tab`,children:`Buyer View`}),(0,H.jsx)(S,{children:(0,H.jsx)(`p`,{children:`Test content in first tab`})}),(0,H.jsx)(S,{children:(0,H.jsxs)(P,{...e,variant:`show-last`,a11yPreviousText:`Previous page`,a11yNextText:`Next page`,children:[(0,H.jsx)(R,{type:`previous`}),(0,H.jsx)(R,{children:`1`}),(0,H.jsx)(R,{current:!0,children:`2`}),(0,H.jsx)(R,{children:`3`}),(0,H.jsx)(R,{type:`next`})]})})]}),te=[`BasicLinks`,`ArrowsDisabled`,`Buttons`,`ButtonsInteractiveClickToChangeActivePage`,`VariantShowLastInteractive`,`VariantOverflowInteractive`,`Fluid`,`InsideADialog`,`InsideTabPanel`],G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`args => <>
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
    </>`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`args => <>
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
    </>`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`args => {
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
}`,...$.parameters?.docs?.source}}}})))()}ne();export{K as ArrowsDisabled,G as BasicLinks,q as Buttons,J as ButtonsInteractiveClickToChangeActivePage,Z as Fluid,Q as InsideADialog,$ as InsideTabPanel,X as VariantOverflowInteractive,Y as VariantShowLastInteractive,te as __namedExportsOrder,W as default};