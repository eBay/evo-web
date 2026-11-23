export default { title: "Skin/Breadcrumbs/Links/Overflow" };

export const minimum = () => `
<nav aria-labelledby="breadcrumbs-heading" class="breadcrumbs breadcrumb--overflow" role="navigation">
    <h2 id="breadcrumbs-heading" class="clipped">You are here</h2>
    <ul>
        <li>
            <a href="https://www.ebay.com/">ebay</a>
            <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                <use href="#icon-chevron-right-12"></use>
            </svg>
        </li>
        <li>
            <span class="menu-button">
                <button class="icon-button breadcrumbs__overflow" aria-expanded="false" aria-label="eBay Menu" type="button" id="breadcrumbs-link-overflow-1-trigger" aria-controls="breadcrumbs-link-overflow-1-content">
                    <svg aria-hidden="true" class="icon icon--16 breadcrumbs__overflow-icon">
                        <use href="#icon-overflow-horizontal-16"></use>
                    </svg>
                </button>

                <div class="menu-button__dropdown breadcrumbs__overflow-menu">
                    <div class="navigation-menu">
                        <ul class="navigation-menu__items" id="breadcrumbs-link-overflow-1-content">
                            <li>
                                <a class="navigation-menu__item" href="https://www.ebay.com/rpp/cell-phone-pda">Cell Phones, Smart Watches &amp; Accessories</a>
                            </li>
                            <li>
                                <a class="navigation-menu__item" href="https://www.ebay.com/b/Smart-Watch-Accessories/182064/bn_16565905">Smart Watch Accessories</a>
                            </li>
                            <li>
                                <a class="navigation-menu__item" href="https://www.ebay.com/b/Smart-Watch-Bands/182068/bn_16565906">Smart Watch Bands</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </span>

            <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                <use href="#icon-chevron-right-12"></use>
            </svg>
        </li>
        <li>
            <a aria-current="page">Current Band</a>
        </li>
    </ul>
</nav>
`;

export const collapsed = () => `
<nav aria-labelledby="breadcrumbs-heading" class="breadcrumbs breadcrumb--overflow" role="navigation">
    <h2 id="breadcrumbs-heading" class="clipped">You are here</h2>
    <ul>
        <li>
            <a href="https://www.ebay.com/">ebay</a>
            <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                <use href="#icon-chevron-right-12"></use>
            </svg>
        </li>
        <li>
            <span class="menu-button">
                <button class="icon-button breadcrumbs__overflow" aria-expanded="false" aria-label="eBay Menu" type="button" id="breadcrumbs-link-overflow-2-trigger" aria-controls="breadcrumbs-link-overflow-2-content">
                    <svg aria-hidden="true" class="icon icon--16 breadcrumbs__overflow-icon">
                        <use href="#icon-overflow-horizontal-16"></use>
                    </svg>
                </button>

                <div class="menu-button__dropdown breadcrumbs__overflow-menu">
                    <div class="navigation-menu">
                        <ul class="navigation-menu__items" id="breadcrumbs-link-overflow-2-content">
                            <li>
                                <a class="navigation-menu__item" href="https://www.ebay.com/rpp/cell-phone-pda">Cell Phones, Smart Watches &amp; Accessories</a>
                            </li>
                            <li>
                                <a class="navigation-menu__item" href="https://www.ebay.com/b/Smart-Watch-Accessories/182064/bn_16565905">Smart Watch Accessories</a>
                            </li>
                            <li>
                                <a class="navigation-menu__item" href="https://www.ebay.com/b/Smart-Watch-Bands/182068/bn_16565906">Smart Watch Bands</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </span>

            <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                <use href="#icon-chevron-right-12"></use>
            </svg>
        </li>
        <li>
            <a href="https://www.ebay.com/b/Smart-Watch-Bands/182068/bn_16565906/Some-Random-Watch-Pand2">Smart Watch Band Long Band Text Type 2</a>
            <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                <use href="#icon-chevron-right-12"></use>
            </svg>
        </li>
        <li>
            <a aria-current="page">Current Band</a>
        </li>
    </ul>
</nav>
`;

export const expanded = () => `
<nav aria-labelledby="breadcrumbs-heading" class="breadcrumbs breadcrumb--overflow" role="navigation">
    <h2 id="breadcrumbs-heading" class="clipped">You are here</h2>
    <ul>
        <li>
            <a href="https://www.ebay.com/">ebay</a>
            <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                <use href="#icon-chevron-right-12"></use>
            </svg>
        </li>
        <li>
            <span class="menu-button">
                <button class="icon-button breadcrumbs__overflow" aria-expanded="true" aria-label="eBay Menu" type="button" id="breadcrumbs-link-overflow-3-trigger" aria-controls="breadcrumbs-link-overflow-3-content">
                    <svg aria-hidden="true" class="icon icon--16 breadcrumbs__overflow-icon">
                        <use href="#icon-overflow-horizontal-16"></use>
                    </svg>
                </button>

                <div class="menu-button__dropdown breadcrumbs__overflow-menu">
                    <div class="navigation-menu">
                        <ul class="navigation-menu__items" id="breadcrumbs-link-overflow-3-content">
                            <li>
                                <a class="navigation-menu__item" href="https://www.ebay.com/rpp/cell-phone-pda">Cell Phones, Smart Watches &amp; Accessories</a>
                            </li>
                            <li>
                                <a class="navigation-menu__item" href="https://www.ebay.com/b/Smart-Watch-Accessories/182064/bn_16565905">Smart Watch Accessories</a>
                            </li>
                            <li>
                                <a class="navigation-menu__item" href="https://www.ebay.com/b/Smart-Watch-Bands/182068/bn_16565906">Smart Watch Bands</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </span>

            <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                <use href="#icon-chevron-right-12"></use>
            </svg>
        </li>
        <li>
            <a href="https://www.ebay.com/b/Smart-Watch-Bands/182068/bn_16565906/Some-Random-Watch-Pand1">Smart Watch Band Long Band Text Type 2</a>
            <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                <use href="#icon-chevron-right-12"></use>
            </svg>
        </li>
        <li>
            <a aria-current="page">Current Band</a>
        </li>
    </ul>
</nav>
`;

export const textSpacing = () => `
<nav aria-labelledby="breadcrumbs-heading" class="breadcrumbs breadcrumb--overflow demo-a11y-text-spacing" role="navigation">
    <h2 id="breadcrumbs-heading" class="clipped">You are here</h2>
    <ul>
        <li>
            <a href="https://www.ebay.com/">ebay</a>
            <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                <use href="#icon-chevron-right-12"></use>
            </svg>
        </li>
        <li>
            <span class="menu-button">
                <button class="icon-button breadcrumbs__overflow" aria-expanded="false" aria-label="eBay Menu" type="button" id="breadcrumbs-link-overflow-4-trigger" aria-controls="breadcrumbs-link-overflow-4-content">
                    <svg aria-hidden="true" class="icon icon--16 breadcrumbs__overflow-icon">
                        <use href="#icon-overflow-horizontal-16"></use>
                    </svg>
                </button>

                <div class="menu-button__dropdown breadcrumbs__overflow-menu">
                    <div class="navigation-menu">
                        <ul class="navigation-menu__items" id="breadcrumbs-link-overflow-4-content">
                            <li>
                                <a class="navigation-menu__item" href="https://www.ebay.com/rpp/cell-phone-pda">Cell Phones, Smart Watches &amp; Accessories</a>
                            </li>
                            <li>
                                <a class="navigation-menu__item" href="https://www.ebay.com/b/Smart-Watch-Accessories/182064/bn_16565905">Smart Watch Accessories</a>
                            </li>
                            <li>
                                <a class="navigation-menu__item" href="https://www.ebay.com/b/Smart-Watch-Bands/182068/bn_16565906">Smart Watch Bands</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </span>

            <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                <use href="#icon-chevron-right-12"></use>
            </svg>
        </li>
        <li>
            <a href="https://www.ebay.com/b/Smart-Watch-Bands/182068/bn_16565906/Some-Random-Watch-Pand2">Smart Watch Band Long Band Text Type 2</a>
            <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                <use href="#icon-chevron-right-12"></use>
            </svg>
        </li>
        <li>
            <a aria-current="page">Current Band</a>
        </li>
    </ul>
</nav>
`;
