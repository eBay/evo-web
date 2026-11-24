export default { title: "Skin/Action Menu" };

const tick = `
        <svg class="icon icon--16 action-menu__icon" height="16" width="16" aria-hidden="true">
            <use href="#icon-tick-16"></use>
        </svg>`;

const item = (text, attrs = "") => `
    <div class="action-menu__item" role="menuitem"${attrs}>
        <span>${text}</span>
    </div>`;

const checkItem = (role, text, checked, attrs = "") => `
    <div class="action-menu__item" role="${role}" aria-checked="${checked}"${attrs}>
        <span>${text}</span>${tick}
    </div>`;

export const base = () => `
<div class="action-menu" role="menu" aria-label="Actions">${item("Edit", ' tabindex="0"')}${item("Duplicate", ' tabindex="-1"')}${item("Share", ' tabindex="-1"')}
</div>
`;

export const checkbox = () => `
<div class="action-menu" role="menu" aria-label="View">${checkItem("menuitemcheckbox", "Show sold items", "true", ' tabindex="0"')}${checkItem("menuitemcheckbox", "Show ended items", "false", ' tabindex="-1"')}${checkItem("menuitemcheckbox", "Show watched items", "true", ' tabindex="-1"')}
</div>
`;

export const radio = () => `
<div class="action-menu" role="menu" aria-label="Sort">${checkItem("menuitemradio", "Best match", "true", ' tabindex="0"')}${checkItem("menuitemradio", "Price: lowest first", "false", ' tabindex="-1"')}${checkItem("menuitemradio", "Price: highest first", "false", ' tabindex="-1"')}
</div>
`;

export const disabled = () => `
<div class="action-menu" role="menu" aria-label="Actions">${item("Edit", ' tabindex="0"')}${item("Duplicate", ' aria-disabled="true" tabindex="-1"')}${checkItem("menuitemcheckbox", "Show sold items", "true", ' aria-disabled="true" tabindex="-1"')}
</div>
`;

export const grouped = () => `
<div class="action-menu" role="menu" aria-label="Actions">${item("Edit", ' tabindex="0"')}${item("Duplicate", ' tabindex="-1"')}
    <hr class="action-menu__separator" role="separator" />${checkItem("menuitemcheckbox", "Show sold items", "true", ' tabindex="-1"')}${checkItem("menuitemcheckbox", "Show ended items", "false", ' tabindex="-1"')}
    <hr class="action-menu__separator" role="separator" />${checkItem("menuitemradio", "Best match", "true", ' tabindex="-1"')}${checkItem("menuitemradio", "Newly listed", "false", ' tabindex="-1"')}
</div>
`;

export const badged = () => `
<div class="action-menu" role="menu" aria-label="Messages">
    <div class="action-menu__item action-menu__item--badged" role="menuitem" tabindex="0">
        <span>Inbox<span class="badge action-menu__badge" role="img" aria-label="5 unread">5</span></span>
    </div>
    <div class="action-menu__item action-menu__item--badged" role="menuitem" tabindex="-1">
        <span>Offers<span class="badge action-menu__badge" role="img" aria-label="12 new">12</span></span>
    </div>
</div>
`;

export const scroll = () => `
<div class="action-menu action-menu--scroll" role="menu" aria-label="Actions" style="height: 120px;">${item("Item 1", ' tabindex="0"')}${item("Item 2", ' tabindex="-1"')}${item("Item 3", ' tabindex="-1"')}${item("Item 4", ' tabindex="-1"')}${item("Item 5", ' tabindex="-1"')}
</div>
`;

export const fixWidth = () => `
<div style="width: 320px;">
    <div class="action-menu action-menu--fix-width" role="menu" aria-label="Actions">${item("Edit", ' tabindex="0"')}${item("Duplicate", ' tabindex="-1"')}
    </div>
</div>
`;
