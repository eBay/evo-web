export default { title: "Skin/Navigation Tabs/Block" };

export const two = () => `
<div class="navigation-tabs">
    <ul class="navigation-tabs__items">
        <li class="navigation-tabs__item navigation-tabs__item--current">
            <a aria-current="page" href="http://www.ebay.com">
                Nav 1<span class="clipped"> - current page</span>
            </a>
        </li>
        <li class="navigation-tabs__item">
            <a href="http://www.ebay.com">Nav 2</a>
        </li>
    </ul>
    <div class="navigation-tabs__content">
        <div class="navigation-tabs__cell"><p>Lorem ipsum dolor sit amet.</p></div>
    </div>
</div>
`;

export const three = () => `
<div class="navigation-tabs">
    <ul class="navigation-tabs__items">
        <li class="navigation-tabs__item navigation-tabs__item--current">
            <a aria-current="page" href="http://www.ebay.com">Nav 1<span class="clipped"> - selected</span></a>
        </li>
        <li class="navigation-tabs__item">
            <a href="http://www.ebay.com">Nav 2</a>
        </li>
        <li class="navigation-tabs__item">
            <a href="http://www.ebay.com">Nav 3</a>
        </li>
    </ul>
    <div class="navigation-tabs__content">
        <div class="navigation-tabs__cell"><p>Lorem ipsum dolor sit amet.</p></div>
    </div>
</div>
`;

export const four = () => `
<div class="navigation-tabs">
    <ul class="navigation-tabs__items">
        <li class="navigation-tabs__item navigation-tabs__item--current">
            <a aria-current="page" href="http://www.ebay.com">Nav 1<span class="clipped"> - selected</span></a>
        </li>
        <li class="navigation-tabs__item">
            <a href="http://www.ebay.com">Nav 2</a>
        </li>
        <li class="navigation-tabs__item">
            <a href="http://www.ebay.com">Nav 3</a>
        </li>
        <li class="navigation-tabs__item">
            <a href="http://www.ebay.com">Nav 4</a>
        </li>
    </ul>
    <div class="navigation-tabs__content">
        <div class="navigation-tabs__cell"><p>Lorem ipsum dolor sit amet.</p></div>
    </div>
</div>
`;

export const large = () => `
<div class="navigation-tabs navigation-tabs--large">
    <ul class="navigation-tabs__items">
        <li class="navigation-tabs__item navigation-tabs__item--current">
            <a aria-current="page" href="http://www.ebay.com">Nav 1<span class="clipped"> - selected</span></a>
        </li>
        <li class="navigation-tabs__item">
            <a href="http://www.ebay.com">Nav 2</a>
        </li>
        <li class="navigation-tabs__item">
            <a href="http://www.ebay.com">Nav 3</a>
        </li>
        <li class="navigation-tabs__item">
            <a href="http://www.ebay.com">Nav 4</a>
        </li>
    </ul>
    <div class="navigation-tabs__content">
        <div class="navigation-tabs__cell"><p>Lorem ipsum dolor sit amet.</p></div>
    </div>
</div>
`;
