export default { title: "Skin/Section Notice/Variants" };

export const attention = () => `
<section class="section-notice section-notice--attention" role="region" aria-label="Attention" aria-roledescription="Notice">
    <div class="section-notice__header">
        <svg role="img" aria-label="Attention" class="icon icon--16">
            <use href="#icon-attention-filled-16"></use>
        </svg>
    </div>
    <div class="section-notice__main">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
</section>
`;

export const confirmation = () => `
<section class="section-notice section-notice--confirmation" role="region" aria-label="Confirmation" aria-roledescription="Notice">
    <div class="section-notice__header">
        <svg role="img" aria-label="Confirmation" class="icon icon--16">
            <use href="#icon-confirmation-filled-16"></use>
        </svg>
    </div>
    <div class="section-notice__main">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
</section>
`;

export const information = () => `
<section class="section-notice section-notice--information" role="region" aria-label="Information" aria-roledescription="Notice">
    <div class="section-notice__header">
        <svg role="img" aria-label="Information" class="icon icon--16">
            <use href="#icon-information-filled-16"></use>
        </svg>
    </div>
    <div class="section-notice__main">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
</section>
`;

export const warning = () => `
<section class="section-notice section-notice--warning" role="region" aria-label="Warning" aria-roledescription="Notice">
    <div class="section-notice__header">
        <svg role="img" aria-label="Warning" class="icon icon--16">
            <use href="#icon-attention-triangle-filled-16"></use>
        </svg>
    </div>
    <div class="section-notice__main">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
</section>
`;
