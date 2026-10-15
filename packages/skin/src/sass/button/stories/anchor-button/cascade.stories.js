export default { title: "Skin/Button/Anchor/Cascade" };

export const RTL = () => `
<div dir="rtl">
    <a class="btn" href="http://www.ebay.com">
        <span class="btn__cell">
            <svg class="icon icon--16" width="16" height="16"><use href="#icon-settings-16"></use></svg>
            <span>Anchor Button</span>
        </span>
    </a>
</div>
`;

export const color = () => `
<div style="color: red;">
    <a class="btn" href="http://www.ebay.com">
        <span class="btn__cell">
            <svg class="icon icon--16" width="16" height="16"><use href="#icon-settings-16"></use></svg>
            <span>Anchor Button</span>
        </span>
    </a>
</div>
`;

export const fontSize = () => `
<div style="font-size: 200%">
    <a class="btn" href="http://www.ebay.com">
        <span class="btn__cell">
            <svg class="icon icon--16" width="16" height="16"><use href="#icon-settings-16"></use></svg>
            <span>Anchor Button</span>
        </span>
    </a>
</div>
`;
