# @evo-web/react

## 0.1.0

### Minor Changes

- [#706](https://github.com/eBay/evo-web/pull/706) [`d17e5b8`](https://github.com/eBay/evo-web/commit/d17e5b83cf67eb06c46927a9ca29902d3814027d) Thanks [@ArtBlue](https://github.com/ArtBlue)! - Add `pay-by-bank-uk-24-colored` icon; deprecate `bank-group-logo-24-colored` (use `pay-by-bank-uk-24-colored` instead).

- [#683](https://github.com/eBay/evo-web/pull/683) [`ce1cd0d`](https://github.com/eBay/evo-web/commit/ce1cd0dea5864ba29c0c8513e466e62cc31ee1a4) Thanks [@LuLaValva](https://github.com/LuLaValva)! - Badge updates

## 0.0.9

### Patch Changes

- [#688](https://github.com/eBay/evo-web/pull/688) [`a1b4ffa`](https://github.com/eBay/evo-web/commit/a1b4ffa64aca759843f1da1a3f7be197f01193c4) Thanks [@HenriqueLimas](https://github.com/HenriqueLimas)! - Add EvoCCD component.

- [#699](https://github.com/eBay/evo-web/pull/699) [`c6f9113`](https://github.com/eBay/evo-web/commit/c6f91132215ba3eb05d8c488210accfb271c63ba) Thanks [@HenriqueLimas](https://github.com/HenriqueLimas)! - Fix test noise and flaky carousel scroll test.
  - `@evo-web/react`: Guard `EvoIcon`'s missing-provider `console.warn` with `process.env.NODE_ENV === 'development'` so it is silent in Vitest (`NODE_ENV=test`) without removing the warning from development builds.
  - `@ebay/ebayui-core`: Fix flaky `ebay-carousel` browser test — "when it is scrolled to the second slide" `beforeEach` was calling `waitForCarouselUpdate()` which resolved immediately from the init render's `move` event, before the 640 ms scroll debounce fired. Replaced with `vi.advanceTimersByTimeAsync(700)` to deterministically trigger the debounce and flush the resulting Marko re-render.

## 0.0.8

### Patch Changes

- [#687](https://github.com/eBay/evo-web/pull/687) [`5e336ce`](https://github.com/eBay/evo-web/commit/5e336cec181e098dab4c63c7b62df96259c509d5) Thanks [@HenriqueLimas](https://github.com/HenriqueLimas)! - Add EvoConfirmDialog component.

## 0.0.7

### Patch Changes

- [#674](https://github.com/eBay/evo-web/pull/674) [`afb69ca`](https://github.com/eBay/evo-web/commit/afb69cad6d4b1f583fb5836612d1874a08e59b80) Thanks [@HenriqueLimas](https://github.com/HenriqueLimas)! - Add `EvoIconButton` component to `@evo-web/react`

- [#669](https://github.com/eBay/evo-web/pull/669) [`94c6de9`](https://github.com/eBay/evo-web/commit/94c6de9193eaf288fa6100e48c8fc7b50af3363c) Thanks [@HenriqueLimas](https://github.com/HenriqueLimas)! - Add `EvoAlertDialog` component.

## 0.0.6

### Patch Changes

- [#666](https://github.com/eBay/evo-web/pull/666) [`5e4ddfd`](https://github.com/eBay/evo-web/commit/5e4ddfd6bf17260311cc6c5c5c1cd3757b7e9c32) Thanks [@HenriqueLimas](https://github.com/HenriqueLimas)! - Add `EvoBadge` component migrated from `@ebay/ebayui-core-react/ebay-badge`

- [#653](https://github.com/eBay/evo-web/pull/653) [`bdccee5`](https://github.com/eBay/evo-web/commit/bdccee5101ffb11e483811d84bf8c9f08dad4992) Thanks [@HenriqueLimas](https://github.com/HenriqueLimas)! - Add EvoAccordion with id-based controlled and uncontrolled composition APIs.

- [#662](https://github.com/eBay/evo-web/pull/662) [`c90d301`](https://github.com/eBay/evo-web/commit/c90d3016b43195bc3f4b24dc7de9cc3773d4d8e0) Thanks [@HenriqueLimas](https://github.com/HenriqueLimas)! - Add `EvoBreadcrumbs` component

- [#663](https://github.com/eBay/evo-web/pull/663) [`f255a07`](https://github.com/eBay/evo-web/commit/f255a07a45a4fc53d58960ba8dcbdc3c51fc4768) Thanks [@HenriqueLimas](https://github.com/HenriqueLimas)! - Add `as` prop to `EvoButton` anchor variant to support custom link components (e.g. React Router `Link`, Next.js `Link`). Only applies when `href` is provided.

- [#660](https://github.com/eBay/evo-web/pull/660) [`d501df1`](https://github.com/eBay/evo-web/commit/d501df1e4b0d882791b41849e037361788f7a809) Thanks [@HenriqueLimas](https://github.com/HenriqueLimas)! - feat(avatar): add EvoAvatar and EvoAvatarImage components

## 0.0.5

### Patch Changes

- [#640](https://github.com/eBay/evo-web/pull/640) [`6ed39ad`](https://github.com/eBay/evo-web/commit/6ed39ad0fa46c8b462cdaa98fade268347f2ebaa) Thanks [@HenriqueLimas](https://github.com/HenriqueLimas)! - Add evo-details component

- [#641](https://github.com/eBay/evo-web/pull/641) [`8289b4e`](https://github.com/eBay/evo-web/commit/8289b4e888584d586edb79589373868b47e79c71) Thanks [@HenriqueLimas](https://github.com/HenriqueLimas)! - switch to component-level subpath imports for tree-shaking; remove barrel export; rename src dirs and icon files to drop evo- prefix

## 0.0.4

### Patch Changes

- [#563](https://github.com/eBay/evo-web/pull/563) [`852b928`](https://github.com/eBay/evo-web/commit/852b9285c9092f0fb1d514892322d859848ba46e) Thanks [@HenriqueLimas](https://github.com/HenriqueLimas)! - feat(evo-react): add icon components

## 0.0.3

### Patch Changes

- [`9f81411`](https://github.com/eBay/evo-web/commit/9f81411c825c481e6c93ce0e62869f32dc8ba136) Thanks [@HenriqueLimas](https://github.com/HenriqueLimas)! - fix(evo-react): add .mjs extension to @ebay/skin/button import

## 0.0.2

### Patch Changes

- [`ad7b314`](https://github.com/eBay/evo-web/commit/ad7b3144745a7f1cb2fe4d0cbc2c884c4e5117bf) Thanks [@HenriqueLimas](https://github.com/HenriqueLimas)! - fix(evo-react): include dist folder in published package

## 0.0.1

### Patch Changes

- [#525](https://github.com/eBay/evo-web/pull/525) [`4b00ffc`](https://github.com/eBay/evo-web/commit/4b00ffcaf64291002926bb0f43526234f6315396) Thanks [@HenriqueLimas](https://github.com/HenriqueLimas)! - feat(evo-react): add EvoButton component

## Unreleased

Initial package setup
