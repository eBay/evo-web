# EvoSectionTitle

Replace `@ebay/ui-core-react/ebay-section-title` imports with `@evo-web/react/section-title`. Rename `EbaySectionTitle` to `EvoSectionTitle`, `EbaySectionTitleTitle` to `EvoSectionTitleHeading`, and other exported `Ebay*` parts to their `Evo*` counterparts.

The old component scanned children and created the title wrapper automatically. Compose `EvoSectionTitleContent` explicitly around `EvoSectionTitleHeading` and optional `EvoSectionTitleSubtitle`. Place optional `EvoSectionTitleInfo`, `EvoSectionTitleCta`, or `EvoSectionTitleOverflow` after the wrapper in reading order. The section no longer selects a single action from `href`, info, and overflow; include the part you need.

Move the root `href` and `ctaText` props to `EvoSectionTitleCta` as `href` and children. The CTA requires visible descriptive text. `EvoSectionTitleHeading` defaults to `<h2>`; use `as` when the page hierarchy calls for another heading level.

```tsx
// Before
<EbaySectionTitle href="/saved-searches" ctaText="See all saved searches">
  <EbaySectionTitleTitle>Saved searches</EbaySectionTitleTitle>
  <EbaySectionTitleSubtitle>New listings</EbaySectionTitleSubtitle>
</EbaySectionTitle>

// After
<EvoSectionTitle>
  <EvoSectionTitleContent>
    <EvoSectionTitleHeading>Saved searches</EvoSectionTitleHeading>
    <EvoSectionTitleSubtitle>New listings</EvoSectionTitleSubtitle>
  </EvoSectionTitleContent>
  <EvoSectionTitleCta href="/saved-searches">
    See all saved searches
  </EvoSectionTitleCta>
</EvoSectionTitle>
```
