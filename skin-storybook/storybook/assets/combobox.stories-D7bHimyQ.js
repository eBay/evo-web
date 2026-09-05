const x={title:"Skin/Combobox"},o=()=>`
<span class="combobox">
    <span class="combobox__control">
        <input name="combobox-default" placeholder="Combobox" role="combobox" type="text" aria-expanded="false" aria-haspopup="listbox" />
    </span>
    <div class="combobox__listbox combobox__listbox--set-position">
        <div id="listbox1" class="combobox__options" role="listbox">
            <div class="combobox__option" role="option">
                <span>Option 1</span>
            </div>
            <div class="combobox__option" role="option">
                <span>Option 2</span>
            </div>
        </div>
    </div>
</span>
`,s=()=>`
<span class="combobox combobox--expanded">
    <span class="combobox__control">
        <input name="combobox-default" placeholder="Combobox" role="combobox" type="text" aria-expanded="true" aria-haspopup="listbox" />
    </span>
    <div class="combobox__listbox combobox__listbox--set-position">
        <div id="listbox1" class="combobox__options" role="listbox">
            <div class="combobox__option" role="option">
                <span>Option 1</span>
            </div>
            <div class="combobox__option" role="option">
                <span>Option 2</span>
            </div>
        </div>
    </div>
</span>
`,n=()=>`
<span class="combobox combobox--expanded demo-a11y-text-spacing">
    <span class="combobox__control">
        <input name="combobox-default" placeholder="Combobox" role="combobox" type="text" aria-expanded="true" aria-haspopup="listbox" />
    </span>
    <div class="combobox__listbox combobox__listbox--set-position">
        <div id="listbox1" class="combobox__options" role="listbox">
            <div class="combobox__option" role="option">
                <span>Option 1</span>
            </div>
            <div class="combobox__option" role="option">
                <span>Option 2</span>
            </div>
        </div>
    </div>
</span>
`,i=()=>`
<span class="combobox">
    <span class="combobox__control">
        <input name="combobox-default" placeholder="Combobox" role="combobox" type="text" aria-expanded="false" aria-haspopup="listbox" disabled />
    </span>
    <div class="combobox__listbox combobox__listbox--set-position">
        <div id="listbox1" class="combobox__options" role="listbox">
            <div class="combobox__option" role="option">
                <span>Option 1</span>
            </div>
            <div class="combobox__option" role="option">
                <span>Option 2</span>
            </div>
        </div>
    </div>
</span>
`,a=()=>`
<span class="combobox combobox--large combobox--expanded">
    <span class="combobox__control">
        <input name="combobox-default" placeholder="Combobox" role="combobox" type="text" aria-expanded="true" aria-haspopup="listbox" />
    </span>
    <div class="combobox__listbox combobox__listbox--set-position">
        <div id="listbox1" class="combobox__options" role="listbox">
            <div class="combobox__option" role="option">
                <span>Option 1</span>
            </div>
            <div class="combobox__option" role="option">
                <span>Option 2</span>
            </div>
        </div>
    </div>
</span>
`,t=()=>`
<span class="combobox combobox--expanded">
    <span class="combobox__control">
        <input name="combobox-default" placeholder="Combobox" role="combobox" type="text" aria-expanded="true" aria-haspopup="listbox" />
    </span>
    <div class="combobox__listbox combobox__listbox--set-position">
        <div id="listbox1" class="combobox__options" role="listbox">
            <div class="combobox__option" role="option">
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
            </div>
            <div class="combobox__option" role="option">
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
            </div>
        </div>
    </div>
</span>
`,b=()=>`
<span class="combobox combobox--expanded">
    <span class="combobox__control">
        <input placeholder="Combobox" role="combobox" type="text" aria-haspopup="listbox" aria-owns="listbox1" />
        <button class="icon-btn icon-btn--actionable" type="button" aria-label="Expand Suggestions">
            <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </button>
    </span>
    <div class="combobox__listbox combobox__listbox--set-position">
        <div id="listbox1" class="combobox__options" role="listbox">
            <div class="combobox__option" role="option">
                <span>Option 1</span>
            </div>
            <div class="combobox__option" role="option">
                <span>Option 2</span>
            </div>
            <div class="combobox__option" role="option">
                <span>Option 3</span>
            </div>
        </div>
    </div>
</span>
`,p=()=>`
<div dir="rtl">
    <span class="combobox combobox--expanded">
        <span class="combobox__control">
            <input class="pink-placeholder-text" name="combobox-default" placeholder="Combobox" role="combobox" type="text" aria-expanded="true" aria-haspopup="listbox" />
        </span>
        <div class="combobox__listbox combobox__listbox--set-position">
            <div id="listbox1" class="combobox__options" role="listbox">
                <div class="combobox__option" role="option">
                    <span>Option 1</span>
                </div>
                <div class="combobox__option" role="option">
                    <span>Option 2</span>
                </div>
            </div>
        </div>
    </span>
</div>
`,e=()=>`
<div dir="rtl">
    <span class="combobox combobox--expanded">
        <span class="combobox__control combobox__control--actionable">
            <input placeholder="Combobox" role="combobox" type="text" aria-haspopup="listbox" aria-owns="listbox5" />
            <button class="icon-btn" type="button" aria-label="Expand Suggestions">
                <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                    <use href="#icon-chevron-down-12"></use>
                </svg>
            </button>
        </span>
        <div class="combobox__listbox combobox__listbox--set-position">
            <div id="listbox5" class="combobox__options" role="listbox">
                <div class="combobox__option" role="option">
                    <span>Option 1</span>
                </div>
                <div class="combobox__option" role="option">
                    <span>Option 2</span>
                </div>
                <div class="combobox__option" role="option">
                    <span>Option 3</span>
                </div>
            </div>
        </div>
    </span>
</div>
`,c=()=>`
<div style="color: red">
    <span class="combobox combobox--expanded">
        <span class="combobox__control">
            <input class="pink-placeholder-text" name="combobox-default" placeholder="Combobox" role="combobox" type="text" aria-expanded="true" aria-haspopup="listbox" />
        </span>
        <div class="combobox__listbox combobox__listbox--set-position">
            <div id="listbox1" class="combobox__options" role="listbox">
                <div class="combobox__option" role="option">
                    <span>Option 1</span>
                </div>
                <div class="combobox__option" role="option">
                    <span>Option 2</span>
                </div>
            </div>
        </div>
    </span>
</div>
`,l=()=>`
<div style="font-size: 200%;">
    <span class="combobox combobox--expanded">
        <span class="combobox__control">
            <input name="combobox-default" placeholder="Combobox" role="combobox" type="text" aria-expanded="true" aria-haspopup="listbox" />
        </span>
        <div class="combobox__listbox combobox__listbox--set-position">
            <div id="listbox1" class="combobox__options" role="listbox">
                <div class="combobox__option" role="option">
                    <span>Option 1</span>
                </div>
                <div class="combobox__option" role="option">
                    <span>Option 2</span>
                </div>
            </div>
        </div>
    </span>
</div>
`;o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => \`
<span class="combobox">
    <span class="combobox__control">
        <input name="combobox-default" placeholder="Combobox" role="combobox" type="text" aria-expanded="false" aria-haspopup="listbox" />
    </span>
    <div class="combobox__listbox combobox__listbox--set-position">
        <div id="listbox1" class="combobox__options" role="listbox">
            <div class="combobox__option" role="option">
                <span>Option 1</span>
            </div>
            <div class="combobox__option" role="option">
                <span>Option 2</span>
            </div>
        </div>
    </div>
</span>
\``,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => \`
<span class="combobox combobox--expanded">
    <span class="combobox__control">
        <input name="combobox-default" placeholder="Combobox" role="combobox" type="text" aria-expanded="true" aria-haspopup="listbox" />
    </span>
    <div class="combobox__listbox combobox__listbox--set-position">
        <div id="listbox1" class="combobox__options" role="listbox">
            <div class="combobox__option" role="option">
                <span>Option 1</span>
            </div>
            <div class="combobox__option" role="option">
                <span>Option 2</span>
            </div>
        </div>
    </div>
</span>
\``,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => \`
<span class="combobox combobox--expanded demo-a11y-text-spacing">
    <span class="combobox__control">
        <input name="combobox-default" placeholder="Combobox" role="combobox" type="text" aria-expanded="true" aria-haspopup="listbox" />
    </span>
    <div class="combobox__listbox combobox__listbox--set-position">
        <div id="listbox1" class="combobox__options" role="listbox">
            <div class="combobox__option" role="option">
                <span>Option 1</span>
            </div>
            <div class="combobox__option" role="option">
                <span>Option 2</span>
            </div>
        </div>
    </div>
</span>
\``,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => \`
<span class="combobox">
    <span class="combobox__control">
        <input name="combobox-default" placeholder="Combobox" role="combobox" type="text" aria-expanded="false" aria-haspopup="listbox" disabled />
    </span>
    <div class="combobox__listbox combobox__listbox--set-position">
        <div id="listbox1" class="combobox__options" role="listbox">
            <div class="combobox__option" role="option">
                <span>Option 1</span>
            </div>
            <div class="combobox__option" role="option">
                <span>Option 2</span>
            </div>
        </div>
    </div>
</span>
\``,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => \`
<span class="combobox combobox--large combobox--expanded">
    <span class="combobox__control">
        <input name="combobox-default" placeholder="Combobox" role="combobox" type="text" aria-expanded="true" aria-haspopup="listbox" />
    </span>
    <div class="combobox__listbox combobox__listbox--set-position">
        <div id="listbox1" class="combobox__options" role="listbox">
            <div class="combobox__option" role="option">
                <span>Option 1</span>
            </div>
            <div class="combobox__option" role="option">
                <span>Option 2</span>
            </div>
        </div>
    </div>
</span>
\``,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => \`
<span class="combobox combobox--expanded">
    <span class="combobox__control">
        <input name="combobox-default" placeholder="Combobox" role="combobox" type="text" aria-expanded="true" aria-haspopup="listbox" />
    </span>
    <div class="combobox__listbox combobox__listbox--set-position">
        <div id="listbox1" class="combobox__options" role="listbox">
            <div class="combobox__option" role="option">
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
            </div>
            <div class="combobox__option" role="option">
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
            </div>
        </div>
    </div>
</span>
\``,...t.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => \`
<span class="combobox combobox--expanded">
    <span class="combobox__control">
        <input placeholder="Combobox" role="combobox" type="text" aria-haspopup="listbox" aria-owns="listbox1" />
        <button class="icon-btn icon-btn--actionable" type="button" aria-label="Expand Suggestions">
            <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </button>
    </span>
    <div class="combobox__listbox combobox__listbox--set-position">
        <div id="listbox1" class="combobox__options" role="listbox">
            <div class="combobox__option" role="option">
                <span>Option 1</span>
            </div>
            <div class="combobox__option" role="option">
                <span>Option 2</span>
            </div>
            <div class="combobox__option" role="option">
                <span>Option 3</span>
            </div>
        </div>
    </div>
</span>
\``,...b.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => \`
<div dir="rtl">
    <span class="combobox combobox--expanded">
        <span class="combobox__control">
            <input class="pink-placeholder-text" name="combobox-default" placeholder="Combobox" role="combobox" type="text" aria-expanded="true" aria-haspopup="listbox" />
        </span>
        <div class="combobox__listbox combobox__listbox--set-position">
            <div id="listbox1" class="combobox__options" role="listbox">
                <div class="combobox__option" role="option">
                    <span>Option 1</span>
                </div>
                <div class="combobox__option" role="option">
                    <span>Option 2</span>
                </div>
            </div>
        </div>
    </span>
</div>
\``,...p.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => \`
<div dir="rtl">
    <span class="combobox combobox--expanded">
        <span class="combobox__control combobox__control--actionable">
            <input placeholder="Combobox" role="combobox" type="text" aria-haspopup="listbox" aria-owns="listbox5" />
            <button class="icon-btn" type="button" aria-label="Expand Suggestions">
                <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
                    <use href="#icon-chevron-down-12"></use>
                </svg>
            </button>
        </span>
        <div class="combobox__listbox combobox__listbox--set-position">
            <div id="listbox5" class="combobox__options" role="listbox">
                <div class="combobox__option" role="option">
                    <span>Option 1</span>
                </div>
                <div class="combobox__option" role="option">
                    <span>Option 2</span>
                </div>
                <div class="combobox__option" role="option">
                    <span>Option 3</span>
                </div>
            </div>
        </div>
    </span>
</div>
\``,...e.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => \`
<div style="color: red">
    <span class="combobox combobox--expanded">
        <span class="combobox__control">
            <input class="pink-placeholder-text" name="combobox-default" placeholder="Combobox" role="combobox" type="text" aria-expanded="true" aria-haspopup="listbox" />
        </span>
        <div class="combobox__listbox combobox__listbox--set-position">
            <div id="listbox1" class="combobox__options" role="listbox">
                <div class="combobox__option" role="option">
                    <span>Option 1</span>
                </div>
                <div class="combobox__option" role="option">
                    <span>Option 2</span>
                </div>
            </div>
        </div>
    </span>
</div>
\``,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => \`
<div style="font-size: 200%;">
    <span class="combobox combobox--expanded">
        <span class="combobox__control">
            <input name="combobox-default" placeholder="Combobox" role="combobox" type="text" aria-expanded="true" aria-haspopup="listbox" />
        </span>
        <div class="combobox__listbox combobox__listbox--set-position">
            <div id="listbox1" class="combobox__options" role="listbox">
                <div class="combobox__option" role="option">
                    <span>Option 1</span>
                </div>
                <div class="combobox__option" role="option">
                    <span>Option 2</span>
                </div>
            </div>
        </div>
    </span>
</div>
\``,...l.parameters?.docs?.source}}};const d=["collapsed","expanded","textSpacing","disabled","large","longOptions","actionable","RTL","actionableRTL","inheritColour","inheritFontSize"];export{p as RTL,d as __namedExportsOrder,b as actionable,e as actionableRTL,o as collapsed,x as default,i as disabled,s as expanded,c as inheritColour,l as inheritFontSize,a as large,t as longOptions,n as textSpacing};
