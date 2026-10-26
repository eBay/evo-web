/* eslint-disable jsx-a11y/no-static-element-interactions -- The root span delegates Escape from its interactive descendants. */
import { useCallback, useId, useRef } from "react";
import type { KeyboardEvent } from "react";
import classNames from "classnames";
import { TourtipProvider } from "./context";
import type { EvoTourtipProps } from "./types";
import { useControllableId } from "../utils/use-controllable-id";
import { useExpander } from "../utils/use-expander";
import "@ebay/skin/tourtip.mjs";

/**
 * A tourtip highlights a feature or guides users through an experience.
 *
 * `EvoTourtip` starts open by default. Use `open` and `onOpenChange` for
 * controlled visibility. Compose a host and an overlay in DOM order. The
 * overlay contains the content, which starts with an optional heading, and an
 * optional footer. The host defaults to a `<span>`; choose an interactive `as`
 * element when the host is an action. Closing the tourtip restores focus when
 * the host is focusable.
 *
 * ## Usage
 *
 * ```tsx
 * import {
 *   EvoTourtip,
 *   EvoTourtipContent,
 *   EvoTourtipFooter,
 *   EvoTourtipHeading,
 *   EvoTourtipHost,
 *   EvoTourtipOverlay,
 * } from "@evo-web/react/tourtip";
 * import { EvoButton } from "@evo-web/react/button";
 *
 * <EvoTourtip a11yCloseText="Dismiss guide">
 *   <EvoTourtipHost as={EvoButton}>Seller tools</EvoTourtipHost>
 *   <EvoTourtipOverlay>
 *     <EvoTourtipContent>
 *       <EvoTourtipHeading>Manage your listings</EvoTourtipHeading>
 *       <p>Find your listing tools here.</p>
 *     </EvoTourtipContent>
 *     <EvoTourtipFooter index="1 of 3">
 *       <EvoButton>Next</EvoButton>
 *     </EvoTourtipFooter>
 *   </EvoTourtipOverlay>
 * </EvoTourtip>
 * ```
 *
 * @summary Guided information anchored to a host.
 */
export function EvoTourtip({
  open,
  defaultOpen = true,
  onOpenChange,
  placement = "top",
  offset = 6,
  flip = true,
  shift = false,
  inline = true,
  a11yCloseText = "Dismiss tourtip",
  className,
  children,
  onKeyDown,
  ref,
  ...rest
}: EvoTourtipProps) {
  const overlayId = useId();
  const [headingId, setHeadingId] = useControllableId();
  const hostRef = useRef<HTMLElement>(null);
  const expander = useExpander({
    open,
    defaultOpen,
    onOpenChange,
    placement,
    strategy: "absolute",
    offset,
    flip,
    shift,
    inline,
  });
  const close = useCallback(() => {
    expander.setOpen(false);
    hostRef.current?.focus();
  }, [expander.setOpen]);
  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLSpanElement>) => {
      onKeyDown?.(event);
      if (event.key === "Escape" && expander.open && !event.defaultPrevented) {
        close();
      }
    },
    [close, expander.open, onKeyDown],
  );

  return (
    <TourtipProvider
      open={expander.open}
      close={close}
      a11yCloseText={a11yCloseText}
      overlayId={overlayId}
      headingId={headingId}
      setHeadingId={setHeadingId}
      hostRef={hostRef}
      setReference={expander.refs.setReference}
      setFloating={expander.refs.setFloating}
      arrowRef={expander.refs.arrow}
      floatingStyles={expander.floatingStyles}
      arrowStyles={expander.arrowStyles}
    >
      <span
        {...rest}
        ref={ref}
        className={classNames(
          "tourtip",
          expander.open && "tourtip--expanded",
          className,
        )}
        onKeyDown={handleKeyDown}
      >
        {children}
      </span>
    </TourtipProvider>
  );
}
