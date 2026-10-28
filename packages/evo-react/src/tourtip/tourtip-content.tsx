import classNames from "classnames";
import { useTourtip } from "./context";
import type { EvoTourtipContentProps } from "./types";
import { EvoIconButton } from "../icon-button/icon-button";
import { EvoIconClose16 } from "../icon/icons/close-16";

/**
 * Tourtip body and close button. Place it inside `EvoTourtipOverlay`, before
 * any `EvoTourtipFooter`. Start with `EvoTourtipHeading` when the tourtip has a
 * heading.
 *
 * @summary Tourtip body and close button.
 */
export function EvoTourtipContent({
  className,
  children,
  ...rest
}: EvoTourtipContentProps) {
  const { close, a11yCloseText } = useTourtip();

  return (
    <>
      <span {...rest} className={classNames("tourtip__content", className)}>
        {children}
      </span>
      <EvoIconButton
        a11yText={a11yCloseText}
        className="tourtip__close"
        transparent
        onClick={close}
      >
        <EvoIconClose16 />
      </EvoIconButton>
    </>
  );
}
