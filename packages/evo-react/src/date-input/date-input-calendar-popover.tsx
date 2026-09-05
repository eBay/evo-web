import { EvoCalendar } from "../calendar";
import { DateInputPopover, useDatePopoverPosition } from "./date-input-popover";
import { useDateInputContext } from "./context";
import type { EvoDateInputCalendarPopoverProps } from "./types";
import { monthFromValue, useFollowSelectedMonth } from "./visible-month";
import { useResponsiveMonthCount } from "./use-date-popover";

export function EvoDateInputCalendarPopover({
  strategy = "absolute",
  ...calendar
}: EvoDateInputCalendarPopoverProps) {
  const context = useDateInputContext();
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
        selectMode="day"
        selected={context.selected || undefined}
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

          context.commit(next);
          if (context.collapseOnSelect) {
            context.setOpen(false);
            context.focusTrigger();
          }
        }}
      />
    </DateInputPopover>
  );
}
