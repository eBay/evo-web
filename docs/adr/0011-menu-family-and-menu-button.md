# 11. Menu Family and Menu Button

**Date:** 2026-11-12

## Status

Proposed

## Context

Skin has two menu modules that each try to cover every kind of menu. `menu` styles a list of actions, a list of filter choices (`menu--filter`) and, through the deprecated `fake-menu` classes, a list of links. `menu-button` adds a trigger and a popup to all three, and `filter-menu-button` repeats the filter case with its own trigger, popup and items. The three menus have different contracts: an action menu runs commands, a filter menu narrows a result set, and a navigation menu is a list of links. One module boundary around all three hides those differences, as ADR 0010 describes for the `fake-*` patterns.

The current markup also disagrees with itself about accessibility:

- `fake-menu-button` sets `aria-haspopup="true"`, which announces a menu, but opens a list of links.
- `filter-menu-button` opens a `role="menu"` popup but sets no `aria-haspopup`.
- The filter chip used with `menu-button--filter` sets `aria-pressed`, which describes a toggle, on a button that opens a menu.
- No trigger points at its popup with `aria-controls`, and no popup has an accessible name.

Issues #446, #480 and #481 ask for Action Menu, Filter Menu and Navigation Menu as separate components. Ian McBurnie's comment on #446 (2026-11-10) proposes three top-level menu modules, no per-menu trigger modules, and one shared trigger.

## Decision

The static layer has three menu modules, opened by the existing `menu-button` module:

| Module            | Contents                                                           | Status                                                           |
| ----------------- | ------------------------------------------------------------------ | ---------------------------------------------------------------- |
| `action-menu`     | Commands, plus checkable actions marked with a small trailing tick | New                                                              |
| `filter-menu`     | Radio or checkbox choices that narrow a result set                 | Existing, now documented                                         |
| `navigation-menu` | Links, with action buttons permitted                               | Existing, from ADR 0010                                          |
| `menu-button`     | A trigger button and the menu it opens                             | Existing; gains the `__dropdown` element, older parts deprecated |

`menu-button` opens only the three menus. A generic `popover-button` was considered first; the team chose `menu-button` on 2026-11-20 so that one component is not stretched over every kind of popup with very different triggers. `listbox-button`, `infotip` and tooltips keep their own triggers. The browser Popover API is not used.

`menu-button` has two parts. The `.menu-button` wrapper holds the show/hide rule, keyed on its trigger's `aria-expanded="true"`. The dropdown surface is its own element, `.menu-button__dropdown`. It sits beside the deprecated `.menu-button__menu`; the two never match the same markup.

The trigger is whatever button sits inside the wrapper. Its look comes from that button's own module: `button`, `icon-button` or `filter-chip`. `menu-button` adds no trigger class.

| To build                           | Trigger                   | Content inside `.menu-button__dropdown` |
| ---------------------------------- | ------------------------- | --------------------------------------- |
| A button that opens actions        | `button` or `icon-button` | `action-menu`                           |
| A button that opens filter choices | `filter-chip`             | `filter-menu`                           |
| A button that opens links          | `button` or `icon-button` | `navigation-menu`                       |

The dropdown surface follows the Evo Design System Figma file: elevated background, `--border-radius-100` (16px) and `--bubble-shadow`. The deprecated `.menu-button__menu` keeps its 8px radius.

### Accessibility rules

Every example of these components follows these rules:

1. A closed trigger sets `aria-expanded="false"`.
2. Action Menu and Filter Menu triggers set `aria-haspopup="menu"`. Navigation Menu triggers set no `aria-haspopup`.
3. Every trigger sets `aria-controls` to the id of the element it opens. Each `role="menu"` element sets `aria-labelledby` to its trigger's id.
4. A filter trigger states that a filter is applied in its text, visibly, through visually hidden text, or both. It never uses `aria-pressed`.
5. Every `menuitemcheckbox` and `menuitemradio` sets `aria-checked`, checked or not.

## Release strategy

This is an additive minor release of `@ebay/skin`. Nothing is removed. Every deprecated selector and token override below keeps its styles until then. The deprecated names are removed in the next major version (milestone Major Release - 2027 Q1).

Removal has one prerequisite: the Marko and React packages still emit these classes. They must move to the new classes first, as #1069 records for `fake-menu`. That framework move is a breaking change scheduled for the same major release.

## Migration map

Status is "deprecated" unless noted. The new module column names where each use goes.

### `menu`

| Old                                                                 | New                                                | Notes                                                  |
| ------------------------------------------------------------------- | -------------------------------------------------- | ------------------------------------------------------ |
| `.menu`, `.menu__items[role="menu"]`                                | `.action-menu[role="menu"]`                        | The block itself is the menu, one element fewer        |
| `.menu__item`, `.menu__item--badged`                                | `.action-menu__item`, `.action-menu__item--badged` |                                                        |
| `.menu__item > svg.icon--16` (status tick)                          | `.action-menu__icon` on the icon                   | New element, so the module styles only its own classes |
| `.menu__item .badge`                                                | `.action-menu__badge` on the badge                 | New element, for the same reason                       |
| `.menu__items--scroll`                                              | `.action-menu--scroll`                             |                                                        |
| `.menu__items--fix-width`                                           | `.action-menu--fix-width`                          |                                                        |
| `.menu__items--reverse`                                             | `.menu-button__dropdown--reverse`                  | Positioning belongs to the popup                       |
| `.menu__separator`                                                  | `.action-menu__separator`                          |                                                        |
| `.menu--filter`, `.menu__footer`                                    | `.filter-menu`, `.filter-menu__footer`             | Filter choices and Apply belong to Filter Menu         |
| `.menu .expand-button--borderless`, `.menu .expand-btn--borderless` | `.menu-button` with a `button` trigger             | The trigger lives in `menu-button`                     |
| `fake-menu*`                                                        | `navigation-menu`                                  | Deprecated by ADR 0010; unchanged                      |

### `menu-button`

The block stays. Its older parts are deprecated, and they live in `menu-button/_menu-button-deprecated.scss` so they can be removed by deleting that file and its `@use` line.

| Old                                     | New                                              | Notes                                        |
| --------------------------------------- | ------------------------------------------------ | -------------------------------------------- |
| `.menu-button`                          | `.menu-button`                                   | Not deprecated                               |
| `.menu-button__button`                  | None                                             | Style the trigger with its own button module |
| `.menu-button__menu`, `--set-position`  | `.menu-button__dropdown`                         | Positioned below the trigger by default      |
| `.menu-button__menu--reverse`           | `.menu-button__dropdown--reverse`                |                                              |
| `.menu-button__menu--fix-width`         | `.action-menu--fix-width`                        | Item text truncation is not carried over     |
| `.menu-button__menu--scroll`            | `.action-menu--scroll`                           |                                              |
| `.menu-button__menu--static`, `--fixed` | None                                             | Positioning is left to the consumer          |
| `.menu-button__items`                   | `.action-menu`                                   |                                              |
| `.menu-button__item`, `--badged`        | `.action-menu__item`, `--badged`                 |                                              |
| `.menu-button__separator`               | `.action-menu__separator`                        |                                              |
| `.menu-button__footer`                  | `.filter-menu__footer`                           |                                              |
| `.menu-button__option--active`          | None                                             | Unused by any story or docs page             |
| `.menu-button--filter`                  | `.menu-button` + `.filter-chip` + `.filter-menu` |                                              |
| `fake-menu-button*`                     | `.menu-button` + `.navigation-menu`              | Not covered by #1069                         |

### `filter-menu-button`

| Old                                                                                   | New                                                                                      | Notes                                           |
| ------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ----------------------------------------------- |
| `.filter-menu-button`                                                                 | `.menu-button`                                                                           |                                                 |
| `.filter-menu-button__button`, `--selected`, `__button-cell`, `__button-text`         | `.filter-chip`, `.filter-chip--selected`, `.filter-chip__text`, `.filter-chip__trailing` |                                                 |
| `.filter-menu-button__menu`, `--set-position`                                         | `.menu-button__dropdown`                                                                 |                                                 |
| `.filter-menu-button__items`, `__item`, `__checkbox`, `__radio`, `__text`, `__footer` | `.filter-menu__items`, `__item`, `__checkbox`, `__radio`, `__text`, `__footer`           |                                                 |
| `div.filter-group`                                                                    | `div.filter-group`                                                                       | Not deprecated; also defined in `filter-button` |

### Token overrides

| Old                                                                                                                                  | New                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| `--menu-button-background-color`                                                                                                     | `--menu-background-color` for a standalone menu; none inside `.menu-button__dropdown`                           |
| `--menu-button-menuitem-border-color`, `--menu-button-menuitem-foreground-color`, `--menu-button-menuitem-disabled-foreground-color` | `--menu-menuitem-border-color`, `--menu-menuitem-foreground-color`, `--menu-menuitem-disabled-foreground-color` |
| `--menu-button-separator-color`                                                                                                      | `--menu-separator-color`                                                                                        |
| `--menu-button-menu-border-radius`, `--menu-button-foreground-color`, `--menu-button-anchor-color`                                   | None                                                                                                            |
| `--filter-menu-button-icon-color`, `--filter-button-*` on `filter-menu-button`                                                       | None; `filter-chip` reads design tokens only                                                                    |
| `--filter-menu-item-*` on `filter-menu-button`                                                                                       | The same `--filter-menu-item-*` tokens on `filter-menu`                                                         |

`action-menu` reads the existing `--menu-*` tokens, as `navigation-menu` does, so one override themes all three when they stand alone. Inside `.menu-button__dropdown`, the dropdown paints the surface with `--color-background-elevated` and sets `--menu-background-color`, `--menu-menuitem-border-color` and `--filter-menu-item-background-color` to `transparent` for the menu inside it, so overrides of those three tokens do not reach a menu in a dropdown.

### Entry points

`@ebay/skin/menu` and `@ebay/skin/filter-menu-button` stay and are deprecated. `@ebay/skin/menu-button` stays and is current; it also ships the deprecated `menu-button` parts until the major release. `@ebay/skin/action-menu` is new.

## Consequences

Each menu has its own module, Storybook entry and documentation, so a change to one cannot silently change another. Consumers compose a trigger, `menu-button` and a menu, so triggers and popups no longer need a variant per menu kind.

Markup is more explicit. A menu button now names its trigger module and its menu module, where the old `menu-button` markup implied both.

Until the major release, Skin ships both the old and new classes, so the CSS is larger in the meantime.

`.menu-button__menu` and `.menu-button__dropdown` render differently on purpose: 8px and 16px corners. Moving to `.menu-button__dropdown` changes that corner radius.

Deprecation is per class, not per component: `menu-button` stays, while `menu`, `fake-menu-button` and `filter-menu-button` are deprecated as whole components.
