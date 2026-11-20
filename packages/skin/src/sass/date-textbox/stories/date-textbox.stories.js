export default { title: "Skin/Date Textbox" };

export const base = () => `
<span class="date-textbox">
    <span class="floating-label">
        <label class="floating-label__label floating-label__label--focus">Time period</label>
        <span class="textbox" role="group" aria-label="Time period">
            <span class="textbox__control date-textbox__value">
                <span class="date-textbox__part" data-size="MM">
                    <input role="spinbutton" aria-label="Month" inputmode="numeric" placeholder="MM" />
                </span>
                <span class="date-textbox__separator" aria-hidden="true">/</span>
                <span class="date-textbox__part" data-size="DD">
                    <input role="spinbutton" aria-label="Day" inputmode="numeric" placeholder="DD" />
                </span>
                <span class="date-textbox__separator" aria-hidden="true">/</span>
                <span class="date-textbox__part" data-size="YYYY">
                    <input role="spinbutton" aria-label="Year" inputmode="numeric" placeholder="YYYY" />
                </span>
            </span>
            <button class="icon-btn icon-btn--transparent" type="button" aria-label="open calendar">
                <svg aria-hidden="true" class="icon icon--24" width="16" height="16">
                    <use href="#icon-calendar-24"></use>
                </svg>
            </button>
        </span>
    </span>
</span>
`;

export const filled = () => `
<span class="date-textbox">
    <span class="floating-label">
        <label class="floating-label__label floating-label__label--focus">Time period</label>
        <span class="textbox" role="group" aria-label="Time period">
            <span class="textbox__control date-textbox__value">
                <span class="date-textbox__part" data-size="09">
                    <input role="spinbutton" aria-label="Month" inputmode="numeric" placeholder="MM" value="09" />
                </span>
                <span class="date-textbox__separator" aria-hidden="true">/</span>
                <span class="date-textbox__part" data-size="01">
                    <input role="spinbutton" aria-label="Day" inputmode="numeric" placeholder="DD" value="01" />
                </span>
                <span class="date-textbox__separator" aria-hidden="true">/</span>
                <span class="date-textbox__part" data-size="2026">
                    <input role="spinbutton" aria-label="Year" inputmode="numeric" placeholder="YYYY" value="2026" />
                </span>
            </span>
            <button class="icon-btn icon-btn--transparent" type="button" aria-label="open calendar">
                <svg aria-hidden="true" class="icon icon--24" width="16" height="16">
                    <use href="#icon-calendar-24"></use>
                </svg>
            </button>
        </span>
    </span>
</span>
`;

export const disabled = () => `
<span class="date-textbox">
    <span class="floating-label">
        <label class="floating-label__label floating-label__label--focus">Time period</label>
        <span class="textbox textbox--disabled" role="group" aria-label="Time period">
            <span class="textbox__control date-textbox__value">
                <span class="date-textbox__part" data-size="09">
                    <input role="spinbutton" aria-label="Month" inputmode="numeric" placeholder="MM" value="09" disabled />
                </span>
                <span class="date-textbox__separator" aria-hidden="true">/</span>
                <span class="date-textbox__part" data-size="01">
                    <input role="spinbutton" aria-label="Day" inputmode="numeric" placeholder="DD" value="01" disabled />
                </span>
                <span class="date-textbox__separator" aria-hidden="true">/</span>
                <span class="date-textbox__part" data-size="2026">
                    <input role="spinbutton" aria-label="Year" inputmode="numeric" placeholder="YYYY" value="2026" disabled />
                </span>
            </span>
            <button class="icon-btn icon-btn--transparent" type="button" aria-label="open calendar" disabled>
                <svg aria-hidden="true" class="icon icon--24" width="16" height="16">
                    <use href="#icon-calendar-24"></use>
                </svg>
            </button>
        </span>
    </span>
</span>
`;

export const disabledEmpty = () => `
<span class="date-textbox">
    <span class="floating-label">
        <label class="floating-label__label floating-label__label--focus">Time period</label>
        <span class="textbox textbox--disabled" role="group" aria-label="Time period">
            <span class="textbox__control date-textbox__value">
                <span class="date-textbox__part" data-size="MM">
                    <input role="spinbutton" aria-label="Month" inputmode="numeric" placeholder="MM" disabled />
                </span>
                <span class="date-textbox__separator" aria-hidden="true">/</span>
                <span class="date-textbox__part" data-size="DD">
                    <input role="spinbutton" aria-label="Day" inputmode="numeric" placeholder="DD" disabled />
                </span>
                <span class="date-textbox__separator" aria-hidden="true">/</span>
                <span class="date-textbox__part" data-size="YYYY">
                    <input role="spinbutton" aria-label="Year" inputmode="numeric" placeholder="YYYY" disabled />
                </span>
            </span>
            <button class="icon-btn icon-btn--transparent" type="button" aria-label="open calendar" disabled>
                <svg aria-hidden="true" class="icon icon--24" width="16" height="16">
                    <use href="#icon-calendar-24"></use>
                </svg>
            </button>
        </span>
    </span>
</span>
`;

export const invalid = () => `
<span class="date-textbox">
    <span class="floating-label">
        <label class="floating-label__label floating-label__label--focus">Time period</label>
        <span class="textbox textbox--invalid" role="group" aria-label="Time period">
            <span class="textbox__control date-textbox__value">
                <span class="date-textbox__part" data-size="02">
                    <input role="spinbutton" aria-label="Month" inputmode="numeric" placeholder="MM" value="02" aria-invalid="true" />
                </span>
                <span class="date-textbox__separator" aria-hidden="true">/</span>
                <span class="date-textbox__part" data-size="31">
                    <input role="spinbutton" aria-label="Day" inputmode="numeric" placeholder="DD" value="31" aria-invalid="true" />
                </span>
                <span class="date-textbox__separator" aria-hidden="true">/</span>
                <span class="date-textbox__part" data-size="2026">
                    <input role="spinbutton" aria-label="Year" inputmode="numeric" placeholder="YYYY" value="2026" aria-invalid="true" />
                </span>
            </span>
            <button class="icon-btn icon-btn--transparent" type="button" aria-label="open calendar">
                <svg aria-hidden="true" class="icon icon--24" width="16" height="16">
                    <use href="#icon-calendar-24"></use>
                </svg>
            </button>
        </span>
    </span>
</span>
`;

export const range = () => `
<span class="date-textbox">
    <span class="floating-label">
        <label class="floating-label__label floating-label__label--focus">Time period</label>
        <span class="textbox" role="group" aria-label="Time period">
            <span class="textbox__control date-textbox__value">
                <span role="group" aria-label="Start">
                    <span class="date-textbox__part" data-size="MM">
                        <input role="spinbutton" aria-label="Month" inputmode="numeric" placeholder="MM" />
                    </span>
                    <span class="date-textbox__separator" aria-hidden="true">/</span>
                    <span class="date-textbox__part" data-size="DD">
                        <input role="spinbutton" aria-label="Day" inputmode="numeric" placeholder="DD" />
                    </span>
                    <span class="date-textbox__separator" aria-hidden="true">/</span>
                    <span class="date-textbox__part" data-size="YYYY">
                        <input role="spinbutton" aria-label="Year" inputmode="numeric" placeholder="YYYY" />
                    </span>
                </span>
                <span class="date-textbox__separator" aria-hidden="true"> — </span>
                <span role="group" aria-label="End">
                    <span class="date-textbox__part" data-size="MM">
                        <input role="spinbutton" aria-label="Month" inputmode="numeric" placeholder="MM" />
                    </span>
                    <span class="date-textbox__separator" aria-hidden="true">/</span>
                    <span class="date-textbox__part" data-size="DD">
                        <input role="spinbutton" aria-label="Day" inputmode="numeric" placeholder="DD" />
                    </span>
                    <span class="date-textbox__separator" aria-hidden="true">/</span>
                    <span class="date-textbox__part" data-size="YYYY">
                        <input role="spinbutton" aria-label="Year" inputmode="numeric" placeholder="YYYY" />
                    </span>
                </span>
            </span>
            <button class="icon-btn icon-btn--transparent" type="button" aria-label="open calendar">
                <svg aria-hidden="true" class="icon icon--24" width="16" height="16">
                    <use href="#icon-calendar-24"></use>
                </svg>
            </button>
        </span>
    </span>
</span>
`;

export const rangeFilled = () => `
<span class="date-textbox">
    <span class="floating-label">
        <label class="floating-label__label floating-label__label--focus">Time period</label>
        <span class="textbox" role="group" aria-label="Time period">
            <span class="textbox__control date-textbox__value">
                <span role="group" aria-label="Start">
                    <span class="date-textbox__part" data-size="09">
                        <input role="spinbutton" aria-label="Month" inputmode="numeric" placeholder="MM" value="09" />
                    </span>
                    <span class="date-textbox__separator" aria-hidden="true">/</span>
                    <span class="date-textbox__part" data-size="01">
                        <input role="spinbutton" aria-label="Day" inputmode="numeric" placeholder="DD" value="01" />
                    </span>
                    <span class="date-textbox__separator" aria-hidden="true">/</span>
                    <span class="date-textbox__part" data-size="2026">
                        <input role="spinbutton" aria-label="Year" inputmode="numeric" placeholder="YYYY" value="2026" />
                    </span>
                </span>
                <span class="date-textbox__separator" aria-hidden="true"> — </span>
                <span role="group" aria-label="End">
                    <span class="date-textbox__part" data-size="09">
                        <input role="spinbutton" aria-label="Month" inputmode="numeric" placeholder="MM" value="09" />
                    </span>
                    <span class="date-textbox__separator" aria-hidden="true">/</span>
                    <span class="date-textbox__part" data-size="30">
                        <input role="spinbutton" aria-label="Day" inputmode="numeric" placeholder="DD" value="30" />
                    </span>
                    <span class="date-textbox__separator" aria-hidden="true">/</span>
                    <span class="date-textbox__part" data-size="2026">
                        <input role="spinbutton" aria-label="Year" inputmode="numeric" placeholder="YYYY" value="2026" />
                    </span>
                </span>
            </span>
            <button class="icon-btn icon-btn--transparent" type="button" aria-label="open calendar">
                <svg aria-hidden="true" class="icon icon--24" width="16" height="16">
                    <use href="#icon-calendar-24"></use>
                </svg>
            </button>
        </span>
    </span>
</span>
`;

export const textSpacing = () => `
<span class="date-textbox demo-a11y-text-spacing">
    <span class="floating-label">
        <label class="floating-label__label floating-label__label--focus">Time period</label>
        <span class="textbox" role="group" aria-label="Time period">
            <span class="textbox__control date-textbox__value">
                <span class="date-textbox__part" data-size="09">
                    <input role="spinbutton" aria-label="Month" inputmode="numeric" placeholder="MM" value="09" />
                </span>
                <span class="date-textbox__separator" aria-hidden="true">/</span>
                <span class="date-textbox__part" data-size="01">
                    <input role="spinbutton" aria-label="Day" inputmode="numeric" placeholder="DD" value="01" />
                </span>
                <span class="date-textbox__separator" aria-hidden="true">/</span>
                <span class="date-textbox__part" data-size="2026">
                    <input role="spinbutton" aria-label="Year" inputmode="numeric" placeholder="YYYY" value="2026" />
                </span>
            </span>
            <button class="icon-btn icon-btn--transparent" type="button" aria-label="open calendar">
                <svg aria-hidden="true" class="icon icon--24" width="16" height="16">
                    <use href="#icon-calendar-24"></use>
                </svg>
            </button>
        </span>
    </span>
</span>
`;

export const RTL = () => `
<div dir="rtl">
    <span class="date-textbox">
        <span class="floating-label">
            <label class="floating-label__label floating-label__label--focus">Time period</label>
            <span class="textbox" role="group" aria-label="Time period">
                <span class="textbox__control date-textbox__value">
                    <span role="group" aria-label="Start">
                        <span class="date-textbox__part" data-size="MM">
                            <input role="spinbutton" aria-label="Month" inputmode="numeric" placeholder="MM" />
                        </span>
                        <span class="date-textbox__separator" aria-hidden="true">/</span>
                        <span class="date-textbox__part" data-size="DD">
                            <input role="spinbutton" aria-label="Day" inputmode="numeric" placeholder="DD" />
                        </span>
                        <span class="date-textbox__separator" aria-hidden="true">/</span>
                        <span class="date-textbox__part" data-size="YYYY">
                            <input role="spinbutton" aria-label="Year" inputmode="numeric" placeholder="YYYY" />
                        </span>
                    </span>
                    <span class="date-textbox__separator" aria-hidden="true"> — </span>
                    <span role="group" aria-label="End">
                        <span class="date-textbox__part" data-size="MM">
                            <input role="spinbutton" aria-label="Month" inputmode="numeric" placeholder="MM" />
                        </span>
                        <span class="date-textbox__separator" aria-hidden="true">/</span>
                        <span class="date-textbox__part" data-size="DD">
                            <input role="spinbutton" aria-label="Day" inputmode="numeric" placeholder="DD" />
                        </span>
                        <span class="date-textbox__separator" aria-hidden="true">/</span>
                        <span class="date-textbox__part" data-size="YYYY">
                            <input role="spinbutton" aria-label="Year" inputmode="numeric" placeholder="YYYY" />
                        </span>
                    </span>
                </span>
                <button class="icon-btn icon-btn--transparent" type="button" aria-label="open calendar">
                    <svg aria-hidden="true" class="icon icon--24" width="16" height="16">
                        <use href="#icon-calendar-24"></use>
                    </svg>
                </button>
            </span>
        </span>
    </span>
</div>
`;
