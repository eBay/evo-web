const e={title:"Skin/Menu/Fake Menu"},a=()=>`
<div class="fake-menu">
    <ul class="fake-menu__items">
        <li><a href="http://www.ebay.com" class="fake-menu__item">Link 1</a></li>
        <li><a href="http://www.ebay.com" class="fake-menu__item">Link 2</a></li>
        <li><a href="http://www.ebay.com" class="fake-menu__item">Link 3</a></li>
    </ul>
</div>
`,s=()=>`
<div class="fake-menu">
    <ul class="fake-menu__items">
        <li><button class="fake-menu__item"><span><span>Button 1</span></span></button></li>
        <li><button class="fake-menu__item"><span><span>Button 2</span></span></button></li>
        <li><button class="fake-menu__item"><span><span>Button 3</span></span></button></li>
    </ul>
</div>
`,n=()=>`
<div class="fake-menu">
    <ul class="fake-menu__items">
        <li><a href="http://www.ebay.com" class="fake-menu__item">Link 1</a></li>
        <li><button class="fake-menu__item"><span><span>Button 2</span></span></button></li>
        <li><a href="http://www.ebay.com" class="fake-menu__item">Link 3</a></li>
    </ul>
</div>
`,t=()=>`
<div class="fake-menu">
    <ul class="fake-menu__items">
        <li>
            <a aria-current="page" class="fake-menu__item" href="http://www.ebay.com">
                <span>Link 1</span>
                <svg class="icon icon--16" height="8" width="8" aria-hidden="true">
                    <use href="#icon-tick-16"></use>
                </svg>
            </a>
        </li>
        <li><a href="http://www.ebay.com" class="fake-menu__item">Link 2</a></li>
        <li><a href="http://www.ebay.com" class="fake-menu__item">Link 3</a></li>
    </ul>
</div>
`,i=()=>`
<div class="fake-menu">
    <ul class="fake-menu__items">
        <li>
            <button aria-current="page" class="fake-menu__item">
                <span>Button 1</span>
                <svg class="icon icon--16" height="8" width="8" aria-hidden="true">
                    <use href="#icon-tick-16"></use>
                </svg>
            </button>
        </li>
        <li><button class="fake-menu__item"><span>Button 2</span></span></button></li>
        <li><button class="fake-menu__item"><span>Button 3</span></span></button></li>
    </ul>
</div>
`,l=()=>`
<div class="fake-menu">
    <ul class="fake-menu__items">
        <li>
            <a aria-current="page" class="fake-menu__item">
                <span>Link 1</span>
                <svg class="icon icon--16" height="8" width="8" aria-hidden="true">
                    <use href="#icon-tick-16"></use>
                </svg>
            </a>
        </li>
        <li><a href="http://www.ebay.com" class="fake-menu__item">Link 2</a></li>
        <li><a href="http://www.ebay.com" class="fake-menu__item">Link 3</a></li>
    </ul>
</div>
`,u=()=>`
<div class="fake-menu">
    <ul class="fake-menu__items">
        <li>
            <button aria-current="page" class="fake-menu__item" disabled>
                <span>Button 1</span>
                <svg class="icon icon--16" height="8" width="8" aria-hidden="true">
                    <use href="#icon-tick-16"></use>
                </svg>
            </button>
        </li>
        <li><button class="fake-menu__item"><span>Button 2</span></span></button></li>
        <li><button class="fake-menu__item"><span>Button 3</span></span></button></li>
    </ul>
</div>
`,m=()=>`
<span class="fake-menu">
    <span class="fake-menu__items" role="menu">
        <a class="fake-menu__item" role="menuitem" href="https://www.ebay.com"><span>Button 1<span class="badge">1</span></span></a>
        <a class="fake-menu__item" role="menuitem" href="https://www.ebay.com"><span>Button 2<span class="badge">10</span></span></a>
        <a class="fake-menu__item" role="menuitem" href="https://www.ebay.com"><span>Button 3<span class="badge">99+</span></span></a>
    </span>
</span>
`,c=["links","buttons","mixed","linksSelected","buttonsSelected","linksDisabled","buttonsDisabled","badged"];export{c as __namedExportsOrder,m as badged,s as buttons,u as buttonsDisabled,i as buttonsSelected,e as default,a as links,l as linksDisabled,t as linksSelected,n as mixed};
