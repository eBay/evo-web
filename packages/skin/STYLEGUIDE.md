# Style Guide

When contributing to Skin, please bear the following guidelines in mind:

- Ensure all markup adheres to our [accessibility patterns](https://ebay.gitbooks.io/mindpatterns/content/)
- Ensure all markup is valid HTML
- Leverage ARIA roles, states and properties for styling hooks wherever possible. This safeguards against non-accessible markup (NOTE: this will increase specificity, but we accept this as a worthwhile trade off)
- Use BEM syntax for modifiers (double-dash) and nested classes (double-underscore)
- Use the `<svg>` tag for icons
- Never use the `<i>` tag for icons
- Harness CSS margin-collapse wherever possible.
- Do not use presentational class names, e.g. `.btn--green` should be `.btn--secondary` for example
- Do not combine classes into a single class name, e.g. `btn-sec` should be `btn btn--sec`, this allows cascades without advanced attribute selectors or pre-processors
- Do not chain BEM modifiers (e.g. `.btn--large.btn--primary`). This is a code smell.
- Do not use ambiguous or global class names, e.g. `.large` should be `.btn--large`
- Do not use class `.disabled` to disable buttons or form elements, use the HTML `disabled` property instead
- Do not wrap inputs with labels, use explicit labels instead (e.g. use the `for` and `id` attributes)
- Do not use `href="#"` or `href="javascript"` in examples, use `href="http://www.ebay.com"` or any other dummy URL
- Every `<img>` tag must have an `alt` attribute, with **no** exceptions. The value can be an empty string for presentational images.
- Avoid naming conflicts with other grid systems (e.g. Bootstap Grids)
- Keep LESS pre-processor usage restricted to variables, mixins and basic nesting (see below). 9 times out of 10 advanced features of pre-processors can be avoided by using CSS properly.
- Avoid too much nesting/indenting of LESS selectors as it can reduce human scan-ability of code and can also result in suboptimal compiled CSS. Try and restrict nesting to pseudo selectors only (e.g. `:focus`, `::after`).
- Avoid over specificity (unless required for accessibility safeguarding). The fewer rules required to check for a given element, the faster style resolution will be. This is the key to dramatically increasing performance.
  [https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Writing_efficient_CSS](https://web.archive.org/web/20161029110643/https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Writing_efficient_CSS)
- Please do not commit commented out code to production.
