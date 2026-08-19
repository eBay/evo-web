import classNames from "classnames";
import { useInfotipContext } from "./context";
import type { EvoInfotipHeadingProps } from "./types";

export function EvoInfotipHeading({
  as: As = "span",
  id,
  className,
  children,
  ...rest
}: EvoInfotipHeadingProps) {
  const { headingId, setHeadingId } = useInfotipContext();
  const resolvedId = id ?? headingId;

  if (id) {
    setHeadingId(id);
  }

  return (
    <As
      {...rest}
      id={resolvedId}
      className={classNames("infotip__heading", className)}
    >
      {children}
    </As>
  );
}
