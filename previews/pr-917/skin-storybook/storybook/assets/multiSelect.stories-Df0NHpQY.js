const n={title:"Skin/Menu/Multi Select"},e=()=>`
<span class="menu">
    <div class="menu__items" role="menu">
        <div class="menu__item" role="menuitemcheckbox" aria-checked="false" tabindex="0">
            <span>Item 1</span>
            <svg class="icon icon--16" height="8" width="8" aria-hidden="true">
                <use href="#icon-tick-16"></use>
            </svg>
        </div>
        <div class="menu__item" role="menuitemcheckbox" aria-checked="false">
            <span>Item 2</span>
            <svg class="icon icon--16" height="8" width="8" aria-hidden="true">
                <use href="#icon-tick-16"></use>
            </svg>
        </div>
        <div class="menu__item" role="menuitemcheckbox" aria-checked="false">
            <span>Item 3</span>
            <svg class="icon icon--16" height="8" width="8" aria-hidden="true">
                <use href="#icon-tick-16"></use>
            </svg>
        </div>
    </div>
</span>
`,i=()=>`
<span class="menu">
    <div class="menu__items" role="menu">
        <div class="menu__item" role="menuitemcheckbox" aria-checked="true" tabindex="0">
            <span>Item 1</span>
            <svg class="icon icon--16" height="8" width="8" aria-hidden="true">
                <use href="#icon-tick-16"></use>
            </svg>
        </div>
        <div class="menu__item" role="menuitemcheckbox" aria-checked="true">
            <span>Item 2</span>
            <svg class="icon icon--16" height="8" width="8" aria-hidden="true">
                <use href="#icon-tick-16"></use>
            </svg>
        </div>
        <div class="menu__item" role="menuitemcheckbox" aria-checked="true">
            <span>Item 3</span>
            <svg class="icon icon--16" height="8" width="8" aria-hidden="true">
                <use href="#icon-tick-16"></use>
            </svg>
        </div>
    </div>
</span>
`,s=()=>`
<span class="menu">
    <div class="menu__items" role="menu">
        <div class="menu__item" role="menuitemcheckbox" aria-checked="true" aria-disabled="true" tabindex="0">
            <span>Item 1</span>
            <svg class="icon icon--16" height="8" width="8" aria-hidden="true">
                <use href="#icon-tick-16"></use>
            </svg>
        </div>
        <div class="menu__item" role="menuitemcheckbox" aria-checked="true" aria-disabled="true">
            <span>Item 2</span>
            <svg class="icon icon--16" height="8" width="8" aria-hidden="true">
                <use href="#icon-tick-16"></use>
            </svg>
        </div>
        <div class="menu__item" role="menuitemcheckbox" aria-checked="true" aria-disabled="true">
            <span>Item 3</span>
            <svg class="icon icon--16" height="8" width="8" aria-hidden="true">
                <use href="#icon-tick-16"></use>
            </svg>
        </div>
    </div>
</span>
`;e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => \`
<span class="menu">
    <div class="menu__items" role="menu">
        <div class="menu__item" role="menuitemcheckbox" aria-checked="false" tabindex="0">
            <span>Item 1</span>
            <svg class="icon icon--16" height="8" width="8" aria-hidden="true">
                <use href="#icon-tick-16"></use>
            </svg>
        </div>
        <div class="menu__item" role="menuitemcheckbox" aria-checked="false">
            <span>Item 2</span>
            <svg class="icon icon--16" height="8" width="8" aria-hidden="true">
                <use href="#icon-tick-16"></use>
            </svg>
        </div>
        <div class="menu__item" role="menuitemcheckbox" aria-checked="false">
            <span>Item 3</span>
            <svg class="icon icon--16" height="8" width="8" aria-hidden="true">
                <use href="#icon-tick-16"></use>
            </svg>
        </div>
    </div>
</span>
\``,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => \`
<span class="menu">
    <div class="menu__items" role="menu">
        <div class="menu__item" role="menuitemcheckbox" aria-checked="true" tabindex="0">
            <span>Item 1</span>
            <svg class="icon icon--16" height="8" width="8" aria-hidden="true">
                <use href="#icon-tick-16"></use>
            </svg>
        </div>
        <div class="menu__item" role="menuitemcheckbox" aria-checked="true">
            <span>Item 2</span>
            <svg class="icon icon--16" height="8" width="8" aria-hidden="true">
                <use href="#icon-tick-16"></use>
            </svg>
        </div>
        <div class="menu__item" role="menuitemcheckbox" aria-checked="true">
            <span>Item 3</span>
            <svg class="icon icon--16" height="8" width="8" aria-hidden="true">
                <use href="#icon-tick-16"></use>
            </svg>
        </div>
    </div>
</span>
\``,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => \`
<span class="menu">
    <div class="menu__items" role="menu">
        <div class="menu__item" role="menuitemcheckbox" aria-checked="true" aria-disabled="true" tabindex="0">
            <span>Item 1</span>
            <svg class="icon icon--16" height="8" width="8" aria-hidden="true">
                <use href="#icon-tick-16"></use>
            </svg>
        </div>
        <div class="menu__item" role="menuitemcheckbox" aria-checked="true" aria-disabled="true">
            <span>Item 2</span>
            <svg class="icon icon--16" height="8" width="8" aria-hidden="true">
                <use href="#icon-tick-16"></use>
            </svg>
        </div>
        <div class="menu__item" role="menuitemcheckbox" aria-checked="true" aria-disabled="true">
            <span>Item 3</span>
            <svg class="icon icon--16" height="8" width="8" aria-hidden="true">
                <use href="#icon-tick-16"></use>
            </svg>
        </div>
    </div>
</span>
\``,...s.parameters?.docs?.source}}};const a=["unselected","selected","disabled"];export{a as __namedExportsOrder,n as default,s as disabled,i as selected,e as unselected};
