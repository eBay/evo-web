export default { title: "Skin/Star Range" };

const script = `
<script>
    document.querySelectorAll('.star-range-demo').forEach(wrapper => {
        const input = wrapper.querySelector('input');
        wrapper.style.setProperty('--value', input.value);
        input.addEventListener('input', e => {
            wrapper.style.setProperty('--value', e.target.value);
        });
    });
</script>
`;

export const defaultStarRange = () => `
<label for="star-range-default">Rate this product</label>
<div class="star-range star-range-demo" style="--value: 1">
    <input id="star-range-default" class="star-range__input" type="range" min="1" max="5" value="1" step="1" aria-label="Rate this product">
</div>
${script}
`;

export const threeStars = () => `
<label for="star-range-three">Rate this product</label>
<div class="star-range star-range-demo" style="--value: 3">
    <input id="star-range-three" class="star-range__input" type="range" min="1" max="5" value="3" step="1" aria-label="Rate this product">
</div>
${script}
`;

export const fiveStars = () => `
<label for="star-range-five">Rate this product</label>
<div class="star-range star-range-demo" style="--value: 5">
    <input id="star-range-five" class="star-range__input" type="range" min="1" max="5" value="5" step="1" aria-label="Rate this product">
</div>
${script}
`;

export const RTL = () => `
<div dir="rtl">
    <label for="star-range-rtl">Rate this product</label>
    <div class="star-range star-range-demo" style="--value: 3">
        <input id="star-range-rtl" class="star-range__input" type="range" min="1" max="5" value="3" step="1" aria-label="Rate this product">
    </div>
</div>
${script}
`;
