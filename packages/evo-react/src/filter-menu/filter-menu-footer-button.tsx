import classNames from "classnames";
import { useFilterMenu } from "./context";
import type { EvoFilterMenuFooterButtonProps } from "./types";

/**
 * Footer action for `EvoFilterMenu`. In form mode it submits the form;
 * otherwise it reports the current selection through `onFooterClick`.
 *
 * @summary Filter menu footer action.
 */
export function EvoFilterMenuFooterButton({
  children,
  className,
  onClick,
  ref,
  ...rest
}: EvoFilterMenuFooterButtonProps) {
  const { isForm, baseClass, selection, onFooterClick } = useFilterMenu();
  return (
    <button
      {...rest}
      ref={ref}
      type={isForm ? "submit" : "button"}
      className={classNames(`${baseClass}__footer`, className)}
      onClick={(event) => {
        onClick?.(event);
        if (!isForm && !event.defaultPrevented) {
          onFooterClick?.(event, selection());
        }
      }}
    >
      {children}
    </button>
  );
}
