export default { title: "Skin/Link" };

export const base = () => `
<a href="https://www.ebay.com/urw/ZTE-AXON-7-Mini-32GB-Ion-Gold-Unlocked-Smartphone/product-reviews/230215749?_itm=222972816761">Link</a>
`;

export const action = () => `
<a class="action-link" href="https://www.ebay.com/?r=17">See all 17 Reviews</a>
`;

export const RTL = () => `
<div dir="rtl">
    <a class="action-link" href="https://www.ebay.com/?r=17">See all 17 Reviews</a>
</div>
`;

export const fake = () =>
    `<button class="fake-link" type="button">Button</button>`;

export const disabledFake = () =>
    `<button class="fake-link" disabled type="button">Button</button>`;

export const nav = () => `
<nav aria-labelledby="nav-link-heading">
    <h4 id="nav-link-heading" style="margin: 0 0 8px 0">Navigation</h4>
    <ul style="list-style-type: none; margin: 0; padding: 0">
        <li style="margin-bottom: 8px"><a class="nav-link" href="#link1">Link 1</a></li>
        <li style="margin-bottom: 8px"><a class="nav-link" href="#link2">Link 2</a></li>
        <li style="margin-bottom: 8px"><a class="nav-link" href="#link3">Link 3</a></li>
        <li style="margin-bottom: 8px"><a class="nav-link" href="#link4">Link 4</a></li>
        <li style="margin-bottom: 8px"><a class="nav-link" href="#link5">Link 5</a></li>
    </ul>
</nav>
`;

export const legal = () => `
<a class="legal-link" href="https://www.ebay.com/urw/ZTE-AXON-7-Mini-32GB-Ion-Gold-Unlocked-Smartphone/product-reviews/230215749?_itm=222972816761">Link</a>
`;

export const legalFake = () =>
    `<button class="fake-link legal-link" type="button">Button</button>`;

export const textSpacing = () => `
<a class="action-link demo-a11y-text-spacing" href="https://www.ebay.com/?r=17">Text Spacing</a>
`;

export const nested = () => `
<p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    <a href="https://www.ebay.com">tempor incididunt</a> ut labore et dolore
    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
    <a href="https://www.ebay.com">ullamco laboris</a> nisi ut aliquip ex ea
    commodo consequat. Duis aute irure dolor in reprehenderit in
    <a href="https://www.ebay.com">voluptate velit esse cillum</a> dolore eu
    fugiat nulla pariatur.
</p>
`;
