import type { ReactNode } from "react";
import type { Strategy } from "@floating-ui/react";
import classNames from "classnames";
import { useExpander } from "../utils/use-expander";
import type { DatePopoverState } from "./use-date-popover";

export type DatePopoverStrategy = Extract<Strategy, "absolute" | "fixed">;

type DateInputPopoverProps = {
  popoverId: string;
  strategy: DatePopoverStrategy;
  expander: ReturnType<typeof useExpander>;
  children: ReactNode;
};

export function useDatePopoverPosition(
  {
    open,
    setOpen,
    positioningReferenceElement,
  }: Pick<DatePopoverState, "open" | "setOpen" | "positioningReferenceElement">,
  strategy: DatePopoverStrategy,
) {
  const expander = useExpander({
    open,
    onOpenChange: setOpen,
    placement: "bottom-start",
    strategy,
    inline: false,
    referenceElement: positioningReferenceElement,
  });

  return expander;
}

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
