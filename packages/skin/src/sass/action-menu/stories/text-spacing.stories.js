export default { title: "Skin/Action Menu/Text Spacing" };

export const textSpacing = () => `
<div class="action-menu demo-a11y-text-spacing" role="menu" aria-label="View">
    <div class="action-menu__item" role="menuitem" tabindex="0">
        <span>Edit</span>
    </div>
    <div class="action-menu__item" role="menuitemcheckbox" aria-checked="true" tabindex="-1">
        <span>Show sold items</span>
        <svg class="icon icon--16 action-menu__icon" height="16" width="16" aria-hidden="true">
            <use href="#icon-tick-16"></use>
        </svg>
    </div>
    <div class="action-menu__item action-menu__item--badged" role="menuitem" tabindex="-1">
        <span>Inbox<span class="badge action-menu__badge" role="img" aria-label="99+ unread">99+</span></span>
    </div>
</div>
`;
