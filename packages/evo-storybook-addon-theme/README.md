# @evo-web/storybook-addon-theme

Private Storybook addon that keeps the Evo Web manager, Docs renderer, and component preview synchronized across Light, Dark, and System color schemes.

Register the addon in a Storybook `main` configuration:

```js
export default {
  addons: ["@evo-web/storybook-addon-theme"],
};
```

The addon provides the Evo Web manager theme and logo, the color-scheme toolbar, Evo token overrides for explicit selections, live system-theme updates, and the shared preview layout. Stories are vertically centered by default while retaining their natural horizontal alignment; individual stories can override Storybook's `layout` parameter when needed.
