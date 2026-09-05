const a={title:"Skin/Tooltip/Pointer"},l={left:{transform:"translateX(16px) translateY(-50%)",left:"100%",right:"auto",top:"20px",bottom:"auto"},"left-top":{transform:"translateX(16px)",left:"100%",right:"auto",top:"0",bottom:"auto"},"left-bottom":{transform:"translateX(16px)",left:"100%",right:"auto",top:"auto",bottom:"8px"},right:{transform:"translateX(-16px) translateY(-50%)",left:"auto",right:"100%",top:"20px",bottom:"auto"},"right-top":{transform:"translateX(-16px)",left:"auto",right:"100%",top:"2px",bottom:"auto"},"right-bottom":{transform:"translateX(-16px)",left:"auto",right:"100%",top:"auto",bottom:"4px"},top:{transform:"translateX(-50%)",left:"50%",right:"auto",top:"calc(100% + 12px)",bottom:"auto"},"top-left":{left:"4px",right:"auto",top:"calc(100% + 12px)",bottom:"auto"},"top-right":{left:"auto",right:"4px",top:"calc(100% + 12px)",bottom:"auto"},"bottom-right":{left:"auto",right:"4px",top:"auto",bottom:"calc(100% + 12px)"},"bottom-left":{left:"4px",right:"auto",top:"auto",bottom:"calc(100% + 12px)"},bottom:{transform:"translateX(-50%)",left:"50%",right:"auto",top:"auto",bottom:"calc(100% + 12px)"}};function t(o){const i=[];for(const s of Object.keys(l[o]))i.push(`${s}: ${l[o][s]}`);return i.join("; ")}const p=()=>`
<span class="tooltip" style="margin-left: 100px; margin-top: 100px;">
    <button class="icon-btn tooltip__host" aria-describedby="tooltip-1" aria-expanded="true" aria-label="Info">
        <svg class="icon icon--24" height="16" width="16" aria-hidden="true">
            <use href="#icon-settings-24"></use>
        </svg>
    </button>
    <div class="tooltip__overlay" id="tooltip-1" role="tooltip" style="${t("top")}">
        <span class="tooltip__pointer tooltip__pointer--top"></span>
        <div class="tooltip__mask">
            <div class="tooltip__cell">
                <div class="tooltip__content">
                    <p>Pointer</p>
                    <p>Item</p>
                </div>
            </div>
        </div>
    </div>
</span>`,e=()=>`
<span class="tooltip" style="margin-left: 100px; margin-top: 100px;">
    <button class="icon-btn tooltip__host" aria-describedby="tooltip-1" aria-expanded="true" aria-label="Info">
        <svg class="icon icon--24" height="16" width="16" aria-hidden="true">
            <use href="#icon-settings-24"></use>
        </svg>
    </button>
    <div class="tooltip__overlay" id="tooltip-1" role="tooltip" style="${t("top-left")}">
        <span class="tooltip__pointer tooltip__pointer--top-left"></span>
        <div class="tooltip__mask">
            <div class="tooltip__cell">
                <div class="tooltip__content">
                    <p>Pointer</p>
                    <p>Item</p>
                </div>
            </div>
        </div>
    </div>
</span>`,n=()=>`
<span class="tooltip" style="margin-left: 100px; margin-top: 100px;">
    <button class="icon-btn tooltip__host" aria-describedby="tooltip-1" aria-expanded="true" aria-label="Info">
        <svg class="icon icon--24" height="16" width="16" aria-hidden="true">
            <use href="#icon-settings-24"></use>
        </svg>
    </button>
    <div class="tooltip__overlay" id="tooltip-1" role="tooltip" style="${t("left-top")}">
        <span class="tooltip__pointer tooltip__pointer--left-top"></span>
        <div class="tooltip__mask">
            <div class="tooltip__cell">
                <div class="tooltip__content">
                    <p>Pointer</p>
                    <p>Item</p>
               </div>
            </div>
        </div>
    </div>
</span>`,r=()=>`
<span class="tooltip" style="margin-left: 100px; margin-top: 100px;">
    <button class="icon-btn tooltip__host" aria-describedby="tooltip-1" aria-expanded="true" aria-label="Info">
        <svg class="icon icon--24" height="16" width="16" aria-hidden="true">
            <use href="#icon-settings-24"></use>
        </svg>
    </button>
    <div class="tooltip__overlay" id="tooltip-1" role="tooltip" style="${t("left")}">
        <span class="tooltip__pointer tooltip__pointer--left"></span>
        <div class="tooltip__mask">
            <div class="tooltip__cell">
                <div class="tooltip__content">
                    <p>Pointer</p>
                    <p>Item</p>
                </div>
            </div>
        </div>
    </div>
</span>`,c=()=>`
<span class="tooltip" style="margin-left: 100px; margin-top: 100px;">
    <button class="icon-btn tooltip__host" aria-describedby="tooltip-1" aria-expanded="true" aria-label="Info">
        <svg class="icon icon--24" height="16" width="16" aria-hidden="true">
            <use href="#icon-settings-24"></use>
        </svg>
    </button>
    <div class="tooltip__overlay" id="tooltip-1" role="tooltip" style="${t("left-bottom")}">
        <span class="tooltip__pointer tooltip__pointer--left-bottom"></span>
        <div class="tooltip__mask">
            <div class="tooltip__cell">
                <div class="tooltip__content">
                    <p>Pointer</p>
                    <p>Item</p>
                </div>
            </div>
        </div>
    </div>
</span>`,d=()=>`
<span class="tooltip" style="margin-left: 100px; margin-top: 100px;">
    <button class="icon-btn tooltip__host" aria-describedby="tooltip-1" aria-expanded="true" aria-label="Info">
        <svg class="icon icon--24" height="16" width="16" aria-hidden="true">
            <use href="#icon-settings-24"></use>
        </svg>
    </button>
    <div class="tooltip__overlay" id="tooltip-1" role="tooltip" style="${t("bottom-left")}">
        <span class="tooltip__pointer tooltip__pointer--bottom-left"></span>
        <div class="tooltip__mask">
            <div class="tooltip__cell">
                <div class="tooltip__content">
                    <p>Pointer</p>
                    <p>Item</p>
                </div>
            </div>
        </div>
    </div>
</span>`,_=()=>`
<span class="tooltip" style="margin-left: 100px; margin-top: 100px;">
    <button class="icon-btn tooltip__host" aria-describedby="tooltip-1" aria-expanded="true" aria-label="Info">
        <svg class="icon icon--24" height="16" width="16" aria-hidden="true">
            <use href="#icon-settings-24"></use>
        </svg>
    </button>
    <div class="tooltip__overlay" id="tooltip-1" role="tooltip" style="${t("bottom")}">
        <span class="tooltip__pointer tooltip__pointer--bottom"></span>
        <div class="tooltip__mask">
            <div class="tooltip__cell">
                <div class="tooltip__content">
                    <p>Pointer</p>
                    <p>Item</p>
                </div>
            </div>
        </div>
    </div>
</span>`,v=()=>`
<span class="tooltip" style="margin-left: 100px; margin-top: 100px;">
    <button class="icon-btn tooltip__host" aria-describedby="tooltip-1" aria-expanded="true" aria-label="Info">
        <svg class="icon icon--24" height="16" width="16" aria-hidden="true">
            <use href="#icon-settings-24"></use>
        </svg>
    </button>
    <div class="tooltip__overlay" id="tooltip-1" role="tooltip" style="${t("bottom-right")}">
        <span class="tooltip__pointer tooltip__pointer--bottom-right"></span>
        <div class="tooltip__mask">
            <div class="tooltip__cell">
                <div class="tooltip__content">
                    <p>Pointer</p>
                    <p>Item</p>
                </div>
            </div>
        </div>
    </div>
</span>`,g=()=>`
<span class="tooltip" style="margin-left: 100px; margin-top: 100px;">
    <button class="icon-btn tooltip__host" aria-describedby="tooltip-1" aria-expanded="true" aria-label="Info">
        <svg class="icon icon--24" height="16" width="16" aria-hidden="true">
            <use href="#icon-settings-24"></use>
        </svg>
    </button>
    <div class="tooltip__overlay" id="tooltip-1" role="tooltip" style="${t("right-bottom")}">
        <span class="tooltip__pointer tooltip__pointer--right-bottom"></span>
        <div class="tooltip__mask">
            <div class="tooltip__cell">
                <div class="tooltip__content">
                    <p>Pointer</p>
                    <p>Item</p>
                </div>
            </div>
        </div>
    </div>
</span>`,h=()=>`
<span class="tooltip" style="margin-left: 100px; margin-top: 100px;">
    <button class="icon-btn tooltip__host" aria-describedby="tooltip-1" aria-expanded="true" aria-label="Info">
        <svg class="icon icon--24" height="16" width="16" aria-hidden="true">
            <use href="#icon-settings-24"></use>
        </svg>
    </button>
    <div class="tooltip__overlay" id="tooltip-1" role="tooltip" style="${t("right")}">
        <span class="tooltip__pointer tooltip__pointer--right"></span>
        <div class="tooltip__mask">
            <div class="tooltip__cell">
                <div class="tooltip__content">
                    <p>Pointer</p>
                    <p>Item</p>
                </div>
            </div>
        </div>
    </div>
</span>`,b=()=>`
<span class="tooltip" style="margin-left: 100px; margin-top: 100px;">
    <button class="icon-btn tooltip__host" aria-describedby="tooltip-1" aria-expanded="true" aria-label="Info">
        <svg class="icon icon--24" height="16" width="16" aria-hidden="true">
            <use href="#icon-settings-24"></use>
        </svg>
    </button>
    <div class="tooltip__overlay" id="tooltip-1" role="tooltip" style="${t("right-top")}">
        <span class="tooltip__pointer tooltip__pointer--right-top"></span>
        <div class="tooltip__mask">
            <div class="tooltip__cell">
                <div class="tooltip__content">
                    <p>Pointer</p>
                    <p>Item</p>
                </div>
            </div>
        </div>
    </div>
</span>`,u=()=>`
<span class="tooltip" style="margin-left: 100px; margin-top: 100px;">
    <button class="icon-btn tooltip__host" aria-describedby="tooltip-1" aria-expanded="true" aria-label="Info">
        <svg class="icon icon--24" height="16" width="16" aria-hidden="true">
            <use href="#icon-settings-24"></use>
        </svg>
    </button>
    <div class="tooltip__overlay" id="tooltip-1" role="tooltip" style="${t("top-right")}">
        <span class="tooltip__pointer tooltip__pointer--top-right"></span>
        <div class="tooltip__mask">
            <div class="tooltip__cell">
                <div class="tooltip__content">
                    <p>Pointer</p>
                    <p>Item</p>
                </div>
            </div>
        </div>
    </div>
</span>`,m=["top","topLeft","leftTop","left","leftBottom","bottomLeft","bottom","bottomRight","rightBottom","right","rightTop","topRight"];export{m as __namedExportsOrder,_ as bottom,d as bottomLeft,v as bottomRight,a as default,r as left,c as leftBottom,n as leftTop,h as right,g as rightBottom,b as rightTop,p as top,e as topLeft,u as topRight};
