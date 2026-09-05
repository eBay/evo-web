const e={title:"Skin/Chip/Static Chip"},s=()=>`
<span class="chip">
    <span class="chip__text">Football</span>
</span>
`,a=()=>`
<span class="chip">
    <span class="chip__text">I</span>
</span>
`,n=()=>`
<span class="chip">
    <span class="chip__text">Chip with the longest potentially possible content</span>
</span>
`,p=()=>`
<span class="chip">
    <span class="chip__text">Football</span>
</span>

<span class="chip">
    <span class="chip__text">Basketball</span>
</span>

<span class="chip">
    <span class="chip__text">Baseball</span>
</span>

<span class="chip">
    <span class="chip__text">Hockey</span>
</span>

<span class="chip">
    <span class="chip__text">Tennis</span>
</span>

<span class="chip">
    <span class="chip__text">Golf</span>
</span>

<span class="chip">
    <span class="chip__text">Gymnastics</span>
</span>

<span class="chip">
    <span class="chip__text">Swimming</span>
</span>

<span class="chip">
    <span class="chip__text">Cricket</span>
</span>

<span class="chip">
    <span class="chip__text">Volleyball</span>
</span>

<span class="chip">
    <span class="chip__text">Rugby</span>
</span>
`,c=()=>`
<ul>
    <li>
        <span class="chip">
            <span class="chip__text">Football</span>
        </span>
    </li>

    <li>
        <span class="chip">
            <span class="chip__text">Basketball</span>
        </span>
    </li>

    <li>
        <span class="chip">
            <span class="chip__text">Baseball</span>
        </span>
    </li>

    <li>
        <span class="chip">
            <span class="chip__text">Hockey</span>
        </span>
    </li>

    <li>
        <span class="chip">
            <span class="chip__text">Tennis</span>
        </span>
    </li>

    <li>
        <span class="chip">
            <span class="chip__text">Golf</span>
        </span>
    </li>

    <li>
        <span class="chip">
            <span class="chip__text">Gymnastics</span>
        </span>
    </li>

    <li>
        <span class="chip">
            <span class="chip__text">Swimming</span>
        </span>
    </li>

    <li>
        <span class="chip">
            <span class="chip__text">Cricket</span>
        </span>
    </li>

    <li>
        <span class="chip">
            <span class="chip__text">Volleyball</span>
        </span>
    </li>

    <li>
        <span class="chip">
            <span class="chip__text">Rugby</span>
        </span>
    </li>
</ul>
`,l=()=>`
    <span class="chip" style="font-size: 200%;">
        <span class="chip__text">Large Text</span>
    </span>
`,t=()=>`
    <span class="chip" style="letter-spacing: calc(14px * 0.12);">
        <span class="chip__text">Letter Spacing</span>
    </span>
`,i=()=>`
<div dir="rtl">
    <span class="chip">
        <span class="chip__text">Football RTL</span>
    </span>
</div>
`;s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => \`
<span class="chip">
    <span class="chip__text">Football</span>
</span>
\``,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => \`
<span class="chip">
    <span class="chip__text">I</span>
</span>
\``,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => \`
<span class="chip">
    <span class="chip__text">Chip with the longest potentially possible content</span>
</span>
\``,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => \`
<span class="chip">
    <span class="chip__text">Football</span>
</span>

<span class="chip">
    <span class="chip__text">Basketball</span>
</span>

<span class="chip">
    <span class="chip__text">Baseball</span>
</span>

<span class="chip">
    <span class="chip__text">Hockey</span>
</span>

<span class="chip">
    <span class="chip__text">Tennis</span>
</span>

<span class="chip">
    <span class="chip__text">Golf</span>
</span>

<span class="chip">
    <span class="chip__text">Gymnastics</span>
</span>

<span class="chip">
    <span class="chip__text">Swimming</span>
</span>

<span class="chip">
    <span class="chip__text">Cricket</span>
</span>

<span class="chip">
    <span class="chip__text">Volleyball</span>
</span>

<span class="chip">
    <span class="chip__text">Rugby</span>
</span>
\``,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => \`
<ul>
    <li>
        <span class="chip">
            <span class="chip__text">Football</span>
        </span>
    </li>

    <li>
        <span class="chip">
            <span class="chip__text">Basketball</span>
        </span>
    </li>

    <li>
        <span class="chip">
            <span class="chip__text">Baseball</span>
        </span>
    </li>

    <li>
        <span class="chip">
            <span class="chip__text">Hockey</span>
        </span>
    </li>

    <li>
        <span class="chip">
            <span class="chip__text">Tennis</span>
        </span>
    </li>

    <li>
        <span class="chip">
            <span class="chip__text">Golf</span>
        </span>
    </li>

    <li>
        <span class="chip">
            <span class="chip__text">Gymnastics</span>
        </span>
    </li>

    <li>
        <span class="chip">
            <span class="chip__text">Swimming</span>
        </span>
    </li>

    <li>
        <span class="chip">
            <span class="chip__text">Cricket</span>
        </span>
    </li>

    <li>
        <span class="chip">
            <span class="chip__text">Volleyball</span>
        </span>
    </li>

    <li>
        <span class="chip">
            <span class="chip__text">Rugby</span>
        </span>
    </li>
</ul>
\``,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => \`
    <span class="chip" style="font-size: 200%;">
        <span class="chip__text">Large Text</span>
    </span>
\``,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => \`
    <span class="chip" style="letter-spacing: calc(14px * 0.12);">
        <span class="chip__text">Letter Spacing</span>
    </span>
\``,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => \`
<div dir="rtl">
    <span class="chip">
        <span class="chip__text">Football RTL</span>
    </span>
</div>
\``,...i.parameters?.docs?.source}}};const h=["typical","leastContent","mostContent","set","list","largeText","letterSpacing","RTL"];export{i as RTL,h as __namedExportsOrder,e as default,l as largeText,a as leastContent,t as letterSpacing,c as list,n as mostContent,p as set,s as typical};
