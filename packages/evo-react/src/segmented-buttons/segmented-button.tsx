import classNames from "classnames";
import { useSegmentedButtonsContext } from "./context";
import type { EvoSegmentedButtonProps } from "./types";

/**
 * One button in `EvoSegmentedButtons`. Its `value` determines whether it has
 * `aria-current="true"`. Use `icon` for a leading icon beside the label.
 *
 * @summary Selectable segment in a button group.
 */
export function EvoSegmentedButton({
  value,
  icon,
  children,
  className,
  onClick,
  type = "button",
  ...rest
}: EvoSegmentedButtonProps) {
  const group = useSegmentedButtonsContext();

  return (
    <li>
      <button
        {...rest}
        type={type}
        className={classNames("segmented-buttons__button", className)}
        aria-current={Object.is(group.selected, value) || undefined}
        onClick={(event) => {
          onClick?.(event);
          if (!event.defaultPrevented) group.select(value);
        }}
      >
        {icon ? (
          <span className="segmented-buttons__button-cell">
            {icon}
            <span>{children}</span>
          </span>
        ) : (
          children
        )}
      </button>
    </li>
  );
}
