import type { ReactNode } from "react";
import classNames from "classnames";
import { useExpander } from "../utils/use-expander";
import type { DatePopoverState } from "./use-date-popover";

type DateInputPopoverProps = {
  popoverId: string;
  detachPopover?: boolean;
  expander: ReturnType<typeof useExpander>;
  children: ReactNode;
};

export function useDatePopoverPosition(
  {
    open,
    setOpen,
    positioningReferenceElement,
  }: Pick<DatePopoverState, "open" | "setOpen" | "positioningReferenceElement">,
  detachPopover?: boolean,
) {
  const expander = useExpander({
    open,
    onOpenChange: setOpen,
    placement: "bottom-start",
    detachPopover,
    inline: false,
    referenceElement: positioningReferenceElement,
  });

  return expander;
}

export function DateInputPopover({
  popoverId,
  detachPopover,
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
        detachPopover && "date-textbox__popover--fixed",
      )}
    >
      {children}
    </div>
  );
}
