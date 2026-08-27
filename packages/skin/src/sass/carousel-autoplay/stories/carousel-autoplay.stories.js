import { carousel } from "./markup";

export default { title: "Skin/Carousel Autoplay" };

export const playing = () => carousel();

export const paused = () => carousel({ paused: true });

export const imageTreatment = () =>
    carousel({
        listModifiers: "carousel-autoplay__list--image-treatment",
        body: ["aztec-pyramid", "falls", "mountain", "shoes"]
            .map(
                (name) =>
                    `<li class="carousel-autoplay__item"><img alt="${name}" src="https://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/${name}.jpeg" /></li>`,
            )
            .join("\n            "),
    });
