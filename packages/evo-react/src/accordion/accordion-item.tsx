import { EvoDetails } from "../details/details";
import type { EvoAccordionItemProps } from "./types";
import { useAccordionContext } from "./context";

/**
 * An accordion item contains a summary and its associated content. Its `id`
 * lets `EvoAccordion` track the item's open state.
 *
 * @summary Accordion section.
 */
export function EvoAccordionItem({
  id,
  children,
  onOpenChange,
  ...rest
}: EvoAccordionItemProps) {
  const { open, isControlled, a11yHeadingTag, onItemToggle } =
    useAccordionContext();
  const isOpen = Array.isArray(open) ? open.includes(id) : open === id;

  return (
    <li>
      <EvoDetails
        {...rest}
        a11yHeadingTag={a11yHeadingTag}
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
