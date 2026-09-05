import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{n}from"./utils-C7m-hPxw.js";import{c as r,h as i,l as a,n as o,p as s,r as c,s as l,t as u,u as d}from"./registry-95LfxIAE.js";import{t as ee}from"./icon-yrMh4EQf.js";import{t as f}from"./render-tag-hXgrwudm.js";import{t as p}from"./dynamic-tag-CCbAf3a9.js";import{t as te}from"./of-fallback-rY0Dkoru.js";import{t as m}from"./attr-tag--AgZ8oJt.js";import{t as h}from"./const-element-BfQ4jh6r.js";import{c as ne,l as re}from"./event-utils-Bu5IuP5L.js";import{n as ie,t as ae}from"./mjs-DbvLvmub.js";import{n as oe,r as se}from"./dom-C2KCbcve.js";import{n as ce,t as le}from"./ebay-chevron-left-16-icon-CuU3iCTZ.js";import{t as ue}from"./preserve-tag-BNM9CJdW.js";import{n as de,t as fe}from"./ebay-chevron-right-16-icon-D6SdlymN.js";import{i as pe,n as me,r as he,t as ge}from"./ebay-pause-24-icon-DpG8DA25.js";import{n as _e,t as ve}from"./ebay-textbox-4Woy562k.js";function ye(){return(ye=t((()=>{})))()}function be(){return(be=t((()=>{ee(),ye()})))()}function xe(e,t){let n;return r(),s;function r(){e.addEventListener(`scroll`,i,Se)}function i(){o(),n=setTimeout(a,640)}function a(){t(),r()}function o(){e.removeEventListener(`scroll`,i,Se)}function s(){o(),clearTimeout(n)}}var Se;function Ce(){return(Ce=t((()=>{Se={passive:!0}})))()}function we(e,t){let n,r,i;return(function a(){let{scrollLeft:o}=e;if(i!==o){i=o,n=setTimeout(()=>{r=requestAnimationFrame(a)},90);return}t(i)})(),()=>{clearTimeout(n),cancelAnimationFrame(r)}}function Te(e,t,n){if(De)return e.scrollTo({left:t}),we(e,n);let r,i,a=requestAnimationFrame(r=>{let{scrollLeft:i}=e,s=t-i;(function c(l){let u=l-r;if(u>450)return e.scrollLeft=t,o(),n();e.scrollLeft=Ee(u/450)*s+i,a=requestAnimationFrame(c)})(r)});return e.addEventListener(`touchstart`,s),o;function o(){cancelAnimationFrame(a),r===void 0?l():(i&&i(),u())}function s(){o(),r=e.scrollLeft,e.addEventListener(`touchend`,c)}function c(){u(),r===e.scrollLeft&&(i=Te(e,t,n))}function l(){e.removeEventListener(`touchstart`,s)}function u(){e.removeEventListener(`touchend`,c)}}function Ee(e){return e<.5?2*e*e:-1+(4-2*e)*e}var De;function Oe(){return(Oe=t((()=>{De=typeof window<`u`&&`scrollBehavior`in document.documentElement.style})))()}function ke(e){return getComputedStyle(e).overflowX!==`visible`}function Ae(e,t){let n=0,r=e.firstElementChild;for(;r;)t(r,n++),r=r.nextElementSibling}var g,_,je;function Me(){return(Me=t((()=>{ie(),ne(),r(),Ce(),Oe(),oe(),g=-1,_=1,je=class extends Marko.Component{cleanupAsync(){clearTimeout(this.autoplayTimeout),cancelAnimationFrame(this.renderFrame),cancelAnimationFrame(this.focusFrame),this.cancelScrollTransition&&=(this.cancelScrollTransition(),void 0)}emitUpdate(){let{config:e,items:t}=this.state;e.scrollTransitioning=!1,this.emit(`move`,{visibleIndexes:t.filter(({fullyVisible:e})=>e).map(e=>t.indexOf(e))})}handleScroll(e){let{state:t}=this,{config:n,items:r,gap:i}=t,a;if(e>=this.getMaxOffset(t)-i)a=r.length-1;else{let n=t.itemsPerSlide||1,i=r.length,o=0,s=Math.ceil(i/n)-1;for(;s-o>1;){let t=Math.floor((o+s)/2);e>r[t*n].left?o=t:s=t}let c=Math.abs(e-r[o*n].left),l=Math.abs(e-r[s*n].left);a=this.normalizeIndex(t,(c>l?s:o)*n)}t.index!==a&&(this.skipScrolling=!0,n.preserveItems=!0,this.setState(`index`,a),this.emit(`scroll`,{index:a}))}getOffset(e){let{items:t,index:n}=e;return t.length&&Math.min(t[n].left,this.getMaxOffset(e))||0}getMaxOffset({items:e,slideWidth:t}){return e.length&&Math.max(e[e.length-1].right-t,0)||0}getSlide({index:e,itemsPerSlide:t},n=e){if(t)return Math.ceil(n/t)}normalizeIndex({items:e,itemsPerSlide:t},n){if(n>0){let r=n;return r%=e.length||1,r-=r%(t||1),r=Math.abs(r),r}return 0}isAnimating(e){let{items:t,index:n}=e;if(!t.length)return!1;let r=t[n];return r.left===void 0||r.right===void 0}getNextIndex(e,t){let{index:n,items:r,slideWidth:i,itemsPerSlide:a}=e,o=n,s;if(t===g&&o===0)o=r.length-1;else{do s=r[o+=t];while(s&&s.fullyVisible);if(t===g&&!a){let e=s.right-i;do s=r[--o];while(s&&s.left>=e);o+=1}}return this.normalizeIndex(e,o)}getTemplateData(e){let{config:t,autoplayInterval:n,items:r,itemsPerSlide:i,slideWidth:a,gap:o}=e,s=t.offsetOverride!==void 0,c=r.length<=i;e.index=this.normalizeIndex(e,e.index);let l=this.getOffset(e),u=c||!n&&l===0,d=c||!n&&l===this.getMaxOffset(e),ee=this.isAnimating(e)?e.bothControlsDisabled:u&&d,f,p,te;if(i){let t=i+e.peek;f=this.getSlide(e),p=`calc(${100/t}% - ${(t-1)*o/t}px)`,te=this.getSlide(e,r.length)}return r.forEach((e,t)=>{let{style:n,transform:i}=e,s=t!==r.length-1&&`${o}px`;typeof n==`string`?(e.style=`${n};flex-basis:${p};margin-right:${s};`,i&&(e.style+=`transform:${i}`)):e.style=Object.assign({},n,{width:p,"margin-right":s,transform:i}),e.fullyVisible=e.left===void 0||e.left-l>=-.01&&e.right-l<=a+.01}),Object.assign({},e,{items:r,slide:f,offset:s?t.offsetOverride:l,disableTransition:s,totalSlides:te,prevControlDisabled:u,nextControlDisabled:d,bothControlsDisabled:ee})}move(e){let{state:t}=this,{index:n,items:r,itemsPerSlide:i,autoplayInterval:a,slideWidth:o,gap:s,peek:c,config:l}=t,u=this.getNextIndex(t,e),d;if(l.preserveItems=!0,this.isMoving=!0,this.skipScrolling=!1,a){if(e===_&&u<n){d=-o-s;for(let e=Math.ceil(i+c);e--;){let n=r[r.length-e-1];n.transform=`translateX(${(this.getMaxOffset(t)+o+s)*-1}px)`}}else if(e===g&&u>n){d=this.getMaxOffset(t)+o+s;for(let e=Math.ceil(i+c);e--;){let n=r[e];n.transform=`translateX(${this.getMaxOffset(t)+o+s}px)`}}l.offsetOverride=d}return this.setState(`index`,u),this.once(`move`,()=>{this.isMoving=!1,d!==void 0&&r.forEach(e=>{e.transform=void 0})}),u}handleMove(e,t){if(this.isMoving)return;let{state:n}=this,r=this.move(e),i=this.getSlide(n,r);this.emit(`slide`,{slide:i+1,originalEvent:t}),this.emit(`${e===1?`next`:`previous`}`,{originalEvent:t})}handleStartInteraction(){this.setState(`interacting`,!0)}handleEndInteraction(){clearTimeout(this.interactionEndTimeout),this.isMoving?this.state.interacting&&(this.interactionEndTimeout=setTimeout(()=>{this.handleEndInteraction()},100)):this.setState(`interacting`,!1)}togglePlay(e){let{state:{config:t,paused:n}}=this;t.preserveItems=!0,this.setState(`paused`,!n),n&&!this.isMoving&&this.move(_),this.emit(`${n?`play`:`pause`}`,{originalEvent:e})}onInput(e){let t=parseInt(e.gap,10),n={htmlAttributes:a(e,[`class`,`style`,`index`,`type`,`slide`,`gap`,`autoplay`,`paused`,`itemsPerSlide`,`a11yPreviousText`,`a11yNextText`,`a11yPlayText`,`a11yPauseText`,`item`,`hiddenScrollbar`]),classes:[`carousel`,e.hiddenScrollbar&&`carousel--hidden-scrollbar`,e.class],style:e.style,config:{},gap:isNaN(t)?16:t,index:parseInt(e.index,10)||0,itemsPerSlide:parseFloat(e.itemsPerSlide)||0,a11yPreviousText:e.a11yPreviousText||`Previous Slide`,a11yNextText:e.a11yNextText||`Next Slide`,a11yPauseText:e.a11yPauseText||`Pause`,a11yPlayText:e.a11yPlayText||`Play`,items:[],slideWidth:0,autoplayInterval:0,paused:!1,peek:0,interacting:!1,bothControlsDisabled:!1},r=[`class`,`style`,`key`],{itemsPerSlide:i}=n;if(i&&(n.peek=i%1,n.itemsPerSlide=i-n.peek,n.classes.push(`carousel--slides`),!n.peek&&!e.autoplay&&!e.noPeek&&(n.peek=.1),n.peek&&n.classes.push(`carousel--peek`),e.autoplay)){let t=e.item?.length<=i;n.autoplayInterval=parseInt(e.autoplay,10)||4e3,n.classes.push(`carousel__autoplay`),n.paused=!!(t||e.paused),n.interacting=!1}n.items=(e.item||[]).map((e,t)=>{let i=!n.itemsPerSlide||t%n.itemsPerSlide===0;return{htmlAttributes:a(e,r),class:i?[`carousel__snap-point`,e.class]:e.class,key:e.key||t.toString(),style:e.style,renderBody:e.renderBody}}),this.skipScrolling=this.state&&this.state.index===n.index,this.state=n}onRender(){typeof window<`u`&&this.cleanupAsync()}onMount(){let{config:e}=this.state;this.listEl=this.getEl(`list`),this.nextEl=this.getEl(`next`),this.containerEl=this.getEl(`container`),this.subscribeTo(re).on(`resize`,()=>{this.cleanupAsync(),this.onRenderLegacy()}),this.skipScrolling=!1,se&&(this.state.paused=!0),ke(this.listEl)?(e.nativeScrolling=!0,this.once(`destroy`,xe(this.listEl,()=>{e.scrollTransitioning||this.handleScroll(this.listEl.scrollLeft)}))):this.subscribeTo(this.listEl).on(`transitionend`,({target:e})=>{e===this.listEl&&this.emitUpdate()}),this.onRenderLegacy(),document.fonts.ready.then(()=>{this.cleanupAsync(),this.onRenderLegacy()})}onUpdate(){this.onRenderLegacy()}onDestroy(){this.cleanupAsync()}onRenderLegacy(){let{containerEl:e,listEl:t,state:n}=this,{config:r,items:i,autoplayInterval:a,paused:o,interacting:s}=n;if(i.length){if(r.offsetOverride){r.offsetOverride=void 0,this.renderFrame=requestAnimationFrame(()=>this.setStateDirty(void 0));return}if(r.preserveItems){if(r.preserveItems=!1,this.focusFrame=requestAnimationFrame(()=>{Ae(t,e=>{ae(e).forEach(e.getAttribute(`aria-hidden`)===`true`?e=>e.setAttribute(`tabindex`,`-1`):e=>e.hasAttribute(`data-carousel-tabindex`)?e.setAttribute(`tabindex`,e.getAttribute(`data-carousel-tabindex`)??`-1`):e.removeAttribute(`tabindex`))})}),r.nativeScrolling){if(this.skipScrolling)this.emitUpdate();else{let e=this.getOffset(n);e===t.scrollLeft?this.isMoving&&(r.scrollTransitioning=!0,this.cancelScrollTransition=Te(t,this.getOffset(n),this.emitUpdate.bind(this))):(r.scrollTransitioning=!0,this.cancelScrollTransition=Te(t,e,this.emitUpdate.bind(this)))}}if(a&&!o&&!s){let e=this.move.bind(this,_);this.autoplayTimeout=setTimeout(()=>{if(this.isMoving)return this.once(`move`,e);e()},a)}return}this.renderFrame=requestAnimationFrame(()=>{let{width:n}=e.getBoundingClientRect(),{left:a}=t.firstElementChild.getBoundingClientRect();this.setStateDirty(`slideWidth`,n),r.preserveItems=!0,r.nativeScrolling=ke(t),Ae(t,(e,t)=>{let n=i[t],{left:r,right:o}=e.getBoundingClientRect();n.left=r-a,n.right=o-a})})}}}})))()}var Ne,v,Pe,y,b,Fe,Ie,Le,Re,ze,Be,x,S,Ve;function C(){return(C=t((()=>{Ne=d(),be(),ce(),v=e(f()),Pe=e(p()),y=e(i()),b=e(s()),Fe=e(l()),Ie=e(ue()),Le=e(te()),de(),pe(),me(),Me(),Re=e(o()),ze=u(),Be=e(c()),x=`s`,S=(0,Ne.t)(x),(0,ze.r)(x,()=>S),Ve=je,S._=(0,Re.default)(function(e,t,n,r,i,a){var o=r.getTemplateData(i),s=o.config;t.be(`div`,(0,Fe.default)(o.htmlAttributes,{"aria-roledescription":o.htmlAttributes[`aria-roledescription`]||`Carousel`,class:(0,y.default)(o.classes),style:(0,b.default)(o.style),role:`group`}),`0`,r,null,4),t.be(`div`,{class:(0,y.default)([`carousel__container`,o.bothControlsDisabled&&`carousel__container--controls-disabled`]),id:n.elId(`container`)},`@container`,r,null,1,{onfocusin:n.d(`focusin`,!!o.autoplayInterval&&`handleStartInteraction`,!1),ontouchstart:n.d(`touchstart`,!!o.autoplayInterval&&`handleStartInteraction`,!1),onmouseover:n.d(`mouseover`,!!o.autoplayInterval&&`handleStartInteraction`,!1),onfocusout:n.d(`focusout`,!!o.autoplayInterval&&`handleEndInteraction`,!1),onmouseout:n.d(`mouseout`,!!o.autoplayInterval&&`handleEndInteraction`,!1),ontouchend:n.d(`touchend`,!!o.autoplayInterval&&`handleEndInteraction`,!1)}),t.be(`button`,{class:`carousel__control carousel__control--prev`,type:`button`,"aria-label":o.a11yPreviousText,"aria-disabled":o.prevControlDisabled&&`true`},`1`,r,null,0,{onclick:n.d(`click`,!o.prevControlDisabled&&`handleMove`,!1,[-1])}),(0,v.default)(le,{},t,n,`2`),t.ee(),t.be(`div`,{class:(0,y.default)([`carousel__viewport`,!o.itemsPerSlide&&!o.nextControlDisabled&&!o.autoplayInterval&&`carousel__viewport--mask`])},`3`,r,null,1),t.be(`ul`,{class:(0,y.default)([`carousel__list`,e.imageTreatment===`matte`&&`carousel__list--image-treatment`]),style:(0,b.default)(!s.nativeScrolling&&!!o.offset&&{transform:`translate3d(`+o.offset*-1+`px,0,0)`,transition:o.disableTransition?`none`:void 0}),id:n.elId(`list`)},`@list`,r,null,1);for(let e of(0,Le.default)(o.items)){let i=`@${e.key}`,a=`[${i}]`;t.be(`li`,(0,Fe.default)(e.htmlAttributes,{class:(0,y.default)(e.class),style:(0,b.default)(e.style),"aria-hidden":!e.fullyVisible&&`true`}),i,r,null,4),(0,v.default)(Ie.default,{n:!0,b:!0,i:!!s.preserveItems,renderBody:t=>{(0,Pe.default)(t,e.renderBody,null,null,null,null,n,`4`+a)}},t,n,i),t.ee()}t.ee(),t.ee(),t.be(`button`,{class:`carousel__control carousel__control--next`,type:`button`,"aria-label":o.a11yNextText,"aria-disabled":o.nextControlDisabled&&`true`,id:n.elId(`next`)},`@next`,r,null,0,{onclick:n.d(`click`,!o.nextControlDisabled&&`handleMove`,!1,[1])}),(0,v.default)(fe,{},t,n,`5`),t.ee(),o.autoplayInterval&&!o.bothControlsDisabled&&(t.be(`button`,{type:`button`,"aria-label":o.paused?o.a11yPlayText:o.a11yPauseText,class:`carousel__playback`},`6`,r,null,0,{onclick:n.d(`click`,`togglePlay`,!1)}),o.paused?(0,v.default)(he,{},t,n,`7`):(0,v.default)(ge,{},t,n,`8`),t.ee()),t.ee(),t.ee()},{t:x},Ve),S.Component=(0,Be.default)(Ve,S._)})))()}var He;function Ue(){return(Ue=t((()=>{He=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
    <span>
        ebay-carousel
    </span>
    <span style="font-weight: normal; font-size: medium; margin-bottom: -15px;">
        DS v1.1.0
    </span>
</h1>

Discrete or Continuous carousel component. Can show items as a slide or various widths.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/navigation-disclosure-ebay-carousel)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/navigation-disclosure-ebay-carousel)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/ebay-carousel/examples)

## Preserving tabindex for focusable elements

When scrolling items, focusable elements that are not visible in the carousel should not be tabbable by default. When the carousel scrolls, it then removes the tabindex to allow the item to be focusable.
In order to preserve the tabindex on an item, pass \`data-carousel-tabindex="-1"\` attribute to a given focusable element in order to default to that tabindex instead of removing the tabindex when the item is visible.

## Reduced motion

The carousel does not autoplay by respecting the \`prefers-reduced-motion\` media query. Toggle your reduced motion settings to view autoplay example with the default behavior and reduced motion behavior.
`})))()}var We,Ge,w,Ke,qe,Je,Ye,T,E,Xe,Ze;function Qe(){return(Qe=t((()=>{We=d(),Ge=e(h()),w=m(),C(),Ke=e(f()),qe=e(o()),Je=u(),Ye=e(c()),T=`uPS9Tb3`,E=(0,We.t)(T),Xe=(0,Ge.default)(`style`,null,1).t(`
    .demo-card {
        color: #0a1c6b;
        background: #c2f5ff;
        font-size: 24px;
        font-weight: bold;
        width: 200px;
        height: 120px;
        line-height: 120px;
        text-align: center;
    }
`),(0,Je.r)(T,()=>E),Ze={},E._=(0,qe.default)(function(e,t,n,r,i,a){t.n(Xe,r),(0,Ke.default)(S,(0,w.i)(()=>{(0,w.r)(`item`,{style:{width:`400px`},class:`demo-card`,renderBody:e=>{e.t(`Card 1`,r)}}),(0,w.r)(`item`,{style:{width:`400px`},class:`demo-card`,renderBody:e=>{e.t(`Card 2`,r)}}),(0,w.r)(`item`,{style:{width:`400px`},class:`demo-card`,renderBody:e=>{e.t(`Card 3`,r)}}),(0,w.r)(`item`,{style:{width:`400px`},class:`demo-card`,renderBody:e=>{e.t(`Card 4`,r)}}),(0,w.r)(`item`,{style:{width:`400px`},class:`demo-card`,renderBody:e=>{e.t(`Card 5`,r)}}),(0,w.r)(`item`,{style:{width:`400px`},class:`demo-card`,renderBody:e=>{e.t(`Card 6`,r)}}),(0,w.r)(`item`,{style:{width:`400px`},class:`demo-card`,renderBody:e=>{e.t(`Card 7`,r)}}),(0,w.r)(`item`,{style:{width:`400px`},class:`demo-card`,renderBody:e=>{e.t(`Card 8`,r)}}),(0,w.r)(`item`,{style:{width:`400px`},class:`demo-card`,renderBody:e=>{e.t(`Card 9`,r)}}),(0,w.r)(`item`,{style:{width:`400px`},class:`demo-card`,renderBody:e=>{e.t(`Card 10`,r)}})},{...e,item:void 0}),t,n,`1`,[[`move`,`emit`,!1,[`move`]],[`next`,`emit`,!1,[`next`]],[`previous`,`emit`,!1,[`previous`]],[`scroll`,`emit`,!1,[`scroll`]],[`slide`,`emit`,!1,[`slide`]]])},{t:T,s:!0},Ze),E.Component=(0,Ye.default)(Ze,E._)})))()}var $e;function et(){return(et=t((()=>{$e=`export interface Input {
    index?: number;
    gap?: number | string;
    imageTreatment?: "none" | "matte";
    a11yPreviousText?: string;
    a11yNextText?: string;
    items: any[];
    images: string[];
}

<style>
    .demo-card {
        color: #0a1c6b;
        background: #c2f5ff;
        font-size: 24px;
        font-weight: bold;
        width: 200px;
        height: 120px;
        line-height: 120px;
        text-align: center;
    }
</style>

<ebay-carousel
    ...input
    on-move("emit", "move")
    on-next("emit", "next")
    on-previous("emit", "previous")
    on-scroll("emit", "scroll")
    on-slide("emit", "slide")
>
    <@item style={ width: "400px" } class="demo-card">
        Card 1
    </@item>
    <@item style={ width: "400px" } class="demo-card">
        Card 2
    </@item>
    <@item style={ width: "400px" } class="demo-card">
        Card 3
    </@item>
    <@item style={ width: "400px" } class="demo-card">
        Card 4
    </@item>
    <@item style={ width: "400px" } class="demo-card">
        Card 5
    </@item>
    <@item style={ width: "400px" } class="demo-card">
        Card 6
    </@item>
    <@item style={ width: "400px" } class="demo-card">
        Card 7
    </@item>
    <@item style={ width: "400px" } class="demo-card">
        Card 8
    </@item>
    <@item style={ width: "400px" } class="demo-card">
        Card 9
    </@item>
    <@item style={ width: "400px" } class="demo-card">
        Card 10
    </@item>
</ebay-carousel>
`})))()}var tt,nt,D,rt,it,at,ot,O,k,st,ct;function lt(){return(lt=t((()=>{tt=d(),nt=e(h()),D=m(),C(),rt=e(f()),it=e(o()),at=u(),ot=e(c()),O=`eqUNKaj`,k=(0,tt.t)(O),st=(0,nt.default)(`style`,null,1).t(`
    .demo2-card {
        color: #cdf4fd;
        background: #a1208b;
        font-size: 36px;
        font-weight: bold;
        height: 330px;
        line-height: 330px;
        text-align: center;
    }
`),(0,at.r)(O,()=>k),ct={},k._=(0,it.default)(function(e,t,n,r,i,a){t.n(st,r),(0,rt.default)(S,(0,D.i)(()=>{(0,D.r)(`item`,{style:{width:`400px`},class:`demo2-card`,renderBody:e=>{e.t(`Card 1`,r)}}),(0,D.r)(`item`,{style:{width:`400px`},class:`demo2-card`,renderBody:e=>{e.t(`Card 2`,r)}}),(0,D.r)(`item`,{style:{width:`400px`},class:`demo2-card`,renderBody:e=>{e.t(`Card 3`,r)}}),(0,D.r)(`item`,{style:{width:`400px`},class:`demo2-card`,renderBody:e=>{e.t(`Card 4`,r)}}),(0,D.r)(`item`,{style:{width:`400px`},class:`demo2-card`,renderBody:e=>{e.t(`Card 5`,r)}}),(0,D.r)(`item`,{style:{width:`400px`},class:`demo2-card`,renderBody:e=>{e.t(`Card 6`,r)}}),(0,D.r)(`item`,{style:{width:`400px`},class:`demo2-card`,renderBody:e=>{e.t(`Card 7`,r)}}),(0,D.r)(`item`,{style:{width:`400px`},class:`demo2-card`,renderBody:e=>{e.t(`Card 8`,r)}}),(0,D.r)(`item`,{style:{width:`400px`},class:`demo2-card`,renderBody:e=>{e.t(`Card 9`,r)}}),(0,D.r)(`item`,{style:{width:`400px`},class:`demo2-card`,renderBody:e=>{e.t(`Card 10`,r)}})},{...e,itemsPerSlide:e.itemsPerSlide||2,item:void 0}),t,n,`1`,[[`move`,`emit`,!1,[`move`]],[`next`,`emit`,!1,[`next`]],[`previous`,`emit`,!1,[`previous`]],[`scroll`,`emit`,!1,[`scroll`]],[`slide`,`emit`,!1,[`slide`]]])},{t:O,s:!0},ct),k.Component=(0,ot.default)(ct,k._)})))()}var ut;function dt(){return(dt=t((()=>{ut=`export interface Input {
    items: number;
    index: number;
    itemsPerSlide: number;
    gap: number;
    a11yPreviousText: string;
    a11yNextText: string;
}

<style>
    .demo2-card {
        color: #cdf4fd;
        background: #a1208b;
        font-size: 36px;
        font-weight: bold;
        height: 330px;
        line-height: 330px;
        text-align: center;
    }
</style>

<ebay-carousel
    ...input
    itemsPerSlide=input.itemsPerSlide || 2
    on-move("emit", "move")
    on-next("emit", "next")
    on-previous("emit", "previous")
    on-scroll("emit", "scroll")
    on-slide("emit", "slide")
>
    <@item style={ width: "400px" } class="demo2-card">
        Card 1
    </@item>
    <@item style={ width: "400px" } class="demo2-card">
        Card 2
    </@item>
    <@item style={ width: "400px" } class="demo2-card">
        Card 3
    </@item>
    <@item style={ width: "400px" } class="demo2-card">
        Card 4
    </@item>
    <@item style={ width: "400px" } class="demo2-card">
        Card 5
    </@item>
    <@item style={ width: "400px" } class="demo2-card">
        Card 6
    </@item>
    <@item style={ width: "400px" } class="demo2-card">
        Card 7
    </@item>
    <@item style={ width: "400px" } class="demo2-card">
        Card 8
    </@item>
    <@item style={ width: "400px" } class="demo2-card">
        Card 9
    </@item>
    <@item style={ width: "400px" } class="demo2-card">
        Card 10
    </@item>
</ebay-carousel>
`})))()}var ft,A,j,pt,mt,ht,gt,M,N,_t,vt,yt,bt,xt,St,Ct,wt;function Tt(){return(Tt=t((()=>{ft=d(),A=e(h()),j=m(),C(),pt=e(f()),mt=e(o()),ht=u(),gt=e(c()),M=`CSwgHc9`,N=(0,ft.t)(M),_t=(0,A.default)(`style`,null,1).t(`
    .demo-card {
        color: #0a1c6b;
        background: #c2f5ff;
        font-size: 24px;
        font-weight: bold;
        width: 200px;
        height: 120px;
        line-height: 120px;
        text-align: center;
    }
`),vt=(0,A.default)(`img`,{"aria-label":`photo 1`,src:`http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/aztec-pyramid.jpeg`},0),yt=(0,A.default)(`img`,{"aria-label":`photo 2`,src:`http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/falls.jpeg`},0),bt=(0,A.default)(`img`,{"aria-label":`photo 3`,src:`http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/mountain.jpeg`},0),xt=(0,A.default)(`img`,{"aria-label":`photo 4`,src:`http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/shoes.jpeg`},0),St=(0,A.default)(`img`,{"aria-label":`photo 5`,src:`http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/tall-cat.jpeg`},0),Ct=(0,A.default)(`img`,{"aria-label":`photo 6`,src:`http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/wide-cat.jpeg`},0),(0,ht.r)(M,()=>N),wt={},N._=(0,mt.default)(function(e,t,n,r,i,a){t.n(_t,r),(0,pt.default)(S,(0,j.i)(()=>{(0,j.r)(`item`,{renderBody:e=>{e.n(vt,r)}}),(0,j.r)(`item`,{renderBody:e=>{e.n(yt,r)}}),(0,j.r)(`item`,{renderBody:e=>{e.n(bt,r)}}),(0,j.r)(`item`,{renderBody:e=>{e.n(xt,r)}}),(0,j.r)(`item`,{renderBody:e=>{e.n(St,r)}}),(0,j.r)(`item`,{renderBody:e=>{e.n(Ct,r)}}),(0,j.r)(`item`,{style:{width:`400px`},class:`demo-card`,renderBody:e=>{e.t(`Additional Item`,r)}}),(0,j.r)(`item`,{style:{width:`400px`},class:`demo-card`,renderBody:e=>{e.t(`Additional Item 2`,r)}})},{imageTreatment:`matte`,...e,item:void 0}),t,n,`1`,[[`move`,`emit`,!1,[`move`]],[`next`,`emit`,!1,[`next`]],[`previous`,`emit`,!1,[`previous`]],[`scroll`,`emit`,!1,[`scroll`]],[`slide`,`emit`,!1,[`slide`]]])},{t:M,s:!0},wt),N.Component=(0,gt.default)(wt,N._)})))()}var Et;function Dt(){return(Dt=t((()=>{Et=`export interface Input {
    index?: number;
    gap?: number | string;
    imageTreatment?: "none" | "matte";
    a11yPreviousText?: string;
    a11yNextText?: string;
    items: any[];
    images: string[];
}

<style>
    .demo-card {
        color: #0a1c6b;
        background: #c2f5ff;
        font-size: 24px;
        font-weight: bold;
        width: 200px;
        height: 120px;
        line-height: 120px;
        text-align: center;
    }
</style>

<ebay-carousel
    imageTreatment="matte"
    ...input
    on-move("emit", "move")
    on-next("emit", "next")
    on-previous("emit", "previous")
    on-scroll("emit", "scroll")
    on-slide("emit", "slide")
>
    <@item>
        <img
            aria-label="photo 1"
            src="http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/aztec-pyramid.jpeg"
        >
    </@item>
    <@item>
        <img
            aria-label="photo 2"
            src="http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/falls.jpeg"
        >
    </@item>
    <@item>
        <img
            aria-label="photo 3"
            src="http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/mountain.jpeg"
        >
    </@item>
    <@item>
        <img
            aria-label="photo 4"
            src="http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/shoes.jpeg"
        >
    </@item>
    <@item>
        <img
            aria-label="photo 5"
            src="http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/tall-cat.jpeg"
        >
    </@item>
    <@item>
        <img
            aria-label="photo 6"
            src="http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/wide-cat.jpeg"
        >
    </@item>
    <@item style={ width: "400px" } class="demo-card">
        Additional Item
    </@item>
    <@item style={ width: "400px" } class="demo-card">
        Additional Item 2
    </@item>
</ebay-carousel>
`})))()}var Ot,kt,P,At,jt,Mt,Nt,F,I,Pt,Ft;function It(){return(It=t((()=>{Ot=d(),kt=e(h()),P=m(),C(),At=e(f()),jt=e(o()),Mt=u(),Nt=e(c()),F=`T11Jx7r`,I=(0,Ot.t)(F),Pt=(0,kt.default)(`style`,null,1).t(`
    .demo2-card {
        color: #cdf4fd;
        background: #a1208b;
        font-size: 36px;
        font-weight: bold;
        height: 330px;
        line-height: 330px;
        text-align: center;
    }
`),(0,Mt.r)(F,()=>I),Ft={},I._=(0,jt.default)(function(e,t,n,r,i,a){t.n(Pt,r),(0,At.default)(S,(0,P.i)(()=>{(0,P.r)(`item`,{style:{width:`400px`},class:`demo2-card`,renderBody:e=>{e.t(`Card 1`,r)}}),(0,P.r)(`item`,{style:{width:`400px`},class:`demo2-card`,renderBody:e=>{e.t(`Card 2`,r)}}),(0,P.r)(`item`,{style:{width:`400px`},class:`demo2-card`,renderBody:e=>{e.t(`Card 3`,r)}}),(0,P.r)(`item`,{style:{width:`400px`},class:`demo2-card`,renderBody:e=>{e.t(`Card 4`,r)}}),(0,P.r)(`item`,{style:{width:`400px`},class:`demo2-card`,renderBody:e=>{e.t(`Card 5`,r)}}),(0,P.r)(`item`,{style:{width:`400px`},class:`demo2-card`,renderBody:e=>{e.t(`Card 6`,r)}}),(0,P.r)(`item`,{style:{width:`400px`},class:`demo2-card`,renderBody:e=>{e.t(`Card 7`,r)}}),(0,P.r)(`item`,{style:{width:`400px`},class:`demo2-card`,renderBody:e=>{e.t(`Card 8`,r)}}),(0,P.r)(`item`,{style:{width:`400px`},class:`demo2-card`,renderBody:e=>{e.t(`Card 9`,r)}}),(0,P.r)(`item`,{style:{width:`400px`},class:`demo2-card`,renderBody:e=>{e.t(`Card 10`,r)}})},{...e,itemsPerSlide:e.itemsPerSlide||1,autoplay:e.autoplay||!0,item:void 0}),t,n,`1`,[[`move`,`emit`,!1,[`move`]],[`next`,`emit`,!1,[`next`]],[`previous`,`emit`,!1,[`previous`]],[`scroll`,`emit`,!1,[`scroll`]],[`slide`,`emit`,!1,[`slide`]],[`play`,`emit`,!1,[`play`]],[`pause`,`emit`,!1,[`pause`]]])},{t:F,s:!0},Ft),I.Component=(0,Nt.default)(Ft,I._)})))()}var Lt;function Rt(){return(Rt=t((()=>{Lt=`export interface Input {
    items: number;
    index?: number;
    itemsPerSlide?: number;
    gap?: number;
    a11yPreviousText?: string;
    a11yNextText?: string;
    autoplay?: boolean;
    paused?: boolean;
    a11yPauseText?: string;
    a11yPlayText?: string;
}

<style>
    .demo2-card {
        color: #cdf4fd;
        background: #a1208b;
        font-size: 36px;
        font-weight: bold;
        height: 330px;
        line-height: 330px;
        text-align: center;
    }
</style>
<ebay-carousel
    ...input
    itemsPerSlide=input.itemsPerSlide || 1
    autoplay=input.autoplay || true
    on-move("emit", "move")
    on-next("emit", "next")
    on-previous("emit", "previous")
    on-scroll("emit", "scroll")
    on-slide("emit", "slide")
    on-play("emit", "play")
    on-pause("emit", "pause")
>
    <@item style={ width: "400px" } class="demo2-card">
        Card 1
    </@item>
    <@item style={ width: "400px" } class="demo2-card">
        Card 2
    </@item>
    <@item style={ width: "400px" } class="demo2-card">
        Card 3
    </@item>
    <@item style={ width: "400px" } class="demo2-card">
        Card 4
    </@item>
    <@item style={ width: "400px" } class="demo2-card">
        Card 5
    </@item>
    <@item style={ width: "400px" } class="demo2-card">
        Card 6
    </@item>
    <@item style={ width: "400px" } class="demo2-card">
        Card 7
    </@item>
    <@item style={ width: "400px" } class="demo2-card">
        Card 8
    </@item>
    <@item style={ width: "400px" } class="demo2-card">
        Card 9
    </@item>
    <@item style={ width: "400px" } class="demo2-card">
        Card 10
    </@item>
</ebay-carousel>
`})))()}var zt,L,R,Bt,Vt,Ht,Ut,z,B,Wt,Gt,Kt,qt,Jt,Yt,Xt,Zt,Qt,$t;function en(){return(en=t((()=>{zt=d(),L=e(h()),R=m(),C(),Bt=e(f()),Vt=e(o()),Ht=u(),Ut=e(c()),z=`EktCWa9`,B=(0,zt.t)(z),Wt=(0,L.default)(`style`,null,1).t(`
    .preserve-tabindex-card {
        color: #cdf4fd;
        background: #eee;
        font-size: 36px;
        font-weight: bold;
        height: 330px;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`),Gt=(0,L.default)(`div`,{class:`preserve-tabindex-card`},2).e(`a`,{href:`https://www.ebay.com`,"data-carousel-tabindex":`-1`},1).t(`Image here`).e(`a`,{href:`https://www.ebay.com`},1).t(`Card 1`),Kt=(0,L.default)(`div`,{class:`preserve-tabindex-card`},2).e(`a`,{href:`https://www.ebay.com`,"data-carousel-tabindex":`-1`},1).t(`Image here`).e(`a`,{href:`https://www.ebay.com`},1).t(`Card 2`),qt=(0,L.default)(`div`,{class:`preserve-tabindex-card`},2).e(`a`,{href:`https://www.ebay.com`,"data-carousel-tabindex":`-1`},1).t(`Image here`).e(`a`,{href:`https://www.ebay.com`},1).t(`Card 3`),Jt=(0,L.default)(`div`,{class:`preserve-tabindex-card`},2).e(`a`,{href:`https://www.ebay.com`,"data-carousel-tabindex":`-1`},1).t(`Image here`).e(`a`,{href:`https://www.ebay.com`},1).t(`Card 4`),Yt=(0,L.default)(`div`,{class:`preserve-tabindex-card`},2).e(`a`,{href:`https://www.ebay.com`,"data-carousel-tabindex":`-1`},1).t(`Image here`).e(`a`,{href:`https://www.ebay.com`},1).t(`Card 5`),Xt=(0,L.default)(`div`,{class:`preserve-tabindex-card`},2).e(`a`,{href:`https://www.ebay.com`,"data-carousel-tabindex":`-1`},1).t(`Image here`).e(`a`,{href:`https://www.ebay.com`},1).t(`Card 6`),Zt=(0,L.default)(`div`,{class:`preserve-tabindex-card`},2).e(`a`,{href:`https://www.ebay.com`,"data-carousel-tabindex":`-1`},1).t(`Image here`).e(`a`,{href:`https://www.ebay.com`},1).t(`Card 7`),Qt=(0,L.default)(`div`,{class:`preserve-tabindex-card`},2).e(`a`,{href:`https://www.ebay.com`,"data-carousel-tabindex":`-1`},1).t(`Image here`).e(`a`,{href:`https://www.ebay.com`},1).t(`Card 8`),(0,Ht.r)(z,()=>B),$t={},B._=(0,Vt.default)(function(e,t,n,r,i,a){t.n(Wt,r),(0,Bt.default)(S,(0,R.i)(()=>{(0,R.r)(`item`,{renderBody:e=>{e.n(Gt,r)}}),(0,R.r)(`item`,{renderBody:e=>{e.n(Kt,r)}}),(0,R.r)(`item`,{renderBody:e=>{e.n(qt,r)}}),(0,R.r)(`item`,{renderBody:e=>{e.n(Jt,r)}}),(0,R.r)(`item`,{renderBody:e=>{e.n(Yt,r)}}),(0,R.r)(`item`,{renderBody:e=>{e.n(Xt,r)}}),(0,R.r)(`item`,{renderBody:e=>{e.n(Zt,r)}}),(0,R.r)(`item`,{renderBody:e=>{e.n(Qt,r)}})},{...e,item:void 0}),t,n,`1`,[[`move`,`emit`,!1,[`move`]],[`next`,`emit`,!1,[`next`]],[`previous`,`emit`,!1,[`previous`]],[`scroll`,`emit`,!1,[`scroll`]],[`slide`,`emit`,!1,[`slide`]]])},{t:z,s:!0},$t),B.Component=(0,Ut.default)($t,B._)})))()}var tn;function nn(){return(nn=t((()=>{tn=`export interface Input {
    gap: string;
    itemsPerSlide: string;
    index: string;
    a11yPreviousText: string;
    a11yNextText: string;
    items: any[];
}

<style>
    .preserve-tabindex-card {
        color: #cdf4fd;
        background: #eee;
        font-size: 36px;
        font-weight: bold;
        height: 330px;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
</style>

<ebay-carousel
    ...input
    on-move("emit", "move")
    on-next("emit", "next")
    on-previous("emit", "previous")
    on-scroll("emit", "scroll")
    on-slide("emit", "slide")
>
    <@item>
        <div class="preserve-tabindex-card">
            <a href="https://www.ebay.com" data-carousel-tabindex="-1">
                Image here
            </a>
            <a href="https://www.ebay.com">
                Card 1
            </a>
        </div>
    </@item>
    <@item>
        <div class="preserve-tabindex-card">
            <a href="https://www.ebay.com" data-carousel-tabindex="-1">
                Image here
            </a>
            <a href="https://www.ebay.com">
                Card 2
            </a>
        </div>
    </@item>

    <@item>
        <div class="preserve-tabindex-card">
            <a href="https://www.ebay.com" data-carousel-tabindex="-1">
                Image here
            </a>
            <a href="https://www.ebay.com">
                Card 3
            </a>
        </div>
    </@item>

    <@item>
        <div class="preserve-tabindex-card">
            <a href="https://www.ebay.com" data-carousel-tabindex="-1">
                Image here
            </a>
            <a href="https://www.ebay.com">
                Card 4
            </a>
        </div>
    </@item>

    <@item>
        <div class="preserve-tabindex-card">
            <a href="https://www.ebay.com" data-carousel-tabindex="-1">
                Image here
            </a>
            <a href="https://www.ebay.com">
                Card 5
            </a>
        </div>
    </@item>

    <@item>
        <div class="preserve-tabindex-card">
            <a href="https://www.ebay.com" data-carousel-tabindex="-1">
                Image here
            </a>
            <a href="https://www.ebay.com">
                Card 6
            </a>
        </div>
    </@item>

    <@item>
        <div class="preserve-tabindex-card">
            <a href="https://www.ebay.com" data-carousel-tabindex="-1">
                Image here
            </a>
            <a href="https://www.ebay.com">
                Card 7
            </a>
        </div>
    </@item>
    <@item>
        <div class="preserve-tabindex-card">
            <a href="https://www.ebay.com" data-carousel-tabindex="-1">
                Image here
            </a>
            <a href="https://www.ebay.com">
                Card 8
            </a>
        </div>
    </@item>
</ebay-carousel>
`})))()}var rn,an,V,on,sn,cn,ln,H,U,un,dn;function fn(){return(fn=t((()=>{rn=d(),an=e(h()),V=m(),C(),on=e(f()),sn=e(o()),cn=u(),ln=e(c()),H=`i9pYoZa`,U=(0,rn.t)(H),un=(0,an.default)(`style`,null,1).t(`
    .demo-card3 {
        color: #0a1c6b;
        background: #c2f5ff;
        font-size: 24px;
        font-weight: bold;
        height: 120px;
        line-height: 120px;
        text-align: center;
        overflow: hidden;
    }
`),(0,cn.r)(H,()=>U),dn={},U._=(0,sn.default)(function(e,t,n,r,i,a){t.n(un,r),(0,on.default)(S,(0,V.i)(()=>{(0,V.r)(`item`,{style:`width:100px`,class:`demo-card3`,renderBody:e=>{e.t(`Card 1`,r)}}),(0,V.r)(`item`,{style:`width:57px`,class:`demo-card3`,renderBody:e=>{e.t(`C2`,r)}}),(0,V.r)(`item`,{style:`width:120px`,class:`demo-card3`,renderBody:e=>{e.t(`Card 3`,r)}}),(0,V.r)(`item`,{style:`width:200px`,class:`demo-card3`,renderBody:e=>{e.t(`Card 4`,r)}}),(0,V.r)(`item`,{style:`width:130px`,class:`demo-card3`,renderBody:e=>{e.t(`Card 5`,r)}}),(0,V.r)(`item`,{style:`width:150px`,class:`demo-card3`,renderBody:e=>{e.t(`Card 6`,r)}}),(0,V.r)(`item`,{style:`width:100px`,class:`demo-card3`,renderBody:e=>{e.t(`Card 7`,r)}}),(0,V.r)(`item`,{style:`width:200px`,class:`demo-card3`,renderBody:e=>{e.t(`Card 8`,r)}}),(0,V.r)(`item`,{style:`width:60px`,class:`demo-card3`,renderBody:e=>{e.t(`C9`,r)}}),(0,V.r)(`item`,{style:`width:140px`,class:`demo-card3`,renderBody:e=>{e.t(`Card 10`,r)}})},{...e,item:void 0}),t,n,`1`,[[`move`,`emit`,!1,[`move`]],[`next`,`emit`,!1,[`next`]],[`previous`,`emit`,!1,[`previous`]],[`scroll`,`emit`,!1,[`scroll`]],[`slide`,`emit`,!1,[`slide`]]])},{t:H,s:!0},dn),U.Component=(0,ln.default)(dn,U._)})))()}var pn;function mn(){return(mn=t((()=>{pn=`export interface Input {
    index?: number;
    gap?: number | string;
    imageTreatment?: "none" | "matte";
    a11yPreviousText?: string;
    a11yNextText?: string;
    items: any[];
    images: string[];
}

<style>
    .demo-card3 {
        color: #0a1c6b;
        background: #c2f5ff;
        font-size: 24px;
        font-weight: bold;
        height: 120px;
        line-height: 120px;
        text-align: center;
        overflow: hidden;
    }
</style>

<ebay-carousel
    ...input
    on-move("emit", "move")
    on-next("emit", "next")
    on-previous("emit", "previous")
    on-scroll("emit", "scroll")
    on-slide("emit", "slide")
>
    <@item style="width:100px" class="demo-card3">
        Card 1
    </@item>
    <@item style="width:57px" class="demo-card3">
        C2
    </@item>
    <@item style="width:120px" class="demo-card3">
        Card 3
    </@item>
    <@item style="width:200px" class="demo-card3">
        Card 4
    </@item>
    <@item style="width:130px" class="demo-card3">
        Card 5
    </@item>
    <@item style="width:150px" class="demo-card3">
        Card 6
    </@item>
    <@item style="width:100px" class="demo-card3">
        Card 7
    </@item>
    <@item style="width:200px" class="demo-card3">
        Card 8
    </@item>
    <@item style="width:60px" class="demo-card3">
        C9
    </@item>
    <@item style="width:140px" class="demo-card3">
        Card 10
    </@item>
</ebay-carousel>
`})))()}var hn,gn,W,_n,vn,yn,bn,G,K,xn,Sn;function Cn(){return(Cn=t((()=>{hn=d(),gn=e(h()),W=m(),C(),_n=e(f()),_e(),vn=e(o()),yn=u(),bn=e(c()),G=`o2aNUEV`,K=(0,hn.t)(G),xn=(0,gn.default)(`style`,null,1).t(`
    .demo2-card {
        color: #cdf4fd;
        background: #a1208b;
        font-size: 36px;
        font-weight: bold;
        height: 330px;
        line-height: 330px;
        text-align: center;
    }
`),(0,yn.r)(G,()=>K),Sn={onCreate(){this.onMove=({visibleIndexes:e})=>{this.state.index=e[0]},this.handleChange=({value:e})=>{this.state.index=+e},this.state={index:0}}},K._=(0,vn.default)(function(e,t,n,r,i,a){t.n(xn,r),(0,_n.default)(S,(0,W.i)(()=>{(0,W.r)(`item`,{style:{width:`400px`},class:`demo2-card`,renderBody:e=>{e.t(`Card 1`,r)}}),(0,W.r)(`item`,{style:{width:`400px`},class:`demo2-card`,renderBody:e=>{e.t(`Card 2`,r)}}),(0,W.r)(`item`,{style:{width:`400px`},class:`demo2-card`,renderBody:e=>{e.t(`Card 3`,r)}}),(0,W.r)(`item`,{style:{width:`400px`},class:`demo2-card`,renderBody:e=>{e.t(`Card 4`,r)}}),(0,W.r)(`item`,{style:{width:`400px`},class:`demo2-card`,renderBody:e=>{e.t(`Card 5`,r)}}),(0,W.r)(`item`,{style:{width:`400px`},class:`demo2-card`,renderBody:e=>{e.t(`Card 6`,r)}}),(0,W.r)(`item`,{style:{width:`400px`},class:`demo2-card`,renderBody:e=>{e.t(`Card 7`,r)}}),(0,W.r)(`item`,{style:{width:`400px`},class:`demo2-card`,renderBody:e=>{e.t(`Card 8`,r)}}),(0,W.r)(`item`,{style:{width:`400px`},class:`demo2-card`,renderBody:e=>{e.t(`Card 9`,r)}}),(0,W.r)(`item`,{style:{width:`400px`},class:`demo2-card`,renderBody:e=>{e.t(`Card 10`,r)}})},{...e,index:i.index,itemsPerSlide:e.itemsPerSlide||2,item:void 0}),t,n,`1`,[[`next`,`emit`,!1,[`next`]],[`previous`,`emit`,!1,[`previous`]],[`move`,`onMove`,!1]]),(0,_n.default)(ve,{type:`number`,value:0},t,n,`2`,[[`input-change`,`handleChange`,!1]])},{t:G},Sn),K.Component=(0,bn.default)(Sn,K._)})))()}var wn;function Tn(){return(Tn=t((()=>{wn=`import type { Input as CarouselInput } from "<ebay-carousel>";
import type { Input as TextboxInput } from "<ebay-textbox>";
export interface Input {
    items: number;
    index: number;
    itemsPerSlide: number;
    gap: number;
    a11yPreviousText: string;
    a11yNextText: string;
}
export interface State {
    index?: number;
}
class {
    declare state: State;
    onCreate() {
        this.state = {
            index: 0,
        };
    }
    onMove: CarouselInput["on-move"] = ({ visibleIndexes }) => {
        this.state.index = visibleIndexes[0];
    };
    handleChange: TextboxInput["on-input-change"] = ({ value }) => {
        this.state.index = +value;
    };
}

<style>
    .demo2-card {
        color: #cdf4fd;
        background: #a1208b;
        font-size: 36px;
        font-weight: bold;
        height: 330px;
        line-height: 330px;
        text-align: center;
    }
</style>

<ebay-carousel
    ...input
    index=state.index
    itemsPerSlide=input.itemsPerSlide || 2
    on-next("emit", "next")
    on-previous("emit", "previous")
    on-move("onMove")
>
    <@item style={ width: "400px" } class="demo2-card">
        Card 1
    </@item>
    <@item style={ width: "400px" } class="demo2-card">
        Card 2
    </@item>
    <@item style={ width: "400px" } class="demo2-card">
        Card 3
    </@item>
    <@item style={ width: "400px" } class="demo2-card">
        Card 4
    </@item>
    <@item style={ width: "400px" } class="demo2-card">
        Card 5
    </@item>
    <@item style={ width: "400px" } class="demo2-card">
        Card 6
    </@item>
    <@item style={ width: "400px" } class="demo2-card">
        Card 7
    </@item>
    <@item style={ width: "400px" } class="demo2-card">
        Card 8
    </@item>
    <@item style={ width: "400px" } class="demo2-card">
        Card 9
    </@item>
    <@item style={ width: "400px" } class="demo2-card">
        Card 10
    </@item>
</ebay-carousel>

<ebay-textbox type="number" value=0 onInput-change("handleChange")/>
`})))()}var En,q,J,Y,X,Z,Q,$,Dn;function On(){return(On=t((()=>{C(),Ue(),Qe(),et(),lt(),dt(),Tt(),Dt(),It(),Rt(),en(),nn(),fn(),mn(),Cn(),Tn(),En={title:`navigation & disclosure/ebay-carousel`,component:S,parameters:{docs:{description:{component:He}}},argTypes:{numberOfItems:{description:`The amount of items`,table:{category:`Demo configuration`}},item:{name:`@item`,description:`The contents for each item`,table:{category:`@attribute tags`}},imageTreatment:{options:[`none`,`matte`],description:`If "matte", image treatment styles are applied.`,table:{defaultValue:{summary:`none`}},type:`select`},hiddenScrollbar:{control:{type:`boolean`},description:`Whether the scrollbar should be hidden`},index:{type:`number`,description:`0-based index position`},itemsPerSlide:{description:`automatically fit a number of items for each carousel slide and enable slide controls. If set to a whole number, will default to x.1 where x is the whole number set.`},gap:{type:`number`,description:`override the margin between carousel items in pixels`,table:{defaultValue:{summary:`16`}}},"aria-label":{description:`a11y label text for component`,table:{category:`accessibility attributes`},control:{type:`text`}},"aria-labelledby":{description:`id of element containing a11y label text for component`,table:{category:`accessibility attributes`},control:{type:`text`}},"aria-roledescription":{description:`a11y role description for component`,table:{defaultValue:{summary:`Carousel`},category:`accessibility attributes`},control:{type:`text`}},"a11y-next-text":{description:`a11y text for next control`,table:{defaultValue:{summary:`Next Slide`},category:`accessibility attributes`}},"a11y-previous-text":{description:`a11y text for previous control`,table:{defaultValue:{summary:`Previous Slide`},category:`accessibility attributes`}},onMove:{action:`on-move`,description:`called whenever item visibility changes, including initialization`,table:{category:`Events`,defaultValue:{detail:`{ [visibleIndexes] }`}}},onNext:{action:`on-next`,description:`click next`,table:{category:`Events`,defaultValue:{detail:`{ originalEvent }`}}},onPrevious:{action:`on-previous`,description:`click previous`,table:{category:`Events`,defaultValue:{detail:`{ originalEvent }`}}},onScroll:{action:`on-scroll`,description:`new index is navigated to by native scrollin`,table:{category:`Events`,defaultValue:{detail:`{ index }`}}},onSlide:{action:`on-slide`,description:`new slide is navigated to (by controls or API)`,table:{category:`Events (items-per-slide)`,defaultValue:{summary:`{ slide }`}}},onPlay:{action:`on-play`,description:`called when the autoplay play button is pressed`,table:{category:`Events (autoplay)`,defaultValue:{summary:`{ originalEvent }`}}},onPause:{action:`on-pause`,description:`called when the autoplay pause button is pressed`,table:{category:`Events (autoplay)`,defaultValue:{summary:`{ originalEvent }`}}}}},q=n(E,$e),J=n(N,Et),Y=n(k,ut),X=n(I,Lt),Z=n(B,tn),Q=n(U,pn),$=n(K,wn),Dn=[`Continuous`,`ContinuousImageTreatment`,`Discrete`,`Autoplay`,`preserveTabindex`,`variableSizes`,`controlled`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`buildExtensionTemplate(continiousTemplate, continiousTemplateCode)`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`buildExtensionTemplate(continiousImageTreatmentTemplate, continiousImageTreatmentTemplateCode)`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`buildExtensionTemplate(discreteTemplate, discreteTemplateCode)`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`buildExtensionTemplate(autoplayTemplate, autoplayTemplateCode)`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`buildExtensionTemplate(preserveTabindexTemplate, preserveTabindexTemplateCode)`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`buildExtensionTemplate(variableSizesTemplate, variableSizesTemplateCode)`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`buildExtensionTemplate(controlledTemplate, controlledTemplateCode)`,...$.parameters?.docs?.source}}}})))()}On();export{X as Autoplay,q as Continuous,J as ContinuousImageTreatment,Y as Discrete,Dn as __namedExportsOrder,$ as controlled,En as default,Z as preserveTabindex,Q as variableSizes};