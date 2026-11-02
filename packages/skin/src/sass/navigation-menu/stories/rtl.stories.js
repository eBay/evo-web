export default { title: "Skin/Navigation Menu/RTL" };

export const rtl = () => `
<div dir="rtl">
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
</div>
`;
