export default { title: "Skin/Navigation Button/Cascade" };

export const RTL = () => `
<div dir="rtl">
    <a class="navigation-button" href="http://www.ebay.com">
        <span class="navigation-button__cell">
            <svg class="icon icon--16" width="16" height="16"><use href="#icon-settings-16"></use></svg>
            <span>Navigation Button</span>
        </span>
    </a>
</div>
`;

export const color = () => `
<div style="color: red;">
    <a class="navigation-button" href="http://www.ebay.com">
        <span class="navigation-button__cell">
            <svg class="icon icon--16" width="16" height="16"><use href="#icon-settings-16"></use></svg>
            <span>Navigation Button</span>
        </span>
    </a>
</div>
`;

export const fontSize = () => `
<div style="font-size: 200%">
    <a class="navigation-button" href="http://www.ebay.com">
        <span class="navigation-button__cell">
            <svg class="icon icon--16" width="16" height="16"><use href="#icon-settings-16"></use></svg>
            <span>Navigation Button</span>
        </span>
    </a>
</div>
`;
