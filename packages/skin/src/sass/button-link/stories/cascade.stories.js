export default { title: "Skin/Button Link/Cascade" };

export const RTL = () => `
<div dir="rtl">
    <a class="button-link" href="http://www.ebay.com">
        <span class="button-link__cell">
            <svg class="icon icon--16" width="16" height="16"><use href="#icon-settings-16"></use></svg>
            <span>Button Link</span>
        </span>
    </a>
</div>
`;

export const color = () => `
<div style="color: red;">
    <a class="button-link" href="http://www.ebay.com">
        <span class="button-link__cell">
            <svg class="icon icon--16" width="16" height="16"><use href="#icon-settings-16"></use></svg>
            <span>Button Link</span>
        </span>
    </a>
</div>
`;

export const fontSize = () => `
<div style="font-size: 200%">
    <a class="button-link" href="http://www.ebay.com">
        <span class="button-link__cell">
            <svg class="icon icon--16" width="16" height="16"><use href="#icon-settings-16"></use></svg>
            <span>Button Link</span>
        </span>
    </a>
</div>
`;
