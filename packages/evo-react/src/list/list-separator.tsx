import type { EvoListSeparatorProps } from "./types";

/**
 * Separates adjacent `EvoListItem` children with a native `<hr>`. The
 * decorative `<li>` keeps the parent `<ul>` valid for assistive technology.
 *
 * @summary List separator.
 */
export function EvoListSeparator({ style, ...rest }: EvoListSeparatorProps) {
  return (
    <li aria-hidden="true" style={{ display: "contents" }}>
      <hr
        {...rest}
        style={{
          backgroundColor: "transparent",
          boxSizing: "content-box",
          display: "block",
          fontSize: "inherit",
          marginBlock: "0.5em",
          minHeight: 0,
          width: "auto",
          ...style,
        }}
      />
    </li>
  );
}
