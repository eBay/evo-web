# evo-progress-bar migration guide

## Changed props

### `aria-label` → `a11yText`

`aria-label` is renamed to the required `a11yText` prop. The component maps `a11yText` to `aria-label`.

```diff
- <EbayProgressBar aria-label="Task progress" value={50} />
+ <EvoProgressBar a11yText="Task progress" value={50} />
```

### Previously unlabeled progress bars

Previously unlabeled usages must now provide an accessible label through `a11yText`.

```diff
- <EbayProgressBar value={50} />
+ <EvoProgressBar a11yText="Task progress" value={50} />
```

### `a11yText={null}` with alternative naming

Use `a11yText={null}` only when another accessible naming method is present, such as `aria-labelledby`.

```diff
- <EbayProgressBar aria-labelledby="upload-label" value={50} />
+ <EvoProgressBar
+   a11yText={null}
+   aria-labelledby="upload-label"
+   value={50}
+ />
```

### Indeterminate progress

Omitting `value` now renders native indeterminate progress instead of a zero-percent determinate bar.

```diff
- <EbayProgressBar aria-label="Loading" />
+ <EvoProgressBar a11yText="Loading" />
```

### Preserving the old zero-percent default

Consumers that need the old zero-percent default must pass `value={0}` explicitly.

```diff
- <EbayProgressBar aria-label="Task progress" />
+ <EvoProgressBar a11yText="Task progress" value={0} />
```
