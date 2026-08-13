import type { ComponentProps, ComponentType } from "react";

/** A value that uniquely identifies a fake tab and matches it to the EvoFakeTabs selected prop. */
export type FakeTabId = string | number;

/** Size of the fake tab strip. */
export type Size = "regular" | "large";

export type EvoFakeTabsProps = ComponentProps<"div"> & {
  /**
   * The id of the currently selected tab.
   * Pass `null` explicitly when no tab corresponds to the current page.
   */
  selected: FakeTabId | null;
  /** Size of the tab strip. Defaults to `"regular"`. */
  size?: Size;
  /**
   * Controls the `aria-current` value on the selected tab link.
   * When `true` (default), the selected link gets `aria-current="page"`.
   * When `false`, it gets `aria-current="true"`.
   */
  tabMatchesCurrentUrl?: boolean;
};

export type EvoFakeTabListProps = ComponentProps<"ul">;

export type EvoFakeTabProps = Omit<
  ComponentProps<"a">,
  "aria-current" | "aria-disabled" | "href" | "id"
> & {
  /** Unique identifier matching this tab to the parent EvoFakeTabs `selected` prop. */
  id: FakeTabId;
  /** Link destination. Omit to disable the tab. */
  href?: string;
  /**
   * Custom component used in place of the native anchor, such as a framework Link.
   * The component receives `href` and all other anchor-compatible props.
   */
  as?: ComponentType<ComponentProps<"a">>;
};

export type EvoFakeTabPanelProps = ComponentProps<"div">;
