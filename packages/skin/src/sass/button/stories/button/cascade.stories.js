export default { title: "Skin/Button/Cascade" };

export const color = () => `
<button type="button" class="button" style="color: red;">
    <span class="button__cell">
        <svg class="icon icon--16" width="16" height="16"><use href="#icon-settings-16"></use></svg>
        <span>Button</span>
    </span>
</button>
`;

export const fontSize = () => `
<div style="font-size: 200%;">
    <button type="button" class="button">
        <span class="button__cell">
            <svg class="icon icon--16" width="16" height="16"><use href="#icon-settings-16"></use></svg>
            <span>Button</span>
        </span>
    </button>
</div>
`;

export const RTL = () => `
<div dir="rtl">
    <button type="button" class="button button--primary">
        <span class="button__cell">
            <svg class="icon icon--16" width="16" height="16"><use href="#icon-close-16"></use></svg>
            <span>Button</span>
        </span>
    </button>
</div>
`;
