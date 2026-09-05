const e={title:"Skin/Split Button/Size"},n=()=>`
<span class="split-button">
    <button class="btn btn--primary btn--split-start btn--truncated" aria-haspopup="true" type="button">
        <span class="btn__cell">
            <span class="btn__text">Longest Button Text Example Lorem Ipsum Dolor</span>
        </span>
    </button>
    <span class="menu-button">
        <button class="btn btn--primary btn--split-end" aria-haspopup="true" type="button">
            <svg class="icon icon--12" height="10" width="14" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </button>
        <div class="menu-button__menu menu-button__menu--reverse menu-button__menu--set-position">
            <div class="menu-button__items" role="menu">
                <div class="menu-button__item" role="menuitem">
                    <span>Item 10000</span>
                </div>
                <div class="menu-button__item" role="menuitem">
                    <span>Item 20000</span>
                </div>
                <div class="menu-button__item" role="menuitem">
                    <span>Item 30000</span>
                </div>
            </div>
        </div>
    </span>
</span>
`,t=()=>`
<span class="split-button">
    <button class="btn btn--primary btn--split-start btn--truncated" aria-haspopup="true" type="button">
        <span class="btn__cell">
            <span class="btn__text">Longest Button Text Example Lorem Ipsum Dolor</span>
        </span>
    </button>
    <span class="menu-button">
        <button class="btn btn--primary btn--split-end" aria-expanded="true" aria-haspopup="true" type="button">
            <svg class="icon icon--12" height="10" width="14" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </button>
        <div class="menu-button__menu menu-button__menu--reverse menu-button__menu--set-position">
            <div class="menu-button__items" role="menu">
                <div class="menu-button__item" role="menuitem">
                    <span>Item 10000</span>
                </div>
                <div class="menu-button__item" role="menuitem">
                    <span>Item 20000</span>
                </div>
                <div class="menu-button__item" role="menuitem">
                    <span>Item 30000</span>
                </div>
            </div>
        </div>
    </span>
</span>
`;n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => \`
<span class="split-button">
    <button class="btn btn--primary btn--split-start btn--truncated" aria-haspopup="true" type="button">
        <span class="btn__cell">
            <span class="btn__text">Longest Button Text Example Lorem Ipsum Dolor</span>
        </span>
    </button>
    <span class="menu-button">
        <button class="btn btn--primary btn--split-end" aria-haspopup="true" type="button">
            <svg class="icon icon--12" height="10" width="14" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </button>
        <div class="menu-button__menu menu-button__menu--reverse menu-button__menu--set-position">
            <div class="menu-button__items" role="menu">
                <div class="menu-button__item" role="menuitem">
                    <span>Item 10000</span>
                </div>
                <div class="menu-button__item" role="menuitem">
                    <span>Item 20000</span>
                </div>
                <div class="menu-button__item" role="menuitem">
                    <span>Item 30000</span>
                </div>
            </div>
        </div>
    </span>
</span>
\``,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => \`
<span class="split-button">
    <button class="btn btn--primary btn--split-start btn--truncated" aria-haspopup="true" type="button">
        <span class="btn__cell">
            <span class="btn__text">Longest Button Text Example Lorem Ipsum Dolor</span>
        </span>
    </button>
    <span class="menu-button">
        <button class="btn btn--primary btn--split-end" aria-expanded="true" aria-haspopup="true" type="button">
            <svg class="icon icon--12" height="10" width="14" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </button>
        <div class="menu-button__menu menu-button__menu--reverse menu-button__menu--set-position">
            <div class="menu-button__items" role="menu">
                <div class="menu-button__item" role="menuitem">
                    <span>Item 10000</span>
                </div>
                <div class="menu-button__item" role="menuitem">
                    <span>Item 20000</span>
                </div>
                <div class="menu-button__item" role="menuitem">
                    <span>Item 30000</span>
                </div>
            </div>
        </div>
    </span>
</span>
\``,...t.parameters?.docs?.source}}};const s=["longTextCollapsed","longTextExpanded"];export{s as __namedExportsOrder,e as default,n as longTextCollapsed,t as longTextExpanded};
