import{t as e}from"./rolldown-runtime-Dh6celcD.js";var t,n,r,i,a,o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{t={title:`Skin/Action Menu`},n=`
        <svg class="icon icon--16 action-menu__icon" height="16" width="16" aria-hidden="true">
            <use href="#icon-tick-16"></use>
        </svg>`,r=(e,t=``)=>`
    <div class="action-menu__item" role="menuitem"${t}>
        <span>${e}</span>
    </div>`,i=(e,t,r,i=``)=>`
    <div class="action-menu__item" role="${e}" aria-checked="${r}"${i}>
        <span>${t}</span>${n}
    </div>`,a=()=>`
<div class="action-menu" role="menu" aria-label="Actions">${r(`Edit`,` tabindex="0"`)}${r(`Duplicate`,` tabindex="-1"`)}${r(`Share`,` tabindex="-1"`)}
</div>
`,o=()=>`
<div class="action-menu" role="menu" aria-label="View">${i(`menuitemcheckbox`,`Show sold items`,`true`,` tabindex="0"`)}${i(`menuitemcheckbox`,`Show ended items`,`false`,` tabindex="-1"`)}${i(`menuitemcheckbox`,`Show watched items`,`true`,` tabindex="-1"`)}
</div>
`,s=()=>`
<div class="action-menu" role="menu" aria-label="Sort">${i(`menuitemradio`,`Best match`,`true`,` tabindex="0"`)}${i(`menuitemradio`,`Price: lowest first`,`false`,` tabindex="-1"`)}${i(`menuitemradio`,`Price: highest first`,`false`,` tabindex="-1"`)}
</div>
`,c=()=>`
<div class="action-menu" role="menu" aria-label="Actions">${r(`Edit`,` tabindex="0"`)}${r(`Duplicate`,` aria-disabled="true" tabindex="-1"`)}${i(`menuitemcheckbox`,`Show sold items`,`true`,` aria-disabled="true" tabindex="-1"`)}
</div>
`,l=()=>`
<div class="action-menu" role="menu" aria-label="Actions">${r(`Edit`,` tabindex="0"`)}${r(`Duplicate`,` tabindex="-1"`)}
    <hr class="action-menu__separator" role="separator" />${i(`menuitemcheckbox`,`Show sold items`,`true`,` tabindex="-1"`)}${i(`menuitemcheckbox`,`Show ended items`,`false`,` tabindex="-1"`)}
    <hr class="action-menu__separator" role="separator" />${i(`menuitemradio`,`Best match`,`true`,` tabindex="-1"`)}${i(`menuitemradio`,`Newly listed`,`false`,` tabindex="-1"`)}
</div>
`,u=()=>`
<div class="action-menu" role="menu" aria-label="Messages">
    <div class="action-menu__item action-menu__item--badged" role="menuitem" tabindex="0">
        <span>Inbox<span class="badge action-menu__badge" role="img" aria-label="5 unread">5</span></span>
    </div>
    <div class="action-menu__item action-menu__item--badged" role="menuitem" tabindex="-1">
        <span>Offers<span class="badge action-menu__badge" role="img" aria-label="12 new">12</span></span>
    </div>
</div>
`,d=()=>`
<div class="action-menu action-menu--scroll" role="menu" aria-label="Actions" style="height: 120px;">${r(`Item 1`,` tabindex="0"`)}${r(`Item 2`,` tabindex="-1"`)}${r(`Item 3`,` tabindex="-1"`)}${r(`Item 4`,` tabindex="-1"`)}${r(`Item 5`,` tabindex="-1"`)}
</div>
`,f=()=>`
<div style="width: 320px;">
    <div class="action-menu action-menu--fix-width" role="menu" aria-label="Actions">${r(`Edit`,` tabindex="0"`)}${r(`Duplicate`,` tabindex="-1"`)}
    </div>
</div>
`,p=[`base`,`checkbox`,`radio`,`disabled`,`grouped`,`badged`,`scroll`,`fixWidth`]})))()}m();export{p as __namedExportsOrder,u as badged,a as base,o as checkbox,t as default,c as disabled,f as fixWidth,l as grouped,s as radio,d as scroll};