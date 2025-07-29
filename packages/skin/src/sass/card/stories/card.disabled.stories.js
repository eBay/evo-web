export default { title: "Skin/Card/Disabled" };

export const internallyActionable = () => `
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
`;

export const selfActionableButton = () => `
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
`;

export const selfActionableLink = () => `
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
`;
