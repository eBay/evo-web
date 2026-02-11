export default { title: "Skin/Dialog" };

export const base = () => `
<script>document.querySelector(".dialog").showModal()</script>
<dialog aria-labelledby="dialog-title" class="dialog">
    <div class="dialog__header">
        <h2 id="dialog-title">Dialog</h2>
        <button class="icon-btn dialog__close" type="button" aria-label="Close Dialog">
            <svg class="icon icon--16" aria-hidden="true">
                <use href="#icon-close-16"></use>
            </svg>
        </button>
    </div>
    <div class="dialog__main">
        <h3>Heading</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        <h3>Heading</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
    </div>
</dialog>
`;

export const expressiveBase = () => `
<script>document.querySelector(".dialog").showModal()</script>
<dialog aria-labelledby="dialog-title" class="dialog dialog--expressive">
    <div class="dialog__image" style="background-image:url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-pic.jpg)"></div>
    <div class="dialog__header">
        <h2 id="dialog-title">Dialog</h2>
        <button class="icon-btn dialog__close" type="button" aria-label="Close Dialog">
            <svg class="icon icon--16" aria-hidden="true">
                <use href="#icon-close-16"></use>
            </svg>
        </button>
    </div>
    <div class="dialog__main">
        <h3>Heading</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        <h3>Heading</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
    </div>
</dialog>
`;

export const basePrev = () => `
<script>document.querySelector(".dialog").showModal()</script>
<dialog aria-labelledby="dialog-title" class="dialog">
    <div class="dialog__header">
        <button class="icon-btn dialog__prev" type="button" aria-label="Go back">
            <svg class="icon icon--16" aria-hidden="true">
                <use href="#icon-chevron-left-16"></use>
            </svg>
        </button>
        <h2 id="dialog-title">Dialog</h2>
        <button class="icon-btn dialog__close" type="button" aria-label="Close Dialog">
            <svg class="icon icon--16" aria-hidden="true">
                <use href="#icon-close-16"></use>
            </svg>
        </button>
    </div>
    <div class="dialog__main">
        <h3>Heading</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        <h3>Heading</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
    </div>
</dialog>
`;

export const scrollingLightbox = () => `
<script>document.querySelector(".dialog").showModal()</script>
<dialog aria-labelledby="dialog-title" class="dialog">
    <div class="dialog__header">
        <h2 id="dialog-title">Dialog</h2>
        <button class="icon-btn dialog__close" type="button" aria-label="Close Dialog">
            <svg class="icon icon--16" aria-hidden="true">
                <use href="#icon-close-16"></use>
            </svg>
        </button>
    </div>
    <div class="dialog__main">
        <h3>Heading</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
    </div>
</dialog>
`;

export const expandedLightbox = () => `
<script>document.querySelector(".dialog").showModal()</script>
<dialog aria-labelledby="dialog-title" class="dialog">
    <div class="dialog__header">
        <h2 id="dialog-title">Dialog</h2>
        <button class="icon-btn dialog__close" type="button" aria-label="Close Dialog">
            <svg class="icon icon--16" aria-hidden="true">
                <use href="#icon-close-16"></use>
            </svg>
        </button>
    </div>
    <div class="dialog__main">
        <h3>Heading</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
    </div>
</dialog>
`;

export const expressiveScrolling = () => `
<script>document.querySelector(".dialog").showModal()</script>
<dialog aria-labelledby="dialog-title" class="dialog dialog--expressive">
    <div class="dialog__image" style="background-image:url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-pic.jpg)"></div>
    <div class="dialog__header">
        <h2 id="dialog-title">Dialog</h2>
        <button class="icon-btn dialog__close" type="button" aria-label="Close Dialog">
            <svg class="icon icon--16" aria-hidden="true">
                <use href="#icon-close-16"></use>
            </svg>
        </button>
    </div>
    <div class="dialog__main">
        <h3>Heading</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
    </div>
</dialog>
`;

export const baseWithFooter = () => `
<script>document.querySelector(".dialog").showModal()</script>
<dialog aria-labelledby="dialog-title" class="dialog">
    <div class="dialog__header">
        <h2 id="dialog-title">Dialog</h2>
        <button class="icon-btn dialog__close" type="button" aria-label="Close Dialog">
            <svg class="icon icon--16" aria-hidden="true">
                <use href="#icon-close-16"></use>
            </svg>
        </button>
    </div>
    <div class="dialog__main">
        <h3>Heading</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        <h3>Heading</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
    </div>
    <div class="dialog__footer">
        <button class="btn btn--primary">Submit</button>
        <button class="btn">Cancel</button>
    </div>

</dialog>
`;

export const baseRTL = () => `
<div dir="rtl">
<script>document.querySelector(".dialog").showModal()</script>
    <dialog aria-labelledby="dialog-title" class="dialog">
        <div class="dialog__header">
            <h2 id="dialog-title">Dialog</h2>
            <button class="icon-btn dialog__close" type="button" aria-label="Close Dialog">
                <svg class="icon icon--16" aria-hidden="true">
                    <use href="#icon-close-16"></use>
                </svg>
            </button>
        </div>
        <div class="dialog__main">
            <h3>Heading</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <h3>Heading</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        </div>
</dialog>
`;

export const prevRTL = () => `
<div dir="rtl">
<script>document.querySelector(".dialog").showModal()</script>
    <dialog aria-labelledby="dialog-title" class="dialog">
        <div class="dialog__header">
            <button class="icon-btn dialog__prev" type="button" aria-label="Go back">
                <svg class="icon icon--16" aria-hidden="true">
                    <use href="#icon-chevron-left-16"></use>
                </svg>
            </button>
            <h2 id="dialog-title">Dialog</h2>
            <button class="icon-btn dialog__close" type="button" aria-label="Close Dialog">
                <svg class="icon icon--16" aria-hidden="true">
                    <use href="#icon-close-16"></use>
                </svg>
            </button>
        </div>
        <div class="dialog__main">
            <h3>Heading</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <h3>Heading</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        </div>
</dialog>
`;

export const baseWithLongHeader = () => `
<script>document.querySelector(".dialog").showModal()</script>
<dialog aria-labelledby="dialog-title" class="dialog">
    <div class="dialog__header">
        <h2 id="dialog-title">Dialog with a very long header that should wrap to the next line, but is actually cut off</h2>
        <button class="icon-btn dialog__close" type="button" aria-label="Close Dialog">
            <svg class="icon icon--16" aria-hidden="true">
                <use href="#icon-close-16"></use>
            </svg>
        </button>
    </div>
    <div class="dialog__main">
        <h3>Heading</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        <h3>Heading</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
    </div>
</dialog>
`;

export const wide = () => `
<script>document.querySelector(".dialog").showModal()</script>
<dialog aria-labelledby="dialog-title" class="dialog dialog--wide">
    <div class="dialog__header">
        <h2 id="dialog-title">Dialog</h2>
        <button class="icon-btn dialog__close" type="button" aria-label="Close Dialog">
            <svg class="icon icon--16" aria-hidden="true">
                <use href="#icon-close-16"></use>
            </svg>
        </button>
    </div>
    <div class="dialog__main">
        <h3>Heading</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        <h3>Heading</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
    </div>
</dialog>
`;

export const narrow = () => `
<script>document.querySelector(".dialog").showModal()</script>
<dialog aria-labelledby="dialog-title" class="dialog dialog--narrow">
    <div class="dialog__header">
        <h2 id="dialog-title">Dialog</h2>
        <button class="icon-btn dialog__close" type="button" aria-label="Close Dialog">
            <svg class="icon icon--16" aria-hidden="true">
                <use href="#icon-close-16"></use>
            </svg>
        </button>
    </div>
    <div class="dialog__main">
        <h3>Heading</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        <h3>Heading</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
    </div>
</dialog>
`;

export const large = () => `
<script>document.querySelector(".dialog").showModal()</script>
<dialog aria-labelledby="dialog-title" class="dialog dialog--large">
    <div class="dialog__header">
        <h2 id="dialog-title">Dialog</h2>
        <button class="icon-btn dialog__close" type="button" aria-label="Close Dialog">
            <svg class="icon icon--16" aria-hidden="true">
                <use href="#icon-close-16"></use>
            </svg>
        </button>
    </div>
    <div class="dialog__main">
        <h3>Heading</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        <h3>Heading</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
    </div>
</dialog>
`;

export const expressiveWide = () => `
<script>document.querySelector(".dialog").showModal()</script>
<dialog aria-labelledby="dialog-title" class="dialog dialog--wide dialog--expressive">
    <div class="dialog__image" style="background-image:url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-pic.jpg)"></div>
    <div class="dialog__header">
        <h2 id="dialog-title">Dialog</h2>
        <button class="icon-btn dialog__close" type="button" aria-label="Close Dialog">
            <svg class="icon icon--16" aria-hidden="true">
                <use href="#icon-close-16"></use>
            </svg>
        </button>
    </div>
    <div class="dialog__main">
        <h3>Heading</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        <h3>Heading</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
    </div>
</dialog>
`;

export const expressivePrev = () => `
<script>document.querySelector(".dialog").showModal()</script>
<dialog aria-labelledby="dialog-title" class="dialog dialog--expressive">
    <div class="dialog__image" style="background-image:url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-pic.jpg)"></div>
    <div class="dialog__header">
        <button class="icon-btn dialog__prev" type="button" aria-label="Go back">
            <svg class="icon icon--16" aria-hidden="true">
                <use href="#icon-chevron-left-16"></use>
            </svg>
        </button>
        <h2 id="dialog-title">Dialog</h2>
        <button class="icon-btn dialog__close" type="button" aria-label="Close Dialog">
            <svg class="icon icon--16" aria-hidden="true">
                <use href="#icon-close-16"></use>
            </svg>
        </button>
    </div>
    <div class="dialog__main">
        <h3>Heading</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        <h3>Heading</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
    </div>
</dialog>
`;

export const textSpacing = () => `
<script>document.querySelector(".dialog").showModal()</script>
<dialog aria-labelledby="dialog-title" class="dialog demo-a11y-text-spacing">
    <div class="dialog__header">
        <h2 id="dialog-title">Dialog</h2>
        <button class="icon-btn dialog__close" type="button" aria-label="Close Dialog">
            <svg class="icon icon--16" aria-hidden="true">
                <use href="#icon-close-16"></use>
            </svg>
        </button>
    </div>
    <div class="dialog__main">
        <h3>Heading</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        <h3>Heading</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
    </div>
</dialog>
`;

export const baseWithHeaderOverflow = () => `
<script>document.querySelector(".dialog").showModal()</script>
<dialog aria-labelledby="dialog-title" class="dialog">
    <div class="dialog__header">
        <h2 id="dialog-title">Dialog with a title that is so long it wraps across multiple lines. No dialog header should ever be this long.</h2>
        <button class="icon-btn dialog__close" type="button" aria-label="Close Dialog">
            <svg class="icon icon--16" aria-hidden="true">
                <use href="#icon-close-16"></use>
            </svg>
        </button>
    </div>
    <div class="dialog__main">
        <h3>Heading</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        <h3>Heading</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
        <p><a href="http://www.ebay.com">www.ebay.com</a></p>
    </div>
</dialog>
`;
