# EvoInfotip migration

## Composition

`EbayInfotipContent` and custom `EbayInfotipHost` composition are removed. Content is passed directly and the trigger is managed by `EvoInfotip`.

```diff
- <EbayInfotip aria-label="Important information" a11yCloseText="Dismiss infotip">
-   <EbayInfotipHeading>Heading</EbayInfotipHeading>
-   <EbayInfotipContent><p>Content</p></EbayInfotipContent>
- </EbayInfotip>
+ <EvoInfotip a11yIconText="Important information" a11yCloseText="Dismiss infotip">
+   <EvoInfotipHeading>Heading</EvoInfotipHeading>
+   <p>Content</p>
+ </EvoInfotip>
```

`EvoInfotipHeading` supports `as` and native heading attributes:

```tsx
<EvoInfotipHeading as="h2" id="shipping-heading">
  Shipping information
</EvoInfotipHeading>
```

## Prop changes

- `aria-label` → `a11yIconText`.
- `initialExpanded` → `defaultOpen`.
- `onExpand` and `onCollapse` → `onOpenChange(open)`.
- `pointer` → `placement`; directional suffixes change from `left`/`right` to logical `start`/`end` (for example, `top-left` → `top-start`).
- `noFlip` → `flip` with inverted meaning.
- `noShift` → `shift` with inverted meaning.
- `notInline` is removed. The infotip button does not wrap, so inline positioning is unnecessary.
- `icon` accepts React content rather than legacy icon-name strings. Use an `EvoIcon*` component.
- `overlayStyle` is removed; positioning is managed by Floating UI.
- `variant="modal"` and the exported `Variant` type are removed. Use an Evo dialog for modal content.

```diff
- <EbayInfotip
-   initialExpanded
-   pointer="top-left"
-   noFlip
-   onCollapse={handleCollapse}
- />
+ <EvoInfotip
+   defaultOpen
+   placement="top-start"
+   flip={false}
+   onOpenChange={(open) => !open && handleCollapse()}
+ />
```
