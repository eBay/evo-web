const t={title:"Skin/Select/Cascade"},o=()=>`
<div dir="rtl">
    <span class="select">
        <select>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
        </select>
        <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
            <use href="#icon-chevron-down-12"></use>
        </svg>
    </span>
</div>
`,n=()=>`
<span class="select" style="font-size: 200%">
    <select>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
    </select>
    <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
        <use href="#icon-chevron-down-12"></use>
    </svg>
</span>
`,e=()=>`
<span class="select" style="color: green">
    <select>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
    </select>
    <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
        <use href="#icon-chevron-down-12"></use>
    </svg>
</span>
`;o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => \`
<div dir="rtl">
    <span class="select">
        <select>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
        </select>
        <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
            <use href="#icon-chevron-down-12"></use>
        </svg>
    </span>
</div>
\``,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => \`
<span class="select" style="font-size: 200%">
    <select>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
    </select>
    <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
        <use href="#icon-chevron-down-12"></use>
    </svg>
</span>
\``,...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => \`
<span class="select" style="color: green">
    <select>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
    </select>
    <svg class="icon icon--12" height="8" width="8" aria-hidden="true">
        <use href="#icon-chevron-down-12"></use>
    </svg>
</span>
\``,...e.parameters?.docs?.source}}};const s=["RTL","fontSize","color"];export{o as RTL,s as __namedExportsOrder,e as color,t as default,n as fontSize};
