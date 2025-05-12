export default { title: "Skin/Number Input/Base" };

export const base = () => `
<span class="number-input">
    <span class="textbox">
        <button
            class="icon-btn icon-btn--small icon-btn--transparent number-input__decrement"
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
            aria-label="Number input"
            class="textbox__control"
            type="number"
            min="0"
            value="0"
        >
        <button
            class="icon-btn icon-btn--small icon-btn--transparent number-input__increment"
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
</span>
`;

export const fluid = () => `
<span class="number-input">
    <span class="textbox textbox--fluid">
        <button
            class="icon-btn icon-btn--small icon-btn--transparent number-input__decrement"
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
            aria-label="Number input"
            class="textbox__control"
            type="number"
            min="0"
            value="0"
        >
        <button
            class="icon-btn icon-btn--small icon-btn--transparent number-input__increment"
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
</span>
`;

export const large = () => `
<span class="number-input">
    <span class="textbox textbox--large">
        <button
            class="icon-btn icon-btn--small icon-btn--transparent number-input__decrement"
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
            aria-label="Number input"
            class="textbox__control"
            type="number"
            min="0"
            value="0"
        >
        <button
            class="icon-btn icon-btn--small icon-btn--transparent number-input__increment"
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
</span>
`;

export const withDeleteHidden = () => `
<span class="number-input">
    <span class="textbox">
        <button
            class="icon-btn icon-btn--small icon-btn--transparent number-input__decrement"
            type="button"
            tabindex="-1"
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
            aria-label="Number input"
            class="textbox__control"
            type="number"
            value="2"
            min="1"
        >
        <button
            class="icon-btn icon-btn--small icon-btn--transparent number-input__delete"
            type="button"
            aria-label="Delete item"
        >
            <svg
                aria-hidden="true"
                class="icon icon--24"
                width="24"
                height="24"
            >
                <icon-symbol name="delete-24"/>
            </svg>
        </button>

        <button
            class="icon-btn icon-btn--small icon-btn--transparent number-input__increment"
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
</span>
`;

export const withDeleteShown = () => `
<span class="number-input number-input--show-delete">
    <span class="textbox">
        <button
            class="icon-btn icon-btn--small icon-btn--transparent number-input__decrement"
            type="button"
            tabindex="-1"
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
            aria-label="Number input"
            class="textbox__control"
            type="number"
            value="1"
            min="1"
        >
        <button
            class="icon-btn icon-btn--small icon-btn--transparent number-input__delete"
            type="button"
            aria-label="Delete item"
        >
            <svg
                aria-hidden="true"
                class="icon icon--24"
                width="24"
                height="24"
            >
                <use href="#icon-delete-24"/>
            </svg>
        </button>

        <button
            class="icon-btn icon-btn--small icon-btn--transparent number-input__increment"
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
</span>
`;
