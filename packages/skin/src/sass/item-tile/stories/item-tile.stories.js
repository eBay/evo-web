export default { title: "Skin/Item Tile" };

export const galleryView = () => `
<div class="item-tile">
    <div class="item-tile__header">
        <div class="file-preview-card">
            <div class="file-preview-card__body">
                <a href="https://ebay.com">
                    <img
                        class="file-preview-card__asset"
                        src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"
                        alt="Puma..."
                    />
                </a>
                <button
                    class="icon-btn file-preview-card__action"
                    type="button"
                    aria-label="Open menu"
                >
                    <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                    <use href="#icon-heart-16" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
    <div class="item-tile__body">
        <div class="item-tile__section-primary">
            <span class="signal signal--trustworthy"> Great Price </span>
        </div>
        <div class="item-tile__section-secondary">
            <a href="https://ebay.com?random=1" class="item-tile__title">
                PUMA Men's Astro Kicks Sneakers
            </a>
            <div class="item-tile__subtitle">
                Brand new &bull; Size 6
            </div>
        </div>
        <div class="item-tile__section-tertiary">
            <p>
                $29.99 
                <span class="clipped">Was: </span>
                <s class="item-tile__list-price">$68.99</s>
            </p>
            <p><a href="https://ebay.com">Buy it now</a></p>
            <p>Free shipping</p>
            <p>Sponsored</p>
        </div>
    </div>
</div>
`;

export const galleryViewLongBody = () => `
<div class="item-tile">
    <div class="item-tile__header">
        <div class="file-preview-card">
            <div class="file-preview-card__body">
                <a href="https://ebay.com">
                    <img
                        class="file-preview-card__asset"
                        src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"
                        alt="Puma..."
                    />
                </a>
                <button
                    class="icon-btn file-preview-card__action"
                    type="button"
                    aria-label="Open menu"
                >
                    <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                    <use href="#icon-heart-16" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
    <div class="item-tile__body">
        <div class="item-tile__section-primary">
            <span class="signal signal--trustworthy"> Great Price </span>
        </div>
        <div class="item-tile__section-secondary">
            <a href="https://ebay.com?random=1" class="item-tile__title">
                PUMA Men's Astro Kicks Sneakers
            </a>
            <div class="item-tile__subtitle">
                Brand new &bull; Size 6
            </div>
        </div>
        <div class="item-tile__section-tertiary">
            <p>
                $29.99 
                <span class="clipped">Was: </span>
                <s class="item-tile__list-price">$68.99</s>
            </p>
            <p><a href="https://ebay.com">Buy it now</a></p>
            <p>Free shipping</p>
            <p>Sponsored</p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
    </div>
</div>
`;

export const listView = () => `
<div class="item-tile item-tile--list-view">
    <div class="item-tile__header">
        <div class="file-preview-card">
            <div class="file-preview-card__body">
                <a href="https://ebay.com">
                    <img
                        class="file-preview-card__asset"
                        src="https://ir.ebaystatic.com/cr/v/c01/skin/docs/tb-real-square-pic.jpg"
                        alt="Puma..."
                    />
                </a>
                <button
                    class="icon-btn file-preview-card__action"
                    type="button"
                    aria-label="Open menu"
                >
                    <svg class="icon icon--16" height="16" width="16" aria-hidden="true">
                    <use href="#icon-heart-16" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
    <div class="item-tile__body">
        <div class="item-tile__section-primary">
            <span class="signal signal--trustworthy"> Great Price </span>
        </div>
        <div class="item-tile__section-secondary">
            <a href="https://ebay.com" class="item-tile__title">
                PUMA Men's Astro Kicks Sneakers
            </a>
            <div class="item-tile__subtitle">
                Brand new &bull; Size 6
            </div>
        </div>
        <div class="item-tile__section-tertiary">
            <p>
                $29.99 
                <span class="clipped">Was: </span>
                <s class="item-tile__list-price">$68.99</s>
            </p>
            <p><a href="https://ebay.com">Buy it now</a></p>
            <p>Free shipping</p>
            <p>Sponsored</p>
        </div>
    </div>
</div>
`;
