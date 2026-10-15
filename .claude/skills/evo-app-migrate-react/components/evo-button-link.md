# ebay-fake-link → evo-button

`@evo-web/react` has no fake link component. Use `EvoButton` with `variant="link"`, which renders a `<button>` styled as a text link.

```diff
- import { EbayFakeLink } from "@ebay/ui-core-react/ebay-fake-link";
+ import { EvoButton } from "@evo-web/react/button";

- <EbayFakeLink onClick={showDetails}>View seller details</EbayFakeLink>
+ <EvoButton variant="link" onClick={showDetails}>View seller details</EvoButton>
```

- `onEscape`, `disabled` and the `type="button"` default carry over unchanged.
- `variant="standalone"` has no equivalent; drop it. It added a class that Skin never styled on a button.
