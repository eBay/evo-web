import { useCallback } from "react";
import classNames from "classnames";
import { InfotipProvider } from "./context";
import type { EvoInfotipProps } from "./types";
import { EvoIconClose16 } from "../icon/icons/close-16";
import { EvoIconInformation16 } from "../icon/icons/information-16";
import { EvoIconButton } from "../icon-button/icon-button";
import { useControllableId } from "../utils/use-controllable-id";
import { useExpander } from "../utils/use-expander";
import "@ebay/skin/infotip.mjs";

export function EvoInfotip({
  open,
  defaultOpen = false,
  onOpenChange,
  placement = "bottom",
  offset = 8,
  flip = true,
  shift = true,
  disabled,
  icon = <EvoIconInformation16 />,
  a11yIconText = "Help",
  a11yCloseText = "Dismiss infotip",
  className,
  children,
  ...rest
}: EvoInfotipProps) {
  const [headingId, setHeadingId] = useControllableId();
  const expander = useExpander({
    open,
    defaultOpen,
    onOpenChange,
    placement,
    strategy: "absolute",
    offset,
    flip,
    shift,
    // The fixed-size icon button has one rectangle, so inline positioning is unnecessary.
    inline: false,
  });

  const close = useCallback(() => {
    expander.setOpen(false);
    const trigger = expander.refs.reference.current;
    if (trigger instanceof HTMLElement) {
      trigger.focus();
    }
  }, [expander.refs.reference, expander.setOpen]);

  return (
    <InfotipProvider headingId={headingId} setHeadingId={setHeadingId}>
      <span {...rest} className={classNames("infotip", className)}>
        <EvoIconButton
          ref={expander.refs.setReference}
          className="infotip__host"
          transparent
          disabled={disabled}
          a11yText={a11yIconText}
          aria-expanded={expander.ariaExpanded}
          onClick={() => expander.setOpen(!expander.open)}
        >
          {icon}
        </EvoIconButton>
        <span
          ref={expander.refs.setFloating}
          className="infotip__overlay"
          style={expander.floatingStyles}
          role="tooltip"
          aria-labelledby={headingId}
        >
          <span
            ref={expander.refs.arrow}
            className="infotip__pointer"
            style={expander.arrowStyles}
          />
          <span className="infotip__mask">
            <span className="infotip__cell">
              <span className="infotip__content">{children}</span>
              <EvoIconButton
                a11yText={a11yCloseText}
                className="infotip__close"
                transparent
                onClick={close}
              >
                <EvoIconClose16 />
              </EvoIconButton>
            </span>
          </span>
        </span>
      </span>
    </InfotipProvider>
  );
}
