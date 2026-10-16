export default { title: "Skin/Navigation Menu" };

export const links = () => `
<div class="navigation-menu">
    <ul class="navigation-menu__items">
        <li><a href="http://www.ebay.com" class="navigation-menu__item">Link 1</a></li>
        <li><a href="http://www.ebay.com" class="navigation-menu__item">Link 2</a></li>
        <li><a href="http://www.ebay.com" class="navigation-menu__item">Link 3</a></li>
    </ul>
</div>
`;

export const buttons = () => `
<div class="navigation-menu">
    <ul class="navigation-menu__items">
        <li><button class="navigation-menu__item"><span><span>Button 1</span></span></button></li>
        <li><button class="navigation-menu__item"><span><span>Button 2</span></span></button></li>
        <li><button class="navigation-menu__item"><span><span>Button 3</span></span></button></li>
    </ul>
</div>
`;

export const mixed = () => `
<div class="navigation-menu">
    <ul class="navigation-menu__items">
        <li><a href="http://www.ebay.com" class="navigation-menu__item">Link 1</a></li>
        <li><button class="navigation-menu__item"><span><span>Button 2</span></span></button></li>
        <li><a href="http://www.ebay.com" class="navigation-menu__item">Link 3</a></li>
    </ul>
</div>
`;

export const linksSelected = () => `
<div class="navigation-menu">
    <ul class="navigation-menu__items">
        <li>
            <a aria-current="page" class="navigation-menu__item" href="http://www.ebay.com">
                <span>Link 1</span>
                <svg class="icon icon--16" height="8" width="8" aria-hidden="true">
                    <use href="#icon-tick-16"></use>
                </svg>
            </a>
        </li>
        <li><a href="http://www.ebay.com" class="navigation-menu__item">Link 2</a></li>
        <li><a href="http://www.ebay.com" class="navigation-menu__item">Link 3</a></li>
    </ul>
</div>
`;

export const buttonsSelected = () => `
<div class="navigation-menu">
    <ul class="navigation-menu__items">
        <li>
            <button aria-current="page" class="navigation-menu__item">
                <span>Button 1</span>
                <svg class="icon icon--16" height="8" width="8" aria-hidden="true">
                    <use href="#icon-tick-16"></use>
                </svg>
            </button>
        </li>
        <li><button class="navigation-menu__item"><span>Button 2</span></button></li>
        <li><button class="navigation-menu__item"><span>Button 3</span></button></li>
    </ul>
</div>
`;

export const linksDisabled = () => `
<div class="navigation-menu">
    <ul class="navigation-menu__items">
        <li>
            <a aria-current="page" class="navigation-menu__item">
                <span>Link 1</span>
                <svg class="icon icon--16" height="8" width="8" aria-hidden="true">
                    <use href="#icon-tick-16"></use>
                </svg>
            </a>
        </li>
        <li><a href="http://www.ebay.com" class="navigation-menu__item">Link 2</a></li>
        <li><a href="http://www.ebay.com" class="navigation-menu__item">Link 3</a></li>
    </ul>
</div>
`;

export const buttonsDisabled = () => `
<div class="navigation-menu">
    <ul class="navigation-menu__items">
        <li>
            <button aria-current="page" class="navigation-menu__item" disabled>
                <span>Button 1</span>
                <svg class="icon icon--16" height="8" width="8" aria-hidden="true">
                    <use href="#icon-tick-16"></use>
                </svg>
            </button>
        </li>
        <li><button class="navigation-menu__item"><span>Button 2</span></button></li>
        <li><button class="navigation-menu__item"><span>Button 3</span></button></li>
    </ul>
</div>
`;

export const badged = () => `
<span class="navigation-menu">
    <span class="navigation-menu__items" role="menu">
        <a class="navigation-menu__item" role="menuitem" href="https://www.ebay.com"><span>Button 1<span class="badge">1</span></span></a>
        <a class="navigation-menu__item" role="menuitem" href="https://www.ebay.com"><span>Button 2<span class="badge">10</span></span></a>
        <a class="navigation-menu__item" role="menuitem" href="https://www.ebay.com"><span>Button 3<span class="badge">99+</span></span></a>
    </span>
</span>
`;
