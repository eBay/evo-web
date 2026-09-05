const h={title:"Skin/Tooltip/Pointer"},m={left:{transform:"translateX(16px) translateY(-50%)",left:"100%",right:"auto",top:"20px",bottom:"auto"},"left-top":{transform:"translateX(16px)",left:"100%",right:"auto",top:"0",bottom:"auto"},"left-bottom":{transform:"translateX(16px)",left:"100%",right:"auto",top:"auto",bottom:"8px"},right:{transform:"translateX(-16px) translateY(-50%)",left:"auto",right:"100%",top:"20px",bottom:"auto"},"right-top":{transform:"translateX(-16px)",left:"auto",right:"100%",top:"2px",bottom:"auto"},"right-bottom":{transform:"translateX(-16px)",left:"auto",right:"100%",top:"auto",bottom:"4px"},top:{transform:"translateX(-50%)",left:"50%",right:"auto",top:"calc(100% + 12px)",bottom:"auto"},"top-left":{left:"4px",right:"auto",top:"calc(100% + 12px)",bottom:"auto"},"top-right":{left:"auto",right:"4px",top:"calc(100% + 12px)",bottom:"auto"},"bottom-right":{left:"auto",right:"4px",top:"auto",bottom:"calc(100% + 12px)"},"bottom-left":{left:"4px",right:"auto",top:"auto",bottom:"calc(100% + 12px)"},bottom:{transform:"translateX(-50%)",left:"50%",right:"auto",top:"auto",bottom:"calc(100% + 12px)"}};function t(v){const g=[];for(const u of Object.keys(m[v]))g.push(`${u}: ${m[v][u]}`);return g.join("; ")}const o=()=>`
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
</span>`,i=()=>`
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
</span>`,s=()=>`
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
</span>`,e=()=>`
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
</span>`,n=()=>`
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
</span>`,a=()=>`
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
</span>`,l=()=>`
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
</span>`,p=()=>`
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
</span>`,r=()=>`
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
</span>`,c=()=>`
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
</span>`,d=()=>`
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
</span>`,_=()=>`
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
</span>`;o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => \`
<span class="tooltip" style="margin-left: 100px; margin-top: 100px;">
    <button class="icon-btn tooltip__host" aria-describedby="tooltip-1" aria-expanded="true" aria-label="Info">
        <svg class="icon icon--24" height="16" width="16" aria-hidden="true">
            <use href="#icon-settings-24"></use>
        </svg>
    </button>
    <div class="tooltip__overlay" id="tooltip-1" role="tooltip" style="\${getPointerStyle("top")}">
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
</span>\``,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => \`
<span class="tooltip" style="margin-left: 100px; margin-top: 100px;">
    <button class="icon-btn tooltip__host" aria-describedby="tooltip-1" aria-expanded="true" aria-label="Info">
        <svg class="icon icon--24" height="16" width="16" aria-hidden="true">
            <use href="#icon-settings-24"></use>
        </svg>
    </button>
    <div class="tooltip__overlay" id="tooltip-1" role="tooltip" style="\${getPointerStyle("top-left")}">
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
</span>\``,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => \`
<span class="tooltip" style="margin-left: 100px; margin-top: 100px;">
    <button class="icon-btn tooltip__host" aria-describedby="tooltip-1" aria-expanded="true" aria-label="Info">
        <svg class="icon icon--24" height="16" width="16" aria-hidden="true">
            <use href="#icon-settings-24"></use>
        </svg>
    </button>
    <div class="tooltip__overlay" id="tooltip-1" role="tooltip" style="\${getPointerStyle("left-top")}">
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
</span>\``,...s.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => \`
<span class="tooltip" style="margin-left: 100px; margin-top: 100px;">
    <button class="icon-btn tooltip__host" aria-describedby="tooltip-1" aria-expanded="true" aria-label="Info">
        <svg class="icon icon--24" height="16" width="16" aria-hidden="true">
            <use href="#icon-settings-24"></use>
        </svg>
    </button>
    <div class="tooltip__overlay" id="tooltip-1" role="tooltip" style="\${getPointerStyle("left")}">
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
</span>\``,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => \`
<span class="tooltip" style="margin-left: 100px; margin-top: 100px;">
    <button class="icon-btn tooltip__host" aria-describedby="tooltip-1" aria-expanded="true" aria-label="Info">
        <svg class="icon icon--24" height="16" width="16" aria-hidden="true">
            <use href="#icon-settings-24"></use>
        </svg>
    </button>
    <div class="tooltip__overlay" id="tooltip-1" role="tooltip" style="\${getPointerStyle("left-bottom")}">
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
</span>\``,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => \`
<span class="tooltip" style="margin-left: 100px; margin-top: 100px;">
    <button class="icon-btn tooltip__host" aria-describedby="tooltip-1" aria-expanded="true" aria-label="Info">
        <svg class="icon icon--24" height="16" width="16" aria-hidden="true">
            <use href="#icon-settings-24"></use>
        </svg>
    </button>
    <div class="tooltip__overlay" id="tooltip-1" role="tooltip" style="\${getPointerStyle("bottom-left")}">
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
</span>\``,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => \`
<span class="tooltip" style="margin-left: 100px; margin-top: 100px;">
    <button class="icon-btn tooltip__host" aria-describedby="tooltip-1" aria-expanded="true" aria-label="Info">
        <svg class="icon icon--24" height="16" width="16" aria-hidden="true">
            <use href="#icon-settings-24"></use>
        </svg>
    </button>
    <div class="tooltip__overlay" id="tooltip-1" role="tooltip" style="\${getPointerStyle("bottom")}">
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
</span>\``,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => \`
<span class="tooltip" style="margin-left: 100px; margin-top: 100px;">
    <button class="icon-btn tooltip__host" aria-describedby="tooltip-1" aria-expanded="true" aria-label="Info">
        <svg class="icon icon--24" height="16" width="16" aria-hidden="true">
            <use href="#icon-settings-24"></use>
        </svg>
    </button>
    <div class="tooltip__overlay" id="tooltip-1" role="tooltip" style="\${getPointerStyle("bottom-right")}">
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
</span>\``,...p.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => \`
<span class="tooltip" style="margin-left: 100px; margin-top: 100px;">
    <button class="icon-btn tooltip__host" aria-describedby="tooltip-1" aria-expanded="true" aria-label="Info">
        <svg class="icon icon--24" height="16" width="16" aria-hidden="true">
            <use href="#icon-settings-24"></use>
        </svg>
    </button>
    <div class="tooltip__overlay" id="tooltip-1" role="tooltip" style="\${getPointerStyle("right-bottom")}">
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
</span>\``,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => \`
<span class="tooltip" style="margin-left: 100px; margin-top: 100px;">
    <button class="icon-btn tooltip__host" aria-describedby="tooltip-1" aria-expanded="true" aria-label="Info">
        <svg class="icon icon--24" height="16" width="16" aria-hidden="true">
            <use href="#icon-settings-24"></use>
        </svg>
    </button>
    <div class="tooltip__overlay" id="tooltip-1" role="tooltip" style="\${getPointerStyle("right")}">
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
</span>\``,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => \`
<span class="tooltip" style="margin-left: 100px; margin-top: 100px;">
    <button class="icon-btn tooltip__host" aria-describedby="tooltip-1" aria-expanded="true" aria-label="Info">
        <svg class="icon icon--24" height="16" width="16" aria-hidden="true">
            <use href="#icon-settings-24"></use>
        </svg>
    </button>
    <div class="tooltip__overlay" id="tooltip-1" role="tooltip" style="\${getPointerStyle("right-top")}">
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
</span>\``,...d.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => \`
<span class="tooltip" style="margin-left: 100px; margin-top: 100px;">
    <button class="icon-btn tooltip__host" aria-describedby="tooltip-1" aria-expanded="true" aria-label="Info">
        <svg class="icon icon--24" height="16" width="16" aria-hidden="true">
            <use href="#icon-settings-24"></use>
        </svg>
    </button>
    <div class="tooltip__overlay" id="tooltip-1" role="tooltip" style="\${getPointerStyle("top-right")}">
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
</span>\``,..._.parameters?.docs?.source}}};const b=["top","topLeft","leftTop","left","leftBottom","bottomLeft","bottom","bottomRight","rightBottom","right","rightTop","topRight"];export{b as __namedExportsOrder,l as bottom,a as bottomLeft,p as bottomRight,h as default,e as left,n as leftBottom,s as leftTop,c as right,r as rightBottom,d as rightTop,o as top,i as topLeft,_ as topRight};
