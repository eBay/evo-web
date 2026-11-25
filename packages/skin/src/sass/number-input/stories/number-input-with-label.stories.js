export default { title: "Skin/Number Input/With Label" };

export const base = () => `
<span class="number-input">
    <span class="textbox">
        <label for="number-input-1">
            Add a number
        </label>
        <button
            class="icon-button icon-button--small icon-button--transparent number-input__decrement"
            tabindex="-1"
            aria-hidden="true"
            type="button"
            disabled
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
            class="icon-button icon-button--small icon-button--transparent number-input__increment"
            aria-hidden="true"
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
        <label for="number-input-2">
            Add a number
        </label>
        <button
            class="icon-button icon-button--small icon-button--transparent number-input__decrement"
            tabindex="-1"
            aria-hidden="true"
            type="button"
            disabled
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
            id="number-input-2"
            class="textbox__control"
            type="number"
            min="0"
            value="0"
        >
        <button
            class="icon-button icon-button--small icon-button--transparent number-input__increment"
            aria-hidden="true"
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
        <label for="number-input-1">
            Add a number
        </label>
        <button
            class="icon-button icon-button--small icon-button--transparent number-input__decrement"
            tabindex="-1"
            aria-hidden="true"
            type="button"
            disabled
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
            class="icon-button icon-button--small icon-button--transparent number-input__increment"
            aria-hidden="true"
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
