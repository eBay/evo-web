import{b as S}from"./utils-DWCsNc5l.js";import{p as ie,v,b as w,_ as C,d as re,e as I,c as T}from"./defineComponent-B-Bg3Ud2.js";/* empty css             */import{_ as be}from"./index-DEuIlbT_.js";import{_ as x}from"./render-tag-B9T2mz-j.js";import{_ as ge}from"./dynamic-tag-B3Rndxlm.js";import{_ as D}from"./style-value-D9hyxyYb.js";import{_ as ve}from"./preserve-tag-DAN9egP4.js";import{_ as we}from"./of-fallback-DrWEmKV1.js";import{_ as Ce}from"./index-DQJCyt5g.js";import{_ as Te,a as ke}from"./index-ge0CCsnL.js";import{i as Se}from"./index-CJDBRdqY.js";import{r as Ie}from"./index-eAGEw84U.js";import{u as _e}from"./index-Dc9wtS83.js";import{_ as h}from"./const-element-Ea3wmYuQ.js";import{a as i}from"./attr-tag-Dvq4QMvY.js";import{_ as Be}from"./index-B0g55DpA.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CL8ZzwFK.js";import"./index-Qtpjd4O_.js";/* empty css                    */const se={passive:!0};function Pe(s,n){let a;return t(),l;function t(){s.addEventListener("scroll",r,se)}function r(){e(),a=setTimeout(o,640)}function o(){n(),t()}function e(){s.removeEventListener("scroll",r,se)}function l(){e(),clearTimeout(a)}}function Ee(s,n){let a,t,r;return(function o(){const{scrollLeft:e}=s;if(r!==e){r=e,a=setTimeout(()=>{t=requestAnimationFrame(o)},90);return}n(r)})(),()=>{clearTimeout(a),cancelAnimationFrame(t)}}const $e=typeof window<"u"&&"scrollBehavior"in document.documentElement.style;function J(s,n,a){if($e)return s.scrollTo({left:n}),Ee(s,a);let t,r,o=requestAnimationFrame(u=>{const{scrollLeft:y}=s,p=n-y,g=450;(function k(z){const W=z-u;if(W>g)return s.scrollLeft=n,e(),a();s.scrollLeft=Ae(W/g)*p+y,o=requestAnimationFrame(k)})(u)});return s.addEventListener("touchstart",l),e;function e(){cancelAnimationFrame(o),t===void 0?c():(r&&r(),m())}function l(){e(),t=s.scrollLeft,s.addEventListener("touchend",d)}function d(){m(),t===s.scrollLeft&&(r=J(s,n,a))}function c(){s.removeEventListener("touchstart",l)}function m(){s.removeEventListener("touchend",d)}}function Ae(s){return s<.5?2*s*s:-1+(4-2*s)*s}const H=-1,X=1;class Me extends Marko.Component{cleanupAsync(){clearTimeout(this.autoplayTimeout),cancelAnimationFrame(this.renderFrame),cancelAnimationFrame(this.focusFrame),this.cancelScrollTransition&&(this.cancelScrollTransition(),this.cancelScrollTransition=void 0)}emitUpdate(){const{config:n,items:a}=this.state;n.scrollTransitioning=!1,this.emit("move",{visibleIndexes:a.filter(({fullyVisible:t})=>t).map(t=>a.indexOf(t))})}handleScroll(n){const{state:a}=this,{config:t,items:r,gap:o}=a;let e;if(n>=this.getMaxOffset(a)-o)e=r.length-1;else{const l=a.itemsPerSlide||1,d=r.length;let c=0,m=Math.ceil(d/l)-1;for(;m-c>1;){const p=Math.floor((c+m)/2);n>r[p*l].left?c=p:m=p}const u=Math.abs(n-r[c*l].left),y=Math.abs(n-r[m*l].left);e=this.normalizeIndex(a,(u>y?m:c)*l)}a.index!==e&&(this.skipScrolling=!0,t.preserveItems=!0,this.setState("index",e),this.emit("scroll",{index:e}))}getOffset(n){const{items:a,index:t}=n;return a.length&&Math.min(a[t].left,this.getMaxOffset(n))||0}getMaxOffset({items:n,slideWidth:a}){return n.length&&Math.max(n[n.length-1].right-a,0)||0}getSlide({index:n,itemsPerSlide:a},t=n){if(a)return Math.ceil(t/a)}normalizeIndex({items:n,itemsPerSlide:a},t){if(t>0){let r=t;return r%=n.length||1,r-=r%(a||1),r=Math.abs(r),r}return 0}isAnimating(n){const{items:a,index:t}=n;if(!a.length)return!1;const r=a[t];return r.left===void 0||r.right===void 0}getNextIndex(n,a){const{index:t,items:r,slideWidth:o,itemsPerSlide:e}=n;let l=t,d;if(a===H&&l===0)l=r.length-1;else{do d=r[l+=a];while(d&&d.fullyVisible);if(a===H&&!e){const c=d.right-o;do d=r[--l];while(d&&d.left>=c);l+=1}}return this.normalizeIndex(n,l)}getTemplateData(n){const{config:a,autoplayInterval:t,items:r,itemsPerSlide:o,slideWidth:e,gap:l}=n,d=a.offsetOverride!==void 0,c=r.length<=o;n.index=this.normalizeIndex(n,n.index);const m=this.getOffset(n),u=c||!t&&m===0,y=c||!t&&m===this.getMaxOffset(n),p=this.isAnimating(n)?n.bothControlsDisabled:u&&y;let g,k,z;if(o){const f=o+n.peek;g=this.getSlide(n),k=`calc(${100/f}% - ${(f-1)*l/f}px)`,z=this.getSlide(n,r.length)}return r.forEach((f,fe)=>{const{style:U,transform:q}=f,ae=fe!==r.length-1&&`${l}px`;typeof U=="string"?(f.style=`${U};flex-basis:${k};margin-right:${ae};`,q&&(f.style+=`transform:${q}`)):f.style=Object.assign({},U,{width:k,"margin-right":ae,transform:q}),f.fullyVisible=f.left===void 0||f.left-m>=-.01&&f.right-m<=e+.01}),Object.assign({},n,{items:r,slide:g,offset:d?a.offsetOverride:m,disableTransition:d,totalSlides:z,prevControlDisabled:u,nextControlDisabled:y,bothControlsDisabled:p})}move(n){const{state:a}=this,{index:t,items:r,itemsPerSlide:o,autoplayInterval:e,slideWidth:l,gap:d,peek:c,config:m}=a,u=this.getNextIndex(a,n);let y;if(m.preserveItems=!0,this.isMoving=!0,this.skipScrolling=!1,e){if(n===X&&u<t){y=-l-d;for(let p=Math.ceil(o+c);p--;){const g=r[r.length-p-1];g.transform=`translateX(${(this.getMaxOffset(a)+l+d)*-1}px)`}}else if(n===H&&u>t){y=this.getMaxOffset(a)+l+d;for(let p=Math.ceil(o+c);p--;){const g=r[p];g.transform=`translateX(${this.getMaxOffset(a)+l+d}px)`}}m.offsetOverride=y}return this.setState("index",u),this.once("move",()=>{this.isMoving=!1,y!==void 0&&r.forEach(p=>{p.transform=void 0})}),u}handleMove(n,a){if(this.isMoving)return;const{state:t}=this,r=this.move(n),o=this.getSlide(t,r);this.emit("slide",{slide:o+1,originalEvent:a}),this.emit(`${n===1?"next":"previous"}`,{originalEvent:a})}handleStartInteraction(){this.setState("interacting",!0)}handleEndInteraction(){clearTimeout(this.interactionEndTimeout),this.isMoving?this.state.interacting&&(this.interactionEndTimeout=setTimeout(()=>{this.handleEndInteraction()},100)):this.setState("interacting",!1)}togglePlay(n){const{state:{config:a,paused:t}}=this;a.preserveItems=!0,this.setState("paused",!t),t&&!this.isMoving&&this.move(X),this.emit(`${t?"play":"pause"}`,{originalEvent:n})}onInput(n){const a=parseInt(n.gap,10),t={htmlAttributes:ie(n,["class","style","index","type","slide","gap","autoplay","paused","itemsPerSlide","a11yPreviousText","a11yNextText","a11yPlayText","a11yPauseText","item","hiddenScrollbar"]),classes:["carousel",n.hiddenScrollbar&&"carousel--hidden-scrollbar",n.class],style:n.style,config:{},gap:isNaN(a)?16:a,index:parseInt(n.index,10)||0,itemsPerSlide:parseFloat(n.itemsPerSlide)||0,a11yPreviousText:n.a11yPreviousText||"Previous Slide",a11yNextText:n.a11yNextText||"Next Slide",a11yPauseText:n.a11yPauseText||"Pause",a11yPlayText:n.a11yPlayText||"Play",items:[],slideWidth:0,autoplayInterval:0,paused:!1,peek:0,interacting:!1,bothControlsDisabled:!1},r=["class","style","key"],{itemsPerSlide:o}=t;if(o&&(t.peek=o%1,t.itemsPerSlide=o-t.peek,t.classes.push("carousel--slides"),!t.peek&&!n.autoplay&&!n.noPeek&&(t.peek=.1),t.peek&&t.classes.push("carousel--peek"),n.autoplay)){const e=n.item?.length<=o;t.autoplayInterval=parseInt(n.autoplay,10)||4e3,t.classes.push("carousel__autoplay"),t.paused=!!(e||n.paused),t.interacting=!1}t.items=(n.item||[]).map((e,l)=>{const d=t.itemsPerSlide?l%t.itemsPerSlide===0:!0;return{htmlAttributes:ie(e,r),class:d?["carousel__snap-point",e.class]:e.class,key:e.key||l.toString(),style:e.style,renderBody:e.renderBody}}),this.skipScrolling=this.state&&this.state.index===t.index,this.state=t}onRender(){typeof window<"u"&&this.cleanupAsync()}onMount(){const{config:n}=this.state;this.listEl=this.getEl("list"),this.nextEl=this.getEl("next"),this.containerEl=this.getEl("container"),this.subscribeTo(Ie).on("resize",()=>{this.cleanupAsync(),this.onRenderLegacy()}),this.skipScrolling=!1,_e&&(this.state.paused=!0),oe(this.listEl)?(n.nativeScrolling=!0,this.once("destroy",Pe(this.listEl,()=>{n.scrollTransitioning||this.handleScroll(this.listEl.scrollLeft)}))):this.subscribeTo(this.listEl).on("transitionend",({target:a})=>{a===this.listEl&&this.emitUpdate()}),this.onRenderLegacy(),document.fonts.ready.then(()=>{this.cleanupAsync(),this.onRenderLegacy()})}onUpdate(){this.onRenderLegacy()}onDestroy(){this.cleanupAsync()}onRenderLegacy(){const{containerEl:n,listEl:a,state:t}=this,{config:r,items:o,autoplayInterval:e,paused:l,interacting:d}=t;if(o.length){if(r.offsetOverride){r.offsetOverride=void 0,this.renderFrame=requestAnimationFrame(()=>this.setStateDirty(void 0));return}if(r.preserveItems){if(r.preserveItems=!1,this.focusFrame=requestAnimationFrame(()=>{le(a,c=>{Se(c).forEach(c.getAttribute("aria-hidden")!=="true"?(m=>m.hasAttribute("data-carousel-tabindex")?m.setAttribute("tabindex",m.getAttribute("data-carousel-tabindex")??"-1"):m.removeAttribute("tabindex")):m=>m.setAttribute("tabindex","-1"))})}),r.nativeScrolling)if(this.skipScrolling)this.emitUpdate();else{const c=this.getOffset(t);c!==a.scrollLeft?(r.scrollTransitioning=!0,this.cancelScrollTransition=J(a,c,this.emitUpdate.bind(this))):this.isMoving&&(r.scrollTransitioning=!0,this.cancelScrollTransition=J(a,this.getOffset(t),this.emitUpdate.bind(this)))}if(e&&!l&&!d){const c=this.move.bind(this,X);this.autoplayTimeout=setTimeout(()=>{if(this.isMoving)return this.once("move",c);c()},e)}return}this.renderFrame=requestAnimationFrame(()=>{const{width:c}=n.getBoundingClientRect(),{left:m}=a.firstElementChild.getBoundingClientRect();this.setStateDirty("slideWidth",c),r.preserveItems=!0,r.nativeScrolling=oe(a),le(a,(u,y)=>{const p=o[y],{left:g,right:k}=u.getBoundingClientRect();p.left=g-m,p.right=k-m})})}}}function oe(s){return getComputedStyle(s).overflowX!=="visible"}function le(s,n){let a=0,t=s.firstElementChild;for(;t;)n(t,a++),t=t.nextElementSibling}const G="hbJjjl7",b=v.t(G);w.r(G,()=>b);const de=Me;b._=C(function(s,n,a,t,r,o){var e=t.getTemplateData(r),l=e.config;n.be("div",re(e.htmlAttributes,{"aria-roledescription":e.htmlAttributes["aria-roledescription"]||"Carousel",class:I(e.classes),style:D(e.style),role:"group"}),"0",t,null,4),n.be("div",{class:I(["carousel__container",e.bothControlsDisabled&&"carousel__container--controls-disabled"]),id:a.elId("container")},"@container",t,null,1,{onfocusin:a.d("focusin",!!e.autoplayInterval&&"handleStartInteraction",!1),ontouchstart:a.d("touchstart",!!e.autoplayInterval&&"handleStartInteraction",!1),onmouseover:a.d("mouseover",!!e.autoplayInterval&&"handleStartInteraction",!1),onfocusout:a.d("focusout",!!e.autoplayInterval&&"handleEndInteraction",!1),onmouseout:a.d("mouseout",!!e.autoplayInterval&&"handleEndInteraction",!1),ontouchend:a.d("touchend",!!e.autoplayInterval&&"handleEndInteraction",!1)}),n.be("button",{class:"carousel__control carousel__control--prev",type:"button","aria-label":e.a11yPreviousText,"aria-disabled":e.prevControlDisabled&&"true"},"1",t,null,0,{onclick:a.d("click",!e.prevControlDisabled&&"handleMove",!1,[-1])}),x(be,{},n,a,"2"),n.ee(),n.be("div",{class:I(["carousel__viewport",!e.itemsPerSlide&&!e.nextControlDisabled&&!e.autoplayInterval&&"carousel__viewport--mask"])},"3",t,null,1),n.be("ul",{class:I(["carousel__list",s.imageTreatment==="matte"&&"carousel__list--image-treatment"]),style:D(!l.nativeScrolling&&!!e.offset&&{transform:"translate3d("+e.offset*-1+"px,0,0)",transition:e.disableTransition?"none":void 0}),id:a.elId("list")},"@list",t,null,1);for(const d of we(e.items)){const c=`@${d.key}`,m=`[${c}]`;n.be("li",re(d.htmlAttributes,{class:I(d.class),style:D(d.style),"aria-hidden":!d.fullyVisible&&"true"}),c,t,null,4),x(ve,{n:!0,b:!0,i:!!l.preserveItems,renderBody:u=>{ge(u,d.renderBody,null,null,null,null,a,"4"+m)}},n,a,c),n.ee()}n.ee(),n.ee(),n.be("button",{class:"carousel__control carousel__control--next",type:"button","aria-label":e.a11yNextText,"aria-disabled":e.nextControlDisabled&&"true",id:a.elId("next")},"@next",t,null,0,{onclick:a.d("click",!e.nextControlDisabled&&"handleMove",!1,[1])}),x(Ce,{},n,a,"5"),n.ee(),e.autoplayInterval&&!e.bothControlsDisabled&&(n.be("button",{type:"button","aria-label":e.paused?e.a11yPlayText:e.a11yPauseText,class:"carousel__playback"},"6",t,null,0,{onclick:a.d("click","togglePlay",!1)}),e.paused?x(Te,{},n,a,"7"):x(ke,{},n,a,"8"),n.ee()),n.ee(),n.ee()},{t:G},de);b.Component=T(de,b._);const ze=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
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
`,K="uPS9Tb3",_=v.t(K),Oe=h("style",null,1).t(`
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
`);w.r(K,()=>_);const ce={};_._=C(function(s,n,a,t,r,o){n.n(Oe,t),x(b,i.i(()=>{i.r("item",{style:{width:"400px"},class:"demo-card",renderBody:e=>{e.t("Card 1",t)}}),i.r("item",{style:{width:"400px"},class:"demo-card",renderBody:e=>{e.t("Card 2",t)}}),i.r("item",{style:{width:"400px"},class:"demo-card",renderBody:e=>{e.t("Card 3",t)}}),i.r("item",{style:{width:"400px"},class:"demo-card",renderBody:e=>{e.t("Card 4",t)}}),i.r("item",{style:{width:"400px"},class:"demo-card",renderBody:e=>{e.t("Card 5",t)}}),i.r("item",{style:{width:"400px"},class:"demo-card",renderBody:e=>{e.t("Card 6",t)}}),i.r("item",{style:{width:"400px"},class:"demo-card",renderBody:e=>{e.t("Card 7",t)}}),i.r("item",{style:{width:"400px"},class:"demo-card",renderBody:e=>{e.t("Card 8",t)}}),i.r("item",{style:{width:"400px"},class:"demo-card",renderBody:e=>{e.t("Card 9",t)}}),i.r("item",{style:{width:"400px"},class:"demo-card",renderBody:e=>{e.t("Card 10",t)}})},{...s,item:void 0}),n,a,"1",[["move","emit",!1,["move"]],["next","emit",!1,["next"]],["previous","emit",!1,["previous"]],["scroll","emit",!1,["scroll"]],["slide","emit",!1,["slide"]]])},{t:K,s:!0},ce);_.Component=T(ce,_._);const Ne=`export interface Input {
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
`,Y="eqUNKaj",B=v.t(Y),je=h("style",null,1).t(`
    .demo2-card {
        color: #cdf4fd;
        background: #a1208b;
        font-size: 36px;
        font-weight: bold;
        height: 330px;
        line-height: 330px;
        text-align: center;
    }
`);w.r(Y,()=>B);const me={};B._=C(function(s,n,a,t,r,o){n.n(je,t),x(b,i.i(()=>{i.r("item",{style:{width:"400px"},class:"demo2-card",renderBody:e=>{e.t("Card 1",t)}}),i.r("item",{style:{width:"400px"},class:"demo2-card",renderBody:e=>{e.t("Card 2",t)}}),i.r("item",{style:{width:"400px"},class:"demo2-card",renderBody:e=>{e.t("Card 3",t)}}),i.r("item",{style:{width:"400px"},class:"demo2-card",renderBody:e=>{e.t("Card 4",t)}}),i.r("item",{style:{width:"400px"},class:"demo2-card",renderBody:e=>{e.t("Card 5",t)}}),i.r("item",{style:{width:"400px"},class:"demo2-card",renderBody:e=>{e.t("Card 6",t)}}),i.r("item",{style:{width:"400px"},class:"demo2-card",renderBody:e=>{e.t("Card 7",t)}}),i.r("item",{style:{width:"400px"},class:"demo2-card",renderBody:e=>{e.t("Card 8",t)}}),i.r("item",{style:{width:"400px"},class:"demo2-card",renderBody:e=>{e.t("Card 9",t)}}),i.r("item",{style:{width:"400px"},class:"demo2-card",renderBody:e=>{e.t("Card 10",t)}})},{...s,itemsPerSlide:s.itemsPerSlide||2,item:void 0}),n,a,"1",[["move","emit",!1,["move"]],["next","emit",!1,["next"]],["previous","emit",!1,["previous"]],["scroll","emit",!1,["scroll"]],["slide","emit",!1,["slide"]]])},{t:Y,s:!0},me);B.Component=T(me,B._);const Fe=`export interface Input {
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
`,Z="CSwgHc9",P=v.t(Z),Le=h("style",null,1).t(`
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
`),Ve=h("img",{"aria-label":"photo 1",src:"http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/aztec-pyramid.jpeg"},0),Re=h("img",{"aria-label":"photo 2",src:"http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/falls.jpeg"},0),We=h("img",{"aria-label":"photo 3",src:"http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/mountain.jpeg"},0),Ue=h("img",{"aria-label":"photo 4",src:"http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/shoes.jpeg"},0),qe=h("img",{"aria-label":"photo 5",src:"http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/tall-cat.jpeg"},0),De=h("img",{"aria-label":"photo 6",src:"http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/wide-cat.jpeg"},0);w.r(Z,()=>P);const he={};P._=C(function(s,n,a,t,r,o){n.n(Le,t),x(b,i.i(()=>{i.r("item",{renderBody:e=>{e.n(Ve,t)}}),i.r("item",{renderBody:e=>{e.n(Re,t)}}),i.r("item",{renderBody:e=>{e.n(We,t)}}),i.r("item",{renderBody:e=>{e.n(Ue,t)}}),i.r("item",{renderBody:e=>{e.n(qe,t)}}),i.r("item",{renderBody:e=>{e.n(De,t)}}),i.r("item",{style:{width:"400px"},class:"demo-card",renderBody:e=>{e.t("Additional Item",t)}}),i.r("item",{style:{width:"400px"},class:"demo-card",renderBody:e=>{e.t("Additional Item 2",t)}})},{imageTreatment:"matte",...s,item:void 0}),n,a,"1",[["move","emit",!1,["move"]],["next","emit",!1,["next"]],["previous","emit",!1,["previous"]],["scroll","emit",!1,["scroll"]],["slide","emit",!1,["slide"]]])},{t:Z,s:!0},he);P.Component=T(he,P._);const He=`export interface Input {
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
`,Q="T11Jx7r",E=v.t(Q),Xe=h("style",null,1).t(`
    .demo2-card {
        color: #cdf4fd;
        background: #a1208b;
        font-size: 36px;
        font-weight: bold;
        height: 330px;
        line-height: 330px;
        text-align: center;
    }
`);w.r(Q,()=>E);const pe={};E._=C(function(s,n,a,t,r,o){n.n(Xe,t),x(b,i.i(()=>{i.r("item",{style:{width:"400px"},class:"demo2-card",renderBody:e=>{e.t("Card 1",t)}}),i.r("item",{style:{width:"400px"},class:"demo2-card",renderBody:e=>{e.t("Card 2",t)}}),i.r("item",{style:{width:"400px"},class:"demo2-card",renderBody:e=>{e.t("Card 3",t)}}),i.r("item",{style:{width:"400px"},class:"demo2-card",renderBody:e=>{e.t("Card 4",t)}}),i.r("item",{style:{width:"400px"},class:"demo2-card",renderBody:e=>{e.t("Card 5",t)}}),i.r("item",{style:{width:"400px"},class:"demo2-card",renderBody:e=>{e.t("Card 6",t)}}),i.r("item",{style:{width:"400px"},class:"demo2-card",renderBody:e=>{e.t("Card 7",t)}}),i.r("item",{style:{width:"400px"},class:"demo2-card",renderBody:e=>{e.t("Card 8",t)}}),i.r("item",{style:{width:"400px"},class:"demo2-card",renderBody:e=>{e.t("Card 9",t)}}),i.r("item",{style:{width:"400px"},class:"demo2-card",renderBody:e=>{e.t("Card 10",t)}})},{...s,itemsPerSlide:s.itemsPerSlide||1,autoplay:s.autoplay||!0,item:void 0}),n,a,"1",[["move","emit",!1,["move"]],["next","emit",!1,["next"]],["previous","emit",!1,["previous"]],["scroll","emit",!1,["scroll"]],["slide","emit",!1,["slide"]],["play","emit",!1,["play"]],["pause","emit",!1,["pause"]]])},{t:Q,s:!0},pe);E.Component=T(pe,E._);const Je=`export interface Input {
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
`,ee="EktCWa9",$=v.t(ee),Ge=h("style",null,1).t(`
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
`),Ke=h("div",{class:"preserve-tabindex-card"},2).e("a",{href:"https://www.ebay.com","data-carousel-tabindex":"-1"},1).t("Image here").e("a",{href:"https://www.ebay.com"},1).t("Card 1"),Ye=h("div",{class:"preserve-tabindex-card"},2).e("a",{href:"https://www.ebay.com","data-carousel-tabindex":"-1"},1).t("Image here").e("a",{href:"https://www.ebay.com"},1).t("Card 2"),Ze=h("div",{class:"preserve-tabindex-card"},2).e("a",{href:"https://www.ebay.com","data-carousel-tabindex":"-1"},1).t("Image here").e("a",{href:"https://www.ebay.com"},1).t("Card 3"),Qe=h("div",{class:"preserve-tabindex-card"},2).e("a",{href:"https://www.ebay.com","data-carousel-tabindex":"-1"},1).t("Image here").e("a",{href:"https://www.ebay.com"},1).t("Card 4"),et=h("div",{class:"preserve-tabindex-card"},2).e("a",{href:"https://www.ebay.com","data-carousel-tabindex":"-1"},1).t("Image here").e("a",{href:"https://www.ebay.com"},1).t("Card 5"),tt=h("div",{class:"preserve-tabindex-card"},2).e("a",{href:"https://www.ebay.com","data-carousel-tabindex":"-1"},1).t("Image here").e("a",{href:"https://www.ebay.com"},1).t("Card 6"),nt=h("div",{class:"preserve-tabindex-card"},2).e("a",{href:"https://www.ebay.com","data-carousel-tabindex":"-1"},1).t("Image here").e("a",{href:"https://www.ebay.com"},1).t("Card 7"),at=h("div",{class:"preserve-tabindex-card"},2).e("a",{href:"https://www.ebay.com","data-carousel-tabindex":"-1"},1).t("Image here").e("a",{href:"https://www.ebay.com"},1).t("Card 8");w.r(ee,()=>$);const ue={};$._=C(function(s,n,a,t,r,o){n.n(Ge,t),x(b,i.i(()=>{i.r("item",{renderBody:e=>{e.n(Ke,t)}}),i.r("item",{renderBody:e=>{e.n(Ye,t)}}),i.r("item",{renderBody:e=>{e.n(Ze,t)}}),i.r("item",{renderBody:e=>{e.n(Qe,t)}}),i.r("item",{renderBody:e=>{e.n(et,t)}}),i.r("item",{renderBody:e=>{e.n(tt,t)}}),i.r("item",{renderBody:e=>{e.n(nt,t)}}),i.r("item",{renderBody:e=>{e.n(at,t)}})},{...s,item:void 0}),n,a,"1",[["move","emit",!1,["move"]],["next","emit",!1,["next"]],["previous","emit",!1,["previous"]],["scroll","emit",!1,["scroll"]],["slide","emit",!1,["slide"]]])},{t:ee,s:!0},ue);$.Component=T(ue,$._);const it=`export interface Input {
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
`,te="i9pYoZa",A=v.t(te),rt=h("style",null,1).t(`
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
`);w.r(te,()=>A);const ye={};A._=C(function(s,n,a,t,r,o){n.n(rt,t),x(b,i.i(()=>{i.r("item",{style:"width:100px",class:"demo-card3",renderBody:e=>{e.t("Card 1",t)}}),i.r("item",{style:"width:57px",class:"demo-card3",renderBody:e=>{e.t("C2",t)}}),i.r("item",{style:"width:120px",class:"demo-card3",renderBody:e=>{e.t("Card 3",t)}}),i.r("item",{style:"width:200px",class:"demo-card3",renderBody:e=>{e.t("Card 4",t)}}),i.r("item",{style:"width:130px",class:"demo-card3",renderBody:e=>{e.t("Card 5",t)}}),i.r("item",{style:"width:150px",class:"demo-card3",renderBody:e=>{e.t("Card 6",t)}}),i.r("item",{style:"width:100px",class:"demo-card3",renderBody:e=>{e.t("Card 7",t)}}),i.r("item",{style:"width:200px",class:"demo-card3",renderBody:e=>{e.t("Card 8",t)}}),i.r("item",{style:"width:60px",class:"demo-card3",renderBody:e=>{e.t("C9",t)}}),i.r("item",{style:"width:140px",class:"demo-card3",renderBody:e=>{e.t("Card 10",t)}})},{...s,item:void 0}),n,a,"1",[["move","emit",!1,["move"]],["next","emit",!1,["next"]],["previous","emit",!1,["previous"]],["scroll","emit",!1,["scroll"]],["slide","emit",!1,["slide"]]])},{t:te,s:!0},ye);A.Component=T(ye,A._);const st=`export interface Input {
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
`,ne="o2aNUEV",M=v.t(ne),ot=h("style",null,1).t(`
    .demo2-card {
        color: #cdf4fd;
        background: #a1208b;
        font-size: 36px;
        font-weight: bold;
        height: 330px;
        line-height: 330px;
        text-align: center;
    }
`);w.r(ne,()=>M);const xe={onCreate(){this.onMove=({visibleIndexes:s})=>{this.state.index=s[0]},this.handleChange=({value:s})=>{this.state.index=+s},this.state={index:0}}};M._=C(function(s,n,a,t,r,o){n.n(ot,t),x(b,i.i(()=>{i.r("item",{style:{width:"400px"},class:"demo2-card",renderBody:e=>{e.t("Card 1",t)}}),i.r("item",{style:{width:"400px"},class:"demo2-card",renderBody:e=>{e.t("Card 2",t)}}),i.r("item",{style:{width:"400px"},class:"demo2-card",renderBody:e=>{e.t("Card 3",t)}}),i.r("item",{style:{width:"400px"},class:"demo2-card",renderBody:e=>{e.t("Card 4",t)}}),i.r("item",{style:{width:"400px"},class:"demo2-card",renderBody:e=>{e.t("Card 5",t)}}),i.r("item",{style:{width:"400px"},class:"demo2-card",renderBody:e=>{e.t("Card 6",t)}}),i.r("item",{style:{width:"400px"},class:"demo2-card",renderBody:e=>{e.t("Card 7",t)}}),i.r("item",{style:{width:"400px"},class:"demo2-card",renderBody:e=>{e.t("Card 8",t)}}),i.r("item",{style:{width:"400px"},class:"demo2-card",renderBody:e=>{e.t("Card 9",t)}}),i.r("item",{style:{width:"400px"},class:"demo2-card",renderBody:e=>{e.t("Card 10",t)}})},{...s,index:r.index,itemsPerSlide:s.itemsPerSlide||2,item:void 0}),n,a,"1",[["next","emit",!1,["next"]],["previous","emit",!1,["previous"]],["move","onMove",!1]]),x(Be,{type:"number",value:0},n,a,"2",[["input-change","handleChange",!1]])},{t:ne},xe);M.Component=T(xe,M._);const lt=`import type { Input as CarouselInput } from "<ebay-carousel>";
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
`,Et={title:"navigation & disclosure/ebay-carousel",component:b,parameters:{docs:{description:{component:ze}}},argTypes:{numberOfItems:{description:"The amount of items",table:{category:"Demo configuration"}},item:{name:"@item",description:"The contents for each item",table:{category:"@attribute tags"}},imageTreatment:{options:["none","matte"],description:'If "matte", image treatment styles are applied.',table:{defaultValue:{summary:"none"}},type:"select"},hiddenScrollbar:{control:{type:"boolean"},description:"Whether the scrollbar should be hidden"},index:{type:"number",description:"0-based index position"},itemsPerSlide:{description:"automatically fit a number of items for each carousel slide and enable slide controls. If set to a whole number, will default to x.1 where x is the whole number set."},gap:{type:"number",description:"override the margin between carousel items in pixels",table:{defaultValue:{summary:"16"}}},"aria-label":{description:"a11y label text for component",table:{category:"accessibility attributes"},control:{type:"text"}},"aria-labelledby":{description:"id of element containing a11y label text for component",table:{category:"accessibility attributes"},control:{type:"text"}},"aria-roledescription":{description:"a11y role description for component",table:{defaultValue:{summary:"Carousel"},category:"accessibility attributes"},control:{type:"text"}},"a11y-next-text":{description:"a11y text for next control",table:{defaultValue:{summary:"Next Slide"},category:"accessibility attributes"}},"a11y-previous-text":{description:"a11y text for previous control",table:{defaultValue:{summary:"Previous Slide"},category:"accessibility attributes"}},onMove:{action:"on-move",description:"called whenever item visibility changes, including initialization",table:{category:"Events",defaultValue:{detail:"{ [visibleIndexes] }"}}},onNext:{action:"on-next",description:"click next",table:{category:"Events",defaultValue:{detail:"{ originalEvent }"}}},onPrevious:{action:"on-previous",description:"click previous",table:{category:"Events",defaultValue:{detail:"{ originalEvent }"}}},onScroll:{action:"on-scroll",description:"new index is navigated to by native scrollin",table:{category:"Events",defaultValue:{detail:"{ index }"}}},onSlide:{action:"on-slide",description:"new slide is navigated to (by controls or API)",table:{category:"Events (items-per-slide)",defaultValue:{summary:"{ slide }"}}},onPlay:{action:"on-play",description:"called when the autoplay play button is pressed",table:{category:"Events (autoplay)",defaultValue:{summary:"{ originalEvent }"}}},onPause:{action:"on-pause",description:"called when the autoplay pause button is pressed",table:{category:"Events (autoplay)",defaultValue:{summary:"{ originalEvent }"}}}}},O=S(_,Ne),N=S(P,He),j=S(B,Fe),F=S(E,Je),L=S($,it),V=S(A,st),R=S(M,lt),$t=["Continuous","ContinuousImageTreatment","Discrete","Autoplay","preserveTabindex","variableSizes","controlled"];O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:"buildExtensionTemplate(continiousTemplate, continiousTemplateCode)",...O.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:"buildExtensionTemplate(continiousImageTreatmentTemplate, continiousImageTreatmentTemplateCode)",...N.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:"buildExtensionTemplate(discreteTemplate, discreteTemplateCode)",...j.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:"buildExtensionTemplate(autoplayTemplate, autoplayTemplateCode)",...F.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:"buildExtensionTemplate(preserveTabindexTemplate, preserveTabindexTemplateCode)",...L.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:"buildExtensionTemplate(variableSizesTemplate, variableSizesTemplateCode)",...V.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:"buildExtensionTemplate(controlledTemplate, controlledTemplateCode)",...R.parameters?.docs?.source}}};export{F as Autoplay,O as Continuous,N as ContinuousImageTreatment,j as Discrete,$t as __namedExportsOrder,R as controlled,Et as default,L as preserveTabindex,V as variableSizes};
