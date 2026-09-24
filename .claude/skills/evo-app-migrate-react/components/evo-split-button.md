# ebay-split-button → evo-split-button

Use named action and menu components. `EvoSplitButton` shares priority, size, transparent, borderless, and disabled treatment across both controls. The action takes ordinary `EvoButton` action or link props; the menu takes `EvoMenuButton` visibility and selection behavior.

**Before:**

```tsx
import {
  EbaySplitButton,
  EbayMenuButtonItem,
} from "@ebay/ui-core-react/ebay-split-button";

<EbaySplitButton
  a11yMenuText="More save options"
  onClick={save}
  onSelect={handleChoice}
>
  Save
  <EbayMenuButtonItem>Save as</EbayMenuButtonItem>
</EbaySplitButton>;
```

**After:**

```tsx
import {
  EvoSplitButton,
  EvoSplitButtonAction,
  EvoSplitButtonMenu,
  EvoMenuButtonItem,
} from "@evo-web/react/split-button";

<EvoSplitButton priority="primary" a11yMenuText="More save options">
  <EvoSplitButtonAction onClick={save}>Save</EvoSplitButtonAction>
  <EvoSplitButtonMenu collapseOnSelect>
    <EvoMenuButtonItem onSelect={saveAs}>Save as</EvoMenuButtonItem>
  </EvoSplitButtonMenu>
</EvoSplitButton>;
```

Use `href` on `EvoSplitButtonAction` for navigation. When it has `bodyState="loading"`, give it `a11yLoadingText`. Use `open` / `onOpenChange` on `EvoSplitButtonMenu` for controlled visibility. For radio and checkbox menus, put `EvoMenuButtonRadioItem` or `EvoMenuButtonCheckboxItem` in their corresponding `EvoMenuRadioGroup` or `EvoMenuCheckboxGroup` and manage selected values with `selected` / `defaultSelected` and `onSelectedChange`. Index-based `onSelect` and `onChange` callbacks are replaced with item or group callbacks.
