export default { title: "Skin/Dialog" };

export const base = () => `
<script>document.querySelector(".dialog").showModal()</script>
<dialog aria-labelledby="dialog-title-base" class="dialog">
    <div class="dialog__header">
        <h2 id="dialog-title-base">Dialog</h2>
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
<dialog aria-labelledby="dialog-title-expressive-base" class="dialog dialog--expressive">
    <div class="dialog__image" style="background-image:url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-pic.jpg)"></div>
    <div class="dialog__header">
        <h2 id="dialog-title-expressive-base">Dialog</h2>
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
<dialog aria-labelledby="dialog-title-base-prev" class="dialog">
    <div class="dialog__header">
        <button class="icon-btn dialog__prev" type="button" aria-label="Go back">
            <svg class="icon icon--16" aria-hidden="true">
                <use href="#icon-chevron-left-16"></use>
            </svg>
        </button>
        <h2 id="dialog-title-base-prev">Dialog</h2>
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
<dialog aria-labelledby="dialog-title-scrolling-lightbox" class="dialog">
    <div class="dialog__header">
        <h2 id="dialog-title-scrolling-lightbox">Dialog</h2>
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
<dialog aria-labelledby="dialog-title-expanded-lightbox" class="dialog">
    <div class="dialog__header">
        <h2 id="dialog-title-expanded-lightbox">Dialog</h2>
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
<dialog aria-labelledby="dialog-title-expressive-scrolling" class="dialog dialog--expressive">
    <div class="dialog__image" style="background-image:url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-pic.jpg)"></div>
    <div class="dialog__header">
        <h2 id="dialog-title-expressive-scrolling">Dialog</h2>
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
<dialog aria-labelledby="dialog-title-base-with-footer" class="dialog">
    <div class="dialog__header">
        <h2 id="dialog-title-base-with-footer">Dialog</h2>
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
    <dialog aria-labelledby="dialog-title-base-rtl" class="dialog">
        <div class="dialog__header">
            <h2 id="dialog-title-base-rtl">Dialog</h2>
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
    <dialog aria-labelledby="dialog-title-prev-rtl" class="dialog">
        <div class="dialog__header">
            <button class="icon-btn dialog__prev" type="button" aria-label="Go back">
                <svg class="icon icon--16" aria-hidden="true">
                    <use href="#icon-chevron-left-16"></use>
                </svg>
            </button>
            <h2 id="dialog-title-prev-rtl">Dialog</h2>
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
<dialog aria-labelledby="dialog-title-base-with-long-header" class="dialog">
    <div class="dialog__header">
        <h2 id="dialog-title-base-with-long-header">Dialog with a very long header that should wrap to the next line, but is actually cut off</h2>
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
<dialog aria-labelledby="dialog-title-wide" class="dialog dialog--wide">
    <div class="dialog__header">
        <h2 id="dialog-title-wide">Dialog</h2>
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
<dialog aria-labelledby="dialog-title-narrow" class="dialog dialog--narrow">
    <div class="dialog__header">
        <h2 id="dialog-title-narrow">Dialog</h2>
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
<dialog aria-labelledby="dialog-title-large" class="dialog dialog--large">
    <div class="dialog__header">
        <h2 id="dialog-title-large">Dialog</h2>
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
<dialog aria-labelledby="dialog-title-expressive-wide" class="dialog dialog--wide dialog--expressive">
    <div class="dialog__image" style="background-image:url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-pic.jpg)"></div>
    <div class="dialog__header">
        <h2 id="dialog-title-expressive-wide">Dialog</h2>
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
<dialog aria-labelledby="dialog-title-expressive-prev" class="dialog dialog--expressive">
    <div class="dialog__image" style="background-image:url(https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-landscape-pic.jpg)"></div>
    <div class="dialog__header">
        <button class="icon-btn dialog__prev" type="button" aria-label="Go back">
            <svg class="icon icon--16" aria-hidden="true">
                <use href="#icon-chevron-left-16"></use>
            </svg>
        </button>
        <h2 id="dialog-title-expressive-prev">Dialog</h2>
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
<dialog aria-labelledby="dialog-title-text-spacing" class="dialog demo-a11y-text-spacing">
    <div class="dialog__header">
        <h2 id="dialog-title-text-spacing">Dialog</h2>
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
<dialog aria-labelledby="dialog-title-base-with-header-overflow" class="dialog">
    <div class="dialog__header">
        <h2 id="dialog-title-base-with-header-overflow">Dialog with a title that is so long it wraps across multiple lines. No dialog header should ever be this long.</h2>
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
