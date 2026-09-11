import { EvoIconCalendar24 } from "../icon/icons/calendar-24";
import { DateField } from "../date-input/date-field";
import { useDateRangeInputContext } from "./context";
import type { EvoDateRangeInputProps } from "./types";

export function EvoDateRangeInput({
  type,
  className,
  style,
  ref,
  ...input
}: EvoDateRangeInputProps) {
  const context = useDateRangeInputContext();
  const isEnd = type === "end";
  const iso = isEnd ? context.selected?.to : context.selected?.from;

  return (
    <DateField
      iso={iso}
      locale={context.locale}
      disabled={context.disabled}
      readOnly={context.readOnly}
      index={isEnd ? 1 : 0}
      input={{ ...input, className, style, ref }}
      onCommit={isEnd ? context.commitEnd : context.commitStart}
      onInvalidDate={context.onInvalidDate}
      postfix={
        isEnd
          ? {
              icon: <EvoIconCalendar24 />,
              buttonProps: {
                a11yText: context.a11yOpenPopoverText,
                ref: context.setTriggerElement,
                "aria-expanded": context.open,
                "aria-controls": context.popoverId,
                disabled: Boolean(context.disabled || context.readOnly),
                onClick: () => {
                  if (!context.disabled && !context.readOnly) {
                    context.setOpen(!context.open);
                  }
                },
              },
            }
          : undefined
      }
    />
  );
}
