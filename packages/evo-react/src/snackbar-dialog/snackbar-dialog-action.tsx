import classNames from "classnames";
import { useSnackbarDialog } from "./context";
import type { EvoSnackbarDialogActionProps } from "./types";

/**
 * Fake link action that closes `EvoSnackbarDialog` when activated.
 *
 * @summary Optional action for a snackbar dialog.
 */
export function EvoSnackbarDialogAction({
  a11yText,
  children,
  className,
  onClick,
  ref,
  ...rest
}: EvoSnackbarDialogActionProps) {
  const { close, onAction } = useSnackbarDialog();
  return (
    <button
      {...rest}
      ref={ref}
      type="button"
      aria-label={a11yText}
      className={classNames("fake-link", className)}
      onClick={(event) => {
        onClick?.(event);
        onAction?.(event);
        close();
      }}
    >
      {children}
      {rest.accessKey && (
        <span className="clipped"> - Access Key: {rest.accessKey}</span>
      )}
    </button>
  );
}
