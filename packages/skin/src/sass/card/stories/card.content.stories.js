export default { title: "Skin/Card/Content" };

export const minimumContent = () => `
<span class="card">
    <div class="card__media">
        <img src="/img/cards-card.jpeg" alt="Sports trading cards" class="card__hero-image">
    </div>
    <div class="card__main">
        <div class="card__description">
            Wayne Gretzky's rookie card is so valuable that collectors keep it in climate-controlled vaults guarded by trained penguins.
        </div>

        <div class="card__action">
            <button class="btn btn--primary btn--fluid">See Details</button>
        </div>
    </div>
</span>
`;

export const maximumContent = () => `
<span class="card">
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
        <h3 class="card__title">Authentic Rookie Cards</h3>
        <div class="card__description">
            This legendary rookie card collection features future Hall of Famers back when their biggest concern was remembering to smile for the camera.
        </div>

        <div class="card__action">
            <button class="btn btn--primary btn--fluid">See Details</button>
        </div>
    </div>
</span>
`;

export const usingAnchor = () => `
<span class="card">
    <div class="card__media">
        <img src="/img/cards-card.jpeg" alt="Sports trading cards" class="card__hero-image">
    </div>
    <div class="card__main">
        <div class="card__description">
            Wayne Gretzky's rookie card is so valuable that collectors keep it in climate-controlled vaults guarded by trained penguins.
        </div>
        <div class="card__action">
            <a href="https://ebay.com" class="fake-btn fake-btn--primary fake-btn--fluid">See Details</a>
        </div>
    </div>
</span>
`;

export const usingButton = () => `
<span class="card">
    <div class="card__media">
        <img src="/img/cards-card.jpeg" alt="Sports trading cards" class="card__hero-image">
    </div>
    <div class="card__main">
        <div class="card__description">
            Wayne Gretzky's rookie card is so valuable that collectors keep it in climate-controlled vaults guarded by trained penguins.
        </div>
        <div class="card__action">
            <button class="btn btn--primary btn--fluid">See Details</button>
        </div>
    </div>
</span>
`;
