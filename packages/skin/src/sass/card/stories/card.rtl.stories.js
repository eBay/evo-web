export default { title: "Skin/Card/RTL" };

export const vertical = () => `
<div dir="rtl">
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

            <div class="card__footer">
                <button class="btn btn--primary btn--fluid">See Details</button>
            </div>
        </div>
    </span>
</div>
`;

export const horizontal = () => `
<div dir="rtl">
    <span class="card card--horizontal">
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

            <div class="card__footer">
                <button class="btn btn--primary">See Details</button>
            </div>
        </div>
    </span>
</div>
`;