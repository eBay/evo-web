import classNames from "classnames";
import { useTourtip, TourtipHeadingProvider } from "./context";
import type { EvoTourtipContentProps } from "./types";
import { useControllableId } from "../utils/use-controllable-id";
import { useRefTee } from "../utils/use-ref-tee";
import { EvoIconClose16 } from "../icon/icons/close-16";

/**
 * Positioned tourtip region. Pass `heading` and `footer` as named slots so the
 * heading labels the region and the footer follows the close button in the DOM.
 * When omitting `heading`, give the region an accessible `aria-label`. If the
 * heading has a custom `id`, also set the matching `aria-labelledby` here for
 * server rendering.
 *
 * @summary Tourtip overlay, body, and close button.
 */
export function EvoTourtipContent({
  heading,
  footer,
  children,
  className,
  style,
  ref,
  "aria-labelledby": inputLabelledBy,
  ...rest
}: EvoTourtipContentProps) {
  const {
    close,
    a11yCloseText,
    overlayId,
    setFloating,
    arrowRef,
    floatingStyles,
    arrowStyles,
  } = useTourtip();
  const [headingId, setHeadingId] = useControllableId();
  const [floatingRef] = useRefTee([setFloating, ref], null);

  return (
    <TourtipHeadingProvider headingId={headingId} setHeadingId={setHeadingId}>
      <span
        {...rest}
        id={overlayId}
        ref={floatingRef}
        role="region"
        aria-labelledby={inputLabelledBy ?? (heading ? headingId : undefined)}
        className={classNames("tourtip__overlay", className)}
        style={{ ...style, ...floatingStyles }}
      >
        <span ref={arrowRef} className="tourtip__pointer" style={arrowStyles} />
        <span className="tourtip__mask">
          <span className="tourtip__cell">
            <span className="tourtip__content">
              {heading}
              {children}
            </span>
            <button
              type="button"
              aria-label={a11yCloseText}
              className="icon-btn icon-btn--transparent tourtip__close"
              onClick={close}
            >
              <EvoIconClose16 />
            </button>
            {footer}
          </span>
        </span>
      </span>
    </TourtipHeadingProvider>
  );
}
