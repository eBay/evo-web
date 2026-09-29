import classNames from "classnames";
import type { ElementType } from "react";
import { useTourtip } from "./context";
import type { EvoTourtipHeadingProps } from "./types";

/**
 * Optional heading, placed first inside `EvoTourtipContent`. It automatically
 * labels the tourtip region. Use `as` to match the page heading hierarchy.
 * When providing a custom `id`, pass it as `aria-labelledby` to
 * `EvoTourtipOverlay` as well.
 *
 * @summary Heading that names a tourtip region.
 */
export function EvoTourtipHeading<T extends ElementType = "h2">({
  as,
  id,
  className,
  children,
  ...rest
}: EvoTourtipHeadingProps<T>) {
  const { headingId, setHeadingId } = useTourtip();
  if (id) {
    setHeadingId(id);
  }
  const Component = (as ?? "h2") as ElementType;
  return (
    <Component
      {...rest}
      id={id ?? headingId}
      className={classNames("tourtip__heading", className)}
    >
      {children}
    </Component>
  );
}
