const d={title:"Skin/Card/Disabled"},e=()=>`
<span class="card card--aspect-16-9">
    <div class="card__media">
        <img src="/img/cards-card.jpeg" alt="Sports trading cards" class="card__hero-image">
    </div>
    <div class="card__main">
        <div class="card__description">
            Hockey cards collected by enthusiasts who treat them like fine wine – stored in temperature-controlled cellars and discussed in hushed, reverent tones.
        </div>
        <div class="card__action">
            <button class="btn btn--primary btn--fluid" tabindex="-1" disabled>See Details</button>
        </div>
    </div>
</span>
`,a=()=>`
<button class="card card--aspect-16-9" disabled>
    <div class="card__media">
        <img src="/img/cards-card.jpeg" alt="Sports trading cards" class="card__hero-image">
    </div>
    <div class="card__main">
        <div class="card__description">
            Hockey cards collected by enthusiasts who treat them like fine wine – stored in temperature-controlled cellars and discussed in hushed, reverent tones.
        </div>
    </div>
</button>
`,s=()=>`
<a class="card card--aspect-16-9" href="" tabindex="-1">
    <div class="card__media">
        <img src="/img/cards-card.jpeg" alt="Sports trading cards" class="card__hero-image">
    </div>
    <div class="card__main">
        <div class="card__description">
            Hockey cards collected by enthusiasts who treat them like fine wine – stored in temperature-controlled cellars and discussed in hushed, reverent tones.
        </div>
    </div>
</a>
`;e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => \`
<span class="card card--aspect-16-9">
    <div class="card__media">
        <img src="/img/cards-card.jpeg" alt="Sports trading cards" class="card__hero-image">
    </div>
    <div class="card__main">
        <div class="card__description">
            Hockey cards collected by enthusiasts who treat them like fine wine – stored in temperature-controlled cellars and discussed in hushed, reverent tones.
        </div>
        <div class="card__action">
            <button class="btn btn--primary btn--fluid" tabindex="-1" disabled>See Details</button>
        </div>
    </div>
</span>
\``,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => \`
<button class="card card--aspect-16-9" disabled>
    <div class="card__media">
        <img src="/img/cards-card.jpeg" alt="Sports trading cards" class="card__hero-image">
    </div>
    <div class="card__main">
        <div class="card__description">
            Hockey cards collected by enthusiasts who treat them like fine wine – stored in temperature-controlled cellars and discussed in hushed, reverent tones.
        </div>
    </div>
</button>
\``,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => \`
<a class="card card--aspect-16-9" href="" tabindex="-1">
    <div class="card__media">
        <img src="/img/cards-card.jpeg" alt="Sports trading cards" class="card__hero-image">
    </div>
    <div class="card__main">
        <div class="card__description">
            Hockey cards collected by enthusiasts who treat them like fine wine – stored in temperature-controlled cellars and discussed in hushed, reverent tones.
        </div>
    </div>
</a>
\``,...s.parameters?.docs?.source}}};const r=["internallyActionable","selfActionableButton","selfActionableLink"];export{r as __namedExportsOrder,d as default,e as internallyActionable,a as selfActionableButton,s as selfActionableLink};
