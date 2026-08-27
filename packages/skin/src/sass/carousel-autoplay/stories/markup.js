export const slides = (count) =>
    Array.from(
        { length: count },
        (_, i) => `<li class="carousel-autoplay__item">Slide ${i + 1}</li>`,
    ).join("\n            ");

export const carousel = ({
    modifiers = "",
    listModifiers = "",
    paused = false,
    body = slides(4),
} = {}) => `
<div class="carousel-autoplay ${modifiers}" role="group" aria-roledescription="carousel" aria-label="Featured deals">
    <button class="icon-btn carousel-autoplay__control carousel-autoplay__control--prev" type="button" aria-label="Previous slide">
        <svg aria-hidden="true" class="icon icon--16">
            <use href="#icon-chevron-left-16"></use>
        </svg>
    </button>
    <ul class="carousel-autoplay__list demo-carousel-items demo-carousel-items--wide ${listModifiers}" aria-live="${paused ? "polite" : "off"}">
        ${body}
    </ul>
    <button class="icon-btn carousel-autoplay__control carousel-autoplay__control--next" type="button" aria-label="Next slide">
        <svg aria-hidden="true" class="icon icon--16">
            <use href="#icon-chevron-right-16"></use>
        </svg>
    </button>
    <button class="icon-btn carousel-autoplay__playback" type="button" aria-label="${paused ? "Play" : "Pause"}">
        <svg aria-hidden="true" class="icon icon--24">
            <use href="#icon-${paused ? "play" : "pause"}-24"></use>
        </svg>
    </button>
</div>
`;
