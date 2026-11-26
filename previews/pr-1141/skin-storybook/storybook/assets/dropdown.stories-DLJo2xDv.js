import{t as e}from"./rolldown-runtime-Dh6celcD.js";var t,n,r,i,a,o,s,c,l;function u(){return(u=e((()=>{t={title:`Skin/Menu Button/Dropdown`},n=e=>`
    <div class="menu-button__dropdown" id="${e}">
        <div class="navigation-menu">
            <ul class="navigation-menu__items">
                <li><a href="https://www.ebay.com" class="navigation-menu__item">Purchases</a></li>
                <li><a href="https://www.ebay.com" class="navigation-menu__item">Watchlist</a></li>
                <li><a href="https://www.ebay.com" class="navigation-menu__item">Saved searches</a></li>
            </ul>
        </div>
    </div>`,r=(e,t,n=``)=>`
    <button class="button" type="button" id="${e}-trigger" aria-expanded="${t}" aria-controls="${e}"${n}>
        <span class="button__cell">
            <span class="button__text">My eBay</span>
            <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </span>
    </button>`,i=()=>`
<span class="menu-button">${r(`menu-button-collapsed`,`false`)}${n(`menu-button-collapsed`)}
</span>
`,a=()=>`
<span class="menu-button">${r(`menu-button-expanded`,`true`)}${n(`menu-button-expanded`)}
</span>
`,o=()=>`
<span class="menu-button">${r(`menu-button-disabled`,`false`,` disabled`)}${n(`menu-button-disabled`)}
</span>
`,s=()=>`
<span class="menu-button">
    <button class="icon-button" type="button" id="menu-button-icon-trigger" aria-label="My eBay" aria-expanded="true" aria-controls="menu-button-icon">
        <svg class="icon icon--24" aria-hidden="true" width="16" height="16">
            <use href="#icon-profile-24"></use>
        </svg>
    </button>${n(`menu-button-icon`)}
</span>
`,c=()=>`
<div style="display: flex; justify-content: flex-end;">
    <span class="menu-button">${r(`menu-button-reverse`,`true`)}
        <div class="menu-button__dropdown menu-button__dropdown--reverse" id="menu-button-reverse">
            <div class="navigation-menu">
                <ul class="navigation-menu__items">
                    <li><a href="https://www.ebay.com" class="navigation-menu__item">Purchases</a></li>
                    <li><a href="https://www.ebay.com" class="navigation-menu__item">Watchlist</a></li>
                    <li><a href="https://www.ebay.com" class="navigation-menu__item">Saved searches</a></li>
                </ul>
            </div>
        </div>
    </span>
</div>
`,l=[`collapsed`,`expanded`,`disabled`,`iconButtonTrigger`,`reverse`]})))()}u();export{l as __namedExportsOrder,i as collapsed,t as default,o as disabled,a as expanded,s as iconButtonTrigger,c as reverse};