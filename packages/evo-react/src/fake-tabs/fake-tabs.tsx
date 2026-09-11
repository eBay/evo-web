import classNames from "classnames";
import { FakeTabsProvider } from "./context";
import type { EvoFakeTabsProps } from "./types";
import "@ebay/skin/tabs.mjs";

/**
 * Fake tabs provide tab-styled navigation between URLs.
 *
 * Each tab navigates, and selection reflects the current route. Fake tabs do
 * not implement tab keyboard behavior; `tabMatchesCurrentUrl` controls the
 * `aria-current` semantics. Use `selected` from the current route and omit a
 * tab's `href` to mark it unavailable.
 *
 * ## Usage
 *
 * ```tsx
 * import {
 *   EvoFakeTab,
 *   EvoFakeTabList,
 *   EvoFakeTabs,
 * } from "@evo-web/react/fake-tabs";
 *
 * <EvoFakeTabs selected="overview">
 *   <EvoFakeTabList>
 *     <EvoFakeTab id="overview" href="/overview">
 *       Overview
 *     </EvoFakeTab>
 *   </EvoFakeTabList>
 * </EvoFakeTabs>
 * ```
 *
 * @summary URL-based tab navigation.
 */
export function EvoFakeTabs({
  selected,
  size = "regular",
  tabMatchesCurrentUrl = true,
  className,
  children,
  ...rest
}: EvoFakeTabsProps) {
  const ariaCurrent = tabMatchesCurrentUrl ? "page" : "true";

  return (
    <FakeTabsProvider selected={selected} ariaCurrent={ariaCurrent}>
      <div
        {...rest}
        className={classNames(
          "fake-tabs",
          size === "large" && "fake-tabs--large",
          className,
        )}
      >
        {children}
      </div>
    </FakeTabsProvider>
  );
}
