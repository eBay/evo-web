import classNames from "classnames";
import { usePageNotice } from "./context";
import type { EvoPageNoticeCTAProps } from "./types";

/**
 * Action paragraph for `EvoPageNotice`; put a link or button inside it.
 *
 * @summary Call to action region of a page notice.
 */
export function EvoPageNoticeCTA({
  children,
  className,
  onClick,
  ref,
  ...rest
}: EvoPageNoticeCTAProps) {
  const notice = usePageNotice();
  return (
    // The nested link or button handles keyboard activation; its click bubbles here.
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    <p
      {...rest}
      ref={ref}
      className={classNames("page-notice__cta", className)}
      onClick={(event) => {
        onClick?.(event);
        if (
          event.target instanceof Element &&
          event.target.closest("a, button")
        ) {
          notice?.onCtaClick?.(event);
        }
      }}
    >
      {children}
    </p>
  );
}
