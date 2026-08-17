import classNames from "classnames";
import { FakeTabsProvider } from "./context";
import type { EvoFakeTabsProps } from "./types";
import "@ebay/skin/tabs.mjs";

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
