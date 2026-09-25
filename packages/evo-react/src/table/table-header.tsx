import classNames from "classnames";
import { EvoIconSort12 } from "../icon/icons/sort-12";
import { EvoIconSortDown12 } from "../icon/icons/sort-down-12";
import { EvoIconSortUp12 } from "../icon/icons/sort-up-12";
import type { EvoTableHeaderProps, TableSort } from "./types";

const ariaSort: Record<TableSort, "none" | "ascending" | "descending"> = {
  none: "none",
  asc: "ascending",
  desc: "descending",
};

const nextSort: Record<TableSort, TableSort> = {
  none: "asc",
  asc: "desc",
  desc: "none",
};

/**
 * Column heading. When `sort` is supplied, it renders a native button that
 * requests the next direction through `onSortChange`. The application owns
 * sorting the rows and updating `sort`.
 *
 * @summary Column heading cell of a table.
 */
export function EvoTableHeader({
  children,
  className,
  columnType,
  href,
  onSortChange,
  scope = "col",
  sort,
  ...rest
}: EvoTableHeaderProps) {
  const sortIcon =
    sort === "asc" ? (
      <EvoIconSortDown12 />
    ) : sort === "desc" ? (
      <EvoIconSortUp12 />
    ) : sort === "none" ? (
      <EvoIconSort12 />
    ) : null;
  const content = href ? (
    <a
      href={href}
      onClick={() => sort !== undefined && onSortChange?.(nextSort[sort])}
    >
      {children}
      {sortIcon && <> {sortIcon}</>}
    </a>
  ) : sort !== undefined ? (
    <button type="button" onClick={() => onSortChange?.(nextSort[sort])}>
      {children}
      {sortIcon && <> {sortIcon}</>}
    </button>
  ) : (
    children
  );

  return (
    <th
      {...rest}
      scope={scope}
      aria-sort={sort === undefined ? undefined : ariaSort[sort]}
      className={classNames(
        "table-cell",
        columnType && `table-cell--${columnType}`,
        className,
      )}
    >
      {columnType === "layout" ? (
        <div className="table-cell__layout">{content}</div>
      ) : (
        content
      )}
    </th>
  );
}
