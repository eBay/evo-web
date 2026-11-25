export default { title: "Skin/Select" };

export const defaultSelection = () => `
<span class="select">
    <select aria-label="Select demo">
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
    </select>
    <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
        <use href="#icon-chevron-down-12"></use>
    </svg>
</span>
`;

export const forcedSelection = () => `
<span class="select">
   <select aria-label="Select demo">
       <option value="0" disabled selected>-select-</option>
       <option value="1">Option 1</option>
       <option value="2">Option 2</option>
       <option value="3">Option 3</option>
   </select>
   <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
       <use href="#icon-chevron-down-12"></use>
   </svg>
</span>
`;

export const disabled = () => `
<span class="select">
    <select aria-label="Select demo" disabled>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
    </select>
    <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
        <use href="#icon-chevron-down-12"></use>
    </svg>
</span>
`;

export const fluid = () => `
<div class="select select--fluid">
    <select aria-label="Select demo">
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
    </select>
    <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
        <use href="#icon-chevron-down-12"></use>
    </svg>
</div>
`;

export const borderless = () => `
<span class="select select--borderless">
    <select aria-label="Select demo">
        <option value="0" disabled selected>Choose a Size</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
    </select>
    <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
        <use href="#icon-chevron-down-12"></use>
    </svg>
</span>
`;

export const large = () => `
<span class="select select--large">
    <select aria-label="Select demo">
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
    </select>
    <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
        <use href="#icon-chevron-down-12"></use>
    </svg>
</span>
`;

export const underline = () => `
<span class="select select--underline">
    <select aria-label="Select demo">
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
    </select>
    <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
        <use href="#icon-chevron-down-12"></use>
    </svg>
</span>
`;

export const invalid = () => `
<span class="select">
    <select aria-label="Select demo" aria-invalid="true">
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
    </select>
    <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
        <use href="#icon-chevron-down-12"></use>
    </svg>
</span>
`;

export const textSpacing = () => `
<span class="select demo-a11y-text-spacing">
    <select aria-label="Select demo">
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
    </select>
    <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
        <use href="#icon-chevron-down-12"></use>
    </svg>
</span>
`;

export const selectedOption = () => `
<span class="select">
    <select aria-label="Select demo" name="options">
        <option value="item1">
            Option 1
        </option>
        <option value="item2" selected>
            Option 2
        </option>
        <option value="item3">
            Option 3
        </option>
    </select>
    <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
        <use href="#icon-chevron-down-12"></use>
    </svg>
</span>
`;
