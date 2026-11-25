export default { title: "Skin/Skeleton/Composite" };

export const tile = () =>
    `<div class="skeleton skeleton--blue" role="img" aria-label="loading" style="width: 225px;">
        <div class="skeleton__image" style="width: 225px; height: 225px"></div>
        <div class="skeleton__text  skeleton__text--multiline"></div>
    </div>`;

export const inlineTiles = () =>
    `<div class="skeleton skeleton--purple" role="img" aria-label="loading">
        <span style="width: 225px; display: inline-block;">
            <div class="skeleton__image" style="width: 225px; height: 225px"></div>
            <div class="skeleton__text skeleton__text--multiline"></div>
        </span>
        <span style="width: 225px; display: inline-block;">
            <div class="skeleton__image" style="width: 225px; height: 225px"></div>
            <div class="skeleton__text skeleton__text--multiline"></div>
        </span>
        <span style="width: 225px; display: inline-block;">
            <div class="skeleton__image" style="width: 225px; height: 225px"></div>
            <div class="skeleton__text skeleton__text--multiline"></div>
        </span>
    </div>`;

export const inlineSkeletons = () =>
    `<div class="skeleton skeleton--green" role="img" aria-label="loading">
        <span class="skeleton__avatar"></span>
        <span class="skeleton__text  skeleton__text--multiline"
        style="width: 200px; vertical-align: top;"></span>
    </div>`;

export const blockSkeletons = () =>
    `<div class="skeleton skeleton--on-secondary" role="img" aria-label="loading">
        <div class="skeleton__button"></div>
        <div class="skeleton__button"></div>
    </div>`;

export const viewTransition = () =>
    `<button type="button" class="button skeleton-trigger">Load content</button>
    <div class="skeleton" role="img" aria-label="loading" style="display: flex;">
        <span id="skeleton-transition-0" class="skeleton__image"
        style="height: 200px; width: 200px; view-transition-name: skeleton-transition-0"></span>
        <span id="skeleton-transition-1" class="skeleton__image"
        style="height: 200px; width: 200px; view-transition-name: skeleton-transition-1"></span>
        <span id="skeleton-transition-2" class="skeleton__image"
        style="height: 200px; width: 200px; view-transition-name: skeleton-transition-2"></span>
    </div>`;
