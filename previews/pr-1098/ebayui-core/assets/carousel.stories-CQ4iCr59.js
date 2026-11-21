import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{n}from"./utils-C7m-hPxw.js";import{c as r,h as i,l as a,n as o,p as s,r as c,s as l,t as u,u as d}from"./registry-95LfxIAE.js";import{t as ee}from"./icon-DVMfhrh5.js";import{t as f}from"./render-tag-hXgrwudm.js";import{t as p}from"./dynamic-tag-CCbAf3a9.js";import{t as te}from"./of-fallback-rY0Dkoru.js";import{t as m}from"./attr-tag--AgZ8oJt.js";import{t as h}from"./const-element-BfQ4jh6r.js";import{n as ne,t as re}from"./mjs-DbvLvmub.js";import{n as ie,r as ae}from"./dom-C2KCbcve.js";import{n as oe,t as se}from"./ebay-chevron-left-16-icon-WSH6F60Y.js";import{t as ce}from"./preserve-tag-BNM9CJdW.js";import{n as le,t as ue}from"./ebay-chevron-right-16-icon-BjaYnLAd.js";import{i as de,n as fe,r as pe,t as me}from"./ebay-pause-24-icon-D1mQeneA.js";import{n as he,t as ge}from"./ebay-textbox-DKUdkh4W.js";function _e(){return(_e=t((()=>{})))()}function ve(){return(ve=t((()=>{ee(),_e()})))()}function ye(e,t){let n;return r(),s;function r(){e.addEventListener(`scroll`,i,be)}function i(){o(),n=setTimeout(a,640)}function a(){t(),r()}function o(){e.removeEventListener(`scroll`,i,be)}function s(){o(),clearTimeout(n)}}var be;function xe(){return(xe=t((()=>{be={passive:!0}})))()}function Se(e,t){let n,r,i;return(function a(){let{scrollLeft:o}=e;if(i!==o){i=o,n=setTimeout(()=>{r=requestAnimationFrame(a)},90);return}t(i)})(),()=>{clearTimeout(n),cancelAnimationFrame(r)}}function Ce(e,t,n){if(Te)return e.scrollTo({left:t}),Se(e,n);let r,i,a=requestAnimationFrame(r=>{let{scrollLeft:i}=e,s=t-i;(function c(l){let u=l-r;if(u>450)return e.scrollLeft=t,o(),n();e.scrollLeft=we(u/450)*s+i,a=requestAnimationFrame(c)})(r)});return e.addEventListener(`touchstart`,s),o;function o(){cancelAnimationFrame(a),r===void 0?l():(i&&i(),u())}function s(){o(),r=e.scrollLeft,e.addEventListener(`touchend`,c)}function c(){u(),r===e.scrollLeft&&(i=Ce(e,t,n))}function l(){e.removeEventListener(`touchstart`,s)}function u(){e.removeEventListener(`touchend`,c)}}function we(e){return e<.5?2*e*e:-1+(4-2*e)*e}var Te;function Ee(){return(Ee=t((()=>{Te=typeof window<`u`&&`scrollBehavior`in document.documentElement.style})))()}function g(e,t){let n=0,r=e.firstElementChild;for(;r;)t(r,n++),r=r.nextElementSibling}var _,De,Oe;function ke(){return(ke=t((()=>{ne(),r(),xe(),Ee(),ie(),_=-1,De=1,Oe=class extends Marko.Component{cleanupAsync(){clearTimeout(this.autoplayTimeout),cancelAnimationFrame(this.renderFrame),cancelAnimationFrame(this.focusFrame),this.cancelScrollTransition&&=(this.cancelScrollTransition(),void 0)}emitUpdate(){let{config:e,items:t}=this.state;e.scrollTransitioning=!1,this.emit(`move`,{visibleIndexes:t.filter(({fullyVisible:e})=>e).map(e=>t.indexOf(e))})}handleScroll(e){let{state:t}=this,{config:n,items:r,gap:i}=t,a;if(this.lastScrollLeft=e,e>=this.getMaxOffset(t)-i)a=r.length-1;else{let n=t.itemsPerSlide||1,i=r.length,o=0,s=Math.ceil(i/n)-1;for(;s-o>1;){let t=Math.floor((o+s)/2);e>r[t*n].left?o=t:s=t}let c=Math.abs(e-r[o*n].left),l=Math.abs(e-r[s*n].left);a=this.normalizeIndex(t,(c>l?s:o)*n)}t.index!==a&&(this.skipScrolling=!0,n.preserveItems=!0,this.setState(`index`,a),this.emit(`scroll`,{index:a}))}getOffset(e){let{items:t,index:n}=e;return t.length&&Math.min(t[n].left,this.getMaxOffset(e))||0}getMaxOffset({items:e,slideWidth:t}){return e.length&&Math.max(e[e.length-1].right-t,0)||0}getSlide({index:e,itemsPerSlide:t},n=e){if(t)return Math.ceil(n/t)}normalizeIndex({items:e,itemsPerSlide:t},n){if(n>0){let r=n;return r%=e.length||1,r-=r%(t||1),r=Math.abs(r),r}return 0}isAnimating(e){let{items:t,index:n}=e;if(!t.length)return!1;let r=t[n];return r.left===void 0||r.right===void 0}getNextIndex(e,t){let{index:n,items:r,slideWidth:i,itemsPerSlide:a}=e,o=n,s;if(t===_&&o===0)o=r.length-1;else{do s=r[o+=t];while(s&&s.fullyVisible);if(t===_&&!a){let e=s.right-i;do s=r[--o];while(s&&s.left>=e);o+=1}}return this.normalizeIndex(e,o)}getTemplateData(e){let{config:t,autoplayInterval:n,items:r,itemsPerSlide:i,slideWidth:a,gap:o}=e,s=t.offsetOverride!==void 0,c=r.length<=i;e.index=this.normalizeIndex(e,e.index);let l=this.getOffset(e),u=c||!n&&l===0,d=c||!n&&l===this.getMaxOffset(e),ee=this.isAnimating(e)?e.bothControlsDisabled:u&&d,f,p,te;if(i){let t=i+e.peek;f=this.getSlide(e),p=`calc(${100/t}% - ${(t-1)*o/t}px)`,te=this.getSlide(e,r.length)}return r.forEach((e,t)=>{let{style:n,transform:i}=e,s=t!==r.length-1&&`${o}px`;typeof n==`string`?(e.style=`${n};flex-basis:${p};margin-right:${s};`,i&&(e.style+=`transform:${i}`)):e.style=Object.assign({},n,{width:p,"margin-right":s,transform:i}),e.fullyVisible=e.left===void 0||e.left-l>=-.01&&e.right-l<=a+.01}),Object.assign({},e,{items:r,slide:f,offset:s?t.offsetOverride:l,disableTransition:s,totalSlides:te,prevControlDisabled:u,nextControlDisabled:d,bothControlsDisabled:ee})}move(e){let{state:t}=this,{index:n,items:r,itemsPerSlide:i,autoplayInterval:a,slideWidth:o,gap:s,peek:c,config:l}=t,u=this.getNextIndex(t,e),d;if(l.preserveItems=!0,this.isMoving=!0,this.skipScrolling=!1,a){if(e===De&&u<n){d=-o-s;for(let e=Math.ceil(i+c);e--;){let n=r[r.length-e-1];n.transform=`translateX(${(this.getMaxOffset(t)+o+s)*-1}px)`}}else if(e===_&&u>n){d=this.getMaxOffset(t)+o+s;for(let e=Math.ceil(i+c);e--;){let n=r[e];n.transform=`translateX(${this.getMaxOffset(t)+o+s}px)`}}l.offsetOverride=d}return this.setState(`index`,u),this.once(`move`,()=>{this.isMoving=!1,d!==void 0&&(r.forEach(e=>{e.transform=void 0}),g(this.listEl,e=>{e.style.transform=``}),this.measureDeferred&&(this.measureDeferred=!1,this.requestMeasure()))}),u}handleMove(e,t){if(this.isMoving)return;let{state:n}=this,r=this.move(e),i=this.getSlide(n,r);this.emit(`slide`,{slide:i+1,originalEvent:t}),this.emit(`${e===1?`next`:`previous`}`,{originalEvent:t})}handleStartInteraction(){this.setState(`interacting`,!0)}handleEndInteraction(){clearTimeout(this.interactionEndTimeout),this.isMoving?this.state.interacting&&(this.interactionEndTimeout=setTimeout(()=>{this.handleEndInteraction()},100)):this.setState(`interacting`,!1)}togglePlay(e){let{state:{config:t,paused:n}}=this;t.preserveItems=!0,this.setState(`paused`,!n),n&&!this.isMoving&&this.move(De),this.emit(`${n?`play`:`pause`}`,{originalEvent:e})}onInput(e){let t=parseInt(e.gap,10),n={htmlAttributes:a(e,[`class`,`style`,`index`,`type`,`slide`,`gap`,`autoplay`,`paused`,`itemsPerSlide`,`a11yPreviousText`,`a11yNextText`,`a11yPlayText`,`a11yPauseText`,`item`,`hiddenScrollbar`]),classes:[`carousel`,e.hiddenScrollbar&&`carousel--hidden-scrollbar`,e.class],style:e.style,config:{},gap:isNaN(t)?16:t,index:parseInt(e.index,10)||0,itemsPerSlide:parseFloat(e.itemsPerSlide)||0,a11yPreviousText:e.a11yPreviousText||`Previous Slide`,a11yNextText:e.a11yNextText||`Next Slide`,a11yPauseText:e.a11yPauseText||`Pause`,a11yPlayText:e.a11yPlayText||`Play`,items:[],slideWidth:0,autoplayInterval:0,paused:!1,peek:0,interacting:!1,bothControlsDisabled:!1},r=[`class`,`style`,`key`],{itemsPerSlide:i}=n;if(i&&(n.peek=i%1,n.itemsPerSlide=i-n.peek,n.classes.push(`carousel--slides`),!n.peek&&!e.autoplay&&!e.noPeek&&(n.peek=.1),n.peek&&n.classes.push(`carousel--peek`),e.autoplay)){let t=e.item?.length<=i;n.autoplayInterval=parseInt(e.autoplay,10)||4e3,n.classes.push(`carousel__autoplay`),n.paused=!!(t||e.paused),n.interacting=!1}n.config.nativeScrolling=!n.autoplayInterval,n.items=(e.item||[]).map((e,t)=>{let i=!n.itemsPerSlide||t%n.itemsPerSlide===0;return{htmlAttributes:a(e,r),class:i?[`carousel__snap-point`,e.class]:e.class,key:e.key||t.toString(),style:e.style,renderBody:e.renderBody}}),this.skipScrolling=this.state&&this.state.index===n.index,this.state=n}onRender(){typeof window<`u`&&this.cleanupAsync()}onMount(){this.listEl=this.getEl(`list`),this.nextEl=this.getEl(`next`),this.containerEl=this.getEl(`container`),this.lastScrollLeft=0,this.measureDeferred=!1,this.observedWidths=new Map,this.resizeObserver=new ResizeObserver(e=>{let t=!1;for(let{target:n,borderBoxSize:r}of e){let e=r[0].inlineSize;this.observedWidths.get(n)!==e&&(this.observedWidths.set(n,e),t=!0)}t&&(this.state.items.some(({transform:e})=>e)?this.measureDeferred=!0:this.measure())}),this.once(`destroy`,()=>this.resizeObserver.disconnect()),this.once(`destroy`,ye(this.listEl,()=>{let{config:e}=this.state;e.nativeScrolling&&!e.scrollTransitioning&&this.handleScroll(this.listEl.scrollLeft)})),this.subscribeTo(this.listEl).on(`transitionend`,({target:e})=>{e===this.listEl&&!this.state.config.nativeScrolling&&this.emitUpdate()}),this.skipScrolling=!1,ae&&(this.state.paused=!0),this.onRenderLegacy()}onUpdate(){this.onRenderLegacy()}onDestroy(){this.cleanupAsync()}onRenderLegacy(){let{listEl:e,state:t}=this,{config:n,items:r,autoplayInterval:i,paused:a,interacting:o}=t;if(r.length){if(n.offsetOverride){n.offsetOverride=void 0,this.renderFrame=requestAnimationFrame(()=>this.setStateDirty(void 0));return}if(n.preserveItems){if(n.preserveItems=!1,this.focusFrame=requestAnimationFrame(()=>{let t=[];g(e,e=>{t.push([re(e),e.getAttribute(`aria-hidden`)===`true`?e=>e.setAttribute(`tabindex`,`-1`):e=>e.hasAttribute(`data-carousel-tabindex`)?e.setAttribute(`tabindex`,e.getAttribute(`data-carousel-tabindex`)??`-1`):e.removeAttribute(`tabindex`)])}),t.forEach(([e,t])=>e.forEach(t))}),n.nativeScrolling){if(this.skipScrolling)this.emitUpdate();else{let r=this.getOffset(t);r===this.lastScrollLeft?this.isMoving&&(n.scrollTransitioning=!0,this.cancelScrollTransition=Ce(e,this.getOffset(t),this.emitUpdate.bind(this))):(n.scrollTransitioning=!0,this.lastScrollLeft=r,this.cancelScrollTransition=Ce(e,r,this.emitUpdate.bind(this)))}}if(i&&!a&&!o){let e=this.move.bind(this,De);this.autoplayTimeout=setTimeout(()=>{if(this.isMoving)return this.once(`move`,e);e()},i)}return}this.requestMeasure()}}requestMeasure(){let{containerEl:e,listEl:t,resizeObserver:n}=this;this.observedWidths.clear(),n.disconnect(),n.observe(e,{box:`border-box`}),g(t,e=>n.observe(e,{box:`border-box`}))}measure(){let{containerEl:e,listEl:t,state:n}=this,{config:r,items:i}=n;if(!i.length)return;let{width:a}=e.getBoundingClientRect(),{left:o}=t.firstElementChild.getBoundingClientRect();this.lastScrollLeft=t.scrollLeft,this.setStateDirty(`slideWidth`,a),r.preserveItems=!0,g(t,(e,t)=>{let n=i[t],{left:r,right:a}=e.getBoundingClientRect();n.left=r-o,n.right=a-o})}}})))()}var Ae,v,je,y,b,Me,Ne,Pe,Fe,Ie,Le,x,S,Re;function C(){return(C=t((()=>{Ae=d(),ve(),oe(),v=e(f()),je=e(p()),y=e(i()),b=e(s()),Me=e(l()),Ne=e(ce()),Pe=e(te()),le(),de(),fe(),ke(),Fe=e(o()),Ie=u(),Le=e(c()),x=`s`,S=(0,Ae.t)(x),(0,Ie.r)(x,()=>S),Re=Oe,S._=(0,Fe.default)(function(e,t,n,r,i,a){var o=r.getTemplateData(i),s=o.config;t.be(`div`,(0,Me.default)(o.htmlAttributes,{"aria-roledescription":o.htmlAttributes[`aria-roledescription`]||`Carousel`,class:(0,y.default)(o.classes),style:(0,b.default)(o.style),role:`group`}),`0`,r,null,4),t.be(`div`,{class:(0,y.default)([`carousel__container`,o.bothControlsDisabled&&`carousel__container--controls-disabled`]),id:n.elId(`container`)},`@container`,r,null,1,{onfocusin:n.d(`focusin`,!!o.autoplayInterval&&`handleStartInteraction`,!1),ontouchstart:n.d(`touchstart`,!!o.autoplayInterval&&`handleStartInteraction`,!1),onmouseover:n.d(`mouseover`,!!o.autoplayInterval&&`handleStartInteraction`,!1),onfocusout:n.d(`focusout`,!!o.autoplayInterval&&`handleEndInteraction`,!1),onmouseout:n.d(`mouseout`,!!o.autoplayInterval&&`handleEndInteraction`,!1),ontouchend:n.d(`touchend`,!!o.autoplayInterval&&`handleEndInteraction`,!1)}),t.be(`button`,{class:`carousel__control carousel__control--prev`,type:`button`,"aria-label":o.a11yPreviousText,"aria-disabled":o.prevControlDisabled&&`true`},`1`,r,null,0,{onclick:n.d(`click`,!o.prevControlDisabled&&`handleMove`,!1,[-1])}),(0,v.default)(se,{},t,n,`2`),t.ee(),t.be(`div`,{class:(0,y.default)([`carousel__viewport`,!o.itemsPerSlide&&!o.nextControlDisabled&&!o.autoplayInterval&&`carousel__viewport--mask`])},`3`,r,null,1),t.be(`ul`,{class:(0,y.default)([`carousel__list`,e.imageTreatment===`matte`&&`carousel__list--image-treatment`]),style:(0,b.default)(!s.nativeScrolling&&!!o.offset&&{transform:`translate3d(`+o.offset*-1+`px,0,0)`,transition:o.disableTransition?`none`:void 0}),id:n.elId(`list`)},`@list`,r,null,1);for(let e of(0,Pe.default)(o.items)){let i=`@${e.key}`,a=`[${i}]`;t.be(`li`,(0,Me.default)(e.htmlAttributes,{class:(0,y.default)(e.class),style:(0,b.default)(e.style),"aria-hidden":!e.fullyVisible&&`true`}),i,r,null,4),(0,v.default)(Ne.default,{n:!0,b:!0,i:!!s.preserveItems,renderBody:t=>{(0,je.default)(t,e.renderBody,null,null,null,null,n,`4`+a)}},t,n,i),t.ee()}t.ee(),t.ee(),t.be(`button`,{class:`carousel__control carousel__control--next`,type:`button`,"aria-label":o.a11yNextText,"aria-disabled":o.nextControlDisabled&&`true`,id:n.elId(`next`)},`@next`,r,null,0,{onclick:n.d(`click`,!o.nextControlDisabled&&`handleMove`,!1,[1])}),(0,v.default)(ue,{},t,n,`5`),t.ee(),o.autoplayInterval&&!o.bothControlsDisabled&&(t.be(`button`,{type:`button`,"aria-label":o.paused?o.a11yPlayText:o.a11yPauseText,class:`carousel__playback`},`6`,r,null,0,{onclick:n.d(`click`,`togglePlay`,!1)}),o.paused?(0,v.default)(pe,{},t,n,`7`):(0,v.default)(me,{},t,n,`8`),t.ee()),t.ee(),t.ee()},{t:x},Re),S.Component=(0,Le.default)(Re,S._)})))()}var ze;function Be(){return(Be=t((()=>{ze=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
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
`})))()}var Ve,He,w,Ue,We,Ge,Ke,T,E,qe,Je;function Ye(){return(Ye=t((()=>{Ve=d(),He=e(h()),w=m(),C(),Ue=e(f()),We=e(o()),Ge=u(),Ke=e(c()),T=`uPS9Tb3`,E=(0,Ve.t)(T),qe=(0,He.default)(`style`,null,1).t(`
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
`),(0,Ge.r)(T,()=>E),Je={},E._=(0,We.default)(function(e,t,n,r,i,a){t.n(qe,r),(0,Ue.default)(S,(0,w.i)(()=>{(0,w.r)(`item`,{style:{width:`400px`},class:`demo-card`,renderBody:e=>{e.t(`Card 1`,r)}}),(0,w.r)(`item`,{style:{width:`400px`},class:`demo-card`,renderBody:e=>{e.t(`Card 2`,r)}}),(0,w.r)(`item`,{style:{width:`400px`},class:`demo-card`,renderBody:e=>{e.t(`Card 3`,r)}}),(0,w.r)(`item`,{style:{width:`400px`},class:`demo-card`,renderBody:e=>{e.t(`Card 4`,r)}}),(0,w.r)(`item`,{style:{width:`400px`},class:`demo-card`,renderBody:e=>{e.t(`Card 5`,r)}}),(0,w.r)(`item`,{style:{width:`400px`},class:`demo-card`,renderBody:e=>{e.t(`Card 6`,r)}}),(0,w.r)(`item`,{style:{width:`400px`},class:`demo-card`,renderBody:e=>{e.t(`Card 7`,r)}}),(0,w.r)(`item`,{style:{width:`400px`},class:`demo-card`,renderBody:e=>{e.t(`Card 8`,r)}}),(0,w.r)(`item`,{style:{width:`400px`},class:`demo-card`,renderBody:e=>{e.t(`Card 9`,r)}}),(0,w.r)(`item`,{style:{width:`400px`},class:`demo-card`,renderBody:e=>{e.t(`Card 10`,r)}})},{...e,item:void 0}),t,n,`1`,[[`move`,`emit`,!1,[`move`]],[`next`,`emit`,!1,[`next`]],[`previous`,`emit`,!1,[`previous`]],[`scroll`,`emit`,!1,[`scroll`]],[`slide`,`emit`,!1,[`slide`]]])},{t:T,s:!0},Je),E.Component=(0,Ke.default)(Je,E._)})))()}var Xe;function Ze(){return(Ze=t((()=>{Xe=`export interface Input {
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
    <@item style={ width: "400px" } class="demo-card">Card 1</@item>
    <@item style={ width: "400px" } class="demo-card">Card 2</@item>
    <@item style={ width: "400px" } class="demo-card">Card 3</@item>
    <@item style={ width: "400px" } class="demo-card">Card 4</@item>
    <@item style={ width: "400px" } class="demo-card">Card 5</@item>
    <@item style={ width: "400px" } class="demo-card">Card 6</@item>
    <@item style={ width: "400px" } class="demo-card">Card 7</@item>
    <@item style={ width: "400px" } class="demo-card">Card 8</@item>
    <@item style={ width: "400px" } class="demo-card">Card 9</@item>
    <@item style={ width: "400px" } class="demo-card">Card 10</@item>
</ebay-carousel>
`})))()}var Qe,$e,D,et,tt,nt,rt,O,k,it,at;function ot(){return(ot=t((()=>{Qe=d(),$e=e(h()),D=m(),C(),et=e(f()),tt=e(o()),nt=u(),rt=e(c()),O=`eqUNKaj`,k=(0,Qe.t)(O),it=(0,$e.default)(`style`,null,1).t(`
    .demo2-card {
        color: #cdf4fd;
        background: #a1208b;
        font-size: 36px;
        font-weight: bold;
        height: 330px;
        line-height: 330px;
        text-align: center;
    }
`),(0,nt.r)(O,()=>k),at={},k._=(0,tt.default)(function(e,t,n,r,i,a){t.n(it,r),(0,et.default)(S,(0,D.i)(()=>{(0,D.r)(`item`,{style:{width:`400px`},class:`demo2-card`,renderBody:e=>{e.t(`Card 1`,r)}}),(0,D.r)(`item`,{style:{width:`400px`},class:`demo2-card`,renderBody:e=>{e.t(`Card 2`,r)}}),(0,D.r)(`item`,{style:{width:`400px`},class:`demo2-card`,renderBody:e=>{e.t(`Card 3`,r)}}),(0,D.r)(`item`,{style:{width:`400px`},class:`demo2-card`,renderBody:e=>{e.t(`Card 4`,r)}}),(0,D.r)(`item`,{style:{width:`400px`},class:`demo2-card`,renderBody:e=>{e.t(`Card 5`,r)}}),(0,D.r)(`item`,{style:{width:`400px`},class:`demo2-card`,renderBody:e=>{e.t(`Card 6`,r)}}),(0,D.r)(`item`,{style:{width:`400px`},class:`demo2-card`,renderBody:e=>{e.t(`Card 7`,r)}}),(0,D.r)(`item`,{style:{width:`400px`},class:`demo2-card`,renderBody:e=>{e.t(`Card 8`,r)}}),(0,D.r)(`item`,{style:{width:`400px`},class:`demo2-card`,renderBody:e=>{e.t(`Card 9`,r)}}),(0,D.r)(`item`,{style:{width:`400px`},class:`demo2-card`,renderBody:e=>{e.t(`Card 10`,r)}})},{...e,itemsPerSlide:e.itemsPerSlide||2,item:void 0}),t,n,`1`,[[`move`,`emit`,!1,[`move`]],[`next`,`emit`,!1,[`next`]],[`previous`,`emit`,!1,[`previous`]],[`scroll`,`emit`,!1,[`scroll`]],[`slide`,`emit`,!1,[`slide`]]])},{t:O,s:!0},at),k.Component=(0,rt.default)(at,k._)})))()}var st;function ct(){return(ct=t((()=>{st=`export interface Input {
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
    <@item style={ width: "400px" } class="demo2-card">Card 1</@item>
    <@item style={ width: "400px" } class="demo2-card">Card 2</@item>
    <@item style={ width: "400px" } class="demo2-card">Card 3</@item>
    <@item style={ width: "400px" } class="demo2-card">Card 4</@item>
    <@item style={ width: "400px" } class="demo2-card">Card 5</@item>
    <@item style={ width: "400px" } class="demo2-card">Card 6</@item>
    <@item style={ width: "400px" } class="demo2-card">Card 7</@item>
    <@item style={ width: "400px" } class="demo2-card">Card 8</@item>
    <@item style={ width: "400px" } class="demo2-card">Card 9</@item>
    <@item style={ width: "400px" } class="demo2-card">Card 10</@item>
</ebay-carousel>
`})))()}var lt,A,j,ut,dt,ft,pt,M,N,mt,ht,gt,_t,vt,yt,bt,xt;function St(){return(St=t((()=>{lt=d(),A=e(h()),j=m(),C(),ut=e(f()),dt=e(o()),ft=u(),pt=e(c()),M=`CSwgHc9`,N=(0,lt.t)(M),mt=(0,A.default)(`style`,null,1).t(`
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
`),ht=(0,A.default)(`img`,{"aria-label":`photo 1`,src:`http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/aztec-pyramid.jpeg`},0),gt=(0,A.default)(`img`,{"aria-label":`photo 2`,src:`http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/falls.jpeg`},0),_t=(0,A.default)(`img`,{"aria-label":`photo 3`,src:`http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/mountain.jpeg`},0),vt=(0,A.default)(`img`,{"aria-label":`photo 4`,src:`http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/shoes.jpeg`},0),yt=(0,A.default)(`img`,{"aria-label":`photo 5`,src:`http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/tall-cat.jpeg`},0),bt=(0,A.default)(`img`,{"aria-label":`photo 6`,src:`http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/wide-cat.jpeg`},0),(0,ft.r)(M,()=>N),xt={},N._=(0,dt.default)(function(e,t,n,r,i,a){t.n(mt,r),(0,ut.default)(S,(0,j.i)(()=>{(0,j.r)(`item`,{renderBody:e=>{e.n(ht,r)}}),(0,j.r)(`item`,{renderBody:e=>{e.n(gt,r)}}),(0,j.r)(`item`,{renderBody:e=>{e.n(_t,r)}}),(0,j.r)(`item`,{renderBody:e=>{e.n(vt,r)}}),(0,j.r)(`item`,{renderBody:e=>{e.n(yt,r)}}),(0,j.r)(`item`,{renderBody:e=>{e.n(bt,r)}}),(0,j.r)(`item`,{style:{width:`400px`},class:`demo-card`,renderBody:e=>{e.t(`Additional Item`,r)}}),(0,j.r)(`item`,{style:{width:`400px`},class:`demo-card`,renderBody:e=>{e.t(`Additional Item 2`,r)}})},{imageTreatment:`matte`,...e,item:void 0}),t,n,`1`,[[`move`,`emit`,!1,[`move`]],[`next`,`emit`,!1,[`next`]],[`previous`,`emit`,!1,[`previous`]],[`scroll`,`emit`,!1,[`scroll`]],[`slide`,`emit`,!1,[`slide`]]])},{t:M,s:!0},xt),N.Component=(0,pt.default)(xt,N._)})))()}var Ct;function wt(){return(wt=t((()=>{Ct=`export interface Input {
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
    <@item style={ width: "400px" } class="demo-card">Additional Item</@item>
    <@item style={ width: "400px" } class="demo-card">Additional Item 2</@item>
</ebay-carousel>
`})))()}var Tt,Et,P,Dt,Ot,kt,At,F,I,jt,Mt;function Nt(){return(Nt=t((()=>{Tt=d(),Et=e(h()),P=m(),C(),Dt=e(f()),Ot=e(o()),kt=u(),At=e(c()),F=`T11Jx7r`,I=(0,Tt.t)(F),jt=(0,Et.default)(`style`,null,1).t(`
    .demo2-card {
        color: #cdf4fd;
        background: #a1208b;
        font-size: 36px;
        font-weight: bold;
        height: 330px;
        line-height: 330px;
        text-align: center;
    }
`),(0,kt.r)(F,()=>I),Mt={},I._=(0,Ot.default)(function(e,t,n,r,i,a){t.n(jt,r),(0,Dt.default)(S,(0,P.i)(()=>{(0,P.r)(`item`,{style:{width:`400px`},class:`demo2-card`,renderBody:e=>{e.t(`Card 1`,r)}}),(0,P.r)(`item`,{style:{width:`400px`},class:`demo2-card`,renderBody:e=>{e.t(`Card 2`,r)}}),(0,P.r)(`item`,{style:{width:`400px`},class:`demo2-card`,renderBody:e=>{e.t(`Card 3`,r)}}),(0,P.r)(`item`,{style:{width:`400px`},class:`demo2-card`,renderBody:e=>{e.t(`Card 4`,r)}}),(0,P.r)(`item`,{style:{width:`400px`},class:`demo2-card`,renderBody:e=>{e.t(`Card 5`,r)}}),(0,P.r)(`item`,{style:{width:`400px`},class:`demo2-card`,renderBody:e=>{e.t(`Card 6`,r)}}),(0,P.r)(`item`,{style:{width:`400px`},class:`demo2-card`,renderBody:e=>{e.t(`Card 7`,r)}}),(0,P.r)(`item`,{style:{width:`400px`},class:`demo2-card`,renderBody:e=>{e.t(`Card 8`,r)}}),(0,P.r)(`item`,{style:{width:`400px`},class:`demo2-card`,renderBody:e=>{e.t(`Card 9`,r)}}),(0,P.r)(`item`,{style:{width:`400px`},class:`demo2-card`,renderBody:e=>{e.t(`Card 10`,r)}})},{...e,itemsPerSlide:e.itemsPerSlide||1,autoplay:e.autoplay||!0,item:void 0}),t,n,`1`,[[`move`,`emit`,!1,[`move`]],[`next`,`emit`,!1,[`next`]],[`previous`,`emit`,!1,[`previous`]],[`scroll`,`emit`,!1,[`scroll`]],[`slide`,`emit`,!1,[`slide`]],[`play`,`emit`,!1,[`play`]],[`pause`,`emit`,!1,[`pause`]]])},{t:F,s:!0},Mt),I.Component=(0,At.default)(Mt,I._)})))()}var Pt;function Ft(){return(Ft=t((()=>{Pt=`export interface Input {
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
    <@item style={ width: "400px" } class="demo2-card">Card 1</@item>
    <@item style={ width: "400px" } class="demo2-card">Card 2</@item>
    <@item style={ width: "400px" } class="demo2-card">Card 3</@item>
    <@item style={ width: "400px" } class="demo2-card">Card 4</@item>
    <@item style={ width: "400px" } class="demo2-card">Card 5</@item>
    <@item style={ width: "400px" } class="demo2-card">Card 6</@item>
    <@item style={ width: "400px" } class="demo2-card">Card 7</@item>
    <@item style={ width: "400px" } class="demo2-card">Card 8</@item>
    <@item style={ width: "400px" } class="demo2-card">Card 9</@item>
    <@item style={ width: "400px" } class="demo2-card">Card 10</@item>
</ebay-carousel>
`})))()}var It,L,R,Lt,Rt,zt,Bt,z,B,Vt,Ht,Ut,Wt,Gt,Kt,qt,Jt,Yt,Xt;function Zt(){return(Zt=t((()=>{It=d(),L=e(h()),R=m(),C(),Lt=e(f()),Rt=e(o()),zt=u(),Bt=e(c()),z=`EktCWa9`,B=(0,It.t)(z),Vt=(0,L.default)(`style`,null,1).t(`
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
`),Ht=(0,L.default)(`div`,{class:`preserve-tabindex-card`},2).e(`a`,{href:`https://www.ebay.com`,"data-carousel-tabindex":`-1`},1).t(`Image here`).e(`a`,{href:`https://www.ebay.com`},1).t(`Card 1`),Ut=(0,L.default)(`div`,{class:`preserve-tabindex-card`},2).e(`a`,{href:`https://www.ebay.com`,"data-carousel-tabindex":`-1`},1).t(`Image here`).e(`a`,{href:`https://www.ebay.com`},1).t(`Card 2`),Wt=(0,L.default)(`div`,{class:`preserve-tabindex-card`},2).e(`a`,{href:`https://www.ebay.com`,"data-carousel-tabindex":`-1`},1).t(`Image here`).e(`a`,{href:`https://www.ebay.com`},1).t(`Card 3`),Gt=(0,L.default)(`div`,{class:`preserve-tabindex-card`},2).e(`a`,{href:`https://www.ebay.com`,"data-carousel-tabindex":`-1`},1).t(`Image here`).e(`a`,{href:`https://www.ebay.com`},1).t(`Card 4`),Kt=(0,L.default)(`div`,{class:`preserve-tabindex-card`},2).e(`a`,{href:`https://www.ebay.com`,"data-carousel-tabindex":`-1`},1).t(`Image here`).e(`a`,{href:`https://www.ebay.com`},1).t(`Card 5`),qt=(0,L.default)(`div`,{class:`preserve-tabindex-card`},2).e(`a`,{href:`https://www.ebay.com`,"data-carousel-tabindex":`-1`},1).t(`Image here`).e(`a`,{href:`https://www.ebay.com`},1).t(`Card 6`),Jt=(0,L.default)(`div`,{class:`preserve-tabindex-card`},2).e(`a`,{href:`https://www.ebay.com`,"data-carousel-tabindex":`-1`},1).t(`Image here`).e(`a`,{href:`https://www.ebay.com`},1).t(`Card 7`),Yt=(0,L.default)(`div`,{class:`preserve-tabindex-card`},2).e(`a`,{href:`https://www.ebay.com`,"data-carousel-tabindex":`-1`},1).t(`Image here`).e(`a`,{href:`https://www.ebay.com`},1).t(`Card 8`),(0,zt.r)(z,()=>B),Xt={},B._=(0,Rt.default)(function(e,t,n,r,i,a){t.n(Vt,r),(0,Lt.default)(S,(0,R.i)(()=>{(0,R.r)(`item`,{renderBody:e=>{e.n(Ht,r)}}),(0,R.r)(`item`,{renderBody:e=>{e.n(Ut,r)}}),(0,R.r)(`item`,{renderBody:e=>{e.n(Wt,r)}}),(0,R.r)(`item`,{renderBody:e=>{e.n(Gt,r)}}),(0,R.r)(`item`,{renderBody:e=>{e.n(Kt,r)}}),(0,R.r)(`item`,{renderBody:e=>{e.n(qt,r)}}),(0,R.r)(`item`,{renderBody:e=>{e.n(Jt,r)}}),(0,R.r)(`item`,{renderBody:e=>{e.n(Yt,r)}})},{...e,item:void 0}),t,n,`1`,[[`move`,`emit`,!1,[`move`]],[`next`,`emit`,!1,[`next`]],[`previous`,`emit`,!1,[`previous`]],[`scroll`,`emit`,!1,[`scroll`]],[`slide`,`emit`,!1,[`slide`]]])},{t:z,s:!0},Xt),B.Component=(0,Bt.default)(Xt,B._)})))()}var Qt;function $t(){return($t=t((()=>{Qt=`export interface Input {
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
            <a href="https://www.ebay.com">Card 1</a>
        </div>
    </@item>
    <@item>
        <div class="preserve-tabindex-card">
            <a href="https://www.ebay.com" data-carousel-tabindex="-1">
                Image here
            </a>
            <a href="https://www.ebay.com">Card 2</a>
        </div>
    </@item>

    <@item>
        <div class="preserve-tabindex-card">
            <a href="https://www.ebay.com" data-carousel-tabindex="-1">
                Image here
            </a>
            <a href="https://www.ebay.com">Card 3</a>
        </div>
    </@item>

    <@item>
        <div class="preserve-tabindex-card">
            <a href="https://www.ebay.com" data-carousel-tabindex="-1">
                Image here
            </a>
            <a href="https://www.ebay.com">Card 4</a>
        </div>
    </@item>

    <@item>
        <div class="preserve-tabindex-card">
            <a href="https://www.ebay.com" data-carousel-tabindex="-1">
                Image here
            </a>
            <a href="https://www.ebay.com">Card 5</a>
        </div>
    </@item>

    <@item>
        <div class="preserve-tabindex-card">
            <a href="https://www.ebay.com" data-carousel-tabindex="-1">
                Image here
            </a>
            <a href="https://www.ebay.com">Card 6</a>
        </div>
    </@item>

    <@item>
        <div class="preserve-tabindex-card">
            <a href="https://www.ebay.com" data-carousel-tabindex="-1">
                Image here
            </a>
            <a href="https://www.ebay.com">Card 7</a>
        </div>
    </@item>
    <@item>
        <div class="preserve-tabindex-card">
            <a href="https://www.ebay.com" data-carousel-tabindex="-1">
                Image here
            </a>
            <a href="https://www.ebay.com">Card 8</a>
        </div>
    </@item>
</ebay-carousel>
`})))()}var en,tn,V,nn,rn,an,on,H,U,sn,cn;function ln(){return(ln=t((()=>{en=d(),tn=e(h()),V=m(),C(),nn=e(f()),rn=e(o()),an=u(),on=e(c()),H=`i9pYoZa`,U=(0,en.t)(H),sn=(0,tn.default)(`style`,null,1).t(`
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
`),(0,an.r)(H,()=>U),cn={},U._=(0,rn.default)(function(e,t,n,r,i,a){t.n(sn,r),(0,nn.default)(S,(0,V.i)(()=>{(0,V.r)(`item`,{style:`width:100px`,class:`demo-card3`,renderBody:e=>{e.t(`Card 1`,r)}}),(0,V.r)(`item`,{style:`width:57px`,class:`demo-card3`,renderBody:e=>{e.t(`C2`,r)}}),(0,V.r)(`item`,{style:`width:120px`,class:`demo-card3`,renderBody:e=>{e.t(`Card 3`,r)}}),(0,V.r)(`item`,{style:`width:200px`,class:`demo-card3`,renderBody:e=>{e.t(`Card 4`,r)}}),(0,V.r)(`item`,{style:`width:130px`,class:`demo-card3`,renderBody:e=>{e.t(`Card 5`,r)}}),(0,V.r)(`item`,{style:`width:150px`,class:`demo-card3`,renderBody:e=>{e.t(`Card 6`,r)}}),(0,V.r)(`item`,{style:`width:100px`,class:`demo-card3`,renderBody:e=>{e.t(`Card 7`,r)}}),(0,V.r)(`item`,{style:`width:200px`,class:`demo-card3`,renderBody:e=>{e.t(`Card 8`,r)}}),(0,V.r)(`item`,{style:`width:60px`,class:`demo-card3`,renderBody:e=>{e.t(`C9`,r)}}),(0,V.r)(`item`,{style:`width:140px`,class:`demo-card3`,renderBody:e=>{e.t(`Card 10`,r)}})},{...e,item:void 0}),t,n,`1`,[[`move`,`emit`,!1,[`move`]],[`next`,`emit`,!1,[`next`]],[`previous`,`emit`,!1,[`previous`]],[`scroll`,`emit`,!1,[`scroll`]],[`slide`,`emit`,!1,[`slide`]]])},{t:H,s:!0},cn),U.Component=(0,on.default)(cn,U._)})))()}var un;function dn(){return(dn=t((()=>{un=`export interface Input {
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
    <@item style="width:100px" class="demo-card3">Card 1</@item>
    <@item style="width:57px" class="demo-card3">C2</@item>
    <@item style="width:120px" class="demo-card3">Card 3</@item>
    <@item style="width:200px" class="demo-card3">Card 4</@item>
    <@item style="width:130px" class="demo-card3">Card 5</@item>
    <@item style="width:150px" class="demo-card3">Card 6</@item>
    <@item style="width:100px" class="demo-card3">Card 7</@item>
    <@item style="width:200px" class="demo-card3">Card 8</@item>
    <@item style="width:60px" class="demo-card3">C9</@item>
    <@item style="width:140px" class="demo-card3">Card 10</@item>
</ebay-carousel>
`})))()}var fn,pn,W,mn,hn,gn,_n,G,K,vn,yn;function bn(){return(bn=t((()=>{fn=d(),pn=e(h()),W=m(),C(),mn=e(f()),he(),hn=e(o()),gn=u(),_n=e(c()),G=`o2aNUEV`,K=(0,fn.t)(G),vn=(0,pn.default)(`style`,null,1).t(`
    .demo2-card {
        color: #cdf4fd;
        background: #a1208b;
        font-size: 36px;
        font-weight: bold;
        height: 330px;
        line-height: 330px;
        text-align: center;
    }
`),(0,gn.r)(G,()=>K),yn={onCreate(){this.onMove=({visibleIndexes:e})=>{this.state.index=e[0]},this.handleChange=({value:e})=>{this.state.index=+e},this.state={index:0}}},K._=(0,hn.default)(function(e,t,n,r,i,a){t.n(vn,r),(0,mn.default)(S,(0,W.i)(()=>{(0,W.r)(`item`,{style:{width:`400px`},class:`demo2-card`,renderBody:e=>{e.t(`Card 1`,r)}}),(0,W.r)(`item`,{style:{width:`400px`},class:`demo2-card`,renderBody:e=>{e.t(`Card 2`,r)}}),(0,W.r)(`item`,{style:{width:`400px`},class:`demo2-card`,renderBody:e=>{e.t(`Card 3`,r)}}),(0,W.r)(`item`,{style:{width:`400px`},class:`demo2-card`,renderBody:e=>{e.t(`Card 4`,r)}}),(0,W.r)(`item`,{style:{width:`400px`},class:`demo2-card`,renderBody:e=>{e.t(`Card 5`,r)}}),(0,W.r)(`item`,{style:{width:`400px`},class:`demo2-card`,renderBody:e=>{e.t(`Card 6`,r)}}),(0,W.r)(`item`,{style:{width:`400px`},class:`demo2-card`,renderBody:e=>{e.t(`Card 7`,r)}}),(0,W.r)(`item`,{style:{width:`400px`},class:`demo2-card`,renderBody:e=>{e.t(`Card 8`,r)}}),(0,W.r)(`item`,{style:{width:`400px`},class:`demo2-card`,renderBody:e=>{e.t(`Card 9`,r)}}),(0,W.r)(`item`,{style:{width:`400px`},class:`demo2-card`,renderBody:e=>{e.t(`Card 10`,r)}})},{...e,index:i.index,itemsPerSlide:e.itemsPerSlide||2,item:void 0}),t,n,`1`,[[`next`,`emit`,!1,[`next`]],[`previous`,`emit`,!1,[`previous`]],[`move`,`onMove`,!1]]),(0,mn.default)(ge,{type:`number`,value:0},t,n,`2`,[[`input-change`,`handleChange`,!1]])},{t:G},yn),K.Component=(0,_n.default)(yn,K._)})))()}var xn;function Sn(){return(Sn=t((()=>{xn=`import type { Input as CarouselInput } from "<ebay-carousel>";
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
    <@item style={ width: "400px" } class="demo2-card">Card 1</@item>
    <@item style={ width: "400px" } class="demo2-card">Card 2</@item>
    <@item style={ width: "400px" } class="demo2-card">Card 3</@item>
    <@item style={ width: "400px" } class="demo2-card">Card 4</@item>
    <@item style={ width: "400px" } class="demo2-card">Card 5</@item>
    <@item style={ width: "400px" } class="demo2-card">Card 6</@item>
    <@item style={ width: "400px" } class="demo2-card">Card 7</@item>
    <@item style={ width: "400px" } class="demo2-card">Card 8</@item>
    <@item style={ width: "400px" } class="demo2-card">Card 9</@item>
    <@item style={ width: "400px" } class="demo2-card">Card 10</@item>
</ebay-carousel>

<ebay-textbox type="number" value=0 onInput-change("handleChange")/>
`})))()}var Cn,q,J,Y,X,Z,Q,$,wn;function Tn(){return(Tn=t((()=>{C(),Be(),Ye(),Ze(),ot(),ct(),St(),wt(),Nt(),Ft(),Zt(),$t(),ln(),dn(),bn(),Sn(),Cn={title:`navigation & disclosure/ebay-carousel`,component:S,parameters:{docs:{description:{component:ze}}},argTypes:{numberOfItems:{description:`The amount of items`,table:{category:`Demo configuration`}},item:{name:`@item`,description:`The contents for each item`,table:{category:`@attribute tags`}},imageTreatment:{options:[`none`,`matte`],description:`If "matte", image treatment styles are applied.`,table:{defaultValue:{summary:`none`}},type:`select`},hiddenScrollbar:{control:{type:`boolean`},description:`Whether the scrollbar should be hidden`},index:{type:`number`,description:`0-based index position`},itemsPerSlide:{description:`automatically fit a number of items for each carousel slide and enable slide controls. If set to a whole number, will default to x.1 where x is the whole number set.`},gap:{type:`number`,description:`override the margin between carousel items in pixels`,table:{defaultValue:{summary:`16`}}},"aria-label":{description:`a11y label text for component`,table:{category:`accessibility attributes`},control:{type:`text`}},"aria-labelledby":{description:`id of element containing a11y label text for component`,table:{category:`accessibility attributes`},control:{type:`text`}},"aria-roledescription":{description:`a11y role description for component`,table:{defaultValue:{summary:`Carousel`},category:`accessibility attributes`},control:{type:`text`}},"a11y-next-text":{description:`a11y text for next control`,table:{defaultValue:{summary:`Next Slide`},category:`accessibility attributes`}},"a11y-previous-text":{description:`a11y text for previous control`,table:{defaultValue:{summary:`Previous Slide`},category:`accessibility attributes`}},onMove:{action:`on-move`,description:`called whenever item visibility changes, including initialization`,table:{category:`Events`,defaultValue:{detail:`{ [visibleIndexes] }`}}},onNext:{action:`on-next`,description:`click next`,table:{category:`Events`,defaultValue:{detail:`{ originalEvent }`}}},onPrevious:{action:`on-previous`,description:`click previous`,table:{category:`Events`,defaultValue:{detail:`{ originalEvent }`}}},onScroll:{action:`on-scroll`,description:`new index is navigated to by native scrollin`,table:{category:`Events`,defaultValue:{detail:`{ index }`}}},onSlide:{action:`on-slide`,description:`new slide is navigated to (by controls or API)`,table:{category:`Events (items-per-slide)`,defaultValue:{summary:`{ slide }`}}},onPlay:{action:`on-play`,description:`called when the autoplay play button is pressed`,table:{category:`Events (autoplay)`,defaultValue:{summary:`{ originalEvent }`}}},onPause:{action:`on-pause`,description:`called when the autoplay pause button is pressed`,table:{category:`Events (autoplay)`,defaultValue:{summary:`{ originalEvent }`}}}}},q=n(E,Xe),J=n(N,Ct),Y=n(k,st),X=n(I,Pt),Z=n(B,Qt),Q=n(U,un),$=n(K,xn),wn=[`Continuous`,`ContinuousImageTreatment`,`Discrete`,`Autoplay`,`preserveTabindex`,`variableSizes`,`controlled`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`buildExtensionTemplate(continiousTemplate, continiousTemplateCode)`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`buildExtensionTemplate(continiousImageTreatmentTemplate, continiousImageTreatmentTemplateCode)`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`buildExtensionTemplate(discreteTemplate, discreteTemplateCode)`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`buildExtensionTemplate(autoplayTemplate, autoplayTemplateCode)`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`buildExtensionTemplate(preserveTabindexTemplate, preserveTabindexTemplateCode)`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`buildExtensionTemplate(variableSizesTemplate, variableSizesTemplateCode)`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`buildExtensionTemplate(controlledTemplate, controlledTemplateCode)`,...$.parameters?.docs?.source}}}})))()}Tn();export{X as Autoplay,q as Continuous,J as ContinuousImageTreatment,Y as Discrete,wn as __namedExportsOrder,$ as controlled,Cn as default,Z as preserveTabindex,Q as variableSizes};