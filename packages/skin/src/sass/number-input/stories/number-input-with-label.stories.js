export default { title: "Skin/Number Input/With Label" };

export const base = () => `
<span class="textbox number-input">
    <label for="number-input-1">
        Add a number
    </label>
    <button
        class="icon-btn icon-btn--transparent number-input__decrement"
        tabindex="-1"
        type="button"
    >
        <svg
            aria-hidden="true"
            class="icon icon--24"
            width="24"
            height="24"
        >
            <use href="#icon-remove-24"/>
        </svg>
    </button>

    <input
        id="number-input-1"
        class="textbox__control"
        type="number"
        min="0"
        value="0"
    >
    <button
        class="icon-btn icon-btn--transparent number-input__increment"
        type="button"
        tabindex="-1"
    >
        <svg
            aria-hidden="true"
            class="icon icon--24"
            width="24"
            height="24"
        >
            <use href="#icon-add-24"/>
        </svg>
    </button>
</span>
`;

export const fluid = () => `
<span class="textbox textbox--fluid number-input">
    <label for="number-input-1">
        Add a number
    </label>
    <button
        class="icon-btn icon-btn--transparent number-input__decrement"
        tabindex="-1"
        type="button"
    >
        <svg
            aria-hidden="true"
            class="icon icon--24"
            width="24"
            height="24"
        >
            <use href="#icon-remove-24"/>
        </svg>
    </button>

    <input
        id="number-input-1"
        class="textbox__control"
        type="number"
        min="0"
        value="0"
    >
    <button
        class="icon-btn icon-btn--transparent number-input__increment"
        type="button"
        tabindex="-1"
    >
        <svg
            aria-hidden="true"
            class="icon icon--24"
            width="24"
            height="24"
        >
            <use href="#icon-add-24"/>
        </svg>
    </button>
</span>
`;

export const large = () => `
<span class="textbox textbox--large number-input">
    <label for="number-input-1">
        Add a number
    </label>
    <button
        class="icon-btn icon-btn--transparent number-input__decrement"
        tabindex="-1"
        type="button"
    >
        <svg
            aria-hidden="true"
            class="icon icon--24"
            width="24"
            height="24"
        >
            <use href="#icon-remove-24"/>
        </svg>
    </button>

    <input
        id="number-input-1"
        class="textbox__control"
        type="number"
        min="0"
        value="0"
    >
    <button
        class="icon-btn icon-btn--transparent number-input__increment"
        type="button"
        tabindex="-1"
    >
        <svg
            aria-hidden="true"
            class="icon icon--24"
            width="24"
            height="24"
        >
            <use href="#icon-add-24"/>
        </svg>
    </button>
</span>
`;
