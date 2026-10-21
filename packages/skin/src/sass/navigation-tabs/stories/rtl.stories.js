export default { title: "Skin/Navigation Tabs/RTL" };

export const rtl = () => `
<div dir="rtl">
    <div class="navigation-tabs">
        <ul class="navigation-tabs__items">
            <li class="navigation-tabs__item">
                <a aria-current="page" href="http://www.ebay.com">
                    Nav 1<span class="clipped"> - current page</span>
                </a>
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
</div>
`;
