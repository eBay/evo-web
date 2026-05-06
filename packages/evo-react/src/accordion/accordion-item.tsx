import { EvoDetails } from "../details/details";
import type { EvoAccordionItemProps } from "./types";
import { useAccordionContext } from "./context";

export function EvoAccordionItem({
  id,
  children,
  onOpenChange,
  ...rest
}: EvoAccordionItemProps) {
  const { open, isControlled, onItemToggle } = useAccordionContext();
  const isOpen = Array.isArray(open) ? open.includes(id) : open === id;

  return (
    <li>
      <EvoDetails
        {...rest}
        open={isOpen}
        onToggle={(event, data) => {
          onItemToggle(id, data.open);
          onOpenChange?.(data.open);

          // For controlled details, React doesn't properly reflect the VDOM "open"
          // attribute with the HTML "open" attribute. Here we force the HTML to reflect
          // the controlled state.
          // TODO: Move this to EvoDetails after adding support to defaultOpen
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
