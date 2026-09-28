export default { title: "Skin/Section Notice/Variants" };

export const attention = () => `
<div class="section-notice section-notice--attention" role="region" aria-roledescription="Notice">
    <div class="section-notice__header" role="region" aria-roledescription="Notice">
        <svg aria-hidden="true" class="icon icon--16">
            <use href="#icon-attention-filled-16"></use>
        </svg>
    </div>
    <div class="section-notice__main">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
</div>
`;

export const confirmation = () => `
<div class="section-notice section-notice--confirmation" role="region" aria-roledescription="Notice">
    <div class="section-notice__header" role="region" aria-roledescription="Notice">
        <svg aria-hidden="true" class="icon icon--16">
            <use href="#icon-confirmation-filled-16"></use>
        </svg>
    </div>
    <div class="section-notice__main">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
</div>
`;

export const information = () => `
<div class="section-notice section-notice--information" role="region" aria-roledescription="Notice">
    <div class="section-notice__header" role="region" aria-roledescription="Notice">
        <svg aria-hidden="true" class="icon icon--16">
            <use href="#icon-information-filled-16"></use>
        </svg>
    </div>
    <div class="section-notice__main">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
</div>
`;

export const warning = () => `
<div class="section-notice section-notice--warning" role="region" aria-roledescription="Notice">
    <div class="section-notice__header" role="region" aria-roledescription="Notice">
        <svg aria-hidden="true" class="icon icon--16">
            <use href="#icon-attention-triangle-filled-16"></use>
        </svg>
    </div>
    <div class="section-notice__main">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
</div>
`;
