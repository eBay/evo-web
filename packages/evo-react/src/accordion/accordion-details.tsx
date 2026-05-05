import { EvoDetails } from "../details/details";
import type { EvoAccordionDetailsProps } from "./types";
import { useAccordionContext } from "./context";

export function EvoAccordionDetails({
  id,
  children,
  ...rest
}: EvoAccordionDetailsProps) {
  const { open, isControlled, onItemToggle } = useAccordionContext();
  const isOpen = Array.isArray(open) ? open.includes(id) : open === id;

  return (
    <li>
      <EvoDetails
        {...rest}
        open={isOpen}
        onToggle={(event, data) => {
          onItemToggle(id, data.open);

          if (isControlled && event.currentTarget.open !== isOpen) {
            event.currentTarget.open = isOpen;
          }
        }}
      >
        {children}
      </EvoDetails>
    </li>
  );
}
