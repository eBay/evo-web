import classNames from "classnames";
import type { EvoFakeLinkProps } from "./types";
import "@ebay/skin/link.mjs";

/**
 * Fake links style a button to look like a link for an in-page action.
 *
 * `EvoFakeLink` keeps native button behavior and defaults to `type="button"`
 * so it does not submit a surrounding form. It forwards native button props
 * and a React 19 `ref`.
 *
 * ## Usage
 *
 * ```tsx
 * import { EvoFakeLink } from "@evo-web/react/fake-link";
 *
 * <EvoFakeLink onClick={showSellerDetails}>
 *   View seller details
 * </EvoFakeLink>
 * ```
 *
 * @summary Button with link styling for an in-page action.
 */
export function EvoFakeLink({
  variant,
  type = "button",
  className,
  ...rest
}: EvoFakeLinkProps) {
  return (
    <button
      {...rest}
      className={classNames(
        "fake-link",
        variant === "standalone" && "standalone-link",
        className,
      )}
      type={type}
    />
  );
}
