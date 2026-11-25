export default { title: "Skin/Progress Bar" };

export const empty = () =>
    `<progress class="progress-bar" value="0" max="100">0%</progress>`;

empty.storyName = "Empty";

export const half = () =>
    `<progress class="progress-bar" value="50" max="100">50%</progress>`;

half.storyName = "Half";

export const full = () =>
    `<progress class="progress-bar" value="100" max="100">100%</progress>`;

full.storyName = "Full";

export const fluid = () =>
    `<progress class="progress-bar progress-bar--fluid" value="50" max="100">50%</progress>`;

fluid.storyName = "Fluid";

export const animated = () => `
<progress class="progress-bar progress-bar--fluid" value="0" max="100" id="progress-bar-dynamic">0%</progress>
<div>
    <button class="button button--secondary progress-bar-toggle" type="button" data-progress-play-button-for="progress-bar-dynamic">Play/Pause</button>
    <button class="button button--secondary progress-bar-reset" type="button" data-progress-reset-button-for="progress-bar-dynamic">Reset</button>
</div>
`;

animated.storyName = "Animated";
