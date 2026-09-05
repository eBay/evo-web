const a={title:"Skin/Segmented Buttons"},t=()=>`
    <div class="segmented-buttons">
        <ul>
            <li><button type="button" class="segmented-buttons__button" aria-current="true">Day</button></li>
            <li><button type="button" class="segmented-buttons__button">Month</button></li>
            <li><button type="button" class="segmented-buttons__button">Year</button></li>
        </ul>
    </div>
`,n=()=>`
    <div class="segmented-buttons">
        <ul>
            <li><button type="button" class="segmented-buttons__button">Q1</button></li>
            <li><button type="button" class="segmented-buttons__button" aria-current="true">Q2</button></li>
            <li><button type="button" class="segmented-buttons__button">Q3</button></li>
            <li><button type="button" class="segmented-buttons__button">Q4</button></li>
        </ul>
    </div>
`,e=()=>`
    <div class="segmented-buttons segmented-buttons--large">
        <ul>
            <li><button type="button" class="segmented-buttons__button" aria-current="true">Day</button></li>
            <li><button type="button" class="segmented-buttons__button">Month</button></li>
            <li><button type="button" class="segmented-buttons__button">Year</button></li>
        </ul>
    </div>
`,s=()=>`
    <div class="segmented-buttons">
        <ul>
            <li>
                <button type="button" aria-current="true" class="segmented-buttons__button">
                <span class="segmented-buttons__button-cell">
                        <svg aria-hidden="true" class="icon icon--24" height="16" width="16">
                            <use href="#icon-full-view-24"></use>
                        </svg>
                        <span>Desktop</span>
                    </span>
                </button>
            </li>
            <li>
                <button type="button" class="segmented-buttons__button">
                    <span class="segmented-buttons__button-cell">
                        <svg aria-hidden="true" class="icon icon--24" height="16" width="16">
                            <use href="#icon-mobile-24"></use>
                        </svg>
                        <span>Mobile</span>
                    </span>
                </button>
            </li>
        </ul>
    </div>
`,o=()=>`
<div style="width: 300px;">
    <div class="segmented-buttons">
        <ul>
            <li><button type="button" class="segmented-buttons__button">Q1</button></li>
            <li><button type="button" class="segmented-buttons__button">Q2</button></li>
            <li><button type="button" class="segmented-buttons__button" aria-current="true">Q3</button></li>
            <li><button type="button" class="segmented-buttons__button">Q4</button></li>
        </ul>
    </div>
</div>
`,u=()=>`
<div style="font-size: 300%">
    <div class="segmented-buttons">
        <ul>
            <li><button type="button" class="segmented-buttons__button">Q1</button></li>
            <li><button type="button" class="segmented-buttons__button">Q2</button></li>
            <li><button type="button" class="segmented-buttons__button" aria-current="true">Q3</button></li>
            <li><button type="button" class="segmented-buttons__button">Q4</button></li>
        </ul>
    </div>
</div>
`,b=()=>`
<div style="color:red;">
    <div class="segmented-buttons">
        <ul>
            <li><button type="button" class="segmented-buttons__button">Q1</button></li>
            <li><button type="button" class="segmented-buttons__button">Q2</button></li>
            <li><button type="button" class="segmented-buttons__button" aria-current="true">Q3</button></li>
            <li><button type="button" class="segmented-buttons__button">Q4</button></li>
        </ul>
    </div>
</div>
`,l=()=>`
<div dir="rtl">
    <div class="segmented-buttons">
        <ul>
            <li><button type="button" class="segmented-buttons__button">Q1</button></li>
            <li><button type="button" class="segmented-buttons__button">Q2</button></li>
            <li><button type="button" class="segmented-buttons__button" aria-current="true">Q3</button></li>
            <li><button type="button" class="segmented-buttons__button">Q4</button></li>
        </ul>
    </div>
</div>
`,i=()=>`
    <div class="segmented-buttons demo-a11y-text-spacing">
        <ul>
            <li><button type="button" class="segmented-buttons__button" aria-current="true">Day</button></li>
            <li><button type="button" class="segmented-buttons__button">Month</button></li>
            <li><button type="button" class="segmented-buttons__button">Year</button></li>
        </ul>
    </div>
`;t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => \`
    <div class="segmented-buttons">
        <ul>
            <li><button type="button" class="segmented-buttons__button" aria-current="true">Day</button></li>
            <li><button type="button" class="segmented-buttons__button">Month</button></li>
            <li><button type="button" class="segmented-buttons__button">Year</button></li>
        </ul>
    </div>
\``,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => \`
    <div class="segmented-buttons">
        <ul>
            <li><button type="button" class="segmented-buttons__button">Q1</button></li>
            <li><button type="button" class="segmented-buttons__button" aria-current="true">Q2</button></li>
            <li><button type="button" class="segmented-buttons__button">Q3</button></li>
            <li><button type="button" class="segmented-buttons__button">Q4</button></li>
        </ul>
    </div>
\``,...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => \`
    <div class="segmented-buttons segmented-buttons--large">
        <ul>
            <li><button type="button" class="segmented-buttons__button" aria-current="true">Day</button></li>
            <li><button type="button" class="segmented-buttons__button">Month</button></li>
            <li><button type="button" class="segmented-buttons__button">Year</button></li>
        </ul>
    </div>
\``,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => \`
    <div class="segmented-buttons">
        <ul>
            <li>
                <button type="button" aria-current="true" class="segmented-buttons__button">
                <span class="segmented-buttons__button-cell">
                        <svg aria-hidden="true" class="icon icon--24" height="16" width="16">
                            <use href="#icon-full-view-24"></use>
                        </svg>
                        <span>Desktop</span>
                    </span>
                </button>
            </li>
            <li>
                <button type="button" class="segmented-buttons__button">
                    <span class="segmented-buttons__button-cell">
                        <svg aria-hidden="true" class="icon icon--24" height="16" width="16">
                            <use href="#icon-mobile-24"></use>
                        </svg>
                        <span>Mobile</span>
                    </span>
                </button>
            </li>
        </ul>
    </div>
\``,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => \`
<div style="width: 300px;">
    <div class="segmented-buttons">
        <ul>
            <li><button type="button" class="segmented-buttons__button">Q1</button></li>
            <li><button type="button" class="segmented-buttons__button">Q2</button></li>
            <li><button type="button" class="segmented-buttons__button" aria-current="true">Q3</button></li>
            <li><button type="button" class="segmented-buttons__button">Q4</button></li>
        </ul>
    </div>
</div>
\``,...o.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => \`
<div style="font-size: 300%">
    <div class="segmented-buttons">
        <ul>
            <li><button type="button" class="segmented-buttons__button">Q1</button></li>
            <li><button type="button" class="segmented-buttons__button">Q2</button></li>
            <li><button type="button" class="segmented-buttons__button" aria-current="true">Q3</button></li>
            <li><button type="button" class="segmented-buttons__button">Q4</button></li>
        </ul>
    </div>
</div>
\``,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => \`
<div style="color:red;">
    <div class="segmented-buttons">
        <ul>
            <li><button type="button" class="segmented-buttons__button">Q1</button></li>
            <li><button type="button" class="segmented-buttons__button">Q2</button></li>
            <li><button type="button" class="segmented-buttons__button" aria-current="true">Q3</button></li>
            <li><button type="button" class="segmented-buttons__button">Q4</button></li>
        </ul>
    </div>
</div>
\``,...b.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => \`
<div dir="rtl">
    <div class="segmented-buttons">
        <ul>
            <li><button type="button" class="segmented-buttons__button">Q1</button></li>
            <li><button type="button" class="segmented-buttons__button">Q2</button></li>
            <li><button type="button" class="segmented-buttons__button" aria-current="true">Q3</button></li>
            <li><button type="button" class="segmented-buttons__button">Q4</button></li>
        </ul>
    </div>
</div>
\``,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => \`
    <div class="segmented-buttons demo-a11y-text-spacing">
        <ul>
            <li><button type="button" class="segmented-buttons__button" aria-current="true">Day</button></li>
            <li><button type="button" class="segmented-buttons__button">Month</button></li>
            <li><button type="button" class="segmented-buttons__button">Year</button></li>
        </ul>
    </div>
\``,...i.parameters?.docs?.source}}};const r=["base","shortItems","large","withIcons","inContainer","inheritFontSize","inheritColors","rtl","textSpacing"];export{r as __namedExportsOrder,t as base,a as default,o as inContainer,b as inheritColors,u as inheritFontSize,e as large,l as rtl,n as shortItems,i as textSpacing,s as withIcons};
