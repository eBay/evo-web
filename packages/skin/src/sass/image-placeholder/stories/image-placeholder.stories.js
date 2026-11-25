export default { title: "Skin/Image Placeholder" };

export const insideHeading = () => `
<h2>
    <svg aria-label="image not found" role="img" class="image-placeholder">
        <use href="#image-placeholder"></use>
    </svg>
</h2>
`;

export const RTLInsideHeading = () => `
<div dir="rtl">
    <h2>
        <svg aria-label="image not found" role="img" class="image-placeholder">
            <use href="#image-placeholder"></use>
        </svg>
    </h2>
</div>
`;

export const differentWidths = () => `
<p>
    <svg aria-label="image not found" role="img" class="image-placeholder" style="border: 1px solid black; width: 50px; height: 50px">
        <use href="#image-placeholder"></use>
    </svg>
</p>
`;

export const inContainerVariableWidth = () => `
<div style="border: 1px dotted black; width: 150px; height: 150px">
    <svg aria-label="image not found" role="img" class="image-placeholder" >
        <use href="#image-placeholder"></use>
    </svg>
</div>
`;

export const base = () => `
<svg aria-label="image not found" class="image-placeholder" role="img">
    <use href="#image-placeholder"></use>
</svg>
`;

export const variableWidthsWithBorders = () => `
<div style="border: 1px solid var(--color-border-accent); height: 50px; width: 50px">
    <svg aria-label="image not found" class="image-placeholder" role="img">
        <use href="#image-placeholder"></use>
    </svg>
</div>
<div>
    <svg aria-label="image not found" class="image-placeholder" style="border: 1px solid var(--color-border-attention); height: 150px; width: 150px" role="img">
        <use href="#image-placeholder"></use>
    </svg>
</div>
<div>
    <svg aria-label="image not found" class="image-placeholder" style="border: 1px dotted var(--color-border-attention); height: 250px; width: 250px" role="img">
        <use href="#image-placeholder"></use>
    </svg>
</div>
`;
