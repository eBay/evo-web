import type { ReactNode } from "react";
import classNames from "classnames";
import type { useDatePopover } from "./use-date-popover";

type DateInputPopoverProps = {
  popoverId: string;
  strategy?: "absolute" | "fixed";
  expander: ReturnType<typeof useDatePopover>["expander"];
  children: ReactNode;
};

export function DateInputPopover({
  popoverId,
  strategy,
  expander,
  children,
}: DateInputPopoverProps) {
  return (
    <div
      id={popoverId}
      hidden={!expander.open}
      ref={expander.refs.setFloating}
      style={expander.floatingStyles}
      className={classNames(
        "date-textbox__popover",
        strategy === "fixed" && "date-textbox__popover--fixed",
      )}
    >
      {children}
    </div>
  );
}

export function focusPopoverTrigger(
  expander: ReturnType<typeof useDatePopover>["expander"],
) {
  const trigger = expander.refs.reference.current;
  if (trigger instanceof HTMLElement) {
    trigger.focus();
  }
}
