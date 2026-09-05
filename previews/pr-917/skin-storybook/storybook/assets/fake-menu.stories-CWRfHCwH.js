const c={title:"Skin/Menu/Fake Menu"},a=()=>`
<div class="fake-menu">
    <ul class="fake-menu__items">
        <li><a href="http://www.ebay.com" class="fake-menu__item">Link 1</a></li>
        <li><a href="http://www.ebay.com" class="fake-menu__item">Link 2</a></li>
        <li><a href="http://www.ebay.com" class="fake-menu__item">Link 3</a></li>
    </ul>
</div>
`,e=()=>`
<div class="fake-menu">
    <ul class="fake-menu__items">
        <li><button class="fake-menu__item"><span><span>Button 1</span></span></button></li>
        <li><button class="fake-menu__item"><span><span>Button 2</span></span></button></li>
        <li><button class="fake-menu__item"><span><span>Button 3</span></span></button></li>
    </ul>
</div>
`,s=()=>`
<div class="fake-menu">
    <ul class="fake-menu__items">
        <li><a href="http://www.ebay.com" class="fake-menu__item">Link 1</a></li>
        <li><button class="fake-menu__item"><span><span>Button 2</span></span></button></li>
        <li><a href="http://www.ebay.com" class="fake-menu__item">Link 3</a></li>
    </ul>
</div>
`,n=()=>`
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
`,t=()=>`
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
`,i=()=>`
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
`,l=()=>`
<span class="fake-menu">
    <span class="fake-menu__items" role="menu">
        <a class="fake-menu__item" role="menuitem" href="https://www.ebay.com"><span>Button 1<span class="badge">1</span></span></a>
        <a class="fake-menu__item" role="menuitem" href="https://www.ebay.com"><span>Button 2<span class="badge">10</span></span></a>
        <a class="fake-menu__item" role="menuitem" href="https://www.ebay.com"><span>Button 3<span class="badge">99+</span></span></a>
    </span>
</span>
`;a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => \`
<div class="fake-menu">
    <ul class="fake-menu__items">
        <li><a href="http://www.ebay.com" class="fake-menu__item">Link 1</a></li>
        <li><a href="http://www.ebay.com" class="fake-menu__item">Link 2</a></li>
        <li><a href="http://www.ebay.com" class="fake-menu__item">Link 3</a></li>
    </ul>
</div>
\``,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => \`
<div class="fake-menu">
    <ul class="fake-menu__items">
        <li><button class="fake-menu__item"><span><span>Button 1</span></span></button></li>
        <li><button class="fake-menu__item"><span><span>Button 2</span></span></button></li>
        <li><button class="fake-menu__item"><span><span>Button 3</span></span></button></li>
    </ul>
</div>
\``,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => \`
<div class="fake-menu">
    <ul class="fake-menu__items">
        <li><a href="http://www.ebay.com" class="fake-menu__item">Link 1</a></li>
        <li><button class="fake-menu__item"><span><span>Button 2</span></span></button></li>
        <li><a href="http://www.ebay.com" class="fake-menu__item">Link 3</a></li>
    </ul>
</div>
\``,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => \`
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
\``,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => \`
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
\``,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => \`
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
\``,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => \`
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
\``,...u.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => \`
<span class="fake-menu">
    <span class="fake-menu__items" role="menu">
        <a class="fake-menu__item" role="menuitem" href="https://www.ebay.com"><span>Button 1<span class="badge">1</span></span></a>
        <a class="fake-menu__item" role="menuitem" href="https://www.ebay.com"><span>Button 2<span class="badge">10</span></span></a>
        <a class="fake-menu__item" role="menuitem" href="https://www.ebay.com"><span>Button 3<span class="badge">99+</span></span></a>
    </span>
</span>
\``,...l.parameters?.docs?.source}}};const m=["links","buttons","mixed","linksSelected","buttonsSelected","linksDisabled","buttonsDisabled","badged"];export{m as __namedExportsOrder,l as badged,e as buttons,u as buttonsDisabled,t as buttonsSelected,c as default,a as links,i as linksDisabled,n as linksSelected,s as mixed};
