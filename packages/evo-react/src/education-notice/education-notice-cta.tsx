import classNames from "classnames";
import { useEducationNotice } from "./context";
import type { EvoEducationNoticeCTAProps } from "./types";

/**
 * Action paragraph for `EvoEducationNotice`; put a link or button inside it.
 *
 * @summary Call to action region of an education notice.
 */
export function EvoEducationNoticeCTA({
  children,
  className,
  onClick,
  ref,
  ...rest
}: EvoEducationNoticeCTAProps) {
  const notice = useEducationNotice();
  return (
    // The nested link or button handles keyboard activation; its click bubbles here.
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    <p
      {...rest}
      ref={ref}
      className={classNames("education-notice__cta", className)}
      onClick={(event) => {
        onClick?.(event);
        if (
          event.target instanceof Element &&
          event.target.closest("a, button")
        ) {
          notice.onCtaClick?.(event);
        }
      }}
    >
      {children}
    </p>
  );
}
