import { EvoCalendar } from "../calendar";
import type { DateRange } from "../calendar";
import {
  DateInputPopover,
  useDatePopoverPosition,
} from "../date-input/date-input-popover";
import { useDateRangeInputContext } from "./context";
import type {
  DateInputRange,
  EvoDateRangeInputCalendarPopoverProps,
} from "./types";
import {
  monthFromValue,
  useFollowSelectedMonth,
} from "../date-input/visible-month";
import { useResponsiveMonthCount } from "../date-input/use-date-popover";

function toCalendarRange(
  selected: DateInputRange | undefined,
): DateRange | undefined {
  if (!selected) {
    return undefined;
  }

  const from = selected.from || undefined;
  const to = selected.to || undefined;
  if (!from && !to) {
    return undefined;
  }

  return { from, to };
}

export function EvoDateRangeInputCalendarPopover({
  strategy = "absolute",
  ...calendar
}: EvoDateRangeInputCalendarPopoverProps) {
  const context = useDateRangeInputContext();
  const expander = useDatePopoverPosition(context, strategy);
  const visibleMonthCount = useResponsiveMonthCount(calendar.visibleMonthCount);
  const { visibleMonth, setVisibleMonth } = useFollowSelectedMonth(
    monthFromValue(context.selected),
    calendar.visibleMonth,
    calendar.defaultVisibleMonth ?? monthFromValue(calendar.today),
  );

  return (
    <DateInputPopover
      popoverId={context.popoverId}
      strategy={strategy}
      expander={expander}
    >
      <EvoCalendar
        {...calendar}
        locale={context.locale}
        selectMode="range"
        selected={toCalendarRange(context.selected)}
        visibleMonth={visibleMonth}
        visibleMonthCount={visibleMonthCount}
        onVisibleMonthChange={(next) => {
          if (calendar.visibleMonth === undefined) {
            setVisibleMonth(next);
          }
          calendar.onVisibleMonthChange?.(next);
        }}
        onSelectedChange={(next) => {
          if (context.disabled || context.readOnly) {
            return;
          }

          context.commitRange({
            from: next.from ?? "",
            to: next.to ?? "",
          });
          if (context.collapseOnSelect && next.from && next.to) {
            context.setOpen(false);
            context.focusTrigger();
          }
        }}
      />
    </DateInputPopover>
  );
}
