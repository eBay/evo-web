export default { title: "Skin/Card/Hybrid Actionable" };

export const vertical = () => `
<div class="card card--outlined">
    <div class="card__media">
        <img src="/img/cards-card.jpeg" alt="Sports trading cards" class="card__hero-image">
    </div>
    <div class="card__main">
        <div class="card__overline">
            <svg class="icon icon--16" height="16" width="16">
                <use href="#icon-authenticity-guarantee-filled-16-colored" />
            </svg>
            <span class="card__overline-text">Authenticity Guaranteed</span>
        </div>
        <div class="card__title">Authentic Rookie Cards</div>
        <div class="card__description">
            Rookie cards that serve as a hedge against the apocalypse – when society collapses, surely someone will trade food for a mint Luka Dončić card.
        </div>

        <div class="card__action">
            <button class="btn btn--primary btn--fluid">See Details</button>
        </div>
    </div>
</div>
`;

export const horizontal = () => `
<div class="card card--horizontal card--outlined">
    <div class="card__media">
        <img src="/img/cards-card.jpeg" alt="Sports trading cards" class="card__hero-image">
    </div>
    <div class="card__main">
        <div class="card__overline">
            <svg class="icon icon--16" height="16" width="16">
                <use href="#icon-authenticity-guarantee-filled-16-colored" />
            </svg>
            <span class="card__overline-text">Authenticity Guaranteed</span>
        </div>
        <div class="card__title">Authentic Rookie Cards</div>
        <div class="card__description">
            Rookie cards that serve as a hedge against the apocalypse – when society collapses, surely someone will trade food for a mint Luka Dončić card.
        </div>

        <div class="card__action">
            <button class="btn btn--primary">See Details</button>
        </div>
    </div>
</div>
`;
