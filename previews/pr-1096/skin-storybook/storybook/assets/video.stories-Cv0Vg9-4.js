import{t as e}from"./rolldown-runtime-Dh6celcD.js";var t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{t={title:`Skin/Video`},n=`<video aria-label="Sample video"></video>`,r=`<button class="video__control" type="button" aria-label="Play">
            <svg class="icon icon--20" width="20" height="20" aria-hidden="true">
                <use href="#icon-play-20"></use>
            </svg>
        </button>`,i=`<button class="video__control" type="button" aria-label="Pause">
            <svg class="icon icon--20" width="20" height="20" aria-hidden="true">
                <use href="#icon-pause-20"></use>
            </svg>
        </button>`,a=`<button class="video__control" type="button" aria-label="Closed captions" aria-haspopup="true" aria-expanded="false">
            <svg class="icon icon--16" width="16" height="16" aria-hidden="true">
                <use href="#icon-closed-caption-16"></use>
            </svg>
        </button>`,o=`<button class="video__control" type="button" aria-label="Mute" aria-pressed="false">
            <svg class="icon icon--16" width="16" height="16" aria-hidden="true">
                <use href="#icon-audio-high-16"></use>
            </svg>
        </button>`,s=`<button class="video__control" type="button" aria-label="Report this video">
            <svg class="icon icon--16" width="16" height="16" aria-hidden="true">
                <use href="#icon-flag-16"></use>
            </svg>
        </button>`,c=`<button class="video__control" type="button" aria-label="Fullscreen">
            <svg class="icon icon--16" width="16" height="16" aria-hidden="true">
                <use href="#icon-expand-16"></use>
            </svg>
        </button>`,l=`<span class="video__timestamp" aria-hidden="true">0:29</span>
        <input
            class="video__scrubber"
            type="range"
            min="0"
            max="1"
            step="any"
            value="0.35"
            style="--value-percent: 35%"
            aria-label="Seek"
            aria-valuetext="0:29"
        >
        <span class="video__timestamp">1:23</span>`,u=()=>`
<div class="video" style="max-width: 640px">
    ${n}
    <div class="video__controls">
        ${r}
        ${l}
        ${c}
    </div>
</div>
`,d=()=>`
<div class="video" style="max-width: 640px">
    ${n}
    <div class="video__controls">
        ${i}
        ${l}
        ${a}
        ${o}
        ${s}
        ${c}
    </div>
</div>
`,f=()=>`
<div class="video" style="max-width: 640px">
    ${n}
    <div class="video__controls">
        <span class="video__timestamp video__timestamp--remaining">-0:54</span>
        <span class="video__spacer"></span>
        ${r}
        ${c}
    </div>
</div>
`,p=()=>`
<div class="video" style="max-width: 640px">
    ${n}
    <div class="video__controls video__controls--hidden">
        ${i}
        ${l}
        ${c}
    </div>
</div>
`,m=()=>`
<div class="video" style="max-width: 640px">
    ${n}
    <div class="video__controls">
        ${r}
        ${l}
        <span class="video__popover-container">
            <button class="video__control" type="button" aria-label="Closed captions" aria-haspopup="true" aria-expanded="true">
                <svg class="icon icon--16" width="16" height="16" aria-hidden="true">
                    <use href="#icon-closed-caption-filled-16"></use>
                </svg>
            </button>
            <span class="video__popover">
                <span class="menu">
                    <div class="menu__items" role="menu">
                        <div class="menu__item" role="menuitemradio" aria-checked="false" tabindex="0">
                            <span>Off</span>
                            <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                                <use href="#icon-tick-16"></use>
                            </svg>
                        </div>
                        <div class="menu__item" role="menuitemradio" aria-checked="true" lang="en">
                            <span>English</span>
                            <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                                <use href="#icon-tick-16"></use>
                            </svg>
                        </div>
                        <div class="menu__item" role="menuitemradio" aria-checked="false" lang="de">
                            <span>German</span>
                            <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                                <use href="#icon-tick-16"></use>
                            </svg>
                        </div>
                    </div>
                </span>
            </span>
        </span>
        ${c}
    </div>
</div>
`,h=()=>`
<div class="video" style="max-width: 640px">
    ${n}
    <div class="video__controls">
        ${r}
        ${l}
        <span class="video__popover-container video__popover-container--hover">
            ${o}
            <div class="video__popover">
                <input
                    class="video__volume"
                    type="range"
                    min="0"
                    max="1"
                    step="any"
                    value="0.8"
                    style="--value-percent: 80%"
                    aria-label="Volume"
                    aria-valuetext="80%"
                >
            </div>
        </span>
        ${c}
    </div>
</div>
`,g=()=>`
<div class="video" style="max-width: 640px">
    ${n}
    <button class="video__play-overlay" type="button" aria-label="Play">
        <svg class="icon icon--64" width="64" height="64" aria-hidden="true">
            <use href="#icon-play-filled-64-colored"></use>
        </svg>
    </button>
</div>
`,_=()=>`
<div class="video" style="max-width: 640px">
    ${n}
    <a class="video__nav" href="https://www.ebay.com" aria-label="Watch on eBay"></a>
    <div class="video__controls">
        ${r}
        ${l}
        ${c}
    </div>
</div>
`,v=()=>`
<div class="video" style="max-width: 640px">
    ${n}
    <div class="video__overlay video__overlay--transparent">
        <span class="progress-spinner progress-spinner--large" role="img" aria-label="Video loading">
            <svg class="icon icon--30" aria-hidden="true">
                <use href="#icon-spinner-30"></use>
            </svg>
        </span>
    </div>
</div>
`,y=()=>`
<div class="video" style="max-width: 640px">
    ${n}
    <div class="video__overlay">
        <svg class="icon icon--24" width="24" height="24" aria-hidden="true">
            <use href="#icon-attention-24"></use>
        </svg>
        <div class="video__overlay-text">An error has occurred</div>
    </div>
</div>
`,b=()=>`
<div dir="rtl">
    <div class="video" style="max-width: 640px">
        ${n}
        <div class="video__controls">
            ${r}
            ${l}
            ${o}
            ${c}
        </div>
    </div>
</div>
`,x=()=>`
<div class="video demo-a11y-text-spacing" style="max-width: 640px">
    ${n}
    <div class="video__controls">
        ${r}
        ${l}
        ${c}
    </div>
</div>
`,S=[`base`,`allControls`,`withoutSeek`,`controlsHidden`,`captionsPopover`,`volumePopover`,`playOverlay`,`navLink`,`loadingOverlay`,`errorOverlay`,`RTL`,`textSpacing`]})))()}C();export{b as RTL,S as __namedExportsOrder,d as allControls,u as base,m as captionsPopover,p as controlsHidden,t as default,y as errorOverlay,v as loadingOverlay,_ as navLink,g as playOverlay,x as textSpacing,h as volumePopover,f as withoutSeek};