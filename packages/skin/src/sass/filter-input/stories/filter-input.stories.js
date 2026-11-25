export default { title: "Skin/Filter Input" };

export const base = () => `
<span class="filter-input" role="search" aria-label="Filter list">
    <span class="textbox textbox--fluid">
        <svg class="icon icon--16" width="16" height="16" aria-hidden="true">
            <use href="#icon-search-16" />
        </svg>
        <input class="textbox__control" placeholder="Filter list" type="search" aria-controls="filter-input-results-base" aria-label="Filter list" required/>
        <button
            class="icon-button icon-button--transparent icon-button--small filter-input__clear-btn"
            type="button"
            aria-label="Clear filter"
        >
            <svg aria-hidden="true" class="icon icon--16" width="16" height="16">
                <use href="#icon-clear-16" />
            </svg>
        </button>
    </span>
</span>
<div id="filter-input-results-base"></div>
`;

export const filled = () => `
<span class="filter-input" role="search" aria-label="Filter list">
    <span class="textbox textbox--fluid">
        <svg class="icon icon--16" width="16" height="16" aria-hidden="true">
            <use href="#icon-search-16" />
        </svg>
        <input class="textbox__control" placeholder="Filter list" type="search" aria-controls="filter-input-results-filled" aria-label="Filter list" required value="Tenni" />
        <button
            class="icon-button icon-button--transparent icon-button--small filter-input__clear-btn"
            type="button"
            aria-label="Clear filter"
        >
            <svg aria-hidden="true" class="icon icon--16" width="16" height="16">
                <use href="#icon-clear-16" />
            </svg>
        </button>
    </span>
</span>
<div id="filter-input-results-filled"></div>
`;

export const small = () => `
<span class="filter-input filter-input--small" role="search" aria-label="Filter list">
    <span class="textbox textbox--fluid">
        <svg class="icon icon--16" width="16" height="16" aria-hidden="true">
            <use href="#icon-search-16" />
        </svg>
        <input class="textbox__control" placeholder="Filter list" type="search" aria-controls="filter-input-results-small" aria-label="Filter list" required />
        <button
            class="icon-button icon-button--transparent icon-button--small filter-input__clear-btn"
            type="button"
            aria-label="Clear filter"
        >
            <svg aria-hidden="true" class="icon icon--16" width="16" height="16">
                <use href="#icon-clear-16" />
            </svg>
        </button>
    </span>
</span>
<div id="filter-input-results-small"></div>
`;

export const large = () => `
<span class="filter-input filter-input--large" role="search" aria-label="Filter list">
    <span class="textbox textbox--fluid">
        <svg class="icon icon--16" width="16" height="16" aria-hidden="true">
            <use href="#icon-search-16" />
        </svg>
        <input class="textbox__control" placeholder="Filter list" type="search" aria-controls="filter-input-results-large" aria-label="Filter list" required />
        <button
            class="icon-button icon-button--transparent icon-button--small filter-input__clear-btn"
            type="button"
            aria-label="Clear filter"
        >
            <svg aria-hidden="true" class="icon icon--16" width="16" height="16">
                <use href="#icon-clear-16" />
            </svg>
        </button>
    </span>
</span>
<div id="filter-input-results-large"></div>
`;

export const textSpacing = () => `
<span class="filter-input demo-a11y-text-spacing" role="search" aria-label="Filter list">
    <span class="textbox textbox--fluid">
        <svg class="icon icon--16" width="16" height="16" aria-hidden="true">
            <use href="#icon-search-16" />
        </svg>
        <input class="textbox__control" placeholder="Filter list" type="search" aria-controls="filter-input-results-text-spacing" aria-label="Filter list" required value="Tenni" />
        <button
            class="icon-button icon-button--transparent icon-button--small filter-input__clear-btn"
            type="button"
            aria-label="Clear filter"
        >
            <svg aria-hidden="true" class="icon icon--16" width="16" height="16">
                <use href="#icon-clear-16" />
            </svg>
        </button>
    </span>
</span>
<div id="filter-input-results-text-spacing"></div>
`;

export const RTL = () => `
<div dir="rtl">
    <span class="filter-input" role="search" aria-label="Filter list">
        <span class="textbox textbox--fluid">
            <svg class="icon icon--16" width="16" height="16" aria-hidden="true">
                <use href="#icon-search-16" />
            </svg>
            <input class="textbox__control" placeholder="Filter list" type="search" aria-controls="filter-input-results-rtl" aria-label="Filter list" value="Tenni" required />
            <button
                class="icon-button icon-button--transparent icon-button--small filter-input__clear-btn"
                type="button"
                aria-label="Clear filter"
            >
                <svg aria-hidden="true" class="icon icon--16" width="16" height="16">
                    <use href="#icon-clear-16" />
                </svg>
            </button>
        </span>
    </span>
</div>
<div id="filter-input-results-rtl"></div>
`;
