export default { title: "Skin/Panel Dialog" };

export const panelStart = () => `
<button class="button button--primary dialog-button" data-makeup-for="dialog-left-panel-0" type="button">Open Panel</button>
<div aria-labelledby="panel-title" aria-modal="true" class="panel-dialog" role="dialog" hidden id="dialog-left-panel-0">
    <div class="panel-dialog__window">
        <div class="panel-dialog__header">
            <h2 id="panel-title">Left Panel</h2>
            <button class="icon-button panel-dialog__close" type="button" aria-label="Close Dialog">
                <svg class="icon icon--16" aria-hidden="true">
                    <use href="#icon-close-16"></use>
                </svg>
            </button>
        </div>
        <div class="panel-dialog__main">
            <h3>Heading</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <h3>Heading</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        </div>
    </div>
</div>
<script>document.getElementById("dialog-left-panel-0").hidden = false;</script>
`;

export const RTL = () => `
<div dir="rtl">
    <div aria-labelledby="panel-title" aria-modal="true" class="panel-dialog" role="dialog">
        <div class="panel-dialog__window">
            <div class="panel-dialog__header">
                <h2 id="panel-title">Left Panel</h2>
                <button class="icon-button panel-dialog__close" type="button" aria-label="Close Dialog">
                    <svg class="icon icon--16" aria-hidden="true">
                        <use href="#icon-close-16"></use>
                    </svg>
                </button>
            </div>
            <div class="panel-dialog__main">
                <h3>Heading</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
                <p><a href="http://www.ebay.com">www.ebay.com</a></p>
                <h3>Heading</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
                <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            </div>
        </div>
    </div>
</div>
`;

export const panelEnd = () => `
<div aria-labelledby="panel-title" aria-modal="true" class="panel-dialog" role="dialog">
    <div class="panel-dialog__window panel-dialog__window--end">
        <div class="panel-dialog__header">
            <h2 id="panel-title">Right Panel</h2>
            <button class="icon-button panel-dialog__close" type="button" aria-label="Close Dialog">
                <svg class="icon icon--16" aria-hidden="true">
                    <use href="#icon-close-16"></use>
                </svg>
            </button>
        </div>
        <div class="panel-dialog__main">
            <h3>Heading</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <h3>Heading</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        </div>
    </div>
</div>
`;

export const panelEndWithFooter = () => `
<div aria-labelledby="panel-title" aria-modal="true" class="panel-dialog" role="dialog">
    <div class="panel-dialog__window panel-dialog__window--end">
        <div class="panel-dialog__header">
            <h2 id="panel-title">Right Panel</h2>
            <button class="icon-button panel-dialog__close" type="button" aria-label="Close Dialog">
                <svg class="icon icon--16" aria-hidden="true">
                    <use href="#icon-close-16"></use>
                </svg>
            </button>
        </div>
        <div class="panel-dialog__main">
            <h3>Heading</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <h3>Heading</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        </div>
        <div class="panel-dialog__footer">
            <button class="button button--primary">Submit</button>
            <button class="button">Cancel</button>
        </div>
    </div>
</div>
`;

export const panelEndSecondaryButton = () => `
<button class="button button--primary dialog-button" data-makeup-for="dialog-right-panel-1" type="button">Open End Panel</button>
<div aria-labelledby="panel-title-end" aria-modal="true" class="panel-dialog" role="dialog" hidden id="dialog-right-panel-1">
    <div class="panel-dialog__window panel-dialog__window--end">
        <div class="panel-dialog__header">
            <h2 id="panel-title-end">Right Panel</h2>
            <button class="link-button panel-dialog__close" type="button">Reset</button>
        </div>
        <div class="panel-dialog__main">
            <h3>Heading</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <h3>Heading</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        </div>
    </div>
</div>
<script>document.getElementById("dialog-right-panel-1").hidden = false;</script>
`;

export const panelScroll = () => `
<div aria-labelledby="panel-title" aria-modal="true" class="panel-dialog" role="dialog">
    <div class="panel-dialog__window">
        <div class="panel-dialog__header">
            <h2 id="panel-title">Scrolling Panel</h2>
            <button class="icon-button panel-dialog__close" type="button" aria-label="Close Dialog">
                <svg class="icon icon--16" aria-hidden="true">
                    <use href="#icon-close-16"></use>
                </svg>
            </button>
        </div>
        <div class="panel-dialog__main">
            <h3>Heading</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <h3>Heading</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <h3>Heading</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <h3>Heading</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <h3>Heading</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <h3>Heading</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <h3>Heading</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <h3>Heading</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        </div>
    </div>
</div>
`;

export const panelScrollWithFooter = () => `
<div aria-labelledby="panel-title" aria-modal="true" class="panel-dialog" role="dialog">
    <div class="panel-dialog__window">
        <div class="panel-dialog__header">
            <h2 id="panel-title">Scrolling Panel with Footer</h2>
            <button class="icon-button panel-dialog__close" type="button" aria-label="Close Dialog">
                <svg class="icon icon--16" aria-hidden="true">
                    <use href="#icon-close-16"></use>
                </svg>
            </button>
        </div>
        <div class="panel-dialog__main">
            <h3>Heading</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <h3>Heading</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <h3>Heading</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <h3>Heading</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <h3>Heading</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <h3>Heading</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <h3>Heading</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <h3>Heading</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        </div>
        <div class="panel-dialog__footer">
            <button class="button button--primary">Submit</button>
            <button class="button">Cancel</button>
        </div>
    </div>
</div>
`;

export const textSpacing = () => `
<div aria-labelledby="panel-title" aria-modal="true" class="panel-dialog demo-a11y-text-spacing" role="dialog">
    <div class="panel-dialog__window">
        <div class="panel-dialog__header">
            <h2 id="panel-title">Scrolling Panel with Footer</h2>
            <button class="icon-button panel-dialog__close" type="button" aria-label="Close Dialog">
                <svg class="icon icon--16" aria-hidden="true">
                    <use href="#icon-close-16"></use>
                </svg>
            </button>
        </div>
        <div class="panel-dialog__main">
            <h3>Heading</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <h3>Heading</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <h3>Heading</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <h3>Heading</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <h3>Heading</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <h3>Heading</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <h3>Heading</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <h3>Heading</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        </div>
        <div class="panel-dialog__footer">
            <button class="button button--primary">Submit</button>
            <button class="button">Cancel</button>
        </div>
    </div>
</div>
`;

export const panelStartWithHeaderOverflow = () => `
<div aria-labelledby="panel-title" aria-modal="true" class="panel-dialog" role="dialog">
    <div class="panel-dialog__window">
        <div class="panel-dialog__header">
            <h2 id="panel-title">Left Panel with a title that's so long it wraps to the next line. No dialog should ever have a title this long.</h2>
            <button class="icon-button panel-dialog__close" type="button" aria-label="Close Dialog">
                <svg class="icon icon--16" aria-hidden="true">
                    <use href="#icon-close-16"></use>
                </svg>
            </button>
        </div>
        <div class="panel-dialog__main">
            <h3>Heading</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <h3>Heading</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        </div>
    </div>
</div>
`;

export const panelWithPrev = () => `
<button class="button button--primary dialog-button" data-makeup-for="dialog-left-panel-prev" type="button">Open Panel</button>
<div aria-labelledby="panel-title-prev" aria-modal="true" class="panel-dialog" role="dialog" hidden id="dialog-left-panel-prev">
    <div class="panel-dialog__window">
        <div class="panel-dialog__header">
            <button class="icon-button panel-dialog__prev" type="button" aria-label="Go back">
                <svg class="icon icon--16" aria-hidden="true">
                    <use href="#icon-chevron-left-16"></use>
                </svg>
            </button>
            <h2 id="panel-title-prev">Left Panel</h2>
            <button class="icon-button panel-dialog__close" type="button" aria-label="Close Dialog">
                <svg class="icon icon--16" aria-hidden="true">
                    <use href="#icon-close-16"></use>
                </svg>
            </button>
        </div>
        <div class="panel-dialog__main">
            <h3>Heading</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <h3>Heading</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        </div>
    </div>
</div>
<script>document.getElementById("dialog-left-panel-prev").hidden = false;</script>
`;

export const panelWithFooter = () => `
<button
    class="button button--primary dialog-button"
    data-makeup-for="dialog-w-footer-panel-0"
    type="button"
>
    Open Panel
</button>
<div
    aria-labelledby="panel-dialog-footer-title"
    aria-modal="true"
    class="panel-dialog"
    hidden
    id="dialog-w-footer-panel-0"
    role="dialog"
>
    <div class="panel-dialog__window">
        <div class="panel-dialog__header">
            <h2 id="panel-dialog-footer-title" class="large-text-1 bold-text">
                Heading
            </h2>
            <button
                aria-label="Close dialog"
                class="icon-button panel-dialog__close"
                type="button"
            >
                <svg
                    aria-hidden="true"
                    class="icon icon--16"
                    height="16"
                    width="16"
                >
                    <use href="#icon-close-16"></use>
                </svg>
            </button>
        </div>
        <div class="panel-dialog__main">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p><a href="https://www.ebay.com">www.ebay.com</a></p>
        </div>
        <div class="panel-dialog__footer">
            <button class="button button--primary">Submit</button>
            <button class="button">Cancel</button>
        </div>
    </div>
</div>
<script>document.getElementById("dialog-w-footer-panel-0").hidden = false;</script>
`;

export const panelSlideStart = () => `
<button
    class="button button--primary dialog-button"
    data-makeup-for="dialog-slide-left-panel-0"
    type="button"
>
    Slide in Panel from Left
</button>
<div
    aria-labelledby="panel-dialog-title-slide-1"
    aria-modal="true"
    class="panel-dialog panel-dialog--mask-fade-slow"
    hidden
    id="dialog-slide-left-panel-0"
    role="dialog"
>
    <div class="panel-dialog__window panel-dialog__window--slide">
        <div class="panel-dialog__header">
            <h2
                id="panel-dialog-title-slide-1"
                class="panel-dialog__title large-text-1 bold-text"
            >
                Heading
            </h2>
            <button
                aria-label="Close dialog"
                class="icon-button panel-dialog__close"
                type="button"
            >
                <svg
                    aria-hidden="true"
                    class="icon icon--16"
                    height="16"
                    width="16"
                >
                    <use href="#icon-close-16"></use>
                </svg>
            </button>
        </div>
        <div class="panel-dialog__main">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p><a href="https://www.ebay.com">www.ebay.com</a></p>
        </div>
    </div>
</div>
<script>document.getElementById("dialog-slide-left-panel-0").hidden = false;</script>
`;

export const panelSlideEnd = () => `
<button
    class="button button--primary dialog-button"
    data-makeup-for="dialog-slide-right-panel-0"
    type="button"
>
    Slide in Panel from Right
</button>
<div
    aria-labelledby="panel-dialog-title-slide-2"
    aria-modal="true"
    class="panel-dialog panel-dialog--mask-fade-slow"
    hidden
    id="dialog-slide-right-panel-0"
    role="dialog"
>
    <div class="panel-dialog__window panel-dialog__window--end panel-dialog__window--slide">
        <div class="panel-dialog__header">
            <h2
                id="panel-dialog-title-slide-2"
                class="panel-dialog__title large-text-1 bold-text"
            >
                Heading
            </h2>
            <button
                aria-label="Close dialog"
                class="icon-button panel-dialog__close"
                type="button"
            >
                <svg
                    aria-hidden="true"
                    class="icon icon--16"
                    height="16"
                    width="16"
                >
                    <use href="#icon-close-16"></use>
                </svg>
            </button>
        </div>
        <div class="panel-dialog__main">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p><a href="https://www.ebay.com">www.ebay.com</a></p>
        </div>
    </div>
</div>
<script>document.getElementById("dialog-slide-right-panel-0").hidden = false;</script>
`;
