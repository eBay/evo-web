const t={title:"Skin/Tabs/Fake Tabs/Inline-Block"},a=()=>`
<span class="fake-tabs">
    <ul class="fake-tabs__items">
        <li class="fake-tabs__item fake-tabs__item--current">
            <a aria-current="page" href="http://www.ebay.com">
                Fake 1<span class="clipped"> - current page</span>
            </a>
        </li>
        <li class="fake-tabs__item">
            <a href="http://www.ebay.com">Fake 2</a>
        </li>
    </ul>
    <div class="fake-tabs__content">
        <div class="fake-tabs__cell">
            <p>Lorem ipsum dolor sit amet.</p>
        </div>
    </div>
</span>
`,e=()=>`
<span class="fake-tabs">
    <ul class="fake-tabs__items">
        <li class="fake-tabs__item fake-tabs__item--current">
            <a aria-current="page" href="http://www.ebay.com">Fake 1<span class="clipped"> - selected</span></a>
        </li>
        <li class="fake-tabs__item">
            <a href="http://www.ebay.com">Fake 2</a>
        </li>
        <li class="fake-tabs__item">
            <a href="http://www.ebay.com">Fake 3</a>
        </li>
    </ul>
    <div class="fake-tabs__content">
        <div class="fake-tabs__cell"><p>Lorem ipsum dolor sit amet.</p></div>
    </div>
</span>
`,s=()=>`
<span class="fake-tabs">
    <ul class="fake-tabs__items">
        <li class="fake-tabs__item fake-tabs__item--current">
            <a aria-current="page" href="http://www.ebay.com">Fake 1<span class="clipped"> - selected</span></a>
        </li>
        <li class="fake-tabs__item">
            <a href="http://www.ebay.com">Fake 2</a>
        </li>
        <li class="fake-tabs__item">
            <a href="http://www.ebay.com">Fake 3</a>
        </li>
        <li class="fake-tabs__item">
            <a href="http://www.ebay.com">Fake 4</a>
        </li>
    </ul>
    <div class="fake-tabs__content">
        <div class="fake-tabs__cell"><p>Lorem ipsum dolor sit amet.</p></div>
    </div>
</span>
`;a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => \`
<span class="fake-tabs">
    <ul class="fake-tabs__items">
        <li class="fake-tabs__item fake-tabs__item--current">
            <a aria-current="page" href="http://www.ebay.com">
                Fake 1<span class="clipped"> - current page</span>
            </a>
        </li>
        <li class="fake-tabs__item">
            <a href="http://www.ebay.com">Fake 2</a>
        </li>
    </ul>
    <div class="fake-tabs__content">
        <div class="fake-tabs__cell">
            <p>Lorem ipsum dolor sit amet.</p>
        </div>
    </div>
</span>
\``,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => \`
<span class="fake-tabs">
    <ul class="fake-tabs__items">
        <li class="fake-tabs__item fake-tabs__item--current">
            <a aria-current="page" href="http://www.ebay.com">Fake 1<span class="clipped"> - selected</span></a>
        </li>
        <li class="fake-tabs__item">
            <a href="http://www.ebay.com">Fake 2</a>
        </li>
        <li class="fake-tabs__item">
            <a href="http://www.ebay.com">Fake 3</a>
        </li>
    </ul>
    <div class="fake-tabs__content">
        <div class="fake-tabs__cell"><p>Lorem ipsum dolor sit amet.</p></div>
    </div>
</span>
\``,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => \`
<span class="fake-tabs">
    <ul class="fake-tabs__items">
        <li class="fake-tabs__item fake-tabs__item--current">
            <a aria-current="page" href="http://www.ebay.com">Fake 1<span class="clipped"> - selected</span></a>
        </li>
        <li class="fake-tabs__item">
            <a href="http://www.ebay.com">Fake 2</a>
        </li>
        <li class="fake-tabs__item">
            <a href="http://www.ebay.com">Fake 3</a>
        </li>
        <li class="fake-tabs__item">
            <a href="http://www.ebay.com">Fake 4</a>
        </li>
    </ul>
    <div class="fake-tabs__content">
        <div class="fake-tabs__cell"><p>Lorem ipsum dolor sit amet.</p></div>
    </div>
</span>
\``,...s.parameters?.docs?.source}}};const l=["two","three","four"];export{l as __namedExportsOrder,t as default,s as four,e as three,a as two};
