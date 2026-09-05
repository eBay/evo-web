const i={title:"Skin/Tabs/Fake Tabs/Block"},a=()=>`
<div class="fake-tabs">
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
        <div class="fake-tabs__cell"><p>Lorem ipsum dolor sit amet.</p></div>
    </div>
</div>
`,e=()=>`
<div class="fake-tabs">
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
</div>
`,s=()=>`
<div class="fake-tabs">
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
</div>
`,t=()=>`
<div class="fake-tabs fake-tabs--large">
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
</div>
`;a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => \`
<div class="fake-tabs">
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
        <div class="fake-tabs__cell"><p>Lorem ipsum dolor sit amet.</p></div>
    </div>
</div>
\``,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => \`
<div class="fake-tabs">
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
</div>
\``,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => \`
<div class="fake-tabs">
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
</div>
\``,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => \`
<div class="fake-tabs fake-tabs--large">
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
</div>
\``,...t.parameters?.docs?.source}}};const l=["two","three","four","large"];export{l as __namedExportsOrder,i as default,s as four,t as large,e as three,a as two};
