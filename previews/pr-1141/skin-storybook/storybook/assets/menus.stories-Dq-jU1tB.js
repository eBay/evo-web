import{t as e}from"./rolldown-runtime-Dh6celcD.js";var t,n,r,i,a,o,s,c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{t={title:`Skin/Menu Button/Menus`},n=`
            <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>`,r=`
                <svg class="icon icon--16 action-menu__icon" height="16" width="16" aria-hidden="true">
                    <use href="#icon-tick-16"></use>
                </svg>`,i=(e,t,r)=>`
    <button class="button" type="button" id="${e}-trigger" aria-expanded="true"${r?` aria-haspopup="menu"`:``} aria-controls="${e}-content">
        <span class="button__cell">
            <span class="button__text">${t}</span>${n}
        </span>
    </button>`,a=(e,t=``,n=!1)=>`
            <div class="action-menu__item" role="menuitem" tabindex="${n?0:-1}"${t}>
                <span>${e}</span>
            </div>`,o=(e,t,n,i=``)=>`
            <div class="action-menu__item" role="${e}" aria-checked="${n}" tabindex="-1"${i}>
                <span>${t}</span>${r}
            </div>`,s=(e,t,n,r=``,i=!1)=>{let a=e===`menuitemradio`?`radio`:`checkbox`;return`
                <div class="filter-menu__item" role="${e}" aria-checked="${n}" tabindex="${i?0:-1}"${r}>
                    <span class="filter-menu__${a}">
                        <svg class="icon icon--18 icon--unchecked" height="18" width="18" aria-hidden="true">
                            <use href="#icon-${a}-unchecked-18"></use>
                        </svg>
                        <svg class="icon icon--18 icon--checked" height="18" width="18" aria-hidden="true">
                            <use href="#icon-${a}-checked-18"></use>
                        </svg>
                    </span>
                    <span class="filter-menu__text">${t}</span>
                </div>`},c=(e,t,n)=>`
    <button class="filter-chip${n?` filter-chip--selected`:``}" type="button" id="${e}-trigger" aria-expanded="true" aria-haspopup="menu" aria-controls="${e}-content">
        <span class="filter-chip__text">${t}</span>
        <svg class="icon icon--12 filter-chip__trailing" width="13" height="12" aria-hidden="true">
            <use href="#icon-chevron-down-12"></use>
        </svg>${n?`
        <span class="clipped">Filter Applied</span>`:``}
    </button>`,l=()=>`
<span class="menu-button">${i(`menu-button-action`,`Actions`,!0)}
    <div class="menu-button__dropdown">
        <div class="action-menu" role="menu" id="menu-button-action-content" aria-labelledby="menu-button-action-trigger">${a(`Edit`,` aria-disabled="true"`)}${a(`Duplicate`,``,!0)}${a(`Share`)}
            <hr class="action-menu__separator" role="separator" />${o(`menuitemcheckbox`,`Show sold items`,`true`)}${o(`menuitemcheckbox`,`Show ended items`,`false`)}
            <hr class="action-menu__separator" role="separator" />${o(`menuitemradio`,`Best match`,`true`)}${o(`menuitemradio`,`Newly listed`,`false`)}
        </div>
    </div>
</span>
`,u=()=>`
<span class="menu-button">
    <button class="icon-button" type="button" id="menu-button-action-icon-trigger" aria-label="More actions" aria-expanded="true" aria-haspopup="menu" aria-controls="menu-button-action-icon-content">
        <svg class="icon icon--24" aria-hidden="true" width="16" height="16">
            <use href="#icon-overflow-vertical-24"></use>
        </svg>
    </button>
    <div class="menu-button__dropdown">
        <div class="action-menu" role="menu" id="menu-button-action-icon-content" aria-labelledby="menu-button-action-icon-trigger">${a(`Edit`,``,!0)}${a(`Duplicate`)}${a(`Share`)}
        </div>
    </div>
</span>
`,d=()=>`
<span class="menu-button">${c(`menu-button-filter-single`,`Condition`,!0)}
    <div class="menu-button__dropdown">
        <span class="filter-menu">
            <div class="filter-menu__items" role="menu" id="menu-button-filter-single-content" aria-labelledby="menu-button-filter-single-trigger">${s(`menuitemradio`,`Any condition`,`false`,` aria-disabled="true"`)}${s(`menuitemradio`,`New`,`true`,``,!0)}${s(`menuitemradio`,`Used`,`false`)}
            </div>
        </span>
    </div>
</span>
`,f=()=>`
<span class="menu-button">${c(`menu-button-filter-multi`,`Color`,!0)}
    <div class="menu-button__dropdown">
        <span class="filter-menu">
            <div class="filter-menu__items" role="menu" id="menu-button-filter-multi-content" aria-labelledby="menu-button-filter-multi-trigger">${s(`menuitemcheckbox`,`Black`,`false`,` aria-disabled="true"`)}${s(`menuitemcheckbox`,`Blue`,`true`,``,!0)}${s(`menuitemcheckbox`,`Red with a long label that wraps to another line`,`true`)}
            </div>
            <button type="button" class="filter-menu__footer">Apply</button>
        </span>
    </div>
</span>
`,p=()=>`
<span class="menu-button">${c(`menu-button-filter-none`,`Brand`,!1)}
    <div class="menu-button__dropdown">
        <span class="filter-menu">
            <div class="filter-menu__items" role="menu" id="menu-button-filter-none-content" aria-labelledby="menu-button-filter-none-trigger">${s(`menuitemcheckbox`,`Apple`,`false`,``,!0)}${s(`menuitemcheckbox`,`Samsung`,`false`)}${s(`menuitemcheckbox`,`Google`,`false`)}
            </div>
        </span>
    </div>
</span>
`,m=()=>`
<span class="menu-button">${i(`menu-button-nav`,`My eBay`,!1)}
    <div class="menu-button__dropdown">
        <div class="navigation-menu">
            <ul class="navigation-menu__items" id="menu-button-nav-content">
                <li><a class="navigation-menu__item">Summary</a></li>
                <li>
                    <a href="https://www.ebay.com" class="navigation-menu__item" aria-current="page">
                        <span>Purchases</span>
                        <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                            <use href="#icon-tick-16"></use>
                        </svg>
                    </a>
                </li>
                <li><a href="https://www.ebay.com" class="navigation-menu__item">Watchlist</a></li>
                <li><button type="button" class="navigation-menu__item"><span>Sign out</span></button></li>
            </ul>
        </div>
    </div>
</span>
`,h=[`actionMenu`,`actionMenuIconButton`,`filterMenuSingle`,`filterMenuMultiple`,`filterMenuUnselected`,`navigationMenu`]})))()}g();export{h as __namedExportsOrder,l as actionMenu,u as actionMenuIconButton,t as default,f as filterMenuMultiple,d as filterMenuSingle,p as filterMenuUnselected,m as navigationMenu};