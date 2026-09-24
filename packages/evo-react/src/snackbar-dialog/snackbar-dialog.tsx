import {
  useCallback,
  useEffect,
  useEffectEvent,
  useRef,
  useState,
} from "react";
import classNames from "classnames";
import { SnackbarDialogProvider } from "./context";
import type { EvoSnackbarDialogProps } from "./types";
import "@ebay/skin/snackbar-dialog.mjs";

const DISMISS_DELAY = 6000;

/**
 * Snackbars are nonmodal dialogs that appear after a lightweight user action.
 *
 * `EvoSnackbarDialog` closes after six seconds without focus or pointer hover.
 * Put the message in `EvoSnackbarDialogMain` and an optional
 * `EvoSnackbarDialogAction` inside `EvoSnackbarDialogActions`. The action
 * closes the dialog and calls `onAction`. Update `open` to show the snackbar
 * again; `onClose` lets the application synchronize its state.
 *
 * ## Usage
 *
 * ```tsx
 * import {
 *   EvoSnackbarDialog,
 *   EvoSnackbarDialogAction,
 *   EvoSnackbarDialogActions,
 *   EvoSnackbarDialogMain,
 * } from "@evo-web/react/snackbar-dialog";
 *
 * <EvoSnackbarDialog open={open} onClose={() => setOpen(false)}>
 *   <EvoSnackbarDialogMain>Item removed from your watchlist.</EvoSnackbarDialogMain>
 *   <EvoSnackbarDialogActions>
 *     <EvoSnackbarDialogAction onClick={undoRemoval}>Undo</EvoSnackbarDialogAction>
 *   </EvoSnackbarDialogActions>
 * </EvoSnackbarDialog>
 * ```
 *
 * @summary Timed, nonmodal feedback dialog with an optional action.
 */
export function EvoSnackbarDialog({
  a11yText = "Notification",
  animated = true,
  children,
  className,
  layout = "row",
  onAction,
  onBlurCapture,
  onClose,
  onFocusCapture,
  onMouseEnter,
  onMouseLeave,
  onOpen,
  open = false,
  ref,
  ...rest
}: EvoSnackbarDialogProps) {
  const [isOpen, setIsOpen] = useState(open);
  const [focused, setFocused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const previousOpen = useRef(false);
  const previousAnimatedOpen = useRef(open);
  const [animationPhase, setAnimationPhase] = useState<
    "hidden" | "show-init" | "shown" | "hide-init" | "hiding"
  >(open ? "shown" : "hidden");
  const notifyOpen = useEffectEvent(() => onOpen?.());
  const notifyClose = useEffectEvent(() => onClose?.());

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  useEffect(() => {
    if (previousAnimatedOpen.current === isOpen) {
      return;
    }
    previousAnimatedOpen.current = isOpen;

    if (!animated) {
      setAnimationPhase(isOpen ? "shown" : "hidden");
      return;
    }

    let firstFrame = 0;
    let secondFrame = 0;
    let hideTimer = 0;
    setAnimationPhase(isOpen ? "show-init" : "hide-init");
    firstFrame = window.requestAnimationFrame(() => {
      secondFrame = window.requestAnimationFrame(() => {
        setAnimationPhase(isOpen ? "shown" : "hiding");
      });
    });
    if (!isOpen) {
      hideTimer = window.setTimeout(() => setAnimationPhase("hidden"), 250);
    }
    return () => {
      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);
      window.clearTimeout(hideTimer);
    };
  }, [isOpen, animated]);

  useEffect(() => {
    if (previousOpen.current !== isOpen) {
      if (isOpen) {
        notifyOpen();
      } else {
        notifyClose();
      }
      previousOpen.current = isOpen;
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || focused || hovered) {
      return;
    }
    const timer = window.setTimeout(() => setIsOpen(false), DISMISS_DELAY);
    return () => window.clearTimeout(timer);
  }, [isOpen, focused, hovered]);

  const close = useCallback(() => setIsOpen(false), []);

  return (
    <SnackbarDialogProvider close={close} onAction={onAction}>
      <aside
        {...rest}
        ref={ref}
        role="dialog"
        aria-label={a11yText}
        aria-modal="false"
        aria-live="polite"
        hidden={animationPhase === "hidden"}
        aria-hidden={!isOpen || undefined}
        className={classNames(
          "snackbar-dialog",
          animated && "snackbar-dialog--transition",
          animated &&
            animationPhase === "show-init" &&
            "snackbar-dialog--show-init",
          animated && animationPhase === "shown" && "snackbar-dialog--show",
          animated &&
            animationPhase === "hide-init" &&
            "snackbar-dialog--hide-init",
          animated && animationPhase === "hiding" && "snackbar-dialog--hide",
          className,
        )}
        onFocusCapture={(event) => {
          setFocused(true);
          onFocusCapture?.(event);
        }}
        onBlurCapture={(event) => {
          if (
            !event.currentTarget.contains(event.relatedTarget as Node | null)
          ) {
            setFocused(false);
          }
          onBlurCapture?.(event);
        }}
        onMouseEnter={(event) => {
          setHovered(true);
          onMouseEnter?.(event);
        }}
        onMouseLeave={(event) => {
          setHovered(false);
          onMouseLeave?.(event);
        }}
      >
        <div
          className={classNames(
            "snackbar-dialog__window",
            layout === "column" && "snackbar-dialog__window--column",
          )}
        >
          {children}
        </div>
      </aside>
    </SnackbarDialogProvider>
  );
}
