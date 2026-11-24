export default { title: "Skin/Action Menu/RTL" };

export const rtl = () => `
<div dir="rtl">
    <div class="action-menu" role="menu" aria-label="View">
        <div class="action-menu__item" role="menuitem" tabindex="0">
            <span>Edit</span>
        </div>
        <hr class="action-menu__separator" role="separator" />
        <div class="action-menu__item" role="menuitemcheckbox" aria-checked="true" tabindex="-1">
            <span>Show sold items</span>
            <svg class="icon icon--16 action-menu__icon" height="16" width="16" aria-hidden="true">
                <use href="#icon-tick-16"></use>
            </svg>
        </div>
        <div class="action-menu__item" role="menuitemcheckbox" aria-checked="false" tabindex="-1">
            <span>Show ended items</span>
            <svg class="icon icon--16 action-menu__icon" height="16" width="16" aria-hidden="true">
                <use href="#icon-tick-16"></use>
            </svg>
        </div>
    </div>
</div>
`;
