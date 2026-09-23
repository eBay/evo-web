---
type: a11y
impact: med
effort: low
site: packages/evo-marko/src/tags/evo-number-input/index.marko › decrement and increment onClick handlers
---

# Return focus to the input after Marko number-input paddle clicks

The `evo-marko` number input updates its value and invokes `onIncrement` or `onDecrement`, but neither paddle handler returns focus to the native input. The legacy React implementation also lacks explicit focus restoration, while Skin supplies only CSS and has no JavaScript focus behavior. The number-input accessibility page requires pointer activation to adjust the value and return focus to the input.

Check: `! grep -n "focus" packages/evo-marko/src/tags/evo-number-input/index.marko && ! grep -n "focus" packages/ebayui-core-react/src/ebay-number-input/number-input.tsx && test -z "$(find packages/skin/src/sass/number-input -type f -name '*.js' ! -path '*/stories/*' -print)" && grep -n "onClick" packages/evo-marko/src/tags/evo-number-input/index.marko && grep -n "return focus" src/routes/_index/components/number-input/accessibility+page.marko`.
